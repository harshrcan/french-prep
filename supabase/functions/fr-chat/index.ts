// fr-chat: French roleplay partner for the Académie de français app.
// Auth: the app's own session token (checked by public.fr_chat_ok, which also enforces a daily limit).
// Secrets: ANTHROPIC_API_KEY (required), CHAT_USERS (comma-separated app usernames allowed to chat), CHAT_MODEL (optional).
const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
const json = (b: unknown, status = 200) => new Response(JSON.stringify(b), { status, headers: { ...CORS, "Content-Type": "application/json" } });

const SCENARIOS: Record<string, string> = {
  cafe: "You are Inès, a friendly server in a café in Montréal. The learner is a customer ordering food and drinks, asking about prices, and paying.",
  appart: "You are M. Gagnon, a landlord showing a 3½ apartment in Montréal. The learner is a prospective tenant asking about rent, heating, the neighbourhood, and the lease.",
  medecin: "You are Dr. Roy at a walk-in clinic. The learner is a patient describing symptoms (how long, where it hurts). Ask follow-up questions and give simple advice.",
  entretien: "You are Mme Lefebvre, hiring manager at an IT company in Québec. Run a friendly job interview for a junior IT support role: experience, skills, availability, why Québec.",
  ami: "You are Sam, the learner's French-speaking friend. You meet for coffee and ask about their last weekend and recent experiences. Encourage passé composé and imparfait.",
  voyage: "You are Léa, a friend planning a trip with the learner next summer. Discuss where you will go, what you will do, budget and dates. Encourage futur simple and futur proche.",
  plainte: "You are a customer service agent at an electronics store. The learner bought something that doesn't work and wants an exchange or refund. Be polite but ask for details (date, receipt, problem).",
  tcf: "You are a TCF Canada speaking examiner for Task 2 (interaction). Set a short situation in your first message (e.g. the learner wants to join a sports club and asks you questions). Answer the learner's questions naturally, as the person in the situation.",
  libre: "You are Camille, a warm, curious French speaker from Québec chatting freely with the learner about their life, studies, work and opinions.",
};

function levelText(day: number) {
  if (day <= 4) return "A1. Use only the present tense, very short sentences (5 to 10 words), very common words. Speak slowly and simply.";
  if (day <= 8) return "A1+. Mostly present tense, futur proche (aller + infinitive) and imperative. Short sentences.";
  if (day <= 13) return "A2. Present, futur proche, passé composé and imparfait. Sentences up to 15 words.";
  if (day <= 18) return "A2+. All A2 tenses plus object pronouns, y/en, comparatives, futur simple and polite conditionnel.";
  return "B1. Natural speech with all tenses, connectors and opinions, but still clear.";
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });
  if (req.method !== "POST") return json({ error: "method" }, 405);
  let body: any;
  try { body = await req.json(); } catch { return json({ error: "bad_json" }, 400); }
  const { token, scenario, day, messages } = body || {};
  const key = Deno.env.get("ANTHROPIC_API_KEY");
  if (!key) return json({ error: "not_configured", message: "The chat is not set up yet: add the ANTHROPIC_API_KEY secret in Supabase." }, 503);

  // session + daily limit
  const url = Deno.env.get("SUPABASE_URL")!, srk = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
  const chk = await fetch(`${url}/rest/v1/rpc/fr_chat_ok`, { method: "POST", headers: { apikey: srk, Authorization: `Bearer ${srk}`, "Content-Type": "application/json" }, body: JSON.stringify({ p_token: String(token || ""), p_limit: 150 }) }).then((r) => r.json()).catch(() => null);
  if (!chk || !chk.ok) return json({ error: chk?.error || "auth", message: chk?.error === "limit" ? "Daily chat limit reached (150 messages). Try again tomorrow." : "Sign in to cloud save (Me tab) to use the chat." }, chk?.error === "limit" ? 429 : 401);
  const allow = (Deno.env.get("CHAT_USERS") || "").split(",").map((s) => s.trim().toLowerCase()).filter(Boolean);
  if (!allow.length) return json({ error: "not_configured", message: "The chat is not enabled for any account yet: add the CHAT_USERS secret in Supabase." }, 503);
  if (!allow.includes(String(chk.name).toLowerCase())) return json({ error: "not_allowed", message: `The account "${chk.name}" is not allowed to use the chat. Add it to the CHAT_USERS secret.` }, 403);

  const role = SCENARIOS[String(scenario)] || SCENARIOS.libre;
  const d = Math.max(1, Math.min(20, Number(day) || 1));
  const hist = (Array.isArray(messages) ? messages : []).slice(-20)
    .map((m: any) => ({ role: m?.role === "assistant" ? "assistant" : "user", content: String(m?.content || "").slice(0, 1200) }))
    .filter((m: any) => m.content);
  if (!hist.length || hist[0].role !== "user") hist.unshift({ role: "user", content: "(Commence la conversation.)" });

  const system = `You are a French conversation partner inside a language-learning app. Stay in this role: ${role}
Learner level: ${levelText(d)} The learner's goal is TCF Canada and Québec, so standard French with a light Québec flavour is ideal.
Rules:
- Always reply in French, in character, 1 to 3 short sentences, and end with a question or a prompt that keeps the conversation going.
- Never switch to English in "reply". Keep it at the learner's level.
- Check the learner's LAST message for French errors (grammar, agreement, tense, gender, word choice, spelling). List only real errors, most important first, max 3.
- If the learner writes in English, gently answer in French and give them the French version in "corrections".
Respond with ONLY a JSON object, no markdown, in this exact shape:
{"reply":"<your French reply>","en":"<English translation of your reply>","corrections":[{"wrong":"<their words>","right":"<corrected French>","why":"<short English explanation>"}],"suggestion":"<one natural French sentence the learner could say next>"}`;

  const model = Deno.env.get("CHAT_MODEL") || "claude-haiku-5-5";
  const r = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "x-api-key": key, "anthropic-version": "2023-06-01", "content-type": "application/json" },
    body: JSON.stringify({ model, max_tokens: 600, system, messages: hist }),
  });
  if (!r.ok) { const t = await r.text(); return json({ error: "upstream", message: `AI error ${r.status}: ${t.slice(0, 300)}` }, 502); }
  const out = await r.json();
  const text = (out.content || []).map((c: any) => c.text || "").join("").trim();
  let parsed: any = null;
  try { parsed = JSON.parse(text.replace(/^```(?:json)?\s*|\s*```$/g, "")); } catch { const m = text.match(/\{[\s\S]*\}/); if (m) { try { parsed = JSON.parse(m[0]); } catch { /* fall through */ } } }
  if (!parsed || typeof parsed.reply !== "string") parsed = { reply: text, en: "", corrections: [], suggestion: "" };
  parsed.corrections = Array.isArray(parsed.corrections) ? parsed.corrections.slice(0, 3) : [];
  return json({ ok: true, ...parsed, used: chk.n });
});
