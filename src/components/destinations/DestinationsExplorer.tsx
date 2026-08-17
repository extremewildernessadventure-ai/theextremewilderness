'use client'

import { useState } from 'react'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import EastAfricaMap from './EastAfricaMap'

type CountryKey = 'tanzania' | 'kenya' | 'rwanda'

export interface AreaCard {
  kicker: string
  heading?: string
  destinations: { slug: string; name: string; teaser: string }[]
}

export interface CountryAreaData {
  introHeading: string
  introBody: string
  areas: AreaCard[]
  seeAllHref: string
  seeAllLabel: string
}

interface Props {
  data: Record<CountryKey, CountryAreaData>
}

function AreaCardBlock({ area, countSuffix }: { area: AreaCard; countSuffix: string }) {
  return (
    <div className="bg-white border border-gold rounded-2xl overflow-hidden">
      <div className="px-6 py-5">
        <p className="text-gold-label text-[10px] font-bold uppercase tracking-widest mb-1">{area.kicker}</p>
        {area.heading && <h3 className="text-xl font-semibold text-brand">{area.heading}</h3>}
        <p className="text-text-muted text-xs mt-1">{area.destinations.length} {countSuffix}</p>
      </div>
      <div className="px-6 pb-5 border-t border-brand/10 pt-2">
        {area.destinations.map((d) => (
          <Link
            key={d.slug}
            href={`/destinations/${d.slug}`}
            className="flex items-baseline justify-between gap-4 py-3 border-b border-dashed border-brand/10 last:border-0 group/row"
          >
            <span className="font-semibold text-brand group-hover/row:text-gold transition-colors">{d.name}</span>
            <span className="text-text-muted text-xs text-end max-w-[55%]">{d.teaser}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default function DestinationsExplorer({ data }: Props) {
  const [activeCountry, setActiveCountry] = useState<CountryKey>('tanzania')
  const tNav = useTranslations('nav')
  const t = useTranslations('destinationsHub')

  const countries: CountryKey[] = ['tanzania', 'kenya', 'rwanda']
  const active = data[activeCountry]

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <span className="text-gold-label font-semibold text-xs uppercase tracking-widest">{t('mapEyebrow')}</span>
          <h2 className="text-3xl lg:text-4xl font-semibold text-brand mt-3 mb-4">{t('mapHeading')}</h2>
          <p className="text-text-muted leading-relaxed mb-3">{t('mapCopy1')}</p>
          <p className="text-text-muted leading-relaxed">{t('mapCopy2')}</p>
        </div>
        <EastAfricaMap activeCountry={activeCountry} onCountryClick={setActiveCountry} />
      </div>

      <div className="flex justify-center gap-3 flex-wrap mb-10">
        {countries.map((key) => (
          <button
            key={key}
            onClick={() => setActiveCountry(key)}
            className={`px-7 py-3 text-sm font-medium uppercase tracking-widest rounded-full border transition-colors ${
              activeCountry === key
                ? 'bg-brand text-white border-brand'
                : 'border-brand/20 text-text-muted hover:border-gold hover:text-brand'
            }`}
          >
            {tNav(key)}
          </button>
        ))}
      </div>

      <div className="text-center max-w-2xl mx-auto mb-10">
        <h3 className="text-2xl font-semibold text-brand mb-2">{active.introHeading}</h3>
        <p className="text-text-muted">{active.introBody}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {active.areas.map((area) => (
          <AreaCardBlock key={area.kicker} area={area} countSuffix={t('destinationsSuffix')} />
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          href={active.seeAllHref}
          className="inline-flex items-center gap-2 px-7 py-3.5 border border-brand text-brand hover:bg-brand hover:text-white font-semibold rounded-xl transition-colors"
        >
          {active.seeAllLabel}
        </Link>
      </div>
    </div>
  )
}
