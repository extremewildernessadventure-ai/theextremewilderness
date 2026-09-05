import type { Metadata } from 'next'
import { Suspense } from 'react'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { ArrowRight, Compass } from 'lucide-react'
import { getPackages } from '@/data/packages.i18n'
import { getDestinations } from '@/data/destinations.i18n'
import { PACKAGE_REVIEWS } from '@/data/packageReviews'
import NewsletterForm from '@/components/home/NewsletterForm'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import BookNowButton from '@/components/booking/BookNowButton'
import { getTranslations } from 'next-intl/server'
import PlanBuilderEntryCard from '@/components/plan/PlanBuilderEntryCard'
import SafariBrowser, { type SafariBrowserLabels } from '@/components/itineraries/SafariBrowser'
import FaqAccordion from '@/components/itineraries/FaqAccordion'
import { buildAlternates, buildBreadcrumbSchema, buildPageTitle } from '@/lib/site'
import { buildBrowsableSafari, type BrowsableActivityType } from '@/lib/safariBrowse'
import Reveal from '@/components/motion/Reveal'
import { RevealGroup, RevealItem } from '@/components/motion/RevealGroup'

type Props = {
  params: Promise<{ locale: string }>
  // Read only by the hero's tier quick-cards, to highlight whichever tier
  // (if any) FilteredPackageGrid below is currently pre-filtered to via the
  // same ?tier= param — generateMetadata ignores this.
  searchParams: Promise<{ tier?: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'itineraries' })
  return {
    title: buildPageTitle(t('metaTitle')),
    description: t('metaDescription'),
    keywords: t.raw('metaKeywords') as string[],
    alternates: buildAlternates(locale, '/safaris'),
    openGraph: {
      title: t('metaTitle'),
      description: t('metaDescription'),
      images: [{ url: '/images/gallery/village-life-safari-circuit.jpg', width: 1200, height: 630, alt: t('ogImageAlt') }],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('metaTitle'),
      images: ['/images/gallery/village-life-safari-circuit.jpg'],
    },
  }
}

const EDITION_META = [
  { slug: '7-day-serengeti-ngorongoro', image: '/images/gallery/ngorongoro-crater-landscape.webp', badgeKey: 'badgeBestseller' },
  { slug: '12-days-rwanda-primates', image: '/images/gallery/gorilla.webp', badgeKey: 'badgeIconic' },
  { slug: '7-day-southern-circuit', image: '/images/gallery/ruaha-giraffes-riverbank.webp', badgeKey: 'badgeRemote' },
  { slug: '10-day-safari-zanzibar', image: '/images/gallery/zanzibar-nungwi-aerial.webp', badgeKey: 'badgePopular' },
] as const

// Hero tier quick-cards need, per tier, how many packages actually offer it
// and the cheapest confirmed rate for it — same "a package has a tier if any
// pricing row carries it" presence check FilteredPackageGrid already uses,
// applied here across every package rather than per-card.
function tierStats(packages: { pricingTiers?: { trail?: number; reserve?: number; sovereign?: number }[] }[], tier: 'trail' | 'reserve' | 'sovereign') {
  let count = 0
  let minPrice: number | null = null
  for (const pkg of packages) {
    const rows = (pkg.pricingTiers ?? []).filter((r) => r[tier] !== undefined && r[tier]! > 0)
    if (rows.length === 0) continue
    count += 1
    for (const row of rows) {
      if (minPrice === null || row[tier]! < minPrice) minPrice = row[tier]!
    }
  }
  return { count, minPrice }
}

