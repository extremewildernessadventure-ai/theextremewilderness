'use client'

import { useTranslations } from 'next-intl'
import {
  ArrowLeft, ArrowRight, PawPrint, Cat, TreeDeciduous, Waves,
  Mountain, Heart, Users, Camera, MapPin, type LucideIcon,
} from 'lucide-react'
import { trackEvent } from '@/lib/analytics'
import type { WizardState, SetField } from './types'

const INTEREST_TAGS = [
  'migration', 'bigfive', 'gorilla', 'beach', 'trekking',
  'honeymoon', 'family', 'photography', 'remote',
] as const

const TAG_ICONS: Record<(typeof INTEREST_TAGS)[number], LucideIcon> = {
  migration: PawPrint,
  bigfive: Cat,
  gorilla: TreeDeciduous,
  beach: Waves,
  trekking: Mountain,
  honeymoon: Heart,
  family: Users,
  photography: Camera,
  remote: MapPin,
}

export default function StepInterests({
  state,
  setField,
  onNext,
  onBack,
}: {
  state: WizardState
  setField: SetField
  onNext: () => void
  onBack: () => void
}) {
  const t = useTranslations('planBuilder.step2')

  const toggle = (tag: string) => {
    const selected = state.interests.includes(tag)
    const next = selected ? state.interests.filter((i) => i !== tag) : [...state.interests, tag]
    setField('interests', next)
    trackEvent('plan_interest_toggle', { tag, selected: !selected })
  }

  return (
    <div>
      <h1 className="text-2xl sm:text-3xl font-semibold text-brand mb-2">{t('title')}</h1>
      <p className="text-text-muted text-sm mb-8">{t('subtitle')}</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
        {INTEREST_TAGS.map((tag) => {
          const active = state.interests.includes(tag)
          const Icon = TAG_ICONS[tag]
          return (
            <button
              key={tag}
              type="button"
              onClick={() => toggle(tag)}
              aria-pressed={active}
              className={`flex flex-col items-center justify-center gap-2 rounded-xl border px-4 py-5 text-sm font-semibold text-center transition-colors ${
                active ? 'bg-brand text-white border-brand' : 'bg-white text-brand border-gray-200 hover:border-brand'
              }`}
            >
              <Icon className={`w-6 h-6 ${active ? 'text-gold' : 'text-brand'}`} />
              {t(`tags.${tag}`)}
            </button>
          )
        })}
      </div>

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
          disabled={state.interests.length === 0}
          className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gold hover:bg-gold-dark disabled:opacity-40 disabled:cursor-not-allowed text-brand font-bold rounded-xl transition-colors"
        >
          {t('nextButton')} <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
