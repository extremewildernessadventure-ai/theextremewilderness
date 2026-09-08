import type { FaqCategory } from './faq'

// Norwegian (nb-NO / Bokmål) translation of faq.ts. Category slugs/order stay
// identical to the English file (stable jump-nav anchors); only
// title/description/items are localized. RELATED_LINK_IMAGES is not
// duplicated here — it's resolved once in faq.ts and shared across every
// locale file.
export const faqCategories: FaqCategory[] = [
  {
    slug: 'family-and-group-safaris',
    title: 'Familie- & Gruppesafarier',
    description: 'Safarier med barn, reiser på tvers av generasjoner og reiser i mindre grupper.',
    icon: 'Users',
    items: [
      {
        q: 'Er Tanzania trygt for en familiesafari med barn?',
        a: 'Ja — Tanzania er en av Afrikas mest etablerte destinasjoner for familiesafari. Den viktigste risikoen å håndtere er malaria, så de fleste familier reiser med forebyggende medisin og velger, når det er mulig, camper i høyereliggende områder med lavere risiko. Seriøse arrangører bruker private kjøretøy (ikke delte game drive-turer), holder de daglige kjøretidene kortere for yngre barn, og velger familievennlige lodge-alternativer med forbundne rom eller familietelt fremfor standard dobbeltrom. Mange camper setter en minimumsalder (vanligvis 6-8 år) for gåsafari eller enkelte aktiviteter, men selve game drive-turene er åpne for alle aldre.',
        relatedLinks: [{ label: '10-dagers luksus-familiesafari', href: '/safaris/10-days-luxury-family' }],
      },
      {
        q: 'Hva er den beste safarireiseplanen for en familie med små barn?',
        a: 'De beste familiesafari-reiseplanene holder seg innenfor Tanzanias nordlige safarirute (Serengeti, Ngorongoro, Tarangire, Lake Manyara) for å minimere lange overføringsdager, bruker private 4x4-kjøretøy fremfor delte lastebiler, og legger inn nedetid i hver camp — bassengtid, naturvandringer for barn, junior ranger-programmer — fremfor game drive-turer på rad. En privat guide som kan tilpasse dagens tempo til et barns oppmerksomhetsspenn, utgjør en større forskjell enn hvilke parker som velges.',
        relatedLinks: [{ label: 'Reisemål etter safarirute', href: '/destinations/tanzania' }],
      },
      {
        q: 'Hvor mange dager bør en familiesafari vare?',
        a: 'De fleste familiesafarier varer 5-7 dager — lenge nok til å dekke 2-3 parker uten å skynde seg, kort nok til å holde på yngre barns oppmerksomhet og håndtere jetlag. Familier som kombinerer safari med en badeferieforlengelse på Zanzibar, legger ofte til 3-4 dager ved kysten, siden små barn som regel takler et strandopphold bedre enn game drive-turer på rad.',
      },
      {
        q: 'Kan besteforeldre eller en gruppe på tvers av generasjoner reise sammen på safari?',
        a: 'Ja — safarier på tvers av generasjoner og i mindre grupper er vanlig, og campene kan som regel håndtere et bredt aldersspenn innenfor samme reiseplan. Det viktigste å planlegge for, er tempoet: En reise bygget rundt en 70 år gammel besteforelder og et 6 år gammelt barnebarn fungerer best med kortere kjøredager, camper med lett tilgjengelige rom (færre trinn, telt i planet) og innlagte hviledager fremfor et tettpakket program laget for spreke solo-reisende.',
        relatedLinks: [{ label: 'Senior-, jubileums- & gruppesafarier', href: '/safaris/12-day-seniors-anniversary-groups-safari' }],
      },
      {
        q: 'Hva er inkludert i prisen på en familiesafaripakke?',
        a: 'En godt sammensatt familiesafaripakke inkluderer som regel et privat kjøretøy og en guide for hele reisen, alle park- og naturvernavgifter, overnatting, de fleste eller alle måltider, samt interne overføringer. Det som vanligvis IKKE er inkludert: internasjonale flyreiser, visum, tips, og valgfrie tillegg som ballongturer. Spør spesifikt om den oppgitte prisen er per person eller per familie, siden prisstrukturen for familierom og forbundne telt varierer mye mellom camper.',
      },
    ],
  },
  {
    slug: 'best-time-and-great-migration',
    title: 'Beste Reisetid & Den Store Migrasjonen',
    description: 'Sesonger, vær, og når man kan se gnu-migrasjonen.',
    icon: 'Calendar',
    items: [
      {
        q: 'Når er den beste tiden for å se elvekrysningene i gnu-migrasjonen?',
        a: 'Det avhenger av hvilken del av migrasjonen du vil se. De dramatiske krysningene av Mara-elven skjer omtrent fra juli til oktober i den nordlige Serengeti, når over en million gnuer trekker nordover mot Kenya. Kalvingssesongen — kanskje den mest actionfylte perioden når det gjelder rovdyr — skjer fra januar til mars i den sørlige Serengeti (Ndutu-området). Det finnes ingen enkelt «beste måned» for hele migrasjonen, siden det er en helårshendelse i konstant bevegelse, ikke en fast dato.',
        relatedLinks: [{ label: 'Serengeti nasjonalpark', href: '/destinations/serengeti' }],
      },
      {
        q: 'Når finner Den store migrasjonen sted i Tanzania?',
        a: 'Den store migrasjonen foregår et sted i Serengeti-økosystemet hver eneste måned av året — det er en sammenhengende syklus, ikke en enkelthendelse med en fast start- og sluttdato. Grovt sett: kalving i sør januar-mars, bevegelse nordover gjennom det sentrale Serengeti april-juni, elvekrysninger i nord juli-oktober, og retur sørover fra rundt november. Nøyaktig hvor flokkene befinner seg en gitt uke, avhenger av nedbøren, så det nøyaktige tidspunktet varierer fra år til år.',
      },
      {
        q: 'Hva er den beste måneden å besøke Serengeti?',
        a: 'Det finnes ingen universelt «beste» måned — det avhenger av hva du vil se. For elvekrysninger bør du sikte mot august eller september. For kalvingssesongen og den høyeste rovdyrtettheten: januar til mars. For færre folkemengder og frodig, grønt landskap er den lille regntiden i november undervurdert. Juni og juli tilbyr et solid mellomalternativ: godt vær, migrasjonsflokker som beveger seg gjennom det sentrale og vestlige Serengeti, og mindre folkemengder enn i høysesongen i august.',
      },
      {
        q: 'Er Tanzania et helårs safarimål?',
        a: 'Ja. Tanzania har ingen egentlig lavsesong for dyreliv — tørketiden (juni-oktober og januar-februar) samler dyrene rundt vannkilder, noe som gjør observasjoner lettere, mens regntiden (mars-mai, november) gir frodige landskap, nyfødte dyr, og betydelig lavere priser og færre folkemengder. Den store regntiden (mars-april) er den roligste perioden og den eneste tiden enkelte avsidesliggende camper stenger, men hovedrutene holder åpent.',
      },
      {
        q: 'Når er kalvingssesongen i Serengeti, og hvorfor er den viktig?',
        a: 'Kalvingssesongen varer omtrent fra januar til mars på de kortgressede slettene i det sørlige Serengeti og Ndutu-området, når opptil 8 000 gnukalver kan bli født på en enkelt dag. Den trekker til seg migrasjonens høyeste konsentrasjon av rovdyr — løve, gepard og hyene — noe som gjør den til et av de beste tidsvinduene for rovdyraction, selv om det ikke er noen elvekrysninger på denne tiden av året.',
      },
    ],
  },
  {
    slug: 'planning-costs-and-comparisons',
    title: 'Planlegging, Kostnader & Kenya vs. Tanzania',
    description: 'Hva en safari koster, hva som er inkludert, og hvordan man velger mellom landene.',
    icon: 'DollarSign',
    items: [
      {
        q: 'Hvor mye koster en Tanzania-safari?',
        a: 'Kostnaden for en Tanzania-safari varierer mye etter sesong, gruppestørrelse og campstil. Som en grov rettesnor koster en velorganisert safari i mellomklassen omtrent $400-$600 per person per dag, en luksussafari kan koste $700-$1 200+ per person per dag, og budsjett-campingsafarier kan komme under $300 per dag. Prisen per person faller betydelig ved større grupper, siden det private kjøretøyet, guiden og parkavgiftene deles. Nøyaktig pris avhenger sterkt av hvilken sesong du reiser i — høysesong (juni-oktober, januar-februar) gir premiumpriser.',
        relatedLinks: [{ label: 'Se safaripakker', href: '/safaris' }],
      },
      {
        q: 'Kenya eller Tanzania — hva er best for en safari?',
        a: 'Ingen av dem er objektivt «best» — de passer til ulike prioriteringer. Tanzania har mer samlet parkareal, Ngorongoro-krateret, Zanzibar som badeferieforlengelse, og huser migrasjonen mesteparten av året. Kenya har Masai Mara (del av det samme migrasjonsøkosystemet, best for elvekrysninger juli-oktober), generelt kortere flytid fra Europa, og en litt mer utviklet safariinfrastruktur i enkelte områder. Mange reisende kombinerer begge land i én reise fremfor å velge det ene.',
        relatedLinks: [{ label: 'Reisemål i Tanzania', href: '/destinations/tanzania' }, { label: 'Safarier i Kenya', href: '/kenya' }],
      },
      {
        q: 'Hvor mange dager trenger jeg til en Tanzania-safari?',
        a: '7 dager er det ideelle antallet for å dekke den nordlige safariruten (Serengeti, Ngorongoro, Tarangire) skikkelig uten å føle seg stresset. 4-5 dager fungerer for en fokusert reise til 2 parker. 10-14 dager gjør det mulig å kombinere nord med den sørlige eller vestlige safariruten, eller legge til Zanzibar eller en Kilimanjaro-trekking. Færre enn 4 dager på safari har en tendens til å føles som mye kjøring for altfor lite tid i selve parkene.',
      },
      {
        q: 'Hva er inkludert i en safaripris, og hva er ikke?',
        a: 'De fleste Tanzania-safaripakker inkluderer: et privat kjøretøy med sjåfør-guide, alle park- og naturvernavgifter, overnatting, og de fleste måltider. Vanligvis IKKE inkludert: internasjonale flyreiser, tanzanianske visumgebyrer, reiseforsikring, tips til guider og campersonale, alkoholholdige drikker, og valgfrie tillegg som ballongturer eller en badeferieforlengelse på Zanzibar. Bekreft alltid nøyaktig hva som er inkludert før du sammenligner tilbud, siden «safaripris» betyr forskjellige ting hos ulike arrangører.',
      },
      {
        q: 'Er det billigere å bestille en safari direkte hos en lokal arrangør?',
        a: 'Generelt sett ja — å bestille direkte hos en lokalt basert, lisensiert arrangør i Tanzania fjerner påslaget som internasjonale bestillingsplattformer og byråer legger på, ofte 15-30 %. Ulempen er at du må gjøre mer av researchen selv for å sjekke arrangørens lisens, anmeldelser og kvaliteten på kjøretøy og guider, siden du mister plattformens kontrollag. En lokaleid arrangør basert i Arusha har vanligvis også bedre sanntidskunnskap om forholdene i parkene, veistenginger, og hvor migrasjonen befinner seg akkurat nå.',
      },
    ],
  },
  {
    slug: 'tanzania-circuits-and-wildlife',
    title: 'Tanzanias Safariruter & Dyreliv',
    description: 'Big Five, Tanzanias safariruter, og hva du kan forvente i hver park.',
    icon: 'Binoculars',
    items: [
      {
        q: 'Hva er Big Five, og hvor kan jeg se dem i Tanzania?',
        a: 'Big Five — løve, leopard, elefant, bøffel og neshorn — finnes alle i Tanzania, selv om neshornobservasjoner er de sjeldneste, siden bestanden av svart neshorn er lav og nesten utelukkende konsentrert i Ngorongoro-krateret. Løve, elefant og bøffel er pålitelige observasjoner i Serengeti, Ngorongoro og Tarangire. Leoparden er den vanskeligste av de fem å få øye på — mest pålitelig i Seronera-området i det sentrale Serengeti, der de foretrekker trær langs elvene.',
        relatedLinks: [{ label: 'Serengeti nasjonalpark', href: '/destinations/serengeti' }, { label: 'Ngorongoro-krateret', href: '/destinations/ngorongoro' }],
      },
      {
        q: 'Hva er forskjellen mellom Ngorongoro-krateret og Serengeti?',
        a: 'Ngorongoro er et enkelt, kompakt og selvstendig økosystem — en kollapset vulkansk kaldera på omtrent 260 km² på kraterbunnen — der dyrelivet er uvanlig konsentrert og som regel kan sees på én eneste, svært produktiv dag. Serengeti er enormt (nesten 15 000 km²), åpne sletter der migrasjonen beveger seg, og observasjonene er spredt over et mye større område over flere dager. De fleste reiseplaner gjør begge deler: Ngorongoro for en tett, pålitelig dag med Big Five-observasjoner, og deretter Serengeti for opplevelsen av migrasjonen på de åpne slettene.',
        relatedLinks: [{ label: 'Ngorongoro-krateret', href: '/destinations/ngorongoro' }],
      },
      {
        q: 'Hva er forskjellen mellom Tanzanias nordlige, sørlige og vestlige safariruter?',
        a: 'Den nordlige safariruten (Serengeti, Ngorongoro, Tarangire, Lake Manyara) er Tanzanias klassiske og mest besøkte rute — best infrastruktur, migrasjonen, pålitelige Big Five-observasjoner. Den sørlige safariruten (Ruaha, Nyerere/Selous) er avsidesliggende, uten folkemengder og villere — større, mer spredte parker med langt færre kjøretøy. Den vestlige safariruten (Mahale, Katavi, Gombe) er sjimpansetrekking-territorium, som for det meste nås med småfly, og den mest utrådte av de tre.',
      },
      {
        q: 'Er den sørlige safariruten (Ruaha, Nyerere/Selous) verdt et besøk?',
        a: 'Ja, spesielt for gjengangere eller alle som ønsker en roligere, mer eksklusiv safariopplevelse — Ruaha er Tanzanias største nasjonalpark og en av de beste for løve og afrikansk villhund, og Nyerere (tidligere Selous) er Afrikas største verneområde, kjent for båtsafarier ved siden av game drive-turer. Begge har bare en brøkdel av besøkstallene til den nordlige safariruten. Ulempen er tilgjengeligheten — de fleste reiser på den sørlige safariruten flys inn fremfor å kjøres, noe som øker kostnaden.',
        relatedLinks: [{ label: 'Ruaha nasjonalpark', href: '/destinations/ruaha' }, { label: 'Nyerere nasjonalpark (Selous)', href: '/destinations/nyerere' }],
      },
      {
        q: 'Hvilket dyreliv vil jeg se i Tarangire nasjonalpark?',
        a: 'Tarangire er mest kjent for sine elefantflokker — noen av de største konsentrasjonene i Tanzania, spesielt i tørketiden (juni-oktober) når de samles langs Tarangire-elven — samt sine karakteristiske, eldgamle baobabtrær. Parken er også sterk på løveobservasjoner, og en av de bedre parkene på den nordlige safariruten for å få øye på de mindre, sjeldnere sette antilopeartene. Den besøkes vanligvis som et 1-2-dagers tillegg sammen med Serengeti og Ngorongoro.',
        relatedLinks: [{ label: 'Tarangire nasjonalpark', href: '/destinations/tarangire' }],
      },
    ],
  },
  {
    slug: 'kenya-and-rwanda',
    title: 'Safarier i Kenya & Rwanda',
    description: 'Å kombinere land, Masai Mara, og gorillatrekking.',
    icon: 'Compass',
    items: [
      {
        q: 'Kan jeg kombinere en Kenya- og Tanzania-safari i én reise?',
        a: 'Ja, og det er en vanlig måte å se både Serengeti og Masai Mara på — teknisk sett ett sammenhengende økosystem delt av en internasjonal grense. Selve grensepasseringen krever enten en planlagt småflyflygning eller en lang kjøretur over land pluss separate parkavgifter på hver side, så de fleste kombinerte reiseplaner setter av minst 10-12 dager totalt for å unngå at reisen føles stresset.',
        relatedLinks: [{ label: '10-dagers Kenya- & Tanzania-safari', href: '/safaris/10-day-kenya-tanzania-safari' }],
      },
      {
        q: 'Hvor mye koster gorillatrekking i Rwanda, og trenger jeg en tillatelse?',
        a: 'Ja, en tillatelse er obligatorisk og finnes i begrenset antall — Volcanoes nasjonalpark i Rwanda utsteder et fast antall gorillatillatelser per dag, for tiden priset til $1 500 per person, som dekker en time med en habituert gorillafamilie samt parkavgifter og en guide. Tillatelser bør bestilles i god tid, spesielt for juli-september og desember-februar, de tørreste og mest populære periodene for trekking.',
        relatedLinks: [{ label: '4-dagers gorillatrekking i Rwanda', href: '/safaris/4-day-rwanda-gorilla-trekking' }, { label: 'Volcanoes nasjonalpark', href: '/destinations/volcanoes' }],
      },
      {
        q: 'Hva er den beste tiden for å se gorillaer i Rwanda?',
        a: 'Gorillatrekking er mulig hele året siden tillatelser ikke er sesongbaserte, men tørketidene — juni-september og desember-februar — gjør vandringen gjennom det bratte terrenget i Volcanoes nasjonalpark lettere og mindre gjørmete. De våtere månedene (mars-mai, oktober-november) betyr tøffere stier, men merkbart færre turister og noen ganger rimeligere overnatting i nærheten.',
      },
      {
        q: 'Er Masai Mara det samme som Serengeti?',
        a: 'De er del av det samme sammenhengende økosystemet — Masai Mara er i bunn og grunn den kenyanske, nordlige forlengelsen av Serengeti — kun adskilt av en internasjonal grense som selve dyrelivet ignorerer. Mara er mindre og får migrasjonsflokkene i elvekrysningssesongen (omtrent juli-oktober); Serengeti er langt større og huser migrasjonen resten av året, inkludert kalvingssesongen.',
      },
      {
        q: 'Hvor fysisk krevende er gorillatrekking?',
        a: 'Det varierer mye fra trekk til trekk — gorillafamilier spores og holder ikke til på ett fast sted, så en vandring kan variere fra under en time til 4-5 timer hver vei gjennom bratt, til tider gjørmete vulkansk skog i høyden (Volcanoes nasjonalpark ligger på 2 400-4 500 m). Et rimelig kondisjonsnivå er genuint nyttig; bærere er tilgjengelige for å bære utstyr og gi en støttende hånd på de brattere partiene for alle som er bekymret for terrenget.',
      },
    ],
  },
  {
    slug: 'kilimanjaro-and-trekking',
    title: 'Kilimanjaro & Trekking',
    description: 'Ruter, pris, vanskelighetsgrad, og suksessrater for å bestige Kilimanjaro.',
    icon: 'Mountain',
    items: [
      {
        q: 'Hva er den enkleste ruten for å bestige Kilimanjaro?',
        a: 'Machame er den mest populære ruten og tilbyr en god balanse mellom utsikt og akklimatisering, men Lemosho-ruten anses generelt som den enkleste med tanke på suksessrate til toppen, hovedsakelig fordi den lengre reiseplanen (7-8 dager) gir kroppen mer tid til å akklimatisere seg. Marangu er den eneste ruten med hytteovernatting i stedet for telt, og har en slakere daglig stigning, men den kortere standardreiseplanen betyr mindre akklimatiseringstid, noe som kan oppveie den lettere vandringen.',
        relatedLinks: [{ label: 'Kilimanjaro Machame-ruten', href: '/trekking/machame' }, { label: 'Alle Kilimanjaro-ruter', href: '/trekking' }],
      },
      {
        q: 'Hvor mye koster det å bestige Kilimanjaro?',
        a: 'Kostnadene for å bestige Kilimanjaro ligger vanligvis mellom $2 000-$2 500 per person for en budsjett- til mellomklasse gruppebestigning, opptil $3 500-$5 000+ for en privat, lengre, bedre støttet rute med et høyere forhold mellom guider og bestigere. Parkavgiftene alene (fastsatt av Tanzanias nasjonalparkmyndighet) utgjør en stor, fast del av ethvert tilbud, så svært billige bestigninger betyr som regel at det kuttes hjørner på mannskapslønn, utstyr eller akklimatiseringsdager — noe som påvirker både sikkerheten og suksessraten til toppen.',
        relatedLinks: [{ label: 'Kilimanjaro Machame-ruten', href: '/trekking/machame' }],
      },
      {
        q: 'Hva er suksessraten for å nå toppen av Kilimanjaro?',
        a: 'Suksessratene til toppen varierer enormt med rutens lengde: kortere 5-dagersruter har suksessrater helt ned mot 40-50 % på grunn av utilstrekkelig akklimatiseringstid, mens godt tilpassede 7-8-dagersruter som Lemosho rapporterer suksessrater på 85-90 %+. Den viktigste enkeltfaktoren for å nå toppen er ikke kondisjon — det er å gi kroppen nok dager til å akklimatisere seg til høyden, som er grunnen til at lengre ruter jevnt over gjør det bedre enn kortere.',
      },
      {
        q: 'Hvor mange dager tar det å bestige Kilimanjaro?',
        a: 'De fleste rutene tar 6-8 dager tur-retur, selv om Marangu kan gjøres på 5, og lengre alternativer som en full Lemosho- eller Northern Circuit-rute kan ta 8-9 dager. Å legge til bare én ekstra akklimatiseringsdag gir en merkbar forbedring i både komfort og suksessrate, så de fleste erfarne arrangører fraråder den korteste tilgjengelige reiseplanen på en gitt rute.',
      },
      {
        q: 'Må jeg være en erfaren fjellvandrer for å bestige Kilimanjaro?',
        a: 'Ingen teknisk klatreerfaring eller -utstyr er nødvendig på noen av standard-trekkingrutene — det er en lang vandring i stor høyde, ikke en teknisk bestigning. Når det er sagt, gjør et rimelig grunnleggende kondisjonsnivå (å kunne gå komfortabelt 5-7 timer om dagen) en reell forskjell for hvor mye du kommer til å like det, og høyden påvirker kondisjonsnivået uforutsigbart, så selv sterke fjellvandrere bør ta akklimatisering på alvor.',
      },
    ],
  },
  {
    slug: 'honeymoon-zanzibar-and-experiences',
    title: 'Bryllupsreise, Zanzibar & Spesielle Opplevelser',
    description: 'Bryllupsreisesafarier, badeferieforlengelser, ballongturer, og fotoreiser.',
    icon: 'Heart',
    items: [
      {
        q: 'Hva er den beste bryllupsreise-reiseplanen som kombinerer safari og strand?',
        a: 'Den klassiske kombinasjonen er 4-5 netter på safari på den nordlige safariruten (Serengeti og Ngorongoro dekker høydepunktene effektivt), etterfulgt av 4-5 netter på Zanzibar for strandhalvdelen av reisen — totalt omtrent 9-10 dager. Camper spesielt rettet mot bryllupsreisende tilbyr som regel privat middagsservering, omgivelser med fokus på voksne, og eksklusive teltsuiter fremfor familietilpassede rom, så det er verdt å bekrefte at et sted egner seg for bryllupsreiser og ikke bare er familievennlig.',
        relatedLinks: [{ label: '9-dagers bryllupsreisesafari & Zanzibar', href: '/safaris/9-day-honeymoon-safari-zanzibar' }, { label: 'Zanzibar', href: '/destinations/zanzibar' }],
      },
      {
        q: 'Hvor mye koster en ballongtur over Serengeti?',
        a: 'En ballongtur over Serengeti koster som regel $550-$700 per person for omtrent en time i luften ved soloppgang, vanligvis etterfulgt av en champagnefrokost i bushen. Den prises som et valgfritt tillegg til en standard safarireiseplan fremfor å være inkludert som standard, og må bestilles i forkant siden hvert ballongselskap bare flyr et begrenset antall personer hver morgen.',
      },
      {
        q: 'Kan jeg kombinere en Tanzania-safari med en badeferie på Zanzibar?',
        a: 'Ja — det er en av de mest populære safariforlengelsene, og logistisk enkelt: Zanzibar er en kort flytur fra Arusha eller de viktigste safarirutene, så de fleste arrangører bygger den inn som en sømløs siste etappe. En vanlig fordeling er 5-7 dager på safari etterfulgt av 3-5 dager på stranden, men forholdet er helt fleksibelt avhengig av hvor mye strandtid versus dyrelivstid du ønsker.',
        relatedLinks: [{ label: '10-dagers safari & Zanzibar', href: '/safaris/10-day-safari-zanzibar' }],
      },
      {
        q: 'Skiller en fotosafari seg fra en vanlig safari?',
        a: 'Ja — en dedikert fotosafari bruker kjøretøy tilpasset fotografer (bønnepose-støtter, ekstra vindusplass, noen ganger en takluke i fotografhøyde), holder gruppene mindre, og legger dagen opp etter lyset — man forlater campen før soloppgang og blir ute gjennom den gylne timen fremfor å følge et fast kjøreskjema. Guider på fotofokuserte reiser blir også vanligvis instruert i å prioritere posisjonering for bilder fremfor bare å krysse av arter.',
        relatedLinks: [{ label: '7-dagers fotoeventyrsafari', href: '/safaris/7-day-photography-adventure-safari' }],
      },
      {
        q: 'Hva er en fly-in safari, og er den ekstra kostnaden verdt det?',
        a: 'En fly-in safari bruker småfly for å bevege seg mellom parkene i stedet for lange overføringer med safarikjøretøy — en kjøretur som kan ta 6-8 timer, blir til en flytur på 45-60 minutter. Den ekstra kostnaden er verdt det hovedsakelig for reiser som dekker den sørlige eller vestlige safariruten (Ruaha, Nyerere, Mahale), der veioverføringer er reelt lange og tøffe; for parkene i den nordlige safariruten, som ligger tett sammen, er kjøring mellom dem ofte en del av opplevelsen fremfor en ulempe.',
      },
    ],
  },
  {
    slug: 'culture-health-and-logistics',
    title: 'Kultur, Helse & Praktisk Logistikk',
    description: 'Masaiene, vaksinasjoner, visum, og hva du bør pakke.',
    icon: 'ShieldCheck',
    items: [
      {
        q: 'Hvem er masaiene?',
        a: 'Masaiene er et halvnomadisk gjeterfolk som er hjemmehørende i det nordlige Tanzania og det sørlige Kenya, historisk sentrert rundt kvegdrift i Serengeti- og Rift Valley-regionen — det samme landet mange safariruter går gjennom i dag. Mange masai-samfunn nær den nordlige safariruten ønsker besøkende velkommen til kulturelle landsbybesøk, og tilbyr en genuin, guidearrangert måte å lære om deres tradisjoner, særegne klesdrakt og levemåte på, fremfor å se dem bare som en kulisse for dyrelivet.',
      },
      {
        q: 'Hvem er hadzabe-folket, og kan jeg besøke samfunnet deres på safari?',
        a: 'Hadzabe-folket er et av de siste ekte jeger-sanker-samfunnene på jorden, og lever rundt Lake Eyasi i det nordlige Tanzania og snakker fortsatt et særegent klikkspråk. Ja — et respektfullt, guideledet besøk er mulig og er en genuint økende interesse blant reisende som ønsker kultur ved siden av dyreliv: Et typisk besøk innebærer å bli med på en morgenjakt eller en sankevandring med hadzabe-folket, etterfulgt av et stopp hos naboene datoga, kjent for sitt tradisjonelle smedhåndverk. Slike besøk fungerer best som samfunnsledede reiser med etiske retningslinjer, fremfor uformelle innom-besøk.',
        relatedLinks: [{ label: 'Tarangire, Ngorongoro & hadzabe-opplevelse', href: '/experiences/cultural-experience' }],
      },
      {
        q: 'Trenger jeg vaksiner eller malariamedisin for en Tanzania-safari?',
        a: 'Et vaksinasjonssertifikat mot gulfeber er påkrevd hvis du ankommer fra (eller har vært i transitt gjennom) et land med risiko for gulfebersmitte — sjekk gjeldende krav opp mot din spesifikke reiserute. Malariaprofylakse anbefales sterkt for safariregionene (det meste av det tanzanianske fastlandet), selv om Zanzibar og høyereliggende områder som Arusha og kanten av Ngorongoro-krateret har lavere risiko. Rutinevaksiner (stivkrampe, hepatitt A/B, tyfoidfeber) anbefales ofte av reiseklinikker, men er ikke innreisekrav for Tanzania. Bekreft alltid gjeldende anbefalinger hos en reisemedisinsk fagperson før avreise.',
      },
      {
        q: 'Hvilket visum trenger jeg for å besøke Tanzania?',
        a: 'De fleste nasjonaliteter trenger visum for å reise inn i Tanzania, som enten kan skaffes som e-visum søkt om på nett i forkant, eller for mange nasjonaliteter, ved ankomst på de store flyplassene. Å ordne e-visumet før reisen er generelt raskere og mindre stressende enn å ankomme uten. Kravene og hvilke nasjonaliteter som er kvalifisert, endres jevnlig, så bekreft gjeldende regler direkte hos Tanzanias innvandringsmyndighet eller din ambassade nær reisedatoen din, fremfor å stole på eldre informasjon.',
      },
      {
        q: 'Hva bør jeg pakke til en safari?',
        a: 'Klær i nøytrale farger (kaki, oliven, brunt — unngå sterke farger samt rent hvitt eller svart, som kan tiltrekke insekter eller skille seg ut for dyrelivet), lag på lag til de kalde tidlig-morgen game drive-turene som raskt blir varmere, en bredbremmet hatt, solkrem, kikkert, og en tørrbag eller polstret veske til kamerautstyr på grunn av støvete veier. De fleste camper tilbyr vaskeservice, så det er som regel nok å pakke for 4-5 dager fremfor hele reisens lengde, selv på lengre safarier.',
      },
      {
        q: 'Er Tanzania trygt for turister?',
        a: 'Tanzanias safariregioner er godt etablerte, turismeavhengige områder med god sikkerhetsstatistikk — de praktiske risikoene på en guidet safari handler mer om soleksponering, veiforhold og sunn fornuft i nærheten av dyreliv (bli værende i kjøretøyet, følge guidens instruksjoner) enn om kriminalitet. Som ved all internasjonal reise gjelder vanlige forholdsregler i byer og på transittsteder. Seriøse arrangører gir alle gjester en gjennomgang av sikkerhetsforventninger ved starten av reisen.',
      },
    ],
  },
  {
    slug: 'about-ewa',
    title: 'Om EWA Safari Outfitters',
    description: 'Hvem vi er, våre kvalifikasjoner, og hva som gjør en EWA-safari annerledes.',
    icon: 'Award',
    items: [
      {
        q: 'Hva er EWA Safari Outfitters?',
        a: 'EWA Safari Outfitters er en lokaleid safariarrangør basert i Arusha som har arrangert skreddersydde safarier i Tanzania, Kenya og Rwanda siden 2022 — det samme teamet bak ekstreme villmarksopplevelser gjennom Serengeti, Ngorongoro og videre. «EWA» står for Extreme Wilderness Adventure, selskapets opprinnelige navn, og hver reise er fortsatt bygget rundt den samme filosofien: ekte, private, guideledede safarier fremfor pakkede gruppereiser.',
        relatedLinks: [{ label: 'Om EWA Safari Outfitters', href: '/about' }],
      },
      {
        q: 'Het EWA Safari Outfitters tidligere Extreme Wilderness Adventure?',
        a: 'Ja — EWA Safari Outfitters ble opprinnelig grunnlagt og drevet som Extreme Wilderness Adventure, som er grunnen til at nettstedets domene (theextremewilderness.com) og Instagram-kontoen (@extremewildernessadventure) fortsatt bærer det navnet. Rebrandingen til «EWA Safari Outfitters» gjenspeiler det samme lokaleide teamet i Arusha, de samme guidene og den samme driften — det er en navneoppfriskning, ikke et eierskifte eller et annet selskap.',
        relatedLinks: [{ label: 'Om EWA Safari Outfitters', href: '/about' }],
      },
      {
        q: 'Er EWA Safari Outfitters TATO-sertifisert og en lisensiert turoperatør i Tanzania?',
        a: 'Ja — EWA Safari Outfitters er TATO-sertifisert (medlem av Tanzania Association of Tour Operators), bransjeorganisasjonen som godkjenner legitime, lisensierte arrangører i Tanzania. Å bestille hos en TATO-sertifisert arrangør er en av de enkleste måtene å bekrefte at et Tanzania-safariselskap er behørig lisensiert, fremfor en uregistrert mellommann som videreselger andre arrangørers reiser.',
      },
      {
        q: 'Hva betyr TATO-medlemskapet egentlig for bestillingen min?',
        a: 'TATO har representert og godkjent Tanzanias turoperatører siden 1983, så medlemskapet betyr at EWA Safari Outfitters er anerkjent av den samme bransjeorganisasjonen som både myndighetene og den internasjonale reisebransjen samarbeider med — ikke bare et selskap som kaller seg selv lisensiert. I praksis betyr det at en reell bransjeorganisasjon står bak bestillingen hvis noe noensinne må løses utover vår egen kundeservice, og det er derfor TATO-medlemskap er en av standardsjekkene sikkerhetsbevisste reisende gjør før de i det hele tatt bestiller en Tanzania-safari. EWA er spesifikt oppført under seks TATO-kategorier — Tour Operators, Mainland Tour Operators, DMC/Tour Operators, Mountain Trekking Operators, Zanzibar & Beach Holiday Operators, og Cultural Experience Operators — som dekker våre safarireiseplaner, Kilimanjaro-bestigninger, Zanzibar-forlengelser og kulturelle utflukter.',
      },
      {
        q: 'Hvordan kan jeg selv bekrefte EWA Safari Outfitters’ TATO-medlemskap?',
        a: 'Direkte på TATOs egen nettside — vår oppføring er offentlig og ikke noe vi kontrollerer eller kunne forfalsket. Det er en rask, uavhengig måte å bekrefte at vi er en ekte, lisensiert arrangør før du bestiller, fremfor bare å ta en arrangørs ord for det.',
        relatedLinks: [{ label: 'Se vår TATO-medlemsoppføring', href: 'https://tatotz.org/portfolio/ewa-safari-outfitters/' }],
      },
      {
        q: 'Hvor lenge har EWA Safari Outfitters arrangert safarier?',
        a: 'EWA Safari Outfitters har arrangert safarier siden 2022 (over 5 års drift under navnet Extreme Wilderness Adventure før og gjennom rebrandingen), med over 200 guidede reisende gjennom Tanzania, Kenya og Rwanda, en TripAdvisor-vurdering på 4,9, og gjester fra over 40 land — etablert nok til å kjenne disse rutene godt, men fortsatt lite nok til at hver reise planlegges individuelt fremfor å bli presset inn i en fast gruppereiseplan.',
      },
      {
        q: 'Hva skiller EWA Safari Outfitters fra andre Tanzania-safariselskaper?',
        a: 'Hver EWA-safari bruker et privat kjøretøy og en privat guide — aldri en delt lastebil med andre reisende du ikke selv valgte å reise sammen med — og selskapet er 100 % lokaleid og basert i Arusha, fremfor et utenlandsk byrå som videreselger andre arrangørers reiser. Gjester rapporterer en 100 % observasjonsrate for Big Five, og teamets lokalkunnskap på bakken (hvilke veier som er åpne, nøyaktig hvor migrasjonen befinner seg denne uken) kommer fra faktisk å være basert der safariene skjer, ikke fra et callsenter i utlandet.',
        relatedLinks: [{ label: 'Hva som gjør oss annerledes', href: '/about#why-us' }],
      },
      {
        q: 'Hvem blir safariguiden min hos EWA Safari Outfitters?',
        a: 'EWAs guideteam består av erfarne, Tanzania-baserte safariguider — blant dem Mike Mawolle, Nixon Massawe og Josh Meela — hver med mange års erfaring med å kjøre de samme rutene på den nordlige og sørlige safariruten, som er nettopp den typen lokale, vei-for-vei-kunnskap som utgjør forskjellen mellom en god og en fantastisk game drive. Guider tildeles per reise, og deles ikke mellom flere kjøretøy samtidig.',
        relatedLinks: [{ label: 'Møt teamet', href: '/about#guides' }],
      },
      {
        q: 'Er EWA Safari Outfitters lokaleid, eller et utenlandsk byrå som videreselger reiser?',
        a: 'EWA Safari Outfitters er 100 % lokaleid og basert i Arusha, Tanzania — ikke et utenlandskeid byrå eller en bestillingsplattform som videreselger andre arrangørers reiser med et påslag. Å bestille direkte hos en lokaleid arrangør er også som regel mer kostnadseffektivt, siden det fjerner det ekstra laget med internasjonal byråmargin.',
      },
      {
        q: 'Hvor holder EWA Safari Outfitters til, og kan jeg besøke kontoret?',
        a: 'EWA Safari Outfitters holder til i Ingira Street 20, Arusha, Tanzania — samme by som de fleste safarier på den nordlige safariruten og Kilimanjaro-bestigninger starter fra. Besøkende er velkomne til å stikke innom kontoret før eller etter en reise; ta kontakt i forkant på info@theextremewilderness.com eller +255 (0) 747 999 070 for å avtale et besøk.',
        relatedLinks: [{ label: 'Besøk kontoret vårt', href: '/about' }, { label: 'Kontakt oss', href: '/contact' }],
      },
      {
        q: 'Hvor raskt svarer EWA Safari Outfitters på forespørsler?',
        a: 'EWA Safari Outfitters svarer som regel på safariforespørsler innen et par timer i østafrikansk kontortid, og vanligvis samme dag selv utenfor disse tidene. Den raskeste måten å få et ekte, skreddersydd tilbud (ikke en generisk prisliste) på, er gjennom forespørselsskjemaet på enhver safari-, reisemål- eller FAQ-side på dette nettstedet, som går direkte til teamet i Arusha.',
        relatedLinks: [{ label: 'Kontakt oss', href: '/contact' }],
      },
      {
        q: 'Opererer EWA Safari Outfitters bare i Tanzania, eller også i Kenya og Rwanda?',
        a: 'EWA Safari Outfitters er basert i og forankret i Tanzania, men opererer og kombinerer også reiser gjennom Kenya (Masai Mara og videre) og Rwanda (gorillatrekking i Volcanoes nasjonalpark) — mange gjester kombinerer to eller tre land i én skreddersydd reiseplan fremfor å bestille hvert land separat.',
        relatedLinks: [{ label: 'Safarier i Kenya', href: '/kenya' }, { label: 'Safarier i Rwanda', href: '/rwanda' }],
      },
    ],
  },
]

export const FAQ_CATEGORY_SLUGS = faqCategories.map((c) => c.slug)
