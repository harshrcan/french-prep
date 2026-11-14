/* Core: utilities, state, saving, cloud sync, speech, spaced repetition, progress. */
(function () {
  'use strict';
  const FR = (window.FR = {});
  const LESSONS = window.LESSONS.sort((a, b) => a.day - b.day);
  const STORIES = window.STORIES, DECKS = window.DECKS, WRITING = window.WRITING, VERBS = window.VERBS, CONJ = window.CONJ;
  Object.assign(FR, { LESSONS, STORIES, DECKS, WRITING, VERBS, CONJ });

  /* ---------- utils ---------- */
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const sample = (a, n) => shuffle(a).slice(0, n);
  const DAY = 864e5;
  const todayKey = (d = new Date()) => d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  const fmtMin = (sec) => { const m = Math.round(sec / 60); return m >= 60 ? Math.floor(m / 60) + 'h ' + String(m % 60).padStart(2, '0') + 'm' : m + 'm'; };
  const ICON = {
    home: '<svg viewBox="0 0 24 24"><path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/></svg>',
    book: '<svg viewBox="0 0 24 24"><path d="M4 5a2 2 0 012-2h13v16H6a2 2 0 00-2 2z"/><path d="M4 19V5"/><path d="M9 7h6"/></svg>',
    target: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2"/></svg>',
    cards: '<svg viewBox="0 0 24 24"><rect x="3" y="6" width="14" height="14" rx="2"/><path d="M7 3h12a2 2 0 012 2v12"/></svg>',
    user: '<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/></svg>',
    play: '<svg viewBox="0 0 24 24"><path d="M7 4l13 8-13 8z"/></svg>',
    pause: '<svg viewBox="0 0 24 24"><path d="M7 4v16M17 4v16"/></svg>',
    spk: '<svg viewBox="0 0 24 24"><path d="M4 9v6h4l5 4V5L8 9z"/><path d="M16 9a4 4 0 010 6"/><path d="M19 6a8 8 0 010 12"/></svg>',
    mic: '<svg viewBox="0 0 24 24"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0014 0"/><path d="M12 18v3"/></svg>',
    check: '<svg viewBox="0 0 24 24"><path d="M5 12l5 5 9-10"/></svg>',
    next: '<svg viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>',
    back: '<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>',
    map: '<svg viewBox="0 0 24 24"><circle cx="12" cy="5" r="2"/><circle cx="5" cy="18" r="2"/><circle cx="19" cy="18" r="2"/><path d="M12 7v4M12 11l-6 5M12 11l6 5"/></svg>',
    pen: '<svg viewBox="0 0 24 24"><path d="M4 20l4-1 11-11-3-3L5 16z"/><path d="M14 6l3 3"/></svg>',
    ear: '<svg viewBox="0 0 24 24"><path d="M7 10a5 5 0 0110 0c0 3-3 4-3 7a3 3 0 01-6 0"/><path d="M10 10a2 2 0 014 0"/></svg>',
    read: '<svg viewBox="0 0 24 24"><path d="M2 5h7a3 3 0 013 3v12a2 2 0 00-2-2H2z"/><path d="M22 5h-7a3 3 0 00-3 3v12a2 2 0 012-2h8z"/></svg>',
    bolt: '<svg viewBox="0 0 24 24"><path d="M13 2L4 14h7l-1 8 9-12h-7z"/></svg>',
    redo: '<svg viewBox="0 0 24 24"><path d="M3 12a9 9 0 0115-6.7L21 8"/><path d="M21 3v5h-5"/></svg>',
    flag: '<svg viewBox="0 0 24 24"><path d="M5 21V4"/><path d="M5 4h11l-2 4 2 4H5"/></svg>',
    cloud: '<svg viewBox="0 0 24 24"><path d="M7 18a4 4 0 01-.5-8A6 6 0 0118 9a4.5 4.5 0 01-1 9z"/></svg>',
    list: '<svg viewBox="0 0 24 24"><path d="M9 6h12M9 12h12M9 18h12"/><circle cx="4" cy="6" r="1"/><circle cx="4" cy="12" r="1"/><circle cx="4" cy="18" r="1"/></svg>',
    verb: '<svg viewBox="0 0 24 24"><path d="M4 6h16M4 12h10M4 18h6"/><path d="M17 15l3 3-3 3"/></svg>',
    stop: '<svg viewBox="0 0 24 24"><rect x="6" y="6" width="12" height="12" rx="2"/></svg>'
  };
  Object.assign(FR, { $, $$, esc, shuffle, sample, DAY, todayKey, fmtMin, ICON });

  /* ---------- toast / modal ---------- */
  FR.toast = (html, kind) => { const t = document.createElement('div'); t.className = 'toast ' + (kind || ''); t.innerHTML = html; $('#toasts').appendChild(t); setTimeout(() => t.remove(), 3200); };
  FR.modal = (html) => { $('#modal-card').innerHTML = html; $('#modal').hidden = false; };
  FR.closeModal = () => { $('#modal').hidden = true; $('#modal-card').innerHTML = ''; };

  /* ---------- state ---------- */
  const SAVE_KEY = 'fr-prep-v1';
  const fresh = () => ({ v: 1, savedAt: 0, start: '2026-11-11', rate: 0.9, voice: '', font: 16, welcomed: false, ex: {}, les: {}, srs: {}, days: {}, st: {}, wr: {}, mocks: {}, mist: [], log: {}, drill: { c: 0, n: 0 } });
  function load() { try { const o = JSON.parse(localStorage.getItem(SAVE_KEY) || 'null'); return o && o.v ? Object.assign(fresh(), o) : null; } catch (e) { return null; } }
  let S = load() || fresh();
  FR.S = () => S;
  FR.setState = (o) => { S = Object.assign(fresh(), o); saveLocal(); };
  let storageOk = true;
  function saveLocal() { S.savedAt = Date.now(); try { localStorage.setItem(SAVE_KEY, JSON.stringify(S)); storageOk = true; } catch (e) { storageOk = false; } }
  FR.storageOk = () => storageOk;
  FR.save = (now) => { saveLocal(); FR.cloud.push(!!now); };
  FR.isFresh = (o) => !o || (!Object.keys(o.ex || {}).length && !Object.keys(o.srs || {}).length && !Object.keys(o.log || {}).length);
  FR.packSave = () => 'FR1.' + btoa(unescape(encodeURIComponent(JSON.stringify(S))));
  FR.unpackSave = (code) => { try { const o = JSON.parse(decodeURIComponent(escape(atob(code.trim().slice(4))))); return o && o.v ? o : null; } catch (e) { return null; } };
  FR.resetLocal = () => { S = fresh(); S.welcomed = true; saveLocal(); };

  /* ---------- day / plan ---------- */
  FR.curDay = () => { const st = new Date(S.start + 'T00:00:00'); const d = Math.floor((new Date().setHours(0, 0, 0, 0) - st.getTime()) / DAY) + 1; return Math.max(1, Math.min(20, d)); };
  FR.rawDay = () => { const st = new Date(S.start + 'T00:00:00'); return Math.floor((new Date().setHours(0, 0, 0, 0) - st.getTime()) / DAY) + 1; };
  FR.dayRec = (n) => (S.days[n] = S.days[n] || { blocks: {}, sec: 0 });
  FR.BLOCKS = [
    { k: 'grammar', t: 'Grammar + guided practice', m: 45 },
    { k: 'vocab', t: 'Verbs & vocabulary', m: 30 },
    { k: 'reading', t: 'Reading', m: 30 },
    { k: 'listening', t: 'Listening & dictation', m: 30 },
    { k: 'speaking', t: 'Speaking: shadowing', m: 30 },
    { k: 'writing', t: 'Writing + active recall', m: 15 }
  ];
  FR.markBlock = (k) => { const r = FR.dayRec(FR.curDay()); if (!r.blocks[k]) { r.blocks[k] = true; FR.save(); FR.toast('Block done: <b>' + FR.BLOCKS.find((b) => b.k === k).t + '</b>', 'ok'); } };

  /* ---------- active-time tracking (counts only when visible and you interacted in the last 2 minutes) ---------- */
  let lastAct = Date.now();
  ['pointerdown', 'keydown', 'scroll', 'touchstart'].forEach((e) => addEventListener(e, () => { lastAct = Date.now(); }, { passive: true }));
  setInterval(() => {
    if (document.hidden || Date.now() - lastAct > 120000 || !S.welcomed) return;
    const k = todayKey(); S.log[k] = (S.log[k] || 0) + 15; FR.dayRec(FR.curDay()).sec += 15;
    if ((S.log[k] % 60) === 0) saveLocal();
    if ((S.log[k] % 300) === 0) FR.cloud.push(false);
  }, 15000);
  FR.streak = () => { let n = 0; const d = new Date(); if ((S.log[todayKey(d)] || 0) < 1800) d.setDate(d.getDate() - 1); while ((S.log[todayKey(d)] || 0) >= 1800) { n++; d.setDate(d.getDate() - 1); } return n; };
  FR.totalSec = () => Object.values(S.log).reduce((a, b) => a + b, 0);

  /* ---------- exercises ---------- */
  // Normalize tuple → object. src: lesson day or story id.
  function normEx(t, id, meta) {
    const o = { id, src: meta };
    if (t[0] === 'm') Object.assign(o, { t: 'mcq', q: t[1], opts: t[2], a: t[2][t[3]], why: t[4] });
    else if (t[0] === 't') Object.assign(o, { t: 'mcq', q: t[1], opts: ['Vrai', 'Faux'], a: t[2] ? 'Vrai' : 'Faux', why: t[3], tf: true });
    else if (t[0] === 'f') Object.assign(o, { t: 'fill', q: t[1], a: [].concat(t[2]), why: t[3], hint: t[4] });
    else if (t[0] === 'o') Object.assign(o, { t: 'order', en: t[1], a: t[2], why: t[3], extra: t[4] || [] });
    else if (t[0] === 'w') Object.assign(o, { t: 'write', en: t[1], a: [].concat(t[2]), why: t[3] });
    return o;
  }
  const EX = {};
  LESSONS.forEach((L) => L.ex.forEach((t, i) => { const id = 'L' + L.day + '-' + i; EX[id] = normEx(t, id, { lesson: L.day }); }));
  STORIES.forEach((s) => s.q.forEach((t, i) => { const id = 'S' + s.id + '-' + i; EX[id] = normEx(t, id, { story: s.id }); }));
  FR.EX = EX;
  FR.lessonEx = (day) => Object.values(EX).filter((e) => e.src.lesson === day);
  FR.storyEx = (sid) => Object.values(EX).filter((e) => e.src.story === sid);
  FR.lesson = (d) => LESSONS.find((l) => l.day === +d);
  FR.story = (id) => STORIES.find((s) => s.id === id);

  FR.record = (ex, score) => {
    const r = (S.ex[ex.id] = S.ex[ex.id] || { c: 0, w: 0 });
    if (score >= 1) r.c++; else r.w++;
    r.t = Date.now(); r.ok = score >= 1;
    if (score < 1) { S.mist = [ex.id].concat(S.mist.filter((x) => x !== ex.id)).slice(0, 300); }
    else if (ex._review) S.mist = S.mist.filter((x) => x !== ex.id);
  };
  FR.weight = (id) => { const r = S.ex[id]; if (!r) return 2; return 1 + r.w * 1.5 - r.c * 0.4 + (r.ok ? 0 : 2); };
  FR.pickWeighted = (list, n) => list.map((e) => ({ e, k: Math.random() * Math.max(0.3, FR.weight(e.id)) })).sort((a, b) => b.k - a.k).slice(0, n).map((x) => x.e);

  /* ---------- answer checking ---------- */
  const deacc = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/œ/g, 'oe').replace(/æ/g, 'ae');
  const normA = (s) => String(s).toLowerCase().replace(/[’‘`´ʼ]/g, "'").replace(/[«»"“”.,!?;:()…]/g, ' ').replace(/\s*'\s*/g, "'").replace(/\s+/g, ' ').trim();
  const normB = (s) => deacc(normA(s)).replace(/-/g, ' ').replace(/\s+/g, ' ').trim();
  function lev(a, b) { if (Math.abs(a.length - b.length) > 3) return 9; const m = Array.from({ length: a.length + 1 }, (_, i) => [i]); for (let j = 1; j <= b.length; j++) m[0][j] = j; for (let i = 1; i <= a.length; i++) for (let j = 1; j <= b.length; j++) m[i][j] = Math.min(m[i - 1][j] + 1, m[i][j - 1] + 1, m[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)); return m[a.length][b.length]; }
  // returns { score: 1 | 0.5 | 0, best: closest answer, note }
  FR.check = (input, answers) => {
    const A = normA(input), B = normB(input);
    if (!A) return { score: 0, best: answers[0], note: 'empty' };
    for (const a of answers) if (normA(a) === A) return { score: 1, best: a };
    for (const a of answers) if (normB(a) === B) return { score: 0.5, best: a, note: 'accent' };
    let best = answers[0], bd = 99;
    for (const a of answers) { const d = lev(normB(a), B); if (d < bd) { bd = d; best = a; } }
    if (bd === 1 && normB(best).length > 7) return { score: 0.5, best, note: 'typo' };
    return { score: 0, best };
  };
  // word diff: returns html for target with missing marked, and user with extras marked
  FR.diff = (user, target) => {
    const u = normA(user).split(' ').filter(Boolean), t = normA(target).split(' ').filter(Boolean);
    const ub = u.map(normB), tb = t.map(normB);
    const L = Array.from({ length: u.length + 1 }, () => Array(t.length + 1).fill(0));
    for (let i = u.length - 1; i >= 0; i--) for (let j = t.length - 1; j >= 0; j--) L[i][j] = ub[i] === tb[j] ? L[i + 1][j + 1] + 1 : Math.max(L[i + 1][j], L[i][j + 1]);
    const tOk = Array(t.length).fill(false), uOk = Array(u.length).fill(false); let i = 0, j = 0;
    while (i < u.length && j < t.length) { if (ub[i] === tb[j]) { tOk[j] = u[i] === t[j] ? 'ok' : 'acc'; uOk[i] = true; i++; j++; } else if (L[i + 1][j] >= L[i][j + 1]) i++; else j++; }
    const matched = tOk.filter(Boolean).length;
    return {
      target: t.map((w, k) => `<span class="w ${tOk[k] === 'ok' ? 'ok' : 'miss'}">${esc(w)}</span>`).join(' '),
      user: u.map((w, k) => `<span class="w ${uOk[k] ? 'ok' : 'extra'}">${esc(w)}</span>`).join(' '),
      pct: t.length ? Math.round((matched / t.length) * 100) : 0
    };
  };
  FR.normA = normA; FR.normB = normB;
  // Unicode-aware \w and \b for French text (JS \w is ASCII only)
  const WC = "[A-Za-z0-9_\u00C0-\u00FF\u0153\u0152]";
  FR.re = (src, flags) => new RegExp(String(src).replace(/\\b/g, '\u0001').replace(/\\w/g, WC).replace(/\u0001/g, '(?:(?<=' + WC + ')(?!' + WC + ')|(?<!' + WC + ')(?=' + WC + '))'), flags || 'i');

  /* ---------- lessons: mastery ---------- */
  const REV = [1, 3, 7, 14];
  FR.lesRec = (d) => (S.les[d] = S.les[d] || { seen: 0, best: 0, tries: 0, pass: [] });
  FR.lessonResult = (d, pct, isRetest) => {
    const r = FR.lesRec(d); r.tries++; r.best = Math.max(r.best, pct); r.last = Date.now(); r.lastPct = pct;
    if (pct >= 80) { const k = todayKey(); if (!r.pass.includes(k)) r.pass.push(k); }
    FR.save(true);
  };
  FR.mastery = (d) => { const r = S.les[d]; if (!r || !r.seen) return 0; if (!r.tries) return 1; if (r.best < 80) return 2; return r.pass.length >= 2 ? 4 : 3; };
  FR.nextReview = (d) => { const r = S.les[d]; if (!r || !r.pass.length) return null; const n = r.pass.length; if (n > REV.length) return null; const last = new Date(r.pass[n - 1] + 'T00:00:00'); return new Date(last.getTime() + REV[n - 1] * DAY); };
  FR.dueReviews = () => LESSONS.filter((L) => { const n = FR.nextReview(L.day); return n && n.getTime() <= Date.now(); });
  FR.MASTERY = ['Not started', 'Introduced', 'Developing', 'Usable', 'Retained'];
  FR.masteryDots = (m) => `<span class="mastery ${m === 4 ? 'm4' : ''}" title="${FR.MASTERY[m]}">${[1, 2, 3, 4].map((i) => `<i class="${i <= m ? 'on' : ''}"></i>`).join('')}</span>`;

  /* ---------- flashcards (Leitner) ---------- */
  const IV = [0, 1, 2, 4, 8, 16, 35];
  FR.VERB_DECK = { id: 'verbs', name: 'Verb bank (infinitives + participles)', day: 0, cards: VERBS.map((v, i) => ({ id: 'verbs-' + i, fr: v.i, en: v.e + ' · p.p. ' + CONJ.participle(v) + ' (' + CONJ.aux(v) + ')' })) };
  FR.deck = (id) => (id === 'verbs' ? FR.VERB_DECK : DECKS[id]);
  FR.allDecks = () => Object.values(DECKS).concat([FR.VERB_DECK]);
  FR.cardDue = (c) => { const r = S.srs[c.id]; return !r || r.due <= Date.now(); };
  FR.deckStats = (d) => { let n = 0, due = 0, learned = 0; d.cards.forEach((c) => { const r = S.srs[c.id]; if (!r) n++; else { if (r.due <= Date.now()) due++; if (r.b >= 3) learned++; } }); return { new: n, due, learned, total: d.cards.length }; };
  FR.rate = (c, g) => { // g: 0 again, 1 hard, 2 good, 3 easy
    const r = (S.srs[c.id] = S.srs[c.id] || { b: 0, due: 0, n: 0 }); r.n++;
    if (g === 0) r.b = 0; else if (g === 2) r.b = Math.min(6, r.b + 1); else if (g === 3) r.b = Math.min(6, r.b + 2);
    const days = g === 0 ? 0 : g === 1 ? Math.max(1, IV[r.b] / 2) : IV[r.b];
    r.due = g === 0 ? Date.now() + 60000 : new Date().setHours(4, 0, 0, 0) + days * DAY;
  };

  /* ---------- speech synthesis ---------- */
  const TTS = (FR.tts = { voices: [], ok: 'speechSynthesis' in window });
  function loadVoices() { if (!TTS.ok) return; TTS.voices = speechSynthesis.getVoices().filter((v) => /^fr/i.test(v.lang)); }
  if (TTS.ok) { loadVoices(); speechSynthesis.onvoiceschanged = loadVoices; }
  TTS.voice = () => { const vs = TTS.voices; if (!vs.length) return null; return vs.find((v) => v.name === S.voice) || vs.find((v) => /fr[-_]FR/i.test(v.lang) && /google|premium|enhanced|natural|amélie|thomas|audrey/i.test(v.name)) || vs.find((v) => /fr[-_]FR/i.test(v.lang)) || vs[0]; };
  TTS.say = (text, opt = {}) => {
    if (!TTS.ok) { FR.toast('Speech is not supported in this browser.', 'bad'); return; }
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(String(text).replace(/[—–]/g, ',').replace(/\(e\)|\(s\)/g, ''));
    const v = TTS.voice(); if (v) u.voice = v; u.lang = v ? v.lang : 'fr-FR';
    u.rate = opt.rate || S.rate || 0.9;
    if (opt.onend) { u.onend = opt.onend; u.onerror = opt.onend; }
    if (opt.onstart) u.onstart = opt.onstart;
    speechSynthesis.speak(u);
    return u;
  };
  TTS.stop = () => { if (TTS.ok) speechSynthesis.cancel(); };

  /* ---------- cloud save (same pattern as Ctrl+Alt+Harsh: name + password, Supabase RPC, no email) ---------- */
  const CLOUD = { url: 'https://cvgzypgaabjwunrfzmlr.supabase.co', key: 'sb_publishable_LXFQVsj-5f6wiTAqMeqy2g_zyplMHlT', store: 'fr-prep-cloud' };
  let cloud = null; try { cloud = JSON.parse(localStorage.getItem(CLOUD.store) || 'null'); } catch (e) { cloud = null; }
  const cs = { busy: false, lastTry: -1e9, err: '', pending: false };
  const storeCloud = () => { try { if (cloud) localStorage.setItem(CLOUD.store, JSON.stringify(cloud)); else localStorage.removeItem(CLOUD.store); } catch (e) { /* storage blocked */ } };
  async function rpc(fn, args, keepalive) {
    const r = await fetch(CLOUD.url + '/rest/v1/rpc/' + fn, { method: 'POST', keepalive: !!keepalive, headers: { 'Content-Type': 'application/json', apikey: CLOUD.key, Authorization: 'Bearer ' + CLOUD.key }, body: JSON.stringify(args) });
    if (!r.ok) throw new Error('HTTP ' + r.status);
    return r.json();
  }
  const ERR = { name: 'Name: 3 to 20 letters, numbers, dashes or underscores.', password: 'Password needs at least 6 characters.', taken: 'That name is taken. Pick another, or sign in if it is yours.', invalid: 'Wrong name or password.', locked: 'Too many wrong tries. Wait 10 minutes.', busy: 'Too many new accounts right now. Try again later.', size: 'Progress data is too large to store.' };
  async function doPush(keepalive) {
    if (!cloud) return false;
    cs.busy = true; cs.lastTry = performance.now(); let ok = false;
    try {
      const r = await rpc('fr_save', { p_token: cloud.token, p_data: S }, keepalive);
      if (r.ok) { cloud.at = Date.now(); cs.err = ''; storeCloud(); ok = true; }
      else if (r.error === 'session') { cloud = null; storeCloud(); FR.toast('Signed out of cloud save. Sign in again from Me.', 'bad'); }
      else cs.err = 'Cloud refused the save (' + r.error + ').';
    } catch (e) { cs.err = 'Could not reach the cloud. Progress is still saved on this device.'; }
    cs.busy = false; FR.onSync && FR.onSync(); return ok;
  }
  FR.cloud = {
    get: () => cloud, status: () => cs,
    push(now) { if (!cloud || cs.busy) return; if (!now && performance.now() - cs.lastTry < 20000) { if (!cs.pending) { cs.pending = true; setTimeout(() => { cs.pending = false; FR.cloud.push(true); }, 20000); } return; } doPush(false); },
    sync: () => doPush(false),
    async auth(fn, name, pass) {
      name = (name || '').trim().toLowerCase();
      if (!/^[a-z0-9_-]{3,20}$/.test(name)) return { ok: false, msg: ERR.name };
      if ((pass || '').length < 6) return { ok: false, msg: ERR.password };
      saveLocal();
      let r; try { r = await rpc(fn === 'register' ? 'fr_register' : 'fr_login', fn === 'register' ? { p_name: name, p_pass: pass, p_data: S } : { p_name: name, p_pass: pass }); } catch (e) { return { ok: false, msg: 'Could not reach the cloud. Check your connection.' }; }
      if (!r.ok) return { ok: false, msg: ERR[r.error] || 'Something went wrong (' + r.error + ').' };
      cloud = { name: r.name, token: r.token, at: Date.now() }; storeCloud();
      return { ok: true, data: r.data || null, name: r.name };
    },
    async logout() { const t = cloud && cloud.token; cloud = null; storeCloud(); if (t) rpc('fr_logout', { p_token: t }).catch(() => {}); },
    async boot() {
      if (!cloud) return 'none';
      try {
        const r = await Promise.race([rpc('fr_load', { p_token: cloud.token }), new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), 6000))]);
        if (!r.ok) { cloud = null; storeCloud(); return 'expired'; }
        if (r.data && (r.data.savedAt || 0) > (S.savedAt || 0) + 2000) { S = Object.assign(fresh(), r.data); try { localStorage.setItem(SAVE_KEY, JSON.stringify(S)); } catch (e) { /* blocked */ } return 'pulled'; }
        return 'ok';
      } catch (e) { return 'offline'; }
    }
  };
  const leaving = () => { saveLocal(); if (cloud) doPush(true); };
  addEventListener('visibilitychange', () => { if (document.hidden) leaving(); });
  addEventListener('pagehide', leaving);

  /* ---------- verb drill helpers ---------- */
  FR.TENSE_DAY = { present: 1, futurproche: 8, pc: 9, imparfait: 12, futur: 17, conditionnel: 18 };
  FR.expand = (s) => { // "sommes allé(e)s" → variants
    let out = [s.replace(/\(e\)|\(s\)/g, '')];
    if (/\(e\)/.test(s)) { const v = new Set(); [['', ''], ['e', ''], ['', 's'], ['e', 's']].forEach(([e, p]) => v.add(s.replace('(e)', e).replace('(s)', p))); v.add(s.replace(/\(e\)/g, 'e').replace(/\(s\)/g, '')); out = Array.from(v).concat([s]); }
    return out;
  };
  FR.conjItem = (v, tense, k) => {
    const full = CONJ.line(v, tense, k); if (!full) return null;
    let subj, rest;
    if (full.startsWith("j'")) { subj = "j'"; rest = full.slice(2); }
    else { const sp = full.indexOf(' '); subj = full.slice(0, sp); rest = full.slice(sp + 1); }
    const shown = subj === 'il/elle' ? 'il' : subj === 'ils/elles' ? 'ils' : subj;
    const ans = FR.expand(rest).filter((x, i, a) => a.indexOf(x) === i);
    if (subj === 'il/elle' || subj === 'ils/elles') { /* accept masculine forms for il/ils */ }
    return { id: 'V-' + v.i + '-' + tense + '-' + k, t: 'fill', conj: true, q: `${shown} ___`, label: `${v.i} · ${CONJ.TENSES[tense]}`, a: ans.concat(ans.map((x) => (shown === "j'" ? "j'" : shown + ' ') + x)), show: full, why: `<b>${esc(full)}</b> — ${esc(v.i)} (${esc(v.e)}), ${CONJ.TENSES[tense].toLowerCase()}.`, src: { verb: v.i } };
  };
})();
