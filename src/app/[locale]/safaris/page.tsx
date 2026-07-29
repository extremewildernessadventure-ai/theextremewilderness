import type { Metadata } from 'next'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { ArrowRight, CheckCircle2, Calendar, Compass, HelpCircle, Clock, Users, MapPin } from 'lucide-react'
import { getPackages } from '@/data/packages.i18n'
import NewsletterForm from '@/components/home/NewsletterForm'
import BookNowButton from '@/components/booking/BookNowButton'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { MONTHS } from '@/lib/seasonData'
import PlanBuilderEntryCard from '@/components/plan/PlanBuilderEntryCard'
import FilteredPackageGrid from '@/components/itineraries/FilteredPackageGrid'
import NationalParksGrid from '@/components/itineraries/NationalParksGrid'
import FaqAccordion from '@/components/itineraries/FaqAccordion'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { buildAlternates } from '@/lib/site'
import Reveal from '@/components/motion/Reveal'
import { RevealGroup, RevealItem } from '@/components/motion/RevealGroup'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'itineraries' })
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    keywords: t.raw('metaKeywords') as string[],
    alternates: buildAlternates(locale, '/safaris'),
    openGraph: {
      title: t('metaTitle'),
      description: t('metaDescription'),
      images: [{ url: '/images/gallery/safari-009.jpg', width: 1200, height: 630, alt: t('ogImageAlt') }],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('metaTitle'),
      images: ['/images/gallery/safari-009.jpg'],
    },
  }
}

const EDITION_META = [
  { slug: '7-day-serengeti-ngorongoro', image: '/images/gallery/ngorongoro-crater-landscape.webp', badgeKey: 'badgeBestseller' },
  { slug: '12-days-rwanda-primates', image: '/images/gallery/gorilla.webp', badgeKey: 'badgeIconic' },
  { slug: '7-day-southern-circuit', image: '/images/gallery/Ruaha-National-Park.webp', badgeKey: 'badgeRemote' },
  { slug: '10-day-safari-zanzibar', image: '/images/gallery/zanzibar-nungwi-aerial.webp', badgeKey: 'badgePopular' },
] as const

const EXTRA_META = [
  { slug: '5-day-serengeti-fly-in', image: '/images/gallery/safari-025.webp', badgeKey: 'badgeLuxury' },
  { slug: '11-days-kenya-undisputed', image: '/images/gallery/safari-026.webp', badgeKey: null },
  { slug: '10-day-northern-circuit', image: '/images/gallery/safari-027.webp', badgeKey: null },
  { slug: '7-day-southern-circuit', image: '/images/gallery/safari-028.webp', badgeKey: null },
] as const

