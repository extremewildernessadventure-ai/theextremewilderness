import { Link } from '@/i18n/navigation'
import { ArrowRight, Compass } from 'lucide-react'
import { getTranslations } from 'next-intl/server'

export default async function PlanBuilderEntryCard() {
  const t = await getTranslations('planBuilder.entryCard')

  return (
    <Link
      href="/plan"
      className="group flex flex-col sm:flex-row sm:items-center justify-between gap-6 rounded-3xl bg-brand px-8 py-8 sm:px-10 sm:py-10 hover:bg-brand-secondary transition-colors"
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-gold rounded-xl flex items-center justify-center flex-shrink-0">
          <Compass className="w-6 h-6 text-brand" />
        </div>
        <div>
          <h3 className="text-white font-semibold text-xl sm:text-2xl mb-1.5">{t('title')}</h3>
          <p className="text-white/70 text-sm sm:text-base max-w-lg">{t('subtitle')}</p>
        </div>
      </div>
      <span className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-gold group-hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors text-sm whitespace-nowrap">
        {t('cta')} <ArrowRight className="w-4 h-4" />
      </span>
    </Link>
  )
}
