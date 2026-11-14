/* Lessons, days 8 to 13: near future, passé composé, imparfait, narration */
window.LESSONS = window.LESSONS || [];
window.LESSONS.push(
{
  day: 8, lvl: 'A2', title: 'Futur proche, passé récent, être en train de, imperative', theme: 'Plans, instructions',
  verbs: ['aller', 'venir', 'faire', 'prendre', 'finir', 'partir'], deck: 'd8', stories: ['s8'],
  goals: ['Talk about near plans with aller + infinitive', 'Say what just happened with venir de + infinitive', 'Say what is happening right now with être en train de', 'Give instructions and advice with the imperative'],
  concept: `
<h3>Three time frames with one verb + infinitive</h3>
<tb>Structure;Meaning;Example
aller + infinitive;going to (near future);Je vais partir.
venir de + infinitive;have just (recent past);Je viens de partir.
être en train de + infinitive;in the middle of (now);Je suis en train de partir.</tb>
<x>Ce soir, nous allons regarder un film.|Tonight we are going to watch a movie.</x>
<x>Elle vient d'arriver.|She has just arrived.</x>
<x>Ne le dérange pas, il est en train de travailler.|Don't disturb him, he's busy working.</x>
<p><b>Negation</b> wraps the conjugated verb (aller / venir / être): <f>Je ne vais pas sortir.</f></p>
<p><b>Reflexive</b> verbs keep their pronoun before the infinitive: <f>Tu vas te coucher ?</f></p>
<t><f>venir de</f> = just did. <f>venir à</f> = come to a place. Don't mix them: <f>Je viens de manger</f> (I just ate) vs <f>Je viens à la fête</f> (I'm coming to the party).</t>
<n>Futur proche is the everyday future in spoken French. Use it for anything planned or about to happen.</n>
<h3>The imperative: giving instructions</h3>
<p>Use the present tense of tu, nous, vous <b>without the subject</b>.</p>
<tb>Infinitive;tu;nous (let's);vous
parler;parle;parlons;parlez
finir;finis;finissons;finissez
prendre;prends;prenons;prenez
aller;va;allons;allez</tb>
<t>For -ER verbs (and aller) the tu form <b>drops the -s</b>: <f>Tu parles → Parle !</f> <f>Tu vas → Va !</f></t>
<p>Irregular: <f>être → sois, soyons, soyez</f>; <f>avoir → aie, ayons, ayez</f>; <f>savoir → sache, sachons, sachez</f>.</p>
<p><b>Negative</b>: <f>Ne parle pas ! Ne prenez pas le bus.</f></p>
<p><b>Reflexive</b>: pronoun after with a hyphen in the affirmative (te → toi), before in the negative: <f>Lève-toi ! Dépêchez-vous !</f> but <f>Ne te lève pas !</f></p>
<x>Tournez à gauche, puis continuez tout droit.|Turn left, then keep going straight.</x>
<x>Sois prudent ! Ne rentre pas trop tard.|Be careful! Don't come home too late.</x>
<x>Allons au café !|Let's go to the café!</x>
<p>Directions: <f>à gauche</f> (left), <f>à droite</f> (right), <f>tout droit</f> (straight), <f>traverser</f> (cross), <f>au coin de</f> (at the corner of), <f>en face de</f> (opposite), <f>à côté de</f> (next to).</p>`,
  map: ['Verb + infinitive & commands', '', [
    ['Futur proche', 'aller + inf.', [['je vais partir', 'going to'], ['negative', 'je ne vais pas partir']]],
    ['Passé récent', 'venir de + inf.', [['je viens de manger', 'just'], ['d\' before vowel', "elle vient d'arriver"]]],
    ['Présent progressif', 'être en train de + inf.', [['il est en train de lire', 'right now']]],
    ['Imperative', 'tu / nous / vous, no subject', [['-ER drops -s', 'Parle ! Va !'], ['sois, aie, sache', 'irregular'], ['Lève-toi !', 'reflexive'], ['Ne te lève pas !', 'negative']]]
  ]],
  ex: [
    ['m', 'Tomorrow I am going to visit my aunt.', ['Demain, je vais visiter ma tante.', 'Demain, je viens de visiter ma tante.', 'Demain, je vais visite ma tante.', 'Demain, je visiter ma tante.'], 0, 'Near future = <b>aller + infinitive</b>.'],
    ['m', 'The train has just left.', ['Le train vient de partir.', 'Le train va partir.', 'Le train vient partir.', 'Le train est partir.'], 0, 'Recent past = <b>venir de + infinitive</b>.'],
    ['m', 'Imperative of "tu manges":', ['Mange !', 'Manges !', 'Tu mange !', 'Mangez-tu !'], 0, '-ER tu imperative drops the <b>-s</b>.'],
    ['m', 'Imperative (vous) of être:', ['Soyez', 'Êtes', 'Soyons', 'Sois'], 0, 'être → sois, soyons, <b>soyez</b>.'],
    ['m', 'Tell a friend "Get up!"', ['Lève-toi !', 'Te lève !', 'Lève-te !', 'Toi lève !'], 0, 'Affirmative reflexive: verb-hyphen-<b>toi</b>.'],
    ['m', 'Tell a friend "Don\'t worry!"', ["Ne t'inquiète pas !", 'Inquiète-toi pas !', "Ne inquiète-toi pas !", "Ne t'inquiètes pas !"], 0, 'Negative: pronoun stays before the verb; tu imperative of -ER verb has no -s.'],
    ['m', 'I\'m busy cooking.', ['Je suis en train de cuisiner.', 'Je suis cuisiner.', 'Je vais de cuisiner.', 'Je viens en train de cuisiner.'], 0, '<b>être en train de</b> + infinitive.'],
    ['f', 'Nous ___ partir en vacances. (going to)', 'allons', 'aller: nous <b>allons</b> + infinitive.', 'aller'],
    ['f', 'Ils viennent ___ arriver.', "d'", 'venir de → <b>d\'</b> before a vowel.', 'de'],
    ['f', 'Elle ne ___ pas venir ce soir. (going to)', 'va', 'Negation wraps <b>va</b>.', 'aller'],
    ['f', '___ à droite ! (tourner, vous)', 'Tournez', 'vous imperative: <b>Tournez</b>.', 'imperative'],
    ['f', '___ patient ! (être, tu)', 'Sois', 'être → tu imperative <b>sois</b>.', 'imperative'],
    ['f', '___ au cinéma ce soir ! (aller, let\'s)', 'Allons', 'nous imperative = "let\'s": <b>Allons</b>.', 'imperative'],
    ['f', 'Tu vas ___ coucher tard ?', 'te', 'Reflexive infinitive: <b>te</b> coucher (matches tu).', 'pronoun'],
    ['o', 'We are going to eat at the restaurant.', 'Nous allons manger au restaurant', 'aller + infinitive.'],
    ['o', 'I have just finished my homework.', 'Je viens de finir mes devoirs', 'venir de + infinitive.'],
    ['o', "Don't take the bus, take the subway.", 'Ne prenez pas le bus prenez le métro', 'Negative imperative: Ne + verb + pas.'],
    ['w', 'Hurry up! (vous)', ['Dépêchez-vous !', 'Dépêchez-vous'], 'Affirmative reflexive imperative: <b>Dépêchez-vous</b>.'],
    ['w', "She's going to call her mother.", ['Elle va appeler sa mère', 'Elle va téléphoner à sa mère'], 'aller + infinitive.'],
    ['w', 'They have just left. (m)', ['Ils viennent de partir'], 'venir de + infinitive.']
  ]
},
{
  day: 9, lvl: 'A2', title: 'Passé composé with avoir', theme: 'Last weekend',
  verbs: ['parler', 'manger', 'finir', 'attendre', 'faire', 'prendre', 'voir', 'avoir', 'être', 'boire', 'lire', 'écrire', 'mettre', 'dire', 'vouloir', 'pouvoir'], deck: 'd9', stories: ['s9'],
  goals: ['Form the passé composé with avoir', 'Form regular participles (-é, -i, -u)', 'Know the 20 most common irregular participles by heart', 'Use time markers for the past'],
  concept: `
<h3>What it is</h3>
<p>The <b>passé composé</b> narrates <b>completed actions</b> in the past: what happened, once, at a specific moment. English: "I ate", "I have eaten", "I did eat".</p>
<p>Formula: <b>avoir (present) + past participle</b>.</p>
<tb>manger;
j'ai mangé;nous avons mangé
tu as mangé;vous avez mangé
il/elle a mangé;ils/elles ont mangé</tb>
<h3>Regular participles</h3>
<tb>Infinitive;Participle;Example
-er → -é;parler → parlé;J'ai parlé avec lui.
-ir → -i;finir → fini;Tu as fini ?
-re → -u;attendre → attendu;Nous avons attendu.</tb>
<h3>Irregular participles (learn by heart)</h3>
<tb>-u;-is / -it;other
avoir → eu;prendre → pris;être → été
boire → bu;mettre → mis;faire → fait
voir → vu;comprendre → compris;naître → né
lire → lu;apprendre → appris;ouvrir → ouvert
vouloir → voulu;dire → dit;offrir → offert
pouvoir → pu;écrire → écrit;mourir → mort
devoir → dû;conduire → conduit;
savoir → su;;
connaître → connu;;
recevoir → reçu;;
vivre → vécu;;
croire → cru;;</tb>
<x>Samedi, j'ai fait les courses et j'ai vu un film.|On Saturday I did the shopping and saw a movie.</x>
<x>Nous avons pris le train et nous avons lu pendant le voyage.|We took the train and read during the trip.</x>
<x>Il a été malade et il a eu de la fièvre.|He was sick and had a fever.</x>
<h3>Negation and questions</h3>
<p>ne ... pas wraps the <b>auxiliary</b> only: <f>Je n'ai pas mangé.</f></p>
<p>Questions: <f>Tu as fini ?</f> <f>Est-ce que tu as fini ?</f> <f>As-tu fini ?</f> <f>Qu'est-ce que tu as fait hier ?</f></p>
<t>Never put pas after the participle: <f>Je n'ai pas vu</f>, not <f>Je n'ai vu pas</f>.</t>
<n>Short adverbs (bien, mal, déjà, trop, beaucoup, encore, toujours) go between the auxiliary and the participle: <f>J'ai bien dormi. Tu as déjà mangé ?</f></n>
<h3>Past time markers</h3>
<p><f>hier</f> (yesterday), <f>avant-hier</f>, <f>hier soir</f>, <f>la semaine dernière</f>, <f>le week-end dernier</f>, <f>l'année dernière</f>, <f>il y a deux jours</f> (two days ago), <f>ce matin</f>, <f>déjà</f> (already), <f>ne ... pas encore</f> (not yet).</p>
<x>Il y a trois ans, j'ai commencé mes études au Canada.|Three years ago I started my studies in Canada.</x>`,
  map: ['Passé composé (avoir)', 'completed action', [
    ['Form', 'avoir + participle', [["j'ai, tu as, il a", ''], ['nous avons, vous avez, ils ont', '']]],
    ['Regular participles', '', [['-er → -é', 'parlé'], ['-ir → -i', 'fini'], ['-re → -u', 'attendu']]],
    ['Irregular', '', [['eu, bu, vu, lu, pu, voulu, dû, su', '-u'], ['pris, mis, dit, écrit', '-is / -it'], ['été, fait, ouvert', 'other']]],
    ['Negation', "je n'ai pas mangé", [['ne ... pas around avoir', '']]],
    ['Markers', '', [['hier, dernier, il y a', ''], ['déjà / pas encore', 'between aux. and participle']]]
  ]],
  ex: [
    ['m', 'Participle of "prendre":', ['pris', 'prendu', 'prit', 'prené'], 0, 'prendre → <b>pris</b>.'],
    ['m', 'Participle of "faire":', ['fait', 'faisé', 'fai', 'faisu'], 0, 'faire → <b>fait</b>.'],
    ['m', 'Participle of "voir":', ['vu', 'voi', 'vui', 'voyé'], 0, 'voir → <b>vu</b>.'],
    ['m', 'Hier, nous ___ un bon film.', ['avons vu', 'sommes vu', 'avons voir', 'avons vus'], 0, 'avoir: nous <b>avons</b> + vu.'],
    ['m', 'Negative: "J\'ai compris."', ["Je n'ai pas compris.", "Je n'ai compris pas.", "Je ne pas ai compris.", "J'ai ne pas compris."], 0, 'ne ... pas around the <b>auxiliary</b>.'],
    ['m', 'I slept well.', ["J'ai bien dormi.", "J'ai dormi bien.", "Je bien ai dormi.", 'Je suis bien dormi.'], 0, 'bien goes between avoir and the participle.'],
    ['m', '"two days ago" =', ['il y a deux jours', 'depuis deux jours', 'dans deux jours', 'pendant deux jours'], 0, 'ago = <b>il y a</b> + time.'],
    ['f', 'Tu as ___ (finir) ?', 'fini', '-ir → <b>-i</b>.', 'finir'],
    ['f', 'Ils ont ___ (attendre) une heure.', 'attendu', '-re → <b>-u</b>.', 'attendre'],
    ['f', 'J\'ai ___ (boire) un café.', 'bu', 'boire → <b>bu</b>.', 'boire'],
    ['f', 'Elle a ___ (écrire) un message.', 'écrit', 'écrire → <b>écrit</b>.', 'écrire'],
    ['f', 'Nous avons ___ (être) contents.', 'été', 'être → <b>été</b> (with avoir!).', 'être'],
    ['f', 'Vous avez ___ (lire) ce livre ?', 'lu', 'lire → <b>lu</b>.', 'lire'],
    ['f', 'Il a ___ (avoir) un accident.', 'eu', 'avoir → <b>eu</b>.', 'avoir'],
    ['f', 'Je n\'ai pas ___ mangé. (yet)', 'encore', 'not yet = <b>ne ... pas encore</b>.', 'yet'],
    ['f', 'Elle a ___ (mettre) sa robe rouge.', 'mis', 'mettre → <b>mis</b>.', 'mettre'],
    ['o', 'Last weekend I did my homework.', "Le week-end dernier j'ai fait mes devoirs", 'faire → fait. dernier follows the noun.'],
    ['o', "We didn't see the movie.", "Nous n'avons pas vu le film", 'ne ... pas around avons.'],
    ['o', 'Have you already eaten?', 'Est-ce que tu as déjà mangé ?', 'déjà goes between as and mangé.'],
    ['w', 'They took the bus.', ['Ils ont pris le bus', 'Elles ont pris le bus'], 'prendre → <b>pris</b>.'],
    ['w', 'I had a dog.', ["J'ai eu un chien"], 'avoir → <b>eu</b>. (Later you will see when imparfait fits better.)'],
    ['w', 'What did you do yesterday? (tu)', ["Qu'est-ce que tu as fait hier ?", "Tu as fait quoi hier ?", "Qu'as-tu fait hier ?"], 'faire → <b>fait</b>.']
  ]
},
{
  day: 10, lvl: 'A2', title: 'Passé composé with être · reflexives · negation', theme: 'Trips, events',
  verbs: ['aller', 'venir', 'partir', 'arriver', 'rester', 'naître', 'mourir', 'sortir', 'entrer', 'monter', 'descendre', 'tomber', 'rentrer', 'devenir', 'se lever', "s'habiller"], deck: 'd10', stories: ['s10'],
  goals: ['Know the 17 être verbs (DR & MRS VANDERTRAMP / house of être)', 'Make the participle agree with the subject', 'Use all reflexive verbs with être in the past', 'Place negation correctly with reflexives'],
  concept: `
<h3>Which verbs use être?</h3>
<p>Two groups use <b>être</b> instead of avoir:</p>
<ol>
<li><b>Movement / change-of-state verbs</b> (DR &amp; MRS VANDERTRAMP).</li>
<li><b>All reflexive verbs</b>.</li>
</ol>
<tb>Verb;Participle;Opposite pair
aller / venir;allé / venu;go / come
arriver / partir;arrivé / parti;arrive / leave
entrer / sortir;entré / sorti;go in / go out
monter / descendre;monté / descendu;go up / go down
naître / mourir;né / mort;be born / die
rester / tomber;resté / tombé;stay / fall
retourner, rentrer, revenir, devenir;retourné, rentré, revenu, devenu;return, go home, come back, become
passer (by);passé;pass by</tb>
<h3>Agreement with the subject</h3>
<p>With être, the participle agrees like an adjective: <b>+e</b> feminine, <b>+s</b> plural.</p>
<tb>aller;
je suis allé(e);nous sommes allé(e)s
tu es allé(e);vous êtes allé(e)(s)
il est allé · elle est allée;ils sont allés · elles sont allées</tb>
<x>Ma sœur est née en 2005. Elle est arrivée au Canada en 2019.|My sister was born in 2005. She arrived in Canada in 2019.</x>
<x>Nous sommes partis à 8 heures et nous sommes rentrés à minuit.|We left at 8 and came home at midnight.</x>
<t>Do not translate "I have gone" as <f>j'ai allé</f>. It is always <f>je suis allé(e)</f>.</t>
<h3>Reflexive verbs: always être</h3>
<tb>se lever;
je me suis levé(e);nous nous sommes levé(e)s
tu t'es levé(e);vous vous êtes levé(e)(s)
il s'est levé · elle s'est levée;ils se sont levés · elles se sont levées</tb>
<x>Ce matin, elle s'est réveillée tard et elle s'est dépêchée.|This morning she woke up late and rushed.</x>
<h3>Negation</h3>
<p>ne ... pas wraps the auxiliary. With reflexives it wraps <b>pronoun + auxiliary</b>.</p>
<x>Je ne suis pas sorti hier soir.|I didn't go out last night.</x>
<x>Elle ne s'est pas couchée tôt.|She didn't go to bed early.</x>
<h3>Advanced: verbs that switch to avoir</h3>
<p>monter, descendre, sortir, rentrer, passer take <b>avoir</b> when they have a direct object:</p>
<x>Je suis descendu. / J'ai descendu les valises.|I went down. / I took the suitcases down.</x>
<x>Elle est sortie. / Elle a sorti son téléphone.|She went out. / She took out her phone.</x>`,
  map: ['Passé composé (être)', '', [
    ['Movement verbs', 'DR & MRS VANDERTRAMP', [['aller/venir, arriver/partir', ''], ['entrer/sortir, monter/descendre', ''], ['naître/mourir, rester/tomber', ''], ['rentrer, revenir, devenir, retourner', '']]],
    ['Reflexives', 'always être', [['je me suis levé(e)', '']]],
    ['Agreement', 'like an adjective', [['+e', 'elle est allée'], ['+s', 'ils sont allés'], ['+es', 'elles sont allées']]],
    ['Negation', '', [['je ne suis pas allé', ''], ['elle ne s\'est pas levée', 'wrap pronoun + aux.']]],
    ['Switch to avoir', 'with direct object', [["j'ai sorti la poubelle", '']]]
  ]],
  ex: [
    ['m', 'Elle ___ au Japon l\'été dernier.', ['est allée', 'a allé', 'est allé', 'a allée'], 0, 'aller uses <b>être</b>; feminine subject → <b>allée</b>.'],
    ['m', 'Nous (Harsh and Raj) ___ en retard.', ['sommes arrivés', 'avons arrivé', 'sommes arrivé', 'sommes arrivées'], 0, 'être + masc. plural agreement: <b>arrivés</b>.'],
    ['m', 'Which verb takes avoir?', ['marcher', 'tomber', 'rester', 'naître'], 0, 'marcher (walk) is not a DR MRS VANDERTRAMP verb → <b>avoir</b>: j\'ai marché.'],
    ['m', 'Hier, je ___ à 6 heures. (se lever, man)', ['me suis levé', "m'ai levé", 'me suis levée', 'suis me levé'], 0, 'Reflexive → être: <b>je me suis levé</b>.'],
    ['m', 'Negative: "Ils se sont amusés."', ["Ils ne se sont pas amusés.", "Ils se ne sont pas amusés.", "Ils ne sont pas se amusés.", "Ils se sont pas amusés ne."], 0, 'ne + pronoun + auxiliary + pas.'],
    ['m', 'She took out the garbage.', ['Elle a sorti la poubelle.', 'Elle est sortie la poubelle.', 'Elle a sortie la poubelle.', 'Elle est sorti la poubelle.'], 0, 'sortir + direct object → <b>avoir</b>, no agreement.'],
    ['m', 'Victor Hugo ___ en 1802.', ['est né', 'a né', 'est née', 'a naît'], 0, 'naître → <b>être né</b>.'],
    ['f', 'Marie est ___ (partir) ce matin.', 'partie', 'être + feminine → <b>partie</b>.', 'agreement'],
    ['f', 'Ils sont ___ (rester) à la maison.', 'restés', 'Masc. plural → <b>restés</b>.', 'agreement'],
    ['f', 'Mes grands-parents sont ___ (mourir) en Inde.', 'morts', 'mourir → mort; masc. plural → <b>morts</b>.', 'participle'],
    ['f', 'Elle s\'est ___ (habiller) vite.', 'habillée', 'Reflexive with être; feminine → <b>habillée</b>.', 'agreement'],
    ['f', 'Tu ___ venu à la fête ?', 'es', 'venir → être: tu <b>es</b> venu.', 'auxiliary'],
    ['f', 'Les filles sont ___ (descendre) du bus.', 'descendues', 'descendre → descendu; fem. plural → <b>descendues</b>.', 'agreement'],
    ['f', 'Je ne ___ pas sorti. (être)', 'suis', 'sortir (no object) → être: je ne <b>suis</b> pas sorti.', 'auxiliary'],
    ['o', 'We went to the beach and we stayed there all day.', 'Nous sommes allés à la plage et nous sommes restés là toute la journée', 'Both verbs use être; agreement masc. plural.'],
    ['o', 'She did not go to bed late.', "Elle ne s'est pas couchée tard", 'ne + s\'est + pas + participle (agrees).'],
    ['o', 'My sister was born in Delhi.', 'Ma sœur est née à Delhi', 'naître → née (feminine).', ['a']],
    ['w', 'I (woman) arrived yesterday.', ['Je suis arrivée hier'], 'être + feminine agreement: <b>arrivée</b>.'],
    ['w', 'They (m) woke up at 7.', ['Ils se sont réveillés à 7 heures', 'Ils se sont réveillés à sept heures'], 'Reflexive → être, masc. plural.'],
    ['w', 'He fell in the street.', ['Il est tombé dans la rue'], 'tomber → <b>être</b>.']
  ]
},
{
  day: 11, lvl: 'A2', title: 'Participle agreement, questions in the past · mid-course check', theme: 'Past experiences',
  verbs: ['voir', 'acheter', 'prendre', 'faire', 'aller', 'partir', 'venir'], deck: 'd11', stories: ['s11'], assess: 'a2',
  goals: ['Choose avoir or être instantly for 60+ verbs', 'Agree participles with être subjects', 'Ask and answer questions about past experiences', 'Use déjà / jamais / pas encore for experiences'],
  concept: `
<h3>Decision tree: avoir or être?</h3>
<ol>
<li>Is the verb reflexive (se ...)? → <b>être</b>, agree with subject.</li>
<li>Is it in the house of être (aller, venir, partir, arriver, naître, mourir, rester, tomber, entrer, sortir, monter, descendre, rentrer, revenir, devenir, retourner, passer)? → <b>être</b>, agree with subject (unless it has a direct object).</li>
<li>Everything else → <b>avoir</b>, no agreement with the subject.</li>
</ol>
<t><f>Elle a mangé</f> (no e). Agreement with the subject happens <b>only with être</b>.</t>
<h3>Agreement with avoir: preceding direct object (B1 preview)</h3>
<p>With avoir, the participle agrees with a direct object placed <b>before</b> the verb (a pronoun la/les or que).</p>
<x>J'ai acheté la robe. → Je l'ai achetée.|I bought the dress. → I bought it.</x>
<x>Les photos que j'ai prises sont belles.|The photos I took are beautiful.</x>
<n>In speech you often can't hear it (achetée = acheté), except with -is/-it participles: <f>prise, mise, écrite, faite</f>.</n>
<h3>Questions in the past</h3>
<tb>Style;Example
Intonation;Tu es allé au Québec ?
Est-ce que;Est-ce que vous avez vu ce film ?
Inversion;Avez-vous vu ce film ? · Est-elle partie ?
Question word;Où est-ce que tu es allé ? · Quand êtes-vous arrivés ?</tb>
<p>In inversion, the <b>auxiliary</b> inverts with the pronoun: <f>As-tu mangé ?</f>, <f>A-t-il fini ?</f></p>
<h3>Talking about experiences</h3>
<x>Tu es déjà allé à Paris ? — Non, je ne suis jamais allé en France.|Have you ever been to Paris? No, I've never been to France.</x>
<x>Vous avez déjà mangé de la poutine ? — Oui, plusieurs fois !|Have you ever eaten poutine? Yes, several times!</x>
<x>Il n'a pas encore fini son projet.|He hasn't finished his project yet.</x>
<p>Placement: <f>déjà</f>, <f>jamais</f>, <f>encore</f> go between the auxiliary and the participle.</p>`,
  map: ['avoir or être?', '', [
    ['Reflexive?', '→ être + agree', []],
    ['House of être?', '→ être + agree', [['unless direct object', "j'ai monté les valises"]]],
    ['Otherwise', '→ avoir', [['no agreement with subject', 'elle a mangé'], ['agree with object before (B1)', 'je l\'ai achetée']]],
    ['Questions', '', [['Tu es allé… ?', ''], ['Est-ce que…', ''], ['Es-tu allé… ? A-t-il fini ?', 'invert auxiliary']]],
    ['Experiences', '', [['déjà', 'ever / already'], ['ne ... jamais', 'never'], ['ne ... pas encore', 'not yet']]]
  ]],
  ex: [
    ['m', 'Elles ___ une pizza.', ['ont mangé', 'ont mangées', 'sont mangées', 'sont mangé'], 0, 'manger → <b>avoir</b>, no agreement with the subject.'],
    ['m', 'Elles ___ au cinéma.', ['sont allées', 'ont allé', 'sont allés', 'ont allées'], 0, 'aller → être; fem. plural.'],
    ['m', 'Inversion of "Tu as fini ?"', ['As-tu fini ?', 'Fini-tu as ?', 'Tu-as fini ?', 'As fini-tu ?'], 0, 'Invert the <b>auxiliary</b>: As-tu fini ?'],
    ['m', 'Inversion of "Il a mangé ?"', ['A-t-il mangé ?', 'A-il mangé ?', 'Mangé-t-il ?', 'Il-a mangé ?'], 0, 'Add <b>-t-</b> between two vowels.'],
    ['m', 'Have you ever been to Quebec?', ['Tu es déjà allé au Québec ?', 'Tu as déjà allé au Québec ?', 'Tu es jamais allé au Québec ?', 'Tu vas déjà au Québec ?'], 0, 'aller → être; "ever" = <b>déjà</b>.'],
    ['m', "I've never eaten sushi.", ["Je n'ai jamais mangé de sushis.", "Je n'ai pas jamais mangé de sushis.", "J'ai jamais pas mangé des sushis.", "Je ne suis jamais mangé de sushis."], 0, 'ne ... <b>jamais</b> replaces pas; des → de after negation.'],
    ['m', 'La lettre? Je ___ hier.', ["l'ai écrite", "l'ai écrit", 'la ai écrite', 'suis écrite'], 0, 'Preceding direct object la → agreement: <b>écrite</b>.'],
    ['f', 'Mes amis ___ (rester) chez moi.', 'sont restés', 'rester → être + masc. plural.', 'PC'],
    ['f', 'Ma mère ___ (faire) un gâteau.', 'a fait', 'faire → avoir, no agreement.', 'PC'],
    ['f', 'Nous (fem.) ___ (se promener) au parc.', 'nous sommes promenées', 'Reflexive → être, fem. plural.', 'PC'],
    ['f', 'Quand ___-vous arrivés ?', 'êtes', 'arriver → être, inverted: <b>êtes</b>-vous.', 'inversion'],
    ['f', 'Il n\'a pas ___ appelé. (yet)', 'encore', '<b>pas encore</b> = not yet.', 'yet'],
    ['f', 'Tu ___ (voir) mes clés ?', 'as vu', 'voir → avoir + vu.', 'PC'],
    ['o', 'Where did you go on vacation?', 'Où est-ce que tu es allé en vacances ?', 'Question word + est-ce que + PC with être.'],
    ['o', 'She has not left yet.', "Elle n'est pas encore partie", 'partir → être; pas encore around the auxiliary.'],
    ['o', 'Did you (vous) take the photos?', 'Avez-vous pris les photos ?', 'Inversion of the auxiliary.'],
    ['w', 'We (m) came by train.', ['Nous sommes venus en train', 'On est venus en train'], 'venir → être, masc. plural.'],
    ['w', 'She bought a car.', ['Elle a acheté une voiture'], 'acheter → avoir; no agreement with the subject.'],
    ['w', 'Have you (tu) already finished?', ['Tu as déjà fini ?', 'As-tu déjà fini ?', 'Est-ce que tu as déjà fini ?'], 'déjà between as and fini.']
  ]
},
{
  day: 12, lvl: 'A2', title: 'Imparfait: formation and uses', theme: 'Childhood',
  verbs: ['être', 'avoir', 'faire', 'aller', 'habiter', 'jouer', 'manger', 'commencer', 'finir', 'prendre', 'vivre', 'grandir', 'pleuvoir', 'aimer'], deck: 'd12', stories: ['s12'],
  goals: ['Form the imparfait of any verb from the nous stem', 'Use imparfait for habits, descriptions, ongoing states in the past', 'Describe your childhood in 8 to 10 sentences'],
  concept: `
<h3>Formation: nous stem + endings</h3>
<p>Take the <b>nous</b> form of the present, remove <b>-ons</b>, add the endings.</p>
<tb>Step;Example
nous form;nous finissons
stem;finiss-
+ endings;-ais, -ais, -ait, -ions, -iez, -aient</tb>
<tb>parler;faire;finir
je parlais;je faisais;je finissais
tu parlais;tu faisais;tu finissais
il parlait;il faisait;il finissait
nous parlions;nous faisions;nous finissions
vous parliez;vous faisiez;vous finissiez
ils parlaient;ils faisaient;ils finissaient</tb>
<p>Only one irregular stem: <b>être → ét-</b>: <f>j'étais, tu étais, il était, nous étions, vous étiez, ils étaient</f>.</p>
<n>-ais, -ais, -ait, -aient all sound the same ("eh"). Spelling: <f>je mangeais</f> (keeps e before a), <f>je commençais</f> (ç before a). But <f>nous mangions, nous commencions</f>.</n>
<p>Useful forms: <f>il y avait</f> (there was/were), <f>il faisait beau</f> (the weather was nice), <f>il pleuvait</f> (it was raining), <f>c'était</f> (it was).</p>
<h3>When to use the imparfait</h3>
<tb>Use;Signal words;Example
Habits, repeated actions;tous les jours, souvent, d'habitude, le lundi, chaque été;Quand j'étais petit, je jouais au cricket tous les jours.
Descriptions (people, places, weather, feelings);;Il faisait froid. La maison était grande. J'étais content.
Ongoing action (background) when something happened;pendant que, quand;Je dormais quand le téléphone a sonné.
Age and time in the past;;Il était minuit. J'avais dix ans.
Polite suggestion;si on...;Si on allait au cinéma ?</tb>
<x>Quand j'étais enfant, j'habitais à Ludhiana avec mes grands-parents.|When I was a child, I lived in Ludhiana with my grandparents.</x>
<x>Le dimanche, nous allions au marché et ma grand-mère achetait des fruits.|On Sundays we used to go to the market and my grandmother would buy fruit.</x>
<x>Il y avait beaucoup d'arbres et il faisait toujours chaud.|There were lots of trees and it was always hot.</x>
<n>English clues for imparfait: "used to", "would" (habit), "was / were + -ing".</n>`,
  map: ['Imparfait', 'background & habits', [
    ['Formation', 'nous stem + endings', [['-ais -ais -ait', 'same sound'], ['-ions -iez -aient', ''], ['être → ét-', 'only irregular']]],
    ['Uses', '', [['habits', 'used to, would'], ['descriptions', 'weather, people, feelings'], ['ongoing action', 'was …ing'], ['age, time', "j'avais 10 ans, il était midi"]]],
    ['Key forms', '', [['c\'était', ''], ['il y avait', ''], ['il faisait beau', '']]]
  ]],
  ex: [
    ['m', 'Imparfait of "nous" for avoir:', ['nous avions', 'nous avons', 'nous avaions', 'nous aviions'], 0, 'avons → av- → <b>avions</b>.'],
    ['m', 'Imparfait of être, "il":', ['il était', 'il étais', 'il êtait', 'il est été'], 0, 'être → ét- + ait: <b>était</b>.'],
    ['m', 'When I was little, I used to play outside.', ["Quand j'étais petit, je jouais dehors.", "Quand j'ai été petit, j'ai joué dehors.", 'Quand je suis petit, je jouais dehors.', "Quand j'étais petit, j'ai joué dehors."], 0, 'Description + habit → both <b>imparfait</b>.'],
    ['m', 'Il ___ beau et les oiseaux chantaient.', ['faisait', 'a fait', 'fait', 'fasait'], 0, 'Weather description → imparfait <b>faisait</b>.'],
    ['m', 'Je ___ dix ans quand nous sommes arrivés au Canada.', ['avais', 'ai eu', 'étais', 'avait'], 0, 'Age in the past → imparfait of avoir: <b>j\'avais</b>.'],
    ['m', 'Which is the imparfait of manger (je)?', ['mangeais', 'mangais', 'mangeai', 'mangeions'], 0, 'Keep the e before a: <b>mangeais</b>.'],
    ['f', 'Nous ___ (habiter) à Toronto.', 'habitions', 'nous → <b>-ions</b>.', 'habiter'],
    ['f', 'Ils ___ (finir) tard.', 'finissaient', 'nous finissons → finiss- + <b>aient</b>.', 'finir'],
    ['f', 'Tu ___ (faire) du sport ?', 'faisais', 'nous faisons → fais- + <b>ais</b>.', 'faire'],
    ['f', 'Il y ___ beaucoup de monde.', 'avait', 'there was = <b>il y avait</b>.', 'il y a'],
    ['f', 'C\'___ une belle journée.', 'était', 'it was = <b>c\'était</b>.', "c'était"],
    ['f', 'Vous ___ (prendre) le bus pour aller à l\'école ?', 'preniez', 'nous prenons → pren- + <b>iez</b>.', 'prendre'],
    ['f', 'Elle ___ (commencer) toujours à 8 h.', 'commençait', 'ç before a: <b>commençait</b>.', 'commencer'],
    ['f', 'Il ___ (pleuvoir) tous les jours.', 'pleuvait', 'pleuvoir → <b>pleuvait</b>.', 'pleuvoir'],
    ['o', 'Every summer we used to go to India.', 'Chaque été nous allions en Inde', 'Repeated past action → imparfait.'],
    ['o', 'My grandmother was very kind.', 'Ma grand-mère était très gentille', 'Description → imparfait.'],
    ['o', 'There was a big park near my house.', 'Il y avait un grand parc près de ma maison', 'il y avait for past description.'],
    ['w', 'I used to live in Punjab.', ["J'habitais au Pendjab", "J'habitais dans le Pendjab", "J'habitais au Punjab"], 'used to → imparfait.'],
    ['w', 'It was cold.', ['Il faisait froid'], 'Weather → il faisait.'],
    ['w', 'We were happy.', ['Nous étions contents', 'Nous étions heureux', 'On était contents', 'Nous étions contentes', 'Nous étions heureuses'], 'être → ét- + ions.']
  ]
},
{
  day: 13, lvl: 'A2', title: 'Passé composé vs imparfait · storytelling connectors', theme: 'Telling a story',
  verbs: ['être', 'avoir', 'faire', 'aller', 'voir', 'arriver', 'tomber', 'commencer', 'se réveiller'], deck: 'd13', stories: ['s13'],
  goals: ['Choose PC or imparfait correctly in a story', 'Use quand, pendant que, soudain, tout à coup', 'Link ideas with d\'abord, puis, ensuite, parce que, donc, mais, alors, enfin', 'Tell a short past story with background and events'],
  concept: `
<h3>The stage metaphor</h3>
<p>A story has a <b>set</b> (background) and <b>actions</b> (events).</p>
<tb>Imparfait = the set;Passé composé = the actions
What was going on, what it was like;What happened (next)
Descriptions, weather, feelings, age, time;Single completed events
Habits and repeated actions;Actions with a defined start, end or number of times
Was doing… (interrupted);…when X happened (interruption)
Answers: "What was the situation?";Answers: "What happened?"</tb>
<x>Il était 8 heures. Il pleuvait et j'attendais le bus. Soudain, une voiture s'est arrêtée.|It was 8. It was raining and I was waiting for the bus. Suddenly a car stopped.</x>
<x>Je regardais la télé quand mon frère est entré.|I was watching TV when my brother came in.</x>
<x>Pendant que je cuisinais, le téléphone a sonné.|While I was cooking, the phone rang.</x>
<h3>Signal words</h3>
<tb>Usually imparfait;Usually passé composé
d'habitude, souvent, toujours, tous les jours;un jour, soudain, tout à coup
pendant que (while);hier, ce matin, la semaine dernière
autrefois, quand j'étais petit;une fois, deux fois, trois fois
le lundi (every Monday);lundi (that Monday), ensuite, puis, enfin</tb>
<t>Same verb, different meaning: <f>J'avais une voiture</f> (I had a car, state over time) vs <f>J'ai eu un accident</f> (I had an accident, event). <f>Je savais</f> (I knew) vs <f>J'ai su</f> (I found out). <f>Je connaissais</f> (I knew someone) vs <f>J'ai connu</f> (I met).</t>
<n>Duration with a defined length uses PC even if long: <f>J'ai habité dix ans à Delhi</f> (closed period). Without limits: <f>J'habitais à Delhi</f> (background).</n>
<h3>Connectors that make a story flow</h3>
<tb>Function;Words
Order;d'abord, ensuite, puis, après, enfin, finalement
Cause;parce que (+ clause), car, à cause de (+ noun)
Result;donc, alors, c'est pourquoi
Contrast;mais, pourtant, cependant
Surprise;soudain, tout à coup
Time;quand, pendant que, avant de + inf., après + inf. passé</tb>
<x>D'abord, nous sommes allés au restaurant. Ensuite, comme il faisait beau, nous avons marché. Mais tout à coup, il a commencé à pleuvoir, donc nous sommes rentrés.|First we went to the restaurant. Then, since it was nice, we walked. But suddenly it started raining, so we went home.</x>`,
  map: ['PC vs imparfait', '', [
    ['Imparfait', 'the set', [['description', 'il faisait beau'], ['habit', 'tous les jours'], ['ongoing', 'je dormais…'], ['feelings, age, time', '']]],
    ['Passé composé', 'the action', [['event', 'le téléphone a sonné'], ['sequence', "d'abord, ensuite"], ['interruption', '…quand il est arrivé'], ['counted / limited', 'trois fois, dix ans']]],
    ['Connectors', '', [['order', "d'abord, puis, enfin"], ['cause', 'parce que, car'], ['result', 'donc, alors'], ['contrast', 'mais, pourtant'], ['surprise', 'soudain']]]
  ]],
  ex: [
    ['m', 'Je ___ quand tu as appelé.', ['dormais', 'ai dormi', 'dors', 'dormi'], 0, 'Ongoing action interrupted → <b>imparfait</b>.'],
    ['m', 'Quand je lisais, quelqu\'un ___ à la porte.', ['a frappé', 'frappait', 'frappe', 'avait frappé'], 0, 'The interruption (event) → <b>passé composé</b>.'],
    ['m', 'Hier, il ___ froid, donc j\'ai mis un manteau.', ['faisait', 'a fait', 'fait', 'fera'], 0, 'Weather background → imparfait.'],
    ['m', "Un jour, je ___ une lettre mystérieuse.", ['ai reçu', 'recevais', 'reçois', 'ai recevu'], 0, '"Un jour" introduces an event → PC. recevoir → <b>reçu</b>.'],
    ['m', 'I visited Paris three times.', ["J'ai visité Paris trois fois.", 'Je visitais Paris trois fois.', 'Je visite Paris trois fois.', "J'ai visité trois fois Paris fois."], 0, 'Counted repetitions → <b>PC</b>.'],
    ['m', 'Choose the connector: Il était fatigué, ___ il s\'est couché tôt.', ['donc', 'parce que', 'mais', 'pendant que'], 0, 'Result → <b>donc</b>.'],
    ['m', 'Choose the connector: Je suis resté chez moi ___ j\'étais malade.', ['parce que', 'donc', 'pourtant', 'soudain'], 0, 'Cause + clause → <b>parce que</b>.'],
    ['f', 'Quand j\'étais petit, je ___ (aller) à la plage chaque été.', 'allais', 'Habit → imparfait.', 'aller'],
    ['f', 'Soudain, la lumière ___ (s\'éteindre: s\'est ...).', "s'est éteinte", 'Event after "soudain" → PC, reflexive → être, fem. agreement.', 'PC'],
    ['f', 'Pendant que nous ___ (manger), il a commencé à pleuvoir.', 'mangions', '"pendant que" + ongoing action → imparfait.', 'imparfait'],
    ['f', 'Elle ___ (être) triste parce qu\'elle avait perdu son chat.', 'était', 'Feeling → imparfait.', 'être'],
    ['f', 'Ce matin, je ___ (se réveiller) à 6 h.', 'me suis réveillé', 'Single event yesterday/this morning → PC. (réveillée for a woman also correct)', 'PC'],
    ['f', 'Il ___ (avoir) 18 ans quand il a eu son permis.', 'avait', 'Age → imparfait.', 'avoir'],
    ['f', 'Nous sommes sortis, ___ il pleuvait. (however / but)', 'mais', 'Contrast → <b>mais</b>.', 'connector'],
    ['o', 'I was walking in the park when I saw an old friend.', "Je me promenais dans le parc quand j'ai vu un vieil ami", 'Background (imparfait) + event (PC). vieil before a vowel.'],
    ['o', 'It was late, so we took a taxi.', 'Il était tard donc nous avons pris un taxi', 'Description (imparfait) + result event (PC).'],
    ['o', 'First we ate, then we watched a movie.', "D'abord nous avons mangé ensuite nous avons regardé un film", 'Sequence of events → PC.'],
    ['w', 'He was sleeping when the phone rang.', ['Il dormait quand le téléphone a sonné'], 'Background imparfait + interruption PC.'],
    ['w', 'When I was young, I used to play the guitar.', ["Quand j'étais jeune, je jouais de la guitare", "Quand j'étais petit, je jouais de la guitare", "Quand j'étais jeune, je jouais à la guitare"], 'Both background and habit → imparfait. Instruments: jouer de.'],
    ['w', 'Suddenly, she left.', ['Soudain, elle est partie', 'Tout à coup, elle est partie'], 'soudain → event → PC with être.']
  ]
}
);
