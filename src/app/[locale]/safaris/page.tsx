import type { Metadata } from 'next'
import { Suspense } from 'react'
import { Link } from '@/i18n/navigation'
import { Compass } from 'lucide-react'
import { getPackages } from '@/data/packages.i18n'
import { getDestinations } from '@/data/destinations.i18n'
import { PACKAGE_REVIEWS } from '@/data/packageReviews'
import { getTranslations } from 'next-intl/server'
import SafariBrowser, { type SafariBrowserLabels } from '@/components/itineraries/SafariBrowser'
import { buildAlternates, buildBreadcrumbSchema, buildPageTitle } from '@/lib/site'
import { buildBrowsableSafari, type BrowsableActivityType } from '@/lib/safariBrowse'
import Reveal from '@/components/motion/Reveal'

type Props = {
  params: Promise<{ locale: string }>
  // Read only by the hero's tier quick-cards, to highlight whichever tier
  // (if any) SafariBrowser below is currently pre-filtered to via the same
  // ?tier= param — generateMetadata ignores this.
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

// Hero tier quick-cards need, per tier, how many packages actually offer it
// and the cheapest confirmed rate for it — same "a package has a tier if any
// pricing row carries it" presence check SafariBrowser already uses, applied
// here across every package rather than per-card.
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

  // ── SafariBrowser dataset + labels ───────────────────────────────────────
  // Every package is browsable here, matching the prototype's own "one grid,
  // everything filterable" design -- no separate curated/signature subset.
  // 'kilimanjaro-machame-7day' stays excluded (marketed only via /trekking);
  // '14-days-kilimanjaro-lemosho-safari' (the other mountain_trekking
  // package, a genuine safari+climb combo) stays included, same as today.
  const destinationLookup = new Map(destinations.map((d) => [d.slug, { name: d.name, country: d.country }]))
  const browsableItems = packages
    .filter((pkg) => pkg.slug !== 'kilimanjaro-machame-7day')
    .map((pkg) => buildBrowsableSafari(pkg, destinationLookup, PACKAGE_REVIEWS[pkg.slug], false))

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
      youVisitLabel: tb('card.youVisitLabel'), startSuffix: tb('card.startSuffix'), endSuffix: tb('card.endSuffix'),
      viewFullItinerary: tb('card.viewFullItinerary'),
    },
    sidebar: {
      eyebrow: tb('sidebar.eyebrow'), title: tb('sidebar.title'), resetAll: tb('sidebar.resetAll'),
      search: {
        label: tb('sidebar.searchLabel'), placeholder: tb('sidebar.searchPlaceholder'), clearLabel: tb('sidebar.searchClearLabel'),
      },
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
    yourSafari: {
      title: tb('yourSafari.title'), searchPlaceholder: tb('yourSafari.searchPlaceholder'),
      clearSearchLabel: tb('yourSafari.clearSearchLabel'), addOptionsLabel: tb('yourSafari.addOptionsLabel'),
      hideOptionsLabel: tb('yourSafari.hideOptionsLabel'), destinationsHeading: tb('yourSafari.destinationsHeading'),
      parksHeading: tb('yourSafari.parksHeading'), activitiesHeading: tb('yourSafari.activitiesHeading'),
      monthPlaceholder: tb('yourSafari.monthPlaceholder'), departureMonthHeading: tb('yourSafari.departureMonthHeading'),
      clearDateLabel: tb('yourSafari.clearDateLabel'),
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

      {/* ── Editorial hero intro (matches the prototype exactly: eyebrow pill,
           headline, one intro paragraph, tier quick-filter cards — no stats
           strip, no plan-builder card, no marketing photo showcase, no extra
           CTA buttons, nothing that isn't in the prototype) ───────────────── */}
      <section className="bg-brand pt-32 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[90rem] mx-auto">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5 text-gold" />
              <span>{t('heroPill')}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
              {t('heroTitle')}
            </h1>

            <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-2xl">
              {t('heroSubtitle', { count: packages.length })}
            </p>
          </div>

          {/* Tier quick-cards — a first-class filter, not just descriptive
              copy: each links straight into the grid below pre-filtered to
              that tier, same ?tier= param SafariBrowser already reads. */}
          <div className="mt-7 grid grid-cols-1 md:grid-cols-3 gap-3">
            {heroTierCards.map(({ key, kicker, name, desc, count, minPrice }) => {
              const isSelected = selectedHeroTier === key
              return (
                <Link
                  key={key}
                  href={isSelected ? '/safaris#itineraries' : `/safaris?tier=${key}#itineraries`}
                  className={`text-start p-4 rounded-lg border transition-all group ${
                    isSelected
                      ? 'border-gold bg-white shadow-md'
                      : 'border-white/15 bg-white/10 hover:border-white/30 hover:bg-white/15'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-[11px] font-semibold uppercase tracking-wider ${isSelected ? 'text-gold-label' : 'text-gold'}`}>
                      {kicker}
                    </span>
                    <span className={`text-xs font-medium ${isSelected ? 'text-text-muted' : 'text-white/70'}`}>
                      {minPrice !== null ? `${t('fromPrefix')} $${minPrice.toLocaleString('en-US')}` : t('heroTierCustomLabel')}
                    </span>
                  </div>

                  <h3 className={`font-semibold text-lg mb-1 ${isSelected ? 'text-brand' : 'text-white'}`}>{name}</h3>
                  <p className={`text-xs leading-relaxed line-clamp-2 mb-2.5 ${isSelected ? 'text-text-muted' : 'text-white/80'}`}>{desc}</p>

                  <div className={`pt-2.5 border-t flex items-center justify-between text-[11px] ${isSelected ? 'border-gray-100 text-text-muted' : 'border-white/20 text-white/70'}`}>
                    <span>{t('heroTierTripsCount', { count })}</span>
                    <span className={`font-semibold underline underline-offset-2 ${isSelected ? 'text-brand' : 'text-white group-hover:text-gold'}`}>
                      {isSelected ? t('heroTierSelectedCta') : t('heroTierFilterCta')}
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Main browsing & filtering layout (sidebar + grid + pagination +
           compare bar/modal) — the prototype's own main content, sitting
           directly under the hero with no section header text in between. ── */}
      <section id="itineraries" className="bg-light-green py-10">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <Suspense fallback={null}>
              <SafariBrowser items={browsableItems} labels={safariBrowserLabels} />
            </Suspense>
          </Reveal>
        </div>
      </section>
    </>
  )
}
