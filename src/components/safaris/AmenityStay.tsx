import Image from 'next/image'
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
      <div className="relative aspect-video w-full bg-light-green">
        {stay.image.startsWith('/') ? (
          <Image src={stay.image} alt={stay.name} fill loading="lazy" className="object-cover" sizes="(max-width: 768px) 50vw, 256px" />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element -- a small number of properties' photos couldn't be fetched during rehosting (dead/unreachable source); kept as a plain <img> fallback until a working photo is sourced
          <img src={stay.image} alt={stay.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        )}
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
