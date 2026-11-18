/* Engine: exercise runner, flashcards, shadowing, story player. */
(function () {
  'use strict';
  const FR = window.FR, { $, $$, esc, shuffle, ICON } = FR;
  const ACC = ['é', 'è', 'ê', 'à', 'â', 'ç', 'ù', 'û', 'î', 'ï', 'ô', 'œ', 'ë', "'"];
  FR.cleanups = [];
  FR.cleanup = () => { FR.cleanups.forEach((f) => { try { f(); } catch (e) { /* ignore */ } }); FR.cleanups = []; if (FR.stopLines) FR.stopLines(); FR.tts.stop(); };
  const sayBtn = (t) => `<button class="say" data-say="${esc(t)}" aria-label="Listen">${ICON.spk}</button>`;
  FR.sayBtn = sayBtn;
  const accBar = () => `<div class="row" style="gap:6px;margin:8px 0 0">${ACC.map((c) => `<button type="button" class="btn sm ghost acc" data-c="${c}" style="min-width:38px;padding:4px 0">${c}</button>`).join('')}</div>`;
  function bindAcc(root) {
    $$('.acc', root).forEach((b) => b.addEventListener('mousedown', (e) => e.preventDefault()));
    $$('.acc', root).forEach((b) => b.addEventListener('click', () => {
      const el = root.querySelector('input[type=text], textarea'); if (!el) return;
      const s = el.selectionStart ?? el.value.length, e = el.selectionEnd ?? el.value.length;
      el.value = el.value.slice(0, s) + b.dataset.c + el.value.slice(e); el.focus(); el.selectionStart = el.selectionEnd = s + 1;
    }));
  }
  FR.bindAcc = bindAcc; FR.accBar = accBar;
  const TYPE_LABEL = { mcq: 'Choose the answer', fill: 'Fill in the blank', order: 'Build the sentence', write: 'Translate into French', dict: 'Dictation: write what you hear', seq: 'Put the story in order' };

  /* ======================= exercise runner ======================= */
  FR.runSet = function (opt) {
    const el = opt.el, items = opt.items.slice();
    let idx = 0, answered = false, cur = null;
    const res = [];
    const keyH = (e) => {
      if (!document.body.contains(el.querySelector('.ex-wrap'))) return;
      if (e.key === 'Enter' && !e.shiftKey) {
        const nb = el.querySelector('[data-a=next]'); const cb = el.querySelector('[data-a=check]');
        if (answered && nb) { e.preventDefault(); nb.click(); } else if (!answered && cb && (e.target.tagName !== 'TEXTAREA')) { e.preventDefault(); cb.click(); }
      } else if (!answered && cur && cur.t === 'mcq' && /^[1-4]$/.test(e.key) && e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') { const b = el.querySelectorAll('.opt')[+e.key - 1]; if (b) b.click(); }
    };
    addEventListener('keydown', keyH); FR.cleanups.push(() => removeEventListener('keydown', keyH));

    function ctxHtml(ex) {
      if (!ex.ctx) return '';
      const s = FR.story(ex.ctx.story); if (!s) return '';
      if (ex.ctx.kind === 'read') return `<details class="card tight" ${idx === 0 || items[idx - 1].ctx?.story !== ex.ctx.story ? 'open' : ''}><summary class="dim" style="cursor:pointer">Text: <b>${esc(s.title)}</b></summary><div class="story-text" style="margin-top:10px;font-size:1.05rem">${s.lines.map((l) => esc(l[0])).join(' ')}</div></details>`;
      return `<div class="card tight"><div class="row between"><span class="dim">${ICON.ear} Listen: <b>${esc(s.title)}</b> (no text)</span><span class="row"><button class="btn sm" data-a="ctxplay">${ICON.play} Play</button><button class="btn sm ghost" data-a="ctxslow">Slow</button><button class="btn sm ghost" data-a="ctxstop">${ICON.stop}</button></span></div></div>`;
    }
    function render() {
      answered = false; cur = items[idx];
      const ex = cur, pct = Math.round((idx / items.length) * 100);
      if (ex.t === 'mcq' && !ex._o) ex._o = ex.tf ? ex.opts.slice() : shuffle(ex.opts);
      if (ex.t === 'order' && !ex._w) { const toks = ex.a.replace(/\s+/g, ' ').trim().split(' '); toks[0] = toks[0].charAt(0).toLowerCase() + toks[0].slice(1); ex._w = shuffle(toks.concat(ex.extra || [])); ex._pick = []; }
      if (ex.t === 'seq' && !ex._s) { ex._s = shuffle(ex.lines.map((l, i) => i)); ex._pick = []; }
      let body = '';
      const label = ex.label || (ex.sec ? ex.sec + ' · ' : '') + (TYPE_LABEL[ex.t] || '');
      if (ex.t === 'mcq') body = `<div class="q-text">${ex.q}</div><div class="opts">${ex._o.map((o, i) => `<button class="opt" data-i="${i}">${esc(o)}</button>`).join('')}</div>`;
      else if (ex.t === 'fill') body = `<div class="q-text">${esc(ex.q).replace('___', '<span class="blank" id="blank">?</span>')}</div>${ex.hint ? `<div class="q-hint">Hint: ${esc(ex.hint)}</div>` : ''}<input type="text" id="ans" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Type the missing word(s)">${accBar()}`;
      else if (ex.t === 'order') body = `<div class="q-text" style="font-family:var(--sans);font-size:1.08rem">${esc(ex.en)}</div><div class="chips target" id="tgt"></div><div class="chips" id="pool">${ex._w.map((w, i) => `<button class="chip" data-i="${i}">${esc(w)}</button>`).join('')}</div>`;
      else if (ex.t === 'write') body = `<div class="q-text" style="font-family:var(--sans);font-size:1.12rem">${esc(ex.en)}</div><textarea id="ans" rows="3" style="min-height:90px" autocapitalize="sentences" spellcheck="false" placeholder="Écris en français…"></textarea>${accBar()}`;
      else if (ex.t === 'dict') body = `<div class="row" style="margin:6px 0 12px"><button class="btn pri" data-a="dplay">${ICON.play} Play</button><button class="btn" data-a="dslow">Slow</button>${ex.en ? '<button class="btn ghost" data-a="dhint">Show English</button>' : ''}</div><div class="q-hint" id="dhint" hidden>${esc(ex.en || '')}</div><textarea id="ans" rows="3" style="min-height:90px" spellcheck="false" placeholder="Write the full sentence"></textarea>${accBar()}`;
      else if (ex.t === 'seq') body = `<div class="q-hint">Tap the sentences in the order they happen. Tap again to undo.</div><div id="seq">${ex._s.map((li) => `<div class="seq-item" data-i="${li}"><span class="n"></span><span>${esc(ex.lines[li])}</span></div>`).join('')}</div>`;
      el.innerHTML = `<div class="ex-wrap">
        <div class="ex-head"><button class="icon-btn" data-a="quit" aria-label="Quit">✕</button><div class="progress"><i style="width:${pct}%"></i></div><span class="ex-count">${idx + 1}/${items.length}</span></div>
        ${ctxHtml(ex)}
        <div class="q-type">${esc(label)}</div>${body}
        <div id="fb"></div>
        <div class="row" id="acts" style="margin-top:14px">${ex.t === 'mcq' ? '' : '<button class="btn pri block" data-a="check">Check</button>'}</div></div>`;
      bind(ex);
      const inp = el.querySelector('#ans'); if (inp && matchMedia('(min-width: 900px)').matches) inp.focus();
      if (ex.t === 'dict') setTimeout(() => FR.tts.say(ex.say), 300);
      window.scrollTo(0, 0);
    }
    function bind(ex) {
      el.querySelector('[data-a=quit]').onclick = () => { if (res.length && !confirm('Quit this set? Answers so far are saved.')) return; finish(true); };
      const cb = el.querySelector('[data-a=check]'); if (cb) cb.onclick = () => check(ex);
      if (ex.ctx && ex.ctx.kind === 'listen') {
        const s = FR.story(ex.ctx.story);
        el.querySelector('[data-a=ctxplay]').onclick = () => FR.playLines(s.lines.map((l) => l[0]), { rate: FR.S().rate });
        el.querySelector('[data-a=ctxslow]').onclick = () => FR.playLines(s.lines.map((l) => l[0]), { rate: 0.7 });
        el.querySelector('[data-a=ctxstop]').onclick = () => FR.stopLines();
      }
      if (ex.t === 'mcq') $$('.opt', el).forEach((b) => (b.onclick = () => check(ex, ex._o[+b.dataset.i], b)));
      if (ex.t === 'fill' || ex.t === 'write' || ex.t === 'dict') bindAcc(el);
      if (ex.t === 'order') {
        const draw = () => { el.querySelector('#tgt').innerHTML = ex._pick.map((i, k) => `<button class="chip" data-k="${k}">${esc(ex._w[i])}</button>`).join(''); $$('#pool .chip', el).forEach((c) => c.classList.toggle('used', ex._pick.includes(+c.dataset.i))); $$('#tgt .chip', el).forEach((c) => (c.onclick = () => { if (answered) return; ex._pick.splice(+c.dataset.k, 1); draw(); })); };
        $$('#pool .chip', el).forEach((c) => (c.onclick = () => { if (answered || c.classList.contains('used')) return; ex._pick.push(+c.dataset.i); draw(); }));
        draw();
      }
      if (ex.t === 'seq') {
        const draw = () => $$('.seq-item', el).forEach((d) => { const p = ex._pick.indexOf(+d.dataset.i); d.classList.toggle('picked', p >= 0); d.querySelector('.n').textContent = p >= 0 ? p + 1 : ''; });
        $$('.seq-item', el).forEach((d) => (d.onclick = () => { if (answered) return; const i = +d.dataset.i, p = ex._pick.indexOf(i); if (p >= 0) ex._pick.splice(p, 1); else ex._pick.push(i); draw(); }));
      }
      if (ex.t === 'dict') {
        el.querySelector('[data-a=dplay]').onclick = () => FR.tts.say(ex.say);
        el.querySelector('[data-a=dslow]').onclick = () => FR.tts.say(ex.say, { rate: 0.65 });
        const h = el.querySelector('[data-a=dhint]'); if (h) h.onclick = () => { el.querySelector('#dhint').hidden = false; h.remove(); };
      }
    }
    function check(ex, picked, btn) {
      if (answered) return;
      let score = 0, input = '', extra = '', best = Array.isArray(ex.a) ? ex.a[0] : ex.a, note = '';
      if (ex.t === 'mcq') {
        input = picked; score = picked === ex.a ? 1 : 0;
        $$('.opt', el).forEach((b) => { b.disabled = true; const o = ex._o[+b.dataset.i]; if (o === ex.a) b.classList.add('right'); else if (b === btn) b.classList.add('wrong'); });
      } else if (ex.t === 'fill' || ex.t === 'write') {
        input = el.querySelector('#ans').value; if (!input.trim()) { el.querySelector('#ans').focus(); return; }
        const r = FR.check(input, ex.a); score = r.score; best = r.best; note = r.note;
        if (ex.t === 'fill') { const bl = el.querySelector('#blank'); bl.textContent = best; }
        if (ex.t === 'write' && score < 1) { const d = FR.diff(input, best); extra = `<div class="diff" style="margin:8px 0"><div class="dim" style="font-size:.85em">You wrote</div><div class="fr">${d.user}</div><div class="dim" style="font-size:.85em;margin-top:6px">Closest model answer</div><div class="fr">${d.target}</div></div>`; }
        el.querySelector('#ans').disabled = true;
      } else if (ex.t === 'order') {
        input = ex._pick.map((i) => ex._w[i]).join(' ');
        const r = FR.check(input, [ex.a]); score = r.score === 1 ? 1 : 0; best = ex.a;
      } else if (ex.t === 'dict') {
        input = el.querySelector('#ans').value; if (!input.trim()) return;
        const r = FR.check(input, [ex.say]); best = ex.say;
        const d = FR.diff(input, ex.say);
        score = r.score === 1 ? 1 : (r.score === 0.5 || d.pct >= 85) ? 0.5 : 0; note = r.note;
        extra = `<div class="diff" style="margin:8px 0"><div class="fr">${d.target}</div><div class="dim" style="font-size:.85em;margin-top:4px">${d.pct}% of words correct. Red = missed or misspelled.</div></div>`;
        el.querySelector('#ans').disabled = true;
      } else if (ex.t === 'seq') {
        if (ex._pick.length < ex.lines.length) { FR.toast('Place every sentence first.'); return; }
        const okN = ex._pick.filter((v, i) => v === i).length; score = okN === ex.lines.length ? 1 : okN >= ex.lines.length - 2 ? 0.5 : 0;
        input = ex._pick.join(','); best = '';
        extra = `<ol style="margin:6px 0 4px;padding-left:1.3em" class="fr">${ex.lines.map((l, i) => `<li style="${ex._pick[i] === i ? '' : 'color:var(--bad)'}">${esc(l)}</li>`).join('')}</ol>`;
      }
      answered = true;
      const r = { ex, score, input };
      res.push(r);
      FR.record(ex, score);
      showFb(ex, r, best, note, extra);
    }
    function showFb(ex, r, best, note, extra) {
      const cls = r.score >= 1 ? 'ok' : r.score > 0 ? 'warn' : 'bad';
      const verdict = r.score >= 1 ? 'Correct.' : note === 'accent' ? 'Almost: check accents, hyphens or apostrophes.' : note === 'typo' ? 'Almost: one-letter error.' : r.score > 0 ? 'Partly right.' : 'Not quite.';
      const isFr = ex.t !== 'mcq' || /[a-zàâçéèêëîïôûùœ]/i.test(best || '');
      const showAns = ex.t !== 'seq' && (r.score < 1 || ex.t === 'write' || ex.t === 'order' || ex.t === 'dict');
      const others = ex.t === 'write' && ex.a.length > 1 ? `<div class="dim" style="font-size:.88em">Also accepted: ${ex.a.filter((x) => x !== best).map(esc).join(' · ')}</div>` : '';
      const lessonLink = ex.src && ex.src.lesson && opt.mode !== 'lesson' ? `<a href="#/lesson/${ex.src.lesson}" class="dim" style="font-size:.88em">Review Day ${ex.src.lesson} concept →</a>` : '';
      el.querySelector('#fb').innerHTML = `<div class="feedback ${cls}"><div class="verdict">${verdict}</div>
        ${showAns && best ? `<div class="ans">${esc(ex.conj ? ex.show : best)} ${isFr && ex.t !== 'mcq' ? sayBtn(ex.conj ? ex.show : best) : ''}</div>` : ''}${extra}${others}
        ${ex.why ? `<div class="why">${ex.why}</div>` : ''}${lessonLink}
        ${ex.t === 'write' && r.score < 1 ? '<div style="margin-top:10px"><button class="btn sm" data-a="override">My answer means the same: count it</button></div>' : ''}</div>`;
      el.querySelector('#acts').innerHTML = `<button class="btn pri block" data-a="next">${idx + 1 < items.length ? 'Next' : 'See results'} ${ICON.next}</button>`;
      el.querySelector('[data-a=next]').onclick = () => { idx++; if (idx < items.length) render(); else finish(false); };
      const ov = el.querySelector('[data-a=override]'); if (ov) ov.onclick = () => { r.score = 1; const rec = FR.S().ex[ex.id]; if (rec) { rec.w = Math.max(0, rec.w - 1); rec.c++; rec.ok = true; } FR.S().mist = FR.S().mist.filter((x) => x !== ex.id); ov.parentNode.innerHTML = '<span class="pill ok">Counted as correct. Compare with the model anyway.</span>'; };
      const sc = el.querySelector('#fb .feedback'); if (sc && sc.getBoundingClientRect().bottom > innerHeight) sc.scrollIntoView({ behavior: 'smooth', block: 'center' });
      if (r.score >= 1 && (ex.t === 'order' || ex.t === 'write')) FR.tts.say(best);
      if (r.score >= 1 && FR.sparkle) FR.sparkle(el.querySelector('#fb .feedback'));
    }
    function finish(quit) {
      FR.save(true);
      const total = res.reduce((a, r) => a + r.score, 0), n = res.length;
      const pct = n ? Math.round((total / n) * 100) : 0;
      if (quit && !n) { opt.onQuit ? opt.onQuit() : history.back(); return; }
      const result = { pct, n, total, res, quit };
      if (opt.onResult) opt.onResult(result);
      if (FR.onSetDone) setTimeout(() => FR.onSetDone(result, opt.title), 250);
      const wrong = res.filter((r) => r.score < 1);
      const secs = {};
      res.forEach((r) => { const s = r.ex.sec || ''; if (!s) return; secs[s] = secs[s] || [0, 0]; secs[s][0] += r.score; secs[s][1]++; });
      const secHtml = Object.keys(secs).length ? `<div class="grid g3" style="margin:16px 0">${Object.entries(secs).map(([k, [a, b]]) => `<div class="card tight stat"><b>${Math.round((a / b) * 100)}%</b><span>${esc(k)} · ${a}/${b}</span></div>`).join('')}</div>` : '';
      const gaps = {};
      wrong.forEach((r) => { if (r.ex.src && r.ex.src.lesson) gaps[r.ex.src.lesson] = (gaps[r.ex.src.lesson] || 0) + 1; });
      const gapHtml = Object.keys(gaps).length ? `<div class="card"><h4>Gap report</h4>${Object.entries(gaps).sort((a, b) => b[1] - a[1]).map(([d, c]) => `<div class="list-row"><div class="grow"><b>Day ${d}</b> · ${esc(FR.lesson(d).title)}</div><span class="pill bad">${c} error${c > 1 ? 's' : ''}</span><a class="btn sm" href="#/lesson/${d}">Review</a></div>`).join('')}</div>` : '';
      const verdict = pct >= 90 ? 'Strong. This is independent-level accuracy.' : pct >= 80 ? 'Pass. Retest in a few days to lock it in.' : pct >= 60 ? 'Developing. Re-read the concept, then retry your mistakes.' : 'Not yet. Go back to the concept and the examples before retrying.';
      el.innerHTML = `<div class="ex-wrap">
        <div class="card" style="text-align:center;padding:28px 18px"><div class="eyebrow">${esc(opt.title || 'Results')}</div><div class="sum-big">${pct}%</div><div class="dim" style="margin-top:6px">${total % 1 ? total.toFixed(1) : total} / ${n} ${quit ? '(stopped early)' : ''}</div><p style="margin:12px 0 0">${verdict}</p></div>
        ${FR.charCard ? (quit ? '' : pct >= 80 ? FR.charCard('student', pct >= 90 ? 'Incroyable ! Un vrai sorcier du français !' : 'Bravo ! Encore un petit effort et c\'est parfait.') : pct >= 60 ? FR.charCard('prof', 'Pas mal. Relis les explications de tes erreurs, puis réessaie.') : FR.charCard('ghost', 'Ouh là… Ne t\'inquiète pas, même les fantômes se trompent. Retourne au cours et réessaie.')) : ''}
        ${secHtml}${gapHtml}
        ${wrong.length ? `<div class="card"><h4>Your mistakes (${wrong.length})</h4>${wrong.map((r) => `<div class="mistake"><div class="dim" style="font-size:.85em">${esc(r.ex.label || TYPE_LABEL[r.ex.t] || '')}</div><div class="fr">${r.ex.t === 'write' || r.ex.t === 'order' ? esc(r.ex.en) : r.ex.t === 'dict' ? '(dictation)' : r.ex.t === 'seq' ? '(story order)' : r.ex.q}</div>${r.input && r.ex.t !== 'seq' ? `<div style="color:var(--bad);font-size:.92em">You: ${esc(r.input)}</div>` : ''}${r.ex.t !== 'seq' ? `<div style="color:var(--ok);font-size:.92em">Answer: ${esc(r.ex.conj ? r.ex.show : Array.isArray(r.ex.a) ? r.ex.a[0] : r.ex.a || r.ex.say || '')}</div>` : ''}${r.ex.why ? `<div class="dim" style="font-size:.9em;margin-top:4px">${r.ex.why}</div>` : ''}</div>`).join('')}</div>` : ''}
        <div class="row">${wrong.length ? '<button class="btn pri" data-a="retry">' + ICON.redo + ' Retry mistakes</button>' : ''}<button class="btn" data-a="again">Run the set again</button><button class="btn ghost" data-a="done">Done</button></div></div>`;
      const strip = (e) => { const c = Object.assign({}, e); delete c._o; delete c._w; delete c._pick; delete c._s; return c; };
      const rb = el.querySelector('[data-a=retry]'); if (rb) rb.onclick = () => FR.runSet(Object.assign({}, opt, { items: shuffle(wrong.map((r) => Object.assign(strip(r.ex), { _review: true }))), title: 'Retry mistakes', onResult: null }));
      el.querySelector('[data-a=again]').onclick = () => FR.runSet(Object.assign({}, opt, { items: shuffle(opt.items.map(strip)) }));
      el.querySelector('[data-a=done]').onclick = () => (opt.onQuit ? opt.onQuit() : history.back());
      window.scrollTo(0, 0);
    }
    render();
  };

  /* ======================= line player (TTS, sequential) ======================= */
  let playToken = 0;
  FR.playLines = (lines, o = {}) => {
    const tok = ++playToken; let i = o.from || 0;
    const step = () => {
      if (tok !== playToken || i >= lines.length) { o.onLine && o.onLine(-1); o.onEnd && tok === playToken && o.onEnd(); return; }
      o.onLine && o.onLine(i);
      FR.tts.say(lines[i], { rate: o.rate, onend: () => { i++; setTimeout(step, o.gap ?? 350); } });
    };
    step();
  };
  FR.stopLines = () => { playToken++; FR.tts.stop(); };
  FR.cleanups.push(FR.stopLines);

  /* ======================= flashcards ======================= */
  FR.runCards = function (opt) {
    const S = FR.S(), d = opt.deck, el = opt.el;
    let q;
    if (opt.cram) q = shuffle(d.cards);
    else { const due = d.cards.filter((c) => S.srs[c.id] && S.srs[c.id].due <= Date.now()).sort((a, b) => S.srs[a.id].due - S.srs[b.id].due); const nw = d.cards.filter((c) => !S.srs[c.id]).slice(0, opt.newMax || 15); q = due.concat(nw); }
    if (!q.length) { el.innerHTML = `<div class="empty"><p>Nothing due in <b>${esc(d.name)}</b> right now.</p><a class="btn" href="#/cards/${d.id}?cram=1">Cram the whole deck anyway</a> <a class="btn ghost" href="#/cards">All decks</a></div>`; return; }
    let i = 0, flipped = false, done = 0, again = 0; const uniq = new Set();
    const startN = q.length;
    const keyH = (e) => { if (!el.querySelector('.fc')) return; if (e.key === ' ') { e.preventDefault(); flip(); } else if (flipped && /^[1-4]$/.test(e.key)) rate(+e.key - 1); };
    addEventListener('keydown', keyH); FR.cleanups.push(() => removeEventListener('keydown', keyH));
    function front(c) { return (S.dir || 'fr') === 'fr' ? c.fr : c.en; }
    function back(c) { return (S.dir || 'fr') === 'fr' ? c.en : c.fr; }
    function render() {
      flipped = false; const c = q[i];
      el.innerHTML = `<div class="ex-wrap"><div class="ex-head"><a class="icon-btn" href="#/cards" aria-label="Back">✕</a><div class="progress"><i style="width:${Math.round((done / (startN + again)) * 100)}%"></i></div><span class="ex-count">${q.length - i} left</span></div>
        <div class="row between" style="margin-bottom:6px"><span class="dim">${esc(d.name)}${opt.cram ? ' · cram' : ''}</span><button class="btn sm ghost" data-a="dir">${(S.dir || 'fr') === 'fr' ? 'FR → EN' : 'EN → FR'}</button></div>
        <div class="fc-stage"><div class="fc" id="fc"><div class="fc-face"><div class="fc-main">${esc(front(c))}</div>${(S.dir || 'fr') === 'fr' ? sayBtn(c.fr) : ''}<div class="fc-tap">tap to flip · space</div></div>
        <div class="fc-face fc-back"><div class="fc-main" style="font-size:1.5rem">${esc(back(c))}</div><div class="fc-sub">${esc(front(c))}</div>${sayBtn(c.fr)}</div></div></div>
        <div id="rate"><button class="btn block pri" data-a="flip">Show answer</button></div></div>`;
      el.querySelector('#fc').onclick = (e) => { if (e.target.closest('.say')) return; flip(); };
      el.querySelector('[data-a=flip]').onclick = flip;
      el.querySelector('[data-a=dir]').onclick = () => { S.dir = (S.dir || 'fr') === 'fr' ? 'en' : 'fr'; FR.save(); render(); };
      if ((S.dir || 'fr') === 'fr' && S.autoSay !== false) setTimeout(() => FR.tts.say(c.fr), 150);
    }
    function flip() {
      const fc = el.querySelector('#fc'); if (!fc) return;
      flipped = !flipped; fc.classList.toggle('flip', flipped);
      if (flipped) {
        if ((S.dir || 'fr') === 'en') FR.tts.say(q[i].fr);
        el.querySelector('#rate').innerHTML = `<div class="rate"><button class="btn again" data-g="0">Again<small>1</small></button><button class="btn" data-g="1">Hard<small>2</small></button><button class="btn good" data-g="2">Good<small>3</small></button><button class="btn easy" data-g="3">Easy<small>4</small></button></div>`;
        $$('[data-g]', el).forEach((b) => (b.onclick = () => rate(+b.dataset.g)));
      }
    }
    function rate(g) {
      const c = q[i]; FR.rate(c, g); done++; uniq.add(c.id);
      if (g === 0) { q.splice(Math.min(q.length, i + 4), 0, c); again++; }
      i++; FR.save();
      if (i >= q.length) end(); else render();
    }
    function end() {
      FR.save(true);
      if (opt.onDone) opt.onDone({ done, unique: uniq.size, total: startN });
      if (done >= 5 && FR.celebrate) FR.celebrate(done >= 20 ? 2 : 1, 'Cards reviewed', done + ' reviews');
      const st = FR.deckStats(d);
      el.innerHTML = `<div class="ex-wrap"><div class="card" style="text-align:center;padding:28px"><div class="eyebrow">${esc(d.name)}</div><div class="sum-big">${done}</div><div class="dim">reviews · ${again} relearned</div><p>Learned (box 3+): <b>${st.learned}</b> / ${st.total}</p></div>
        <div class="row"><a class="btn pri" href="#/cards">All decks</a><button class="btn" data-a="cram">Cram again</button></div></div>`;
      el.querySelector('[data-a=cram]').onclick = () => FR.runCards(Object.assign({}, opt, { cram: true }));
    }
    render();
  };

  /* ======================= shadowing ======================= */
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  FR.runShadow = function (opt) {
    const el = opt.el, lines = opt.lines, S = FR.S();
    let i = 0, showEn = false, rec = null, chunks = [], blobUrl = null, stream = null, recog = null, done = new Set();
    FR.cleanups.push(() => { try { rec && rec.state !== 'inactive' && rec.stop(); } catch (e) { /* */ } if (stream) stream.getTracks().forEach((t) => t.stop()); if (recog) try { recog.abort(); } catch (e) { /* */ } if (blobUrl) URL.revokeObjectURL(blobUrl); });
    const canRec = !!(navigator.mediaDevices && window.MediaRecorder);
    function render() {
      const l = lines[i];
      el.innerHTML = `<div class="ex-wrap">
        <div class="ex-head"><a class="icon-btn" href="${opt.back || '#/practice'}">✕</a><div class="progress"><i style="width:${Math.round((i / lines.length) * 100)}%"></i></div><span class="ex-count">${i + 1}/${lines.length}</span></div>
        <div class="eyebrow">${esc(opt.title)}</div>
        <div class="card"><div class="shadow-line">${esc(l[0])}</div><div class="dim" ${showEn ? '' : 'hidden'} id="en">${esc(l[1] || '')}</div>
          <div class="row" style="margin-top:14px"><button class="btn pri" data-a="play">${ICON.play} Listen</button><button class="btn" data-a="slow">Slow 0.7×</button><button class="btn ghost" data-a="en">${showEn ? 'Hide' : 'Show'} English</button></div></div>
        <div class="card"><h4>Your turn</h4><p class="dim" style="margin-top:0">1. Listen twice. 2. Say it at the same time as the audio (shadow). 3. Record yourself and compare.</p>
          <div class="row">${canRec ? `<button class="btn" data-a="rec">${ICON.mic} Record</button><button class="btn" data-a="mine" ${blobUrl ? '' : 'disabled'}>${ICON.play} Play mine</button>` : '<span class="dim">Recording is not supported in this browser.</span>'}
          ${SR ? `<button class="btn" data-a="sr">${ICON.check} Check my pronunciation</button>` : ''}</div>
          <div id="srout" style="margin-top:10px"></div></div>
        <div class="row between"><button class="btn ghost" data-a="prev" ${i ? '' : 'disabled'}>${ICON.back} Previous</button><button class="btn pri" data-a="next">${i + 1 < lines.length ? 'Next line' : 'Finish'} ${ICON.next}</button></div></div>`;
      const q = (a) => el.querySelector(`[data-a=${a}]`);
      q('play').onclick = () => FR.tts.say(l[0]);
      q('slow').onclick = () => FR.tts.say(l[0], { rate: 0.7 });
      q('en').onclick = () => { showEn = !showEn; render(); };
      q('prev').onclick = () => { i--; reset(); render(); };
      q('next').onclick = () => { if (i + 1 < lines.length) { i++; reset(); render(); } else finish(); };
      if (canRec) {
        q('rec').onclick = async () => {
          if (rec && rec.state === 'recording') { rec.stop(); return; }
          try { stream = stream || await navigator.mediaDevices.getUserMedia({ audio: true }); } catch (e) { FR.toast('Microphone permission was denied.', 'bad'); return; }
          chunks = []; rec = new MediaRecorder(stream);
          rec.ondataavailable = (e) => chunks.push(e.data);
          rec.onstop = () => { if (blobUrl) URL.revokeObjectURL(blobUrl); blobUrl = URL.createObjectURL(new Blob(chunks, { type: rec.mimeType })); done.add(i); const b = q('mine'); if (b) b.disabled = false; q('rec').innerHTML = ICON.mic + ' Record again'; new Audio(blobUrl).play(); };
          rec.start(); q('rec').innerHTML = '<span class="rec-dot"></span> Stop';
          setTimeout(() => { if (rec && rec.state === 'recording') rec.stop(); }, 15000);
        };
        q('mine').onclick = () => blobUrl && new Audio(blobUrl).play();
      }
      if (SR) q('sr').onclick = () => {
        const out = el.querySelector('#srout');
        recog = new SR(); recog.lang = 'fr-FR'; recog.interimResults = false; recog.maxAlternatives = 3;
        out.innerHTML = '<span class="rec-dot"></span> <span class="dim">Listening… say the sentence.</span>';
        recog.onresult = (e) => {
          const alts = Array.from(e.results[0]).map((a) => a.transcript);
          let best = null; alts.forEach((t) => { const d = FR.diff(t, l[0]); if (!best || d.pct > best.d.pct) best = { t, d }; });
          done.add(i);
          out.innerHTML = `<div class="feedback ${best.d.pct >= 85 ? 'ok' : best.d.pct >= 60 ? 'warn' : 'bad'}"><div class="verdict">${best.d.pct}% of words recognized</div><div class="dim" style="font-size:.85em">Heard: "${esc(best.t)}"</div><div class="diff fr" style="margin-top:6px">${best.d.target}</div><div class="dim" style="font-size:.85em;margin-top:6px">Red words were not recognized: work on those sounds. Recognition is strict with liaisons and nasal vowels.</div></div>`;
        };
        recog.onerror = (e) => { out.innerHTML = `<span class="dim">Speech check failed (${esc(e.error)}). Try again, or use Record.</span>`; };
        recog.onend = () => { if (/Listening/.test(out.textContent)) out.innerHTML = '<span class="dim">Nothing heard. Tap again and speak clearly.</span>'; };
        try { recog.start(); } catch (e) { /* already started */ }
      };
      setTimeout(() => FR.tts.say(l[0]), 250);
    }
    function reset() { if (blobUrl) URL.revokeObjectURL(blobUrl); blobUrl = null; }
    function finish() {
      if (opt.sid) { const r = (S.st[opt.sid] = S.st[opt.sid] || {}); r.shadow = (r.shadow || 0) + done.size; }
      const dr = FR.dayRec(FR.curDay()); dr.shadowN = (dr.shadowN || 0) + done.size;
      if (dr.shadowN >= 6) FR.markBlock('speaking');
      if (done.size >= 3 && FR.celebrate) FR.celebrate(1, 'Shadowing done', done.size + ' lines spoken');
      FR.save(true);
      el.innerHTML = `<div class="ex-wrap"><div class="card" style="text-align:center;padding:28px"><div class="eyebrow">${esc(opt.title)}</div><div class="sum-big">${done.size}</div><div class="dim">lines practised with recording or speech check</div><p>Shadow the whole text again tomorrow at a faster speed. Speaking improves with repetition, not with new material.</p></div>
        <div class="row"><button class="btn pri" data-a="again">${ICON.redo} Again</button><a class="btn" href="${opt.back || '#/practice'}">Back</a></div></div>`;
      el.querySelector('[data-a=again]').onclick = () => FR.runShadow(opt);
    }
    render();
  };
})();
