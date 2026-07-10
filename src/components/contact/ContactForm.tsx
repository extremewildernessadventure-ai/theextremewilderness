'use client'

import { useState, useEffect } from 'react'
import { Send, Check } from 'lucide-react'
import { Link } from '@/i18n/navigation'

const inputCls =
  'w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-brand focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 bg-white placeholder-gray-400 transition-all'

const SUBJECTS = [
  'Safari Booking Enquiry',
  'Kilimanjaro Trek Enquiry',
  'Custom Itinerary Request',
  'Group Booking',
  'Partnership / Trade',
  'General Question',
]

export default function ContactForm() {
  const [renderTime, setRenderTime] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    website: '', // honeypot — humans leave this blank
  })
  const [privacy, setPrivacy] = useState(false)

  useEffect(() => {
    setRenderTime(Date.now())
  }, [])

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
        body: JSON.stringify({ ...form, renderTime }),
      })
      if (res.status === 429) { setError('Too many requests. Please wait a few minutes and try again.'); return }
      if (!res.ok) throw new Error('send failed')
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please try emailing us directly at info@theextremewilderness.com')
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
        <h3 className="text-2xl font-bold text-brand mb-2">Message Sent!</h3>
        <p className="text-text-muted text-sm leading-relaxed max-w-sm mx-auto">
          Thank you, <strong>{form.fullName.split(' ')[0]}</strong>. We typically reply within 2 hours with a personalised response.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="px-7 py-5 bg-brand">
        <h2 className="text-white font-bold text-xl">Send us a message</h2>
        <p className="text-white/65 text-sm mt-0.5">We typically reply within 2 hours.</p>
      </div>

      <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">

        {/* Honeypot — hidden from real users, bots fill it */}
        <div style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }} aria-hidden="true">
          <input
            name="website"
            type="text"
            value={form.website}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* Full Name */}
        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
            Full Name <span className="text-red-400">*</span>
          </label>
          <input
            name="fullName"
            required
            value={form.fullName}
            onChange={handleChange}
            placeholder="Jane Smith"
            className={inputCls}
          />
        </div>

        {/* Email + Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
              Email Address <span className="text-red-400">*</span>
            </label>
            <input
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="jane@email.com"
              className={inputCls}
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
              Phone / WhatsApp
            </label>
            <input
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="+1 555 000 0000"
              className={inputCls}
            />
          </div>
        </div>

        {/* Subject */}
        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
            Subject <span className="text-red-400">*</span>
          </label>
          <div className="relative">
            <select
              name="subject"
              required
              value={form.subject}
              onChange={handleChange}
              className={`${inputCls} appearance-none`}
            >
              <option value="">Select a subject</option>
              {SUBJECTS.map((s) => <option key={s}>{s}</option>)}
            </select>
            <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
            Message <span className="text-red-400">*</span>
          </label>
          <textarea
            name="message"
            required
            value={form.message}
            onChange={handleChange}
            rows={5}
            placeholder="How can we help?"
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
            I agree to the{' '}
            <Link href="/privacy" className="text-brand underline hover:no-underline">Privacy Policy</Link>
            {' '}and consent to The Extreme Wilderness contacting me about my message.
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
          {submitting ? 'Sending…' : 'Send message'}
        </button>

      </form>
    </div>
  )
}
