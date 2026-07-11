'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { MessageCircle, Send } from 'lucide-react'
import BookNowButton from '@/components/booking/BookNowButton'
import { trackEvent } from '@/lib/analytics'
import type { WizardState } from './types'
import type { MatchResult } from '@/lib/matchPackages'

const WHATSAPP_NUMBER = '255747999070'

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
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [website, setWebsite] = useState('')
  const [renderTime, setRenderTime] = useState(0)
  useEffect(() => { setRenderTime(Date.now()) }, [])

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    buildWhatsappMessage(state, topMatch, t)
  )}`

  const handleWhatsappClick = () => {
    trackEvent('plan_handoff_choice', { method: 'whatsapp', topSlug: topMatch?.package.slug })
  }

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !email) return
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
          website, renderTime,
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

      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleWhatsappClick}
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-colors mb-4"
      >
        <MessageCircle className="w-4 h-4" /> {t('whatsappButton')}
      </a>

      {status === 'sent' ? (
        <p className="text-sm text-brand font-semibold text-center py-3">{t('emailSuccess')}</p>
      ) : (
        <form onSubmit={handleEmailSubmit} className="space-y-3" style={{ position: 'relative' }}>
          {/* honeypot */}
          <div style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true">
            <input type="text" name="website" tabIndex={-1} value={website} onChange={(e) => setWebsite(e.target.value)} autoComplete="off" />
          </div>
          <div className="grid grid-cols-2 gap-3">
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
          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 border border-brand text-brand font-bold rounded-xl hover:bg-brand hover:text-white disabled:opacity-50 transition-colors"
          >
            <Send className="w-4 h-4" /> {status === 'sending' ? t('sending') : t('emailButton')}
          </button>
          {status === 'error' && <p className="text-xs text-red-600 text-center">{t('emailError')}</p>}
        </form>
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
