'use client'

import { useState, useMemo } from 'react'
import { Star, UserCheck, MessageSquarePlus, Send, CheckCircle2 } from 'lucide-react'
import { computeReviewStats, type PublishedReview } from '@/lib/reviews'

export interface SafariReviewsTabLabels {
  heading: string
  subcopy: string // "Every review on this page is specifically verified for the [name] expedition package." -- [name] interpolated
  rateThisButton: string
  closeFormButton: string
  basedOnCount: string // "Based on [n] review(s)" -- [n] interpolated
  noReviewsYet: string
  sortRecent: string
  sortHighest: string
  sortLabel: string
  verifiedBadge: string
  starLabel: string // "[n] star" -- [n] interpolated, used for the distribution rows
  formNameLabel: string
  formNamePlaceholder: string
  formRatingLabel: string
  formQuoteLabel: string
  formQuotePlaceholder: string
  formQuoteHelper: string
  formSubmit: string
  formSubmitting: string
  formSuccessTitle: string
  formSuccessBody: string
  formErrorName: string
  formErrorQuote: string
  formErrorGeneric: string
  distributionLabel: string
}

interface Props {
  packageSlug: string
  packageName: string
  initialReviews: PublishedReview[]
  labels: SafariReviewsTabLabels
}

type SortOption = 'recent' | 'highest'

