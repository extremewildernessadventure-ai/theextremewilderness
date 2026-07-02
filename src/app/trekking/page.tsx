import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Layers, Moon, Mountain, Navigation2, Flashlight, Sun,
  Droplets, Pill, HeartPulse, Zap, Package, ShieldCheck } from 'lucide-react'
import KiliRouteMap from '@/components/trekking/KiliRouteMap'

export const metadata: Metadata = {
  title: 'Kilimanjaro Trekking & Mountain Climbing Tanzania',
  description:
    "Climb Africa's highest peak with Tanzania's most experienced local guides. Machame, Lemosho, Marangu and Rongai routes. TANAPA certified, full safety backup.",
}

const GEAR_CATEGORIES = [
  {
    label: 'Clothing & Warmth',
    items: [
      { icon: Layers,      name: 'Layering System',     desc: 'Thermal base layers, fleece mid-layer, waterproof shell jacket & trousers' },
      { icon: Moon,        name: 'Sleeping Bag',         desc: 'Rated to -10°C / 14°F. Warmth is critical above 4,000m at night' },
      { icon: Mountain,    name: 'Trekking Boots',       desc: 'Waterproof, ankle-supporting, well broken-in before the climb' },
      { icon: ShieldCheck, name: 'Gaiters',              desc: 'Keep debris and water out of boots on volcanic scree sections' },
    ],
  },
  {
    label: 'Essential Gear',
    items: [
      { icon: Navigation2, name: 'Trekking Poles',       desc: 'Collapsible poles reduce knee strain significantly on descent' },
      { icon: Flashlight,  name: 'Headlamp + Batteries', desc: 'Essential for summit night (3am start). Bring spare batteries' },
      { icon: Package,     name: 'Waterproof Bag',       desc: 'Keep electronics and sleeping bag dry — rain is unpredictable' },
    ],
  },
  {
    label: 'Health & Safety',
    items: [
      { icon: Pill,        name: 'Altitude Medicine',    desc: 'Diamox (acetazolamide) — consult your doctor before the climb' },
      { icon: HeartPulse,  name: 'First Aid Kit',        desc: 'Blister treatment, ibuprofen, anti-nausea tablets, bandages' },
      { icon: Sun,         name: 'Sun Protection',        desc: 'SPF 50+ sunscreen, UV-blocking sunglasses, wide-brim hat' },
    ],
  },
  {
    label: 'Fuel & Hydration',
    items: [
      { icon: Droplets,    name: 'Hydration System',     desc: '2–3 litre water bladder or bottles. Water freezes at summit' },
      { icon: Zap,         name: 'Snacks & Energy',      desc: 'High-calorie snacks: nuts, chocolate, energy gels for summit push' },
    ],
  },
]

const SEASONS = [
  {
    label: 'Prime Season',
    months: 'June → October',
    desc: 'Cold, dry and clear. Every route fully open. Your best chance of standing on Uhuru Peak.',
    bullets: [
      'Clear summit skies on most days',
      'All 6 routes fully operational',
      'Dry underfoot — trails at their best',
      'Peak porter & guide availability',
    ],
    chips: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    style: 'prime' as const,
    warning: null,
  },
  {
    label: 'Shoulder Season',
    months: 'Dec · Jan · Feb',
    desc: 'Warm and generally dry. Wildlife-rich around the mountain. Fewer crowds, still great summit odds.',
    bullets: [
      'Good visibility & milder temperatures',
      'Calving season — exceptional wildlife',
      'Quieter trails than peak months',
    ],
    chips: ['Dec', 'Jan', 'Feb'],
    style: 'good' as const,
    warning: null,
  },
  {
    label: 'Rain Season',
    months: 'Mar · Apr · May · Nov',
    desc: 'Long and short rains bring muddy trails, reduced summit visibility, and lower success rates.',
    bullets: [
      'Heavy rainfall — trails become difficult',
      'Poor summit-day visibility common',
      'Some high camps partially inaccessible',
    ],
    chips: ['Mar', 'Apr', 'May', 'Nov'],
    style: 'avoid' as const,
    warning: 'We still run climbs on request — conditions vary significantly year to year.',
  },
]

