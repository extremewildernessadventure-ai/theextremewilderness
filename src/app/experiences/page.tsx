import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Clock, MapPin, Star, ChevronRight } from 'lucide-react'
import NewsletterForm from '@/components/home/NewsletterForm'

export const metadata: Metadata = {
  title: 'Safari Experiences | The Extreme Wilderness',
  description:
    'From Great Migration game drives to gorilla trekking in Rwanda and Kilimanjaro summit bids — discover every way to explore East Africa with The Extreme Wilderness.',
}

const experiences = [
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
    image: '/images/gallery/safari-002.jpg',
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
    image: '/images/gallery/safari-003.jpg',
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
    image: '/images/gallery/safari-004.jpg',
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
    image: '/images/gallery/safari-006.jpg',
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
    image: '/images/gallery/safari-008.jpg',
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
    image: '/images/gallery/safari-009.jpg',
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
    image: '/images/gallery/safari-011.jpg',
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
    image: '/images/gallery/safari-014.jpg',
    durationLabel: 'Half-day add-on',
    highlights: ['Serengeti sunrise balloon flight', 'Bush champagne breakfast', 'Certificate of flight', 'Combine with any safari package'],
    priceFrom: '$550',
    badge: 'Add-on',
    badgeColor: 'bg-gold text-brand',
    landscape: true,
  },
]

const experienceTypes = [
  { icon: '🦁', label: 'Wildlife Safaris' },
  { icon: '🦍', label: 'Gorilla Trekking' },
  { icon: '🏔️', label: 'Kilimanjaro' },
  { icon: '🌊', label: 'Beach & Safari' },
  { icon: '📷', label: 'Photography' },
  { icon: '🚶', label: 'Walking Safaris' },
  { icon: '✈️', label: 'Balloon Flights' },
  { icon: '👨‍👩‍👧', label: 'Family Safaris' },
]

