'use client'

import { useTranslations } from 'next-intl'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import type { SafariPackage } from '@/data/packages'
import { getComfortTierBands } from '@/lib/comfortTiers'
import type { WizardState, SetField } from './types'
import type { ComfortStyle, Pace } from '@/lib/matchPackages'

const STYLES: ComfortStyle[] = ['comfort', 'luxury', 'ultra']
const PACES: Pace[] = ['relaxed', 'classic']

export default function StepStyle({
  state,
  setField,
  packages,
  onNext,
  onBack,
}: {
  state: WizardState
  setField: SetField
  packages: SafariPackage[]
  onNext: () => void
  onBack: () => void
}) {
  const t = useTranslations('planBuilder.step3')
  const bands = getComfortTierBands(packages)

  return (
    <div>
      <h1 className="text-2xl sm:text-3xl font-semibold text-brand mb-2">{t('title')}</h1>
      <p className="text-text-muted text-sm mb-8">{t('subtitle')}</p>

      <fieldset className="mb-8">
        <legend className="text-xs font-semibold uppercase tracking-wide text-text-muted mb-3">
          {t('comfortLabel')}
        </legend>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {STYLES.map((style) => {
            const band = bands[style]
            const active = state.style === style
            return (
              <button
                key={style}
                type="button"
                onClick={() => setField('style', style)}
                className={`rounded-xl border px-4 py-4 text-left transition-colors ${
                  active ? 'bg-brand text-white border-brand' : 'bg-white text-brand border-gray-200 hover:border-brand'
                }`}
              >
                <div className="font-semibold text-sm mb-1">{t(`styles.${style}`)}</div>
                <div className={`text-xs ${active ? 'text-white/70' : 'text-text-muted'}`}>
                  {t('perDayRange', { min: Math.round(band.min), max: Math.round(band.max) })}
                </div>
              </button>
            )
          })}
        </div>
      </fieldset>

      <fieldset className="mb-10">
        <legend className="text-xs font-semibold uppercase tracking-wide text-text-muted mb-3">
          {t('paceLabel')}
        </legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {PACES.map((pace) => {
            const active = state.pace === pace
            return (
              <button
                key={pace}
                type="button"
                onClick={() => setField('pace', pace)}
                className={`rounded-xl border px-4 py-4 text-left transition-colors ${
                  active ? 'bg-brand text-white border-brand' : 'bg-white text-brand border-gray-200 hover:border-brand'
                }`}
              >
                <div className="font-semibold text-sm mb-1">{t(`paces.${pace}.label`)}</div>
                <div className={`text-xs ${active ? 'text-white/70' : 'text-text-muted'}`}>
                  {t(`paces.${pace}.desc`)}
                </div>
              </button>
            )
          })}
        </div>
      </fieldset>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 px-6 py-3.5 border border-gray-200 text-brand font-semibold rounded-xl hover:border-brand transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> {t('backButton')}
        </button>
        <button
          type="button"
          onClick={onNext}
          className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors"
        >
          {t('nextButton')} <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
