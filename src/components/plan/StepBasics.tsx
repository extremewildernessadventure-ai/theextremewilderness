'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { ArrowRight } from 'lucide-react'
import { MONTHS } from '@/lib/seasonData'
import type { WizardState, SetField } from './types'

const TRAVELER_PRESETS = [
  { key: 'solo', pax: 1 },
  { key: 'couple', pax: 2 },
  { key: 'family', pax: 4 },
  { key: 'group', pax: 6 },
] as const

// Computed once at module load (not during render) — offers this year plus
// the next two, since safaris are commonly booked 6-12 months in advance.
const CURRENT_YEAR = new Date().getFullYear()
const YEAR_OPTIONS = [CURRENT_YEAR, CURRENT_YEAR + 1, CURRENT_YEAR + 2]

export default function StepBasics({
  state,
  setField,
  onNext,
}: {
  state: WizardState
  setField: SetField
  onNext: () => void
}) {
  const t = useTranslations('planBuilder.step1')
  const [customPax, setCustomPax] = useState(false)

  const activePreset = TRAVELER_PRESETS.find((p) => p.pax === state.pax)
  const monthIndex = MONTHS.findIndex((m) => m.m === state.month)
  const seasonType = MONTHS[monthIndex]?.type ?? 'good'
  const seasonHint =
    seasonType === 'prime' ? t('seasonPrime') : seasonType === 'rain' ? t('seasonRain') : t('seasonGood')

  return (
    <div>
      <h1 className="text-2xl sm:text-3xl font-semibold text-brand mb-2">{t('title')}</h1>
      <p className="text-text-muted text-sm mb-8">{t('subtitle')}</p>

      {/* Travelers */}
      <fieldset className="mb-8">
        <legend className="text-xs font-semibold uppercase tracking-wide text-text-muted mb-3">
          {t('travelersLabel')}
        </legend>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {TRAVELER_PRESETS.map((preset) => (
            <button
              key={preset.key}
              type="button"
              onClick={() => { setCustomPax(false); setField('pax', preset.pax) }}
              className={`rounded-xl border px-4 py-3 text-sm font-semibold transition-colors ${
                !customPax && activePreset?.key === preset.key
                  ? 'bg-brand text-white border-brand'
                  : 'bg-white text-brand border-gray-200 hover:border-brand'
              }`}
            >
              {t(`travelers.${preset.key}`)}
            </button>
          ))}
        </div>
        <div className="mt-3 flex items-center gap-3">
          <button
            type="button"
            onClick={() => setCustomPax(true)}
            className={`text-xs font-semibold px-3 py-1.5 rounded-lg border transition-colors ${
              customPax ? 'text-brand border-brand bg-white' : 'text-text-muted border-gray-300 bg-white hover:border-brand'
            }`}
          >
            {t('customGroupLabel')}
          </button>
          {customPax && (
            <input
              type="number"
              min={1}
              value={state.pax}
              onChange={(e) => setField('pax', Math.max(1, Number(e.target.value)))}
              className="w-20 border border-gray-300 rounded-lg px-3 py-1.5 text-sm text-brand bg-white focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10"
              aria-label={t('customGroupLabel')}
            />
          )}
        </div>
      </fieldset>

      {/* Month & year */}
      <div className="mb-8">
        <label htmlFor="plan-month" className="block text-xs font-semibold uppercase tracking-wide text-text-muted mb-3">
          {t('monthLabel')}
        </label>
        <div className="grid grid-cols-2 gap-3">
          <select
            id="plan-month"
            value={state.month}
            onChange={(e) => setField('month', e.target.value)}
            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-brand focus:outline-none focus:border-brand bg-white"
          >
            {MONTHS.map(({ m }) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
          <select
            id="plan-year"
            aria-label={t('yearLabel')}
            value={state.year}
            onChange={(e) => setField('year', Number(e.target.value))}
            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-brand focus:outline-none focus:border-brand bg-white"
          >
            {YEAR_OPTIONS.map((y) => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
        </div>
        <p className="mt-2 text-xs text-text-muted">{seasonHint}</p>
      </div>

      {/* Duration */}
      <div className="mb-10">
        <label htmlFor="plan-days" className="block text-xs font-semibold uppercase tracking-wide text-text-muted mb-3">
          {t('durationLabel', { days: state.days })}
        </label>
        <input
          id="plan-days"
          type="range"
          min={4}
          max={21}
          value={Math.min(state.days, 21)}
          onChange={(e) => setField('days', Number(e.target.value))}
          className="w-full accent-brand"
        />
        <div className="flex items-center justify-between mt-2">
          <span className="text-xs text-text-muted">{t('durationMin', { days: state.days })}</span>
          <label className="flex items-center gap-2 text-xs text-text-muted">
            {t('customDurationLabel')}
            <input
              type="number"
              min={22}
              value={state.days > 21 ? state.days : ''}
              placeholder="22+"
              onChange={(e) => setField('days', Math.max(22, Number(e.target.value) || 22))}
              className="w-16 border border-gray-300 rounded-lg px-2 py-1 text-brand bg-white focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10"
            />
          </label>
        </div>
      </div>

      <button
        type="button"
        onClick={onNext}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors"
      >
        {t('nextButton')} <ArrowRight className="w-4 h-4 rtl:rotate-180" />
      </button>
    </div>
  )
}
