import { Wifi, Waves, Sparkles, UtensilsCrossed, Trees, Mountain, Bath, Leaf, Binoculars, BadgeCheck } from 'lucide-react'
import type { TierStay } from '@/data/packages'

const AMENITY_ICONS: Record<string, typeof Wifi> = {
  wifi: Wifi,
  pool: Waves,
  spa: Sparkles,
  restaurant: UtensilsCrossed,
  garden: Trees,
  view: Mountain,
  ensuite: Bath,
  'all-inclusive': BadgeCheck,
  'organic-farm': Leaf,
  'wildlife-view': Binoculars,
}

export default function AmenityStay({ label, stay }: { label: string; stay: TierStay }) {
  return (
    <div className="rounded-xl overflow-hidden border border-gray-100 bg-white">
      <div className="relative h-24 w-full bg-light-green">
        {/* eslint-disable-next-line @next/next/no-img-element -- temporary hotlinked placeholder from the property's own site, swap for next/image once real/licensed photos are hosted locally */}
        <img src={stay.image} alt={stay.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
      </div>
      <div className="p-2.5">
        <p className="text-[10px] font-bold uppercase tracking-wide text-gold-label">{label}</p>
        <p className="text-xs font-semibold text-brand leading-tight mt-0.5">{stay.name}</p>
        <div className="flex gap-1.5 mt-1.5">
          {stay.amenities.slice(0, 4).map((a) => {
            const Icon = AMENITY_ICONS[a] ?? BadgeCheck
            return <Icon key={a} className="w-3 h-3 text-text-muted" />
          })}
        </div>
      </div>
    </div>
  )
}
