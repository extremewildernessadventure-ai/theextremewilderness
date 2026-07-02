'use client'

import { useTranslations } from 'next-intl'
import { Star, Shield, MapPin, Headphones } from 'lucide-react'

export default function TrustBar() {
  const t = useTranslations('home')

  const items = [
    { Icon: Star,       text: t('trustRating'),     sub: t('trustRatingSub') },
    { Icon: Shield,     text: t('tatoCertified'),    sub: t('tatoCertifiedSub') },
    { Icon: MapPin,     text: t('tanzaniaBased'),    sub: t('tanzaniaBasedSub') },
    { Icon: Headphones, text: t('support'),          sub: t('supportSub') },
  ]

  return (
    <div className="bg-brand-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
          {items.map(({ Icon, text, sub }) => (
            <div key={text} className="flex items-center gap-3 px-4 py-4 lg:py-5">
              <Icon className="w-5 h-5 text-gold flex-shrink-0" />
              <div>
                <p className="text-white font-semibold text-sm leading-tight">{text}</p>
                <p className="text-white/75 text-xs mt-0.5">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
