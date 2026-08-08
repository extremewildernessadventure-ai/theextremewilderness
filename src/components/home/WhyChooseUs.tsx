import { useTranslations } from 'next-intl'
import { MapPin, Users, Star, Shield } from 'lucide-react'
import Reveal from '@/components/motion/Reveal'
import { RevealGroup, RevealItem } from '@/components/motion/RevealGroup'

export default function WhyChooseUs({ gold = false }: { gold?: boolean }) {
  const t = useTranslations('home')

  const reasons = [
    { Icon: MapPin, title: t('whyBornTitle'), description: t('whyBornDesc') },
    { Icon: Users,  title: t('whyTailorTitle'), description: t('whyTailorDesc') },
    { Icon: Star,   title: t('whyGuidesTitle'), description: t('whyGuidesDesc') },
    { Icon: Shield, title: t('whyCareTitle'), description: t('whyCareDesc') },
  ]

  return (
    <section className={`py-20 ${gold ? 'bg-gold' : 'bg-light-green'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-14">
          <span className={`inline-block font-semibold text-xs uppercase tracking-widest mb-3 ${gold ? 'text-brand/70' : 'text-gold-label'}`}>
            {t('whyTravelWithUs')}
          </span>
          <h2 className="text-3xl lg:text-4xl font-semibold mb-4 text-brand">
            {t('ourDifference')}
          </h2>
          <p className={`max-w-xl mx-auto ${gold ? 'text-brand/80' : 'text-text-muted'}`}>{t('weAreTanzania')}</p>
        </Reveal>

        <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map(({ Icon, title, description }) => (
            <RevealItem
              key={title}
              className="group p-7 rounded-2xl border border-gray-100 hover:border-brand hover:shadow-lg transition-all duration-200 bg-white"
            >
              <div className="w-12 h-12 bg-light-green rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand transition-colors">
                <Icon className="w-5 h-5 text-brand group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-semibold text-brand text-lg mb-2">{title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{description}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
