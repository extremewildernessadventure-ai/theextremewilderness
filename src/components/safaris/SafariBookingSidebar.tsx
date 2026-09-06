'use client'

import { useState } from 'react'
import { ShieldCheck } from 'lucide-react'
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
  // Prototype-matching dressing around the calculator -- eyebrow/heading/
  // subtitle, the "Auto-Calculated Tier Rate" badge (only shown once a real
  // tier/family selection has been made), a small quick-metadata panel, and
  // two static trust blurbs. All real copy, no new pricing logic.
  sidebarEyebrow: string
  sidebarHeading: string
  sidebarSubtitle: string
  autoCalculatedRateLabel: string
  peakWindowLabel: string
  peakWindowValue: string
  depositLabel: string
  depositValue: string
  specialistPromiseHeading: string
  specialistPromiseBody: string
  quickContactHeading: string
  quickContactBody: string
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
  sidebarEyebrow,
  sidebarHeading,
  sidebarSubtitle,
  autoCalculatedRateLabel,
  peakWindowLabel,
  peakWindowValue,
  depositLabel,
  depositValue,
  specialistPromiseHeading,
  specialistPromiseBody,
  quickContactHeading,
  quickContactBody,
}: Props) {
  const [selection, setSelection] = useState<PriceSelection>({ price: priceFrom })
  const hasCalculator = (familyPricing && familyPricing.length > 0) || (pricingTiers && pricingTiers.length > 0)

  return (
    <>
      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm space-y-5">
        <div>
          <span className="text-[11px] uppercase tracking-wider text-text-muted block">{sidebarEyebrow}</span>
          <h3 className="text-xl font-semibold text-brand mt-0.5">{sidebarHeading}</h3>
          <p className="text-xs text-text-muted mt-1">{sidebarSubtitle}</p>
        </div>

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

        {hasCalculator && (
          <div className="text-center">
            <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wide bg-light-green text-brand border border-brand/10">
              {autoCalculatedRateLabel}
            </span>
          </div>
        )}

        {/* Quick metadata */}
        <div className="p-3.5 rounded-xl bg-light-green border border-gray-100 space-y-2 text-xs">
          <div className="flex items-center justify-between">
            <span className="text-text-muted">{peakWindowLabel}</span>
            <span className="font-semibold text-brand">{peakWindowValue}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-text-muted">{depositLabel}</span>
            <span className="font-semibold text-brand">{depositValue}</span>
          </div>
        </div>

        {/* Trust blurbs -- part of the same pricing card, not floating
            separately below it. */}
        <div className="pt-4 border-t border-gray-100 space-y-2 text-[11px] text-text-muted">
          <div className="flex items-center gap-2 text-brand font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-gold" />
            <span>{specialistPromiseHeading}</span>
          </div>
          <p className="leading-relaxed">{specialistPromiseBody}</p>
        </div>

        <div className="p-3.5 rounded-xl bg-light-green border border-gray-100 text-xs text-text-muted space-y-1">
          <span className="font-semibold text-brand block">{quickContactHeading}</span>
          <p className="text-[11px] text-text-muted">{quickContactBody}</p>
        </div>
      </div>

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
