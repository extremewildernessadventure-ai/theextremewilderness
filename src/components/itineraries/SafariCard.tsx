'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { Clock, Users, MapPin, Star, Heart, Check, Plus, Sparkles } from 'lucide-react'
import BookNowButton from '@/components/booking/BookNowButton'
import type { BrowsableSafari, TierKey } from '@/lib/safariBrowse'

// Real tier copy/colors -- same three tiers as everywhere else on the site
// (PriceTierSwitcher, admin dropdowns), restyled to this site's own tokens
// rather than the prototype's stone/emerald palette.
const TIER_META: Record<TierKey, { badgeClass: string }> = {
  trail: { badgeClass: 'bg-gray-100 text-gray-700 border-gray-300' },
  reserve: { badgeClass: 'bg-light-green text-brand border-brand/20' },
  sovereign: { badgeClass: 'bg-brand text-white border-brand' },
}

export interface SafariCardLabels {
  daysLabel: string
  maxLabel: string
  paxLabel: string
  fromLabel: string
  viewLabel: string
  bestLabel: string
  tierTrail: string
  tierReserve: string
  tierSovereign: string
  badgeBestseller: string
  badgeNew: string
  badgePopular: string
  badgeSignature: string
  operatorDirect: string
  operatorPartner: string
  reviewedLabel: string // "[rating] · Verified guest review" -- [rating] interpolated by caller
  compareLabel: string
  compareTooltip: string
  saveTooltip: string
  savedTooltip: string
  enquireLabel: string
  packageTypeLabel: string // e.g. translated "Safari" -- passed straight through to BookNowButton
  youVisitLabel: string
  startSuffix: string
  endSuffix: string
  viewFullItinerary: string
}

interface Props {
  safari: BrowsableSafari
  isCompared: boolean
  onToggleCompare: (slug: string) => void
  labels: SafariCardLabels
}

const TIER_LABEL_KEY: Record<TierKey, keyof SafariCardLabels> = {
  trail: 'tierTrail', reserve: 'tierReserve', sovereign: 'tierSovereign',
}

