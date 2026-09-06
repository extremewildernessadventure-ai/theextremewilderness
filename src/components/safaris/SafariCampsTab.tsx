import { Sparkles } from 'lucide-react'
import AmenityStay from './AmenityStay'
import type { CampRosterEntry, CampTierKey } from '@/lib/safariCamps'

export interface SafariCampsTabLabels {
  heading: string
  subcopy: string
  tierTrail: string
  tierReserve: string
  tierSovereign: string
  tierLuxury: string
  tierUltraLuxury: string
}

interface Props {
  roster: CampRosterEntry[]
  labels: SafariCampsTabLabels
}

const TIER_LABEL_KEY: Record<CampTierKey, keyof SafariCampsTabLabels> = {
  trail: 'tierTrail', reserve: 'tierReserve', sovereign: 'tierSovereign',
  luxury: 'tierLuxury', ultraLuxury: 'tierUltraLuxury',
}

export default function SafariCampsTab({ roster, labels }: Props) {
  if (roster.length === 0) return null

  return (
    <div>
      <h2 className="text-2xl font-semibold text-brand mb-1">{labels.heading}</h2>
      <p className="text-text-muted text-sm mb-6">{labels.subcopy}</p>

      <div className="space-y-8">
        {roster.map(({ tier, lodges }) => (
          <div key={tier}>
            <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-gold-label mb-3">
              <Sparkles className="w-3.5 h-3.5" />{labels[TIER_LABEL_KEY[tier]]}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {lodges.map((lodge) => (
                <AmenityStay key={lodge.name} label={labels[TIER_LABEL_KEY[tier]]} stay={lodge} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
