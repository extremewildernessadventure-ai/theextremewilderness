import type { FaqCategory } from './faq'

// Swedish (sv-SE) translation of faq.ts. Category slugs/order stay identical
// to the English file (stable jump-nav anchors); only title/description/items
// are localized. RELATED_LINK_IMAGES is not duplicated here — it's resolved
// once in faq.ts and shared across every locale file.
export const faqCategories: FaqCategory[] = [
  {
    slug: 'family-and-group-safaris',
    title: 'Familj- och gruppsafarier',
    description: 'Safarier med barn, resor mellan generationer och resor i mindre grupper.',
    icon: 'Users',
    items: [
      {
        q: 'Är Tanzania säkert för en familjesafari med barn?',
        a: 'Ja — Tanzania är en av de mest etablerade destinationerna för familjesafari i Afrika. Den största risken att hantera är malaria, så de flesta familjer reser med förebyggande medicin och väljer, när det är möjligt, camper i höglänta områden med lägre risk. Seriösa researrangörer använder privata fordon (inte delade game drive-turer), håller de dagliga körtiderna kortare för yngre barn och väljer familjevänliga lodge-boenden med sammanhängande rum eller familjetält framför vanliga dubbelrum. Många camper sätter en minimiålder (vanligtvis 6–8 år) för gåsafarier eller vissa aktiviteter, men själva game drive-turerna är öppna för alla åldrar.',
        relatedLinks: [{ label: '10 dagars lyxig familjesafari', href: '/safaris/10-days-luxury-family' }],
      },
      {
        q: 'Vad är den bästa safariresplanen för en familj med små barn?',
        a: 'De bästa familjesafariresplanerna håller sig inom Tanzanias norra safarirunda (Serengeti, Ngorongoro, Tarangire, Lake Manyara) för att minimera långa transferdagar, använder privata 4x4-fordon istället för delade lastbilar, och bygger in ledig tid vid varje camp — poolhäng, naturvandringar anpassade för barn, junior ranger-program — istället för game drive-turer på rad. En privat guide som kan anpassa dagens tempo efter ett barns uppmärksamhetsspann gör större skillnad än vilka specifika parker som väljs.',
        relatedLinks: [{ label: 'Resmål efter safarirunda', href: '/destinations/tanzania' }],
      },
      {
        q: 'Hur många dagar bör en familjesafari vara?',
        a: 'De flesta familjesafarier pågår 5–7 dagar — tillräckligt länge för att hinna med 2–3 parker utan att stressa, tillräckligt kort för att hålla kvar yngre barns uppmärksamhet och hantera jetlag. Familjer som kombinerar safari med en strandförlängning på Zanzibar lägger ofta till 3–4 dagar vid kusten, eftersom små barn oftast klarar en strandvistelse bättre än game drive-turer på rad.',
      },
      {
        q: 'Kan far- och morföräldrar eller en grupp med flera generationer resa tillsammans på safari?',
        a: 'Ja — safarier med flera generationer och mindre grupper är vanligt, och camper kan i regel ta emot ett brett åldersspann inom samma resplan. Det viktigaste att planera för är tempot: en resa byggd kring en 70-årig mor- eller farförälder och ett 6-årigt barnbarn fungerar bäst med kortare kördagar, camper med lättillgängliga rum (färre trappsteg, tält i markplan) och inbyggda vilodagar istället för ett tätt schema utformat för piggare soloresenärer.',
        relatedLinks: [{ label: 'Senior-, jubileums- och gruppsafarier', href: '/safaris/12-day-seniors-anniversary-groups-safari' }],
      },
      {
        q: 'Vad ingår i priset för ett familjesafaripaket?',
        a: 'Ett välbyggt familjesafaripaket inkluderar vanligtvis ett privat fordon och en guide för hela resan, alla park- och naturvårdsavgifter, boende, de flesta eller alla måltider samt interna transfer. Det som vanligtvis INTE ingår: internationella flyg, visum, dricks och valfria tillägg som ballongfärder. Fråga specifikt om det angivna priset är per person eller per familj, eftersom prisstrukturen för familjerum och sammanhängande tält varierar mycket mellan camper.',
      },
    ],
  },
  {
    slug: 'best-time-and-great-migration',
    title: 'Bästa resetid och den stora migrationen',
    description: 'Säsonger, väder och när man kan se gnumigrationen.',
    icon: 'Calendar',
    items: [
      {
        q: 'När är den bästa tiden för att se flodkorsningarna i gnumigrationen?',
        a: 'Det beror på vilken del av migrationen du vill se. De dramatiska korsningarna av Marafloden sker ungefär från juli till oktober i norra Serengeti, när över en miljon gnuer drar norrut mot Kenya. Kalvningssäsongen — kanske den period med mest rovdjursaktivitet — infaller januari till mars i södra Serengeti (Ndutu-området). Det finns ingen enskild ”bästa månad” för hela migrationen, eftersom det är en händelse som pågår året runt och ständigt är i rörelse, inte ett fast datum.',
        relatedLinks: [{ label: 'Serengeti nationalpark', href: '/destinations/serengeti' }],
      },
      {
        q: 'När sker den stora migrationen i Tanzania?',
        a: 'Den stora migrationen pågår någonstans i Serengetis ekosystem varje månad på året — det är en sammanhängande cykel, inte en enskild händelse med ett start- och slutdatum. Grovt sett: kalvning i söder januari–mars, förflyttning norrut genom centrala Serengeti april–juni, flodkorsningar i norr juli–oktober och en återresa söderut med start kring november. Exakt var flockarna befinner sig en given vecka beror på nederbörden, så den exakta tidpunkten varierar från år till år.',
      },
      {
        q: 'Vilken är den bästa månaden att besöka Serengeti?',
        a: 'Det finns ingen universellt ”bästa” månad — det beror på vad du vill se. För flodkorsningar bör du sikta på augusti eller september. För kalvningssäsong och den högsta rovdjurstätheten: januari till mars. För färre folkmassor och frodigt, grönt landskap är den lilla regnperioden i november underskattad. Juni och juli erbjuder ett bra mellanläge: bra väder, migrationsflockar som rör sig genom centrala och västra Serengeti, och glesare folkmassor än under högsäsongens augusti.',
      },
      {
        q: 'Är Tanzania ett helårsmål för safari?',
        a: 'Ja. Tanzania har ingen egentlig lågsäsong för viltskådning — torrperioderna (juni–oktober och januari–februari) samlar djuren kring vattenkällor vilket gör dem lättare att se, medan regnperioderna (mars–maj, november) för med sig frodiga landskap, nyfödda djur och betydligt lägre priser och färre besökare. Den stora regnperioden (mars–april) är den lugnaste perioden och den enda tiden då vissa avlägsna camper stänger, men de stora safarirundorna håller öppet.',
      },
      {
        q: 'När är kalvningssäsongen i Serengeti och varför spelar den roll?',
        a: 'Kalvningssäsongen infaller ungefär januari till mars på kortgräsplatserna i södra Serengeti och Ndutu-området, då upp till 8 000 gnukalvar kan födas på en enda dag. Den lockar till sig migrationens högsta koncentration av rovdjur — lejon, gepard och hyena — vilket gör den till ett av de bästa tillfällena för rovdjursaction, trots att det inte förekommer några flodkorsningar vid den här tiden på året.',
      },
    ],
  },
  {
    slug: 'planning-costs-and-comparisons',
    title: 'Planering, kostnader och Kenya kontra Tanzania',
    description: 'Vad en safari kostar, vad som ingår, och hur man väljer mellan länderna.',
    icon: 'DollarSign',
    items: [
      {
        q: 'Vad kostar en safari i Tanzania?',
        a: 'Kostnaden för en safari i Tanzania varierar kraftigt beroende på säsong, gruppstorlek och campstil. Som en grov riktlinje ligger en välskött safari i mellanklassen på ungefär $400–$600 per person och dag, en lyxsafari kan kosta $700–$1 200+ per person och dag, och budgetcampingsafarier kan hamna under $300 per dag. Priset per person sjunker betydligt med större grupper, eftersom det privata fordonet, guiden och parkavgifterna delas. Det exakta priset beror till stor del på vilken säsong du reser — högsäsong (juni–oktober, januari–februari) innebär premiumpriser.',
        relatedLinks: [{ label: 'Bläddra bland safaripaket', href: '/safaris' }],
      },
      {
        q: 'Kenya eller Tanzania — vilket är bäst för en safari?',
        a: 'Inget av länderna är objektivt ”bättre” — de passar olika prioriteringar. Tanzania har mer sammanlagd parkmark, Ngorongorokratern, Zanzibar som strandtillägg, och står värd för migrationen under större delen av året. Kenya har Masai Mara (en del av samma migrationsekosystem, bäst för flodkorsningar juli–oktober), i allmänhet kortare flygtider från Europa och en något mer utvecklad safariinfrastruktur i vissa områden. Många resenärer kombinerar båda länderna i en och samma resa istället för att välja ett.',
        relatedLinks: [{ label: 'Resmål i Tanzania', href: '/destinations/tanzania' }, { label: 'Safarier i Kenya', href: '/kenya' }],
      },
      {
        q: 'Hur många dagar behöver jag för en safari i Tanzania?',
        a: '7 dagar är den optimala längden för att hinna med den norra safarirundan (Serengeti, Ngorongoro, Tarangire) ordentligt utan att det känns stressigt. 4–5 dagar fungerar för en fokuserad resa till 2 parker. 10–14 dagar gör det möjligt att kombinera norr med den södra eller västra safarirundan, eller lägga till Zanzibar eller en Kilimanjaro-bestigning. Kortare än 4 dagar på safari tenderar att kännas som mycket körning för alltför lite tid i själva parkerna.',
      },
      {
        q: 'Vad ingår i ett safaripris, och vad ingår inte?',
        a: 'De flesta safaripaket i Tanzania inkluderar: ett privat fordon och en chaufför-guide, alla park- och naturvårdsavgifter, boende och de flesta måltider. Vanligtvis INTE inkluderat: internationella flyg, tanzanska visumavgifter, reseförsäkring, dricks till guider och campanställda, alkoholhaltiga drycker och valfria tillägg som ballongfärder eller en strandförlängning på Zanzibar. Bekräfta alltid exakt vad som ingår innan du jämför offerter, eftersom ”safaripris” betyder olika saker för olika researrangörer.',
      },
      {
        q: 'Är det billigare att boka en safari direkt hos en lokal researrangör?',
        a: 'Generellt sett ja — att boka direkt hos en lokalt baserad, licensierad researrangör i Tanzania eliminerar det påslag som internationella bokningsplattformar och byråer lägger på, ofta 15–30 %. Nackdelen är att du själv måste göra mer research för att granska arrangörens licensiering, recensioner och kvaliteten på fordon och guider, eftersom du går miste om plattformens granskningslager. En lokalägd researrangör baserad i Arusha har vanligtvis också bättre realtidskunskap om parkförhållanden, vägavstängningar och var migrationen befinner sig just nu.',
      },
    ],
  },
  {
    slug: 'tanzania-circuits-and-wildlife',
    title: 'Tanzanias safarirundor och djurliv',
    description: 'Big Five, Tanzanias safarirundor och vad du kan förvänta dig i varje park.',
    icon: 'Binoculars',
    items: [
      {
        q: 'Vad är Big Five, och var kan jag se dem i Tanzania?',
        a: 'Big Five — lejon, leopard, elefant, buffel och noshörning — går alla att hitta i Tanzania, även om noshörningssiktningar är de mest sällsynta eftersom antalet svarta noshörningar är lågt och nästan uteslutande koncentrerat till Ngorongorokratern. Lejon, elefant och buffel går pålitligt att se i hela Serengeti, Ngorongoro och Tarangire. Leopard är den svåraste av de fem att få syn på överallt — mest pålitligt i Seronera-området i centrala Serengeti, där de föredrar träd längs vattendrag.',
        relatedLinks: [{ label: 'Serengeti nationalpark', href: '/destinations/serengeti' }, { label: 'Ngorongorokratern', href: '/destinations/ngorongoro' }],
      },
      {
        q: 'Vad är skillnaden mellan Ngorongorokratern och Serengeti?',
        a: 'Ngorongoro är ett enda, kompakt, självständigt ekosystem — en kollapsad vulkankaldera på omkring 260 km² på kraterbotten — där djurlivet är ovanligt koncentrerat och vanligtvis kan ses under en enda, mycket givande dag. Serengeti är enormt (nästan 15 000 km²), öppna slätter där migrationen rör sig och siktningarna sprids över ett mycket större område under flera dagar. De flesta resplaner innehåller båda: Ngorongoro för en tät, pålitlig dag med Big Five-siktningar, och sedan Serengeti för upplevelsen av migrationen på de öppna slätterna.',
        relatedLinks: [{ label: 'Ngorongorokratern', href: '/destinations/ngorongoro' }],
      },
      {
        q: 'Vad är skillnaden mellan Tanzanias norra, södra och västra safarirunda?',
        a: 'Den norra safarirundan (Serengeti, Ngorongoro, Tarangire, Lake Manyara) är Tanzanias klassiska, mest besökta rutt — bäst infrastruktur, migrationen, pålitlig Big Five. Den södra safarirundan (Ruaha, Nyerere/Selous) är avlägsen, folktom och vildare — större, mer utspridda parker med betydligt färre fordon. Den västra safarirundan (Mahale, Katavi, Gombe) är schimpanstrekking-territorium, når man mestadels med små flygplan, och är den mest avlägsna och minst besökta av de tre.',
      },
      {
        q: 'Är den södra safarirundan (Ruaha, Nyerere/Selous) värd ett besök?',
        a: 'Ja, särskilt för återkommande besökare eller den som vill ha en lugnare safari som känns mer exklusiv — Ruaha är Tanzanias största nationalpark och en av de bästa för lejon och afrikansk vildhund, och Nyerere (tidigare Selous) är Afrikas största skyddade område, känt för båtsafarier vid sidan av game drive-turer. Båda tar emot en bråkdel av besökarantalet jämfört med den norra safarirundan. Nackdelen är tillgängligheten — de flesta resor på den södra safarirundan flyger in istället för att köra, vilket ökar kostnaden.',
        relatedLinks: [{ label: 'Ruaha nationalpark', href: '/destinations/ruaha' }, { label: 'Nyerere (Selous) nationalpark', href: '/destinations/nyerere' }],
      },
      {
        q: 'Vilka djur kan jag se i Tarangire nationalpark?',
        a: 'Tarangire är mest känt för sina elefantflockar — några av de största koncentrationerna i Tanzania, särskilt under torrperioden (juni–oktober) när de samlas längs Tarangirefloden — samt sina karakteristiska, urgamla baobabträd. Parken är också stark för lejon och en av de bättre parkerna i den norra safarirundan för att få syn på de mindre, mer sällan sedda antiloparterna. Den besöks vanligtvis som ett 1–2 dagars tillägg tillsammans med Serengeti och Ngorongoro.',
        relatedLinks: [{ label: 'Tarangire nationalpark', href: '/destinations/tarangire' }],
      },
    ],
  },
  {
    slug: 'kenya-and-rwanda',
    title: 'Safarier i Kenya och Rwanda',
    description: 'Att kombinera länder, Masai Mara och gorillatrekking.',
    icon: 'Compass',
    items: [
      {
        q: 'Kan jag kombinera en safari i Kenya och Tanzania i en och samma resa?',
        a: 'Ja, och det är ett vanligt sätt att se både Serengeti och Masai Mara — tekniskt sett ett sammanhängande ekosystem som delas av en internationell gräns. Själva gränspasseringen kräver antingen en schemalagd flygning med litet flygplan eller en lång körning på land, plus separata inträdesavgifter till parkerna på vardera sidan, så de flesta kombinerade resplaner räknar med minst 10–12 dagar totalt för att undvika att det känns stressigt.',
        relatedLinks: [{ label: '10 dagars safari i Kenya och Tanzania', href: '/safaris/10-day-kenya-tanzania-safari' }],
      },
      {
        q: 'Vad kostar gorillatrekking i Rwanda, och behöver jag ett tillstånd?',
        a: 'Ja, ett tillstånd är obligatoriskt och tillgången är begränsad — Rwandas Volcanoes nationalpark utfärdar ett fast antal gorillatillstånd per dag, för närvarande prissatta till $1 500 per person, vilket täcker en timme med en habituerad gorillafamilj samt parkavgifter och en guide. Tillstånd bör bokas i god tid i förväg, särskilt för juli–september och december–februari, de torraste och mest populära perioderna för trekking.',
        relatedLinks: [{ label: '4 dagars gorillatrekking i Rwanda', href: '/safaris/4-day-rwanda-gorilla-trekking' }, { label: 'Volcanoes nationalpark', href: '/destinations/volcanoes' }],
      },
      {
        q: 'Vilken är den bästa tiden att se gorillor i Rwanda?',
        a: 'Gorillatrekking är möjligt året runt eftersom tillstånden inte är säsongsbundna, men torrperioderna — juni–september och december–februari — gör vandringen genom Volcanoes nationalparks branta terräng lättare och mindre lerig. De blötare månaderna (mars–maj, oktober–november) innebär tuffare leder men märkbart färre turister och ibland billigare boende i närheten.',
      },
      {
        q: 'Är Masai Mara samma sak som Serengeti?',
        a: 'De är en del av samma sammanhängande ekosystem — Masai Mara är i grunden den kenyanska, norra förlängningen av Serengeti — åtskilda enbart av en internationell gräns som djurlivet självt struntar i. Mara är mindre och tar emot migrationsflockarna under flodkorsningssäsongen (ungefär juli–oktober); Serengeti är betydligt större och står värd för migrationen under resten av året, inklusive kalvningssäsongen.',
      },
      {
        q: 'Hur fysiskt krävande är gorillatrekking?',
        a: 'Det varierar mycket från trekking till trekking — gorillafamiljerna spåras och är inte stationära på en och samma plats, så en vandring kan variera från under en timme till 4–5 timmar enkel väg genom brant, ibland lerig vulkanskog på hög höjd (Volcanoes nationalpark ligger på 2 400–4 500 m). En rimlig konditionsnivå är genuint användbar; bärare finns tillgängliga för att bära packning och ge stöttande hjälp på brantare avsnitt för den som är orolig för terrängen.',
      },
    ],
  },
  {
    slug: 'kilimanjaro-and-trekking',
    title: 'Kilimanjaro och trekking',
    description: 'Rutter, kostnad, svårighetsgrad och toppframgång vid bestigning av Kilimanjaro.',
    icon: 'Mountain',
    items: [
      {
        q: 'Vilken är den enklaste rutten för att bestiga Kilimanjaro?',
        a: 'Machame är den mest populära rutten och erbjuder en stark balans mellan naturupplevelse och acklimatisering, men Lemosho-rutten anses generellt vara den enklaste när det gäller att nå toppen, huvudsakligen eftersom den längre resplanen (7–8 dagar) ger kroppen mer tid att acklimatisera sig. Marangu är den enda rutten med stuguppehälle istället för tält och har en mildare daglig stigning, men den kortare standardresplanen innebär mindre acklimatiseringstid, vilket kan väga upp den lättare vandringen.',
        relatedLinks: [{ label: 'Kilimanjaros Machame-rutt', href: '/trekking/machame' }, { label: 'Alla Kilimanjaro-rutter', href: '/trekking' }],
      },
      {
        q: 'Vad kostar det att bestiga Kilimanjaro?',
        a: 'Kostnaden för att bestiga Kilimanjaro ligger vanligtvis mellan $2 000 och $2 500 per person för en grupp-bestigning i budget- till mellanklass, upp till $3 500–$5 000+ för en privat, längre rutt med bättre stöd och högre andel guider per klättrare. Enbart parkavgifterna (som fastställs av Tanzanias nationalparksmyndighet) utgör en stor fast del av varje offert, så mycket billiga bestigningar innebär vanligtvis att man skär ner på personalens löner, utrustning eller acklimatiseringsdagar — allt detta påverkar både säkerheten och chansen att nå toppen.',
        relatedLinks: [{ label: 'Kilimanjaros Machame-rutt', href: '/trekking/machame' }],
      },
      {
        q: 'Hur hög är chansen att nå toppen av Kilimanjaro?',
        a: 'Toppframgången varierar enormt beroende på ruttens längd: kortare 5-dagarsrutter har framgångsgrader så låga som 40–50 % på grund av otillräcklig acklimatiseringstid, medan välplanerade 7–8-dagarsrutter som Lemosho rapporterar framgångsgrader på 85–90 %+. Den enskilt viktigaste faktorn för att nå toppen är inte konditionen — det är att ge kroppen tillräckligt många dagar att acklimatisera sig till höjden, vilket är anledningen till att längre rutter genomgående presterar bättre än kortare.',
      },
      {
        q: 'Hur många dagar tar det att bestiga Kilimanjaro?',
        a: 'De flesta rutterna tar 6–8 dagar tur och retur, även om Marangu kan göras på 5 dagar och längre alternativ som en fullständig Lemosho- eller Northern Circuit-rutt kan ta 8–9 dagar. Att lägga till bara en extra acklimatiseringsdag förbättrar både komforten och chansen att nå toppen märkbart, så de flesta erfarna researrangörer avråder från den kortaste tillgängliga resplanen på en given rutt.',
      },
      {
        q: 'Behöver jag vara en erfaren vandrare för att bestiga Kilimanjaro?',
        a: 'Ingen teknisk klättererfarenhet eller utrustning krävs på någon av standardrutterna för trekking — det är en lång vandring på hög höjd, inte en teknisk klättring. Det sagt gör en rimlig grundkondition (att bekvämt kunna gå 5–7 timmar om dagen) verkligen stor skillnad för hur mycket du kommer att uppskatta det, och höjden påverkar konditionen oförutsägbart, så även starka vandrare bör ta acklimatiseringen på allvar.',
      },
    ],
  },
  {
    slug: 'honeymoon-zanzibar-and-experiences',
    title: 'Smekmånad, Zanzibar och speciella upplevelser',
    description: 'Smekmånadssafarier, strandtillägg, ballongfärder och fotosafarier.',
    icon: 'Heart',
    items: [
      {
        q: 'Vilken är den bästa smekmånadsresplanen som kombinerar safari och strand?',
        a: 'Den klassiska kombinationen är 4–5 nätter på safari i den norra safarirundan (Serengeti och Ngorongoro täcker höjdpunkterna effektivt), följt av 4–5 nätter på Zanzibar för strandhalvan av resan — sammanlagt ungefär 9–10 dagar. Camper som riktar sig specifikt till smekmånadspar erbjuder ofta privat middagsservering, vuxenanpassade miljöer och exklusiva tältsviter istället för familjeanpassade rum, så det är värt att bekräfta att ett boende passar för smekmånad och inte bara är familjevänligt.',
        relatedLinks: [{ label: '9 dagars smekmånadssafari och Zanzibar', href: '/safaris/9-day-honeymoon-safari-zanzibar' }, { label: 'Zanzibar', href: '/destinations/zanzibar' }],
      },
      {
        q: 'Vad kostar en ballongfärd över Serengeti?',
        a: 'En ballongfärd över Serengeti kostar vanligtvis $550–$700 per person för ungefär en timme i luften vid soluppgång, vanligen följt av en champagnefrukost ute i busken. Den prissätts som ett valfritt tillägg till en vanlig safariresplan snarare än att ingå som standard, och måste bokas i förväg eftersom varje ballongföretag bara flyger ett begränsat antal personer varje morgon.',
      },
      {
        q: 'Kan jag kombinera en safari i Tanzania med en badsemester på Zanzibar?',
        a: 'Ja — det är ett av de mest populära safaritilläggen, och logistiskt enkelt: Zanzibar ligger en kort flygresa från Arusha eller de stora safarirundorna, så de flesta researrangörer bygger in det som en sömlös sista etapp. En vanlig fördelning är 5–7 dagar på safari följt av 3–5 dagar på stranden, även om fördelningen är helt flexibel beroende på hur mycket strandtid kontra vilttid du vill ha.',
        relatedLinks: [{ label: '10 dagars safari och Zanzibar', href: '/safaris/10-day-safari-zanzibar' }],
      },
      {
        q: 'Skiljer sig en fotosafari från en vanlig safari?',
        a: 'Ja — en dedikerad fotosafari använder fordon anpassade för fotografer (stödkuddar, extra fönsterutrymme, ibland en taklucka anpassad för fotografens höjd), håller grupperna mindre och planerar dagen efter ljuset — man lämnar campen före soluppgången och stannar ute genom den gyllene timmen istället för att följa ett fast körschema. Guider på fotoinriktade resor är också vanligtvis instruerade att prioritera positionering för bilder framför att bara pricka av arter.',
        relatedLinks: [{ label: '7 dagars fotoäventyrssafari', href: '/safaris/7-day-photography-adventure-safari' }],
      },
      {
        q: 'Vad är en fly-in-safari, och är den värd den extra kostnaden?',
        a: 'En fly-in-safari använder små flygplan för att förflytta sig mellan parkerna istället för långa transfer med safarifordon — en körning som kan ta 6–8 timmar blir en flygning på 45–60 minuter. Den extra kostnaden är värd det främst för resor som täcker den södra eller västra safarirundan (Ruaha, Nyerere, Mahale), där vägtransferna verkligen är långa och krävande; för den norra safarirundans tätt sammanhållna parker är körningen mellan dem ofta en del av upplevelsen snarare än en nackdel.',
      },
    ],
  },
  {
    slug: 'culture-health-and-logistics',
    title: 'Kultur, hälsa och praktisk logistik',
    description: 'Massajerna, vaccinationer, visum och vad du bör packa.',
    icon: 'ShieldCheck',
    items: [
      {
        q: 'Vilka är massajerna?',
        a: 'Massajerna är ett halvnomadiskt boskapsskötande folk som är ursprungsbefolkning i norra Tanzania och södra Kenya, historiskt inriktade på boskapsskötsel över Serengeti och Rift Valley-regionen — samma mark som många safarirundor passerar genom idag. Många massajsamhällen nära den norra safarirundan välkomnar besökare för kulturella bybesök, vilket erbjuder ett genuint, guidearrangerat sätt att lära sig om deras traditioner, karakteristiska klädsel och levnadssätt, istället för att bara se dem som en bakgrund till djurlivet.',
      },
      {
        q: 'Vilka är hadzabefolket, och kan jag besöka deras samhälle på safari?',
        a: 'Hadzabefolket är ett av de sista sanna jägar-samlarsamhällena på jorden, de lever kring Lake Eyasi i norra Tanzania och talar fortfarande ett särpräglat klickspråk. Ja — ett respektfullt, guidelett besök är möjligt och är ett genuint växande intresse bland resenärer som vill uppleva kultur vid sidan av djurliv: ett typiskt besök innebär att följa med på en morgonjakt eller insamlingsvandring med hadzabefolket, följt av ett stopp hos grannfolket datoga, kända för sitt traditionella smideshantverk. Dessa besök fungerar bäst som samhällslett resande med etiska protokoll snarare än informella spontanbesök.',
        relatedLinks: [{ label: 'Tarangire, Ngorongoro och hadzabeupplevelsen', href: '/experiences/cultural-experience' }],
      },
      {
        q: 'Behöver jag vaccinationer eller malariamedicin för en safari i Tanzania?',
        a: 'Ett vaccinationsintyg mot gula febern krävs om du anländer från (eller har mellanlandat i) ett land med risk för smitta av gul feber — kontrollera aktuella krav mot din specifika resrutt. Malariaprofylax rekommenderas starkt för safariregionerna (större delen av fastlandstanzania), även om Zanzibar och högre belägna områden som Arusha och Ngorongoros kraterkant innebär lägre risk. Rutinvaccinationer (stelkramp, hepatit A/B, tyfoid) rekommenderas ofta av vaccinationsmottagningar men är inga inresekrav för Tanzania. Bekräfta alltid aktuella rekommendationer med en resemedicinsk expert före avresa.',
      },
      {
        q: 'Vilket visum behöver jag för att besöka Tanzania?',
        a: 'De flesta nationaliteter behöver visum för att resa in i Tanzania, antingen som e-visum som söks online i förväg eller, för många nationaliteter, vid ankomst på de större flygplatserna. Att ordna e-visumet före resan är generellt sett snabbare och mindre stressigt än att anlända utan ett. Kraven och vilka nationaliteter som är berättigade ändras med jämna mellanrum, så bekräfta gällande regler direkt med Tanzanias migrationsmyndighet eller din ambassad nära inpå din resa istället för att förlita dig på äldre information.',
      },
      {
        q: 'Vad bör jag packa för en safari?',
        a: 'Kläder i neutrala färger (khaki, olivgrönt, brunt — undvik klara färger samt rent vitt eller svart, som kan attrahera insekter eller synas tydligt för djurlivet), lager på lager för kalla game drive-turer tidigt på morgonen som snabbt blir varma, en bredbrättad hatt, solskyddskräm, kikare och en vattentät väska eller stoppad väska för kamerautrustning med tanke på dammiga vägar. De flesta camper erbjuder tvättservice, så att packa för 4–5 dagar istället för hela resans längd räcker vanligtvis även på längre safarier.',
      },
      {
        q: 'Är Tanzania säkert för turister?',
        a: 'Tanzanias safariregioner är väletablerade, turismberoende områden med ett starkt säkerhetsrykte — de praktiska riskerna på en guidad safari handlar mer om solexponering, vägförhållanden och sunt förnuft kring närhet till vilda djur (att stanna i fordonet, följa guidens instruktioner) än om brottslighet. Som vid all internationell resa gäller vanliga försiktighetsåtgärder i städer och på transitplatser. Seriösa researrangörer informerar alla gäster om säkerhetsförväntningar i början av resan.',
      },
    ],
  },
  {
    slug: 'about-ewa',
    title: 'Om EWA Safari Outfitters',
    description: 'Vilka vi är, våra meriter, och vad som gör en EWA-safari annorlunda.',
    icon: 'Award',
    items: [
      {
        q: 'Vad är EWA Safari Outfitters?',
        a: 'EWA Safari Outfitters är en lokalägd safariarrangör baserad i Arusha som har erbjudit skräddarsydda safarier i Tanzania, Kenya och Rwanda sedan 2022 — samma team som ligger bakom extreme wilderness adventure-resor genom Serengeti, Ngorongoro och bortom. ”EWA” står för Extreme Wilderness Adventure, företagets ursprungliga namn, och varje resa byggs fortfarande kring samma filosofi: riktiga, privata, guideledda safarier istället för paketerade grupparresor.',
        relatedLinks: [{ label: 'Om EWA Safari Outfitters', href: '/about' }],
      },
      {
        q: 'Hette EWA Safari Outfitters tidigare Extreme Wilderness Adventure?',
        a: 'Ja — EWA Safari Outfitters grundades och drevs ursprungligen som Extreme Wilderness Adventure, vilket är anledningen till att webbdomänen (theextremewilderness.com) och Instagram-kontot (@extremewildernessadventure) fortfarande bär det namnet. Namnbytet till ”EWA Safari Outfitters” speglar samma lokalägda team, guider och verksamhet i Arusha — det är en namnuppdatering, inte ett ägarbyte eller ett annat företag.',
        relatedLinks: [{ label: 'Om EWA Safari Outfitters', href: '/about' }],
      },
      {
        q: 'Är EWA Safari Outfitters TATO-certifierat och en licensierad researrangör i Tanzania?',
        a: 'Ja — EWA Safari Outfitters är TATO-certifierat (medlem i Tanzania Association of Tour Operators), branschorganet som granskar legitima, licensierade researrangörer i Tanzania. Att boka hos en TATO-certifierad researrangör är ett av de enklaste sätten att bekräfta att ett safariföretag i Tanzania är korrekt licensierat och inte en oregistrerad agent som säljer vidare andra arrangörers resor.',
      },
      {
        q: 'Vad innebär TATO-medlemskapet egentligen för min bokning?',
        a: 'TATO har representerat och granskat Tanzanias researrangörer sedan 1983, så medlemskapet innebär att EWA Safari Outfitters är erkänt av samma branschorgan som både regeringen och den internationella resebranschen samarbetar med — inte bara ett företag som kallar sig självt licensierat. I praktiken innebär det att en verklig branschorganisation står bakom bokningen om något någonsin behöver lösas bortom vår egen kundservice, och det är därför TATO-medlemskap är en av de standardkontroller som säkerhetsmedvetna resenärer gör innan de överhuvudtaget bokar en safari i Tanzania. EWA är specifikt listat under sex TATO-kategorier — Tour Operators, Mainland Tour Operators, DMC/Tour Operators, Mountain Trekking Operators, Zanzibar & Beach Holiday Operators och Cultural Experience Operators — vilket täcker både våra safariresplaner, Kilimanjaro-bestigningar, Zanzibar-förlängningar och kulturella utflykter.',
      },
      {
        q: 'Hur kan jag själv verifiera EWA Safari Outfitters\' TATO-medlemskap?',
        a: 'Direkt på TATO:s egen webbplats — vår listning är offentlig, inte något vi kontrollerar eller skulle kunna framställa felaktigt. Det är ett snabbt, oberoende sätt att bekräfta att vi är en äkta, licensierad researrangör innan du bokar, istället för att bara lita på vad en researrangör själv säger.',
        relatedLinks: [{ label: 'Se vår TATO-medlemslistning', href: 'https://tatotz.org/portfolio/ewa-safari-outfitters/' }],
      },
      {
        q: 'Hur länge har EWA Safari Outfitters bedrivit safarier?',
        a: 'EWA Safari Outfitters har bedrivit safarier sedan 2022 (5+ år under namnet Extreme Wilderness Adventure före och under namnbytet), med 200+ guidade resenärer genom Tanzania, Kenya och Rwanda, ett TripAdvisor-betyg på 4,9 och gäster från 40+ länder — tillräckligt etablerat för att känna rutterna väl, men fortfarande tillräckligt litet för att varje resa planeras individuellt istället för att pressas in i en fast gruppresplan.',
      },
      {
        q: 'Vad gör EWA Safari Outfitters annorlunda jämfört med andra safariföretag i Tanzania?',
        a: 'Varje EWA-safari använder ett privat fordon och en privat guide — aldrig en delad lastbil med andra resenärer du inte själv valt att resa med — och företaget är 100 % lokalägt och baserat i Arusha, snarare än en utländsk byrå som säljer vidare andra arrangörers resor. Gäster rapporterar en 100-procentig chans att se Big Five, och markteamets lokalkunskap (vilka vägar som är öppna, exakt var migrationen befinner sig just den här veckan) kommer från att faktiskt vara baserad där safarierna äger rum, inte från ett callcenter utomlands.',
        relatedLinks: [{ label: 'Vad som gör oss annorlunda', href: '/about#why-us' }],
      },
      {
        q: 'Vem blir min safariguide hos EWA Safari Outfitters?',
        a: 'EWA:s guideteam består av erfarna, Tanzania-baserade safariguider — bland dem Mike Mawolle, Nixon Massawe och Josh Meela — var och en med flera års erfarenhet av att köra samma rutter i den norra och södra safarirundan, vilket är precis den typen av lokal, väg-för-väg-kunskap som gör skillnaden mellan en bra game drive och en fantastisk. Guider tilldelas per resa, inte delade mellan flera fordon samtidigt.',
        relatedLinks: [{ label: 'Möt teamet', href: '/about#guides' }],
      },
      {
        q: 'Är EWA Safari Outfitters lokalägt, eller en utländsk byrå som säljer vidare resor?',
        a: 'EWA Safari Outfitters är 100 % lokalägt och baserat i Arusha, Tanzania — inte en utlandsägd byrå eller bokningsplattform som säljer vidare andra arrangörers resor med ett påslag. Att boka direkt hos en lokalägd researrangör tenderar också att vara mer kostnadseffektivt, eftersom det eliminerar det extra lagret av internationell byråmarginal.',
      },
      {
        q: 'Var är EWA Safari Outfitters baserat, och kan jag besöka kontoret?',
        a: 'EWA Safari Outfitters är baserat på 20 Ingira Street, Arusha, Tanzania — samma stad som de flesta safarier i den norra safarirundan och Kilimanjaro-bestigningar utgår från. Besökare är välkomna att titta förbi kontoret före eller efter en resa; hör av dig i förväg på info@theextremewilderness.com eller +255 (0) 747 999 070 för att boka in ett besök.',
        relatedLinks: [{ label: 'Besök vårt kontor', href: '/about' }, { label: 'Kontakta oss', href: '/contact' }],
      },
      {
        q: 'Hur snabbt svarar EWA Safari Outfitters på förfrågningar?',
        a: 'EWA Safari Outfitters svarar vanligtvis på safariförfrågningar inom några timmar under östafrikansk kontorstid, och oftast samma dag även utanför den. Det snabbaste sättet att få en riktig, skräddarsydd offert (inte en generisk prislista) är via förfrågningsformuläret på valfri safari-, resmåls- eller FAQ-sida på den här webbplatsen, som når Arusha-teamet direkt.',
        relatedLinks: [{ label: 'Kontakta oss', href: '/contact' }],
      },
      {
        q: 'Verkar EWA Safari Outfitters bara i Tanzania, eller även i Kenya och Rwanda?',
        a: 'EWA Safari Outfitters är baserat i och förankrat i Tanzania, men verkar och kombinerar även resor genom Kenya (Masai Mara och bortom) och Rwanda (gorillatrekking i Volcanoes nationalpark) — många gäster kombinerar två eller tre länder i en enda skräddarsydd resplan istället för att boka var för sig.',
        relatedLinks: [{ label: 'Safarier i Kenya', href: '/kenya' }, { label: 'Safarier i Rwanda', href: '/rwanda' }],
      },
    ],
  },
]

export const FAQ_CATEGORY_SLUGS = faqCategories.map((c) => c.slug)
