'use client'

import { Search, X } from 'lucide-react'

export interface SafariSearchBarLabels {
  label: string
  placeholder: string
  clearLabel: string
}

interface Props {
  searchQuery: string
  onSearchChange: (query: string) => void
  labels: SafariSearchBarLabels
}

// Matches the prototype's SafariSearchBar, embedded at the top of the filter
// sidebar (desktop panel and mobile bottom sheet alike, since both render
// the same shared `content`) -- this was the only real gap: searchQuery was
// already a fully wired filter field (filterSafaris already matches on it,
// and an active search shows as a removable chip), it just had no actual
// input anywhere to type into, on desktop or mobile.
export default function SafariSearchBar({ searchQuery, onSearchChange, labels }: Props) {
  return (
    <div className="space-y-2">
      <label htmlFor="safari-filter-search-input" className="flex items-center gap-2 text-[10px] font-black text-gold-label uppercase tracking-[0.15em] cursor-pointer">
        <Search className="w-3.5 h-3.5" />{labels.label}
      </label>
      <div className="relative">
        <input
          id="safari-filter-search-input"
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={labels.placeholder}
          className="w-full ps-9 pe-8 py-2.5 text-sm rounded-lg bg-white border border-gray-200 focus:outline-hidden focus:border-brand transition-colors placeholder:text-text-muted"
        />
        <Search className="w-4 h-4 text-text-muted absolute start-3 top-1/2 -translate-y-1/2 pointer-events-none" />
        {searchQuery && (
          <button
            type="button"
            onClick={() => onSearchChange('')}
            aria-label={labels.clearLabel}
            className="absolute end-2.5 top-1/2 -translate-y-1/2 p-1 text-text-muted hover:text-brand rounded-full hover:bg-light-green transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  )
}
