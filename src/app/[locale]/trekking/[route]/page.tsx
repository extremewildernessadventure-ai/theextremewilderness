import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Layers, Moon, Mountain, Navigation2, Flashlight, Sun,
  Droplets, Pill, HeartPulse, Zap, Package, ShieldCheck, Check, X, ChevronDown } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import KiliRouteMap from '@/components/trekking/KiliRouteMap'


interface RouteProps {
  params: Promise<{ locale?: string; route: string }>
}

// Only these 4 routes have full detail content (quick facts, day-by-day
// itinerary, pricing) — sourced from EWA_Kilimanjaro_All_Route_Pages.md.
const ROUTES_WITH_DETAIL_CONTENT = ['machame', 'lemosho', 'rongai', 'marangu', 'umbwe', 'northern-circuit'] as const
type RouteWithDetailContent = (typeof ROUTES_WITH_DETAIL_CONTENT)[number]

const QUICK_FACT_KEYS = [
  'routeName', 'duration', 'distance', 'startGate', 'finishGate', 'summit',
  'difficulty', 'trailTraffic', 'successRate', 'bestSeason', 'accommodation', 'priceFrom',
] as const

interface RouteDetailContent {
  nickname: string
  intro: string[]
  quickFacts: Record<(typeof QUICK_FACT_KEYS)[number], string>
  whyChoose: { title: string; body: string }[]
  arrivalDay: string
  itinerary: { day: number; title: string; meta: string; body: string; expect: string }[]
  included: string[]
  excluded: string[]
  pricing: { solo: number; small: number; group: number }
}

const ROUTE_META: Record<string, import('next').Metadata> = {
  machame: {
    title: 'Kilimanjaro Machame Route 2026 | 7 Days | Extreme Wilderness Adventure',
    description: "Climb Kilimanjaro via the scenic Machame 'Whiskey Route' — 7 days, 85% success rate. Led by TANAPA-certified guides from Tanzania.",
    keywords: [
      'Kilimanjaro Machame route', 'Machame route 7 days', 'Kilimanjaro whiskey route',
      'climb Kilimanjaro Machame', 'Machame route success rate', 'Kilimanjaro Machame guide',
      'best Kilimanjaro route', 'Kilimanjaro 7 day trek', 'Tanzania mountain climbing', 'Kilimanjaro trekking 2026',
    ],
  },
  lemosho: {
    title: 'Kilimanjaro Lemosho Route 2026 | 8 Days | Extreme Wilderness Adventure',
    description: "The Lemosho Route — 8 days, 90% summit success rate. The most scenic and spacious Kilimanjaro route, perfect for acclimatisation.",
    keywords: [
      'Kilimanjaro Lemosho route', 'Lemosho route 8 days', 'best Kilimanjaro route USA',
      'Lemosho route success rate', 'Kilimanjaro Lemosho guide', 'scenic Kilimanjaro route',
      'Kilimanjaro 8 day trek', 'Lemosho western breach', 'Tanzania Kilimanjaro climb', 'Kilimanjaro longest route',
    ],
  },
  marangu: {
    title: 'Kilimanjaro Marangu Route 2026 | 5–6 Days | Extreme Wilderness Adventure',
    description: "The Marangu 'Coca-Cola' Route — the classic Kilimanjaro hut route. 5–6 days, hut accommodation, ideal for a first climb.",
    keywords: [
      'Kilimanjaro Marangu route', 'Marangu Coca-Cola route', 'Kilimanjaro 5 day route',
      'Marangu hut route', 'cheapest Kilimanjaro route', 'Kilimanjaro beginner route',
      'Marangu route guide', 'Kilimanjaro budget trek', 'Tanzania Marangu climb', 'Kilimanjaro easiest route',
    ],
  },
  rongai: {
    title: 'Kilimanjaro Rongai Route 2026 | 6–7 Days | Extreme Wilderness Adventure',
    description: "The Rongai Route approaches Kilimanjaro from the north — quieter, drier, ideal in the rainy season. 6–7 days, 80% success rate.",
    keywords: [
      'Kilimanjaro Rongai route', 'Rongai route 6 days', 'north side Kilimanjaro',
      'Rongai dry route', 'Kilimanjaro Kenya side', 'Rongai route guide',
      'quiet Kilimanjaro route', 'Kilimanjaro northern approach', 'Tanzania Rongai climb', 'Kilimanjaro least crowded route',
    ],
  },
  umbwe: {
    title: 'Kilimanjaro Umbwe Route 2026 | Most Direct | Extreme Wilderness Adventure',
    description: "The Umbwe Route — the steepest and most direct Kilimanjaro route. For experienced trekkers only. 6–7 days of dramatic terrain.",
    keywords: [
      'Kilimanjaro Umbwe route', 'hardest Kilimanjaro route', 'Umbwe route guide',
      'direct Kilimanjaro route', 'Kilimanjaro advanced route', 'Umbwe route 6 days',
      'challenging Kilimanjaro climb', 'Kilimanjaro expert route', 'Tanzania Umbwe climb', 'Kilimanjaro steep route',
    ],
  },
  'northern-circuit': {
    title: 'Kilimanjaro Northern Circuit 2026 | 9–10 Days | Extreme Wilderness Adventure',
    description: "The Northern Circuit — Kilimanjaro's longest route with a 95% summit success rate. 9–10 days circumnavigating the entire mountain.",
    keywords: [
      'Kilimanjaro Northern Circuit', 'longest Kilimanjaro route', 'Kilimanjaro 95% success rate',
      'best success rate Kilimanjaro', 'Kilimanjaro 10 day route', 'Northern Circuit guide',
      'Kilimanjaro acclimatisation route', 'highest Kilimanjaro success', 'Tanzania Northern Circuit trek', 'Kilimanjaro full circumnavigation',
    ],
  },
}

