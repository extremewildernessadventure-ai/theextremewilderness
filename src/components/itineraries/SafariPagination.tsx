'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Props {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  prevLabel: string
  nextLabel: string
}

// Same page-number windowing as the prototype's Pagination.tsx, restyled to
// this site's brand/gold tokens -- the prototype's own version used a stray
// blue/red color pair inconsistent with the rest of its own design system
// (flagged during the prototype audit as leftover reference styling), so
// that palette was deliberately not carried over.
function getPageNumbers(currentPage: number, totalPages: number): (number | '...')[] {
  if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1)
  if (currentPage <= 4) return [1, 2, 3, 4, 5, '...', totalPages]
  if (currentPage >= totalPages - 3) return [1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages]
  return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages]
}

export default function SafariPagination({ currentPage, totalPages, onPageChange, prevLabel, nextLabel }: Props) {
  if (totalPages <= 1) return null

  const goTo = (page: number) => {
    if (page === currentPage) return
    onPageChange(page)
    window.scrollTo({ top: 350, behavior: 'smooth' })
  }

  return (
    <nav className="flex flex-wrap items-center justify-center gap-2 mt-10" aria-label="Pagination">
      <button
        type="button"
        onClick={() => goTo(currentPage - 1)}
        disabled={currentPage <= 1}
        aria-label={prevLabel}
        className="inline-flex items-center gap-1 px-3 py-2 rounded-lg border border-gray-200 text-sm font-semibold text-brand disabled:opacity-40 disabled:cursor-not-allowed hover:border-brand/40"
      >
        <ChevronLeft className="w-4 h-4 rtl:rotate-180" />
        <span className="hidden sm:inline">{prevLabel}</span>
      </button>

      <div className="flex items-center gap-1 overflow-x-auto">
        {getPageNumbers(currentPage, totalPages).map((p, i) =>
          p === '...' ? (
            <span key={`ellipsis-${i}`} className="px-2 text-text-muted">…</span>
          ) : (
            <button
              key={p}
              type="button"
              onClick={() => goTo(p)}
              aria-current={p === currentPage ? 'page' : undefined}
              className={`min-w-9 h-9 px-2 rounded-lg text-sm font-semibold transition-colors ${
                p === currentPage ? 'bg-brand text-white' : 'text-brand hover:bg-light-green'
              }`}
            >
              {p}
            </button>
          )
        )}
      </div>

      <button
        type="button"
        onClick={() => goTo(currentPage + 1)}
        disabled={currentPage >= totalPages}
        aria-label={nextLabel}
        className="inline-flex items-center gap-1 px-3 py-2 rounded-lg border border-gray-200 text-sm font-semibold text-brand disabled:opacity-40 disabled:cursor-not-allowed hover:border-brand/40"
      >
        <span className="hidden sm:inline">{nextLabel}</span>
        <ChevronRight className="w-4 h-4 rtl:rotate-180" />
      </button>
    </nav>
  )
}
