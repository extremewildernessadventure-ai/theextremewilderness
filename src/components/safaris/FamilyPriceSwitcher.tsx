'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import type { FamilyPricingRow } from '@/data/packages'
import type { PriceSelection } from './PriceTierSwitcher'

const TIERS = ['luxury', 'ultraLuxury'] as const
type Tier = (typeof TIERS)[number]

export default function FamilyPriceSwitcher({
  rows,
  onChange,
}: {
  rows: FamilyPricingRow[]
  onChange?: (selection: PriceSelection) => void
}) {
  const t = useTranslations('safari')

  const seasons = Array.from(new Set(rows.map((r) => r.season)))
  const familySizes = Array.from(new Set(rows.map((r) => r.familySize))).sort((a, b) => a - b)

  const [season, setSeason] = useState(seasons[0])
  const [familySize, setFamilySize] = useState(familySizes[0])
  const [tier, setTier] = useState<Tier>('luxury')

  const row = rows.find((r) => r.season === season && r.familySize === familySize) ?? rows[0]
  const price = row[tier]

  useEffect(() => {
    onChange?.({
      seasonLabel: season === 'high' ? t('highSeason') : t('lowSeason'),
      pax: familySize,
      tierLabel: tier === 'luxury' ? t('familyTierLuxury') : t('familyTierUltraLuxury'),
      price,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [season, familySize, tier, price])

  return (
    <div className="bg-light-green border border-brand/10 rounded-2xl p-6">
      <div className="mb-4">
        <p className="text-text-muted text-xs uppercase tracking-wide mb-2">{t('season')}</p>
        <div className="grid grid-cols-2 gap-1.5">
          {seasons.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSeason(s)}
              className={`h-9 rounded-lg text-xs font-bold transition-colors ${
                season === s ? 'bg-brand text-white' : 'bg-white text-text-muted hover:bg-white/70'
              }`}
            >
              {s === 'high' ? t('highSeason') : t('lowSeason')}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <p className="text-text-muted text-xs uppercase tracking-wide mb-2">{t('familySize')}</p>
        <div className="grid grid-cols-2 gap-1.5">
          {familySizes.map((size) => (
            <button
              key={size}
              type="button"
              onClick={() => setFamilySize(size)}
              className={`h-9 rounded-lg text-xs font-bold transition-colors ${
                familySize === size ? 'bg-brand text-white' : 'bg-white text-text-muted hover:bg-white/70'
              }`}
            >
              {t('familyOf', { count: size })}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <div className="grid grid-cols-2 gap-1.5">
          {TIERS.map((tr) => (
            <button
              key={tr}
              type="button"
              onClick={() => setTier(tr)}
              className={`px-2 py-2.5 rounded-xl text-xs font-semibold transition-colors ${
                tier === tr ? 'bg-gold text-brand' : 'bg-white text-text-muted hover:bg-white/70'
              }`}
            >
              {tr === 'luxury' ? t('familyTierLuxury') : t('familyTierUltraLuxury')}
            </button>
          ))}
        </div>
      </div>

      <div className="text-center pt-2 border-t border-brand/10">
        <div className="text-3xl font-bold text-brand">${price.toLocaleString('en-US')}</div>
        <div className="text-text-muted text-xs mt-1">{t('perPerson')}</div>
      </div>
    </div>
  )
}
