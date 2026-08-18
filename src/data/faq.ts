export interface FaqItem {
  q: string
  a: string
  relatedLinks?: { label: string; href: string }[]
}

export interface FaqCategory {
  slug: string
  title: string
  description: string
  icon: string
  items: FaqItem[]
}

// Category slugs are used as jump-nav anchors and must stay identical (and
// in this order) across every locale file — only title/description/items
// are localized. Category order and weighting are driven by real Search
// Console query volume (see the plan this was built from), not guesswork.
export const faqCategories: FaqCategory[] = [
  {
    slug: 'family-and-group-safaris',
    title: 'Family & Group Safaris',
    description: 'Safaris with kids, multigenerational trips, and small-group travel.',
    icon: 'Users',
    items: [
      {
        q: 'Is Tanzania safe for a family safari with kids?',
        a: "Yes — Tanzania is one of the most established family safari destinations in Africa. The main risk to manage is malaria, so most families travel with prophylaxis and choose camps in lower-risk highland areas when possible. Reputable operators use private vehicles (not shared game drives), keep daily drive times shorter for younger children, and select family-friendly lodges with connecting rooms or family tents rather than standard doubles. Many camps set a minimum age (commonly 6-8) for walking safaris or certain activities, but game drives themselves are open to all ages.",
        relatedLinks: [{ label: '10-Day Luxury Family Safari', href: '/safaris/10-days-luxury-family' }],
      },
      {
        q: 'What is the best safari itinerary for a family with young children?',
        a: 'The best family safari itineraries stay within Tanzania\'s Northern Circuit (Serengeti, Ngorongoro, Tarangire, Lake Manyara) to minimize long transfer days, use private 4x4 vehicles rather than shared trucks, and build in downtime at each camp — pool time, kid-focused nature walks, junior ranger programs — rather than back-to-back game drives. A private guide who can pace the day around a child\'s attention span makes a bigger difference than the specific parks chosen.',
        relatedLinks: [{ label: 'Destinations by Circuit', href: '/destinations/tanzania' }],
      },
      {
        q: 'How many days should a family safari be?',
        a: 'Most family safaris run 5-7 days — long enough to cover 2-3 parks without rushing, short enough to hold younger children\'s attention and manage jet lag. Families combining safari with a Zanzibar beach extension often add 3-4 more days at the coast, since young kids typically handle a beach stay better than back-to-back game drives.',
      },
      {
        q: 'Can grandparents or a multigenerational group travel together on safari?',
        a: 'Yes — multigenerational and small-group safaris are common, and camps generally accommodate a wide age range within the same itinerary. The main planning consideration is pacing: a trip built around a 70-year-old grandparent and a 6-year-old grandchild works best with shorter drive days, camps with easy-access rooms (fewer steps, ground-floor tents), and built-in rest days rather than a packed schedule designed for fitter solo travelers.',
        relatedLinks: [{ label: 'Seniors, Anniversary & Group Safaris', href: '/safaris/12-day-seniors-anniversary-groups-safari' }],
      },
      {
        q: "What's included in a family safari package price?",
        a: 'A well-built family safari package typically includes a private vehicle and guide for the whole trip, all park and conservation fees, accommodation, most or all meals, and internal transfers. What usually isn\'t included: international flights, visas, tips, and optional add-ons like hot air balloon rides. Ask specifically whether the quoted price is per person or per family, since family-room and connecting-tent pricing structures vary a lot between camps.',
      },
    ],
  },
  {
    slug: 'best-time-and-great-migration',
    title: 'Best Time to Visit & the Great Migration',
    description: 'Seasons, weather, and when to see the wildebeest migration.',
    icon: 'Calendar',
    items: [
      {
        q: 'When is the best time to see the wildebeest migration river crossings?',
        a: "It depends on which part of the migration you want to see. The dramatic Mara River crossings happen roughly July through October in the northern Serengeti, when over a million wildebeest push north toward Kenya. Calving season — arguably the most predator-action-packed stretch — happens January through March in the southern Serengeti (the Ndutu area). There's no single \"best month\" for the whole migration since it's a year-round, constantly moving event, not a fixed date.",
        relatedLinks: [{ label: 'Serengeti National Park', href: '/destinations/serengeti' }],
      },
      {
        q: 'When does the Great Migration happen in Tanzania?',
        a: 'The Great Migration is happening somewhere in the Serengeti ecosystem every month of the year — it\'s a continuous circuit, not a single event with a start and end date. Broadly: calving in the south January-March, movement north through the central Serengeti April-June, river crossings in the north July-October, and a return south starting around November. Where the herds are exactly in any given week shifts with rainfall, so exact timing varies year to year.',
      },
      {
        q: 'What is the best month to visit the Serengeti?',
        a: "There isn't one universally \"best\" month — it depends on what you want to see. For river crossings, aim for August or September. For calving season and the highest predator density, January to March. For fewer crowds and lush green scenery, the short rains in November are underrated. June and July offer a strong middle ground: good weather, migration herds moving through the central and western Serengeti, and thinner crowds than peak August.",
      },
      {
        q: 'Is Tanzania a year-round safari destination?',
        a: 'Yes. Tanzania has no true off-season for wildlife viewing — the dry seasons (June-October and January-February) concentrate animals around water sources for easier sightings, while the rainy seasons (March-May, November) bring lush landscapes, newborn animals, and significantly lower prices and crowds. The long rains (March-April) are the quietest stretch and the one time some remote camps close, but the main circuits stay open.',
      },
      {
        q: 'When is calving season in the Serengeti and why does it matter?',
        a: "Calving season runs roughly January through March in the short-grass plains of the southern Serengeti and Ndutu area, when up to 8,000 wildebeest calves can be born in a single day. It draws the migration's highest concentration of predators — lion, cheetah, and hyena — making it one of the best windows for predator action, even though there are no river crossings at this time of year.",
      },
    ],
  },
  {
    slug: 'planning-costs-and-comparisons',
    title: 'Planning, Costs & Kenya vs. Tanzania',
    description: 'What a safari costs, what\'s included, and how to choose between countries.',
    icon: 'DollarSign',
    items: [
      {
        q: 'How much does a Tanzania safari cost?',
        a: "Tanzania safari cost varies widely by season, group size, and camp style. As a rough guide, a well-run mid-range safari runs roughly $400-$600 per person per day, a luxury safari can run $700-$1,200+ per person per day, and budget camping safaris can come in under $300 per day. Per-person prices drop significantly with larger groups, since the private vehicle, guide, and park fees are shared. Exact pricing depends heavily on which season you travel — high season (June-October, January-February) commands premium rates.",
        relatedLinks: [{ label: 'Browse Safari Packages', href: '/safaris' }],
      },
      {
        q: 'Kenya or Tanzania — which is better for a safari?',
        a: "Neither is objectively \"better\" — they suit different priorities. Tanzania has more total parkland, the Ngorongoro Crater, Zanzibar as a beach add-on, and hosts the migration for most of the year. Kenya has the Masai Mara (part of the same migration ecosystem, best for river crossings July-October), generally shorter flight times from Europe, and a slightly more developed safari infrastructure in some areas. Many travelers combine both countries in a single trip rather than choosing one.",
        relatedLinks: [{ label: 'Tanzania Destinations', href: '/destinations/tanzania' }, { label: 'Kenya Safaris', href: '/kenya' }],
      },
      {
        q: 'How many days do I need for a Tanzania safari?',
        a: "7 days is the sweet spot for covering the Northern Circuit (Serengeti, Ngorongoro, Tarangire) properly without feeling rushed. 4-5 days works for a focused trip to 2 parks. 10-14 days allows combining the north with the southern or western circuit, or adding Zanzibar or a Kilimanjaro trek. Shorter than 4 days on safari tends to feel like a lot of driving for too little time in the parks themselves.",
      },
      {
        q: "What's included in a safari price, and what isn't?",
        a: "Most Tanzania safari packages include: a private vehicle and driver-guide, all park and conservation fees, accommodation, and most meals. Typically NOT included: international flights, Tanzania visa fees, travel insurance, gratuities for guides and camp staff, alcoholic drinks, and optional extras like hot air balloon rides or a Zanzibar beach extension. Always confirm exactly what's bundled before comparing quotes, since \"safari price\" means different things between operators.",
      },
      {
        q: 'Is it cheaper to book a safari directly with a local operator?',
        a: "Generally yes — booking directly with a locally-based, licensed operator in Tanzania cuts out the markup that international booking platforms and agencies add, often 15-30%. The trade-off is doing more of your own research to vet the operator's licensing, reviews, and vehicle/guide quality, since you lose the platform's vetting layer. A locally-owned operator based in Arusha typically also has better real-time knowledge of park conditions, road closures, and where the migration currently is.",
      },
    ],
  },
  {
    slug: 'tanzania-circuits-and-wildlife',
    title: 'Tanzania Circuits & Wildlife',
    description: 'The Big Five, Tanzania\'s safari circuits, and what to expect in each park.',
    icon: 'Binoculars',
    items: [
      {
        q: 'What are the Big Five and where can I see them in Tanzania?',
        a: "The Big Five — lion, leopard, elephant, buffalo, and rhino — are all findable in Tanzania, though rhino sightings are the rarest since black rhino numbers are low and concentrated almost entirely in the Ngorongoro Crater. Lion, elephant, and buffalo are reliable across the Serengeti, Ngorongoro, and Tarangire. Leopard is the hardest of the five to spot anywhere — most reliable in the Seronera area of the central Serengeti, where they favor riverine trees.",
        relatedLinks: [{ label: 'Serengeti National Park', href: '/destinations/serengeti' }, { label: 'Ngorongoro Crater', href: '/destinations/ngorongoro' }],
      },
      {
        q: "What's the difference between Ngorongoro Crater and the Serengeti?",
        a: "Ngorongoro is a single, compact, self-contained ecosystem — a collapsed volcanic caldera about 260 km² on the crater floor — where wildlife is unusually concentrated and typically seen in a single, very productive day. The Serengeti is vast (nearly 15,000 km²), open plains where the migration moves and sightings are spread over a much larger area across several days. Most itineraries do both: Ngorongoro for a dense, reliable day of Big Five sightings, then the Serengeti for the open-plains migration experience.",
        relatedLinks: [{ label: 'Ngorongoro Crater', href: '/destinations/ngorongoro' }],
      },
      {
        q: "What's the difference between Tanzania's Northern, Southern, and Western safari circuits?",
        a: 'The Northern Circuit (Serengeti, Ngorongoro, Tarangire, Lake Manyara) is Tanzania\'s classic, most-visited route — best infrastructure, the migration, reliable Big Five. The Southern Circuit (Ruaha, Nyerere/Selous) is remote, uncrowded, and wilder — larger, more spread-out parks with far fewer vehicles. The Western Circuit (Mahale, Katavi, Gombe) is chimpanzee-trekking territory, reached mostly by small aircraft, and the most off-the-beaten-path of the three.',
      },
      {
        q: 'Is the southern circuit (Ruaha, Nyerere/Selous) worth visiting?',
        a: "Yes, especially for repeat visitors or anyone wanting a quieter, more exclusive-feeling safari — Ruaha is Tanzania's largest national park and one of its best for lion and wild dog, and Nyerere (formerly Selous) is Africa's largest protected area, known for boat safaris alongside game drives. Both see a fraction of the Northern Circuit's visitor numbers. The trade-off is access — most southern circuit trips fly in rather than drive, adding cost.",
        relatedLinks: [{ label: 'Ruaha National Park', href: '/destinations/ruaha' }, { label: 'Nyerere (Selous) National Park', href: '/destinations/nyerere' }],
      },
      {
        q: 'What wildlife will I see in Tarangire National Park?',
        a: "Tarangire is best known for its elephant herds — some of the largest concentrations in Tanzania, especially in the dry season (June-October) when they gather along the Tarangire River — plus its distinctive ancient baobab trees. It's also strong for lion, and one of the better parks in the Northern Circuit for spotting the smaller, less commonly seen antelope species. It's typically visited as a 1-2 day add-on alongside Serengeti and Ngorongoro.",
        relatedLinks: [{ label: 'Tarangire National Park', href: '/destinations/tarangire' }],
      },
    ],
  },
  {
    slug: 'kenya-and-rwanda',
    title: 'Kenya & Rwanda Safaris',
    description: 'Combining countries, the Masai Mara, and gorilla trekking.',
    icon: 'Compass',
    items: [
      {
        q: 'Can I combine a Kenya and Tanzania safari in one trip?',
        a: "Yes, and it's a common way to see both the Serengeti and the Masai Mara — technically one continuous ecosystem split by an international border. The border crossing itself requires either a scheduled light-aircraft flight or a long overland drive plus separate park entry fees on each side, so most combined itineraries budget at least 10-12 days total to avoid feeling rushed.",
        relatedLinks: [{ label: '10-Day Kenya & Tanzania Safari', href: '/safaris/10-day-kenya-tanzania-safari' }],
      },
      {
        q: 'How much does gorilla trekking in Rwanda cost, and do I need a permit?',
        a: 'Yes, a permit is mandatory and limited in supply — Rwanda\'s Volcanoes National Park issues a fixed number of gorilla trekking permits per day, currently priced at $1,500 per person, which covers one hour with a habituated gorilla family plus park fees and a guide. Permits should be booked well in advance, especially for July-September and December-February, the driest and most popular trekking windows.',
        relatedLinks: [{ label: '4-Day Rwanda Gorilla Trekking', href: '/safaris/4-day-rwanda-gorilla-trekking' }, { label: 'Volcanoes National Park', href: '/destinations/volcanoes' }],
      },
      {
        q: 'What is the best time to see gorillas in Rwanda?',
        a: 'Gorilla trekking is possible year-round since permits aren\'t seasonal, but the dry seasons — June-September and December-February — make for easier, less muddy hiking through Volcanoes National Park\'s steep terrain. The wetter months (March-May, October-November) mean tougher trails but noticeably fewer tourists and sometimes lower-priced accommodation nearby.',
      },
      {
        q: 'Is the Masai Mara the same as the Serengeti?',
        a: 'They\'re part of the same continuous ecosystem — the Masai Mara is essentially the Kenyan, northern extension of the Serengeti — separated only by an international border the wildlife itself ignores. The Mara is smaller and gets the migration herds during the river-crossing season (roughly July-October); the Serengeti is far larger and hosts the migration for the rest of the year, including calving season.',
      },
      {
        q: 'How physically demanding is gorilla trekking?',
        a: "It varies a lot trek to trek — gorilla families are tracked, not fixed in one spot, so a hike can range from under an hour to 4-5 hours each way through steep, sometimes muddy volcanic forest at altitude (Volcanoes National Park sits at 2,400-4,500m). A reasonable fitness level is genuinely useful; porters are available to carry packs and provide a supporting hand on steeper sections for anyone concerned about the terrain.",
      },
    ],
  },
  {
    slug: 'kilimanjaro-and-trekking',
    title: 'Kilimanjaro & Trekking',
    description: 'Routes, cost, difficulty, and success rates for climbing Kilimanjaro.',
    icon: 'Mountain',
    items: [
      {
        q: 'What is the easiest route to climb Kilimanjaro?',
        a: "Machame is the most popular route and offers a strong balance of scenery and acclimatization, but the Lemosho route is generally considered the easiest in terms of summit success, mainly because its longer itinerary (7-8 days) gives your body more time to acclimatize. Marangu is the only route with hut accommodation instead of tents and has a gentler daily gradient, but its shorter standard itinerary means less acclimatization time, which can offset the easier walking.",
        relatedLinks: [{ label: 'Kilimanjaro Machame Route', href: '/trekking/machame' }, { label: 'All Kilimanjaro Routes', href: '/trekking' }],
      },
      {
        q: 'How much does it cost to climb Kilimanjaro?',
        a: "Kilimanjaro climbing costs typically range from $2,000-$2,500 per person for a budget-to-mid-range group climb, up to $3,500-$5,000+ for a private, longer, better-supported route with a higher guide-to-climber ratio. Park fees alone (set by Tanzania's national parks authority) make up a large fixed portion of any quote, so very cheap climbs usually mean cutting corners on crew wages, equipment, or acclimatization days — all of which affect both safety and summit success.",
        relatedLinks: [{ label: 'Kilimanjaro Machame Route', href: '/trekking/machame' }],
      },
      {
        q: "What is the success rate for reaching Kilimanjaro's summit?",
        a: 'Summit success rates vary enormously by route length: shorter 5-day routes see success rates as low as 40-50% due to insufficient acclimatization time, while well-paced 7-8 day routes like Lemosho report success rates of 85-90%+. The single biggest factor in reaching the summit isn\'t fitness — it\'s giving your body enough days to acclimatize to the altitude, which is why longer routes consistently outperform shorter ones.',
      },
      {
        q: 'How many days does it take to climb Kilimanjaro?',
        a: 'Most routes take 6-8 days round trip, though Marangu can be done in 5 and longer options like a full Lemosho or Northern Circuit route can run 8-9 days. Adding even one extra acclimatization day meaningfully improves both comfort and summit success, so most experienced operators recommend against the shortest available itinerary on any given route.',
      },
      {
        q: 'Do I need to be an experienced hiker to climb Kilimanjaro?',
        a: "No technical climbing experience or gear is required on any of the standard trekking routes — it's a long, high-altitude walk, not a technical climb. That said, a reasonable baseline fitness level (being able to comfortably walk 5-7 hours a day) makes a real difference to how much you enjoy it, and altitude affects fitness levels unpredictably, so even strong hikers should take acclimatization seriously.",
      },
    ],
  },
  {
    slug: 'honeymoon-zanzibar-and-experiences',
    title: 'Honeymoon, Zanzibar & Special Experiences',
    description: 'Honeymoon safaris, beach add-ons, hot air balloons, and photography trips.',
    icon: 'Heart',
    items: [
      {
        q: 'What is the best honeymoon safari itinerary combining safari and beach?',
        a: "The classic combination is 4-5 nights on safari in the Northern Circuit (Serengeti and Ngorongoro cover the highlights efficiently) followed by 4-5 nights in Zanzibar for the beach half of the trip — roughly 9-10 days total. Honeymoon-specific camps tend to offer private dining, adults-focused settings, and premium tented suites rather than family-configured rooms, so it's worth confirming a property is honeymoon-appropriate rather than just family-friendly.",
        relatedLinks: [{ label: '9-Day Honeymoon Safari & Zanzibar', href: '/safaris/9-day-honeymoon-safari-zanzibar' }, { label: 'Zanzibar', href: '/destinations/zanzibar' }],
      },
      {
        q: 'How much does a hot air balloon safari over the Serengeti cost?',
        a: 'A hot air balloon flight over the Serengeti typically costs $550-$700 per person for around an hour in the air at sunrise, usually followed by a champagne bush breakfast. It\'s priced as an optional add-on to a standard safari itinerary rather than included by default, and needs to be booked in advance since each balloon company only flies a limited number of people per morning.',
      },
      {
        q: 'Can I combine a Tanzania safari with a Zanzibar beach holiday?',
        a: "Yes — it's one of the most popular safari extensions, and logistically simple: Zanzibar is a short flight from Arusha or the main safari circuits, so most operators build it in as a seamless final leg. A common split is 5-7 days on safari followed by 3-5 days on the beach, though the ratio is entirely flexible depending on how much beach time versus wildlife time you want.",
        relatedLinks: [{ label: '10-Day Safari & Zanzibar', href: '/safaris/10-day-safari-zanzibar' }],
      },
      {
        q: 'Is a photography safari different from a regular safari?',
        a: "Yes — a dedicated photography safari uses vehicles modified for photographers (beanbag supports, extra window space, sometimes a photographer's-height roof hatch), keeps groups smaller, and paces the day around light — leaving camp before sunrise and staying out through golden hour rather than a fixed drive schedule. Guides on photography-focused trips are also typically briefed to prioritize positioning for shots over simply ticking off species.",
        relatedLinks: [{ label: '7-Day Photography Adventure Safari', href: '/safaris/7-day-photography-adventure-safari' }],
      },
      {
        q: 'What is a fly-in safari and is it worth the extra cost?',
        a: "A fly-in safari uses light aircraft to move between parks instead of long game-drive-vehicle transfers — a drive that might take 6-8 hours becomes a 45-60 minute flight. It's worth the added cost mainly for trips covering the southern or western circuits (Ruaha, Nyerere, Mahale), where road transfers are genuinely long and rough; for the Northern Circuit's closely-clustered parks, driving between them is often part of the experience rather than a downside.",
      },
    ],
  },
  {
    slug: 'culture-health-and-logistics',
    title: 'Culture, Health & Practical Logistics',
    description: 'The Maasai, vaccinations, visas, and what to pack.',
    icon: 'ShieldCheck',
    items: [
      {
        q: 'Who are the Maasai people?',
        a: "The Maasai are a semi-nomadic pastoralist people indigenous to northern Tanzania and southern Kenya, historically centered around cattle herding across the Serengeti and Rift Valley region — the same land many safari circuits pass through today. Many Maasai communities near the Northern Circuit welcome visitors for cultural village visits, offering a genuine, guide-arranged way to learn about their traditions, distinctive dress, and way of life, rather than viewing them only as a backdrop to the wildlife.",
      },
      {
        q: 'Who are the Hadzabe, and can I visit their community on safari?',
        a: "The Hadzabe are one of the last true hunter-gatherer communities on Earth, living around Lake Eyasi in northern Tanzania and still speaking a distinctive click language. Yes — a respectful, guide-led visit is possible and is a genuinely rising interest for travelers wanting culture alongside wildlife: a typical visit includes joining a morning hunt or foraging walk with the Hadzabe, followed by a stop with the neighboring Datoga, known for their traditional blacksmithing. These visits work best on community-led, ethical-protocol trips rather than informal drop-ins.",
        relatedLinks: [{ label: 'Tarangire, Ngorongoro & Hadzabe Experience', href: '/experiences/cultural-experience' }],
      },
      {
        q: 'Do I need vaccinations or malaria medication for a Tanzania safari?',
        a: "A yellow fever vaccination certificate is required if you're arriving from (or have transited through) a country with risk of yellow fever transmission — check current requirements against your specific routing. Malaria prophylaxis is strongly recommended for the safari regions (most of mainland Tanzania), though Zanzibar and higher-altitude areas like Arusha and the Ngorongoro rim carry lower risk. Routine vaccinations (tetanus, hepatitis A/B, typhoid) are commonly recommended by travel clinics but aren't Tanzania entry requirements. Always confirm current guidance with a travel health professional before departure.",
      },
      {
        q: 'What visa do I need to visit Tanzania?',
        a: "Most nationalities need a visa to enter Tanzania, available either as an e-visa applied for online in advance or, for many nationalities, on arrival at major airports. Processing the e-visa ahead of travel is generally faster and less stressful than arriving without one. Requirements and eligible nationalities change periodically, so confirm current rules directly with Tanzania's immigration authority or your embassy close to your travel dates rather than relying on older information.",
      },
      {
        q: 'What should I pack for a safari?',
        a: "Neutral-colored clothing (khaki, olive, brown — avoid bright colors and pure white or black, which can attract insects or stand out to wildlife), layers for early-morning cold game drives that warm up fast, a wide-brimmed hat, sunscreen, binoculars, and a dry bag or padded case for camera gear given dusty roads. Most camps offer laundry service, so packing for 4-5 days rather than the full trip length is usually enough even on longer safaris.",
      },
      {
        q: 'Is Tanzania safe for tourists?',
        a: 'Tanzania\'s safari regions are well-established, tourism-dependent areas with a strong safety record — the practical risks on a guided safari are more about sun exposure, road conditions, and wildlife-proximity common sense (staying in vehicles, following guide instructions) than crime. As with any international travel, standard precautions apply in cities and transit points. Reputable operators brief every guest on safety expectations at the start of the trip.',
      },
    ],
  },
  {
    slug: 'about-ewa',
    title: 'About EWA Safari Outfitters',
    description: "Who we are, our credentials, and what makes an EWA safari different.",
    icon: 'Award',
    items: [
      {
        q: 'What is EWA Safari Outfitters?',
        a: 'EWA Safari Outfitters is a locally-owned, Arusha-based safari operator running custom Tanzania, Kenya, and Rwanda safaris since 2022 — the same team behind extreme wilderness adventure travel across the Serengeti, Ngorongoro, and beyond. "EWA" stands for Extreme Wilderness Adventure, the company\'s original name, and every trip is still built around that same philosophy: real, private, guide-led safaris rather than packaged group tours.',
        relatedLinks: [{ label: 'About EWA Safari Outfitters', href: '/about' }],
      },
      {
        q: 'Was EWA Safari Outfitters previously known as Extreme Wilderness Adventure?',
        a: 'Yes — EWA Safari Outfitters was originally founded and operated as Extreme Wilderness Adventure, which is why the website domain (theextremewilderness.com) and Instagram handle (@extremewildernessadventure) still carry that name. The rebrand to "EWA Safari Outfitters" reflects the same locally-owned Arusha team, guides, and operations — it\'s a name refresh, not a change of ownership or a different company.',
        relatedLinks: [{ label: 'About EWA Safari Outfitters', href: '/about' }],
      },
      {
        q: 'Is EWA Safari Outfitters TATO certified and a licensed Tanzania tour operator?',
        a: "Yes — EWA Safari Outfitters is TATO Certified (a member of the Tanzania Association of Tour Operators), the industry body that vets legitimate, licensed operators in Tanzania. Booking with a TATO-certified operator is one of the simplest ways to confirm a Tanzania safari company is properly licensed rather than an unregistered agent reselling other operators' trips.",
      },
      {
        q: 'What does TATO membership actually mean for my booking?',
        a: "TATO has represented and vetted Tanzania's tour operators since 1983, so membership means EWA Safari Outfitters is recognised by the same industry body the government and international travel trade both work with — not just a company that calls itself licensed. Practically, that means a real industry association standing behind the booking if something ever needs to be resolved beyond our own customer service, and it's why TATO membership is one of the standard checks safety-conscious travelers run before booking a Tanzania safari at all. EWA is listed under six TATO categories specifically — Tour Operators, Mainland Tour Operators, DMC/Tour Operators, Mountain Trekking Operators, Zanzibar & Beach Holiday Operators, and Cultural Experience Operators — covering our safari itineraries, Kilimanjaro climbs, Zanzibar extensions, and cultural excursions alike.",
      },
      {
        q: "How can I verify EWA Safari Outfitters' TATO membership myself?",
        a: "Directly on TATO's own website — our listing is public, not something we control or could misrepresent. It's a quick, independent way to confirm we're a genuine, licensed operator before you book, rather than taking any operator's word for it.",
        relatedLinks: [{ label: 'View Our TATO Member Listing', href: 'https://tatotz.org/portfolio/ewa-safari-outfitters/' }],
      },
      {
        q: 'How long has EWA Safari Outfitters been running safaris?',
        a: "EWA Safari Outfitters has been running safaris since 2022 (5+ years operating under the Extreme Wilderness Adventure name before and through the rebrand), with 200+ travelers guided across Tanzania, Kenya, and Rwanda, a 4.9 TripAdvisor rating, and guests from 40+ countries — established enough to know these routes well, still small enough that every trip is planned individually rather than dropped into a fixed group itinerary.",
      },
      {
        q: 'What makes EWA Safari Outfitters different from other Tanzania safari companies?',
        a: "Every EWA safari uses a private vehicle and guide — never a shared truck with other travelers you didn't choose to travel with — and the company is 100% locally owned and Arusha-based rather than a foreign agency reselling other operators' trips. Guests report a 100% Big Five sighting rate, and the ground team's local knowledge (which roads are open, exactly where the migration is this week) comes from actually being based where the safaris happen, not from a call center abroad.",
        relatedLinks: [{ label: "What Makes Us Different", href: '/about#why-us' }],
      },
      {
        q: 'Who will be my safari guide with EWA Safari Outfitters?',
        a: "EWA's guiding team includes experienced, Tanzania-based safari guides — among them Mike Mawolle, Nixon Massawe, and Josh Meela — each with years of driving the same Northern and Southern Circuit routes, which is exactly the kind of local, road-by-road knowledge that makes the difference between a good game drive and a great one. Guides are assigned per trip, not shared across multiple vehicles at once.",
        relatedLinks: [{ label: 'Meet the Team', href: '/about#guides' }],
      },
      {
        q: 'Is EWA Safari Outfitters locally owned, or a foreign agency reselling tours?',
        a: "EWA Safari Outfitters is 100% locally owned and based in Arusha, Tanzania — not a foreign-owned agency or booking platform that resells other operators' trips at a markup. Booking directly with a locally-owned operator also tends to be more cost-effective, since it cuts out the extra layer of international agency margin.",
      },
      {
        q: 'Where is EWA Safari Outfitters based, and can I visit the office?',
        a: 'EWA Safari Outfitters is based at 20 Ingira Street, Arusha, Tanzania — the same city most Northern Circuit safaris and Kilimanjaro climbs begin from. Visitors are welcome to stop by the office before or after a trip; reach out in advance at info@theextremewilderness.com or +255 (0) 747 999 070 to arrange a visit.',
        relatedLinks: [{ label: 'Visit Our Office', href: '/about' }, { label: 'Contact Us', href: '/contact' }],
      },
      {
        q: 'How quickly does EWA Safari Outfitters respond to enquiries?',
        a: "EWA Safari Outfitters typically responds to safari enquiries within a couple of hours during East Africa business hours, usually the same day even outside them. The fastest way to get a real, tailored quote (not a generic price list) is through the enquiry form on any safari, destination, or FAQ page on this site, which reaches the Arusha team directly.",
        relatedLinks: [{ label: 'Contact Us', href: '/contact' }],
      },
      {
        q: 'Does EWA Safari Outfitters only operate in Tanzania, or also Kenya and Rwanda?',
        a: "EWA Safari Outfitters is Tanzania-based and Tanzania-rooted, but also operates and combines trips across Kenya (Masai Mara and beyond) and Rwanda (gorilla trekking in Volcanoes National Park) — many guests combine two or three countries in a single custom itinerary rather than booking each separately.",
        relatedLinks: [{ label: 'Kenya Safaris', href: '/kenya' }, { label: 'Rwanda Safaris', href: '/rwanda' }],
      },
    ],
  },
]

