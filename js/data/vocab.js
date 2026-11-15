/* Flashcard decks. One card per line: French | English. Nouns carry their article (gender). */
// Stable ids: a card's id comes from its French text, so adding or reordering cards never shifts progress.
window.__fh = function (str) { let h = 5381; str = String(str); for (let i = 0; i < str.length; i++) h = ((h << 5) + h + str.charCodeAt(i)) >>> 0; return h.toString(36); };
window.DECKS = (function () {
  const raw = {
    d1: ['Introductions', `
bonjour | hello, good morning
bonsoir | good evening
salut | hi / bye (informal)
au revoir | goodbye
enchanté(e) | nice to meet you
je m'appelle… | my name is…
comment vous appelez-vous ? | what is your name? (formal)
comment ça va ? | how are you?
ça va bien, merci | I'm fine, thanks
s'il vous plaît / s'il te plaît | please (formal / informal)
merci beaucoup | thank you very much
de rien | you're welcome
excusez-moi | excuse me
un homme | a man
une femme | a woman
un ami / une amie | a friend
un étudiant / une étudiante | a student
un pays | a country
une ville | a city
la langue | the language
avoir faim / soif | to be hungry / thirsty
avoir froid / chaud | to be cold / hot
avoir peur | to be afraid
avoir … ans | to be … years old
d'où venez-vous ? | where are you from?`],
    d2: ['Work, study, city', `
le travail | work, job
un collègue | a colleague
un magasin | a store
le bureau | the office, the desk
l'université (f) | university
le cours | the class, course
les devoirs (m) | homework
un emploi | a job
à temps partiel | part-time
à temps plein | full-time
le centre-ville | downtown
le quartier | neighbourhood
la rue | the street
le soir | (in) the evening
le matin | (in) the morning
l'après-midi (m) | (in) the afternoon
parce que | because
pourquoi | why
quand | when
où | where
comment | how
combien | how much / many
ne … jamais | never
ne … plus | no longer
ne … rien | nothing`],
    d3: ['Places, transport, dates', `
la gare | train station
l'aéroport (m) | airport
l'arrêt de bus (m) | bus stop
le métro | subway
la voiture | car
le vélo | bike
à pied | on foot
le cinéma | cinema
la bibliothèque | library
la banque | bank
l'hôpital (m) | hospital
la pharmacie | pharmacy
le musée | museum
la plage | beach
le parc | park
lundi, mardi, mercredi | Monday, Tuesday, Wednesday
jeudi, vendredi | Thursday, Friday
samedi, dimanche | Saturday, Sunday
janvier, février, mars | January, February, March
juillet, août | July, August
aujourd'hui | today
demain | tomorrow
hier | yesterday
le week-end | the weekend
faire les courses | to go grocery shopping`],
    d4: ['Food, shopping', `
le pain | bread
le fromage | cheese
la viande | meat
le poulet | chicken
le poisson | fish
les légumes (m) | vegetables
les fruits (m) | fruit
une pomme | an apple
un œuf | an egg
le lait | milk
l'eau (f) | water
le sucre | sugar
le riz | rice
une bouteille de | a bottle of
un kilo de | a kilo of
un peu de | a little
beaucoup de | a lot of
assez de | enough
trop de | too much
ça coûte combien ? | how much is it?
c'est cher | it's expensive
payer par carte | to pay by card
en espèces | in cash
je voudrais… | I would like…
l'addition (f) | the bill (restaurant)`],
    d5: ['Family, description', `
le père / la mère | father / mother
les parents | parents, relatives
le frère / la sœur | brother / sister
le fils / la fille | son / daughter
le mari / la femme | husband / wife
le copain / la copine | boyfriend / girlfriend
les grands-parents | grandparents
l'oncle / la tante | uncle / aunt
le cousin / la cousine | cousin
grand(e) | tall, big
petit(e) | short, small
jeune | young
vieux / vieille | old
beau / belle | beautiful
gentil / gentille | kind
drôle | funny
sérieux / sérieuse | serious
sportif / sportive | sporty
timide | shy
paresseux / paresseuse | lazy
les cheveux (m) | hair
les yeux (m) | eyes
savoir | to know (facts, how to)
connaître | to know (people, places)
croire | to believe`],
    d6: ['Home, clothes', `
l'appartement (m) | apartment
la maison | house
la chambre | bedroom
la cuisine | kitchen
la salle de bains | bathroom
le salon | living room
le loyer | rent
le propriétaire | landlord, owner
le chauffage | heating
un meuble | a piece of furniture
le lit | bed
la fenêtre | window
la porte | door
un manteau | a coat
une veste | a jacket
un pull | a sweater
un pantalon | pants
une jupe | a skirt
une robe | a dress
des chaussures (f) | shoes
des bottes (f) | boots
mettre | to put on
porter | to wear
choisir | to choose
attendre | to wait (for)`],
    d7: ['Daily routine, time', `
se réveiller | to wake up
se lever | to get up
se doucher | to shower
se brosser les dents | to brush one's teeth
s'habiller | to get dressed
se dépêcher | to hurry
se reposer | to rest
se coucher | to go to bed
se promener | to go for a walk
s'amuser | to have fun
le petit-déjeuner | breakfast
le déjeuner | lunch
le dîner | dinner
tôt | early
tard | late
quelle heure est-il ? | what time is it?
et quart | quarter past
et demie | half past
moins le quart | quarter to
midi / minuit | noon / midnight
toujours | always
souvent | often
parfois | sometimes
d'abord | first
ensuite / puis | then`],
    d8: ['Plans, directions', `
aller + infinitif | going to (near future)
venir de + infinitif | to have just (done)
être en train de | to be in the middle of
ce soir | tonight
la semaine prochaine | next week
bientôt | soon
à gauche | left
à droite | right
tout droit | straight ahead
tourner | to turn
traverser | to cross
au coin de | at the corner of
en face de | opposite
à côté de | next to
près de / loin de | near / far from
le carrefour | intersection
le feu | traffic light
n'oublie pas ! | don't forget!
fais attention ! | be careful!
dépêche-toi ! | hurry up!
sois prudent(e) ! | be careful!
allons-y ! | let's go!
à tout à l'heure | see you later (today)
à demain | see you tomorrow
d'accord | OK`],
    d9: ['Last weekend (PC avoir)', `
j'ai fait | I did / made
j'ai pris | I took
j'ai vu | I saw
j'ai eu | I had
j'ai été | I was / have been
j'ai bu | I drank
j'ai lu | I read (past)
j'ai écrit | I wrote
j'ai mis | I put (on)
j'ai dit | I said
j'ai pu | I could / managed to
j'ai voulu | I wanted (and tried)
j'ai dû | I had to
j'ai reçu | I received
j'ai ouvert | I opened
j'ai compris | I understood
hier soir | last night
le week-end dernier | last weekend
la semaine dernière | last week
il y a deux jours | two days ago
déjà | already
pas encore | not yet
faire le ménage | to clean the house
retrouver des amis | to meet up with friends
un film d'action | an action movie`],
    d10: ['Trips, events (PC être)', `
je suis allé(e) | I went
je suis venu(e) | I came
je suis parti(e) | I left
je suis arrivé(e) | I arrived
je suis resté(e) | I stayed
je suis sorti(e) | I went out
je suis entré(e) | I went in
je suis monté(e) | I went up
je suis descendu(e) | I went down
je suis tombé(e) | I fell
je suis rentré(e) | I went home
je suis né(e) | I was born
il est mort | he died
elle est devenue | she became
je me suis levé(e) | I got up
le voyage | the trip
les vacances (f) | vacation
la valise | suitcase
le billet | ticket
l'hôtel (m) | hotel
la montagne | mountain
le lac | lake
la neige | snow
la vue | the view
se faire mal | to hurt oneself`],
    d11: ['Past experiences', `
tu as déjà… ? | have you ever…?
je n'ai jamais… | I have never…
une fois | once
plusieurs fois | several times
goûter | to taste
essayer | to try
rencontrer | to meet (for the first time)
découvrir | to discover
une expérience | an experience
un souvenir | a memory, souvenir
inoubliable | unforgettable
incroyable | incredible
magique | magical
décevant | disappointing
la dernière fois | the last time
la première fois | the first time
la prochaine fois | next time
presque | almost
l'étranger (m) | abroad
à l'étranger | abroad
le voisin / la voisine | neighbour
Noël | Christmas
une fête | a party, holiday
un anniversaire | a birthday
avoir de la chance | to be lucky`],
    d12: ['Childhood (imparfait)', `
quand j'étais petit(e) | when I was little
l'enfance (f) | childhood
un enfant | a child
d'habitude | usually
autrefois | in the past, formerly
chaque été | every summer
tous les jours | every day
le village | village
la campagne | countryside
les champs (m) | fields
l'école primaire (f) | primary school
le maître / la maîtresse | (primary) teacher
jouer à cache-cache | to play hide-and-seek
grimper aux arbres | to climb trees
se baigner | to swim, bathe
raconter une histoire | to tell a story
il y avait | there was / were
c'était | it was
il faisait beau | the weather was nice
il pleuvait | it was raining
j'avais peur | I was afraid
je n'aimais pas | I didn't like
heureux / heureuse | happy
timide | shy
gâté(e) | spoiled`],
    d13: ['Telling a story', `
un jour | one day
soudain | suddenly
tout à coup | all of a sudden
pendant que | while
alors | so, then
donc | therefore, so
mais | but
pourtant | however, yet
cependant | however
car | because (written)
à cause de | because of
grâce à | thanks to
finalement | finally
enfin | at last, finally
au début | at the beginning
à la fin | at the end
après | after
avant de + inf. | before (doing)
une panne | a breakdown
un accident | an accident
la police | the police
avoir peur | to be scared
se perdre | to get lost
retrouver | to find again
heureusement | fortunately`],
    d14: ['Friends, messages', `
envoyer un message | to send a message
répondre à | to answer
téléphoner à | to phone
appeler | to call
donner | to give
offrir | to give (a gift), to offer
prêter | to lend
emprunter | to borrow
montrer | to show
rendre | to give back
aider | to help
inviter | to invite
remercier | to thank
un cadeau | a gift
une carte | a card
une surprise | a surprise
un courriel | an email
un texto | a text message
une réunion | a meeting
se disputer | to argue
se réconcilier | to make up
embrasser | to kiss, hug
faire la bise | to greet with kisses on the cheeks
le meilleur ami | best friend
compter sur | to count on`],
    d15: ['Opinions, habits', `
penser à | to think about
penser que | to think that
à mon avis | in my opinion
je trouve que | I find that
avoir besoin de | to need
avoir envie de | to feel like
rêver de | to dream of
se souvenir de | to remember
s'occuper de | to take care of
s'intéresser à | to be interested in
décider de | to decide to
essayer de | to try to
arrêter de | to stop (doing)
commencer à | to start (doing)
apprendre à | to learn to
réussir à | to succeed in
jouer à | to play (sport, game)
jouer de | to play (instrument)
d'accord / pas d'accord | agree / disagree
on y va ! | let's go!
vas-y ! | go ahead!
j'en ai marre | I'm fed up (informal)
ça dépend | it depends
une habitude | a habit
comme d'habitude | as usual`],
    d16: ['Describing and choosing', `
plus … que | more … than
moins … que | less … than
aussi … que | as … as
autant de … que | as much / many … as
meilleur(e) | better (adjective)
mieux | better (adverb)
le meilleur / la meilleure | the best
pire | worse
le pire | the worst
qui | who, which (subject)
que | whom, which (object)
où | where, when
dont | of which, whose
un salaire | a salary
les impôts (m) | taxes
une entreprise | a company
le poste | position, job
une offre | an offer
une occasion | an opportunity
lentement | slowly
rapidement | quickly
vraiment | really
couramment | fluently
récemment | recently
préférer | to prefer`],
    d17: ['Time and future', `
depuis | since, for (ongoing)
pendant | during, for
il y a | ago
dans | in (from now)
en | in (time taken)
ça fait … que | it's been … since
l'année prochaine | next year
le mois prochain | next month
un jour | one day (future)
à l'avenir | in the future
l'avenir (m) | the future
un projet | a plan, project
un diplôme | a diploma
passer un examen | to take an exam
réussir un examen | to pass an exam
échouer à | to fail
améliorer | to improve
durer | to last
loger | to stay, lodge
la prévision | the forecast
il pleuvra | it will rain
il fera beau | the weather will be nice
il neigera | it will snow
je serai | I will be
j'aurai | I will have`],
    d18: ['Advice, polite requests', `
je voudrais | I would like
j'aimerais | I would like (wish)
pourriez-vous… ? | could you…?
est-ce que je pourrais… ? | could I…?
tu devrais | you should
vous devriez | you should (formal)
à ta place | if I were you
si j'étais toi | if I were you
ce serait | it would be
je te conseille de | I advise you to
un conseil | a piece of advice
proposer | to suggest
épuisé(e) | exhausted
stressé(e) | stressed
la santé | health
le patron / la patronne | boss
un emploi | a job
démissionner | to resign
refuser | to refuse
accepter | to accept
j'irai | I will go
je ferai | I will do
je viendrai | I will come
je verrai | I will see
il faudra | it will be necessary`],
    d19: ['Everyday situations', `
avoir mal à la tête | to have a headache
avoir mal au ventre | to have a stomach ache
avoir mal à la gorge | to have a sore throat
tousser | to cough
la fièvre | fever
un rhume | a cold
la grippe | the flu
un médicament | a medicine
une ordonnance | a prescription
se sentir | to feel
prendre rendez-vous | to make an appointment
annuler | to cancel
reporter | to postpone
la taille | size (clothes)
la pointure | shoe size
essayer | to try (on)
la cabine d'essayage | fitting room
rembourser | to refund
échanger | to exchange
le reçu | the receipt
ça ne marche pas | it doesn't work
en panne | broken down
se plaindre | to complain
satisfait(e) | satisfied
le service à la clientèle | customer service`],
    d20: ['B1 bridge', `
s'installer | to settle (in)
un nouvel arrivant | a newcomer
s'adapter | to adapt
un défi | a challenge
fier / fière | proud
la réussite | success
l'échec (m) | failure
réaliser | to achieve, carry out
tenter | to attempt
il faut que | it is necessary that (+ subjunctive)
bien que | although (+ subjunctive)
d'un côté… de l'autre | on one hand… on the other
par contre | on the other hand
en revanche | however, by contrast
en effet | indeed
c'est-à-dire | that is to say
par exemple | for example
selon moi | in my view
je suis convaincu(e) que | I am convinced that
il me semble que | it seems to me that
en riant | while laughing
avoir l'habitude de | to be used to
se rendre compte | to realize
faire des progrès | to make progress
faire une erreur | to make a mistake`]
  };
  const out = {};
  Object.keys(raw).forEach((k) => {
    const [name, body] = raw[k];
    out[k] = { id: k, name, day: +k.slice(1), cards: body.trim().split('\n').map((l, i) => { const [fr, en] = l.split('|').map((s) => s.trim()); return { id: k + '-' + window.__fh(fr), old: k + '-' + i, fr, en }; }) };
  });
  return out;
})();
