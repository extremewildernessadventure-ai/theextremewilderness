import type { Metadata } from 'next'
import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import { ArrowRight, Layers, Moon, Mountain, Navigation2, Flashlight, Sun,
  Droplets, Pill, HeartPulse, Zap, Package, ShieldCheck } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import KiliRouteMap from '@/components/trekking/KiliRouteMap'
import Breadcrumb from '@/components/ui/Breadcrumb'
import BlogSuggestionCard from '@/components/trekking/BlogSuggestionCard'
import KilimanjaroPdfCard from '@/components/trekking/KilimanjaroPdfCard'
import ExperienceGallery from '@/components/experiences/ExperienceGallery'
import BookNowButton from '@/components/booking/BookNowButton'
import { getBlogPostMeta } from '@/data/blog/index.i18n'
import { mlimaniPhoto, mlimaniCapKey, MLIMANI_SHOWCASE } from '@/data/mlimaniGallery'
import { buildAlternates, buildBreadcrumbSchema, buildPageTitle, localeUrl, SITE_URL } from '@/lib/site'
import Reveal from '@/components/motion/Reveal'
import { RevealGroup, RevealItem } from '@/components/motion/RevealGroup'

const ROUTE_SLUGS = ['machame', 'lemosho', 'marangu', 'rongai', 'umbwe', 'northern-circuit'] as const
const ROUTE_BADGE_KEYS: Record<string, string | null> = {
  machame: 'badgeMostPopular',
  lemosho: 'badgeRecommended',
  marangu: null,
  rongai: null,
  umbwe: 'badgeAdvanced',
  'northern-circuit': 'badgeBestRate',
}
const ROUTE_IMAGES: Record<string, string> = {
  machame: '/images/gallery/kilimanjaro-card-machame.webp',
  lemosho: '/images/gallery/kilimanjaro-card-lemosho.webp',
  marangu: '/images/gallery/kilimanjaro-card-marangu.webp',
  rongai: '/images/gallery/kilimanjaro-card-rongai.webp',
  umbwe: '/images/gallery/kilimanjaro-card-umbwe.webp',
  'northern-circuit': '/images/gallery/kilimanjaro-card-northern-circuit.webp',
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale = 'en' } = await params
  const t = await getTranslations({ locale, namespace: 'trekking' })
  return {
    title: buildPageTitle(t('metaTitle')),
    description: t('metaDescription'),
    keywords: t.raw('metaKeywords') as string[],
    alternates: buildAlternates(locale, '/trekking'),
    openGraph: {
      title: t('metaTitle'),
      description: t('metaDescription'),
      images: [{ url: '/images/gallery/kilimanjaro-hero.jpg', width: 1200, height: 630, alt: t('heroImageAlt') }],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('metaTitle'),
      images: ['/images/gallery/kilimanjaro-hero.jpg'],
    },
  }
}

interface Props {
  params: Promise<{ locale?: string }>
}

