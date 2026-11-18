/* Original fiction stories. Same format as stories.js, flagged fiction:true. day = earliest day the grammar is covered. */
window.FICTION = [
{
  id: 'f1', fiction: true, day: 7, lvl: 'A2', genre: 'Comedy', title: 'Le mauvais café', focus: 'present tense, reflexive verbs, polite requests',
  lines: [
    ['Tous les matins, Théo se lève à sept heures et va au même café.', 'Every morning, Théo gets up at seven and goes to the same café.'],
    ['Il commande toujours la même chose : un grand café au lait et un croissant.', 'He always orders the same thing: a large café au lait and a croissant.'],
    ['Mais ce lundi, il y a une nouvelle serveuse. Elle s\'appelle Inès.', 'But this Monday, there is a new waitress. Her name is Inès.'],
    ['Théo est fatigué et il parle très vite : « Un grand café, s\'il vous plaît. »', 'Théo is tired and speaks very fast: "A large coffee, please."'],
    ['Inès sourit et revient avec… un grand gâteau au chocolat.', 'Inès smiles and comes back with… a big chocolate cake.'],
    ['« Euh… je voudrais un café, pas un gâteau », dit Théo.', '"Um… I\'d like a coffee, not a cake," says Théo.'],
    ['Inès rougit. « Pardon ! Avec la musique, je n\'entends rien. »', 'Inès blushes. "Sorry! With the music, I can\'t hear anything."'],
    ['Le lendemain, Théo parle lentement et clairement. Il demande un croissant.', 'The next day, Théo speaks slowly and clearly. He asks for a croissant.'],
    ['Inès apporte un croissant… et un petit papier avec un dessin de gâteau.', 'Inès brings a croissant… and a little note with a drawing of a cake.'],
    ['Théo rit. Il écrit sur le papier : « Le gâteau était délicieux, en fait. »', 'Théo laughs. He writes on the note: "The cake was delicious, actually."'],
    ['Maintenant, chaque lundi, Théo commande un café… et une part de gâteau.', 'Now, every Monday, Théo orders a coffee… and a slice of cake.'],
    ['Et Inès baisse un peu la musique quand il arrive.', 'And Inès turns the music down a little when he arrives.']
  ],
  gloss: [['la serveuse', 'waitress'], ['rougir', 'to blush'], ['le lendemain', 'the next day'], ['une part', 'a slice'], ['baisser', 'to lower']],
  q: [
    ['m', 'Qu\'est-ce que Théo commande d\'habitude ?', ['un café au lait et un croissant', 'un gâteau au chocolat', 'un thé et un croissant', 'un jus d\'orange'], 0, '"un grand café au lait et un croissant"'],
    ['m', 'Pourquoi Inès apporte-t-elle un gâteau ?', ['Elle n\'entend pas bien à cause de la musique.', 'Théo demande un gâteau.', 'C\'est l\'anniversaire de Théo.', 'Il n\'y a plus de café.'], 0, '"Avec la musique, je n\'entends rien."'],
    ['t', 'Le lendemain, Théo parle plus vite.', false, '"Théo parle lentement et clairement."'],
    ['t', 'Théo a aimé le gâteau.', true, '"Le gâteau était délicieux, en fait."'],
    ['m', 'Que fait Inès maintenant quand Théo arrive ?', ['Elle baisse la musique.', 'Elle lui offre un gâteau.', 'Elle ferme le café.', 'Elle chante.'], 0, '"Inès baisse un peu la musique"']
  ]
},
{
  id: 'f2', fiction: true, day: 10, lvl: 'A2', genre: 'Adventure', title: 'Perdus dans la forêt', focus: 'passé composé with avoir and être',
  lines: [
    ['Samedi dernier, Maya et son frère Arjun sont partis faire une randonnée près de Squamish.', 'Last Saturday, Maya and her brother Arjun went on a hike near Squamish.'],
    ['Ils ont pris de l\'eau, des sandwichs et un téléphone, mais ils ont oublié la carte.', 'They took water, sandwiches and a phone, but they forgot the map.'],
    ['Au début, tout s\'est bien passé. Ils ont vu une cascade magnifique.', 'At first, everything went well. They saw a magnificent waterfall.'],
    ['Puis Arjun a dit : « Regarde, un petit chemin ! On essaie ? »', 'Then Arjun said: "Look, a little path! Shall we try it?"'],
    ['Ils ont marché pendant une heure. Le chemin a disparu.', 'They walked for an hour. The path disappeared.'],
    ['Maya a sorti son téléphone. Pas de réseau.', 'Maya took out her phone. No signal.'],
    ['Le soleil est descendu derrière les montagnes et il a commencé à faire froid.', 'The sun went down behind the mountains and it started getting cold.'],
    ['Soudain, ils ont entendu un bruit dans les arbres. Arjun est devenu tout blanc.', 'Suddenly, they heard a noise in the trees. Arjun went completely pale.'],
    ['Ce n\'était pas un ours… c\'était un chien ! Un gros chien avec un collier rouge.', 'It wasn\'t a bear… it was a dog! A big dog with a red collar.'],
    ['Le chien est parti en courant, puis il est revenu, comme pour dire : « Suivez-moi ! »', 'The dog ran off, then came back, as if to say: "Follow me!"'],
    ['Ils l\'ont suivi et, vingt minutes plus tard, ils sont arrivés au parking.', 'They followed it and, twenty minutes later, they arrived at the parking lot.'],
    ['Le propriétaire du chien les attendait. « Il fait ça tout le temps », a-t-il dit en riant.', 'The dog\'s owner was waiting. "He does that all the time," he said, laughing.'],
    ['Depuis ce jour, Maya n\'oublie jamais la carte. Et Arjun n\'essaie plus les petits chemins.', 'Since that day, Maya never forgets the map. And Arjun doesn\'t try little paths anymore.']
  ],
  gloss: [['une cascade', 'waterfall'], ['le chemin', 'path, trail'], ['le réseau', 'signal, network'], ['un ours', 'a bear'], ['le collier', 'collar']],
  q: [
    ['m', 'Qu\'est-ce qu\'ils ont oublié ?', ['la carte', 'l\'eau', 'le téléphone', 'les sandwichs'], 0, '"ils ont oublié la carte"'],
    ['m', 'Pourquoi Maya ne peut-elle pas appeler ?', ['Il n\'y a pas de réseau.', 'Le téléphone est cassé.', 'Elle n\'a pas de batterie.', 'Elle a perdu son téléphone.'], 0, '"Pas de réseau."'],
    ['t', 'Le bruit dans les arbres était un ours.', false, '"Ce n\'était pas un ours… c\'était un chien !"'],
    ['m', 'Comment sont-ils retournés au parking ?', ['Ils ont suivi un chien.', 'Ils ont appelé les secours.', 'Ils ont trouvé la carte.', 'Un hélicoptère est venu.'], 0, '"Ils l\'ont suivi"'],
    ['t', 'Le chien a déjà aidé d\'autres randonneurs.', true, '"Il fait ça tout le temps"']
  ]
},
{
  id: 'f3', fiction: true, day: 13, lvl: 'A2', genre: 'Mystery', title: 'La lettre sans nom', focus: 'passé composé vs imparfait',
  lines: [
    ['C\'était un mardi soir de novembre. Il pleuvait sur Montréal.', 'It was a Tuesday evening in November. It was raining on Montreal.'],
    ['Claire rentrait du travail quand elle a remarqué une enveloppe sous sa porte.', 'Claire was coming home from work when she noticed an envelope under her door.'],
    ['Il n\'y avait pas de nom, pas d\'adresse, seulement un petit dessin d\'une clé.', 'There was no name, no address, only a little drawing of a key.'],
    ['À l\'intérieur, il y avait une phrase : « Ce que tu as perdu t\'attend à la bibliothèque. »', 'Inside, there was one sentence: "What you lost is waiting for you at the library."'],
    ['Claire a réfléchi. Qu\'est-ce qu\'elle avait perdu ? Ses gants ? Son parapluie ?', 'Claire thought. What had she lost? Her gloves? Her umbrella?'],
    ['Le lendemain, elle est allée à la bibliothèque de son quartier.', 'The next day, she went to her neighbourhood library.'],
    ['La bibliothécaire, une vieille dame aux cheveux blancs, souriait déjà.', 'The librarian, an old lady with white hair, was already smiling.'],
    ['« Vous êtes Claire ? Quelqu\'un a laissé ceci pour vous. »', '"Are you Claire? Someone left this for you."'],
    ['C\'était un vieux livre. Claire l\'a ouvert et elle a crié de surprise.', 'It was an old book. Claire opened it and cried out in surprise.'],
    ['Sur la première page, elle a reconnu son écriture d\'enfant : « Ce livre appartient à Claire, 9 ans. »', 'On the first page, she recognized her childhood handwriting: "This book belongs to Claire, age 9."'],
    ['Quand elle était petite, elle avait perdu son livre préféré pendant un déménagement.', 'When she was little, she had lost her favourite book during a move.'],
    ['Entre deux pages, il y avait une photo : Claire et son meilleur ami d\'enfance, Hugo.', 'Between two pages, there was a photo: Claire and her childhood best friend, Hugo.'],
    ['Au dos de la photo, Hugo avait écrit un numéro de téléphone et deux mots : « Tu te souviens ? »', 'On the back of the photo, Hugo had written a phone number and two words: "Do you remember?"'],
    ['Claire a pris son téléphone. Ses mains tremblaient un peu. Elle a composé le numéro.', 'Claire picked up her phone. Her hands were shaking a little. She dialled the number.']
  ],
  gloss: [['remarquer', 'to notice'], ['la bibliothécaire', 'librarian'], ['appartenir à', 'to belong to'], ['un déménagement', 'a move (house)'], ['composer un numéro', 'to dial']],
  q: [
    ['m', 'Quel temps faisait-il ?', ['Il pleuvait.', 'Il neigeait.', 'Il faisait beau.', 'Il y avait du vent.'], 0, '"Il pleuvait sur Montréal."'],
    ['m', 'Qu\'est-ce qu\'il y avait sur l\'enveloppe ?', ['un dessin de clé', 'le nom de Claire', 'une adresse', 'un timbre'], 0, '"seulement un petit dessin d\'une clé"'],
    ['m', 'Qu\'est-ce que Claire a trouvé à la bibliothèque ?', ['son livre d\'enfance', 'ses gants', 'son parapluie', 'une clé'], 0, '"Ce livre appartient à Claire, 9 ans."'],
    ['t', 'Hugo était l\'ami d\'enfance de Claire.', true, '"son meilleur ami d\'enfance, Hugo"'],
    ['m', 'Dans « Claire rentrait du travail quand elle a remarqué… », pourquoi « rentrait » est-il à l\'imparfait ?', ['C\'est l\'action en cours, le décor.', 'C\'est une action unique et terminée.', 'C\'est le futur.', 'C\'est une habitude d\'enfance.'], 0, 'Ongoing background action (imparfait) interrupted by an event (passé composé).']
  ]
},
{
  id: 'f4', fiction: true, day: 15, lvl: 'A2+', genre: 'Magic', title: 'L\'apprenti et le livre bavard', focus: 'object pronouns, y and en',
  lines: [
    ['À l\'Académie des Étoiles, les apprentis apprennent la magie… et le français.', 'At the Academy of Stars, apprentices learn magic… and French.'],
    ['Noé est nouveau. Le premier jour, la professeure lui donne un vieux livre.', 'Noé is new. On the first day, the teacher gives him an old book.'],
    ['« Ce livre parle, explique-t-elle. Écoute-le bien. Il t\'aidera. »', '"This book talks," she explains. "Listen to it carefully. It will help you."'],
    ['Le soir, dans sa chambre, Noé ouvre le livre. Une petite voix sort des pages.', 'In the evening, in his room, Noé opens the book. A small voice comes out of the pages.'],
    ['« Bonsoir ! Tu veux des sorts ? J\'en ai mille. Mais d\'abord, conjugue le verbe être. »', '"Good evening! Do you want spells? I have a thousand. But first, conjugate the verb être."'],
    ['Noé le conjugue sans erreur. Le livre est content et lui montre un sort de lumière.', 'Noé conjugates it without a mistake. The book is pleased and shows him a light spell.'],
    ['Chaque nuit, le livre lui pose des questions plus difficiles.', 'Every night, the book asks him harder questions.'],
    ['« La bibliothèque ? Tu y vas demain ? Les potions ? Tu en prépares combien ? »', '"The library? Are you going there tomorrow? Potions? How many are you making?"'],
    ['Un jour, Noé se trompe : il dit « je lui vois » au lieu de « je le vois ».', 'One day, Noé makes a mistake: he says "je lui vois" instead of "je le vois".'],
    ['Pouf ! Ses cheveux deviennent violets.', 'Poof! His hair turns purple.'],
    ['Le lendemain, en classe, tout le monde le regarde. Noé est rouge comme une tomate.', 'The next day, in class, everyone looks at him. Noé is red as a tomato.'],
    ['Mais la professeure sourit : « Ne t\'inquiète pas. Moi aussi, j\'ai eu les cheveux violets. Trois fois ! »', 'But the teacher smiles: "Don\'t worry. I had purple hair too. Three times!"'],
    ['Depuis, Noé révise ses pronoms tous les soirs. Et ses cheveux restent bruns… presque toujours.', 'Since then, Noé reviews his pronouns every evening. And his hair stays brown… almost always.']
  ],
  gloss: [['un apprenti', 'an apprentice'], ['bavard', 'talkative'], ['un sort', 'a spell'], ['se tromper', 'to make a mistake'], ['au lieu de', 'instead of']],
  q: [
    ['m', 'Qu\'est-ce que la professeure donne à Noé ?', ['un livre qui parle', 'une baguette', 'une potion', 'un chat'], 0, '"un vieux livre… Ce livre parle"'],
    ['m', 'Dans « J\'en ai mille », « en » remplace :', ['des sorts', 'des livres', 'des questions', 'des potions'], 0, 'en = of them (spells).'],
    ['m', 'Quelle erreur fait Noé ?', ['« je lui vois » au lieu de « je le vois »', '« je suis allé » au lieu de « j\'ai allé »', 'il oublie le verbe être', 'il arrive en retard'], 0, 'voir takes a direct object: je le vois.'],
    ['t', 'Après l\'erreur, les cheveux de Noé deviennent verts.', false, '"Ses cheveux deviennent violets."'],
    ['t', 'La professeure a aussi fait des erreurs quand elle était apprentie.', true, '"Moi aussi, j\'ai eu les cheveux violets. Trois fois !"']
  ]
},
{
  id: 'f5', fiction: true, day: 17, lvl: 'B1', genre: 'Science fiction', title: 'Le robot qui voulait parler français', focus: 'futur simple, time expressions',
  lines: [
    ['En 2061, à Québec, chaque famille a un robot domestique. Celui des Tremblay s\'appelle R-7.', 'In 2061, in Quebec City, every family has a home robot. The Tremblays\' is called R-7.'],
    ['R-7 cuisine, nettoie et répare tout, mais il ne parle qu\'anglais, à cause d\'une erreur d\'usine.', 'R-7 cooks, cleans and fixes everything, but only speaks English because of a factory error.'],
    ['Depuis trois mois, la petite Léa, huit ans, lui donne des leçons de français chaque soir.', 'For three months, little Léa, eight, has been giving him French lessons every evening.'],
    ['« Demain, tu parleras mieux que moi », lui dit-elle en riant.', '"Tomorrow, you\'ll speak better than me," she tells him, laughing.'],
    ['R-7 répond : « Je… serai… content. Je ferai… des progrès. »', 'R-7 answers: "I… will be… happy. I will make… progress."'],
    ['Un jour, les parents annoncent une mauvaise nouvelle : l\'entreprise rappellera tous les robots R-7 dans une semaine.', 'One day, the parents announce bad news: the company will recall all R-7 robots in a week.'],
    ['« Ils te remplaceront par un modèle plus récent », explique le père.', '"They\'ll replace you with a newer model," the father explains.'],
    ['Léa pleure toute la nuit. Le lendemain, elle a une idée.', 'Léa cries all night. The next day, she has an idea.'],
    ['Elle écrira une lettre à l\'entreprise. Et R-7 la lira lui-même, en français.', 'She will write a letter to the company. And R-7 will read it himself, in French.'],
    ['Pendant six jours, ils travaillent ensemble. R-7 répète chaque phrase cent fois.', 'For six days, they work together. R-7 repeats every sentence a hundred times.'],
    ['Le septième jour, R-7 enregistre une vidéo : « Bonjour. Je m\'appelle R-7. J\'ai appris le français grâce à mon amie Léa. Si vous me gardez, je continuerai à apprendre. »', 'On the seventh day, R-7 records a video: "Hello. My name is R-7. I learned French thanks to my friend Léa. If you keep me, I will keep learning."'],
    ['La vidéo fait le tour du monde en quelques heures.', 'The video goes around the world in a few hours.'],
    ['Une semaine plus tard, l\'entreprise annonce qu\'elle ne rappellera pas les R-7. Elle mettra à jour leur logiciel… pour qu\'ils parlent français.', 'A week later, the company announces it won\'t recall the R-7s. It will update their software… so they speak French.'],
    ['Ce soir-là, R-7 dit à Léa : « Merci, professeure. Demain, c\'est moi qui t\'apprendrai quelque chose. »', 'That evening, R-7 tells Léa: "Thank you, teacher. Tomorrow, I\'ll be the one teaching you something."']
  ],
  gloss: [['un robot domestique', 'a home robot'], ['une erreur d\'usine', 'a factory error'], ['rappeler (un produit)', 'to recall (a product)'], ['enregistrer', 'to record'], ['mettre à jour', 'to update'], ['faire le tour du monde', 'to go around the world']],
  q: [
    ['m', 'Pourquoi R-7 ne parle-t-il qu\'anglais ?', ['à cause d\'une erreur d\'usine', 'parce que la famille parle anglais', 'parce qu\'il est trop vieux', 'parce qu\'il n\'aime pas le français'], 0, '"à cause d\'une erreur d\'usine"'],
    ['m', 'Depuis combien de temps Léa donne-t-elle des leçons à R-7 ?', ['trois mois', 'une semaine', 'six jours', 'un an'], 0, '"Depuis trois mois"'],
    ['m', 'Quelle est la mauvaise nouvelle ?', ['L\'entreprise va rappeler les robots R-7.', 'R-7 est cassé.', 'La famille déménage.', 'Léa est malade.'], 0, '"l\'entreprise rappellera tous les robots R-7"'],
    ['t', 'La vidéo de R-7 est devenue très populaire.', true, '"La vidéo fait le tour du monde"'],
    ['m', 'Quel temps est utilisé dans « Je continuerai à apprendre » ?', ['futur simple', 'futur proche', 'conditionnel', 'imparfait'], 0, 'continuer → continuer- + ai.']
  ]
},
{
  id: 'f6', fiction: true, day: 18, lvl: 'B1', genre: 'Drama', title: 'Si j\'avais su', focus: 'conditionnel, si + imparfait',
  lines: [
    ['Karan a vingt-quatre ans. Il travaille dans un entrepôt à Richmond, la nuit.', 'Karan is twenty-four. He works in a warehouse in Richmond, at night.'],
    ['Chaque matin, en rentrant, il passe devant la même école de musique.', 'Every morning, on his way home, he walks past the same music school.'],
    ['Dans la vitrine, il y a une guitare rouge. Il la regarde toujours un peu trop longtemps.', 'In the window, there is a red guitar. He always looks at it a little too long.'],
    ['Quand il était adolescent, il voulait devenir musicien. Mais son père disait : « La musique, ce n\'est pas un vrai métier. »', 'As a teenager, he wanted to become a musician. But his father used to say: "Music isn\'t a real job."'],
    ['Un matin, la propriétaire de l\'école sort et lui parle : « Vous jouez ? »', 'One morning, the school\'s owner comes out and talks to him: "Do you play?"'],
    ['« Avant, oui. Si j\'avais le temps, je reprendrais. Mais je travaille la nuit. »', '"I used to, yes. If I had the time, I\'d start again. But I work nights."'],
    ['« Nous avons un cours le samedi après-midi. Vous pourriez essayer, juste une fois. »', '"We have a class on Saturday afternoons. You could try, just once."'],
    ['Karan hésite. S\'il y allait, il serait fatigué. S\'il n\'y allait pas, il le regretterait.', 'Karan hesitates. If he went, he\'d be tired. If he didn\'t go, he\'d regret it.'],
    ['Le samedi suivant, il entre dans l\'école, le cœur battant.', 'The following Saturday, he walks into the school, his heart pounding.'],
    ['Ses doigts sont lents au début. Puis la musique revient, comme un vieux souvenir.', 'His fingers are slow at first. Then the music comes back, like an old memory.'],
    ['Après le cours, il appelle son père pour la première fois depuis des mois.', 'After the class, he calls his father for the first time in months.'],
    ['« Papa, je joue de nouveau. Je ne quitterai pas mon travail, mais je ne veux plus abandonner la musique. »', '"Dad, I\'m playing again. I won\'t quit my job, but I don\'t want to give up music anymore."'],
    ['Il y a un long silence. Puis son père dit doucement : « Si j\'avais su que c\'était si important pour toi… »', 'There is a long silence. Then his father says softly: "If I had known it was so important to you…"'],
    ['« Tu viendrais m\'écouter, un jour ? » demande Karan. « Oui, répond son père. J\'aimerais beaucoup. »', '"Would you come listen to me one day?" asks Karan. "Yes," his father answers. "I\'d really like that."']
  ],
  gloss: [['un entrepôt', 'a warehouse'], ['la vitrine', 'shop window'], ['reprendre', 'to take up again'], ['le cœur battant', 'with a pounding heart'], ['abandonner', 'to give up'], ['si j\'avais su', 'if I had known (B1+)']],
  q: [
    ['m', 'Où travaille Karan ?', ['dans un entrepôt, la nuit', 'dans une école de musique', 'dans un magasin de guitares', 'dans un bureau'], 0, '"Il travaille dans un entrepôt à Richmond, la nuit."'],
    ['m', 'Pourquoi Karan a-t-il arrêté la musique ?', ['Son père pensait que ce n\'était pas un vrai métier.', 'Il n\'avait pas de guitare.', 'Il était malade.', 'Il a déménagé.'], 0, '"La musique, ce n\'est pas un vrai métier."'],
    ['m', '« Si j\'avais le temps, je reprendrais » exprime :', ['une hypothèse', 'un fait passé', 'un ordre', 'une habitude'], 0, 'si + imparfait → conditionnel = hypothesis.'],
    ['t', 'Karan va quitter son travail pour la musique.', false, '"Je ne quitterai pas mon travail"'],
    ['t', 'À la fin, le père accepte d\'aller écouter Karan.', true, '"J\'aimerais beaucoup."']
  ]
}
];