export const FAQ_CATEGORY_SLUGS = faqCategories.map((c) => c.slug)

// relatedLinks are href-keyed and structurally identical across every
// locale file (same target pages), so images are resolved once here rather
// than duplicated in all 7 locale files. Each image is the same heroImage
// already used on the linked page itself — reusing a page's own real,
// already-correct image rather than picking a new unverified one.
export const RELATED_LINK_IMAGES: Record<string, string> = {
  '/destinations/serengeti': '/images/gallery/serengeti-lions-under-acacia.jpg',
  '/destinations/ngorongoro': '/images/gallery/lion-atop-boulder.jpg',
  '/destinations/ruaha': '/images/gallery/ruaha-lions-affectionate.jpg',
  '/destinations/nyerere': '/images/gallery/selous.jpg',
  '/destinations/tarangire': '/images/gallery/tarangire-1.jpg',
  '/destinations/volcanoes': '/images/gallery/lion-pride-roadside-rest.jpg',
  '/destinations/zanzibar': '/images/gallery/beachfront-candlelit-dinner-zanzibar.jpg',
  '/destinations/tanzania': '/images/gallery/masai-mara-lion-pride-sunset.webp',
  '/kenya': '/images/gallery/masai-mara-lion-pride-sunset.webp',
  '/rwanda': '/images/gallery/gorilla.webp',
  '/safaris': '/images/gallery/village-life-safari-circuit.webp',
  '/about': '/images/gallery/ewa-guests-guide-forest.webp',
  '/about#why-us': '/images/gallery/ewa-vehicle-bamboo-forest.webp',
  '/about#guides': '/images/gallery/ewa-guests-guide-arusha.webp',
  '/contact': '/images/gallery/lion-pride-resting-grassland.webp',
  '/safaris/10-days-luxury-family': '/images/gallery/family1.jpg',
  '/safaris/12-day-seniors-anniversary-groups-safari': '/images/gallery/maasai-warriors-jumping-dance-boma.jpg',
  '/safaris/10-day-kenya-tanzania-safari': '/images/gallery/lion-resting-shade.webp',
  '/safaris/4-day-rwanda-gorilla-trekking': '/images/gallery/rwanda-mountain-gorilla.jpg',
  '/safaris/9-day-honeymoon-safari-zanzibar': '/images/gallery/zanzibar-nungwi-aerial.jpg',
  '/safaris/10-day-safari-zanzibar': '/images/gallery/zanzibar-nungwi-aerial.jpg',
  '/safaris/7-day-photography-adventure-safari': '/images/gallery/ndutu-wildebeest-watering-hole.webp',
  '/experiences/cultural-experience': '/images/gallery/maasai-warriors-jumping-dance-boma.webp',
  '/trekking/machame': '/images/gallery/kilimanjaro-hero.webp',
  '/trekking': '/images/gallery/kilimanjaro-hero.webp',
}
