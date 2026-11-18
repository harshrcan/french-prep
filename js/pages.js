/* Pages, router, boot. */
(function () {
  'use strict';
  const FR = window.FR, { $, $$, esc, shuffle, sample, ICON, LESSONS, STORIES, WRITING, VERBS, CONJ } = FR;
  const main = $('#main');
  const S = () => FR.S();

  /* ---------- shell ---------- */
  const NAV = [['#/', 'Today', 'home'], ['#/lessons', 'Lessons', 'book'], ['#/practice', 'Practice', 'target'], ['#/cards', 'Cards', 'cards'], ['#/me', 'Me', 'user']];
  const NAV_EXTRA = [['#/dashboard', 'Dashboard', 'bolt'], ['#/words', '50 words a day', 'cards'], ['#/chat', 'AI chat partner', 'ear'], ['#/speak', 'Speaking topics', 'mic'], ['#/expressions', 'Native expressions', 'flag'], ['#/fiction', 'Fiction', 'read'], ['#/stories', 'Stories', 'read'], ['#/verbs', 'Verbs', 'verb'], ['#/write', 'Writing', 'pen'], ['#/maps', 'Concept maps', 'map']];
  function shell(active) {
    $('#tabs').innerHTML = NAV.map(([h, t, i]) => `<a href="${h}" class="${active === h ? 'on' : ''}">${ICON[i]}<span>${t}</span></a>`).join('');
    $('#nav').innerHTML = NAV.map(([h, t, i]) => `<a href="${h}" class="${active === h ? 'on' : ''}">${ICON[i]}${t}</a>`).join('') + '<div class="sep"></div>' + NAV_EXTRA.map(([h, t, i]) => `<a href="${h}" class="${active === h ? 'on' : ''}">${ICON[i]}${t}</a>`).join('');
    topRight();
  }
  function topRight() {
    const c = FR.cloud.get(), cs = FR.cloud.status(), sec = S().log[FR.todayKey()] || 0;
    $('#top-right').innerHTML = `<span class="pill gold" id="pts" title="Points · rank: ${esc(FR.rank(S().pts || 0).name)}">✦ ${S().pts || 0}</span><span class="pill ${sec >= (S().target || 60) * 60 ? 'ok' : 'gold'}" title="Active study time today">${FR.fmtMin(sec)}<span class="hide-sm"> / ${(S().target || 60) < 60 ? (S().target || 60) + 'm' : (S().target || 60) / 60 + 'h'}</span></span><a href="#/me" class="icon-btn" title="${c ? 'Cloud save: ' + esc(c.name) : 'Not signed in'}"><span class="sync-dot ${c ? (cs.err ? 'err' : 'on') : ''}"></span></a>`;
    $('#side-foot').innerHTML = c ? `Signed in as <b>${esc(c.name)}</b><br>${cs.err ? '<span style="color:var(--bad)">sync issue</span>' : 'progress syncs to the cloud'}` : 'Progress saved on this device.<br><a href="#/me">Sign in to sync →</a>';
  }
  FR.onSync = topRight;
  setInterval(() => { if (!document.hidden) topRight(); }, 30000);
  function setTop(title, back) { $('#top-title').textContent = title; const b = $('#back'); b.hidden = !back; b.onclick = () => { if (typeof back === 'string') location.hash = back; else history.back(); }; document.title = title + ' · Académie de français'; }

  /* ---------- concept markup ---------- */
  function renderConcept(h) {
    h = h.replace(/<tb>([\s\S]*?)<\/tb>/g, (_, body) => {
      const rows = body.trim().split('\n').map((r) => r.split(';'));
      return `<div class="tbl-wrap"><table><thead><tr>${rows[0].map((c) => `<th>${c.trim()}</th>`).join('')}</tr></thead><tbody>${rows.slice(1).map((r) => `<tr>${r.map((c) => `<td><span class="fr">${c.trim()}</span></td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
    });
    h = h.replace(/<x>([\s\S]*?)\|([\s\S]*?)<\/x>/g, (_, fr, en) => `<div class="ex"><span class="fr">${fr} ${FR.sayBtn(fr.replace(/<[^>]+>/g, ''))}</span><span class="en">${en}</span></div>`);
    h = h.replace(/<f>([\s\S]*?)<\/f>/g, '<span class="fr tap">$1</span>');
    h = h.replace(/<n>([\s\S]*?)<\/n>/g, '<div class="note tip">$1</div>').replace(/<t>([\s\S]*?)<\/t>/g, '<div class="note trap">$1</div>');
    return h;
  }
  function renderMap(m) {
    const node = (n, lvl) => {
      const [label, small, kids] = n; const has = kids && kids.length;
      return `<li class="${lvl === 1 && has ? '' : ''}"><span class="node ${lvl === 0 ? 'root' : lvl === 1 ? 'l1' : ''} ${has && lvl > 0 ? 'tog' : ''}"><span class="${lvl > 1 ? 'fr' : ''}">${esc(label)}</span>${has && lvl > 0 ? '<span class="chev">▾</span>' : ''}${small ? `<small>${esc(small)}</small>` : ''}</span>${has ? `<ul>${kids.map((k) => node(k, lvl + 1)).join('')}</ul>` : ''}</li>`;
    };
    return `<div class="cmap"><ul>${node(m, 0)}</ul></div>`;
  }
  function bindMap(root) { $$('.node.tog', root).forEach((n) => (n.onclick = () => { const li = n.parentNode; li.classList.toggle('closed'); n.querySelector('.chev').textContent = li.classList.contains('closed') ? '▸' : '▾'; })); }
  const lessonExamples = (L) => Array.from(L.concept.matchAll(/<x>([\s\S]*?)\|([\s\S]*?)<\/x>/g)).map((m) => [m[1].replace(/<[^>]+>/g, ''), m[2]]);

  /* ---------- global click: speak ---------- */
  document.addEventListener('click', (e) => {
    const b = e.target.closest('.say'); if (b) { e.preventDefault(); e.stopPropagation(); FR.tts.say(b.dataset.say); return; }
    const f = e.target.closest('.concept .fr.tap, .tbl-wrap td .fr, .gloss .fr, .conj .l'); if (f && !e.target.closest('button')) FR.tts.say(f.dataset.say || f.textContent.replace(/^(je|tu|il|nous|vous|ils)\s*$/, ''));
  });
  $('#modal').addEventListener('click', (e) => { if (e.target.id === 'modal') FR.closeModal(); });

  function rankCard() {
    const p = S().pts || 0, r = FR.rank(p), pct = r.next ? Math.round(((p - r.min) / (r.next[0] - r.min)) * 100) : 100;
    return `<div class="card rank-card" style="position:relative;padding-right:${matchMedia('(min-width:500px)').matches ? 110 : 18}px"><div class="char-corner" style="top:auto;bottom:6px;width:84px;${matchMedia('(min-width:500px)').matches ? '' : 'display:none'}">${FR.CHAR.student}</div><div class="row between"><div><div class="eyebrow">Your rank</div><div class="rank">${esc(r.name)}</div><div class="dim" style="font-size:13px">${esc(r.desc)}</div></div><div style="text-align:right"><div class="eyebrow">Points</div><div class="rank" style="color:var(--gold)">✦ ${p}</div></div></div>
      <div class="progress" style="margin-top:12px"><i style="width:${pct}%"></i></div><div class="dim" style="font-size:12px;margin-top:6px">${r.next ? (r.next[0] - p) + ' points to ' + esc(r.next[1]) : 'Highest rank reached'} · correct answer +2 · block +15 · full day +50 · mastery +25/40</div></div>`;
  }

  /* ======================= TODAY ======================= */
  function blockLinks(k, d) {
    const L = FR.lesson(d), sid = L.stories[0], w = WRITING.filter((x) => x.day <= d).pop(), sp = FR.speak(d);
    const fic = (window.FICTION || []).filter((f) => f.day <= d).pop();
    const a = (h, t, pri) => `<a class="btn sm ${pri ? 'pri' : ''}" href="${h}">${t}</a>`;
    return {
      grammar: [`Day ${d}: ${L.title}`, a(`#/lesson/${d}`, 'Learn', 1) + a(`#/lesson/${d}/practice`, 'Practice') + a(`#/lesson/${d}/map`, 'Map')],
      words: [`Topic: ${sp ? sp.title : ''} · 50 words`, a(`#/words/${d}`, 'Learn the 50', 1) + a(`#/words/${d}/quiz`, 'Quick test')],
      revise: [d > 1 ? `Same 50 words as yesterday (${FR.speak(d - 1) ? FR.speak(d - 1).title : ''})` : 'Starts tomorrow', d > 1 ? a(`#/words/${d - 1}/revise`, 'Revise', 1) + a(`#/words/${d - 1}/quiz`, 'Test') : ''],
      speaking: [`${sp ? sp.title : ''}: answer 4 questions aloud`, a(`#/lesson/${d}/speak`, 'Speak', 1) + a(`#/shadow/${sid}`, 'Shadow')],
      story: [`${FR.story(sid).title}${fic ? ' · or fiction: ' + fic.title : ''}`, a(`#/story/${sid}`, 'Read', 1) + a(`#/story/${sid}/listen`, 'Listen') + (fic ? a(`#/story/${fic.id}`, 'Fiction') : '')],
      chat: ['Roleplay a real situation and get corrections', a('#/chat', 'Start a chat', 1)],
      expr: ['Learn 5 expressions natives use', a('#/expressions', 'Expressions', 1) + a('#/expressions/quiz', 'Quiz')],
      writing: [`Task: ${w.title}`, a(`#/write/${w.id}`, 'Write', 1)]
    }[k];
  }
  function pageToday() {
    setTop('Today'); const st = S(), raw = FR.rawDay(), d = FR.curDay(), L = FR.lesson(d), rec = FR.dayRec(d);
    const sec = st.log[FR.todayKey()] || 0, due = FR.dueReviews(), mist = st.mist.filter((id) => FR.EX[id]).length;
    const dueCards = FR.allDecks().reduce((a, dk) => a + FR.deckStats(dk).due, 0);
    const startDate = new Date(st.start + 'T00:00:00'), tgt = st.target || 60;
    let hero;
    if (raw < 1) hero = `<div class="eyebrow">Starts ${startDate.toLocaleDateString(undefined, { month: 'long', day: 'numeric' })}</div><h1>Get ready</h1><p class="dim">Your plan has not started yet. Day 1 is shown below so you can preview it.</p>`;
    else if (raw > 20) hero = `<div class="eyebrow">Program complete · day ${raw}</div><h1>Keep it alive</h1><p class="dim">Daily now: due cards, retests, one story, one chat. Then start B1 topics.</p>`;
    else hero = `<div class="eyebrow">Day ${d} of 20 · ${esc(L.lvl)} · ${esc(L.theme)}</div><h1>${esc(L.title)}</h1>`;
    const plan = FR.planned(d), planKeys = plan.map((b) => b.k), doneSet = FR.doneKeys(rec);
    const blockHtml = (b) => { const [desc, links] = blockLinks(b.k, d); const on = doneSet.includes(b.k); return `<div class="block"><button class="tick ${on ? 'on' : ''}" data-k="${b.k}" aria-label="Mark done">${ICON.check}</button><div style="flex:1;min-width:0"><div class="row between"><span class="bt">${b.t}${b.core ? '' : ''}</span><span class="bm">~${b.m} min</span></div><div class="bd">${esc(desc)}</div><div class="row" style="gap:6px">${links}</div></div></div>`; };
    const bonus = FR.BLOCKS.filter((b) => !planKeys.includes(b.k) && !(b.k === 'revise' && d < 2));
    const planDone = plan.filter((b) => doneSet.includes(b.k)).length, planMin = plan.reduce((x, b) => x + b.m, 0);
    const topicsToday = FR.topicsOn(FR.todayKey());
    const grid = LESSONS.map((l) => { const m = FR.mastery(l.day); const r = st.days[l.day]; const comp = r ? FR.doneKeys(r).length : 0; const cls = m >= 3 && comp >= 4 ? 'd3' : comp >= 2 || m >= 3 ? 'd2' : comp || m ? 'd1' : ''; return `<a href="#/lesson/${l.day}" class="${cls} ${l.day === d && raw >= 1 && raw <= 20 ? 'cur' : ''}" title="Day ${l.day}: ${esc(l.title)}">${l.day}</a>`; }).join('');
    const exd = FR.exprOfDay();
    main.innerHTML = `<div class="hero">${hero}</div>
      ${FR.charCard('prof', esc(FR.profTip(d)) + (planDone === plan.length ? ' <b>Plan du jour terminé !</b>' : ''))}
      ${L.assess && raw >= 1 ? `<a class="tile today" href="#/mock/${L.assess}" style="margin-bottom:14px"><div class="k">Assessment day</div><div class="t">${esc(MOCKS[L.assess].title)}</div><div class="s">${esc(MOCKS[L.assess].desc)}${st.mocks[L.assess] ? ' · best ' + st.mocks[L.assess].best + '%' : ''}</div></a>` : ''}
      <div class="card"><div class="row between"><h3 style="margin:0">Today's plan</h3><span class="pill ${planDone === plan.length ? 'ok' : 'gold'}">${planDone}/${plan.length} topics</span></div>
        <div class="row between" style="margin:10px 0 6px"><span class="dim" style="font-size:13px">Time I have today:</span><div class="seg" style="margin:0">${FR.TARGETS.map((m) => `<button data-tg="${m}" class="${tgt === m ? 'on' : ''}">${m < 60 ? m + 'm' : m / 60 + 'h'}</button>`).join('')}</div></div>
        <div class="row between" style="margin:8px 0 4px"><span class="dim" style="font-size:13px">Active time <b style="color:var(--tx)">${FR.fmtMin(sec)}</b> · plan ~${planMin} min · <b style="color:var(--tx)">${topicsToday}</b> topic${topicsToday === 1 ? '' : 's'} finished today</span></div>
        <div class="progress ${planDone === plan.length ? 'ok' : ''}"><i style="width:${Math.round((planDone / plan.length) * 100)}%"></i></div>
        <div style="margin-top:6px">${plan.map(blockHtml).join('')}</div>
        ${bonus.length ? `<details style="margin-top:8px"><summary class="dim" style="cursor:pointer">Bonus if you have extra time (${bonus.length})</summary>${bonus.map(blockHtml).join('')}</details>` : ''}</div>
      ${exd ? `<div class="card tight"><div class="eyebrow">Expression of the day</div><div class="row between"><span class="fr" style="font-size:1.15rem">${esc(exd.fr)}</span>${FR.sayBtn(exd.fr)}</div><div class="dim" style="font-size:13.5px">${esc(exd.en)} · <i>${esc(exd.ex)}</i></div></div>` : ''}
      ${due.length || mist || dueCards ? `<div class="card"><h3>Reviews due</h3>
        ${due.map((l) => `<div class="list-row"><div class="grow"><b>Retest Day ${l.day}</b><div class="dim" style="font-size:13px">${esc(l.title)}</div></div><a class="btn sm pri" href="#/lesson/${l.day}/retest">Retest</a></div>`).join('')}
        ${dueCards ? `<div class="list-row"><div class="grow"><b>${dueCards} flashcards due</b></div><a class="btn sm" href="#/cards/all">Review</a></div>` : ''}
        ${mist ? `<div class="list-row"><div class="grow"><b>${mist} past mistakes</b><div class="dim" style="font-size:13px">Get each one right to clear it</div></div><a class="btn sm" href="#/quiz?mode=mistakes">Fix them</a></div>` : ''}</div>` : ''}
      <div class="card"><div class="row between"><h3 style="margin:0">20-day map</h3><a class="btn sm ghost" href="#/dashboard">Dashboard</a></div><div class="days" style="margin-top:12px">${grid}</div></div>
      ${rankCard()}`;
    $$('.tick', main).forEach((t) => (t.onclick = () => { const k = t.dataset.k; if (!doneSet.includes(k)) FR.markBlock(k); else { const r = FR.dayRec(d); delete r.blocks[k]; Object.keys(r.blocks).forEach((x) => { if (FR.blockKey(x) === k) delete r.blocks[x]; }); const tk = FR.todayKey(); st.topics[tk] = (st.topics[tk] || []).filter((x) => x !== k); FR.save(); } pageToday(); }));
    $$('[data-tg]', main).forEach((b) => (b.onclick = () => { st.target = +b.dataset.tg; FR.save(); pageToday(); }));
  }

  /* ======================= LESSONS ======================= */
  function pageLessons() {
    setTop('Lessons'); const d = FR.curDay();
    main.innerHTML = `<div class="hero"><div class="eyebrow">20 days · A1 basics → A2 → B1 bridge</div><h1>Lessons</h1><p class="dim">Each lesson: concept with audio examples, concept map, 18 to 22 exercises, verb tables, flashcards and a story.</p></div>
      <div class="grid g2">${LESSONS.map((l) => { const m = FR.mastery(l.day), r = S().les[l.day]; return `<a class="tile ${l.day === d ? 'today' : ''} ${m >= 3 ? 'done' : ''}" href="#/lesson/${l.day}"><div class="row between"><span class="k">Day ${l.day} · ${l.lvl}${l.assess ? ' · test' : ''}</span>${FR.masteryDots(m)}</div><div class="t">${esc(l.title)}</div><div class="s">${esc(l.theme)}${r && r.tries ? ' · best ' + r.best + '%' : ''}</div></a>`; }).join('')}</div>`;
  }
  function pageLesson(day, tab) {
    const L = FR.lesson(day); if (!L) return notFound();
    tab = tab || 'learn';
    setTop('Day ' + L.day + ' · ' + L.theme, '#/lessons');
    const rec = FR.lesRec(L.day);
    if (tab === 'retest') return startLessonSet(L, 'retest');
    const tabs = [['learn', 'Learn'], ['map', 'Concept map'], ['practice', 'Practice'], ['speak', 'Speak'], ['verbs', 'Verbs'], ['words', 'Words'], ['story', 'Story']];
    let body = '';
    if (tab === 'learn') {
      if (!rec.seen) { rec.seen = Date.now(); FR.save(); }
      body = `${FR.charCard('prof', 'Bienvenue au cours du jour ' + L.day + ' ! Lis, écoute chaque exemple, puis passe à la pratique.')}<div class="card"><h4>By the end you can</h4><ul style="margin:0;padding-left:1.2em">${L.goals.map((g) => `<li>${esc(g)}</li>`).join('')}</ul></div>
        <div class="concept">${renderConcept(L.concept)}</div>
        <hr><div class="row"><a class="btn pri" href="#/lesson/${L.day}/practice">Practice now ${ICON.next}</a><a class="btn" href="#/lesson/${L.day}/map">Concept map</a><a class="btn ghost" href="#/shadow/lesson/${L.day}">Shadow the examples</a></div>`;
    } else if (tab === 'map') {
      body = `<p class="dim">Tap a branch to fold it. Say each French example aloud as you read it.</p>${renderMap(L.map)}`;
    } else if (tab === 'practice') {
      const exs = FR.lessonEx(L.day), m = FR.mastery(L.day), nr = FR.nextReview(L.day);
      const cnt = (t) => exs.filter((e) => e.t === t).length;
      body = `<div class="card"><div class="row between"><div><div class="eyebrow">Mastery</div><div class="row">${FR.masteryDots(m)} <b>${FR.MASTERY[m]}</b></div></div><div style="text-align:right"><div class="eyebrow">Best</div><b>${rec.best || 0}%</b></div></div>
          <p class="dim" style="margin-bottom:0">80%+ = usable. Pass again on a later day (retests at 1, 3, 7, 14 days) to reach Retained.${nr ? ' Next retest: <b>' + nr.toLocaleDateString(undefined, { month: 'short', day: 'numeric' }) + '</b>.' : ''}</p></div>
        <div class="grid g2">
          <button class="tile" data-set="full"><div class="k">${exs.length} questions</div><div class="t">Full set</div><div class="s">All types, shuffled. Counts toward mastery.</div></button>
          <button class="tile" data-set="quick"><div class="k">10 questions</div><div class="t">Quick 10</div><div class="s">Weighted toward your weak items.</div></button>
          <button class="tile" data-set="mcq"><div class="k">${cnt('mcq')} questions</div><div class="t">MCQ only</div><div class="s">Recognition.</div></button>
          <button class="tile" data-set="fill"><div class="k">${cnt('fill')} questions</div><div class="t">Fill-ups only</div><div class="s">Recall the exact form.</div></button>
          <button class="tile" data-set="order"><div class="k">${cnt('order')} questions</div><div class="t">Sentence building</div><div class="s">Word order and structure.</div></button>
          <button class="tile" data-set="write"><div class="k">${cnt('write')} questions</div><div class="t">Translation</div><div class="s">Produce full sentences.</div></button>
          <a class="tile" href="#/drill?day=${L.day}"><div class="k">verbs</div><div class="t">Conjugation drill</div><div class="s">${esc(L.verbs.slice(0, 5).join(', '))}…</div></a>
          <a class="tile" href="#/dict?day=${L.day}"><div class="k">listening</div><div class="t">Dictation</div><div class="s">Write what you hear.</div></a>
        </div>`;
    } else if (tab === 'verbs') {
      const vs = L.verbs.map((n) => VERBS.find((v) => v.i === n)).filter(Boolean);
      const tenses = Object.keys(CONJ.TENSES).filter((t) => FR.TENSE_DAY[t] <= L.day);
      body = `<div class="row" style="margin-bottom:12px"><a class="btn pri" href="#/drill?day=${L.day}">${ICON.bolt} Drill these verbs</a></div><p class="dim">Tenses shown are the ones unlocked by Day ${L.day}. Tap any line to hear it.</p>
        ${vs.map((v) => `<div class="card"><div class="row between"><h3 style="margin:0"><span class="fr">${esc(v.i)}</span> <span class="dim" style="font-size:.8em;font-family:var(--sans)">${esc(v.e)}</span></h3><a class="btn sm ghost" href="#/verb/${encodeURIComponent(v.i)}">All tenses</a></div>
        <div class="conj" style="margin-top:10px">${tenses.map((t) => conjCard(v, t)).join('')}</div></div>`).join('')}`;
    } else if (tab === 'words') {
      const dk = FR.deck(L.deck);
      body = `<div class="row" style="margin-bottom:12px"><a class="btn pri" href="#/cards/${dk.id}">${ICON.cards} Study this deck</a><a class="btn" href="#/cards/${dk.id}?cram=1">Cram all</a></div>
        <div class="card">${dk.cards.map((c) => `<div class="list-row"><div class="grow"><span class="fr">${esc(c.fr)}</span><div class="dim" style="font-size:13.5px">${esc(c.en)}</div></div>${FR.sayBtn(c.fr)}</div>`).join('')}</div>`;
    } else if (tab === 'speak') {
      body = speakBody(FR.speak(L.day));
    } else if (tab === 'story') {
      body = L.stories.map((sid) => { const s = FR.story(sid); return `<a class="tile" href="#/story/${sid}"><div class="k">${s.lvl} · ${esc(s.focus)}</div><div class="t">${esc(s.title)}</div><div class="s">Read, listen, shadow, dictation, questions</div></a>`; }).join('');
    }
    main.innerHTML = `<div class="eyebrow">Day ${L.day} · ${L.lvl}</div><h1>${esc(L.title)}</h1>
      <div class="lesson-tabs">${tabs.map(([k, t]) => `<button class="${k === tab ? 'on' : ''}" data-t="${k}">${t}</button>`).join('')}</div><div id="lbody">${body}</div>`;
    $$('.lesson-tabs button', main).forEach((b) => (b.onclick = () => { location.hash = '#/lesson/' + L.day + (b.dataset.t === 'learn' ? '' : '/' + b.dataset.t); }));
    if (tab === 'map') bindMap(main);
    if (tab === 'speak') bindSpeak(FR.speak(L.day));
    $$('[data-set]', main).forEach((b) => (b.onclick = () => startLessonSet(L, b.dataset.set)));
  }
  function startLessonSet(L, kind) {
    let items = FR.lessonEx(L.day);
    if (kind === 'quick' || kind === 'retest') items = FR.pickWeighted(items, kind === 'retest' ? 12 : 10);
    else if (kind !== 'full') items = items.filter((e) => e.t === kind);
    setTop('Day ' + L.day + ' practice', '#/lesson/' + L.day + '/practice');
    FR.runSet({ el: main, items: shuffle(items), mode: 'lesson', title: `Day ${L.day} · ${kind === 'retest' ? 'retest' : kind}`,
      onResult: (r) => { if (r.quit && r.n < 5) return; if (kind === 'full' || kind === 'quick' || kind === 'retest') FR.lessonResult(L.day, r.pct); if (r.n >= 8) FR.markBlock('grammar'); },
      onQuit: () => { location.hash = '#/lesson/' + L.day + '/practice'; } });
  }
  /* ---------- speaking topic ---------- */
  const rows = (arr, cls) => arr.map(([f, e]) => `<div class="list-row"><div class="grow"><span class="fr">${esc(f)}</span>${e ? `<div class="dim" style="font-size:13.5px">${esc(e)}</div>` : ''}</div>${FR.sayBtn(f.replace(/\(.*?\)/g, ''))}</div>`).join('');
  function speakBody(t) {
    if (!t) return '<div class="empty">No speaking topic for this day.</div>';
    const st = S(), rec = (st.sp || {})[t.day] || {};
    return `<div class="card"><div class="eyebrow">Speaking topic · ${esc(t.lvl)}</div><h2 style="margin:4px 0 6px">${esc(t.title)}</h2><p class="dim" style="margin:0">Grammar to use: <b style="color:var(--tx)">${esc(t.focus)}</b></p>
        <div class="row" style="margin-top:12px"><a class="btn pri sm" href="#/cards/sp${t.day}">${ICON.cards} Study the ${t.V.length + t.X.length} words</a><button class="btn sm" data-a="shs">${ICON.mic} Shadow the sample</button><button class="btn sm" data-a="shb">${ICON.mic} Shadow the B1 answer</button></div>
        ${rec.q ? `<p class="dim" style="margin:10px 0 0;font-size:13px">${rec.q} answers recorded so far.</p>` : ''}</div>
      <details class="card tight" open><summary><b>1. Vocabulary</b> <span class="dim">(${t.V.length} words)</span></summary>${rows(t.V)}</details>
      <details class="card tight"><summary><b>2. Verbs and expressions</b> <span class="dim">(${t.X.length})</span></summary>${rows(t.X)}</details>
      <details class="card tight"><summary><b>3. What native speakers say</b></summary>${rows(t.P)}</details>
      <details class="card tight"><summary><b>4. Examples with today's grammar</b></summary>${rows(t.E)}</details>
      <div class="card tight"><h4 style="margin:4px 0 6px">5. Speaking questions</h4><p class="dim" style="margin:0 0 6px;font-size:13.5px">Easy to hard. Listen, answer aloud for 30 to 90 seconds, then play yourself back. Use the words above and the grammar of the day.</p>
        ${t.Q.map(([f, e], i) => `<div class="list-row" style="align-items:flex-start"><span class="tag" style="margin-top:3px">${i + 1}</span><div class="grow"><span class="fr">${esc(f)}</span><div class="dim" style="font-size:13px">${esc(e || '')}</div><div class="row" style="gap:6px;margin-top:6px"><button class="btn sm" data-rec="${i}">${ICON.mic} Answer</button><button class="btn sm ghost" data-play="${i}" disabled>${ICON.play} Mine</button></div></div>${FR.sayBtn(f)}</div>`).join('')}</div>
      <details class="card tight"><summary><b>6. Build and defend your opinion</b></summary>${rows(t.O)}</details>
      <div class="card"><div class="row between"><h4 style="margin:0">7. Sample answers</h4><div class="seg" style="margin:0"><button data-lv="s" class="on">My level (${esc(t.lvl)})</button><button data-lv="b">B1 push</button></div></div>
        <div class="story-text" id="spx" style="margin-top:12px;font-size:1.06rem">${esc(t.s)}</div>
        <div class="row" style="margin-top:12px"><button class="btn sm" data-a="pl">${ICON.play} Listen</button><button class="btn sm ghost" data-a="st">${ICON.stop}</button></div>
        <p class="dim" style="font-size:13px;margin-bottom:0">Read the B1 version for the connectors and longer sentences, then try answering question ${t.Q.length} again using two of them.</p></div>`;
  }
  const splitS = (txt) => txt.split(/(?<=[.!?])\s+/).filter((x) => x.trim().length > 2);
  function bindSpeak(t) {
    if (!t) return;
    let lv = 's';
    $$('[data-lv]', main).forEach((b) => (b.onclick = () => { lv = b.dataset.lv; FR.stopLines(); $$('[data-lv]', main).forEach((x) => x.classList.toggle('on', x === b)); $('#spx').textContent = t[lv]; }));
    main.querySelector('[data-a=pl]').onclick = () => FR.playLines(splitS(t[lv]));
    main.querySelector('[data-a=st]').onclick = () => FR.stopLines();
    const shadow = (k) => { setTop('Shadow · ' + t.title, '#/lesson/' + t.day + '/speak'); FR.runShadow({ el: main, lines: splitS(t[k]).map((x) => [x, '']), title: t.title + (k === 'b' ? ' · B1' : ''), back: '#/lesson/' + t.day + '/speak' }); };
    main.querySelector('[data-a=shs]').onclick = () => shadow('s');
    main.querySelector('[data-a=shb]').onclick = () => shadow('b');
    const urls = {}; let stream = null, rec = null, curBtn = null;
    FR.cleanups.push(() => { try { rec && rec.state !== 'inactive' && rec.stop(); } catch (e) { /* */ } if (stream) stream.getTracks().forEach((x) => x.stop()); Object.values(urls).forEach((u) => URL.revokeObjectURL(u)); });
    $$('[data-rec]', main).forEach((b) => (b.onclick = async () => {
      const i = b.dataset.rec;
      if (rec && rec.state === 'recording') { const same = curBtn === b; rec.stop(); if (same) return; }
      if (!navigator.mediaDevices || !window.MediaRecorder) return FR.toast('Recording is not supported in this browser.', 'bad');
      try { stream = stream || await navigator.mediaDevices.getUserMedia({ audio: true }); } catch (e) { return FR.toast('Microphone permission was denied.', 'bad'); }
      const chunks = []; rec = new MediaRecorder(stream); curBtn = b;
      rec.ondataavailable = (e) => chunks.push(e.data);
      rec.onstop = () => { if (urls[i]) URL.revokeObjectURL(urls[i]); urls[i] = URL.createObjectURL(new Blob(chunks, { type: rec.mimeType })); b.innerHTML = ICON.mic + ' Again'; main.querySelector(`[data-play="${i}"]`).disabled = false;
        const st = S(); st.sp = st.sp || {}; const r = (st.sp[t.day] = st.sp[t.day] || { q: 0 }); r.q++; const dr = FR.dayRec(FR.curDay()); dr.spokeN = (dr.spokeN || 0) + 1; if (dr.spokeN >= 4) FR.markBlock('speaking'); FR.save(); };
      rec.start(); b.innerHTML = '<span class="rec-dot"></span> Stop';
      setTimeout(() => { if (rec && rec.state === 'recording' && curBtn === b) rec.stop(); }, 120000);
    }));
    $$('[data-play]', main).forEach((b) => (b.onclick = () => { const u = urls[b.dataset.play]; if (u) new Audio(u).play(); }));
  }
  function pageSpeakList() {
    setTop('Speaking topics', '#/practice'); const d = FR.curDay();
    main.innerHTML = `<div class="hero"><div class="char-corner">${FR.CHAR.student}</div><h1>Speaking topics</h1><p class="dim">One topic per day, matched to that day's grammar. Each has vocabulary, native phrases, graded questions, opinion builders and two sample answers (your level and B1).</p></div>
      <div class="grid g2">${FR.SPEAK.map((t) => { const r = (S().sp || {})[t.day]; return `<a class="tile ${t.day === d ? 'today' : ''}" href="#/lesson/${t.day}/speak"><div class="row between"><span class="k">Day ${t.day} · ${esc(t.lvl)}</span>${r && r.q ? `<span class="pill ok">${r.q} answers</span>` : ''}</div><div class="t">${esc(t.title)}</div><div class="s">${esc(t.focus)}</div></a>`; }).join('')}</div>`;
  }
  function conjCard(v, t) { return `<div class="card"><h4>${CONJ.TENSES[t]}</h4>${[0, 1, 2, 3, 4, 5].map((k) => { const l = CONJ.line(v, t, k); return l ? `<div class="l" style="cursor:pointer">${esc(l)}</div>` : ''; }).join('')}</div>`; }

  /* ======================= PRACTICE HUB ======================= */
  function pagePractice() {
    setTop('Practice'); const st = S(), d = FR.curDay(), scope = st.scope || 'today';
    const mist = st.mist.filter((id) => FR.EX[id]).length;
    const t = (h, k, title, s) => `<a class="tile" href="${h}"><div class="k">${k}</div><div class="t">${title}</div><div class="s">${s}</div></a>`;
    main.innerHTML = `<div class="hero"><div class="char-corner">${FR.CHAR.cat}</div><h1>Practice</h1><p class="dim">Everything shows the answer and the rule after you try.</p></div>
      <div class="row" style="margin-bottom:14px"><span class="dim" style="font-size:13px">Quiz scope:</span><div class="seg" style="margin:0;flex:0 0 auto"><button data-sc="today" class="${scope === 'today' ? 'on' : ''}">Days 1–${d}</button><button data-sc="all" class="${scope === 'all' ? 'on' : ''}">All 20 days</button></div></div>
      <h3>Daily</h3><div class="grid g2">
        ${t('#/words/' + d, 'day ' + d, '50 words a day', 'Today\'s topic words, plus yesterday\'s for revision.')}
        ${t('#/chat', 'roleplay', 'AI chat partner', 'Talk through real situations and get corrections.')}
        ${t('#/expressions', FR.EXPR.reduce((a, c) => a + c.items.length, 0) + ' expressions', 'Native expressions', 'Reactions, fillers, idioms, Québec French.')}
        ${t('#/fiction', (window.FICTION || []).length + ' stories', 'Fiction', 'Original short stories, A2 to B1.')}
        ${t('#/dashboard', 'progress', 'Dashboard', 'Topics per day, minutes, mastery, words learned.')}
      </div>
      <h3>Quizzes</h3><div class="grid g2">
        ${t('#/quiz?mode=mixed', '20 questions', 'Mixed quiz', 'All exercise types, weighted toward what you get wrong.')}
        ${t('#/quiz?mode=mistakes', mist + ' saved', 'Mistakes review', 'Every question you missed. Clear them by getting them right.')}
        ${t('#/quiz?mode=mcq', 'recognition', 'MCQ sprint', '15 multiple-choice questions.')}
        ${t('#/quiz?mode=fill', 'recall', 'Fill-ups', '15 fill-in-the-blank questions.')}
        ${t('#/quiz?mode=order', 'structure', 'Sentence formation', '12 build-the-sentence puzzles.')}
        ${t('#/quiz?mode=write', 'production', 'Translation', '10 sentences to write in French.')}
      </div>
      <h3>Verbs</h3><div class="grid g2">
        ${t('#/drill', 'conjugation', 'Verb drill', 'Type the right form. Choose verbs and tenses.')}
        ${t('#/verbs', VERBS.length + ' verbs', 'Verb tables', 'Every tense, with audio.')}
      </div>
      <h3>Reading, listening, speaking</h3><div class="grid g2">
        ${t('#/stories', STORIES.length + ' stories', 'Reading library', 'A1 to B1 stories with glossary, translation and questions.')}
        ${t(`#/story/${FR.lesson(d).stories[0]}/listen`, 'audio only', 'Listening', 'Hear the story without text, answer, then check the transcript.')}
        ${t(`#/dict?day=${d}`, '8 sentences', 'Dictation', 'Write exactly what you hear. Word-by-word correction.')}
        ${t(`#/lesson/${d}/speak`, 'day ' + d, 'Today\'s speaking topic', FR.speak(d) ? FR.speak(d).title : '')}
        ${t('#/speak', '20 topics', 'All speaking topics', 'Vocabulary, questions, opinions and sample answers for every day.')}
        ${t(`#/shadow/${FR.lesson(d).stories[0]}`, 'speaking', 'Shadowing', 'Repeat with the audio, record yourself, check pronunciation.')}
        ${t(`#/seq/${FR.lesson(d).stories[0]}`, 'stories', 'Story ordering', 'Put the sentences of a story back in order.')}
      </div>
      <h3>Writing and tests</h3><div class="grid g2">
        ${t('#/write', WRITING.length + ' tasks', 'Story and sentence writing', 'Guided tasks with a live checklist, error scan and model answers.')}
        ${t('#/mock/a1', 'Day 7', MOCKS.a1.title, MOCKS.a1.desc)}
        ${t('#/mock/a2', 'Day 11', MOCKS.a2.title, MOCKS.a2.desc)}
        ${t('#/mock/a3', 'Day 20', MOCKS.a3.title, MOCKS.a3.desc)}
        ${t('#/maps', '20 maps', 'Concept maps', 'Every grammar topic as a tree.')}
      </div>`;
    $$('[data-sc]', main).forEach((b) => (b.onclick = () => { st.scope = b.dataset.sc; FR.save(); pagePractice(); }));
  }
  const scopeDay = () => (S().scope === 'all' ? 20 : FR.curDay());
  function pageQuiz(q) {
    const mode = q.mode || 'mixed', upto = scopeDay();
    const pool = Object.values(FR.EX).filter((e) => e.src.lesson && e.src.lesson <= upto);
    let items, title;
    if (mode === 'mistakes') { items = S().mist.map((id) => FR.EX[id]).filter(Boolean).slice(0, 25).map((e) => Object.assign({}, e, { _review: true })); title = 'Mistakes review'; if (!items.length) { setTop('Mistakes', '#/practice'); main.innerHTML = `<div style="max-width:520px;margin:20px auto">${FR.charCard('ghost', 'Pas une seule erreur à hanter ! Chaque mauvaise réponse viendra ici jusqu\'à ce que tu la corriges.', { cls: 'big' })}<a class="btn" href="#/practice">Back to practice</a></div>`; return; } }
    else if (mode === 'mixed') { items = FR.pickWeighted(pool, 20); title = 'Mixed quiz'; }
    else { const n = { mcq: 15, fill: 15, order: 12, write: 10 }[mode] || 15; items = FR.pickWeighted(pool.filter((e) => e.t === mode), n); title = { mcq: 'MCQ sprint', fill: 'Fill-ups', order: 'Sentence formation', write: 'Translation' }[mode]; }
    setTop(title, '#/practice');
    FR.runSet({ el: main, items: shuffle(items), title, mode, onResult: (r) => { if (r.n >= 10) FR.markBlock('grammar'); }, onQuit: () => { location.hash = '#/practice'; } });
  }

  /* ======================= VERBS ======================= */
  const FAM = { core: 'Core irregulars', er: '-ER verbs', ir: '-IR verbs', re: '-RE / -OIR verbs', refl: 'Reflexive verbs', move: 'Être verbs (movement)' };
  function pageVerbs() {
    setTop('Verbs', '#/practice');
    main.innerHTML = `<div class="hero"><h1>Verb bank</h1><p class="dim">${VERBS.length} verbs from the curriculum. Tap a verb for every tense with audio.</p></div>
      <div class="row" style="margin-bottom:12px"><a class="btn pri" href="#/drill">${ICON.bolt} Start a drill</a></div>
      <input type="text" id="vq" placeholder="Search a verb (French or English)" style="margin-bottom:14px">
      <div id="vl"></div>`;
    const draw = (f) => { f = (f || '').toLowerCase(); $('#vl').innerHTML = Object.keys(FAM).map((k) => { const vs = VERBS.filter((v) => v.f === k && (!f || v.i.includes(f) || v.e.toLowerCase().includes(f))); return vs.length ? `<h3>${FAM[k]}</h3><div class="card tight">${vs.map((v) => `<a class="list-row" href="#/verb/${encodeURIComponent(v.i)}" style="color:var(--tx)"><div class="grow"><span class="fr">${esc(v.i)}</span> <span class="dim" style="font-size:13px">· ${esc(v.e)}</span></div><span class="tag">day ${v.d}</span></a>`).join('')}</div>` : ''; }).join(''); };
    draw(); $('#vq').oninput = (e) => draw(e.target.value);
  }
  function pageVerb(inf) {
    const v = VERBS.find((x) => x.i === decodeURIComponent(inf)); if (!v) return notFound();
    setTop(v.i, '#/verbs');
    main.innerHTML = `<div class="eyebrow">${FAM[v.f]} · introduced day ${v.d}</div><h1 class="fr">${esc(v.i)} ${FR.sayBtn(v.i)}</h1><p class="dim">${esc(v.e)} · participle <b class="fr">${esc(CONJ.participle(v))}</b> · auxiliary <b>${CONJ.aux(v)}</b></p>
      <div class="conj">${Object.keys(CONJ.TENSES).map((t) => conjCard(v, t)).join('')}</div>
      <div class="row" style="margin-top:14px"><a class="btn pri" href="#/drill?verb=${encodeURIComponent(v.i)}">${ICON.bolt} Drill this verb</a></div>`;
  }
  function pageDrill(q) {
    setTop('Verb drill', '#/practice'); const st = S();
    if (q.day || q.verb) {
      let vs, tenses;
      if (q.verb) { vs = VERBS.filter((v) => v.i === q.verb); tenses = Object.keys(CONJ.TENSES).filter((t) => FR.TENSE_DAY[t] <= Math.max(FR.curDay(), 1) || st.scope === 'all'); if (!tenses.length) tenses = ['present']; }
      else { const L = FR.lesson(q.day); vs = L.verbs.map((n) => VERBS.find((v) => v.i === n)).filter(Boolean); tenses = Object.keys(CONJ.TENSES).filter((t) => FR.TENSE_DAY[t] <= L.day); }
      return runDrill(vs, tenses, 15, q.day ? 'Day ' + q.day + ' verbs' : q.verb);
    }
    const d = FR.curDay(), sel = st.drillSel || { set: 'unlocked', tenses: Object.keys(CONJ.TENSES).filter((t) => FR.TENSE_DAY[t] <= d), n: 15 };
    main.innerHTML = `<div class="hero"><h1>Verb drill</h1><p class="dim">Type the verb form for the subject shown. Accents count. Lifetime: ${st.drill.c}/${st.drill.n} correct.</p></div>
      <div class="card"><h4>Verbs</h4><div class="seg" id="vset">${[['day', 'Today\'s verbs'], ['unlocked', 'Days 1–' + d], ['core', 'Core 10'], ['all', 'All']].map(([k, t]) => `<button data-v="${k}" class="${sel.set === k ? 'on' : ''}">${t}</button>`).join('')}</div>
      <h4 style="margin-top:16px">Tenses</h4><div class="row" id="tset">${Object.entries(CONJ.TENSES).map(([k, t]) => `<button class="btn sm ${sel.tenses.includes(k) ? 'pri' : ''}" data-t="${k}">${t}</button>`).join('')}</div>
      <h4 style="margin-top:16px">Questions</h4><div class="seg" id="nset">${[10, 15, 25, 40].map((n) => `<button data-n="${n}" class="${sel.n === n ? 'on' : ''}">${n}</button>`).join('')}</div>
      <button class="btn pri block" style="margin-top:18px" id="go">Start drill</button></div>`;
    $$('#vset button').forEach((b) => (b.onclick = () => { sel.set = b.dataset.v; $$('#vset button').forEach((x) => x.classList.toggle('on', x === b)); }));
    $$('#tset button').forEach((b) => (b.onclick = () => { const k = b.dataset.t; sel.tenses = sel.tenses.includes(k) ? sel.tenses.filter((x) => x !== k) : sel.tenses.concat(k); b.classList.toggle('pri'); }));
    $$('#nset button').forEach((b) => (b.onclick = () => { sel.n = +b.dataset.n; $$('#nset button').forEach((x) => x.classList.toggle('on', x === b)); }));
    $('#go').onclick = () => {
      if (!sel.tenses.length) return FR.toast('Pick at least one tense.');
      st.drillSel = sel; FR.save();
      const vs = sel.set === 'day' ? FR.lesson(d).verbs.map((n) => VERBS.find((v) => v.i === n)).filter(Boolean) : sel.set === 'core' ? VERBS.filter((v) => v.f === 'core') : sel.set === 'unlocked' ? VERBS.filter((v) => v.d <= d) : VERBS;
      runDrill(vs, sel.tenses, sel.n, 'Verb drill');
    };
  }
  function runDrill(vs, tenses, n, title) {
    const latest = tenses.slice().sort((a, b) => FR.TENSE_DAY[b] - FR.TENSE_DAY[a])[0];
    const items = []; let guard = 0;
    while (items.length < n && guard++ < 500) {
      const v = vs[Math.floor(Math.random() * vs.length)], t = Math.random() < 0.4 ? latest : tenses[Math.floor(Math.random() * tenses.length)], k = Math.floor(Math.random() * 6);
      const it = FR.conjItem(v, t, k); if (it && !items.find((x) => x.id === it.id)) items.push(it);
    }
    FR.runSet({ el: main, items, title, mode: 'drill', onResult: (r) => { const st = S(); st.drill.n += r.n; st.drill.c += r.res.filter((x) => x.score >= 1).length; if (r.n >= 10) FR.markBlock('grammar'); FR.save(); }, onQuit: () => { location.hash = '#/drill'; } });
  }

  /* ======================= STORIES ======================= */
  function pageStories() {
    setTop('Stories', '#/practice');
    main.innerHTML = `<div class="hero"><div class="char-corner">${FR.CHAR.ghost}</div><h1>Reading library</h1><p class="dim">Graded from A1 to B1. Each story has audio, line-by-line translation, a glossary, questions, a listening mode, shadowing and dictation.</p></div>
      <div class="grid g2">${STORIES.filter((s) => !s.fiction).map((s) => { const r = S().st[s.id] || {}; return `<a class="tile ${r.quiz >= 80 ? 'done' : ''}" href="#/story/${s.id}"><div class="row between"><span class="k">Day ${s.day} · ${s.lvl}</span>${r.quiz != null ? `<span class="pill ${r.quiz >= 80 ? 'ok' : ''}">${r.quiz}%</span>` : ''}</div><div class="t">${esc(s.title)}</div><div class="s">${esc(s.focus)}</div></a>`; }).join('')}</div>`;
  }
  function pageStory(id, mode) {
    const s = FR.story(id); if (!s) return notFound();
    const st = S(), rec = (st.st[id] = st.st[id] || {});
    if (mode === 'quiz' || mode === 'lquiz') {
      setTop(s.title, '#/story/' + id + (mode === 'lquiz' ? '/listen' : ''));
      const items = FR.storyEx(id).map((e) => Object.assign({}, e, { ctx: { kind: mode === 'lquiz' ? 'listen' : 'read', story: id } }));
      return FR.runSet({ el: main, items, title: s.title + (mode === 'lquiz' ? ' · listening' : ' · reading'), mode: 'story',
        onResult: (r) => { if (mode === 'lquiz') { rec.listen = Math.max(rec.listen || 0, r.pct); FR.markBlock('listening'); } else { rec.quiz = Math.max(rec.quiz || 0, r.pct); FR.markBlock('reading'); } FR.save(true); },
        onQuit: () => { location.hash = '#/story/' + id + (mode === 'lquiz' ? '/listen' : ''); } });
    }
    const listen = mode === 'listen';
    setTop(s.title, listen ? '#/story/' + id : s.fiction ? '#/fiction' : '#/stories');
    let showEn = false, showTx = !listen, rate = st.rate || 0.9;
    const lines = s.lines.map((l) => l[0]);
    function draw() {
      main.innerHTML = `<div class="eyebrow">Day ${s.day} · ${s.lvl} · ${esc(s.focus)}</div><h1>${esc(s.title)}</h1>
        ${listen ? '<p class="dim">Listen at least twice without reading. Then answer the questions. Only then reveal the transcript.</p>' : ''}
        <div class="player"><button class="btn pri sm" data-a="play">${ICON.play} Play all</button><button class="btn sm ghost" data-a="stop">${ICON.stop}</button><span class="grow"></span>
          <div class="speed">${[0.7, 0.85, 1].map((r) => `<button data-r="${r}" class="${rate === r ? 'on' : ''}">${r}×</button>`).join('')}</div></div>
        ${listen ? `<div class="card"><h4>Line by line</h4><div class="row">${lines.map((_, i) => `<button class="btn sm" data-l="${i}">${i + 1}</button>`).join('')}</div></div>` : ''}
        ${showTx ? `<div class="card"><div class="row between" style="margin-bottom:8px"><span class="dim" style="font-size:13px">Tap a sentence to hear it</span><button class="btn sm ghost" data-a="en">${showEn ? 'Hide' : 'Show'} English</button></div>
          <div class="story-text">${s.lines.map((l, i) => `<span class="ln" data-i="${i}">${esc(l[0])}</span>${showEn ? `<div class="dim" style="font-family:var(--sans);font-size:.88rem;margin:2px 0 10px">${esc(l[1])}</div>` : ' '}`).join('')}</div></div>
          <div class="card"><h4>Glossary</h4><div class="gloss">${s.gloss.map(([f, e]) => `<span class="fr" style="cursor:pointer">${esc(f)}</span><span>${esc(e)}</span>`).join('')}</div></div>` : `<button class="btn ghost" data-a="tx">Reveal transcript</button>`}
        <div class="grid g2" style="margin-top:14px">
          ${listen ? `<a class="tile" href="#/story/${id}/lquiz"><div class="k">${s.q.length} questions · audio only</div><div class="t">Listening questions</div><div class="s">${rec.listen != null ? 'Best ' + rec.listen + '%' : 'Not tried yet'}</div></a>` : `<a class="tile" href="#/story/${id}/quiz"><div class="k">${s.q.length} questions</div><div class="t">Comprehension questions</div><div class="s">${rec.quiz != null ? 'Best ' + rec.quiz + '%' : 'Not tried yet'}</div></a>`}
          ${listen ? `<a class="tile" href="#/story/${id}"><div class="k">text</div><div class="t">Reading mode</div><div class="s">Text, translation, glossary</div></a>` : `<a class="tile" href="#/story/${id}/listen"><div class="k">audio only</div><div class="t">Listening mode</div><div class="s">Hear it without the text</div></a>`}
          <a class="tile" href="#/shadow/${id}"><div class="k">speaking</div><div class="t">Shadow this story</div><div class="s">${rec.shadow ? rec.shadow + ' lines practised' : 'Repeat, record, compare'}</div></a>
          <a class="tile" href="#/dict?story=${id}"><div class="k">listening</div><div class="t">Dictation</div><div class="s">Write the sentences you hear</div></a>
          <a class="tile" href="#/seq/${id}"><div class="k">structure</div><div class="t">Order the story</div><div class="s">Rebuild the sequence of events</div></a>
        </div>`;
      const hl = (i) => $$('.ln', main).forEach((x) => x.classList.toggle('playing', +x.dataset.i === i));
      main.querySelector('[data-a=play]').onclick = () => FR.playLines(lines, { rate, onLine: hl, onEnd: () => { if (!listen && !rec.read) { rec.read = Date.now(); FR.save(); } } });
      main.querySelector('[data-a=stop]').onclick = () => { FR.stopLines(); hl(-1); };
      $$('[data-r]', main).forEach((b) => (b.onclick = () => { rate = +b.dataset.r; $$('[data-r]', main).forEach((x) => x.classList.toggle('on', x === b)); }));
      $$('.ln', main).forEach((x) => (x.onclick = () => { FR.stopLines(); hl(+x.dataset.i); FR.tts.say(lines[+x.dataset.i], { rate, onend: () => hl(-1) }); }));
      $$('[data-l]', main).forEach((b) => (b.onclick = () => { FR.stopLines(); FR.tts.say(lines[+b.dataset.l], { rate }); }));
      const en = main.querySelector('[data-a=en]'); if (en) en.onclick = () => { showEn = !showEn; draw(); };
      const tx = main.querySelector('[data-a=tx]'); if (tx) tx.onclick = () => { showTx = true; draw(); };
    }
    draw();
  }
  function pageSeq(id) {
    const s = FR.story(id); if (!s) return notFound();
    setTop('Order the story', '#/story/' + id);
    let lines = s.lines.map((l) => l[0]);
    if (lines.length > 8) { const st = Math.floor(Math.random() * (lines.length - 7)); lines = lines.slice(st, st + 8); }
    FR.runSet({ el: main, items: [{ id: 'Q' + id, t: 'seq', lines, why: 'Look for time markers (d\'abord, ensuite, puis, enfin, soudain, finalement), tenses (imparfait sets the scene, passé composé moves the action) and pronouns that refer back to earlier nouns.', src: { story: id } }], title: s.title + ' · order', mode: 'seq', onResult: () => FR.markBlock('reading'), onQuit: () => { location.hash = '#/story/' + id; } });
  }
  function pageDict(q) {
    let pool = [];
    if (q.story) { const s = FR.story(q.story); pool = s.lines.map((l) => [l[0], l[1]]); setTop('Dictation', '#/story/' + q.story); }
    else {
      const d = +(q.day || FR.curDay()); setTop('Dictation', '#/practice');
      STORIES.filter((s) => s.day <= d && s.day >= d - 3).forEach((s) => s.lines.forEach((l) => pool.push([l[0], l[1]])));
      LESSONS.filter((l) => l.day <= d && l.day >= d - 2).forEach((L) => lessonExamples(L).forEach((x) => pool.push(x)));
    }
    pool = pool.filter((p) => (p[0].length <= 110 && !/^—/.test(p[0]) && !/\d/.test(p[0])) || (q.story && !/\d/.test(p[0])));
    const items = sample(pool, Math.min(8, pool.length)).map((p, i) => ({ id: 'D-' + FR.normB(p[0]).slice(0, 40), t: 'dict', say: p[0].replace(/^—\s*/, ''), en: p[1], why: 'Listen for: silent endings (-ent, -s, -e), liaisons, and accents. Replay slowly and check every word ending.', src: { dict: true } }));
    FR.runSet({ el: main, items, title: 'Dictation', mode: 'dict', onResult: (r) => { if (r.n >= 5) FR.markBlock('listening'); }, onQuit: () => history.back() });
  }
  function pageShadow(a, b) {
    if (a === 'lesson') { const L = FR.lesson(b); if (!L) return notFound(); setTop('Shadow · Day ' + L.day, '#/lesson/' + L.day); return FR.runShadow({ el: main, lines: lessonExamples(L), title: 'Day ' + L.day + ' examples', back: '#/lesson/' + L.day }); }
    const s = FR.story(a); if (!s) return notFound();
    setTop('Shadow · ' + s.title, '#/story/' + a);
    FR.runShadow({ el: main, lines: s.lines.map((l) => [l[0].replace(/^—\s*/, ''), l[1]]), title: s.title, sid: a, back: '#/story/' + a });
  }

  /* ======================= WRITING ======================= */
  const ERRS = [
    [/\b(j'ai|tu as|il a|elle a|on a|nous avons|vous avez|ils ont|elles ont) (allée?s?|venue?s?|partie?s?|arrivée?s?|restée?s?|tombée?s?|née?s?|entrée?s?|rentrée?s?|devenue?s?|revenue?s?)\b/i, 'Movement verb with avoir. aller, venir, partir, arriver, rester, tomber, naître, entrer, rentrer, devenir use <b>être</b>: <i>je suis allé(e)</i>.'],
    [/\b(je suis|tu es|il est|elle est|j'étais) (\d+|un|deux|trois|quatre|cinq|six|sept|huit|neuf|dix|onze|douze|treize|quatorze|quinze|seize|vingt|trente|quarante)\S* ans\b/i, 'Age uses <b>avoir</b>: <i>j\'ai 22 ans</i>.'],
    [/\bà le\b/i, '<i>à le</i> → <b>au</b>.'], [/\bà les\b/i, '<i>à les</i> → <b>aux</b>.'], [/\bde le\b/i, '<i>de le</i> → <b>du</b>.'], [/\bde les\b/i, '<i>de les</i> → <b>des</b>.'],
    [/\bpas (un|une|des|du|de la)\b/i, 'After a negation, un/une/des/du/de la usually become <b>de</b>: <i>je n\'ai pas de voiture</i> (except after être).'],
    [/\bsi (je|tu|il|elle|on|nous|vous|ils|elles) (serai|seras|sera|serons|serez|seront|aurai|auras|aura|serais|serait|aurais|aurait|irai|ira|pourrai|pourrais)\b/i, 'Never futur or conditionnel right after <b>si</b>. Use si + présent or si + imparfait.'],
    [/\bplus bon(ne)?s?\b/i, '<i>plus bon</i> → <b>meilleur(e)</b>.'], [/\bplus bien\b/i, '<i>plus bien</i> → <b>mieux</b>.'],
    [/\b(elle|ma mère|ma sœur) a (\w+)ée\b/i, 'With <b>avoir</b>, the participle does not agree with the subject: <i>elle a mangé</i>.'],
    [/\bje (ai|aime|habite|étudie|écoute|arrive|étais|avais|allais)\b/i, '<i>je</i> becomes <b>j\'</b> before a vowel or silent h.'],
    [/\b(ils|elles) (ont|sont) (\w+)é\b(?!s)/i, 'Check agreement: with être, plural subjects need -s (<i>ils sont allés</i>). With avoir, no agreement.'],
    [/\bdepuis\b[^.]*\b(j'ai|il a|elle a|nous avons) (habité|travaillé|étudié)\b/i, 'For something still true, <b>depuis</b> takes the present: <i>j\'habite ici depuis 3 ans</i>.'],
    [/\bje suis (fini|mangé|fait|pris|vu|lu)\b/i, 'This verb uses <b>avoir</b> in the passé composé: <i>j\'ai fini</i>.'],
    [/\b(très|trop) (beaucoup)\b/i, '<i>très beaucoup</i> is not French. Use <b>beaucoup</b> or <b>vraiment beaucoup</b>.']
  ];
  function pageWriteList() {
    setTop('Writing', '#/practice'); const d = FR.curDay();
    main.innerHTML = `<div class="hero"><h1>Story and sentence writing</h1><p class="dim">Guided tasks. A live checklist tracks the structures you must use. After you submit you get an error scan and a model answer to compare and shadow.</p></div>
      <div class="grid g2">${WRITING.map((w) => { const r = S().wr[w.id]; return `<a class="tile ${w.day <= d ? '' : ''} ${r ? 'done' : ''}" href="#/write/${w.id}"><div class="row between"><span class="k">Day ${w.day} · ~${w.words} words</span>${r ? '<span class="pill ok">done</span>' : ''}</div><div class="t">${esc(w.title)}</div><div class="s">${esc(w.prompt.slice(0, 90))}…</div></a>`; }).join('')}</div>`;
  }
  function pageWrite(id) {
    const w = WRITING.find((x) => x.id === id); if (!w) return notFound();
    setTop(w.title, '#/write'); const st = S(), prev = st.wr[id];
    main.innerHTML = `<div class="eyebrow">Day ${w.day} · aim for ${w.words}+ words</div><h1>${esc(w.title)}</h1>
      <div class="card"><p style="margin-top:0">${esc(w.prompt)}</p><div class="row" style="gap:6px">${w.cues.map((c) => `<span class="pill">${esc(c)}</span>`).join('')}</div></div>
      <div class="card"><textarea id="txt" spellcheck="false" placeholder="Écris ici…" style="min-height:220px">${esc(prev ? prev.text : st['draft_' + id] || '')}</textarea>${FR.accBar()}
        <div class="row between" style="margin-top:10px"><span class="dim" id="wc"></span><button class="btn pri" id="sub">Check my text</button></div>
        <h4 style="margin-top:14px">Checklist</h4><ul class="check-list" id="cl"></ul></div>
      <div id="wout"></div>`;
    FR.bindAcc(main);
    const ta = $('#txt');
    const evalT = () => { const t = ta.value.toLowerCase(); const n = (ta.value.match(/[A-Za-zÀ-ÿœ']+/g) || []).length; $('#wc').textContent = n + ' words'; $('#cl').innerHTML = w.checks.map(([l, re]) => `<li class="${FR.re(re).test(t) ? 'yes' : ''}">${esc(l)}</li>`).join('') + `<li class="${n >= w.words ? 'yes' : ''}">At least ${w.words} words</li>`; return n; };
    let dt; ta.oninput = () => { evalT(); clearTimeout(dt); dt = setTimeout(() => { st['draft_' + id] = ta.value; FR.save(); }, 800); };
    evalT();
    $('#sub').onclick = () => {
      const text = ta.value.trim(); if (text.length < 20) return FR.toast('Write a bit more first.');
      const n = evalT(), hits = w.checks.filter(([, re]) => FR.re(re).test(text.toLowerCase())).length;
      const errs = []; text.split(/(?<=[.!?\n])\s*/).forEach((sent) => ERRS.forEach(([re, msg]) => { if (FR.re(re.source).test(sent)) errs.push([sent.trim(), msg]); }));
      st.wr[id] = { text, at: Date.now(), checks: hits, words: n }; delete st['draft_' + id]; FR.markBlock('writing'); FR.save(true);
      $('#wout').innerHTML = `<div class="card"><h3 style="margin-top:0">Feedback</h3>
        <p>Structures used: <b>${hits}/${w.checks.length}</b> · words: <b>${n}</b>${n < w.words ? ' <span style="color:var(--warn)">(below target)</span>' : ''}</p>
        ${errs.length ? `<h4>Possible errors found</h4>${errs.map(([s, m]) => `<div class="mistake"><div class="fr" style="color:var(--bad)">${esc(s)}</div><div class="dim" style="font-size:.92em">${m}</div></div>`).join('')}` : '<p class="dim">No common A2 errors detected by the scanner. That does not mean the text is error-free: compare line by line with the model below.</p>'}
        <h4>Self-check before you move on</h4><ul style="padding-left:1.2em;color:var(--tx2);font-size:.95em"><li>Every verb: right tense? right auxiliary? agreement with être?</li><li>Every noun: right gender and article?</li><li>Did you link ideas (parce que, donc, mais, ensuite)?</li><li>Read your text aloud once. Anything you stumble on, fix.</li></ul></div>
        <div class="card"><div class="row between"><h4 style="margin:0">Model answer</h4><button class="btn sm" id="pm">${ICON.play} Listen</button></div><div class="story-text" style="white-space:pre-line;margin-top:10px;font-size:1.05rem">${esc(w.model)}</div>
        <div class="row" style="margin-top:12px"><button class="btn" id="sm">${ICON.mic} Shadow the model</button></div></div>`;
      $('#pm').onclick = () => FR.playLines(w.model.split(/(?<=[.!?])\s+|\n+/).filter(Boolean));
      $('#sm').onclick = () => { setTop('Shadow · model', '#/write/' + id); FR.runShadow({ el: main, lines: w.model.split(/(?<=[.!?])\s+|\n+/).filter((x) => x.trim().length > 2).map((x) => [x.replace(/^—\s*/, ''), '']), title: w.title + ' · model', back: '#/write/' + id }); };
      $('#wout').scrollIntoView({ behavior: 'smooth' });
    };
  }

  /* ======================= CARDS ======================= */
  function pageCards() {
    setTop('Flashcards'); const d = FR.curDay(), decks = FR.allDecks();
    const totDue = decks.reduce((a, k) => a + FR.deckStats(k).due, 0);
    main.innerHTML = `<div class="hero"><div class="char-corner">${FR.CHAR.cat}</div><h1>Flashcards</h1><p class="dim">Spaced repetition: cards you know come back less often. Rate honestly. 15 new cards per session.</p></div>
      <div class="row" style="margin-bottom:14px"><a class="btn pri" href="#/cards/all">${ICON.cards} Review all due (${totDue})</a><a class="btn" href="#/cards/d${d}">Today's deck</a></div>
      <div class="card">${decks.map((k) => { const s = FR.deckStats(k); return `<div class="list-row"><div class="grow"><div class="row" style="gap:8px">${k.day ? `<span class="tag">day ${k.day}</span>` : '<span class="tag">verbs</span>'}<b style="font-weight:500">${esc(k.name)}</b></div><div class="dim" style="font-size:12.5px;margin-top:3px">${s.learned}/${s.total} learned · ${s.new} new${s.due ? ` · <span style="color:var(--gold)">${s.due} due</span>` : ''}</div><div class="progress ok" style="margin-top:6px;max-width:260px"><i style="width:${Math.round((s.learned / s.total) * 100)}%"></i></div></div><a class="btn sm ${k.day === d ? 'pri' : ''}" href="#/cards/${k.id}">Study</a></div>`; }).join('')}</div>`;
  }
  function pageDeck(id, q) {
    if (id === 'all') { const cards = []; FR.allDecks().forEach((k) => k.cards.forEach((c) => { if (S().srs[c.id] && S().srs[c.id].due <= Date.now()) cards.push(c); })); setTop('All due cards', '#/cards'); return FR.runCards({ el: main, deck: { id: 'all', name: 'All due cards', cards }, newMax: 0 }); }
    const k = FR.deck(id); if (!k) return notFound();
    setTop(k.name, '#/cards'); FR.runCards({ el: main, deck: k, cram: !!q.cram });
  }

  /* ======================= MOCKS ======================= */
  const MOCKS = {
    a1: { title: 'Assessment 1 (A1)', desc: 'Grammar 20 · reading · listening · dictation. About 35 min.', upto: 7, g: 20, read: 's6', listen: 's7', dict: 4, write: 'w5' },
    a2: { title: 'Mid-course evaluation', desc: 'Grammar 25 · reading · listening · dictation. About 45 min.', upto: 11, g: 25, read: 's10', listen: 's9', dict: 4, write: 'w7', focus: 8 },
    a3: { title: 'Final A2 mock exam', desc: 'Grammar 30 · B1 reading · listening · dictation · story order. About 60 min.', upto: 19, g: 30, read: 's20', listen: 's13', dict: 5, seq: 's16', write: 'w14', focus: 9 }
  };
  FR.MOCKS = MOCKS;
  function pageMock(id) {
    const M = MOCKS[id]; if (!M) return notFound();
    setTop(M.title, '#/practice'); const prev = S().mocks[id];
    main.innerHTML = `<div class="eyebrow">Covers days 1–${M.upto}</div><h1>${esc(M.title)}</h1>
      <div class="card"><h4>Sections</h4><ol style="padding-left:1.2em;margin:0"><li>Grammar and vocabulary: ${M.g} mixed questions</li><li>Reading: one text with questions (text visible)</li><li>Listening: one recording, no text</li><li>Dictation: ${M.dict} sentences</li>${M.seq ? '<li>Story order</li>' : ''}<li>After scoring: a writing task and a speaking task</li></ol>
      <p class="dim" style="margin-bottom:0">Do it in one sitting. No notes. The result gives a gap report by lesson.</p>${prev ? `<p>Best: <b>${prev.best}%</b> · last: ${prev.last}%</p>` : ''}</div>
      <button class="btn pri block" id="go">Start</button>`;
    $('#go').onclick = () => {
      let g = Object.values(FR.EX).filter((e) => e.src.lesson && e.src.lesson <= M.upto);
      const focus = M.focus ? g.filter((e) => e.src.lesson >= M.focus) : [];
      let gi = M.focus ? sample(focus, Math.round(M.g * 0.5)).concat(sample(g.filter((e) => e.src.lesson < M.focus), M.g - Math.round(M.g * 0.5))) : sample(g, M.g);
      gi = shuffle(gi).map((e) => Object.assign({}, e, { sec: 'Grammar' }));
      const rd = FR.storyEx(M.read).map((e) => Object.assign({}, e, { sec: 'Reading', ctx: { kind: 'read', story: M.read } }));
      const ls = FR.storyEx(M.listen).map((e) => Object.assign({}, e, { sec: 'Listening', ctx: { kind: 'listen', story: M.listen } }));
      const dpool = []; STORIES.filter((s) => s.day <= M.upto + 1 && s.id !== M.listen).forEach((s) => s.lines.forEach((l) => { if (l[0].length < 95 && !/^—/.test(l[0]) && !/\d/.test(l[0])) dpool.push(l); }));
      const dc = sample(dpool, M.dict).map((l) => ({ id: 'D-' + FR.normB(l[0]).slice(0, 40), t: 'dict', say: l[0], en: '', sec: 'Dictation', why: 'Check endings, agreement and accents word by word.', src: { dict: true } }));
      const sq = M.seq ? [{ id: 'Q' + M.seq, t: 'seq', lines: FR.story(M.seq).lines.map((l) => l[0]), sec: 'Story order', src: { story: M.seq }, why: 'Use connectors and tenses to rebuild the sequence.' }] : [];
      FR.runSet({ el: main, items: gi.concat(rd, ls, dc, sq), title: M.title, mode: 'mock',
        onResult: (r) => {
          if (r.quit && r.n < (gi.length / 2)) return;
          const m = (S().mocks[id] = S().mocks[id] || { best: 0 }); const first80 = r.pct >= 80 && m.best < 80; m.best = Math.max(m.best, r.pct); m.last = r.pct; m.at = Date.now();
          if (first80) { FR.addPts(100); setTimeout(() => FR.celebrate(3, esc(M.title) + ' passed', r.pct + '% · +100 points'), 600); }
          FR.save(true);
          setTimeout(() => { const box = document.createElement('div'); box.className = 'card'; box.innerHTML = `<h4>Now finish the exam</h4><p><b>Writing (20 min):</b> <a href="#/write/${M.write}">${esc(WRITING.find((w) => w.id === M.write).title)}</a></p><p style="margin-bottom:0"><b>Speaking (5 min):</b> record yourself for 2 minutes answering: ${id === 'a1' ? '"Présentez-vous et décrivez votre journée typique."' : id === 'a2' ? '"Racontez votre dernier week-end ou un voyage mémorable."' : '"Racontez votre parcours, votre situation actuelle et vos projets. Donnez un conseil à un nouvel arrivant."'} Use the recorder in any shadowing page, or your phone. Listen back and count tense errors.</p>`; const w = main.querySelector('.ex-wrap'); if (w) w.insertBefore(box, w.children[1]); }, 0);
        }, onQuit: () => { location.hash = '#/practice'; } });
    };
  }

  /* ======================= 50 WORDS A DAY ======================= */
  function wordsRec(d) { const st = S(); st.words = st.words || {}; return (st.words[d] = st.words[d] || {}); }
  function wordsCredit(d, kind) { const cur = FR.curDay(); if (+d === cur && kind !== 'revise') FR.markBlock('words'); else if (+d < cur) FR.markBlock('revise'); }
  function pageWords(d, mode) {
    d = +d; const t = FR.speak(d), dk = FR.deck('sp' + d); if (!t || !dk) return notFound();
    const rec = wordsRec(d), cur = FR.curDay();
    if (mode === 'learn' || mode === 'revise') {
      setTop((mode === 'revise' ? 'Revise · ' : '50 words · ') + t.title, '#/words/' + d);
      return FR.runCards({ el: main, deck: dk, cram: true, onDone: (r) => { if (r.unique >= dk.cards.length) { rec[mode === 'revise' ? 'revised' : 'learned'] = Date.now(); FR.save(); wordsCredit(d, mode); } } });
    }
    if (mode === 'quiz') {
      setTop('Word test · ' + t.title, '#/words/' + d);
      const cards = dk.cards, pick = sample(cards, Math.min(20, cards.length));
      const items = pick.map((c, i) => { const toEn = i % 2 === 0; const others = sample(cards.filter((x) => x.id !== c.id), 3); return { id: 'W-' + c.id + (toEn ? '-e' : '-f'), t: 'mcq', q: toEn ? esc(c.fr) : esc(c.en), opts: [toEn ? c.en : c.fr].concat(others.map((o) => (toEn ? o.en : o.fr))), a: toEn ? c.en : c.fr, why: `<b>${esc(c.fr)}</b> = ${esc(c.en)}`, label: toEn ? 'What does it mean?' : 'Say it in French', src: { words: d } }; });
      return FR.runSet({ el: main, items, title: 'Word test · Day ' + d, mode: 'words', onResult: (r) => { if (r.quit) return; rec.test = Math.max(rec.test || 0, r.pct); if (r.pct >= 70) wordsCredit(d, d < cur ? 'revise' : 'learn'); FR.save(true); }, onQuit: () => { location.hash = '#/words/' + d; } });
    }
    setTop('50 words · Day ' + d, '#/words');
    const st = FR.deckStats(dk);
    main.innerHTML = `<div class="eyebrow">Day ${d} · ${esc(t.lvl)} · ${d === cur ? 'today\'s words' : d === cur - 1 ? 'revise today' : 'words'}</div><h1>${esc(t.title)}</h1>
      <div class="card"><div class="row between"><div class="dim" style="font-size:13.5px">${dk.cards.length} words · learned ${st.learned}/${st.total}${rec.test ? ' · best test ' + rec.test + '%' : ''}${rec.learned ? ' · studied ✓' : ''}${rec.revised ? ' · revised ✓' : ''}</div></div>
        <div class="row" style="margin-top:10px"><a class="btn pri" href="#/words/${d}/${d < cur ? 'revise' : 'learn'}">${ICON.cards} ${d < cur ? 'Revise all 50' : 'Study all 50'}</a><a class="btn" href="#/words/${d}/quiz">Quick test (20)</a><button class="btn ghost" id="playall">${ICON.play} Listen to all</button></div>
        <p class="dim" style="font-size:12.5px;margin:10px 0 0">Go through every card once (or score 70%+ on the test) to finish this topic. Tomorrow these same 50 come back for revision.</p></div>
      <div class="card tight">${dk.cards.map((c, i) => `<div class="list-row"><span class="tag">${i + 1}</span><div class="grow"><span class="fr">${esc(c.fr)}</span><div class="dim" style="font-size:13px">${esc(c.en)}</div></div>${FR.sayBtn(c.fr.replace(/\(.*?\)/g, ''))}</div>`).join('')}</div>`;
    $('#playall').onclick = () => FR.playLines(dk.cards.map((c) => c.fr.replace(/\(.*?\)/g, '')), { gap: 700 });
  }
  function pageWordsList() {
    setTop('50 words a day', '#/practice'); const cur = FR.curDay();
    main.innerHTML = `<div class="hero"><div class="char-corner">${FR.CHAR.cat}</div><h1>50 words a day</h1><p class="dim">One topic per day, matched to the day's speaking topic. Learn today's 50, and revise yesterday's 50.</p></div>
      <div class="grid g2">${FR.SPEAK.map((t) => { const r = (S().words || {})[t.day] || {}, stt = FR.deckStats(FR.deck('sp' + t.day)); return `<a class="tile ${t.day === cur ? 'today' : ''} ${r.learned && r.revised ? 'done' : ''}" href="#/words/${t.day}"><div class="row between"><span class="k">Day ${t.day}${t.day === cur ? ' · today' : t.day === cur - 1 ? ' · revise' : ''}</span><span class="pill ${r.revised ? 'ok' : ''}">${stt.learned}/${stt.total}</span></div><div class="t">${esc(t.title)}</div><div class="s">${r.learned ? 'studied ✓ ' : ''}${r.revised ? 'revised ✓' : ''}${!r.learned && !r.revised ? '50 words' : ''}</div></a>`; }).join('')}</div>`;
  }

  /* ======================= EXPRESSIONS ======================= */
  const REG = { std: 'everyday', fam: 'casual', qc: 'Québec', idiom: 'idiom' };
  function pageExpressions(mode) {
    if (mode === 'quiz') {
      setTop('Expressions quiz', '#/expressions');
      const all = FR.EXPR.flatMap((c) => c.items), pick = sample(all, 12);
      const items = pick.map((it, i) => { const toEn = i % 2 === 1; const others = sample(all.filter((x) => x.id !== it.id), 3); return { id: 'E-' + it.id + (toEn ? '-e' : '-f'), t: 'mcq', q: toEn ? esc(it.fr) : esc(it.en), opts: [toEn ? it.en : it.fr].concat(others.map((o) => (toEn ? o.en : o.fr))), a: toEn ? it.en : it.fr, why: `<b>${esc(it.fr)}</b> · ${esc(it.en)}<br><i>${esc(it.ex)}</i> (${REG[it.reg] || it.reg})`, label: toEn ? 'What does a native mean?' : 'Which expression fits?', src: { expr: true } }; });
      return FR.runSet({ el: main, items, title: 'Native expressions', mode: 'expr', onResult: (r) => { if (r.quit && r.n < 8) return; const st = S(); st.expr = st.expr || {}; st.expr.quiz = Math.max(st.expr.quiz || 0, r.pct); FR.markBlock('expr'); FR.save(true); }, onQuit: () => { location.hash = '#/expressions'; } });
    }
    setTop('Native expressions', '#/practice');
    main.innerHTML = `<div class="hero"><div class="char-corner">${FR.CHAR.ghost}</div><h1>Native expressions</h1><p class="dim">What French speakers actually say: reactions, fillers, feelings, idioms and Québec French. Tap 🔊 to hear each one.</p></div>
      <div class="row" style="margin-bottom:14px"><a class="btn pri" href="#/expressions/quiz">${ICON.bolt} Quiz me (12)</a></div>
      ${FR.EXPR.map((c, ci) => `<details class="card tight" ${ci === 0 ? 'open' : ''}><summary><b>${esc(c.title)}</b> <span class="dim">(${c.items.length})</span></summary>
        <div class="row" style="margin:8px 0"><a class="btn sm" href="#/cards/ex-${c.id}?cram=1">${ICON.cards} Flashcards</a></div>
        ${c.items.map((it) => `<div class="list-row" style="align-items:flex-start"><div class="grow"><div class="row" style="gap:8px"><span class="fr" style="font-size:1.08rem">${esc(it.fr)}</span><span class="tag">${esc(REG[it.reg] || it.reg)}</span></div><div style="font-size:14px">${esc(it.en)}</div><div class="dim fr" style="font-size:14px;font-style:italic">${esc(it.ex)} ${FR.sayBtn(it.ex)}</div></div>${FR.sayBtn(it.fr)}</div>`).join('')}</details>`).join('')}`;
    $$('details', main).forEach((dd) => dd.addEventListener('toggle', () => { if (dd.open) { const st = S(); st.expr = st.expr || {}; st.expr.opened = (st.expr.opened || 0) + 1; if (st.expr.opened >= 3) FR.markBlock('expr'); FR.save(); } }));
  }

  /* ======================= FICTION ======================= */
  function pageFiction() {
    setTop('Fiction', '#/practice'); const cur = FR.curDay();
    main.innerHTML = `<div class="hero"><div class="char-corner">${FR.CHAR.prof}</div><h1>Fiction</h1><p class="dim">Original short stories to read for pleasure, A2 to B1. Each has audio, line-by-line translation, a glossary, questions, shadowing and dictation.</p></div>
      <div class="grid g2">${(window.FICTION || []).map((f) => { const r = S().st[f.id] || {}; return `<a class="tile ${r.quiz >= 80 ? 'done' : ''}" href="#/story/${f.id}"><div class="row between"><span class="k">${esc(f.genre)} · ${f.lvl}${f.day > cur ? ' · from day ' + f.day : ''}</span>${r.quiz != null ? `<span class="pill ${r.quiz >= 80 ? 'ok' : ''}">${r.quiz}%</span>` : ''}</div><div class="t">${esc(f.title)}</div><div class="s">${esc(f.focus)}</div></a>`; }).join('')}</div>`;
  }

  /* ======================= DASHBOARD ======================= */
  function bars(items, opt = {}) {
    const max = Math.max(opt.min || 1, ...items.map((x) => x.v)), H = 120, W = Math.max(280, items.length * 26), bw = W / items.length;
    return `<div style="overflow-x:auto"><svg viewBox="0 0 ${W} ${H + 34}" style="width:100%;min-width:${Math.min(W, 520)}px;height:auto;display:block">
      ${items.map((x, i) => { const h = Math.round((x.v / max) * H); return `<g><rect x="${i * bw + bw * 0.18}" y="${H - h + 6}" width="${bw * 0.64}" height="${Math.max(h, x.v ? 2 : 0)}" rx="3" fill="${x.hl ? 'var(--gold)' : 'var(--gold2)'}" opacity="${x.hl ? 1 : 0.75}"/>${x.v ? `<text x="${i * bw + bw / 2}" y="${H - h + 2}" text-anchor="middle" font-size="10" fill="var(--tx2)">${x.t || x.v}</text>` : ''}<text x="${i * bw + bw / 2}" y="${H + 22}" text-anchor="middle" font-size="10" fill="var(--tx3)">${esc(x.l)}</text></g>`; }).join('')}
      <line x1="0" x2="${W}" y1="${H + 6}" y2="${H + 6}" stroke="var(--line2)"/></svg></div>`;
  }
  function pageDashboard() {
    setTop('Dashboard', '#/'); const st = S(), days = [];
    for (let i = 13; i >= 0; i--) { const dt = new Date(); dt.setDate(dt.getDate() - i); days.push(dt); }
    const key = (dt) => FR.todayKey(dt), lab = (dt) => dt.toLocaleDateString(undefined, { day: 'numeric' }) + (dt.getDate() === 1 || days.indexOf(dt) === 0 ? ' ' + dt.toLocaleDateString(undefined, { month: 'short' }) : '');
    const topicsSeries = days.map((dt) => ({ v: (st.topics[key(dt)] || []).length, l: lab(dt), hl: key(dt) === FR.todayKey() }));
    const minSeries = days.map((dt) => { const m = Math.round((st.log[key(dt)] || 0) / 60); return { v: m, l: lab(dt), hl: key(dt) === FR.todayKey() }; });
    const totalTopics = Object.values(st.topics || {}).reduce((a, x) => a + x.length, 0);
    const ex = Object.values(st.ex); const c = ex.reduce((a, r) => a + r.c, 0), w = ex.reduce((a, r) => a + r.w, 0);
    const spDecks = Object.values(FR.SPEAK_DECKS), learnedWords = spDecks.reduce((a, d) => a + FR.deckStats(d).learned, 0);
    const mastery = [0, 0, 0, 0, 0]; LESSONS.forEach((L) => mastery[FR.mastery(L.day)]++);
    const storiesRead = STORIES.filter((s) => !s.fiction && st.st[s.id] && (st.st[s.id].quiz != null || st.st[s.id].read)).length, ficRead = (window.FICTION || []).filter((f) => st.st[f.id] && (st.st[f.id].quiz != null || st.st[f.id].read)).length;
    const spoke = Object.values(st.sp || {}).reduce((a, x) => a + (x.q || 0), 0), chats = Object.values(st.chat || {}).reduce((a, x) => a + (x.turns || 0), 0);
    const tile = (v, l) => `<div class="card tight stat"><b>${v}</b><span>${l}</span></div>`;
    main.innerHTML = `<div class="hero"><div class="char-corner">${FR.CHAR.student}</div><h1>Dashboard</h1><p class="dim">Progress is counted in topics finished per day, not hours.</p></div>
      <div class="grid g3">${tile(FR.topicsOn(FR.todayKey()), 'topics today')}${tile(totalTopics, 'topics finished, all time')}${tile(FR.streak(), 'day streak')}${tile(learnedWords + ' / ' + spDecks.length * 50, 'topic words learned')}${tile(c + w ? Math.round((c / (c + w)) * 100) + '%' : '–', 'accuracy · ' + (c + w) + ' answers')}${tile(FR.fmtMin(FR.totalSec()), 'active time')}</div>
      <div class="card"><h3 style="margin-top:0">Topics finished per day</h3>${bars(topicsSeries, { min: 4 })}</div>
      <div class="card"><h3 style="margin-top:0">Active minutes per day</h3>${bars(minSeries, { min: 30 })}<p class="dim" style="font-size:12.5px;margin-bottom:0">Daily target: ${st.target || 60} min. Counted only while you are actively using the app.</p></div>
      <div class="card"><h3 style="margin-top:0">Lesson mastery</h3>
        <div class="grid g3" style="margin-bottom:10px">${FR.MASTERY.map((m, i) => `<div class="stat"><b>${mastery[i]}</b><span>${m}</span></div>`).join('')}</div>
        ${LESSONS.map((L) => { const r = st.les[L.day] || {}; const b = r.best || 0; return `<a class="row" href="#/lesson/${L.day}/practice" style="gap:10px;margin:6px 0;color:var(--tx);flex-wrap:nowrap"><span class="tag" style="flex:none">D${L.day}</span><div class="progress ${b >= 80 ? 'ok' : ''}" style="flex:1"><i style="width:${b}%"></i></div><span class="dim" style="font-size:12px;width:36px;text-align:right">${b ? b + '%' : '–'}</span>${FR.masteryDots(FR.mastery(L.day))}</a>`; }).join('')}</div>
      <div class="grid g3">${tile(spoke, 'speaking answers recorded')}${tile(chats, 'chat turns with AI partner')}${tile(storiesRead + ' / ' + STORIES.filter((s) => !s.fiction).length, 'stories read')}${tile(ficRead + ' / ' + (window.FICTION || []).length, 'fiction read')}${tile(Object.keys(st.wr).length, 'texts written')}${tile(Object.entries(st.mocks).map(([k, m]) => m.best + '%').join(' · ') || '–', 'test scores')}</div>`;
  }

  /* ======================= AI CHAT PARTNER ======================= */
  const CHATS = [
    ['cafe', 'Au café', 'Order food and drinks, ask prices, pay.', 1],
    ['appart', 'Visiter un appartement', 'Ask a landlord about rent, heating, the lease.', 4],
    ['ami', 'Café avec un ami', 'Talk about your weekend and experiences (past tenses).', 9],
    ['medecin', 'Chez le médecin', 'Describe symptoms, since when, where it hurts.', 7],
    ['plainte', 'Retour en magasin', 'Return a faulty product politely.', 9],
    ['voyage', 'Planifier un voyage', 'Plan next summer\'s trip (future tenses).', 8],
    ['entretien', 'Entretien d\'embauche', 'Job interview for an IT support role.', 11],
    ['tcf', 'TCF Canada · tâche 2', 'Exam-style interaction: you ask the questions.', 12],
    ['libre', 'Conversation libre', 'Chat freely about your life and opinions.', 1]
  ];
  const CHAT_URL = 'https://cvgzypgaabjwunrfzmlr.supabase.co/functions/v1/fr-chat';
  const SRec = window.SpeechRecognition || window.webkitSpeechRecognition;
  function pageChat(id) {
    const st = S(); st.chat = st.chat || {}; const cur = FR.curDay(), cl = FR.cloud.get();
    if (!id) {
      setTop('AI chat partner', '#/practice');
      main.innerHTML = `<div class="hero"><div class="char-corner">${FR.CHAR.student}</div><h1>AI chat partner</h1><p class="dim">Roleplay real situations in French. Your partner stays in character, speaks at your level (day ${cur}), and corrects your mistakes after each message.</p></div>
        ${cl ? '' : `<div class="card"><b>Sign in to use the chat.</b><p class="dim" style="margin-bottom:8px">The chat runs through your cloud account so nobody else can use it.</p><a class="btn pri sm" href="#/me">Sign in</a></div>`}
        <div class="grid g2">${CHATS.map(([k, t, d, from]) => { const r = st.chat[k]; return `<a class="tile ${from <= cur ? '' : ''}" href="#/chat/${k}"><div class="row between"><span class="k">${from > cur ? 'best from day ' + from : 'ready'}</span>${r && r.turns ? `<span class="pill">${r.turns} turns</span>` : ''}</div><div class="t">${esc(t)}</div><div class="s">${esc(d)}</div></a>`; }).join('')}</div>`;
      return;
    }
    const sc = CHATS.find((c) => c[0] === id); if (!sc) return notFound();
    setTop(sc[1], '#/chat');
    const rec = (st.chat[id] = st.chat[id] || { msgs: [], turns: 0 });
    let msgs = (rec.msgs || []).slice(-16), busy = false, showEn = false, sessionTurns = 0;
    function save() { rec.msgs = msgs.slice(-16).map((m) => ({ role: m.role, content: m.content, en: m.en, corr: m.corr, sug: m.sug })); rec.at = Date.now(); FR.save(); }
    function bubble(m, i) {
      if (m.role === 'assistant') return `<div class="chat-row ai"><div class="chat-b ai"><div class="fr">${esc(m.content)} ${FR.sayBtn(m.content)}</div>${showEn && m.en ? `<div class="dim" style="font-size:13px;margin-top:4px">${esc(m.en)}</div>` : ''}</div></div>`;
      const corr = (m.corr || []).length ? `<div class="chat-corr">${m.corr.map((c) => `<div><span style="color:var(--bad);text-decoration:line-through">${esc(c.wrong)}</span> → <b class="fr" style="color:var(--ok)">${esc(c.right)}</b> ${FR.sayBtn(c.right)}<div class="dim" style="font-size:12.5px">${esc(c.why)}</div></div>`).join('')}</div>` : (m.checked ? '<div class="chat-corr ok">✓ No errors found</div>' : '');
      return `<div class="chat-row me"><div class="chat-b me">${esc(m.content)}</div>${corr}</div>`;
    }
    function draw() {
      const last = [...msgs].reverse().find((m) => m.role === 'assistant');
      main.innerHTML = `<div class="chat-wrap"><div class="row between" style="margin-bottom:8px"><span class="dim" style="font-size:13px">${esc(sc[2])} · level: day ${cur}</span><div class="row" style="gap:6px"><button class="btn sm ghost" data-a="en">${showEn ? 'Hide' : 'Show'} English</button><button class="btn sm ghost" data-a="reset">New chat</button></div></div>
        <div id="log" class="chat-log">${msgs.length ? msgs.map(bubble).join('') : FR.charCard('student', 'Écris ton premier message en français, ou appuie sur « Commencer » et ton partenaire ouvre la conversation.')}</div>
        ${last && last.sug ? `<div class="dim" style="font-size:13px;margin:6px 0">Idea: <button class="btn sm ghost" data-a="sug" style="font-family:var(--serif)">${esc(last.sug)}</button></div>` : ''}
        <div class="chat-input"><textarea id="msg" rows="2" placeholder="${msgs.length ? 'Réponds en français…' : 'Bonjour ! …'}" spellcheck="false"></textarea>
          <div class="row" style="gap:6px;margin-top:6px">${SRec ? `<button class="btn sm" data-a="mic">${ICON.mic} Speak</button>` : ''}<span class="grow"></span>${msgs.length ? '' : '<button class="btn sm" data-a="start">Commencer</button>'}<button class="btn sm pri" data-a="send">Send</button></div>${FR.accBar()}</div>
        <div id="cerr"></div>
        ${sessionTurns >= 3 ? `<button class="btn ghost block" data-a="review" style="margin-top:10px">Review my corrections</button>` : ''}</div>`;
      FR.bindAcc(main);
      const log = $('#log'); log.scrollTop = log.scrollHeight;
      const q = (a) => main.querySelector(`[data-a=${a}]`);
      q('send').onclick = () => send($('#msg').value);
      $('#msg').onkeydown = (e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send($('#msg').value); } };
      q('en').onclick = () => { showEn = !showEn; draw(); };
      q('reset').onclick = () => { if (msgs.length && !confirm('Start a new conversation? This one will be cleared.')) return; msgs = []; save(); draw(); };
      if (q('start')) q('start').onclick = () => send('', true);
      if (q('sug')) q('sug').onclick = () => { $('#msg').value = last.sug; $('#msg').focus(); };
      if (q('mic')) q('mic').onclick = () => { const r = new SRec(); r.lang = 'fr-FR'; r.interimResults = false; q('mic').innerHTML = '<span class="rec-dot"></span> Listening'; r.onresult = (e) => { $('#msg').value = ($('#msg').value + ' ' + e.results[0][0].transcript).trim(); }; r.onend = () => { const b = q('mic'); if (b) b.innerHTML = ICON.mic + ' Speak'; }; try { r.start(); } catch (e) { /* busy */ } };
      if (q('review')) q('review').onclick = review;
    }
    async function send(text, opening) {
      text = (text || '').trim(); if (busy || (!text && !opening)) return;
      if (!cl) { $('#cerr').innerHTML = '<div class="feedback bad">Sign in under <a href="#/me">Me</a> to use the chat.</div>'; return; }
      busy = true;
      if (text) { msgs.push({ role: 'user', content: text }); sessionTurns++; rec.turns = (rec.turns || 0) + 1; }
      draw(); $('#log').insertAdjacentHTML('beforeend', '<div class="chat-row ai"><div class="chat-b ai dim">…</div></div>'); $('#log').scrollTop = 1e9;
      try {
        const r = await fetch(CHAT_URL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ token: cl.token, scenario: id, day: cur, messages: msgs.map((m) => ({ role: m.role, content: m.content })) }) });
        const j = await r.json().catch(() => ({}));
        if (!r.ok || !j.ok) throw new Error(j.message || 'The chat could not answer (' + r.status + ').');
        const lastUser = [...msgs].reverse().find((m) => m.role === 'user'); if (text && lastUser) { lastUser.corr = j.corrections || []; lastUser.checked = true; }
        msgs.push({ role: 'assistant', content: j.reply, en: j.en, sug: j.suggestion });
        save(); busy = false; draw(); FR.tts.say(j.reply);
        if (sessionTurns >= 6) FR.markBlock('chat');
      } catch (e) { busy = false; if (text) { /* keep the message so it can be resent */ } draw(); $('#cerr').innerHTML = `<div class="feedback bad">${esc(e.message)}</div>`; }
    }
    function review() {
      const all = msgs.filter((m) => m.role === 'user' && (m.corr || []).length);
      FR.modal(`<h3>Corrections from this chat</h3>${all.length ? all.map((m) => m.corr.map((c) => `<div class="mistake"><div style="color:var(--bad)">${esc(c.wrong)}</div><div class="fr" style="color:var(--ok)">${esc(c.right)}</div><div class="dim" style="font-size:13px">${esc(c.why)}</div></div>`).join('')).join('') : '<p>No errors found so far. Très bien !</p>'}<button class="btn" onclick="FR.closeModal()">Close</button>`);
      if (sessionTurns >= 6) FR.markBlock('chat');
    }
    draw();
  }

  /* ======================= MAPS ======================= */
  function pageMaps() {
    setTop('Concept maps', '#/practice');
    main.innerHTML = `<div class="hero"><h1>Concept maps</h1><p class="dim">Every grammar topic as a tree. Tap a day to open its map.</p></div>${LESSONS.map((L) => `<details class="card tight"><summary style="cursor:pointer"><b>Day ${L.day}</b> · ${esc(L.title)}</summary>${renderMap(L.map)}<a class="btn sm" href="#/lesson/${L.day}">Open lesson</a></details>`).join('')}`;
    bindMap(main);
  }

  /* ======================= ME ======================= */
  function pageMe() {
    setTop('Me'); const st = S(), c = FR.cloud.get(), cs = FR.cloud.status();
    const ex = Object.values(st.ex); const cc = ex.reduce((a, r) => a + r.c, 0), ww = ex.reduce((a, r) => a + r.w, 0);
    const learned = FR.allDecks().reduce((a, k) => a + FR.deckStats(k).learned, 0);
    const voices = FR.tts.voices;
    main.innerHTML = `<div class="hero"><h1>Me</h1></div>
      <div class="card" id="acct">${c ? `<div class="row between"><div><div class="eyebrow">Cloud save</div><b>${esc(c.name)}</b></div><span class="sync-dot ${cs.err ? 'err' : 'on'}"></span></div>
        <p class="dim">Progress syncs automatically about every 20 seconds after changes, and when you leave the page. Last synced: ${c.at ? new Date(c.at).toLocaleString() : 'not yet'}.${cs.err ? ' <span style="color:var(--bad)">' + esc(cs.err) + '</span>' : ''}</p>
        <div class="row"><button class="btn pri" id="sync">Sync now</button><button class="btn ghost" id="out">Sign out</button></div>` : authForm(false)}</div>
      ${rankCard()}
      <div class="grid g3"><div class="card tight stat"><b>${FR.fmtMin(FR.totalSec())}</b><span>active time</span></div><div class="card tight stat"><b>${FR.streak()}</b><span>day streak</span></div><div class="card tight stat"><b>${cc + ww ? Math.round((cc / (cc + ww)) * 100) : 0}%</b><span>accuracy (${cc + ww})</span></div><div class="card tight stat"><b>${learned}</b><span>cards learned</span></div><div class="card tight stat"><b>${Object.keys(st.wr).length}</b><span>texts written</span></div><div class="card tight stat"><b>${st.mist.filter((i) => FR.EX[i]).length}</b><span>open mistakes</span></div></div>
      <div class="card"><h3 style="margin-top:0">Mastery tracker</h3><p class="dim" style="margin-top:0">0 not started · 1 introduced · 2 developing (&lt;80%) · 3 usable (80%+) · 4 retained (passed again on a later day)</p>
        ${LESSONS.map((L) => { const m = FR.mastery(L.day), r = st.les[L.day], nr = FR.nextReview(L.day); return `<a class="list-row" href="#/lesson/${L.day}/practice" style="color:var(--tx)"><span class="tag">D${L.day}</span><div class="grow" style="font-size:14px">${esc(L.title)}<div class="dim" style="font-size:12px">${r && r.tries ? 'best ' + r.best + '% · ' + r.tries + ' tries' : 'no attempts'}${nr ? ' · retest ' + nr.toLocaleDateString(undefined, { month: 'short', day: 'numeric' }) : ''}</div></div>${FR.masteryDots(m)}</a>`; }).join('')}</div>
      <div class="card"><h3 style="margin-top:0">Tests</h3>${Object.entries(MOCKS).map(([k, M]) => `<div class="list-row"><div class="grow">${esc(M.title)}</div>${st.mocks[k] ? `<span class="pill ${st.mocks[k].best >= 80 ? 'ok' : st.mocks[k].best >= 60 ? 'gold' : 'bad'}">${st.mocks[k].best}%</span>` : '<span class="dim" style="font-size:13px">not taken</span>'}<a class="btn sm" href="#/mock/${k}">Open</a></div>`).join('')}</div>
      <div class="card"><h3 style="margin-top:0">Settings</h3>
        <label>Day 1 of the program</label><input type="date" id="sd" value="${st.start}">
        <label>Speech speed: <b id="rv">${st.rate}×</b></label><input type="range" id="rate" min="0.6" max="1.1" step="0.05" value="${st.rate}" style="width:100%">
        <label>French voice ${voices.length ? '' : '(none found: your device will use its default)'}</label><select id="voice"><option value="">Automatic (best fr-FR)</option>${voices.map((v) => `<option ${v.name === st.voice ? 'selected' : ''} value="${esc(v.name)}">${esc(v.name)} · ${esc(v.lang)}</option>`).join('')}</select>
        <div class="row" style="margin-top:8px"><button class="btn sm" id="tv">${ICON.spk} Test voice</button></div>
        <label>Text size</label><div class="seg">${[15, 16, 17, 18].map((f) => `<button data-f="${f}" class="${st.font === f ? 'on' : ''}">${f}</button>`).join('')}</div>
        <label style="display:flex;gap:10px;align-items:center;margin-top:14px"><input type="checkbox" id="as" ${st.autoSay !== false ? 'checked' : ''}> Auto-play audio on flashcards</label></div>
      <div class="card"><h3 style="margin-top:0">Data</h3><p class="dim" style="margin-top:0">Save code: copy your progress to paste on another device without an account.</p>
        ${FR.getBackup() ? `<p class="dim" style="font-size:13px">Safety backup from ${new Date(FR.getBackup().at).toLocaleString()} (${esc(FR.getBackup().why)}). A backup is taken automatically before any sync merge, code load or reset.</p>` : ''}
        <div class="row"><button class="btn sm" id="cp">Copy save code</button>${FR.getBackup() ? '<button class="btn sm" id="rb">Restore backup</button>' : ''}<button class="btn sm" id="ld">Load a save code</button><button class="btn sm ghost" id="rs" style="color:var(--bad)">Reset this device</button></div></div>
      <p class="dim" style="font-size:12px;text-align:center">Built for the 20-day A1 → A2 → B1 plan · 3 hours a day.</p>`;
    bindAuth(false);
    if (c) { $('#sync').onclick = async () => { $('#sync').textContent = 'Syncing…'; const ok = await FR.cloud.sync(); FR.toast(ok ? 'Synced.' : 'Sync failed.', ok ? 'ok' : 'bad'); pageMe(); }; $('#out').onclick = async () => { await FR.cloud.logout(); topRight(); pageMe(); }; }
    $('#sd').onchange = (e) => { if (e.target.value) { st.start = e.target.value; FR.save(true); FR.toast('Start date updated.'); } };
    $('#rate').oninput = (e) => { st.rate = +e.target.value; $('#rv').textContent = st.rate + '×'; }; $('#rate').onchange = () => FR.save();
    $('#voice').onchange = (e) => { st.voice = e.target.value; FR.save(); FR.tts.say('Bonjour, je suis votre voix française.'); };
    $('#tv').onclick = () => FR.tts.say('Bonjour ! Aujourd\'hui, nous allons pratiquer le passé composé.');
    $$('[data-f]', main).forEach((b) => (b.onclick = () => { st.font = +b.dataset.f; applyFont(); FR.save(); pageMe(); }));
    $('#as').onchange = (e) => { st.autoSay = e.target.checked; FR.save(); };
    $('#cp').onclick = () => { const code = FR.packSave(); (navigator.clipboard ? navigator.clipboard.writeText(code) : Promise.reject()).then(() => FR.toast('Save code copied.', 'ok')).catch(() => FR.modal(`<h3>Save code</h3><textarea readonly style="min-height:160px">${esc(code)}</textarea><button class="btn" onclick="FR.closeModal()">Close</button>`)); };
    $('#ld').onclick = () => { FR.modal(`<h3>Load a save code</h3><p class="dim">The code is combined with this device's progress. Nothing is lost.</p><textarea id="lc" placeholder="FR1.…" style="min-height:140px"></textarea><div class="row" style="margin-top:10px"><button class="btn pri" id="lcg">Load</button><button class="btn ghost" onclick="FR.closeModal()">Cancel</button></div>`); $('#lcg').onclick = () => { const o = FR.unpackSave($('#lc').value); if (!o) return FR.toast('That is not a valid save code.', 'bad'); FR.setState(FR.merge(FR.S(), o), 'save code'); FR.closeModal(); FR.save(true); FR.toast('Progress combined.', 'ok'); route(); }; };
    const rbb = $('#rb'); if (rbb) rbb.onclick = (e) => { if (!e.target.dataset.sure) { e.target.dataset.sure = 1; e.target.textContent = 'Tap again to restore'; return; } const b = FR.getBackup(); FR.setState(b.data, 'before restore'); FR.save(true); FR.toast('Backup restored.', 'ok'); route(); };
    $('#rs').onclick = (e) => { const b = e.target; if (!b.dataset.sure) { b.dataset.sure = 1; b.textContent = 'Tap again to erase this device'; return; } FR.resetLocal(); FR.toast('This device was reset.'); route(); };
  }
  function authForm(welcome) {
    return `${welcome ? '' : '<div class="eyebrow">Cloud save</div><p style="margin-top:4px">Create a name and password to keep your progress on every device. No email needed.</p>'}
      <div class="seg" id="am"><button data-m="login" class="on">Sign in</button><button data-m="register">Create account</button></div>
      <input type="text" id="an" placeholder="Name (3–20 letters, numbers, - or _)" maxlength="20" autocomplete="username" autocapitalize="off" spellcheck="false" style="margin-top:10px">
      <input type="password" id="ap" placeholder="Password (6+ characters)" maxlength="72" autocomplete="current-password" style="margin-top:10px">
      <button class="btn pri block" id="ago" style="margin-top:12px">Sign in</button>
      <p class="dim" id="amsg" style="font-size:13px">There is no password reset. Pick one you will remember, and don't reuse an important password.</p>`;
  }
  function bindAuth(welcome) {
    const am = $('#am'); if (!am) return; let mode = 'login';
    $$('#am button').forEach((b) => (b.onclick = () => { mode = b.dataset.m; $$('#am button').forEach((x) => x.classList.toggle('on', x === b)); $('#ago').textContent = mode === 'login' ? 'Sign in' : 'Create account'; $('#ap').autocomplete = mode === 'login' ? 'current-password' : 'new-password'; }));
    const go = async () => {
      const msg = $('#amsg'); msg.style.color = ''; msg.textContent = 'Connecting…';
      const r = await FR.cloud.auth(mode, $('#an').value, $('#ap').value);
      if (!r.ok) { msg.style.color = 'var(--bad)'; msg.textContent = r.msg; return; }
      const st = S(); st.welcomed = true;
      if (mode === 'login' && r.data) {
        if (FR.isFresh(st)) FR.setState(Object.assign(r.data, { welcomed: true }), 'sign-in');
        else FR.setState(FR.merge(st, r.data), 'sign-in merge');
        await FR.cloud.sync();
        FR.toast('Welcome back, <b>' + esc(r.name) + '</b>. Progress from this device and the cloud was combined.', 'ok');
      } else { FR.toast(mode === 'register' ? 'Account created. Progress will sync.' : 'Signed in.', 'ok'); await FR.cloud.sync(); }
      FR.save(true); topRight();
      if (welcome) location.hash = '#/'; route();
    };
    $('#ago').onclick = go; $('#ap').onkeydown = (e) => { if (e.key === 'Enter') go(); };
  }
  function pageWelcome() {
    setTop('Français A2 → B1');
    $('#tabs').style.display = 'none';
    main.innerHTML = `<div class="welcome"><div class="row" style="gap:6px;align-items:flex-end;margin-bottom:6px"><div style="width:84px">${FR.CHAR.student}</div><div style="width:70px">${FR.CHAR.cat}</div><div style="width:84px;margin-left:auto">${FR.CHAR.prof}</div></div><div class="big">L'Académie<br><em>de français</em></div>
      <p class="dim">A 20-day, 3-hours-a-day plan from A1 basics to a strong A2, with the bridge into B1. Grammar with audio, concept maps, quizzes, flashcards, stories, listening, shadowing, dictation and writing.</p>
      <div class="card">${authForm(true)}</div>
      <button class="btn ghost block" id="skip">Continue without an account</button>
      <p class="dim" style="font-size:12.5px;text-align:center">Without an account, progress stays in this browser. You can sign in later from Me.</p></div>`;
    bindAuth(true);
    $('#skip').onclick = () => { S().welcomed = true; FR.save(); location.hash = '#/'; route(); };
  }
  function notFound() { setTop('Not found', '#/'); main.innerHTML = '<div class="empty"><h3>Page not found</h3><a class="btn" href="#/">Go to Today</a></div>'; }
  function applyFont() { document.documentElement.style.setProperty('--fs', (S().font || 16) + 'px'); }

  /* ======================= router ======================= */
  const ROUTES = [
    [/^\/?$/, '#/', () => pageToday()],
    [/^\/lessons$/, '#/lessons', () => pageLessons()],
    [/^\/lesson\/(\d+)(?:\/(\w+))?$/, '#/lessons', (m) => pageLesson(m[1], m[2])],
    [/^\/practice$/, '#/practice', () => pagePractice()],
    [/^\/quiz$/, '#/practice', (m, q) => pageQuiz(q)],
    [/^\/verbs$/, '#/verbs', () => pageVerbs()],
    [/^\/verb\/(.+)$/, '#/verbs', (m) => pageVerb(m[1])],
    [/^\/drill$/, '#/practice', (m, q) => pageDrill(q)],
    [/^\/stories$/, '#/stories', () => pageStories()],
    [/^\/story\/(\w+)(?:\/(\w+))?$/, '#/stories', (m) => pageStory(m[1], m[2])],
    [/^\/seq\/(\w+)$/, '#/practice', (m) => pageSeq(m[1])],
    [/^\/dict$/, '#/practice', (m, q) => pageDict(q)],
    [/^\/shadow\/(\w+)(?:\/(\d+))?$/, '#/practice', (m) => pageShadow(m[1], m[2])],
    [/^\/write$/, '#/write', () => pageWriteList()],
    [/^\/write\/(\w+)$/, '#/write', (m) => pageWrite(m[1])],
    [/^\/cards$/, '#/cards', () => pageCards()],
    [/^\/cards\/(\w+)$/, '#/cards', (m, q) => pageDeck(m[1], q)],
    [/^\/mock\/(\w+)$/, '#/practice', (m) => pageMock(m[1])],
    [/^\/maps$/, '#/maps', () => pageMaps()],
    [/^\/speak$/, '#/practice', () => pageSpeakList()],
    [/^\/words$/, '#/words', () => pageWordsList()],
    [/^\/words\/(\d+)(?:\/(\w+))?$/, '#/words', (m) => pageWords(m[1], m[2])],
    [/^\/expressions(?:\/(\w+))?$/, '#/expressions', (m) => pageExpressions(m[1])],
    [/^\/fiction$/, '#/fiction', () => pageFiction()],
    [/^\/dashboard$/, '#/dashboard', () => pageDashboard()],
    [/^\/chat(?:\/(\w+))?$/, '#/chat', (m) => pageChat(m[1])],
    [/^\/me$/, '#/me', () => pageMe()]
  ];
  function route() {
    FR.cleanup(); FR.closeModal();
    const h = location.hash.replace(/^#/, '') || '/';
    const [path, qs] = h.split('?');
    const q = Object.fromEntries(new URLSearchParams(qs || ''));
    if (!S().welcomed) { pageWelcome(); return; }
    $('#tabs').style.display = '';
    for (const [re, nav, fn] of ROUTES) { const m = path.match(re); if (m) { shell(nav); fn(m, q); window.scrollTo(0, 0); return; } }
    shell(''); notFound();
  }
  FR.route = route;
  addEventListener('hashchange', route);

  /* ---------- boot ---------- */
  applyFont();
  (async () => {
    main.innerHTML = '<div class="empty">Loading…</div>';
    const r = await FR.cloud.boot();
    if (r === 'pulled') FR.toast('Newer progress loaded from the cloud.', 'ok');
    if (r === 'expired') FR.toast('Cloud sign-in expired. Sign in again from Me.', 'bad');
    applyFont(); route();
  })();
})();
