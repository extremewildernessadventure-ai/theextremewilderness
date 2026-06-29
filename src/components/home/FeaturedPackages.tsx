import Image from 'next/image'
import Link from 'next/link'
import { Clock, MapPin, Users, ArrowRight } from 'lucide-react'
import Badge from '@/components/shared/Badge'
import { packages } from '@/data/packages'

export default function FeaturedPackages() {
  const featured = packages.slice(0, 4)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="inline-block text-gold font-semibold text-xs uppercase tracking-widest mb-3">
              Safari Packages
            </span>
            <h2 className="text-3xl lg:text-4xl font-semibold text-brand">
              Our Most Popular Safaris
            </h2>
          </div>
          <Link
            href="/safaris"
            className="hidden sm:flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-secondary transition-colors"
          >
            All packages <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((pkg) => (
            <Link
              key={pkg.slug}
              href={`/safaris/${pkg.slug}`}
              className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={pkg.heroImage}
                  alt={pkg.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {pkg.badge && (
                  <div className="absolute top-3 left-3">
                    <Badge label={pkg.badge === 'bestseller' ? 'Bestseller' : pkg.badge === 'new' ? 'New' : 'Popular'} />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="font-semibold text-brand text-lg mb-3 group-hover:text-brand-secondary transition-colors">
                  {pkg.name}
                </h3>

                <div className="flex flex-wrap gap-3 text-xs text-text-muted mb-4">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {pkg.duration} nights
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {pkg.destinations.length} destinations
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" />
                    {pkg.groupSize.min}–{pkg.groupSize.max} pax
                  </span>
                </div>

                <ul className="space-y-1 mb-5 flex-1">
                  {pkg.highlights.slice(0, 3).map((h) => (
                    <li key={h} className="text-xs text-text-muted flex items-start gap-1.5">
                      <span className="text-gold mt-0.5">✓</span>
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div>
                    <span className="text-xs text-text-muted">From</span>
                    <span className="ml-1 text-brand font-bold text-lg">
                      ${pkg.priceFrom.toLocaleString()}
                    </span>
                    <span className="text-xs text-text-muted"> / person</span>
                  </div>
                  <span className="flex items-center gap-1 text-sm font-semibold text-brand group-hover:text-gold transition-colors">
                    View package <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/safaris"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand text-white font-semibold rounded-xl hover:bg-brand-secondary transition-colors"
          >
            View All Packages <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