export default function ExperiencesPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[75vh] flex items-end overflow-hidden">
        <Image
          src="/images/gallery/safari-019.jpg"
          alt="East Africa safari landscape"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-white/60 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Experiences</span>
          </nav>

          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">East Africa</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-white leading-[1.05] mb-6 max-w-3xl">
            Wilderness<br />
            <span className="text-gold">Experiences</span>
          </h1>
          <p className="text-white/75 text-lg max-w-xl">
            Twelve ways to encounter East Africa — each one crafted by guides who were born here, live here, and love it deeply.
          </p>

          {/* Quick type pills */}
          <div className="flex flex-wrap gap-2 mt-8">
            {experienceTypes.map((t) => (
              <span key={t.label} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs font-medium">
                {t.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTRO ────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-gold font-semibold text-xs uppercase tracking-widest mb-4">
                Our Philosophy
              </span>
              <h2 className="text-3xl lg:text-4xl font-semibold text-brand leading-tight mb-6">
                East Africa is not one experience.<br />
                <span className="text-brand-secondary">It is a hundred, and we know them all.</span>
              </h2>
              <p className="text-text-muted leading-relaxed mb-6">
                For fifteen years, The Extreme Wilderness has been crafting safari journeys for people who want more than a tour — they want a transformation. We are a Tanzanian-owned, Arusha-based operator with deep roots in the wilderness and personal relationships with the camps, lodges and communities we work with.
              </p>
              <p className="text-text-muted leading-relaxed mb-8">
                East Africa is enormous and extraordinarily varied. A week in the Serengeti is nothing like a week in Ruaha. Gorilla trekking in Rwanda is nothing like chimpanzee trekking in Mahale. We're here to help you find your experience — the one that fits your pace, your wonder, your family.
              </p>
              <div className="flex flex-wrap gap-8">
                {[
                  { n: '15+', l: 'Years in the field' },
                  { n: '3', l: 'Countries covered' },
                  { n: '98%', l: 'Guest satisfaction' },
                  { n: '100%', l: 'Locally owned' },
                ].map(({ n, l }) => (
                  <div key={l}>
                    <div className="text-2xl font-bold text-brand">{n}</div>
                    <div className="text-xs text-text-muted mt-0.5">{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mosaic photos */}
            <div className="grid grid-cols-2 gap-3">
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
                <Image src="/images/gallery/safari-021.jpg" alt="Safari landscape" fill className="object-cover" sizes="30vw" />
              </div>
              <div className="flex flex-col gap-3">
                <div className="relative rounded-2xl overflow-hidden aspect-video">
                  <Image src="/images/gallery/safari-022.jpg" alt="Wildlife" fill className="object-cover" sizes="20vw" />
                </div>
                <div className="relative rounded-2xl overflow-hidden flex-1">
                  <Image src="/images/gallery/safari-023.jpg" alt="Bush camp" fill className="object-cover" sizes="20vw" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE CARDS ─────────────────────────────────────────────── */}
      <section className="bg-light-green py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <span className="inline-block text-gold font-semibold text-xs uppercase tracking-widest mb-3">
              Browse All Experiences
            </span>
            <h2 className="text-3xl lg:text-4xl font-semibold text-brand">
              Find Your Adventure
            </h2>
          </div>

          <div className="space-y-6 pb-16">
            {experiences.map((exp, i) => (
              <ExperienceCard key={exp.slug + i} exp={exp} flip={i % 2 === 1} />
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-gold font-semibold text-xs uppercase tracking-widest mb-3">Simple process</span>
            <h2 className="text-3xl font-semibold text-brand">How We Build Your Safari</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Tell us your dream', desc: "Fill in our short form — dates, budget, interests, who you're travelling with. No commitment." },
              { step: '02', title: 'We craft your journey', desc: 'A dedicated safari expert designs a tailor-made itinerary within 24 hours.' },
              { step: '03', title: 'Refine together', desc: "Adjust every detail — we iterate until it's exactly right. No rush, no pressure." },
              { step: '04', title: 'Arrive. Experience. Remember.', desc: 'We handle every detail from airport to camp to beach. You just show up and be present.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="relative">
                <div className="text-6xl font-bold text-brand/8 mb-3 leading-none select-none">{step}</div>
                <h3 className="font-semibold text-brand mb-2">{title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHOTO STRIP ──────────────────────────────────────────────────── */}
      <div className="flex h-64 overflow-hidden">
        {[
          '/images/gallery/safari-025.jpg',
          '/images/gallery/safari-026.jpg',
          '/images/gallery/safari-027.jpg',
          '/images/gallery/safari-028.jpg',
          '/images/gallery/safari-029.jpg',
        ].map((src, i) => (
          <div key={i} className="relative flex-1">
            <Image src={src} alt="" fill className="object-cover" sizes="20vw" />
          </div>
        ))}
      </div>

      {/* ── TESTIMONIAL ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-brand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-gold text-gold" />
            ))}
          </div>
          <blockquote className="text-2xl lg:text-3xl text-white font-light leading-relaxed italic mb-8">
            "We didn't just see Africa. We felt it. The guides at The Extreme Wilderness gave us something we couldn't have found anywhere else — a genuine, unhurried, deeply personal experience of the wild."
          </blockquote>
          <p className="text-gold font-semibold">Sarah & Tom Whitmore</p>
          <p className="text-white/50 text-sm mt-1">12-day Serengeti & Zanzibar — March 2025</p>
        </div>
      </section>

      {/* ── CTA / NEWSLETTER ─────────────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="/images/gallery/safari-030.jpg"
          alt="Sunset safari"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left — CTA */}
            <div>
              <span className="inline-block text-gold font-semibold text-xs uppercase tracking-widest mb-4">Ready to go?</span>
              <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-4">
                Start planning your<br />East Africa journey
              </h2>
              <p className="text-white/70 mb-8 leading-relaxed">
                Every itinerary begins with a conversation. Tell us where you want to go — or let us surprise you. No obligation, just possibilities.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors"
                >
                  Plan My Safari <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/safaris"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 text-white hover:bg-white/10 font-semibold rounded-xl transition-colors"
                >
                  Browse Packages
                </Link>
              </div>
            </div>

            {/* Right — Newsletter */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <p className="text-gold font-semibold text-xs uppercase tracking-widest mb-2">The Wilderness Edit</p>
              <h3 className="text-2xl font-semibold text-white mb-3">Stay inspired</h3>
              <p className="text-white/65 text-sm leading-relaxed mb-6">
                Migration updates, seasonal guides, new camp openings and field notes from our guides — delivered monthly. No noise, only the good stuff.
              </p>
              <NewsletterForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function ExperienceCard({ exp, flip }: { exp: typeof experiences[0]; flip: boolean }) {
  return (
    <div className={`group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col lg:flex-row ${flip ? 'lg:flex-row-reverse' : ''}`}>
      {/* Image */}
      <div className="relative lg:w-[45%] flex-shrink-0 overflow-hidden" style={{ minHeight: 320 }}>
        <Image
          src={exp.image}
          alt={exp.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 1024px) 100vw, 45vw"
        />
        {/* Badge */}
        <div className="absolute top-4 left-4">
          <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full ${exp.badgeColor}`}>
            {exp.badge}
          </span>
        </div>
        {/* Category overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <span className="text-white/80 text-xs font-semibold uppercase tracking-widest">{exp.category}</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-8 lg:p-10 flex flex-col justify-center">
        <h3 className="text-2xl font-semibold text-brand mb-2">{exp.title}</h3>
        <p className="text-gold font-medium text-sm italic mb-4">{exp.tagline}</p>
        <p className="text-text-muted leading-relaxed text-sm mb-6">{exp.description}</p>

        {/* Highlights */}
        <ul className="space-y-1.5 mb-6">
          {exp.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-sm text-text-muted">
              <span className="text-gold mt-0.5 flex-shrink-0">✓</span>
              {h}
            </li>
          ))}
        </ul>

        {/* Footer row */}
        <div className="flex items-center justify-between pt-5 border-t border-gray-100">
          <div className="flex items-center gap-4 text-xs text-text-muted">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {exp.durationLabel}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              East Africa
            </span>
            <span className="font-semibold text-brand">
              From <span className="text-base">{exp.priceFrom}</span>
              <span className="text-text-muted font-normal">/pp</span>
            </span>
          </div>
          <Link
            href={exp.slug}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand hover:bg-brand-secondary text-white text-sm font-semibold rounded-xl transition-colors"
          >
            Explore <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