const MONTH_CHIPS = [
  { name: 'Jan', type: 'good' }, { name: 'Feb', type: 'good' },
  { name: 'Mar', type: 'avoid' }, { name: 'Apr', type: 'avoid' }, { name: 'May', type: 'avoid' },
  { name: 'Jun', type: 'prime' }, { name: 'Jul', type: 'prime' }, { name: 'Aug', type: 'prime' },
  { name: 'Sep', type: 'prime' }, { name: 'Oct', type: 'prime' },
  { name: 'Nov', type: 'avoid' }, { name: 'Dec', type: 'good' },
]

const ARTICLES = [
  {
    category: 'Route Guide',
    title: 'Machame vs Lemosho: Which Route Is Actually Better?',
    desc: "Our guides have led thousands on both routes. Here's an honest side-by-side — terrain, success rates, crowd levels and which suits your fitness level.",
    readTime: '8 min read',
    href: '/blog',
    image: '/images/gallery/kilimanjaro.png',
  },
  {
    category: 'Training',
    title: 'How to Train for Kilimanjaro: A 12-Week Fitness Plan',
    desc: "You don't need to be an athlete to summit Kilimanjaro. But preparation is everything. Here's exactly what to do in the 12 weeks before your climb.",
    readTime: '10 min read',
    href: '/blog',
    image: '/images/gallery/kilimanjaro%20(4).png',
  },
  {
    category: 'Health & Safety',
    title: 'Altitude Sickness on Kilimanjaro: Prevention & Treatment',
    desc: 'AMS affects up to 75% of climbers. Understanding the symptoms, prevention steps, and when to descend could be the difference between summit and safety.',
    readTime: '7 min read',
    href: '/blog',
    image: '/images/gallery/kilimanjaro%20(2).png',
  },
  {
    category: 'Planning',
    title: 'What Does a Kilimanjaro Climb Actually Cost in 2026?',
    desc: 'The real numbers — park fees, tips, gear, flights. We break down every cost so you can budget accurately and avoid hidden surprises.',
    readTime: '6 min read',
    href: '/blog',
    image: '/images/gallery/kilimanjaro%20(3).png',
  },
]

