'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { Clock, Users, MapPin, ArrowRight } from 'lucide-react'

interface PackageData {
  slug: string
  name: string
  duration: number
  priceFrom: number
  image: string
  destinations: string[]
  groupSize?: { min: number; max: number }
  badge?: string | null
}

interface Props {
  packages: PackageData[]
  labels: {
    durationLabel: string
    dur2to5: string
    dur6to9: string
    dur10plus: string
    filterByPrice: string
    countryLabel: string
    filterAll: string
    filterTanzania: string
    filterKenya: string
    filterRwanda: string
    filterCombined: string
    filterTanzaniaRwanda: string
    days: string
    max: string
    pax: string
    from: string
    view: string
    loadMore: string
    showingOf: string
    noResults: string
  }
}

// Kept in sync with each destination's `country` field in src/data/destinations.ts —
// a slug missing here silently mis-buckets any package that relies on it.
const KENYA_DESTS = ['masai-mara', 'amboseli', 'samburu', 'tsavo', 'lake-nakuru', 'ol-pejeta', 'kenyan-coast']
const TZ_DESTS = ['serengeti', 'ngorongoro', 'tarangire', 'manyara', 'zanzibar', 'arusha', 'ruaha', 'nyerere', 'mahale', 'katavi', 'gombe', 'lake-victoria']
const RWANDA_DESTS = ['volcanoes', 'akagera', 'kigali', 'lake-kivu', 'nyungwe']
const PAGE_SIZE = 6
const STEP = 100

type DurBucket = '2-5' | '6-9' | '10+'
// 'tanzania-kenya' / 'tanzania-rwanda' are precise two-country buckets — 'combined'
// is a catch-all for any other multi-country mix (e.g. Kenya+Rwanda) that has no
// dedicated filter button today, so it never gets bucketed together with a pair
// it doesn't actually match.
type CountryKey = 'all' | 'tanzania' | 'kenya' | 'rwanda' | 'tanzania-kenya' | 'tanzania-rwanda' | 'combined'

function pkgCountry(dests: string[]): CountryKey {
  const hasK = dests.some((d) => KENYA_DESTS.includes(d))
  const hasT = dests.some((d) => TZ_DESTS.includes(d))
  const hasR = dests.some((d) => RWANDA_DESTS.includes(d))
  const count = [hasK, hasT, hasR].filter(Boolean).length
  if (count > 1) {
    if (hasT && hasK && !hasR) return 'tanzania-kenya'
    if (hasT && hasR && !hasK) return 'tanzania-rwanda'
    return 'combined'
  }
  if (hasK) return 'kenya'
  if (hasR) return 'rwanda'
  return 'tanzania'
}

function getDurBucket(days: number): DurBucket {
  if (days <= 5) return '2-5'
  if (days <= 9) return '6-9'
  return '10+'
}

