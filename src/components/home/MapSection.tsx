'use client'

import { useTranslations } from 'next-intl'
import EastAfricaRegionExplorer from '@/components/map/EastAfricaRegionExplorer'
import Reveal from '@/components/motion/Reveal'

export default function MapSection() {
  const t = useTranslations('home')

  const countryDescriptions = {
    tanzania: t('tanzaniaDesc'),
    kenya: t('kenyaDesc'),
    rwanda: t('rwandaDesc'),
  }

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <Reveal className="text-center mb-10">
          <span className="inline-block text-gold-label font-semibold text-xs uppercase tracking-widest mb-3">
            {t('destinationMaps')}
          </span>
          <h2 className="text-3xl lg:text-4xl font-semibold text-brand mb-3">
            {t('exploreByRegion')}
          </h2>
          <p className="text-text-muted max-w-xl mx-auto text-sm">
            {t('exploreByRegionDesc')}
          </p>
        </Reveal>

        <EastAfricaRegionExplorer showHeader={false} countryDescriptions={countryDescriptions} />
      </div>
    </section>
  )
}
