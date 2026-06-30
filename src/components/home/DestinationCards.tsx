'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import { ArrowRight } from 'lucide-react'

const featured = [
  {
    name: 'Masai Mara, Kenya',
    href: '/kenya',
    image: '/images/gallery/maasai-mara.jpg',
    packages: 2,
    wildlife: 'Great Migration Crossings · Lion · Cheetah',
    heat: 5,
  },
  {
    name: 'Serengeti National Park',
    href: '/destinations/serengeti',
    image: '/images/gallery/Serengeti-National-park.jpg',
    packages: 18,
    wildlife: 'Lion · Leopard · Wildebeest · Elephant',
    heat: 5,
  },
  {
    name: 'Volcanoes National Park',
    href: '/destinations/volcanoes',
    image: '/images/gallery/Volcanoes%20NP.png',
    packages: 2,
    wildlife: 'Mountain Gorilla · Golden Monkey · Elephant',
    heat: 5,
  },
  {
    name: 'Kilimanjaro',
    image: '/images/gallery/kilimanjaro.png',
    packages: 6,
    wildlife: "Africa's Highest Peak · 5,895m",
    heat: 5,
  },
  {
    name: 'Zanzibar Island',
    href: '/destinations/zanzibar',
    image: '/images/gallery/zanzibar-1.jpg',
    packages: 4,
    wildlife: 'Dolphins · Turtles · Colobus Monkey',
    heat: 4,
  },
  {
    name: 'Mombasa',
    href: '/destinations/kenyan-coast',
    image: '/images/gallery/mombasa.png',
    packages: 2,
    wildlife: 'White Sand Beaches · Coral Reefs · Swahili Culture',
    heat: 4,
  },
]

function DestCard({ dest }: { dest: (typeof featured)[number] }) {
  const inner = (
    <>
      <Image
        src={dest.image}
        alt={dest.name}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      {/* Stronger gradient so image text doesn't bleed through */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand via-brand/60 to-brand/10" />
      <div className="absolute inset-0 p-4 flex flex-col justify-between">
        <div className="self-end">
          <span className="text-xs bg-white/20 text-white backdrop-blur-sm px-2 py-1 rounded-full">
            {dest.packages} packages
          </span>
        </div>
        <div>
          <h3 className="text-white font-semibold text-base leading-snug line-clamp-1">
            {dest.name}
          </h3>
          <p className="text-white/65 text-xs mt-1 line-clamp-1">{dest.wildlife}</p>
          {dest.href && (
            <div className="flex items-center gap-1 mt-2 text-gold text-xs font-semibold sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
              Explore <ArrowRight className="w-3 h-3" />
            </div>
          )}
        </div>
      </div>
    </>
  )

  if (dest.href) {
    return (
      <Link
        href={dest.href}
        className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-brand block"
      >
        {inner}
      </Link>
    )
  }

  return (
    <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-brand">
      {inner}
    </div>
  )
}

export default function DestinationCards() {
  const t = useTranslations('home')
  const tc = useTranslations('common')
  const [active, setActive] = useState(0)
  const touchX = useRef(0)

  // Auto-advance; resets timer on each manual interaction
  useEffect(() => {
    const id = setInterval(
      () => setActive((i) => (i + 1) % featured.length),
      4000,
    )
    return () => clearInterval(id)
  }, [active])

  const prev = () => setActive((i) => (i - 1 + featured.length) % featured.length)
  const next = () => setActive((i) => (i + 1) % featured.length)

  const onTouchStart = (e: React.TouchEvent) => {
    touchX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    const delta = touchX.current - e.changedTouches[0].clientX
    if (delta > 50) next()
    else if (delta < -50) prev()
  }

  return (
    <section className="py-20 bg-light-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="inline-block text-gold font-semibold text-xs uppercase tracking-widest mb-3">
              {t('topDestinations')}
            </span>
            <h2 className="text-3xl lg:text-4xl font-semibold text-brand">
              {t('exploreEastAfrica')}
            </h2>
          </div>
          <Link
            href="/destinations"
            className="hidden sm:flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-secondary transition-colors"
          >
            {tc('allDestinations')} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* ── Mobile carousel (< 640px) ── */}
        <div className="sm:hidden">
          <div
            className="overflow-hidden rounded-2xl border-[3px] border-gold"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {featured.map((dest) => (
                <div key={dest.name} className="flex-shrink-0 w-full">
                  <DestCard dest={dest} />
                </div>
              ))}
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center items-center gap-2 mt-4">
            {featured.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Go to destination ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === active
                    ? 'w-5 h-2 bg-brand'
                    : 'w-2 h-2 bg-brand/30 hover:bg-brand/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* ── Desktop grid (unchanged) ── */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((dest) => (
            <div key={dest.name} className="rounded-2xl border-[3px] border-gold">
              <DestCard dest={dest} />
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:hidden">
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand"
          >
            {tc('allDestinations')} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
