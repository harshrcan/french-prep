/* Graded stories. Each line = [French, English]. Used for reading, listening, shadowing, dictation and sentence ordering.
   q: ['m', question, options, correctIndex, why] or ['t', statement, true/false, why] */
window.STORIES = [
{
  id: 's1', day: 1, lvl: 'A1', title: 'Je m\'appelle Amira', focus: 'être, avoir, s\'appeler',
  lines: [
    ['Bonjour ! Je m\'appelle Amira.', 'Hello! My name is Amira.'],
    ['J\'ai vingt-trois ans et je suis marocaine.', 'I am twenty-three and I am Moroccan.'],
    ['J\'habite à Montréal avec mon frère, Karim.', 'I live in Montreal with my brother, Karim.'],
    ['Karim a dix-neuf ans. Il est étudiant.', 'Karim is nineteen. He is a student.'],
    ['Moi, je suis infirmière à l\'hôpital.', 'Me, I am a nurse at the hospital.'],
    ['Nous avons un petit appartement et un chat.', 'We have a small apartment and a cat.'],
    ['Le chat s\'appelle Minou. Il est noir et très gentil.', 'The cat is called Minou. He is black and very nice.'],
    ['Et vous ? Comment vous appelez-vous ?', 'And you? What is your name?']
  ],
  gloss: [['infirmière', 'nurse (f)'], ['l\'hôpital (m)', 'hospital'], ['un chat', 'a cat'], ['gentil', 'kind, nice']],
  q: [
    ['m', 'Quel âge a Amira ?', ['23 ans', '19 ans', '33 ans', '13 ans'], 0, '"J\'ai vingt-trois ans."'],
    ['m', 'Quelle est la profession d\'Amira ?', ['infirmière', 'étudiante', 'médecin', 'professeure'], 0, '"je suis infirmière à l\'hôpital"'],
    ['t', 'Karim est le frère d\'Amira.', true, '"avec mon frère, Karim"'],
    ['t', 'Le chat est blanc.', false, '"Il est noir."'],
    ['m', 'Où habitent-ils ?', ['à Montréal', 'au Maroc', 'à Paris', 'à Québec'], 0, '"J\'habite à Montréal"']
  ]
},
{
  id: 's2', day: 2, lvl: 'A1', title: 'Une journée de Lucas', focus: '-ER verbs, negation, questions',
  lines: [
    ['Lucas habite à Toronto. Il travaille dans une banque.', 'Lucas lives in Toronto. He works in a bank.'],
    ['Il commence à neuf heures et il termine à dix-sept heures.', 'He starts at nine and finishes at five.'],
    ['À midi, il mange avec ses collègues.', 'At noon he eats with his colleagues.'],
    ['Ils parlent anglais au travail, mais Lucas étudie le français le soir.', 'They speak English at work, but Lucas studies French in the evening.'],
    ['Pourquoi ? Parce qu\'il aime le Québec et il veut voyager.', 'Why? Because he likes Quebec and wants to travel.'],
    ['Lucas ne regarde pas la télé. Il écoute des podcasts en français.', 'Lucas doesn\'t watch TV. He listens to French podcasts.'],
    ['Le samedi, il ne travaille pas. Il joue au tennis avec sa sœur.', 'On Saturdays he doesn\'t work. He plays tennis with his sister.']
  ],
  gloss: [['terminer', 'to finish'], ['des collègues', 'colleagues'], ['le soir', 'in the evening'], ['vouloir (il veut)', 'to want']],
  q: [
    ['m', 'Où travaille Lucas ?', ['dans une banque', 'dans un hôpital', 'dans une école', 'à la maison'], 0, '"Il travaille dans une banque."'],
    ['m', 'Quand est-ce qu\'il étudie le français ?', ['le soir', 'à midi', 'le matin', 'le samedi'], 0, '"Lucas étudie le français le soir."'],
    ['t', 'Lucas regarde beaucoup la télé.', false, '"Lucas ne regarde pas la télé."'],
    ['m', 'Pourquoi est-ce qu\'il étudie le français ?', ['Il aime le Québec et veut voyager.', 'Pour son travail.', 'Sa sœur parle français.', 'Il habite à Montréal.'], 0, '"Parce qu\'il aime le Québec et il veut voyager."'],
    ['t', 'Le samedi, il joue au tennis.', true, '"Il joue au tennis avec sa sœur."']
  ]
},
{
  id: 's3', day: 3, lvl: 'A1', title: 'Le week-end de Sofia', focus: 'aller, faire, prendre, à/de contractions',
  lines: [
    ['Le week-end, Sofia ne va pas à l\'université.', 'On weekends, Sofia doesn\'t go to university.'],
    ['Le samedi matin, elle fait du sport au parc.', 'On Saturday mornings she does sport at the park.'],
    ['Ensuite, elle prend le bus pour aller au marché.', 'Then she takes the bus to go to the market.'],
    ['Elle achète des fruits et elle fait la cuisine.', 'She buys fruit and she cooks.'],
    ['Le dimanche, ses parents viennent de Laval.', 'On Sundays her parents come from Laval.'],
    ['Ils mangent ensemble et ils vont au cinéma ou au musée.', 'They eat together and go to the cinema or the museum.'],
    ['Cet été, Sofia va en France et au Portugal avec son amie.', 'This summer Sofia is going to France and Portugal with her friend.'],
    ['Elles prennent l\'avion le 2 juillet.', 'They take the plane on July 2.']
  ],
  gloss: [['le marché', 'the market'], ['ensemble', 'together'], ['l\'avion (m)', 'the plane'], ['faire la cuisine', 'to cook']],
  q: [
    ['m', 'Que fait Sofia le samedi matin ?', ['du sport', 'la cuisine', 'ses devoirs', 'les courses au supermarché'], 0, '"elle fait du sport au parc"'],
    ['m', 'Comment va-t-elle au marché ?', ['en bus', 'à pied', 'en voiture', 'à vélo'], 0, '"elle prend le bus"'],
    ['t', 'Ses parents habitent à Laval.', true, '"ses parents viennent de Laval"'],
    ['m', 'Où va Sofia cet été ?', ['en France et au Portugal', 'au Canada', 'en Italie', 'aux États-Unis'], 0, '"Sofia va en France et au Portugal"'],
    ['m', 'Quand prennent-elles l\'avion ?', ['le 2 juillet', 'le 12 juillet', 'le 2 juin', 'le 20 juillet'], 0, '"le 2 juillet"']
  ]
},
{
  id: 's4', day: 4, lvl: 'A1', title: 'Au marché', focus: 'partitive, quantities, vouloir/pouvoir, prices',
  lines: [
    ['— Bonjour madame, qu\'est-ce que vous voulez ?', '— Hello madam, what would you like?'],
    ['— Bonjour ! Je voudrais un kilo de tomates et des pommes, s\'il vous plaît.', '— Hello! I\'d like a kilo of tomatoes and some apples, please.'],
    ['— Combien de pommes ?', '— How many apples?'],
    ['— Six, s\'il vous plaît. Vous avez du fromage ?', '— Six, please. Do you have cheese?'],
    ['— Désolé, nous n\'avons pas de fromage. Mais il y a du pain et des œufs.', '— Sorry, we don\'t have cheese. But there is bread and eggs.'],
    ['— D\'accord, une baguette et une douzaine d\'œufs.', '— OK, a baguette and a dozen eggs.'],
    ['— Voilà. Ça fait quatorze dollars quatre-vingt-dix.', '— Here you go. That\'s fourteen ninety.'],
    ['— Est-ce que je peux payer par carte ?', '— Can I pay by card?'],
    ['— Bien sûr. Merci et bonne journée !', '— Of course. Thank you and have a good day!']
  ],
  gloss: [['une douzaine de', 'a dozen'], ['des œufs', 'eggs'], ['ça fait', 'that comes to'], ['bien sûr', 'of course']],
  q: [
    ['m', 'Combien de pommes la cliente veut-elle ?', ['six', 'dix', 'une douzaine', 'un kilo'], 0, '"Six, s\'il vous plaît."'],
    ['t', 'Le marchand a du fromage.', false, '"nous n\'avons pas de fromage"'],
    ['m', 'Combien coûte tout ?', ['14,90 $', '4,90 $', '40,90 $', '14,19 $'], 0, '"quatorze dollars quatre-vingt-dix"'],
    ['m', 'Comment paie-t-elle ?', ['par carte', 'en espèces', 'par chèque', 'elle ne paie pas'], 0, '"payer par carte ? — Bien sûr."'],
    ['t', 'Elle achète une baguette.', true, '"une baguette et une douzaine d\'œufs"']
  ]
},
{
  id: 's5', day: 5, lvl: 'A1', title: 'Ma famille', focus: 'adjectives, possessives, savoir/connaître',
  lines: [
    ['Ma famille n\'est pas très grande.', 'My family isn\'t very big.'],
    ['Mon père est grand et sérieux. Il est ingénieur.', 'My father is tall and serious. He is an engineer.'],
    ['Ma mère est petite, drôle et très patiente.', 'My mother is short, funny and very patient.'],
    ['J\'ai une sœur, Léa. Elle a les cheveux longs et les yeux verts.', 'I have a sister, Léa. She has long hair and green eyes.'],
    ['Léa est très sportive : elle sait nager et elle court tous les matins.', 'Léa is very sporty: she knows how to swim and she runs every morning.'],
    ['Nos grands-parents habitent à la campagne, dans une vieille maison.', 'Our grandparents live in the countryside, in an old house.'],
    ['Leur maison est belle et leur jardin est énorme.', 'Their house is beautiful and their garden is huge.'],
    ['Tu connais la Gaspésie ? C\'est là qu\'ils habitent.', 'Do you know the Gaspé region? That\'s where they live.']
  ],
  gloss: [['sérieux', 'serious'], ['les cheveux', 'hair'], ['les yeux', 'eyes'], ['la campagne', 'countryside'], ['le jardin', 'garden']],
  q: [
    ['m', 'Comment est la mère ?', ['petite, drôle et patiente', 'grande et sérieuse', 'sportive', 'vieille'], 0, '"Ma mère est petite, drôle et très patiente."'],
    ['m', 'Quelle est la profession du père ?', ['ingénieur', 'professeur', 'médecin', 'agriculteur'], 0, '"Il est ingénieur."'],
    ['t', 'Léa a les yeux bleus.', false, '"les yeux verts"'],
    ['t', 'Les grands-parents habitent en ville.', false, '"à la campagne"'],
    ['m', 'Que sait faire Léa ?', ['nager', 'cuisiner', 'chanter', 'conduire'], 0, '"elle sait nager"']
  ]
},
{
  id: 's6', day: 6, lvl: 'A1+', title: 'Un nouvel appartement', focus: '-IR / -RE verbs, mettre, dire, écrire',
  lines: [
    ['Julien et Maya cherchent un appartement depuis un mois.', 'Julien and Maya have been looking for an apartment for a month.'],
    ['Aujourd\'hui, ils visitent un trois et demie près du métro.', 'Today they are visiting a two-bedroom near the subway.'],
    ['Le propriétaire ouvre la porte et dit : « Bienvenue ! »', 'The landlord opens the door and says: "Welcome!"'],
    ['La cuisine est petite, mais le salon est grand et il y a beaucoup de lumière.', 'The kitchen is small, but the living room is big and there\'s a lot of light.'],
    ['Maya réfléchit. Julien lit le bail avec attention.', 'Maya thinks. Julien reads the lease carefully.'],
    ['Le loyer est de mille deux cents dollars par mois, chauffage compris.', 'The rent is twelve hundred dollars a month, heating included.'],
    ['Finalement, ils choisissent l\'appartement.', 'In the end, they choose the apartment.'],
    ['Le soir, Maya écrit un message à ses parents : « Nous partons de notre vieux studio le 1er décembre ! »', 'In the evening, Maya writes a message to her parents: "We are leaving our old studio on December 1!"']
  ],
  gloss: [['un trois et demie', 'Quebec term: apartment with 1 bedroom + living room + kitchen'], ['le propriétaire', 'landlord, owner'], ['le bail', 'the lease'], ['le loyer', 'the rent'], ['chauffage compris', 'heating included']],
  q: [
    ['m', 'Depuis combien de temps cherchent-ils un appartement ?', ['un mois', 'une semaine', 'un an', 'deux mois'], 0, '"depuis un mois"'],
    ['t', 'La cuisine est grande.', false, '"La cuisine est petite"'],
    ['m', 'Combien coûte le loyer ?', ['1 200 $ par mois', '1 100 $ par mois', '2 100 $ par mois', '200 $ par semaine'], 0, '"mille deux cents dollars par mois"'],
    ['m', 'Qui lit le bail ?', ['Julien', 'Maya', 'le propriétaire', 'les parents'], 0, '"Julien lit le bail"'],
    ['t', 'Le chauffage est compris dans le loyer.', true, '"chauffage compris"']
  ]
},
{
  id: 's7', day: 7, lvl: 'A1+', title: 'La routine de Nadia', focus: 'reflexive verbs, time, frequency',
  lines: [
    ['Nadia est boulangère. Elle se lève très tôt, à quatre heures et quart.', 'Nadia is a baker. She gets up very early, at a quarter past four.'],
    ['D\'abord, elle se douche rapidement. Ensuite, elle s\'habille et elle boit un café.', 'First she showers quickly. Then she gets dressed and drinks a coffee.'],
    ['Elle part de chez elle à cinq heures moins le quart.', 'She leaves home at a quarter to five.'],
    ['À la boulangerie, elle prépare le pain et les croissants.', 'At the bakery she prepares bread and croissants.'],
    ['Elle ne se repose jamais avant midi.', 'She never rests before noon.'],
    ['L\'après-midi, elle se promène souvent avec son chien au bord du fleuve.', 'In the afternoon she often goes for a walk with her dog by the river.'],
    ['Le soir, elle lit un peu et elle se couche à neuf heures.', 'In the evening she reads a bit and goes to bed at nine.'],
    ['Le dimanche, elle ne travaille pas : elle se réveille tard et elle s\'amuse avec ses amis.', 'On Sundays she doesn\'t work: she wakes up late and has fun with her friends.']
  ],
  gloss: [['boulangère', 'baker (f)'], ['tôt', 'early'], ['au bord du fleuve', 'by the river'], ['tard', 'late']],
  q: [
    ['m', 'À quelle heure Nadia se lève-t-elle ?', ['4 h 15', '4 h 45', '5 h 15', '4 h 30'], 0, '"quatre heures et quart"'],
    ['m', 'À quelle heure part-elle ?', ['4 h 45', '5 h 45', '4 h 15', '5 h'], 0, '"cinq heures moins le quart" = 4:45'],
    ['t', 'Elle se repose souvent le matin.', false, '"Elle ne se repose jamais avant midi."'],
    ['m', 'Que fait-elle l\'après-midi ?', ['Elle se promène avec son chien.', 'Elle dort.', 'Elle travaille.', 'Elle fait la cuisine.'], 0, '"elle se promène souvent avec son chien"'],
    ['t', 'Le dimanche, elle se réveille tard.', true, '"elle se réveille tard"']
  ]
},
{
  id: 's8', day: 8, lvl: 'A2', title: 'Le message de Chloé', focus: 'futur proche, venir de, imperative',
  lines: [
    ['Salut Tom ! Je viens d\'arriver à la gare de Québec.', 'Hi Tom! I\'ve just arrived at the Quebec City station.'],
    ['Je suis en train de chercher un taxi, mais il y a beaucoup de monde.', 'I\'m looking for a taxi, but there are a lot of people.'],
    ['Ce soir, nous allons dîner chez ta tante, c\'est ça ?', 'Tonight we\'re going to have dinner at your aunt\'s, right?'],
    ['Envoie-moi l\'adresse, s\'il te plaît.', 'Send me the address, please.'],
    ['Demain matin, je vais visiter le Vieux-Québec et l\'après-midi, on va faire du patin.', 'Tomorrow morning I\'m going to visit Old Quebec and in the afternoon we\'re going skating.'],
    ['N\'oublie pas tes gants : il va faire très froid !', 'Don\'t forget your gloves: it\'s going to be very cold!'],
    ['Ah, je viens de trouver un taxi. À tout à l\'heure !', 'Oh, I\'ve just found a taxi. See you soon!']
  ],
  gloss: [['la gare', 'train station'], ['beaucoup de monde', 'a lot of people'], ['faire du patin', 'to go skating'], ['les gants', 'gloves'], ['à tout à l\'heure', 'see you soon (same day)']],
  q: [
    ['m', 'Où est Chloé ?', ['à la gare de Québec', 'à l\'aéroport', 'chez la tante', 'dans le Vieux-Québec'], 0, '"Je viens d\'arriver à la gare de Québec."'],
    ['m', 'Que vont-ils faire ce soir ?', ['dîner chez la tante de Tom', 'faire du patin', 'visiter le Vieux-Québec', 'aller au cinéma'], 0, '"nous allons dîner chez ta tante"'],
    ['t', 'Chloé demande l\'adresse à Tom.', true, '"Envoie-moi l\'adresse"'],
    ['m', 'Quel temps va-t-il faire ?', ['très froid', 'chaud', 'il va pleuvoir', 'beau et doux'], 0, '"il va faire très froid"'],
    ['t', 'À la fin, Chloé cherche encore un taxi.', false, '"je viens de trouver un taxi"']
  ]
},
{
  id: 's9', day: 9, lvl: 'A2', title: 'Un samedi chargé', focus: 'passé composé with avoir',
  lines: [
    ['Samedi dernier, Ravi a eu une journée très chargée.', 'Last Saturday, Ravi had a very busy day.'],
    ['Le matin, il a fait le ménage et il a lavé ses vêtements.', 'In the morning, he cleaned and washed his clothes.'],
    ['Ensuite, il a pris le SkyTrain et il a retrouvé son cousin au centre-ville.', 'Then he took the SkyTrain and met his cousin downtown.'],
    ['Ils ont mangé des dumplings dans un petit restaurant et ils ont bu du thé.', 'They ate dumplings in a small restaurant and drank tea.'],
    ['L\'après-midi, ils ont vu un film d\'action. Ravi n\'a pas aimé la fin.', 'In the afternoon they saw an action movie. Ravi didn\'t like the ending.'],
    ['Le soir, il a lu ses courriels et il a écrit à son professeur.', 'In the evening he read his emails and wrote to his teacher.'],
    ['Il a mis son réveil à sept heures parce qu\'il travaillait le lendemain.', 'He set his alarm for seven because he was working the next day.'],
    ['Il a très bien dormi !', 'He slept very well!']
  ],
  gloss: [['chargé', 'busy, full'], ['faire le ménage', 'to clean the house'], ['retrouver', 'to meet up with'], ['le réveil', 'alarm clock'], ['le lendemain', 'the next day']],
  q: [
    ['m', 'Qu\'est-ce que Ravi a fait le matin ?', ['le ménage et la lessive', 'du sport', 'ses devoirs', 'les courses'], 0, '"il a fait le ménage et il a lavé ses vêtements"'],
    ['m', 'Qui a-t-il retrouvé ?', ['son cousin', 'son professeur', 'sa sœur', 'un collègue'], 0, '"il a retrouvé son cousin"'],
    ['t', 'Ravi a adoré la fin du film.', false, '"Ravi n\'a pas aimé la fin."'],
    ['m', 'Qu\'est-ce qu\'ils ont bu ?', ['du thé', 'du café', 'de la bière', 'du jus'], 0, '"ils ont bu du thé"'],
    ['m', 'Pourquoi a-t-il mis son réveil à sept heures ?', ['Il travaillait le lendemain.', 'Il avait un examen.', 'Il partait en voyage.', 'Il voulait courir.'], 0, '"parce qu\'il travaillait le lendemain"']
  ]
},
{
  id: 's10', day: 10, lvl: 'A2', title: 'Le voyage à Banff', focus: 'passé composé with être, reflexives',
  lines: [
    ['L\'hiver dernier, Emma et sa sœur sont allées à Banff.', 'Last winter, Emma and her sister went to Banff.'],
    ['Elles sont parties de Calgary tôt le matin et elles sont arrivées vers dix heures.', 'They left Calgary early in the morning and arrived around ten.'],
    ['Elles se sont installées dans un petit hôtel au centre du village.', 'They settled into a small hotel in the center of the village.'],
    ['L\'après-midi, elles sont montées au sommet de la montagne en téléphérique.', 'In the afternoon, they went up to the top of the mountain by cable car.'],
    ['La vue était incroyable ! Elles sont restées là-haut une heure.', 'The view was incredible! They stayed up there for an hour.'],
    ['En descendant, Emma est tombée sur la glace, mais elle ne s\'est pas fait mal.', 'On the way down, Emma fell on the ice, but she didn\'t hurt herself.'],
    ['Le soir, elles se sont baignées dans les sources chaudes.', 'In the evening they bathed in the hot springs.'],
    ['Elles sont rentrées à Calgary le dimanche, fatiguées mais très contentes.', 'They went back to Calgary on Sunday, tired but very happy.']
  ],
  gloss: [['s\'installer', 'to settle in'], ['le téléphérique', 'cable car'], ['la glace', 'ice'], ['se faire mal', 'to hurt oneself'], ['les sources chaudes', 'hot springs']],
  q: [
    ['m', 'Quand sont-elles allées à Banff ?', ['l\'hiver dernier', 'l\'été dernier', 'le mois dernier', 'il y a deux ans'], 0, '"L\'hiver dernier"'],
    ['m', 'Comment sont-elles montées au sommet ?', ['en téléphérique', 'à pied', 'en voiture', 'à vélo'], 0, '"en téléphérique"'],
    ['t', 'Emma s\'est fait mal en tombant.', false, '"elle ne s\'est pas fait mal"'],
    ['m', 'Combien de temps sont-elles restées au sommet ?', ['une heure', 'dix minutes', 'toute la journée', 'deux heures'], 0, '"une heure"'],
    ['t', 'Elles sont rentrées le dimanche.', true, '"Elles sont rentrées à Calgary le dimanche"']
  ]
},
{
  id: 's11', day: 11, lvl: 'A2', title: 'Tu as déjà… ?', focus: 'questions in the past, déjà / jamais / pas encore',
  lines: [
    ['— Tu es déjà allé en Europe, Marco ?', '— Have you ever been to Europe, Marco?'],
    ['— Oui, je suis allé en Espagne il y a deux ans. Et toi ?', '— Yes, I went to Spain two years ago. And you?'],
    ['— Non, je ne suis jamais sorti du Canada ! Mais j\'ai visité presque toutes les provinces.', '— No, I\'ve never left Canada! But I\'ve visited almost all the provinces.'],
    ['— Tu as vu les aurores boréales ?', '— Have you seen the northern lights?'],
    ['— Oui, une fois, au Yukon. C\'était magique.', '— Yes, once, in the Yukon. It was magical.'],
    ['— Moi, je ne les ai pas encore vues. Et tu as goûté la tourtière ?', '— I haven\'t seen them yet. And have you tasted tourtière?'],
    ['— Bien sûr ! Ma voisine l\'a préparée pour Noël l\'année dernière.', '— Of course! My neighbour made it for Christmas last year.'],
    ['— Alors, la prochaine fois, c\'est moi qui t\'invite en Espagne !', '— So next time, I\'m the one inviting you to Spain!']
  ],
  gloss: [['presque', 'almost'], ['les aurores boréales', 'northern lights'], ['goûter', 'to taste'], ['la tourtière', 'Quebec meat pie'], ['la voisine', 'the neighbour (f)']],
  q: [
    ['m', 'Quand Marco est-il allé en Espagne ?', ['il y a deux ans', 'l\'année dernière', 'il y a dix ans', 'jamais'], 0, '"il y a deux ans"'],
    ['t', 'L\'ami de Marco n\'a jamais quitté le Canada.', true, '"je ne suis jamais sorti du Canada"'],
    ['m', 'Où l\'ami a-t-il vu les aurores boréales ?', ['au Yukon', 'en Espagne', 'au Québec', 'il ne les a pas vues'], 0, '"une fois, au Yukon"'],
    ['t', 'Marco a déjà vu les aurores boréales.', false, '"je ne les ai pas encore vues"'],
    ['m', 'Qui a préparé la tourtière ?', ['la voisine', 'la mère', 'Marco', 'un restaurant'], 0, '"Ma voisine l\'a préparée"']
  ]
},
{
  id: 's12', day: 12, lvl: 'A2', title: 'Quand j\'étais petit', focus: 'imparfait (habits, descriptions)',
  lines: [
    ['Quand j\'étais petit, j\'habitais dans un village au Pendjab.', 'When I was little, I lived in a village in Punjab.'],
    ['Notre maison était simple, mais il y avait un grand toit où nous dormions en été.', 'Our house was simple, but there was a big roof where we slept in summer.'],
    ['Chaque matin, mon grand-père se levait avant le soleil et il s\'occupait des vaches.', 'Every morning my grandfather got up before the sun and took care of the cows.'],
    ['Ma grand-mère préparait des parathas et la maison sentait bon.', 'My grandmother made parathas and the house smelled good.'],
    ['Après l\'école, mes cousins et moi jouions au cricket dans les champs.', 'After school my cousins and I played cricket in the fields.'],
    ['Il faisait très chaud, alors nous nous baignions souvent dans le canal.', 'It was very hot, so we often swam in the canal.'],
    ['Le soir, tout le monde mangeait ensemble et mon grand-père racontait des histoires.', 'In the evening everyone ate together and my grandfather told stories.'],
    ['Je n\'avais pas de téléphone, mais j\'étais heureux.', 'I didn\'t have a phone, but I was happy.']
  ],
  gloss: [['le toit', 'roof'], ['s\'occuper de', 'to take care of'], ['les vaches', 'cows'], ['sentir bon', 'to smell good'], ['les champs', 'fields'], ['raconter', 'to tell (a story)']],
  q: [
    ['m', 'Où dormaient-ils en été ?', ['sur le toit', 'dans le jardin', 'chez les voisins', 'dans les champs'], 0, '"un grand toit où nous dormions en été"'],
    ['m', 'Que faisait le grand-père chaque matin ?', ['Il s\'occupait des vaches.', 'Il préparait des parathas.', 'Il jouait au cricket.', 'Il allait à l\'école.'], 0, '"il s\'occupait des vaches"'],
    ['t', 'Il faisait froid dans le village.', false, '"Il faisait très chaud"'],
    ['m', 'Qui racontait des histoires ?', ['le grand-père', 'la grand-mère', 'les cousins', 'le professeur'], 0, '"mon grand-père racontait des histoires"'],
    ['t', 'Le narrateur avait un téléphone.', false, '"Je n\'avais pas de téléphone"']
  ]
},
{
  id: 's13', day: 13, lvl: 'A2', title: 'La panne', focus: 'passé composé vs imparfait, connectors',
  lines: [
    ['C\'était un vendredi soir de janvier. Il neigeait et il faisait moins vingt.', 'It was a Friday evening in January. It was snowing and it was minus twenty.'],
    ['Aisha rentrait du travail en voiture. Elle était fatiguée et elle écoutait la radio.', 'Aisha was driving home from work. She was tired and was listening to the radio.'],
    ['Soudain, la voiture a fait un bruit bizarre et le moteur s\'est arrêté.', 'Suddenly the car made a strange noise and the engine stopped.'],
    ['Aisha a essayé de redémarrer, mais rien ne marchait.', 'Aisha tried to restart, but nothing worked.'],
    ['Comme son téléphone n\'avait presque plus de batterie, elle a appelé une dépanneuse tout de suite.', 'Since her phone was almost out of battery, she called a tow truck right away.'],
    ['Pendant qu\'elle attendait, un homme s\'est arrêté pour l\'aider. Il s\'appelait Jean et il était mécanicien !', 'While she was waiting, a man stopped to help her. His name was Jean and he was a mechanic!'],
    ['Il a ouvert le capot et il a trouvé le problème en cinq minutes.', 'He opened the hood and found the problem in five minutes.'],
    ['Finalement, Aisha est rentrée chez elle à minuit, donc elle a annulé la dépanneuse.', 'Finally, Aisha got home at midnight, so she cancelled the tow truck.']
  ],
  gloss: [['une panne', 'a breakdown'], ['le bruit', 'noise'], ['redémarrer', 'to restart'], ['une dépanneuse', 'tow truck'], ['le capot', 'the hood'], ['annuler', 'to cancel']],
  q: [
    ['m', 'Quel temps faisait-il ?', ['Il neigeait, moins vingt.', 'Il pleuvait.', 'Il faisait beau.', 'Il y avait du vent, plus vingt.'], 0, '"Il neigeait et il faisait moins vingt."'],
    ['m', 'Que faisait Aisha quand la voiture s\'est arrêtée ?', ['Elle rentrait du travail et écoutait la radio.', 'Elle allait au travail.', 'Elle téléphonait.', 'Elle dormait.'], 0, 'Background in the imparfait.'],
    ['t', 'Jean était mécanicien.', true, '"il était mécanicien"'],
    ['m', 'Combien de temps Jean a-t-il pris pour trouver le problème ?', ['cinq minutes', 'une heure', 'vingt minutes', 'deux heures'], 0, '"en cinq minutes"'],
    ['t', 'La dépanneuse a remorqué la voiture.', false, '"elle a annulé la dépanneuse"']
  ]
},
{
  id: 's14', day: 14, lvl: 'A2', title: 'Le cadeau d\'anniversaire', focus: 'object pronouns (le, la, lui, leur)',
  lines: [
    ['Samedi, c\'est l\'anniversaire de Inès. Ses amis veulent lui faire une surprise.', 'Saturday is Inès\'s birthday. Her friends want to surprise her.'],
    ['Paul a trouvé un beau livre de photos. Il l\'a acheté lundi.', 'Paul found a beautiful photo book. He bought it on Monday.'],
    ['Sara a écrit une carte et elle l\'a donnée à Paul.', 'Sara wrote a card and gave it to Paul.'],
    ['Ils ont aussi invité les parents d\'Inès. Paul leur a téléphoné mardi.', 'They also invited Inès\'s parents. Paul called them on Tuesday.'],
    ['« Ne lui dites rien ! » a dit Sara à tout le monde.', '"Don\'t tell her anything!" Sara said to everyone.'],
    ['Samedi soir, Inès est arrivée au restaurant. Ses amis l\'attendaient.', 'Saturday evening, Inès arrived at the restaurant. Her friends were waiting for her.'],
    ['Quand elle a vu ses parents, elle les a embrassés et elle a pleuré de joie.', 'When she saw her parents, she hugged them and cried with joy.'],
    ['Elle a ouvert le cadeau et elle a dit : « Je l\'adore ! Merci, je vous aime ! »', 'She opened the gift and said: "I love it! Thank you, I love you!"']
  ],
  gloss: [['faire une surprise à', 'to surprise someone'], ['une carte', 'a card'], ['embrasser', 'to kiss / hug'], ['pleurer de joie', 'to cry with joy']],
  q: [
    ['m', 'Qu\'est-ce que Paul a acheté ?', ['un livre de photos', 'une carte', 'des fleurs', 'un gâteau'], 0, '"un beau livre de photos. Il l\'a acheté"'],
    ['m', 'Dans "Paul leur a téléphoné", "leur" remplace :', ['les parents d\'Inès', 'Inès', 'les amis', 'Sara'], 0, '"Ils ont aussi invité les parents d\'Inès. Paul leur a téléphoné"'],
    ['t', 'Sara a donné la carte à Inès directement.', false, '"elle l\'a donnée à Paul"'],
    ['m', 'Dans "Ses amis l\'attendaient", "l\'" remplace :', ['Inès', 'le cadeau', 'le restaurant', 'Paul'], 0, 'attendre + Inès → l\''],
    ['t', 'Inès a aimé le cadeau.', true, '"Je l\'adore !"']
  ]
},
{
  id: 's15', day: 15, lvl: 'A2', title: 'Le café du coin', focus: 'y, en, verb + à / de',
  lines: [
    ['Il y a un petit café au coin de ma rue. J\'y vais presque tous les matins.', 'There\'s a little café on the corner of my street. I go there almost every morning.'],
    ['Le propriétaire, Monsieur Tremblay, se souvient de tout le monde.', 'The owner, Mr. Tremblay, remembers everyone.'],
    ['Quand j\'entre, il me demande : « Un café au lait, comme d\'habitude ? »', 'When I come in, he asks me: "A café au lait, as usual?"'],
    ['Ses croissants sont délicieux. J\'en prends toujours un, parfois deux.', 'His croissants are delicious. I always have one, sometimes two.'],
    ['Monsieur Tremblay rêve d\'ouvrir un deuxième café, mais il a besoin d\'argent.', 'Mr. Tremblay dreams of opening a second café, but he needs money.'],
    ['Il en parle souvent avec ses clients. Moi, je pense que c\'est une excellente idée.', 'He often talks about it with his customers. I think it\'s an excellent idea.'],
    ['Hier, il m\'a dit qu\'il avait décidé de demander un prêt à la banque.', 'Yesterday he told me that he had decided to ask the bank for a loan.'],
    ['Je pense à lui aujourd\'hui : il a rendez-vous avec le banquier à dix heures.', 'I\'m thinking about him today: he has an appointment with the banker at ten.']
  ],
  gloss: [['au coin de', 'on the corner of'], ['comme d\'habitude', 'as usual'], ['un prêt', 'a loan'], ['le banquier', 'banker']],
  q: [
    ['m', 'Dans "J\'y vais", "y" remplace :', ['au café', 'à la banque', 'tous les matins', 'ma rue'], 0, 'y = to the café.'],
    ['m', 'Dans "J\'en prends toujours un", "en" remplace :', ['des croissants', 'du café', 'de l\'argent', 'des clients'], 0, 'en + number = croissants.'],
    ['t', 'Monsieur Tremblay veut ouvrir un deuxième café.', true, '"rêve d\'ouvrir un deuxième café"'],
    ['m', 'De quoi a-t-il besoin ?', ['d\'argent', 'de clients', 'd\'un employé', 'de croissants'], 0, '"il a besoin d\'argent"'],
    ['m', 'Que fait-il aujourd\'hui à dix heures ?', ['Il a rendez-vous avec le banquier.', 'Il ouvre son deuxième café.', 'Il fait des croissants.', 'Il part en vacances.'], 0, '"il a rendez-vous avec le banquier à dix heures"']
  ]
},
{
  id: 's16', day: 16, lvl: 'A2', title: 'Choisir une ville', focus: 'comparatives, superlatives, qui / que / où',
  lines: [
    ['Après ses études, Omar doit choisir une ville où il va travailler.', 'After his studies, Omar has to choose a city where he will work.'],
    ['Il a reçu deux offres : une à Montréal et une à Calgary.', 'He received two offers: one in Montreal and one in Calgary.'],
    ['À Calgary, le salaire est plus élevé et les impôts sont moins lourds.', 'In Calgary, the salary is higher and taxes are lighter.'],
    ['Mais Montréal est la ville qu\'il préfère : la vie culturelle y est plus riche et les loyers sont moins chers qu\'à Toronto.', 'But Montreal is the city he prefers: cultural life is richer there and rents are cheaper than in Toronto.'],
    ['L\'entreprise qui lui propose le poste à Montréal est plus petite, mais l\'équipe est très sympathique.', 'The company offering him the job in Montreal is smaller, but the team is very nice.'],
    ['Et puis, c\'est la meilleure occasion de parler français tous les jours.', 'And besides, it\'s the best opportunity to speak French every day.'],
    ['Le seul problème ? L\'hiver à Montréal est aussi froid qu\'à Calgary, mais beaucoup plus humide !', 'The only problem? Winter in Montreal is as cold as in Calgary, but much more humid!'],
    ['Finalement, Omar a choisi Montréal. Il dit que c\'est la décision la plus importante de sa vie.', 'In the end, Omar chose Montreal. He says it\'s the most important decision of his life.']
  ],
  gloss: [['une offre', 'an offer'], ['élevé', 'high'], ['les impôts', 'taxes'], ['le poste', 'the position, job'], ['une occasion', 'an opportunity']],
  q: [
    ['m', 'Où le salaire est-il plus élevé ?', ['à Calgary', 'à Montréal', 'à Toronto', 'c\'est pareil'], 0, '"À Calgary, le salaire est plus élevé"'],
    ['t', 'L\'entreprise de Montréal est plus grande.', false, '"est plus petite"'],
    ['m', 'Pourquoi Montréal est la meilleure occasion ?', ['pour parler français tous les jours', 'pour gagner plus', 'pour le climat', 'pour les impôts'], 0, '"la meilleure occasion de parler français"'],
    ['m', 'Comment est l\'hiver à Montréal par rapport à Calgary ?', ['aussi froid, plus humide', 'plus chaud', 'moins froid', 'plus sec'], 0, '"aussi froid qu\'à Calgary, mais beaucoup plus humide"'],
    ['t', 'Omar a choisi Montréal.', true, '"Finalement, Omar a choisi Montréal."']
  ]
},
{
  id: 's17', day: 17, lvl: 'A2', title: 'Projets d\'avenir', focus: 'futur simple, depuis / pendant / dans / il y a',
  lines: [
    ['Je m\'appelle Priya. J\'habite à Surrey depuis quatre ans et j\'étudie l\'informatique depuis deux ans.', 'My name is Priya. I\'ve lived in Surrey for four years and studied computing for two.'],
    ['Il y a six mois, j\'ai commencé à apprendre le français.', 'Six months ago I started learning French.'],
    ['Dans trois semaines, je passerai mon examen de niveau A2.', 'In three weeks I will take my A2 exam.'],
    ['Après mon diplôme, je chercherai un poste en cybersécurité.', 'After my diploma I will look for a job in cybersecurity.'],
    ['L\'été prochain, je partirai au Québec pendant deux mois pour améliorer mon français.', 'Next summer I will go to Quebec for two months to improve my French.'],
    ['Je logerai dans une famille et je suivrai des cours le matin.', 'I will stay with a family and take classes in the morning.'],
    ['Si tout va bien, je passerai le TCF Canada dans un an.', 'If all goes well, I will take the TCF Canada in a year.'],
    ['Mes parents disent que je travaille trop, mais je finirai ce que j\'ai commencé !', 'My parents say I work too much, but I will finish what I started!']
  ],
  gloss: [['passer un examen', 'to take an exam (not pass!)'], ['améliorer', 'to improve'], ['loger', 'to stay, lodge'], ['suivre des cours', 'to take classes']],
  q: [
    ['m', 'Depuis combien de temps Priya habite-t-elle à Surrey ?', ['quatre ans', 'deux ans', 'six mois', 'un an'], 0, '"depuis quatre ans"'],
    ['m', 'Quand a-t-elle commencé le français ?', ['il y a six mois', 'il y a deux ans', 'dans trois semaines', 'l\'été dernier'], 0, '"Il y a six mois"'],
    ['t', 'Elle passera son examen A2 dans trois mois.', false, '"Dans trois semaines"'],
    ['m', 'Combien de temps restera-t-elle au Québec ?', ['deux mois', 'un an', 'trois semaines', 'six mois'], 0, '"pendant deux mois"'],
    ['t', '"Passer un examen" veut dire "réussir un examen".', false, 'passer = take; réussir = pass.']
  ]
},
{
  id: 's18', day: 18, lvl: 'A2+', title: 'Le courrier du cœur', focus: 'conditional, advice, si clauses',
  lines: [
    ['Chère Julie, je travaille dans un magasin depuis un an. Mon patron me demande de travailler tous les week-ends.', 'Dear Julie, I\'ve worked in a store for a year. My boss asks me to work every weekend.'],
    ['Je suis épuisé et je ne vois plus mes amis. Que devrais-je faire ? — Karan', 'I\'m exhausted and I don\'t see my friends anymore. What should I do? — Karan'],
    ['Cher Karan, à ta place, je parlerais à ton patron calmement.', 'Dear Karan, if I were you, I would talk to your boss calmly.'],
    ['Tu pourrais lui proposer de travailler un week-end sur deux.', 'You could suggest working every other weekend.'],
    ['S\'il refuse, tu devrais regarder d\'autres offres d\'emploi.', 'If he refuses, you should look at other job offers.'],
    ['Si j\'étais toi, je noterais aussi tes heures, pour vérifier ton salaire.', 'If I were you, I would also write down your hours, to check your pay.'],
    ['Et surtout, prends du temps pour toi : ta santé est plus importante que ton travail.', 'And above all, take time for yourself: your health is more important than your job.'],
    ['Si tu suis ces conseils, je suis sûre que la situation s\'améliorera. — Julie', 'If you follow this advice, I\'m sure the situation will improve. — Julie']
  ],
  gloss: [['épuisé', 'exhausted'], ['à ta place', 'in your place, if I were you'], ['un week-end sur deux', 'every other weekend'], ['la santé', 'health'], ['un conseil', 'a piece of advice']],
  q: [
    ['m', 'Quel est le problème de Karan ?', ['Il travaille tous les week-ends.', 'Il n\'a pas de travail.', 'Son salaire est trop bas.', 'Il déteste ses collègues.'], 0, '"travailler tous les week-ends"'],
    ['m', 'Quel est le premier conseil de Julie ?', ['parler calmement au patron', 'démissionner tout de suite', 'travailler plus', 'appeler un avocat'], 0, '"je parlerais à ton patron calmement"'],
    ['t', 'Julie dit que le travail est plus important que la santé.', false, '"ta santé est plus importante que ton travail"'],
    ['m', '"Tu devrais regarder d\'autres offres" est :', ['un conseil au conditionnel', 'un ordre à l\'impératif', 'un fait au présent', 'une action passée'], 0, 'devoir au conditionnel = advice.'],
    ['t', 'Julie pense que la situation peut s\'améliorer.', true, '"je suis sûre que la situation s\'améliorera"']
  ]
},
{
  id: 's19', day: 19, lvl: 'A2+', title: 'Chez le médecin', focus: 'health, depuis, mixed tenses',
  lines: [
    ['— Bonjour, monsieur. Qu\'est-ce qui ne va pas ?', '— Hello, sir. What\'s wrong?'],
    ['— J\'ai mal à la gorge depuis trois jours et je tousse beaucoup la nuit.', '— I\'ve had a sore throat for three days and I cough a lot at night.'],
    ['— Vous avez de la fièvre ?', '— Do you have a fever?'],
    ['— Oui, hier soir j\'avais trente-huit et demi. J\'ai pris du paracétamol.', '— Yes, last night I had thirty-eight and a half. I took acetaminophen.'],
    ['— Ouvrez la bouche, s\'il vous plaît… Votre gorge est très rouge. C\'est une angine.', '— Open your mouth, please… Your throat is very red. It\'s a throat infection.'],
    ['— C\'est grave, docteur ?', '— Is it serious, doctor?'],
    ['— Non, mais vous devrez prendre des antibiotiques pendant sept jours. Vous devriez aussi vous reposer et boire beaucoup.', '— No, but you will have to take antibiotics for seven days. You should also rest and drink a lot.'],
    ['— Est-ce que je pourrais avoir un certificat pour mon travail ?', '— Could I have a note for work?'],
    ['— Bien sûr. Si ça ne va pas mieux dans trois jours, revenez me voir.', '— Of course. If it\'s not better in three days, come back to see me.']
  ],
  gloss: [['la gorge', 'throat'], ['tousser', 'to cough'], ['une angine', 'throat infection'], ['grave', 'serious'], ['un certificat (médical)', 'medical note']],
  q: [
    ['m', 'Depuis quand le patient a-t-il mal à la gorge ?', ['trois jours', 'sept jours', 'hier soir', 'une semaine'], 0, '"depuis trois jours"'],
    ['t', 'Le patient n\'a pas de fièvre.', false, '"j\'avais trente-huit et demi"'],
    ['m', 'Pendant combien de temps doit-il prendre les antibiotiques ?', ['sept jours', 'trois jours', 'un mois', 'deux jours'], 0, '"pendant sept jours"'],
    ['m', 'Que demande le patient à la fin ?', ['un certificat pour son travail', 'un rendez-vous', 'du sirop', 'l\'adresse de la pharmacie'], 0, '"un certificat pour mon travail"'],
    ['t', 'Le médecin dit de revenir si ça ne va pas mieux dans trois jours.', true, '"Si ça ne va pas mieux dans trois jours, revenez me voir."']
  ]
},
{
  id: 's20', day: 20, lvl: 'B1', title: 'Une nouvelle vie', focus: 'all tenses: B1 bridge',
  lines: [
    ['Il y a cinq ans, Daniela a quitté le Brésil pour s\'installer à Vancouver.', 'Five years ago, Daniela left Brazil to settle in Vancouver.'],
    ['Au début, tout était difficile : elle ne parlait pas bien anglais, elle ne connaissait personne et il pleuvait tout le temps.', 'At first everything was hard: she didn\'t speak English well, she didn\'t know anyone and it rained all the time.'],
    ['Elle travaillait dans un restaurant le soir et elle suivait des cours le matin.', 'She worked in a restaurant in the evenings and took classes in the mornings.'],
    ['Un jour, une cliente qui venait souvent au restaurant lui a proposé un poste dans son agence de voyages.', 'One day, a customer who often came to the restaurant offered her a job at her travel agency.'],
    ['Daniela a accepté tout de suite, et c\'est là qu\'elle a découvert qu\'elle adorait organiser des voyages.', 'Daniela accepted immediately, and that\'s where she discovered she loved organizing trips.'],
    ['Depuis deux ans, elle apprend aussi le français, parce que beaucoup de ses clients viennent du Québec et de France.', 'For two years she has also been learning French, because many of her clients come from Quebec and France.'],
    ['Elle vient de réussir son examen de niveau B1 et elle est très fière d\'elle.', 'She has just passed her B1 exam and she\'s very proud of herself.'],
    ['L\'année prochaine, elle ouvrira sa propre agence. Elle sait que ce sera un défi.', 'Next year she will open her own agency. She knows it will be a challenge.'],
    ['« Si on m\'avait dit tout ça il y a cinq ans, je ne l\'aurais pas cru ! » dit-elle en riant.', '"If someone had told me all this five years ago, I wouldn\'t have believed it!" she says, laughing.'],
    ['Son conseil pour les nouveaux arrivants ? « Soyez patients, parlez avec tout le monde et n\'ayez pas peur de faire des erreurs. »', 'Her advice for newcomers? "Be patient, talk with everyone and don\'t be afraid of making mistakes."']
  ],
  gloss: [['s\'installer', 'to settle'], ['une agence de voyages', 'travel agency'], ['découvrir', 'to discover'], ['fier / fière', 'proud'], ['un défi', 'a challenge'], ['en riant', 'while laughing (gérondif, B1)']],
  q: [
    ['m', 'Quand Daniela est-elle arrivée à Vancouver ?', ['il y a cinq ans', 'il y a deux ans', 'l\'année dernière', 'il y a dix ans'], 0, '"Il y a cinq ans"'],
    ['m', 'Pourquoi le début était-il difficile ?', ['langue, solitude et pluie', 'trop de travail', 'elle était malade', 'elle n\'avait pas d\'appartement'], 0, 'Three reasons in the imparfait.'],
    ['m', 'Qui lui a proposé un poste ?', ['une cliente du restaurant', 'son professeur', 'son patron', 'une amie brésilienne'], 0, '"une cliente qui venait souvent au restaurant"'],
    ['t', 'Daniela apprend le français depuis cinq ans.', false, '"Depuis deux ans"'],
    ['t', 'Elle a déjà ouvert sa propre agence.', false, '"L\'année prochaine, elle ouvrira sa propre agence." (futur)'],
    ['m', '"Elle vient de réussir" signifie :', ['She has just passed', 'She is coming to pass', 'She will pass', 'She used to pass'], 0, 'venir de + infinitive = just did.']
  ]
}
];
