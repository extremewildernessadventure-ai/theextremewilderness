'use client'

import { useState, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import { useBooking } from '@/context/BookingContext'
import {
  filterSafaris, sortSafaris, activeFilterCount, makeInitialFilters,
  type BrowsableSafari, type SafariFilterState, type SortOption, type TierKey,
} from '@/lib/safariBrowse'
import SafariFilterSidebar, { type FilterSidebarLabels } from './SafariFilterSidebar'
import YourSafariCard, { type YourSafariCardLabels } from './YourSafariCard'
import ActiveFilterChips, { type ActiveFilterChipsLabels } from './ActiveFilterChips'
import SafariCard, { type SafariCardLabels } from './SafariCard'
import SafariEmptyState, { type EmptyStateLabels } from './SafariEmptyState'
import SafariPagination from './SafariPagination'
import CompareBar, { type CompareBarLabels } from './CompareBar'
import CompareModal, { type CompareModalLabels } from './CompareModal'

const ITEMS_PER_PAGE = 6
const MAX_COMPARE = 3

export interface SafariBrowserLabels {
  card: SafariCardLabels
  sidebar: FilterSidebarLabels
  yourSafari: YourSafariCardLabels
  chips: ActiveFilterChipsLabels
  empty: EmptyStateLabels
  compareBar: CompareBarLabels
  compareModal: CompareModalLabels
  prevPage: string
  nextPage: string
}

interface Props {
  items: BrowsableSafari[]
  labels: SafariBrowserLabels
}

function isTierKey(v: string | null): v is TierKey {
  return v === 'trail' || v === 'reserve' || v === 'sovereign'
}

export default function SafariBrowser({ items, labels }: Props) {
  const searchParams = useSearchParams()
  const initialTier = searchParams.get('tier')
  const { openBooking } = useBooking()

  const bounds = useMemo(() => {
    const durations = items.map((i) => i.duration)
    const prices = items.map((i) => i.priceFrom)
    return {
      minDuration: items.length ? Math.min(...durations) : 2,
      maxDuration: items.length ? Math.max(...durations) : 14,
      maxPrice: items.length ? Math.ceil(Math.max(...prices) / 500) * 500 : 10000,
    }
  }, [items])

  const [filters, setFiltersState] = useState<SafariFilterState>(() => ({
    ...makeInitialFilters(bounds),
    tiers: isTierKey(initialTier) ? [initialTier] : [],
  }))
  const [sortOption, setSortOptionState] = useState<SortOption>('recommended')
  const [currentPage, setCurrentPage] = useState(1)
  const [comparedSlugs, setComparedSlugs] = useState<string[]>([])
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false)
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false)

  // Changing filters/sort always means the current page's contents are about
  // to change, so reset pagination right in the same handler that causes it --
  // not via a separate effect watching for the change (an anti-pattern: it
  // causes an extra cascading render for a value derivable at the call site).
  const setFilters = (f: SafariFilterState) => { setFiltersState(f); setCurrentPage(1) }
  const setSortOption = (s: SortOption) => { setSortOptionState(s); setCurrentPage(1) }

  const filtered = useMemo(() => filterSafaris(items, filters), [items, filters])
  const sorted = useMemo(() => sortSafaris(filtered, sortOption), [filtered, sortOption])
  const totalPages = Math.max(1, Math.ceil(sorted.length / ITEMS_PER_PAGE))
  const paginated = useMemo(
    () => sorted.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE),
    [sorted, currentPage]
  )

  const availableParks = useMemo(() => {
    const seen = new Map<string, string>()
    for (const item of items) {
      item.destinationSlugs.forEach((slug, i) => { if (!seen.has(slug)) seen.set(slug, item.destinationNames[i] ?? slug) })
    }
    return [...seen.entries()].map(([slug, name]) => ({ slug, name })).sort((a, b) => a.name.localeCompare(b.name))
  }, [items])

  const availableCountries = useMemo(() => {
    const seen = new Set<string>()
    items.forEach((i) => i.countries.forEach((c) => seen.add(c)))
    return [...seen].sort()
  }, [items])

  const availableActivityTypes = useMemo(() => {
    const seen = new Set<string>()
    items.forEach((i) => seen.add(i.type))
    return [...seen]
  }, [items])

  const availableMonths = useMemo(() => {
    const order = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const seen = new Set<string>()
    items.forEach((i) => (i.bestMonths ?? []).forEach((m) => seen.add(m)))
    return order.filter((m) => seen.has(m))
  }, [items])

  const operatorCounts = useMemo(() => {
    let ewa = 0, other = 0
    items.forEach((i) => (i.operatorName === 'EWA Safari Outfitters' ? ewa++ : other++))
    return { ewa, other }
  }, [items])

  const comparedSafaris = useMemo(() => items.filter((i) => comparedSlugs.includes(i.slug)), [items, comparedSlugs])

  const toggleCompare = (slug: string) => {
    setComparedSlugs((prev) => {
      if (prev.includes(slug)) return prev.filter((s) => s !== slug)
      if (prev.length >= MAX_COMPARE) return [...prev.slice(1), slug]
      return [...prev, slug]
    })
  }

  const handlePlan = (safari: BrowsableSafari) => {
    openBooking({ packageName: safari.name, priceFrom: String(safari.priceFrom), duration: String(safari.duration) })
  }

  return (
    <div className="flex flex-col lg:flex-row gap-8 items-start">
      {/* "Your Safari" renders once, inside SafariFilterSidebar itself, stacked
          directly above its filter panel (desktop) / inside its bottom-sheet
          drawer (mobile) -- a single SafariFilterSidebar mount handles both,
          same as before, rather than mounting the whole sidebar (with its own
          mobile-drawer state) twice per breakpoint. */}
      <SafariFilterSidebar
        filters={filters}
        onFilterChange={setFilters}
        onReset={() => setFilters(makeInitialFilters(bounds))}
        totalMatches={filtered.length}
        isMobileOpen={isMobileFilterOpen}
        onCloseMobile={() => setIsMobileFilterOpen(false)}
        bounds={bounds}
        availableParks={availableParks}
        availableCountries={availableCountries}
        availableMonths={availableMonths}
        availableActivityTypes={availableActivityTypes}
        operatorCounts={operatorCounts}
        labels={labels.sidebar}
        yourSafariLabels={labels.yourSafari}
      />

      <div className="flex-1 w-full min-w-0">
        <div className="lg:hidden mb-4">
          <YourSafariCard
            filters={filters}
            onFilterChange={setFilters}
            availableCountries={availableCountries}
            availableParks={availableParks}
            availableActivityTypes={availableActivityTypes}
            availableMonths={availableMonths}
            labels={labels.yourSafari}
          />
        </div>

        <ActiveFilterChips
          filters={filters}
          totalMatches={filtered.length}
          onFilterChange={setFilters}
          onReset={() => setFilters(makeInitialFilters(bounds))}
          sortOption={sortOption}
          onSortChange={setSortOption}
          onOpenMobileFilters={() => setIsMobileFilterOpen(true)}
          activeFilterCount={activeFilterCount(filters, bounds)}
          currentPage={currentPage}
          itemsPerPage={ITEMS_PER_PAGE}
          bounds={bounds}
          labels={labels.chips}
        />

        {paginated.length === 0 ? (
          <SafariEmptyState
            allSafaris={items}
            currentFilters={filters}
            onFilterChange={setFilters}
            onReset={() => setFilters(makeInitialFilters(bounds))}
            bounds={bounds}
            labels={labels.empty}
          />
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {paginated.map((safari) => (
                <SafariCard
                  key={safari.slug}
                  safari={safari}
                  isCompared={comparedSlugs.includes(safari.slug)}
                  onToggleCompare={toggleCompare}
                  labels={labels.card}
                />
              ))}
            </div>
            <SafariPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              prevLabel={labels.prevPage}
              nextLabel={labels.nextPage}
            />
          </>
        )}
      </div>

      <CompareBar
        comparedSafaris={comparedSafaris}
        onRemoveCompare={(slug) => setComparedSlugs((prev) => prev.filter((s) => s !== slug))}
        onClearCompare={() => setComparedSlugs([])}
        onOpenModal={() => setIsCompareModalOpen(true)}
        labels={labels.compareBar}
      />
      <CompareModal
        isOpen={isCompareModalOpen}
        onClose={() => setIsCompareModalOpen(false)}
        safaris={comparedSafaris}
        onPlan={handlePlan}
        labels={labels.compareModal}
      />
    </div>
  )
}
