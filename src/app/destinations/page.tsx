import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin, Clock, Star, CheckCircle2, Binoculars, Users, Car, Headphones, Shield, Compass, Trophy } from 'lucide-react'
import BookNowButton from '@/components/booking/BookNowButton'

export const metadata: Metadata = {
  title: 'Tanzania Safari Destinations | Serengeti, Ngorongoro & More',
  description:
    "Explore Tanzania's finest safari destinations across three circuits. Serengeti's Great Migration, Ngorongoro Crater's Big Five, Tarangire's elephant herds, southern wilderness, and western chimpanzee parks. Expert-guided from Arusha.",
  keywords: [
    'Tanzania safari destinations',
    'Serengeti National Park',
    'Ngorongoro Crater',
    'Tarangire National Park',
    'Ruaha National Park',
    'Nyerere National Park',
    'Zanzibar island',
    'Tanzania circuits',
    'northern circuit Tanzania',
    'southern circuit Tanzania',
  ],
}

const circuits = [
  {
    id: 'northern',
    label: 'Northern Circuit',
    tagline: 'The Classic Safari — Most Wildlife, Most Icons',
    icon: '🦁',
    color: 'bg-amber-50 border-amber-200',
    labelColor: 'text-amber-800',
    destinations: [
      {
        id: 'serengeti',
        name: 'Serengeti National Park',
        tagline: 'The Greatest Wildlife Show on Earth',
        size: '14,763 km²',
        image: '/images/gallery/safari-118.webp',
        badge: 'Must-Visit',
        badgeColor: 'bg-gold text-brand',
        highlights: [
          'Great Migration — 1.5 million wildebeest',
          'Highest big cat density in Africa',
          'All Big Five in a single game drive',
          'Hot air balloon safaris at sunrise',
          '70 large mammal species · 500 bird species',
          'Endless golden plains — Maasai means "endless"',
        ],
        wildlife: ['Lion', 'Leopard', 'Cheetah', 'Elephant', 'Buffalo', 'Rhino', 'Wild Dog', 'Hippo', 'Crocodile'],
        bestTime: 'Jul – Oct & Jan – Feb',
        duration: '3–7 days',
        overview:
          "The Serengeti is Tanzania's crown jewel and the world's most celebrated safari destination. Spanning 14,763 km² of endless golden savannah, it is home to the world's greatest wildlife spectacle — the annual Great Migration. Over 1.5 million wildebeest, 750,000 gazelle, and 250,000 zebra move in a perpetual clockwise circuit driven by rainfall and fresh grazing. The park's three main regions each offer different experiences: the southern Seronera Valley for year-round big cat action, the western corridor for dramatic Grumeti River crossings, and the northern Lobo area for the famous Mara River crossings from July to October. Approximately 8,000 wildebeest are born daily during the calving season in January and February.",
        priceFrom: '$280',
        slug: 'serengeti',
      },
      {
        id: 'ngorongoro',
        name: 'Ngorongoro Conservation Area',
        tagline: "The World's Largest Intact Volcanic Caldera",
        size: '8,292 km²',
        image: '/images/gallery/safari-135.webp',
        badge: 'UNESCO World Heritage',
        badgeColor: 'bg-brand text-white',
        highlights: [
          '25,000+ large mammals in one caldera',
          'Guaranteed Big Five in a single drive',
          'Endangered black rhino — densest population',
          'Flamingo-fringed soda lake on the crater floor',
          'Maasai communities co-existing with wildlife',
          'Olduvai Gorge — the Cradle of Mankind',
        ],
        wildlife: ['Lion', 'Black Rhino', 'Elephant', 'Buffalo', 'Leopard', 'Hippo', 'Flamingo', 'Wildebeest'],
        bestTime: 'Jun – Oct & Jan – Mar',
        duration: '1–2 days',
        overview:
          "Ngorongoro Conservation Area is a UNESCO World Heritage Site and one of Africa's most extraordinary natural wonders. The 260 km² crater — the world's largest intact volcanic caldera — forms a natural enclosure for an astonishing concentration of wildlife. Over 25,000 large animals live within the crater walls, representing the highest wildlife density in Africa. The area encompasses far more than the famous crater: the vast Ngorongoro highlands, the ancient human heritage site of Olduvai Gorge, Olmoti and Empakai craters, and the active Oldoinyo Lengai volcano. Uniquely, the Maasai people live and graze their cattle within the conservation area alongside the wildlife — one of Africa's finest examples of human-wildlife coexistence.",
        priceFrom: '$240',
        slug: 'ngorongoro',
      },
      {
        id: 'tarangire',
        name: 'Tarangire National Park',
        tagline: "Tanzania's Elephant Capital",
        size: '2,850 km²',
        image: '/images/gallery/tarangire-1.webp',
        badge: 'Elephant Paradise',
        badgeColor: 'bg-brand text-white',
        highlights: [
          "Tanzania's highest elephant density",
          'Ancient baobab trees — some 1,000+ years old',
          "Poacher's Hide — legendary 300-year-old baobab",
          'Tarangire River — dry season wildlife magnet',
          '550+ bird species · rare oryx and eland',
          'Far fewer crowds than Serengeti',
        ],
        wildlife: ['Elephant', 'Lion', 'Leopard', 'Buffalo', 'Zebra', 'Oryx', 'Eland', 'Python', 'Wild Dog'],
        bestTime: 'Jun – Oct',
        duration: '2–3 days',
        overview:
          "Tarangire National Park is one of Tanzania's most rewarding safari destinations and a firm favourite among repeat visitors. Famous for its enormous elephant herds — numbering in the hundreds during the dry season — and the iconic ancient baobab trees that create an otherworldly landscape, Tarangire delivers an experience unlike any other park in East Africa. The Tarangire River is the only permanent water source in the region during the dry season, drawing massive concentrations of wildlife from across the ecosystem: elephant, zebra, wildebeest, oryx, and the rare fringe-eared oryx. Despite offering wildlife viewing comparable to the Serengeti, Tarangire receives a fraction of the visitors, making it one of Tanzania's best-value safari destinations.",
        priceFrom: '$200',
        slug: 'tarangire',
      },
      {
        id: 'manyara',
        name: 'Lake Manyara National Park',
        tagline: "Hemingway's Most Beautiful Place in Africa",
        size: '648 km²',
        image: '/images/gallery/safari-126.webp',
        badge: 'Scenic Wonder',
        badgeColor: 'bg-gold text-brand',
        highlights: [
          'Tree-climbing lions — a rare East Africa phenomenon',
          'Flamingo-fringed alkaline soda lake',
          'Dramatic Rift Valley escarpment backdrop',
          '400+ bird species · huge elephant herds',
          'Large baboon troops in mahogany forest',
          'Hemingway called it "the most beautiful lake in Africa"',
        ],
        wildlife: ['Lion', 'Elephant', 'Hippo', 'Buffalo', 'Flamingo', 'Pelican', 'Baboon', 'Blue Monkey', 'Zebra'],
        bestTime: 'Jun – Oct & Jan – Feb',
        duration: '1–2 days',
        overview:
          "Lake Manyara National Park is one of Tanzania's most visually stunning parks, set dramatically against the towering escarpment of the East African Rift Valley. Ernest Hemingway famously described it as the most beautiful lake in Africa. The alkaline soda lake — which covers two-thirds of the park — turns a spectacular flamingo-pink during the dry season. Manyara is most famous for its tree-climbing lions, a rare phenomenon found in only a handful of places in East Africa. The forest along the escarpment base is exceptional for primates, while the groundwater forest and open floodplains support one of the most diverse ecosystems in the northern circuit.",
        priceFrom: '$180',
        slug: 'manyara',
      },
    ],
  },
  {
    id: 'western',
    label: 'Western Circuit',
    tagline: 'Chimpanzees, Remote Wilderness & Lake Tanganyika',
    icon: '🐒',
    color: 'bg-green-50 border-green-200',
    labelColor: 'text-brand',
    destinations: [
      {
        id: 'katavi',
        name: 'Katavi National Park',
        tagline: "Tanzania's Last True Wilderness",
        size: '4,471 km²',
        image: '/images/gallery/safari-130.webp',
        badge: 'Raw Wilderness',
        badgeColor: 'bg-brand-secondary text-white',
        highlights: [
          'World record buffalo herds — up to 1,000 individuals',
          'Thousands of hippos crowding dry-season pools',
          'Barely 1,000 visitors per year vs 250,000 in Serengeti',
          'Huge lion prides specialising in buffalo',
          'No other vehicles — true wilderness solitude',
          'Remote fly-in access adds to exclusivity',
        ],
        wildlife: ['Hippo', 'Crocodile', 'Lion', 'Buffalo', 'Elephant', 'Puku', 'Roan Antelope', 'Wild Dog'],
        bestTime: 'Jul – Oct',
        duration: '3–4 days',
        overview:
          "Katavi National Park is Tanzania's most remote and least-visited national park — a raw, unfiltered wilderness where you might spend an entire day on game drive without encountering another vehicle. During the dry season, the shrinking pools of the Katuma River host thousands of hippos in extraordinary congregation, creating scenes of primordial drama rarely witnessed anywhere else. Massive buffalo herds — among the largest in the world — attract equally impressive lion prides specialising in taking down these formidable prey. Katavi sees roughly 1,000 visitors per year compared to the Serengeti's 250,000: for travellers seeking absolute solitude and a genuine off-grid Africa experience, it has no equal.",
        priceFrom: '$350',
        slug: 'katavi',
      },
      {
        id: 'gombe',
        name: 'Gombe Stream National Park',
        tagline: "Jane Goodall's Chimpanzee Kingdom",
        size: '35 km²',
        image: '/images/gallery/gombe-stream.webp',
        badge: 'Conservation Icon',
        badgeColor: 'bg-gold text-brand',
        highlights: [
          "Dr Jane Goodall's legendary 1960 research site",
          'Chimpanzees share 98% of human DNA',
          "Tanzania's smallest national park",
          'Lake Tanganyika — world\'s second deepest lake',
          'Snorkelling & swimming in crystal fresh water',
          'Red colobus, blue monkey & olive baboon',
        ],
        wildlife: ['Chimpanzee', 'Red Colobus', 'Blue Monkey', 'Olive Baboon', 'Leopard', 'Hippo', 'Crocodile'],
        bestTime: 'Aug – Nov',
        duration: '2–3 days',
        overview:
          "Gombe Stream National Park holds a unique place in the history of science and conservation. It was here in 1960 that Dr Jane Goodall began her revolutionary research into chimpanzee behaviour — research that overturned the prevailing understanding of the boundary between humans and other animals. The wild chimpanzees of Gombe have been studied continuously for over 60 years and are the most closely observed in the world. Tanzania's smallest national park at just 35 km², Gombe sits on the steep forested shores of Lake Tanganyika — the world's second deepest lake. After chimpanzee trekking, the crystal-clear lake offers rare swimming and snorkelling in freshwater, making Gombe a truly unique multi-experience destination.",
        priceFrom: '$300',
        slug: 'gombe',
      },
      {
        id: 'lake-victoria',
        name: 'Lake Victoria',
        tagline: "Africa's Largest Lake — Off the Beaten Path",
        size: '68,800 km²',
        image: '/images/gallery/safari-123.webp',
        badge: 'Hidden Gem',
        badgeColor: 'bg-brand text-white',
        highlights: [
          "World's third-largest lake by surface area",
          'Rubondo Island National Park on the lake',
          "Sukuma Museum — Tanzania's largest ethnic group",
          'Mwanza — vibrant lakeside rock city',
          'Island hopping on Ukerewe & Ukara',
          'Spectacular sunset cruises over open water',
        ],
        wildlife: ['Nile Perch', 'Hippo', 'Crocodile', 'Pelican', 'Crowned Crane', 'African Fish Eagle', 'Otter'],
        bestTime: 'Jun – Oct',
        duration: '2–4 days',
        overview:
          "Lake Victoria is Africa's largest lake and the world's third largest by surface area, straddling Tanzania, Kenya, and Uganda. The Tanzanian shores around Mwanza offer a fascinating off-the-beaten-path experience that most safari travellers overlook. The city of Mwanza is built around extraordinary granite kopjes that tumble into the lake, while the Sukuma Museum provides deep insight into the culture of Tanzania's largest ethnic group. Rubondo Island National Park — one of few island national parks in the world — offers chimpanzees, sitatunga, and African fish eagles in an untouched ecosystem. The lake delivers spectacular sunsets, island-hopping adventures, and a window into the authentic pulse of lakeside Tanzanian life.",
        priceFrom: '$180',
        slug: 'lake-victoria',
      },
    ],
  },
  {
    id: 'southern',
    label: 'Southern Circuit',
    tagline: 'Remote, Wild, Uncrowded — Africa Undisturbed',
    icon: '🐆',
    color: 'bg-sky-50 border-sky-200',
    labelColor: 'text-sky-800',
    destinations: [
      {
        id: 'ruaha',
        name: 'Ruaha National Park',
        tagline: "Tanzania's Largest Park — Wild and Remote",
        size: '20,226 km²',
        image: '/images/gallery/safari-128.webp',
        badge: 'Big Cat Country',
        badgeColor: 'bg-brand text-white',
        highlights: [
          "10% of the world's lion population",
          'African wild dog — endangered & iconic',
          'Large elephant herds with enormous tuskers',
          'Rare roan and sable antelope',
          '570 bird species including Ruaha red-billed hornbill',
          'Walking safaris in genuine wilderness',
        ],
        wildlife: ['Lion', 'Leopard', 'Cheetah', 'Wild Dog', 'Elephant', 'Buffalo', 'Roan Antelope', 'Sable Antelope'],
        bestTime: 'May – Nov',
        duration: '3–5 days',
        overview:
          "Ruaha National Park is Tanzania's largest national park and one of Africa's finest — and most underrated — safari destinations. Remote, wild, and refreshingly uncrowded, it protects around 10% of the world's lion population, making it arguably the continent's top destination for lion encounters. Large herds of elephant with some of the largest tuskers remaining in East Africa are a daily sight, while the endangered African wild dog is seen more reliably here than almost anywhere else. The Great Ruaha River — the lifeblood of the park — attracts dense concentrations of wildlife and offers outstanding game viewing along its banks. Walking safaris here are genuinely thrilling, conducted with armed rangers in areas where lions and elephants are regularly encountered.",
        priceFrom: '$260',
        slug: 'ruaha',
      },
      {
        id: 'nyerere',
        name: 'Nyerere National Park',
        tagline: "Africa's Largest Protected Area",
        size: '54,600 km²',
        image: '/images/gallery/selous.webp',
        badge: 'UNESCO Heritage',
        badgeColor: 'bg-gold text-brand',
        highlights: [
          "Africa's largest game reserve — 54,600 km²",
          'UNESCO World Heritage Site',
          "World's highest hippo population",
          'Boat safaris on the Rufiji River at sunset',
          "Africa's largest wild dog population",
          'Walking safaris & fly-camping in the wilderness',
        ],
        wildlife: ['Wild Dog', 'Lion', 'Leopard', 'Elephant', 'Hippo', 'Crocodile', 'Buffalo', 'Sable Antelope'],
        bestTime: 'Jun – Oct',
        duration: '3–5 days',
        overview:
          "Nyerere National Park — formerly known as Selous Game Reserve — is one of the most extraordinary protected areas on Earth. At 54,600 km², it is the largest game reserve in Africa and a UNESCO World Heritage Site of exceptional biodiversity. The park's permanent river system — the Rufiji and its tributaries — supports the world's highest density of hippos and large crocodiles, and the famous boat safaris at sunset are unlike any game drive experience. Nyerere holds Africa's largest population of endangered African wild dogs, reliably seen in this vast ecosystem. Beyond the standard game drive, Nyerere excels in activities: walking safaris in genuine wilderness, fly-camping under the stars, and the unparalleled experience of a Rufiji River boat safari at golden hour.",
        priceFrom: '$240',
        slug: 'nyerere',
      },
    ],
  },
]

