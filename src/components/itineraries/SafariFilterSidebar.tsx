'use client'

import { useState } from 'react'
import { Clock, Sparkles, ShieldCheck, DollarSign, Calendar, Globe2, TreePine, MapPin, RotateCcw, ChevronDown, X } from 'lucide-react'
import type { SafariFilterState, TierKey, OperatorTypeFilter } from '@/lib/safariBrowse'
import SafariSearchBar, { type SafariSearchBarLabels } from './SafariSearchBar'
import YourSafariCard, { type YourSafariCardLabels } from './YourSafariCard'

export interface FilterSidebarLabels {
  eyebrow: string
  title: string
  resetAll: string
  search: SafariSearchBarLabels
  durationLabel: string
  durationReadout: string // "[min] – [max] Days" -- [min]/[max] interpolated by caller
  durationPreset1: string // "3–5 days" equivalent, real copy supplied by caller per locale
  durationPreset2: string
  durationPreset3: string
  durationPresetAny: string
  tierLabel: string
  tierCaption: string
  tierTrail: string
  tierReserve: string
  tierSovereign: string
  tierTrailDesc: string
  tierReserveDesc: string
  tierSovereignDesc: string
  outfitterLabel: string
  clearOperators: string
  outfitterIntro: string
  ewaTitle: string
  ewaBadge: string
  ewaDesc: string
  otherTitle: string
  otherBadge: string
  otherDesc: string
  partnerFootnote: string
  priceLabel: string
  priceReadout: string // "Up to $[max]" -- caller interpolates the number
  pricePresetUnder1: string
  pricePresetUnder2: string
  pricePresetAll: string
  monthLabel: string
  clearMonth: string
  monthIntro: string
  countryLabel: string
  activityLabel: string
  activityValue: Record<string, string> // ActivityType -> translated label
  parkLabel: string
  clearParks: string // "Clear parks ([n])" -- caller interpolates [n]
  mobileTitle: string
  mobileMatchOne: string
  mobileMatchMany: string // "[n] safaris match" -- caller interpolates
  mobileReset: string
  mobileApply: string // "View [n] Safaris" -- caller interpolates
  countryName: Record<string, string> // 'tanzania'|'kenya'|'rwanda' -> translated label
  monthName: Record<string, string> // 'Jan'..'Dec' -> translated abbreviation
}

interface Props {
  filters: SafariFilterState
  onFilterChange: (f: SafariFilterState) => void
  onReset: () => void
  totalMatches: number
  isMobileOpen: boolean
  onCloseMobile: () => void
  bounds: { minDuration: number; maxDuration: number; maxPrice: number }
  availableParks: { slug: string; name: string }[]
  availableCountries: string[]
  availableMonths: string[]
  availableActivityTypes: string[]
  operatorCounts: { ewa: number; other: number }
  labels: FilterSidebarLabels
  // "Your Safari" quick-search card, rendered stacked directly above the
  // filter panel on desktop (and reused as-is inside the mobile drawer) --
  // a single SafariFilterSidebar mount handles both rather than duplicating
  // this whole component (and its own mobile-drawer state) per breakpoint.
  yourSafariLabels: YourSafariCardLabels
}

const TIER_KEYS: TierKey[] = ['trail', 'reserve', 'sovereign']
const PRICE_STEP = 200

