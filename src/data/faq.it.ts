import type { FaqCategory } from './faq'

// Italian localization of faq.ts. Category slugs/order stay identical to
// the English file (stable jump-nav anchors); title/description/items are
// translated into natural, editorial Italian — not machine-translated —
// while preserving the facts, structure, and item count of the source.
export const faqCategories: FaqCategory[] = [
  {
    slug: 'family-and-group-safaris',
    title: 'Safari in Famiglia e in Gruppo',
    description: 'Safari con bambini, viaggi multigenerazionali e piccoli gruppi.',
    icon: 'Users',
    items: [
      {
        q: "La Tanzania è sicura per un safari in famiglia con bambini?",
        a: "Sì — la Tanzania è una delle destinazioni di safari in famiglia più consolidate d'Africa. Il rischio principale da gestire è la malaria, quindi la maggior parte delle famiglie viaggia con la profilassi e sceglie, quando possibile, campi in zone di altopiano a rischio più basso. Gli operatori seri usano veicoli privati (non game drive condivisi), riducono i tempi di guida giornalieri per i bambini più piccoli, e selezionano lodge a misura di famiglia con camere comunicanti o tende familiari anziché doppie standard. Molti campi fissano un'età minima (in genere 6-8 anni) per i safari a piedi o alcune attività, ma i game drive in sé sono aperti a tutte le età.",
        relatedLinks: [{ label: 'Safari di Lusso in Famiglia di 10 Giorni', href: '/safaris/10-days-luxury-family' }],
      },
      {
        q: "Qual è il miglior itinerario di safari per una famiglia con bambini piccoli?",
        a: "I migliori itinerari di safari in famiglia restano all'interno del Circuito Nord della Tanzania (Serengeti, Ngorongoro, Tarangire, Lago Manyara) per ridurre al minimo i lunghi trasferimenti, usano veicoli 4x4 privati anziché camion condivisi, e prevedono tempi di pausa in ogni campo — piscina, passeggiate naturalistiche pensate per i bambini, programmi da ranger junior — invece di game drive uno dopo l'altro. Una guida privata capace di adattare il ritmo della giornata alla capacità di attenzione di un bambino fa più differenza dei singoli parchi scelti.",
        relatedLinks: [{ label: 'Destinazioni per Circuito', href: '/destinations/tanzania' }],
      },
      {
        q: "Quanti giorni dovrebbe durare un safari in famiglia?",
        a: "La maggior parte dei safari in famiglia dura 5-7 giorni — abbastanza per coprire 2-3 parchi senza fretta, ma abbastanza breve da mantenere l'attenzione dei bambini più piccoli e gestire il jet lag. Le famiglie che combinano il safari con un'estensione mare a Zanzibar spesso aggiungono altri 3-4 giorni sulla costa, dato che i bambini piccoli in genere reggono meglio un soggiorno al mare rispetto a game drive consecutivi.",
      },
      {
        q: "I nonni o un gruppo multigenerazionale possono viaggiare insieme in safari?",
        a: "Sì — i safari multigenerazionali e in piccolo gruppo sono comuni, e i campi in genere accolgono una fascia d'età ampia all'interno dello stesso itinerario. La principale considerazione di pianificazione è il ritmo: un viaggio pensato per un nonno di 70 anni e un nipote di 6 funziona meglio con giornate di guida più brevi, campi con camere facilmente accessibili (meno gradini, tende al piano terra) e giorni di riposo integrati, anziché un programma serrato pensato per viaggiatori solitari più in forma.",
        relatedLinks: [{ label: 'Safari per Anziani, Anniversari e Gruppi', href: '/safaris/12-day-seniors-anniversary-groups-safari' }],
      },
      {
        q: "Cosa è incluso nel prezzo di un pacchetto safari in famiglia?",
        a: "Un pacchetto safari in famiglia ben costruito include in genere un veicolo privato e una guida per l'intero viaggio, tutte le tasse di parco e conservazione, l'alloggio, la maggior parte o tutti i pasti, e i trasferimenti interni. Ciò che di solito non è incluso: voli internazionali, visti, mance ed extra opzionali come i voli in mongolfiera. Chiedi sempre se il prezzo indicato è a persona o a famiglia, poiché le strutture tariffarie per camere familiari e tende comunicanti variano molto da campo a campo.",
      },
    ],
  },
  {
    slug: 'best-time-and-great-migration',
    title: 'Periodo Migliore per Visitare e la Grande Migrazione',
    description: 'Stagioni, clima, e quando vedere la migrazione degli gnu.',
    icon: 'Calendar',
    items: [
      {
        q: "Qual è il periodo migliore per vedere gli attraversamenti dei fiumi durante la migrazione degli gnu?",
        a: "Dipende da quale parte della migrazione vuoi vedere. I drammatici attraversamenti del fiume Mara avvengono all'incirca da luglio a ottobre nel nord del Serengeti, quando oltre un milione di gnu si spingono verso nord in direzione del Kenya. La stagione dei parti — probabilmente il periodo con più azione tra i predatori — avviene da gennaio a marzo nel sud del Serengeti (l'area di Ndutu). Non esiste un unico «mese migliore» per l'intera migrazione, perché si tratta di un evento continuo e in costante movimento durante tutto l'anno, non di una data fissa.",
        relatedLinks: [{ label: 'Parco Nazionale del Serengeti', href: '/destinations/serengeti' }],
      },
      {
        q: "Quando avviene la Grande Migrazione in Tanzania?",
        a: "La Grande Migrazione è in corso da qualche parte nell'ecosistema del Serengeti in ogni mese dell'anno — è un ciclo continuo, non un singolo evento con una data di inizio e fine. In generale: parti nel sud da gennaio a marzo, spostamento verso nord attraverso il Serengeti centrale da aprile a giugno, attraversamenti dei fiumi a nord da luglio a ottobre, e ritorno verso sud a partire da novembre. La posizione esatta delle mandrie in una data settimana cambia in base alle piogge, quindi la tempistica precisa varia di anno in anno.",
      },
      {
        q: "Qual è il mese migliore per visitare il Serengeti?",
        a: "Non esiste un mese universalmente «migliore» — dipende da cosa vuoi vedere. Per gli attraversamenti dei fiumi, punta ad agosto o settembre. Per la stagione dei parti e la massima densità di predatori, gennaio-marzo. Per meno folla e paesaggi verdi e rigogliosi, le piccole piogge di novembre sono sottovalutate. Giugno e luglio offrono un ottimo compromesso: buon clima, mandrie della migrazione in movimento nel Serengeti centrale e occidentale, e meno folla rispetto al picco di agosto.",
      },
      {
        q: "La Tanzania è una destinazione di safari tutto l'anno?",
        a: "Sì. La Tanzania non ha una vera bassa stagione per l'osservazione della fauna selvatica — le stagioni secche (giugno-ottobre e gennaio-febbraio) concentrano gli animali intorno alle fonti d'acqua rendendo gli avvistamenti più facili, mentre le stagioni delle piogge (marzo-maggio, novembre) portano paesaggi rigogliosi, cuccioli appena nati e prezzi e affluenza notevolmente più bassi. Le grandi piogge (marzo-aprile) sono il periodo più tranquillo e l'unico in cui alcuni campi remoti chiudono, ma i circuiti principali restano aperti.",
      },
      {
        q: "Quando è la stagione dei parti nel Serengeti e perché è importante?",
        a: "La stagione dei parti va all'incirca da gennaio a marzo nelle pianure erbose del sud del Serengeti e nell'area di Ndutu, quando possono nascere fino a 8.000 cuccioli di gnu in un solo giorno. Attira la più alta concentrazione di predatori dell'intera migrazione — leoni, ghepardi e iene — rendendolo uno dei periodi migliori per l'azione dei predatori, anche se in questo periodo dell'anno non ci sono attraversamenti di fiumi.",
      },
    ],
  },
  {
    slug: 'planning-costs-and-comparisons',
    title: 'Pianificazione, Costi e Kenya vs. Tanzania',
    description: "Quanto costa un safari, cosa è incluso, e come scegliere tra i due paesi.",
    icon: 'DollarSign',
    items: [
      {
        q: "Quanto costa un safari in Tanzania?",
        a: "Il costo di un safari in Tanzania varia molto in base alla stagione, alla dimensione del gruppo e allo stile del campo. Come indicazione di massima, un safari di fascia media ben organizzato costa circa 400-600 $ a persona al giorno, un safari di lusso può arrivare a 700-1.200 $+ a persona al giorno, e un safari in campeggio economico può scendere sotto i 300 $ al giorno. Il prezzo a persona scende notevolmente con gruppi più numerosi, poiché il veicolo privato, la guida e le tasse di parco vengono condivisi. Il prezzo esatto dipende molto dalla stagione in cui si viaggia — l'alta stagione (giugno-ottobre, gennaio-febbraio) comporta tariffe più elevate.",
        relatedLinks: [{ label: 'Sfoglia i Pacchetti Safari', href: '/safaris' }],
      },
      {
        q: "Kenya o Tanzania — quale conviene di più per un safari?",
        a: "Nessuno dei due è oggettivamente «migliore» — si adattano a priorità diverse. La Tanzania ha più superficie totale di parchi, il cratere di Ngorongoro, Zanzibar come estensione mare, e ospita la migrazione per gran parte dell'anno. Il Kenya ha il Masai Mara (parte dello stesso ecosistema migratorio, ideale per gli attraversamenti dei fiumi da luglio a ottobre), voli generalmente più brevi dall'Europa, e un'infrastruttura per i safari leggermente più sviluppata in alcune zone. Molti viaggiatori combinano entrambi i paesi in un unico viaggio anziché sceglierne uno solo.",
        relatedLinks: [{ label: 'Destinazioni in Tanzania', href: '/destinations/tanzania' }, { label: 'Safari in Kenya', href: '/kenya' }],
      },
      {
        q: "Quanti giorni servono per un safari in Tanzania?",
        a: "7 giorni sono la durata ideale per coprire bene il Circuito Nord (Serengeti, Ngorongoro, Tarangire) senza sentirsi di fretta. 4-5 giorni funzionano per un viaggio focalizzato su 2 parchi. 10-14 giorni permettono di combinare il nord con il circuito sud o ovest, o di aggiungere Zanzibar o una scalata del Kilimanjaro. Meno di 4 giorni di safari tende a sembrare troppo tempo in auto per troppo poco tempo effettivo nei parchi.",
      },
      {
        q: "Cosa è incluso nel prezzo di un safari, e cosa no?",
        a: "La maggior parte dei pacchetti safari in Tanzania include: un veicolo privato con autista-guida, tutte le tasse di parco e conservazione, l'alloggio, e la maggior parte dei pasti. Generalmente NON incluso: voli internazionali, visto per la Tanzania, assicurazione di viaggio, mance per guide e personale del campo, bevande alcoliche, ed extra opzionali come voli in mongolfiera o un'estensione mare a Zanzibar. Verifica sempre esattamente cosa è compreso prima di confrontare i preventivi, poiché «prezzo del safari» significa cose diverse a seconda dell'operatore.",
      },
      {
        q: "Conviene prenotare un safari direttamente con un operatore locale?",
        a: "In generale sì — prenotare direttamente con un operatore locale, autorizzato, con sede in Tanzania, elimina il ricarico che piattaforme di prenotazione e agenzie internazionali aggiungono, spesso il 15-30%. Il compromesso è dover fare più ricerche in autonomia per verificare la licenza, le recensioni e la qualità di veicoli e guide, poiché si perde il filtro della piattaforma. Un operatore di proprietà locale con sede ad Arusha in genere ha anche una conoscenza in tempo reale migliore delle condizioni dei parchi, delle chiusure stradali e di dove si trova attualmente la migrazione.",
      },
    ],
  },
  {
    slug: 'tanzania-circuits-and-wildlife',
    title: 'Circuiti e Fauna della Tanzania',
    description: 'I Big Five, i circuiti safari della Tanzania, e cosa aspettarsi in ogni parco.',
    icon: 'Binoculars',
    items: [
      {
        q: "Quali sono i Big Five e dove si possono vedere in Tanzania?",
        a: "I Big Five — leone, leopardo, elefante, bufalo e rinoceronte — si trovano tutti in Tanzania, anche se gli avvistamenti di rinoceronte sono i più rari, dato che il numero di rinoceronti neri è basso e concentrato quasi interamente nel cratere di Ngorongoro. Leone, elefante e bufalo sono avvistamenti affidabili in Serengeti, Ngorongoro e Tarangire. Il leopardo è il più difficile da avvistare dei cinque ovunque ci si trovi — l'area di Seronera, nel Serengeti centrale, resta la più affidabile, grazie agli alberi lungo i corsi d'acqua che prediligono.",
        relatedLinks: [{ label: 'Parco Nazionale del Serengeti', href: '/destinations/serengeti' }, { label: 'Cratere di Ngorongoro', href: '/destinations/ngorongoro' }],
      },
      {
        q: "Qual è la differenza tra il cratere di Ngorongoro e il Serengeti?",
        a: "Ngorongoro è un ecosistema singolo, compatto e autosufficiente — una caldera vulcanica collassata di circa 260 km² sul fondo del cratere — dove la fauna selvatica è insolitamente concentrata e in genere si osserva in una sola giornata molto produttiva. Il Serengeti è vasto (quasi 15.000 km²), pianure aperte dove la migrazione si muove e gli avvistamenti sono distribuiti su un'area molto più ampia nel corso di diversi giorni. La maggior parte degli itinerari include entrambi: Ngorongoro per una giornata densa e affidabile di avvistamenti dei Big Five, poi il Serengeti per l'esperienza delle pianure aperte e della migrazione.",
        relatedLinks: [{ label: 'Cratere di Ngorongoro', href: '/destinations/ngorongoro' }],
      },
      {
        q: "Qual è la differenza tra i circuiti safari Nord, Sud e Ovest della Tanzania?",
        a: "Il Circuito Nord (Serengeti, Ngorongoro, Tarangire, Lago Manyara) è la rotta classica e più visitata della Tanzania — migliore infrastruttura, la migrazione, Big Five affidabili. Il Circuito Sud (Ruaha, Nyerere/Selous) è remoto, poco affollato e più selvaggio — parchi più grandi e dispersi, con molti meno veicoli. Il Circuito Ovest (Mahale, Katavi, Gombe) è il territorio del trekking degli scimpanzé, raggiunto per lo più con piccoli aerei, ed è il più fuori dai sentieri battuti tra i tre.",
      },
      {
        q: "Vale la pena visitare il circuito sud (Ruaha, Nyerere/Selous)?",
        a: "Sì, specialmente per i viaggiatori di ritorno o per chi cerca un safari più tranquillo e dall'atmosfera più esclusiva — Ruaha è il parco nazionale più grande della Tanzania ed è uno dei migliori per leoni e licaoni, e Nyerere (ex Selous) è la più grande area protetta d'Africa, nota per i safari in barca oltre ai game drive. Entrambi ricevono una frazione dei visitatori del Circuito Nord. Il compromesso è l'accesso — la maggior parte dei viaggi nel circuito sud avviene in aereo anziché in auto, con un costo aggiuntivo.",
        relatedLinks: [{ label: 'Parco Nazionale di Ruaha', href: '/destinations/ruaha' }, { label: 'Parco Nazionale di Nyerere (Selous)', href: '/destinations/nyerere' }],
      },
      {
        q: "Che fauna selvatica si può vedere nel Parco Nazionale di Tarangire?",
        a: "Tarangire è noto soprattutto per le sue mandrie di elefanti — tra le concentrazioni più grandi della Tanzania, specialmente nella stagione secca (giugno-ottobre) quando si radunano lungo il fiume Tarangire — oltre ai suoi caratteristici baobab secolari. È forte anche per i leoni, ed è uno dei parchi migliori del Circuito Nord per avvistare le specie di antilopi più piccole e meno comuni. In genere viene visitato come tappa aggiuntiva di 1-2 giorni insieme a Serengeti e Ngorongoro.",
        relatedLinks: [{ label: 'Parco Nazionale di Tarangire', href: '/destinations/tarangire' }],
      },
    ],
  },
  {
    slug: 'kenya-and-rwanda',
    title: 'Safari in Kenya e Ruanda',
    description: 'Combinare più paesi, il Masai Mara, e il trekking dei gorilla.',
    icon: 'Compass',
    items: [
      {
        q: "Posso combinare un safari in Kenya e Tanzania in un unico viaggio?",
        a: "Sì, ed è un modo comune per vedere sia il Serengeti sia il Masai Mara — tecnicamente un unico ecosistema continuo diviso da un confine internazionale. L'attraversamento del confine richiede un volo programmato in piccolo aereo oppure un lungo tragitto via terra, oltre a tasse d'ingresso separate ai parchi su ciascun lato, quindi la maggior parte degli itinerari combinati prevede almeno 10-12 giorni totali per non sentirsi affrettati.",
        relatedLinks: [{ label: 'Safari Kenya e Tanzania di 10 Giorni', href: '/safaris/10-day-kenya-tanzania-safari' }],
      },
      {
        q: "Quanto costa il trekking dei gorilla in Ruanda, e serve un permesso?",
        a: "Sì, un permesso è obbligatorio e disponibile in numero limitato — il Parco Nazionale dei Vulcani, in Ruanda, rilascia un numero fisso di permessi di trekking dei gorilla al giorno, attualmente al prezzo di 1.500 $ a persona, che copre un'ora con una famiglia di gorilla abituata, oltre alle tasse del parco e a una guida. I permessi vanno prenotati con largo anticipo, soprattutto per i periodi luglio-settembre e dicembre-febbraio, le finestre più secche e più richieste per il trekking.",
        relatedLinks: [{ label: 'Trekking dei Gorilla in Ruanda di 4 Giorni', href: '/safaris/4-day-rwanda-gorilla-trekking' }, { label: 'Parco Nazionale dei Vulcani', href: '/destinations/volcanoes' }],
      },
      {
        q: "Qual è il periodo migliore per vedere i gorilla in Ruanda?",
        a: "Il trekking dei gorilla è possibile tutto l'anno poiché i permessi non sono stagionali, ma le stagioni secche — giugno-settembre e dicembre-febbraio — rendono l'escursione più semplice e meno fangosa lungo il terreno ripido del Parco Nazionale dei Vulcani. I mesi più piovosi (marzo-maggio, ottobre-novembre) comportano sentieri più impegnativi ma sensibilmente meno turisti, e talvolta alloggi nei dintorni a prezzi più bassi.",
      },
      {
        q: "Il Masai Mara è la stessa cosa del Serengeti?",
        a: "Fanno parte dello stesso ecosistema continuo — il Masai Mara è essenzialmente l'estensione keniota, a nord, del Serengeti — separati solo da un confine internazionale che la fauna selvatica ignora del tutto. Il Mara è più piccolo e riceve le mandrie della migrazione durante la stagione degli attraversamenti dei fiumi (all'incirca luglio-ottobre); il Serengeti è molto più vasto e ospita la migrazione per il resto dell'anno, inclusa la stagione dei parti.",
      },
      {
        q: "Quanto è fisicamente impegnativo il trekking dei gorilla?",
        a: "Varia molto da un'escursione all'altra — le famiglie di gorilla vengono seguite tramite tracciamento, non sono ferme in un punto fisso, quindi la camminata può durare da meno di un'ora fino a 4-5 ore in ciascuna direzione, attraverso una foresta vulcanica ripida, a volte fangosa, e in altitudine (il Parco Nazionale dei Vulcani si trova tra 2.400 e 4.500 m). Un livello di forma fisica ragionevole è davvero utile; sono disponibili portatori per trasportare gli zaini e offrire un aiuto nei tratti più ripidi a chi è preoccupato per il terreno.",
      },
    ],
  },
  {
    slug: 'kilimanjaro-and-trekking',
    title: 'Kilimanjaro e Trekking',
    description: 'Percorsi, costo, difficoltà, e tassi di successo per scalare il Kilimanjaro.',
    icon: 'Mountain',
    items: [
      {
        q: "Qual è il percorso più facile per scalare il Kilimanjaro?",
        a: "Machame è il percorso più popolare e offre un ottimo equilibrio tra paesaggio e acclimatamento, ma il percorso Lemosho è generalmente considerato il più facile in termini di tasso di successo alla vetta, soprattutto perché il suo itinerario più lungo (7-8 giorni) dà al corpo più tempo per acclimatarsi. Marangu è l'unico percorso con alloggio in rifugi anziché in tenda e ha una pendenza giornaliera più dolce, ma il suo itinerario standard più breve significa meno tempo di acclimatamento, il che può controbilanciare la camminata più facile.",
        relatedLinks: [{ label: 'Kilimanjaro Percorso Machame', href: '/trekking/machame' }, { label: 'Tutti i Percorsi del Kilimanjaro', href: '/trekking' }],
      },
      {
        q: "Quanto costa scalare il Kilimanjaro?",
        a: "I costi per scalare il Kilimanjaro variano tipicamente da 2.000-2.500 $ a persona per una scalata di gruppo economica o di fascia media, fino a 3.500-5.000 $+ per un percorso privato, più lungo e meglio assistito, con un rapporto guide-scalatori più alto. Solo le tasse di parco (fissate dall'autorità dei parchi nazionali della Tanzania) costituiscono una quota fissa consistente di qualsiasi preventivo, quindi le scalate molto economiche di solito significano tagli sui salari dell'equipaggio, sull'attrezzatura o sui giorni di acclimatamento — tutti fattori che incidono sia sulla sicurezza sia sul successo alla vetta.",
        relatedLinks: [{ label: 'Kilimanjaro Percorso Machame', href: '/trekking/machame' }],
      },
      {
        q: "Qual è il tasso di successo per raggiungere la vetta del Kilimanjaro?",
        a: "I tassi di successo alla vetta variano enormemente in base alla durata del percorso: i percorsi più brevi di 5 giorni registrano tassi di successo bassi quanto il 40-50% a causa di un acclimatamento insufficiente, mentre i percorsi ben ritmati di 7-8 giorni come il Lemosho riportano tassi di successo dell'85-90%+. Il fattore singolo più importante per raggiungere la vetta non è la forma fisica — è dare al corpo abbastanza giorni per acclimatarsi all'altitudine, motivo per cui i percorsi più lunghi ottengono sistematicamente risultati migliori rispetto a quelli più brevi.",
      },
      {
        q: "Quanti giorni ci vogliono per scalare il Kilimanjaro?",
        a: "La maggior parte dei percorsi richiede dai 6 agli 8 giorni andata e ritorno, anche se Marangu può essere completato in 5 e opzioni più lunghe come un Lemosho completo o il percorso del Circuito Nord possono arrivare a 8-9 giorni. Aggiungere anche un solo giorno extra di acclimatamento migliora sensibilmente sia il comfort sia il successo alla vetta, quindi la maggior parte degli operatori esperti sconsiglia l'itinerario più breve disponibile su qualsiasi percorso.",
      },
      {
        q: "Devo essere un escursionista esperto per scalare il Kilimanjaro?",
        a: "Non è richiesta alcuna esperienza di arrampicata tecnica né attrezzatura specifica su nessuno dei percorsi di trekking standard — è una lunga camminata in alta quota, non una scalata tecnica. Detto questo, un livello base ragionevole di forma fisica (essere in grado di camminare comodamente per 5-7 ore al giorno) fa una differenza reale nel godersi l'esperienza, e l'altitudine influisce sulla forma fisica in modo imprevedibile, quindi anche gli escursionisti più allenati dovrebbero prendere sul serio l'acclimatamento.",
      },
    ],
  },
  {
    slug: 'honeymoon-zanzibar-and-experiences',
    title: 'Luna di Miele, Zanzibar ed Esperienze Speciali',
    description: 'Safari di luna di miele, estensioni mare, mongolfiere, e viaggi fotografici.',
    icon: 'Heart',
    items: [
      {
        q: "Qual è il miglior itinerario di luna di miele che combina safari e mare?",
        a: "La combinazione classica prevede 4-5 notti di safari nel Circuito Nord (Serengeti e Ngorongoro coprono i punti salienti in modo efficiente) seguite da 4-5 notti a Zanzibar per la parte mare del viaggio — circa 9-10 giorni in totale. I campi specializzati per lune di miele tendono a offrire cene private, ambienti pensati per adulti, e suite di tende di fascia alta anziché camere in configurazione familiare, quindi conviene sempre verificare che una struttura sia adatta alle lune di miele e non solo alle famiglie.",
        relatedLinks: [{ label: 'Safari di Luna di Miele e Zanzibar di 9 Giorni', href: '/safaris/9-day-honeymoon-safari-zanzibar' }, { label: 'Zanzibar', href: '/destinations/zanzibar' }],
      },
      {
        q: "Quanto costa un safari in mongolfiera sopra il Serengeti?",
        a: "Un volo in mongolfiera sopra il Serengeti costa in genere 550-700 $ a persona per circa un'ora in aria all'alba, di solito seguito da una colazione bush con champagne. Viene proposto come extra opzionale rispetto a un itinerario safari standard, non incluso di default, e va prenotato in anticipo, poiché ogni compagnia di mongolfiere fa volare solo un numero limitato di persone ogni mattina.",
      },
      {
        q: "Posso combinare un safari in Tanzania con una vacanza al mare a Zanzibar?",
        a: "Sì — è una delle estensioni safari più popolari, e logisticamente semplice: Zanzibar dista un breve volo da Arusha o dai principali circuiti safari, quindi la maggior parte degli operatori la inserisce come tappa finale naturale. Una suddivisione comune è 5-7 giorni di safari seguiti da 3-5 giorni al mare, anche se il rapporto è del tutto flessibile a seconda di quanto tempo si desidera dedicare al mare rispetto alla fauna selvatica.",
        relatedLinks: [{ label: 'Safari e Zanzibar di 10 Giorni', href: '/safaris/10-day-safari-zanzibar' }],
      },
      {
        q: "Un safari fotografico è diverso da un safari normale?",
        a: "Sì — un safari fotografico dedicato utilizza veicoli modificati per i fotografi (supporti tipo beanbag, maggiore spazio ai finestrini, a volte un tettuccio apribile all'altezza del fotografo), mantiene i gruppi più piccoli, e organizza la giornata intorno alla luce — lasciando il campo prima dell'alba e restando fuori fino all'ora dorata anziché seguire un orario fisso di game drive. Le guide nei viaggi orientati alla fotografia sono in genere istruite a dare priorità al posizionamento per gli scatti piuttosto che semplicemente spuntare le specie avvistate.",
        relatedLinks: [{ label: 'Safari Fotografico Avventura di 7 Giorni', href: '/safaris/7-day-photography-adventure-safari' }],
      },
      {
        q: "Cos'è un safari fly-in e vale l'extra di costo?",
        a: "Un safari fly-in utilizza piccoli aerei per spostarsi tra i parchi invece di lunghi trasferimenti su veicolo — un tragitto che potrebbe richiedere 6-8 ore diventa un volo di 45-60 minuti. Vale l'extra di costo soprattutto per i viaggi che coprono i circuiti sud o ovest (Ruaha, Nyerere, Mahale), dove i trasferimenti su strada sono davvero lunghi e faticosi; per i parchi del Circuito Nord, molto vicini tra loro, guidare da un parco all'altro è spesso parte dell'esperienza anziché uno svantaggio.",
      },
    ],
  },
  {
    slug: 'culture-health-and-logistics',
    title: 'Cultura, Salute e Logistica Pratica',
    description: 'I Masai, le vaccinazioni, i visti, e cosa mettere in valigia.',
    icon: 'ShieldCheck',
    items: [
      {
        q: "Chi sono i Masai?",
        a: "I Masai sono un popolo pastorale semi-nomade indigeno del nord della Tanzania e del sud del Kenya, storicamente incentrato sull'allevamento del bestiame nella regione del Serengeti e della Rift Valley — la stessa terra attraversata oggi da molti circuiti safari. Molte comunità Masai vicine al Circuito Nord accolgono visitatori per visite culturali ai villaggi, offrendo un modo autentico e organizzato da una guida per conoscere le loro tradizioni, il loro abbigliamento distintivo e il loro stile di vita, anziché vederli solo come uno sfondo alla fauna selvatica.",
      },
      {
        q: "Chi sono gli Hadzabe, e posso visitare la loro comunità durante un safari?",
        a: "Gli Hadzabe sono una delle ultime vere comunità di cacciatori-raccoglitori rimaste sulla Terra, vivono intorno al lago Eyasi nel nord della Tanzania e parlano ancora una distintiva lingua a clic. Sì — è possibile una visita rispettosa e guidata, ed è un interesse in genuina crescita tra i viaggiatori che vogliono unire cultura e fauna selvatica: una visita tipica prevede di unirsi a una battuta di caccia mattutina o a una passeggiata di raccolta con gli Hadzabe, seguita da una tappa presso i vicini Datoga, noti per la loro tradizionale lavorazione del ferro. Queste visite funzionano meglio nell'ambito di viaggi guidati dalla comunità e con protocolli etici, anziché come tappe informali improvvisate.",
        relatedLinks: [{ label: 'Esperienza Tarangire, Ngorongoro e Hadzabe', href: '/experiences/cultural-experience' }],
      },
      {
        q: "Servono vaccinazioni o farmaci antimalarici per un safari in Tanzania?",
        a: "È richiesto un certificato di vaccinazione contro la febbre gialla se si arriva da (o si è transitati per) un paese a rischio di trasmissione della febbre gialla — verifica i requisiti attuali in base al tuo itinerario specifico. La profilassi antimalarica è fortemente consigliata per le regioni dei safari (la maggior parte della Tanzania continentale), anche se Zanzibar e le zone a maggiore altitudine come Arusha e il bordo del cratere di Ngorongoro presentano un rischio più basso. Le vaccinazioni di routine (tetano, epatite A/B, tifo) sono comunemente consigliate dagli ambulatori di medicina del viaggiatore, ma non sono requisiti d'ingresso in Tanzania. Verifica sempre le indicazioni attuali con un professionista di medicina del viaggio prima della partenza.",
      },
      {
        q: "Di quale visto ho bisogno per visitare la Tanzania?",
        a: "La maggior parte delle nazionalità necessita di un visto per entrare in Tanzania, disponibile sia come e-visa da richiedere online in anticipo sia, per molte nazionalità, all'arrivo nei principali aeroporti. Elaborare l'e-visa prima del viaggio è generalmente più rapido e meno stressante che arrivare senza. I requisiti e le nazionalità idonee cambiano periodicamente, quindi verifica sempre le norme attuali direttamente con le autorità di immigrazione della Tanzania o con la tua ambasciata, in prossimità delle date di viaggio, anziché affidarti a informazioni datate.",
      },
      {
        q: "Cosa devo mettere in valigia per un safari?",
        a: "Abbigliamento dai colori neutri (kaki, verde oliva, marrone — evita colori vivaci e il bianco o il nero puro, che possono attirare insetti o risaltare agli occhi della fauna selvatica), strati per i game drive freddi delle prime ore del mattino che si scaldano rapidamente, un cappello a tesa larga, crema solare, binocolo, e una sacca impermeabile o una custodia imbottita per l'attrezzatura fotografica, date le strade polverose. La maggior parte dei campi offre un servizio di lavanderia, quindi in genere basta fare i bagagli per 4-5 giorni anziché per l'intera durata del viaggio, anche nei safari più lunghi.",
      },
      {
        q: "La Tanzania è sicura per i turisti?",
        a: "Le regioni safari della Tanzania sono aree consolidate e dipendenti dal turismo con un solido track record di sicurezza — i rischi pratici durante un safari guidato riguardano più l'esposizione al sole, le condizioni stradali e il buon senso nella vicinanza alla fauna selvatica (restare nel veicolo, seguire le istruzioni della guida) che la criminalità. Come per qualsiasi viaggio internazionale, valgono le precauzioni standard nelle città e nei punti di transito. Gli operatori seri informano ogni ospite sulle norme di sicurezza all'inizio del viaggio.",
      },
    ],
  },
  {
    slug: 'about-ewa',
    title: 'Su EWA Safari Outfitters',
    description: 'Chi siamo, le nostre credenziali, e cosa rende diverso un safari EWA.',
    icon: 'Award',
    items: [
      {
        q: "Cos'è EWA Safari Outfitters?",
        a: "EWA Safari Outfitters è un operatore di safari di proprietà locale, con sede ad Arusha, che organizza safari su misura in Tanzania, Kenya e Ruanda dal 2022 — lo stesso team dietro l'avventura estrema nella natura selvaggia (extreme wilderness adventure) attraverso il Serengeti, il Ngorongoro e oltre. «EWA» sta per Extreme Wilderness Adventure, il nome originale dell'azienda, e ogni viaggio è ancora costruito intorno a quella stessa filosofia: safari privati e guidati autentici, non tour di gruppo preconfezionati.",
        relatedLinks: [{ label: 'Su EWA Safari Outfitters', href: '/about' }],
      },
      {
        q: "EWA Safari Outfitters si chiamava in precedenza Extreme Wilderness Adventure?",
        a: "Sì — EWA Safari Outfitters è stata fondata e ha operato originariamente come Extreme Wilderness Adventure, ed è per questo che il dominio del sito web (theextremewilderness.com) e l'account Instagram (@extremewildernessadventure) portano ancora quel nome. Il rebranding in «EWA Safari Outfitters» riflette lo stesso team locale con sede ad Arusha, le stesse guide e le stesse operazioni — è un rinnovamento del nome, non un cambio di proprietà né un'azienda diversa.",
        relatedLinks: [{ label: 'Su EWA Safari Outfitters', href: '/about' }],
      },
      {
        q: "EWA Safari Outfitters è certificata TATO ed è un operatore turistico autorizzato in Tanzania?",
        a: "Sì — EWA Safari Outfitters è certificata TATO (membro della Tanzania Association of Tour Operators), l'ente di settore che verifica gli operatori legittimi e autorizzati in Tanzania. Prenotare con un operatore certificato TATO è uno dei modi più semplici per confermare che un'azienda di safari in Tanzania sia debitamente autorizzata e non un agente non registrato che rivende viaggi di altri operatori.",
      },
      {
        q: "Da quanto tempo EWA Safari Outfitters organizza safari?",
        a: "EWA Safari Outfitters organizza safari dal 2022 (oltre 5 anni di attività con il nome Extreme Wilderness Adventure prima e durante il rebranding), con oltre 200 viaggiatori accompagnati in Tanzania, Kenya e Ruanda, una valutazione di 4,9 su TripAdvisor, e ospiti provenienti da oltre 40 paesi — abbastanza affermata da conoscere bene questi percorsi, ma ancora abbastanza piccola da pianificare ogni viaggio individualmente anziché inserirlo in un itinerario di gruppo fisso.",
      },
      {
        q: "Cosa rende EWA Safari Outfitters diversa dalle altre aziende di safari in Tanzania?",
        a: "Ogni safari EWA utilizza un veicolo e una guida privati — mai un camion condiviso con altri viaggiatori che non hai scelto di avere accanto — e l'azienda è di proprietà locale al 100% e con sede ad Arusha, anziché un'agenzia straniera che rivende viaggi di altri operatori. Gli ospiti riportano un tasso di avvistamento dei Big Five del 100%, e la conoscenza locale del team sul campo (quali strade sono aperte, dove si trova esattamente la migrazione questa settimana) deriva dall'essere realmente basati nel luogo in cui si svolgono i safari, non da un call center all'estero.",
        relatedLinks: [{ label: 'Cosa Ci Rende Diversi', href: '/about#why-us' }],
      },
      {
        q: "Chi sarà la mia guida safari con EWA Safari Outfitters?",
        a: "Il team di guide di EWA include guide safari esperte con sede in Tanzania — tra cui Mike Mawolle, Nixon Massawe e Josh Meela — ciascuna con anni di esperienza sugli stessi percorsi del Circuito Nord e Sud, esattamente il tipo di conoscenza locale, strada per strada, che fa la differenza tra un buon game drive e uno eccezionale. Le guide vengono assegnate per singolo viaggio, mai condivise tra più veicoli contemporaneamente.",
        relatedLinks: [{ label: 'Conosci il Team', href: '/about#guides' }],
      },
      {
        q: "EWA Safari Outfitters è di proprietà locale, o un'agenzia straniera che rivende tour?",
        a: "EWA Safari Outfitters è di proprietà locale al 100% e ha sede ad Arusha, Tanzania — non è un'agenzia di proprietà straniera né una piattaforma di prenotazione che rivende viaggi di altri operatori con un ricarico. Prenotare direttamente con un operatore di proprietà locale tende anche a essere più conveniente, poiché elimina il livello aggiuntivo di margine di un'agenzia internazionale.",
      },
      {
        q: "Dove ha sede EWA Safari Outfitters, e posso visitare l'ufficio?",
        a: "EWA Safari Outfitters ha sede al 20 Ingira Street, Arusha, Tanzania — la stessa città da cui partono la maggior parte dei safari del Circuito Nord e delle scalate al Kilimanjaro. I visitatori sono i benvenuti a passare in ufficio prima o dopo un viaggio; contatta in anticipo info@theextremewilderness.com o il +255 (0) 747 999 070 per organizzare una visita.",
        relatedLinks: [{ label: 'Visita il Nostro Ufficio', href: '/about' }, { label: 'Contattaci', href: '/contact' }],
      },
      {
        q: "Con quale rapidità risponde EWA Safari Outfitters alle richieste?",
        a: "EWA Safari Outfitters risponde in genere alle richieste di safari entro un paio d'ore durante l'orario lavorativo dell'Africa Orientale, di solito lo stesso giorno anche al di fuori di tale orario. Il modo più rapido per ottenere un preventivo reale e personalizzato (non un listino prezzi generico) è il modulo di richiesta presente su qualsiasi pagina safari, destinazione o FAQ di questo sito, che arriva direttamente al team di Arusha.",
        relatedLinks: [{ label: 'Contattaci', href: '/contact' }],
      },
      {
        q: "EWA Safari Outfitters opera solo in Tanzania, o anche in Kenya e Ruanda?",
        a: "EWA Safari Outfitters ha sede e radici in Tanzania, ma opera e combina viaggi anche in Kenya (Masai Mara e oltre) e Ruanda (trekking dei gorilla nel Parco Nazionale dei Vulcani) — molti ospiti combinano due o tre paesi in un unico itinerario su misura anziché prenotarli separatamente.",
        relatedLinks: [{ label: 'Safari in Kenya', href: '/kenya' }, { label: 'Safari in Ruanda', href: '/rwanda' }],
      },
    ],
  },
]

export const FAQ_CATEGORY_SLUGS = faqCategories.map((c) => c.slug)
