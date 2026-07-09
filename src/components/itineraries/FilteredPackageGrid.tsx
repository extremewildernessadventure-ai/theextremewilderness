'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { Clock, Users, MapPin, ArrowRight } from 'lucide-react'

interface PackageData {
  slug: string
  name: string
  duration: number
  priceFrom: number
  image: string
  destinations: string[]
  groupSize?: { min: number; max: number }
  badge?: string | null
}

interface Props {
  packages: PackageData[]
  labels: {
    filterAll: string
    filterTanzania: string
    filterKenya: string
    filterCombined: string
    days: string
    max: string
    pax: string
    from: string
    view: string
  }
}

const KENYA_DESTS  = ['masai-mara', 'amboseli', 'samburu', 'tsavo', 'nakuru']
const TZ_DESTS     = ['serengeti', 'ngorongoro', 'tarangire', 'manyara', 'zanzibar', 'arusha', 'ruaha', 'nyerere']

type Tab = 'all' | 'tanzania' | 'kenya' | 'combined'

function pkgCountry(dests: string[]): 'tanzania' | 'kenya' | 'combined' {
  const hasK = dests.some((d) => KENYA_DESTS.includes(d))
  const hasT = dests.some((d) => TZ_DESTS.includes(d))
  if (hasK && hasT) return 'combined'
  if (hasK) return 'kenya'
  return 'tanzania'
}

export default function FilteredPackageGrid({ packages, labels }: Props) {
  const [tab, setTab] = useState<Tab>('all')

  const filtered = tab === 'all'
    ? packages
    : packages.filter((p) => pkgCountry(p.destinations) === tab)

  const tabs: { key: Tab; label: string }[] = [
    { key: 'all',       label: labels.filterAll },
    { key: 'tanzania',  label: labels.filterTanzania },
    { key: 'kenya',     label: labels.filterKenya },
    { key: 'combined',  label: labels.filterCombined },
  ]

  return (
    <>
      {/* ── Country filter tabs ── */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {tabs.map(({ key, label }) => (
          <button
            key={key}
            type="button"
            onClick={() => setTab(key)}
            className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all ${
              tab === key
                ? 'bg-brand text-white border-brand shadow-sm'
                : 'bg-white text-brand border-brand/20 hover:border-brand hover:bg-brand/5'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* ── Package cards grid ── */}
      {filtered.length === 0 ? (
        <p className="text-center text-text-muted py-16">{labels.filterAll}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((pkg) => (
            <Link
              key={pkg.slug + pkg.name}
              href={pkg.slug as '/'}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-0.5 transition-all flex flex-col"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {pkg.badge && (
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-gold text-brand text-[10px] font-bold uppercase tracking-wider rounded-full">
                      {pkg.badge}
                    </span>
                  </div>
                )}
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-semibold text-brand text-base leading-snug mb-3">{pkg.name}</h3>
                <div className="flex flex-wrap gap-3 text-xs text-text-muted mb-3">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-gold" />{pkg.duration} {labels.days}
                  </span>
                  {pkg.groupSize && (
                    <span className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-gold" />{labels.max} {pkg.groupSize.max} {labels.pax}
                    </span>
                  )}
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-gold" />
                    {pkg.destinations[0].charAt(0).toUpperCase() + pkg.destinations[0].slice(1)}
                  </span>
                </div>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  <div>
                    <span className="text-text-muted text-xs">{labels.from} </span>
                    <span className="text-brand font-bold text-lg">${pkg.priceFrom.toLocaleString()}</span>
                    <span className="text-text-muted text-xs">/pp</span>
                  </div>
                  <span className="flex items-center gap-1 text-sm font-semibold text-brand group-hover:text-gold transition-colors">
                    {labels.view} <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
