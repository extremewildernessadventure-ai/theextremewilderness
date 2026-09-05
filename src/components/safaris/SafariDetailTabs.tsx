'use client'

import { useState, type ReactNode } from 'react'

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

  return (
    <div>
      <div role="tablist" className="flex gap-1 overflow-x-auto border-b border-gray-200 mb-6 scrollbar-hide">
        {tabs.map(({ id }) => (
          <button
            key={id}
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

      {tabs.map(({ id, content }) => (
        <div key={id} role="tabpanel" hidden={active !== id}>
          {content}
        </div>
      ))}
    </div>
  )
}
