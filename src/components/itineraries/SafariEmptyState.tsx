'use client'

import { useMemo } from 'react'
import { Compass, Sparkles, ArrowRight, RotateCcw } from 'lucide-react'
import { diagnoseEmptyState, type BrowsableSafari, type SafariFilterState } from '@/lib/safariBrowse'

export interface EmptyStateLabels {
  eyebrow: string
  heading: string
  body: string
  diagnosisHeader: string // "Most Restrictive Filter: [label]"
  diagnosisBody: string // "Relaxing this single setting will immediately reveal [n] [matchWord]." -- [matchWord] filled by the caller with matchOne/matchMany below
  fieldName: Record<string, string> // safariBrowse field name -> human label, e.g. 'tiers' -> 'Accommodation Tier'
  relaxCta: string // "Relax [label]"
  resetAll: string
  matchOne: string
  matchMany: string // "[n] safaris"
}

interface Props {
  allSafaris: BrowsableSafari[]
  currentFilters: SafariFilterState
  onFilterChange: (f: SafariFilterState) => void
  onReset: () => void
  bounds: { minDuration: number; maxDuration: number; maxPrice: number }
  labels: EmptyStateLabels
}

export default function SafariEmptyState({ allSafaris, currentFilters, onFilterChange, onReset, bounds, labels }: Props) {
  const diagnosis = useMemo(
    () => diagnoseEmptyState(allSafaris, currentFilters, bounds),
    [allSafaris, currentFilters, bounds]
  )

  return (
    <div className="text-center py-16 px-6 sm:px-10 bg-white rounded-2xl border border-gray-100">
      <div className="w-14 h-14 rounded-full bg-light-green flex items-center justify-center mx-auto mb-5">
        <Compass className="w-6 h-6 text-gold-label" strokeWidth={1.5} />
      </div>
      <span className="text-[11px] font-semibold uppercase tracking-wider text-gold-label">{labels.eyebrow}</span>
      <h3 className="text-2xl sm:text-3xl font-semibold text-brand mt-2 mb-3">{labels.heading}</h3>
      <p className="text-text-muted text-sm leading-relaxed max-w-lg mx-auto mb-8">{labels.body}</p>

      {diagnosis && (
        <div className="max-w-md mx-auto mb-8 p-5 rounded-xl bg-light-green/50 border border-brand/10 text-start">
          <p className="flex items-center gap-2 text-sm font-semibold text-brand mb-1.5">
            <Sparkles className="w-4 h-4 text-gold-label shrink-0" />
            {labels.diagnosisHeader.replace('[label]', labels.fieldName[diagnosis.field] ?? diagnosis.field)}
          </p>
          <p className="text-xs text-text-muted leading-relaxed mb-3">
            {labels.diagnosisBody
              .replace('[n]', String(diagnosis.matchCount))
              .replace('[matchWord]', diagnosis.matchCount === 1 ? labels.matchOne : labels.matchMany.replace('[n]', String(diagnosis.matchCount)))}
          </p>
          <button
            type="button"
            onClick={() => onFilterChange(diagnosis.relax(currentFilters))}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-gold-label transition-colors"
          >
            {labels.relaxCta.replace('[label]', labels.fieldName[diagnosis.field] ?? diagnosis.field)}
            <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
          </button>
        </div>
      )}

      <button
        type="button"
        onClick={onReset}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-brand text-brand font-semibold hover:bg-brand hover:text-white transition-all"
      >
        <RotateCcw className="w-4 h-4" />{labels.resetAll}
      </button>
    </div>
  )
}
