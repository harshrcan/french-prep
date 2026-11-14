/* Verb bank + conjugation engine.
   p = present (je, tu, il, nous, vous, ils). Regular verbs omit p and are generated.
   aux = auxiliary for passé composé. fut = irregular future/conditional stem. imp = irregular imparfait stem.
   f = family (core, er, ir, re, refl, move). d = curriculum day the verb is introduced. */
(function () {
  const V = [
    // ---- core irregulars
    { i: 'être', e: 'to be', f: 'core', d: 1, p: ['suis', 'es', 'est', 'sommes', 'êtes', 'sont'], pp: 'été', aux: 'avoir', fut: 'ser', imp: 'ét' },
    { i: 'avoir', e: 'to have', f: 'core', d: 1, p: ['ai', 'as', 'a', 'avons', 'avez', 'ont'], pp: 'eu', aux: 'avoir', fut: 'aur' },
    { i: "s'appeler", e: 'to be called', f: 'refl', d: 1, p: ['appelle', 'appelles', 'appelle', 'appelons', 'appelez', 'appellent'], pp: 'appelé', fut: 'appeller' },
    { i: 'aller', e: 'to go', f: 'core', d: 3, p: ['vais', 'vas', 'va', 'allons', 'allez', 'vont'], pp: 'allé', aux: 'être', fut: 'ir' },
    { i: 'venir', e: 'to come', f: 'core', d: 3, p: ['viens', 'viens', 'vient', 'venons', 'venez', 'viennent'], pp: 'venu', aux: 'être', fut: 'viendr' },
    { i: 'faire', e: 'to do, to make', f: 'core', d: 3, p: ['fais', 'fais', 'fait', 'faisons', 'faites', 'font'], pp: 'fait', aux: 'avoir', fut: 'fer' },
    { i: 'prendre', e: 'to take', f: 'core', d: 3, p: ['prends', 'prends', 'prend', 'prenons', 'prenez', 'prennent'], pp: 'pris', aux: 'avoir' },
    { i: 'vouloir', e: 'to want', f: 'core', d: 4, p: ['veux', 'veux', 'veut', 'voulons', 'voulez', 'veulent'], pp: 'voulu', aux: 'avoir', fut: 'voudr' },
    { i: 'pouvoir', e: 'to be able to, can', f: 'core', d: 4, p: ['peux', 'peux', 'peut', 'pouvons', 'pouvez', 'peuvent'], pp: 'pu', aux: 'avoir', fut: 'pourr' },
    { i: 'devoir', e: 'to have to, must', f: 'core', d: 4, p: ['dois', 'dois', 'doit', 'devons', 'devez', 'doivent'], pp: 'dû', aux: 'avoir', fut: 'devr' },
    { i: 'savoir', e: 'to know (a fact, how to)', f: 'core', d: 5, p: ['sais', 'sais', 'sait', 'savons', 'savez', 'savent'], pp: 'su', aux: 'avoir', fut: 'saur', imp: 'sav' },
    // ---- -ER
    { i: 'parler', e: 'to speak', f: 'er', d: 2 }, { i: 'habiter', e: 'to live (in a place)', f: 'er', d: 2 },
    { i: 'travailler', e: 'to work', f: 'er', d: 2 }, { i: 'aimer', e: 'to like, to love', f: 'er', d: 2 },
    { i: 'étudier', e: 'to study', f: 'er', d: 2 },
    { i: 'manger', e: 'to eat', f: 'er', d: 2, p: ['mange', 'manges', 'mange', 'mangeons', 'mangez', 'mangent'] },
    { i: 'commencer', e: 'to begin', f: 'er', d: 2, p: ['commence', 'commences', 'commence', 'commençons', 'commencez', 'commencent'] },
    { i: 'regarder', e: 'to watch, to look at', f: 'er', d: 2 }, { i: 'écouter', e: 'to listen to', f: 'er', d: 2 },
    { i: 'chercher', e: 'to look for', f: 'er', d: 2 }, { i: 'trouver', e: 'to find', f: 'er', d: 2 },
    { i: 'donner', e: 'to give', f: 'er', d: 14 },
    { i: 'acheter', e: 'to buy', f: 'er', d: 4, p: ['achète', 'achètes', 'achète', 'achetons', 'achetez', 'achètent'], fut: 'achèter' },
    { i: 'préférer', e: 'to prefer', f: 'er', d: 16, p: ['préfère', 'préfères', 'préfère', 'préférons', 'préférez', 'préfèrent'] },
    { i: 'appeler', e: 'to call', f: 'er', d: 14, p: ['appelle', 'appelles', 'appelle', 'appelons', 'appelez', 'appellent'], fut: 'appeller' },
    { i: 'payer', e: 'to pay', f: 'er', d: 4, p: ['paie', 'paies', 'paie', 'payons', 'payez', 'paient'], fut: 'paier' },
    { i: 'visiter', e: 'to visit (a place)', f: 'er', d: 9 }, { i: 'voyager', e: 'to travel', f: 'er', d: 9, p: ['voyage', 'voyages', 'voyage', 'voyageons', 'voyagez', 'voyagent'] },
    { i: 'jouer', e: 'to play', f: 'er', d: 2 }, { i: 'marcher', e: 'to walk', f: 'er', d: 9 },
    { i: 'penser', e: 'to think', f: 'er', d: 15 }, { i: 'porter', e: 'to wear, to carry', f: 'er', d: 6 },
    { i: 'demander', e: 'to ask', f: 'er', d: 15 }, { i: 'inviter', e: 'to invite', f: 'er', d: 9 },
    { i: 'envoyer', e: 'to send', f: 'er', d: 14, p: ['envoie', 'envoies', 'envoie', 'envoyons', 'envoyez', 'envoient'], fut: 'enverr' },
    { i: 'téléphoner', e: 'to phone', f: 'er', d: 14 }, { i: 'aider', e: 'to help', f: 'er', d: 14 },
    { i: 'rêver', e: 'to dream', f: 'er', d: 15 }, { i: 'cuisiner', e: 'to cook', f: 'er', d: 4 },
    { i: 'oublier', e: 'to forget', f: 'er', d: 9 }, { i: 'passer', e: 'to spend (time), to pass', f: 'er', d: 9 },
    // ---- être-auxiliary movement verbs
    { i: 'arriver', e: 'to arrive', f: 'move', d: 10, aux: 'être' }, { i: 'partir', e: 'to leave', f: 'move', d: 6, p: ['pars', 'pars', 'part', 'partons', 'partez', 'partent'], pp: 'parti', aux: 'être' },
    { i: 'entrer', e: 'to enter', f: 'move', d: 10, aux: 'être' }, { i: 'sortir', e: 'to go out', f: 'move', d: 6, p: ['sors', 'sors', 'sort', 'sortons', 'sortez', 'sortent'], pp: 'sorti', aux: 'être' },
    { i: 'monter', e: 'to go up', f: 'move', d: 10, aux: 'être' }, { i: 'descendre', e: 'to go down', f: 'move', d: 10, aux: 'être' },
    { i: 'rester', e: 'to stay', f: 'move', d: 10, aux: 'être' }, { i: 'tomber', e: 'to fall', f: 'move', d: 10, aux: 'être' },
    { i: 'rentrer', e: 'to go back home', f: 'move', d: 10, aux: 'être' }, { i: 'retourner', e: 'to return', f: 'move', d: 10, aux: 'être' },
    { i: 'naître', e: 'to be born', f: 'move', d: 10, p: ['nais', 'nais', 'naît', 'naissons', 'naissez', 'naissent'], pp: 'né', aux: 'être' },
    { i: 'mourir', e: 'to die', f: 'move', d: 10, p: ['meurs', 'meurs', 'meurt', 'mourons', 'mourez', 'meurent'], pp: 'mort', aux: 'être', fut: 'mourr' },
    { i: 'devenir', e: 'to become', f: 'move', d: 10, p: ['deviens', 'deviens', 'devient', 'devenons', 'devenez', 'deviennent'], pp: 'devenu', aux: 'être', fut: 'deviendr' },
    { i: 'revenir', e: 'to come back', f: 'move', d: 10, p: ['reviens', 'reviens', 'revient', 'revenons', 'revenez', 'reviennent'], pp: 'revenu', aux: 'être', fut: 'reviendr' },
    // ---- -IR
    { i: 'finir', e: 'to finish', f: 'ir', d: 6 }, { i: 'choisir', e: 'to choose', f: 'ir', d: 6 },
    { i: 'réussir', e: 'to succeed, to pass', f: 'ir', d: 6 }, { i: 'grandir', e: 'to grow up', f: 'ir', d: 12 },
    { i: 'réfléchir', e: 'to think, to reflect', f: 'ir', d: 6 },
    { i: 'dormir', e: 'to sleep', f: 'ir', d: 6, p: ['dors', 'dors', 'dort', 'dormons', 'dormez', 'dorment'], pp: 'dormi' },
    { i: 'ouvrir', e: 'to open', f: 'ir', d: 6, p: ['ouvre', 'ouvres', 'ouvre', 'ouvrons', 'ouvrez', 'ouvrent'], pp: 'ouvert' },
    { i: 'offrir', e: 'to offer, to give (a gift)', f: 'ir', d: 14, p: ['offre', 'offres', 'offre', 'offrons', 'offrez', 'offrent'], pp: 'offert' },
    { i: 'courir', e: 'to run', f: 'ir', d: 6, p: ['cours', 'cours', 'court', 'courons', 'courez', 'courent'], pp: 'couru', fut: 'courr' },
    { i: 'tenir', e: 'to hold', f: 'ir', d: 6, p: ['tiens', 'tiens', 'tient', 'tenons', 'tenez', 'tiennent'], pp: 'tenu', fut: 'tiendr' },
    // ---- -RE / -OIR / -OIRE
    { i: 'attendre', e: 'to wait (for)', f: 're', d: 6 }, { i: 'entendre', e: 'to hear', f: 're', d: 6 },
    { i: 'répondre', e: 'to answer', f: 're', d: 15 }, { i: 'vendre', e: 'to sell', f: 're', d: 6 },
    { i: 'perdre', e: 'to lose', f: 're', d: 6 }, { i: 'rendre', e: 'to give back', f: 're', d: 14 },
    { i: 'dire', e: 'to say, to tell', f: 're', d: 6, p: ['dis', 'dis', 'dit', 'disons', 'dites', 'disent'], pp: 'dit' },
    { i: 'lire', e: 'to read', f: 're', d: 6, p: ['lis', 'lis', 'lit', 'lisons', 'lisez', 'lisent'], pp: 'lu' },
    { i: 'écrire', e: 'to write', f: 're', d: 6, p: ['écris', 'écris', 'écrit', 'écrivons', 'écrivez', 'écrivent'], pp: 'écrit' },
    { i: 'mettre', e: 'to put, to put on', f: 're', d: 6, p: ['mets', 'mets', 'met', 'mettons', 'mettez', 'mettent'], pp: 'mis' },
    { i: 'connaître', e: 'to know (a person, a place)', f: 're', d: 5, p: ['connais', 'connais', 'connaît', 'connaissons', 'connaissez', 'connaissent'], pp: 'connu' },
    { i: 'voir', e: 'to see', f: 're', d: 5, p: ['vois', 'vois', 'voit', 'voyons', 'voyez', 'voient'], pp: 'vu', fut: 'verr' },
    { i: 'croire', e: 'to believe', f: 're', d: 5, p: ['crois', 'crois', 'croit', 'croyons', 'croyez', 'croient'], pp: 'cru' },
    { i: 'recevoir', e: 'to receive', f: 're', d: 14, p: ['reçois', 'reçois', 'reçoit', 'recevons', 'recevez', 'reçoivent'], pp: 'reçu', fut: 'recevr' },
    { i: 'boire', e: 'to drink', f: 're', d: 4, p: ['bois', 'bois', 'boit', 'buvons', 'buvez', 'boivent'], pp: 'bu' },
    { i: 'vivre', e: 'to live', f: 're', d: 12, p: ['vis', 'vis', 'vit', 'vivons', 'vivez', 'vivent'], pp: 'vécu' },
    { i: 'suivre', e: 'to follow, to take (a course)', f: 're', d: 16, p: ['suis', 'suis', 'suit', 'suivons', 'suivez', 'suivent'], pp: 'suivi' },
    { i: 'comprendre', e: 'to understand', f: 're', d: 3, p: ['comprends', 'comprends', 'comprend', 'comprenons', 'comprenez', 'comprennent'], pp: 'compris' },
    { i: 'apprendre', e: 'to learn', f: 're', d: 3, p: ['apprends', 'apprends', 'apprend', 'apprenons', 'apprenez', 'apprennent'], pp: 'appris' },
    { i: 'plaire', e: 'to please', f: 're', d: 16, p: ['plais', 'plais', 'plaît', 'plaisons', 'plaisez', 'plaisent'], pp: 'plu' },
    // ---- reflexive
    { i: 'se lever', e: 'to get up', f: 'refl', d: 7, p: ['lève', 'lèves', 'lève', 'levons', 'levez', 'lèvent'], fut: 'lèver' },
    { i: 'se laver', e: 'to wash (oneself)', f: 'refl', d: 7 }, { i: "s'habiller", e: 'to get dressed', f: 'refl', d: 7 },
    { i: 'se coucher', e: 'to go to bed', f: 'refl', d: 7 }, { i: 'se réveiller', e: 'to wake up', f: 'refl', d: 7 },
    { i: 'se promener', e: 'to go for a walk', f: 'refl', d: 7, p: ['promène', 'promènes', 'promène', 'promenons', 'promenez', 'promènent'], fut: 'promèner' },
    { i: 'se dépêcher', e: 'to hurry', f: 'refl', d: 7 }, { i: 'se reposer', e: 'to rest', f: 'refl', d: 7 },
    { i: "s'amuser", e: 'to have fun', f: 'refl', d: 7 }, { i: 'se préparer', e: 'to get ready', f: 'refl', d: 7 },
    { i: 'se souvenir', e: 'to remember', f: 'refl', d: 15, p: ['souviens', 'souviens', 'souvient', 'souvenons', 'souvenez', 'souviennent'], pp: 'souvenu', fut: 'souviendr' },
    // ---- impersonal
    { i: 'falloir', e: 'to be necessary (il faut)', f: 're', d: 4, imp3: true, p: ['', '', 'faut', '', '', ''], pp: 'fallu', fut: 'faudr', imp: 'fall' },
    { i: 'pleuvoir', e: 'to rain (il pleut)', f: 're', d: 12, imp3: true, p: ['', '', 'pleut', '', '', ''], pp: 'plu', fut: 'pleuvr', imp: 'pleuv' }
  ];

  const PR = ['je', 'tu', 'il/elle', 'nous', 'vous', 'ils/elles'];
  const REF = ['me', 'te', 'se', 'nous', 'vous', 'se'];
  const vowel = (s) => /^[aeéèêiîïoôuûyhâœ]/i.test(s);
  const base = (v) => v.i.replace(/^(se |s')/, '');
  const isRefl = (v) => /^(se |s')/.test(v.i);

  function present(v) {
    if (v.p) return v.p.slice();
    const b = base(v);
    if (b.endsWith('er')) { const s = b.slice(0, -2); return [s + 'e', s + 'es', s + 'e', s + 'ons', s + 'ez', s + 'ent']; }
    if (b.endsWith('ir')) { const s = b.slice(0, -2); return [s + 'is', s + 'is', s + 'it', s + 'issons', s + 'issez', s + 'issent']; }
    if (b.endsWith('re')) { const s = b.slice(0, -2); return [s + 's', s + 's', s, s + 'ons', s + 'ez', s + 'ent']; }
    return ['', '', '', '', '', ''];
  }
  function participle(v) {
    if (v.pp) return v.pp;
    const b = base(v);
    if (b.endsWith('er')) return b.slice(0, -2) + 'é';
    if (b.endsWith('ir')) return b.slice(0, -2) + 'i';
    if (b.endsWith('re')) return b.slice(0, -2) + 'u';
    return b;
  }
  function aux(v) { return isRefl(v) ? 'être' : (v.aux || 'avoir'); }
  function impStem(v) { if (v.imp) return v.imp; const p = present(v); return p[3].replace(/ons$/, ''); }
  function futStem(v) { if (v.fut) return v.fut; const b = base(v); return b.endsWith('re') ? b.slice(0, -1) : b; }

  const E_IMP = ['ais', 'ais', 'ait', 'ions', 'iez', 'aient'];
  const E_FUT = ['ai', 'as', 'a', 'ons', 'ez', 'ont'];
  const AV = ['ai', 'as', 'a', 'avons', 'avez', 'ont'];
  const ET = ['suis', 'es', 'est', 'sommes', 'êtes', 'sont'];

  // returns array of 6 bare verb forms (without subject) for a tense
  function forms(v, tense) {
    const b = base(v);
    let out;
    if (tense === 'present') out = present(v);
    else if (tense === 'imparfait') { const s = impStem(v); out = E_IMP.map((e) => (e[0] === 'i' && s.endsWith('ge') ? s.slice(0, -1) : e[0] === 'i' && s.endsWith('ç') ? s.slice(0, -1) + 'c' : s) + e); }
    else if (tense === 'futur') { const s = futStem(v); out = E_FUT.map((e) => s + e); }
    else if (tense === 'conditionnel') { const s = futStem(v); out = E_IMP.map((e) => s + e); }
    else if (tense === 'pc') {
      const a = aux(v), pp = participle(v);
      out = (a === 'être' ? ET : AV).map((x, k) => x + ' ' + pp + (a === 'être' ? ['(e)', '(e)', '(e)', '(e)s', '(e)(s)', '(e)s'][k] : ''));
    }
    else if (tense === 'futurproche') out = ['vais', 'vas', 'va', 'allons', 'allez', 'vont'].map((x) => x + ' ' + (isRefl(v) ? '__R__' : '') + b);
    return out;
  }
  // full line with subject and reflexive pronoun, e.g. "je me lève", "j'habite"
  function line(v, tense, k) {
    let f = forms(v, tense)[k];
    if (v.imp3 && k !== 2) return null;
    let subj = v.imp3 ? 'il' : PR[k];
    if (isRefl(v)) {
      let r = REF[k];
      if (tense === 'futurproche') { f = f.replace('__R__', (vowel(base(v)) && k !== 3 && k !== 4 ? r.slice(0, 1) + "'" : r + ' ')); }
      else { f = (vowel(f) && (k !== 3 && k !== 4) ? r.slice(0, 1) + "'" : r + ' ') + f; }
    }
    if (subj === 'je' && vowel(f)) return "j'" + f;
    return subj + ' ' + f;
  }
  const TENSES = { present: 'Présent', pc: 'Passé composé', imparfait: 'Imparfait', futurproche: 'Futur proche', futur: 'Futur simple', conditionnel: 'Conditionnel' };

  window.VERBS = V;
  window.CONJ = { PR, TENSES, forms, line, participle, aux, isRefl, base };
})();
