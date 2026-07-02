import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Clock, Users, MapPin, CheckCircle2, Calendar, Compass, HelpCircle } from 'lucide-react'
import { packages } from '@/data/packages'
import NewsletterForm from '@/components/home/NewsletterForm'
import BookNowButton from '@/components/booking/BookNowButton'

export const metadata: Metadata = {
  title: 'Safari Itineraries | The Extreme Wilderness',
  description:
    'Browse curated safari itineraries across Tanzania, Kenya and Rwanda. From classic Serengeti circuits to gorilla trekking and Kilimanjaro summit bids. Every journey custom-built.',
  keywords: [
    'Tanzania safari itinerary',
    'East Africa safari itinerary',
    '7 day Tanzania safari',
    '10 day Tanzania safari',
    'Serengeti itinerary',
    'Ngorongoro itinerary',
    'safari trip planner Tanzania',
    'Tanzania travel itinerary',
    'Africa safari planner',
    'gorilla trekking itinerary Rwanda',
    'Kilimanjaro itinerary',
    'combined safari Tanzania',
    'custom Tanzania itinerary',
    'Tanzania safari package deals',
    'Africa travel plan',
  ],
}

const editions = [
  {
    label: 'The Classic Edition',
    subtitle: 'Small Group Safaris',
    slug: '/safaris/7-day-serengeti-ngorongoro',
    image: '/images/gallery/safari-020.webp',
    duration: '7 days',
    priceFrom: 3200,
    destinations: 'Tanzania — Serengeti, Ngorongoro, Tarangire',
    badge: 'Bestseller',
  },
  {
    label: 'The Primate Edition',
    subtitle: 'Small Group Safaris',
    slug: '/rwanda/volcanoes',
    image: '/images/gallery/safari-021.webp',
    duration: '8 days',
    priceFrom: 4800,
    destinations: 'Rwanda — Volcanoes NP · Tanzania — Mahale',
    badge: 'Iconic',
  },
  {
    label: 'The Wild South Edition',
    subtitle: 'Small Group Safaris',
    slug: '/safaris/7-day-southern-circuit',
    image: '/images/gallery/safari-022.webp',
    duration: '7 days',
    priceFrom: 3500,
    destinations: 'Tanzania — Ruaha NP, Nyerere NP',
    badge: 'Remote',
  },
  {
    label: 'The Signature Edition',
    subtitle: 'Small Group Safaris',
    slug: '/safaris/10-day-safari-zanzibar',
    image: '/images/gallery/safari-023.webp',
    duration: '10 days',
    priceFrom: 4200,
    destinations: 'Tanzania — Serengeti, Ngorongoro, Zanzibar',
    badge: 'Popular',
  },
]

const extra = [
  {
    slug: '/safaris/5-day-serengeti-fly-in',
    name: 'Serengeti Fly-In Circuit',
    duration: 5,
    priceFrom: 3800,
    image: '/images/gallery/safari-025.webp',
    destinations: ['Tanzania — Serengeti NP (fly-in)'],
    badge: 'Luxury' as string | null,
  },
  {
    slug: '/kenya/masai-mara',
    name: 'Tanzania & Kenya Circuit',
    duration: 12,
    priceFrom: 5200,
    image: '/images/gallery/safari-026.webp',
    destinations: ['Tanzania — Serengeti', 'Kenya — Masai Mara, Amboseli'],
    badge: null,
  },
  {
    slug: '/destinations/serengeti',
    name: 'Northern Tanzania Circuit',
    duration: 9,
    priceFrom: 3900,
    image: '/images/gallery/safari-027.webp',
    destinations: ['Tanzania — Serengeti, Ngorongoro, Tarangire, Manyara'],
    badge: null,
  },
  {
    slug: '/safaris/7-day-southern-circuit',
    name: 'Southern Tanzania Circuit',
    duration: 8,
    priceFrom: 3600,
    image: '/images/gallery/safari-028.webp',
    destinations: ['Tanzania — Nyerere NP, Ruaha NP'],
    badge: null,
  },
  {
    slug: '/kenya',
    name: 'Kenya Wildlife Circuit',
    duration: 9,
    priceFrom: 4100,
    image: '/images/gallery/safari-029.webp',
    destinations: ['Kenya — Masai Mara, Laikipia, Ol Pejeta'],
    badge: null,
  },
  {
    slug: '/trekking',
    name: 'Kilimanjaro Machame Route',
    duration: 7,
    priceFrom: 2100,
    image: '/images/gallery/kilimanjaro.webp',
    destinations: ['Tanzania — Kilimanjaro NP (Machame → Uhuru Peak)'],
    badge: null,
  },
]

