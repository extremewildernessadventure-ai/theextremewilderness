'use client'

import Image from 'next/image'
import { Columns3, Trash2, ArrowRight, X } from 'lucide-react'
import type { BrowsableSafari } from '@/lib/safariBrowse'

export interface CompareBarLabels {
  header: string
  counter: string // "[n] of 3 selected"
  clear: string
  compareTable: string
  selectTwo: string
}

interface Props {
  comparedSafaris: BrowsableSafari[]
  onRemoveCompare: (slug: string) => void
  onClearCompare: () => void
  onOpenModal: () => void
  labels: CompareBarLabels
}

export default function CompareBar({ comparedSafaris, onRemoveCompare, onClearCompare, onOpenModal, labels }: Props) {
  if (comparedSafaris.length === 0) return null
  const canCompare = comparedSafaris.length >= 2

  return (
    <div className="fixed bottom-4 inset-x-4 sm:inset-x-8 z-40 print:hidden">
      <div className="max-w-4xl mx-auto bg-brand rounded-2xl shadow-2xl px-4 sm:px-6 py-3.5 flex flex-col sm:flex-row sm:items-center gap-3">
        <div className="flex items-center gap-2 text-white shrink-0">
          <Columns3 className="w-4 h-4 text-gold" />
          <span className="text-sm font-semibold">{labels.header}</span>
          <span className="text-xs text-white/60">{labels.counter.replace('[n]', String(comparedSafaris.length))}</span>
        </div>

        <div className="flex items-center gap-2 flex-1 overflow-x-auto">
          {comparedSafaris.map((s) => (
            <span key={s.slug} className="inline-flex items-center gap-1.5 bg-white/10 rounded-full ps-1 pe-2 py-1 shrink-0">
              <span className="relative w-6 h-6 rounded-full overflow-hidden shrink-0">
                <Image src={s.heroImage} alt="" fill className="object-cover" sizes="24px" />
              </span>
              <span className="text-xs text-white truncate max-w-[130px] sm:max-w-[170px]">{s.name}</span>
              <button type="button" onClick={() => onRemoveCompare(s.slug)} aria-label={s.name}>
                <X className="w-3 h-3 text-white/70 hover:text-white" />
              </button>
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button type="button" onClick={onClearCompare} className="flex items-center gap-1.5 text-white/70 hover:text-white text-xs">
            <Trash2 className="w-3.5 h-3.5" /><span className="hidden sm:inline">{labels.clear}</span>
          </button>
          <button
            type="button"
            onClick={onOpenModal}
            disabled={!canCompare}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-colors ${
              canCompare ? 'bg-gold text-brand hover:bg-gold-dark' : 'bg-white/15 text-white/40 cursor-not-allowed'
            }`}
          >
            {canCompare ? labels.compareTable : labels.selectTwo}
            <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
          </button>
        </div>
      </div>
    </div>
  )
}
