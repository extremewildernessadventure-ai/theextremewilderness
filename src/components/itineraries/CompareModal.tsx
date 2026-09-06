'use client'

import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { X, Check, ChevronRight, Sparkles } from 'lucide-react'
import type { BrowsableSafari, TierKey } from '@/lib/safariBrowse'

export interface CompareModalLabels {
  eyebrow: string
  title: string // "Comparing [n] Safari Expeditions"
  viewFullDetails: string
  rowItinerary: string
  rowPrice: string
  rowPriceSuffix: string
  rowTier: string
  rowDuration: string
  rowDurationValue: string // "[d] Days / [n] Nights"
  rowDestination: string
  rowParks: string
  rowActivity: string
  rowBestMonths: string
  rowInclusions: string
  ctaPlan: string
  tierName: Record<TierKey, string>
  activityValue: Record<string, string>
  monthName: Record<string, string>
}

interface Props {
  isOpen: boolean
  onClose: () => void
  safaris: BrowsableSafari[]
  onPlan: (safari: BrowsableSafari) => void
  labels: CompareModalLabels
}

export default function CompareModal({ isOpen, onClose, safaris, onPlan, labels }: Props) {
  if (!isOpen || safaris.length === 0) return null

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-6">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} aria-hidden="true" />
      <div className="relative z-10 w-full max-w-5xl max-h-[90vh] bg-white rounded-2xl overflow-hidden flex flex-col">
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-gray-100">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-gold-label">{labels.eyebrow}</span>
            <h3 className="text-xl sm:text-2xl font-semibold text-brand">{labels.title.replace('[n]', String(safaris.length))}</h3>
          </div>
          <button type="button" onClick={onClose} aria-label={labels.viewFullDetails} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
            <X className="w-4 h-4 text-brand" />
          </button>
        </div>

        <div className="overflow-auto p-4 sm:p-6">
          <table className="min-w-[700px] w-full border-collapse">
            <thead>
              <tr>
                <th className="w-40 text-start align-bottom pb-3 text-[11px] font-semibold uppercase tracking-wider text-gold-label">{labels.rowItinerary}</th>
                {safaris.map((s) => (
                  <th key={s.slug} className="text-start align-top p-3">
                    <Link href={`/safaris/${s.slug}`} onClick={onClose} className="block group">
                      <span className="relative block w-full h-28 rounded-xl overflow-hidden mb-2">
                        <Image src={s.heroImage} alt={s.heroImageAlt ?? s.name} fill className="object-cover group-hover:scale-105 transition-transform" sizes="220px" />
                      </span>
                      <span className="block font-semibold text-brand text-sm group-hover:text-gold-label transition-colors">{s.name}</span>
                      <span className="flex items-center gap-1 text-xs text-gold-label font-semibold mt-1">
                        {labels.viewFullDetails} <ChevronRight className="w-3 h-3 rtl:rotate-180" />
                      </span>
                    </Link>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-t border-gray-100">
                <td className="py-3 pe-3 font-semibold text-brand align-top">{labels.rowPrice}</td>
                {safaris.map((s) => (
                  <td key={s.slug} className="py-3 px-3 align-top text-text-muted">
                    <span className="text-brand font-bold">${s.priceFrom.toLocaleString('en-US')}</span> {labels.rowPriceSuffix}
                  </td>
                ))}
              </tr>
              <tr className="border-t border-gray-100">
                <td className="py-3 pe-3 font-semibold text-brand align-top">{labels.rowTier}</td>
                {safaris.map((s) => (
                  <td key={s.slug} className="py-3 px-3 align-top">
                    <div className="flex flex-wrap gap-1.5">
                      {s.tiersAvailable.map((t) => (
                        <span key={t} className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-light-green text-brand text-[11px] font-semibold">
                          <Sparkles className="w-2.5 h-2.5 text-gold-label" />{labels.tierName[t]}
                        </span>
                      ))}
                    </div>
                  </td>
                ))}
              </tr>
              <tr className="border-t border-gray-100">
                <td className="py-3 pe-3 font-semibold text-brand align-top">{labels.rowDuration}</td>
                {safaris.map((s) => (
                  <td key={s.slug} className="py-3 px-3 align-top text-text-muted">
                    {labels.rowDurationValue.replace('[d]', String(s.duration)).replace('[n]', String(s.duration - 1))}
                  </td>
                ))}
              </tr>
              <tr className="border-t border-gray-100">
                <td className="py-3 pe-3 font-semibold text-brand align-top">{labels.rowDestination}</td>
                {safaris.map((s) => (
                  <td key={s.slug} className="py-3 px-3 align-top text-text-muted capitalize">{s.countries.join(', ')}</td>
                ))}
              </tr>
              <tr className="border-t border-gray-100">
                <td className="py-3 pe-3 font-semibold text-brand align-top">{labels.rowParks}</td>
                {safaris.map((s) => (
                  <td key={s.slug} className="py-3 px-3 align-top">
                    <div className="flex flex-wrap gap-1.5">
                      {s.destinationNames.map((name) => (
                        <span key={name} className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-700 text-[11px]">{name}</span>
                      ))}
                    </div>
                  </td>
                ))}
              </tr>
              <tr className="border-t border-gray-100">
                <td className="py-3 pe-3 font-semibold text-brand align-top">{labels.rowActivity}</td>
                {safaris.map((s) => (
                  <td key={s.slug} className="py-3 px-3 align-top text-text-muted">{labels.activityValue[s.type] ?? s.type}</td>
                ))}
              </tr>
              {safaris.some((s) => s.bestMonths && s.bestMonths.length > 0) && (
                <tr className="border-t border-gray-100">
                  <td className="py-3 pe-3 font-semibold text-brand align-top">{labels.rowBestMonths}</td>
                  {safaris.map((s) => (
                    <td key={s.slug} className="py-3 px-3 align-top">
                      <div className="flex flex-wrap gap-1.5">
                        {(s.bestMonths ?? []).map((m) => (
                          <span key={m} className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-700 text-[11px]">{labels.monthName[m] ?? m}</span>
                        ))}
                      </div>
                    </td>
                  ))}
                </tr>
              )}
              <tr className="border-t border-gray-100">
                <td className="py-3 pe-3 font-semibold text-brand align-top">{labels.rowInclusions}</td>
                {safaris.map((s) => (
                  <td key={s.slug} className="py-3 px-3 align-top">
                    <ul className="space-y-1">
                      {s.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-1.5 text-text-muted text-xs">
                          <Check className="w-3 h-3 text-gold-label shrink-0 mt-0.5" />{h}
                        </li>
                      ))}
                    </ul>
                  </td>
                ))}
              </tr>
              <tr className="border-t border-gray-100">
                <td />
                {safaris.map((s) => (
                  <td key={s.slug} className="py-3 px-3 align-top">
                    <button
                      type="button"
                      onClick={() => { onClose(); onPlan(s) }}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-brand text-white text-xs font-semibold hover:bg-brand-dark transition-colors"
                    >
                      {labels.ctaPlan} <ChevronRight className="w-3.5 h-3.5 rtl:rotate-180" />
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
