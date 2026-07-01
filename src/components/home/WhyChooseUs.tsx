'use client'

import { useTranslations } from 'next-intl'
import { MapPin, Users, Star, Shield } from 'lucide-react'

export default function WhyChooseUs() {
  const t = useTranslations('home')

  const reasons = [
    { Icon: MapPin, title: t('whyBornTitle'), description: t('whyBornDesc') },
    { Icon: Users,  title: t('whyTailorTitle'), description: t('whyTailorDesc') },
    { Icon: Star,   title: t('whyGuidesTitle'), description: t('whyGuidesDesc') },
    { Icon: Shield, title: t('whyCareTitle'), description: t('whyCareDesc') },
  ]

  return (
    <section className="py-20 bg-light-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-gold font-semibold text-xs uppercase tracking-widest mb-3">
            {t('whyTravelWithUs')}
          </span>
          <h2 className="text-3xl lg:text-4xl font-semibold text-brand mb-4">
            {t('ourDifference')}
          </h2>
          <p className="text-text-muted max-w-xl mx-auto">{t('weAreTanzania')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map(({ Icon, title, description }) => (
            <div
              key={title}
              className="group p-7 rounded-2xl border border-gray-100 hover:border-brand hover:shadow-lg transition-all duration-200 bg-white"
            >
              <div className="w-12 h-12 bg-light-green rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand transition-colors">
                <Icon className="w-5 h-5 text-brand group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-semibold text-brand text-lg mb-2">{title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