export default function SafariReviewsTab({ packageSlug, packageName, initialReviews, labels }: Props) {
  const [sortOption, setSortOption] = useState<SortOption>('recent')
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [name, setName] = useState('')
  const [rating, setRating] = useState(5)
  const [hoverRating, setHoverRating] = useState(0)
  const [quote, setQuote] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const stats = useMemo(() => computeReviewStats(initialReviews), [initialReviews])

  const sortedReviews = useMemo(() => {
    const sorted = [...initialReviews]
    if (sortOption === 'highest') sorted.sort((a, b) => b.rating - a.rating)
    // 'recent' is already the query's own order (created_at DESC), no re-sort needed
    return sorted
  }, [initialReviews, sortOption])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim()) { setErrorMsg(labels.formErrorName); return }
    if (quote.trim().length < 20) { setErrorMsg(labels.formErrorQuote); return }

    setStatus('submitting')
    setErrorMsg('')
    try {
      const res = await fetch('/api/package-reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ packageSlug, name: name.trim(), rating, quoteText: quote.trim() }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({})) as { error?: string }
        setErrorMsg(data.error ?? labels.formErrorGeneric)
        setStatus('error')
        return
      }
      // Moderation-gated: unlike the prototype (which prepends the new review
      // to the visible list immediately, in-memory), a real submission is
      // 'pending' and does NOT appear here until a staff member approves it
      // in /admin/reviews -- so the list stays exactly as it was.
      setStatus('success')
    } catch {
      setErrorMsg(labels.formErrorGeneric)
      setStatus('error')
    }
  }

  const distributionRows = ([5, 4, 3, 2, 1] as const).map((star) => ({
    star,
    count: stats.distribution[star],
    pct: stats.count > 0 ? Math.round((stats.distribution[star] / stats.count) * 100) : 0,
  }))

  return (
    <div>
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-semibold text-brand mb-1">{labels.heading}</h2>
          <p className="text-text-muted text-sm max-w-xl">{labels.subcopy.replace('[name]', packageName)}</p>
        </div>
        <button
          type="button"
          onClick={() => setIsFormOpen((v) => !v)}
          className="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand text-white text-sm font-semibold hover:bg-brand-dark transition-colors"
        >
          <MessageSquarePlus className="w-4 h-4" />
          {isFormOpen ? labels.closeFormButton : labels.rateThisButton}
        </button>
      </div>

      {stats.count > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-5 rounded-2xl border border-gray-100 bg-white mb-6">
          <div>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-4xl font-bold text-brand">{stats.average.toFixed(1)}</span>
              <span className="text-text-muted text-sm">/ 5.0</span>
            </div>
            <div className="flex gap-0.5 mb-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className={`w-4 h-4 ${i <= Math.round(stats.average) ? 'fill-amber-400 text-amber-400' : 'text-gray-200'}`} />
              ))}
            </div>
            <p className="text-xs text-text-muted">{labels.basedOnCount.replace('[n]', String(stats.count))}</p>
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-wide text-gold-label mb-2">{labels.distributionLabel}</p>
            <div className="space-y-1.5">
              {distributionRows.map(({ star, count, pct }) => (
                <div key={star} className="flex items-center gap-2 text-xs">
                  <span className="w-10 text-text-muted shrink-0">{labels.starLabel.replace('[n]', String(star))}</span>
                  <div className="flex-1 h-1.5 rounded-full bg-gray-100 overflow-hidden">
                    <div className="h-full bg-brand rounded-full" style={{ width: `${pct}%` }} />
                  </div>
                  <span className="w-8 text-end text-text-muted shrink-0">{count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {isFormOpen && (
        <form onSubmit={handleSubmit} className="p-5 rounded-2xl border border-gray-100 bg-light-green/30 mb-6">
          {status === 'success' ? (
            <div className="flex items-center gap-3 py-2">
              <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
              <div>
                <p className="font-semibold text-brand text-sm">{labels.formSuccessTitle}</p>
                <p className="text-xs text-text-muted">{labels.formSuccessBody}</p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-brand mb-1.5">{labels.formRatingLabel}</label>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <button
                      key={i}
                      type="button"
                      onMouseEnter={() => setHoverRating(i)}
                      onMouseLeave={() => setHoverRating(0)}
                      onClick={() => setRating(i)}
                      aria-label={labels.starLabel.replace('[n]', String(i))}
                    >
                      <Star className={`w-6 h-6 ${i <= (hoverRating || rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-200'}`} />
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-brand mb-1.5">{labels.formNameLabel}</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={labels.formNamePlaceholder}
                  className="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm bg-white"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-brand mb-1.5">{labels.formQuoteLabel}</label>
                <textarea
                  value={quote}
                  onChange={(e) => setQuote(e.target.value)}
                  placeholder={labels.formQuotePlaceholder}
                  rows={4}
                  className="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm bg-white"
                />
                <p className="text-[11px] text-text-muted mt-1">{labels.formQuoteHelper}</p>
              </div>
              {errorMsg && <p className="text-xs text-red-600">{errorMsg}</p>}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gold text-brand font-bold text-sm hover:bg-gold-dark disabled:opacity-60 transition-colors"
              >
                <Send className="w-4 h-4" />
                {status === 'submitting' ? labels.formSubmitting : labels.formSubmit}
              </button>
            </div>
          )}
        </form>
      )}

      {sortedReviews.length === 0 ? (
        <p className="text-sm text-text-muted italic py-6 text-center">{labels.noReviewsYet}</p>
      ) : (
        <>
          <div className="flex items-center gap-2 mb-4 text-sm">
            <span className="text-text-muted">{labels.sortLabel}</span>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value as SortOption)}
              className="border border-gray-200 rounded-lg px-2.5 py-1.5 text-sm text-brand bg-white"
            >
              <option value="recent">{labels.sortRecent}</option>
              <option value="highest">{labels.sortHighest}</option>
            </select>
          </div>
          <div className="space-y-4">
            {sortedReviews.map((review) => (
              <div key={review.id} className="p-5 rounded-2xl border border-gray-100 bg-white">
                <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                  <span className="font-semibold text-brand text-sm">{review.reviewer_name}</span>
                  {(review.client_id !== null || review.booking_id !== null) && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-semibold">
                      <UserCheck className="w-3 h-3" />{labels.verifiedBadge}
                    </span>
                  )}
                </div>
                <div className="flex gap-0.5 mb-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className={`w-3.5 h-3.5 ${i <= review.rating ? 'fill-amber-400 text-amber-400' : 'text-gray-200'}`} />
                  ))}
                </div>
                <p className="text-sm text-text-muted leading-relaxed whitespace-pre-line">{review.quote_text}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
