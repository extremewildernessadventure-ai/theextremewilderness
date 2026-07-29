import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import {
  ArrowRight, Layers, Moon, Mountain, Navigation2, Flashlight, Sun,
  Droplets, Pill, HeartPulse, Zap, Package, ShieldCheck, Check, X, ChevronDown,
} from 'lucide-react'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import KiliRouteMap from '@/components/trekking/KiliRouteMap'
import Breadcrumb from '@/components/ui/Breadcrumb'
import ExperienceGallery from '@/components/experiences/ExperienceGallery'
import RoutePricingButton from '@/components/trekking/RoutePricingButton'
import BlogSuggestionCard from '@/components/trekking/BlogSuggestionCard'
import KilimanjaroPdfCard from '@/components/trekking/KilimanjaroPdfCard'
import BookNowButton from '@/components/booking/BookNowButton'
import LemoshoMultiItinerary from '@/components/trekking/LemoshoMultiItinerary'
import MachameMultiItinerary from '@/components/trekking/MachameMultiItinerary'
import { getBlogPostMeta } from '@/data/blog/index.i18n'
import { mlimaniPhoto, mlimaniCapKey } from '@/data/mlimaniGallery'
import { buildAlternates, localeUrl, SITE_URL } from '@/lib/site'
import Reveal from '@/components/motion/Reveal'
import { RevealGroup, RevealItem } from '@/components/motion/RevealGroup'