export default async function SafarisPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const packages = getPackages(locale)
  const t = await getTranslations('itineraries')
  const tc = await getTranslations('common')

  const findPkg = (slug: string) => packages.find((p) => p.slug === slug)!
  const smallGroupSafaris = t('smallGroupSafaris')

  const editions = EDITION_META.map(({ slug, image, badgeKey }, i) => {
    const n = i + 1
    const pkg = findPkg(slug)
    return {
      label: t(`edition${n}Label` as 'edition1Label'),
      subtitle: smallGroupSafaris,
      slug: `/safaris/${slug}`,
      image,
      duration: `${pkg.duration} ${t('daysLabel')}`,
      priceFrom: pkg.priceFrom,
      destinations: t(`edition${n}Destinations` as 'edition1Destinations'),
      badge: t(badgeKey as 'badgeBestseller'),
    }
  })

  const extra = EXTRA_META.map(({ slug, image, badgeKey }, i) => {
    const n = i + 1
    const pkg = findPkg(slug)
    return {
      slug: `/safaris/${slug}`,
      name: t(`extra${n}Name` as 'extra1Name'),
      duration: pkg.duration,
      priceFrom: pkg.priceFrom,
      image,
      destinations: [t(`extra${n}Destinations` as 'extra1Destinations')],
      badge: badgeKey ? t(badgeKey as 'badgeLuxury') : null,
    }
  })
  // Packages already rendered via `extra` (with a custom image/badge override)
  // must not also be pulled in generically below, or they'd render twice.
  // Trekking-type packages (e.g. Kilimanjaro Machame) have their own dedicated
  // /trekking pages and don't belong in this general safari-itinerary grid.
  const extraSlugs = new Set<string>(EXTRA_META.map((e) => e.slug))
  const tSteps = [
    { num: '01', title: t('step1Title'), desc: t('step1Desc') },
    { num: '02', title: t('step2Title'), desc: t('step2Desc') },
    { num: '03', title: t('step3Title'), desc: t('step3Desc') },
    { num: '04', title: t('step4Title'), desc: t('step4Desc') },
  ]
  const tIncluded = [t('included1'), t('included2'), t('included3'), t('included4'), t('included5'), t('included6'), t('included7')]
  const tFaqs = [
    { q: t('faq1q'), a: t('faq1a') },
    { q: t('faq2q'), a: t('faq2a') },
    { q: t('faq3q'), a: t('faq3a') },
    { q: t('faq4q'), a: t('faq4a') },
    { q: t('faq5q'), a: t('faq5a') },
    { q: t('faq6q'), a: t('faq6a') },
    { q: t('faq7q'), a: t('faq7a') },
    { q: t('faq8q'), a: t('faq8a') },
    { q: t('faq9q'), a: t('faq9a') },
    { q: t('faq10q'), a: t('faq10a') },
  ]

  const tanzaniaParks = [
    { name: t('park1Name'), desc: t('park1Desc'), image: '/images/gallery/serengeti.webp' },
    { name: t('park2Name'), desc: t('park2Desc'), image: '/images/gallery/ngorongoro-crater-landscape.webp' },
    { name: t('park3Name'), desc: t('park3Desc'), image: '/images/gallery/tarangire-1.webp' },
    { name: t('park4Name'), desc: t('park4Desc'), image: '/images/gallery/tarangire-elephants-baobab.webp' },
    { name: t('park5Name'), desc: t('park5Desc'), image: '/images/gallery/Ruaha-National-Park.webp' },
    { name: t('park6Name'), desc: t('park6Desc'), image: '/images/gallery/nyerere.webp' },
  ]
  const kenyaParks = [
    { name: t('park7Name'),  desc: t('park7Desc'),  image: '/images/gallery/maasai-mara.webp' },
    { name: t('park8Name'),  desc: t('park8Desc'),  image: '/images/gallery/amboseli.webp' },
    { name: t('park9Name'),  desc: t('park9Desc'),  image: '/images/gallery/samburu.webp' },
    { name: t('park10Name'), desc: t('park10Desc'), image: '/images/gallery/tsavo.webp' },
    { name: t('park11Name'), desc: t('park11Desc'), image: '/images/gallery/nakuru.webp' },
  ]
  const tGettingHereTips = [t('gettingHereTip1'), t('gettingHereTip2'), t('gettingHereTip3'), t('gettingHereTip4'), t('gettingHereTip5')]
  const tBullets = [t('heroBullet1'), t('heroBullet2'), t('heroBullet3'), t('heroBullet4')]
  const tStats = [
    { value: t('stat1Value'), label: t('stat1Label') },
    { value: t('stat2Value'), label: t('stat2Label') },
    { value: t('stat3Value'), label: t('stat3Label') },
    { value: t('stat4Value'), label: t('stat4Label') },
  ]
  return (
    <>
      {/* ── 1. HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[60vh] flex items-end pb-16 pt-32 overflow-hidden">
        <Image
          src="/images/gallery/safari-009.webp"
          alt={t('heroImageAlt')}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[
            { label: 'EWA Safari Outfitters', href: `/${locale}` },
            { label: 'Safari Packages' },
          ]} />
          <p className="text-gold-label font-semibold text-xs uppercase tracking-widest mb-4">{t('heroPill')}</p>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-white leading-[1.05] mb-6 max-w-3xl">
            {t('heroTitle')}<br />
            <span className="text-gold">{t('heroTitleGold')}</span>
          </h1>

          <p className="text-white/70 text-lg max-w-xl leading-relaxed mb-8">
            {t('heroSubtitle')}
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <BookNowButton
              packageName="Custom Safari"
              packageType={tc('packageTypes.safari')}
              label={t('startPlanningButton')}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors shadow-lg"
            />
            <a
              href="#itineraries"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/40 text-white hover:bg-white/10 font-semibold rounded-xl transition-colors"
            >
              {t('browseItinerariesButton')} <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3 text-white/75 text-base">
            {tBullets.map((text) => (
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
        <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {tStats.map(({ value, label }) => (
              <div key={label} className="flex flex-col items-center gap-1">
                <span className="text-gold text-3xl lg:text-4xl font-bold">{value}</span>
                <span className="text-white/60 text-xs uppercase tracking-wider">{label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── 2b. PLAN BUILDER ENTRY POINT ─────────────────────────────────────── */}
      <section className="py-14">
        <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PlanBuilderEntryCard />
        </Reveal>
      </section>

      {/* ── 3. SIGNATURE EDITIONS ────────────────────────────────────────────── */}
      <section id="itineraries" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section header */}
          <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <span className="text-gold-label font-semibold text-xs uppercase tracking-widest">{t('signatureEditionsEyebrow')}</span>
              <h2 className="font-semibold text-brand mt-2" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
                {t('signatureEditionsHeading')}
              </h2>
            </div>
            <p className="text-text-muted text-base max-w-sm leading-relaxed sm:text-right">
              {t('signatureEditionsSubtitle')}
            </p>
          </Reveal>

          {/* Featured card — full width */}
          <Reveal className="mb-4">
            <Link
              href={editions[0].slug}
              className="group relative flex rounded-3xl overflow-hidden"
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
                  <p className="text-white/65 text-base">{editions[0].destinations}</p>
                </div>
                <div className="flex-shrink-0 sm:text-right">
                  <p className="text-white/70 text-xs mb-1">{editions[0].duration} {t('durationSuffix')}</p>
                  <p className="text-gold text-2xl font-bold">${editions[0].priceFrom.toLocaleString()}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-white/80 text-sm font-semibold group-hover:text-gold transition-colors">
                    {t('exploreJourney')} <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>

          {/* 3 smaller cards */}
          <RevealGroup className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {editions.slice(1).map((ed) => (
              <RevealItem key={ed.label}>
                <Link
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
                      {t('fromPrefix')} ${ed.priceFrom.toLocaleString()} <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ── 4. ALL PACKAGES (filterable by country) ──────────────────────────── */}
      <section className="bg-light-green py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <Reveal className="text-center mb-10">
            <span className="text-gold-label font-semibold text-xs uppercase tracking-widest">{t('completeCollectionEyebrow')}</span>
            <h2 className="text-brand font-semibold text-3xl lg:text-4xl mt-2">{t('completeCollectionHeading')}</h2>
            <p className="text-text-muted mt-3 max-w-lg mx-auto text-base leading-relaxed">
              {t('completeCollectionSubtitle')}
            </p>
          </Reveal>

          <FilteredPackageGrid
            packages={[
              ...packages
                .filter((pkg) => pkg.type !== 'trekking' && !extraSlugs.has(pkg.slug))
                .map((pkg) => ({
                  slug: `/safaris/${pkg.slug}`,
                  name: pkg.name,
                  duration: pkg.duration,
                  priceFrom: pkg.priceFrom,
                  image: pkg.heroImage,
                  destinations: pkg.destinations,
                  groupSize: pkg.groupSize,
                  badge: pkg.badge ?? null,
                })),
              ...extra.map((it) => ({
                slug: it.slug,
                name: it.name,
                duration: it.duration,
                priceFrom: it.priceFrom,
                image: it.image,
                destinations: [it.destinations[0]?.toLowerCase() ?? ''],
                badge: it.badge ?? null,
              })),
            ]}
            labels={{
              durationLabel:  t('filterDurationLabel'),
              dur2to5:        t('filterDur2to5'),
              dur6to9:        t('filterDur6to9'),
              dur10plus:      t('filterDur10plus'),
              filterByPrice:  t('filterByPrice'),
              countryLabel:   t('filterCountryLabel'),
              filterAll:      t('filterAll'),
              filterTanzania: t('filterTanzania'),
              filterKenya:    t('filterKenya'),
              filterRwanda:   t('filterRwanda'),
              filterCombined: t('filterCombined'),
              days:           t('daysLabel'),
              max:            t('maxLabel'),
              pax:            t('paxLabel'),
              from:           t('fromPrefix'),
              view:           t('viewLabel'),
              loadMore:       t('filterLoadMore'),
              showingOf:      t('filterShowingOf'),
              noResults:      t('filterNoResults'),
            }}
          />
        </div>
      </section>

      {/* ── 4b. NATIONAL PARKS ───────────────────────────────────────────────── */}
      <NationalParksGrid
        eyebrow={t('parksEyebrow')}
        heading={t('parksHeading')}
        tanzaniaLabel={t('parksTanzaniaLabel')}
        kenyaLabel={t('parksKenyaLabel')}
        tanzaniaParks={tanzaniaParks}
        kenyaParks={kenyaParks}
      />

      {/* ── 5. HOW WE CRAFT YOUR JOURNEY ─────────────────────────────────────── */}
      <section className="bg-brand py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07]">
          <Image src="/images/gallery/safari-120.webp" alt="" fill className="object-cover" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <span className="text-gold-label font-semibold text-xs uppercase tracking-widest">{t('processEyebrow')}</span>
            <h2 className="text-white font-semibold text-3xl lg:text-4xl mt-2">{t('processHeading')}</h2>
            <p className="text-white/60 mt-3 max-w-md mx-auto text-base leading-relaxed">
              {t('processSubtitle')}
            </p>
          </Reveal>

          <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {tSteps.map((step, i) => (
              <RevealItem key={step.num} className="relative">
                {/* Connector line */}
                {i < tSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-12 right-0 h-px bg-white/15" />
                )}
                <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center mb-5 text-brand font-bold text-sm relative z-10">
                  {step.num}
                </div>
                <h3 className="text-white font-semibold text-lg mb-3">{step.title}</h3>
                <p className="text-white/75 text-base leading-relaxed">{step.desc}</p>
              </RevealItem>
            ))}
          </RevealGroup>

          <div className="text-center mt-14">
            <BookNowButton
              packageName="Custom Safari"
              packageType={tc('packageTypes.safari')}
              label={t('letsStartPlanning')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors shadow-lg text-base"
            />
          </div>
        </div>
      </section>

      {/* ── 6. PLANNING GUIDE ────────────────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <Reveal className="text-center mb-14">
            <span className="text-gold-label font-semibold text-xs uppercase tracking-widest">{t('planningGuideEyebrow')}</span>
            <h2 className="text-brand font-semibold text-3xl lg:text-4xl mt-2">{t('planningGuideHeading')}</h2>
          </Reveal>

          <Reveal className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Card A — When to Go */}
            <div className="bg-light-green rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-brand rounded-xl flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5 text-gold" />
                </div>
                <h3 className="text-brand font-semibold text-lg">{t('whenToGoTitle')}</h3>
              </div>
              <p className="text-text-muted text-base leading-relaxed mb-6">
                {t('whenToGoText')}
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
                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-brand inline-block" />{t('legendPrime')}</span>
                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-brand/20 inline-block" />{t('legendGood')}</span>
                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-gray-200 inline-block" />{t('legendRainy')}</span>
              </div>
            </div>

            {/* Card B — What's Included */}
            <div className="bg-brand rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-gold" />
                </div>
                <h3 className="text-white font-semibold text-lg">{t('whatsIncludedTitle')}</h3>
              </div>
              <ul className="space-y-3">
                {tIncluded.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/75 text-base">
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
                <h3 className="text-brand font-semibold text-lg">{t('commonQuestionsTitle')}</h3>
              </div>
              <div className="space-y-5">
                {tFaqs.map((faq) => (
                  <div key={faq.q} className="border-b border-brand/10 pb-5 last:border-0 last:pb-0">
                    <p className="text-brand font-semibold text-base mb-1.5">{faq.q}</p>
                    <p className="text-text-muted text-base leading-relaxed">{faq.a}</p>
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
                <h3 className="text-brand font-semibold text-lg">{t('gettingHereTitle')}</h3>
              </div>
              <ul className="space-y-4">
                {tGettingHereTips.map((tip) => (
                  <li key={tip} className="flex items-start gap-3 text-text-muted text-base">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-1.5" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

          </Reveal>
        </div>
      </section>

      {/* ── 6b. FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-light-green">
        <Reveal className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-gold-label font-semibold text-xs uppercase tracking-widest">{t('faqEyebrow')}</span>
            <h2 className="text-brand font-semibold text-3xl lg:text-4xl mt-2">{t('faqHeading')}</h2>
          </div>
          <FaqAccordion faqs={tFaqs} />
        </Reveal>
      </section>

      {/* ── 7. CTA + NEWSLETTER ──────────────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="/images/gallery/safari-009.webp"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand/80" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left — CTA */}
            <Reveal>
              <span className="text-gold-label font-semibold text-xs uppercase tracking-widest">{t('ctaEyebrow')}</span>
              <h2 className="text-white font-semibold mt-2 mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                {t('ctaHeading')}<br />
                <span className="text-gold">{t('ctaHeadingGold')}</span>
              </h2>
              <p className="text-white/60 text-base leading-relaxed mb-8 max-w-sm">
                {t('ctaSubtitle')}
              </p>
              <BookNowButton
                packageName="Custom Safari"
                packageType={tc('packageTypes.safari')}
                label={t('startPlanningLabel')}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors shadow-lg text-base"
              />
              <p className="text-white/35 text-xs mt-4">{t('noCommitment')}</p>
            </Reveal>

            {/* Right — Newsletter */}
            <Reveal delay={0.15} className="bg-white/[0.07] backdrop-blur-sm rounded-2xl border border-white/15 p-8">
              <h3 className="text-white text-xl font-semibold mb-1">{t('newsletterHeading')}</h3>
              <p className="text-white/75 text-base mb-6 leading-relaxed">
                {t('newsletterText')}
              </p>
              <NewsletterForm dark={true} />
            </Reveal>

          </div>
        </div>
      </section>
    </>
  )
}

// ── Package card ──────────────────────────────────────────────────────────────
function PackageCard({
  slug, name, duration, priceFrom, image, destinations, groupSize, badge,
  daysLabel = 'days', maxLabel = 'Max', paxLabel = 'pax', fromLabel = 'From', viewLabel = 'View',
}: {
  slug: string
  name: string
  duration: number
  priceFrom: number
  image: string
  destinations: string[]
  groupSize?: { min: number; max: number }
  badge?: string
  daysLabel?: string
  maxLabel?: string
  paxLabel?: string
  fromLabel?: string
  viewLabel?: string
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
            <Clock className="w-3.5 h-3.5 text-gold" />{duration} {daysLabel}
          </span>
          {groupSize && (
            <span className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-gold" />{maxLabel} {groupSize.max} {paxLabel}
            </span>
          )}
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-gold" />
            {destinations[0]}
          </span>
        </div>
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
          <div>
            <span className="text-text-muted text-xs">{fromLabel} </span>
            <span className="text-brand font-bold text-lg">${priceFrom.toLocaleString()}</span>
            <span className="text-text-muted text-xs">/pp</span>
          </div>
          <span className="flex items-center gap-1 text-sm font-semibold text-brand group-hover:text-gold transition-colors">
            {viewLabel} <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </Link>
  )
}
