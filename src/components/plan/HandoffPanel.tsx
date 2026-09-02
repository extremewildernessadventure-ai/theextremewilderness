'use client'

import { useState } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { MessageCircle, Send } from 'lucide-react'
import BookNowButton from '@/components/booking/BookNowButton'
import { trackEvent } from '@/lib/analytics'
import { buildWhatsAppUrl } from '@/lib/contact'
import type { WizardState } from './types'
import type { MatchResult } from '@/lib/matchPackages'

function buildWhatsappMessage(
  state: WizardState,
  topMatch: MatchResult | undefined,
  t: (k: string, v?: Record<string, string | number>) => string
) {
  return t('whatsappMessage', {
    days: state.days,
    month: state.month,
    year: state.year,
    pax: state.pax,
    interests: state.interests.join(', '),
    style: state.style,
    pace: state.pace,
    topMatch: topMatch?.package.name ?? t('noMatchLabel'),
  })
}

export default function HandoffPanel({
  state,
  topMatch,
  belowThreshold,
}: {
  state: WizardState
  topMatch: MatchResult | undefined
  belowThreshold: boolean
}) {
  const t = useTranslations('planBuilder.handoff')
  const tc = useTranslations('common')
  const locale = useLocale()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [whatsappStatus, setWhatsappStatus] = useState<'idle' | 'sent'>('idle')

  // Either button now saves a lead + notifies the team (previously the
  // WhatsApp button only fired analytics — no lead was ever saved for a
  // visitor who chose WhatsApp here) — and using either one disables both,
  // so the same brief can't be sent twice.
  const anySent = status === 'sent' || whatsappStatus === 'sent'
  const canSend = Boolean(name && email) && status !== 'sending' && !anySent

  const whatsappHref = buildWhatsAppUrl(buildWhatsappMessage(state, topMatch, t))

  // Same required-field gate as the email submit button (this shares
  // /api/plan-brief, which requires name+email either way) — stays a real
  // <a href target="_blank"> (never a JS window.open() after an awaited
  // fetch, which trips popup blockers); the lead-save POST fires
  // fire-and-forget, never blocking the anchor's own navigation.
  const handleWhatsappClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!canSend) { e.preventDefault(); return }
    trackEvent('plan_handoff_choice', { method: 'whatsapp', topSlug: topMatch?.package.slug })
    // Optimistic: the visitor is about to open a live WhatsApp chat either
    // way, so the UI flips to "sent" immediately rather than waiting on
    // this background save — mirrors the auto-reply email's own
    // never-block-on-a-side-effect handling server-side.
    fetch('/api/plan-brief', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name, email, days: state.days, month: state.month, year: state.year, pax: state.pax,
        interests: state.interests, style: state.style, pace: state.pace,
        topMatchName: topMatch?.package.name, topMatchSlug: topMatch?.package.slug,
        belowThreshold, locale, contactMethod: 'whatsapp',
      }),
    }).catch((err) => console.error('plan-brief WhatsApp save failed:', err))
    setWhatsappStatus('sent')
  }

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!canSend) return
    setStatus('sending')
    trackEvent('plan_handoff_choice', { method: 'email', topSlug: topMatch?.package.slug })
    try {
      const res = await fetch('/api/plan-brief', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          days: state.days,
          month: state.month,
          year: state.year,
          pax: state.pax,
          interests: state.interests,
          style: state.style,
          pace: state.pace,
          topMatchName: topMatch?.package.name,
          topMatchSlug: topMatch?.package.slug,
          belowThreshold,
          locale,
          contactMethod: 'email',
        }),
      })
      if (!res.ok) throw new Error('failed')
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="bg-light-green rounded-2xl p-6">
      <h3 className="font-semibold text-brand text-lg mb-1">{t('title')}</h3>
      <p className="text-text-muted text-sm mb-5">{t('subtitle')}</p>

      {anySent ? (
        <p className="text-sm text-brand font-semibold text-center py-3">
          {whatsappStatus === 'sent' ? t('whatsappSuccess') : t('emailSuccess')}
        </p>
      ) : (
        <>
          {/* Shared by both send paths — /api/plan-brief requires name+email
              regardless of channel, so these sit above both buttons rather
              than being scoped inside the email-only form as before. */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t('namePlaceholder')}
              className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-brand focus:outline-none focus:border-brand bg-white"
            />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('emailPlaceholder')}
              className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-brand focus:outline-none focus:border-brand bg-white"
            />
          </div>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsappClick}
            aria-disabled={!canSend}
            tabIndex={!canSend ? -1 : 0}
            className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-colors mb-3 ${!canSend ? 'opacity-50 pointer-events-none cursor-not-allowed' : ''}`}
          >
            <MessageCircle className="w-4 h-4" /> {t('whatsappButton')}
          </a>

          <form onSubmit={handleEmailSubmit}>
            <button
              type="submit"
              disabled={!canSend}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 border border-brand text-brand font-bold rounded-xl hover:bg-brand hover:text-white disabled:opacity-50 transition-colors"
            >
              <Send className="w-4 h-4" /> {status === 'sending' ? t('sending') : t('emailButton')}
            </button>
            {status === 'error' && <p className="text-xs text-red-600 text-center mt-2">{t('emailError')}</p>}
          </form>
        </>
      )}

      <div className="mt-5 pt-5 border-t border-brand/10 text-center">
        <p className="text-xs text-text-muted mb-2">{t('orTalk')}</p>
        <BookNowButton
          label={t('talkButton')}
          packageName={topMatch?.package.name}
          packageType={tc('packageTypes.customSafari')}
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-gold transition-colors"
          arrow
        />
      </div>
    </div>
  )
}
