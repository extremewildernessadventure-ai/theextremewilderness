import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Clock, Users, MapPin } from 'lucide-react'
import { packages } from '@/data/packages'
import NewsletterForm from '@/components/home/NewsletterForm'

export const metadata: Metadata = {
  title: 'Itinerary Inspiration | The Extreme Wilderness',
  description:
    'Browse curated safari itineraries across Tanzania, Kenya and Rwanda. From classic Northern Circuit wildlife safaris to gorilla trekking and Kilimanjaro summit bids.',
}

// ── Featured "Edition" cards ─────────────────────────────────────────────────
const editions = [
  {
    label: 'The Classic Edition',
    subtitle: 'Small Group Safaris',
    slug: '/safaris/7-day-serengeti-ngorongoro',
    image: '/images/gallery/safari-020.jpg',
    duration: '7 days',
    priceFrom: 3200,
    destinations: 'Tanzania — Serengeti, Ngorongoro, Tarangire',
    badge: 'Bestseller',
  },
  {
    label: 'The Primate Edition',
    subtitle: 'Small Group Safaris',
    slug: '/rwanda/volcanoes',
    image: '/images/gallery/safari-021.jpg',
    duration: '8 days',
    priceFrom: 4800,
    destinations: 'Rwanda — Volcanoes NP · Tanzania — Mahale',
    badge: 'Iconic',
  },
  {
    label: 'The Wild South Edition',
    subtitle: 'Small Group Safaris',
    slug: '/safaris/7-day-southern-circuit',
    image: '/images/gallery/safari-022.jpg',
    duration: '7 days',
    priceFrom: 3500,
    destinations: 'Tanzania — Ruaha NP, Nyerere NP',
    badge: 'Remote',
  },
  {
    label: 'The Signature Edition',
    subtitle: 'Small Group Safaris',
    slug: '/safaris/10-day-safari-zanzibar',
    image: '/images/gallery/safari-023.jpg',
    duration: '10 days',
    priceFrom: 4200,
    destinations: 'Tanzania — Serengeti, Ngorongoro, Zanzibar',
    badge: 'Popular',
  },
]

// ── Extra curated itineraries ────────────────────────────────────────────────
const extra = [
  {
    slug: '/safaris/5-day-serengeti-fly-in',
    name: 'Serengeti Fly-In Circuit',
    duration: 5,
    priceFrom: 3800,
    image: '/images/gallery/safari-025.jpg',
    destinations: ['Tanzania — Serengeti NP (fly-in)'],
    badge: 'Luxury',
  },
  {
    slug: '/kenya/masai-mara',
    name: 'Tanzania & Kenya Circuit',
    duration: 12,
    priceFrom: 5200,
    image: '/images/gallery/safari-026.jpg',
    destinations: ['Tanzania — Serengeti', 'Kenya — Masai Mara, Amboseli'],
    badge: null,
  },
  {
    slug: '/destinations/serengeti',
    name: 'Northern Tanzania Circuit',
    duration: 9,
    priceFrom: 3900,
    image: '/images/gallery/safari-027.jpg',
    destinations: ['Tanzania — Arusha, Serengeti NP, Ngorongoro, Tarangire NP, Manyara'],
    badge: null,
  },
  {
    slug: '/safaris/7-day-southern-circuit',
    name: 'Southern Tanzania Circuit',
    duration: 8,
    priceFrom: 3600,
    image: '/images/gallery/safari-028.jpg',
    destinations: ['Tanzania — Nyerere NP, Ruaha NP, Dar es Salaam'],
    badge: null,
  },
  {
    slug: '/kenya',
    name: 'Kenya Wildlife Circuit',
    duration: 9,
    priceFrom: 4100,
    image: '/images/gallery/safari-029.jpg',
    destinations: ['Kenya — Ol Pejeta Conservancy, Laikipia, Mara Naboisho, Masai Mara, Nairobi'],
    badge: null,
  },
  {
    slug: '/trekking/kilimanjaro',
    name: 'Kilimanjaro Machame Route',
    duration: 7,
    priceFrom: 2100,
    image: '/images/gallery/safari-030.jpg',
    destinations: ['Tanzania — Kilimanjaro NP (Machame Gate → Uhuru Peak)'],
    badge: null,
  },
]