export default function SafariFilterSidebar({
  filters, onFilterChange, onReset, totalMatches, isMobileOpen, onCloseMobile,
  bounds, availableParks, availableCountries, availableMonths, availableActivityTypes,
  operatorCounts, labels, yourSafariLabels,
}: Props) {
  const [showPartnerNote, setShowPartnerNote] = useState(false)

  const toggleArrayValue = <T,>(arr: T[], value: T): T[] =>
    arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value]

  const toggleTier = (tier: TierKey) => onFilterChange({ ...filters, tiers: toggleArrayValue(filters.tiers, tier) })
  const toggleOperator = (op: OperatorTypeFilter) => onFilterChange({ ...filters, operatorTypes: toggleArrayValue(filters.operatorTypes, op) })
  const toggleCountry = (c: string) => onFilterChange({ ...filters, countries: toggleArrayValue(filters.countries, c) })
  const toggleActivity = (a: string) => onFilterChange({ ...filters, activityTypes: toggleArrayValue(filters.activityTypes, a) })
  const togglePark = (slug: string) => onFilterChange({ ...filters, parks: toggleArrayValue(filters.parks, slug) })
  const selectMonth = (m: string) => onFilterChange({ ...filters, selectedMonth: filters.selectedMonth === m ? null : m })

  const durationPresets: [string, number, number][] = [
    [labels.durationPreset1, bounds.minDuration, Math.round(bounds.minDuration + (bounds.maxDuration - bounds.minDuration) * 0.25)],
    [labels.durationPreset2, Math.round(bounds.minDuration + (bounds.maxDuration - bounds.minDuration) * 0.25) + 1, Math.round(bounds.minDuration + (bounds.maxDuration - bounds.minDuration) * 0.65)],
    [labels.durationPreset3, Math.round(bounds.minDuration + (bounds.maxDuration - bounds.minDuration) * 0.65) + 1, bounds.maxDuration],
  ]

  const content = (
    <div className="space-y-7">
      {/* Tour Length */}
      <div>
        <p className="flex items-center gap-2 text-[10px] font-black text-gold-label uppercase tracking-[0.15em] mb-3">
          <Clock className="w-3.5 h-3.5" />{labels.durationLabel}
        </p>
        <p className="text-sm font-semibold text-brand mb-3">
          {labels.durationReadout.replace('[min]', String(filters.minDuration)).replace('[max]', String(filters.maxDuration))}
        </p>
        <div className="flex flex-wrap gap-2">
          {durationPresets.map(([label, min, max]) => {
            const active = filters.minDuration === min && filters.maxDuration === max
            return (
              <button
                key={label}
                type="button"
                onClick={() => onFilterChange({ ...filters, minDuration: min, maxDuration: max })}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                  active ? 'border-brand bg-brand text-white' : 'border-gray-200 bg-white text-text-muted hover:border-brand/40'
                }`}
              >
                {label}
              </button>
            )
          })}
          <button
            type="button"
            onClick={() => onFilterChange({ ...filters, minDuration: bounds.minDuration, maxDuration: bounds.maxDuration })}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
              filters.minDuration === bounds.minDuration && filters.maxDuration === bounds.maxDuration
                ? 'border-brand bg-brand text-white' : 'border-gray-200 bg-white text-text-muted hover:border-brand/40'
            }`}
          >
            {labels.durationPresetAny}
          </button>
        </div>
      </div>

      {/* Accommodation Tier -- first-class filter */}
      <div>
        <div className="flex items-center justify-between mb-1">
          <p className="flex items-center gap-2 text-[10px] font-black text-gold-label uppercase tracking-[0.15em]">
            <Sparkles className="w-3.5 h-3.5" />{labels.tierLabel}
          </p>
        </div>
        <p className="text-[11px] text-text-muted mb-3">{labels.tierCaption}</p>
        <div className="space-y-2">
          {TIER_KEYS.map((tier) => {
            const active = filters.tiers.includes(tier)
            const name = { trail: labels.tierTrail, reserve: labels.tierReserve, sovereign: labels.tierSovereign }[tier]
            const desc = { trail: labels.tierTrailDesc, reserve: labels.tierReserveDesc, sovereign: labels.tierSovereignDesc }[tier]
            return (
              <button
                key={tier}
                type="button"
                onClick={() => toggleTier(tier)}
                className={`w-full text-start p-3 rounded-xl border transition-all ${
                  active ? 'border-brand bg-brand text-white' : 'border-gray-200 bg-white hover:border-brand/30'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-sm">{name}</span>
                  {active && <Sparkles className="w-3.5 h-3.5" />}
                </div>
                <p className={`text-[11px] leading-relaxed ${active ? 'text-white/80' : 'text-text-muted'}`}>{desc}</p>
              </button>
            )
          })}
        </div>
      </div>

      {/* Outfitter / operator */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <p className="flex items-center gap-2 text-[10px] font-black text-gold-label uppercase tracking-[0.15em]">
            <ShieldCheck className="w-3.5 h-3.5" />{labels.outfitterLabel}
          </p>
          {filters.operatorTypes.length > 0 && (
            <button type="button" onClick={() => onFilterChange({ ...filters, operatorTypes: [] })} className="text-[11px] text-gold-label font-semibold">
              {labels.clearOperators}
            </button>
          )}
        </div>
        <p className="text-[11px] text-text-muted mb-3">{labels.outfitterIntro}</p>
        <div className="space-y-2">
          <label className="flex items-start gap-2.5 p-3 rounded-xl border border-gray-200 hover:border-brand/30 cursor-pointer transition-all">
            <input type="checkbox" className="mt-0.5" checked={filters.operatorTypes.includes('ewa')} onChange={() => toggleOperator('ewa')} />
            <span className="flex-1">
              <span className="flex items-center gap-2 mb-0.5">
                <span className="text-sm font-semibold text-brand">{labels.ewaTitle}</span>
                <span className="px-1.5 py-0.5 rounded-full text-[9px] font-bold bg-brand text-white">{labels.ewaBadge}</span>
              </span>
              <span className="block text-[11px] text-text-muted leading-relaxed">{labels.ewaDesc}</span>
            </span>
            <span className="text-xs font-semibold text-text-muted">{operatorCounts.ewa}</span>
          </label>
          <label className="flex items-start gap-2.5 p-3 rounded-xl border border-gray-200 hover:border-brand/30 cursor-pointer transition-all">
            <input type="checkbox" className="mt-0.5" checked={filters.operatorTypes.includes('other')} onChange={() => toggleOperator('other')} />
            <span className="flex-1">
              <span className="flex items-center gap-2 mb-0.5">
                <span className="text-sm font-semibold text-brand">{labels.otherTitle}</span>
                <span className="px-1.5 py-0.5 rounded-full text-[9px] font-bold bg-gray-100 text-gray-700 border border-gray-200">{labels.otherBadge}</span>
              </span>
              <span className="block text-[11px] text-text-muted leading-relaxed">{labels.otherDesc}</span>
            </span>
            <span className="text-xs font-semibold text-text-muted">{operatorCounts.other}</span>
          </label>
          <button
            type="button"
            onClick={() => setShowPartnerNote((v) => !v)}
            className="w-full flex items-center justify-between text-[11px] text-text-muted px-1"
          >
            <span>{labels.otherBadge}</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showPartnerNote ? 'rotate-180' : ''}`} />
          </button>
          {showPartnerNote && (
            <p className="text-[11px] text-text-muted italic px-1">{labels.partnerFootnote}</p>
          )}
        </div>
      </div>

      {/* Price */}
      <div>
        <p className="flex items-center gap-2 text-[10px] font-black text-gold-label uppercase tracking-[0.15em] mb-3">
          <DollarSign className="w-3.5 h-3.5" />{labels.priceLabel}
        </p>
        <p className="text-sm font-semibold text-brand mb-3">{labels.priceReadout.replace('[max]', filters.maxPrice.toLocaleString('en-US'))}</p>
        <input
          type="range"
          min={0}
          max={bounds.maxPrice}
          step={PRICE_STEP}
          value={filters.maxPrice}
          onChange={(e) => onFilterChange({ ...filters, maxPrice: Number(e.target.value) })}
          className="w-full accent-brand mb-3"
        />
        <div className="flex flex-wrap gap-2">
          {[
            [labels.pricePresetUnder1, Math.round(bounds.maxPrice * 0.45 / 500) * 500] as const,
            [labels.pricePresetUnder2, Math.round(bounds.maxPrice * 0.75 / 500) * 500] as const,
            [labels.pricePresetAll, bounds.maxPrice] as const,
          ].map(([label, value]) => (
            <button
              key={label}
              type="button"
              onClick={() => onFilterChange({ ...filters, maxPrice: value })}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                filters.maxPrice === value ? 'border-brand bg-brand text-white' : 'border-gray-200 bg-white text-text-muted hover:border-brand/40'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Month -- only rendered when at least one package has real seasonal data */}
      {availableMonths.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-2">
            <p className="flex items-center gap-2 text-[10px] font-black text-gold-label uppercase tracking-[0.15em]">
              <Calendar className="w-3.5 h-3.5" />{labels.monthLabel}
            </p>
            {filters.selectedMonth && (
              <button type="button" onClick={() => onFilterChange({ ...filters, selectedMonth: null })} className="text-[11px] text-gold-label font-semibold">
                {labels.clearMonth}
              </button>
            )}
          </div>
          <p className="text-[11px] text-text-muted mb-3">{labels.monthIntro}</p>
          <div className="flex flex-wrap gap-2">
            {availableMonths.map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => selectMonth(m)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                  filters.selectedMonth === m ? 'border-brand bg-brand text-white' : 'border-gray-200 bg-white text-text-muted hover:border-brand/40'
                }`}
              >
                {labels.monthName[m] ?? m}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Country */}
      {availableCountries.length > 0 && (
        <div>
          <p className="flex items-center gap-2 text-[10px] font-black text-gold-label uppercase tracking-[0.15em] mb-3">
            <Globe2 className="w-3.5 h-3.5" />{labels.countryLabel}
          </p>
          <div className="flex flex-wrap gap-2">
            {availableCountries.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => toggleCountry(c)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                  filters.countries.includes(c) ? 'border-brand bg-brand text-white' : 'border-gray-200 bg-white text-text-muted hover:border-brand/40'
                }`}
              >
                {labels.countryName[c] ?? c}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Activity */}
      {availableActivityTypes.length > 0 && (
        <div>
          <p className="flex items-center gap-2 text-[10px] font-black text-gold-label uppercase tracking-[0.15em] mb-3">
            <TreePine className="w-3.5 h-3.5" />{labels.activityLabel}
          </p>
          <div className="flex flex-wrap gap-2">
            {availableActivityTypes.map((a) => (
              <button
                key={a}
                type="button"
                onClick={() => toggleActivity(a)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                  filters.activityTypes.includes(a) ? 'border-brand bg-brand text-white' : 'border-gray-200 bg-white text-text-muted hover:border-brand/40'
                }`}
              >
                {labels.activityValue[a] ?? a}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Parks */}
      {availableParks.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-3">
            <p className="flex items-center gap-2 text-[10px] font-black text-gold-label uppercase tracking-[0.15em]">
              <MapPin className="w-3.5 h-3.5" />{labels.parkLabel}
            </p>
            {filters.parks.length > 0 && (
              <button type="button" onClick={() => onFilterChange({ ...filters, parks: [] })} className="text-[11px] text-gold-label font-semibold">
                {labels.clearParks.replace('[n]', String(filters.parks.length))}
              </button>
            )}
          </div>
          <div className="space-y-1.5 max-h-56 overflow-y-auto pe-1">
            {availableParks.map((park) => (
              <label key={park.slug} className="flex items-center gap-2 text-sm text-text-muted cursor-pointer">
                <input type="checkbox" checked={filters.parks.includes(park.slug)} onChange={() => togglePark(park.slug)} />
                {park.name}
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  )

  return (
    <>
      {/* Desktop -- "Your Safari" stacked directly on top of the filter panel,
          both in the same left column. */}
      <aside className="hidden lg:block w-96 shrink-0 space-y-4">
        <YourSafariCard
          filters={filters}
          onFilterChange={onFilterChange}
          availableCountries={availableCountries}
          availableParks={availableParks}
          availableActivityTypes={availableActivityTypes}
          availableMonths={availableMonths}
          labels={yourSafariLabels}
        />
        <div className="bg-white rounded-2xl border border-gray-100 p-6 sticky top-24">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-gold-label">{labels.eyebrow}</span>
            <button type="button" onClick={onReset} className="flex items-center gap-1 text-[11px] text-text-muted hover:text-brand transition-colors">
              <RotateCcw className="w-3 h-3" />{labels.resetAll}
            </button>
          </div>
          <h3 className="font-semibold text-brand text-lg mb-5">{labels.title}</h3>
          {content}
        </div>
      </aside>

      {/* Mobile bottom sheet */}
      {isMobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex flex-col justify-end">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-xs" onClick={onCloseMobile} aria-hidden="true" />
          <div className="relative bg-white rounded-t-3xl max-h-[90vh] flex flex-col">
            <div className="flex items-center justify-between px-5 pt-5 pb-3 border-b border-gray-100">
              <div>
                <h3 className="font-semibold text-brand text-lg">{labels.mobileTitle}</h3>
                <p className="text-xs text-text-muted">
                  {totalMatches === 1 ? labels.mobileMatchOne : labels.mobileMatchMany.replace('[n]', String(totalMatches))}
                </p>
              </div>
              <button type="button" onClick={onCloseMobile} aria-label={labels.mobileReset} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                <X className="w-4 h-4 text-brand" />
              </button>
            </div>
            <div className="overflow-y-auto px-5 py-5 flex-1 space-y-7">
              {/* Search -- the mobile drawer's own search box; on desktop
                  the adjacent YourSafariCard already covers this, so it's
                  not duplicated into the shared `content` there. */}
              <SafariSearchBar
                searchQuery={filters.searchQuery}
                onSearchChange={(q) => onFilterChange({ ...filters, searchQuery: q })}
                labels={labels.search}
              />
              {content}
            </div>
            <div className="flex items-center gap-3 px-5 py-4 border-t border-gray-100">
              <button type="button" onClick={onReset} className="flex-1 py-3 rounded-xl border border-gray-200 text-sm font-semibold text-brand">
                {labels.mobileReset}
              </button>
              <button type="button" onClick={onCloseMobile} className="flex-[2] py-3 rounded-xl bg-brand text-white text-sm font-semibold">
                {labels.mobileApply.replace('[n]', String(totalMatches))}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