export async function generateMetadata({ params }: RouteProps): Promise<import('next').Metadata> {
  const { locale, route } = await params
  const fallback = ROUTE_META[route] ?? ROUTE_META.machame
  if (!locale || locale === 'en' || !isRouteWithDetailContent(route)) return fallback

  const trd = await getTranslations({ locale, namespace: 'trekkingRouteDetail' })
  const tMeta = await getTranslations({ locale, namespace: 'trekking' })
  const routeName = trd(`${route}.quickFacts.routeName` as 'machame.quickFacts.routeName')
  const nickname = trd(`${route}.nickname` as 'machame.nickname')
  const duration = trd(`${route}.quickFacts.duration` as 'machame.quickFacts.duration')
  const successRate = trd(`${route}.quickFacts.successRate` as 'machame.quickFacts.successRate')

  return {
    title: `${routeName} 2026 | ${duration} | Extreme Wilderness Adventure`,
    description: `${routeName} — ${nickname}. ${duration}, ${successRate}${tMeta('successSuffix')}.`,
    keywords: fallback.keywords,
  }
}

const ROUTE_SLUGS = ['machame', 'lemosho', 'marangu', 'rongai', 'umbwe', 'northern-circuit'] as const
const ROUTE_BADGE_KEYS: Record<string, string | null> = {
  machame: 'badgeMostPopular',
  lemosho: 'badgeRecommended',
  marangu: null,
  rongai: null,
  umbwe: 'badgeAdvanced',
  'northern-circuit': 'badgeBestRate',
}
const ROUTE_CARD_IMAGES: Record<string, string> = {
  machame: '/images/gallery/kilimanjaro.webp',
  lemosho: '/images/gallery/kilimanjaro%20(4).webp',
  marangu: '/images/gallery/kilimanjaro%20(1).webp',
  rongai: '/images/gallery/kilimanjaro%20(2).webp',
  umbwe: '/images/gallery/kilimanjaro%20(3).webp',
  'northern-circuit': '/images/gallery/kilimanjaro%20(5).webp',
}

function isRouteWithDetailContent(route: string): route is RouteWithDetailContent {
  return (ROUTES_WITH_DETAIL_CONTENT as readonly string[]).includes(route)
}

