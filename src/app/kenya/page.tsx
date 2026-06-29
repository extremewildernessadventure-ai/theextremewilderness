import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin, Clock, Users, Star, Bird, CheckCircle2, Car, Headphones, Shield, Compass, Trophy } from 'lucide-react'
import BookNowButton from '@/components/booking/BookNowButton'

export const metadata: Metadata = {
  title: 'Kenya Safari Destinations | Masai Mara, Amboseli & More',
  description:
    "Discover Kenya's finest safari destinations — Masai Mara's Great Migration, Amboseli's elephant herds beneath Kilimanjaro, rare northern species in Samburu, and the pristine Kenyan Coast. Expert-guided packages from Arusha.",
  keywords: [
    'Kenya safari',
    'Masai Mara safari',
    'Amboseli National Park',
    'Samburu National Park',
    'Tsavo National Park',
    'Ol Pejeta Conservancy',
    'Lake Nakuru',
    'Kenyan Coast Diani',
    'Great Migration Kenya',
    'Kenya Tanzania safari',
  ],
}

// ── Destination data ──────────────────────────────────────────────────────────

const destinations = [
  {
    id: 'masai-mara',
    name: 'Masai Mara National Reserve',
    tagline: 'Cradle of the Great Migration',
    size: '1,510 km²',
    image: '/images/gallery/safari-119.jpg',
    badge: 'Most Popular',
    badgeColor: 'bg-gold text-brand',
    highlights: [
      'Great Migration crossings Jun–Oct',
      '1.5 million wildebeest & zebra',
      'Highest lion density in Africa',
      'Big Five guaranteed year-round',
      '90 mammal species · 500 bird species',
      'Balloon safaris at sunrise',
    ],
    wildlife: ['Lion', 'Leopard', 'Cheetah', 'Elephant', 'Rhino', 'Hippo', 'Crocodile', 'Wildebeest'],
    bestTime: 'Jul – Oct',
    bestTimeLabel: 'Migration Season',
    duration: '3–5 days',
    overview:
      "The Masai Mara is Kenya's crown jewel — a vast open savannah in the southwestern Rift Valley where the annual Great Migration plays out each year with breathtaking drama. Over 1.5 million wildebeest, 500,000 zebra, and 200,000 gazelle pour across the Mara River in one of nature's most spectacular events. The Mara delivers year-round: it supports the highest lion density in Africa, prolific cheetah populations, and consistent Big Five sightings. Resident Maasai communities add a profound cultural dimension to any visit.",
    activities: ['Game drives', 'Balloon safari', 'Cultural Maasai village', 'Bird watching', 'Bush walks', 'Night drives'],
    priceFrom: '$320',
  },
  {
    id: 'amboseli',
    name: 'Amboseli National Park',
    tagline: 'Giants Beneath the Snows of Kilimanjaro',
    size: '392 km²',
    image: '/images/gallery/kilimanjaro%20(3).png',
    badge: 'Iconic Views',
    badgeColor: 'bg-brand text-white',
    highlights: [
      'Kilimanjaro backdrop on clear mornings',
      'Largest-tusked elephants in Africa',
      'Seven distinct habitats in one park',
      '80 mammal species · 600 bird species',
      'World-renowned elephant research site',
      'Maasai cultural experiences',
    ],
    wildlife: ['African Elephant', 'Lion', 'Cheetah', 'Giraffe', 'Buffalo', 'Wildebeest', 'Zebra', 'Hippo'],
    bestTime: 'Jun – Oct & Jan – Feb',
    bestTimeLabel: 'Dry Season',
    duration: '2–4 days',
    overview:
      "Amboseli is Africa's quintessential elephant park, set at the foot of Mount Kilimanjaro. The iconic image of a massive tusker silhouetted against Kilimanjaro's snow-capped peak is one of the most photographed scenes on the continent. The park encompasses seven distinct habitats — from open plains and acacia woodland to swamps fed by underground streams from Kilimanjaro's glaciers — supporting 80 mammal species. Amboseli's elephant population is among the most studied in the world, and the large bulls here regularly carry the longest tusks of any elephant in Africa.",
    activities: ['Elephant tracking', 'Game drives', 'Maasai village visit', 'Bird watching', 'Photography safaris', 'Sundowner drives'],
    priceFrom: '$280',
  },
  {
    id: 'samburu',
    name: 'Samburu National Reserve',
    tagline: 'Home of the Samburu Special Five',
    size: '165 km²',
    image: '/images/gallery/safari-112.jpg',
    badge: 'Rare Species',
    badgeColor: 'bg-brand text-white',
    highlights: [
      'Samburu Special Five found only here',
      "Grevy's zebra — world's rarest zebra",
      'Reticulated giraffe & gerenuk',
      'Somali ostrich & Beisa oryx',
      '450+ bird species',
      'Authentic remote wilderness',
    ],
    wildlife: ["Grevy's Zebra", 'Reticulated Giraffe', 'Gerenuk', 'Somali Ostrich', 'Beisa Oryx', 'Lion', 'Leopard', 'Crocodile'],
    bestTime: 'Jun – Oct & Jan – Mar',
    bestTimeLabel: 'Dry Season',
    duration: '2–3 days',
    overview:
      "Samburu National Reserve in Kenya's arid north is one of the continent's most exclusive and rewarding wildlife destinations. The reserve is celebrated for the Samburu Special Five — five uniquely adapted species found only north of the equator: Grevy's zebra (the world's rarest wild equid), the reticulated giraffe with its distinctive geometric markings, the long-necked gerenuk, the Somali ostrich, and the Beisa oryx. Samburu is traversed by the Ewaso Ng'iro River — a lifeline supporting diverse wildlife and spectacular large crocodiles. The resident Samburu people, cousins of the Maasai, add a rich cultural tapestry to any visit.",
    activities: ['Specialized game drives', 'Samburu cultural tours', 'Camel rides', 'River walks', 'Bird watching', 'Sundowner bush dinner'],
    priceFrom: '$290',
  },
  {
    id: 'tsavo',
    name: 'Tsavo East & West National Parks',
    tagline: "Africa's Largest National Park Complex",
    size: '22,000 km²',
    image: '/images/gallery/safari-126.jpg',
    badge: 'Wild & Remote',
    badgeColor: 'bg-brand-secondary text-white',
    highlights: [
      '22,000 km² — Kenya’s largest park',
      'Red elephants dusted in volcanic soil',
      'Yatta Plateau — world’s longest lava flow',
      'Lugard Falls & Mzima Springs',
      'Big Five + African wild dogs',
      'Legendary mane-less Tsavo lions',
    ],
    wildlife: ['Red Elephant', 'Tsavo Lion', 'Leopard', 'Buffalo', 'Rhino', 'Wild Dog', 'Hippo', 'Crocodile'],
    bestTime: 'Jun – Oct & Jan – Feb',
    bestTimeLabel: 'Dry Season',
    duration: '3–5 days',
    overview:
      "Tsavo East and West together form the largest protected wilderness area in Kenya and one of the largest in the world at 22,000 km². The parks are famous for their red elephants — herds that roll in the iron-rich volcanic dust of Tsavo East until their skin takes on the earth's deep red hue — and for the legendary mane-less lions of Tsavo. Tsavo West is dominated by dramatic volcanic landscapes: the crystalline Mzima Springs (fed by Kilimanjaro meltwater), the roaring Lugard Falls, and the Shetani lava flow. Wild dogs, rhinos, and large buffalo herds thrive in both parks.",
    activities: ['Game drives', 'Mzima Springs walk', 'Lugard Falls visit', 'Night game drives', 'Bird watching', 'Luxury tented camps'],
    priceFrom: '$260',
  },
  {
    id: 'ol-pejeta',
    name: 'Ol Pejeta Conservancy',
    tagline: 'The Last Northern White Rhinos on Earth',
    size: '364 km²',
    image: '/images/gallery/safari-128.jpg',
    badge: 'Conservation Icon',
    badgeColor: 'bg-gold text-brand',
    highlights: [
      'Last two northern white rhinos on Earth',
      'Largest black rhino sanctuary in E. Africa',
      'Critically endangered chimpanzee sanctuary',
      'Lion & rhino tracking on foot',
      'All Big Five in one conservancy',
      'Market-leading conservation tourism model',
    ],
    wildlife: ['Northern White Rhino', 'Black Rhino', 'Lion', 'Leopard', 'Elephant', 'Cheetah', 'Chimpanzee', 'Buffalo'],
    bestTime: 'Year-round',
    bestTimeLabel: 'Always Open',
    duration: '2–3 days',
    overview:
      "Ol Pejeta Conservancy is East Africa's most celebrated private wildlife sanctuary — and one of the most important conservation sites on the planet. It is home to Najin and Fatu, the last two northern white rhinos in existence, living under 24-hour armed protection. Ol Pejeta also holds the largest concentration of black rhinos in East Africa and supports remarkable All Big Five viewing. Unique experiences include lion tracking on foot, rhino interaction with expert rangers, and visits to the Sweetwaters Chimpanzee Sanctuary — the only refuge for orphaned chimpanzees in Kenya. Every safari here directly funds critical conservation programmes.",
    activities: ['Rhino tracking on foot', 'Lion tracking', 'Chimp sanctuary visit', 'Night game drives', 'Conservation talks', 'Bush dinners'],
    priceFrom: '$350',
  },
  {
    id: 'lake-nakuru',
    name: 'Lake Nakuru National Park',
    tagline: "The Rift Valley's Flamingo Spectacle",
    size: '188 km²',
    image: '/images/gallery/safari-135.jpg',
    badge: 'UNESCO Site',
    badgeColor: 'bg-brand text-white',
    highlights: [
      'UNESCO World Heritage listed',
      'Up to 1 million flamingos on the lake',
      'Both black & white rhino populations',
      "Rothschild's giraffe — critically endangered",
      '400+ bird species around the lake',
      'Sweeping Rift Valley escarpment views',
    ],
    wildlife: ['Flamingo', 'Black Rhino', 'White Rhino', "Rothschild's Giraffe", 'Lion', 'Leopard', 'Hippo', 'Pelican'],
    bestTime: 'Jun – Mar',
    bestTimeLabel: 'Best Flamingo',
    duration: '1–2 days',
    overview:
      "Lake Nakuru National Park surrounds one of Kenya's most famous soda lakes in the heart of the Great Rift Valley. The lake is UNESCO World Heritage listed and world-famous for the shimmering pink blanket of up to one million lesser flamingos that gather along its shores — one of the greatest ornithological spectacles on Earth. Beyond the flamingos, Nakuru is one of Kenya's best rhino sanctuaries, protecting both black and white rhinos, and is home to the critically endangered Rothschild's giraffe. The park's compact size and prolific wildlife make it ideal as a day trip or overnight stop on a broader Kenya circuit.",
    activities: ['Flamingo viewing', 'Rhino tracking', 'Bird watching', 'Game drives', 'Escarpment viewpoints', 'Photography tours'],
    priceFrom: '$220',
  },
  {
    id: 'kenyan-coast',
    name: 'The Kenyan Coast',
    tagline: 'Ancient Swahili Culture Meets the Indian Ocean',
    size: 'Diani · Lamu · Watamu',
    image: '/images/gallery/safari-122.jpg',
    badge: 'Beach & Marine',
    badgeColor: 'bg-brand-secondary text-white',
    highlights: [
      'Diani Beach — best beach in Africa (multiple awards)',
      'Lamu — UNESCO World Heritage Swahili town',
      'Watamu Marine National Park & Biosphere Reserve',
      'Turtle nesting sites & dolphin watching',
      'Whale shark encounters (Oct–Feb)',
      'Dhow sailing & kite surfing on Indian Ocean',
    ],
    wildlife: ['Whale Shark', 'Green Turtle', 'Spinner Dolphin', 'Humpback Whale', 'Manta Ray', 'Dugong', 'Sea Eagle', 'Colobus Monkey'],
    bestTime: 'Dec – Mar & Jun – Oct',
    bestTimeLabel: 'Dry Season',
    duration: '3–7 days',
    overview:
      "Kenya's 536-kilometre Indian Ocean coastline is a world unto itself — a paradise where coral reefs, mangrove forests, ancient Swahili port towns, and powder-white beaches meet. Diani Beach on the south coast has been voted Africa's Leading Beach Destination multiple years running by the World Travel Awards. Lamu Archipelago is a UNESCO World Heritage Site, its medieval Swahili stone town virtually unchanged for 700 years. Watamu on the north coast is surrounded by the Watamu Marine National Park — a paradise for snorkellers, divers, and sea-turtle fans. The Kenyan coast pairs perfectly with an inland safari for the ultimate East Africa experience.",
    activities: ['Snorkelling & diving', 'Dhow sailing', 'Kite surfing', 'Turtle monitoring', 'Lamu cultural tour', 'Deep sea fishing'],
    priceFrom: '$190',
  },
]

