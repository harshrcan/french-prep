/* Lessons, days 14 to 20: pronouns, comparison, future, conditional, integration */
window.LESSONS = window.LESSONS || [];
window.LESSONS.push(
{
  day: 14, lvl: 'A2', title: 'Object pronouns: le, la, les · lui, leur · me, te, nous, vous', theme: 'Friends, messages',
  verbs: ['donner', 'envoyer', 'téléphoner', 'aider', 'appeler', 'offrir', 'recevoir', 'rendre'], deck: 'd14', stories: ['s14'],
  goals: ['Replace direct objects with le/la/l\'/les', 'Replace à + person with lui/leur', 'Place pronouns in present, negative, infinitive and passé composé', 'Know which verbs take à + person'],
  concept: `
<h3>Direct object (COD): who/what directly receives the action</h3>
<tb>Replaces;Pronoun;Example
masc. singular;le (l');Je regarde le film → Je le regarde.
fem. singular;la (l');J'aime cette chanson → Je l'aime.
plural;les;Je connais tes parents → Je les connais.</tb>
<h3>Indirect object (COI): à + a person</h3>
<tb>Replaces;Pronoun;Example
à + one person;lui (him or her);Je parle à Marc → Je lui parle.
à + several people;leur;Je téléphone à mes parents → Je leur téléphone.</tb>
<t><f>lui</f> means both "to him" and "to her". <f>leur</f> (pronoun) never takes an s.</t>
<p>Common verbs with <b>à + person</b>: <f>parler à, téléphoner à, répondre à, donner à, envoyer à, écrire à, dire à, demander à, offrir à, prêter à, montrer à, sourire à</f>.</p>
<p>Verbs with a <b>direct</b> object in French (unlike English): <f>regarder</f> (look at), <f>écouter</f> (listen to), <f>attendre</f> (wait for), <f>chercher</f> (look for), <f>aider</f> (help), <f>appeler</f> (call).</p>
<x>Tu aides ta sœur ? — Oui, je l'aide.|Do you help your sister? Yes, I help her.</x>
<x>Tu téléphones à ta sœur ? — Oui, je lui téléphone.|Do you call your sister? Yes, I call her.</x>
<h3>me, te, nous, vous: both direct and indirect</h3>
<x>Il me regarde. Il me parle.|He looks at me. He talks to me.</x>
<x>Je vous envoie le document ce soir.|I'll send you the document tonight.</x>
<h3>Placement rules</h3>
<tb>Situation;Position;Example
Present;before the verb;Je le vois.
Negative;ne + pronoun + verb + pas;Je ne le vois pas.
Verb + infinitive;before the infinitive;Je vais le voir. Je peux lui parler.
Passé composé;before the auxiliary;Je l'ai vu. Je lui ai parlé.
Negative PC;ne + pronoun + aux + pas;Je ne l'ai pas vu.
Affirmative imperative;after, with hyphen;Regarde-le ! Donne-lui le livre ! Aide-moi !</tb>
<n>In the affirmative imperative, <f>me → moi</f>, <f>te → toi</f>: <f>Appelle-moi !</f> In the negative, normal order: <f>Ne m'appelle pas.</f></n>
<n>Agreement (B1): with avoir, the participle agrees with a direct pronoun before it: <f>Ta lettre ? Je l'ai lue.</f> No agreement with lui/leur: <f>Je leur ai parlé.</f></n>
<h3>Two pronouns together (B1 preview)</h3>
<p>Order: <b>me/te/nous/vous → le/la/les → lui/leur → y → en</b>.</p>
<x>Je te le donne. Je le lui donne. Je les leur ai envoyés.|I give it to you. I give it to him. I sent them to them.</x>`,
  map: ['Object pronouns', '', [
    ['Direct (COD)', 'no preposition', [['le / la / l\'', 'it, him, her'], ['les', 'them'], ['regarder, écouter, attendre, chercher, aider', 'direct in French']]],
    ['Indirect (COI)', 'à + person', [['lui', 'to him / her'], ['leur', 'to them'], ['parler à, téléphoner à, donner à', '']]],
    ['me te nous vous', 'both COD and COI', []],
    ['Placement', '', [['before conjugated verb', 'je le vois'], ['before infinitive', 'je vais le voir'], ['before auxiliary', "je l'ai vu"], ['after affirmative imperative', 'Regarde-le !']]],
    ['Order (B1)', 'me te → le la les → lui leur → y → en', []]
  ]],
  ex: [
    ['m', 'Tu regardes le match ? — Oui, je ___ regarde.', ['le', 'lui', 'la', 'leur'], 0, 'regarder takes a direct object; match is masc. → <b>le</b>.'],
    ['m', 'Tu parles à Sophie ? — Oui, je ___ parle.', ['lui', 'la', 'le', 'leur'], 0, 'parler <b>à</b> + one person → <b>lui</b>.'],
    ['m', 'Tu écris à tes cousins ? — Oui, je ___ écris.', ['leur', 'les', 'leurs', 'lui'], 0, 'écrire à + several people → <b>leur</b> (no s).'],
    ['m', 'Tu attends tes amis ? — Oui, je ___ attends.', ['les', 'leur', 'lui', 'y'], 0, 'attendre is <b>direct</b> in French → <b>les</b>.'],
    ['m', 'Negative of "Je l\'ai vu."', ["Je ne l'ai pas vu.", "Je l'ai pas vu ne.", "Je ne ai pas le vu.", "Je ne l'ai vu pas."], 0, 'ne + pronoun + auxiliary + pas + participle.'],
    ['m', 'I am going to call her.', ['Je vais l\'appeler.', "Je l'vais appeler.", 'Je vais lui appeler.', "Je la vais appeler."], 0, 'appeler is direct → la → l\'; placed before the <b>infinitive</b>.'],
    ['m', 'Give me the keys!', ['Donne-moi les clés !', 'Me donne les clés !', 'Donne-me les clés !', 'Moi donne les clés !'], 0, 'Affirmative imperative: pronoun after, <b>me → moi</b>.'],
    ['f', 'Ce livre ? Je ___ ai lu hier.', "l'", 'le → <b>l\'</b> before ai.', 'pronoun'],
    ['f', 'Mes parents ? Je ___ téléphone chaque dimanche.', 'leur', 'téléphoner à + several → <b>leur</b>.', 'pronoun'],
    ['f', 'Ta mère ? Tu ___ as dit la vérité ?', 'lui', 'dire à + one person → <b>lui</b>.', 'pronoun'],
    ['f', 'Ces chaussures ? Je ___ achète.', 'les', 'Direct, plural → <b>les</b>.', 'pronoun'],
    ['f', 'Il ___ aime. (me)', "m'", 'me → <b>m\'</b> before a vowel.', 'pronoun'],
    ['f', 'Appelle-___ ce soir ! (me)', 'moi', 'Affirmative imperative: <b>moi</b>.', 'pronoun'],
    ['f', 'La lettre ? Je l\'ai ___ (écrire) hier.', 'écrite', 'Preceding direct object la → agreement: <b>écrite</b>.', 'agreement'],
    ['o', 'I help them every day.', 'Je les aide tous les jours', 'aider is direct → <b>les</b>.', ['leur']],
    ['o', "I didn't answer him.", "Je ne lui ai pas répondu", 'répondre à → lui; before the auxiliary.', ['le']],
    ['o', 'Can you send me the photo?', 'Est-ce que tu peux m\'envoyer la photo ?', 'Pronoun before the infinitive: <b>m\'envoyer</b>.'],
    ['w', 'Do you know her? Yes, I know her.', ['Tu la connais ? Oui, je la connais', 'Est-ce que tu la connais ? Oui, je la connais'], 'connaître is direct → <b>la</b>.'],
    ['w', 'I gave him a gift.', ['Je lui ai donné un cadeau', 'Je lui ai offert un cadeau'], 'donner à → <b>lui</b>, before ai.'],
    ['w', 'Listen to me! (tu)', ['Écoute-moi !', 'Écoute-moi'], 'écouter is direct; imperative: <b>Écoute-moi</b> (no -s).']
  ]
},
{
  day: 15, lvl: 'A2', title: 'y and en · verbs with prepositions', theme: 'Opinions, habits',
  verbs: ['penser', 'répondre', 'demander', 'rêver', 'se souvenir', 'parler'], deck: 'd15', stories: ['s15'],
  goals: ['Replace places and à + thing with y', 'Replace de + thing, partitives and quantities with en', 'Learn the key verb + à / de combinations', 'Use stressed pronouns (moi, toi, lui, elle…) after prepositions'],
  concept: `
<h3>y: there / about it / to it</h3>
<tb>Replaces;Example
à / en / dans / chez + place;Tu vas à Montréal ? — Oui, j'y vais.
à + thing / idea;Tu penses à ton examen ? — Oui, j'y pense.</tb>
<x>On y va !|Let's go!</x>
<x>Il y a un bon café ici ; j'y vais souvent.|There's a good café here; I go there often.</x>
<h3>en: some / of it / from there</h3>
<tb>Replaces;Example
partitive du / de la / des + noun;Tu veux du thé ? — Oui, j'en veux.
quantity + noun (keep the number);Tu as des frères ? — J'en ai deux.
de + thing;Tu parles de ton voyage ? — Oui, j'en parle.
de + place (from there);Tu viens de la bibliothèque ? — Oui, j'en viens.</tb>
<t>With numbers and quantities, the number stays at the end: <f>J'en ai trois. Il en a beaucoup.</f> Negative: <f>Je n'en ai pas.</f></t>
<h3>People: not y / en but lui / stressed pronouns</h3>
<p><f>penser à</f> + person uses a stressed pronoun: <f>Je pense à ma mère → Je pense à elle.</f> <f>parler de</f> + person: <f>Je parle de Paul → Je parle de lui.</f></p>
<tb>Subject;Stressed pronoun
je;moi
tu;toi
il / elle;lui / elle
nous;nous
vous;vous
ils / elles;eux / elles</tb>
<p>Also after prepositions and for emphasis: <f>avec moi, chez toi, pour eux, Moi, je préfère le thé.</f></p>
<h3>Verbs with à</h3>
<p><f>penser à</f> (think about), <f>répondre à</f>, <f>s'intéresser à</f>, <f>jouer à</f> (a sport/game), <f>réussir à</f>, <f>commencer à + inf.</f>, <f>apprendre à + inf.</f>, <f>aider qqn à + inf.</f>, <f>s'habituer à</f>.</p>
<h3>Verbs with de</h3>
<p><f>parler de</f>, <f>avoir besoin de</f> (need), <f>avoir envie de</f> (feel like), <f>avoir peur de</f>, <f>rêver de</f>, <f>se souvenir de</f>, <f>s'occuper de</f> (take care of), <f>jouer de</f> (an instrument), <f>décider de + inf.</f>, <f>essayer de + inf.</f>, <f>arrêter de + inf.</f>, <f>oublier de + inf.</f>.</p>
<x>J'ai besoin d'un ordinateur. — Tu en as vraiment besoin ?|I need a computer. Do you really need one?</x>
<x>Je rêve de vivre à Québec.|I dream of living in Quebec City.</x>
<x>Elle a décidé d'apprendre le français et elle a commencé à étudier.|She decided to learn French and started studying.</x>
<n>Placement of y and en follows the same rules as le/lui: before the conjugated verb, before an infinitive, before the auxiliary. Imperative: <f>Vas-y ! Prends-en !</f> (the s comes back before y/en).</n>`,
  map: ['y & en', '', [
    ['y', 'à + place / thing', [["j'y vais", 'there'], ["j'y pense", 'about it'], ['On y va !', '']]],
    ['en', 'de + thing, partitive, quantity', [["j'en veux", 'some'], ["j'en ai deux", 'keep number'], ["j'en parle", 'about it'], ["j'en viens", 'from there']]],
    ['People', 'stressed pronoun', [['penser à lui', ''], ['parler d\'elle', ''], ['moi toi lui elle nous vous eux elles', '']]],
    ['Verb + à', '', [['penser à, répondre à, commencer à', '']]],
    ['Verb + de', '', [['parler de, avoir besoin de, rêver de, décider de', '']]]
  ]],
  ex: [
    ['m', 'Tu vas au gym ? — Oui, j\'___ vais.', ['y', 'en', 'le', 'lui'], 0, 'à + place → <b>y</b>.'],
    ['m', 'Tu bois du café ? — Oui, j\'___ bois.', ['en', 'y', 'le', 'la'], 0, 'Partitive (du café) → <b>en</b>.'],
    ['m', 'Tu as combien de cousins ? — J\'___ ai cinq.', ['en', 'y', 'les', 'leur'], 0, 'Quantity → <b>en</b> + keep the number.'],
    ['m', 'Tu penses à ton projet ? — Oui, j\'___ pense.', ['y', 'en', 'le', 'lui'], 0, 'penser à + thing → <b>y</b>.'],
    ['m', 'Tu penses à ta copine ? — Oui, je pense ___.', ['à elle', 'y', 'lui', 'en'], 0, 'penser à + <b>person</b> → stressed pronoun: à elle.'],
    ['m', 'I need it. (a car)', ["J'en ai besoin.", "J'y ai besoin.", "Je l'ai besoin.", "J'ai besoin en."], 0, 'avoir besoin <b>de</b> → <b>en</b>.'],
    ['m', 'Il ne mange pas de viande. Il n\'___ mange jamais.', ['en', 'y', 'la', 'le'], 0, 'de + thing → <b>en</b>; negation wraps en + verb.'],
    ['f', 'Elle a décidé ___ partir.', 'de', 'décider <b>de</b> + infinitive.', 'preposition'],
    ['f', 'Il a commencé ___ pleuvoir.', 'à', 'commencer <b>à</b> + infinitive.', 'preposition'],
    ['f', 'Je rêve ___ voyager en Europe.', 'de', 'rêver <b>de</b>.', 'preposition'],
    ['f', 'Tu te souviens ___ ce jour ?', 'de', 'se souvenir <b>de</b>.', 'preposition'],
    ['f', 'Il joue ___ piano.', 'du', 'jouer de + instrument: de + le = <b>du</b>.', 'preposition'],
    ['f', 'Nous jouons ___ football.', 'au', 'jouer à + sport: à + le = <b>au</b>.', 'preposition'],
    ['f', 'Tu viens avec ___ ? (me)', 'moi', 'After a preposition: stressed pronoun <b>moi</b>.', 'stressed'],
    ['o', 'We are going there tomorrow.', 'Nous y allons demain', 'y before the verb.'],
    ['o', 'I have two of them.', "J'en ai deux", 'en + verb + number.'],
    ['o', "She doesn't talk about it.", "Elle n'en parle pas", 'parler de → en; ne + en + verb + pas.'],
    ['w', 'Go ahead! (tu)', ['Vas-y !', 'Vas-y'], 'Imperative + y: the -s comes back: <b>Vas-y</b>.'],
    ['w', 'Do you want some? (tu, est-ce que)', ['Est-ce que tu en veux ?', 'Tu en veux ?', 'En veux-tu ?'], 'en before veux.'],
    ['w', 'I am thinking about them. (people)', ['Je pense à eux', 'Je pense à elles'], 'penser à + people → à eux / à elles.']
  ]
},
{
  day: 16, lvl: 'A2', title: 'Relative pronouns qui / que / où · comparatives, superlatives, adverbs', theme: 'Describing and choosing',
  verbs: ['plaire', 'préférer', 'suivre', 'choisir'], deck: 'd16', stories: ['s16'],
  goals: ['Join sentences with qui, que, où (and dont as a preview)', 'Compare with plus/moins/aussi … que', 'Use superlatives le plus / le moins', 'Form adverbs in -ment and know bon/bien, meilleur/mieux'],
  concept: `
<h3>Relative pronouns: joining two sentences</h3>
<tb>Pronoun;Replaces;Example
qui;the subject (followed by a verb);J'ai un ami qui habite à Lyon.
que (qu');the direct object (followed by subject + verb);Le film que j'ai vu était génial.
où;a place or a time;La ville où je suis né. Le jour où je suis arrivé.
dont (B1);de + noun;Le livre dont je parle. (parler de)</tb>
<x>C'est la femme qui travaille avec moi.|That's the woman who works with me.</x>
<x>C'est la femme que j'ai rencontrée hier.|That's the woman I met yesterday.</x>
<n>Quick test: if the next word is a verb → <b>qui</b>. If the next word is a subject (je, tu, il, Marie…) → <b>que</b>.</n>
<t>English often drops "that": "the book I read". French never drops <f>que</f>: <f>le livre que j'ai lu</f>. <f>qui</f> never becomes qu'.</t>
<h3>Comparatives</h3>
<tb>Meaning;Adjective / adverb;Noun;Verb
more … than;plus grand que;plus de livres que;travailler plus que
less … than;moins cher que;moins de temps que;dormir moins que
as … as;aussi rapide que;autant d'argent que;manger autant que</tb>
<x>Vancouver est plus cher que Surrey.|Vancouver is more expensive than Surrey.</x>
<x>J'ai moins de temps que toi.|I have less time than you.</x>
<h3>Superlatives</h3>
<p><f>le / la / les + plus / moins + adjective (+ de)</f>: <f>C'est la ville la plus belle du Canada.</f> BAGS adjectives can go before: <f>le plus grand parc de la ville</f>.</p>
<h3>Irregular: bon and bien</h3>
<tb>;Comparative;Superlative
bon (adjective, good);meilleur(e)(s);le meilleur, la meilleure
bien (adverb, well);mieux;le mieux
mauvais (bad);plus mauvais / pire;le pire</tb>
<x>Ce café est meilleur que l'autre. Tu parles mieux français que moi.|This coffee is better than the other. You speak French better than me.</x>
<t>Never <f>plus bon</f> or <f>plus bien</f>. Adjective (describes a noun) → meilleur. Adverb (describes a verb) → mieux.</t>
<h3>Adverbs in -ment</h3>
<p>Feminine adjective + <b>-ment</b>: <f>lent → lente → lentement</f>, <f>heureux → heureuse → heureusement</f>. Adjectives ending in a vowel use the masculine: <f>vrai → vraiment, poli → poliment</f>. <f>-ant → -amment</f> (<f>courant → couramment</f>), <f>-ent → -emment</f> (<f>récent → récemment</f>).</p>
<p>Irregular: <f>bon → bien, mauvais → mal, gentil → gentiment</f>.</p>`,
  map: ['Describing & comparing', '', [
    ['Relatives', '', [['qui', '+ verb (subject)'], ['que', '+ subject + verb (object)'], ['où', 'place / time'], ['dont', 'de + noun (B1)']]],
    ['Comparatives', '', [['plus … que', 'more'], ['moins … que', 'less'], ['aussi … que', 'as (adj.)'], ['autant de … que', 'as much (noun)']]],
    ['Superlatives', 'le/la/les plus …', [['la ville la plus belle du Canada', '']]],
    ['Irregular', '', [['bon → meilleur', 'adjective'], ['bien → mieux', 'adverb']]],
    ['Adverbs', 'fem. adj + -ment', [['lentement, heureusement', ''], ['vraiment, poliment', 'vowel → masc.'], ['couramment, récemment', '']]]
  ]],
  ex: [
    ['m', "J'ai une amie ___ parle japonais.", ['qui', 'que', 'où', 'dont'], 0, 'Next word is a verb → <b>qui</b>.'],
    ['m', 'Le gâteau ___ tu as fait est délicieux.', ['que', 'qui', 'où', 'dont'], 0, 'Next word is a subject (tu) → <b>que</b>.'],
    ['m', 'La maison ___ j\'ai grandi est vendue.', ['où', 'que', 'qui', 'dont'], 0, 'A place → <b>où</b>.'],
    ['m', 'Le film ___ je parle est sorti hier.', ['dont', 'que', 'qui', 'où'], 0, 'parler <b>de</b> → <b>dont</b>.'],
    ['m', 'Ce restaurant est ___ que l\'autre.', ['meilleur', 'plus bon', 'mieux', 'plus bien'], 0, 'Adjective bon → <b>meilleur</b>.'],
    ['m', 'Elle chante ___ que moi.', ['mieux', 'meilleur', 'plus bien', 'plus bonne'], 0, 'Adverb (describes chanter) → <b>mieux</b>.'],
    ['m', 'Montréal is the biggest city in Quebec.', ['Montréal est la plus grande ville du Québec.', 'Montréal est la ville plus grande de Québec.', 'Montréal est plus grande ville au Québec.', 'Montréal est la grande plus ville du Québec.'], 0, 'Superlative: la plus + grande (BAGS before) + <b>du</b> Québec.'],
    ['f', 'Toronto est ___ grand que Montréal. (more)', 'plus', 'more = <b>plus</b> … que.', 'comparative'],
    ['f', 'Il a ___ d\'amis que moi. (as many)', 'autant', 'Equal quantity with a noun → <b>autant de</b>.', 'comparative'],
    ['f', 'Elle est ___ intelligente que son frère. (as)', 'aussi', 'Equal + adjective → <b>aussi</b>.', 'comparative'],
    ['f', 'rapide → ___ (adverb)', 'rapidement', 'rapide + <b>ment</b>.', 'adverb'],
    ['f', 'heureux → ___ (adverb)', 'heureusement', 'feminine heureuse + ment.', 'adverb'],
    ['f', 'Il parle français ___. (courant, fluently)', 'couramment', '-ant → <b>-amment</b>.', 'adverb'],
    ['f', 'C\'est l\'homme ___ j\'ai vu hier.', 'que', 'Followed by subject j\' → <b>que</b>.', 'relative'],
    ['o', 'The bus that goes downtown is late.', 'Le bus qui va au centre-ville est en retard', 'qui + verb (va).'],
    ['o', 'This is the best day of my life.', "C'est le meilleur jour de ma vie", 'Superlative of bon: <b>le meilleur</b>.'],
    ['o', 'I have less money than my brother.', "J'ai moins d'argent que mon frère", 'moins de + noun + que.'],
    ['w', 'The book I am reading is interesting.', ['Le livre que je lis est intéressant'], 'French keeps <b>que</b>.'],
    ['w', 'She speaks slowly.', ['Elle parle lentement'], 'lente + ment.'],
    ['w', 'The city where I live is quiet.', ['La ville où j\'habite est calme', 'La ville où je vis est calme', 'La ville où j\'habite est tranquille'], 'place → <b>où</b>.']
  ]
},
{
  day: 17, lvl: 'A2', title: 'Time expressions · futur simple (regular)', theme: 'Time and duration',
  verbs: ['parler', 'finir', 'attendre', 'commencer', 'rester', 'travailler', 'partir', 'prendre'], deck: 'd17', stories: ['s17'],
  goals: ['Use depuis, pendant, il y a, en, dans correctly', 'Form the futur simple of regular verbs', 'Choose futur proche or futur simple'],
  concept: `
<h3>Five time words that confuse everyone</h3>
<tb>Word;Meaning;Tense;Example
depuis;since / for (still going);present;J'habite au Canada depuis 2019 / depuis cinq ans.
pendant;for (a duration, finished or planned);any;J'ai étudié pendant deux heures.
il y a;ago;passé composé;Je suis arrivé il y a trois ans.
en;within, how long it takes;any;J'ai fini le projet en une semaine.
dans;in (from now, future);future;Le train part dans dix minutes.</tb>
<t>"I have lived here for 5 years (and still do)" = <f>J'habite ici depuis cinq ans</f>, <b>present tense</b>. Not <f>J'ai habité</f>.</t>
<x>Depuis quand est-ce que tu apprends le français ? — Depuis le 11 novembre.|Since when have you been learning French? Since November 11.</x>
<x>Nous partons en vacances dans deux semaines, pendant dix jours.|We're going on vacation in two weeks, for ten days.</x>
<n>Also: <f>ça fait … que</f> = depuis: <f>Ça fait deux ans que je travaille ici.</f></n>
<h3>Futur simple: formation</h3>
<p>Stem = <b>infinitive</b> (drop the final -e of -re verbs). Endings = present of avoir: <b>-ai, -as, -a, -ons, -ez, -ont</b>.</p>
<tb>parler;finir;attendre
je parlerai;je finirai;j'attendrai
tu parleras;tu finiras;tu attendras
il parlera;il finira;il attendra
nous parlerons;nous finirons;nous attendrons
vous parlerez;vous finirez;vous attendrez
ils parleront;ils finiront;ils attendront</tb>
<n>The stem always ends in <b>r</b>. Spelling change verbs keep their accent: <f>j'achèterai, j'appellerai, je paierai</f>.</n>
<h3>Futur proche or futur simple?</h3>
<tb>Futur proche (aller + inf.);Futur simple
near, planned, certain;more distant, formal, predictions, promises
spoken, everyday;written, official, weather forecasts
Je vais manger.;Un jour, je parlerai couramment.</tb>
<p>After <f>quand</f> about the future, French uses the futur (English uses present): <f>Quand je serai au Québec, je parlerai français.</f></p>
<x>Demain, il pleuvra sur la côte et il fera froid à l'intérieur.|Tomorrow it will rain on the coast and it will be cold inland.</x>
<x>L'année prochaine, je travaillerai dans une entreprise informatique.|Next year I'll work at an IT company.</x>`,
  map: ['Time & future', '', [
    ['Time words', '', [['depuis + present', 'still going'], ['pendant', 'duration'], ['il y a + PC', 'ago'], ['en', 'time taken'], ['dans', 'from now']]],
    ['Futur simple', 'infinitive + ai as a ons ez ont', [['parlerai', ''], ['finirai', ''], ['attendrai', '-re drops e']]],
    ['Which future?', '', [['futur proche', 'near, spoken'], ['futur simple', 'distant, predictions, promises'], ['quand + futur', 'Quand je serai…']]]
  ]],
  ex: [
    ['m', "I've been studying French for two weeks.", ["J'étudie le français depuis deux semaines.", "J'ai étudié le français depuis deux semaines.", "J'étudie le français pendant deux semaines.", "J'étudie le français il y a deux semaines."], 0, 'Still going → <b>present + depuis</b>.'],
    ['m', 'Il est parti ___ une heure. (ago)', ['il y a', 'depuis', 'dans', 'en'], 0, 'ago = <b>il y a</b>.'],
    ['m', 'Le cours commence ___ cinq minutes. (from now)', ['dans', 'en', 'il y a', 'depuis'], 0, 'in (from now) = <b>dans</b>.'],
    ['m', 'J\'ai lu ce livre ___ deux jours. (it took me)', ['en', 'dans', 'depuis', 'il y a'], 0, 'Time taken = <b>en</b>.'],
    ['m', 'Futur simple of "finir" (nous):', ['finirons', 'finissons', 'finerons', 'finirions'], 0, 'finir + <b>ons</b>.'],
    ['m', 'Futur simple of "attendre" (je):', ["j'attendrai", "j'attenderai", "j'attendrais", "j'attendre"], 0, '-re verbs drop the e: attendr- + <b>ai</b>.'],
    ['m', 'When I am in Quebec, I will speak French.', ['Quand je serai au Québec, je parlerai français.', 'Quand je suis au Québec, je parlerai français.', 'Quand je serai au Québec, je parle français.', 'Si je serai au Québec, je parlerai français.'], 0, 'quand + future meaning → <b>futur</b> in both clauses.'],
    ['f', 'Nous ___ (travailler) ensemble l\'année prochaine.', 'travaillerons', 'infinitive + <b>ons</b>.', 'futur'],
    ['f', 'Ils ___ (partir) demain.', 'partiront', 'partir + <b>ont</b>.', 'futur'],
    ['f', 'Tu ___ (prendre) le train ?', 'prendras', 'prendr- + <b>as</b>.', 'futur'],
    ['f', 'J\'___ (acheter) une maison un jour.', 'achèterai', 'Keeps è: <b>achèterai</b>.', 'futur'],
    ['f', 'J\'habite ici ___ 2020.', 'depuis', 'Since + present → <b>depuis</b>.', 'time'],
    ['f', 'Elle a dormi ___ huit heures.', 'pendant', 'Duration → <b>pendant</b>.', 'time'],
    ['f', 'Vous ___ (finir) à quelle heure ?', 'finirez', 'finir + <b>ez</b>.', 'futur'],
    ['o', 'I arrived in Canada three years ago.', 'Je suis arrivé au Canada il y a trois ans', 'il y a + passé composé.'],
    ['o', 'She will finish her studies in December.', 'Elle finira ses études en décembre', 'Futur simple. en + month.'],
    ['o', 'We have been waiting for twenty minutes.', 'Nous attendons depuis vingt minutes', 'Still waiting → present + depuis.'],
    ['w', 'They will speak French.', ['Ils parleront français', 'Elles parleront français'], 'parler + ont.'],
    ['w', 'The movie starts in ten minutes.', ['Le film commence dans dix minutes'], 'dans = from now.'],
    ['w', 'I worked for three hours.', ["J'ai travaillé pendant trois heures", "J'ai travaillé trois heures"], 'Finished duration: PC + pendant.']
  ]
},
{
  day: 18, lvl: 'A2', title: 'Futur irregular · conditionnel · si + présent · advice and requests', theme: 'Advice, polite requests',
  verbs: ['être', 'avoir', 'aller', 'faire', 'venir', 'voir', 'pouvoir', 'vouloir', 'devoir', 'savoir', 'falloir', 'envoyer'], deck: 'd18', stories: ['s18'],
  goals: ['Know the 15 irregular future stems', 'Form the conditional (future stem + imparfait endings)', 'Make polite requests and give advice', 'Use si + présent → futur, and si + imparfait → conditionnel (B1)'],
  concept: `
<h3>Irregular future stems</h3>
<tb>Verb;Stem;je …
être;ser-;je serai
avoir;aur-;j'aurai
aller;ir-;j'irai
faire;fer-;je ferai
venir;viendr-;je viendrai
voir;verr-;je verrai
pouvoir;pourr-;je pourrai
vouloir;voudr-;je voudrai
devoir;devr-;je devrai
savoir;saur-;je saurai
envoyer;enverr-;j'enverrai
falloir;faudr-;il faudra
pleuvoir;pleuvr-;il pleuvra
recevoir;recevr-;je recevrai
courir / mourir;courr- / mourr-;je courrai</tb>
<x>Je serai là à 8 heures. On verra !|I'll be there at 8. We'll see!</x>
<h3>Conditionnel présent: would</h3>
<p>Future stem + <b>imparfait endings</b> (-ais, -ais, -ait, -ions, -iez, -aient).</p>
<tb>aimer;pouvoir;être
j'aimerais;je pourrais;je serais
tu aimerais;tu pourrais;tu serais
il aimerait;il pourrait;il serait
nous aimerions;nous pourrions;nous serions
vous aimeriez;vous pourriez;vous seriez
ils aimeraient;ils pourraient;ils seraient</tb>
<t>Listen carefully: <f>je parlerai</f> (will, "ray") vs <f>je parlerais</f> (would, "reh"). In writing, check the final s.</t>
<h3>Uses of the conditional</h3>
<tb>Use;Example
Polite request;Pourriez-vous m'aider ? · Je voudrais un rendez-vous.
Wish;J'aimerais visiter Paris. · Ce serait génial !
Advice;Tu devrais dormir plus. · À ta place, je parlerais au professeur.
Hypothesis (B1);Si j'avais le temps, je voyagerais.</tb>
<x>Est-ce que vous pourriez répéter plus lentement, s'il vous plaît ?|Could you repeat more slowly, please?</x>
<x>Tu devrais réviser les verbes tous les jours.|You should review verbs every day.</x>
<h3>Si clauses</h3>
<tb>Type;si + …;main clause;Example
Real / likely;présent;futur (or présent, imperative);S'il fait beau demain, nous irons à la plage.
Hypothetical (B1);imparfait;conditionnel;Si j'étais riche, j'achèterais une maison.</tb>
<t>Never put the future or conditional right after <f>si</f>: <f>Si je serai</f> and <f>Si j'aurais</f> are wrong.</t>
<p>Other advice structures: <f>il faut + inf.</f>, <f>je te conseille de + inf.</f>, <f>pourquoi est-ce que tu ne … pas ?</f>, imperative.</p>`,
  map: ['Future & would', '', [
    ['Irregular stems', '', [['ser, aur, ir, fer', 'être, avoir, aller, faire'], ['viendr, verr, pourr, voudr', ''], ['devr, saur, enverr, faudr', '']]],
    ['Conditionnel', 'future stem + -ais', [['polite', 'Pourriez-vous…'], ['wish', "J'aimerais…"], ['advice', 'Tu devrais…'], ['hypothesis', 'si + imparfait']]],
    ['Si clauses', '', [['si + présent → futur', 'likely'], ['si + imparfait → conditionnel', 'hypothetical'], ['never si + futur/cond.', '']]]
  ]],
  ex: [
    ['m', 'Futur of "aller" (je):', ["j'irai", "j'allerai", "j'irais", 'je vais'], 0, 'aller → stem <b>ir-</b>.'],
    ['m', 'Futur of "faire" (nous):', ['ferons', 'faisons', 'fairons', 'ferions'], 0, 'faire → <b>fer-</b> + ons.'],
    ['m', 'Polite: "Could you help me?"', ["Pourriez-vous m'aider ?", "Pouvez-vous m'aider ?", "Pourrez-vous m'aider ?", "Vous pourriez me aider ?"], 0, 'Conditional of pouvoir = <b>pourriez</b>: the most polite.'],
    ['m', 'You should sleep more.', ['Tu devrais dormir plus.', 'Tu devras dormir plus.', 'Tu dois dormir plus.', 'Tu devrait dormir plus.'], 0, 'Advice → conditional <b>devrais</b>.'],
    ['m', "S'il pleut demain, nous ___ à la maison.", ['resterons', 'resterions', 'restons resterons', 'resterait'], 0, 'si + présent → <b>futur</b>.'],
    ['m', "Si j'avais de l'argent, je ___ une voiture.", ['achèterais', 'achèterai', 'achète', 'achetais'], 0, 'si + imparfait → <b>conditionnel</b>.'],
    ['m', 'Which is wrong?', ['Si je serai libre, je viendrai.', 'Si je suis libre, je viendrai.', "Si j'étais libre, je viendrais.", 'Si tu veux, on peut partir.'], 0, 'Never <b>si + futur</b>.'],
    ['f', 'Je ___ (être) en retard demain.', 'serai', 'être → <b>ser-</b> + ai.', 'futur'],
    ['f', 'Nous ___ (avoir) le temps la semaine prochaine.', 'aurons', 'avoir → <b>aur-</b> + ons.', 'futur'],
    ['f', 'Tu ___ (venir) avec nous ?', 'viendras', 'venir → <b>viendr-</b>.', 'futur'],
    ['f', 'Ils ___ (voir) le résultat demain.', 'verront', 'voir → <b>verr-</b>.', 'futur'],
    ['f', 'J\'___ (aimer) parler couramment.', 'aimerais', 'Wish → conditional: <b>aimerais</b>.', 'conditionnel'],
    ['f', 'Ce ___ (être) une bonne idée.', 'serait', 'It would be → <b>serait</b>.', 'conditionnel'],
    ['f', 'Il ___ (falloir) partir tôt demain. (futur)', 'faudra', 'falloir → <b>faudr-</b>.', 'futur'],
    ['f', 'Vous ___ (vouloir) un café ? (polite)', 'voudriez', 'Conditional of vouloir: <b>voudriez</b>.', 'conditionnel'],
    ['o', 'If I have time, I will call you.', "Si j'ai le temps je t'appellerai", 'si + présent → futur.'],
    ['o', 'I would like to make an appointment.', 'Je voudrais prendre un rendez-vous', 'je voudrais + infinitive. "make an appointment" = prendre rendez-vous.'],
    ['o', 'If I were you, I would study every day.', "Si j'étais toi j'étudierais tous les jours", 'si + imparfait → conditionnel.'],
    ['w', 'We will see.', ['Nous verrons', 'On verra'], 'voir → verr-.'],
    ['w', 'Could you (vous) speak more slowly?', ['Pourriez-vous parler plus lentement ?', 'Est-ce que vous pourriez parler plus lentement ?', 'Vous pourriez parler plus lentement ?'], 'Conditional for politeness.'],
    ['w', 'She will be happy.', ['Elle sera contente', 'Elle sera heureuse'], 'être → ser-.']
  ]
},
{
  day: 19, lvl: 'A2+', title: 'Integration: health, appointments, shops, complaints', theme: 'Everyday situations',
  verbs: ['avoir', 'être', 'pouvoir', 'vouloir', 'devoir', 'prendre', 'faire', 'aller'], deck: 'd19', stories: ['s19'],
  goals: ['Handle real situations: doctor, pharmacy, appointment, shop, complaint, housing', 'Mix all tenses in one conversation', 'Fix your recurring errors'],
  concept: `
<h3>At the doctor / pharmacy</h3>
<x>J'ai mal à la tête depuis deux jours.|I've had a headache for two days.</x>
<x>J'ai mal au dos, à la gorge, aux dents.|My back, throat, teeth hurt.</x>
<x>Je tousse et j'ai de la fièvre. Je me sens fatigué.|I'm coughing and I have a fever. I feel tired.</x>
<x>Vous devriez prendre ce médicament deux fois par jour et vous reposer.|You should take this medicine twice a day and rest.</x>
<n><f>avoir mal à</f> + body part, with contractions: <f>au ventre, à la jambe, à l'oreille, aux yeux</f>. <f>se sentir</f> + adjective: <f>Je me sens mieux.</f></n>
<h3>Making an appointment</h3>
<x>Bonjour, je voudrais prendre rendez-vous avec le docteur Martin.|Hello, I'd like to make an appointment with Dr. Martin.</x>
<x>Est-ce que jeudi à 14 heures vous conviendrait ?|Would Thursday at 2 pm suit you?</x>
<x>Je suis désolé, je ne pourrai pas venir. Est-ce qu'on pourrait reporter le rendez-vous ?|I'm sorry, I won't be able to come. Could we postpone the appointment?</x>
<h3>In a shop</h3>
<x>Je cherche une veste. Vous l'avez en taille M ?|I'm looking for a jacket. Do you have it in size M?</x>
<x>Je peux l'essayer ? Où sont les cabines ?|Can I try it on? Where are the fitting rooms?</x>
<x>C'est un peu trop cher. Vous avez quelque chose de moins cher ?|It's a bit too expensive. Do you have something cheaper?</x>
<h3>Complaining politely</h3>
<x>Excusez-moi, j'ai acheté cet ordinateur la semaine dernière, mais il ne marche pas.|Excuse me, I bought this computer last week, but it doesn't work.</x>
<x>Est-ce que je pourrais être remboursé ou l'échanger ?|Could I get a refund or exchange it?</x>
<x>Je ne suis pas satisfait du service. J'ai attendu quarante minutes.|I'm not satisfied with the service. I waited forty minutes.</x>
<h3>Housing</h3>
<x>Le chauffage ne fonctionne plus depuis lundi. Pourriez-vous envoyer quelqu'un ?|The heating hasn't worked since Monday. Could you send someone?</x>
<h3>Structure for any situation</h3>
<ol><li>Greet + polite opener: <f>Bonjour, excusez-moi…</f></li><li>Situation in the present or past: <f>J'ai acheté… / J'ai un problème avec…</f></li><li>Request in the conditional: <f>Est-ce que vous pourriez… ? Je voudrais…</f></li><li>Close: <f>Merci beaucoup, bonne journée.</f></li></ol>`,
  map: ['Real situations', '', [
    ['Health', '', [['avoir mal à', 'au dos, à la tête'], ['se sentir', 'je me sens mieux'], ['depuis + present', '']]],
    ['Appointments', '', [['prendre rendez-vous', ''], ['reporter / annuler', 'postpone / cancel']]],
    ['Shopping', '', [['essayer, la taille', ''], ['moins cher', 'comparative']]],
    ['Complaints', '', [['PC for what happened', "j'ai acheté"], ['conditional for request', 'pourriez-vous'], ['rembourser, échanger', '']]]
  ]],
  ex: [
    ['m', 'My stomach hurts.', ["J'ai mal au ventre.", "J'ai mal à le ventre.", 'Je suis mal au ventre.', "J'ai mal de ventre."], 0, 'avoir mal <b>à</b> + le → <b>au</b>.'],
    ['m', "I've had a fever since yesterday.", ["J'ai de la fièvre depuis hier.", "J'ai eu de la fièvre depuis hier.", "J'ai de la fièvre il y a hier.", "J'ai fièvre pendant hier."], 0, 'Still going → present + depuis.'],
    ['m', 'Polite request at a pharmacy:', ['Est-ce que vous pourriez me conseiller quelque chose ?', 'Donnez-moi quelque chose.', 'Je veux quelque chose.', 'Vous conseillez quelque chose à moi ?'], 0, 'Conditional = polite.'],
    ['m', 'I bought this phone yesterday, but it doesn\'t work.', ["J'ai acheté ce téléphone hier, mais il ne marche pas.", "J'achetais ce téléphone hier, mais il ne marche pas.", "J'ai acheté ce téléphone hier, mais il n'a pas marché pas.", "Je suis acheté ce téléphone hier, mais il ne marche pas."], 0, 'Event → PC with avoir; current state → present.'],
    ['m', 'Can I try it on? (la veste)', ["Je peux l'essayer ?", 'Je peux essayer la ?', "Je l'peux essayer ?", 'Je peux lui essayer ?'], 0, 'Direct pronoun before the infinitive.'],
    ['m', "I won't be able to come.", ['Je ne pourrai pas venir.', 'Je ne pourrais pas venir.', 'Je ne peux pas venir pas.', 'Je ne vais pouvoir pas venir.'], 0, 'Future of pouvoir: <b>pourrai</b>.'],
    ['f', 'J\'ai mal ___ dents.', 'aux', 'à + les → <b>aux</b>.', 'contraction'],
    ['f', 'Je me ___ (sentir) mieux aujourd\'hui.', 'sens', 'se sentir: je me <b>sens</b>.', 'sentir'],
    ['f', 'Je voudrais prendre ___ avec le dentiste.', 'rendez-vous', '<b>prendre rendez-vous</b>.', 'expression'],
    ['f', 'Vous avez quelque chose de moins ___ ?', 'cher', 'moins cher = cheaper.', 'comparative'],
    ['f', 'Le chauffage ne marche ___ depuis lundi. (no longer)', 'plus', 'ne ... <b>plus</b> = no longer.', 'negation'],
    ['f', 'Vous ___ (devoir) boire beaucoup d\'eau. (should, polite)', 'devriez', 'Advice → conditional <b>devriez</b>.', 'conditionnel'],
    ['o', 'I would like to exchange this sweater.', 'Je voudrais échanger ce pull', 'je voudrais + infinitive.'],
    ['o', 'I have been waiting for forty minutes.', "J'attends depuis quarante minutes", 'Present + depuis.'],
    ['o', 'Could you send someone tomorrow?', "Pourriez-vous envoyer quelqu'un demain ?", 'Conditional for a polite request.'],
    ['w', 'My head hurts.', ["J'ai mal à la tête"], 'avoir mal à la tête.'],
    ['w', 'Could I be refunded?', ['Est-ce que je pourrais être remboursé ?', 'Pourrais-je être remboursé ?', 'Est-ce que je pourrais être remboursée ?', 'Je pourrais être remboursé ?'], 'Conditional of pouvoir.'],
    ['w', 'Do you have it in size L? (la chemise)', ["Vous l'avez en taille L ?", "Est-ce que vous l'avez en taille L ?", "Vous l'avez en L ?"], 'Direct pronoun l\'.']
  ]
},
{
  day: 20, lvl: 'A2 → B1', title: 'Final review: all tenses in one picture · A2 mock exam', theme: 'All',
  verbs: ['être', 'avoir', 'aller', 'faire', 'venir', 'prendre', 'pouvoir', 'vouloir', 'devoir', 'voir'], deck: 'd20', stories: ['s20'], assess: 'a3',
  goals: ['See every tense on one timeline', 'Pass the A2 mock (reading, listening, grammar, writing)', 'Get a gap report and a B1 plan'],
  concept: `
<h3>The timeline</h3>
<tb>Time;Tense;Form;Example
just before now;passé récent;venir de + inf.;Je viens de manger.
past events;passé composé;avoir/être + participle;J'ai mangé. Je suis parti.
past background / habits;imparfait;nous-stem + -ais;Je mangeais.
now;présent;;Je mange.
right now (emphasis);être en train de;;Je suis en train de manger.
near future;futur proche;aller + inf.;Je vais manger.
future;futur simple;inf. + -ai;Je mangerai.
would;conditionnel;future stem + -ais;Je mangerais.</tb>
<h3>One story, every tense</h3>
<x>Quand j'étais petit, j'habitais en Inde.|When I was little, I lived in India.</x>
<x>En 2019, ma famille a décidé de partir et nous sommes arrivés à Vancouver.|In 2019, my family decided to leave and we arrived in Vancouver.</x>
<x>Au début, c'était difficile parce que je ne connaissais personne.|At first it was hard because I didn't know anyone.</x>
<x>Maintenant, j'étudie l'informatique et je travaille à temps partiel depuis deux ans.|Now I study computing and have worked part-time for two years.</x>
<x>Je viens de commencer un cours de français intensif.|I've just started an intensive French course.</x>
<x>Le mois prochain, je vais passer un examen.|Next month I'm going to take an exam.</x>
<x>Un jour, je parlerai couramment et j'aimerais travailler à Montréal.|One day I will speak fluently and I would like to work in Montreal.</x>
<h3>Top 12 A2 errors to check in every text</h3>
<ol>
<li><f>j'ai allé</f> → <f>je suis allé</f> (house of être)</li>
<li>Missing agreement with être: <f>elle est partie</f></li>
<li>Agreement with avoir subject: <f>elle a mangée</f> → <f>elle a mangé</f></li>
<li><f>je suis 20 ans</f> → <f>j'ai 20 ans</f></li>
<li><f>pas des / pas une</f> → <f>pas de</f></li>
<li><f>à le / de le</f> → <f>au / du</f></li>
<li>Imparfait for single events (<f>soudain, il tombait</f> → <f>il est tombé</f>)</li>
<li><f>depuis</f> with passé composé for ongoing situations → present</li>
<li><f>si je serai / si j'aurais</f> → <f>si je suis / si j'avais</f></li>
<li><f>plus bon / plus bien</f> → <f>meilleur / mieux</f></li>
<li>Dropping <f>que</f>: "the film I saw" = <f>le film que j'ai vu</f></li>
<li>Pronoun placement: <f>je vais le voir</f>, <f>je l'ai vu</f>, <f>je ne l'ai pas vu</f></li>
</ol>
<h3>Going to B1: what comes next</h3>
<ul>
<li>Plus-que-parfait (<f>j'avais mangé</f>), subjonctif présent after <f>il faut que, je veux que</f></li>
<li>Pronouns dont, lequel; double pronouns; gérondif (<f>en marchant</f>)</li>
<li>Reported speech (<f>il a dit qu'il viendrait</f>)</li>
<li>Expressing and justifying opinions: <f>à mon avis, je pense que, d'un côté… de l'autre…</f></li>
<li>Long listening (podcasts at 0.9×), 200-word written arguments, 3-minute monologues</li>
</ul>`,
  map: ['All tenses', 'timeline', [
    ['Past', '', [['passé composé', 'events'], ['imparfait', 'background, habits'], ['passé récent', 'venir de']]],
    ['Present', '', [['présent', 'now, habits, depuis'], ['en train de', 'right now']]],
    ['Future', '', [['futur proche', 'aller + inf.'], ['futur simple', 'stem + -ai']]],
    ['Mood', '', [['conditionnel', 'would, polite, si + imparfait'], ['impératif', 'commands']]],
    ['B1 next', '', [['plus-que-parfait', ''], ['subjonctif', ''], ['gérondif, dont, discours indirect', '']]]
  ]],
  ex: [
    ['m', 'Hier soir, nous ___ au restaurant.', ['sommes allés', 'avons allé', 'allions', 'irons'], 0, 'Single past event, aller → être.'],
    ['m', 'Quand il ___ jeune, il jouait au foot.', ['était', 'a été', 'est', 'sera'], 0, 'Background description → imparfait.'],
    ['m', 'Demain, je ___ mes parents.', ['vais appeler', 'viens d\'appeler', 'appelais', 'ai appelé'], 0, 'Near future → futur proche.'],
    ['m', 'Si tu ___ fatigué, repose-toi.', ['es', 'seras', 'serais', 'étais'], 0, 'Real condition + imperative → si + <b>présent</b>.'],
    ['m', 'Elle travaille ici ___ trois ans.', ['depuis', 'il y a', 'pendant', 'dans'], 0, 'Still working → present + depuis.'],
    ['m', 'Les livres ___ j\'ai achetés sont chers.', ['que', 'qui', 'où', 'dont'], 0, 'Next word is a subject → que.'],
    ['m', 'Tu as vu Marie ? — Oui, je ___ ai vue.', ["l'", 'lui', 'la', 'le'], 0, 'Direct object before ai → l\' (and agreement vue).'],
    ['f', 'Je ___ (venir) de finir. (present)', 'viens', 'passé récent: venir (present) + de.', 'venir'],
    ['f', 'Pendant que je ___ (dormir), il est parti.', 'dormais', 'Background → imparfait.', 'imparfait'],
    ['f', 'Elles se sont ___ (rencontrer) à Paris.', 'rencontrées', 'Reflexive PC, fem. plural.', 'agreement'],
    ['f', 'L\'année prochaine, nous ___ (aller) en France.', 'irons', 'aller → ir-.', 'futur'],
    ['f', 'J\'___ (aimer) avoir plus de temps.', 'aimerais', 'Wish → conditional.', 'conditionnel'],
    ['f', 'Il n\'y a pas ___ lait.', 'de', 'Negation → de.', 'article'],
    ['f', 'Tu vas ___ cinéma ?', 'au', 'à + le → au.', 'contraction'],
    ['o', 'When I arrived, it was raining.', 'Quand je suis arrivé il pleuvait', 'Event PC + background imparfait.'],
    ['o', 'If I had the money, I would buy a car.', "Si j'avais l'argent j'achèterais une voiture", 'si + imparfait → conditionnel.'],
    ['o', 'I have just sent you the email.', "Je viens de t'envoyer le courriel", 'venir de + pronoun + infinitive.'],
    ['w', 'She went out last night.', ['Elle est sortie hier soir'], 'sortir → être, agreement.'],
    ['w', 'We used to go to the park every Sunday.', ['Nous allions au parc tous les dimanches', 'On allait au parc tous les dimanches', 'Nous allions au parc chaque dimanche'], 'Habit → imparfait.'],
    ['w', 'I will see you tomorrow.', ['Je te verrai demain', 'Je vous verrai demain'], 'voir → verr-. Pronoun before the verb.']
  ]
}
);
