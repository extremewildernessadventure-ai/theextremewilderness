import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, MapPin, Users, ArrowRight } from 'lucide-react'
import Badge from '@/components/shared/Badge'
import { packages } from '@/data/packages'

export const metadata: Metadata = {
  title: 'Safari Packages | Tanzania & East Africa',
  description:
    'Browse our curated safari packages — from 5-day Serengeti fly-ins to 10-day Northern Circuit adventures. Custom-built for you by Tanzania-based experts.',
}

export default function SafarisPage() {
  return (
    <>
      <section className="pt-28 pb-12 bg-brand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-white/50 text-sm mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Safari Packages</span>
          </nav>
          <h1 className="text-4xl lg:text-5xl font-semibold text-white mb-4">
            Safari <span className="text-gold">Packages</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl">
            Every safari is tailor-made — these are starting points. Tell us your dream and we'll craft something just for you.
          </p>
        </div>
      </section>

      <section className="py-16 bg-light-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <Link
                key={pkg.slug}
                href={`/safaris/${pkg.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-0.5 flex flex-col"
              >
                <div className="relative h-48">
                  <Image
                    src={pkg.heroImage}
                    alt={pkg.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {pkg.badge && (
                    <div className="absolute top-3 left-3">
                      <Badge label={pkg.badge === 'bestseller' ? 'Bestseller' : pkg.badge === 'new' ? 'New' : 'Popular'} />
                    </div>
                  )}
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h2 className="font-semibold text-brand text-base mb-3">{pkg.name}</h2>
                  <div className="flex flex-wrap gap-3 text-xs text-text-muted mb-4">
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{pkg.duration} nights</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{pkg.destinations.length} parks</span>
                    <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" />{pkg.groupSize.min}–{pkg.groupSize.max} pax</span>
                  </div>
                  <ul className="space-y-1 mb-4 flex-1">
                    {pkg.highlights.slice(0, 3).map((h) => (
                      <li key={h} className="text-xs text-text-muted flex items-start gap-1.5">
                        <span className="text-gold mt-0.5">✓</span>{h}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <div>
                      <span className="text-xs text-text-muted">From </span>
                      <span className="text-brand font-bold">${pkg.priceFrom.toLocaleString()}</span>
                      <span className="text-xs text-text-muted">/pp</span>
                    </div>
                    <span className="flex items-center gap-1 text-sm font-semibold text-brand group-hover:text-gold transition-colors">
                      Details <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