export default function ItinerariesPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[88vh] flex items-end overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/gallery/safari-009.jpg"
          alt="East Africa safari landscape"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Base dark scrim — keeps image recognisable but never fights the text */}
        <div className="absolute inset-0 bg-black/40" />
        {/* Heavy gradient: pitch-dark at bottom where text lives, fades out mid-frame */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
        {/* Subtle left-side fade so the left column reads cleanly on wide screens */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-48">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-white/50 text-xs font-medium uppercase tracking-widest mb-8">
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/80">Itineraries</span>
          </nav>

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/70 text-xs font-semibold uppercase tracking-widest mb-7">
            <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
            East Africa · Tanzania · Kenya · Rwanda
          </div>

          {/* Headline */}
          <h1
            className="font-semibold text-white leading-[1.05] mb-5"
            style={{ fontSize: 'clamp(2.8rem, 6.5vw, 6rem)', fontStyle: 'italic' }}
          >
            Crafted Itineraries.<br />
            <span className="text-gold">Extraordinary Wild.</span>
          </h1>

          {/* Sub-copy */}
          <p className="text-white/70 text-base sm:text-lg max-w-xl leading-relaxed mb-10" style={{ fontWeight: 300 }}>
            Every route we design moves with the rhythms of the wild — not against them.
            Hand-picked camps, expert resident guides, and a level of detail most operators never reach.
          </p>

          {/* Trust signals */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-white/55 text-sm">
            {[
              { icon: '✦', text: '15+ Years in East Africa' },
              { icon: '✦', text: 'Fully Bespoke Itineraries' },
              { icon: '✦', text: 'Locally Owned & Operated' },
              { icon: '✦', text: 'Small Groups. No Compromise.' },
            ].map(({ icon, text }) => (
              <span key={text} className="flex items-center gap-2">
                <span className="text-gold text-[10px]">{icon}</span>
                {text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION INTRO ────────────────────────────────────────────────── */}
      <section className="bg-white pt-20 pb-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 border-b border-stone-200 pb-10">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold mb-3">
                Itinerary Collection
              </p>
              <h2
                className="font-semibold text-brand leading-tight"
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontStyle: 'italic' }}
              >
                Browse Our Expeditions
              </h2>
            </div>
            <p className="text-text-muted text-sm max-w-sm leading-relaxed sm:text-right">
              Each itinerary below is a starting point. Tell us your travel window and we'll shape it entirely around you.
            </p>
          </div>
        </div>
      </section>

      {/* ── FEATURED EDITIONS (2-col portrait cards) ─────────────────────── */}
      <section className="bg-white pb-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {editions.map((ed) => (
              <EditionCard key={ed.label} ed={ed} />
            ))}
          </div>
        </div>
      </section>

      {/* ── ALL PACKAGES GRID ────────────────────────────────────────────── */}
      <section className="bg-white py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Existing packages from data */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
            {packages.map((pkg) => (
              <PackageCard
                key={pkg.slug}
                slug={`/safaris/${pkg.slug}`}
                name={pkg.name}
                duration={pkg.duration}
                priceFrom={pkg.priceFrom}
                image={pkg.heroImage}
                destinations={pkg.destinations}
                groupSize={pkg.groupSize}
                badge={pkg.badge}
              />
            ))}

            {/* Extra curated itineraries */}
            {extra.map((it) => (
              <PackageCard
                key={it.slug}
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

          {/* Load more placeholder */}
          <div className="flex justify-center py-10">
            <button className="px-10 py-3.5 border-2 border-brand text-brand font-semibold text-sm rounded-xl hover:bg-brand hover:text-white transition-all tracking-wide uppercase">
              Load More Itineraries
            </button>
          </div>
        </div>
      </section>

      {/* ── WILDERNESS EDIT NEWSLETTER ───────────────────────────────────── */}
      <section className="bg-gold py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left text */}
            <div>
              <h2 className="text-brand font-semibold mb-3" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.1, fontStyle: 'italic' }}>
                The Wilderness Edit.<br />
                A new way to<br />
                discover East<br />
                Africa.
              </h2>
              <p className="text-brand/70 italic text-lg mt-4 font-medium">Ready. Set. Safari.</p>
              <p className="text-brand/60 text-sm mt-4 leading-relaxed max-w-sm">
                Your carefully crafted Small Group Safaris newsletter, born with the ambition to be the only newsletter you ever need. Designed by professionals, curated for explorers.
              </p>
              <button className="mt-6 px-8 py-3 border-2 border-brand text-brand font-semibold text-sm rounded-xl hover:bg-brand hover:text-white transition-all uppercase tracking-wide">
                Join the Journey
              </button>
            </div>

            {/* Right — form */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <p className="text-brand font-semibold text-sm uppercase tracking-widest mb-1">Stay inspired</p>
              <h3 className="text-brand text-xl font-semibold mb-4">Join our newsletter</h3>
              <p className="text-text-muted text-sm mb-6 leading-relaxed">
                Migration updates, new itineraries, exclusive offers and field notes from our guides — delivered monthly.
              </p>
              <NewsletterForm dark={false} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

// ── Edition card — large portrait with bold text overlay ─────────────────────
function EditionCard({ ed }: { ed: typeof editions[0] }) {
  return (
    <div className="group">
      <Link href={ed.slug} className="block">
        {/* Portrait image with overlay */}
        <div className="relative overflow-hidden rounded-xl" style={{ aspectRatio: '4/5' }}>
          <Image
            src={ed.image}
            alt={ed.label}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
          {/* Dark gradient bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

          {/* Badge top-right */}
          <div className="absolute top-4 right-4">
            <span className="inline-flex w-14 h-14 rounded-full bg-gold items-center justify-center text-center">
              <span className="text-brand text-[9px] font-black uppercase leading-tight text-center px-1">{ed.badge}</span>
            </span>
          </div>

          {/* Edition text bottom */}
          <div className="absolute bottom-6 left-6 right-6">
            <p className="text-white/60 text-[10px] font-semibold uppercase tracking-widest mb-1">{ed.subtitle}</p>
            <p className="text-white font-black uppercase leading-[0.9] text-2xl sm:text-3xl tracking-tight">
              {ed.label.toUpperCase().split(' ').map((word, i) => (
                <span key={i} className="block">{word}</span>
              ))}
            </p>
          </div>
        </div>

        {/* Details below card */}
        <div className="pt-3 pb-1 px-1">
          <p className="text-text-muted text-[10px] uppercase tracking-widest mb-1">{ed.duration}</p>
          <p className="font-semibold text-brand text-sm mb-1">{ed.label}</p>
          <p className="text-text-muted text-xs mb-1">
            From <span className="font-semibold text-brand">${ed.priceFrom.toLocaleString()}</span>{' '}
            <span className="text-text-muted">per person</span>
          </p>
          <div className="mt-1">
            <p className="text-[10px] text-text-muted font-semibold uppercase tracking-widest mb-0.5">Destinations</p>
            <p className="text-xs text-text-muted">{ed.destinations}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

// ── Standard package card — landscape photo ───────────────────────────────────
function PackageCard({
  slug, name, duration, priceFrom, image, destinations, groupSize, badge,
}: {
  slug: string; name: string; duration: number; priceFrom: number
  image: string; destinations: string[]; groupSize?: { min: number; max: number }; badge?: string
}) {
  return (
    <div className="group">
      <Link href={slug} className="block">
        {/* Landscape image */}
        <div className="relative overflow-hidden rounded-xl" style={{ aspectRatio: '3/2' }}>
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
          {badge && (
            <div className="absolute top-3 right-3">
              <span className="inline-flex w-12 h-12 rounded-full bg-gold items-center justify-center">
                <span className="text-brand text-[8px] font-black uppercase text-center leading-tight px-1">{badge}</span>
              </span>
            </div>
          )}
        </div>

        {/* Details */}
        <div className="pt-3 pb-2 px-1">
          <div className="flex items-center gap-3 text-[10px] text-text-muted uppercase tracking-widest mb-1.5">
            <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{duration} days</span>
            {groupSize && (
              <span className="flex items-center gap-1"><Users className="w-3 h-3" />Max {groupSize.max}</span>
            )}
          </div>
          <p className="font-semibold text-brand text-sm mb-1">{name}</p>
          <p className="text-xs text-text-muted mb-2">
            From <span className="font-semibold text-brand">${priceFrom.toLocaleString()}</span>{' '}
            per person sharing
          </p>
          <div>
            <p className="text-[10px] text-text-muted font-semibold uppercase tracking-widest mb-1 flex items-center gap-1">
              <MapPin className="w-3 h-3" />Destinations
            </p>
            <ul className="space-y-0.5">
              {destinations.slice(0, 2).map((d, i) => (
                <li key={i} className="text-xs text-text-muted">{d}</li>
              ))}
              {destinations.length > 2 && (
                <li className="text-xs text-text-muted">+{destinations.length - 2} more</li>
              )}
            </ul>
          </div>
        </div>
      </Link>
    </div>
  )
}
