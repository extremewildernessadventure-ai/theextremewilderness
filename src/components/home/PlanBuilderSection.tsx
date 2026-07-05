import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { ArrowRight, Calendar, Heart, SlidersHorizontal, MapPinned } from 'lucide-react'

export default function PlanBuilderSection() {
  const t = useTranslations('planBuilder')

  const steps = [
    { Icon: Calendar, label: t('progress.step1') },
    { Icon: Heart, label: t('progress.step2') },
    { Icon: SlidersHorizontal, label: t('progress.step3') },
    { Icon: MapPinned, label: t('progress.step4') },
  ]

  return (
    <section className="py-20 bg-brand relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold rounded-full -translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block text-gold font-semibold text-xs uppercase tracking-widest mb-4">
          {t('heroCta')}
        </span>
        <h2 className="text-3xl lg:text-5xl font-semibold text-white mb-4">
          {t('entryCard.title')}
        </h2>
        <p className="text-white/70 text-lg max-w-2xl mx-auto mb-12">
          {t('entryCard.subtitle')}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
          {steps.map(({ Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                <Icon className="w-5 h-5 text-gold" />
              </div>
              <span className="text-white/80 text-sm font-medium">{label}</span>
            </div>
          ))}
        </div>

        <Link
          href="/plan"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors"
        >
          {t('entryCard.cta')} <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  )
}
