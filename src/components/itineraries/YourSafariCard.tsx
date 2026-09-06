'use client'

import { useState } from 'react'
import { MapPin, Calendar, Search, X, ChevronRight } from 'lucide-react'
import type { SafariFilterState } from '@/lib/safariBrowse'

export interface YourSafariCardLabels {
  title: string
  searchPlaceholder: string
  clearSearchLabel: string
  addOptionsLabel: string
  hideOptionsLabel: string
  destinationsHeading: string
  parksHeading: string
  activitiesHeading: string
  monthPlaceholder: string
  departureMonthHeading: string
  clearDateLabel: string
  countryName: Record<string, string>
  monthName: Record<string, string>
  activityValue: Record<string, string>
}

interface Props {
  filters: SafariFilterState
  onFilterChange: (f: SafariFilterState) => void
  availableCountries: string[]
  availableParks: { slug: string; name: string }[]
  availableActivityTypes: string[]
  availableMonths: string[]
  labels: YourSafariCardLabels
}

// Mobile-only quick-search card matching the prototype's YourSafariCard,
// sitting directly on top of the filter/sort bar. Every field here is real,
// already-tracked filter state (search/countries/parks/activities/month) --
// the prototype's own Start Date/Travelers fields don't map onto any real
// filter dimension this app tracks (packages don't have specific departure
// dates or a traveler-count filter), so this deliberately only ports the
// month picker from that row rather than adding controls that would look
// interactive but not actually filter anything.
export default function YourSafariCard({
  filters, onFilterChange, availableCountries, availableParks, availableActivityTypes, availableMonths, labels,
}: Props) {
  const [showOptions, setShowOptions] = useState(false)
  const [showMonthPicker, setShowMonthPicker] = useState(false)

  const toggleArrayValue = <T,>(arr: T[], value: T): T[] =>
    arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value]

  const toggleCountry = (c: string) => onFilterChange({ ...filters, countries: toggleArrayValue(filters.countries, c) })
  const togglePark = (slug: string) => onFilterChange({ ...filters, parks: toggleArrayValue(filters.parks, slug) })
  const toggleActivity = (a: string) => onFilterChange({ ...filters, activityTypes: toggleArrayValue(filters.activityTypes, a) })

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
      <h3 className="font-semibold text-brand text-xl mb-4">{labels.title}</h3>

      <div className="space-y-3">
        {/* Search */}
        <div>
          <div className="flex items-center gap-3">
            <MapPin className="w-4 h-4 text-gold shrink-0" />
            <div className="flex-1 min-w-0 flex items-center justify-between border border-gray-200 rounded-md bg-white px-3 py-2 focus-within:border-brand transition-colors">
              <input
                type="text"
                value={filters.searchQuery}
                onChange={(e) => onFilterChange({ ...filters, searchQuery: e.target.value })}
                placeholder={labels.searchPlaceholder}
                className="w-full text-sm text-brand placeholder:text-text-muted bg-transparent focus:outline-hidden"
              />
              <div className="flex items-center gap-1 shrink-0 ms-2">
                {filters.searchQuery && (
                  <button
                    type="button"
                    onClick={() => onFilterChange({ ...filters, searchQuery: '' })}
                    aria-label={labels.clearSearchLabel}
                    className="text-text-muted hover:text-brand p-0.5"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
                <Search className="w-4 h-4 text-text-muted pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="ps-7 mt-1.5">
            <button
              type="button"
              onClick={() => setShowOptions((v) => !v)}
              className="text-xs font-semibold text-brand hover:text-gold-label hover:underline transition-colors"
            >
              {showOptions ? labels.hideOptionsLabel : labels.addOptionsLabel}
            </button>
          </div>

          {showOptions && (
            <div className="mt-2 ms-7 p-3 bg-light-green border border-gray-100 rounded-lg text-xs space-y-3">
              {availableCountries.length > 0 && (
                <div>
                  <span className="text-[10px] uppercase font-semibold text-text-muted tracking-wider block mb-1.5">
                    {labels.destinationsHeading}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {availableCountries.map((c) => {
                      const isSelected = filters.countries.includes(c)
                      return (
                        <button
                          key={c}
                          type="button"
                          onClick={() => toggleCountry(c)}
                          className={`px-2 py-1 rounded border text-[11px] font-medium transition-all ${
                            isSelected ? 'bg-brand text-white border-brand' : 'bg-white text-text-muted border-gray-200 hover:border-brand/40'
                          }`}
                        >
                          {isSelected ? '✓ ' : '+ '}{labels.countryName[c] ?? c}
                        </button>
                      )
                    })}
                  </div>
                </div>
              )}

              {availableParks.length > 0 && (
                <div>
                  <span className="text-[10px] uppercase font-semibold text-text-muted tracking-wider block mb-1.5">
                    {labels.parksHeading}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {availableParks.map((p) => {
                      const isSelected = filters.parks.includes(p.slug)
                      return (
                        <button
                          key={p.slug}
                          type="button"
                          onClick={() => togglePark(p.slug)}
                          className={`px-2 py-1 rounded border text-[11px] font-medium transition-all ${
                            isSelected ? 'bg-brand text-white border-brand' : 'bg-white text-text-muted border-gray-200 hover:border-brand/40'
                          }`}
                        >
                          {isSelected ? '✓ ' : '+ '}{p.name}
                        </button>
                      )
                    })}
                  </div>
                </div>
              )}

              {availableActivityTypes.length > 0 && (
                <div>
                  <span className="text-[10px] uppercase font-semibold text-text-muted tracking-wider block mb-1.5">
                    {labels.activitiesHeading}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {availableActivityTypes.map((a) => {
                      const isSelected = filters.activityTypes.includes(a)
                      return (
                        <button
                          key={a}
                          type="button"
                          onClick={() => toggleActivity(a)}
                          className={`px-2 py-1 rounded border text-[11px] font-medium transition-all ${
                            isSelected ? 'bg-gold text-brand border-gold' : 'bg-white text-text-muted border-gray-200 hover:border-brand/40'
                          }`}
                        >
                          {isSelected ? '✓ ' : '+ '}{labels.activityValue[a] ?? a}
                        </button>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Month */}
        {availableMonths.length > 0 && (
          <div className="relative">
            <div className="flex items-center gap-3">
              <Calendar className="w-4 h-4 text-gold shrink-0" />
              <button
                type="button"
                onClick={() => setShowMonthPicker((v) => !v)}
                className="flex-1 min-w-0 flex items-center justify-between border border-gray-200 rounded-md bg-white px-3 py-2 text-start hover:border-brand/40 transition-colors"
              >
                <span className={`text-sm truncate ${filters.selectedMonth ? 'font-medium text-brand' : 'text-text-muted'}`}>
                  {filters.selectedMonth ? (labels.monthName[filters.selectedMonth] ?? filters.selectedMonth) : labels.monthPlaceholder}
                </span>
                <ChevronRight className="w-4 h-4 text-text-muted shrink-0 rtl:rotate-180" />
              </button>
            </div>

            {showMonthPicker && (
              <div className="absolute start-7 end-0 top-full mt-2 bg-white border border-gray-100 rounded-xl shadow-lg p-4 z-40">
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-gray-100">
                  <span className="text-xs font-bold text-brand">{labels.departureMonthHeading}</span>
                  {filters.selectedMonth && (
                    <button
                      type="button"
                      onClick={() => { onFilterChange({ ...filters, selectedMonth: null }); setShowMonthPicker(false) }}
                      className="text-[11px] text-gold-label hover:underline"
                    >
                      {labels.clearDateLabel}
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {availableMonths.map((m) => {
                    const isSelected = filters.selectedMonth === m
                    return (
                      <button
                        key={m}
                        type="button"
                        onClick={() => {
                          onFilterChange({ ...filters, selectedMonth: isSelected ? null : m })
                          setShowMonthPicker(false)
                        }}
                        className={`py-2 px-2 rounded border text-center transition-all text-xs font-semibold ${
                          isSelected ? 'bg-brand text-white border-brand' : 'bg-light-green text-brand border-gray-100 hover:border-brand/40'
                        }`}
                      >
                        {labels.monthName[m] ?? m}
                      </button>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
