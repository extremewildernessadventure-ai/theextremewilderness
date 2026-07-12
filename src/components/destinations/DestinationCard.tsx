import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { MapPin, Calendar, Binoculars } from 'lucide-react'

interface Props {
  slug: string
  name: string
  regionLabel: string
  description: string
  image: string
  wildlife: string[]
  bestTime: string
  experiencesLabel: string
  priceFrom: string
  featured?: boolean
  labels: { from: string; featuredBadge: string }
}

export default function DestinationCard({
  slug,
  name,
  regionLabel,
  description,
  image,
  wildlife,
  bestTime,
  experiencesLabel,
  priceFrom,
  featured = false,
  labels,
}: Props) {
  return (
    <Link
      href={`/destinations/${slug}`}
      className={`group relative flex flex-col justify-end rounded-2xl overflow-hidden block ${
        featured ? 'min-h-[420px]' : 'min-h-[300px]'
      }`}
    >
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-700"
        sizes={featured ? '(max-width: 640px) 100vw, 66vw' : '(max-width: 640px) 100vw, 33vw'}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand/95 via-brand/50 to-transparent" />

      {featured && (
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gold text-brand text-[10px] font-bold uppercase tracking-widest rounded-full shadow">
            ★ {labels.featuredBadge}
          </span>
        </div>
      )}

      <div className="relative z-10 p-6">
        <p className="flex items-center gap-1.5 text-white/60 text-xs font-medium mb-1.5">
          <MapPin className="w-3 h-3 text-gold" /> {regionLabel}
        </p>
        <h3 className={`font-bold text-white leading-snug mb-2 ${featured ? 'text-2xl sm:text-3xl' : 'text-lg'}`}>
          {name}
        </h3>
        <p className="text-white/70 text-xs leading-relaxed line-clamp-2 mb-4">
          {description}
        </p>

        {wildlife.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {wildlife.slice(0, 4).map((w) => (
              <span key={w} className="px-2 py-0.5 bg-white/10 text-white text-[10px] font-medium rounded-full border border-white/15">
                {w}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between gap-3 pt-3 border-t border-white/20 flex-wrap">
          <div className="flex items-center gap-3 text-white/60 text-[11px]">
            {bestTime && (
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3 text-gold" /> {bestTime}
              </span>
            )}
            {experiencesLabel && (
              <span className="flex items-center gap-1">
                <Binoculars className="w-3 h-3 text-gold" /> {experiencesLabel}
              </span>
            )}
          </div>
          {priceFrom && (
            <span className="text-gold text-sm font-bold whitespace-nowrap">
              {labels.from} {priceFrom}
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}