export default async function TrekkingPage({ params }: RouteProps) {
  const { route } = await params
  const t = await getTranslations('trekking')
  let routeContent: RouteDetailContent | null = null
  let tDetail: Awaited<ReturnType<typeof getTranslations>> | null = null

  if (isRouteWithDetailContent(route)) {
    tDetail = await getTranslations('trekkingRouteDetail')
    routeContent = {
      nickname: tDetail(`${route}.nickname`),
      intro: tDetail.raw(`${route}.intro`),
      quickFacts: tDetail.raw(`${route}.quickFacts`),
      whyChoose: tDetail.raw(`${route}.whyChoose`),
      arrivalDay: tDetail(`${route}.arrivalDay`),
      itinerary: tDetail.raw(`${route}.itinerary`),
      included: tDetail.raw(`${route}.included`),
      excluded: tDetail.raw(`${route}.excluded`),
      pricing: tDetail.raw(`${route}.pricing`),
    }
  }

  const trd = await getTranslations('trekkingRouteDetail')

  const GEAR_CATEGORIES = [
    {
      label: t('gear1Cat'),
      items: [
        { icon: Layers,      name: t('gear1item1Name'), desc: t('gear1item1Desc') },
        { icon: Moon,        name: t('gear1item2Name'), desc: t('gear1item2Desc') },
        { icon: Mountain,    name: t('gear1item3Name'), desc: t('gear1item3Desc') },
        { icon: ShieldCheck, name: t('gear1item4Name'), desc: t('gear1item4Desc') },
      ],
    },
    {
      label: t('gear2Cat'),
      items: [
        { icon: Navigation2, name: t('gear2item1Name'), desc: t('gear2item1Desc') },
        { icon: Flashlight,  name: t('gear2item2Name'), desc: t('gear2item2Desc') },
        { icon: Package,     name: t('gear2item3Name'), desc: t('gear2item3Desc') },
      ],
    },
    {
      label: t('gear3Cat'),
      items: [
        { icon: Pill,        name: t('gear3item1Name'), desc: t('gear3item1Desc') },
        { icon: HeartPulse,  name: t('gear3item2Name'), desc: t('gear3item2Desc') },
        { icon: Sun,         name: t('gear3item3Name'), desc: t('gear3item3Desc') },
      ],
    },
    {
      label: t('gear4Cat'),
      items: [
        { icon: Droplets,    name: t('gear4item1Name'), desc: t('gear4item1Desc') },
        { icon: Zap,         name: t('gear4item2Name'), desc: t('gear4item2Desc') },
      ],
    },
  ]

  const SEASONS = [
    {
      label: t('season1Label'),
      months: t('season1Months'),
      desc: t('season1Desc'),
      bullets: [t('season1b1'), t('season1b2'), t('season1b3'), t('season1b4')],
      chips: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      style: 'prime' as const,
      warning: null,
    },
    {
      label: t('season2Label'),
      months: t('season2Months'),
      desc: t('season2Desc'),
      bullets: [t('season2b1'), t('season2b2'), t('season2b3')],
      chips: ['Dec', 'Jan', 'Feb'],
      style: 'good' as const,
      warning: null,
    },
    {
      label: t('season3Label'),
      months: t('season3Months'),
      desc: t('season3Desc'),
      bullets: [t('season3b1'), t('season3b2'), t('season3b3')],
      chips: ['Mar', 'Apr', 'May', 'Nov'],
      style: 'avoid' as const,
      warning: t('season3Warning'),
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
      category: t('article1Cat'),
      title: t('article1Title'),
      desc: t('article1Desc'),
      readTime: t('article1Time'),
      href: '/blog',
      image: '/images/gallery/kilimanjaro.webp',
    },
    {
      category: t('article2Cat'),
      title: t('article2Title'),
      desc: t('article2Desc'),
      readTime: t('article2Time'),
      href: '/blog',
      image: '/images/gallery/kilimanjaro%20(4).webp',
    },
    {
      category: t('article3Cat'),
      title: t('article3Title'),
      desc: t('article3Desc'),
      readTime: t('article3Time'),
      href: '/blog',
      image: '/images/gallery/kilimanjaro%20(2).webp',
    },
    {
      category: t('article4Cat'),
      title: t('article4Title'),
      desc: t('article4Desc'),
      readTime: t('article4Time'),
      href: '/blog',
      image: '/images/gallery/kilimanjaro%20(3).webp',
    },
  ]

  const routes = ROUTE_SLUGS.map((slug, i) => {
    const n = i + 1
    const badgeKey = ROUTE_BADGE_KEYS[slug]
    return {
      name: t(`route${n}Name` as 'route1Name'),
      nickname: trd(`${slug}.nickname` as 'machame.nickname'),
      days: trd(`${slug}.quickFacts.duration` as 'machame.quickFacts.duration'),
      difficulty: trd(`${slug}.quickFacts.difficulty` as 'machame.quickFacts.difficulty'),
      successRate: trd(`${slug}.quickFacts.successRate` as 'machame.quickFacts.successRate'),
      priceFrom: Number(trd.raw(`${slug}.pricing.group` as 'machame.pricing.group')),
      desc: t(`route${n}Desc` as 'route1Desc'),
      href: `/trekking/${slug}`,
      image: ROUTE_CARD_IMAGES[slug],
      badge: badgeKey ? t(badgeKey as 'badgeMostPopular') : null,
    }
  })

  return (
    <>
      <section className="relative min-h-[60vh] flex items-end pb-16 pt-32 overflow-hidden bg-brand">
        <div className="absolute inset-0">
          <Image
            src="/images/gallery/kilimanjaro%20(5).webp"
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
            <span className="inline-block text-gold-label font-semibold text-xs uppercase tracking-widest mb-4">
              {t('heroEyebrow')}
            </span>
            <h1 className="text-5xl lg:text-6xl font-semibold text-white mb-5">
              {t('heroTitle')}<br />
              <span className="text-gold">{t('stat1Value')}</span>
            </h1>
            <p className="text-white/70 text-lg">
              {t('heroTagline')}
            </p>
          </div>
        </div>
      </section>

      {/* Route-specific detail content — only for the 4 covered routes */}
      {routeContent && tDetail && (
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <span className="inline-block text-gold-label font-semibold text-xs uppercase tracking-widest mb-3">
                {routeContent.nickname}
              </span>
              {routeContent.intro.map((paragraph, i) => (
                <p key={i} className="text-text-muted text-base leading-relaxed mb-4 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Quick Facts */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-brand mb-5">{tDetail('labels.quickFacts')}</h2>
              <div className="bg-light-green rounded-2xl p-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5">
                {QUICK_FACT_KEYS.map((key) => (
                  <div key={key} className="flex justify-between gap-3 text-sm">
                    <span className="text-text-muted font-medium">{tDetail!(`labels.${key}`)}</span>
                    <span className="text-brand font-semibold text-right">{routeContent!.quickFacts[key]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-brand mb-5">{tDetail('labels.whyChoose')}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {routeContent.whyChoose.map((item, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-xl p-5">
                    <p className="font-semibold text-brand text-sm mb-1.5">{item.title}</p>
                    <p className="text-text-muted text-sm leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Day-by-Day Itinerary */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-brand mb-5">{tDetail('labels.itinerary')}</h2>
              <div className="space-y-3">
                <details className="group border border-gray-100 rounded-xl overflow-hidden">
                  <summary className="flex items-center justify-between p-4 cursor-pointer bg-white hover:bg-light-green transition-colors list-none">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-brand/60 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                        0
                      </span>
                      <span className="font-medium text-brand text-sm">{tDetail('labels.arrivalDay')}</span>
                    </div>
                    <ChevronDown className="w-4 h-4 text-text-muted group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-4 pb-4 pt-2 bg-white border-t border-gray-100">
                    <p className="text-sm text-text-muted leading-relaxed">{routeContent.arrivalDay}</p>
                  </div>
                </details>
                {routeContent.itinerary.map((day) => (
                  <details key={day.day} className="group border border-gray-100 rounded-xl overflow-hidden">
                    <summary className="flex items-center justify-between p-4 cursor-pointer bg-white hover:bg-light-green transition-colors list-none">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-brand text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                          {day.day}
                        </span>
                        <span className="font-medium text-brand text-sm">{day.title}</span>
                      </div>
                      <ChevronDown className="w-4 h-4 text-text-muted group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="px-4 pb-4 pt-2 bg-white border-t border-gray-100">
                      <p className="text-xs text-gold-label font-semibold uppercase tracking-wide mb-2">{day.meta}</p>
                      <p className="text-sm text-text-muted leading-relaxed mb-3">{day.body}</p>
                      <p className="text-xs text-text-muted italic">{tDetail('labels.whatToExpect')} {day.expect}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>

            {/* Included / Not Included */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              <div>
                <h3 className="font-semibold text-brand mb-3 flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" /> {tDetail('labels.included')}
                </h3>
                <ul className="space-y-1.5">
                  {routeContent.included.map((item) => (
                    <li key={item} className="text-sm text-text-muted flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-brand mb-3 flex items-center gap-2">
                  <X className="w-4 h-4 text-red-400" /> {tDetail('labels.notIncluded')}
                </h3>
                <ul className="space-y-1.5">
                  {routeContent.excluded.map((item) => (
                    <li key={item} className="text-sm text-text-muted flex items-start gap-2">
                      <X className="w-3.5 h-3.5 text-red-400 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Pricing */}
            <div>
              <h2 className="text-2xl font-semibold text-brand mb-5">{tDetail('labels.pricing')}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: tDetail('labels.solo'), price: routeContent.pricing.solo },
                  { label: tDetail('labels.small'), price: routeContent.pricing.small },
                  { label: tDetail('labels.group'), price: routeContent.pricing.group },
                ].map((tier) => (
                  <div key={tier.label} className="bg-brand rounded-2xl p-6 text-center">
                    <p className="text-white/70 text-xs uppercase tracking-wide mb-2">{tier.label}</p>
                    <p className="text-gold text-2xl font-bold">${tier.price.toLocaleString()}</p>
                    <p className="text-white/50 text-xs mt-1">{tDetail('labels.perPerson')}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Why Kilimanjaro */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-12">
            {[
              { value: t('stat1Value'), label: t('stat1Label'), sub: t('stat1Sub') },
              { value: t('stat2Value'), label: t('stat2Label'), sub: t('stat2Sub') },
              { value: t('stat3Value'), label: t('stat3Label'), sub: t('stat3Sub') },
            ].map(({ value, label, sub }) => (
              <div key={label} className="p-6 bg-light-green rounded-2xl">
                <div className="text-3xl font-bold text-brand mb-1">{value}</div>
                <div className="font-medium text-brand text-sm">{label}</div>
                <div className="text-text-muted text-xs">{sub}</div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-semibold text-brand mb-8">{t('chooseRouteHeading')}</h2>
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
                    <p className="text-white/75 text-xs font-medium mt-0.5">{route.nickname}</p>
                  </div>
                  <p className="text-text-muted text-sm mb-4 leading-relaxed flex-1">{route.desc}</p>
                  <div className="flex flex-wrap gap-3 text-xs text-text-muted mb-4">
                    <span>{route.days}</span>
                    <span>{route.difficulty}</span>
                    <span>{route.successRate}{t('successSuffix')}</span>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <div>
                      <span className="text-xs text-text-muted">{t('fromLabel')}</span>
                      <span className="font-bold text-brand">${route.priceFrom.toLocaleString()}</span>
                      <span className="text-xs text-text-muted">{t('personLabel')}</span>
                    </div>
                    <span className="flex items-center gap-1 text-sm font-semibold text-brand group-hover:text-gold transition-colors">
                      {t('viewRoute')} <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <KiliRouteMap route={route} />

      {/* Your Summit Kit */}
      <section className="py-20 bg-brand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-12">
            <span className="inline-block text-gold-label font-semibold text-xs uppercase tracking-widest mb-3">{t('summitKitEyebrow')}</span>
            <h2 className="text-3xl font-semibold text-white">{t('packHeading')}</h2>
            <p className="text-white/70 text-sm mt-2">
              {t('packSubtitle')}
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
                        <p className="text-white/70 text-xs mt-0.5 leading-snug max-w-[180px]">{desc}</p>
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
              <p className="text-white font-semibold text-sm mb-1">{t('proTipLabel')}</p>
              <p className="text-white/75 text-sm leading-relaxed">
                {t('proTipText')}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* When to Summit */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-gold-label font-semibold text-xs uppercase tracking-widest mb-3">{t('sumIntelEyebrow')}</span>
            <h2 className="text-3xl font-semibold text-brand">{t('whenToSummitHeading')}</h2>
            <p className="text-text-muted text-sm mt-3 max-w-lg mx-auto">
              {t('whenToSummitSubtitle')}
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
                        ? 'bg-gold/20 text-amber-200 border border-gold/30'
                        : style === 'good'
                        ? 'bg-brand/10 text-brand border border-brand/15'
                        : 'bg-gray-100 text-gray-600 border border-gray-300'
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
                  : 'bg-gray-100 text-gray-600 border-gray-200'
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
              <span className="inline-block text-gold-label font-semibold text-xs uppercase tracking-widest mb-3">{t('expeditionEyebrow')}</span>
              <h2 className="text-3xl font-semibold text-brand">{t('beforeClimbHeading')}</h2>
              <p className="text-text-muted text-sm mt-2 max-w-md">
                {t('beforeClimbSubtitle')}
              </p>
            </div>
            <Link href="/blog" className="flex-shrink-0 flex items-center gap-1.5 text-brand font-semibold text-sm hover:text-gold transition-colors">
              {t('browseAllArticles')} <ArrowRight className="w-4 h-4" />
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
                {t('readTheGuide')} <ArrowRight className="w-4 h-4" />
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
                  <span className="inline-block px-2.5 py-0.5 bg-gold/10 text-gold-label text-[10px] font-bold uppercase tracking-wider rounded-full mb-3 self-start">
                    {category}
                  </span>
                  <h3 className="font-bold text-brand text-sm leading-snug mb-auto">{title}</h3>
                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
                    <span className="text-xs text-text-muted">{readTime}</span>
                    <span className="flex items-center gap-1 text-brand text-xs font-semibold group-hover:text-gold transition-colors">
                      {t('readLabel')} <ArrowRight className="w-3 h-3" />
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
          <h2 className="text-3xl font-semibold text-white mb-4">{t('ctaHeading')}</h2>
          <p className="text-white/70 mb-8">{t('ctaSubtitle')}</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors">
            {t('ctaButton')} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
