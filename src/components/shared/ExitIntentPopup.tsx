'use client'

import { useState, useEffect, useCallback } from 'react'
import { X, Mail } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useBooking } from '@/context/BookingContext'
import { trackEvent, trackFormFillConversion } from '@/lib/analytics'

const COOKIE_NAME = 'exit-intent-seen'
const COOKIE_DAYS = 30

type Status = 'idle' | 'submitting' | 'success' | 'error'

function getCookie(name: string): string | undefined {
  return document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${name}=`))
    ?.split('=')[1]
}

function setCookie(name: string, value: string, days: number) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString()
  document.cookie = `${name}=${value}; expires=${expires}; path=/; SameSite=Lax`
}

export default function ExitIntentPopup() {
  const t = useTranslations('exitIntent')
  const { isOpen: bookingIsOpen } = useBooking()

  const [visible, setVisible] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  const trigger = useCallback(() => {
    setVisible(true)
    setCookie(COOKIE_NAME, '1', COOKIE_DAYS)
    trackEvent('exit_intent_shown')
  }, [])

  useEffect(() => {
    if (getCookie(COOKIE_NAME)) return
    if (bookingIsOpen) return

    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !bookingIsOpen && !getCookie(COOKIE_NAME)) {
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
      setStatus('success')
      trackEvent('exit_intent_submitted', { source: 'exit-intent' })
      trackFormFillConversion()
    } catch {
      setStatus('error')
    }
  }

  if (!visible) return null

  return (
    <div
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
          className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8">
          {status === 'success' ? (
            <div className="text-center py-4">
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-5 h-5 text-gold" />
              </div>
              <h3 className="text-white font-semibold text-xl mb-2">{t('successTitle')}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{t('successDesc')}</p>
            </div>
          ) : (
            <>
              <p className="text-gold-label text-xs font-semibold uppercase tracking-widest mb-3">{t('badge')}</p>
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
