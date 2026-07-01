export interface Experience {
  slug: string
  category: string
  title: string
  tagline: string
  description: string
  image: string
  durationLabel: string
  highlights: string[]
  priceFrom: string
  badge: string
  badgeColor: string
  landscape: boolean
}

export const experiences: Experience[] = [
  {
    slug: '/safaris',
    category: 'Wildlife Safari',
    title: 'Classic Game Drive Safari',
    tagline: "Witness the world's greatest wildlife spectacles",
    description:
      "Nothing compares to rising before dawn, the Serengeti stretching endless in every direction, and a pride of lions stirring in the morning gold. Our classic game-drive safaris take you deep into Tanzania's iconic parks — Serengeti, Ngorongoro Crater, Tarangire — in custom 4×4 vehicles with expert local guides who read the bush like a language.",
    image: '/images/gallery/safari-001.jpg',
    durationLabel: '5 – 14 days',
    highlights: ['Big Five in Ngorongoro Crater', 'Great Migration calving & crossing', 'Night drives in select parks', 'Expert Swahili-speaking guides'],
    priceFrom: '$2,450',
    badge: 'Most Popular',
    badgeColor: 'bg-gold text-brand',
    landscape: true,
  },
  {
    slug: '/destinations/serengeti',
    category: 'Migration Safari',
    title: 'The Great Migration',
    tagline: "Earth's greatest wildlife show — timed perfectly",
    description:
      'Over 1.5 million wildebeest and 200,000 zebra move in an eternal circle across the Serengeti-Mara ecosystem. We plan your journey around the exact season — calving in Ndutu (Jan–Mar), the dramatic river crossings in the Mara (Jul–Oct) — so you witness the moment, not just the aftermath.',
    image: '/images/gallery/Wildebeest-Migration.jpeg',
    durationLabel: '6 – 10 days',
    highlights: ['Mara River crossings at peak', 'Ndutu calving grounds', 'Private mobile camp options', 'Month-by-month migration guide'],
    priceFrom: '$3,200',
    badge: 'Seasonal',
    badgeColor: 'bg-brand-secondary text-white',
    landscape: true,
  },
  {
    slug: '/destinations/mahale',
    category: 'Primate Trekking',
    title: 'Chimpanzee Trekking — Mahale',
    tagline: 'Trek into the jungle, meet our closest relatives',
    description:
      'Deep in the forests above Lake Tanganyika, the Mahale chimps have been habituated to human presence for over 40 years. You approach on foot through dense jungle, guided by trackers following fresh prints and calls. When you find them — grooming, playing, building nests — time stops. There is nothing like it on Earth.',
    image: '/images/gallery/Jozani-forest.jpg',
    durationLabel: '3 – 5 days',
    highlights: ['Habituated Mahale chimp community', 'Lake Tanganyika snorkelling', 'Fly-in access from Arusha', 'Small exclusive camps'],
    priceFrom: '$4,100',
    badge: 'Remote & Exclusive',
    badgeColor: 'bg-brand text-white',
    landscape: false,
  },
  {
    slug: '/rwanda/volcanoes',
    category: 'Gorilla Trekking',
    title: 'Mountain Gorilla Experience — Rwanda',
    tagline: 'A face-to-face encounter that changes everything',
    description:
      'The Virunga Volcanoes rise steeply through bamboo and Hagenia forest. Somewhere in that mist, mountain gorillas — critically endangered, the closest thing to looking into a mirror — live their family lives. Each permit grants you one silent hour. Trackers lead the way. Our expert guides debrief you. It never leaves you.',
    image: '/images/gallery/gorilla.png',
    durationLabel: '2 – 4 days',
    highlights: ['Gorilla trekking permits arranged', 'Golden monkey tracking available', 'Volcanoes NP luxury lodges', 'Dian Fossey Research Centre visit'],
    priceFrom: '$2,800',
    badge: 'Life-changing',
    badgeColor: 'bg-gold text-brand',
    landscape: false,
  },
  {
    slug: '/trekking/kilimanjaro',
    category: 'Summit Trekking',
    title: 'Kilimanjaro — Roof of Africa',
    tagline: 'From equatorial jungle to arctic summit',
    description:
      'At 5,895 m, Kilimanjaro is the highest free-standing mountain on Earth — and the only place you can walk from rainforest through moorland, desert and glacial ice in five days. Our acclimatisation-first approach and hand-picked high-altitude guides give you the best chance of reaching Uhuru Peak, and the most memorable journey along the way.',
    image: '/images/gallery/safari-005.jpg',
    durationLabel: '6 – 9 days',
    highlights: ['Machame, Lemosho & Rongai routes', 'Private group & solo climbs', 'Porters, cook & summit crew', 'KINAPA certified guides'],
    priceFrom: '$1,850',
    badge: 'Year-round',
    badgeColor: 'bg-brand-secondary text-white',
    landscape: true,
  },
  {
    slug: '/destinations/zanzibar',
    category: 'Beach & Safari',
    title: 'Safari & Zanzibar Combo',
    tagline: 'Bush to beach — the ultimate East Africa escape',
    description:
      "End a safari high with turquoise Indian Ocean water and sugar-white sand. Zanzibar's Stone Town is a UNESCO labyrinth of history; Nungwi and Paje are world-class beaches. We seamlessly combine 4–6 days of Tanzania safari with 3–4 nights on the island. One holiday, two completely different worlds.",
    image: '/images/gallery/zanzibar-1.jpg',
    durationLabel: '7 – 12 days',
    highlights: ['Serengeti safari + Zanzibar beach', 'Stone Town spice tour', 'Snorkelling & diving at Mnemba Atoll', 'Boutique beach lodge options'],
    priceFrom: '$3,600',
    badge: 'Bestseller Combo',
    badgeColor: 'bg-gold text-brand',
    landscape: true,
  },
  {
    slug: '/safaris?type=photography',
    category: 'Photography Safari',
    title: 'Wildlife Photography Safari',
    tagline: 'Shoot with intention. Return with extraordinary images.',
    description:
      'These specialised itineraries are designed for photographers — longer at each sighting, early exits from camp, perfect light-chasing schedules at dawn and dusk. We position vehicles for clean backgrounds and unobstructed shots. Custom roof-hatch converted vehicles available. Suitable for enthusiast to professional.',
    image: '/images/gallery/safari-007.jpg',
    durationLabel: '7 – 12 days',
    highlights: ['Extended time at key sightings', 'Golden-hour focus scheduling', 'Dedicated wildlife photography guide', 'Rooftop hatch vehicles available'],
    priceFrom: '$3,900',
    badge: 'Specialist',
    badgeColor: 'bg-brand text-white',
    landscape: true,
  },
  {
    slug: '/destinations/nyerere',
    category: 'Walking Safari',
    title: 'Walking Safari — Nyerere',
    tagline: 'Put your feet on African soil. Feel everything change.',
    description:
      "Nyerere National Park (formerly Selous) — Africa's largest protected area — is one of the few places in Tanzania where walking safaris are permitted in genuine wilderness. Armed rangers lead you through acacia thickets, along hippo-filled rivers and across open floodplains. Every sense is heightened. The bush reveals itself differently on foot.",
    image: '/images/gallery/nyerere.jpg',
    durationLabel: '4 – 7 days',
    highlights: ['Guided walks with armed rangers', 'Boat safari on Rufiji River', 'Wild dogs & huge elephant herds', 'Remote fly-camp options'],
    priceFrom: '$2,900',
    badge: 'Wilderness',
    badgeColor: 'bg-brand-secondary text-white',
    landscape: false,
  },
  {
    slug: '/safaris?type=luxury',
    category: 'Luxury Safari',
    title: 'Exclusive Private Safari',
    tagline: 'Your itinerary. Your pace. No compromises.',
    description:
      'Private use of a luxury mobile camp or exclusive-use lodge. Your own vehicle, guide and tracker. Dining under the stars, sundowners on a kopje with the Serengeti horizon at your feet. Designed for couples, honeymooners and small families who want total immersion without sharing a sundowner with strangers.',
    image: '/images/gallery/honey.jpg',
    durationLabel: '5 – 14 days',
    highlights: ['Exclusive-use camps & lodges', 'Private vehicle & guide all day', 'Bespoke itinerary designed for you', 'Sommelier-curated meals in the bush'],
    priceFrom: '$5,500',
    badge: 'Premium',
    badgeColor: 'bg-gold text-brand',
    landscape: true,
  },
  {
    slug: '/safaris?type=family',
    category: 'Family Safari',
    title: 'Family Safari — Built for Kids',
    tagline: 'The adventure that becomes a family legend',
    description:
      "A child's first giraffe. A teenager's photo of a cheetah hunt. These moments shape lives. Our family safaris are paced for children, with junior ranger programmes, kid-friendly lodges with pools, shorter drives and age-appropriate guides who know how to keep young minds lit with wonder. Safe, seamless, unforgettable.",
    image: '/images/gallery/family1.jpg',
    durationLabel: '6 – 10 days',
    highlights: ['Junior ranger bush walks', 'Family lodges with pools', 'Shorter child-friendly drives', 'Cultural visits to Maasai villages'],
    priceFrom: '$2,600',
    badge: 'Family Favourite',
    badgeColor: 'bg-brand-secondary text-white',
    landscape: true,
  },
  {
    slug: '/destinations/ruaha',
    category: 'Off the Beaten Track',
    title: 'Ruaha & Katavi — True Wilderness',
    tagline: "Where the land hasn't changed in a thousand years",
    description:
      "Most visitors never leave the Northern Circuit. Ruaha and Katavi are Tanzania's best-kept secrets — enormous lion prides, huge herds of buffalo and elephant, wild dog territories, and not another vehicle in sight. Rugged, raw and completely unhurried. For those who want Africa as it was before crowds.",
    image: '/images/gallery/safari-013.jpg',
    durationLabel: '5 – 8 days',
    highlights: ["Tanzania's largest lion population", 'Wild dog denning (seasonal)', 'Hippo-crammed rivers at Katavi', 'Exclusive fly-in access only'],
    priceFrom: '$4,200',
    badge: 'Remote',
    badgeColor: 'bg-brand text-white',
    landscape: false,
  },
  {
    slug: '/safaris?type=hotairballoon',
    category: 'Aerial Safari',
    title: 'Hot Air Balloon Safari',
    tagline: 'Drift over the Serengeti at the first light of day',
    description:
      'Launch from a dawn-lit airstrip, rise silently over acacia and kopje as the Serengeti reveals itself from above — herds threading through grass, rivers glinting silver, a world that feels infinite. One hour of floating silence over Africa. Followed by a bush champagne breakfast served by white-gloved staff. Unmissable.',
    image: '/images/gallery/migr1.webp',
    durationLabel: 'Half-day add-on',
    highlights: ['Serengeti sunrise balloon flight', 'Bush champagne breakfast', 'Certificate of flight', 'Combine with any safari package'],
    priceFrom: '$550',
    badge: 'Add-on',
    badgeColor: 'bg-gold text-brand',
    landscape: true,
  },
]
