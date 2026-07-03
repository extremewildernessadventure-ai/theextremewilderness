'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { ArrowLeft } from 'lucide-react'
import type { SafariPackage } from '@/data/packages'
import { matchPackages, type MatchInput } from '@/lib/matchPackages'
import { trackEvent } from '@/lib/analytics'
import type { Currency } from '@/lib/fxRates'
import ResultCard from './ResultCard'
import HandoffPanel from './HandoffPanel'
import type { WizardState } from './types'

const CURRENCIES: Currency[] = ['USD', 'EUR', 'GBP']

export default function StepResults({
  state,
  matchInput,
  packages,
  tags,
  fxRates,
  onBack,
}: {
  state: WizardState
  matchInput: MatchInput
  packages: SafariPackage[]
  tags: Record<string, string[]>
  fxRates: Record<Currency, number>
  onBack: () => void
}) {
  const t = useTranslations('planBuilder.results')
  const [currency, setCurrency] = useState<Currency>('USD')
  const { results, belowThreshold } = matchPackages(matchInput, packages, tags)
  const topMatch = results[0]

  useEffect(() => {
    if (belowThreshold) {
      trackEvent('plan_no_match', { ...matchInput })
    } else {
      trackEvent('plan_results_view', {
        topSlug: topMatch?.package.slug,
        topScore: topMatch?.score,
        resultCount: results.length,
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <h1 className="text-2xl sm:text-3xl font-semibold text-brand mb-2">{t('title')}</h1>

      {belowThreshold && (
        <div className="bg-gold/10 border border-gold/40 rounded-xl p-4 mb-6">
          <p className="text-sm text-brand font-semibold mb-1">{t('noMatchTitle')}</p>
          <p className="text-sm text-text-muted">{t('noMatchMessage')}</p>
        </div>
      )}

      {/* Currency toggle */}
      <div className="flex items-center gap-2 mb-6">
        <span className="text-xs text-text-muted">{t('currencyLabel')}</span>
        {CURRENCIES.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCurrency(c)}
            className={`px-3 py-1 rounded-full text-xs font-semibold border transition-colors ${
              currency === c ? 'bg-brand text-white border-brand' : 'bg-white text-brand border-gray-200'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Trust block */}
      <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-text-muted mb-8">
        <span>{t('trust1')}</span>
        <span>{t('trust2')}</span>
        <span>{t('trust3')}</span>
      </div>

      {results.map((r, i) => (
        <ResultCard
          key={r.package.slug}
          result={r}
          isTopMatch={i === 0}
          currency={currency}
          rates={fxRates}
          month={state.month}
          year={state.year}
        />
      ))}

      <div className="mt-8">
        <HandoffPanel state={state} topMatch={topMatch} belowThreshold={belowThreshold} />
      </div>

      <button
        type="button"
        onClick={onBack}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-gold transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> {t('backButton')}
      </button>
    </div>
  )
}
