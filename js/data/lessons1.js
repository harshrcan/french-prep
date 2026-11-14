/* Lessons, days 1 to 7.
   Concept markup: <x>French|English</x> = spoken example, <f>..</f> = inline French,
   <n>..</n> tip, <t>..</t> trap, <tb>head;head\nrow;row</tb> = table (cells split by ;).
   Exercises: ['m', q, options, correctIndex, why]  multiple choice
              ['f', 'text with ___', answer | [answers], why, hint]  fill in
              ['o', english, 'french sentence', why, [extra words]]  build the sentence
              ['w', english, [accepted answers], why]  translate / write
   Map: [label, small, [children]] */
window.LESSONS = window.LESSONS || [];
window.LESSONS.push(
{
  day: 1, lvl: 'A1', title: 'Sounds, pronouns, être & avoir, articles', theme: 'Introductions',
  verbs: ['être', 'avoir', "s'appeler"], deck: 'd1', stories: ['s1'],
  goals: ['Introduce yourself (name, origin, job, age)', 'Use all subject pronouns and choose tu or vous', 'Conjugate être and avoir without hesitation', 'Pick le/la/l\'/les and un/une/des by gender and number'],
  concept: `
<h3>Key sounds</h3>
<ul>
<li>Final consonants are usually silent: <f>petit</f>, <f>Paris</f>, <f>ils parlent</f>. Exceptions to remember with CaReFuL: c, r, f, l are often pronounced: <f>avec, bonjour, neuf, il</f>.</li>
<li><f>é</f> = "ay" (café), <f>è / ê</f> = "eh" (mère, fête), <f>ou</f> = "oo" (vous), <f>u</f> = lips round, say "ee" (tu), <f>oi</f> = "wa" (moi).</li>
<li>Nasal vowels: <f>an/en</f> (enfant), <f>on</f> (bonjour), <f>in/ain/un</f> (vin, pain).</li>
<li><b>Liaison</b>: a silent final consonant links to a following vowel: <f>vous_êtes</f> (voo-zet), <f>ils_ont</f> (eel-zon). Compare <f>ils sont</f> (eel-son, "they are") with <f>ils ont</f> (eel-zon, "they have").</li>
</ul>
<h3>Subject pronouns</h3>
<tb>Singular;Plural
je (j' before a vowel) · I;nous · we
tu · you (one friend, family, child);vous · you (formal, or more than one person)
il / elle / on · he / she / one, we (informal);ils / elles · they</tb>
<n><f>on</f> is extremely common in speech for "we": <f>On va au cinéma ?</f> It always takes the il/elle verb form.</n>
<n><f>ils</f> is used for a mixed group, even one man with ten women. <f>elles</f> is only for an all-female group.</n>
<h3>être (to be) and avoir (to have)</h3>
<tb>être;avoir
je suis;j'ai
tu es;tu as
il/elle/on est;il/elle/on a
nous sommes;nous avons
vous êtes;vous avez
ils/elles sont;ils/elles ont</tb>
<x>Je suis étudiant. Je suis indien.|I am a student. I am Indian.</x>
<x>J'ai vingt-deux ans.|I am 22 years old (literally: I have 22 years).</x>
<x>Je m'appelle Harsh. Et vous, comment vous appelez-vous ?|My name is Harsh. And you, what is your name?</x>
<t>Age uses <b>avoir</b>, never être: <f>J'ai 20 ans</f>, not <f>Je suis 20 ans</f>. Same for <f>avoir faim</f> (hungry), <f>avoir soif</f> (thirsty), <f>avoir froid/chaud</f> (cold/hot), <f>avoir peur</f> (afraid).</t>
<t>No article before a job or nationality after être: <f>Il est médecin</f> (He is a doctor). Not <f>Il est un médecin</f>. But: <f>C'est un médecin</f>.</t>
<h3>Gender and articles</h3>
<p>Every noun is masculine or feminine. Learn every noun <b>with its article</b>.</p>
<tb>;Masculine;Feminine;Plural
Definite (the);le livre · l'ami;la table · l'école;les livres
Indefinite (a, some);un livre;une table;des livres</tb>
<ul>
<li><f>le/la</f> become <f>l'</f> before a vowel or silent h: <f>l'homme, l'eau</f>.</li>
<li>Plural: usually add <b>-s</b> (silent): <f>les livres</f>. Words in <f>-eau</f> add -x: <f>les bateaux</f>. <f>-al</f> → <f>-aux</f>: <f>un journal → des journaux</f>.</li>
<li>Endings that are usually feminine: <f>-tion, -sion, -té, -ette, -ure, -ence</f>. Usually masculine: <f>-ment, -age, -eau, -isme</f>. (<f>la plage, l'image</f> are exceptions.)</li>
<li>Definite article for general likes: <f>J'aime le café</f> (I like coffee in general).</li>
</ul>
<h3>Introducing yourself</h3>
<x>Bonjour ! Je m'appelle Harsh. Je suis indien, mais j'habite au Canada.|Hello! My name is Harsh. I'm Indian, but I live in Canada.</x>
<x>Je suis étudiant en informatique. J'ai un chien.|I'm a computer science student. I have a dog.</x>
<x>Enchanté ! Vous êtes d'où ?|Nice to meet you! Where are you from?</x>`,
  map: ['Day 1 basics', '', [
    ['Pronouns', '', [['je · tu · il/elle/on', 'singular'], ['nous · vous · ils/elles', 'plural'], ['tu vs vous', 'friend vs formal or plural']]],
    ['être', 'to be', [['identity, job, nationality', 'je suis étudiant'], ['no article before job', 'il est médecin']]],
    ['avoir', 'to have', [['possession', "j'ai un chien"], ['age, hunger, cold', "j'ai 22 ans, j'ai faim"]]],
    ['Articles', '', [['le / la / l\' / les', 'the; general likes'], ['un / une / des', 'a, some']]],
    ['Sounds', '', [['silent final letters', 'petit, Paris'], ['liaison', 'vous_êtes, ils_ont']]]
  ]],
  ex: [
    ['m', 'Choose: Nous ___ étudiants.', ['sommes', 'êtes', 'sont', 'avons'], 0, '<b>nous</b> takes <b>sommes</b>. être: suis, es, est, sommes, êtes, sont.'],
    ['m', 'How do you say "I am 25"?', ["J'ai 25 ans.", 'Je suis 25 ans.', 'Je suis 25.', "J'ai 25."], 0, 'Age uses <b>avoir + ans</b>. "ans" is required.'],
    ['m', 'You meet your friend\'s grandmother for the first time. You say:', ['Comment vous appelez-vous ?', "Comment tu t'appelles ?", 'Tu es qui ?', 'Ça va, toi ?'], 0, 'Use <b>vous</b> with older people, strangers and in formal contexts.'],
    ['m', 'Choose the article: ___ école', ["l'", 'le', 'la', 'un'], 0, 'école is feminine but starts with a vowel, so <b>la → l\'</b>.'],
    ['m', 'Which is correct?', ['Elle est infirmière.', 'Elle est une infirmière.', 'Elle a infirmière.', 'Elle est la infirmière.'], 0, 'After <b>être</b>, jobs take <b>no article</b>.'],
    ['m', 'A group of 4 women and 1 man: "they are tired" =', ['Ils sont fatigués.', 'Elles sont fatiguées.', 'Ils ont fatigués.', 'Elles est fatiguées.'], 0, 'A mixed group is <b>ils</b>, and agreement goes masculine plural.'],
    ['f', "Tu ___ un frère ?", 'as', '<b>tu</b> + avoir = <b>as</b>.', 'avoir'],
    ['f', 'Ils ___ canadiens.', 'sont', '<b>ils</b> + être = <b>sont</b>. Do not confuse with <b>ont</b> (have).', 'être'],
    ['f', "Vous ___ faim ?", 'avez', 'Hunger is <b>avoir faim</b>. vous + avoir = <b>avez</b>.', 'avoir'],
    ['f', 'Je ___ appelle Harsh.', "m'", 's\'appeler is reflexive: <b>je m\'appelle</b> (me becomes m\' before a vowel).', 'reflexive pronoun'],
    ['f', 'J\'aime ___ musique.', 'la', 'General likes use the definite article. musique is feminine: <b>la</b>.', 'article'],
    ['f', 'C\'est ___ livre intéressant.', 'un', '"a book" = <b>un livre</b> (masculine, indefinite).', 'a / an'],
    ['f', 'un journal → des ___', 'journaux', 'Nouns in <b>-al</b> make the plural in <b>-aux</b>.', 'plural'],
    ['o', 'My name is Priya and I am Canadian.', "Je m'appelle Priya et je suis canadienne", 'Nationality adjectives agree: canadien → canadienne for a woman. No capital letter on nationality adjectives.'],
    ['o', 'We have a big dog.', 'Nous avons un grand chien', 'avoir for possession: nous <b>avons</b>. grand comes before the noun.', ['sommes']],
    ['o', 'Are you a student? (formal)', 'Vous êtes étudiant ?', 'Intonation question: same word order, voice rises. No article before the profession.', ['un']],
    ['w', 'I am 19 years old.', ["J'ai 19 ans", "J'ai dix-neuf ans"], 'Age = <b>avoir + number + ans</b>.'],
    ['w', 'She is a doctor.', ['Elle est médecin', "C'est un médecin", "C'est une médecin"], 'Il/Elle est + job (no article), or C\'est un(e) + job.'],
    ['w', 'They (masculine) have a car.', ['Ils ont une voiture'], '<b>ils ont</b> (liaison: eel-zon) = they have. voiture is feminine.']
  ]
},
{
  day: 2, lvl: 'A1', title: '-ER verbs, negation, questions, numbers 0 to 69', theme: 'Work, study, city',
  verbs: ['parler', 'habiter', 'travailler', 'aimer', 'étudier', 'manger', 'commencer', 'regarder', 'écouter', 'jouer'], deck: 'd2', stories: ['s2'],
  goals: ['Conjugate any regular -ER verb in the present', 'Make negative sentences with ne ... pas', 'Ask yes/no and information questions three ways', 'Count to 69'],
  concept: `
<h3>Regular -ER verbs (90% of French verbs)</h3>
<p>Remove <b>-er</b> to get the stem, then add the endings.</p>
<tb>parler (to speak);Ending;Pronunciation
je parle;-e;all four in bold sound the same: "parl"
tu parles;-es;silent
il/elle/on parle;-e;silent
nous parlons;-ons;"on"
vous parlez;-ez;"ay"
ils/elles parlent;-ent;silent (never say "ent")</tb>
<x>J'habite à Surrey. Je travaille dans un magasin.|I live in Surrey. I work in a store.</x>
<x>Nous étudions le français le soir.|We study French in the evening.</x>
<t><f>ils parlent</f> is pronounced exactly like <f>il parle</f>. The -ent ending is silent.</t>
<n>Spelling: verbs in <b>-ger</b> keep the e before -ons: <f>nous mangeons</f>. Verbs in <b>-cer</b> take ç: <f>nous commençons</f>. This keeps the soft sound.</n>
<n>The French present covers both English forms: <f>je travaille</f> = "I work" and "I am working".</n>
<h3>Negation: ne ... pas</h3>
<p><b>ne</b> goes before the verb, <b>pas</b> after it. <f>ne</f> becomes <f>n'</f> before a vowel.</p>
<x>Je ne parle pas espagnol.|I don't speak Spanish.</x>
<x>Il n'habite pas ici.|He doesn't live here.</x>
<x>Je n'ai pas de voiture.|I don't have a car.</x>
<t>After a negation, <f>un, une, des</f> (and du, de la) become <b>de / d'</b>: <f>J'ai un chat → Je n'ai pas de chat</f>. But with <b>être</b> there is no change: <f>Ce n'est pas un chat.</f></t>
<p>Other negations: <f>ne ... jamais</f> (never), <f>ne ... plus</f> (no longer), <f>ne ... rien</f> (nothing), <f>ne ... personne</f> (nobody).</p>
<x>Je ne mange jamais de viande.|I never eat meat.</x>
<n>In casual speech the ne disappears: <f>Je sais pas.</f> Write it in exams.</n>
<h3>Asking questions</h3>
<tb>Style;Example;Register
Intonation;Tu parles anglais ?;spoken, casual
Est-ce que;Est-ce que tu parles anglais ?;neutral, safe everywhere
Inversion;Parles-tu anglais ?;formal, written</tb>
<p>Question words go at the start, followed by <f>est-ce que</f>:</p>
<tb>Word;Meaning;Example
où;where;Où est-ce que tu habites ?
quand;when;Quand est-ce que tu travailles ?
comment;how;Comment est-ce que tu vas au travail ?
pourquoi;why;Pourquoi est-ce que tu étudies le français ?
qu'est-ce que;what;Qu'est-ce que tu regardes ?
qui;who;Qui parle ?
combien (de);how much / many;Combien de langues est-ce que tu parles ?
quel / quelle;which, what;Quelle est ton adresse ?</tb>
<n>Answer to <f>pourquoi</f> with <f>parce que</f> (because): <f>Parce que j'aime voyager.</f></n>
<n>With inversion add -t- between two vowels: <f>Parle-t-il français ?</f> <f>Où habite-t-elle ?</f></n>
<h3>Numbers 0 to 69</h3>
<tb>0–10;11–16;17–19, tens
zéro, un, deux, trois, quatre, cinq, six, sept, huit, neuf, dix;onze, douze, treize, quatorze, quinze, seize;dix-sept, dix-huit, dix-neuf
20 vingt, 21 vingt et un, 22 vingt-deux;30 trente, 31 trente et un;40 quarante, 50 cinquante, 60 soixante</tb>`,
  map: ['Day 2', '', [
    ['-ER present', 'stem + ending', [['-e -es -e', 'je, tu, il: same sound'], ['-ons -ez', 'nous, vous'], ['-ent', 'ils: silent'], ['spelling', 'mangeons, commençons']]],
    ['Negation', 'ne + verb + pas', [['n\' before vowel', "je n'aime pas"], ['un/une/des → de', "pas de voiture"], ['jamais, plus, rien, personne', '']]],
    ['Questions', '', [['intonation', 'Tu parles… ?'], ['est-ce que', 'safe everywhere'], ['inversion', 'Parles-tu… ?'], ['où, quand, comment, pourquoi, qu\'est-ce que', '']]],
    ['Numbers', '0–69', [['vingt et un', '21, 31, 41…'], ['soixante', '60']]]
  ]],
  ex: [
    ['m', 'Vous ___ (parler) français ?', ['parlez', 'parlons', 'parles', 'parlent'], 0, 'vous → <b>-ez</b>.'],
    ['m', 'Nous ___ (manger) à midi.', ['mangeons', 'mangons', 'mangez', 'mangent'], 0, '-GER verbs keep the e before -ons: <b>mangeons</b>.'],
    ['m', 'Negative of "J\'ai un vélo":', ["Je n'ai pas de vélo.", "Je n'ai pas un vélo.", "Je ne pas ai un vélo.", "J'ai pas un vélo."], 0, 'In the negative, <b>un → de</b>. ne + verb + pas.'],
    ['m', 'Negative of "C\'est un problème":', ["Ce n'est pas un problème.", "Ce n'est pas de problème.", "C'est ne pas un problème.", "Ce n'est un problème pas."], 0, 'With <b>être</b>, the article does NOT change to de.'],
    ['m', 'Which question is formal (inversion)?', ['Habitez-vous à Montréal ?', 'Vous habitez à Montréal ?', 'Est-ce que vous habitez à Montréal ?', 'Vous habitez où ?'], 0, 'Inversion = verb-hyphen-pronoun.'],
    ['m', 'Best answer to "Pourquoi tu étudies le français ?"', ['Parce que je veux habiter au Québec.', 'Pour quoi je veux.', 'Oui, j\'étudie.', 'Le soir.'], 0, '<b>pourquoi</b> (why) → <b>parce que</b> (because).'],
    ['m', '71 in France is not yet covered. What is 46?', ['quarante-six', 'quatre-six', 'quarante et six', 'soixante-six'], 0, '40 = quarante, + six.'],
    ['f', 'Ils ___ (habiter) à Vancouver.', 'habitent', 'ils → stem + <b>-ent</b> (silent).', 'habiter'],
    ['f', 'Nous ___ (commencer) à 9 heures.', 'commençons', '-CER verbs take <b>ç</b> before -ons.', 'commencer'],
    ['f', 'Elle ne travaille ___ le dimanche.', 'pas', 'ne ... <b>pas</b>.', 'negation'],
    ['f', '___ est-ce que tu habites ? — À Richmond.', 'Où', 'The answer is a place, so the question is <b>où</b> (where).', 'question word'],
    ['f', '___ est-ce que tu regardes ? — Un film.', "Qu'", "\"What\" before est-ce que = <b>qu'est-ce que</b>.", 'what'],
    ['f', 'Je ne mange ___ de viande. (never)', 'jamais', 'ne ... <b>jamais</b> = never.', 'never'],
    ['f', 'Tu ___ (écouter) de la musique ?', 'écoutes', 'tu → <b>-es</b>.', 'écouter'],
    ['o', "I don't work on Saturday.", 'Je ne travaille pas le samedi', 'ne + verb + pas. "le samedi" = on Saturdays (habit).', ['un']],
    ['o', 'Where do you live? (est-ce que)', 'Où est-ce que tu habites ?', 'Question word + est-ce que + subject + verb.'],
    ['o', 'We study French because we like Quebec.', 'Nous étudions le français parce que nous aimons le Québec', 'étudier: nous étudions. aimer: nous aimons. Country names take an article: le Québec.'],
    ['w', "She doesn't speak English.", ["Elle ne parle pas anglais", "Elle ne parle pas l'anglais"], 'ne parle pas. Language names: masculine, lowercase.'],
    ['w', 'Do you (vous) like coffee? (use est-ce que)', ['Est-ce que vous aimez le café ?', 'Est-ce que vous aimez le café'], 'aimer + definite article for general likes.'],
    ['w', 'I no longer live in Delhi.', ["Je n'habite plus à Delhi"], 'ne ... <b>plus</b> = no longer. à + city.']
  ]
},
{
  day: 3, lvl: 'A1', title: 'aller, venir, faire, prendre · places · à / de contractions · dates', theme: 'Places, transport',
  verbs: ['aller', 'venir', 'faire', 'prendre', 'comprendre', 'apprendre'], deck: 'd3', stories: ['s3'],
  goals: ['Conjugate aller, venir, faire, prendre', 'Use à + le = au, à + les = aux, de + le = du, de + les = des', 'Use en / au / aux / à with countries and cities', 'Say days, months and dates'],
  concept: `
<h3>Four essential irregular verbs</h3>
<tb>aller (go);venir (come);faire (do/make);prendre (take)
je vais;je viens;je fais;je prends
tu vas;tu viens;tu fais;tu prends
il va;il vient;il fait;il prend
nous allons;nous venons;nous faisons;nous prenons
vous allez;vous venez;vous faites;vous prenez
ils vont;ils viennent;ils font;ils prennent</tb>
<n><f>comprendre</f> and <f>apprendre</f> follow prendre exactly: <f>je comprends, nous apprenons, ils comprennent</f>.</n>
<t><f>vous faites</f>, not <f>vous faisez</f>. Only three verbs have vous forms not in -ez: <f>êtes, faites, dites</f>.</t>
<x>Je prends le bus pour aller à l'université.|I take the bus to go to university.</x>
<x>Qu'est-ce que tu fais ce week-end ?|What are you doing this weekend?</x>
<p>Common <f>faire</f> expressions: <f>faire du sport, faire la cuisine, faire les courses</f> (groceries), <f>faire une promenade</f>, <f>Il fait beau / froid / chaud</f> (weather).</p>
<h3>à and de contract with le and les</h3>
<tb>;+ le;+ la;+ l';+ les
à (to, at);au;à la;à l';aux
de (from, of);du;de la;de l';des</tb>
<x>Je vais au cinéma, à la banque, à l'hôpital et aux toilettes.|I'm going to the cinema, to the bank, to the hospital and to the restroom.</x>
<x>Il vient du bureau. Elle revient de la plage.|He's coming from the office. She's coming back from the beach.</x>
<t><f>à le</f> and <f>de le</f> never exist. Always <f>au</f> and <f>du</f>.</t>
<h3>Countries and cities</h3>
<tb>Place;to / in;from
city;à Paris, à Surrey;de Paris, d'Ottawa
feminine country (most end in -e);en France, en Inde, en Italie;de France, d'Inde
masculine country;au Canada, au Japon, au Mexique;du Canada, du Japon
plural country;aux États-Unis;des États-Unis</tb>
<n>Masculine countries ending in -e to memorize: <f>le Mexique, le Cambodge, le Mozambique</f>. Countries starting with a vowel use <f>en</f>: <f>en Iran, en Afghanistan</f>.</n>
<h3>Transport</h3>
<p><f>en</f> for vehicles you sit inside: <f>en bus, en voiture, en train, en avion, en métro</f>. <f>à</f> for things you ride on: <f>à pied</f> (on foot), <f>à vélo</f>, <f>à moto</f>.</p>
<h3>Days, months, dates</h3>
<p>Days: <f>lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche</f>. Months: <f>janvier, février, mars, avril, mai, juin, juillet, août, septembre, octobre, novembre, décembre</f>. No capitals.</p>
<x>Aujourd'hui, c'est le 14 novembre.|Today is November 14.</x>
<x>Mon anniversaire est le premier mars.|My birthday is March 1st.</x>
<n><f>lundi</f> = this Monday. <f>le lundi</f> = every Monday. Dates use <f>le</f> + number; only the 1st uses <f>premier</f>.</n>`,
  map: ['Movement & places', '', [
    ['Verbs', '', [['aller', 'vais vas va allons allez vont'], ['venir', 'viens vient venons viennent'], ['faire', 'faisons, faites, font'], ['prendre', 'prenons, prennent']]],
    ['à + article', 'to / at', [['au', 'à + le'], ['aux', 'à + les'], ['à la / à l\'', 'no change']]],
    ['de + article', 'from / of', [['du', 'de + le'], ['des', 'de + les']]],
    ['Countries', '', [['en', 'feminine: en Inde'], ['au', 'masculine: au Canada'], ['aux', 'plural: aux États-Unis'], ['à', 'cities: à Toronto']]],
    ['Transport', '', [['en', 'bus, voiture, train'], ['à', 'pied, vélo']]]
  ]],
  ex: [
    ['m', 'Ils ___ au parc.', ['vont', 'allent', 'vas', 'allons'], 0, 'aller: ils <b>vont</b>.'],
    ['m', 'Vous ___ du sport ?', ['faites', 'faisez', 'fait', 'font'], 0, 'faire: vous <b>faites</b> (irregular).'],
    ['m', 'Je vais ___ cinéma.', ['au', 'à le', 'à la', 'du'], 0, 'cinéma is masculine: à + le = <b>au</b>.'],
    ['m', 'Elle habite ___ Japon.', ['au', 'en', 'à', 'aux'], 0, 'le Japon is masculine → <b>au</b>.'],
    ['m', 'Nous venons ___ Inde.', ["d'", 'de la', 'du', 'en'], 0, 'Feminine country after "from": <b>de</b>, and <b>d\'</b> before a vowel.'],
    ['m', 'I go to work on foot.', ['Je vais au travail à pied.', 'Je vais au travail en pied.', 'Je vais à le travail à pied.', 'Je vais au travail par pied.'], 0, '<b>à pied</b>; au = à + le.'],
    ['m', '"every Saturday" =', ['le samedi', 'samedi', 'un samedi', 'les samedi'], 0, '<b>le</b> + day = habit.'],
    ['f', 'Nous ___ (prendre) le métro.', 'prenons', 'prendre: nous <b>prenons</b> (one n).', 'prendre'],
    ['f', 'Ils ___ (venir) de Montréal.', 'viennent', 'venir: ils <b>viennent</b> (double n).', 'venir'],
    ['f', 'Il habite ___ États-Unis.', 'aux', 'Plural country: <b>aux</b>.', 'à + les'],
    ['f', 'Je reviens ___ supermarché.', 'du', 'de + le = <b>du</b>.', 'de + le'],
    ['f', 'Tu vas ___ France cet été ?', 'en', 'Feminine country: <b>en</b>.', 'country'],
    ['f', 'Elles ___ (comprendre) la question.', 'comprennent', 'Like prendre: ils/elles <b>comprennent</b>.', 'comprendre'],
    ['f', 'Il fait ___ courses le samedi.', 'les', 'Fixed expression: <b>faire les courses</b> (grocery shopping).', 'expression'],
    ['o', 'I am going to the bank by car.', 'Je vais à la banque en voiture', 'banque is feminine: à la. Vehicles: <b>en</b> voiture.', ['au']],
    ['o', 'They come from Canada.', 'Ils viennent du Canada', 'le Canada → de + le = <b>du</b>.', ['de']],
    ['o', 'What are you doing on Sunday?', "Qu'est-ce que tu fais dimanche ?", 'faire: tu <b>fais</b>. dimanche alone = this coming Sunday.'],
    ['w', 'My birthday is on May 1st.', ['Mon anniversaire est le premier mai', 'Mon anniversaire est le 1er mai'], 'Only the 1st uses <b>premier</b>. Months are lowercase.'],
    ['w', 'We are going to Mexico.', ['Nous allons au Mexique', 'On va au Mexique'], 'le Mexique is masculine despite the -e: <b>au</b>.'],
    ['w', 'He takes the train to go to Toronto.', ['Il prend le train pour aller à Toronto'], 'prendre: il <b>prend</b>. à + city.']
  ]
},
{
  day: 4, lvl: 'A1', title: 'Partitive, quantities, il y a, modal verbs, numbers 70+', theme: 'Food, shopping',
  verbs: ['vouloir', 'pouvoir', 'devoir', 'boire', 'acheter', 'payer'], deck: 'd4', stories: ['s4'],
  goals: ['Use du / de la / de l\' / des for unspecified amounts', 'Use de after quantities and negation', 'Use il y a and il faut', 'Use vouloir, pouvoir, devoir + infinitive', 'Read prices'],
  concept: `
<h3>The partitive: some / any</h3>
<p>Use the partitive for an <b>unspecified amount</b> of something you cannot count, or don't count.</p>
<tb>Masculine;Feminine;Before vowel;Plural
du pain;de la viande;de l'eau;des pommes</tb>
<x>Je mange du pain et je bois de l'eau.|I eat (some) bread and I drink (some) water.</x>
<x>Tu veux de la soupe ?|Do you want some soup?</x>
<p>Choosing the article:</p>
<ul>
<li><b>like / love / hate / prefer</b> (in general) → <f>le, la, les</f>: <f>J'aime le fromage.</f></li>
<li><b>eat / drink / buy / want</b> an amount → <f>du, de la, des</f>: <f>J'achète du fromage.</f></li>
<li>one countable item → <f>un, une</f>: <f>Je mange une pomme.</f></li>
</ul>
<t>English often drops "some". French never drops the article: <f>Je bois du café</f>, never <f>Je bois café</f>.</t>
<h3>After negation and quantities: de</h3>
<x>Je ne bois pas de café.|I don't drink coffee.</x>
<x>Un kilo de tomates, une bouteille d'eau, beaucoup de sucre, un peu de lait.|A kilo of tomatoes, a bottle of water, a lot of sugar, a little milk.</x>
<p>Quantity words: <f>beaucoup de, un peu de, trop de</f> (too much), <f>assez de</f> (enough), <f>combien de</f>, <f>un litre de, un paquet de, une tranche de</f> (slice), <f>une boîte de</f> (can/box).</p>
<h3>il y a · il faut</h3>
<x>Il y a un marché près d'ici.|There is a market near here.</x>
<x>Il n'y a pas de lait dans le frigo.|There's no milk in the fridge.</x>
<x>Il faut acheter du pain.|We need to (one must) buy bread.</x>
<h3>Modal verbs + infinitive</h3>
<tb>vouloir (want);pouvoir (can);devoir (must)
je veux;je peux;je dois
tu veux;tu peux;tu dois
il veut;il peut;il doit
nous voulons;nous pouvons;nous devons
vous voulez;vous pouvez;vous devez
ils veulent;ils peuvent;ils doivent</tb>
<p>The second verb stays in the <b>infinitive</b>: <f>Je veux acheter</f>, <f>Nous devons partir</f>.</p>
<x>Est-ce que je peux payer par carte ?|Can I pay by card?</x>
<x>Je voudrais un café, s'il vous plaît.|I would like a coffee, please.</x>
<n><f>je voudrais</f> is the polite "I would like". Use it in every shop and café instead of <f>je veux</f>.</n>
<p>Negation wraps the conjugated verb: <f>Je ne peux pas venir.</f></p>
<h3>boire, acheter, payer</h3>
<p><f>boire</f>: bois, bois, boit, buvons, buvez, boivent. <f>acheter</f>: achète, achètes, achète, achetons, achetez, achètent. <f>payer</f>: paie, paies, paie, payons, payez, paient.</p>
<h3>Numbers 70 and beyond, prices</h3>
<tb>Number;French;Logic
70;soixante-dix;60 + 10
71;soixante et onze;60 + 11
80;quatre-vingts;4 × 20
85;quatre-vingt-cinq;4 × 20 + 5 (no s)
90;quatre-vingt-dix;4 × 20 + 10
99;quatre-vingt-dix-neuf;4 × 20 + 19
100 / 200;cent / deux cents;
1000;mille;never "un mille"</tb>
<x>Ça coûte combien ? — Quatre-vingt-dix-neuf dollars.|How much is it? 99 dollars.</x>`,
  map: ['Food & amounts', '', [
    ['Which article?', '', [['le / la / les', 'aimer, préférer (general)'], ['du / de la / des', 'some: manger, boire, acheter'], ['un / une', 'one countable']]],
    ['→ de', '', [['negation', 'pas de café'], ['quantity', 'beaucoup de, un kilo de']]],
    ['Impersonal', '', [['il y a', 'there is / are'], ['il faut + inf.', 'it is necessary']]],
    ['Modals + infinitive', '', [['vouloir', 'veux, veulent'], ['pouvoir', 'peux, peuvent'], ['devoir', 'dois, doivent'], ['je voudrais', 'polite']]],
    ['Numbers', '', [['70 soixante-dix', ''], ['80 quatre-vingts', ''], ['90 quatre-vingt-dix', '']]]
  ]],
  ex: [
    ['m', 'Je bois ___ eau.', ["de l'", 'du', 'de la', "l'"], 0, 'Unspecified amount, before a vowel: <b>de l\'</b>.'],
    ['m', 'J\'aime ___ chocolat.', ['le', 'du', 'de', 'un'], 0, '<b>aimer</b> expresses general taste → definite article.'],
    ['m', 'Il n\'y a pas ___ pain.', ['de', 'du', 'le', 'un'], 0, 'After negation: <b>de</b>.'],
    ['m', 'un kilo ___ pommes', ['de', 'des', 'du', 'les'], 0, 'After a quantity: <b>de</b>, never des.'],
    ['m', 'Nous ___ partir à 8 heures. (must)', ['devons', 'doivons', 'devez', 'doivent'], 0, 'devoir: nous <b>devons</b>.'],
    ['m', 'Polite in a café:', ["Je voudrais un thé, s'il vous plaît.", 'Je veux un thé.', 'Donne-moi un thé.', "J'ai un thé."], 0, '<b>je voudrais</b> is the polite form.'],
    ['m', '80 =', ['quatre-vingts', 'huitante', 'quatre-vingt-dix', 'soixante-vingt'], 0, '4 × 20 = <b>quatre-vingts</b>.'],
    ['m', '96 =', ['quatre-vingt-seize', 'quatre-vingt-six', 'quatre-vingts-seize', 'soixante-seize'], 0, '80 + 16. No s on vingt when a number follows.'],
    ['f', 'Elle achète ___ fromage.', 'du', 'Some cheese (masc.) = <b>du</b>.', 'partitive'],
    ['f', 'Tu veux ___ salade ?', 'de la', 'salade is feminine: <b>de la</b>.', 'partitive'],
    ['f', 'Ils ___ (vouloir) manger.', 'veulent', 'vouloir: ils <b>veulent</b>.', 'vouloir'],
    ['f', 'Vous ___ (pouvoir) répéter, s\'il vous plaît ?', 'pouvez', 'pouvoir: vous <b>pouvez</b>.', 'pouvoir'],
    ['f', 'Nous ___ (boire) du thé.', 'buvons', 'boire: nous <b>buvons</b>.', 'boire'],
    ['f', 'J\'___ (acheter) des légumes.', 'achète', 'acheter takes è in je, tu, il, ils: <b>achète</b>.', 'acheter'],
    ['f', 'Il ___ acheter du lait. (it is necessary)', 'faut', '<b>il faut</b> + infinitive.', 'falloir'],
    ['o', 'I would like a bottle of water, please.', "Je voudrais une bouteille d'eau s'il vous plaît", 'Quantity + <b>d\'</b>eau.', ['de la']],
    ['o', "We don't eat meat.", 'Nous ne mangeons pas de viande', 'Negation → <b>de</b>.', ['la']],
    ['o', 'Can I pay by card?', 'Est-ce que je peux payer par carte ?', 'pouvoir + infinitive. "by card" = <b>par carte</b>.'],
    ['w', "There isn't any milk.", ["Il n'y a pas de lait"], 'il n\'y a pas + <b>de</b>.'],
    ['w', 'She wants to buy some apples.', ['Elle veut acheter des pommes'], 'vouloir + infinitive. some apples = <b>des</b> pommes.'],
    ['w', 'They must work today.', ["Ils doivent travailler aujourd'hui", "Elles doivent travailler aujourd'hui"], 'devoir: ils <b>doivent</b> + infinitive.']
  ]
},
{
  day: 5, lvl: 'A1', title: 'Adjectives, possessives, demonstratives · savoir vs connaître', theme: 'Family, description',
  verbs: ['voir', 'savoir', 'connaître', 'croire'], deck: 'd5', stories: ['s5'],
  goals: ['Make adjectives agree and place them correctly', 'Use mon/ma/mes, son/sa/ses, notre, votre, leur', 'Use ce/cet/cette/ces', 'Choose savoir or connaître'],
  concept: `
<h3>Adjective agreement</h3>
<p>Adjectives agree in gender and number with the noun.</p>
<tb>Pattern;Masculine;Feminine;Plural (m / f)
add -e;grand;grande;grands / grandes
already -e;jeune;jeune;jeunes
-eux → -euse;sérieux;sérieuse;sérieux / sérieuses
-if → -ive;sportif;sportive;sportifs / sportives
-en → -enne;canadien;canadienne;canadiens / canadiennes
-er → -ère;cher;chère;chers / chères</tb>
<p>Irregular: <f>beau → belle</f>, <f>nouveau → nouvelle</f>, <f>vieux → vieille</f>, <f>blanc → blanche</f>, <f>long → longue</f>, <f>gentil → gentille</f>.</p>
<p>Before a masculine noun starting with a vowel: <f>un bel homme, un nouvel ami, un vieil hôtel</f>.</p>
<h3>Placement: after, except BAGS</h3>
<p>Most adjectives come <b>after</b> the noun: <f>une voiture rouge, un film intéressant</f>.</p>
<p>BAGS adjectives come <b>before</b>: <b>B</b>eauty (beau, joli), <b>A</b>ge (jeune, vieux, nouveau), <b>G</b>oodness (bon, mauvais, gentil), <b>S</b>ize (grand, petit, gros).</p>
<x>J'ai une petite sœur et un grand frère.|I have a little sister and a big brother.</x>
<x>C'est une fille intelligente et drôle.|She's an intelligent and funny girl.</x>
<n>Before a plural adjective, <f>des</f> becomes <f>de</f> in careful French: <f>de bons amis</f>.</n>
<h3>Possessive adjectives</h3>
<tb>Owner;masc. noun;fem. noun;plural noun
je;mon frère;ma sœur;mes parents
tu;ton frère;ta sœur;tes parents
il / elle;son frère;sa sœur;ses parents
nous;notre frère;notre sœur;nos parents
vous;votre frère;votre sœur;vos parents
ils / elles;leur frère;leur sœur;leurs parents</tb>
<t>The possessive agrees with the <b>thing owned</b>, not the owner. <f>sa mère</f> = his mother OR her mother. <f>son père</f> = his father OR her father.</t>
<t>Before a feminine noun starting with a vowel, use mon/ton/son: <f>mon amie, son école</f> (not ma amie).</t>
<h3>Demonstratives: this / that / these</h3>
<tb>masc.;masc. + vowel;fem.;plural
ce livre;cet homme, cet ami;cette maison;ces enfants</tb>
<p>Add <f>-ci</f> (here) or <f>-là</f> (there) to contrast: <f>ce pull-ci ou ce pull-là ?</f></p>
<h3>savoir vs connaître</h3>
<tb>savoir;connaître
facts, information;people, places, works
how to do something (+ infinitive);being familiar with
+ que, où, si, quand, comment;+ noun only</tb>
<x>Je sais nager. Je sais où il habite.|I know how to swim. I know where he lives.</x>
<x>Je connais Marie. Tu connais Montréal ?|I know Marie. Do you know Montreal?</x>
<p><f>savoir</f>: sais, sais, sait, savons, savez, savent. <f>connaître</f>: connais, connais, connaît, connaissons, connaissez, connaissent. <f>voir</f>: vois, vois, voit, voyons, voyez, voient. <f>croire</f>: crois, croit, croyons, croient.</p>`,
  map: ['Describing', '', [
    ['Agreement', 'gender + number', [['+e / +s', 'grand(e)(s)'], ['-eux → -euse', ''], ['-if → -ive', ''], ['beau/belle, vieux/vieille', 'irregular']]],
    ['Placement', '', [['after the noun', 'default'], ['BAGS before', 'beau, jeune, bon, petit']]],
    ['Possessives', 'agree with the thing', [['mon ma mes', 'my'], ['son sa ses', 'his / her'], ['notre/nos, votre/vos, leur/leurs', '']]],
    ['Demonstratives', '', [['ce / cet', 'masc.'], ['cette', 'fem.'], ['ces', 'plural']]],
    ['savoir vs connaître', '', [['savoir', 'facts, how to'], ['connaître', 'people, places']]]
  ]],
  ex: [
    ['m', 'Ma sœur est très ___.', ['sportive', 'sportif', 'sportifs', 'sportives'], 0, 'Feminine singular: -if → <b>-ive</b>.'],
    ['m', 'Choose the correct order:', ['une belle maison blanche', 'une blanche maison belle', 'une maison belle blanche', 'une belle blanche maison'], 0, 'BAGS (belle) before, colour (blanche) after.'],
    ['m', 'Paul loves ___ mother. (his)', ['sa', 'son', 'ses', 'leur'], 0, 'mère is feminine → <b>sa</b>. It does not matter that Paul is male.'],
    ['m', '___ amie s\'appelle Léa. (my)', ['Mon', 'Ma', 'Mes', "M'"], 0, 'Feminine noun starting with a vowel → <b>mon</b>.'],
    ['m', '___ homme est mon professeur.', ['Cet', 'Ce', 'Cette', 'Ces'], 0, 'Masculine + vowel/silent h → <b>cet</b>.'],
    ['m', 'Tu ___ Paris ?', ['connais', 'sais', 'savez', 'connaît'], 0, 'A place → <b>connaître</b>.'],
    ['m', 'Je ne ___ pas nager.', ['sais', 'connais', 'sait', 'connaît'], 0, 'How to do something → <b>savoir</b> + infinitive.'],
    ['f', 'Ce sont des filles ___ (sérieux).', 'sérieuses', 'Feminine plural of sérieux: <b>sérieuses</b>.', 'agreement'],
    ['f', 'C\'est un ___ (beau) homme.', 'bel', 'beau → <b>bel</b> before a masculine vowel sound.', 'beau'],
    ['f', 'Les enfants aiment ___ grand-mère. (their)', 'leur', 'Several owners, one grandmother → <b>leur</b>.', 'their'],
    ['f', 'Nous aimons ___ parents. (our)', 'nos', 'Plural thing owned, owner nous → <b>nos</b>.', 'our'],
    ['f', 'J\'aime ___ chanson. (this)', 'cette', 'chanson is feminine → <b>cette</b>.', 'this'],
    ['f', 'Elle ___ (savoir) parler trois langues.', 'sait', 'savoir: elle <b>sait</b>.', 'savoir'],
    ['f', 'Nous ___ (voir) nos amis le samedi.', 'voyons', 'voir: nous <b>voyons</b>.', 'voir'],
    ['o', 'I have a small black dog.', "J'ai un petit chien noir", 'petit (size) before; noir (colour) after.', ['noire']],
    ['o', 'Her brother is very tall.', 'Son frère est très grand', 'frère is masculine → <b>son</b> (her or his).', ['sa']],
    ['o', 'Do you know where she lives?', 'Est-ce que tu sais où elle habite ?', 'Information introduced by où → <b>savoir</b>.', ['connais']],
    ['w', 'This car is new.', ['Cette voiture est nouvelle'], 'voiture is feminine: <b>cette</b>, <b>nouvelle</b>.'],
    ['w', 'I know Marc.', ['Je connais Marc'], 'A person → <b>connaître</b>.'],
    ['w', 'My friends are kind. (female friends)', ['Mes amies sont gentilles'], 'gentil → <b>gentilles</b> (double l + es).']
  ]
},
{
  day: 6, lvl: 'A1+', title: '-IR verbs and irregular -IR / -RE / -OIR patterns', theme: 'Home, clothes',
  verbs: ['finir', 'choisir', 'réussir', 'partir', 'sortir', 'dormir', 'dire', 'lire', 'écrire', 'mettre', 'attendre', 'vendre', 'perdre', 'ouvrir'], deck: 'd6', stories: ['s6'],
  goals: ['Conjugate finir-type verbs', 'Conjugate partir/sortir/dormir', 'Conjugate -re verbs (attendre)', 'Use dire, lire, écrire, mettre, ouvrir'],
  concept: `
<h3>Regular -IR verbs (finir type)</h3>
<tb>finir;ending
je finis;-is
tu finis;-is
il finit;-it
nous finissons;-issons
vous finissez;-issez
ils finissent;-issent</tb>
<p>Same pattern: <f>choisir</f> (choose), <f>réussir</f> (succeed, pass), <f>réfléchir</f> (think), <f>grandir</f> (grow), <f>remplir</f> (fill).</p>
<x>Je finis le travail à 17 heures.|I finish work at 5 pm.</x>
<x>Qu'est-ce que vous choisissez ?|What do you choose?</x>
<h3>partir, sortir, dormir (drop the last consonant of the stem)</h3>
<tb>partir;sortir;dormir
je pars;je sors;je dors
tu pars;tu sors;tu dors
il part;il sort;il dort
nous partons;nous sortons;nous dormons
vous partez;vous sortez;vous dormez
ils partent;ils sortent;ils dorment</tb>
<n>Singular forms lose the stem consonant (part-, sort-, dorm-). Plural forms keep it. Also: <f>sentir</f> (je sens), <f>servir</f> (je sers).</n>
<h3>-RE verbs (attendre type)</h3>
<tb>attendre;ending
j'attends;-s
tu attends;-s
il attend;nothing
nous attendons;-ons
vous attendez;-ez
ils attendent;-ent</tb>
<p>Same: <f>vendre, entendre, répondre, perdre, descendre, rendre</f>.</p>
<x>J'attends le bus depuis dix minutes.|I've been waiting for the bus for ten minutes.</x>
<h3>Other irregulars</h3>
<tb>dire (say);lire (read);écrire (write);mettre (put/put on)
je dis;je lis;j'écris;je mets
il dit;il lit;il écrit;il met
nous disons;nous lisons;nous écrivons;nous mettons
vous dites;vous lisez;vous écrivez;vous mettez
ils disent;ils lisent;ils écrivent;ils mettent</tb>
<p><f>ouvrir</f> (open) and <f>offrir</f> (give a gift) are conjugated like -ER verbs: <f>j'ouvre, tu ouvres, il ouvre, nous ouvrons, ils ouvrent</f>.</p>
<x>Il met son manteau parce qu'il fait froid.|He puts on his coat because it's cold.</x>
<x>Elle écrit un courriel à sa propriétaire.|She writes an email to her landlady.</x>
<h3>Home and clothes vocabulary in use</h3>
<x>Mon appartement a deux chambres, une cuisine et une salle de bains.|My apartment has two bedrooms, a kitchen and a bathroom.</x>
<x>Je porte un jean, un t-shirt et des baskets.|I'm wearing jeans, a T-shirt and sneakers.</x>`,
  map: ['Verb families', '', [
    ['-IR (finir)', 'is is it issons issez issent', [['choisir, réussir, réfléchir', '']]],
    ['partir type', 'drop consonant in singular', [['pars / partons', ''], ['sors, dors, sers, sens', '']]],
    ['-RE (attendre)', 's s – ons ez ent', [['vendre, répondre, perdre, entendre', '']]],
    ['Irregular', '', [['dire', 'vous dites'], ['lire', 'lisons'], ['écrire', 'écrivons'], ['mettre', 'mets / mettons']]],
    ['-ER-like', '', [['ouvrir, offrir', "j'ouvre, il offre"]]]
  ]],
  ex: [
    ['m', 'Nous ___ à 18 heures.', ['finissons', 'finons', 'finisons', 'finissez'], 0, 'finir: nous <b>finissons</b> (-iss-).'],
    ['m', 'Il ___ ce soir. (sortir)', ['sort', 'sortit', 'sors', 'sorte'], 0, 'il <b>sort</b>: singular drops nothing extra here, ends in -t.'],
    ['m', 'Je ___ huit heures par nuit. (dormir)', ['dors', 'dorms', 'dorme', 'dort'], 0, 'je <b>dors</b>: the m drops in the singular.'],
    ['m', 'Vous ___ la vérité ? (dire)', ['dites', 'disez', 'disent', 'dit'], 0, 'dire: vous <b>dites</b> (like êtes, faites).'],
    ['m', 'Ils ___ un livre. (lire)', ['lisent', 'lirent', 'lient', 'lisons'], 0, 'lire: ils <b>lisent</b>.'],
    ['m', 'Elle ___ la fenêtre. (ouvrir)', ['ouvre', 'ouvrit', 'ouvert', 'ouvrir'], 0, 'ouvrir is conjugated like -ER: elle <b>ouvre</b>.'],
    ['f', 'Tu ___ (choisir) quel gâteau ?', 'choisis', 'tu → <b>-is</b>.', 'choisir'],
    ['f', 'Ils ___ (réussir) toujours leurs examens.', 'réussissent', 'ils → <b>-issent</b>.', 'réussir'],
    ['f', 'J\'___ (attendre) mon amie.', 'attends', '-RE: je → <b>-s</b>.', 'attendre'],
    ['f', 'Il ___ (vendre) sa voiture.', 'vend', '-RE: il → no ending: <b>vend</b>.', 'vendre'],
    ['f', 'Nous ___ (écrire) une lettre.', 'écrivons', 'écrire: nous <b>écrivons</b> (v appears in plural).', 'écrire'],
    ['f', 'Je ___ (mettre) un pull.', 'mets', 'mettre: je <b>mets</b>.', 'mettre'],
    ['f', 'Vous ___ (partir) quand ?', 'partez', 'partir: vous <b>partez</b>.', 'partir'],
    ['f', 'Elles ___ (répondre) aux questions.', 'répondent', '-RE: elles <b>répondent</b>.', 'répondre'],
    ['o', 'We are leaving tomorrow morning.', 'Nous partons demain matin', 'partir: nous <b>partons</b>.'],
    ['o', 'He is putting on his jacket.', 'Il met sa veste', 'mettre = put on clothes. veste is feminine: <b>sa</b>.', ['son']],
    ['o', 'I am waiting for the bus.', "J'attends le bus", 'attendre takes a direct object: no "pour". <b>J\'attends le bus.</b>', ['pour']],
    ['w', 'They read the newspaper every day.', ['Ils lisent le journal tous les jours', 'Elles lisent le journal tous les jours'], 'lire: ils <b>lisent</b>. every day = <b>tous les jours</b>.'],
    ['w', 'What do you say? (vous)', ["Qu'est-ce que vous dites ?", 'Que dites-vous ?'], 'dire: vous <b>dites</b>.'],
    ['w', 'I finish at five.', ['Je finis à cinq heures', 'Je finis à 5 heures', 'Je finis à 17 heures'], 'finir: je <b>finis</b>.']
  ]
},
{
  day: 7, lvl: 'A1+', title: 'Reflexive verbs, telling time, frequency', theme: 'Daily routine',
  verbs: ['se lever', 'se laver', "s'habiller", 'se coucher', 'se réveiller', 'se promener', 'se dépêcher', 'se reposer'], deck: 'd7', stories: ['s7'], assess: 'a1',
  goals: ['Conjugate reflexive verbs in the present and negative', 'Tell the time (formal and informal)', 'Describe a daily routine with frequency adverbs and sequence words'],
  concept: `
<h3>Reflexive verbs</h3>
<p>The action goes back to the subject. The reflexive pronoun matches the subject.</p>
<tb>se lever (get up);pronoun
je me lève;me / m'
tu te lèves;te / t'
il/elle se lève;se / s'
nous nous levons;nous
vous vous levez;vous
ils/elles se lèvent;se / s'</tb>
<x>Je me réveille à 6 heures, mais je me lève à 6 h 15.|I wake up at 6, but I get up at 6:15.</x>
<x>Elle s'habille et elle se maquille.|She gets dressed and puts on make-up.</x>
<p><b>Negative</b>: ne goes before the pronoun: <f>Je ne me lève pas tôt le dimanche.</f></p>
<p><b>Infinitive</b>: the pronoun matches the subject: <f>Je vais me coucher. Nous devons nous dépêcher.</f></p>
<p><b>Body parts</b> use the definite article, not the possessive: <f>Je me brosse les dents. Il se lave les mains.</f></p>
<t>Many verbs change meaning when reflexive: <f>lever</f> (raise) / <f>se lever</f> (get up), <f>appeler</f> (call) / <f>s'appeler</f> (be named), <f>promener le chien</f> (walk the dog) / <f>se promener</f> (go for a walk).</t>
<h3>Telling time</h3>
<tb>Time;Everyday;Official (24 h)
8:00;huit heures;huit heures
8:15;huit heures et quart;huit heures quinze
8:30;huit heures et demie;huit heures trente
8:45;neuf heures moins le quart;huit heures quarante-cinq
8:50;neuf heures moins dix;huit heures cinquante
12:00;midi;douze heures
0:00;minuit;zéro heure
19:20;sept heures vingt (du soir);dix-neuf heures vingt</tb>
<x>Quelle heure est-il ? — Il est trois heures et demie.|What time is it? It's 3:30.</x>
<x>Le cours commence à quatorze heures.|Class starts at 2 pm.</x>
<n>Schedules, trains and appointments use the 24-hour clock. "At" a time = <f>à</f>: <f>à 9 heures</f>.</n>
<h3>Frequency and sequence</h3>
<p><f>toujours</f> (always), <f>souvent</f> (often), <f>parfois / quelquefois</f> (sometimes), <f>rarement</f> (rarely), <f>ne ... jamais</f> (never), <f>tous les jours</f> (every day), <f>le matin / le soir</f> (in the mornings / evenings), <f>une fois par semaine</f> (once a week).</p>
<p>Short adverbs go right after the verb: <f>Je prends souvent le bus.</f></p>
<p>Sequence: <f>d'abord</f> (first), <f>ensuite / puis</f> (then), <f>après</f> (after), <f>enfin / finalement</f> (finally).</p>
<x>D'abord je me douche, ensuite je prends mon petit-déjeuner, puis je pars au travail.|First I shower, then I have breakfast, then I leave for work.</x>`,
  map: ['Daily routine', '', [
    ['Reflexive verbs', 'pronoun = subject', [['me te se nous vous se', ''], ['negative', 'je ne me lève pas'], ['infinitive', 'je vais me coucher'], ['body parts', 'je me lave les mains']]],
    ['Time', '', [['et quart / et demie', ':15 / :30'], ['moins le quart', ':45'], ['24 h clock', 'schedules'], ['à + time', 'at']]],
    ['Frequency', '', [['toujours, souvent, parfois', 'after the verb'], ['ne ... jamais', ''], ['tous les jours, le matin', '']]],
    ['Sequence', '', [['d\'abord → ensuite → puis → enfin', '']]]
  ]],
  ex: [
    ['m', 'Nous ___ à 7 heures.', ['nous levons', 'se levons', 'nous lève', 'levons nous'], 0, 'nous + <b>nous levons</b>. The pronoun matches the subject.'],
    ['m', 'Negative: "Il se rase."', ['Il ne se rase pas.', 'Il se ne rase pas.', 'Il ne rase se pas.', 'Il se rase ne pas.'], 0, '<b>ne</b> before the reflexive pronoun, <b>pas</b> after the verb.'],
    ['m', 'I brush my teeth.', ['Je me brosse les dents.', 'Je brosse mes dents.', 'Je me brosse mes dents.', 'Je brosse me les dents.'], 0, 'Reflexive + <b>definite article</b> for body parts.'],
    ['m', '10:45 =', ['onze heures moins le quart', 'dix heures moins le quart', 'dix heures et quart', 'onze heures et quart'], 0, '11:00 minus a quarter.'],
    ['m', 'Tomorrow I have to get up early.', ['Demain, je dois me lever tôt.', 'Demain, je dois se lever tôt.', 'Demain, je me dois lever tôt.', 'Demain, je dois lever tôt.'], 0, 'Infinitive keeps a pronoun that matches the subject: <b>me lever</b>.'],
    ['m', 'Add "souvent" to: Je prends le métro.', ['Je prends souvent le métro.', 'Souvent je le métro prends.', 'Je souvent prends le métro.', 'Je prends le métro souvent je.'], 0, 'Short adverbs go <b>right after the conjugated verb</b>.'],
    ['f', 'Tu ___ couches à quelle heure ?', 'te', 'tu → <b>te</b>.', 'pronoun'],
    ['f', 'Elle ___ habille vite.', "s'", 'se → <b>s\'</b> before a vowel.', 'pronoun'],
    ['f', 'Ils se ___ (promener) dans le parc.', 'promènent', 'se promener takes è in je, tu, il, ils: <b>promènent</b>.', 'se promener'],
    ['f', 'Vous vous ___ (reposer) le dimanche ?', 'reposez', 'vous → <b>-ez</b>.', 'se reposer'],
    ['f', 'Il est huit heures et ___. (8:30)', 'demie', ':30 = <b>et demie</b>.', 'time'],
    ['f', 'Le film commence ___ 20 heures.', 'à', 'At a time = <b>à</b>.', 'preposition'],
    ['f', '___ je me lave, ensuite je m\'habille. (first)', "D'abord", 'First = <b>d\'abord</b>.', 'sequence'],
    ['o', 'I wake up at seven.', 'Je me réveille à sept heures', 'se réveiller: je <b>me réveille</b>.'],
    ['o', "We don't go to bed late.", 'Nous ne nous couchons pas tard', 'ne + reflexive pronoun + verb + pas.'],
    ['o', 'She always hurries in the morning.', 'Elle se dépêche toujours le matin', 'toujours goes right after the verb.'],
    ['w', 'What time is it? It is a quarter past two.', ['Quelle heure est-il ? Il est deux heures et quart', 'Quelle heure est-il ? Il est deux heures quinze'], ':15 = <b>et quart</b>.'],
    ['w', 'They (m) get dressed.', ["Ils s'habillent"], 'se → s\' before a vowel.'],
    ['w', 'I am going to rest.', ['Je vais me reposer'], 'aller + reflexive infinitive: <b>me reposer</b>.']
  ]
}
);
