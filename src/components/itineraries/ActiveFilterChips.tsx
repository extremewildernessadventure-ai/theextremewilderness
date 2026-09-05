'use client'

import { SlidersHorizontal, ArrowUpDown, RotateCcw, X } from 'lucide-react'
import type { SafariFilterState, SortOption, TierKey } from '@/lib/safariBrowse'

export interface ActiveFilterChipsLabels {
  matchOne: string
  matchMany: string // "[n] safaris match" -- caller interpolates [n]
  showingRange: string // "(Showing [start]–[end] of [total])" -- caller interpolates
  curationSubtitle: string
  filtersButton: string
  sortLabel: string
  sortRecommended: string
  sortPriceAsc: string
  sortPriceDesc: string
  sortDurationAsc: string
  sortDurationDesc: string
  activeCriteriaLabel: string
  clearAll: string // "Clear all ([n])" -- caller interpolates [n]
  chipSearch: string // 'Search: "[q]"'
  chipTier: string // "Tier: [v]"
  chipCountry: string // "Country: [v]"
  chipPark: string // "Park: [v]"
  chipActivity: string // "Experience: [v]"
  chipMonth: string // "Best Month: [v]"
  chipPrice: string // "Budget: Up to $[v]"
  chipDuration: string // "Duration: [min]–[max] Days"
  chipOperatorEwa: string
  chipOperatorOther: string
  tierName: Record<TierKey, string>
  countryName: Record<string, string>
  activityValue: Record<string, string>
  monthName: Record<string, string>
  parkName: Record<string, string>
}

interface Props {
  filters: SafariFilterState
  totalMatches: number
  onFilterChange: (f: SafariFilterState) => void
  onReset: () => void
  sortOption: SortOption
  onSortChange: (s: SortOption) => void
  onOpenMobileFilters: () => void
  activeFilterCount: number
  currentPage: number
  itemsPerPage: number
  bounds: { minDuration: number; maxDuration: number; maxPrice: number }
  labels: ActiveFilterChipsLabels
}

interface Chip {
  key: string
  text: string
  onRemove: () => void
}

