'use client'

import { useState } from 'react'
import BookNowButton from '@/components/booking/BookNowButton'
import PriceTierSwitcher, { type PriceSelection } from './PriceTierSwitcher'
import FamilyPriceSwitcher from './FamilyPriceSwitcher'
import type { PricingTierRow, FamilyPricingRow } from '@/data/packages'

interface Props {
  packageName: string
  tripTypeLabel: string
  priceFrom: number
  duration: number
  nightsLabel: string
  perPersonLabel: string
  pricingTiers?: PricingTierRow[]
  pricingTiersProvisional?: boolean
  familyPricing?: FamilyPricingRow[]
  sendEnquiryLabel: string
  freeNoCommitmentLabel: string
  bookThisPackageLabel: string
  responseNoteLabel: string
  noPaymentLabel: string
}

export default function SafariBookingSidebar({
  packageName,
  tripTypeLabel,
  priceFrom,
  duration,
  nightsLabel,
  perPersonLabel,
  pricingTiers,
  pricingTiersProvisional,
  familyPricing,
  sendEnquiryLabel,
  freeNoCommitmentLabel,
  bookThisPackageLabel,
  responseNoteLabel,
  noPaymentLabel,
}: Props) {
  const [selection, setSelection] = useState<PriceSelection>({ price: priceFrom })

  return (
    <>
      {familyPricing && familyPricing.length > 0 ? (
        <FamilyPriceSwitcher rows={familyPricing} onChange={setSelection} />
      ) : pricingTiers && pricingTiers.length > 0 ? (
        <PriceTierSwitcher rows={pricingTiers} provisional={pricingTiersProvisional} onChange={setSelection} />
      ) : (
        <div className="bg-light-green border border-brand/10 rounded-2xl p-6 text-center">
          <div className="text-3xl font-bold text-brand">${priceFrom.toLocaleString('en-US')}</div>
          <div className="text-text-muted text-xs mt-1">{perPersonLabel} · {duration} {nightsLabel}</div>
        </div>
      )}
      <div className="bg-brand rounded-2xl p-6 text-center space-y-4">
        <div>
          <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-1">{freeNoCommitmentLabel}</p>
          <h3 className="text-white font-bold text-lg">{bookThisPackageLabel}</h3>
          <p className="text-white/60 text-xs mt-1">{responseNoteLabel}</p>
        </div>
        <BookNowButton
          label={sendEnquiryLabel}
          packageName={packageName}
          packageType={tripTypeLabel}
          restrictTripType
          priceFrom={`$${selection.price.toLocaleString('en-US')}`}
          duration={`${duration} ${nightsLabel}`}
          season={selection.seasonLabel}
          tier={selection.tierLabel}
          travelers={selection.pax}
          className="w-full flex items-center justify-center gap-2 py-3.5 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors text-sm"
        />
        <p className="text-white/60 text-xs">{noPaymentLabel}</p>
      </div>
    </>
  )
}