// ── Seasonal guide ─────────────────────────────────────────────────────────────

const seasons = [
  {
    months: 'Jan – Feb',
    label: 'Short Dry Season',
    color: 'bg-amber-50 border-amber-200',
    labelColor: 'text-amber-700',
    tip: 'Excellent game viewing — low grass, animals congregate at water. Great for Amboseli & Samburu.',
  },
  {
    months: 'Mar – May',
    label: 'Long Rains',
    color: 'bg-blue-50 border-blue-200',
    labelColor: 'text-blue-700',
    tip: 'Lush green landscapes and newborn animals. Fewer tourists and better rates. Mara still productive.',
  },
  {
    months: 'Jun – Oct',
    label: 'Peak Season',
    color: 'bg-green-50 border-green-200',
    labelColor: 'text-brand',
    tip: 'Great Migration river crossings (Jul–Sep). Best wildlife throughout Kenya. Book 6–12 months ahead.',
  },
  {
    months: 'Nov – Dec',
    label: 'Short Rains',
    color: 'bg-sky-50 border-sky-200',
    labelColor: 'text-sky-700',
    tip: 'Migratory birds arrive. Landscapes bloom. Good value and manageable crowds.',
  },
]

// ── Why Kenya facts ────────────────────────────────────────────────────────────