export default function ActiveFilterChips({
  filters, totalMatches, onFilterChange, onReset, sortOption, onSortChange,
  onOpenMobileFilters, activeFilterCount, currentPage, itemsPerPage, bounds, labels,
}: Props) {
  const chips: Chip[] = []

  if (filters.searchQuery.trim() !== '') {
    chips.push({ key: 'search', text: labels.chipSearch.replace('[q]', filters.searchQuery.trim()), onRemove: () => onFilterChange({ ...filters, searchQuery: '' }) })
  }
  filters.tiers.forEach((t) => chips.push({
    key: `tier-${t}`, text: labels.chipTier.replace('[v]', labels.tierName[t]),
    onRemove: () => onFilterChange({ ...filters, tiers: filters.tiers.filter((x) => x !== t) }),
  }))
  filters.countries.forEach((c) => chips.push({
    key: `country-${c}`, text: labels.chipCountry.replace('[v]', labels.countryName[c] ?? c),
    onRemove: () => onFilterChange({ ...filters, countries: filters.countries.filter((x) => x !== c) }),
  }))
  filters.parks.forEach((p) => chips.push({
    key: `park-${p}`, text: labels.chipPark.replace('[v]', labels.parkName[p] ?? p),
    onRemove: () => onFilterChange({ ...filters, parks: filters.parks.filter((x) => x !== p) }),
  }))
  filters.activityTypes.forEach((a) => chips.push({
    key: `activity-${a}`, text: labels.chipActivity.replace('[v]', labels.activityValue[a] ?? a),
    onRemove: () => onFilterChange({ ...filters, activityTypes: filters.activityTypes.filter((x) => x !== a) }),
  }))
  if (filters.selectedMonth) {
    chips.push({ key: 'month', text: labels.chipMonth.replace('[v]', labels.monthName[filters.selectedMonth] ?? filters.selectedMonth), onRemove: () => onFilterChange({ ...filters, selectedMonth: null }) })
  }
  if (filters.maxPrice < bounds.maxPrice) {
    chips.push({ key: 'price', text: labels.chipPrice.replace('[v]', filters.maxPrice.toLocaleString('en-US')), onRemove: () => onFilterChange({ ...filters, maxPrice: bounds.maxPrice }) })
  }
  if (filters.minDuration > bounds.minDuration || filters.maxDuration < bounds.maxDuration) {
    chips.push({
      key: 'duration', text: labels.chipDuration.replace('[min]', String(filters.minDuration)).replace('[max]', String(filters.maxDuration)),
      onRemove: () => onFilterChange({ ...filters, minDuration: bounds.minDuration, maxDuration: bounds.maxDuration }),
    })
  }
  if (filters.operatorTypes.includes('ewa')) {
    chips.push({ key: 'op-ewa', text: labels.chipOperatorEwa, onRemove: () => onFilterChange({ ...filters, operatorTypes: filters.operatorTypes.filter((o) => o !== 'ewa') }) })
  }
  if (filters.operatorTypes.includes('other')) {
    chips.push({ key: 'op-other', text: labels.chipOperatorOther, onRemove: () => onFilterChange({ ...filters, operatorTypes: filters.operatorTypes.filter((o) => o !== 'other') }) })
  }

  const start = Math.min((currentPage - 1) * itemsPerPage + 1, totalMatches)
  const end = Math.min(currentPage * itemsPerPage, totalMatches)

  return (
    <div className="mb-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
        <div>
          <button
            type="button"
            onClick={onOpenMobileFilters}
            className="lg:hidden relative inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 text-sm font-semibold text-brand mb-2"
          >
            <SlidersHorizontal className="w-4 h-4" />{labels.filtersButton}
            {activeFilterCount > 0 && (
              <span className="absolute -top-1.5 -end-1.5 w-4 h-4 rounded-full bg-gold text-brand text-[9px] font-bold flex items-center justify-center">
                {activeFilterCount}
              </span>
            )}
          </button>
          <p className="text-sm text-brand">
            <span className="font-bold">{totalMatches}</span>{' '}
            {totalMatches === 1 ? labels.matchOne : labels.matchMany.replace('[n]', String(totalMatches))}
            {totalMatches > 0 && <span className="text-text-muted font-normal"> {labels.showingRange.replace('[start]', String(start)).replace('[end]', String(end)).replace('[total]', String(totalMatches))}</span>}
          </p>
          <p className="hidden sm:block text-xs text-text-muted mt-0.5">{labels.curationSubtitle}</p>
        </div>

        <label className="flex items-center gap-2 text-sm">
          <ArrowUpDown className="w-3.5 h-3.5 text-gold" />
          <span className="text-text-muted whitespace-nowrap">{labels.sortLabel}</span>
          <select
            value={sortOption}
            onChange={(e) => onSortChange(e.target.value as SortOption)}
            className="border border-gray-200 rounded-lg px-2.5 py-1.5 text-sm text-brand bg-white"
          >
            <option value="recommended">{labels.sortRecommended}</option>
            <option value="price-asc">{labels.sortPriceAsc}</option>
            <option value="price-desc">{labels.sortPriceDesc}</option>
            <option value="duration-asc">{labels.sortDurationAsc}</option>
            <option value="duration-desc">{labels.sortDurationDesc}</option>
          </select>
        </label>
      </div>

      {chips.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-gray-100">
          <span className="text-xs text-text-muted">{labels.activeCriteriaLabel}</span>
          {chips.map((chip) => (
            <button
              key={chip.key}
              type="button"
              onClick={chip.onRemove}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-light-green text-brand text-xs font-medium hover:bg-light-green/70 transition-colors"
            >
              {chip.text} <X className="w-3 h-3" />
            </button>
          ))}
          <button type="button" onClick={onReset} className="inline-flex items-center gap-1 text-xs font-semibold text-gold-label">
            <RotateCcw className="w-3 h-3" />{labels.clearAll.replace('[n]', String(chips.length))}
          </button>
        </div>
      )}
    </div>
  )
}