export default async function TrekkingPage({ params }: Props) {
  const { locale = 'en' } = await params
  const t = await getTranslations('trekking')
  const trd = await getTranslations('trekkingRouteDetail')
  const tc = await getTranslations('common')
  const tForms = await getTranslations('forms')
  const tExp = await getTranslations('experiences')
  const featuredPost = await getBlogPostMeta('kilimanjaro-climbing-guide', locale)

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
      image: '/images/gallery/kilimanjaro1.webp',
    },
    {
      category: t('article3Cat'),
      title: t('article3Title'),
      desc: t('article3Desc'),
      readTime: t('article3Time'),
      href: '/blog',
      image: '/images/gallery/kilimanjaro-rising-over-plains.webp',
    },
    {
      category: t('article4Cat'),
      title: t('article4Title'),
      desc: t('article4Desc'),
      readTime: t('article4Time'),
      href: '/blog',
      image: '/images/gallery/kilimanjaro-summit-acacia-trees.webp',
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
      image: ROUTE_IMAGES[slug],
      badge: badgeKey ? t(badgeKey as 'badgeMostPopular') : null,
    }
  })

  const minPrice = Math.min(...routes.map((r) => r.priceFrom))

  const routesItemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: routes.map((r, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Product',
        name: r.name,
        description: r.desc,
        image: `${SITE_URL}${r.image}`,
        provider: {
          '@type': 'Organization',
          name: 'EWA Safari Outfitters',
          url: SITE_URL,
        },
        offers: {
          '@type': 'Offer',
          price: r.priceFrom,
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          url: localeUrl(locale, r.href),
        },
      },
    })),
  }

  const breadcrumbItems = [
    { label: 'EWA Safari Outfitters', href: `/${locale}` },
    { label: t('heroEyebrow') },
  ]
  const breadcrumbSchema = buildBreadcrumbSchema(locale, breadcrumbItems, '/trekking')

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(routesItemListSchema) }}
      />
      <section className="relative min-h-[60vh] flex items-end pb-16 pt-32 overflow-hidden bg-brand">
        <div className="absolute inset-0">
          <Image
            src="/images/gallery/kilimanjaro-hero.webp"
            alt="Mount Kilimanjaro's snow-capped summit against a clear blue sky"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand/70 via-brand/50 to-brand/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col lg:flex-row items-end justify-between gap-8">
            {/* Left title block */}
            <div className="flex-1 min-w-0">
              <Breadcrumb items={breadcrumbItems} locale={locale} />
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
              <BookNowButton
                packageName={tc('packageTypes.kiliTrek')}
                packageType={tc('packageTypes.kiliTrek')}
                priceFrom={`$${minPrice.toLocaleString('en-US')}`}
                restrictTripType
                label={t('ctaButton')}
                className="lg:hidden mt-6 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors text-sm"
              />
            </div>

            {/* Right glass CTA */}
            <div className="hidden lg:flex flex-col bg-white/10 backdrop-blur-md rounded-2xl px-6 py-6 border border-white/20 min-w-[200px] text-center flex-shrink-0">
              <p className="text-white/60 text-xs uppercase tracking-wide mb-1">{trd('labels.from')}</p>
              <p className="text-gold font-bold text-4xl leading-none">${minPrice.toLocaleString('en-US')}</p>
              <p className="text-white/50 text-xs mt-1 mb-5">{trd('labels.perPerson')}</p>
              <p className="text-white/60 text-xs mb-5">{t('stat3Value')} · {t('stat2Value')}</p>
              <BookNowButton
                packageName={tc('packageTypes.kiliTrek')}
                packageType={tc('packageTypes.kiliTrek')}
                priceFrom={`$${minPrice.toLocaleString('en-US')}`}
                restrictTripType
                label={t('ctaButton')}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors text-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── STAT STRIP ───────────────────────────────────────────────────── */}
      <section className="bg-brand py-8 border-t border-white/10">
        <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-6 text-center">
            {[
              { value: t('stat1Value'), label: t('stat1Label') },
              { value: t('stat2Value'), label: t('stat2Label') },
              { value: t('stat3Value'), label: t('stat3Label') },
            ].map(({ value, label }) => (
              <div key={label} className="flex flex-col items-center gap-1">
                <span className="text-gold text-2xl lg:text-4xl font-bold">{value}</span>
                <span className="text-white/60 text-xs uppercase tracking-wider">{label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Why Kilimanjaro */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-8">
            <h2 className="text-2xl font-semibold text-brand">{t('chooseRouteHeading')}</h2>
          </Reveal>
          <RevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {routes.map((route) => (
              <RevealItem key={route.name}>
                <Link
                  href={route.href}
                  className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-0.5 flex flex-col"
                >
                  <div className="relative h-44">
                    <Image src={route.image} alt={route.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
                    {route.badge && (
                      <div className="absolute top-3 start-3 px-2.5 py-1 bg-gold text-brand text-[10px] font-bold uppercase tracking-wider rounded-full">
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
                        <span className="font-bold text-brand">${route.priceFrom.toLocaleString('en-US')}</span>
                        <span className="text-xs text-text-muted">{t('personLabel')}</span>
                      </div>
                      <span className="flex items-center gap-1 text-sm font-semibold text-brand group-hover:text-gold transition-colors">
                        {t('viewRoute')} <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                      </span>
                    </div>
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* From the Mountain — real photos & footage from our own climbs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-10">
            <span className="inline-block text-gold-label font-semibold text-xs uppercase tracking-widest mb-3">
              {t('fromMountainEyebrow')}
            </span>
            <h2 className="text-2xl lg:text-3xl font-semibold text-brand">{t('fromMountainHeading')}</h2>
            <p className="text-text-muted mt-3 max-w-2xl text-sm leading-relaxed">{t('fromMountainSub')}</p>
          </Reveal>

          <ExperienceGallery
            variant="portrait"
            images={MLIMANI_SHOWCASE.map((n) => ({ src: mlimaniPhoto(n), alt: t(mlimaniCapKey(n)) }))}
            labels={{ close: tForms('closeLabel'), prev: tExp('galleryPrev'), next: tExp('galleryNext') }}
          />
        </div>
      </section>

      {/* Blog suggestion + PDF download row */}
      <section className="py-12 bg-light-green">
        <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            <KilimanjaroPdfCard />
          </div>
        </Reveal>
      </section>

      <KiliRouteMap />

      {/* Your Summit Kit */}
      <section id="summit-kit" className="py-20 bg-brand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <Reveal className="mb-12">
            <span className="inline-block text-gold-label font-semibold text-xs uppercase tracking-widest mb-3">{t('summitKitEyebrow')}</span>
            <h2 className="text-3xl font-semibold text-white">{t('packHeading')}</h2>
            <p className="text-white/70 text-sm mt-2">
              {t('packSubtitle')}
            </p>
          </Reveal>

          {/* Category rows */}
          <RevealGroup className="space-y-8">
            {GEAR_CATEGORIES.map(({ label, items }) => (
              <RevealItem key={label} className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
                {/* Category label */}
                <div className="sm:w-44 flex-shrink-0 border-s-2 border-gold ps-3">
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
              </RevealItem>
            ))}
          </RevealGroup>

          {/* Pro tip */}
          <Reveal className="mt-12 bg-white/8 border border-white/15 rounded-2xl p-6 flex items-start gap-4">
            <span className="text-xl flex-shrink-0">💡</span>
            <div>
              <p className="text-white font-semibold text-sm mb-1">{t('proTipLabel')}</p>
              <p className="text-white/75 text-sm leading-relaxed">
                {t('proTipText')}
              </p>
            </div>
          </Reveal>

        </div>
      </section>

      {/* When to Summit */}
      <section id="when-to-summit" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <span className="inline-block text-gold-label font-semibold text-xs uppercase tracking-widest mb-3">{t('sumIntelEyebrow')}</span>
            <h2 className="text-3xl font-semibold text-brand">{t('whenToSummitHeading')}</h2>
            <p className="text-text-muted text-sm mt-3 max-w-lg mx-auto">
              {t('whenToSummitSubtitle')}
            </p>
          </Reveal>

          {/* Three season cards */}
          <RevealGroup className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {SEASONS.map(({ label, months, desc, bullets, chips, style, warning }) => (
              <RevealItem
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
              </RevealItem>
            ))}
          </RevealGroup>

          {/* Quick-reference month strip */}
          <RevealGroup className="flex flex-wrap justify-center gap-2">
            {MONTH_CHIPS.map(({ name, type }) => (
              <RevealItem key={name} className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                type === 'prime'
                  ? 'bg-gold/15 text-brand border-gold/40'
                  : type === 'good'
                  ? 'bg-brand/10 text-brand border-brand/20'
                  : 'bg-gray-100 text-gray-600 border-gray-200'
              }`}>{name}</RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Expedition Notes */}
      <section className="py-20 bg-light-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="inline-block text-gold-label font-semibold text-xs uppercase tracking-widest mb-3">{t('expeditionEyebrow')}</span>
              <h2 className="text-3xl font-semibold text-brand">{t('beforeClimbHeading')}</h2>
              <p className="text-text-muted text-sm mt-2 max-w-md">
                {t('beforeClimbSubtitle')}
              </p>
            </div>
            <Link href="/blog" className="flex-shrink-0 flex items-center gap-1.5 text-brand font-semibold text-sm hover:text-gold transition-colors">
              {t('browseAllArticles')} <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </Link>
          </Reveal>

          {/* Featured article — full-width hero card */}
          <Reveal className="mb-6">
            <Link
              href={ARTICLES[0].href}
              className="group relative rounded-3xl overflow-hidden flex items-end block"
              style={{ minHeight: 360 }}
            >
              <Image
                src={ARTICLES[0].image}
                alt={ARTICLES[0].title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="100vw"
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
                  {t('readTheGuide')} <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                </span>
              </div>
            </Link>
          </Reveal>

          {/* Three supporting cards */}
          <RevealGroup className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {ARTICLES.slice(1).map(({ category, title, readTime, href, image }) => (
              <RevealItem key={title}>
                <Link
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
                        {t('readLabel')} <ArrowRight className="w-3 h-3 rtl:rotate-180" />
                      </span>
                    </div>
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 text-center overflow-hidden">
        <Image
          src="/images/gallery/kilimanjaro-hero.webp"
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
            {t('ctaButton')} <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </Link>
        </Reveal>
      </section>
    </>
  )
}