const extras = [
  {
    id: 'zanzibar',
    name: 'Zanzibar Island',
    tagline: 'Spice Island Paradise — Indian Ocean',
    image: '/images/gallery/zanzibar-1.webp',
    desc: "The perfect ending to any Tanzania safari. Powder-white beaches, Stone Town UNESCO heritage, spice tours, coral reefs, and Swahili culture on the Indian Ocean. Nungwi, Kendwa & Paje are among East Africa's finest beaches.",
    badge: 'Beach & Culture',
    slug: 'zanzibar',
    priceFrom: '$160',
  },
  {
    id: 'arusha',
    name: 'Arusha & Mount Kilimanjaro',
    tagline: "Tanzania's Safari Capital",
    image: '/images/gallery/kilimanjaro%20(4).webp',
    desc: "All Tanzania safaris begin and end in Arusha. The city sits between Mount Meru (4,562 m) and within sight of Kilimanjaro (5,895 m). Arusha National Park, cultural Maasai boma visits, and Kilimanjaro treks all depart from here.",
    badge: 'Gateway City',
    slug: 'arusha',
    priceFrom: '$80',
  },
]

const tanzaniaStats = [
  { icon: '🦁', stat: '26', label: 'National Parks & Reserves' },
  { icon: '🌍', stat: '28%', label: 'Land Under Conservation' },
  { icon: '🐦', stat: '1,100+', label: 'Bird Species' },
  { icon: '🦒', stat: '70+', label: 'Large Mammal Species' },
  { icon: '🏔️', stat: '5,895 m', label: "Kilimanjaro's Summit" },
  { icon: '🏆', stat: '#1', label: 'Safari Destination — Africa' },
]

