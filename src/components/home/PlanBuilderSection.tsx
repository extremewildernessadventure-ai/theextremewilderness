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
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block text-gold-label font-semibold text-xs uppercase tracking-widest mb-4">
          {t('heroCta')}
        </span>
        <div className="mb-6">
          <h2 className="inline-block bg-brand text-white text-2xl lg:text-3xl font-bold rounded-xl px-8 py-4 shadow-sm">
            {t('entryCard.title')}
          </h2>
        </div>
        <p className="text-text-muted text-lg max-w-2xl mx-auto mb-12">
          {t('entryCard.subtitle')}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
          {steps.map(({ Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-gold rounded-xl shadow-sm flex items-center justify-center">
                <Icon className="w-5 h-5 text-brand" />
              </div>
              <span className="text-brand text-sm font-medium">{label}</span>
            </div>
          ))}
        </div>

        <Link
          href="/plan"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand hover:bg-brand-secondary text-white font-bold rounded-xl transition-colors"
        >
          {t('entryCard.cta')} <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  )
}