interface RouteProps {
  params: Promise<{ locale?: string; route: string }>
}

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
    title: 'Kilimanjaro Machame Route 2026 | 7 Days',
    description: "Climb Kilimanjaro via the scenic Machame 'Whiskey Route' — 7 days, 85% success rate. Led by TANAPA-certified guides from Tanzania.",
    keywords: [
      'Kilimanjaro Machame route', 'Machame route 7 days', 'Kilimanjaro whiskey route',
      'climb Kilimanjaro Machame', 'Machame route success rate', 'Kilimanjaro Machame guide',
      'best Kilimanjaro route', 'Kilimanjaro 7 day trek', 'Tanzania mountain climbing', 'Kilimanjaro trekking 2026',
    ],
  },
  lemosho: {
    title: 'Kilimanjaro Lemosho Route 2026 | 8 Days',
    description: "The Lemosho Route — 8 days, 90% summit success rate. The most scenic and spacious Kilimanjaro route, perfect for acclimatisation.",
    keywords: [
      'Kilimanjaro Lemosho route', 'Lemosho route 8 days', 'best Kilimanjaro route USA',
      'Lemosho route success rate', 'Kilimanjaro Lemosho guide', 'scenic Kilimanjaro route',
      'Kilimanjaro 8 day trek', 'Lemosho western breach', 'Tanzania Kilimanjaro climb', 'Kilimanjaro longest route',
    ],
  },
  marangu: {
    title: 'Kilimanjaro Marangu Route 2026 | 5–6 Days',
    description: "The Marangu 'Coca-Cola' Route — the classic Kilimanjaro hut route. 5–6 days, hut accommodation, ideal for a first climb.",
    keywords: [
      'Kilimanjaro Marangu route', 'Marangu Coca-Cola route', 'Kilimanjaro 5 day route',
      'Marangu hut route', 'cheapest Kilimanjaro route', 'Kilimanjaro beginner route',
      'Marangu route guide', 'Kilimanjaro budget trek', 'Tanzania Marangu climb', 'Kilimanjaro easiest route',
    ],
  },
  rongai: {
    title: 'Kilimanjaro Rongai Route 2026 | 6–7 Days',
    description: "The Rongai Route approaches Kilimanjaro from the north — quieter, drier, ideal in the rainy season. 6–7 days, 80% success rate.",
    keywords: [
      'Kilimanjaro Rongai route', 'Rongai route 6 days', 'north side Kilimanjaro',
      'Rongai dry route', 'Kilimanjaro Kenya side', 'Rongai route guide',
      'quiet Kilimanjaro route', 'Kilimanjaro northern approach', 'Tanzania Rongai climb', 'Kilimanjaro least crowded route',
    ],
  },
  umbwe: {
    title: 'Kilimanjaro Umbwe Route 2026 | Most Direct',
    description: "The Umbwe Route — the steepest and most direct Kilimanjaro route. For experienced trekkers only. 6–7 days of dramatic terrain.",
    keywords: [
      'Kilimanjaro Umbwe route', 'hardest Kilimanjaro route', 'Umbwe route guide',
      'direct Kilimanjaro route', 'Kilimanjaro advanced route', 'Umbwe route 6 days',
      'challenging Kilimanjaro climb', 'Kilimanjaro expert route', 'Tanzania Umbwe climb', 'Kilimanjaro steep route',
    ],
  },
  'northern-circuit': {
    title: 'Kilimanjaro Northern Circuit 2026 | 9–10 Days',
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
  const hero = ROUTE_HERO_IMAGES[route]
  const alternates = buildAlternates(locale || 'en', `/trekking/${route}`)

  const hasDetail = Boolean(locale && isRouteWithDetailContent(route))
  const trd = hasDetail ? await getTranslations({ locale: locale!, namespace: 'trekkingRouteDetail' }) : null
  const heroAlt = hero ? (trd ? trd(`${route}.heroImageAlt` as 'machame.heroImageAlt') : hero.alt) : undefined

  const ogImage = hero ? [{ url: hero.src, width: 1200, height: 630, alt: heroAlt }] : undefined
  const ogMeta = {
    openGraph: { images: ogImage },
    twitter: { card: 'summary_large_image' as const, images: hero ? [hero.src] : undefined },
  }
  if (!locale || locale === 'en' || !trd) return { ...fallback, ...ogMeta, alternates }

  const tMeta = await getTranslations({ locale, namespace: 'trekking' })
  const routeName = trd(`${route}.quickFacts.routeName` as 'machame.quickFacts.routeName')
  const nickname = trd(`${route}.nickname` as 'machame.nickname')
  const duration = trd(`${route}.quickFacts.duration` as 'machame.quickFacts.duration')
  const successRate = trd(`${route}.quickFacts.successRate` as 'machame.quickFacts.successRate')
  const localizedKeywords = trd.raw(`${route}.metaKeywords` as 'machame.metaKeywords') as string[]

  return {
    title: `${routeName} 2026 | ${duration}`,
    description: `${routeName} — ${nickname}. ${duration}, ${successRate}${tMeta('successSuffix')}.`,
    keywords: localizedKeywords ?? fallback.keywords,
    alternates,
    ...ogMeta,
  }
}

const ROUTE_SLUGS = ['machame', 'lemosho', 'marangu', 'rongai', 'umbwe', 'northern-circuit'] as const

const ROUTE_HERO_IMAGES: Record<string, { src: string; alt: string }> = {
  machame:           { src: '/images/gallery/kilimanjaro-card-machame.jpg',          alt: 'Mount Kilimanjaro rising above the savanna, framed by acacia trees' },
  lemosho:           { src: '/images/gallery/kilimanjaro-card-lemosho.jpg',           alt: 'Wide scenic view of Kilimanjaro emerging above the clouds' },
  marangu:           { src: '/images/gallery/kilimanjaro-card-marangu.jpg',           alt: 'Aerial view of the Kilimanjaro summit breaking through the clouds' },
  rongai:            { src: '/images/gallery/kilimanjaro-card-rongai.jpg',            alt: 'A dirt trail leading toward Mount Kilimanjaro on the Rongai route' },
  umbwe:             { src: '/images/gallery/kilimanjaro-card-umbwe.jpg',             alt: 'Climbers ascending toward the summit at sunrise' },
  'northern-circuit':{ src: '/images/gallery/kilimanjaro-card-northern-circuit.jpg', alt: 'A rocky, snow-covered ridge rising above a sea of clouds' },
}

