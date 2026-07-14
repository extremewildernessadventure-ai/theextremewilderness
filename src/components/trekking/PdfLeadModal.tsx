'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { X, ArrowRight, Shield, CheckCircle } from 'lucide-react'
import { useTranslations } from 'next-intl'

interface Props {
  triggerLabel: string
  triggerClassName?: string
}

type Status = 'idle' | 'loading' | 'success' | 'error'

const BULLETS = ['bullet1', 'bullet2', 'bullet3', 'bullet4'] as const

export default function PdfLeadModal({ triggerLabel, triggerClassName }: Props) {
  const t = useTranslations('pdfLead')
  const tf = useTranslations('forms')

  const [open, setOpen] = useState(false)
  const [name, setName]   = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({})
  const [status, setStatus] = useState<Status>('idle')
  const [website, setWebsite] = useState('')
  const [renderTime, setRenderTime] = useState(0)

  useEffect(() => {
    if (open) setRenderTime(Date.now())
  }, [open])

  const close = useCallback(() => {
    setOpen(false)
    if (status !== 'success') {
      // reset form only on non-success close so user can see the sent address
      setTimeout(() => {
        setName(''); setEmail(''); setPhone('')
        setErrors({}); setStatus('idle')
      }, 300)
    }
  }, [status])

  // Escape key
  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') close() }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [open, close])

  function validate(): boolean {
    const e: { name?: string; email?: string } = {}
    if (!name.trim()) e.name = t('nameRequired')
    if (!email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email))
      e.email = t('emailRequired')
    setErrors(e)
    return Object.keys(e).length === 0
  }

  async function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault()
    if (!validate()) return
    setStatus('loading')
    try {
      const res = await fetch('/api/pdf-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), phone: phone.trim(), website, renderTime }),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const field = (err?: string) =>
    `w-full border rounded-xl px-4 py-3 text-sm text-brand placeholder-gray-400 bg-white transition-all focus:outline-none focus:ring-2 ${
      err
        ? 'border-red-400 focus:ring-red-200 focus:border-red-400'
        : 'border-gray-200 focus:border-brand focus:ring-brand/10'
    }`

  return (
    <>
      {/* ─── Trigger button ─── */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={triggerClassName}
      >
        {triggerLabel}
      </button>

      {/* ─── Modal ─── */}
      {open && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-6">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-brand/80 backdrop-blur-sm"
            onClick={close}
            aria-hidden="true"
          />

          {/* Card */}
          <div className="relative z-10 w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.35)] flex flex-col sm:flex-row max-h-[95dvh]">

            {/* Close */}
            <button
              onClick={close}
              aria-label={tf('closeLabel')}
              className="absolute top-3 right-3 z-30 w-9 h-9 rounded-full bg-black/25 backdrop-blur-sm flex items-center justify-center hover:bg-black/40 transition-colors group"
            >
              <X className="w-4 h-4 text-white" />
            </button>

            {/* ══════════════════════════════════
                Left panel — image + selling points
                ══════════════════════════════════ */}
            <div className="relative sm:w-[42%] h-44 sm:h-auto flex-shrink-0 overflow-hidden">
              <Image
                src="/images/gallery/kilimanjarosasa.webp"
                alt={t('imageAlt')}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 360px"
                priority
              />
              {/* Gradient – strong at bottom so text is readable */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand via-brand/60 to-brand/10" />

              {/* FREE GUIDE ribbon */}
              <div className="absolute top-0 left-0 overflow-hidden w-32 h-32 pointer-events-none">
                <div className="absolute top-6 -left-8 w-36 bg-gold text-brand text-[9px] font-black uppercase tracking-[0.14em] text-center py-1.5 -rotate-45 shadow-lg">
                  {t('badge')}
                </div>
              </div>

              {/* Panel content — hidden on mobile (image strip only) */}
              <div className="absolute bottom-0 left-0 right-0 p-7 hidden sm:flex flex-col">
                <p className="text-gold text-[10px] font-bold uppercase tracking-widest mb-2">
                  {t('imagePanelBrand')}
                </p>
                <h2 className="text-white font-black text-[22px] leading-tight mb-5">
                  {t('imagePanelTitle')}
                </h2>

                <ul className="space-y-2.5">
                  {BULLETS.map((key) => (
                    <li key={key} className="flex items-center gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-gold/15 border border-gold/35 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-3 h-3 text-gold" />
                      </span>
                      <span className="text-white/85 text-[13px]">{t(key)}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-5 border-t border-white/15">
                  <p className="text-white/50 text-[11px]">
                    {t('socialProof')}
                  </p>
                </div>
              </div>
            </div>

            {/* ══════════════════════════════════
                Right panel — form / success
                ══════════════════════════════════ */}
            <div className="flex-1 overflow-y-auto px-6 py-8 sm:px-10 sm:py-10">

              {status === 'success' ? (
                /* ── Success state ── */
                <div className="flex flex-col items-center justify-center h-full text-center py-6">
                  <div className="w-20 h-20 rounded-full bg-green-50 border-2 border-green-100 flex items-center justify-center mb-5">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-black text-brand mb-2">{t('successTitle')}</h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-2">
                    {t('successDesc')}{' '}
                    <strong className="text-brand">{email}</strong>
                  </p>
                  <p className="text-text-muted text-sm mb-8">{t('successHint')}</p>

                  <button
                    onClick={close}
                    className="flex items-center gap-2.5 px-7 py-3.5 bg-brand text-white font-bold rounded-xl hover:bg-brand-dark transition-colors text-sm shadow-lg shadow-brand/20"
                  >
                    Close
                  </button>
                </div>

              ) : (
                /* ── Lead capture form ── */
                <form onSubmit={handleSubmit} noValidate style={{ position: 'relative' }}>
                  {/* honeypot */}
                  <div style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true">
                    <input type="text" name="website" tabIndex={-1} value={website} onChange={(e) => setWebsite(e.target.value)} autoComplete="off" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-brand leading-tight mb-1.5">
                    {t('modalTitle')}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-7">
                    {t('modalSubtitle')}
                  </p>

                  <div className="space-y-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2">
                        {t('nameLabel')} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder={t('namePlaceholder')}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={field(errors.name)}
                        autoComplete="name"
                        autoFocus
                      />
                      {errors.name && (
                        <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
                          <span>✕</span> {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2">
                        {t('emailLabel')} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder={t('emailPlaceholder')}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={field(errors.email)}
                        autoComplete="email"
                      />
                      {errors.email && (
                        <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
                          <span>✕</span> {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2">
                        {t('phoneLabel')}{' '}
                        <span className="text-gray-400 font-normal normal-case tracking-normal text-[11px]">
                          ({t('phoneOptional')})
                        </span>
                      </label>
                      <input
                        type="tel"
                        placeholder={t('phonePlaceholder')}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className={field()}
                        autoComplete="tel"
                      />
                    </div>
                  </div>

                  {/* Server error */}
                  {status === 'error' && (
                    <div className="mt-5 px-4 py-3 bg-red-50 border border-red-100 rounded-xl">
                      <p className="text-sm text-red-600">{t('errorMessage')}</p>
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="mt-7 w-full flex items-center justify-center gap-2.5 px-6 py-4 bg-gold hover:bg-gold-dark disabled:opacity-60 disabled:cursor-not-allowed text-brand font-black rounded-xl transition-colors text-sm shadow-xl shadow-gold/25 tracking-wide"
                  >
                    {status === 'loading' ? (
                      <>
                        <span className="w-4 h-4 border-2 border-brand/30 border-t-brand rounded-full animate-spin" />
                        {t('submitting')}
                      </>
                    ) : (
                      <>
                        {t('submitLabel')}
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  {/* Trust line */}
                  <p className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-gray-400 text-center">
                    <Shield className="w-3 h-3 text-gray-300 flex-shrink-0" />
                    {t('noSpam')}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