export default async function SafarisPage({ params, searchParams }: Props) {
  const { locale } = await params
  const { tier: selectedHeroTier } = await searchParams
  const packages = await getPackages(locale)
  const destinations = await getDestinations(locale)
  const t = await getTranslations('itineraries')
  const tc = await getTranslations('common')
  const ts = await getTranslations('safari')
  const tf = await getTranslations('forms')
  const tb = await getTranslations('safariBrowser')

  const tierCards = [
    { key: 'trail' as const,     kicker: t('tierKicker1'), name: ts('tierTrail'),     desc: t('tierTrailDesc') },
    { key: 'reserve' as const,   kicker: t('tierKicker2'), name: ts('tierReserve'),   desc: t('tierReserveDesc') },
    { key: 'sovereign' as const, kicker: t('tierKicker3'), name: ts('tierSovereign'), desc: t('tierSovereignDesc') },
  ]
  const heroTierCards = tierCards.map((c) => ({ ...c, ...tierStats(packages, c.key) }))

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

  // ── SafariBrowser dataset + labels (Stage A filter/grid rebuild) ────────
  // Every package is browsable here regardless of whether it also appears in
  // the curated `editions` cards above -- unlike the old FilteredPackageGrid
  // (which excluded packages already shown via editions/extra to avoid
  // duplicate rendering), this is meant to be the single comprehensive,
  // filterable view of the whole catalog, matching the prototype's own "one
  // grid, everything filterable" design -- so every package now uses its own
  // real heroImage/badge here, not the old grid's separate curated overrides
  // (that EXTRA_META/`extra` array is gone; it had no other consumer once
  // FilteredPackageGrid was removed).
  // 'kilimanjaro-machame-7day' stays excluded (marketed only via /trekking);
  // '14-days-kilimanjaro-lemosho-safari' (the other mountain_trekking
  // package, a genuine safari+climb combo) stays included, same as today.
  const destinationLookup = new Map(destinations.map((d) => [d.slug, { name: d.name, country: d.country }]))
  const signatureSlugs = new Set<string>(EDITION_META.map((e) => e.slug))
  const browsableItems = packages
    .filter((pkg) => pkg.slug !== 'kilimanjaro-machame-7day')
    .map((pkg) => buildBrowsableSafari(pkg, destinationLookup, PACKAGE_REVIEWS[pkg.slug], signatureSlugs.has(pkg.slug)))

  // Same forms.tripTypes keys the detail page uses for this exact enum, so
  // an activity type reads identically everywhere on the site.
  const activityTypeLabel: Record<BrowsableActivityType, string> = {
    big_five_game_drives: tf('tripTypes.wildlifeSafari'),
    migration: tf('tripTypes.migrationSafari'),
    photographic: tf('tripTypes.photographySafari'),
    walking: tf('tripTypes.walkingSafari'),
    cultural: tf('tripTypes.culturalSafari'),
    gorilla_trekking: tf('tripTypes.gorillaTrekking'),
    beach_extension: tf('tripTypes.beachSafariCombo'),
    mountain_trekking: tf('tripTypes.kilimanjaroTrek'),
  }
  const countryName: Record<string, string> = {
    tanzania: t('filterTanzania'), kenya: t('filterKenya'), rwanda: t('filterRwanda'),
  }
  const monthName: Record<string, string> = {
    Jan: tc('months.jan'), Feb: tc('months.feb'), Mar: tc('months.mar'), Apr: tc('months.apr'),
    May: tc('months.may'), Jun: tc('months.jun'), Jul: tc('months.jul'), Aug: tc('months.aug'),
    Sep: tc('months.sep'), Oct: tc('months.oct'), Nov: tc('months.nov'), Dec: tc('months.dec'),
  }
  const parkName: Record<string, string> = Object.fromEntries(destinations.map((d) => [d.slug, d.name]))
  const tierName = { trail: ts('tierTrail'), reserve: ts('tierReserve'), sovereign: ts('tierSovereign') } as const

  const safariBrowserLabels: SafariBrowserLabels = {
    card: {
      daysLabel: t('daysLabel'), maxLabel: t('maxLabel'), paxLabel: t('paxLabel'),
      fromLabel: t('fromPrefix'), viewLabel: t('viewLabel'), bestLabel: tb('card.bestLabel'),
      tierTrail: tierName.trail, tierReserve: tierName.reserve, tierSovereign: tierName.sovereign,
      badgeBestseller: tb('card.badgeBestseller'), badgeNew: tb('card.badgeNew'), badgePopular: tb('card.badgePopular'),
      badgeSignature: tb('card.badgeSignature'), operatorDirect: tb('card.operatorDirect'), operatorPartner: tb('card.operatorPartner'),
      reviewedLabel: tb('card.reviewedLabel'), compareLabel: tb('card.compareLabel'), compareTooltip: tb('card.compareTooltip'),
      saveTooltip: tb('card.saveTooltip'), savedTooltip: tb('card.savedTooltip'),
      enquireLabel: tb('card.enquireLabel'), packageTypeLabel: tc('packageTypes.safari'),
    },
    sidebar: {
      eyebrow: tb('sidebar.eyebrow'), title: tb('sidebar.title'), resetAll: tb('sidebar.resetAll'),
      durationLabel: tb('sidebar.durationLabel'), durationReadout: tb('sidebar.durationReadout'),
      durationPreset1: tb('sidebar.durationPreset1'), durationPreset2: tb('sidebar.durationPreset2'),
      durationPreset3: tb('sidebar.durationPreset3'), durationPresetAny: tb('sidebar.durationPresetAny'),
      tierLabel: tb('sidebar.tierLabel'), tierCaption: tb('sidebar.tierCaption'),
      tierTrail: tierName.trail, tierReserve: tierName.reserve, tierSovereign: tierName.sovereign,
      tierTrailDesc: t('tierTrailDesc'), tierReserveDesc: t('tierReserveDesc'), tierSovereignDesc: t('tierSovereignDesc'),
      outfitterLabel: tb('sidebar.outfitterLabel'), clearOperators: tb('sidebar.clearOperators'), outfitterIntro: tb('sidebar.outfitterIntro'),
      ewaTitle: tb('sidebar.ewaTitle'), ewaBadge: tb('sidebar.ewaBadge'), ewaDesc: tb('sidebar.ewaDesc'),
      otherTitle: tb('sidebar.otherTitle'), otherBadge: tb('sidebar.otherBadge'), otherDesc: tb('sidebar.otherDesc'),
      partnerFootnote: tb('sidebar.partnerFootnote'),
      priceLabel: tb('sidebar.priceLabel'), priceReadout: tb('sidebar.priceReadout'),
      pricePresetUnder1: tb('sidebar.pricePresetUnder1'), pricePresetUnder2: tb('sidebar.pricePresetUnder2'), pricePresetAll: tb('sidebar.pricePresetAll'),
      monthLabel: tb('sidebar.monthLabel'), clearMonth: tb('sidebar.clearMonth'), monthIntro: tb('sidebar.monthIntro'),
      countryLabel: tb('sidebar.countryLabel'), activityLabel: tb('sidebar.activityLabel'), parkLabel: tb('sidebar.parkLabel'),
      clearParks: tb('sidebar.clearParks'),
      mobileTitle: tb('sidebar.mobileTitle'), mobileMatchOne: tb('sidebar.mobileMatchOne'), mobileMatchMany: tb('sidebar.mobileMatchMany'),
      mobileReset: tb('sidebar.mobileReset'), mobileApply: tb('sidebar.mobileApply'),
      countryName, monthName, activityValue: activityTypeLabel,
    },
    chips: {
      matchOne: tb('chips.matchOne'), matchMany: tb('chips.matchMany'), showingRange: tb('chips.showingRange'),
      curationSubtitle: tb('chips.curationSubtitle'), filtersButton: tb('chips.filtersButton'),
      sortLabel: tb('chips.sortLabel'), sortRecommended: tb('chips.sortRecommended'), sortPriceAsc: tb('chips.sortPriceAsc'),
      sortPriceDesc: tb('chips.sortPriceDesc'), sortDurationAsc: tb('chips.sortDurationAsc'), sortDurationDesc: tb('chips.sortDurationDesc'),
      activeCriteriaLabel: tb('chips.activeCriteriaLabel'), clearAll: tb('chips.clearAll'),
      chipSearch: tb('chips.chipSearch'), chipTier: tb('chips.chipTier'), chipCountry: tb('chips.chipCountry'),
      chipPark: tb('chips.chipPark'), chipActivity: tb('chips.chipActivity'), chipMonth: tb('chips.chipMonth'),
      chipPrice: tb('chips.chipPrice'), chipDuration: tb('chips.chipDuration'),
      chipOperatorEwa: tb('chips.chipOperatorEwa'), chipOperatorOther: tb('chips.chipOperatorOther'),
      tierName, countryName, activityValue: activityTypeLabel, monthName, parkName,
    },
    empty: {
      eyebrow: tb('empty.eyebrow'), heading: tb('empty.heading'), body: tb('empty.body'),
      diagnosisHeader: tb('empty.diagnosisHeader'), diagnosisBody: tb('empty.diagnosisBody'), relaxCta: tb('empty.relaxCta'),
      resetAll: tb('empty.resetAll'), matchOne: tb('empty.matchOne'), matchMany: tb('empty.matchMany'),
      fieldName: {
        searchQuery: tb('empty.fieldSearchQuery'), tiers: tb('empty.fieldTiers'), price: tb('empty.fieldPrice'),
        countries: tb('empty.fieldCountries'), parks: tb('empty.fieldParks'), activityTypes: tb('empty.fieldActivityTypes'),
        duration: tb('empty.fieldDuration'), selectedMonth: tb('empty.fieldSelectedMonth'), operatorTypes: tb('empty.fieldOperatorTypes'),
      },
    },
    compareBar: {
      header: tb('compareBar.header'), counter: tb('compareBar.counter'), clear: tb('compareBar.clear'),
      compareTable: tb('compareBar.compareTable'), selectTwo: tb('compareBar.selectTwo'),
    },
    compareModal: {
      eyebrow: tb('compareModal.eyebrow'), title: tb('compareModal.title'), viewFullDetails: tb('compareModal.viewFullDetails'),
      rowItinerary: tb('compareModal.rowItinerary'), rowPrice: tb('compareModal.rowPrice'), rowPriceSuffix: tb('compareModal.rowPriceSuffix'),
      rowTier: tb('compareModal.rowTier'), rowDuration: tb('compareModal.rowDuration'), rowDurationValue: tb('compareModal.rowDurationValue'),
      rowDestination: tb('compareModal.rowDestination'), rowParks: tb('compareModal.rowParks'), rowActivity: tb('compareModal.rowActivity'),
      rowBestMonths: tb('compareModal.rowBestMonths'), rowInclusions: tb('compareModal.rowInclusions'), ctaPlan: tb('compareModal.ctaPlan'),
      tierName, activityValue: activityTypeLabel, monthName,
    },
    prevPage: tb('prevPage'), nextPage: tb('nextPage'),
  }

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

  const tStats = [
    { value: t('stat1Value'), label: t('stat1Label') },
    { value: t('stat2Value'), label: t('stat2Label') },
    { value: t('stat3Value'), label: t('stat3Label') },
    { value: t('stat4Value'), label: t('stat4Label') },
  ]
  const breadcrumbItems = [
    { label: 'EWA Safari Outfitters', href: `/${locale}` },
    { label: t('breadcrumbLabel') },
  ]
  const breadcrumbSchema = buildBreadcrumbSchema(locale, breadcrumbItems, '/safaris')

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ── 1. HERO (matches the SafariBookings-style prototype's structure:
           eyebrow pill, headline, live-count subheading, tier quick-cards row
           — restyled to this site's own tokens, no breadcrumb per standing
           hero rule, no background photo per the prototype's light editorial
           layout) ──────────────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-black/5 pt-32 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/8 text-brand text-xs font-semibold uppercase tracking-wider">
                <Compass className="w-3.5 h-3.5 text-gold-label" />
                <span>{t('heroPill')}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-brand tracking-tight leading-[1.1]">
                {t('heroTitle')}
              </h1>

              <p className="text-text-muted text-sm sm:text-base leading-relaxed max-w-2xl">
                {t('heroSubtitle', { count: packages.length })}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 shrink-0">
              <BookNowButton
                packageName="Custom Safari"
                packageType={tc('packageTypes.safari')}
                label={t('startPlanningButton')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors shadow-md"
              />
              <a
                href="#itineraries"
                className="inline-flex items-center gap-2 px-6 py-3 border border-brand/20 hover:border-brand text-brand font-semibold rounded-xl transition-colors"
              >
                {t('browseItinerariesButton')} <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </a>
            </div>
          </div>

          {/* Tier quick-cards — a first-class filter, not just descriptive
              copy: each links straight into the grid below pre-filtered to
              that tier, same ?tier= param FilteredPackageGrid already reads. */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {heroTierCards.map(({ key, kicker, name, desc, count, minPrice }) => {
              const isSelected = selectedHeroTier === key
              return (
                <Link
                  key={key}
                  href={isSelected ? '/safaris#itineraries' : `/safaris?tier=${key}#itineraries`}
                  className={`text-start p-4 rounded-2xl border transition-all group ${
                    isSelected
                      ? 'border-brand bg-brand text-white shadow-md'
                      : 'border-gray-200 bg-white hover:border-brand/40 hover:bg-light-green/40'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-[11px] font-semibold uppercase tracking-wider ${isSelected ? 'text-gold' : 'text-gold-label'}`}>
                      {kicker}
                    </span>
                    <span className={`text-xs font-medium ${isSelected ? 'text-white/70' : 'text-text-muted'}`}>
                      {minPrice !== null ? `${t('fromPrefix')} $${minPrice.toLocaleString('en-US')}` : t('heroTierCustomLabel')}
                    </span>
                  </div>

                  <h3 className={`font-semibold text-lg mb-1 ${isSelected ? 'text-white' : 'text-brand'}`}>{name}</h3>
                  <p className={`text-xs leading-relaxed line-clamp-2 mb-2.5 ${isSelected ? 'text-white/80' : 'text-text-muted'}`}>{desc}</p>

                  <div className={`pt-2.5 border-t flex items-center justify-between text-[11px] ${isSelected ? 'border-white/20 text-white/70' : 'border-gray-100 text-text-muted'}`}>
                    <span>{t('heroTierTripsCount', { count })}</span>
                    <span className={`font-semibold underline underline-offset-2 ${isSelected ? 'text-white' : 'text-brand group-hover:text-gold-label'}`}>
                      {isSelected ? t('heroTierSelectedCta') : t('heroTierFilterCta')}
                    </span>
                  </div>
                </Link>
              )
            })}
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
          <Reveal className="text-center max-w-xl mx-auto mb-12">
            <span className="text-gold-label font-semibold text-xs uppercase tracking-widest">{t('signatureEditionsEyebrow')}</span>
            <h2 className="font-semibold text-brand mt-2" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
              {t('signatureEditionsHeading')}
            </h2>
            <p className="text-text-muted text-base leading-relaxed mt-3">
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

              <div className="absolute top-6 start-6">
                <span className="px-3 py-1 bg-gold text-brand text-xs font-bold uppercase rounded-full">
                  {editions[0].badge}
                </span>
              </div>

              <div className="absolute bottom-0 inset-x-0 p-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                <div>
                  <p className="text-white/60 text-[10px] font-semibold uppercase tracking-widest mb-2">
                    {editions[0].subtitle}
                  </p>
                  <h3 className="text-white text-3xl sm:text-4xl font-semibold mb-2">{editions[0].label}</h3>
                  <p className="text-white/65 text-base">{editions[0].destinations}</p>
                </div>
                <div className="flex-shrink-0 sm:text-end">
                  <p className="text-white/70 text-xs mb-1">{editions[0].duration} {t('durationSuffix')}</p>
                  <p className="text-gold text-2xl font-bold">${editions[0].priceFrom.toLocaleString('en-US')}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-white/80 text-sm font-semibold group-hover:text-gold transition-colors">
                    {t('exploreJourney')} <ArrowRight className="w-4 h-4 rtl:rotate-180" />
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

                  <div className="absolute top-4 end-4">
                    <span className="px-2.5 py-1 bg-gold text-brand text-[10px] font-bold uppercase rounded-full">
                      {ed.badge}
                    </span>
                  </div>

                  <div className="absolute bottom-0 inset-x-0 p-5">
                    <p className="text-white/70 text-[10px] font-semibold uppercase tracking-widest mb-1">{ed.duration}</p>
                    <h3 className="text-white text-lg font-semibold mb-1">{ed.label}</h3>
                    <p className="text-white/60 text-xs mb-3">{ed.destinations}</p>
                    <span className="inline-flex items-center gap-1 text-gold text-sm font-semibold group-hover:gap-2 transition-all">
                      {t('fromPrefix')} ${ed.priceFrom.toLocaleString('en-US')} <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                    </span>
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ── 3b. THREE WAYS TO TRAVEL (tier explainer) ────────────────────────── */}
      <section className="bg-light-green py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-14">
            <span className="text-gold-label font-semibold text-xs uppercase tracking-widest">{t('tierExplainerEyebrow')}</span>
            <h2 className="text-brand font-semibold text-3xl lg:text-4xl mt-2">{t('tierExplainerHeading')}</h2>
            <p className="text-text-muted mt-3 max-w-lg mx-auto text-base leading-relaxed">
              {t('tierExplainerSubtitle')}
            </p>
          </Reveal>

          <RevealGroup className="grid grid-cols-1 md:grid-cols-3 divide-y-2 md:divide-y-0 md:divide-x-2 divide-gold border-y-2 border-gold">
            {tierCards.map(({ key, kicker, name, desc }) => (
              <RevealItem key={key} className="p-9">
                <p className="text-gold-label font-semibold text-[11px] uppercase tracking-[0.2em] mb-4">
                  {kicker}
                </p>
                <h3 className="text-brand font-semibold text-2xl mb-3">{name}</h3>
                <p className="text-text-muted text-base leading-relaxed mb-5">{desc}</p>
                <Link
                  href={`/safaris?tier=${key}#itineraries`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand border-b border-gold pb-0.5 hover:text-gold transition-colors"
                >
                  {t('tierBrowsePrefix')} {name} <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
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

          <Suspense fallback={null}>
            <SafariBrowser items={browsableItems} labels={safariBrowserLabels} />
          </Suspense>
        </div>
      </section>

      {/* ── 6b. WHY BOOK WITH US ─────────────────────────────────────────────── */}
      <WhyChooseUs gold />

      {/* ── 6c. FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-light-green">
        <Reveal className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-gold-label font-semibold text-xs uppercase tracking-widest">{t('faqEyebrow')}</span>
            <h2 className="text-brand font-semibold text-3xl lg:text-4xl mt-2">{t('faqHeading')}</h2>
          </div>
          <FaqAccordion faqs={tFaqs} columns={2} />
        </Reveal>
      </section>

      {/* ── 7. CTA + NEWSLETTER ──────────────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="/images/gallery/village-life-safari-circuit.webp"
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

