'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { ArrowRight, Clock, MapPin } from 'lucide-react'
import Badge from '@/components/shared/Badge'
import type { MatchResult } from '@/lib/matchPackages'
import type { Currency } from '@/lib/fxRates'
import { convertPrice } from '@/lib/fxRates'

const CURRENCY_SYMBOL: Record<Currency, string> = { USD: '$', EUR: '€', GBP: '£' }

export default function ResultCard({
  result,
  isTopMatch,
  currency,
  rates,
  month,
  year,
  reasonOverride,
}: {
  result: MatchResult
  isTopMatch: boolean
  currency: Currency
  rates: Record<Currency, number>
  month?: string
  year?: number
  reasonOverride?: string
}) {
  const t = useTranslations('planBuilder.results')
  const tTags = useTranslations('planBuilder.step2.tags')
  const pkg = result.package
  const price = convertPrice(pkg.priceFrom, currency, rates)

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-5">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex flex-wrap gap-2">
          {isTopMatch && <Badge label={t('closestMatch')} variant="gold" />}
          {pkg.badge && <Badge label={pkg.badge} variant="outline" />}
        </div>
      </div>

      <h3 className="font-semibold text-brand text-lg mb-2">{pkg.name}</h3>

      <div className="flex flex-wrap gap-3 text-xs text-text-muted mb-3">
        <span className="flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-gold" />
          {pkg.duration} {t('daysLabel')}
        </span>
        <span className="flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-gold" />
          {pkg.destinations.map((d) => d.charAt(0).toUpperCase() + d.slice(1)).join(', ')}
        </span>
      </div>

      <p className="text-sm text-text-muted leading-relaxed mb-3">
        {reasonOverride ??
          t('whyLine', {
            month: month ?? '',
            year: year ?? 0,
            interests: result.matchedTags.length
              ? result.matchedTags.map((tag) => tTags(tag)).join(', ')
              : t('generalFit'),
          })}
      </p>

      {result.paxWarning && (
        <p className="text-xs text-gold-label font-semibold mb-3">
          {t('paxWarning', { max: pkg.groupSize.max })}
        </p>
      )}

      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div>
          <span className="text-text-muted text-xs">{t('fromLabel')} </span>
          <span className="text-brand font-bold text-lg">
            {CURRENCY_SYMBOL[currency]}{price.toLocaleString('en-US')}
          </span>
          <span className="text-text-muted text-xs">/pp</span>
          {currency !== 'USD' && <p className="text-[10px] text-text-muted">{t('approxNote')}</p>}
        </div>
        <Link
          href={`/safaris/${pkg.slug}`}
          className="flex items-center gap-1 text-sm font-semibold text-brand hover:text-gold transition-colors"
        >
          {t('viewLabel')} <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <details className="mt-4 group">
        <summary className="text-xs font-semibold text-brand cursor-pointer select-none">{t('priceDetailsLabel')}</summary>
        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-text-muted">
          <div>
            <p className="font-semibold text-brand mb-1">{t('includedLabel')}</p>
            <ul className="space-y-1">
              {pkg.included.map((item) => <li key={item}>· {item}</li>)}
            </ul>
          </div>
          <div>
            <p className="font-semibold text-brand mb-1">{t('notIncludedLabel')}</p>
            <ul className="space-y-1">
              {pkg.excluded.map((item) => <li key={item}>· {item}</li>)}
            </ul>
          </div>
        </div>
      </details>
    </div>
  )
}
