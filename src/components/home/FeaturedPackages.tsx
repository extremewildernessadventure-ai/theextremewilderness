'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import { Clock, MapPin, Users, ArrowRight } from 'lucide-react'
import Badge from '@/components/shared/Badge'
import { packages } from '@/data/packages'

function PackageCard({ pkg, tc }: { pkg: (typeof packages)[number]; tc: ReturnType<typeof useTranslations> }) {
  return (
    <Link
      href={`/safaris/${pkg.slug}`}
      className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 flex flex-col h-full"
    >
      <div className="relative h-52 overflow-hidden flex-shrink-0">
        <Image
          src={pkg.heroImage}
          alt={pkg.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {pkg.badge && (
          <div className="absolute top-3 left-3">
            <Badge
              label={
                pkg.badge === 'bestseller'
                  ? tc('bestseller')
                  : pkg.badge === 'new'
                  ? tc('new')
                  : tc('popular')
              }
            />
          </div>
        )}
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <h3 className="font-semibold text-brand text-lg mb-3 group-hover:text-brand-secondary transition-colors">
          {pkg.name}
        </h3>

        <div className="flex flex-wrap gap-3 text-xs text-text-muted mb-4">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {pkg.duration} {tc('nights')}
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" />
            {pkg.destinations.length} {tc('parks')}
          </span>
          <span className="flex items-center gap-1">
            <Users className="w-3.5 h-3.5" />
            {pkg.groupSize.min}–{pkg.groupSize.max} {tc('pax')}
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
            <span className="text-xs text-text-muted">{tc('from')}</span>
            <span className="ml-1 text-brand font-bold text-lg">${pkg.priceFrom.toLocaleString()}</span>
            <span className="text-xs text-text-muted"> / {tc('perPerson').split(' ')[0]}</span>
          </div>
          <span className="flex items-center gap-1 text-sm font-semibold text-brand group-hover:text-gold transition-colors">
            {tc('viewPackage')} <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </Link>
  )
}

export default function FeaturedPackages() {
  const t = useTranslations('home')
  const tc = useTranslations('common')

  const pkgOverrides = [
    { name: t('pkg0Name'), highlights: [t('pkg0H0'), t('pkg0H1'), t('pkg0H2')] },
    { name: t('pkg1Name'), highlights: [t('pkg1H0'), t('pkg1H1'), t('pkg1H2')] },
    { name: t('pkg2Name'), highlights: [t('pkg2H0'), t('pkg2H1'), t('pkg2H2')] },
    { name: t('pkg3Name'), highlights: [t('pkg3H0'), t('pkg3H1'), t('pkg3H2')] },
  ]
  const featured = packages.slice(0, 4).map((pkg, i) => ({
    ...pkg,
    name: pkgOverrides[i].name,
    highlights: [...pkgOverrides[i].highlights, ...pkg.highlights.slice(3)],
  }))

  const [active, setActive] = useState(0)
  const touchX = useRef(0)

  useEffect(() => {
    const id = setInterval(
      () => setActive((i) => (i + 1) % featured.length),
      4000,
    )
    return () => clearInterval(id)
  }, [active, featured.length])

  const prev = () => setActive((i) => (i - 1 + featured.length) % featured.length)
  const next = () => setActive((i) => (i + 1) % featured.length)

  const onTouchStart = (e: React.TouchEvent) => { touchX.current = e.touches[0].clientX }
  const onTouchEnd = (e: React.TouchEvent) => {
    const delta = touchX.current - e.changedTouches[0].clientX
    if (delta > 50) next()
    else if (delta < -50) prev()
  }

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="inline-block text-gold font-semibold text-xs uppercase tracking-widest mb-3">
              {t('safariPackages')}
            </span>
            <h2 className="text-3xl lg:text-4xl font-semibold text-brand">
              {t('mostPopularSafaris')}
            </h2>
          </div>
          <Link
            href="/safaris"
            className="hidden sm:flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-secondary transition-colors"
          >
            {tc('allPackages')} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden">
          <div
            className="overflow-hidden rounded-2xl"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {featured.map((pkg) => (
                <div key={pkg.slug} className="flex-shrink-0 w-full">
                  <PackageCard pkg={pkg} tc={tc} />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center gap-2 mt-4">
            {featured.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={tc('goToSlide', { n: i + 1 })}
                className={`rounded-full transition-all duration-300 ${
                  i === active ? 'w-5 h-2 bg-brand' : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-6">
          {featured.map((pkg) => (
            <PackageCard key={pkg.slug} pkg={pkg} tc={tc} />
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/safaris"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand text-white font-semibold rounded-xl hover:bg-brand-secondary transition-colors"
          >
            {t('viewAllPackages')} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
