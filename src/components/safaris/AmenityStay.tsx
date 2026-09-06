import Image from 'next/image'
import { Wifi, Waves, Sparkles, UtensilsCrossed, Trees, Mountain, Bath, Leaf, Binoculars, BadgeCheck } from 'lucide-react'
import type { TierStay } from '@/data/packages'
import { Link } from '@/i18n/navigation'
import { LODGE_NAME_TO_SLUG } from '@/data/accommodationSlugs'

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
  const slug = LODGE_NAME_TO_SLUG[stay.name]

  const inner = (
    <>
      <div className="relative aspect-video w-full bg-light-green">
        <Image src={stay.image} alt={stay.name} fill loading="lazy" className="object-cover" sizes="(max-width: 768px) 50vw, 256px" />
      </div>
      <div className="p-2.5">
        <p className="text-[10px] font-bold uppercase tracking-wide text-gold-label">{label}</p>
        <p className="text-xs font-semibold text-brand leading-tight mt-0.5">{stay.name}</p>
        {/* Not yet authored for any lodge -- the admin lodge editor already
            has a field for it, so this activates automatically once real
            copy is entered there, with no code change. */}
        {stay.description && (
          <p className="text-[11px] text-text-muted leading-snug mt-1 line-clamp-3">{stay.description}</p>
        )}
        <div className="flex gap-1.5 mt-1.5">
          {stay.amenities.slice(0, 4).map((a) => {
            const Icon = AMENITY_ICONS[a] ?? BadgeCheck
            return <Icon key={a} className="w-3 h-3 text-text-muted" />
          })}
        </div>
      </div>
    </>
  )

  if (slug) {
    return (
      <Link
        href={`/accommodations#${slug}`}
        className="block rounded-xl overflow-hidden border border-gray-100 bg-white hover:border-gold/40 hover:shadow-sm transition-all"
      >
        {inner}
      </Link>
    )
  }

  return <div className="rounded-xl overflow-hidden border border-gray-100 bg-white">{inner}</div>
}
