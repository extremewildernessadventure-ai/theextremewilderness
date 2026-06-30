'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import { ArrowRight, MapPin } from 'lucide-react'

// ─── Data ─────────────────────────────────────────────────────────────────────

const countries = ['Tanzania', 'Kenya', 'Rwanda'] as const
type Country = (typeof countries)[number]

const maps: Record<Country, string> = {
  Tanzania: '/Maps/Tanzania%20major%20destinations%20travel%20map.png',
  Kenya:    '/Maps/Kenya%20map%20of%20major%20destinations.png',
  Rwanda:   '/Maps/Rwanda%20major%20destinations%20travel%20map.png',
}

const countryDescKeys: Record<Country, string> = {
  Tanzania: 'tanzaniaDesc',
  Kenya:    'kenyaDesc',
  Rwanda:   'rwandaDesc',
}

const sidebar: Record<Country, { name: string; href: string; pkg: number; icon: string }[]> = {
  Tanzania: [
    { name: 'Serengeti & Ngorongoro', href: '/destinations', pkg: 24, icon: '🦁' },
    { name: 'Arusha & Kilimanjaro',   href: '/trekking',     pkg: 18, icon: '🏔️' },
    { name: 'Tarangire & Manyara',    href: '/destinations', pkg: 12, icon: '🐘' },
    { name: 'Coast & Zanzibar',       href: '/destinations', pkg: 10, icon: '🏝️' },
    { name: 'Southern Circuit',       href: '/destinations', pkg: 8,  icon: '🐆' },
    { name: 'Western Tanzania',       href: '/destinations', pkg: 4,  icon: '🦍' },
  ],
  Kenya: [
    { name: 'Masai Mara',        href: '/kenya', pkg: 14, icon: '🦁' },
    { name: 'Amboseli',          href: '/kenya', pkg: 8,  icon: '🐘' },
    { name: 'Samburu',           href: '/kenya', pkg: 5,  icon: '🦒' },
    { name: 'Tsavo & Coast',     href: '/kenya', pkg: 7,  icon: '🏝️' },
    { name: 'Rift Valley Lakes', href: '/kenya', pkg: 6,  icon: '🦩' },
    { name: 'Nairobi & Central', href: '/kenya', pkg: 4,  icon: '🏙️' },
  ],
  Rwanda: [
    { name: 'Volcanoes NP & Gorillas', href: '/rwanda', pkg: 12, icon: '🦍' },
    { name: 'Nyungwe Forest',          href: '/rwanda', pkg: 6,  icon: '🐒' },
    { name: 'Akagera NP',             href: '/rwanda', pkg: 5,  icon: '🦛' },
    { name: 'Kigali City',            href: '/rwanda', pkg: 3,  icon: '🏙️' },
  ],
}

const allLink: Record<Country, string> = {
  Tanzania: '/destinations',
  Kenya:    '/kenya',
  Rwanda:   '/rwanda',
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function MapSection() {
  const t = useTranslations('home')
  const [country, setCountry] = useState<Country>('Tanzania')

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block text-gold font-semibold text-xs uppercase tracking-widest mb-3">
            {t('destinationMaps')}
          </span>
          <h2 className="text-3xl lg:text-4xl font-semibold text-brand mb-3">
            {t('exploreByRegion')}
          </h2>
          <p className="text-text-muted max-w-lg mx-auto text-sm">
            {t('exploreByRegionDesc')}
          </p>
        </div>

        {/* Country tab switcher */}
        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {countries.map((c) => (
            <button
              key={c}
              onClick={() => setCountry(c)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all border ${
                country === c
                  ? 'bg-brand text-white border-brand shadow-md'
                  : 'border-gray-200 text-text-muted bg-white hover:border-brand hover:text-brand'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Main layout: map + sidebar */}
        <div className="flex flex-col lg:flex-row gap-6 items-start">

          {/* Map image panel */}
          <div className="flex-1 min-w-0">
            <div className="relative w-full rounded-2xl p-[4px] overflow-hidden shadow-xl">
              {/* Rotating green border */}
              <div
                className="absolute inset-0 animate-[spin_3s_linear_infinite]"
                style={{
                  background:
                    'conic-gradient(from 0deg, transparent 0deg, transparent 270deg, #1C3A2A 300deg, #3a7a52 335deg, #1C3A2A 355deg, transparent 360deg)',
                }}
              />
              {/* Map content */}
              <div className="relative rounded-[12px] overflow-hidden bg-[#f5f0e8] flex items-center justify-center p-4">
                <Image
                  key={country}
                  src={maps[country]}
                  alt={`${country} destinations map`}
                  width={1400}
                  height={1000}
                  className="w-full h-auto"
                  sizes="(max-width: 1024px) 100vw, 72vw"
                  priority
                />
              </div>
            </div>
            <p className="text-center text-xs text-text-muted mt-2 flex items-center justify-center gap-1.5">
              <MapPin className="w-3 h-3" />
              {country} — Map of Major Destinations
            </p>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-light-green rounded-2xl p-4 mb-4 border border-brand/10">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-bold text-brand text-sm">{country}</span>
              </div>
              <p className="text-xs text-text-muted leading-relaxed">{t(countryDescKeys[country])}</p>
            </div>

            <h3 className="font-semibold text-brand text-xs uppercase tracking-wider mb-2 px-1">
              Top Regions
            </h3>
            <div className="space-y-1.5">
              {sidebar[country].map((r) => (
                <div
                  key={r.name}
                  className="flex items-center gap-2.5 p-3 rounded-xl border border-brand bg-white shadow-sm cursor-default"
                >
                  <span className="flex-1 text-sm font-medium text-brand leading-tight">{r.name}</span>
                  <span className="text-[10px] bg-brand/10 text-brand font-bold px-1.5 py-0.5 rounded-full flex-shrink-0">
                    {r.pkg}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href={allLink[country]}
              className="flex items-center justify-center gap-2 mt-4 px-4 py-3 bg-brand hover:bg-brand-secondary text-white text-sm font-bold rounded-xl transition-colors"
            >
              All {country} Safaris
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