const routes = [
  {
    name: 'Machame Route',
    nickname: 'The Whiskey Route',
    days: '6–7 days',
    difficulty: 'Hard',
    successRate: '85%',
    priceFrom: 1658,
    desc: 'The most scenic and popular route, nicknamed the "Whiskey Route" for its challenging terrain. Excellent acclimatisation profile with a high-camp, low-sleep approach.',
    href: '/trekking/machame',
    image: '/images/gallery/kilimanjaro.png',
    badge: 'Most Popular',
  },
  {
    name: 'Lemosho Route',
    nickname: 'The Scenic Route',
    days: '7–8 days',
    difficulty: 'Moderate',
    successRate: '90%',
    priceFrom: 1931,
    desc: 'Widely considered the best overall route. Starts remote on the western slope, crosses the Shira Plateau and delivers the highest summit success rate of all standard routes.',
    href: '/trekking/lemosho',
    image: '/images/gallery/kilimanjaro%20(4).png',
    badge: 'Recommended',
  },
  {
    name: 'Marangu Route',
    nickname: 'The Coca-Cola Route',
    days: '5–6 days',
    difficulty: 'Moderate',
    successRate: '65%',
    priceFrom: 1523,
    desc: 'The classic route and the only one with hut dormitory accommodation throughout. The most affordable option, though its rapid ascent reduces summit success rates.',
    href: '/trekking/marangu',
    image: '/images/gallery/kilimanjaro%20(1).png',
    badge: null,
  },
  {
    name: 'Rongai Route',
    nickname: 'The Northern Approach',
    days: '6–7 days',
    difficulty: 'Easy–Moderate',
    successRate: '80%',
    priceFrom: 1960,
    desc: 'The only route approaching from the north near the Kenyan border. Quieter, drier, and ideal during the rainy season. A true wilderness feel with gentle gradients.',
    href: '/trekking/rongai',
    image: '/images/gallery/kilimanjaro%20(2).png',
    badge: null,
  },
  {
    name: 'Umbwe Route',
    nickname: 'The Direct Route',
    days: '6–7 days',
    difficulty: 'Very Hard',
    successRate: '70%',
    priceFrom: 1880,
    desc: 'The steepest and most direct route — for experienced trekkers only. Gains elevation rapidly through dense forest and dramatic ridgelines before joining the Southern Circuit.',
    href: '/trekking/umbwe',
    image: '/images/gallery/kilimanjaro%20(3).png',
    badge: 'Advanced',
  },
  {
    name: 'Northern Circuit',
    nickname: 'The Longest Route',
    days: '9–10 days',
    difficulty: 'Moderate',
    successRate: '95%',
    priceFrom: 2237,
    desc: 'The newest and longest route, circumnavigating the entire mountain for a four-sided view. The extra days deliver the best acclimatisation and the highest summit success rate of any route.',
    href: '/trekking/northern-circuit',
    image: '/images/gallery/kilimanjaro%20(5).png',
    badge: 'Best Success Rate',
  },
]