const STEPS = [
  {
    num: '01',
    title: 'Share Your Vision',
    desc: 'Tell us when you want to travel, how many days you have, and what you most want to experience. No question is too vague.',
  },
  {
    num: '02',
    title: 'We Design',
    desc: 'Our Arusha-based team builds a custom route around your dates, budget and interests — camps and daily rhythms mapped from the ground up.',
  },
  {
    num: '03',
    title: 'You Refine',
    desc: 'We adjust, swap and rework until every detail is exactly right. Most clients take 2–3 iterations. We never rush.',
  },
  {
    num: '04',
    title: 'You Explore',
    desc: 'Your expert guides take it from here. Transfers, camps, park fees and all meals — fully handled. You just show up ready.',
  },
]

const INCLUDED = [
  'All game drives in custom 4×4 vehicles',
  'Full accommodation as specified',
  'All national park & conservation fees',
  'TANAPA-certified expert guides',
  'All meals at camp or lodge',
  'Airport & inter-park transfers',
  'Flying Doctors emergency evacuation cover',
]

const FAQS = [
  {
    q: 'Can I customise any itinerary?',
    a: 'Every itinerary is a starting point. We shape 100% of the journey around your travel window, interests and group size.',
  },
  {
    q: 'What is the minimum group size?',
    a: 'We operate from 1 person upward. Solo and couple safaris travel in private vehicles at no extra charge.',
  },
  {
    q: 'How far in advance should I book?',
    a: 'Peak season (Jun–Oct): 6–12 months. Shoulder: 3–6 months is comfortable. Last-minute is sometimes possible.',
  },
]

const MONTHS = [
  { m: 'Jan', type: 'good' },  { m: 'Feb', type: 'good' },  { m: 'Mar', type: 'rain' },
  { m: 'Apr', type: 'rain' },  { m: 'May', type: 'rain' },  { m: 'Jun', type: 'prime' },
  { m: 'Jul', type: 'prime' }, { m: 'Aug', type: 'prime' }, { m: 'Sep', type: 'prime' },
  { m: 'Oct', type: 'prime' }, { m: 'Nov', type: 'rain' },  { m: 'Dec', type: 'good' },
]

