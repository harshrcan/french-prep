/* Native expressions. Each line: French | meaning | example | register (std = everyday, fam = casual, qc = Quebec, idiom) */
window.EXPRESSIONS = [
{ id: 'react', title: 'Reacting in conversation', lines: `Ah bon ? | Really? | — Il part demain. — Ah bon ? | std
C'est vrai ? | Is that true? | — J'ai eu 95 %. — C'est vrai ? Bravo ! | std
Sans blague ! | No kidding! | Sans blague, tu as vu Céline Dion ? | fam
Ça alors ! | Well, I never! | Ça alors, tu es encore là ! | std
Tant mieux ! | Good, so much the better | Il fait beau demain ? Tant mieux ! | std
Tant pis. | Too bad, never mind | Le magasin est fermé ? Tant pis. | std
Quelle chance ! | How lucky! | Tu as gagné des billets ? Quelle chance ! | std
Dommage ! | What a shame! | Tu ne peux pas venir ? Dommage ! | std
Pas possible ! | No way! | Il a démissionné ? Pas possible ! | fam
Génial ! | Awesome! | On part samedi ? Génial ! | fam
Oh là là ! | Oh dear / wow | Oh là là, quel embouteillage ! | std
C'est pas vrai ! | I can't believe it! | C'est pas vrai, j'ai oublié mes clés ! | fam` },
{ id: 'agree', title: 'Agreeing and disagreeing', lines: `Tout à fait. | Absolutely. | — C'est cher. — Tout à fait. | std
Exactement. | Exactly. | Exactement, c'est ce que je pense. | std
Je suis d'accord avec toi. | I agree with you. | Je suis d'accord avec toi sur ce point. | std
Bien sûr ! | Of course! | Tu viens ? Bien sûr ! | std
Carrément ! | Totally! | — On commande une pizza ? — Carrément ! | fam
Pas du tout. | Not at all. | Je ne suis pas fatigué, pas du tout. | std
Je ne suis pas sûr. | I'm not sure. | Je ne suis pas sûr que ce soit une bonne idée. | std
Ça se discute. | That's debatable. | C'est la meilleure ville ? Ça se discute. | std
Tu rigoles ! | You're joking! | Moi, chanter ? Tu rigoles ! | fam
Si tu le dis… | If you say so… | Il est honnête ? Si tu le dis… | std
Je vois ce que tu veux dire. | I see what you mean. | Je vois ce que tu veux dire, mais… | std
Mouais… | Meh, not convinced | — C'est un super film. — Mouais… | fam` },
{ id: 'fillers', title: 'Fillers and sounding natural', lines: `Euh… | Um… | Euh… je ne sais pas trop. | std
Bon… | Well… / OK so… | Bon, on y va ? | std
Ben… | Well… | Ben, je ne sais pas. | fam
En fait… | Actually… | En fait, je préfère le thé. | std
Du coup… | So… / As a result… | Il pleuvait, du coup on est restés. | fam
Genre… | Like… | C'était genre super long. | fam
Tu vois ? | You know? | C'est compliqué, tu vois ? | std
Enfin… | I mean… | Il est sympa, enfin, la plupart du temps. | std
Bref… | Anyway… | Bref, on a raté le bus. | std
Voilà. | There you go / That's it. | J'ai fini le projet, voilà. | std
Quoi. | (sentence ending, emphasis) | C'était bizarre, quoi. | fam
Disons que… | Let's say that… | Disons que ce n'était pas facile. | std` },
{ id: 'feelings', title: 'Feelings and moods', lines: `J'en ai marre. | I'm fed up. | J'en ai marre de la pluie ! | fam
Je suis crevé. | I'm exhausted. | Après le travail, je suis crevé. | fam
J'ai la flemme. | I can't be bothered. | J'ai la flemme de cuisiner ce soir. | fam
Ça me stresse. | It stresses me out. | Les examens, ça me stresse. | std
Ça me fait plaisir. | It makes me happy / My pleasure. | Ça me fait plaisir de te voir. | std
Je suis aux anges. | I'm over the moon. | J'ai réussi, je suis aux anges ! | idiom
J'ai le cafard. | I'm feeling down. | L'hiver, j'ai souvent le cafard. | idiom
Ça m'énerve. | It annoys me. | Ça m'énerve quand le bus est en retard. | std
Je suis mort de rire. | I'm dying of laughter. | Ton message, j'étais mort de rire ! | fam
J'ai hâte ! | I can't wait! | Les vacances ? J'ai hâte ! | std
Ça me manque. | I miss it. | La cuisine de ma mère, ça me manque. | std
Je m'en fiche. | I don't care. | Le prix, je m'en fiche. | fam` },
{ id: 'daily', title: 'Everyday life', lines: `Ça marche ! | Works for me / OK! | — Demain 10 h ? — Ça marche ! | std
Pas de souci. | No problem. | Merci ! — Pas de souci. | std
Ça roule ? | All good? / How's it going? | Salut, ça roule ? | fam
À tout à l'heure ! | See you later (today)! | Je vais au magasin, à tout à l'heure ! | std
À plus ! | See you! | Bon, à plus ! | fam
On se tient au courant. | Let's keep each other posted. | Pour samedi, on se tient au courant. | std
Je reviens tout de suite. | I'll be right back. | Attends, je reviens tout de suite. | std
Ça te dit ? | Do you feel like it? | Un café, ça te dit ? | std
Je t'invite. | My treat. | Non, non, je t'invite ! | std
C'est pas grave. | It's no big deal. | Tu es en retard ? C'est pas grave. | fam
Ça dépend. | It depends. | Je viens ? Ça dépend de l'heure. | std
Laisse tomber. | Forget it. | Laisse tomber, ce n'est pas important. | fam` },
{ id: 'idioms', title: 'Common idioms', lines: `Coûter les yeux de la tête | To cost an arm and a leg | Les loyers coûtent les yeux de la tête. | idiom
Poser un lapin | To stand someone up | Il m'a posé un lapin hier soir. | idiom
Avoir un poil dans la main | To be lazy | Mon colocataire a un poil dans la main. | idiom
Tomber dans les pommes | To faint | Il faisait si chaud qu'elle est tombée dans les pommes. | idiom
Il pleut des cordes | It's pouring rain | Prends un parapluie, il pleut des cordes. | idiom
Avoir la tête dans les nuages | To have one's head in the clouds | Il a toujours la tête dans les nuages. | idiom
Mettre les pieds dans le plat | To put your foot in it | J'ai parlé de la surprise… j'ai mis les pieds dans le plat. | idiom
Ce n'est pas la mer à boire | It's not that hard | Le TCF ? Ce n'est pas la mer à boire. | idiom
Avoir le coup de foudre | To fall in love at first sight | J'ai eu le coup de foudre pour Montréal. | idiom
Tirer les vers du nez | To worm information out of someone | Elle m'a tiré les vers du nez. | idiom
Faire la grasse matinée | To sleep in | Dimanche, je fais la grasse matinée. | idiom
Être dans la lune | To be daydreaming | Désolé, j'étais dans la lune. | idiom` },
{ id: 'quebec', title: 'Québec French', lines: `C'est le fun ! | It's fun! | Le festival, c'était vraiment le fun ! | qc
Bonne fin de semaine ! | Have a good weekend! | Merci, bonne fin de semaine ! | qc
Mon chum / ma blonde | My boyfriend / my girlfriend | Ma blonde apprend le français aussi. | qc
Magasiner | To go shopping | On va magasiner samedi ? | qc
Le dépanneur | Corner store | Je vais au dépanneur acheter du lait. | qc
Il fait frette ! | It's freezing! | Mets ta tuque, il fait frette ! | qc
Avoir de la misère | To have a hard time | J'ai de la misère avec le subjonctif. | qc
Pantoute | Not at all | Je ne suis pas fatigué pantoute. | qc
Char | Car | Mon char est en panne. | qc
Bienvenue ! (= de rien) | You're welcome! | — Merci ! — Bienvenue ! | qc
C'est plate. | It's boring / too bad. | Il pleut toute la fin de semaine, c'est plate. | qc
Déjeuner / dîner / souper | Breakfast / lunch / dinner | On soupe à six heures. | qc` },
{ id: 'opinion', title: 'Opinions like a native (B1)', lines: `À mon avis… | In my opinion… | À mon avis, c'est trop cher. | std
Pour moi, c'est clair : … | For me, it's clear: … | Pour moi, c'est clair : il faut agir. | std
Je trouve que… | I find that… | Je trouve que ce film est trop long. | std
Il me semble que… | It seems to me that… | Il me semble que tu as raison. | std
Ce qui me dérange, c'est… | What bothers me is… | Ce qui me dérange, c'est le bruit. | std
Le truc, c'est que… | The thing is… | Le truc, c'est que je n'ai pas le temps. | fam
Ça vaut le coup. | It's worth it. | Ce cours, ça vaut le coup. | std
Ça ne vaut pas la peine. | It's not worth it. | Ça ne vaut pas la peine d'y aller en voiture. | std
D'un côté…, de l'autre… | On one hand…, on the other… | D'un côté c'est pratique, de l'autre c'est cher. | std
Je comprends, mais… | I understand, but… | Je comprends, mais je ne suis pas d'accord. | std
Franchement… | Honestly… | Franchement, je n'ai pas aimé. | std
Il faut voir. | We'll have to see. | Est-ce que ça va marcher ? Il faut voir. | std` }
];