const seasons = [
  {
    months: 'Jun – Oct',
    label: 'Long Dry Season',
    color: 'bg-amber-50 border-amber-200',
    labelColor: 'text-amber-700',
    tip: 'Peak safari season. Best wildlife across all parks. Migration in Serengeti/Mara (Jul–Oct). Book 6–12 months ahead.',
  },
  {
    months: 'Nov – Dec',
    label: 'Short Rains',
    color: 'bg-sky-50 border-sky-200',
    labelColor: 'text-sky-700',
    tip: 'Short afternoon showers. Lush landscapes return. Good bird watching. Less crowded with better rates.',
  },
  {
    months: 'Jan – Feb',
    label: 'Short Dry Season',
    color: 'bg-green-50 border-green-200',
    labelColor: 'text-brand',
    tip: 'Excellent game viewing. Wildebeest calving (Jan–Feb) in southern Serengeti. Zanzibar at its best.',
  },
  {
    months: 'Mar – May',
    label: 'Long Rains',
    color: 'bg-blue-50 border-blue-200',
    labelColor: 'text-blue-700',
    tip: 'Heaviest rains. Some roads impassable. Very low visitor numbers and best lodge rates. Lush green scenery.',
  },
]

export default function DestinationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end pb-16 pt-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/gallery/safari-119.webp"
            alt="Lions at golden sunset on the Tanzania Serengeti plains"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/75" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <p className="text-gold-label font-semibold text-xs uppercase tracking-widest mb-4">Tanzania Safari Destinations</p>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Wild Tanzania.<br />
              <span className="text-gold">Three Epic Circuits.</span>
            </h1>
            <p className="text-white/80 text-lg mb-8 leading-relaxed max-w-xl">
              From the Serengeti&apos;s endless plains to the southern wilderness of Ruaha and the
              chimpanzee forests of the west &mdash; Tanzania offers three distinct safari circuits,
              each extraordinary.
            </p>
            <div className="flex flex-wrap gap-3">
              <BookNowButton
                packageName="Tanzania Safari"
                packageType="Tanzania Safari"
                label="Plan My Tanzania Safari"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors shadow-lg"
                arrow
              />
              <a
                href="#northern"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/40 text-white hover:bg-white/10 font-semibold rounded-xl transition-colors"
              >
                Explore Circuits <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-brand py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {tanzaniaStats.map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-1">
                <span className="text-gold font-bold text-xl">{item.stat}</span>
                <span className="text-white/60 text-xs leading-tight">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-gold-label font-semibold text-xs uppercase tracking-widest mb-3">
              Why Tanzania
            </span>
            <h2 className="text-3xl lg:text-4xl font-semibold text-brand mb-5">
              Africa&apos;s Ultimate Safari Nation
            </h2>
            <p className="text-text-muted leading-relaxed">
              Tanzania protects more land under conservation than almost any other country on Earth &mdash; 28%
              of its total land area. This extraordinary commitment produces an unrivalled density of wildlife
              across three distinct safari circuits, each offering a completely different experience. The Northern
              Circuit delivers the iconic Serengeti and Ngorongoro classics; the Southern Circuit rewards those
              seeking true wilderness solitude; and the Western Circuit opens the door to chimpanzees, hippo
              spectacles, and Africa&apos;s largest lake. At The Extreme Wilderness &mdash; born and based in
              Arusha &mdash; these are our home parks.
            </p>
          </div>
        </div>
      </section>

      {/* 2×2 Overview Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Box 1 — Three Circuits */}
            <div className="bg-brand rounded-3xl p-8 flex flex-col">
              <p className="text-gold-label text-xs font-bold uppercase tracking-widest mb-2">Navigate the Parks</p>
              <h3 className="text-2xl font-bold text-white mb-6">Tanzania&apos;s Three Safari Circuits</h3>
              <div className="space-y-4 flex-1">
                {[
                  { icon: '🦁', label: 'Northern Circuit', desc: 'Serengeti · Ngorongoro · Tarangire · Manyara', id: 'northern', color: 'bg-amber-400/20 border-amber-400/30' },
                  { icon: '🐒', label: 'Western Circuit', desc: 'Katavi · Gombe Stream · Lake Victoria', id: 'western', color: 'bg-green-400/20 border-green-400/30' },
                  { icon: '🐆', label: 'Southern Circuit', desc: 'Ruaha · Nyerere (Selous)', id: 'southern', color: 'bg-sky-400/20 border-sky-400/30' },
                ].map((c) => (
                  <a
                    key={c.id}
                    href={`#${c.id}`}
                    className={`flex items-center gap-4 rounded-2xl border px-5 py-4 hover:opacity-90 transition-opacity group ${c.color}`}
                  >
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-bold text-sm">{c.label}</p>
                      <p className="text-white/75 text-xs mt-0.5 truncate">{c.desc}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-white/60 group-hover:text-gold transition-colors flex-shrink-0" />
                  </a>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-white/10">
                <p className="text-white/70 text-xs">Also: <span className="text-white/70 font-medium">Zanzibar Beach</span> &amp; <span className="text-white/70 font-medium">Arusha Gateway</span></p>
              </div>
            </div>

            {/* Box 2 — Why Book With Us */}
            <div className="bg-amber-50 rounded-3xl p-8 border border-amber-100 flex flex-col">
              <p className="text-gold-label text-xs font-bold uppercase tracking-widest mb-2">Our Promise</p>
              <h3 className="text-2xl font-bold text-brand mb-6">Why Book With The Extreme Wilderness</h3>
              <div className="grid grid-cols-2 gap-4 flex-1">
                {[
                  { icon: Compass, title: 'Born in Arusha', desc: 'Our guides grew up next to these parks. Local knowledge, no middlemen.' },
                  { icon: Car, title: 'Private 4×4 Vehicles', desc: 'Every safari is in a dedicated, custom-fitted 4×4 — never shared.' },
                  { icon: Users, title: 'Small Groups Only', desc: 'Maximum 6 guests per vehicle. Closer wildlife, better photos.' },
                  { icon: Shield, title: 'Fully Insured & Licensed', desc: 'TATO-registered, fully bonded, and government licensed.' },
                  { icon: Headphones, title: '24/7 Support', desc: 'Your dedicated planner is reachable before, during, and after.' },
                  { icon: Trophy, title: '20+ Years Experience', desc: 'Hundreds of safaris led. Every park, every season, mastered.' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gold/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon className="w-4 h-4 text-brand" />
                    </div>
                    <div>
                      <p className="text-brand font-bold text-xs">{item.title}</p>
                      <p className="text-text-muted text-xs leading-snug mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Box 3 — Tanzania in Numbers */}
            <div className="bg-light-green rounded-3xl p-8 border border-brand/10 flex flex-col">
              <p className="text-gold-label text-xs font-bold uppercase tracking-widest mb-2">The Records</p>
              <h3 className="text-2xl font-bold text-brand mb-6">Tanzania in Numbers</h3>
              <div className="grid grid-cols-2 gap-5 flex-1">
                {[
                  { stat: '1.5M', label: 'Wildebeest in the Great Migration', sub: 'Largest land migration on Earth' },
                  { stat: '10%', label: "World's lion population", sub: 'Concentrated in Ruaha & Serengeti' },
                  { stat: '54,600', label: 'km² Nyerere NP', sub: "Africa's largest protected area" },
                  { stat: '25,000+', label: 'Animals in Ngorongoro Crater', sub: 'Highest density in Africa' },
                  { stat: '60 yrs', label: 'Of chimp research at Gombe', sub: "Jane Goodall's ongoing legacy" },
                  { stat: '1,100+', label: 'Bird species recorded', sub: 'Africa\'s premier birding nation' },
                ].map((item) => (
                  <div key={item.stat} className="bg-white rounded-2xl px-4 py-3 border border-brand/5">
                    <p className="text-gold-label font-bold text-xl leading-none">{item.stat}</p>
                    <p className="text-brand font-semibold text-xs mt-1 leading-snug">{item.label}</p>
                    <p className="text-text-muted text-[11px] mt-0.5 leading-snug">{item.sub}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Box 4 — How It Works */}
            <div className="bg-brand-dark rounded-3xl p-8 flex flex-col" style={{ backgroundColor: '#0a2e1a' }}>
              <p className="text-gold-label text-xs font-bold uppercase tracking-widest mb-2">The Process</p>
              <h3 className="text-2xl font-bold text-white mb-6">How to Book Your Safari</h3>
              <div className="space-y-5 flex-1">
                {[
                  {
                    step: '01',
                    title: 'Share Your Vision',
                    desc: 'Tell us your travel dates, group size, budget, and dream wildlife. No rigid packages — every trip starts from scratch.',
                  },
                  {
                    step: '02',
                    title: 'We Design Your Itinerary',
                    desc: 'Your dedicated Arusha-based planner crafts a tailor-made route. You review, adjust, and perfect it together.',
                  },
                  {
                    step: '03',
                    title: 'Confirm & Secure',
                    desc: 'Lock in your safari with a deposit. We handle all park fees, lodge bookings, transfers, and permits.',
                  },
                  {
                    step: '04',
                    title: 'Arrive & Experience',
                    desc: 'Your private guide meets you at Arusha airport. From here, Tanzania unfolds exactly as you imagined it.',
                  },
                ].map((s) => (
                  <div key={s.step} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                      <span className="text-brand font-bold text-xs">{s.step}</span>
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">{s.title}</p>
                      <p className="text-white/70 text-xs leading-snug mt-1">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-white/10">
                <BookNowButton
                  packageName="Tanzania Safari"
                  packageType="Tanzania Safari"
                  label="Start Planning — It&apos;s Free"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors text-sm"
                  arrow
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Three circuits */}
      {circuits.map((circuit) => (
        <section key={circuit.id} id={circuit.id} className="py-20 bg-light-green scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Circuit header badge */}
            <div className={`inline-flex items-center gap-3 rounded-2xl border px-5 py-3 mb-10 ${circuit.color}`}>
              <div>
                <p className={`text-xs font-bold uppercase tracking-widest ${circuit.labelColor}`}>{circuit.label}</p>
                <p className="text-brand/70 text-sm">{circuit.tagline}</p>
              </div>
            </div>

            <div className="space-y-10">
              {circuit.destinations.map((dest, i) => (
                <div
                  key={dest.id}
                  className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-0 bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow`}
                >
                  {/* Image panel */}
                  <div className="relative lg:w-[45%] flex-shrink-0 h-64 lg:h-auto min-h-[300px]">
                    <Image
                      src={dest.image}
                      alt={dest.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 45vw"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`inline-block text-xs font-bold px-3 py-1.5 rounded-full shadow ${dest.badgeColor}`}>
                        {dest.badge}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1.5">
                      <MapPin className="w-3 h-3 text-gold" />
                      <span className="text-white text-xs font-medium">{dest.size}</span>
                    </div>
                  </div>

                  {/* Content panel */}
                  <div className="flex-1 p-6 lg:p-8 flex flex-col">
                    <div className="mb-4">
                      <p className="text-gold-label text-xs font-semibold uppercase tracking-widest mb-1">{dest.tagline}</p>
                      <h3 className="text-xl lg:text-2xl font-bold text-brand mb-2">{dest.name}</h3>
                      <div className="flex flex-wrap gap-3 text-xs text-text-muted">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {dest.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-gold fill-gold" /> Best: {dest.bestTime}
                        </span>
                        <span className="flex items-center gap-1 font-semibold text-brand">
                          From {dest.priceFrom} / person
                        </span>
                      </div>
                    </div>

                    <p className="text-text-muted text-sm leading-relaxed mb-5 flex-1">{dest.overview}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mb-5">
                      {dest.highlights.map((h) => (
                        <div key={h} className="flex items-start gap-2 text-xs text-brand">
                          <CheckCircle2 className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mb-6">
                      <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">Wildlife</p>
                      <div className="flex flex-wrap gap-1.5">
                        {dest.wildlife.map((w) => (
                          <span
                            key={w}
                            className="text-xs bg-light-green text-brand px-2.5 py-1 rounded-full border border-brand/10 font-medium"
                          >
                            {w}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 pt-4 border-t border-gray-100 flex-wrap">
                      <BookNowButton
                        packageName={dest.name}
                        packageType="Tanzania Safari"
                        priceFrom={dest.priceFrom}
                        duration={dest.duration}
                        label="Book This Safari"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand hover:bg-brand-secondary text-white text-sm font-bold rounded-xl transition-colors"
                        arrow
                      />
                      <Link
                        href={`/destinations/${dest.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm text-brand font-semibold hover:text-gold transition-colors"
                      >
                        <Binoculars className="w-3.5 h-3.5" /> Full Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Zanzibar + Arusha extras */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-gold-label font-semibold text-xs uppercase tracking-widest mb-3">
              Complete Your Tanzania Experience
            </span>
            <h2 className="text-3xl font-semibold text-brand mb-3">Zanzibar &amp; Arusha</h2>
            <p className="text-text-muted max-w-lg mx-auto text-sm">
              Every great Tanzania safari begins in Arusha and often ends on the white sands of Zanzibar.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {extras.map((extra) => (
              <div
                key={extra.id}
                className="bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100 flex flex-col"
              >
                <div className="relative h-52">
                  <Image
                    src={extra.image}
                    alt={extra.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block text-xs font-bold px-3 py-1.5 rounded-full shadow bg-gold text-brand">
                      {extra.badge}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-gold-label text-xs font-semibold uppercase tracking-widest mb-1">{extra.tagline}</p>
                  <h3 className="text-xl font-bold text-brand mb-3">{extra.name}</h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-5 flex-1">{extra.desc}</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100 flex-wrap">
                    <BookNowButton
                      packageName={extra.name}
                      packageType="Tanzania Safari"
                      priceFrom={extra.priceFrom}
                      label="Enquire Now"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand hover:bg-brand-secondary text-white text-sm font-bold rounded-xl transition-colors"
                      arrow
                    />
                    <Link
                      href={`/destinations/${extra.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm text-brand font-semibold hover:text-gold transition-colors"
                    >
                      <Binoculars className="w-3.5 h-3.5" /> Full Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal guide */}
      <section className="py-20 bg-light-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-gold-label font-semibold text-xs uppercase tracking-widest mb-3">
              Plan Your Visit
            </span>
            <h2 className="text-3xl font-semibold text-brand mb-3">Best Time to Safari in Tanzania</h2>
            <p className="text-text-muted max-w-lg mx-auto text-sm">
              Tanzania is a year-round destination. Each season brings different advantages &mdash; from peak
              migration crossings to lush green landscapes and calving season drama.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {seasons.map((s) => (
              <div key={s.months} className={`rounded-2xl border p-5 ${s.color}`}>
                <p className="font-bold text-brand text-base mb-1">{s.months}</p>
                <p className={`text-xs font-semibold uppercase tracking-wide mb-3 ${s.labelColor}`}>{s.label}</p>
                <p className="text-xs text-text-muted leading-relaxed">{s.tip}</p>
              </div>
            ))}
          </div>

          {/* Migration callout */}
          <div className="bg-brand rounded-2xl p-6 lg:p-8 flex flex-col lg:flex-row items-start lg:items-center gap-6">
            <div className="flex-1">
              <h3 className="text-white font-bold text-lg mb-2">
                The Great Wildebeest Migration &mdash; Follow It Year-Round
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                The Migration never stops &mdash; it just moves. Calving in the Serengeti&apos;s south (Jan&ndash;Feb),
                north through the Seronera (Mar&ndash;Jun), Grumeti River crossings in the west (Jun&ndash;Jul),
                dramatic Mara River crossings in the north (Jul&ndash;Oct), then back south again. We design
                itineraries around wherever the herds are.
              </p>
            </div>
            <BookNowButton
              packageName="Great Migration Safari"
              packageType="Tanzania Migration Safari"
              label="Plan Migration Safari"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors whitespace-nowrap"
              arrow
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand rounded-3xl p-8 lg:p-14 text-center relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: "url('/images/gallery/safari-119.webp')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="relative z-10">
              <span className="inline-block text-gold-label font-semibold text-xs uppercase tracking-widest mb-3">
                Ready for Tanzania?
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Let&apos;s Plan Your Perfect Tanzania Safari
              </h2>
              <p className="text-white/70 max-w-xl mx-auto mb-8 leading-relaxed">
                Our team is born and based in Arusha &mdash; these are our home parks. We know every road,
                every season, every camp. Let us design an itinerary built around what you want to see.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <BookNowButton
                  packageName="Tanzania Safari"
                  packageType="Tanzania Safari"
                  label="Start Planning — It&apos;s Free"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors text-base shadow-lg"
                  arrow
                />
                <Link
                  href="/kenya"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/40 text-white hover:bg-white/10 font-semibold rounded-xl transition-colors text-base"
                >
                  Explore Kenya Too <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
