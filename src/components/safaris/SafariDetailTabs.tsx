'use client'

import { useState, useEffect, useRef, useCallback, type ReactNode } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export type DetailTabId = 'itinerary' | 'overview' | 'camps' | 'wildlife' | 'inclusions' | 'reviews'

export interface SafariDetailTabsLabels {
  itinerary: string
  overview: string
  camps: string
  wildlife: string
  inclusions: string
  reviews: string // "Guest Reviews & Ratings ([n])" -- [n] interpolated by caller
}

interface Props {
  labels: SafariDetailTabsLabels
  // Tabs that have nothing to show (e.g. no camps roster, no wildlifeTargets)
  // are simply omitted from `tabs` by the caller rather than rendered empty.
  tabs: { id: DetailTabId; content: ReactNode }[]
  defaultTab?: DetailTabId
}

export default function SafariDetailTabs({ labels, tabs, defaultTab = 'itinerary' }: Props) {
  const availableIds = tabs.map((t) => t.id)
  const initial = availableIds.includes(defaultTab) ? defaultTab : availableIds[0]
  const [active, setActive] = useState<DetailTabId>(initial)

  // Supports deep-linking straight to a tab via #tab-<id> (e.g. the header's
  // "(N reviews)" link jumps to #tab-reviews) -- checked once on mount so a
  // shared/bookmarked link opens on the right tab without a layout flash.
  useEffect(() => {
    const hash = window.location.hash.replace('#tab-', '') as DetailTabId
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional: syncs the active tab with a URL hash that only exists outside React (window.location), read once on mount
    if (availableIds.includes(hash)) setActive(hash)
    // eslint-disable-next-line react-hooks/exhaustive-deps -- only read the hash once, on first mount
  }, [])

  // The tab row can overflow (6 tabs don't always fit one line, especially
  // on narrower desktop widths) -- scrollbar-hide means there's otherwise no
  // visible way for a mouse/trackpad user to know there's more to scroll to,
  // so a pair of arrow buttons appear at either edge whenever there's
  // somewhere left to scroll, matching the gallery's own prev/next arrows.
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  const updateScrollState = useCallback(() => {
    const el = scrollerRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 4)
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4)
  }, [])

  useEffect(() => {
    updateScrollState()
    window.addEventListener('resize', updateScrollState)
    return () => window.removeEventListener('resize', updateScrollState)
  }, [updateScrollState])

  const scrollByAmount = (dir: 1 | -1) => {
    scrollerRef.current?.scrollBy({ left: dir * 160, behavior: 'smooth' })
  }

  return (
    <div>
      <div className="relative">
        {canScrollLeft && (
          <button
            type="button"
            onClick={() => scrollByAmount(-1)}
            aria-label="Scroll tabs left"
            className="absolute start-0 top-0 bottom-2 z-10 flex items-center px-1"
          >
            <span className="w-7 h-7 rounded-full bg-black/35 hover:bg-black/55 text-white flex items-center justify-center backdrop-blur-md transition-colors">
              <ChevronLeft className="w-4 h-4 rtl:rotate-180" />
            </span>
          </button>
        )}

        <div
          ref={scrollerRef}
          role="tablist"
          onScroll={updateScrollState}
          className="flex gap-1 overflow-x-auto border-b border-gray-200 mb-6 scrollbar-hide"
        >
          {tabs.map(({ id }) => (
            <button
              key={id}
              id={`tab-${id}`}
              role="tab"
              aria-selected={active === id}
              type="button"
              onClick={() => setActive(id)}
              className={`shrink-0 px-4 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
                active === id ? 'border-brand text-brand' : 'border-transparent text-text-muted hover:text-brand'
              }`}
            >
              {labels[id]}
            </button>
          ))}
        </div>

        {canScrollRight && (
          <button
            type="button"
            onClick={() => scrollByAmount(1)}
            aria-label="Scroll tabs right"
            className="absolute end-0 top-0 bottom-2 z-10 flex items-center px-1"
          >
            <span className="w-7 h-7 rounded-full bg-black/35 hover:bg-black/55 text-white flex items-center justify-center backdrop-blur-md transition-colors">
              <ChevronRight className="w-4 h-4 rtl:rotate-180" />
            </span>
          </button>
        )}
      </div>

      {tabs.map(({ id, content }) => (
        <div key={id} role="tabpanel" hidden={active !== id}>
          {content}
        </div>
      ))}
    </div>
  )
}
