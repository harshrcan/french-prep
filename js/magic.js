/* Magic-academy theme: starfield, wand sparks, owl flyover, points and ranks, celebrations. Original artwork. */
(function () {
  'use strict';
  const FR = window.FR, { esc } = FR;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const GOLD = ['#f3d58b', '#e4c27a', '#fff3c4', '#c9a24f', '#ffe9a8', '#b9d4ff'];

  /* ---------- particle canvas ---------- */
  let cv, ctx, parts = [], raf = null, dpr = 1;
  function ensure() {
    if (cv) return;
    cv = document.createElement('canvas'); cv.id = 'fx'; document.body.appendChild(cv); ctx = cv.getContext('2d');
    const size = () => { dpr = Math.min(2, devicePixelRatio || 1); cv.width = innerWidth * dpr; cv.height = innerHeight * dpr; };
    size(); addEventListener('resize', size);
  }
  function star(x, y, r, rot) {
    ctx.beginPath();
    for (let i = 0; i < 8; i++) { const a = rot + (i * Math.PI) / 4, rr = i % 2 ? r * 0.38 : r; ctx.lineTo(x + Math.cos(a) * rr, y + Math.sin(a) * rr); }
    ctx.closePath(); ctx.fill();
  }
  function loop() {
    ctx.clearRect(0, 0, cv.width, cv.height);
    parts = parts.filter((p) => p.life > 0);
    for (const p of parts) {
      p.life -= p.decay; p.x += p.vx; p.y += p.vy; p.vy += p.g; p.vx *= 0.985; p.vy *= 0.985; p.rot += p.spin;
      const a = Math.max(0, Math.min(1, p.life));
      ctx.globalAlpha = a; ctx.fillStyle = p.c; ctx.shadowColor = p.c; ctx.shadowBlur = 12 * dpr;
      if (p.shape === 'star') star(p.x * dpr, p.y * dpr, p.r * dpr * (0.6 + a * 0.4), p.rot);
      else { ctx.beginPath(); ctx.arc(p.x * dpr, p.y * dpr, p.r * dpr * a, 0, 6.283); ctx.fill(); }
    }
    ctx.globalAlpha = 1; ctx.shadowBlur = 0;
    raf = parts.length ? requestAnimationFrame(loop) : null;
    if (!raf) ctx.clearRect(0, 0, cv.width, cv.height);
  }
  function burst(x, y, n, o = {}) {
    if (reduce) return; ensure();
    for (let i = 0; i < n; i++) {
      const ang = o.up ? -Math.PI / 2 + (Math.random() - 0.5) * (o.spread || 2.4) : Math.random() * 6.283;
      const sp = (o.speed || 5) * (0.35 + Math.random());
      parts.push({ x, y, vx: Math.cos(ang) * sp, vy: Math.sin(ang) * sp, g: o.g ?? 0.09, life: 1, decay: 0.008 + Math.random() * 0.014, r: (o.size || 3) * (0.5 + Math.random()), c: GOLD[Math.floor(Math.random() * GOLD.length)], shape: Math.random() < (o.stars ?? 0.45) ? 'star' : 'dot', rot: Math.random() * 6, spin: (Math.random() - 0.5) * 0.2 });
    }
    if (!raf) raf = requestAnimationFrame(loop);
  }
  function trail(x0, y0, x1, y1, ms) {
    if (reduce) return; const t0 = performance.now();
    const step = (t) => { const k = Math.min(1, (t - t0) / ms), e = 1 - Math.pow(1 - k, 3); const x = x0 + (x1 - x0) * e, y = y0 + (y1 - y0) * e - Math.sin(k * Math.PI) * 60; burst(x, y, 3, { speed: 1.2, g: 0.02, size: 2.4 }); if (k < 1) requestAnimationFrame(step); else burst(x1, y1, 70, { speed: 6, size: 3.4 }); };
    requestAnimationFrame(step);
  }
  FR.sparkle = (el) => { const r = el && el.getBoundingClientRect ? el.getBoundingClientRect() : { left: innerWidth / 2, top: innerHeight / 2, width: 0, height: 0 }; burst(r.left + r.width / 2, r.top + Math.min(r.height, 60) / 2, 22, { speed: 3.2, size: 2.6, up: true, g: 0.05 }); };

  /* ---------- owl (original drawing) ---------- */
  const OWL = `<svg viewBox="0 0 120 90" class="owl"><g class="wing wl"><path d="M58 46 C40 20 14 18 4 30 C18 32 26 40 30 52 C40 50 50 50 58 46Z"/></g><g class="wing wr"><path d="M62 46 C80 20 106 18 116 30 C102 32 94 40 90 52 C80 50 70 50 62 46Z"/></g>
    <ellipse cx="60" cy="52" rx="17" ry="22" class="body"/><path d="M45 34 L49 24 L54 33 M75 34 L71 24 L66 33" class="ear"/><circle cx="53" cy="44" r="6.5" class="eyeo"/><circle cx="67" cy="44" r="6.5" class="eyeo"/><circle cx="53" cy="44" r="2.6" class="eye"/><circle cx="67" cy="44" r="2.6" class="eye"/><path d="M57 50 L60 56 L63 50Z" class="beak"/>
    <g class="letter"><rect x="48" y="70" width="24" height="15" rx="1.5"/><path d="M48 70 L60 79 L72 70"/><circle cx="60" cy="79" r="2.6" class="seal"/></g></svg>`;
  function owl() {
    if (reduce) return;
    const d = document.createElement('div'); d.className = 'owl-fly'; d.innerHTML = OWL; document.body.appendChild(d);
    setTimeout(() => d.remove(), 4200);
  }

  /* ---------- banner ---------- */
  const SPELLS = {
    1: ['Étincelles !', 'Joli coup de baguette !', 'Bien joué !', 'Ça brille !'],
    2: ['Sortilège réussi !', 'Magnifique !', 'Par ma baguette, bravo !', 'Quelle magie !', 'Formidable !'],
    3: ['Chapeau, grand sorcier !', 'Une magie éblouissante !', 'Victoire enchantée !', 'Tu as dompté la grammaire !']
  };
  let bannerT = null;
  function banner(lvl, title, sub) {
    let b = document.getElementById('spell'); if (b) b.remove(); clearTimeout(bannerT);
    b = document.createElement('div'); b.id = 'spell'; b.className = 'spell l' + lvl;
    const inc = SPELLS[lvl][Math.floor(Math.random() * SPELLS[lvl].length)];
    b.innerHTML = `<div class="spell-inc">${esc(inc)}</div>${title ? `<div class="spell-t">${title}</div>` : ''}${sub ? `<div class="spell-s">${sub}</div>` : ''}`;
    b.onclick = () => b.remove();
    document.body.appendChild(b);
    bannerT = setTimeout(() => { b.classList.add('out'); setTimeout(() => b.remove(), 500); }, lvl === 3 ? 4200 : 2800);
  }

  /* ---------- celebrations ---------- */
  FR.celebrate = (lvl, title, sub) => {
    const W = innerWidth, H = innerHeight;
    if (lvl >= 1) burst(W / 2, H * 0.32, lvl === 1 ? 40 : 70, { speed: lvl === 1 ? 4 : 6, size: 3 });
    if (lvl >= 2) trail(W * 0.08, H * 0.85, W * 0.5, H * 0.3, 700);
    if (lvl >= 3) { owl(); [0.25, 0.75, 0.5].forEach((fx, i) => setTimeout(() => burst(W * fx, H * (0.25 + 0.1 * i), 90, { speed: 7, size: 3.6 }), 900 + i * 450)); }
    banner(lvl, title, sub);
  };

  /* ---------- points and ranks ---------- */
  FR.RANKS = [[0, 'Novice', 'first spells'], [150, 'Apprenti', 'wand in hand'], [500, 'Initié', 'reads the spellbook'], [1200, 'Adepte', 'casts without notes'], [2500, 'Sorcier des verbes', 'tenses obey you'], [4500, 'Maître de l\'Académie', 'ready for B1']];
  FR.rank = (p) => { let r = FR.RANKS[0], next = null; FR.RANKS.forEach((x, i) => { if (p >= x[0]) { r = x; next = FR.RANKS[i + 1] || null; } }); return { name: r[1], desc: r[2], min: r[0], next }; };
  FR.addPts = (n) => {
    const S = FR.S(), before = FR.rank(S.pts || 0).name;
    S.pts = (S.pts || 0) + n;
    const after = FR.rank(S.pts);
    if (after.name !== before) setTimeout(() => FR.celebrate(3, 'New rank: <b>' + esc(after.name) + '</b>', esc(after.desc)), 600);
    const el = document.getElementById('pts'); if (el) { el.textContent = '✦ ' + S.pts; el.classList.remove('pop'); void el.offsetWidth; el.classList.add('pop'); }
  };

  /* ---------- hooks into the app ---------- */
  const rec = FR.record;
  FR.record = (ex, score) => { rec(ex, score); if (score >= 1) FR.addPts(2); else if (score > 0) FR.addPts(1); };
  const mb = FR.markBlock;
  FR.markBlock = (k) => {
    const r = FR.dayRec(FR.curDay()); const was = !!r.blocks[k]; mb(k);
    if (!was && r.blocks[k]) {
      FR.addPts(15);
      const all = FR.BLOCKS.every((b) => r.blocks[b.k]);
      if (all) { FR.addPts(50); setTimeout(() => FR.celebrate(3, 'Day ' + FR.curDay() + ' complete', 'All six blocks done. +50 points'), 400); }
      else setTimeout(() => FR.celebrate(2, 'Block complete', esc(FR.BLOCKS.find((b) => b.k === k).t) + ' · +15 points'), 200);
    }
  };
  const lr = FR.lessonResult;
  FR.lessonResult = (d, pct) => {
    const m0 = FR.mastery(d); lr(d, pct); const m1 = FR.mastery(d);
    if (m1 > m0 && m1 >= 3) { FR.addPts(m1 === 4 ? 40 : 25); setTimeout(() => FR.celebrate(m1 === 4 ? 3 : 2, 'Day ' + d + ': ' + FR.MASTERY[m1], m1 === 4 ? 'Retained after a later retest' : '80%+ reached'), 900); }
  };
  FR.onSetDone = (r, title) => {
    if (r.quit || r.n < 3) return;
    if (r.pct >= 90) FR.celebrate(2, esc(title || 'Set complete'), r.pct + '%');
    else if (r.pct >= 70) FR.celebrate(1, esc(title || 'Set complete'), r.pct + '%');
  };

  /* ---------- starfield + candles (decorative, static unless motion is allowed) ---------- */
  function sky() {
    const s = document.createElement('div'); s.id = 'sky'; s.setAttribute('aria-hidden', 'true');
    let html = '';
    for (let i = 0; i < 70; i++) html += `<i style="left:${Math.random() * 100}%;top:${Math.random() * 100}%;animation-delay:${(Math.random() * 6).toFixed(2)}s;opacity:${(0.15 + Math.random() * 0.45).toFixed(2)};transform:scale(${(0.5 + Math.random()).toFixed(2)})"></i>`;
    s.innerHTML = html; document.body.prepend(s);
  }
  sky();
})();
