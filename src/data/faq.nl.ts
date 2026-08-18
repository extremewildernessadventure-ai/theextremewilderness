import type { FaqCategory } from './faq'

// Genuinely Dutch-authored content — not a literal translation of faq.ts.
// Category slugs/order stay identical to the English file (stable jump-nav
// anchors); only title/description/items are localized.
export const faqCategories: FaqCategory[] = [
  {
    slug: 'family-and-group-safaris',
    title: "Familie- & Groepssafari's",
    description: "Safari's met kinderen, meerdaagse familiereizen, en reizen in kleine groepen.",
    icon: 'Users',
    items: [
      {
        q: 'Is Tanzania veilig voor een familiesafari met kinderen?',
        a: 'Ja — Tanzania is een van de meest gevestigde bestemmingen voor familiesafari\'s in Afrika. Het belangrijkste risico om te beheersen is malaria, dus de meeste gezinnen reizen met profylaxe en kiezen waar mogelijk voor kampen in hooggelegen gebieden met een lager risico. Betrouwbare reisorganisaties gebruiken privévoertuigen (geen gedeelde game drives), houden de dagelijkse rijtijden korter voor jongere kinderen, en kiezen gezinsvriendelijke lodges met verbonden kamers of familietenten in plaats van standaard tweepersoonskamers. Veel kampen hanteren een minimumleeftijd (meestal 6-8 jaar) voor wandelsafari\'s of bepaalde activiteiten, maar game drives zelf staan open voor alle leeftijden.',
        relatedLinks: [{ label: '10-daagse Luxe Familiesafari', href: '/safaris/10-days-luxury-family' }],
      },
      {
        q: 'Wat is de beste safariroute voor een gezin met jonge kinderen?',
        a: 'De beste familiesafari-routes blijven binnen Tanzania\'s Northern Circuit (Serengeti, Ngorongoro, Tarangire, Lake Manyara) om lange overbrugingsdagen te beperken, gebruiken privé-4x4\'s in plaats van gedeelde trucks, en bouwen bij elk kamp rustmomenten in — zwemtijd, natuurwandelingen voor kinderen, junior ranger-programma\'s — in plaats van achter elkaar game drives te plannen. Een privégids die het dagtempo kan afstemmen op de aandachtsspanne van een kind maakt meer verschil dan de specifieke gekozen parken.',
        relatedLinks: [{ label: 'Bestemmingen per Circuit', href: '/destinations/tanzania' }],
      },
      {
        q: 'Hoeveel dagen moet een familiesafari duren?',
        a: 'De meeste familiesafari\'s duren 5-7 dagen — lang genoeg om 2-3 parken te bezoeken zonder haast, kort genoeg om de aandacht van jongere kinderen vast te houden en de jetlag te beperken. Gezinnen die de safari combineren met een strandverlenging op Zanzibar voegen vaak nog 3-4 dagen aan de kust toe, omdat jonge kinderen een strandverblijf doorgaans beter aankunnen dan game drive na game drive.',
      },
      {
        q: 'Kunnen grootouders of een familie met meerdere generaties samen op safari?',
        a: 'Ja — safari\'s met meerdere generaties of kleine groepen komen veel voor, en kampen kunnen over het algemeen een brede leeftijdsrange binnen dezelfde reisroute aan. De belangrijkste planningsoverweging is het tempo: een reis die is opgebouwd rond een grootouder van 70 en een kleinkind van 6 werkt het beste met kortere rijdagen, kampen met goed toegankelijke kamers (minder trappen, gelijkvloerse tenten), en ingebouwde rustdagen in plaats van een vol programma dat is ontworpen voor fittere solo-reizigers.',
        relatedLinks: [{ label: "Senioren-, Jubileum- & Groepssafari's", href: '/safaris/12-day-seniors-anniversary-groups-safari' }],
      },
      {
        q: 'Wat is inbegrepen in de prijs van een familiesafari-pakket?',
        a: 'Een goed samengesteld familiesafari-pakket omvat doorgaans een privévoertuig en gids voor de hele reis, alle park- en natuurbehoudskosten, accommodatie, de meeste of alle maaltijden, en interne transfers. Wat meestal NIET is inbegrepen: internationale vluchten, visa, fooien, en optionele extra\'s zoals een luchtballonvaart. Vraag specifiek na of de opgegeven prijs per persoon of per gezin geldt, aangezien de prijsstructuur voor familiekamers en verbonden tenten sterk verschilt tussen kampen.',
      },
    ],
  },
  {
    slug: 'best-time-and-great-migration',
    title: 'Beste Reistijd & de Grote Trek',
    description: 'Seizoenen, weer, en wanneer je de trek van de gnoes kunt zien.',
    icon: 'Calendar',
    items: [
      {
        q: 'Wanneer is het beste moment om de rivieroversteken van de gnoetrek te zien?',
        a: 'Dat hangt af van welk deel van de trek je wilt zien. De dramatische oversteken van de Mara-rivier vinden ruwweg plaats van juli tot oktober in het noorden van de Serengeti, wanneer meer dan een miljoen gnoes noordwaarts trekken richting Kenia. Het kalfseizoen — misschien wel de periode met de meeste roofdieractiviteit — vindt plaats van januari tot maart in het zuiden van de Serengeti (het Ndutu-gebied). Er is geen enkele "beste maand" voor de hele trek, aangezien het een jaarrond, voortdurend bewegend fenomeen is, geen vaste datum.',
        relatedLinks: [{ label: 'Serengeti National Park', href: '/destinations/serengeti' }],
      },
      {
        q: 'Wanneer vindt de Grote Trek plaats in Tanzania?',
        a: 'De Grote Trek vindt het hele jaar door ergens in het Serengeti-ecosysteem plaats — het is een doorlopende kringloop, geen eenmalige gebeurtenis met een begin- en einddatum. Grofweg: kalveren in het zuiden van januari tot maart, beweging noordwaarts door de centrale Serengeti van april tot juni, rivieroversteken in het noorden van juli tot oktober, en een terugkeer naar het zuiden vanaf ongeveer november. Waar de kuddes zich precies bevinden in een bepaalde week verschuift met de regenval, dus het exacte moment varieert van jaar tot jaar.',
      },
      {
        q: 'Wat is de beste maand om de Serengeti te bezoeken?',
        a: 'Er is geen universeel "beste" maand — het hangt af van wat je wilt zien. Voor rivieroversteken mik je op augustus of september. Voor het kalfseizoen en de hoogste concentratie roofdieren: januari tot maart. Voor minder drukte en weelderig groene landschappen is de korte regentijd in november ondergewaardeerd. Juni en juli bieden een sterke middenweg: goed weer, trekkuddes die door de centrale en westelijke Serengeti trekken, en minder drukte dan in het piekmaand augustus.',
      },
      {
        q: 'Is Tanzania een jaarrond safaribestemming?',
        a: 'Ja. Tanzania kent geen echt laagseizoen voor wildlife-observatie — de droge seizoenen (juni-oktober en januari-februari) concentreren dieren rond waterbronnen, wat waarnemingen vergemakkelijkt, terwijl de regenseizoenen (maart-mei, november) zorgen voor weelderige landschappen, jonge dieren, en aanzienlijk lagere prijzen en minder drukte. De lange regentijd (maart-april) is de rustigste periode en de enige waarin sommige afgelegen kampen sluiten, maar de belangrijkste circuits blijven open.',
      },
      {
        q: 'Wanneer is het kalfseizoen in de Serengeti en waarom is dat belangrijk?',
        a: 'Het kalfseizoen loopt van ongeveer januari tot maart op de kortgrasvlaktes van de zuidelijke Serengeti en het Ndutu-gebied, wanneer op een enkele dag tot wel 8.000 gnoekalveren geboren kunnen worden. Het trekt de hoogste concentratie roofdieren van de hele trek aan — leeuw, cheetah en hyena — waardoor het een van de beste periodes is voor roofdieractie, ook al vinden er in deze tijd van het jaar geen rivieroversteken plaats.',
      },
    ],
  },
  {
    slug: 'planning-costs-and-comparisons',
    title: 'Planning, Kosten & Kenia vs. Tanzania',
    description: 'Wat een safari kost, wat er is inbegrepen, en hoe je tussen de landen kiest.',
    icon: 'DollarSign',
    items: [
      {
        q: 'Hoeveel kost een safari in Tanzania?',
        a: 'De kosten van een Tanzania-safari variëren sterk per seizoen, groepsgrootte en type kamp. Als ruwe richtlijn: een goed georganiseerde safari in het middensegment kost ongeveer $400-$600 per persoon per dag, een luxe safari kan $700-$1.200+ per persoon per dag kosten, en budget-campingsafari\'s kunnen onder de $300 per dag uitkomen. De prijs per persoon daalt aanzienlijk bij grotere groepen, omdat het privévoertuig, de gids en de parkkosten worden gedeeld. De exacte prijs hangt sterk af van het seizoen waarin je reist — het hoogseizoen (juni-oktober, januari-februari) brengt premiumtarieven met zich mee.',
        relatedLinks: [{ label: 'Bekijk Safaripakketten', href: '/safaris' }],
      },
      {
        q: 'Kenia of Tanzania — wat is beter voor een safari?',
        a: 'Geen van beide is objectief "beter" — ze passen bij verschillende prioriteiten. Tanzania heeft in totaal meer parkgebied, de Ngorongoro Crater, Zanzibar als strandverlenging, en herbergt de trek het grootste deel van het jaar. Kenia heeft de Masai Mara (onderdeel van hetzelfde trekecosysteem, ideaal voor rivieroversteken van juli tot oktober), doorgaans kortere vluchttijden vanuit Europa, en in sommige gebieden een iets verder ontwikkelde safari-infrastructuur. Veel reizigers combineren beide landen in één reis in plaats van te kiezen.',
        relatedLinks: [{ label: 'Bestemmingen in Tanzania', href: '/destinations/tanzania' }, { label: "Safari's in Kenia", href: '/kenya' }],
      },
      {
        q: 'Hoeveel dagen heb ik nodig voor een Tanzania-safari?',
        a: '7 dagen is de ideale periode om het Northern Circuit (Serengeti, Ngorongoro, Tarangire) grondig te bezoeken zonder je gehaast te voelen. 4-5 dagen werkt voor een gerichte reis naar 2 parken. 10-14 dagen maakt het mogelijk om het noorden te combineren met het zuidelijke of westelijke circuit, of om Zanzibar of een Kilimanjaro-beklimming toe te voegen. Minder dan 4 dagen safari voelt vaak aan als veel rijden voor te weinig tijd in de parken zelf.',
      },
      {
        q: 'Wat is inbegrepen in een safariprijs, en wat niet?',
        a: 'De meeste Tanzania safaripakketten omvatten: een privévoertuig met chauffeur-gids, alle park- en natuurbehoudskosten, accommodatie, en de meeste maaltijden. Meestal NIET inbegrepen: internationale vluchten, visumkosten voor Tanzania, reisverzekering, fooien voor gidsen en kampstaf, alcoholische dranken, en optionele extra\'s zoals een luchtballonvaart of een strandverlenging op Zanzibar. Controleer altijd precies wat er is inbegrepen voordat je offertes vergelijkt, want "safariprijs" betekent bij verschillende reisorganisaties iets anders.',
      },
      {
        q: 'Is het goedkoper om rechtstreeks bij een lokale reisorganisatie te boeken?',
        a: 'Over het algemeen wel — rechtstreeks boeken bij een lokaal gevestigde, gelicentieerde reisorganisatie in Tanzania scheelt de marge die internationale boekingsplatforms en agentschappen toevoegen, vaak 15-30%. De keerzijde is dat je zelf meer moet uitzoeken om de licentie, beoordelingen en de kwaliteit van voertuigen en gidsen te controleren, omdat je de controlelaag van het platform mist. Een lokaal in Arusha gevestigde reisorganisatie heeft doorgaans ook betere realtime kennis van parkomstandigheden, wegafsluitingen, en waar de trek zich op dit moment bevindt.',
      },
    ],
  },
  {
    slug: 'tanzania-circuits-and-wildlife',
    title: "Tanzania's Circuits & Wildlife",
    description: "De Big Five, Tanzania's safaricircuits, en wat je in elk park kunt verwachten.",
    icon: 'Binoculars',
    items: [
      {
        q: 'Wat zijn de Big Five en waar kan ik ze zien in Tanzania?',
        a: 'De Big Five — leeuw, luipaard, olifant, buffel en neushoorn — zijn allemaal te vinden in Tanzania, al zijn neushoornwaarnemingen het zeldzaamst, omdat het aantal zwarte neushoorns laag is en bijna volledig geconcentreerd in de Ngorongoro Crater. Leeuw, olifant en buffel zijn betrouwbaar te zien in de Serengeti, Ngorongoro en Tarangire. De luipaard is van de vijf het moeilijkst te spotten — het meest betrouwbaar in het Seronera-gebied van de centrale Serengeti, waar hij een voorkeur heeft voor bomen langs rivieren.',
        relatedLinks: [{ label: 'Serengeti National Park', href: '/destinations/serengeti' }, { label: 'Ngorongoro Crater', href: '/destinations/ngorongoro' }],
      },
      {
        q: 'Wat is het verschil tussen de Ngorongoro Crater en de Serengeti?',
        a: 'Ngorongoro is een enkel, compact, in zichzelf besloten ecosysteem — een ingestorte vulkanische caldera van ongeveer 260 km² op de kraterbodem — waar wildlife ongewoon geconcentreerd is en doorgaans op één, zeer productieve dag te zien is. De Serengeti is enorm (bijna 15.000 km²), open vlaktes waar de trek zich beweegt en waarnemingen zich over een veel groter gebied en meerdere dagen verspreiden. De meeste reisroutes combineren beide: Ngorongoro voor een dichte, betrouwbare dag met Big Five-waarnemingen, daarna de Serengeti voor de ervaring van de open vlaktes en de trek.',
        relatedLinks: [{ label: 'Ngorongoro Crater', href: '/destinations/ngorongoro' }],
      },
      {
        q: "Wat is het verschil tussen Tanzania's Northern, Southern en Western safaricircuit?",
        a: "Het Northern Circuit (Serengeti, Ngorongoro, Tarangire, Lake Manyara) is Tanzania's klassieke, meest bezochte route — de beste infrastructuur, de trek, betrouwbare Big Five. Het Southern Circuit (Ruaha, Nyerere/Selous) is afgelegen, rustig en wilder — grotere, meer verspreide parken met veel minder voertuigen. Het Western Circuit (Mahale, Katavi, Gombe) is chimpansee-trekkingterrein, meestal alleen bereikbaar per klein vliegtuig, en het meest ontoegankelijke van de drie.",
      },
      {
        q: 'Is het Southern Circuit (Ruaha, Nyerere/Selous) de moeite waard?',
        a: "Ja, vooral voor reizigers die al eerder op safari zijn geweest of iedereen die een rustigere, meer exclusieve safari zoekt — Ruaha is Tanzania's grootste nationaal park en een van de beste voor leeuw en wilde hond, en Nyerere (voorheen Selous) is Afrika's grootste beschermde gebied, bekend om bootsafari's naast game drives. Beide krijgen slechts een fractie van het bezoekersaantal van het Northern Circuit. De keerzijde is de bereikbaarheid — de meeste reizen naar het zuidelijke circuit gaan per vliegtuig in plaats van over de weg, wat de kosten verhoogt.",
        relatedLinks: [{ label: 'Ruaha National Park', href: '/destinations/ruaha' }, { label: 'Nyerere (Selous) National Park', href: '/destinations/nyerere' }],
      },
      {
        q: 'Welke wildlife zie ik in Tarangire National Park?',
        a: 'Tarangire staat vooral bekend om zijn olifantenkuddes — enkele van de grootste concentraties in Tanzania, vooral in het droge seizoen (juni-oktober) wanneer ze zich verzamelen langs de Tarangire-rivier — plus zijn kenmerkende, eeuwenoude baobabbomen. Het park is ook sterk voor leeuw, en een van de betere parken in het Northern Circuit om de kleinere, minder vaak geziene antilopesoorten te spotten. Het wordt doorgaans bezocht als een aanvulling van 1-2 dagen naast Serengeti en Ngorongoro.',
        relatedLinks: [{ label: 'Tarangire National Park', href: '/destinations/tarangire' }],
      },
    ],
  },
  {
    slug: 'kenya-and-rwanda',
    title: "Safari's in Kenia & Rwanda",
    description: 'Landen combineren, de Masai Mara, en gorilla trekking.',
    icon: 'Compass',
    items: [
      {
        q: 'Kan ik een Kenia- en Tanzania-safari combineren in één reis?',
        a: 'Ja, en het is een gangbare manier om zowel de Serengeti als de Masai Mara te zien — technisch één doorlopend ecosysteem dat wordt doorsneden door een internationale grens. De grensovergang zelf vereist ofwel een geplande vlucht met een klein vliegtuig, ofwel een lange overlandrit plus aparte parktoegangskosten aan beide zijden, dus de meeste gecombineerde reisroutes plannen minstens 10-12 dagen in totaal om een gehaast gevoel te voorkomen.',
        relatedLinks: [{ label: '10-daagse Kenia & Tanzania Safari', href: '/safaris/10-day-kenya-tanzania-safari' }],
      },
      {
        q: 'Hoeveel kost gorilla trekking in Rwanda, en heb ik een vergunning nodig?',
        a: 'Ja, een vergunning is verplicht en beperkt beschikbaar — het Volcanoes National Park in Rwanda geeft dagelijks een vast aantal gorilla trekking-vergunningen uit, momenteel geprijsd op $1.500 per persoon, wat een uur bij een gehabitueerde gorillafamilie omvat plus parkkosten en een gids. Vergunningen moeten ruim van tevoren worden geboekt, vooral voor juli-september en december-februari, de droogste en populairste periodes om te trekken.',
        relatedLinks: [{ label: '4-daagse Rwanda Gorilla Trekking', href: '/safaris/4-day-rwanda-gorilla-trekking' }, { label: 'Volcanoes National Park', href: '/destinations/volcanoes' }],
      },
      {
        q: 'Wat is de beste tijd om gorilla\'s te zien in Rwanda?',
        a: 'Gorilla trekking is het hele jaar door mogelijk omdat vergunningen niet seizoensgebonden zijn, maar de droge seizoenen — juni-september en december-februari — maken het wandelen door het steile terrein van Volcanoes National Park makkelijker en minder modderig. De nattere maanden (maart-mei, oktober-november) betekenen zwaardere paden, maar merkbaar minder toeristen en soms goedkopere accommodatie in de buurt.',
      },
      {
        q: 'Is de Masai Mara hetzelfde als de Serengeti?',
        a: 'Ze maken deel uit van hetzelfde doorlopende ecosysteem — de Masai Mara is in feite de Keniaanse, noordelijke voortzetting van de Serengeti — alleen gescheiden door een internationale grens die de dieren zelf negeren. De Mara is kleiner en ontvangt de trekkuddes tijdens het rivieroversteekseizoen (ongeveer juli-oktober); de Serengeti is veel groter en herbergt de trek de rest van het jaar, inclusief het kalfseizoen.',
      },
      {
        q: 'Hoe fysiek zwaar is gorilla trekking?',
        a: 'Dat verschilt sterk per trektocht — gorillafamilies worden opgespoord, niet op een vaste plek gehouden, dus een wandeling kan variëren van minder dan een uur tot 4-5 uur enkele reis, door steil, soms modderig vulkanisch woud op hoogte (Volcanoes National Park ligt op 2.400-4.500 m). Een redelijk fitnessniveau is echt nuttig; dragers zijn beschikbaar om tassen te dragen en een steunende hand te bieden op de steilere stukken voor wie zich zorgen maakt over het terrein.',
      },
    ],
  },
  {
    slug: 'kilimanjaro-and-trekking',
    title: 'Kilimanjaro & Trekking',
    description: 'Routes, kosten, moeilijkheidsgraad, en slagingspercentages voor het beklimmen van de Kilimanjaro.',
    icon: 'Mountain',
    items: [
      {
        q: 'Wat is de makkelijkste route om de Kilimanjaro te beklimmen?',
        a: 'Machame is de populairste route en biedt een sterke balans tussen landschap en acclimatisatie, maar de Lemosho-route wordt over het algemeen beschouwd als de makkelijkste wat betreft slagingspercentage, vooral omdat de langere reisroute (7-8 dagen) je lichaam meer tijd geeft om te acclimatiseren. Marangu is de enige route met hutaccommodatie in plaats van tenten en heeft een geleidelijkere dagelijkse stijging, maar de kortere standaard reisroute betekent minder acclimatisatietijd, wat het makkelijkere wandelen weer kan compenseren.',
        relatedLinks: [{ label: 'Kilimanjaro Machame Route', href: '/trekking/machame' }, { label: 'Alle Kilimanjaro Routes', href: '/trekking' }],
      },
      {
        q: 'Hoeveel kost het om de Kilimanjaro te beklimmen?',
        a: "De kosten voor het beklimmen van de Kilimanjaro liggen doorgaans tussen $2.000-$2.500 per persoon voor een budget- tot middenklasse groepsbeklimming, tot $3.500-$5.000+ voor een privé, langere, beter begeleide route met een hogere gids-tot-klimmer-verhouding. Alleen al de parkkosten (vastgesteld door Tanzania's nationale parkenautoriteit) vormen een groot vast onderdeel van elke offerte, dus zeer goedkope beklimmingen betekenen meestal besparen op de lonen van het team, uitrusting, of acclimatisatiedagen — wat zowel de veiligheid als het slagingspercentage beïnvloedt.",
        relatedLinks: [{ label: 'Kilimanjaro Machame Route', href: '/trekking/machame' }],
      },
      {
        q: 'Wat is het slagingspercentage om de top van de Kilimanjaro te bereiken?',
        a: 'Slagingspercentages variëren enorm per routelengte: kortere routes van 5 dagen laten slagingspercentages zien van slechts 40-50% door onvoldoende acclimatisatietijd, terwijl goed getempode routes van 7-8 dagen zoals Lemosho slagingspercentages van 85-90%+ rapporteren. De belangrijkste factor om de top te bereiken is niet conditie — het is je lichaam genoeg dagen geven om aan de hoogte te wennen, waardoor langere routes consequent beter presteren dan kortere.',
      },
      {
        q: 'Hoeveel dagen duurt het om de Kilimanjaro te beklimmen?',
        a: 'De meeste routes duren 6-8 dagen heen en terug, al kan Marangu in 5 dagen worden afgelegd en kunnen langere opties zoals een volledige Lemosho- of Northern Circuit-route 8-9 dagen duren. Zelfs één extra acclimatisatiedag verbetert zowel het comfort als het slagingspercentage merkbaar, dus de meeste ervaren reisorganisaties raden de kortste beschikbare reisroute op elke route af.',
      },
      {
        q: 'Moet ik een ervaren wandelaar zijn om de Kilimanjaro te beklimmen?',
        a: 'Er is geen technische klimervaring of uitrusting vereist op geen van de standaard trekkingroutes — het is een lange wandeling op grote hoogte, geen technische klim. Dat gezegd hebbende, een redelijk basisniveau van conditie (comfortabel 5-7 uur per dag kunnen wandelen) maakt een echt verschil in hoeveel je ervan geniet, en hoogte beïnvloedt conditie onvoorspelbaar, dus zelfs sterke wandelaars moeten acclimatisatie serieus nemen.',
      },
    ],
  },
  {
    slug: 'honeymoon-zanzibar-and-experiences',
    title: 'Huwelijksreis, Zanzibar & Bijzondere Belevenissen',
    description: "Huwelijksreissafari's, strandverlengingen, luchtballonvaarten, en fotografiereizen.",
    icon: 'Heart',
    items: [
      {
        q: 'Wat is de beste huwelijksreisroute die safari en strand combineert?',
        a: 'De klassieke combinatie is 4-5 nachten safari in het Northern Circuit (Serengeti en Ngorongoro dekken de hoogtepunten efficiënt) gevolgd door 4-5 nachten op Zanzibar voor het strandgedeelte van de reis — in totaal ongeveer 9-10 dagen. Kampen die zich specifiek richten op huwelijksreizen bieden vaak privédiners, een op volwassenen gerichte sfeer, en luxueuze tentsuites in plaats van gezinsgeschikte kamers — het is dus de moeite waard om te controleren of een accommodatie geschikt is voor een huwelijksreis, en niet alleen gezinsvriendelijk.',
        relatedLinks: [{ label: 'Huwelijksreis Safari & Zanzibar (9 Dagen)', href: '/safaris/9-day-honeymoon-safari-zanzibar' }, { label: 'Zanzibar', href: '/destinations/zanzibar' }],
      },
      {
        q: 'Hoeveel kost een luchtballonvaart boven de Serengeti?',
        a: 'Een luchtballonvaart boven de Serengeti kost doorgaans $550-$700 per persoon voor ongeveer een uur in de lucht bij zonsopgang, meestal gevolgd door een champagne-bushontbijt. Het wordt geprijsd als optionele toevoeging aan een standaard safarireisroute in plaats van standaard inbegrepen, en moet van tevoren worden geboekt, aangezien elke ballonvaartmaatschappij slechts een beperkt aantal mensen per ochtend laat vliegen.',
      },
      {
        q: 'Kan ik een Tanzania-safari combineren met een strandvakantie op Zanzibar?',
        a: 'Ja — het is een van de populairste safariverlengingen, en logistiek eenvoudig: Zanzibar ligt een korte vlucht van Arusha of de belangrijkste safaricircuits verwijderd, dus de meeste reisorganisaties bouwen het in als een naadloze laatste etappe. Een gangbare verdeling is 5-7 dagen safari gevolgd door 3-5 dagen strand, al is de verhouding volledig flexibel afhankelijk van hoeveel strandtijd versus wildlife-tijd je wilt.',
        relatedLinks: [{ label: 'Safari & Zanzibar (10 Dagen)', href: '/safaris/10-day-safari-zanzibar' }],
      },
      {
        q: 'Verschilt een fotografiesafari van een gewone safari?',
        a: "Ja — een specifieke fotografiesafari gebruikt voertuigen die zijn aangepast voor fotografen (bonenzakjes als steun, extra raamruimte, soms een dakluik op fotografenhoogte), houdt groepen kleiner, en stemt de dag af op het licht — voor zonsopgang vertrekken uit het kamp en blijven tot het gouden uur in plaats van een vast rijschema. Gidsen op fotografiegerichte reizen krijgen doorgaans ook de opdracht om positionering voor foto's voorrang te geven boven simpelweg soorten afvinken.",
        relatedLinks: [{ label: 'Fotografie Avontuursafari (7 Dagen)', href: '/safaris/7-day-photography-adventure-safari' }],
      },
      {
        q: 'Wat is een fly-in safari en is het de extra kosten waard?',
        a: 'Een fly-in safari gebruikt kleine vliegtuigen om tussen parken te bewegen in plaats van lange transfers per safarivoertuig — een rit die 6-8 uur zou kunnen duren wordt een vlucht van 45-60 minuten. Het is vooral de extra kosten waard voor reizen die het zuidelijke of westelijke circuit bestrijken (Ruaha, Nyerere, Mahale), waar wegtransfers echt lang en zwaar zijn; voor de dicht bij elkaar gelegen parken van het Northern Circuit is rijden ertussen vaak onderdeel van de ervaring in plaats van een nadeel.',
      },
    ],
  },
  {
    slug: 'culture-health-and-logistics',
    title: 'Cultuur, Gezondheid & Praktische Logistiek',
    description: 'De Masai, vaccinaties, visa, en wat je moet inpakken.',
    icon: 'ShieldCheck',
    items: [
      {
        q: 'Wie zijn de Masai?',
        a: 'De Masai zijn een semi-nomadisch herdersvolk, inheems in het noorden van Tanzania en het zuiden van Kenia, historisch gecentreerd rond veeteelt in de regio van de Serengeti en de Rift Valley — hetzelfde land waar veel safaricircuits vandaag doorheen gaan. Veel Masai-gemeenschappen nabij het Northern Circuit verwelkomen bezoekers voor culturele dorpsbezoeken, en bieden een authentieke, door de gids georganiseerde manier om hun tradities, kenmerkende kledij, en levenswijze te leren kennen, in plaats van hen alleen als achtergrond bij de wildlife te zien.',
      },
      {
        q: 'Wie zijn de Hadzabe, en kan ik hun gemeenschap bezoeken tijdens mijn safari?',
        a: 'De Hadzabe zijn een van de laatste echte jager-verzamelaargemeenschappen ter wereld, wonend rond Lake Eyasi in het noorden van Tanzania, en spreken nog altijd een kenmerkende klikkende taal. Ja — een respectvol, door een gids begeleid bezoek is mogelijk en een oprecht groeiende interesse voor reizigers die cultuur willen combineren met wildlife: een typisch bezoek omvat het meedoen aan een ochtendjacht of zoektocht naar voedsel met de Hadzabe, gevolgd door een stop bij de naburige Datoga, bekend om hun traditionele smeedkunst. Deze bezoeken werken het beste bij reizen die door de gemeenschap worden geleid met een ethisch protocol, in plaats van informele tussenstops.',
        relatedLinks: [{ label: 'Tarangire, Ngorongoro & Hadzabe Belevenis', href: '/experiences/cultural-experience' }],
      },
      {
        q: 'Heb ik vaccinaties of malariamedicatie nodig voor een Tanzania-safari?',
        a: 'Een gelekoortsvaccinatiecertificaat is vereist als je aankomt vanuit (of hebt gereisd via) een land met risico op overdracht van gele koorts — controleer de huidige vereisten voor jouw specifieke reisroute. Malariaprofylaxe wordt sterk aanbevolen voor de safarigebieden (het grootste deel van het Tanzaniaanse vasteland), al hebben Zanzibar en hooggelegen gebieden zoals Arusha en de rand van de Ngorongoro Crater een lager risico. Routinevaccinaties (tetanus, hepatitis A/B, tyfus) worden vaak aanbevolen door reisklinieken, maar zijn geen inreisvereisten voor Tanzania. Bevestig altijd het actuele advies bij een reisgeneeskundige professional voor vertrek.',
      },
      {
        q: 'Welk visum heb ik nodig om Tanzania te bezoeken?',
        a: 'De meeste nationaliteiten hebben een visum nodig om Tanzania binnen te komen, verkrijgbaar als e-visum dat vooraf online wordt aangevraagd, of voor veel nationaliteiten bij aankomst op de grote luchthavens. Het e-visum vooraf regelen is over het algemeen sneller en minder stressvol dan zonder visum aankomen. Vereisten en in aanmerking komende nationaliteiten veranderen regelmatig, dus bevestig de huidige regels rechtstreeks bij de Tanzaniaanse immigratieautoriteit of jouw ambassade dicht bij je reisdatum, in plaats van te vertrouwen op oudere informatie.',
      },
      {
        q: 'Wat moet ik inpakken voor een safari?',
        a: 'Kleding in neutrale kleuren (kaki, olijfgroen, bruin — vermijd felle kleuren en puur wit of zwart, die insecten kunnen aantrekken of opvallen bij wildlife), lagen voor de koude vroege ochtend game drives die snel opwarmen, een breedgerande hoed, zonnebrandcrème, een verrekijker, en een droge tas of gevoerde koffer voor cameraspullen vanwege de stoffige wegen. De meeste kampen bieden een wasservice aan, dus pakken voor 4-5 dagen in plaats van de hele reisduur is meestal voldoende, zelfs bij langere safari\'s.',
      },
      {
        q: 'Is Tanzania veilig voor toeristen?',
        a: "Tanzania's safarigebieden zijn goed gevestigde, van toerisme afhankelijke gebieden met een sterke veiligheidsstaat van dienst — de praktische risico's tijdens een begeleide safari gaan meer over zonblootstelling, wegomstandigheden, en gezond verstand rond wildlife (in het voertuig blijven, instructies van de gids volgen) dan over criminaliteit. Zoals bij elke internationale reis gelden standaard voorzorgsmaatregelen in steden en op transitpunten. Betrouwbare reisorganisaties briefen elke gast bij aanvang van de reis over veiligheidsverwachtingen.",
      },
    ],
  },
  {
    slug: 'about-ewa',
    title: 'Over EWA Safari Outfitters',
    description: 'Wie we zijn, onze referenties, en wat een EWA-safari anders maakt.',
    icon: 'Award',
    items: [
      {
        q: 'Wat is EWA Safari Outfitters?',
        a: "EWA Safari Outfitters is een lokaal geleide, in Arusha gevestigde reisorganisatie die sinds 2022 op maat gemaakte safari's organiseert in Tanzania, Kenia en Rwanda — hetzelfde team achter extreme wilderness adventure-reizen door de Serengeti, Ngorongoro, en verder. \"EWA\" staat voor Extreme Wilderness Adventure, de oorspronkelijke naam van het bedrijf, en elke reis is nog altijd opgebouwd rond diezelfde filosofie: echte, private, door een gids geleide safari's in plaats van kant-en-klare groepsreizen.",
        relatedLinks: [{ label: 'Over EWA Safari Outfitters', href: '/about' }],
      },
      {
        q: 'Heette EWA Safari Outfitters vroeger Extreme Wilderness Adventure?',
        a: 'Ja — EWA Safari Outfitters werd oorspronkelijk opgericht en gerund als Extreme Wilderness Adventure, en dat is waarom het website-domein (theextremewilderness.com) en het Instagram-account (@extremewildernessadventure) die naam nog altijd dragen. De naamsverandering naar "EWA Safari Outfitters" weerspiegelt hetzelfde lokaal geleide team, dezelfde gidsen, en dezelfde activiteiten in Arusha — het is een naamsvernieuwing, geen verandering van eigenaar of een ander bedrijf.',
        relatedLinks: [{ label: 'Over EWA Safari Outfitters', href: '/about' }],
      },
      {
        q: 'Is EWA Safari Outfitters TATO-gecertificeerd en een gelicentieerde reisorganisatie in Tanzania?',
        a: "Ja — EWA Safari Outfitters is TATO-gecertificeerd (lid van de Tanzania Association of Tour Operators), de brancheorganisatie die legitieme, gelicentieerde reisorganisaties in Tanzania keurt. Boeken bij een TATO-gecertificeerde reisorganisatie is een van de eenvoudigste manieren om te bevestigen dat een Tanzania-safaribedrijf goed gelicentieerd is, in plaats van een niet-geregistreerde tussenpersoon die reizen van andere reisorganisaties doorverkoopt.",
      },
      {
        q: 'Wat betekent TATO-lidmaatschap eigenlijk voor mijn boeking?',
        a: "TATO vertegenwoordigt en screent Tanzania's reisorganisaties al sinds 1983, dus lidmaatschap betekent dat EWA Safari Outfitters wordt erkend door dezelfde brancheorganisatie waarmee zowel de overheid als de internationale reisbranche werken — niet zomaar een bedrijf dat zichzelf gelicentieerd noemt. In de praktijk betekent dat een echte brancheorganisatie die achter de boeking staat als er ooit iets moet worden opgelost buiten onze eigen klantenservice om, en het is waarom TATO-lidmaatschap een van de standaardcontroles is die veiligheidsbewuste reizigers uitvoeren voordat ze überhaupt een Tanzania-safari boeken. EWA staat vermeld onder specifiek zes TATO-categorieën — Tour Operators, Mainland Tour Operators, DMC/Tour Operators, Mountain Trekking Operators, Zanzibar & Beach Holiday Operators, en Cultural Experience Operators — die onze safarireisroutes, Kilimanjaro-beklimmingen, Zanzibar-verlengingen en culturele excursies allemaal dekken.",
      },
      {
        q: 'Hoe kan ik het TATO-lidmaatschap van EWA Safari Outfitters zelf verifiëren?',
        a: "Rechtstreeks op TATO's eigen website — onze vermelding is openbaar, geen document dat wij beheren of onjuist zouden kunnen voorstellen. Het is een snelle, onafhankelijke manier om te bevestigen dat we een echte, gelicentieerde reisorganisatie zijn voordat je boekt, in plaats van op het woord van een willekeurige reisorganisatie te vertrouwen.",
        relatedLinks: [{ label: 'Bekijk Onze TATO-Ledenvermelding', href: 'https://tatotz.org/portfolio/ewa-safari-outfitters/' }],
      },
      {
        q: "Hoelang organiseert EWA Safari Outfitters al safari's?",
        a: "EWA Safari Outfitters organiseert al sinds 2022 safari's (5+ jaar actief onder de naam Extreme Wilderness Adventure vóór en tijdens de naamsverandering), met 200+ begeleide reizigers door Tanzania, Kenia en Rwanda, een 4,9-beoordeling op TripAdvisor, en gasten uit 40+ landen — gevestigd genoeg om deze routes goed te kennen, maar nog altijd klein genoeg dat elke reis individueel wordt gepland in plaats van ingepast in een vaste groepsreisroute.",
      },
      {
        q: 'Wat maakt EWA Safari Outfitters anders dan andere Tanzania-safaribedrijven?',
        a: 'Elke EWA-safari gebruikt een privévoertuig en gids — nooit een gedeelde truck met andere reizigers die je niet zelf hebt gekozen — en het bedrijf is 100% lokaal eigendom en gevestigd in Arusha, in plaats van een buitenlands agentschap dat reizen van andere reisorganisaties doorverkoopt. Gasten melden een Big Five-waarnemingspercentage van 100%, en de lokale kennis van het team ter plaatse (welke wegen open zijn, precies waar de trek zich deze week bevindt) komt voort uit daadwerkelijk gevestigd zijn waar de safari\'s plaatsvinden, niet uit een callcenter in het buitenland.',
        relatedLinks: [{ label: 'Wat Ons Anders Maakt', href: '/about#why-us' }],
      },
      {
        q: 'Wie wordt mijn safarigids bij EWA Safari Outfitters?',
        a: 'Het gidsenteam van EWA bestaat uit ervaren, in Tanzania gevestigde safarigidsen — waaronder Mike Mawolle, Nixon Massawe, en Josh Meela — elk met jarenlange ervaring op dezelfde routes van het Northern en Southern Circuit, precies het soort lokale, weg-voor-weg kennis dat het verschil maakt tussen een goede en een geweldige game drive. Gidsen worden per reis toegewezen, niet gedeeld over meerdere voertuigen tegelijk.',
        relatedLinks: [{ label: 'Maak Kennis met het Team', href: '/about#guides' }],
      },
      {
        q: 'Is EWA Safari Outfitters lokaal eigendom, of een buitenlands agentschap dat reizen doorverkoopt?',
        a: 'EWA Safari Outfitters is 100% lokaal eigendom en gevestigd in Arusha, Tanzania — geen buitenlands agentschap of boekingsplatform dat reizen van andere reisorganisaties met winstopslag doorverkoopt. Rechtstreeks boeken bij een lokaal geleide reisorganisatie is doorgaans ook kostenefficiënter, omdat de extra laag van internationale agentschapsmarge wegvalt.',
      },
      {
        q: 'Waar is EWA Safari Outfitters gevestigd, en kan ik het kantoor bezoeken?',
        a: 'EWA Safari Outfitters is gevestigd op 20 Ingira Street, Arusha, Tanzania — dezelfde stad van waaruit de meeste safari\'s van het Northern Circuit en Kilimanjaro-beklimmingen beginnen. Bezoekers zijn welkom om voor of na een reis langs te komen bij het kantoor; neem vooraf contact op via info@theextremewilderness.com of +255 (0) 747 999 070 om een bezoek te regelen.',
        relatedLinks: [{ label: 'Bezoek Ons Kantoor', href: '/about' }, { label: 'Neem Contact Op', href: '/contact' }],
      },
      {
        q: 'Hoe snel reageert EWA Safari Outfitters op aanvragen?',
        a: 'EWA Safari Outfitters reageert doorgaans binnen enkele uren op safari-aanvragen tijdens Oost-Afrikaanse kantooruren, meestal nog dezelfde dag daarbuiten. De snelste manier om een echte, op maat gemaakte offerte te krijgen (geen generieke prijslijst) is via het aanvraagformulier op elke safari-, bestemmings-, of FAQ-pagina op deze site, dat rechtstreeks bij het team in Arusha terechtkomt.',
        relatedLinks: [{ label: 'Neem Contact Op', href: '/contact' }],
      },
      {
        q: 'Is EWA Safari Outfitters alleen actief in Tanzania, of ook in Kenia en Rwanda?',
        a: 'EWA Safari Outfitters is gevestigd in en diep geworteld in Tanzania, maar is ook actief en combineert reizen door Kenia (Masai Mara en verder) en Rwanda (gorilla trekking in Volcanoes National Park) — veel gasten combineren twee of drie landen in één op maat gemaakte reisroute in plaats van elk apart te boeken.',
        relatedLinks: [{ label: "Safari's in Kenia", href: '/kenya' }, { label: "Safari's in Rwanda", href: '/rwanda' }],
      },
    ],
  },
]

export const FAQ_CATEGORY_SLUGS = faqCategories.map((c) => c.slug)
