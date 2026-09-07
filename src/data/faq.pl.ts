import type { FaqCategory } from './faq'

// Genuinely Polish-authored content — not a mechanical word-for-word
// translation of faq.ts. Category slugs/order stay identical to the
// English file (stable jump-nav anchors); questions and answers use
// natural, formal-register Polish safari-industry phrasing.
export const faqCategories: FaqCategory[] = [
  {
    slug: 'family-and-group-safaris',
    title: 'Safari rodzinne i grupowe',
    description: 'Safari z dziećmi, podróże wielopokoleniowe i wyjazdy w małych grupach.',
    icon: 'Users',
    items: [
      {
        q: 'Czy Tanzania jest bezpieczna na rodzinne safari z dziećmi?',
        a: 'Tak — Tanzania to jeden z najlepiej ugruntowanych kierunków na rodzinne safari w Afryce. Głównym ryzykiem, którym trzeba zarządzić, jest malaria, dlatego większość rodzin podróżuje z profilaktyką przeciwmalaryczną i, gdy to możliwe, wybiera obozy na wyżej położonych terenach o niższym ryzyku. Renomowani organizatorzy korzystają z prywatnych pojazdów (a nie wspólnych game drive), skracają dzienny czas jazdy dla młodszych dzieci i wybierają przyjazne rodzinom lodge z połączonymi pokojami lub namiotami rodzinnymi zamiast standardowych pokoi dwuosobowych. Wiele obozów ustala minimalny wiek (zwykle 6-8 lat) dla safari pieszych lub niektórych aktywności, ale same game drive są dostępne dla gości w każdym wieku.',
        relatedLinks: [{ label: '10-dniowe luksusowe safari rodzinne', href: '/safaris/10-days-luxury-family' }],
      },
      {
        q: 'Jaki jest najlepszy plan podróży na safari dla rodziny z małymi dziećmi?',
        a: 'Najlepsze plany podróży na rodzinne safari pozostają w granicach północnej trasy safari w Tanzanii (Serengeti, Ngorongoro, Tarangire, Lake Manyara), aby zminimalizować długie dni transferowe, wykorzystują prywatne pojazdy 4x4 zamiast dzielonych ciężarówek i przewidują czas wolny w każdym obozie — czas przy basenie, spacery przyrodnicze dla dzieci, programy młodszego rangera — zamiast serii game drive jeden po drugim. Prywatny przewodnik, który potrafi dostosować tempo dnia do czasu skupienia dziecka, robi większą różnicę niż wybór konkretnych parków.',
        relatedLinks: [{ label: 'Kierunki podróży według trasy safari', href: '/destinations/tanzania' }],
      },
      {
        q: 'Ile dni powinno trwać rodzinne safari?',
        a: 'Większość rodzinnych safari trwa 5-7 dni — na tyle długo, by bez pośpiechu zobaczyć 2-3 parki, i na tyle krótko, by utrzymać uwagę młodszych dzieci i poradzić sobie z jet lagiem. Rodziny łączące safari z pobytem na plaży na wyspie Zanzibar często dodają jeszcze 3-4 dni nad morzem, ponieważ małe dzieci zwykle lepiej znoszą pobyt na plaży niż serię game drive jeden po drugim.',
      },
      {
        q: 'Czy dziadkowie lub grupa wielopokoleniowa mogą razem pojechać na safari?',
        a: 'Tak — safari wielopokoleniowe i w małych grupach są powszechne, a obozy zazwyczaj radzą sobie z szerokim przedziałem wiekowym w ramach tego samego planu podróży. Najważniejszą kwestią przy planowaniu jest tempo: wyjazd zaplanowany zarówno dla 70-letniego dziadka, jak i 6-letniego wnuka, sprawdza się najlepiej przy krótszych dniach jazdy, obozach z łatwo dostępnymi pokojami (mniej schodów, namioty na parterze) i wbudowanymi dniami odpoczynku zamiast napiętego harmonogramu zaprojektowanego dla sprawniejszych podróżników indywidualnych.',
        relatedLinks: [{ label: 'Safari dla seniorów, rocznicowe i grupowe', href: '/safaris/12-day-seniors-anniversary-groups-safari' }],
      },
      {
        q: 'Co jest wliczone w cenę pakietu rodzinnego safari?',
        a: 'Dobrze skomponowany pakiet rodzinnego safari zazwyczaj obejmuje prywatny pojazd i przewodnika na cały wyjazd, wszystkie opłaty parkowe i za ochronę przyrody, zakwaterowanie, większość lub wszystkie posiłki oraz transfery wewnętrzne. Co zwykle NIE jest wliczone: loty międzynarodowe, wizy, napiwki oraz opcjonalne dodatki, takie jak przeloty balonem. Zapytaj wprost, czy podana cena dotyczy jednej osoby, czy całej rodziny, ponieważ struktury cenowe pokoi rodzinnych i połączonych namiotów różnią się znacznie między obozami.',
      },
    ],
  },
  {
    slug: 'best-time-and-great-migration',
    title: 'Najlepszy czas na wyjazd i wielka migracja',
    description: 'Pory roku, pogoda i kiedy zobaczyć migrację gnu.',
    icon: 'Calendar',
    items: [
      {
        q: 'Kiedy jest najlepszy czas, aby zobaczyć przeprawy przez rzekę podczas migracji gnu?',
        a: 'To zależy od tego, którą część migracji chcesz zobaczyć. Dramatyczne przeprawy przez rzekę Mara odbywają się mniej więcej od lipca do października w północnej części Serengeti, gdy ponad milion gnu przemieszcza się na północ w stronę Kenii. Sezon wycielania — być może okres z największą liczbą drapieżników w akcji — przypada na styczeń–marzec w południowej części Serengeti (rejon Ndutu). Nie ma jednego „najlepszego miesiąca” dla całej migracji, ponieważ jest to wydarzenie całoroczne i stale w ruchu, a nie jedna, ustalona data.',
        relatedLinks: [{ label: 'Park Narodowy Serengeti', href: '/destinations/serengeti' }],
      },
      {
        q: 'Kiedy w Tanzanii odbywa się wielka migracja?',
        a: 'Wielka migracja odbywa się gdzieś w ekosystemie Serengeti przez cały rok — to ciągły cykl, a nie jedno wydarzenie z konkretną datą początku i końca. W dużym uproszczeniu: wycielanie na południu od stycznia do marca, ruch na północ przez centralną część Serengeti od kwietnia do czerwca, przeprawy przez rzeki na północy od lipca do października oraz powrót na południe zaczynający się mniej więcej w listopadzie. Dokładne położenie stad w danym tygodniu zależy od opadów deszczu, więc dokładny moment zmienia się z roku na rok.',
      },
      {
        q: 'Który miesiąc jest najlepszy na wizytę w Serengeti?',
        a: 'Nie ma jednego, uniwersalnie „najlepszego” miesiąca — to zależy od tego, co chcesz zobaczyć. Na przeprawy przez rzeki celuj w sierpień lub wrzesień. Na sezon wycielania i najwyższą koncentrację drapieżników — styczeń do marca. Jeśli zależy Ci na mniejszym tłoku i bujnej zieleni, niedoceniane są krótkie deszcze w listopadzie. Czerwiec i lipiec oferują dobry kompromis: dobrą pogodę, stada migracji przemieszczające się przez centralną i zachodnią część Serengeti oraz mniejszy tłok niż w szczycie sezonu w sierpniu.',
      },
      {
        q: 'Czy Tanzania to całoroczny kierunek na safari?',
        a: 'Tak. Tanzania nie ma prawdziwego martwego sezonu, jeśli chodzi o obserwację dzikich zwierząt — pory suche (czerwiec–październik i styczeń–luty) skupiają zwierzęta wokół źródeł wody, co ułatwia obserwacje, natomiast pory deszczowe (marzec–maj, listopad) przynoszą bujną zieleń, nowo narodzone zwierzęta oraz znacznie niższe ceny i mniejszy tłok. Długie deszcze (marzec–kwiecień) to najspokojniejszy okres i jedyny moment, gdy niektóre odległe obozy się zamykają, ale główne trasy safari pozostają otwarte.',
      },
      {
        q: 'Kiedy jest sezon wycielania w Serengeti i dlaczego ma to znaczenie?',
        a: 'Sezon wycielania trwa mniej więcej od stycznia do marca na równinach krótkiej trawy w południowej części Serengeti i rejonie Ndutu, gdy nawet 8 000 cieląt gnu może przyjść na świat w ciągu jednego dnia. To okres, w którym migracja przyciąga najwyższą koncentrację drapieżników — lwów, gepardów i hien — co czyni go jednym z najlepszych momentów na obserwację drapieżników, mimo że w tym czasie roku nie ma jeszcze przepraw przez rzeki.',
      },
    ],
  },
  {
    slug: 'planning-costs-and-comparisons',
    title: 'Planowanie, koszty i Kenia a Tanzania',
    description: 'Ile kosztuje safari, co jest wliczone i jak wybrać między krajami.',
    icon: 'DollarSign',
    items: [
      {
        q: 'Ile kosztuje safari w Tanzanii?',
        a: 'Koszt safari w Tanzanii zależy w dużej mierze od pory roku, liczebności grupy i standardu obozu. W dużym uproszczeniu dobrze zorganizowane safari w standardzie średnim kosztuje mniej więcej $400-$600 za osobę dziennie, safari luksusowe może kosztować $700-$1 200 lub więcej za osobę dziennie, a budżetowe safari z kempingiem można znaleźć poniżej $300 dziennie. Cena za osobę wyraźnie spada przy większych grupach, ponieważ prywatny pojazd, przewodnik i opłaty parkowe są dzielone. Dokładna cena mocno zależy od pory roku podróży — wysoki sezon (czerwiec–październik, styczeń–luty) wiąże się z wyższymi stawkami.',
        relatedLinks: [{ label: 'Przeglądaj pakiety safari', href: '/safaris' }],
      },
      {
        q: 'Kenia czy Tanzania — co jest lepsze na safari?',
        a: 'Żaden kraj nie jest obiektywnie „lepszy” — pasują do różnych priorytetów. Tanzania ma więcej łącznej powierzchni terenów chronionych, krater Ngorongoro, Zanzibar jako dodatek plażowy i przez większość roku gości migrację. Kenia ma Masai Mara (część tego samego ekosystemu migracji, najlepszą do przepraw przez rzeki od lipca do października), zazwyczaj krótszy czas lotu z Europy i w niektórych rejonach nieco bardziej rozwiniętą infrastrukturę safari. Wielu podróżnych łączy oba kraje w jednym wyjeździe, zamiast wybierać jeden z nich.',
        relatedLinks: [{ label: 'Kierunki podróży w Tanzanii', href: '/destinations/tanzania' }, { label: 'Safari w Kenii', href: '/kenya' }],
      },
      {
        q: 'Ile dni potrzebuję na safari w Tanzanii?',
        a: '7 dni to optymalny czas, by dobrze poznać północną trasę safari (Serengeti, Ngorongoro, Tarangire) bez pośpiechu. 4-5 dni sprawdza się przy wyjeździe skoncentrowanym na 2 parkach. 10-14 dni pozwala połączyć północ z południową lub zachodnią trasą safari albo dodać Zanzibar czy wejście na Kilimandżaro. Safari krótsze niż 4 dni zwykle oznacza dużo czasu spędzonego w drodze w stosunku do czasu spędzonego w samych parkach.',
      },
      {
        q: 'Co jest wliczone w cenę safari, a co nie?',
        a: 'Większość pakietów safari w Tanzanii obejmuje: prywatny pojazd i kierowcę-przewodnika, wszystkie opłaty parkowe i za ochronę przyrody, zakwaterowanie oraz większość posiłków. Zazwyczaj NIE jest wliczone: loty międzynarodowe, opłaty za wizę do Tanzanii, ubezpieczenie podróżne, napiwki dla przewodników i personelu obozu, napoje alkoholowe oraz opcjonalne dodatki, takie jak przeloty balonem czy przedłużenie o pobyt na plaży na wyspie Zanzibar. Zawsze potwierdzaj dokładnie, co jest wliczone w pakiet, zanim porównasz oferty, ponieważ „cena safari” oznacza co innego u różnych organizatorów.',
      },
      {
        q: 'Czy taniej jest zarezerwować safari bezpośrednio u lokalnego organizatora?',
        a: 'Zazwyczaj tak — rezerwacja bezpośrednio u lokalnego, licencjonowanego organizatora w Tanzanii pozwala uniknąć marży, jaką doliczają międzynarodowe platformy rezerwacyjne i agencje, często 15-30%. Kompromisem jest to, że trzeba samodzielnie zweryfikować licencję organizatora, opinie oraz jakość pojazdów i przewodników, ponieważ traci się warstwę weryfikacji, jaką zapewnia platforma. Lokalny organizator z siedzibą w Arusha zwykle ma też lepszą, bieżącą wiedzę o warunkach w parkach, zamkniętych drogach i aktualnym położeniu migracji.',
      },
    ],
  },
  {
    slug: 'tanzania-circuits-and-wildlife',
    title: 'Trasy safari w Tanzanii i dzikie zwierzęta',
    description: 'Big Five, trasy safari w Tanzanii i czego się spodziewać w każdym parku.',
    icon: 'Binoculars',
    items: [
      {
        q: 'Co to jest Big Five i gdzie można je zobaczyć w Tanzanii?',
        a: 'Big Five — lew, lampart, słoń, bawół i nosorożec — można spotkać w Tanzanii, choć obserwacje nosorożca są najrzadsze, ponieważ liczebność nosorożca czarnego jest niska i skupiona niemal wyłącznie w kraterze Ngorongoro. Lwa, słonia i bawoła można spotkać niezawodnie w Serengeti, Ngorongoro i Tarangire. Lampart jest najtrudniejszym z piątki do zaobserwowania gdziekolwiek — najpewniej w rejonie Seronera w centralnej części Serengeti, gdzie chętnie przebywa na drzewach nad rzekami.',
        relatedLinks: [{ label: 'Park Narodowy Serengeti', href: '/destinations/serengeti' }, { label: 'Krater Ngorongoro', href: '/destinations/ngorongoro' }],
      },
      {
        q: 'Jaka jest różnica między kraterem Ngorongoro a Serengeti?',
        a: 'Ngorongoro to pojedynczy, zwarty, samowystarczalny ekosystem — zapadnięta kaldera wulkaniczna o powierzchni około 260 km² na dnie krateru — gdzie dzikie zwierzęta są nietypowo skoncentrowane i zwykle widoczne podczas jednego, bardzo owocnego dnia. Serengeti jest rozległe (blisko 15 000 km²), to otwarte równiny, po których przemieszcza się migracja, a obserwacje są rozłożone na znacznie większym obszarze przez kilka dni. Większość planów podróży obejmuje oba miejsca: Ngorongoro na intensywny, pewny dzień obserwacji Big Five, a potem Serengeti na doświadczenie otwartych równin i migracji.',
        relatedLinks: [{ label: 'Krater Ngorongoro', href: '/destinations/ngorongoro' }],
      },
      {
        q: 'Jaka jest różnica między północną, południową i zachodnią trasą safari w Tanzanii?',
        a: 'Północna trasa safari (Serengeti, Ngorongoro, Tarangire, Lake Manyara) to klasyczna, najczęściej odwiedzana trasa w Tanzanii — najlepsza infrastruktura, migracja, pewne obserwacje Big Five. Południowa trasa safari (Ruaha, Nyerere/Selous) jest odległa, mniej zatłoczona i bardziej dzika — większe, bardziej rozproszone parki z dużo mniejszą liczbą pojazdów. Zachodnia trasa safari (Mahale, Katavi, Gombe) to teren trekkingu do szympansów, dostępny głównie małymi samolotami, i najbardziej oddalona od utartych szlaków spośród całej trójki.',
      },
      {
        q: 'Czy warto odwiedzić południową trasę safari (Ruaha, Nyerere/Selous)?',
        a: 'Tak, zwłaszcza dla osób odwiedzających Tanzanię ponownie lub każdego, kto chce spokojniejszego, bardziej ekskluzywnego safari — Ruaha to największy park narodowy w Tanzanii i jeden z najlepszych na obserwację lwów i likaonów, a Nyerere (dawniej Selous) to największy obszar chroniony w Afryce, znany z safari łodzią obok klasycznych game drive. Oba parki odwiedza ułamek liczby turystów w porównaniu z północną trasą safari. Kompromisem jest dostępność — do większości wyjazdów na południową trasę safari dolatuje się samolotem zamiast dojeżdżać, co podnosi koszt.',
        relatedLinks: [{ label: 'Park Narodowy Ruaha', href: '/destinations/ruaha' }, { label: 'Park Narodowy Nyerere (Selous)', href: '/destinations/nyerere' }],
      },
      {
        q: 'Jakie dzikie zwierzęta zobaczę w Parku Narodowym Tarangire?',
        a: 'Tarangire znane jest przede wszystkim ze stad słoni — jednych z największych skupisk w Tanzanii, zwłaszcza w porze suchej (czerwiec–październik), gdy gromadzą się wzdłuż rzeki Tarangire — a także z charakterystycznych, wiekowych baobabów. To także dobre miejsce na obserwację lwów oraz jeden z lepszych parków na północnej trasie safari na obserwację mniejszych, rzadziej spotykanych gatunków antylop. Zwykle odwiedza się go jako 1-2-dniowe uzupełnienie wyjazdu do Serengeti i Ngorongoro.',
        relatedLinks: [{ label: 'Park Narodowy Tarangire', href: '/destinations/tarangire' }],
      },
    ],
  },
  {
    slug: 'kenya-and-rwanda',
    title: 'Safari w Kenii i Rwandzie',
    description: 'Łączenie krajów, Masai Mara i trekking do goryli.',
    icon: 'Compass',
    items: [
      {
        q: 'Czy mogę połączyć safari w Kenii i Tanzanii w jednym wyjeździe?',
        a: 'Tak, i to popularny sposób, by zobaczyć zarówno Serengeti, jak i Masai Mara — technicznie jeden ciągły ekosystem podzielony granicą państwową. Samo przekroczenie granicy wymaga albo lotu małym samolotem rejsowym, albo długiej podróży lądem, a do tego osobnych opłat za wstęp do parków po obu stronach, dlatego większość łączonych planów podróży zakłada co najmniej 10-12 dni w sumie, aby uniknąć wrażenia pośpiechu.',
        relatedLinks: [{ label: '10-dniowe safari w Kenii i Tanzanii', href: '/safaris/10-day-kenya-tanzania-safari' }],
      },
      {
        q: 'Ile kosztuje trekking do goryli w Rwandzie i czy potrzebuję zezwolenia?',
        a: 'Tak, zezwolenie jest obowiązkowe i dostępne w ograniczonej liczbie — Park Narodowy Volcanoes w Rwandzie wydaje ustaloną liczbę zezwoleń na trekking do goryli dziennie, obecnie w cenie $1 500 za osobę, co obejmuje godzinę z oswojoną rodziną goryli oraz opłaty parkowe i przewodnika. Zezwolenia warto rezerwować z dużym wyprzedzeniem, zwłaszcza na okres lipiec–wrzesień oraz grudzień–luty, czyli najbardziej suche i najpopularniejsze okresy na trekking.',
        relatedLinks: [{ label: '4-dniowy trekking do goryli w Rwandzie', href: '/safaris/4-day-rwanda-gorilla-trekking' }, { label: 'Park Narodowy Volcanoes', href: '/destinations/volcanoes' }],
      },
      {
        q: 'Jaki jest najlepszy czas na obserwację goryli w Rwandzie?',
        a: 'Trekking do goryli jest możliwy przez cały rok, ponieważ zezwolenia nie są sezonowe, ale pory suche — czerwiec–wrzesień i grudzień–luty — sprawiają, że wędrówka po stromym terenie Parku Narodowego Volcanoes jest łatwiejsza i mniej błotnista. Bardziej wilgotne miesiące (marzec–maj, październik–listopad) oznaczają trudniejsze szlaki, ale wyraźnie mniej turystów i czasem niższe ceny zakwaterowania w okolicy.',
      },
      {
        q: 'Czy Masai Mara to to samo co Serengeti?',
        a: 'Są częścią tego samego, ciągłego ekosystemu — Masai Mara to w zasadzie kenijskie, północne przedłużenie Serengeti — oddzielone jedynie granicą państwową, którą same zwierzęta ignorują. Mara jest mniejsza i przyjmuje stada migracji w sezonie przepraw przez rzeki (mniej więcej lipiec–październik); Serengeti jest znacznie większe i gości migrację przez resztę roku, w tym w sezonie wycielania.',
      },
      {
        q: 'Jak wymagający fizycznie jest trekking do goryli?',
        a: 'To bardzo się różni w zależności od konkretnej wędrówki — rodziny goryli są tropione, a nie związane z jednym miejscem, więc wędrówka może trwać od niecałej godziny do 4-5 godzin w jedną stronę, przez strome, czasem błotniste lasy wulkaniczne na wysokości (Park Narodowy Volcanoes leży na wysokości 2 400-4 500 m). Rozsądny poziom sprawności fizycznej naprawdę się przydaje; dostępni są tragarze, którzy niosą bagaże i pomagają na bardziej stromych odcinkach każdemu, kto obawia się terenu.',
      },
    ],
  },
  {
    slug: 'kilimanjaro-and-trekking',
    title: 'Kilimandżaro i trekking',
    description: 'Trasy, koszt, trudność i wskaźniki sukcesu przy wejściu na Kilimandżaro.',
    icon: 'Mountain',
    items: [
      {
        q: 'Jaka jest najłatwiejsza trasa na Kilimandżaro?',
        a: 'Machame to najpopularniejsza trasa, oferująca dobrą równowagę między widokami a aklimatyzacją, ale trasa Lemosho jest generalnie uważana za najłatwiejszą pod względem sukcesu na szczycie, głównie dlatego, że jej dłuższy plan podróży (7-8 dni) daje organizmowi więcej czasu na aklimatyzację. Marangu to jedyna trasa z zakwaterowaniem w schroniskach zamiast namiotów i ma łagodniejszy dzienny profil wysokości, ale jej krótszy standardowy plan podróży oznacza mniej czasu na aklimatyzację, co może zniwelować korzyść z łatwiejszego marszu.',
        relatedLinks: [{ label: 'Trasa Machame na Kilimandżaro', href: '/trekking/machame' }, { label: 'Wszystkie trasy na Kilimandżaro', href: '/trekking' }],
      },
      {
        q: 'Ile kosztuje wejście na Kilimandżaro?',
        a: 'Koszt wejścia na Kilimandżaro zazwyczaj mieści się w przedziale $2 000-$2 500 za osobę przy wejściu grupowym w standardzie budżetowym do średniego, a przy prywatnej, dłuższej trasie z lepszym wsparciem i wyższym stosunkiem przewodników do uczestników może wynieść $3 500-$5 000 lub więcej. Same opłaty parkowe (ustalane przez organ zarządzający parkami narodowymi Tanzanii) stanowią dużą, stałą część każdej wyceny, więc bardzo tanie wejścia zwykle oznaczają oszczędzanie na wynagrodzeniach ekipy, sprzęcie lub dniach aklimatyzacyjnych — a to wszystko wpływa zarówno na bezpieczeństwo, jak i na sukces zdobycia szczytu.',
        relatedLinks: [{ label: 'Trasa Machame na Kilimandżaro', href: '/trekking/machame' }],
      },
      {
        q: 'Jaki jest wskaźnik sukcesu przy zdobywaniu szczytu Kilimandżaro?',
        a: 'Wskaźniki sukcesu zdobycia szczytu bardzo się różnią w zależności od długości trasy: krótsze, 5-dniowe trasy notują wskaźniki sukcesu na poziomie zaledwie 40-50% z powodu niewystarczającego czasu na aklimatyzację, podczas gdy dobrze rozłożone w czasie trasy 7-8-dniowe, takie jak Lemosho, notują wskaźniki sukcesu na poziomie 85-90% i więcej. Największym pojedynczym czynnikiem decydującym o dotarciu na szczyt nie jest sprawność fizyczna — to danie organizmowi wystarczającej liczby dni na aklimatyzację do wysokości, dlatego dłuższe trasy konsekwentnie osiągają lepsze wyniki niż krótsze.',
      },
      {
        q: 'Ile dni zajmuje wejście na Kilimandżaro?',
        a: 'Większość tras zajmuje 6-8 dni w obie strony, choć Marangu można pokonać w 5 dni, a dłuższe opcje, takie jak pełna trasa Lemosho lub trasa Northern Circuit, mogą trwać 8-9 dni. Nawet jeden dodatkowy dzień aklimatyzacyjny wyraźnie poprawia zarówno komfort, jak i szanse na sukces, dlatego większość doświadczonych organizatorów odradza wybieranie najkrótszego dostępnego wariantu na danej trasie.',
      },
      {
        q: 'Czy muszę być doświadczonym piechurem, aby wejść na Kilimandżaro?',
        a: 'Na żadnej ze standardowych tras trekkingowych nie jest wymagane techniczne doświadczenie wspinaczkowe ani specjalistyczny sprzęt — to długi, wysokogórski marsz, a nie wspinaczka techniczna. Mimo to rozsądny podstawowy poziom sprawności fizycznej (możliwość komfortowego marszu przez 5-7 godzin dziennie) robi realną różnicę w tym, jak bardzo cieszysz się wyprawą, a wysokość wpływa na sprawność fizyczną w nieprzewidywalny sposób, więc nawet silni piechurzy powinni poważnie podchodzić do aklimatyzacji.',
      },
    ],
  },
  {
    slug: 'honeymoon-zanzibar-and-experiences',
    title: 'Podróż poślubna, Zanzibar i wyjątkowe doświadczenia',
    description: 'Safari poślubne, uzupełnienia plażowe, przeloty balonem i wyjazdy fotograficzne.',
    icon: 'Heart',
    items: [
      {
        q: 'Jaki jest najlepszy plan podróży poślubnej łączącej safari i plażę?',
        a: 'Klasyczne połączenie to 4-5 nocy na safari na północnej trasie safari (Serengeti i Ngorongoro efektywnie pokrywają najważniejsze atrakcje), a następnie 4-5 nocy na wyspie Zanzibar na plażową część wyjazdu — łącznie mniej więcej 9-10 dni. Obozy dedykowane parom młodym zwykle oferują prywatne kolacje, atmosferę skierowaną do dorosłych i luksusowe apartamenty namiotowe zamiast pokoi w układzie rodzinnym, więc warto potwierdzić, że dany obiekt jest odpowiedni na podróż poślubną, a nie jedynie przyjazny rodzinom.',
        relatedLinks: [{ label: '9-dniowe safari poślubne i Zanzibar', href: '/safaris/9-day-honeymoon-safari-zanzibar' }, { label: 'Zanzibar', href: '/destinations/zanzibar' }],
      },
      {
        q: 'Ile kosztuje przelot balonem nad Serengeti?',
        a: 'Lot balonem nad Serengeti kosztuje zazwyczaj $550-$700 za osobę za mniej więcej godzinę w powietrzu o wschodzie słońca, zwykle zakończony śniadaniem w buszu z lampką szampana. Jest to wyceniane jako opcjonalny dodatek do standardowego planu podróży safari, a nie wliczone domyślnie, i trzeba je rezerwować z wyprzedzeniem, ponieważ każda firma balonowa zabiera ograniczoną liczbę osób każdego poranka.',
      },
      {
        q: 'Czy mogę połączyć safari w Tanzanii z wakacjami na plaży na wyspie Zanzibar?',
        a: 'Tak — to jedno z najpopularniejszych uzupełnień safari i logistycznie proste: Zanzibar to krótki lot z Arusha lub głównych tras safari, więc większość organizatorów wpina go jako płynny ostatni etap podróży. Częstym podziałem jest 5-7 dni safari i 3-5 dni na plaży, choć proporcje są całkowicie elastyczne, w zależności od tego, ile czasu chcesz spędzić na plaży, a ile na obserwacji dzikich zwierząt.',
        relatedLinks: [{ label: '10-dniowe safari i Zanzibar', href: '/safaris/10-day-safari-zanzibar' }],
      },
      {
        q: 'Czy safari fotograficzne różni się od zwykłego safari?',
        a: 'Tak — dedykowane safari fotograficzne wykorzystuje pojazdy przystosowane dla fotografów (podpórki typu beanbag, dodatkowa przestrzeń przy oknach, czasem dach z otworem na wysokości dogodnej dla fotografa), utrzymuje mniejsze grupy i dostosowuje tempo dnia do światła — wyjazd z obozu przed wschodem słońca i pozostanie w terenie przez całą złotą godzinę, zamiast trzymania się stałego harmonogramu jazdy. Przewodnicy na wyjazdach nastawionych na fotografię są zwykle również instruowani, by priorytetowo traktować dobre ustawienie do zdjęcia, a nie samo odhaczanie kolejnych gatunków.',
        relatedLinks: [{ label: '7-dniowe safari fotograficzne', href: '/safaris/7-day-photography-adventure-safari' }],
      },
      {
        q: 'Czym jest safari fly-in i czy warto zapłacić za nie więcej?',
        a: 'Safari fly-in wykorzystuje małe samoloty do przemieszczania się między parkami zamiast długich transferów pojazdem podczas game drive — przejazd, który mógłby zająć 6-8 godzin, staje się 45-60-minutowym lotem. Warto dopłacić przede wszystkim przy wyjazdach obejmujących południową lub zachodnią trasę safari (Ruaha, Nyerere, Mahale), gdzie transfery drogowe są naprawdę długie i wyboiste; na północnej trasie safari, gdzie parki leżą blisko siebie, jazda między nimi jest często częścią samego doświadczenia, a nie jego wadą.',
      },
    ],
  },
  {
    slug: 'culture-health-and-logistics',
    title: 'Kultura, zdrowie i logistyka praktyczna',
    description: 'Masajowie, szczepienia, wizy i co spakować.',
    icon: 'ShieldCheck',
    items: [
      {
        q: 'Kim są Masajowie?',
        a: 'Masajowie to na wpół koczowniczy lud pasterski, rdzenny dla północnej Tanzanii i południowej Kenii, historycznie skupiony wokół hodowli bydła w regionie Serengeti i Rift Valley — na tych samych ziemiach, przez które dziś przebiega wiele tras safari. Wiele społeczności masajskich w pobliżu północnej trasy safari zaprasza gości na wizyty kulturowe w wioskach, oferując autentyczny, zorganizowany przez przewodnika sposób poznania ich tradycji, charakterystycznego stroju i stylu życia, a nie traktowanie ich wyłącznie jako tła dla dzikiej przyrody.',
      },
      {
        q: 'Kim są Hadzabe i czy mogę odwiedzić ich społeczność na safari?',
        a: 'Hadzabe to jedna z ostatnich prawdziwych społeczności łowiecko-zbierackich na Ziemi, żyjąca w okolicach Lake Eyasi w północnej Tanzanii i wciąż posługująca się charakterystycznym językiem klikającym. Tak — pełna szacunku wizyta prowadzona przez przewodnika jest możliwa i cieszy się rosnącym zainteresowaniem podróżnych, którzy chcą połączyć kulturę z dziką przyrodą: typowa wizyta obejmuje udział w porannym polowaniu lub zbieraniu z Hadzabe, a następnie odwiedziny u sąsiadującego ludu Datoga, znanego z tradycyjnego kowalstwa. Takie wizyty najlepiej sprawdzają się w ramach wyjazdów prowadzonych przez społeczność, z zachowaniem etycznych zasad, a nie jako nieformalne, przypadkowe odwiedziny.',
        relatedLinks: [{ label: 'Doświadczenie Tarangire, Ngorongoro i Hadzabe', href: '/experiences/cultural-experience' }],
      },
      {
        q: 'Czy potrzebuję szczepień lub leków przeciwmalarycznych na safari w Tanzanii?',
        a: 'Certyfikat szczepienia przeciw żółtej gorączce jest wymagany, jeśli przylatujesz z kraju (lub tranzytem przez kraj) z ryzykiem transmisji żółtej gorączki — sprawdź aktualne wymogi względem swojej konkretnej trasy podróży. Profilaktyka przeciwmalaryczna jest zdecydowanie zalecana dla regionów safari (większość kontynentalnej Tanzanii), choć Zanzibar i tereny wyżej położone, takie jak Arusha i obrzeża krateru Ngorongoro, niosą niższe ryzyko. Standardowe szczepienia (tężec, wirusowe zapalenie wątroby typu A/B, dur brzuszny) są często zalecane przez poradnie medycyny podróży, ale nie są wymogiem wjazdu do Tanzanii. Zawsze potwierdź aktualne zalecenia z lekarzem medycyny podróży przed wyjazdem.',
      },
      {
        q: 'Jaka wiza jest potrzebna, aby odwiedzić Tanzanię?',
        a: 'Większość obywateli potrzebuje wizy, aby wjechać do Tanzanii, dostępnej albo jako e-wiza, o którą można wystąpić online z wyprzedzeniem, albo dla wielu narodowości na miejscu, na głównych lotniskach. Załatwienie e-wizy przed podróżą jest zwykle szybsze i mniej stresujące niż przyjazd bez niej. Wymogi i kraje uprawnione zmieniają się okresowo, więc potwierdź aktualne zasady bezpośrednio u tanzańskich władz imigracyjnych lub w swojej ambasadzie, blisko terminu wyjazdu, zamiast polegać na nieaktualnych informacjach.',
      },
      {
        q: 'Co powinienem spakować na safari?',
        a: 'Ubrania w stonowanych kolorach (khaki, oliwkowy, brąz — unikaj jaskrawych kolorów oraz czystej bieli i czerni, które mogą przyciągać owady lub rzucać się w oczy dzikim zwierzętom), warstwy ubrań na zimne, wczesnoranne game drive, które szybko się ocieplają, kapelusz z szerokim rondem, krem z filtrem, lornetkę oraz suchy worek lub wyściełaną torbę na sprzęt fotograficzny ze względu na zakurzone drogi. Większość obozów oferuje pranie, więc spakowanie się na 4-5 dni, a nie na cały czas trwania wyjazdu, zwykle wystarcza nawet na dłuższych safari.',
      },
      {
        q: 'Czy Tanzania jest bezpieczna dla turystów?',
        a: 'Regiony safari w Tanzanii to dobrze rozwinięte, uzależnione od turystyki obszary o dobrej historii bezpieczeństwa — praktyczne ryzyka podczas safari z przewodnikiem dotyczą bardziej ekspozycji na słońce, warunków drogowych i zdrowego rozsądku w bliskości dzikich zwierząt (pozostawanie w pojeździe, przestrzeganie instrukcji przewodnika) niż przestępczości. Jak przy każdej podróży międzynarodowej, w miastach i punktach tranzytowych obowiązują standardowe środki ostrożności. Renomowani organizatorzy informują każdego gościa o zasadach bezpieczeństwa na początku wyjazdu.',
      },
    ],
  },
  {
    slug: 'about-ewa',
    title: 'O EWA Safari Outfitters',
    description: 'Kim jesteśmy, jakie mamy referencje i co wyróżnia safari z EWA.',
    icon: 'Award',
    items: [
      {
        q: 'Czym jest EWA Safari Outfitters?',
        a: 'EWA Safari Outfitters to lokalny organizator safari z siedzibą w Arusha, prowadzący indywidualne safari w Tanzanii, Kenii i Rwandzie od 2022 roku — ten sam zespół, który stoi za podróżami typu extreme wilderness adventure po Serengeti, Ngorongoro i innych regionach. „EWA” to skrót od Extreme Wilderness Adventure, pierwotnej nazwy firmy, a każdy wyjazd wciąż jest budowany wokół tej samej filozofii: prawdziwe, prywatne safari prowadzone przez przewodnika, a nie zapakowane wycieczki grupowe.',
        relatedLinks: [{ label: 'O EWA Safari Outfitters', href: '/about' }],
      },
      {
        q: 'Czy EWA Safari Outfitters było wcześniej znane jako Extreme Wilderness Adventure?',
        a: 'Tak — EWA Safari Outfitters zostało pierwotnie założone i działało jako Extreme Wilderness Adventure, dlatego domena strony internetowej (theextremewilderness.com) oraz nazwa użytkownika na Instagramie (@extremewildernessadventure) wciąż noszą tę nazwę. Zmiana marki na „EWA Safari Outfitters” odzwierciedla ten sam lokalny zespół, przewodników i działalność z siedzibą w Arusha — to odświeżenie nazwy, a nie zmiana właściciela czy inna firma.',
        relatedLinks: [{ label: 'O EWA Safari Outfitters', href: '/about' }],
      },
      {
        q: 'Czy EWA Safari Outfitters ma certyfikat TATO i jest licencjonowanym organizatorem turystycznym w Tanzanii?',
        a: 'Tak — EWA Safari Outfitters posiada certyfikat TATO (jest członkiem Tanzania Association of Tour Operators), organizacji branżowej, która weryfikuje legalnych, licencjonowanych organizatorów w Tanzanii. Rezerwacja u organizatora certyfikowanego przez TATO to jeden z najprostszych sposobów, by potwierdzić, że firma oferująca safari w Tanzanii jest właściwie licencjonowana, a nie niezarejestrowanym pośrednikiem odsprzedającym wyjazdy innych organizatorów.',
      },
      {
        q: 'Co członkostwo w TATO właściwie oznacza dla mojej rezerwacji?',
        a: 'TATO reprezentuje i weryfikuje organizatorów turystycznych w Tanzanii od 1983 roku, więc członkostwo oznacza, że EWA Safari Outfitters jest uznawane przez tę samą organizację branżową, z którą współpracują zarówno rząd, jak i międzynarodowy sektor turystyczny — a nie tylko firmą, która sama nazywa się licencjonowaną. W praktyce oznacza to, że za rezerwacją stoi prawdziwa organizacja branżowa, gdyby cokolwiek trzeba było rozwiązać poza naszą własną obsługą klienta, i dlatego członkostwo w TATO to jedna ze standardowych kontroli, jakie przeprowadzają ostrożni podróżni przed zarezerwowaniem jakiegokolwiek safari w Tanzanii. EWA figuruje konkretnie w sześciu kategoriach TATO — Tour Operators, Mainland Tour Operators, DMC/Tour Operators, Mountain Trekking Operators, Zanzibar & Beach Holiday Operators oraz Cultural Experience Operators — obejmujących zarówno nasze plany podróży safari, wejścia na Kilimandżaro, przedłużenia pobytu na wyspie Zanzibar, jak i wycieczki kulturowe.',
      },
      {
        q: 'Jak mogę samodzielnie zweryfikować członkostwo EWA Safari Outfitters w TATO?',
        a: 'Bezpośrednio na oficjalnej stronie internetowej TATO — nasz wpis jest publiczny, nie kontrolujemy go ani nie moglibyśmy go zniekształcić. To szybki, niezależny sposób, by potwierdzić, że jesteśmy prawdziwym, licencjonowanym organizatorem, zanim zarezerwujesz wyjazd, zamiast polegać na słowie jakiegokolwiek organizatora.',
        relatedLinks: [{ label: 'Zobacz nasz wpis w TATO', href: 'https://tatotz.org/portfolio/ewa-safari-outfitters/' }],
      },
      {
        q: 'Jak długo EWA Safari Outfitters organizuje safari?',
        a: 'EWA Safari Outfitters organizuje safari od 2022 roku (ponad 5 lat działalności pod nazwą Extreme Wilderness Adventure przed zmianą marki i w jej trakcie), z ponad 200 podróżnymi oprowadzonymi po Tanzanii, Kenii i Rwandzie, oceną 4,9 na TripAdvisor oraz gośćmi z ponad 40 krajów — na tyle doświadczeni, by dobrze znać te trasy, wciąż na tyle mali, by każdy wyjazd był planowany indywidualnie, a nie wpasowywany w stały plan grupowy.',
      },
      {
        q: 'Co wyróżnia EWA Safari Outfitters na tle innych firm oferujących safari w Tanzanii?',
        a: 'Każde safari z EWA korzysta z prywatnego pojazdu i przewodnika — nigdy z dzielonej ciężarówki z innymi podróżnymi, których nie wybrałeś — a firma jest w 100% lokalną własnością z siedzibą w Arusha, a nie zagraniczną agencją odsprzedającą wyjazdy innych organizatorów. Goście zgłaszają 100-procentowy wskaźnik obserwacji Big Five, a lokalna wiedza zespołu na miejscu (które drogi są otwarte, dokładnie gdzie w danym tygodniu znajduje się migracja) wynika z faktycznej obecności w miejscu, gdzie odbywają się safari, a nie z call center za granicą.',
        relatedLinks: [{ label: 'Co nas wyróżnia', href: '/about#why-us' }],
      },
      {
        q: 'Kto będzie moim przewodnikiem safari w EWA Safari Outfitters?',
        a: 'Zespół przewodników EWA obejmuje doświadczonych przewodników safari z siedzibą w Tanzanii — między innymi Mike’a Mawolle, Nixona Massawe i Josha Meelę — z których każdy od lat prowadzi te same trasy na północnej i południowej trasie safari, czyli dokładnie taką lokalną, szczegółową wiedzę drogową, która stanowi różnicę między dobrym a świetnym game drive. Przewodnicy są przydzielani na dany wyjazd, a nie dzieleni między wiele pojazdów jednocześnie.',
        relatedLinks: [{ label: 'Poznaj nasz zespół', href: '/about#guides' }],
      },
      {
        q: 'Czy EWA Safari Outfitters jest lokalną firmą, czy zagraniczną agencją odsprzedającą wycieczki?',
        a: 'EWA Safari Outfitters jest w 100% lokalną własnością z siedzibą w Arusha, Tanzania — a nie zagraniczną agencją ani platformą rezerwacyjną odsprzedającą wyjazdy innych organizatorów z narzutem. Rezerwacja bezpośrednio u lokalnego organizatora zwykle bywa też bardziej opłacalna, ponieważ eliminuje dodatkową warstwę marży międzynarodowej agencji.',
      },
      {
        q: 'Gdzie znajduje się siedziba EWA Safari Outfitters i czy mogę odwiedzić biuro?',
        a: 'EWA Safari Outfitters ma siedzibę pod adresem 20 Ingira Street, Arusha, Tanzania — w tym samym mieście, z którego zaczyna się większość safari na północnej trasie safari i wejść na Kilimandżaro. Odwiedzający są mile widziani w biurze przed lub po wyjeździe; skontaktuj się wcześniej pod adresem info@theextremewilderness.com lub pod numerem +255 (0) 747 999 070, aby umówić wizytę.',
        relatedLinks: [{ label: 'Odwiedź nasze biuro', href: '/about' }, { label: 'Skontaktuj się z nami', href: '/contact' }],
      },
      {
        q: 'Jak szybko EWA Safari Outfitters odpowiada na zapytania?',
        a: 'EWA Safari Outfitters zazwyczaj odpowiada na zapytania dotyczące safari w ciągu kilku godzin w godzinach pracy w Afryce Wschodniej, a zwykle tego samego dnia poza nimi. Najszybszym sposobem na uzyskanie prawdziwej, indywidualnie dopasowanej wyceny (a nie ogólnego cennika) jest formularz zapytania na dowolnej stronie safari, kierunku podróży lub FAQ na tej stronie internetowej, który trafia bezpośrednio do zespołu w Arusha.',
        relatedLinks: [{ label: 'Skontaktuj się z nami', href: '/contact' }],
      },
      {
        q: 'Czy EWA Safari Outfitters działa wyłącznie w Tanzanii, czy także w Kenii i Rwandzie?',
        a: 'EWA Safari Outfitters ma siedzibę i głębokie korzenie w Tanzanii, ale organizuje i łączy również wyjazdy do Kenii (Masai Mara i nie tylko) oraz Rwandy (trekking do goryli w Parku Narodowym Volcanoes) — wielu gości łączy dwa lub trzy kraje w jednym, indywidualnie zaplanowanym wyjeździe, zamiast rezerwować każdy osobno.',
        relatedLinks: [{ label: 'Safari w Kenii', href: '/kenya' }, { label: 'Safari w Rwandzie', href: '/rwanda' }],
      },
    ],
  },
]

export const FAQ_CATEGORY_SLUGS = faqCategories.map((c) => c.slug)