// Real expedition photos from the company's own climbs ("Mlimani The Extreme").
// Overlap between routes is intentional.
const ROUTE_GALLERY_PHOTOS: Record<string, number[]> = {
  machame: [19, 37, 38, 2, 40, 6, 4, 21],
  lemosho: [1, 32, 17, 27, 33, 7, 5, 35],
  marangu: [18, 10, 28, 25, 24, 34, 20, 3],
  rongai: [13, 29, 31, 26, 8, 36, 9, 22],
  umbwe: [30, 40, 39, 15, 2, 5, 36, 21],
  'northern-circuit': [16, 27, 17, 33, 29, 7, 23, 35],
}

function isRouteWithDetailContent(route: string): route is RouteWithDetailContent {
  return (ROUTES_WITH_DETAIL_CONTENT as readonly string[]).includes(route)
}

export default async function TrekkingRoutePage({ params }: RouteProps) {
  const { route, locale = 'en' } = await params
  setRequestLocale(locale)
  const heroImage = ROUTE_HERO_IMAGES[route] ?? ROUTE_HERO_IMAGES.machame
  const galleryPhotoIds = ROUTE_GALLERY_PHOTOS[route] ?? ROUTE_GALLERY_PHOTOS.machame
  const t = await getTranslations('trekking')
  const tForms = await getTranslations('forms')
  const tExp = await getTranslations('experiences')
  const trd = await getTranslations('trekkingRouteDetail')
  const tc = await getTranslations('common')
  const featuredPost = getBlogPostMeta('kilimanjaro-climbing-guide', locale)

  let routeContent: RouteDetailContent | null = null

  if (isRouteWithDetailContent(route)) {
    routeContent = {
      nickname:   trd(`${route}.nickname`),
      intro:      trd.raw(`${route}.intro`),
      quickFacts: trd.raw(`${route}.quickFacts`),
      whyChoose:  trd.raw(`${route}.whyChoose`),
      arrivalDay: trd(`${route}.arrivalDay`),
      itinerary:  trd.raw(`${route}.itinerary`),
      included:   trd.raw(`${route}.included`),
      excluded:   trd.raw(`${route}.excluded`),
      pricing:    trd.raw(`${route}.pricing`),
    }
  }

  const lemoshoExtras = route === 'lemosho' ? {
    variants: {
      '6': {
        quickFacts: trd.raw('lemosho.quickFacts6Day'),
        arrivalDay: trd('lemosho.arrivalDay6Day'),
        itinerary:  trd.raw('lemosho.itinerary6Day'),
        pricing:    trd.raw('lemosho.pricing6Day'),
      },
      '7': {
        quickFacts: trd.raw('lemosho.quickFacts7Day'),
        arrivalDay: trd('lemosho.arrivalDay7Day'),
        itinerary:  trd.raw('lemosho.itinerary7Day'),
        pricing:    trd.raw('lemosho.pricing7Day'),
      },
      '8': {
        quickFacts: routeContent!.quickFacts,
        arrivalDay: routeContent!.arrivalDay,
        itinerary:  routeContent!.itinerary,
        pricing:    routeContent!.pricing,
      },
    },
    included:  routeContent!.included,
    excluded:  routeContent!.excluded,
    choosing:  trd.raw('lemosho.choosing'),
    highlights: trd.raw('lemosho.highlights'),
    faq:        trd.raw('lemosho.faq'),
  } : null

  const machameExtras = route === 'machame' ? {
    variants: {
      '6': {
        quickFacts: trd.raw('machame.quickFacts6Day'),
        arrivalDay: trd('machame.arrivalDay6Day'),
        itinerary:  trd.raw('machame.itinerary6Day'),
        pricing:    trd.raw('machame.pricing6Day'),
      },
      '7': {
        quickFacts: routeContent!.quickFacts,
        arrivalDay: routeContent!.arrivalDay,
        itinerary:  routeContent!.itinerary,
        pricing:    routeContent!.pricing,
      },
    },
    included:  routeContent!.included,
    excluded:  routeContent!.excluded,
    choosing:  trd.raw('machame.choosing'),
    highlights: trd.raw('machame.highlights'),
    faq:        trd.raw('machame.faq'),
  } : null

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

  const routeFaq = route === 'lemosho' ? lemoshoExtras?.faq : route === 'machame' ? machameExtras?.faq : null

  const tripSchema = routeContent ? {
    '@context': 'https://schema.org',
    '@type': 'Trip',
    name: routeContent.quickFacts.routeName,
    description: locale === 'en'
      ? (ROUTE_META[route] ?? ROUTE_META.machame).description
      : `${routeContent.quickFacts.routeName} — ${routeContent.nickname}. ${routeContent.quickFacts.duration}, ${routeContent.quickFacts.successRate}${t('successSuffix')}.`,
    image: `${SITE_URL}${heroImage.src}`,
    provider: {
      '@type': 'Organization',
      name: 'EWA Safari Outfitters',
      url: SITE_URL,
    },
    offers: {
      '@type': 'Offer',
      price: routeContent.pricing.group,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: localeUrl(locale, `/trekking/${route}`),
    },
  } : null

  const faqSchema = routeFaq && routeFaq.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: routeFaq.map((item: { q: string; a: string }) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  } : null

  return (
    <>
      {tripSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(tripSchema) }}
        />
      )}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative min-h-[60vh] flex items-end pb-16 pt-32 overflow-hidden bg-brand">
        <div className="absolute inset-0">
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand/70 via-brand/50 to-brand/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col lg:flex-row items-end justify-between gap-8">
            {/* Left — title block */}
            <div className="flex-1 min-w-0">
              <Breadcrumb items={[
                { label: 'EWA Safari Outfitters', href: `/${locale}` },
                { label: t('heroEyebrow'), href: `/${locale}/trekking` },
                { label: routeContent?.quickFacts.routeName ?? route },
              ]} />
              <span className="inline-block text-gold-label font-semibold text-xs uppercase tracking-widest mb-4">
                {routeContent?.nickname ?? t('heroEyebrow')}
              </span>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-white mb-5">
                {routeContent?.quickFacts.routeName ?? t('heroTitle')}<br />
                <span className="text-gold">{t('stat1Value')}</span>
              </h1>
              <p className="text-white/70 text-lg">
                {t('heroTagline')}
              </p>
            </div>

            {/* Right — glass price CTA (desktop only) */}
            {routeContent && (
              <div className="hidden lg:flex flex-col bg-white/10 backdrop-blur-md rounded-2xl px-6 py-6 border border-white/20 min-w-[200px] text-center flex-shrink-0">
                <p className="text-white/60 text-xs uppercase tracking-wide mb-1">{trd('labels.from')}</p>
                <p className="text-gold font-bold text-4xl leading-none">${routeContent.pricing.group.toLocaleString()}</p>
                <p className="text-white/50 text-xs mt-1 mb-4">{trd('labels.perPerson')}</p>
                <div className="space-y-1 mb-5">
                  <p className="text-white/70 text-xs">{routeContent.quickFacts.duration}</p>
                  <p className="text-white/50 text-xs">{routeContent.quickFacts.difficulty}</p>
                </div>
                <BookNowButton
                  packageName={routeContent.quickFacts.routeName}
                  packageType={tc('packageTypes.kiliTrek')}
                  priceFrom={`$${routeContent.pricing.group.toLocaleString()}`}
                  duration={routeContent.quickFacts.duration}
                  restrictTripType
                  label={trd('labels.bookThisRoute')}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors text-sm"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Two-column layout: main content + sidebar ────────────────── */}
      {routeContent && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 xl:gap-14">

            {/* ── Main content ──────────────────────────────────────── */}
            <Reveal className="lg:col-span-2 space-y-12">
            <main>

              {/* Overview / intro */}
              <div>
                <span className="inline-block text-gold-label font-semibold text-xs uppercase tracking-widest mb-3">
                  {routeContent.nickname}
                </span>
                {routeContent.intro.map((paragraph, i) => (
                  <p key={i} className="text-text-muted text-base leading-relaxed mb-4 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Expedition photo gallery — real photos from our own climbs */}
              <ExperienceGallery
                variant="portrait"
                images={galleryPhotoIds.map((n) => ({
                  src: mlimaniPhoto(n),
                  alt: `${routeContent.quickFacts.routeName} — ${t(mlimaniCapKey(n))}`,
                }))}
                labels={{ close: tForms('closeLabel'), prev: tExp('galleryPrev'), next: tExp('galleryNext') }}
              />

              {/* Lemosho: tabbed multi-itinerary component */}
              {route === 'lemosho' && lemoshoExtras ? (
                <LemoshoMultiItinerary
                  variants={lemoshoExtras.variants as Parameters<typeof LemoshoMultiItinerary>[0]['variants']}
                  included={lemoshoExtras.included}
                  excluded={lemoshoExtras.excluded}
                  choosing={lemoshoExtras.choosing}
                  highlights={lemoshoExtras.highlights}
                  faq={lemoshoExtras.faq}
                  bookThisRouteLabel={trd('labels.bookThisRoute')}
                  tabLabels={{
                    '6': trd('lemosho.tabLabels.6'),
                    '7': trd('lemosho.tabLabels.7'),
                    '8': trd('lemosho.tabLabels.8'),
                  }}
                  tabBadges={{
                    '7': t('badgeRecommended'),
                    '8': t('badgeBestRate'),
                  }}
                  routeNames={{
                    '6': trd('lemosho.routeNameByDuration.6'),
                    '7': trd('lemosho.routeNameByDuration.7'),
                    '8': trd('lemosho.routeNameByDuration.8'),
                  }}
                  headings={{
                    choosing: trd('labels.choosingHeading'),
                    highlights: trd('labels.highlightsHeading'),
                    faq: trd('labels.faqHeading'),
                  }}
                  labels={{
                    quickFacts:   trd('labels.quickFacts'),
                    itinerary:    trd('labels.itinerary'),
                    arrivalDay:   trd('labels.arrivalDay'),
                    whatToExpect: trd('labels.whatToExpect'),
                    included:     trd('labels.included'),
                    notIncluded:  trd('labels.notIncluded'),
                    pricing:      trd('labels.pricing'),
                    solo:         trd('labels.solo'),
                    small:        trd('labels.small'),
                    group:        trd('labels.group'),
                    perPerson:    trd('labels.perPerson'),
                    from:         trd('labels.from'),
                    bookThisRoute: trd('labels.bookThisRoute'),
                    ...Object.fromEntries(
                      QUICK_FACT_KEYS.map((k) => [k, trd(`labels.${k}`)])
                    ),
                  }}
                  pdfCard={<KilimanjaroPdfCard />}
                />
              ) : route === 'machame' && machameExtras ? (
                <MachameMultiItinerary
                  variants={machameExtras.variants as Parameters<typeof MachameMultiItinerary>[0]['variants']}
                  included={machameExtras.included}
                  excluded={machameExtras.excluded}
                  choosing={machameExtras.choosing}
                  highlights={machameExtras.highlights}
                  faq={machameExtras.faq}
                  bookThisRouteLabel={trd('labels.bookThisRoute')}
                  tabLabels={{
                    '6': trd('machame.tabLabels.6'),
                    '7': trd('machame.tabLabels.7'),
                  }}
                  tabBadges={{
                    '7': t('badgeRecommended'),
                  }}
                  routeNames={{
                    '6': trd('machame.routeNameByDuration.6'),
                    '7': trd('machame.routeNameByDuration.7'),
                  }}
                  headings={{
                    choosing: trd('labels.choosingHeading'),
                    highlights: trd('labels.highlightsHeading'),
                    faq: trd('labels.faqHeading'),
                  }}
                  labels={{
                    quickFacts:   trd('labels.quickFacts'),
                    itinerary:    trd('labels.itinerary'),
                    arrivalDay:   trd('labels.arrivalDay'),
                    whatToExpect: trd('labels.whatToExpect'),
                    included:     trd('labels.included'),
                    notIncluded:  trd('labels.notIncluded'),
                    pricing:      trd('labels.pricing'),
                    solo:         trd('labels.solo'),
                    small:        trd('labels.small'),
                    group:        trd('labels.group'),
                    perPerson:    trd('labels.perPerson'),
                    from:         trd('labels.from'),
                    bookThisRoute: trd('labels.bookThisRoute'),
                    ...Object.fromEntries(
                      QUICK_FACT_KEYS.map((k) => [k, trd(`labels.${k}`)])
                    ),
                  }}
                  pdfCard={<KilimanjaroPdfCard />}
                />
              ) : (
                <>
                  {/* Quick Facts */}
                  <div>
                    <h2 className="text-2xl font-semibold text-brand mb-5">{trd('labels.quickFacts')}</h2>
                    <div className="bg-light-green rounded-2xl p-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5">
                      {QUICK_FACT_KEYS.map((key) => (
                        <div key={key} className="flex justify-between gap-3 text-sm">
                          <span className="text-text-muted font-medium">{trd(`labels.${key}`)}</span>
                          <span className="text-brand font-semibold text-right">{routeContent!.quickFacts[key]}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Why Choose */}
                  <div>
                    <h2 className="text-2xl font-semibold text-brand mb-5">{trd('labels.whyChoose')}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {routeContent!.whyChoose.map((item, i) => (
                        <div key={i} className="bg-white border border-gray-100 rounded-xl p-5">
                          <p className="font-semibold text-brand text-sm mb-1.5">{item.title}</p>
                          <p className="text-text-muted text-sm leading-relaxed">{item.body}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Day-by-Day Itinerary */}
                  <div>
                    <h2 className="text-2xl font-semibold text-brand mb-5">{trd('labels.itinerary')}</h2>
                    <div className="space-y-3">
                      <details className="group border border-gray-100 rounded-xl overflow-hidden">
                        <summary className="flex items-center justify-between p-4 cursor-pointer bg-white hover:bg-light-green transition-colors list-none">
                          <div className="flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-brand/60 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">0</span>
                            <span className="font-medium text-brand text-sm">{trd('labels.arrivalDay')}</span>
                          </div>
                          <ChevronDown className="w-4 h-4 text-text-muted group-open:rotate-180 transition-transform" />
                        </summary>
                        <div className="px-4 pb-4 pt-2 bg-white border-t border-gray-100">
                          <p className="text-sm text-text-muted leading-relaxed">{routeContent!.arrivalDay}</p>
                        </div>
                      </details>

                      {routeContent!.itinerary.map((day) => (
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
                            <p className="text-xs text-text-muted italic">{trd('labels.whatToExpect')} {day.expect}</p>
                          </div>
                        </details>
                      ))}
                    </div>
                  </div>

                  {/* Free guide download card */}
                  <KilimanjaroPdfCard />

                  {/* Included / Not Included */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-brand mb-3 flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500" /> {trd('labels.included')}
                      </h3>
                      <ul className="space-y-1.5">
                        {routeContent!.included.map((item) => (
                          <li key={item} className="text-sm text-text-muted flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand mb-3 flex items-center gap-2">
                        <X className="w-4 h-4 text-red-400" /> {trd('labels.notIncluded')}
                      </h3>
                      <ul className="space-y-1.5">
                        {routeContent!.excluded.map((item) => (
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
                    <h2 className="text-2xl font-semibold text-brand mb-5">{trd('labels.pricing')}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {([
                        { label: trd('labels.solo'),  key: 'solo',  price: routeContent!.pricing.solo  },
                        { label: trd('labels.small'), key: 'small', price: routeContent!.pricing.small },
                        { label: trd('labels.group'), key: 'group', price: routeContent!.pricing.group },
                      ] as const).map((tier) => (
                        <div key={tier.label} className="bg-brand rounded-2xl p-6 text-center">
                          <p className="text-white/70 text-xs uppercase tracking-wide mb-2">{tier.label}</p>
                          <p className="text-gold text-2xl font-bold">${tier.price.toLocaleString()}</p>
                          <p className="text-white/50 text-xs mt-1">{trd('labels.perPerson')}</p>
                          <RoutePricingButton
                            routeName={routeContent!.quickFacts.routeName}
                            tier={tier.key}
                            price={tier.price}
                            duration={routeContent!.quickFacts.duration}
                            label={trd('labels.bookThisRoute')}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </main>
            </Reveal>

            {/* ── Sidebar ───────────────────────────────────────────── */}
            <Reveal delay={0.15} className="lg:col-span-1">
            <aside>
              <div className="sticky top-24 space-y-6">

                {/* Book CTA card */}
                <div className="bg-brand rounded-2xl p-6">
                  <p className="text-white/60 text-xs uppercase tracking-wide mb-1">{trd('labels.from')}</p>
                  <p className="text-gold font-bold text-3xl leading-none">${routeContent.pricing.group.toLocaleString()}</p>
                  <p className="text-white/50 text-xs mt-1 mb-4">{trd('labels.perPerson')}</p>
                  <div className="flex items-center gap-2 flex-wrap mb-5">
                    <span className="text-white/60 text-xs">{routeContent.quickFacts.duration}</span>
                    <span className="text-white/30 text-xs">·</span>
                    <span className="text-white/60 text-xs">{routeContent.quickFacts.difficulty}</span>
                    <span className="text-white/30 text-xs">·</span>
                    <span className="text-white/60 text-xs">{routeContent.quickFacts.successRate}</span>
                  </div>
                  <BookNowButton
                    packageName={routeContent.quickFacts.routeName}
                    packageType={tc('packageTypes.kiliTrek')}
                    priceFrom={`$${routeContent.pricing.group.toLocaleString()}`}
                    duration={routeContent.quickFacts.duration}
                    restrictTripType
                    label={trd('labels.bookThisRoute')}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors text-sm"
                  />
                </div>


                {/* Featured blog post */}
                <div>
                  <p className="text-xs font-bold text-text-muted uppercase tracking-widest mb-3">{trd('labels.featuredGuide')}</p>
                  {featuredPost && (
                    <BlogSuggestionCard
                      slug="kilimanjaro-climbing-guide"
                      title={featuredPost.title}
                      excerpt={featuredPost.excerpt}
                      category={featuredPost.category}
                      image="/images/gallery/mlimani/mlimani-kili-23.webp"
                      readTime={featuredPost.readTime}
                      readLabel={tc('readMore')}
                    />
                  )}
                </div>

                {/* Other routes */}
                <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                  <div className="px-5 pt-4 pb-3 border-b border-gray-50">
                    <p className="text-[10px] font-black text-text-muted uppercase tracking-[0.15em]">
                      {trd('labels.otherRoutes')}
                    </p>
                  </div>
                  <div className="p-3 space-y-1.5">
                    {ROUTE_SLUGS.filter((slug) => slug !== route).map((slug) => {
                      const idx = ROUTE_SLUGS.indexOf(slug)
                      return (
                        <Link
                          key={slug}
                          href={`/trekking/${slug}`}
                          className="flex items-center justify-between w-full px-4 py-2.5 rounded-full border border-brand/15 bg-light-green/40 text-brand hover:bg-brand hover:border-brand hover:text-white transition-all duration-200 group"
                        >
                          <span className="text-sm font-semibold">{t(`route${idx + 1}Name` as 'route1Name')}</span>
                          <ArrowRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200" />
                        </Link>
                      )
                    })}
                  </div>
                </div>

              </div>
            </aside>
            </Reveal>
          </div>
        </div>
      )}

      {/* ── Full-width sections ───────────────────────────────────────── */}
      <KiliRouteMap route={route} />

      {/* Your Summit Kit */}
      <section className="py-20 bg-brand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-12">
            <span className="inline-block text-gold-label font-semibold text-xs uppercase tracking-widest mb-3">{t('summitKitEyebrow')}</span>
            <h2 className="text-3xl font-semibold text-white">{t('packHeading')}</h2>
            <p className="text-white/70 text-sm mt-2">{t('packSubtitle')}</p>
          </Reveal>
          <RevealGroup className="space-y-8">
            {GEAR_CATEGORIES.map(({ label, items }) => (
              <RevealItem key={label} className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
                <div className="sm:w-44 flex-shrink-0 border-l-2 border-gold pl-3">
                  <p className="text-white/60 text-xs font-bold uppercase tracking-widest leading-tight">{label}</p>
                </div>
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
              </RevealItem>
            ))}
          </RevealGroup>
          <Reveal className="mt-12 bg-white/8 border border-white/15 rounded-2xl p-6 flex items-start gap-4">
            <span className="text-xl flex-shrink-0">💡</span>
            <div>
              <p className="text-white font-semibold text-sm mb-1">{t('proTipLabel')}</p>
              <p className="text-white/75 text-sm leading-relaxed">{t('proTipText')}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* When to Summit */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <span className="inline-block text-gold-label font-semibold text-xs uppercase tracking-widest mb-3">{t('sumIntelEyebrow')}</span>
            <h2 className="text-3xl font-semibold text-brand">{t('whenToSummitHeading')}</h2>
            <p className="text-text-muted text-sm mt-3 max-w-lg mx-auto">{t('whenToSummitSubtitle')}</p>
          </Reveal>
          <RevealGroup className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {SEASONS.map(({ label, months, desc, bullets, chips, style, warning }) => (
              <RevealItem
                key={label}
                className={`rounded-3xl p-8 flex flex-col ${
                  style === 'prime'  ? 'bg-brand border-2 border-gold shadow-xl' :
                  style === 'good'   ? 'bg-light-green border border-brand/20' :
                                       'bg-gray-50 border border-gray-200'
                }`}
              >
                <p className={`text-xs font-bold uppercase tracking-widest mb-3 ${
                  style === 'prime' ? 'text-gold' : style === 'good' ? 'text-brand' : 'text-text-muted'
                }`}>{label}</p>
                <p className={`text-2xl font-bold mb-3 ${style === 'prime' ? 'text-white' : 'text-brand'}`}>{months}</p>
                <p className={`text-sm leading-relaxed mb-6 ${style === 'prime' ? 'text-white/70' : 'text-text-muted'}`}>{desc}</p>
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
                <div className="flex flex-wrap gap-2 mt-6">
                  {chips.map((c) => (
                    <span key={c} className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                      style === 'prime' ? 'bg-gold/20 text-amber-200 border border-gold/30' :
                      style === 'good'  ? 'bg-brand/10 text-brand border border-brand/15' :
                                          'bg-gray-100 text-gray-600 border border-gray-300'
                    }`}>{c}</span>
                  ))}
                </div>
                {warning && (
                  <div className="mt-5 bg-amber-50 border border-amber-200 rounded-xl p-3">
                    <p className="text-xs text-amber-800 leading-relaxed">{warning}</p>
                  </div>
                )}
              </RevealItem>
            ))}
          </RevealGroup>
          <RevealGroup className="flex flex-wrap justify-center gap-2">
            {MONTH_CHIPS.map(({ name, type }) => (
              <RevealItem key={name} className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                type === 'prime' ? 'bg-gold/15 text-brand border-gold/40' :
                type === 'good'  ? 'bg-brand/10 text-brand border-brand/20' :
                                   'bg-gray-100 text-gray-600 border-gray-200'
              }`}>{name}</RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 text-center overflow-hidden">
        <Image
          src={heroImage.src}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand/80" />
        <Reveal className="relative z-10 max-w-xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-white mb-4">{t('ctaHeading')}</h2>
          <p className="text-white/70 mb-8">{t('ctaSubtitle')}</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors">
            {t('ctaButton')} <ArrowRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </section>
    </>
  )
}
