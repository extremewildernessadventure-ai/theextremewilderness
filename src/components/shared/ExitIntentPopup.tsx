'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { X, Check } from 'lucide-react'
import { useTranslations, useLocale } from 'next-intl'
import { useBooking } from '@/context/BookingContext'
import { trackEvent, trackFormFillConversion } from '@/lib/analytics'
import { useFocusTrap } from '@/hooks/useFocusTrap'

// sessionStorage, not a multi-day cookie: the popup should reappear on every
// fresh visit (a new tab, a reopened browser — even the same calendar day),
// while still not nagging repeatedly within one continuous session. Wrapped
// in try/catch since sessionStorage can throw in some private-browsing /
// embedded-iframe contexts — fails safe (worst case it just won't suppress
// a repeat trigger within the session, never crashes).
const SESSION_KEY = 'exit-intent-shown'

type Status = 'idle' | 'submitting' | 'success' | 'error'
type ClaimStatus = 'idle' | 'claiming' | 'claimed' | 'error'

function hasShownThisSession(): boolean {
  try {
    return sessionStorage.getItem(SESSION_KEY) === '1'
  } catch {
    return false
  }
}

function markShownThisSession() {
  try {
    sessionStorage.setItem(SESSION_KEY, '1')
  } catch {
    // ignore — see note above
  }
}

export default function ExitIntentPopup() {
  const t = useTranslations('exitIntent')
  const locale = useLocale()
  const { isOpen: bookingIsOpen } = useBooking()

  const [visible, setVisible] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [code, setCode] = useState<string | null>(null)
  const [claimStatus, setClaimStatus] = useState<ClaimStatus>('idle')

  const trigger = useCallback(() => {
    setVisible(true)
    markShownThisSession()
    trackEvent('exit_intent_shown')
  }, [])

  useEffect(() => {
    if (hasShownThisSession()) return
    if (bookingIsOpen) return

    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !bookingIsOpen && !hasShownThisSession()) {
        trigger()
      }
    }
    document.addEventListener('mouseleave', onMouseLeave)
    return () => document.removeEventListener('mouseleave', onMouseLeave)
  }, [bookingIsOpen, trigger])

  const dismiss = () => {
    setVisible(false)
    trackEvent('exit_intent_dismissed')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setStatus('submitting')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, source: 'exit-intent' }),
      })
      if (!res.ok) throw new Error('subscribe failed')
      const data = await res.json() as { code?: string }
      setCode(data.code ?? null)
      setStatus('success')
      trackEvent('exit_intent_submitted', { source: 'exit-intent' })
      trackFormFillConversion()
    } catch {
      setStatus('error')
    }
  }

  const handleClaim = async () => {
    setClaimStatus('claiming')
    try {
      const res = await fetch('/api/exit-intent-claim', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, locale }),
      })
      if (!res.ok) throw new Error('claim failed')
      setClaimStatus('claimed')
      trackEvent('exit_intent_discount_claimed')
    } catch {
      setClaimStatus('error')
    }
  }

  const modalRef = useFocusTrap<HTMLDivElement>(visible, dismiss)

  if (!visible) return null

  return (
    <div
      ref={modalRef}
      tabIndex={-1}
      className="fixed inset-0 z-40 flex items-center justify-center p-4 bg-black/60"
      role="dialog"
      aria-modal="true"
      aria-label={t('heading')}
    >
      <div className="relative bg-brand rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 max-w-md w-full">
        <button
          type="button"
          onClick={dismiss}
          aria-label={t('dismissLabel')}
          className="absolute top-4 end-4 text-white/50 hover:text-white transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 px-8 pt-8">
          <Image
            src="/EWA logo.webp"
            alt="EWA Safari Outfitters"
            width={160}
            height={80}
            className="object-contain w-10 h-auto flex-shrink-0"
          />
          <div>
            <p className="text-white font-semibold text-sm leading-tight">EWA Safari Outfitters</p>
            <p className="text-gold-label text-xs font-semibold uppercase tracking-widest">{t('badge')}</p>
          </div>
        </div>

        <div className="px-8 pb-8 pt-4">
          {status === 'success' ? (
            <div className="text-center py-2">
              <h3 className="text-white font-semibold text-xl mb-2">{t('successTitle')}</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-5">{t('successDesc')}</p>

              {code && (
                <div className="mb-5 rounded-xl border-2 border-dashed border-gold/50 bg-white/5 py-4 px-3">
                  <p className="text-white/50 text-[11px] font-semibold uppercase tracking-widest mb-1">{t('codeLabel')}</p>
                  <p className="text-gold font-mono font-bold text-xl tracking-wider">{code}</p>
                </div>
              )}

              {claimStatus === 'claimed' ? (
                <div className="flex items-center justify-center gap-2 text-gold font-semibold text-sm py-3">
                  <Check className="w-4 h-4" />
                  {t('claimedLabel')}
                </div>
              ) : (
                <button
                  type="button"
                  onClick={handleClaim}
                  disabled={claimStatus === 'claiming'}
                  className="w-full py-3 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {claimStatus === 'claiming' ? t('claiming') : t('claimButtonLabel')}
                </button>
              )}
              {claimStatus === 'error' && (
                <p role="alert" className="text-red-400 text-xs text-center mt-2">{t('claimError')}</p>
              )}
              <p className="text-white/50 text-xs leading-relaxed mt-4">{t('honorNote')}</p>
            </div>
          ) : (
            <>
              <h3 className="text-white font-semibold text-2xl mb-2 leading-tight">{t('heading')}</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">{t('body')}</p>

              <form onSubmit={handleSubmit} className="space-y-3">
                <label htmlFor="exit-intent-name" className="sr-only">{t('nameLabel')}</label>
                <input
                  id="exit-intent-name"
                  type="text"
                  placeholder={t('nameLabel')}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/15 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-gold"
                />
                <label htmlFor="exit-intent-email" className="sr-only">{t('emailLabel')}</label>
                <input
                  id="exit-intent-email"
                  type="email"
                  required
                  aria-required="true"
                  placeholder={t('emailPlaceholder')}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/15 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-gold"
                />
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-3 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? t('submitting') : t('submitLabel')}
                </button>
                {status === 'error' && (
                  <p role="alert" className="text-red-400 text-xs text-center">{t('errorMessage')}</p>
                )}
                <p className="text-white/60 text-xs text-center">{t('noSpam')}</p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