export default function FilteredPackageGrid({ packages, labels }: Props) {
  const prices = packages.map((p) => p.priceFrom)
  const globalMin = Math.floor(Math.min(...prices) / 100) * 100
  const globalMax = Math.ceil(Math.max(...prices) / 100) * 100

  const [durFilters, setDurFilters] = useState<Set<DurBucket>>(new Set())
  const [priceMin, setPriceMin] = useState(globalMin)
  const [priceMax, setPriceMax] = useState(globalMax)
  const [country, setCountry] = useState<CountryKey>('all')
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)

  const resetVisible = () => setVisibleCount(PAGE_SIZE)

  const filtered = packages.filter((p) => {
    if (durFilters.size > 0 && !durFilters.has(getDurBucket(p.duration))) return false
    if (p.priceFrom < priceMin || p.priceFrom > priceMax) return false
    if (country !== 'all' && pkgCountry(p.destinations) !== country) return false
    return true
  })

  const visible = filtered.slice(0, visibleCount)
  const hasMore = visibleCount < filtered.length
  const remaining = filtered.length - Math.min(visibleCount, filtered.length)

  const toggleDur = (b: DurBucket) => {
    setDurFilters((prev) => {
      const next = new Set(prev)
      next.has(b) ? next.delete(b) : next.add(b)
      return next
    })
    resetVisible()
  }

  const sliderPercMin = globalMax === globalMin ? 0 : ((priceMin - globalMin) / (globalMax - globalMin)) * 100
  const sliderPercMax = globalMax === globalMin ? 100 : ((priceMax - globalMin) / (globalMax - globalMin)) * 100

  const durBuckets: { key: DurBucket; label: string }[] = [
    { key: '2-5', label: labels.dur2to5 },
    { key: '6-9', label: labels.dur6to9 },
    { key: '10+', label: labels.dur10plus },
  ]

  // Combo buttons only appear when a package actually matches them — avoids a
  // filter that claims one country pair but silently includes another (the bug
  // this replaced: a single "combined" bucket lumped Tanzania+Kenya together
  // with Tanzania+Rwanda under a "Tanzania + Kenya" label).
  const hasCombo = (key: CountryKey) => packages.some((p) => pkgCountry(p.destinations) === key)
  const countries: { key: CountryKey; label: string }[] = [
    { key: 'all', label: labels.filterAll },
    { key: 'tanzania', label: labels.filterTanzania },
    { key: 'kenya', label: labels.filterKenya },
    { key: 'rwanda', label: labels.filterRwanda },
    ...(hasCombo('tanzania-kenya') ? [{ key: 'tanzania-kenya' as const, label: labels.filterCombined }] : []),
    ...(hasCombo('tanzania-rwanda') ? [{ key: 'tanzania-rwanda' as const, label: labels.filterTanzaniaRwanda }] : []),
  ]

  const showingText = labels.showingOf
    .replace('[shown]', String(Math.min(visibleCount, filtered.length)))
    .replace('[total]', String(filtered.length))

  return (
    <div>
      {/* ── Filter Panel ── */}
      <div className="filter-panel-dark bg-brand rounded-2xl border border-white/10 shadow-sm p-6 mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10">

          {/* Duration */}
          <div>
            <p className="text-[10px] font-black text-gold uppercase tracking-[0.15em] mb-3">
              {labels.durationLabel}
            </p>
            <div className="space-y-2.5">
              {durBuckets.map(({ key, label }) => (
                <label key={key} className="flex items-center gap-2.5 cursor-pointer group">
                  <input type="checkbox" className="sr-only" checked={durFilters.has(key)} onChange={() => toggleDur(key)} />
                  <span
                    className={`w-4 h-4 rounded flex items-center justify-center border transition-all flex-shrink-0 ${
                      durFilters.has(key)
                        ? 'bg-gold border-gold'
                        : 'bg-transparent border-gold/50 group-hover:border-gold'
                    }`}
                  >
                    {durFilters.has(key) && (
                      <svg className="w-2.5 h-2.5 text-brand" fill="none" viewBox="0 0 12 12" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2 6l3 3 5-5" />
                      </svg>
                    )}
                  </span>
                  <span className="text-sm text-gold group-hover:text-white transition-colors">{label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <p className="text-[10px] font-black text-gold uppercase tracking-[0.15em] mb-3">
              {labels.filterByPrice}
            </p>
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-bold text-gold">${priceMin.toLocaleString('en-US')}</span>
              <span className="text-xs text-white/50">–</span>
              <span className="text-sm font-bold text-gold">${priceMax.toLocaleString('en-US')}</span>
            </div>
            {/* Dual-handle slider */}
            <div className="price-slider-track">
              <div className="absolute left-0 right-0 h-1.5 bg-white/20 rounded-full" />
              <div
                className="absolute h-1.5 bg-gold rounded-full"
                style={{ left: `${sliderPercMin}%`, right: `${100 - sliderPercMax}%` }}
              />
              <input
                type="range"
                min={globalMin}
                max={globalMax}
                step={STEP}
                value={priceMin}
                onChange={(e) => {
                  const v = Number(e.target.value)
                  if (v < priceMax - STEP) { setPriceMin(v); resetVisible() }
                }}
              />
              <input
                type="range"
                min={globalMin}
                max={globalMax}
                step={STEP}
                value={priceMax}
                onChange={(e) => {
                  const v = Number(e.target.value)
                  if (v > priceMin + STEP) { setPriceMax(v); resetVisible() }
                }}
              />
            </div>
          </div>

          {/* Destination */}
          <div>
            <p className="text-[10px] font-black text-gold uppercase tracking-[0.15em] mb-3">
              {labels.countryLabel}
            </p>
            <div className="flex flex-wrap gap-2">
              {countries.map(({ key, label }) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => { setCountry(key); resetVisible() }}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                    country === key
                      ? 'bg-gold text-brand border-gold shadow-sm'
                      : 'bg-transparent text-gold border-gold/40 hover:border-gold hover:bg-gold/10'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Results note */}
      <p className="text-xs text-text-muted text-center mb-8 italic">{showingText}</p>

      {/* ── Package grid ── */}
      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-text-muted">{labels.noResults}</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map((pkg) => (
              <Link
                key={pkg.slug + pkg.name}
                href={pkg.slug as '/'}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-0.5 transition-all flex flex-col"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {pkg.badge && (
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 bg-gold text-brand text-[10px] font-bold uppercase tracking-wider rounded-full">
                        {pkg.badge}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-semibold text-brand text-base leading-snug mb-3">{pkg.name}</h3>
                  <div className="flex flex-wrap gap-3 text-xs text-text-muted mb-3">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-gold" />
                      {pkg.duration} {labels.days}
                    </span>
                    {pkg.groupSize && (
                      <span className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-gold" />
                        {labels.max} {pkg.groupSize.max} {labels.pax}
                      </span>
                    )}
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-gold" />
                      {pkg.destinations[0].charAt(0).toUpperCase() + pkg.destinations[0].slice(1)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                    <div>
                      <span className="text-text-muted text-xs">{labels.from} </span>
                      <span className="text-brand font-bold text-lg">${pkg.priceFrom.toLocaleString('en-US')}</span>
                      <span className="text-text-muted text-xs">/pp</span>
                    </div>
                    <span className="flex items-center gap-1 text-sm font-semibold text-brand group-hover:text-gold transition-colors">
                      {labels.view} <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {hasMore && (
            <div className="text-center mt-10">
              <button
                type="button"
                onClick={() => setVisibleCount((v) => v + PAGE_SIZE)}
                className="inline-flex items-center gap-2.5 px-8 py-3.5 border-2 border-brand text-brand font-semibold rounded-xl hover:bg-brand hover:text-white transition-all duration-200"
              >
                {labels.loadMore}
                <span className="text-xs opacity-60">({remaining})</span>
              </button>
            </div>
          )}
        </>
      )}
    </div>
  )
}
