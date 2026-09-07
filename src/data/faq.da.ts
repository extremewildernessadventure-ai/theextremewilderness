import type { FaqCategory } from './faq'

// Danish (da-DK) translation of faq.ts. Category slugs/order stay identical
// to the English file (stable jump-nav anchors); only title/description/
// items are localized. RELATED_LINK_IMAGES is not duplicated here — it's
// resolved once in faq.ts and shared across every locale file.
export const faqCategories: FaqCategory[] = [
  {
    slug: 'family-and-group-safaris',
    title: 'Familie- & Gruppesafarier',
    description: 'Safarier med børn, rejser på tværs af generationer og rejser i mindre grupper.',
    icon: 'Users',
    items: [
      {
        q: 'Er Tanzania sikkert for en familiesafari med børn?',
        a: 'Ja — Tanzania er en af Afrikas mest etablerede destinationer for familiesafarier. Den vigtigste risiko at håndtere er malaria, så de fleste familier rejser med forebyggende medicin og vælger, når det er muligt, camps i højereliggende områder med lavere risiko. Seriøse udbydere bruger private køretøjer (ikke delte game drives), holder de daglige køretider kortere for mindre børn og vælger familievenlige lodges med sammenhængende værelser eller familietelte frem for standarddobbeltværelser. Mange camps har en minimumsalder (typisk 6-8 år) for gåsafarier eller visse aktiviteter, men selve game drives er åbne for alle aldre.',
        relatedLinks: [{ label: '10-dages luksus-familiesafari', href: '/safaris/10-days-luxury-family' }],
      },
      {
        q: 'Hvad er den bedste safarirejseplan for en familie med små børn?',
        a: 'De bedste familiesafari-rejseplaner holder sig inden for Tanzanias nordlige safarirute (Serengeti, Ngorongoro, Tarangire, Lake Manyara) for at minimere lange transferdage, bruger private 4x4-køretøjer frem for delte lastbiler og indlægger nedetid i hver camp — poolophold, naturvandringer for børn, junior ranger-programmer — frem for game drive efter game drive. En privat guide, der kan tilpasse dagens tempo til et barns opmærksomhedsspænd, gør en større forskel end de specifikke parker, der vælges.',
        relatedLinks: [{ label: 'Destinationer efter safarirute', href: '/destinations/tanzania' }],
      },
      {
        q: 'Hvor mange dage bør en familiesafari vare?',
        a: 'De fleste familiesafarier varer 5-7 dage — langt nok til at dække 2-3 parker uden at skulle skynde sig, og kort nok til at holde de mindre børns opmærksomhed og håndtere jetlag. Familier, der kombinerer safari med en badeferieforlængelse på Zanzibar, lægger ofte 3-4 dage til ved kysten, da små børn typisk klarer et badeophold bedre end game drive efter game drive.',
      },
      {
        q: 'Kan bedsteforældre eller en gruppe på tværs af generationer rejse sammen på safari?',
        a: 'Ja — safarier på tværs af generationer og i mindre grupper er almindelige, og camps kan generelt rumme et bredt aldersspænd inden for samme rejseplan. Den vigtigste planlægningsovervejelse er tempoet: En rejse bygget op omkring en 70-årig bedsteforælder og et 6-årigt barnebarn fungerer bedst med kortere køredage, camps med lettilgængelige værelser (færre trin, telte i stueplan) og indlagte hviledage frem for et tætpakket program designet til mere velgående solorejsende.',
        relatedLinks: [{ label: 'Senior-, jubilæums- & gruppesafarier', href: '/safaris/12-day-seniors-anniversary-groups-safari' }],
      },
      {
        q: 'Hvad er inkluderet i prisen på en familiesafaripakke?',
        a: 'En velbygget familiesafaripakke omfatter typisk et privat køretøj og en guide for hele rejsen, alle park- og naturbevaringsgebyrer, indkvartering, de fleste eller alle måltider samt interne transporter. Det, der som regel IKKE er inkluderet: internationale flyrejser, visa, drikkepenge og valgfrie tilkøb som ballonflyvninger. Spørg specifikt, om den oplyste pris er per person eller per familie, da prisstrukturen for familieværelser og sammenhængende telte varierer meget fra camp til camp.',
      },
    ],
  },
  {
    slug: 'best-time-and-great-migration',
    title: 'Bedste Rejsetid & Den Store Migration',
    description: 'Sæsoner, vejr, og hvornår man ser gnu-migrationen.',
    icon: 'Calendar',
    items: [
      {
        q: 'Hvornår er det bedste tidspunkt at se flodovergangene i gnu-migrationen?',
        a: 'Det afhænger af, hvilken del af migrationen du gerne vil se. De dramatiske overgange af Mara-floden finder sted omtrent fra juli til oktober i den nordlige del af Serengeti, når over en million gnuer trækker nordpå mod Kenya. Kalvesæsonen — nok den periode med mest rovdyraktivitet — finder sted fra januar til marts i den sydlige del af Serengeti (Ndutu-området). Der findes ikke én enkelt "bedste måned" for hele migrationen, da det er en begivenhed, der foregår hele året og hele tiden er i bevægelse, ikke en fast dato.',
        relatedLinks: [{ label: 'Serengeti Nationalpark', href: '/destinations/serengeti' }],
      },
      {
        q: 'Hvornår finder Den Store Migration sted i Tanzania?',
        a: 'Den store migration foregår et sted i Serengeti-økosystemet hver eneste måned af året — det er en vedvarende cyklus, ikke en enkeltstående begivenhed med en fast start- og slutdato. Overordnet set: kalvning i syd januar-marts, bevægelse mod nord gennem det centrale Serengeti april-juni, flodovergange i nord juli-oktober, og tilbagevenden mod syd fra omkring november. Hvor flokkene helt præcist befinder sig i en given uge, afhænger af nedbøren, så den præcise timing varierer fra år til år.',
      },
      {
        q: 'Hvad er den bedste måned at besøge Serengeti?',
        a: 'Der findes ikke én universelt "bedste" måned — det afhænger af, hvad du gerne vil se. For flodovergange bør du sigte efter august eller september. For kalvesæsonen og den højeste rovdyrtæthed: januar til marts. For færre besøgende og frodig, grøn natur er den lille regntid i november undervurderet. Juni og juli tilbyder et godt mellemled: godt vejr, migrationsflokke, der bevæger sig gennem det centrale og vestlige Serengeti, og færre besøgende end i højsæsonen i august.',
      },
      {
        q: 'Er Tanzania en helårsdestination for safari?',
        a: 'Ja. Tanzania har ingen egentlig lavsæson for dyreobservationer — tørtiden (juni-oktober og januar-februar) samler dyrene omkring vandhuller, hvilket gør observationer lettere, mens regntiden (marts-maj, november) bringer frodige landskaber, nyfødte dyr og markant lavere priser og færre besøgende. Den store regntid (marts-april) er den roligste periode og den eneste tid, hvor enkelte afsidesliggende camps lukker, men hovedruterne holder åbent.',
      },
      {
        q: 'Hvornår er kalvesæsonen i Serengeti, og hvorfor betyder den noget?',
        a: 'Kalvesæsonen varer omtrent fra januar til marts på de kortgræssede sletter i det sydlige Serengeti og Ndutu-området, hvor op til 8.000 gnukalve kan blive født på en enkelt dag. Den tiltrækker migrationens højeste koncentration af rovdyr — løve, gepard og hyæne — hvilket gør den til et af de bedste tidspunkter for rovdyraktivitet, selvom der ikke er flodovergange på dette tidspunkt af året.',
      },
    ],
  },
  {
    slug: 'planning-costs-and-comparisons',
    title: 'Planlægning, Omkostninger & Kenya vs. Tanzania',
    description: 'Hvad en safari koster, hvad der er inkluderet, og hvordan man vælger mellem landene.',
    icon: 'DollarSign',
    items: [
      {
        q: 'Hvor meget koster en safari i Tanzania?',
        a: 'Prisen på en Tanzania-safari varierer meget afhængigt af sæson, gruppestørrelse og camp-stil. Som en grov rettesnor koster en velorganiseret safari i mellemklassen omkring $400-$600 per person per dag, en luksussafari kan koste $700-$1.200+ per person per dag, og budget-campingsafarier kan komme ned under $300 per dag. Prisen per person falder betydeligt ved større grupper, da det private køretøj, guiden og parkgebyrerne deles. Den præcise pris afhænger i høj grad af, hvilken sæson du rejser i — højsæson (juni-oktober, januar-februar) medfører præmiumpriser.',
        relatedLinks: [{ label: 'Se safaripakker', href: '/safaris' }],
      },
      {
        q: 'Kenya eller Tanzania — hvad er bedst til en safari?',
        a: 'Ingen af dem er objektivt "bedst" — de passer til forskellige prioriteter. Tanzania har mere samlet parkareal, Ngorongoro-krateret, Zanzibar som badeferietilkøb, og huser migrationen det meste af året. Kenya har Masai Mara (del af samme migrationsøkosystem, bedst for flodovergange juli-oktober), generelt kortere flyvetid fra Europa og en lidt mere udviklet safariinfrastruktur i visse områder. Mange rejsende kombinerer begge lande i én rejse frem for at vælge det ene.',
        relatedLinks: [{ label: 'Destinationer i Tanzania', href: '/destinations/tanzania' }, { label: 'Safarier i Kenya', href: '/kenya' }],
      },
      {
        q: 'Hvor mange dage har jeg brug for til en safari i Tanzania?',
        a: '7 dage er det ideelle antal for at dække den nordlige safarirute (Serengeti, Ngorongoro, Tarangire) ordentligt uden at føle sig forhastet. 4-5 dage fungerer til en fokuseret rejse til 2 parker. 10-14 dage giver mulighed for at kombinere nord med den sydlige eller vestlige safarirute, eller tilføje Zanzibar eller en Kilimanjaro-bestigning. Under 4 dage på safari har tendens til at føles som meget kørsel for alt for lidt tid i selve parkerne.',
      },
      {
        q: 'Hvad er inkluderet i safariprisen, og hvad er ikke?',
        a: 'De fleste Tanzania-safaripakker omfatter: et privat køretøj med chauffør-guide, alle park- og naturbevaringsgebyrer, indkvartering og de fleste måltider. Typisk IKKE inkluderet: internationale flyrejser, det tanzanianske visumgebyr, rejseforsikring, drikkepenge til guider og campersonale, alkoholiske drikke og valgfrie tilkøb som ballonflyvninger eller en badeferieforlængelse på Zanzibar. Bekræft altid præcis, hvad der er inkluderet, før du sammenligner tilbud, da "safaripris" betyder forskellige ting hos forskellige udbydere.',
      },
      {
        q: 'Er det billigere at booke en safari direkte hos en lokal udbyder?',
        a: 'Generelt ja — at booke direkte hos en lokalt baseret, licenseret udbyder i Tanzania fjerner det tillæg, som internationale bookingplatforme og bureauer lægger oveni, ofte 15-30 %. Ulempen er, at du selv skal researche mere for at tjekke udbyderens licens, anmeldelser og kvaliteten af køretøjer og guider, da du mister platformens kontrollag. En lokalt ejet udbyder baseret i Arusha har typisk også bedre realtidsviden om forholdene i parkerne, vejlukninger og hvor migrationen befinder sig lige nu.',
      },
    ],
  },
  {
    slug: 'tanzania-circuits-and-wildlife',
    title: 'Tanzanias Safariruter & Dyreliv',
    description: 'De Big Five, Tanzanias safariruter, og hvad du kan forvente i hver park.',
    icon: 'Binoculars',
    items: [
      {
        q: 'Hvad er de Big Five, og hvor kan jeg se dem i Tanzania?',
        a: 'De Big Five — løve, leopard, elefant, bøffel og næsehorn — kan alle findes i Tanzania, selvom næsehornsobservationer er de sjældneste, da bestanden af sort næsehorn er lav og næsten udelukkende koncentreret i Ngorongoro-krateret. Løve, elefant og bøffel ses pålideligt i Serengeti, Ngorongoro og Tarangire. Leoparden er den sværeste af de fem at få øje på — mest pålideligt i Seronera-området i det centrale Serengeti, hvor de foretrækker træer langs floderne.',
        relatedLinks: [{ label: 'Serengeti Nationalpark', href: '/destinations/serengeti' }, { label: 'Ngorongoro-krateret', href: '/destinations/ngorongoro' }],
      },
      {
        q: 'Hvad er forskellen på Ngorongoro-krateret og Serengeti?',
        a: 'Ngorongoro er et enkelt, kompakt og selvstændigt økosystem — en kollapset vulkankrater med et areal på omkring 260 km² på kraterbunden — hvor dyrelivet er usædvanligt koncentreret og typisk kan ses på en enkelt, meget udbytterig dag. Serengeti er enorm (næsten 15.000 km²), åbne sletter hvor migrationen bevæger sig, og hvor observationerne er spredt over et meget større område over flere dage. De fleste rejseplaner omfatter begge dele: Ngorongoro for en tæt, pålidelig dag med Big Five-observationer, og derefter Serengeti for oplevelsen af migrationen på de åbne sletter.',
        relatedLinks: [{ label: 'Ngorongoro-krateret', href: '/destinations/ngorongoro' }],
      },
      {
        q: 'Hvad er forskellen på Tanzanias nordlige, sydlige og vestlige safariruter?',
        a: 'Den nordlige safarirute (Serengeti, Ngorongoro, Tarangire, Lake Manyara) er Tanzanias klassiske og mest besøgte rute — bedst infrastruktur, migrationen, pålidelige Big Five-observationer. Den sydlige safarirute (Ruaha, Nyerere/Selous) er afsidesliggende, uden trængsel og vildere — større, mere spredte parker med langt færre køretøjer. Den vestlige safarirute (Mahale, Katavi, Gombe) er chimpansetrekking-territorium, som mest nås med mindre fly, og den mest utrådte af de tre.',
      },
      {
        q: 'Er den sydlige safarirute (Ruaha, Nyerere/Selous) et besøg værd?',
        a: 'Ja, især for gengangere eller alle, der ønsker en roligere safari med en mere eksklusiv fornemmelse — Ruaha er Tanzanias største nationalpark og en af de bedste for løve og afrikansk vildhund, og Nyerere (tidligere Selous) er Afrikas største beskyttede område, kendt for bådsafarier ved siden af game drives. Begge modtager kun en brøkdel af den nordlige safariruts besøgstal. Ulempen er adgangen — de fleste rejser til den sydlige safarirute foregår med fly frem for kørsel, hvilket øger prisen.',
        relatedLinks: [{ label: 'Ruaha Nationalpark', href: '/destinations/ruaha' }, { label: 'Nyerere Nationalpark (Selous)', href: '/destinations/nyerere' }],
      },
      {
        q: 'Hvilket dyreliv vil jeg se i Tarangire Nationalpark?',
        a: 'Tarangire er mest kendt for sine elefantflokke — nogle af de største koncentrationer i Tanzania, især i tørtiden (juni-oktober), når de samles langs Tarangire-floden — samt sine karakteristiske, ældgamle baobabtræer. Parken er også stærk for løvesightings og en af de bedre parker på den nordlige safarirute til at få øje på de mindre, sjældnere sete antilopearter. Den besøges typisk som et 1-2-dages tilkøb sammen med Serengeti og Ngorongoro.',
        relatedLinks: [{ label: 'Tarangire Nationalpark', href: '/destinations/tarangire' }],
      },
    ],
  },
  {
    slug: 'kenya-and-rwanda',
    title: 'Safarier i Kenya & Rwanda',
    description: 'At kombinere lande, Masai Mara, og gorillatrekking.',
    icon: 'Compass',
    items: [
      {
        q: 'Kan jeg kombinere en Kenya- og Tanzania-safari i én rejse?',
        a: 'Ja, og det er en almindelig måde at se både Serengeti og Masai Mara på — teknisk set ét sammenhængende økosystem, der er delt af en international grænse. Selve grænseovergangen kræver enten en planlagt flyvning med et lille fly eller en lang landtransport plus separate parkadgangsgebyrer på hver side, så de fleste kombinerede rejseplaner afsætter mindst 10-12 dage i alt for ikke at føles forhastede.',
        relatedLinks: [{ label: '10-dages Kenya- & Tanzania-safari', href: '/safaris/10-day-kenya-tanzania-safari' }],
      },
      {
        q: 'Hvor meget koster gorillatrekking i Rwanda, og har jeg brug for en tilladelse?',
        a: 'Ja, en tilladelse er obligatorisk og findes i begrænset antal — Volcanoes Nationalpark i Rwanda udsteder et fast antal gorillatilladelser per dag, i øjeblikket til en pris på $1.500 per person, hvilket dækker en time med en habitueret gorillafamilie samt parkgebyrer og en guide. Tilladelser bør bookes i god tid, især til juli-september og december-februar, de tørreste og mest populære perioder for trekking.',
        relatedLinks: [{ label: '4-dages gorillatrekking i Rwanda', href: '/safaris/4-day-rwanda-gorilla-trekking' }, { label: 'Volcanoes Nationalpark', href: '/destinations/volcanoes' }],
      },
      {
        q: 'Hvad er det bedste tidspunkt at se gorillaer i Rwanda?',
        a: 'Gorillatrekking er muligt hele året, da tilladelser ikke er sæsonbestemte, men tørtiden — juni-september og december-februar — gør vandringen gennem Volcanoes Nationalparks stejle terræn lettere og mindre mudret. De vådere måneder (marts-maj, oktober-november) betyder sværere stier, men markant færre turister og til tider billigere indkvartering i nærheden.',
      },
      {
        q: 'Er Masai Mara det samme som Serengeti?',
        a: 'De er en del af det samme sammenhængende økosystem — Masai Mara er i bund og grund den kenyanske, nordlige forlængelse af Serengeti — kun adskilt af en international grænse, som dyrelivet selv ignorerer. Mara er mindre og modtager migrationsflokkene i flodovergangssæsonen (omtrent juli-oktober); Serengeti er langt større og huser migrationen resten af året, inklusive kalvesæsonen.',
      },
      {
        q: 'Hvor fysisk krævende er gorillatrekking?',
        a: 'Det varierer meget fra tur til tur — gorillafamilier spores og holder ikke til på ét fast sted, så en vandring kan variere fra under en time til 4-5 timer hver vej gennem stejl, til tider mudret vulkansk skov i højden (Volcanoes Nationalpark ligger på 2.400-4.500 m). Et rimeligt fitnessniveau er virkelig nyttigt; bærere står til rådighed for at bære oppakning og give en hjælpende hånd på stejlere strækninger til alle, der er bekymrede for terrænet.',
      },
    ],
  },
  {
    slug: 'kilimanjaro-and-trekking',
    title: 'Kilimanjaro & Trekking',
    description: 'Ruter, pris, sværhedsgrad, og succesrater for at bestige Kilimanjaro.',
    icon: 'Mountain',
    items: [
      {
        q: 'Hvad er den nemmeste rute til at bestige Kilimanjaro?',
        a: 'Machame er den mest populære rute og tilbyder en god balance mellem udsigt og akklimatisering, men Lemosho-ruten anses generelt for at være den letteste med hensyn til at nå toppen, primært fordi dens længere rejseplan (7-8 dage) giver kroppen mere tid til at akklimatisere. Marangu er den eneste rute med hytteovernatning i stedet for telte og har en jævnere daglig stigning, men dens kortere standardrejseplan betyder mindre akklimatiseringstid, hvilket kan opveje den lettere gang.',
        relatedLinks: [{ label: 'Kilimanjaro Machame-ruten', href: '/trekking/machame' }, { label: 'Alle Kilimanjaro-ruter', href: '/trekking' }],
      },
      {
        q: 'Hvor meget koster det at bestige Kilimanjaro?',
        a: 'Omkostningerne ved at bestige Kilimanjaro ligger typisk mellem $2.000-$2.500 per person for en budget- til mellemklasse-gruppebestigning, op til $3.500-$5.000+ for en privat, længere rute med bedre support og et højere forhold mellem guider og bestigere. Alene parkgebyrerne (fastsat af Tanzanias nationalparkmyndighed) udgør en stor fast andel af ethvert tilbud, så meget billige bestigninger betyder som regel besparelser på mandskabets løn, udstyr eller akklimatiseringsdage — hvilket alt sammen påvirker både sikkerheden og chancen for at nå toppen.',
        relatedLinks: [{ label: 'Kilimanjaro Machame-ruten', href: '/trekking/machame' }],
      },
      {
        q: 'Hvad er succesraten for at nå toppen af Kilimanjaro?',
        a: 'Succesraterne for at nå toppen varierer enormt afhængigt af rutens længde: kortere 5-dages ruter har succesrater helt ned til 40-50 % på grund af utilstrækkelig akklimatiseringstid, mens veltilrettelagte 7-8-dages ruter som Lemosho rapporterer succesrater på 85-90 %+. Den enkeltvis vigtigste faktor for at nå toppen er ikke kondition — det er at give kroppen nok dage til at akklimatisere sig til højden, hvilket er grunden til, at længere ruter konsekvent klarer sig bedre end kortere.',
      },
      {
        q: 'Hvor mange dage tager det at bestige Kilimanjaro?',
        a: 'De fleste ruter tager 6-8 dage tur-retur, selvom Marangu kan klares på 5 dage, og længere muligheder som en fuld Lemosho- eller Northern Circuit-rute kan tage 8-9 dage. Blot én ekstra akklimatiseringsdag forbedrer mærkbart både komforten og chancen for at nå toppen, hvilket er grunden til, at de fleste erfarne udbydere fraråder den korteste tilgængelige rejseplan på en given rute.',
      },
      {
        q: 'Skal jeg være en erfaren vandrer for at bestige Kilimanjaro?',
        a: 'Der kræves ingen teknisk klatreerfaring eller -udstyr på nogen af standard-trekkingruterne — det er en lang gåtur i stor højde, ikke en teknisk bestigning. Når det er sagt, gør et rimeligt grundlæggende fitnessniveau (at kunne gå behageligt i 5-7 timer om dagen) en reel forskel for, hvor meget du nyder turen, og højden påvirker kondition på uforudsigelige måder, så selv stærke vandrere bør tage akklimatisering alvorligt.',
      },
    ],
  },
  {
    slug: 'honeymoon-zanzibar-and-experiences',
    title: 'Bryllupsrejse, Zanzibar & Særlige Oplevelser',
    description: 'Bryllupsrejsesafarier, badeferietilkøb, ballonflyvninger, og fotorejser.',
    icon: 'Heart',
    items: [
      {
        q: 'Hvad er den bedste bryllupsrejse-rejseplan, der kombinerer safari og strand?',
        a: 'Den klassiske kombination er 4-5 nætter på safari på den nordlige safarirute (Serengeti og Ngorongoro dækker højdepunkterne effektivt), efterfulgt af 4-5 nætter på Zanzibar for strandhalvdelen af rejsen — i alt omtrent 9-10 dage. Camps rettet specifikt mod bryllupsrejsende tilbyder som regel privat middagsservering, omgivelser med fokus på voksne og eksklusive teltsuiter frem for familieindrettede værelser, så det kan betale sig at bekræfte, at et sted er egnet til bryllupsrejsende og ikke bare familievenligt.',
        relatedLinks: [{ label: '9-dages bryllupsrejsesafari & Zanzibar', href: '/safaris/9-day-honeymoon-safari-zanzibar' }, { label: 'Zanzibar', href: '/destinations/zanzibar' }],
      },
      {
        q: 'Hvor meget koster en ballonflyvning over Serengeti?',
        a: 'En ballonflyvning over Serengeti koster typisk $550-$700 per person for omkring en times flyvning ved solopgang, som regel efterfulgt af en champagne-bushfrokost. Den prissættes som et valgfrit tilkøb til en standard-safarirejseplan frem for at være inkluderet som standard, og skal bookes i forvejen, da hvert ballonfirma kun flyver et begrænset antal personer hver morgen.',
      },
      {
        q: 'Kan jeg kombinere en Tanzania-safari med en badeferie på Zanzibar?',
        a: 'Ja — det er en af de mest populære safariforlængelser og logistisk enkelt: Zanzibar er en kort flyvning fra Arusha eller de vigtigste safariruter, så de fleste udbydere indbygger den som en gnidningsfri sidste etape. En almindelig fordeling er 5-7 dage på safari efterfulgt af 3-5 dage på stranden, men forholdet er helt fleksibelt afhængigt af, hvor meget strandtid versus dyrelivstid du ønsker.',
        relatedLinks: [{ label: 'Safari & Zanzibar (10 dage)', href: '/safaris/10-day-safari-zanzibar' }],
      },
      {
        q: 'Adskiller en fotosafari sig fra en almindelig safari?',
        a: 'Ja — en dedikeret fotosafari bruger køretøjer, der er tilpasset fotografer (bønneposestøtter, ekstra vinduesplads, nogle gange en taglem i fotografhøjde), holder grupperne mindre og tilrettelægger dagen efter lyset — man forlader campen før solopgang og bliver ude gennem den gyldne time frem for at følge et fast køreskema. Guider på fotofokuserede rejser bliver også typisk briefet i at prioritere positionering til billeder frem for blot at krydse arter af.',
        relatedLinks: [{ label: 'Foto-eventyrsafari (7 dage)', href: '/safaris/7-day-photography-adventure-safari' }],
      },
      {
        q: 'Hvad er en fly-in safari, og er den ekstra pris det værd?',
        a: 'En fly-in safari bruger mindre fly til at flytte sig mellem parker i stedet for lange transporter i safarikøretøj — en køretur, der kunne tage 6-8 timer, bliver til en flyvning på 45-60 minutter. Det er den ekstra pris værd, primært på rejser, der dækker den sydlige eller vestlige safarirute (Ruaha, Nyerere, Mahale), hvor kørsel på vejene er reelt langt og hårdt; for den nordlige safariruts tætliggende parker er kørslen mellem dem ofte en del af oplevelsen frem for en ulempe.',
      },
    ],
  },
  {
    slug: 'culture-health-and-logistics',
    title: 'Kultur, Sundhed & Praktisk Logistik',
    description: 'Masaierne, vaccinationer, visa, og hvad du skal pakke.',
    icon: 'ShieldCheck',
    items: [
      {
        q: 'Hvem er masaierne?',
        a: 'Masaierne er et halvnomadisk kvægholderfolk, der er hjemmehørende i det nordlige Tanzania og det sydlige Kenya, og som historisk har været centreret om kvægdrift i Serengeti- og Rift Valley-regionen — det samme land, som mange safariruter går igennem i dag. Mange masai-samfund nær den nordlige safarirute byder besøgende velkommen til kulturelle landsbybesøg, der tilbyder en ægte, guide-arrangeret måde at lære om deres traditioner, karakteristiske klædedragt og levevis på, frem for kun at betragte dem som en kulisse for dyrelivet.',
      },
      {
        q: 'Hvem er hadzabe-folket, og kan jeg besøge deres samfund på safari?',
        a: 'Hadzabe-folket er et af de sidste sande jæger-samler-samfund på Jorden, som lever omkring Lake Eyasi i det nordlige Tanzania og stadig taler et karakteristisk klik-sprog. Ja — et respektfuldt, guideledet besøg er muligt og er en reel voksende interesse blandt rejsende, der ønsker kultur sammen med dyreliv: Et typisk besøg indebærer at deltage i en morgenjagt eller en indsamlingstur med hadzabe-folket, efterfulgt af et stop hos de naboliggende datoga, kendt for deres traditionelle smedehåndværk. Disse besøg fungerer bedst som samfundsledede rejser med etiske retningslinjer frem for uformelle besøg i ny og næ.',
        relatedLinks: [{ label: 'Tarangire, Ngorongoro & hadzabe-oplevelse', href: '/experiences/cultural-experience' }],
      },
      {
        q: 'Har jeg brug for vaccinationer eller malariamedicin til en Tanzania-safari?',
        a: 'Et vaccinationscertifikat mod gul feber er påkrævet, hvis du ankommer fra (eller har været i transit gennem) et land med risiko for smitte med gul feber — tjek de aktuelle krav i forhold til din konkrete rejserute. Malariaprofylakse anbefales kraftigt til safariregionerne (det meste af det tanzanianske fastland), selvom Zanzibar og højereliggende områder som Arusha og Ngorongoro-kraterets rand udgør en lavere risiko. Rutinevaccinationer (stivkrampe, hepatitis A/B, tyfus) anbefales ofte af rejseklinikker, men er ikke indrejsekrav for Tanzania. Bekræft altid aktuel vejledning hos en rejsemedicinsk fagperson inden afrejse.',
      },
      {
        q: 'Hvilket visum har jeg brug for til at besøge Tanzania?',
        a: 'De fleste nationaliteter har brug for et visum for at rejse ind i Tanzania, som enten kan fås som e-visum ansøgt online i forvejen, eller for mange nationaliteter, ved ankomst i de store lufthavne. At få e-visummet behandlet inden rejsen er generelt hurtigere og mindre stressende end at ankomme uden et. Krav og godkendte nationaliteter ændrer sig løbende, så bekræft de aktuelle regler direkte hos Tanzanias indvandringsmyndighed eller din ambassade tæt på din rejsedato, frem for at stole på ældre oplysninger.',
      },
      {
        q: 'Hvad skal jeg pakke til en safari?',
        a: 'Tøj i neutrale farver (khaki, oliven, brun — undgå klare farver samt ren hvid eller sort, som kan tiltrække insekter eller skille sig ud for dyrelivet), lag på lag til de kolde tidlige morgen-game drives, der hurtigt bliver varmere, en bredskygget hat, solcreme, en kikkert og en vandtæt eller polstret taske til kameraudstyret på grund af støvede veje. De fleste camps tilbyder vaskeservice, så det er som regel nok at pakke til 4-5 dage frem for hele rejsens længde, selv på længere safarier.',
      },
      {
        q: 'Er Tanzania sikkert for turister?',
        a: 'Tanzanias safariregioner er veletablerede, turismeafhængige områder med gode sikkerhedsforhold — de praktiske risici på en guidet safari handler mere om solpåvirkning, vejforhold og sund fornuft i nærheden af dyreliv (blive i køretøjet, følge guidens instruktioner) end om kriminalitet. Som ved al international rejse gælder standardforholdsregler i byer og på transitsteder. Seriøse udbydere briefer alle gæster om sikkerhedsforventninger ved rejsens begyndelse.',
      },
    ],
  },
  {
    slug: 'about-ewa',
    title: 'Om EWA Safari Outfitters',
    description: 'Hvem vi er, vores referencer, og hvad der gør en EWA-safari anderledes.',
    icon: 'Award',
    items: [
      {
        q: 'Hvad er EWA Safari Outfitters?',
        a: 'EWA Safari Outfitters er en lokalt ejet safariudbyder med base i Arusha, der har arrangeret skræddersyede safarier i Tanzania, Kenya og Rwanda siden 2022 — det samme team, der står bag ekstreme oplevelsesrejser i naturen gennem Serengeti, Ngorongoro og videre. "EWA" står for Extreme Wilderness Adventure, virksomhedens oprindelige navn, og hver rejse er stadig bygget op omkring den samme filosofi: ægte, private, guideledede safarier frem for pakkede grupperejser.',
        relatedLinks: [{ label: 'Om EWA Safari Outfitters', href: '/about' }],
      },
      {
        q: 'Hed EWA Safari Outfitters tidligere Extreme Wilderness Adventure?',
        a: 'Ja — EWA Safari Outfitters blev oprindeligt grundlagt og drevet som Extreme Wilderness Adventure, hvilket er grunden til, at webstedets domæne (theextremewilderness.com) og Instagram-profilen (@extremewildernessadventure) stadig bærer det navn. Rebrandingen til "EWA Safari Outfitters" afspejler det samme lokalt ejede team i Arusha, de samme guider og den samme drift — det er en navneopfriskning, ikke et ejerskifte eller en anden virksomhed.',
        relatedLinks: [{ label: 'Om EWA Safari Outfitters', href: '/about' }],
      },
      {
        q: 'Er EWA Safari Outfitters TATO-certificeret og en licenseret rejsearrangør i Tanzania?',
        a: 'Ja — EWA Safari Outfitters er TATO-certificeret (medlem af Tanzania Association of Tour Operators), brancheorganisationen der godkender legitime, licenserede udbydere i Tanzania. At booke hos en TATO-certificeret udbyder er en af de enkleste måder at bekræfte, at et Tanzania-safarifirma er behørigt licenseret, i stedet for en uregistreret mellemmand, der videresælger andre udbyderes rejser.',
      },
      {
        q: 'Hvad betyder TATO-medlemskabet reelt for min booking?',
        a: 'TATO har repræsenteret og godkendt Tanzanias rejsearrangører siden 1983, så medlemskabet betyder, at EWA Safari Outfitters er anerkendt af den samme branchorganisation, som både regeringen og den internationale rejsebranche samarbejder med — ikke bare en virksomhed, der selv kalder sig licenseret. I praksis betyder det, at en reel brancheorganisation står bag bookingen, hvis noget nogensinde skal løses ud over vores egen kundeservice, og det er derfor, TATO-medlemskab er et af de standardtjek, sikkerhedsbevidste rejsende foretager, før de overhovedet booker en Tanzania-safari. EWA er specifikt registreret under seks TATO-kategorier — Tour Operators, Mainland Tour Operators, DMC/Tour Operators, Mountain Trekking Operators, Zanzibar & Beach Holiday Operators og Cultural Experience Operators — der dækker vores safarirejseplaner, Kilimanjaro-bestigninger, Zanzibar-forlængelser og kulturelle udflugter.',
      },
      {
        q: 'Hvordan kan jeg selv bekræfte EWA Safari Outfitters’ TATO-medlemskab?',
        a: 'Direkte på TATOs egen hjemmeside — vores registrering er offentlig og ikke noget, vi kontrollerer eller kunne fremstille forkert. Det er en hurtig, uafhængig måde at bekræfte, at vi er en ægte, licenseret udbyder, inden du booker, i stedet for blot at tage en udbyders ord for det.',
        relatedLinks: [{ label: 'Se vores TATO-medlemsregistrering', href: 'https://tatotz.org/portfolio/ewa-safari-outfitters/' }],
      },
      {
        q: 'Hvor længe har EWA Safari Outfitters arrangeret safarier?',
        a: 'EWA Safari Outfitters har arrangeret safarier siden 2022 (over 5 års drift under navnet Extreme Wilderness Adventure før og gennem rebrandingen), med over 200 rejsende guidet gennem Tanzania, Kenya og Rwanda, en TripAdvisor-vurdering på 4,9 og gæster fra over 40 lande — etableret nok til at kende disse ruter godt, men stadig lille nok til, at hver rejse planlægges individuelt frem for at blive proppet ind i en fast gruppe-rejseplan.',
      },
      {
        q: 'Hvad gør EWA Safari Outfitters anderledes end andre Tanzania-safarifirmaer?',
        a: 'Hver EWA-safari bruger et privat køretøj og en privat guide — aldrig en delt lastbil med andre rejsende, du ikke selv har valgt at rejse sammen med — og virksomheden er 100 % lokalt ejet og baseret i Arusha frem for et udenlandsk bureau, der videresælger andre udbyderes rejser. Gæster rapporterer en 100 % observationsrate for Big Five, og teamets lokale viden på stedet (hvilke veje der er åbne, præcis hvor migrationen befinder sig denne uge) kommer af faktisk at være baseret der, hvor safarierne finder sted, ikke fra et callcenter i udlandet.',
        relatedLinks: [{ label: 'Hvad der gør os anderledes', href: '/about#why-us' }],
      },
      {
        q: 'Hvem bliver min safariguide hos EWA Safari Outfitters?',
        a: 'EWAs guideteam består af erfarne, Tanzania-baserede safariguider — heriblandt Mike Mawolle, Nixon Massawe og Josh Meela — som hver har mange års erfaring med at køre de samme ruter på den nordlige og sydlige safarirute, hvilket er præcis den slags lokale, vej-for-vej-viden, der gør forskellen mellem en god og en fantastisk game drive. Guider tildeles per rejse og deles ikke mellem flere køretøjer på samme tid.',
        relatedLinks: [{ label: 'Mød teamet', href: '/about#guides' }],
      },
      {
        q: 'Er EWA Safari Outfitters lokalt ejet, eller et udenlandsk bureau, der videresælger rejser?',
        a: 'EWA Safari Outfitters er 100 % lokalt ejet og baseret i Arusha, Tanzania — ikke et udenlandsk ejet bureau eller en bookingplatform, der videresælger andre udbyderes rejser med et tillæg. At booke direkte hos en lokalt ejet udbyder er også som regel mere omkostningseffektivt, da det fjerner det ekstra lag af international bureauavance.',
      },
      {
        q: 'Hvor har EWA Safari Outfitters til huse, og kan jeg besøge kontoret?',
        a: 'EWA Safari Outfitters har til huse på 20 Ingira Street, Arusha, Tanzania — samme by, som de fleste safarier på den nordlige safarirute og Kilimanjaro-bestigninger starter fra. Besøgende er velkomne til at kigge forbi kontoret før eller efter en rejse; kontakt os i god tid på info@theextremewilderness.com eller +255 (0) 747 999 070 for at aftale et besøg.',
        relatedLinks: [{ label: 'Besøg vores kontor', href: '/about' }, { label: 'Kontakt os', href: '/contact' }],
      },
      {
        q: 'Hvor hurtigt svarer EWA Safari Outfitters på forespørgsler?',
        a: 'EWA Safari Outfitters svarer typisk på safariforespørgsler inden for et par timer i østafrikansk kontortid, og som regel samme dag selv uden for den. Den hurtigste måde at få et reelt, skræddersyet tilbud (ikke en generisk prisliste) er via forespørgselsformularen på enhver safari-, destinations- eller FAQ-side på dette site, som går direkte til teamet i Arusha.',
        relatedLinks: [{ label: 'Kontakt os', href: '/contact' }],
      },
      {
        q: 'Opererer EWA Safari Outfitters kun i Tanzania, eller også i Kenya og Rwanda?',
        a: 'EWA Safari Outfitters er baseret i og forankret i Tanzania, men opererer og kombinerer også rejser gennem Kenya (Masai Mara og videre) og Rwanda (gorillatrekking i Volcanoes Nationalpark) — mange gæster kombinerer to eller tre lande i én skræddersyet rejseplan frem for at booke hver for sig.',
        relatedLinks: [{ label: 'Safarier i Kenya', href: '/kenya' }, { label: 'Safarier i Rwanda', href: '/rwanda' }],
      },
    ],
  },
]

export const FAQ_CATEGORY_SLUGS = faqCategories.map((c) => c.slug)