export default function TrekkingPage() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-end pb-16 pt-32 overflow-hidden bg-brand">
        <div className="absolute inset-0">
          <Image
            src="/images/gallery/kilimanjaro%20(5).png"
            alt="Kilimanjaro summit at dawn"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand/70 via-brand/50 to-brand/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <span className="inline-block text-gold font-semibold text-xs uppercase tracking-widest mb-4">
              Summit Africa
            </span>
            <h1 className="text-5xl lg:text-6xl font-semibold text-white mb-5">
              Kilimanjaro<br />
              <span className="text-gold">5,895m</span>
            </h1>
            <p className="text-white/70 text-lg">
              Africa's highest peak. The world's tallest free-standing mountain. Guided by Tanzania-born experts who have stood on the summit hundreds of times.
            </p>
          </div>
        </div>
      </section>

      {/* Why Kilimanjaro */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-12">
            {[
              { value: '5,895m', label: 'Summit altitude', sub: 'Uhuru Peak' },
              { value: '7–9 days', label: 'Trek duration', sub: 'Depending on route' },
              { value: '90%+', label: 'Our success rate', sub: 'With proper acclimatization' },
            ].map(({ value, label, sub }) => (
              <div key={label} className="p-6 bg-light-green rounded-2xl">
                <div className="text-3xl font-bold text-brand mb-1">{value}</div>
                <div className="font-medium text-brand text-sm">{label}</div>
                <div className="text-text-muted text-xs">{sub}</div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-semibold text-brand mb-8">Choose Your Route</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {routes.map((route) => (
              <Link
                key={route.name}
                href={route.href}
                className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-0.5 flex flex-col"
              >
                <div className="relative h-44">
                  <Image src={route.image} alt={route.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
                  {route.badge && (
                    <div className="absolute top-3 left-3 px-2.5 py-1 bg-gold text-brand text-[10px] font-bold uppercase tracking-wider rounded-full">
                      {route.badge}
                    </div>
                  )}
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="mb-3">
                    <h3 className="font-semibold text-brand text-lg leading-tight">{route.name}</h3>
                    <p className="text-gold text-xs font-medium mt-0.5">{route.nickname}</p>
                  </div>
                  <p className="text-text-muted text-sm mb-4 leading-relaxed flex-1">{route.desc}</p>
                  <div className="flex flex-wrap gap-3 text-xs text-text-muted mb-4">
                    <span>{route.days}</span>
                    <span>{route.difficulty}</span>
                    <span>{route.successRate} success</span>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <div>
                      <span className="text-xs text-text-muted">From </span>
                      <span className="font-bold text-brand">${route.priceFrom.toLocaleString()}</span>
                      <span className="text-xs text-text-muted">/person</span>
                    </div>
                    <span className="flex items-center gap-1 text-sm font-semibold text-brand group-hover:text-gold transition-colors">
                      View route <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <KiliRouteMap />

      {/* Your Summit Kit */}
      <section className="py-20 bg-brand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-12">
            <span className="inline-block text-gold font-semibold text-xs uppercase tracking-widest mb-3">Your Summit Kit</span>
            <h2 className="text-3xl font-semibold text-white">What to Pack</h2>
            <p className="text-white/50 text-sm mt-2">
              12 essentials your porters won&rsquo;t carry for you — everything else is handled.
            </p>
          </div>

          {/* Category rows */}
          <div className="space-y-8">
            {GEAR_CATEGORIES.map(({ label, items }) => (
              <div key={label} className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
                {/* Category label */}
                <div className="sm:w-44 flex-shrink-0 border-l-2 border-gold pl-3">
                  <p className="text-white/60 text-xs font-bold uppercase tracking-widest leading-tight">{label}</p>
                </div>
                {/* Items */}
                <div className="flex flex-wrap gap-3">
                  {items.map(({ icon: Icon, name, desc }) => (
                    <div
                      key={name}
                      className="flex items-start gap-3 bg-white/8 border border-white/15 rounded-xl px-4 py-3 hover:bg-white/[0.12] hover:border-white/25 transition-all"
                    >
                      <Icon className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white text-sm font-semibold leading-tight">{name}</p>
                        <p className="text-white/45 text-xs mt-0.5 leading-snug max-w-[180px]">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Pro tip */}
          <div className="mt-12 bg-white/8 border border-white/15 rounded-2xl p-6 flex items-start gap-4">
            <span className="text-xl flex-shrink-0">💡</span>
            <div>
              <p className="text-white font-semibold text-sm mb-1">Pro tip from our guides</p>
              <p className="text-white/55 text-sm leading-relaxed">
                The single biggest mistake climbers make is packing too heavy. Every extra kilogram will slow your summit attempt.
                Our porters carry your main bag (max 15 kg) — keep your day pack to 5–7 kg with just the essentials.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* When to Summit */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-gold font-semibold text-xs uppercase tracking-widest mb-3">Summit Intelligence</span>
            <h2 className="text-3xl font-semibold text-brand">When to Summit</h2>
            <p className="text-text-muted text-sm mt-3 max-w-lg mx-auto">
              Kilimanjaro never closes — but the mountain rewards those who choose their window wisely.
            </p>
          </div>

          {/* Three season cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {SEASONS.map(({ label, months, desc, bullets, chips, style, warning }) => (
              <div
                key={label}
                className={`rounded-3xl p-8 flex flex-col ${
                  style === 'prime'
                    ? 'bg-brand border-2 border-gold shadow-xl'
                    : style === 'good'
                    ? 'bg-light-green border border-brand/20'
                    : 'bg-gray-50 border border-gray-200'
                }`}
              >
                <p className={`text-xs font-bold uppercase tracking-widest mb-3 ${
                  style === 'prime' ? 'text-gold' : style === 'good' ? 'text-brand' : 'text-text-muted'
                }`}>{label}</p>

                <p className={`text-2xl font-bold mb-3 ${
                  style === 'prime' ? 'text-white' : 'text-brand'
                }`}>{months}</p>

                <p className={`text-sm leading-relaxed mb-6 ${
                  style === 'prime' ? 'text-white/70' : 'text-text-muted'
                }`}>{desc}</p>

                <ul className="space-y-2.5 flex-1">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm">
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                        style === 'prime' ? 'bg-gold' : style === 'good' ? 'bg-brand' : 'bg-gray-400'
                      }`} />
                      <span className={style === 'prime' ? 'text-white/80' : 'text-text-muted'}>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Month chips */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {chips.map((c) => (
                    <span key={c} className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                      style === 'prime'
                        ? 'bg-gold/20 text-gold border border-gold/30'
                        : style === 'good'
                        ? 'bg-brand/10 text-brand border border-brand/15'
                        : 'bg-gray-100 text-text-muted border border-gray-300'
                    }`}>{c}</span>
                  ))}
                </div>

                {/* Warning note for rain season */}
                {warning && (
                  <div className="mt-5 bg-amber-50 border border-amber-200 rounded-xl p-3">
                    <p className="text-xs text-amber-800 leading-relaxed">{warning}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Quick-reference month strip */}
          <div className="flex flex-wrap justify-center gap-2">
            {MONTH_CHIPS.map(({ name, type }) => (
              <span key={name} className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                type === 'prime'
                  ? 'bg-gold/15 text-brand border-gold/40'
                  : type === 'good'
                  ? 'bg-brand/10 text-brand border-brand/20'
                  : 'bg-gray-100 text-text-muted border-gray-200'
              }`}>{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Expedition Notes */}
      <section className="py-20 bg-light-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="inline-block text-gold font-semibold text-xs uppercase tracking-widest mb-3">Expedition Notes</span>
              <h2 className="text-3xl font-semibold text-brand">Before You Climb</h2>
              <p className="text-text-muted text-sm mt-2 max-w-md">
                Field-tested knowledge from our guides, written for climbers who want to be genuinely prepared.
              </p>
            </div>
            <Link href="/blog" className="flex-shrink-0 flex items-center gap-1.5 text-brand font-semibold text-sm hover:text-gold transition-colors">
              Browse all articles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Featured article — full-width hero card */}
          <Link
            href={ARTICLES[0].href}
            className="group relative rounded-3xl overflow-hidden flex items-end mb-6 block"
            style={{ minHeight: 360 }}
          >
            <Image
              src={ARTICLES[0].image}
              alt={ARTICLES[0].title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand/90 via-brand/40 to-transparent" />
            <div className="relative z-10 p-8 md:p-10">
              <span className="inline-block px-3 py-1 bg-gold text-brand text-[10px] font-bold uppercase tracking-widest rounded-full mb-4">
                {ARTICLES[0].category}
              </span>
              <h3 className="text-white font-bold text-2xl md:text-3xl leading-tight mb-3 max-w-2xl">
                {ARTICLES[0].title}
              </h3>
              <p className="text-white/65 text-sm mb-5 max-w-xl hidden sm:block">{ARTICLES[0].desc}</p>
              <span className="inline-flex items-center gap-2 text-gold font-semibold text-sm group-hover:gap-3 transition-all">
                Read the guide <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>

          {/* Three supporting cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {ARTICLES.slice(1).map(({ category, title, readTime, href, image }) => (
              <Link
                key={title}
                href={href}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg hover:border-brand/20 transition-all flex flex-col"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <span className="inline-block px-2.5 py-0.5 bg-gold/10 text-gold text-[10px] font-bold uppercase tracking-wider rounded-full mb-3 self-start">
                    {category}
                  </span>
                  <h3 className="font-bold text-brand text-sm leading-snug mb-auto">{title}</h3>
                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
                    <span className="text-xs text-text-muted">{readTime}</span>
                    <span className="flex items-center gap-1 text-brand text-xs font-semibold group-hover:text-gold transition-colors">
                      Read <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-white mb-4">Ready for the Summit?</h2>
          <p className="text-white/70 mb-8">Tell us your fitness level, dates, and budget — we'll match you with the perfect Kilimanjaro route.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors">
            Plan My Kilimanjaro Trek <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
