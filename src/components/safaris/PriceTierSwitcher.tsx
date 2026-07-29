'use client'

import { useEffect, useMemo, useState } from 'react'
import { useTranslations } from 'next-intl'
import type { PricingTierRow } from '@/data/packages'

const TIERS = ['trail', 'reserve', 'sovereign'] as const
type Tier = (typeof TIERS)[number]
type Season = 'high' | 'low'

export interface PriceSelection {
  seasonLabel?: string
  pax?: number
  tierLabel?: string
  price: number
}

export default function PriceTierSwitcher({
  rows,
  provisional,
  onChange,
}: {
  rows: PricingTierRow[]
  provisional?: boolean
  onChange?: (selection: PriceSelection) => void
}) {
  const t = useTranslations('safari')

  const seasons = useMemo(
    () => Array.from(new Set(rows.map((r) => r.season).filter((s): s is Season => !!s))),
    [rows]
  )
  const [season, setSeason] = useState<Season>(seasons[0] ?? 'high')
  const seasonRows = seasons.length > 1 ? rows.filter((r) => r.season === season) : rows

  const [pax, setPax] = useState(seasonRows[0]?.pax ?? 2)
  // Only show tier buttons for tiers that have values in at least one row
  const availableTiers = TIERS.filter((tr) => seasonRows.some((r) => r[tr] !== undefined && r[tr]! > 0))
  const [tier, setTier] = useState<Tier>(availableTiers[0] ?? 'trail')

  const row = seasonRows.find((r) => r.pax === pax) ?? seasonRows[0]
  const price = row[tier] ?? 0

  useEffect(() => {
    onChange?.({
      seasonLabel: seasons.length > 1 ? (season === 'high' ? t('highSeason') : t('lowSeason')) : undefined,
      pax,
      tierLabel: t(`tier${tier.charAt(0).toUpperCase()}${tier.slice(1)}`),
      price,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [season, pax, tier, price])

  return (
    <div className="bg-light-green border border-brand/10 rounded-2xl p-6">
      {seasons.length > 1 && (
        <div className="mb-4">
          <p className="text-text-muted text-xs uppercase tracking-wide mb-2">{t('season')}</p>
          <div className="grid grid-cols-2 gap-1.5">
            {(['high', 'low'] as const).map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setSeason(s)}
                className={`h-9 rounded-lg text-sm font-semibold transition-colors ${
                  season === s ? 'bg-brand text-white' : 'bg-white text-text-muted hover:bg-white/70'
                }`}
              >
                {s === 'high' ? t('highSeason') : t('lowSeason')}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="mb-4">
        <p className="text-text-muted text-xs uppercase tracking-wide mb-2">{t('choosePax')}</p>
        <div className="flex gap-1.5">
          {seasonRows.map((r) => (
            <button
              key={r.pax}
              type="button"
              onClick={() => setPax(r.pax)}
              className={`flex-1 h-9 rounded-lg text-sm font-bold transition-colors ${
                pax === r.pax ? 'bg-brand text-white' : 'bg-white text-text-muted hover:bg-white/70'
              }`}
            >
              {r.pax}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <div className={`grid gap-1.5 ${availableTiers.length === 1 ? 'grid-cols-1' : availableTiers.length === 2 ? 'grid-cols-2' : 'grid-cols-3'}`}>
          {availableTiers.map((tr) => (
            <button
              key={tr}
              type="button"
              onClick={() => setTier(tr)}
              className={`px-2 py-2.5 rounded-xl text-[11px] font-semibold leading-tight transition-colors ${
                tier === tr ? 'bg-gold text-brand' : 'bg-white text-text-muted hover:bg-white/70'
              }`}
            >
              {t(`tier${tr.charAt(0).toUpperCase()}${tr.slice(1)}`)}
            </button>
          ))}
        </div>
      </div>

      <div className="text-center pt-2 border-t border-brand/10">
        <div className="text-3xl font-bold text-brand">${price.toLocaleString('en-US')}</div>
        <div className="text-text-muted text-xs mt-1">{t('perPerson')}</div>
        {provisional && (
          <p className="text-gold-label text-[11px] mt-2 leading-snug">{t('provisionalPricing')}</p>
        )}
      </div>
    </div>
  )
}
