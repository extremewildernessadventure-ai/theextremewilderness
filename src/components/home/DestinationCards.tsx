'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const featured = [
  {
    name: 'Serengeti National Park',
    href: '/destinations/serengeti',
    image: 'https://placehold.co/600x400/1C3A2A/D4A853?text=Serengeti',
    packages: 24,
    wildlife: 'Lion · Leopard · Wildebeest · Elephant',
    heat: 5,
  },
  {
    name: 'Ngorongoro Crater',
    href: '/destinations/ngorongoro',
    image: 'https://placehold.co/600x400/1C3A2A/D4A853?text=Ngorongoro',
    packages: 18,
    wildlife: 'Big Five · Flamingo · Hyena',
    heat: 5,
  },
  {
    name: 'Zanzibar Island',
    href: '/destinations/zanzibar',
    image: 'https://placehold.co/600x400/2D5A3D/D4A853?text=Zanzibar',
    packages: 10,
    wildlife: 'Dolphins · Turtles · Colobus Monkey',
    heat: 4,
  },
  {
    name: 'Tarangire National Park',
    href: '/destinations/tarangire',
    image: 'https://placehold.co/600x400/2D5A3D/D4A853?text=Tarangire',
    packages: 12,
    wildlife: 'Elephant · Lion · Baobab · 550 Birds',
    heat: 4,
  },
  {
    name: 'Masai Mara, Kenya',
    href: '/kenya/masai-mara',
    image: 'https://placehold.co/600x400/1C3A2A/D4A853?text=Masai+Mara',
    packages: 8,
    wildlife: 'Great Migration Crossings · Lion · Cheetah',
    heat: 5,
  },
  {
    name: 'Kilimanjaro',
    href: '/trekking/kilimanjaro',
    image: 'https://placehold.co/600x400/1C3A2A/D4A853?text=Kilimanjaro',
    packages: 6,
    wildlife: "Africa's Highest Peak · 5,895m",
    heat: 5,
  },
]

function HeatDots({ level }: { level: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className={`w-1.5 h-1.5 rounded-full ${i < level ? 'bg-gold' : 'bg-white/30'}`}
        />
      ))}
    </div>
  )
}

function DestCard({ dest }: { dest: (typeof featured)[number] }) {
  return (
    <Link
      href={dest.href}
      className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-brand block"
    >
      <Image
        src={dest.image}
        alt={dest.name}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand/90 via-brand/20 to-transparent" />
      <div className="absolute inset-0 p-5 flex flex-col justify-between">
        <div className="self-end">
          <span className="text-xs bg-white/20 text-white backdrop-blur-sm px-2 py-1 rounded-full">
            {dest.packages} packages
          </span>
        </div>
        <div>
          <HeatDots level={dest.heat} />
          <h3 className="text-white font-semibold text-lg mt-1">{dest.name}</h3>
          <p className="text-white/70 text-xs mt-1">{dest.wildlife}</p>
          <div className="flex items-center gap-1 mt-3 text-gold text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            Explore <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default function DestinationCards() {
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
              Top Destinations
            </span>
            <h2 className="text-3xl lg:text-4xl font-semibold text-brand">
              Explore East Africa
            </h2>
          </div>
          <Link
            href="/destinations"
            className="hidden sm:flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-secondary transition-colors"
          >
            All destinations <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* ── Mobile carousel (< 640px) ── */}
        <div className="sm:hidden">
          <div
            className="overflow-hidden rounded-2xl"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {featured.map((dest) => (
                <div key={dest.href} className="flex-shrink-0 w-full">
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
            <DestCard key={dest.href} dest={dest} />
          ))}
        </div>

        <div className="text-center mt-8 sm:hidden">
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand"
          >
            All destinations <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