export default function ItinerariesPage() {
  return (
    <>
      {/* ── 1. HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[60vh] flex items-end pb-16 pt-32 overflow-hidden">
        <Image
          src="/images/gallery/safari-009.webp"
          alt="East Africa safari landscape at golden hour"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/70 text-xs font-semibold uppercase tracking-widest mb-7">
            <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
            East Africa · Tanzania · Kenya · Rwanda
          </div>

          <h1
            className="font-semibold text-white leading-[1.05] mb-5"
            style={{ fontSize: 'clamp(2.8rem, 6.5vw, 6rem)', fontStyle: 'italic' }}
          >
            Crafted Itineraries.<br />
            <span className="text-gold">Extraordinary Wild.</span>
          </h1>

          <p className="text-white/70 text-base sm:text-lg max-w-xl leading-relaxed mb-8" style={{ fontWeight: 300 }}>
            Every route we design moves with the rhythms of the wild — not against them.
            Hand-picked camps, expert resident guides, and a level of detail most operators never reach.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <BookNowButton
              packageName="Custom Safari"
              packageType="Safari"
              label="Start Planning My Trip"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors shadow-lg"
            />
            <a
              href="#itineraries"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/40 text-white hover:bg-white/10 font-semibold rounded-xl transition-colors"
            >
              Browse Itineraries <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3 text-white/75 text-sm">
            {[
              '5+ Years in East Africa',
              'Fully Bespoke Itineraries',
              'Locally Owned & Operated',
              'Small Groups. No Compromise.',
            ].map((text) => (
              <span key={text} className="flex items-center gap-2">
                <span className="text-gold text-[10px]">✦</span>
                {text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. STATS STRIP ───────────────────────────────────────────────────── */}
      <section className="bg-brand py-10 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { value: '200+', label: 'Safaris Delivered' },
              { value: '5+',   label: 'Years in East Africa' },
              { value: '98%',  label: 'Guest Satisfaction' },
              { value: '6',    label: 'Countries Covered' },
            ].map(({ value, label }) => (
              <div key={label} className="flex flex-col items-center gap-1">
                <span className="text-gold text-3xl lg:text-4xl font-bold">{value}</span>
                <span className="text-white/60 text-xs uppercase tracking-wider">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. SIGNATURE EDITIONS ────────────────────────────────────────────── */}
      <section id="itineraries" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <span className="text-gold-label font-semibold text-xs uppercase tracking-widest">Signature Editions</span>
              <h2 className="font-semibold text-brand mt-2" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
                Our Flagship Journeys
              </h2>
            </div>
            <p className="text-text-muted text-sm max-w-sm leading-relaxed sm:text-right">
              Four expertly designed journeys built for travellers who don&apos;t want ordinary.
              Each one is a starting point — we shape it entirely around you.
            </p>
          </div>

          {/* Featured card — full width */}
          <Link
            href={editions[0].slug}
            className="group relative flex rounded-3xl overflow-hidden mb-4"
            style={{ minHeight: 460 }}
          >
            <Image
              src={editions[0].image}
              alt={editions[0].label}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

            <div className="absolute top-6 left-6">
              <span className="px-3 py-1 bg-gold text-brand text-xs font-bold uppercase rounded-full">
                {editions[0].badge}
              </span>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <p className="text-white/60 text-[10px] font-semibold uppercase tracking-widest mb-2">
                  {editions[0].subtitle}
                </p>
                <h3 className="text-white text-3xl sm:text-4xl font-semibold mb-2">{editions[0].label}</h3>
                <p className="text-white/65 text-sm">{editions[0].destinations}</p>
              </div>
              <div className="flex-shrink-0 sm:text-right">
                <p className="text-white/70 text-xs mb-1">{editions[0].duration} · From</p>
                <p className="text-gold text-2xl font-bold">${editions[0].priceFrom.toLocaleString()}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-white/80 text-sm font-semibold group-hover:text-gold transition-colors">
                  Explore Journey <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </Link>

          {/* 3 smaller cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {editions.slice(1).map((ed) => (
              <Link
                key={ed.label}
                href={ed.slug}
                className="group relative flex rounded-2xl overflow-hidden"
                style={{ minHeight: 340 }}
              >
                <Image
                  src={ed.image}
                  alt={ed.label}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute top-4 right-4">
                  <span className="px-2.5 py-1 bg-gold text-brand text-[10px] font-bold uppercase rounded-full">
                    {ed.badge}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-white/70 text-[10px] font-semibold uppercase tracking-widest mb-1">{ed.duration}</p>
                  <h3 className="text-white text-lg font-semibold mb-1">{ed.label}</h3>
                  <p className="text-white/60 text-xs mb-3">{ed.destinations}</p>
                  <span className="inline-flex items-center gap-1 text-gold text-sm font-semibold group-hover:gap-2 transition-all">
                    From ${ed.priceFrom.toLocaleString()} <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. ALL PACKAGES ──────────────────────────────────────────────────── */}
      <section className="bg-light-green py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-14">
            <span className="text-gold-label font-semibold text-xs uppercase tracking-widest">Complete Collection</span>
            <h2 className="text-brand font-semibold text-3xl lg:text-4xl mt-2">Every Journey We Offer</h2>
            <p className="text-text-muted mt-3 max-w-lg mx-auto text-sm leading-relaxed">
              From 5-day fly-in circuits to 12-day cross-border adventures — each package is a blueprint, not a box.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <PackageCard
                key={pkg.slug}
                slug={`/safaris/${pkg.slug}`}
                name={pkg.name}
                duration={pkg.duration}
                priceFrom={pkg.priceFrom}
                image={pkg.heroImage}
                destinations={pkg.destinations.map((d) => d.charAt(0).toUpperCase() + d.slice(1))}
                groupSize={pkg.groupSize}
                badge={pkg.badge}
              />
            ))}
            {extra.map((it) => (
              <PackageCard
                key={it.slug + it.name}
                slug={it.slug}
                name={it.name}
                duration={it.duration}
                priceFrom={it.priceFrom}
                image={it.image}
                destinations={it.destinations}
                badge={it.badge ?? undefined}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. HOW WE CRAFT YOUR JOURNEY ─────────────────────────────────────── */}
      <section className="bg-brand py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07]">
          <Image src="/images/gallery/safari-120.webp" alt="" fill className="object-cover" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold-label font-semibold text-xs uppercase tracking-widest">Our Process</span>
            <h2 className="text-white font-semibold text-3xl lg:text-4xl mt-2">How We Craft Your Journey</h2>
            <p className="text-white/60 mt-3 max-w-md mx-auto text-sm leading-relaxed">
              We don&apos;t sell packages. We build itineraries. Here&apos;s exactly how it works.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {STEPS.map((step, i) => (
              <div key={step.num} className="relative">
                {/* Connector line */}
                {i < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-12 right-0 h-px bg-white/15" />
                )}
                <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center mb-5 text-brand font-bold text-sm relative z-10">
                  {step.num}
                </div>
                <h3 className="text-white font-semibold text-lg mb-3">{step.title}</h3>
                <p className="text-white/75 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <BookNowButton
              packageName="Custom Safari"
              packageType="Safari"
              label="Let's Start Planning"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors shadow-lg text-base"
            />
          </div>
        </div>
      </section>

      {/* ── 6. PLANNING GUIDE ────────────────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-14">
            <span className="text-gold-label font-semibold text-xs uppercase tracking-widest">Trip Planning</span>
            <h2 className="text-brand font-semibold text-3xl lg:text-4xl mt-2">Everything You Need to Know</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Card A — When to Go */}
            <div className="bg-light-green rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-brand rounded-xl flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5 text-gold" />
                </div>
                <h3 className="text-brand font-semibold text-lg">When to Go</h3>
              </div>
              <p className="text-text-muted text-sm leading-relaxed mb-6">
                Tanzania&apos;s dry seasons offer the best game viewing. The Great Migration river crossings
                peak July–September. Calving season (Ndutu) runs January–March. December and February
                are excellent shoulder months with fewer crowds.
              </p>
              <div className="flex flex-wrap gap-2">
                {MONTHS.map(({ m, type }) => (
                  <span
                    key={m}
                    className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide ${
                      type === 'prime'
                        ? 'bg-brand text-white'
                        : type === 'good'
                        ? 'bg-brand/20 text-brand'
                        : 'bg-gray-100 text-gray-400'
                    }`}
                  >
                    {m}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 mt-4 text-[10px] font-semibold uppercase tracking-wide">
                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-brand inline-block" />Prime</span>
                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-brand/20 inline-block" />Good</span>
                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-gray-200 inline-block" />Rainy</span>
              </div>
            </div>

            {/* Card B — What's Included */}
            <div className="bg-brand rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-gold" />
                </div>
                <h3 className="text-white font-semibold text-lg">What&apos;s Included</h3>
              </div>
              <ul className="space-y-3">
                {INCLUDED.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/75 text-sm">
                    <span className="text-gold flex-shrink-0 mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Card C — Common Questions */}
            <div className="bg-light-green rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-brand rounded-xl flex items-center justify-center flex-shrink-0">
                  <HelpCircle className="w-5 h-5 text-gold" />
                </div>
                <h3 className="text-brand font-semibold text-lg">Common Questions</h3>
              </div>
              <div className="space-y-5">
                {FAQS.map((faq) => (
                  <div key={faq.q} className="border-b border-brand/10 pb-5 last:border-0 last:pb-0">
                    <p className="text-brand font-semibold text-sm mb-1.5">{faq.q}</p>
                    <p className="text-text-muted text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Card D — Getting Here */}
            <div className="bg-light-green rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-brand rounded-xl flex items-center justify-center flex-shrink-0">
                  <Compass className="w-5 h-5 text-gold" />
                </div>
                <h3 className="text-brand font-semibold text-lg">Getting Here</h3>
              </div>
              <ul className="space-y-4">
                {[
                  'Fly into Kilimanjaro International Airport (JRO) — 1 hr from Arusha',
                  'Direct connections via Nairobi, Addis Ababa, Doha, Dubai or Amsterdam',
                  'We arrange all airport transfers from JRO to your first camp or lodge',
                  'Tanzania e-Visa available online — allow 3–10 business days to process',
                  'Yellow fever certificate required if arriving from endemic countries',
                ].map((tip) => (
                  <li key={tip} className="flex items-start gap-3 text-text-muted text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-1.5" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ── 7. CTA + NEWSLETTER ──────────────────────────────────────────────── */}
      <section className="bg-brand py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left — CTA */}
            <div>
              <span className="text-gold-label font-semibold text-xs uppercase tracking-widest">Ready When You Are</span>
              <h2 className="text-white font-semibold mt-2 mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                Let&apos;s Plan Your<br />
                <span className="text-gold">Perfect Safari.</span>
              </h2>
              <p className="text-white/60 text-base leading-relaxed mb-8 max-w-sm">
                Share your travel dates and what moves you. We&apos;ll build something extraordinary —
                entirely around you, no templates, no shortcuts.
              </p>
              <BookNowButton
                packageName="Custom Safari"
                packageType="Safari"
                label="Start Planning"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors shadow-lg text-base"
              />
              <p className="text-white/35 text-xs mt-4">No commitment. We respond within 24 hours.</p>
            </div>

            {/* Right — Newsletter */}
            <div className="bg-white/[0.07] backdrop-blur-sm rounded-2xl border border-white/15 p-8">
              <h3 className="text-white text-xl font-semibold mb-1">The Wilderness Edit</h3>
              <p className="text-white/75 text-sm mb-6 leading-relaxed">
                Migration updates, new itineraries, exclusive offers and field notes from our guides — delivered monthly.
              </p>
              <NewsletterForm dark={true} />
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

// ── Package card ──────────────────────────────────────────────────────────────
function PackageCard({
  slug, name, duration, priceFrom, image, destinations, groupSize, badge,
}: {
  slug: string
  name: string
  duration: number
  priceFrom: number
  image: string
  destinations: string[]
  groupSize?: { min: number; max: number }
  badge?: string
}) {
  return (
    <Link
      href={slug}
      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-0.5 transition-all flex flex-col"
    >
      <div className="relative h-52 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {badge && (
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-1 bg-gold text-brand text-[10px] font-bold uppercase tracking-wider rounded-full">
              {badge}
            </span>
          </div>
        )}
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-semibold text-brand text-base leading-snug mb-3">{name}</h3>
        <div className="flex flex-wrap gap-3 text-xs text-text-muted mb-3">
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-gold" />{duration} days
          </span>
          {groupSize && (
            <span className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-gold" />Max {groupSize.max} pax
            </span>
          )}
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-gold" />
            {destinations[0]}
          </span>
        </div>
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
          <div>
            <span className="text-text-muted text-xs">From </span>
            <span className="text-brand font-bold text-lg">${priceFrom.toLocaleString()}</span>
            <span className="text-text-muted text-xs">/pp</span>
          </div>
          <span className="flex items-center gap-1 text-sm font-semibold text-brand group-hover:text-gold transition-colors">
            View <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </Link>
  )
}