export default function SafariCard({ safari, isCompared, onToggleCompare, labels }: Props) {
  const [isSaved, setIsSaved] = useState(false)
  const isEwa = safari.operatorName === 'EWA Safari Outfitters'

  // Badge priority: a real bestseller/new/popular flag first (explicit editorial
  // signal), then the curated "signature edition" flag, then a real verified
  // review rating -- never a generic fallback like the prototype's "Top Rated
  // Operator" text shown on every single card regardless of any real signal.
  let primaryBadge: { text: string; tone: 'bestseller' | 'signature' | 'reviewed' | 'new' | 'popular' } | null = null
  if (safari.badge === 'bestseller') primaryBadge = { text: labels.badgeBestseller, tone: 'bestseller' }
  else if (safari.isSignature) primaryBadge = { text: labels.badgeSignature, tone: 'signature' }
  else if (safari.reviewRating !== undefined) primaryBadge = { text: labels.reviewedLabel.replace('[rating]', safari.reviewRating.toFixed(1)), tone: 'reviewed' }
  else if (safari.badge === 'new') primaryBadge = { text: labels.badgeNew, tone: 'new' }
  else if (safari.badge === 'popular') primaryBadge = { text: labels.badgePopular, tone: 'popular' }

  const badgeToneClass: Record<NonNullable<typeof primaryBadge>['tone'], string> = {
    bestseller: 'bg-gold text-brand',
    signature: 'bg-brand text-white',
    reviewed: 'bg-white text-brand',
    new: 'bg-brand text-white',
    popular: 'bg-gold text-brand',
  }

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-0.5 transition-all flex flex-col">
      <Link href={`/safaris/${safari.slug}`} className="relative h-52 overflow-hidden block">
        <Image
          src={safari.heroImage}
          alt={safari.heroImageAlt ?? safari.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {primaryBadge && (
          <div className="absolute top-3 start-3">
            <span className={`inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full ${badgeToneClass[primaryBadge.tone]}`}>
              {primaryBadge.tone === 'reviewed' && <Star className="w-2.5 h-2.5 fill-gold text-gold" />}
              {primaryBadge.text}
            </span>
          </div>
        )}

        <div className="absolute top-3 end-3 flex items-center gap-1.5">
          <button
            type="button"
            title={labels.compareTooltip}
            aria-label={labels.compareLabel}
            aria-pressed={isCompared}
            onClick={(e) => { e.preventDefault(); onToggleCompare(safari.slug) }}
            className={`w-7 h-7 rounded-full border flex items-center justify-center backdrop-blur-sm transition-colors ${
              isCompared ? 'bg-brand text-white border-brand' : 'bg-black/40 text-white/90 border-white/30 hover:bg-black/60'
            }`}
          >
            {isCompared ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
          </button>
          <button
            type="button"
            title={isSaved ? labels.savedTooltip : labels.saveTooltip}
            aria-label={isSaved ? labels.savedTooltip : labels.saveTooltip}
            aria-pressed={isSaved}
            onClick={(e) => { e.preventDefault(); setIsSaved((v) => !v) }}
            className="w-7 h-7 rounded-full bg-black/40 border border-white/30 backdrop-blur-sm flex items-center justify-center hover:bg-black/60 transition-colors"
          >
            <Heart className={`w-3.5 h-3.5 ${isSaved ? 'fill-rose-500 text-rose-500' : 'text-white/90'}`} />
          </button>
        </div>

        <div className="absolute bottom-3 start-3 flex flex-wrap gap-1.5">
          <span className="inline-flex items-center gap-1 px-2 py-1 bg-white text-brand text-[11px] font-semibold rounded-full">
            <Clock className="w-3 h-3 text-gold-label" />{safari.duration} {labels.daysLabel}
          </span>
          {safari.countries[0] && (
            <span className="px-2 py-1 bg-black/55 text-white text-[11px] font-medium rounded-full capitalize">
              {safari.countries[0]}
            </span>
          )}
        </div>

        {safari.bestMonths && safari.bestMonths.length > 0 && (
          <div className="absolute bottom-3 end-3">
            <span className="px-2 py-1 bg-black/55 text-white text-[10px] font-medium rounded-full">
              {labels.bestLabel} {safari.bestMonths.slice(0, 4).join(', ')}
            </span>
          </div>
        )}
      </Link>

      <div className="p-5 flex flex-col flex-1">
        {safari.tiersAvailable.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {safari.tiersAvailable.map((tier) => (
              <span key={tier} className={`inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-semibold rounded-full border ${TIER_META[tier].badgeClass}`}>
                <Sparkles className="w-2.5 h-2.5" />{labels[TIER_LABEL_KEY[tier]]}
              </span>
            ))}
          </div>
        )}

        <Link href={`/safaris/${safari.slug}`}>
          <h3 className="font-semibold text-brand text-base leading-snug mb-3 hover:text-gold-label transition-colors">{safari.name}</h3>
        </Link>

        <div className="flex flex-wrap gap-3 text-xs text-text-muted mb-3">
          {safari.groupSize && (
            <span className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-gold" />{labels.maxLabel} {safari.groupSize.max} {labels.paxLabel}
            </span>
          )}
        </div>

        {/* "You Visit" route line -- Arusha is EWA's real, fixed departure
            hub for every itinerary, not a fabricated placeholder; the middle
            stops are this package's actual destinations. */}
        {safari.destinationNames.length > 0 && (
          <div className="text-xs text-text-muted leading-relaxed bg-light-green/50 p-2.5 rounded-lg border border-gray-100 mb-3">
            <div className="flex items-start gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-brand">{labels.youVisitLabel} </span>
                <span>
                  Arusha {labels.startSuffix}, {safari.destinationNames.join(', ')}, Arusha {labels.endSuffix}
                </span>
              </div>
            </div>
          </div>
        )}

        {safari.tagline && (
          <p className="text-xs text-text-muted leading-relaxed italic mb-3">&ldquo;{safari.tagline}&rdquo;</p>
        )}

        {safari.highlights.length > 0 && (
          <ul className="space-y-1 text-xs text-text-muted mb-3 pb-3 border-b border-gray-100">
            {safari.highlights.slice(0, 2).map((item) => (
              <li key={item} className="flex items-start gap-1.5 leading-snug">
                <span className="text-gold font-bold text-sm leading-none mt-0.5">•</span>
                <span className="line-clamp-1">{item}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Operator brand row -- logo-square initial + name + Direct/Partner
            badge + star rating. Stars/rating only render when this package
            has a real verified review (safari.reviewRating); this site
            never fabricates a default rating the way the prototype does. */}
        <div className="flex flex-wrap items-center justify-between gap-2 bg-light-green/60 border border-gray-100 rounded-lg px-3 py-2 mb-3">
          <div className="flex items-center gap-2 min-w-0">
            <div className={`w-6 h-6 rounded flex items-center justify-center shrink-0 text-[11px] font-bold shadow-xs ${
              isEwa ? 'bg-brand text-gold' : 'bg-gray-700 text-gray-100'
            }`}>
              {safari.operatorName.charAt(0)}
            </div>
            <div className="min-w-0 flex items-center gap-1.5">
              <span className="font-semibold text-brand truncate text-xs">{safari.operatorName}</span>
              <span className={`text-[9px] px-1.5 py-0.5 rounded uppercase tracking-wide shrink-0 font-medium ${
                isEwa ? 'bg-brand text-white' : 'bg-gray-100 text-gray-700 border border-gray-200'
              }`}>
                {isEwa ? labels.operatorDirect : labels.operatorPartner}
              </span>
            </div>
          </div>

          {safari.reviewRating !== undefined && (
            <div className="flex items-center gap-1">
              <div className="flex items-center text-amber-500">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className={`w-3 h-3 ${s <= Math.round(safari.reviewRating!) ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`} />
                ))}
              </div>
              <span className="text-[11px] text-text-muted">{labels.reviewedLabel.replace('[rating]', safari.reviewRating.toFixed(1))}</span>
            </div>
          )}
        </div>

        {/* Price sits on its own line, and the itinerary link + Enquire
            button get their own row below it -- combining all three on one
            line overflowed narrower cards (e.g. the 2-column grid at
            tablet widths) once "View Full Itinerary →" replaced the
            shorter "View package" text. */}
        <div className="mt-auto pt-4 border-t border-gray-100 space-y-3">
          <div>
            <span className="text-text-muted text-xs">{labels.fromLabel} </span>
            <span className="text-brand font-bold text-lg">${safari.priceFrom.toLocaleString('en-US')}</span>
            <span className="text-text-muted text-xs">/pp</span>
          </div>
          <div className="flex items-center justify-between gap-2">
            <Link href={`/safaris/${safari.slug}`} className="min-w-0 truncate text-sm font-semibold text-brand hover:text-gold-label transition-colors">
              {labels.viewFullItinerary}
            </Link>
            <BookNowButton
              packageName={safari.name}
              packageType={labels.packageTypeLabel}
              priceFrom={String(safari.priceFrom)}
              duration={String(safari.duration)}
              label={labels.enquireLabel}
              className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-brand text-white text-xs font-semibold hover:bg-brand-dark transition-colors"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
