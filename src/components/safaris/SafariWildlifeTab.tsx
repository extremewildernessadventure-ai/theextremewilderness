import { Binoculars } from 'lucide-react'
import type { SafariPackage } from '@/data/packages'

export interface SafariWildlifeTabLabels {
  heading: string
  subcopy: string
  chanceGuaranteed: string
  chanceHigh: string
  chanceSeasonal: string
  chanceRare: string
}

interface Props {
  targets: NonNullable<SafariPackage['wildlifeTargets']>
  labels: SafariWildlifeTabLabels
}

// All 4 real chance levels get their own distinct treatment -- the prototype
// this is based on only had 3 visual styles for its 4-value union (Seasonal
// and Rare were identically styled), a completeness gap fixed here rather
// than copied.
const CHANCE_STYLE: Record<string, string> = {
  Guaranteed: 'bg-emerald-100 text-emerald-800',
  High: 'bg-amber-100 text-amber-800',
  Seasonal: 'bg-sky-100 text-sky-800',
  Rare: 'bg-gray-100 text-gray-700',
}

const CHANCE_LABEL_KEY: Record<string, keyof SafariWildlifeTabLabels> = {
  Guaranteed: 'chanceGuaranteed', High: 'chanceHigh', Seasonal: 'chanceSeasonal', Rare: 'chanceRare',
}

export default function SafariWildlifeTab({ targets, labels }: Props) {
  if (targets.length === 0) return null

  return (
    <div>
      <h2 className="text-2xl font-semibold text-brand mb-1">{labels.heading}</h2>
      <p className="text-text-muted text-sm mb-6">{labels.subcopy}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {targets.map((target) => (
          <div key={target.name} className="flex items-start gap-3 p-4 rounded-2xl border border-gray-100 bg-white">
            <Binoculars className="w-5 h-5 text-gold-label/80 shrink-0 mt-0.5" />
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2 mb-1">
                <h3 className="font-semibold text-brand text-sm">{target.name}</h3>
                <span className={`shrink-0 px-2 py-0.5 rounded-full text-[11px] font-semibold ${CHANCE_STYLE[target.chance] ?? CHANCE_STYLE.Rare}`}>
                  {labels[CHANCE_LABEL_KEY[target.chance]] ?? target.chance}
                </span>
              </div>
              {target.note && <p className="text-xs text-text-muted leading-relaxed">{target.note}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
