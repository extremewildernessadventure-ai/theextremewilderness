'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Send, Check } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { trackFormFillConversion } from '@/lib/analytics'

const inputCls =
  'w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-brand focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 bg-white placeholder-gray-400 transition-all'

export default function ContactForm() {
  const t = useTranslations('forms')

  const SUBJECTS = [
    t('contactForm.subjects.safariBooking'),
    t('contactForm.subjects.kiliTrek'),
    t('contactForm.subjects.customItinerary'),
    t('contactForm.subjects.groupBooking'),
    t('contactForm.subjects.partnership'),
    t('contactForm.subjects.general'),
  ]

  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [privacy, setPrivacy] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (error) setError('')
  }

  const canSubmit = form.fullName && form.email && form.message && privacy && !submitting

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!canSubmit) return
    setSubmitting(true)
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.status === 429) { setError(t('contactForm.rateLimitError')); return }
      if (!res.ok) throw new Error('send failed')
      trackFormFillConversion()
      setSubmitted(true)
    } catch {
      setError(t('contactForm.genericError'))
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-10 text-center shadow-sm border border-gray-100 h-full flex flex-col items-center justify-center min-h-[400px]">
        <div className="w-16 h-16 bg-light-green rounded-full flex items-center justify-center mx-auto mb-5">
          <Check className="w-8 h-8 text-brand" />
        </div>
        <h3 className="text-2xl font-bold text-brand mb-2">{t('contactForm.messageSent')}</h3>
        <p className="text-text-muted text-sm leading-relaxed max-w-sm mx-auto">
          {t('contactForm.thankYou', { name: form.fullName.split(' ')[0] })}
        </p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="px-7 py-5 bg-brand">
        <h2 className="text-white font-bold text-xl">{t('contactForm.heading')}</h2>
        <p className="text-white/65 text-sm mt-0.5">{t('contactForm.subheading')}</p>
      </div>

      <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">

        {/* Full Name */}
        <div>
          <label htmlFor="contact-fullName" className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
            {t('contactForm.fullName')} <span className="text-red-400">*</span>
          </label>
          <input
            id="contact-fullName"
            name="fullName"
            required
            value={form.fullName}
            onChange={handleChange}
            placeholder={t('contactForm.fullNamePlaceholder')}
            className={inputCls}
          />
        </div>

        {/* Email + Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="contact-email" className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
              {t('contactForm.emailAddress')} <span className="text-red-400">*</span>
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder={t('contactForm.emailPlaceholder')}
              className={inputCls}
            />
          </div>
          <div>
            <label htmlFor="contact-phone" className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
              {t('contactForm.phoneWhatsapp')}
            </label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder={t('contactForm.phonePlaceholder')}
              className={inputCls}
            />
          </div>
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="contact-subject" className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
            {t('contactForm.subject')} <span className="text-red-400">*</span>
          </label>
          <div className="relative">
            <select
              id="contact-subject"
              name="subject"
              required
              value={form.subject}
              onChange={handleChange}
              className={`${inputCls} appearance-none`}
            >
              <option value="">{t('contactForm.selectSubject')}</option>
              {SUBJECTS.map((s) => <option key={s}>{s}</option>)}
            </select>
            <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="contact-message" className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
            {t('contactForm.message')} <span className="text-red-400">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            value={form.message}
            onChange={handleChange}
            rows={5}
            placeholder={t('contactForm.messagePlaceholder')}
            className={`${inputCls} resize-none`}
          />
        </div>

        {/* Privacy */}
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={privacy}
            onChange={(e) => setPrivacy(e.target.checked)}
            className="mt-0.5 w-4 h-4 accent-brand flex-shrink-0"
          />
          <span className="text-xs text-text-muted leading-relaxed">
            {t.rich('contactForm.privacyConsentText', {
              privacyLink: (chunks) => (
                <Link href="/privacy" className="text-brand underline hover:no-underline">{chunks}</Link>
              ),
            })}
          </span>
        </label>

        {error && (
          <p className="text-xs text-red-500 bg-red-50 border border-red-100 rounded-xl px-4 py-3">{error}</p>
        )}

        <button
          type="submit"
          disabled={!canSubmit}
          className="w-full flex items-center justify-center gap-2 py-3.5 bg-brand hover:bg-brand-secondary disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-colors text-sm"
        >
          {submitting ? (
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <Send className="w-4 h-4" />
          )}
          {submitting ? t('contactForm.sending') : t('contactForm.sendMessage')}
        </button>

      </form>
    </div>
  )
}