const whyKenya = [
  { icon: '🦁', stat: '90+', label: 'Mammal Species in the Mara' },
  { icon: '🐦', stat: '1,100+', label: 'Bird Species Recorded' },
  { icon: '🦏', stat: '2', label: 'Last Northern White Rhinos' },
  { icon: '🐘', stat: '35,000+', label: 'Wild Elephants' },
  { icon: '🌍', stat: '59', label: 'National Parks & Reserves' },
  { icon: '🏆', stat: '#1', label: 'Safari Destination Globally' },
]

// ── Page ───────────────────────────────────────────────────────────────────────

export default function KenyaPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end pb-16 pt-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/gallery/safari-119.jpg"
            alt="Lions at sunset on the Masai Mara plains"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <p className="text-gold font-semibold text-xs uppercase tracking-widest mb-4">Kenya Safaris</p>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Wild Kenya.<br />
              <span className="text-gold">Extraordinary Encounters.</span>
            </h1>
            <p className="text-white/80 text-lg mb-8 leading-relaxed max-w-xl">
              From the thundering hooves of the Great Migration to the gentle giants of Amboseli &mdash; Kenya offers
              Africa&apos;s most iconic wildlife spectacles, ancient cultures, and pristine Indian Ocean beaches.
            </p>
            <div className="flex flex-wrap gap-3">
              <BookNowButton
                packageName="Kenya Safari"
                packageType="Kenya Safari"
                label="Plan My Kenya Safari"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors shadow-lg"
                arrow
              />
              <a
                href="#destinations"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/40 text-white hover:bg-white/10 font-semibold rounded-xl transition-colors"
              >
                Explore Destinations <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-brand py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {whyKenya.map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-1">
                <span className="text-gold font-bold text-xl">{item.stat}</span>
                <span className="text-white/60 text-xs leading-tight">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-gold font-semibold text-xs uppercase tracking-widest mb-3">
              Why Choose Kenya
            </span>
            <h2 className="text-3xl lg:text-4xl font-semibold text-brand mb-5">
              Africa&apos;s Original Safari Destination
            </h2>
            <p className="text-text-muted leading-relaxed">
              Kenya has inspired safari travellers for over a century &mdash; and for good reason. It is home to the
              planet&apos;s greatest wildlife spectacle (the Great Migration), the last two northern white rhinos on
              Earth, some of Africa&apos;s finest luxury lodges, and a coastline of extraordinary beauty. At The Extreme
              Wilderness, we design Kenya safaris that go beyond the obvious &mdash; combining iconic reserves with
              hidden gems, conservation experiences, and deep cultural encounters for a journey that resonates long after
              you return home.
            </p>
          </div>
        </div>
      </section>

      {/* 2×2 Overview Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Box 1 — Kenya Destinations */}
            <div className="bg-brand rounded-3xl p-8 flex flex-col">
              <p className="text-gold text-xs font-bold uppercase tracking-widest mb-2">7 World-Class Destinations</p>
              <h3 className="text-2xl font-bold text-white mb-6">Kenya&apos;s Wild Places at a Glance</h3>
              <div className="space-y-2.5 flex-1">
                {[
                  { icon: '🦁', label: 'Masai Mara', desc: 'Great Migration · Big Cats · Maasai Culture' },
                  { icon: '🐘', label: 'Amboseli', desc: 'Elephant Herds · Kilimanjaro Views' },
                  { icon: '🦒', label: 'Samburu', desc: 'Samburu Special Five · Remote North' },
                  { icon: '🌿', label: 'Tsavo East & West', desc: "Kenya's Largest Park · Red Elephants" },
                  { icon: '🦏', label: 'Ol Pejeta Conservancy', desc: "Last White Rhinos · Chimpanzees" },
                  { icon: '🦩', label: 'Lake Nakuru', desc: 'Flamingos · Rift Valley Escarpment' },
                  { icon: '🏝️', label: 'Kenyan Coast', desc: 'Indian Ocean · Swahili Culture' },
                ].map((d) => (
                  <a
                    key={d.label}
                    href="#destinations"
                    className="flex items-center gap-3 rounded-xl border border-white/10 px-4 py-2.5 hover:border-gold/50 hover:bg-white/5 transition-all group"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-bold text-sm">{d.label}</p>
                      <p className="text-white/50 text-xs truncate">{d.desc}</p>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-white/30 group-hover:text-gold transition-colors flex-shrink-0" />
                  </a>
                ))}
              </div>
            </div>

            {/* Box 2 — Why Book With Us */}
            <div className="bg-amber-50 rounded-3xl p-8 border border-amber-100 flex flex-col">
              <p className="text-gold text-xs font-bold uppercase tracking-widest mb-2">Our Promise</p>
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

            {/* Box 3 — Kenya in Numbers */}
            <div className="bg-light-green rounded-3xl p-8 border border-brand/10 flex flex-col">
              <p className="text-gold text-xs font-bold uppercase tracking-widest mb-2">The Records</p>
              <h3 className="text-2xl font-bold text-brand mb-6">Kenya in Numbers</h3>
              <div className="grid grid-cols-2 gap-5 flex-1">
                {[
                  { stat: '1.5M', label: 'Wildebeest in the Migration', sub: 'Largest land migration on Earth' },
                  { stat: '2', label: 'Last northern white rhinos', sub: 'Living at Ol Pejeta Conservancy' },
                  { stat: '22,000', label: "km² Tsavo Park Complex", sub: "Kenya's largest protected area" },
                  { stat: '1M+', label: 'Flamingos at Lake Nakuru', sub: 'Greatest ornithological spectacle' },
                  { stat: '90+', label: 'Mammal species in the Mara', sub: 'Highest big cat density in Africa' },
                  { stat: '1,100+', label: 'Bird species recorded', sub: "Africa's premier birding nation" },
                ].map((item) => (
                  <div key={item.stat} className="bg-white rounded-2xl px-4 py-3 border border-brand/5">
                    <p className="text-gold font-bold text-xl leading-none">{item.stat}</p>
                    <p className="text-brand font-semibold text-xs mt-1 leading-snug">{item.label}</p>
                    <p className="text-text-muted text-[11px] mt-0.5 leading-snug">{item.sub}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Box 4 — How It Works */}
            <div className="rounded-3xl p-8 flex flex-col" style={{ backgroundColor: '#0a2e1a' }}>
              <p className="text-gold text-xs font-bold uppercase tracking-widest mb-2">The Process</p>
              <h3 className="text-2xl font-bold text-white mb-6">How to Book Your Safari</h3>
              <div className="space-y-5 flex-1">
                {[
                  { step: '01', title: 'Share Your Vision', desc: 'Tell us your travel dates, group size, budget, and dream wildlife. No rigid packages — every trip starts from scratch.' },
                  { step: '02', title: 'We Design Your Itinerary', desc: 'Your dedicated Arusha-based planner crafts a tailor-made route. You review, adjust, and perfect it together.' },
                  { step: '03', title: 'Confirm & Secure', desc: 'Lock in your safari with a deposit. We handle all park fees, lodge bookings, transfers, and permits.' },
                  { step: '04', title: 'Arrive & Experience', desc: 'Your private guide meets you at the airport. From here, Kenya unfolds exactly as you imagined it.' },
                ].map((s) => (
                  <div key={s.step} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                      <span className="text-brand font-bold text-xs">{s.step}</span>
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">{s.title}</p>
                      <p className="text-white/50 text-xs leading-snug mt-1">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-white/10">
                <BookNowButton
                  packageName="Kenya Safari"
                  packageType="Kenya Safari"
                  label="Start Planning — It's Free"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors text-sm"
                  arrow
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Destinations */}
      <section id="destinations" className="py-20 bg-light-green scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-gold font-semibold text-xs uppercase tracking-widest mb-3">
              7 World-Class Destinations
            </span>
            <h2 className="text-3xl lg:text-4xl font-semibold text-brand mb-4">
              Kenya&apos;s Must-Visit Wild Places
            </h2>
            <p className="text-text-muted max-w-xl mx-auto text-sm">
              Each destination offers something no other place on Earth can match. Combined with Tanzania, they form
              the ultimate East Africa safari circuit.
            </p>
          </div>

          <div className="space-y-10">
            {destinations.map((dest, i) => (
              <div
                key={dest.id}
                className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-0 bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow`}
              >
                {/* Image */}
                <div className="relative lg:w-[45%] flex-shrink-0 h-64 lg:h-auto min-h-[320px]">
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

                {/* Content */}
                <div className="flex-1 p-6 lg:p-8 flex flex-col">
                  <div className="mb-4">
                    <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-1">{dest.tagline}</p>
                    <h3 className="text-xl lg:text-2xl font-bold text-brand mb-2">{dest.name}</h3>
                    <div className="flex flex-wrap gap-3 text-xs text-text-muted">
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {dest.duration}</span>
                      <span className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-gold fill-gold" /> Best: {dest.bestTime}
                      </span>
                      <span className="flex items-center gap-1 font-semibold text-brand">From {dest.priceFrom} / person</span>
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

                  <div className="mb-5">
                    <p className="text-xs font-semibold text-brand/50 uppercase tracking-wider mb-2">Wildlife</p>
                    <div className="flex flex-wrap gap-1.5">
                      {dest.wildlife.map((w) => (
                        <span key={w} className="text-xs bg-light-green text-brand px-2.5 py-1 rounded-full border border-brand/10 font-medium">
                          {w}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-xs font-semibold text-brand/50 uppercase tracking-wider mb-2">Activities</p>
                    <div className="flex flex-wrap gap-1.5">
                      {dest.activities.map((a) => (
                        <span key={a} className="text-xs bg-brand/5 text-brand/70 px-2.5 py-1 rounded-full border border-brand/10">
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <BookNowButton
                      packageName={dest.name}
                      packageType="Kenya Safari"
                      priceFrom={dest.priceFrom}
                      duration={dest.duration}
                      label={`Book ${dest.name.split(' ')[0]} Safari`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand hover:bg-brand-secondary text-white text-sm font-bold rounded-xl transition-colors"
                      arrow
                    />
                    <span className="text-xs text-text-muted">Free consultation &middot; No commitment</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Guide */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-gold font-semibold text-xs uppercase tracking-widest mb-3">
              Plan Your Visit
            </span>
            <h2 className="text-3xl font-semibold text-brand mb-3">Best Time to Safari in Kenya</h2>
            <p className="text-text-muted max-w-lg mx-auto text-sm">
              Kenya is a year-round destination, but timing your visit around the Great Migration crossing or the dry
              season maximises your wildlife encounters.
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

          {/* Great Migration callout */}
          <div className="bg-brand rounded-2xl p-6 lg:p-8 flex flex-col lg:flex-row items-start lg:items-center gap-6">
            <div className="flex-1">
              <h3 className="text-white font-bold text-lg mb-2">
                The Great Migration &mdash; Nature&apos;s Greatest Show
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Over 1.5 million wildebeest and 500,000 zebra make an epic clockwise loop between Tanzania&apos;s
                Serengeti and Kenya&apos;s Masai Mara, driven by rainfall and fresh grazing. The Mara River crossings
                &mdash; where thousands of animals plunge through crocodile-infested water &mdash; occur July to
                October. Combine Kenya and Tanzania for the full Migration experience year-round.
              </p>
            </div>
            <BookNowButton
              packageName="Great Migration Safari"
              packageType="Kenya & Tanzania Safari"
              label="Plan Migration Safari"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors whitespace-nowrap"
              arrow
            />
          </div>
        </div>
      </section>

      {/* Kenya + Tanzania combo */}
      <section className="py-20 bg-light-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block text-gold font-semibold text-xs uppercase tracking-widest mb-3">
                The Ultimate Experience
              </span>
              <h2 className="text-3xl lg:text-4xl font-semibold text-brand mb-5">
                Kenya + Tanzania:<br />
                <span className="text-gold">The Complete East Africa Safari</span>
              </h2>
              <p className="text-text-muted leading-relaxed mb-5">
                Kenya and Tanzania share the Great Rift Valley, the Serengeti&ndash;Mara ecosystem, and
                Kilimanjaro&apos;s shadow. Together they form the world&apos;s premier safari circuit. At The Extreme
                Wilderness, we specialise in cross-border itineraries that seamlessly combine the best of both countries
                &mdash; Masai Mara crossings, Serengeti plains, Ngorongoro Crater, Amboseli elephants, and Zanzibar
                beaches &mdash; in one unforgettable journey.
              </p>
              <div className="space-y-2.5 mb-7">
                {[
                  'Follow the Migration from Serengeti to Masai Mara',
                  'Summit Kilimanjaro then fly to Amboseli for elephant sightings',
                  'Combine Ngorongoro Crater with Samburu rare species',
                  'End on Zanzibar or Diani Beach for Indian Ocean relaxation',
                ].map((p) => (
                  <div key={p} className="flex items-start gap-2 text-sm text-brand">
                    <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    {p}
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <BookNowButton
                  packageName="Kenya & Tanzania Combined Safari"
                  packageType="Combined Safari"
                  label="Design My Combined Safari"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand hover:bg-brand-secondary text-white font-bold rounded-xl transition-colors"
                  arrow
                />
                <Link
                  href="/destinations"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-brand text-brand hover:bg-brand hover:text-white font-semibold rounded-xl transition-colors"
                >
                  Tanzania Destinations <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div
              className="relative rounded-3xl overflow-hidden shadow-xl bg-[#f5f0e8] border border-brand/10"
              style={{ aspectRatio: '14/10' }}
            >
              <Image
                src="/maps/Kenya%20map%20of%20major%20destinations.png"
                alt="Kenya major destinations map"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                <span className="bg-brand/80 backdrop-blur-sm text-white text-xs font-medium px-4 py-2 rounded-full flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-gold" />
                  Kenya &mdash; Major Destinations
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bird watching callout */}
      <section className="py-16 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Bird className="w-10 h-10 text-gold mx-auto mb-4" />
          <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-3">
            Kenya: Africa&apos;s Premier Birding Destination
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-sm leading-relaxed mb-6">
            With over 1,100 recorded bird species &mdash; including the rare Shoebill, Jackson&apos;s Widowbird, and
            the Abyssinian Ground Hornbill &mdash; Kenya is a birder&apos;s paradise. Lake Nakuru&apos;s flamingos,
            Samburu&apos;s Somali ostrich, and the Masai Mara&apos;s raptors are just the beginning.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              'Lake Nakuru Flamingos',
              'Samburu Dry-Country Species',
              'Masai Mara Raptors',
              'Aberdare Forest Birds',
              'Rift Valley Specials',
              'Marine Birds on the Coast',
            ].map((b) => (
              <span key={b} className="text-xs text-white/70 border border-white/20 px-3 py-1.5 rounded-full">
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand rounded-3xl p-8 lg:p-14 text-center relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-10"
              style={{ backgroundImage: 'url(/images/gallery/safari-119.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
            <div className="relative z-10">
              <span className="inline-block text-gold font-semibold text-xs uppercase tracking-widest mb-3">
                Ready for Kenya?
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Let&apos;s Plan Your Kenya Safari Together
              </h2>
              <p className="text-white/70 max-w-xl mx-auto mb-8 leading-relaxed">
                Our expert team &mdash; born and based in East Africa &mdash; will design an itinerary tailored to your
                interests, timeline, and budget. No two safaris are alike.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <BookNowButton
                  packageName="Kenya Safari"
                  packageType="Kenya Safari"
                  label="Start Planning — It’s Free"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors text-base shadow-lg"
                  arrow
                />
                <Link
                  href="/destinations"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/40 text-white hover:bg-white/10 font-semibold rounded-xl transition-colors text-base"
                >
                  Explore Tanzania Too <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <p className="text-white/40 text-xs mt-6">
                <Users className="inline w-3 h-3 mr-1" />
                Private groups &middot; Solo travellers &middot; Honeymoons &middot; Family safaris &mdash; all welcome
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
