/* Story and sentence formation tasks. checks = [label, regex source] run on the learner's text (lowercased, accents kept). */
window.WRITING = [
{
  id: 'w1', day: 1, title: 'Introduce yourself', words: 40,
  prompt: 'Write 5 to 6 sentences introducing yourself: name, age, nationality, city, job or studies, one thing you have.',
  cues: ["je m'appelle", "j'ai … ans", 'je suis', "j'habite à", "j'ai un / une"],
  checks: [["Uses je m'appelle", "m'appelle"], ['Age with avoir + ans', "ai [^ ]+ ans\\b"], ['Uses être (je suis)', '\\bsuis\\b'], ['Uses habiter + à', "habite (à|au|en)"], ['Has an article un / une', '\\b(un|une)\\b']],
  model: "Bonjour ! Je m'appelle Harsh. J'ai vingt-deux ans et je suis indien. J'habite à Surrey, au Canada. Je suis étudiant en informatique à KPU et je travaille dans une pharmacie. J'ai un chien, un labrador très gentil."
},
{
  id: 'w2', day: 2, title: 'My week', words: 50,
  prompt: 'Describe your normal week. Use at least 4 different -ER verbs, one negative sentence, and one question.',
  cues: ['travailler', 'étudier', 'parler', 'regarder', 'ne … pas', 'est-ce que'],
  checks: [['Negative ne … pas / jamais', "\\bn(e|')\\s?\\S+ (pas|jamais|plus)\\b"], ['A question', '\\?'], ['nous / ils form (-ons / -ent)', '\\b\\w+(ons|ent)\\b'], ['A day of the week', '(lundi|mardi|mercredi|jeudi|vendredi|samedi|dimanche)']],
  model: "Du lundi au vendredi, j'étudie à l'université le matin. L'après-midi, je travaille dans un magasin. Le soir, je regarde des vidéos en français et j'écoute des podcasts. Je ne travaille pas le dimanche : je joue au badminton avec mes amis. Mes parents habitent en Inde, donc nous parlons au téléphone le samedi. Et toi, est-ce que tu travailles le week-end ?"
},
{
  id: 'w3', day: 4, title: 'A shopping list conversation', words: 50,
  prompt: 'Write a short dialogue at a market. Ask for 3 products with quantities, ask the price, and pay.',
  cues: ['je voudrais', 'un kilo de', 'du / de la / des', 'ça coûte combien ?', 'payer par carte'],
  checks: [['Polite je voudrais', 'voudrais'], ['A partitive du / de la / des', '\\b(du|de la|des|de l\')\\b'], ['A quantity + de', "(kilo|bouteille|paquet|litre|douzaine|peu|beaucoup|tranche) d(e|')"], ['Asks the price', '(combien|prix)']],
  model: "— Bonjour, je voudrais un kilo de pommes de terre, s'il vous plaît.\n— Voilà. Et avec ça ?\n— Une bouteille d'huile et du fromage. Vous avez de la crème ?\n— Désolé, il n'y a plus de crème.\n— Ce n'est pas grave. Ça coûte combien ?\n— Dix-huit dollars cinquante.\n— Je peux payer par carte ?\n— Bien sûr. Merci et bonne journée !"
},
{
  id: 'w4', day: 5, title: 'Describe a family member', words: 60,
  prompt: 'Describe one person in your family: appearance, personality, what they know how to do, what they like.',
  cues: ['il / elle est', 'il / elle a les cheveux…', 'son / sa / ses', 'il / elle sait…'],
  checks: [['Possessive (mon/ma/son/sa…)', '\\b(mon|ma|mes|son|sa|ses|notre|nos|leur|leurs)\\b'], ['Feminine adjective -e / -euse / -ive', '\\b\\w+(euse|ive|enne|ère|elle)\\b'], ['Uses savoir', '\\b(sait|sais|savent)\\b'], ['At least 3 adjectives (est … )', '\\best\\b']],
  model: "Ma sœur s'appelle Simran. Elle a vingt ans. Elle est petite et elle a les cheveux longs et noirs. Elle est très drôle, mais un peu paresseuse le matin ! Elle sait danser et elle sait cuisiner des plats délicieux. Elle aime beaucoup la musique pendjabie et ses amis disent qu'elle est très généreuse."
},
{
  id: 'w5', day: 7, title: 'My daily routine', words: 70,
  prompt: 'Describe a typical day with times. Use at least 4 reflexive verbs and the sequence words d\'abord, ensuite, puis, enfin.',
  cues: ['je me lève à…', "d'abord", 'ensuite', 'puis', 'enfin', 'je me couche'],
  checks: [['Reflexive verb (me / m\')', "\\b(me|m')\\s?\\w+"], ["d'abord", "d'abord"], ['ensuite or puis', '\\b(ensuite|puis)\\b'], ['enfin / finalement', '\\b(enfin|finalement)\\b'], ['A time (heure / h)', '\\b(heures?|\\d+ ?h)\\b']],
  model: "En semaine, je me réveille à six heures et demie. D'abord, je me lève et je me douche. Ensuite, je m'habille et je prends un café. Je pars de chez moi à sept heures et quart. Le matin, j'ai des cours et l'après-midi, je travaille. Puis, le soir, je me repose un peu et j'étudie le français pendant une heure. Enfin, je me couche vers onze heures."
},
{
  id: 'w6', day: 8, title: 'Plans for this weekend + instructions', words: 60,
  prompt: 'Write a message to a friend: what you are going to do this weekend (futur proche), what you just did (venir de), and 2 instructions (imperative).',
  cues: ['je vais + inf.', 'je viens de + inf.', 'Viens…', "N'oublie pas…"],
  checks: [['Futur proche (vais/va/allons + infinitive)', '\\b(vais|vas|va|allons|allez|vont) \\w+(er|ir|re)\\b'], ['Passé récent (venir de)', "\\b(viens|vient|venons|venez|viennent) d(e|')"], ['An imperative (N\'oublie, Viens, Apporte…)', "(n'oublie|viens|apporte|appelle|envoie|prends|attends|dis|fais)"]],
  model: "Salut Maya ! Je viens de finir mon dernier examen, enfin ! Ce week-end, je vais me reposer. Samedi, nous allons faire une randonnée à North Vancouver avec Raj. Dimanche, je vais cuisiner pour mes parents. Viens avec nous samedi ! Apporte de l'eau et n'oublie pas tes chaussures de marche. Envoie-moi un message ce soir !"
},
{
  id: 'w7', day: 10, title: 'Last weekend', words: 80,
  prompt: 'Tell what you did last weekend. Use at least 4 verbs with avoir and 3 with être (one reflexive). Make être participles agree.',
  cues: ["samedi dernier", "j'ai…", 'je suis allé(e)', 'je me suis…', "d'abord / ensuite / enfin"],
  checks: [['PC with avoir', "\\b(ai|as|a|avons|avez|ont) (\\w+é|\\w+i|\\w+u|fait|pris|mis|dit|écrit|été|eu|vu|bu|lu)\\b"], ['PC with être', '\\b(suis|es|est|sommes|êtes|sont) (allé|venu|parti|arrivé|resté|sorti|rentré|tombé|monté|descendu|entré|revenu|né)'], ['Reflexive PC (me suis / s\'est …)', "\\b(me suis|t'es|s'est|nous sommes|vous êtes|se sont)\\b"], ['Past time marker', '(dernier|hier|il y a|ce matin)']],
  model: "Samedi dernier, je me suis levé tard, vers dix heures. D'abord, j'ai pris mon petit-déjeuner et j'ai fait le ménage. L'après-midi, je suis allé au centre-ville avec mon cousin. Nous avons mangé des tacos et nous avons vu un film. Le soir, je suis rentré à minuit. Dimanche, je suis resté à la maison : j'ai étudié le français et j'ai appelé mes grands-parents. Enfin, je me suis couché tôt."
},
{
  id: 'w8', day: 12, title: 'My childhood', words: 80,
  prompt: 'Describe your childhood: where you lived, what your house was like, what you used to do, what you liked or hated. Imparfait only.',
  cues: ["quand j'étais petit(e)", "j'habitais", 'il y avait', 'tous les jours', "j'aimais / je détestais"],
  checks: [["Quand j'étais", "j'étais"], ['Imparfait endings -ais / -ait / -ions / -aient', '\\b\\w+(ais|ait|ions|iez|aient)\\b'], ['il y avait', 'il y avait'], ['Habit marker', "(tous les|chaque|souvent|d'habitude|toujours|le (lundi|samedi|dimanche|soir|matin))"]],
  model: "Quand j'étais petit, j'habitais à Jalandhar avec mes parents et mes grands-parents. Notre maison était grande et il y avait un jardin avec des manguiers. Tous les matins, mon grand-père m'accompagnait à l'école. Après l'école, je jouais au cricket avec mes cousins jusqu'au soir. J'adorais l'été parce qu'il n'y avait pas d'école, mais je détestais la chaleur. Le dimanche, ma mère préparait toujours des parathas."
},
{
  id: 'w9', day: 13, title: 'A story with a surprise', words: 100,
  prompt: 'Write a story (8 to 10 sentences): set the scene in the imparfait, then events in the passé composé, with soudain or tout à coup, and connectors (parce que, donc, mais, finalement).',
  cues: ["c'était…", 'il faisait…', 'je …ais quand…', 'soudain', 'donc', 'finalement'],
  checks: [['Imparfait background', '\\b\\w+(ait|ais|aient)\\b'], ['Passé composé event', "\\b(ai|a|avons|ont|suis|est|sommes|sont) \\w+(é|i|u|is|it)e?s?\\b"], ['soudain / tout à coup', '(soudain|tout à coup)'], ['quand or pendant que', '\\b(quand|pendant que)\\b'], ['Cause or result connector', '\\b(parce que|donc|alors|car)\\b'], ['finalement / enfin', '\\b(finalement|enfin)\\b']],
  model: "C'était un dimanche de novembre. Il pleuvait et il faisait froid. Je marchais vers l'arrêt de bus et j'écoutais de la musique quand, soudain, j'ai vu un petit chien seul au coin de la rue. Il tremblait parce qu'il avait froid. Je me suis approché et j'ai regardé son collier : il y avait un numéro de téléphone. J'ai appelé, mais personne n'a répondu, donc j'ai attendu avec lui sous un arbre. Vingt minutes plus tard, une femme est arrivée en courant. Elle pleurait de joie. Finalement, elle m'a remercié et elle m'a invité à prendre un café."
},
{
  id: 'w10', day: 15, title: 'A message with pronouns', words: 70,
  prompt: 'Answer a friend who asks: "Tu vas souvent au gym ? Tu manges de la viande ? Tu as parlé à tes parents ? Tu as vu le film ?" Answer each with a pronoun (y, en, le/la/les, lui/leur).',
  cues: ["j'y vais", "j'en mange", 'je leur ai parlé', "je l'ai vu"],
  checks: [['Uses y', "\\b(y|j'y|n'y)\\b"], ['Uses en', "\\b(en|j'en|n'en)\\b"], ['Uses lui or leur', '\\b(lui|leur)\\b'], ["Uses le / la / l' / les before a verb", "\\b(le|la|les|l')\\s?(ai|as|a|avons|vois|regarde|aime|connais)"]],
  model: "Salut ! Oui, j'y vais trois fois par semaine, le lundi, le mercredi et le samedi. La viande ? J'en mange rarement, je préfère le poulet de temps en temps. Mes parents ? Oui, je leur ai parlé hier soir, ils vont bien. Le film ? Je l'ai vu dimanche avec ma sœur. Je l'ai adoré ! Tu veux le voir avec moi la semaine prochaine ? On pourrait y aller samedi."
},
{
  id: 'w11', day: 16, title: 'Compare two places', words: 80,
  prompt: 'Compare two cities you know (or two jobs). Use plus/moins/aussi … que, one superlative, meilleur or mieux, and qui / que / où.',
  cues: ['plus … que', 'moins … que', 'aussi … que', 'le / la plus …', 'qui / que / où'],
  checks: [['plus / moins … que', '\\b(plus|moins|aussi|autant)\\b.*\\bque\\b'], ['Superlative (le/la/les plus/moins)', '\\b(le|la|les) (plus|moins)\\b'], ['meilleur / mieux', '(meilleur|mieux)'], ['Relative qui / que / où', '\\b(qui|où)\\b|\\bque\\b']],
  model: "J'habite à Surrey, mais je travaille souvent à Vancouver. Vancouver est plus belle et plus animée que Surrey, mais elle est aussi beaucoup plus chère. À Surrey, les loyers sont moins élevés et il y a autant de parcs qu'à Vancouver. Pour moi, la ville où je me sens le mieux, c'est Vancouver, parce que c'est la ville la plus internationale du Canada. Le quartier que je préfère est Kitsilano : on y mange les meilleurs sushis !"
},
{
  id: 'w12', day: 18, title: 'Future plans and advice', words: 90,
  prompt: 'Part 1: Describe your plans for next year (futur simple, with one si + présent). Part 2: Give advice to a friend who is stressed about exams (conditionnel: tu devrais, à ta place, si j\'étais toi).',
  cues: ["l'année prochaine, je …rai", 'si + présent → futur', 'tu devrais', 'à ta place, je …rais', "si j'étais toi"],
  checks: [['Futur simple (-rai / -ra / -rons…)', '\\b\\w+r(ai|as|a|ons|ez|ont)\\b'], ['si + présent', '\\bsi\\b|\\bs\'il\\b'], ['Conditional (-rais / -rait / -riez…)', '\\b\\w+r(ais|ait|ions|iez|aient)\\b'], ['Advice structure', "(devrais|devriez|à ta place|si j'étais)"]],
  model: "L'année prochaine, je finirai mon diplôme en décembre. Ensuite, je chercherai un emploi dans un service informatique. Si je trouve un poste à Montréal, je déménagerai au printemps et je suivrai des cours de français le soir. Je passerai aussi le TCF Canada.\n\nEt toi, tu es stressé par tes examens ? À ta place, je ferais un planning simple pour chaque jour. Tu devrais dormir au moins sept heures et faire des pauses. Si j'étais toi, je réviserais avec un ami, ce serait plus motivant !"
},
{
  id: 'w13', day: 19, title: 'Complaint email', words: 90,
  prompt: 'Write a polite complaint email to a store: you bought something (PC), what is wrong now (present + depuis), what you want (conditionnel), polite closing.',
  cues: ['Madame, Monsieur,', "j'ai acheté", 'depuis', 'pourriez-vous', 'je voudrais être remboursé(e)', 'Cordialement'],
  checks: [['Formal greeting', '(madame|monsieur)'], ["Past: j'ai acheté / commandé", "j'ai (acheté|commandé|reçu)"], ['Present + depuis', '\\bdepuis\\b'], ['Conditional request', '(pourriez|pourrais|voudrais|aimerais)'], ['Formal closing', '(cordialement|salutations|veuillez)']],
  model: "Madame, Monsieur,\n\nLe 2 novembre, j'ai acheté un casque sans fil dans votre magasin de Richmond. Depuis une semaine, le côté gauche ne fonctionne plus et la batterie ne charge pas correctement. J'ai essayé de le réinitialiser, mais le problème continue.\n\nPourriez-vous m'indiquer la procédure pour l'échanger ? Si ce n'est pas possible, je voudrais être remboursé. Vous trouverez le reçu en pièce jointe.\n\nJe vous remercie d'avance pour votre aide.\n\nCordialement,\nHarsh Rana"
},
{
  id: 'w14', day: 20, title: 'My French journey (all tenses)', words: 120,
  prompt: 'Tell your story with French: why you started (PC), what it was like at first (imparfait), how long you have been studying (depuis), what you just did (venir de), your next step (futur proche), your goal (futur simple), and a wish (conditionnel).',
  cues: ["j'ai commencé", "c'était", 'depuis', 'je viens de', 'je vais', 'un jour, je …rai', "j'aimerais"],
  checks: [['Passé composé', "\\b(ai|a|suis|est) \\w+(é|i|u|is|it)\\b"], ['Imparfait', '\\b\\w+(ais|ait|aient)\\b'], ['depuis', 'depuis'], ['venir de', "\\b(viens|vient) d(e|')"], ['Futur proche', '\\b(vais|va) \\w+(er|ir|re)\\b'], ['Futur simple', '\\b\\w+r(ai|a|ons|ont)\\b'], ['Conditional', '\\b\\w+r(ais|ait)\\b']],
  model: "J'ai commencé à apprendre le français parce que je veux immigrer au Québec un jour et passer le TCF Canada. Au début, c'était difficile : je confondais le passé composé et l'imparfait et je ne comprenais rien quand les gens parlaient vite. J'étudie de façon intensive depuis le 11 novembre, trois heures par jour. Je viens de terminer mon programme de vingt jours et je suis assez fier de moi. Le mois prochain, je vais continuer avec le niveau B1. Un jour, je parlerai couramment et je travaillerai à Montréal. J'aimerais aussi pouvoir aider d'autres étudiants qui commencent."
}
];
