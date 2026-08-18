import type { FaqCategory } from './faq'

// Genuinely French-authored content — not a translation of faq.ts. Category
// slugs/order stay identical to the English file (used as stable jump-nav
// anchors); questions and phrasing follow real French safari-search
// patterns (from the Search Console export: "safaris en famille", "prix
// d'un safari en tanzanie", "safari kenya ou tanzanie", "tout compris",
// "circuit sur mesure").
export const faqCategories: FaqCategory[] = [
  {
    slug: 'family-and-group-safaris',
    title: 'Safaris en Famille & en Groupe',
    description: 'Safaris avec enfants, voyages multigénérationnels et petits groupes.',
    icon: 'Users',
    items: [
      {
        q: 'La Tanzanie est-elle sûre pour un safari en famille avec des enfants ?',
        a: "Oui — la Tanzanie est l'une des destinations de safari en famille les mieux établies d'Afrique. Le principal risque à gérer est le paludisme, la plupart des familles voyagent donc avec un traitement préventif et privilégient, quand c'est possible, des camps en zone d'altitude à risque plus faible. Les bons opérateurs utilisent des véhicules privés (pas de safaris partagés), raccourcissent les temps de trajet pour les plus jeunes, et choisissent des lodges familiaux avec chambres communicantes plutôt que des doubles standards. Beaucoup de camps fixent un âge minimum (souvent 6-8 ans) pour les marches guidées, mais les game drives en véhicule restent ouverts à tout âge.",
        relatedLinks: [{ label: 'Safari de Luxe en Famille (10 Jours)', href: '/safaris/10-days-luxury-family' }],
      },
      {
        q: 'Quel est le meilleur circuit safari pour une famille avec de jeunes enfants ?',
        a: "Le meilleur circuit safari en famille reste dans le Circuit Nord de la Tanzanie (Serengeti, Ngorongoro, Tarangire, Lac Manyara) pour limiter les longs trajets, utilise des 4x4 privés plutôt que des véhicules partagés, et prévoit du temps calme dans chaque camp — piscine, marches nature pour enfants, programmes junior ranger — plutôt qu'un enchaînement de game drives. Un guide privé capable d'adapter le rythme de la journée à l'attention d'un enfant change plus la donne que le choix précis des parcs.",
        relatedLinks: [{ label: 'Destinations par Circuit', href: '/destinations/tanzania' }],
      },
      {
        q: 'Combien de jours doit durer un safari en famille ?',
        a: "La plupart des safaris en famille durent 5 à 7 jours — assez pour couvrir 2 à 3 parcs sans se presser, assez court pour retenir l'attention des plus jeunes et gérer le décalage horaire. Les familles qui associent le safari à une extension plage à Zanzibar ajoutent souvent 3 à 4 jours de plus, les jeunes enfants supportant généralement mieux un séjour balnéaire qu'un enchaînement de game drives.",
      },
      {
        q: 'Peut-on organiser un safari en famille avec plusieurs générations, grands-parents inclus ?',
        a: "Oui — les voyages multigénérationnels et en petit groupe sont courants, et les camps s'adaptent généralement à une large tranche d'âge sur un même circuit. Le principal enjeu est le rythme : un voyage pensé pour un grand-parent de 70 ans et un petit-enfant de 6 ans fonctionne mieux avec des trajets plus courts, des chambres facilement accessibles (moins de marches, tentes de plain-pied) et des jours de repos intégrés plutôt qu'un programme pensé pour des voyageurs solos en pleine forme.",
        relatedLinks: [{ label: 'Safaris Seniors, Anniversaires & Groupes', href: '/safaris/12-day-seniors-anniversary-groups-safari' }],
      },
      {
        q: "Qu'est-ce qui est inclus dans le prix d'un safari en famille tout compris ?",
        a: "Un safari en famille bien construit inclut généralement un véhicule privé et un guide pour tout le séjour, tous les frais de parc et de conservation, l'hébergement, la plupart ou la totalité des repas, et les transferts internes. Ce qui n'est généralement pas inclus : les vols internationaux, les visas, les pourboires, et les options comme un vol en montgolfière. Demandez toujours si le prix annoncé est par personne ou par famille, car la tarification des chambres familiales varie beaucoup d'un camp à l'autre.",
      },
    ],
  },
  {
    slug: 'best-time-and-great-migration',
    title: 'Meilleure Période & la Grande Migration',
    description: 'Saisons, météo, et quand voir la migration des gnous.',
    icon: 'Calendar',
    items: [
      {
        q: 'Quelle est la meilleure période pour voir les traversées de rivière de la migration ?',
        a: "Cela dépend de l'étape de la migration que vous voulez voir. Les spectaculaires traversées de la rivière Mara ont lieu environ de juillet à octobre dans le nord du Serengeti, quand plus d'un million de gnous remontent vers le Kenya. La saison des naissances — sans doute la période la plus riche en action prédateurs — se déroule de janvier à mars dans le sud du Serengeti (la région de Ndutu). Il n'y a pas un seul « meilleur mois » pour toute la migration, puisque c'est un événement continu qui se déplace toute l'année.",
        relatedLinks: [{ label: 'Parc National du Serengeti', href: '/destinations/serengeti' }],
      },
      {
        q: 'Quand a lieu la Grande Migration en Tanzanie ?',
        a: "La Grande Migration se déroule quelque part dans l'écosystème du Serengeti chaque mois de l'année — c'est un cycle continu, pas un événement avec une date de début et de fin. En résumé : naissances au sud de janvier à mars, déplacement vers le nord à travers le Serengeti central d'avril à juin, traversées de rivière au nord de juillet à octobre, et retour vers le sud à partir de novembre environ. La position exacte des troupeaux change chaque semaine selon les pluies, donc le calendrier précis varie d'une année à l'autre.",
      },
      {
        q: 'Quel est le meilleur mois pour visiter le Serengeti ?',
        a: "Il n'y a pas un mois universellement « meilleur » — cela dépend de ce que vous voulez voir. Pour les traversées de rivière, visez août ou septembre. Pour la saison des naissances et la plus forte densité de prédateurs, janvier à mars. Pour moins de monde et des paysages verdoyants, les petites pluies de novembre sont sous-estimées. Juin et juillet offrent un bon compromis : belle météo, troupeaux de la migration dans le Serengeti central et occidental, et moins de monde qu'en plein mois d'août.",
      },
      {
        q: 'La Tanzanie est-elle une destination de safari toute l\'année ?',
        a: "Oui. La Tanzanie n'a pas vraiment de basse saison pour l'observation de la faune — les saisons sèches (juin-octobre et janvier-février) concentrent les animaux autour des points d'eau, facilitant les observations, tandis que les saisons des pluies (mars-mai, novembre) apportent des paysages verdoyants, des naissances d'animaux, et des prix et une fréquentation nettement plus bas. Les grandes pluies (mars-avril) sont la période la plus calme, la seule où certains camps isolés ferment, mais les circuits principaux restent ouverts.",
      },
      {
        q: 'Quand a lieu la saison des naissances dans le Serengeti et pourquoi est-ce important ?',
        a: "La saison des naissances se déroule environ de janvier à mars dans les plaines herbeuses du sud du Serengeti et la région de Ndutu, où jusqu'à 8 000 gnous peuvent naître en une seule journée. C'est la période où la concentration de prédateurs — lions, guépards, hyènes — est la plus forte sur tout le parcours de la migration, l'une des meilleures fenêtres pour l'action prédateurs, même s'il n'y a pas de traversées de rivière à cette période.",
      },
    ],
  },
  {
    slug: 'planning-costs-and-comparisons',
    title: 'Organisation, Prix & Kenya vs. Tanzanie',
    description: "Le prix d'un safari, ce qui est inclus, et comment choisir entre les deux pays.",
    icon: 'DollarSign',
    items: [
      {
        q: "Quel est le prix d'un safari en Tanzanie ?",
        a: "Le prix d'un safari en Tanzanie varie beaucoup selon la saison, la taille du groupe et le style de camp. À titre indicatif, un safari milieu de gamme bien organisé coûte environ 400-600 $ par personne et par jour, un safari de luxe peut atteindre 700-1200 $+ par personne et par jour, et un safari en camping économique peut descendre sous 300 $ par jour. Le prix par personne baisse nettement avec un groupe plus grand, puisque le véhicule privé, le guide et les frais de parc sont partagés. Le tarif exact dépend beaucoup de la saison choisie — la haute saison (juin-octobre, janvier-février) affiche des prix plus élevés.",
        relatedLinks: [{ label: 'Voir les Safaris', href: '/safaris' }],
      },
      {
        q: 'Kenya ou Tanzanie — quelle destination choisir pour un safari ?',
        a: "Aucune n'est objectivement « meilleure » — elles répondent à des priorités différentes. La Tanzanie compte plus de surface de parcs au total, le cratère du Ngorongoro, Zanzibar en extension plage, et accueille la migration une grande partie de l'année. Le Kenya a le Masai Mara (qui fait partie du même écosystème de migration, idéal pour les traversées de rivière de juillet à octobre), des vols généralement plus courts depuis l'Europe, et une infrastructure safari parfois plus développée. Beaucoup de voyageurs combinent les deux pays en un seul voyage plutôt que de choisir.",
        relatedLinks: [{ label: 'Destinations en Tanzanie', href: '/destinations/tanzania' }, { label: 'Safaris au Kenya', href: '/kenya' }],
      },
      {
        q: "Combien de jours faut-il pour un safari en Tanzanie ?",
        a: "7 jours est la durée idéale pour couvrir le Circuit Nord (Serengeti, Ngorongoro, Tarangire) sans se presser. 4-5 jours conviennent pour un séjour ciblé sur 2 parcs. 10-14 jours permettent de combiner le nord avec le circuit sud ou ouest, ou d'ajouter Zanzibar ou une ascension du Kilimandjaro. Moins de 4 jours de safari donne souvent l'impression de beaucoup rouler pour trop peu de temps dans les parcs eux-mêmes.",
      },
      {
        q: "Qu'est-ce qui est inclus dans un safari tout compris, et qu'est-ce qui ne l'est pas ?",
        a: "La plupart des circuits safari en Tanzanie incluent : un véhicule privé avec chauffeur-guide, tous les frais de parc et de conservation, l'hébergement, et la plupart des repas. Ne sont généralement PAS inclus : les vols internationaux, le visa tanzanien, l'assurance voyage, les pourboires pour les guides et le personnel des camps, les boissons alcoolisées, et les options comme un vol en montgolfière ou une extension plage à Zanzibar. Vérifiez toujours précisément ce qui est inclus avant de comparer des devis, car « tout compris » ne veut pas dire la même chose selon les opérateurs.",
      },
      {
        q: 'Est-il moins cher de réserver directement avec un opérateur local ?',
        a: "Généralement oui — réserver directement avec un opérateur local agréé basé en Tanzanie évite la marge que prennent les plateformes de réservation et agences internationales, souvent 15 à 30 %. En contrepartie, il faut vérifier soi-même les licences, les avis et la qualité des véhicules et des guides, puisqu'on perd le filtre de la plateforme. Un opérateur local basé à Arusha a aussi généralement une meilleure connaissance en temps réel des conditions dans les parcs et de la position actuelle de la migration.",
      },
    ],
  },
  {
    slug: 'tanzania-circuits-and-wildlife',
    title: 'Circuits & Faune de Tanzanie',
    description: 'Le Big Five, les circuits safari en Tanzanie, et ce qui vous attend dans chaque parc.',
    icon: 'Binoculars',
    items: [
      {
        q: 'Quels sont les Big Five et où les voir en Tanzanie ?',
        a: "Les Big Five — lion, léopard, éléphant, buffle et rhinocéros — sont tous présents en Tanzanie, même si le rhinocéros reste le plus rare, sa population de rhinocéros noirs étant faible et concentrée presque entièrement dans le cratère du Ngorongoro. Lion, éléphant et buffle sont fiables dans le Serengeti, le Ngorongoro et le Tarangire. Le léopard est le plus difficile à observer partout — le secteur de Seronera, au centre du Serengeti, reste le plus fiable, grâce à sa végétation riveraine.",
        relatedLinks: [{ label: 'Parc National du Serengeti', href: '/destinations/serengeti' }, { label: 'Cratère du Ngorongoro', href: '/destinations/ngorongoro' }],
      },
      {
        q: 'Quelle est la différence entre le cratère du Ngorongoro et le Serengeti ?',
        a: "Le Ngorongoro est un écosystème compact et autonome — une caldeira volcanique effondrée d'environ 260 km² au fond du cratère — où la faune est exceptionnellement concentrée et observable en une seule journée très productive. Le Serengeti est immense (près de 15 000 km²), des plaines ouvertes où la migration se déplace et où les observations s'étalent sur plusieurs jours. La plupart des circuits combinent les deux : le Ngorongoro pour une journée dense de Big Five, puis le Serengeti pour l'expérience des grands espaces et de la migration.",
        relatedLinks: [{ label: 'Cratère du Ngorongoro', href: '/destinations/ngorongoro' }],
      },
      {
        q: 'Quelle est la différence entre les circuits Nord, Sud et Ouest de Tanzanie ?',
        a: "Le Circuit Nord (Serengeti, Ngorongoro, Tarangire, Lac Manyara) est l'itinéraire classique et le plus visité de Tanzanie — meilleures infrastructures, la migration, Big Five fiable. Le Circuit Sud (Ruaha, Nyerere/Selous) est reculé, peu fréquenté et plus sauvage — des parcs plus vastes et plus dispersés, avec beaucoup moins de véhicules. Le Circuit Ouest (Mahale, Katavi, Gombe) est le territoire du trekking chimpanzés, accessible surtout par petit avion, et le plus hors des sentiers battus des trois.",
      },
      {
        q: 'Le circuit sud (Ruaha, Nyerere/Selous) vaut-il le détour ?',
        a: "Oui, en particulier pour les voyageurs qui reviennent en Tanzanie ou recherchent un safari plus calme et exclusif — Ruaha est le plus grand parc national de Tanzanie et l'un des meilleurs pour le lion et le lycaon, et Nyerere (l'ancien Selous) est la plus grande zone protégée d'Afrique, connue pour ses safaris en bateau en plus des game drives. Les deux voient une fraction du nombre de visiteurs du Circuit Nord. La contrepartie : l'accès se fait surtout en petit avion plutôt qu'en voiture, ce qui augmente le coût.",
        relatedLinks: [{ label: 'Parc National de Ruaha', href: '/destinations/ruaha' }, { label: 'Parc National de Nyerere (Selous)', href: '/destinations/nyerere' }],
      },
      {
        q: 'Quelle faune voir dans le parc national de Tarangire ?',
        a: "Le Tarangire est surtout connu pour ses troupeaux d'éléphants — parmi les plus grandes concentrations de Tanzanie, en particulier en saison sèche (juin-octobre) quand ils se rassemblent le long de la rivière Tarangire — ainsi que pour ses baobabs anciens caractéristiques. C'est aussi un bon parc pour le lion, et l'un des meilleurs du Circuit Nord pour observer les petites antilopes moins communes. Il est généralement visité en complément de 1 à 2 jours du Serengeti et du Ngorongoro.",
        relatedLinks: [{ label: 'Parc National de Tarangire', href: '/destinations/tarangire' }],
      },
    ],
  },
  {
    slug: 'kenya-and-rwanda',
    title: 'Safaris au Kenya & au Rwanda',
    description: 'Combiner les pays, le Masai Mara, et le trek gorilles.',
    icon: 'Compass',
    items: [
      {
        q: 'Peut-on combiner un safari au Kenya et en Tanzanie en un seul voyage ?',
        a: "Oui, et c'est une façon courante de voir à la fois le Serengeti et le Masai Mara — techniquement un seul et même écosystème, séparé par une frontière internationale. Le passage de la frontière nécessite un vol en petit avion programmé ou un long trajet par la route, avec des frais d'entrée de parc séparés de chaque côté ; la plupart des circuits combinés prévoient donc au moins 10 à 12 jours au total pour ne pas se sentir pressé.",
        relatedLinks: [{ label: 'Safari Kenya & Tanzanie (10 Jours)', href: '/safaris/10-day-kenya-tanzania-safari' }],
      },
      {
        q: 'Combien coûte le trek gorilles au Rwanda, et faut-il un permis ?',
        a: "Oui, un permis est obligatoire et en quantité limitée — le Parc National des Volcans, au Rwanda, délivre un nombre fixe de permis de trek gorilles par jour, actuellement au tarif de 1 500 $ par personne, incluant une heure avec une famille de gorilles habituée, les frais de parc et un guide. Il est conseillé de réserver bien à l'avance, surtout pour juillet-septembre et décembre-février, les périodes les plus sèches et les plus demandées.",
        relatedLinks: [{ label: 'Trek Gorilles au Rwanda (4 Jours)', href: '/safaris/4-day-rwanda-gorilla-trekking' }, { label: 'Parc National des Volcans', href: '/destinations/volcanoes' }],
      },
      {
        q: 'Quelle est la meilleure période pour voir les gorilles au Rwanda ?',
        a: "Le trek gorilles est possible toute l'année puisque les permis ne sont pas saisonniers, mais les saisons sèches — juin-septembre et décembre-février — rendent la randonnée plus facile et moins boueuse sur les pentes escarpées du Parc National des Volcans. Les mois plus humides (mars-mai, octobre-novembre) signifient des sentiers plus difficiles mais nettement moins de touristes, et parfois des hébergements moins chers à proximité.",
      },
      {
        q: 'Le Masai Mara, est-ce la même chose que le Serengeti ?',
        a: "Ils font partie du même écosystème continu — le Masai Mara est en réalité le prolongement kenyan, au nord, du Serengeti — séparé seulement par une frontière internationale que la faune ignore totalement. Le Mara est plus petit et accueille les troupeaux de la migration pendant la saison des traversées de rivière (environ juillet-octobre) ; le Serengeti est bien plus vaste et héberge la migration le reste de l'année, saison des naissances comprise.",
      },
      {
        q: 'Le trek gorilles est-il physiquement exigeant ?',
        a: "Cela varie beaucoup selon les jours — les familles de gorilles sont suivies, pas fixées à un endroit, donc la randonnée peut durer de moins d'une heure à 4-5 heures de marche dans chaque sens, sur un terrain volcanique escarpé et parfois boueux, en altitude (le Parc National des Volcans se situe entre 2 400 et 4 500 m). Une bonne condition physique est un vrai atout ; des porteurs sont disponibles pour porter les sacs et prêter main-forte sur les passages les plus raides.",
      },
    ],
  },
  {
    slug: 'kilimanjaro-and-trekking',
    title: 'Kilimandjaro & Trekking',
    description: 'Itinéraires, prix, difficulté et taux de réussite pour gravir le Kilimandjaro.',
    icon: 'Mountain',
    items: [
      {
        q: "Quel est l'itinéraire le plus facile pour gravir le Kilimandjaro ?",
        a: "La voie Machame est la plus populaire et offre un bon équilibre entre paysages et acclimatation, mais la voie Lemosho est généralement considérée comme la plus facile en termes de réussite au sommet, surtout parce que son itinéraire plus long (7-8 jours) laisse plus de temps au corps pour s'acclimater. Marangu est la seule voie avec des refuges plutôt que des tentes et une pente quotidienne plus douce, mais son itinéraire standard plus court signifie moins de temps d'acclimatation, ce qui peut compenser la marche plus facile.",
        relatedLinks: [{ label: 'Kilimandjaro Voie Machame', href: '/trekking/machame' }, { label: 'Tous les Itinéraires du Kilimandjaro', href: '/trekking' }],
      },
      {
        q: "Quel est le prix pour gravir le Kilimandjaro ?",
        a: "Le prix d'une ascension du Kilimandjaro varie généralement de 2 000-2 500 $ par personne pour une ascension en groupe économique à milieu de gamme, jusqu'à 3 500-5 000 $+ pour un itinéraire privé, plus long et mieux encadré, avec un meilleur ratio guide/grimpeur. Les frais de parc à eux seuls (fixés par l'autorité des parcs nationaux tanzaniens) représentent une grande part fixe de tout devis, donc les ascensions très bon marché signifient souvent des coupes sur les salaires de l'équipe, l'équipement ou les jours d'acclimatation — ce qui affecte à la fois la sécurité et la réussite au sommet.",
        relatedLinks: [{ label: 'Kilimandjaro Voie Machame', href: '/trekking/machame' }],
      },
      {
        q: 'Quel est le taux de réussite pour atteindre le sommet du Kilimandjaro ?',
        a: "Le taux de réussite varie énormément selon la durée de l'itinéraire : les itinéraires courts de 5 jours affichent des taux de réussite aussi bas que 40-50 % faute d'acclimatation suffisante, tandis que les itinéraires bien rythmés de 7-8 jours comme Lemosho affichent des taux de réussite de 85-90 %+. Le facteur le plus déterminant pour atteindre le sommet n'est pas la condition physique — c'est de laisser au corps assez de jours pour s'acclimater à l'altitude, ce qui explique pourquoi les itinéraires plus longs sont systématiquement plus performants.",
      },
      {
        q: 'Combien de jours faut-il pour gravir le Kilimandjaro ?',
        a: "La plupart des itinéraires prennent 6 à 8 jours aller-retour, bien que Marangu puisse se faire en 5 jours et que des options plus longues comme un Lemosho complet ou la voie du Circuit Nord puissent durer 8 à 9 jours. Ajouter même un seul jour d'acclimatation supplémentaire améliore nettement le confort et la réussite au sommet, c'est pourquoi la plupart des opérateurs expérimentés déconseillent l'itinéraire le plus court disponible sur une voie donnée.",
      },
      {
        q: "Faut-il être un randonneur expérimenté pour gravir le Kilimandjaro ?",
        a: "Aucune expérience d'escalade technique ni d'équipement spécifique n'est nécessaire sur les itinéraires de trekking standards — c'est une longue marche en haute altitude, pas une ascension technique. Cela dit, un bon niveau de forme physique de base (pouvoir marcher confortablement 5 à 7 heures par jour) fait une vraie différence sur le plaisir du trek, et l'altitude affecte la condition physique de façon imprévisible, donc même les randonneurs aguerris doivent prendre l'acclimatation au sérieux.",
      },
    ],
  },
  {
    slug: 'honeymoon-zanzibar-and-experiences',
    title: 'Lune de Miel, Zanzibar & Expériences Spéciales',
    description: 'Safaris lune de miel, extensions plage, montgolfière, et voyages photo.',
    icon: 'Heart',
    items: [
      {
        q: 'Quel est le meilleur circuit lune de miel combinant safari et plage ?',
        a: "La combinaison classique est 4-5 nuits de safari dans le Circuit Nord (Serengeti et Ngorongoro couvrent efficacement l'essentiel) suivies de 4-5 nuits à Zanzibar pour la partie plage — environ 9-10 jours au total. Les camps dédiés aux lunes de miel proposent souvent des dîners privés, une ambiance réservée aux adultes, et des suites tentes haut de gamme plutôt que des chambres familiales — il vaut donc la peine de vérifier qu'un établissement est adapté aux lunes de miel, pas seulement familial.",
        relatedLinks: [{ label: 'Lune de Miel Safari & Zanzibar (9 Jours)', href: '/safaris/9-day-honeymoon-safari-zanzibar' }, { label: 'Zanzibar', href: '/destinations/zanzibar' }],
      },
      {
        q: 'Combien coûte un vol en montgolfière au-dessus du Serengeti ?',
        a: "Un vol en montgolfière au-dessus du Serengeti coûte généralement 550-700 $ par personne pour environ une heure de vol au lever du soleil, suivi habituellement d'un petit-déjeuner brousse au champagne. C'est une option payante en plus d'un circuit safari classique, à réserver à l'avance puisque chaque compagnie de montgolfières ne fait voler qu'un nombre limité de personnes chaque matin.",
      },
      {
        q: 'Peut-on combiner un safari en Tanzanie avec un séjour plage à Zanzibar ?',
        a: "Oui — c'est l'une des extensions les plus populaires, et logistiquement simple : Zanzibar est à un court vol d'Arusha ou des principaux circuits safari, la plupart des opérateurs l'intègrent donc comme une dernière étape naturelle. Une répartition courante est 5-7 jours de safari suivis de 3-5 jours de plage, mais le ratio est entièrement modulable selon l'équilibre souhaité entre plage et faune.",
        relatedLinks: [{ label: 'Safari & Zanzibar (10 Jours)', href: '/safaris/10-day-safari-zanzibar' }],
      },
      {
        q: 'Un safari photo est-il différent d\'un safari classique ?',
        a: "Oui — un safari photo dédié utilise des véhicules aménagés pour les photographes (supports beanbag, plus d'espace aux fenêtres, parfois une trappe de toit à hauteur photographe), garde des groupes plus restreints, et rythme la journée autour de la lumière — départ du camp avant le lever du soleil et présence maintenue jusqu'à l'heure dorée plutôt qu'un horaire de game drive fixe. Les guides sur ces circuits sont aussi généralement formés à privilégier le bon positionnement pour la photo plutôt que la simple observation d'espèces.",
        relatedLinks: [{ label: 'Safari Photo Aventure (7 Jours)', href: '/safaris/7-day-photography-adventure-safari' }],
      },
      {
        q: "Qu'est-ce qu'un safari en avion léger (fly-in), et est-ce que ça vaut le coût supplémentaire ?",
        a: "Un safari fly-in utilise de petits avions pour se déplacer entre les parcs plutôt que de longs transferts en véhicule — un trajet de 6-8 heures en voiture devient un vol de 45-60 minutes. Le surcoût se justifie surtout pour les circuits vers le sud ou l'ouest (Ruaha, Nyerere, Mahale), où les transferts routiers sont vraiment longs et difficiles ; pour les parcs du Circuit Nord, plus proches les uns des autres, rouler entre eux fait souvent partie de l'expérience plutôt qu'un inconvénient.",
      },
    ],
  },
  {
    slug: 'culture-health-and-logistics',
    title: 'Culture, Santé & Logistique Pratique',
    description: 'Les Maasaï, les vaccins, les visas, et quoi emporter.',
    icon: 'ShieldCheck',
    items: [
      {
        q: 'Qui sont les Maasaï ?',
        a: "Les Maasaï sont un peuple pastoraliste semi-nomade originaire du nord de la Tanzanie et du sud du Kenya, historiquement centré sur l'élevage bovin à travers la région du Serengeti et de la vallée du Rift — les mêmes terres que traversent aujourd'hui de nombreux circuits safari. De nombreuses communautés maasaï proches du Circuit Nord accueillent les visiteurs pour des visites culturelles de village, une façon authentique et encadrée par un guide de découvrir leurs traditions, leur habit distinctif et leur mode de vie, plutôt que de les considérer comme un simple décor à la faune.",
      },
      {
        q: 'Qui sont les Hadzabe, et peut-on visiter leur communauté lors d\'un safari ?',
        a: "Les Hadzabe sont l'une des dernières véritables communautés de chasseurs-cueilleurs au monde, vivant autour du lac Eyasi dans le nord de la Tanzanie, et parlant encore une langue à clics très distinctive. Oui — une visite respectueuse et guidée est possible, et c'est un intérêt réellement croissant chez les voyageurs qui veulent associer culture et faune : une visite type inclut une chasse ou une cueillette matinale avec les Hadzabe, suivie d'un passage chez les Datoga voisins, réputés pour leur forge traditionnelle. Ces visites fonctionnent mieux dans le cadre de circuits encadrés par la communauté, avec un protocole éthique, plutôt qu'en visite improvisée.",
        relatedLinks: [{ label: 'Expérience Tarangire, Ngorongoro & Hadzabe', href: '/experiences/cultural-experience' }],
      },
      {
        q: 'Faut-il des vaccins ou un traitement antipaludéen pour un safari en Tanzanie ?',
        a: "Un certificat de vaccination contre la fièvre jaune est exigé si vous arrivez d'un pays (ou avez transité par un pays) à risque de transmission de la fièvre jaune — vérifiez les exigences actuelles selon votre itinéraire précis. Un traitement antipaludéen préventif est fortement recommandé pour les régions de safari (la majeure partie de la Tanzanie continentale), même si Zanzibar et les zones d'altitude comme Arusha ou le rebord du cratère du Ngorongoro présentent un risque plus faible. Les vaccins de routine (tétanos, hépatite A/B, typhoïde) sont couramment recommandés par les centres de vaccination internationale mais ne sont pas des exigences d'entrée en Tanzanie. Confirmez toujours les recommandations actuelles auprès d'un professionnel de santé voyage avant le départ.",
      },
      {
        q: 'Quel visa faut-il pour visiter la Tanzanie ?',
        a: "La plupart des nationalités ont besoin d'un visa pour entrer en Tanzanie, disponible soit en e-visa demandé en ligne à l'avance, soit à l'arrivée dans les principaux aéroports pour de nombreuses nationalités. Traiter l'e-visa avant le départ est généralement plus rapide et moins stressant qu'arriver sans. Les conditions et les nationalités éligibles changent régulièrement — vérifiez toujours les règles actuelles directement auprès de l'immigration tanzanienne ou de votre ambassade, à l'approche de vos dates de voyage plutôt qu'en se fiant à des informations anciennes.",
      },
      {
        q: 'Que faut-il emporter pour un safari ?',
        a: "Des vêtements de couleurs neutres (kaki, olive, marron — évitez les couleurs vives ainsi que le blanc ou le noir purs, qui peuvent attirer les insectes ou se remarquer face à la faune), des couches pour les game drives matinaux frais qui se réchauffent vite, un chapeau à large bord, de la crème solaire, des jumelles, et une pochette étanche ou renforcée pour le matériel photo à cause des pistes poussiéreuses. La plupart des camps proposent un service de blanchisserie, donc prévoir des vêtements pour 4-5 jours suffit généralement, même sur un safari plus long.",
      },
      {
        q: 'La Tanzanie est-elle sûre pour les touristes ?',
        a: "Les régions de safari en Tanzanie sont des zones bien établies, dépendantes du tourisme, avec un bon niveau de sécurité — les risques concrets lors d'un safari encadré tiennent davantage à l'exposition au soleil, à l'état des routes et au bon sens de proximité avec la faune (rester dans le véhicule, suivre les instructions du guide) qu'à la criminalité. Comme pour tout voyage international, les précautions habituelles s'appliquent en ville et dans les lieux de transit. Les bons opérateurs informent chaque client des consignes de sécurité dès le début du voyage.",
      },
    ],
  },
  {
    slug: 'about-ewa',
    title: 'À propos d\'EWA Safari Outfitters',
    description: 'Qui nous sommes, nos références, et ce qui distingue un safari EWA.',
    icon: 'Award',
    items: [
      {
        q: "Qu'est-ce qu'EWA Safari Outfitters ?",
        a: "EWA Safari Outfitters est un voyagiste local basé à Arusha, organisant des safaris sur mesure en Tanzanie, au Kenya et au Rwanda depuis 2022 — la même équipe derrière l'aventure en pleine nature extrême (extreme wilderness adventure) à travers le Serengeti, le Ngorongoro et au-delà. « EWA » signifie Extreme Wilderness Adventure, le nom d'origine de l'entreprise, et chaque voyage reste construit autour de cette même philosophie : des safaris privés, guidés, authentiques — pas des circuits en groupe préformatés.",
        relatedLinks: [{ label: 'À propos d\'EWA Safari Outfitters', href: '/about' }],
      },
      {
        q: 'EWA Safari Outfitters s\'appelait-elle auparavant Extreme Wilderness Adventure ?',
        a: "Oui — EWA Safari Outfitters a été fondée et opérait à l'origine sous le nom d'Extreme Wilderness Adventure, ce qui explique pourquoi le nom de domaine du site (theextremewilderness.com) et le compte Instagram (@extremewildernessadventure) portent encore ce nom. Le changement de nom vers « EWA Safari Outfitters » reflète la même équipe locale basée à Arusha, les mêmes guides et les mêmes opérations — un rafraîchissement de marque, pas un changement de propriétaire ni une entreprise différente.",
        relatedLinks: [{ label: 'À propos d\'EWA Safari Outfitters', href: '/about' }],
      },
      {
        q: 'EWA Safari Outfitters est-elle certifiée TATO et agréée en tant que voyagiste en Tanzanie ?',
        a: "Oui — EWA Safari Outfitters est certifiée TATO (membre de la Tanzania Association of Tour Operators), l'organisme professionnel qui valide les voyagistes légitimes et agréés en Tanzanie. Réserver auprès d'un opérateur certifié TATO est l'un des moyens les plus simples de vérifier qu'une agence de safari en Tanzanie est réellement agréée, plutôt qu'un revendeur non enregistré des circuits d'autres opérateurs.",
      },
      {
        q: "Que signifie concrètement l'appartenance à la TATO pour ma réservation ?",
        a: "La TATO représente et contrôle les tour-opérateurs de Tanzanie depuis 1983 : être membre signifie qu'EWA Safari Outfitters est reconnue par le même organisme professionnel avec lequel travaillent à la fois le gouvernement et le secteur international du voyage — pas seulement une entreprise qui se déclare elle-même agréée. Concrètement, cela veut dire qu'une véritable association professionnelle se porte garante de la réservation si quoi que ce soit devait un jour dépasser le cadre de notre propre service client, et c'est pourquoi l'appartenance à la TATO fait partie des vérifications standards que les voyageurs prudents effectuent avant même de réserver un safari en Tanzanie. EWA figure précisément sous six catégories TATO — Tour Operators, Mainland Tour Operators, DMC/Tour Operators, Mountain Trekking Operators, Zanzibar & Beach Holiday Operators, et Cultural Experience Operators — couvrant à la fois nos itinéraires de safari, nos ascensions du Kilimandjaro, nos extensions à Zanzibar et nos excursions culturelles.",
      },
      {
        q: "Comment puis-je vérifier moi-même l'appartenance d'EWA Safari Outfitters à la TATO ?",
        a: "Directement sur le site officiel de la TATO — notre fiche est publique, et nous n'avons ni le contrôle ni la possibilité d'en fausser le contenu. C'est un moyen rapide et indépendant de confirmer que nous sommes un opérateur authentique et agréé avant de réserver, plutôt que de devoir croire n'importe quel opérateur sur parole.",
        relatedLinks: [{ label: 'Voir notre fiche membre TATO', href: 'https://tatotz.org/portfolio/ewa-safari-outfitters/' }],
      },
      {
        q: 'Depuis combien de temps EWA Safari Outfitters organise-t-elle des safaris ?',
        a: "EWA Safari Outfitters organise des safaris depuis 2022 (plus de 5 ans d'activité sous le nom Extreme Wilderness Adventure avant et pendant le changement de marque), avec plus de 200 voyageurs guidés à travers la Tanzanie, le Kenya et le Rwanda, une note de 4,9 sur TripAdvisor, et des clients venus de plus de 40 pays — assez établie pour bien connaître ces routes, encore assez petite pour que chaque voyage soit conçu individuellement plutôt qu'inséré dans un itinéraire de groupe fixe.",
      },
      {
        q: "Qu'est-ce qui distingue EWA Safari Outfitters des autres agences de safari en Tanzanie ?",
        a: "Chaque safari EWA utilise un véhicule et un guide privés — jamais un camion partagé avec d'autres voyageurs que vous n'avez pas choisis — et l'entreprise est détenue à 100 % localement, basée à Arusha, plutôt qu'une agence étrangère revendant les circuits d'autres opérateurs. Les clients rapportent un taux d'observation des Big Five de 100 %, et la connaissance du terrain par l'équipe locale (quelles routes sont ouvertes, où se trouve exactement la migration cette semaine) vient du fait d'être réellement basée là où se déroulent les safaris, pas d'un centre d'appels à l'étranger.",
        relatedLinks: [{ label: 'Ce qui nous distingue', href: '/about#why-us' }],
      },
      {
        q: 'Qui sera mon guide de safari avec EWA Safari Outfitters ?',
        a: "L'équipe de guides d'EWA comprend des guides de safari expérimentés basés en Tanzanie — parmi eux Mike Mawolle, Nixon Massawe et Josh Meela — chacun avec des années passées à parcourir les mêmes itinéraires du Circuit Nord et du Circuit Sud, exactement le type de connaissance locale, route par route, qui fait la différence entre un bon et un excellent game drive. Un guide est attribué par voyage, jamais partagé entre plusieurs véhicules à la fois.",
        relatedLinks: [{ label: 'Rencontrer l\'équipe', href: '/about#guides' }],
      },
      {
        q: 'EWA Safari Outfitters est-elle détenue localement, ou est-ce une agence étrangère qui revend des circuits ?',
        a: "EWA Safari Outfitters est détenue à 100 % localement et basée à Arusha, en Tanzanie — pas une agence détenue à l'étranger ni une plateforme de réservation qui revend les circuits d'autres opérateurs avec une marge supplémentaire. Réserver directement auprès d'un opérateur local basé sur place tend aussi à être plus avantageux financièrement, car cela supprime la marge supplémentaire d'une agence internationale.",
      },
      {
        q: "Où est basée EWA Safari Outfitters, et peut-on visiter le bureau ?",
        a: "EWA Safari Outfitters est basée au 20 Ingira Street, à Arusha, en Tanzanie — la même ville d'où partent la plupart des safaris du Circuit Nord et des ascensions du Kilimandjaro. Les visiteurs sont les bienvenus au bureau avant ou après un voyage ; contactez-nous à l'avance à info@theextremewilderness.com ou au +255 (0) 747 999 070 pour organiser une visite.",
        relatedLinks: [{ label: 'Visiter notre bureau', href: '/about' }, { label: 'Nous contacter', href: '/contact' }],
      },
      {
        q: 'En combien de temps EWA Safari Outfitters répond-elle aux demandes ?',
        a: "EWA Safari Outfitters répond généralement aux demandes de safari en quelques heures pendant les heures ouvrées en Afrique de l'Est, et généralement le jour même en dehors de ces horaires. Le moyen le plus rapide d'obtenir un devis réel et personnalisé (pas une simple liste de prix générique) est le formulaire de demande présent sur chaque page safari, destination ou FAQ de ce site, qui contacte directement l'équipe à Arusha.",
        relatedLinks: [{ label: 'Nous contacter', href: '/contact' }],
      },
      {
        q: 'EWA Safari Outfitters opère-t-elle uniquement en Tanzanie, ou aussi au Kenya et au Rwanda ?',
        a: "EWA Safari Outfitters est basée en Tanzanie et profondément ancrée dans le pays, mais organise et combine également des voyages au Kenya (Masai Mara et au-delà) et au Rwanda (trek gorilles au Parc National des Volcans) — de nombreux clients combinent deux ou trois pays dans un seul itinéraire sur mesure plutôt que de réserver chaque destination séparément.",
        relatedLinks: [{ label: 'Safaris au Kenya', href: '/kenya' }, { label: 'Safaris au Rwanda', href: '/rwanda' }],
      },
    ],
  },
]

export const FAQ_CATEGORY_SLUGS = faqCategories.map((c) => c.slug)
