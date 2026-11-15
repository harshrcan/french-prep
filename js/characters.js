/* Original cast for the Académie (drawn for this app):
   Élise the student, Professeur Aubépine, Minuit the cat, Léon the friendly ghost, plus the owl in magic.js. */
(function () {
  'use strict';
  const FR = window.FR, { esc } = FR;

  const SVG = {
    student: `<svg viewBox="0 0 120 150" class="ch ch-student" aria-hidden="true">
      <ellipse cx="60" cy="146" rx="30" ry="4" class="shadow"/>
      <path d="M32 146 L38 92 Q60 80 82 92 L88 146 Z" class="robe"/>
      <path d="M60 90 L52 146 M60 90 L68 146" class="robe-line"/>
      <g class="arm-wave"><path d="M80 98 Q96 86 100 66" class="sleeve"/><circle cx="100" cy="64" r="5" class="skin"/>
        <path d="M101 61 L112 34" class="wand"/><g class="wand-tip"><path d="M112 27 l1.6 4.4 4.4 1.6-4.4 1.6-1.6 4.4-1.6-4.4-4.4-1.6 4.4-1.6z" class="spark"/></g></g>
      <path d="M40 98 Q30 112 34 124" class="sleeve"/><circle cx="34" cy="126" r="5" class="skin"/>
      <path d="M44 88 Q60 98 76 88 L74 96 Q60 104 46 96 Z" class="scarf"/><path d="M70 94 L74 120 L66 120 L64 96 Z" class="scarf"/><path d="M66 106 h8 M65 113 h9" class="scarf-stripe"/>
      <circle cx="60" cy="64" r="21" class="skin"/>
      <path d="M38 62 Q36 38 60 38 Q84 38 82 62 Q80 50 72 47 Q66 54 52 50 Q42 52 38 62Z" class="hair"/>
      <circle cx="40" cy="58" r="6" class="hair"/><circle cx="80" cy="58" r="6" class="hair"/>
      <g class="eyes"><ellipse cx="52" cy="65" rx="2.6" ry="3.2" class="eye"/><ellipse cx="68" cy="65" rx="2.6" ry="3.2" class="eye"/></g>
      <path d="M53 75 Q60 81 67 75" class="mouth"/><circle cx="46" cy="72" r="3" class="blush"/><circle cx="74" cy="72" r="3" class="blush"/></svg>`,
    prof: `<svg viewBox="0 0 120 160" class="ch ch-prof" aria-hidden="true">
      <ellipse cx="60" cy="156" rx="34" ry="4" class="shadow"/>
      <path d="M26 156 L36 92 Q60 82 84 92 L94 156 Z" class="probe"/>
      <path d="M40 120 l2 4 4 1-4 1-2 4-2-4-4-1 4-1z M78 136 l1.5 3 3 1-3 1-1.5 3-1.5-3-3-1 3-1z" class="pstar"/>
      <g class="book"><rect x="70" y="104" width="26" height="20" rx="2" class="bookc"/><path d="M83 104 v20" class="bookl"/></g>
      <circle cx="60" cy="70" r="19" class="skin2"/>
      <path d="M41 72 Q42 112 60 120 Q78 112 79 72 Q72 84 60 82 Q48 84 41 72Z" class="beard"/>
      <path d="M50 80 Q60 76 70 80 Q65 84 60 82 Q55 84 50 80Z" class="beard"/>
      <path d="M47 62 q6-4 10 0 M63 62 q4-4 10 0" class="brow"/>
      <g class="eyes"><circle cx="52" cy="67" r="2.2" class="eye"/><circle cx="68" cy="67" r="2.2" class="eye"/></g>
      <path d="M58 73 Q60 76 62 73" class="nose"/>
      <g class="hat"><path d="M34 56 Q60 46 86 56 Q60 62 34 56Z" class="hatb"/><path d="M42 54 Q52 16 70 4 Q66 22 78 54 Q60 58 42 54Z" class="hatc"/>
        <path d="M60 30 a6 6 0 1 0 5 9 a5 5 0 1 1 -5-9z" class="moon"/></g></svg>`,
    cat: `<svg viewBox="0 0 120 120" class="ch ch-cat" aria-hidden="true">
      <rect x="18" y="96" width="84" height="14" rx="2" class="b1"/><rect x="24" y="84" width="74" height="12" rx="2" class="b2"/><rect x="20" y="72" width="78" height="12" rx="2" class="b3"/>
      <path d="M26 96 h76 M30 84 h66 M26 72 h70" class="bline"/>
      <g class="tail"><path d="M82 68 Q104 64 100 44 Q98 34 106 30" class="tailp"/></g>
      <path d="M40 72 Q36 48 50 40 L46 24 L58 34 Q64 32 70 34 L80 24 L78 42 Q90 50 84 72 Z" class="fur"/>
      <g class="eyes"><ellipse cx="56" cy="46" rx="3.6" ry="4.4" class="ceye"/><ellipse cx="72" cy="46" rx="3.6" ry="4.4" class="ceye"/><path d="M56 43 v6 M72 43 v6" class="pupil"/></g>
      <path d="M62 53 l2 2 2-2" class="cnose"/><path d="M48 54 h-10 M48 57 h-9 M80 54 h10 M80 57 h9" class="whisk"/></svg>`,
    ghost: `<svg viewBox="0 0 120 140" class="ch ch-ghost" aria-hidden="true">
      <ellipse cx="60" cy="134" rx="24" ry="3.5" class="shadow"/>
      <g class="gbody"><path d="M28 112 Q24 40 60 30 Q96 40 92 112 Q86 104 80 112 Q74 120 68 112 Q62 104 56 112 Q50 120 44 112 Q38 104 28 112Z" class="ghostp"/>
      <path d="M90 74 Q106 70 104 56" class="garm"/><path d="M104 56 L110 40" class="quill"/><path d="M110 40 Q118 30 112 22 Q106 32 110 40Z" class="feather"/>
      <g class="eyes"><ellipse cx="50" cy="64" rx="4" ry="5.5" class="geye"/><ellipse cx="70" cy="64" rx="4" ry="5.5" class="geye"/></g>
      <path d="M52 80 Q60 86 68 80" class="gmouth"/><circle cx="44" cy="74" r="3.2" class="gblush"/><circle cx="76" cy="74" r="3.2" class="gblush"/></g></svg>`
  };
  const NAMES = { student: 'Élise', prof: 'Professeur Aubépine', cat: 'Minuit', ghost: 'Léon' };
  FR.CHAR = SVG; FR.CHAR_NAMES = NAMES;

  // character with a speech bubble
  FR.charCard = (who, html, opt = {}) => `<div class="char-card ${opt.cls || ''}"><div class="char-fig">${SVG[who]}</div><div class="bubble"><div class="bubble-n">${esc(NAMES[who])}</div><div>${html}</div></div></div>`;

  const TIPS = [
    "Réponds toujours à voix haute, même seul. La bouche aussi doit apprendre.",
    "Une erreur corrigée vaut mieux que dix réponses devinées.",
    "Avant de regarder la réponse, essaie. Toujours.",
    "Être, avoir, aller, faire : maîtrise-les et la moitié du chemin est faite.",
    "Écoute l'histoire deux fois avant de lire le texte.",
    "Les verbes de mouvement prennent être. Pense à la maison !",
    "L'imparfait peint le décor, le passé composé raconte l'action.",
    "Quinze minutes de cartes chaque jour valent mieux que deux heures le dimanche."
  ];
  FR.profTip = (d) => TIPS[(d || 0) % TIPS.length];

  // pop-up character for celebrations
  FR.charPop = (who, side) => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const el = document.createElement('div'); el.className = 'char-pop ' + (side || 'left') + ' ' + who; el.innerHTML = SVG[who];
    document.body.appendChild(el); setTimeout(() => el.remove(), 3400);
  };
  const cel = FR.celebrate;
  FR.celebrate = (lvl, t, s) => { cel(lvl, t, s); if (lvl >= 2) FR.charPop('student', 'left'); if (lvl >= 3) setTimeout(() => FR.charPop('prof', 'right'), 500); };
})();
