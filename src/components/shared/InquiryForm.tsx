'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Send, Check, ChevronDown } from 'lucide-react'
import { Link } from '@/i18n/navigation'

// ─── Shared option lists (mirrors EnquiryModal exactly) ──────────────────────

const COUNTRIES = [
  'United States', 'United Kingdom', 'Australia', 'Canada', 'Germany',
  'France', 'Italy', 'Netherlands', 'Belgium', 'Switzerland', 'Sweden',
  'Norway', 'Denmark', 'Finland', 'Austria', 'Spain', 'Portugal',
  'Ireland', 'New Zealand', 'Japan', 'South Korea', 'China', 'India',
  'South Africa', 'Kenya', 'Tanzania', 'UAE', 'Saudi Arabia', 'Israel',
  'Brazil', 'Mexico', 'Argentina', 'Singapore', 'Malaysia', 'Russia',
  'Poland', 'Czech Republic', 'Romania', 'Hungary', 'Ukraine', 'Other',
]

const TRIP_TYPES = [
  'Wildlife Safari', 'Kilimanjaro Trek', 'Beach & Safari Combo',
  'Gorilla Trekking (Rwanda)', 'Honeymoon / Anniversary', 'Family Safari',
  'Photography Safari', 'Multi-country Adventure', 'Custom Trip',
]

const BUDGET_OPTIONS = [
  'Under $1,000 per person',
  '$1,000 – $2,000 per person',
  '$2,000 – $3,500 per person',
  '$3,500 – $5,000 per person',
  '$5,000 – $8,000 per person',
  '$8,000+ per person (luxury)',
  'Flexible / Not sure yet',
]

const ACCOMMODATION_OPTIONS = [
  'Budget (basic lodges & guesthouses)',
  'Mid-range (comfortable camps & lodges)',
  'Luxury (premium camps & lodges)',
  'Ultra-luxury (private exclusive camps)',
  'Mix of styles',
]

const SPECIAL_REQS = [
  'Vegetarian', 'Vegan', 'Halal', 'Kosher',
  'Gluten-free', 'Dairy-free', 'Wheelchair accessible', 'Private guide',
]

const CONTACT_PREFS = [
  { value: 'whatsapp', label: '💬 WhatsApp' },
  { value: 'email',    label: '✉️ Email' },
  { value: 'phone',    label: '📞 Phone call' },
]

// ─── Shared styling ───────────────────────────────────────────────────────────

const inputCls =
  'w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-brand focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 bg-white placeholder-gray-400 transition-all'

const selectCls =
  'w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-brand focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 bg-white appearance-none transition-all'

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
      {children}
    </label>
  )
}

function SelectWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      {children}
      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
    </div>
  )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-100">
      <p className="text-xs font-bold text-brand uppercase tracking-wider">{children}</p>
    </div>
  )
}

// ─── Props ────────────────────────────────────────────────────────────────────

interface InquiryFormProps {
  tripType?: string
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function InquiryForm({ tripType }: InquiryFormProps) {
  const t = useTranslations('forms')
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [privacyAgreed, setPrivacyAgreed] = useState(false)
  const [specialReqs, setSpecialReqs] = useState<string[]>([])

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    tripType: tripType ?? '',
    arrivalDate: '',
    departureDate: '',
    adults: '2',
    children: '0',
    budget: '',
    accommodation: '',
    contactPref: 'email',
    message: '',
  })

  const minDate = new Date()
  minDate.setDate(minDate.getDate() + 14)
  const minDateStr = minDate.toISOString().split('T')[0]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm((prev) => {
      const next = { ...prev, [name]: value }
      if (name === 'arrivalDate' && (!prev.departureDate || value > prev.departureDate)) {
        next.departureDate = value
      }
      return next
    })
  }

  const toggleReq = (req: string) => {
    setSpecialReqs((prev) => prev.includes(req) ? prev.filter((r) => r !== req) : [...prev, req])
  }

  const canSubmit = form.firstName && form.lastName && form.email && form.phone && privacyAgreed

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!canSubmit) return
    setSubmitting(true)
    await new Promise((r) => setTimeout(r, 1000))
    setSubmitting(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-10 text-center shadow-sm border border-gray-100">
        <div className="w-16 h-16 bg-light-green rounded-full flex items-center justify-center mx-auto mb-5">
          <Check className="w-8 h-8 text-brand" />
        </div>
        <h3 className="text-2xl font-bold text-brand mb-2">Enquiry Sent!</h3>
        <p className="text-text-muted text-sm leading-relaxed max-w-sm mx-auto">
          Thank you, {form.firstName}! Our team will be in touch via{' '}
          <span className="font-semibold text-brand">
            {CONTACT_PREFS.find((p) => p.value === form.contactPref)?.label ?? 'email'}
          </span>{' '}
          within 2 hours with a personalised itinerary.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

      {/* Form header */}
      <div className="bg-brand px-7 py-5">
        <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-1">Free & No Commitment</p>
        <h3 className="text-white font-bold text-lg">Send Your Enquiry</h3>
        <p className="text-white/60 text-xs mt-0.5">Our team responds within 2 hours · Personalised itinerary included</p>
      </div>

      <div className="p-6 sm:p-8 space-y-8">

        {/* 1. Personal Details */}
        <div>
          <SectionTitle>Personal Details</SectionTitle>
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label>First Name *</Label>
                <input name="firstName" required value={form.firstName} onChange={handleChange} placeholder="Jane" className={inputCls} />
              </div>
              <div>
                <Label>Last Name *</Label>
                <input name="lastName" required value={form.lastName} onChange={handleChange} placeholder="Smith" className={inputCls} />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label>Email Address *</Label>
                <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="jane@email.com" className={inputCls} />
              </div>
              <div>
                <Label>Phone / WhatsApp *</Label>
                <input name="phone" type="tel" required value={form.phone} onChange={handleChange} placeholder="+1 555 000 0000" className={inputCls} />
              </div>
            </div>
            <div>
              <Label>Country</Label>
              <SelectWrapper>
                <select name="country" value={form.country} onChange={handleChange} className={selectCls}>
                  <option value="">Select your country</option>
                  {COUNTRIES.map((c) => <option key={c}>{c}</option>)}
                </select>
              </SelectWrapper>
            </div>
          </div>
        </div>

        {/* 2. Trip Details */}
        <div>
          <SectionTitle>Trip Details</SectionTitle>
          <div className="space-y-4">
            <div>
              <Label>Trip Type</Label>
              <SelectWrapper>
                <select name="tripType" value={form.tripType} onChange={handleChange} className={selectCls}>
                  <option value="">Select trip type</option>
                  {TRIP_TYPES.map((t) => <option key={t}>{t}</option>)}
                </select>
              </SelectWrapper>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label>Arrival Date</Label>
                <input name="arrivalDate" type="date" min={minDateStr} value={form.arrivalDate} onChange={handleChange} className={inputCls} />
              </div>
              <div>
                <Label>Departure Date</Label>
                <input name="departureDate" type="date" min={form.arrivalDate || minDateStr} value={form.departureDate} onChange={handleChange} className={inputCls} />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label>Adults</Label>
                <input name="adults" type="number" min="1" max="20" value={form.adults} onChange={handleChange} className={inputCls} />
              </div>
              <div>
                <Label>Children</Label>
                <input name="children" type="number" min="0" max="10" value={form.children} onChange={handleChange} className={inputCls} />
              </div>
            </div>
          </div>
        </div>

        {/* 3. Budget & Preferences */}
        <div>
          <SectionTitle>Budget & Preferences</SectionTitle>
          <div className="space-y-4">
            <div>
              <Label>Budget Range</Label>
              <SelectWrapper>
                <select name="budget" value={form.budget} onChange={handleChange} className={selectCls}>
                  <option value="">Select budget range</option>
                  {BUDGET_OPTIONS.map((b) => <option key={b}>{b}</option>)}
                </select>
              </SelectWrapper>
            </div>
            <div>
              <Label>Accommodation Style</Label>
              <SelectWrapper>
                <select name="accommodation" value={form.accommodation} onChange={handleChange} className={selectCls}>
                  <option value="">Select accommodation style</option>
                  {ACCOMMODATION_OPTIONS.map((a) => <option key={a}>{a}</option>)}
                </select>
              </SelectWrapper>
            </div>
            <div>
              <Label>Special Requirements</Label>
              <div className="flex flex-wrap gap-2 mt-1">
                {SPECIAL_REQS.map((req) => {
                  const active = specialReqs.includes(req)
                  return (
                    <button
                      key={req}
                      type="button"
                      onClick={() => toggleReq(req)}
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                        active
                          ? 'bg-gold/15 border-gold text-brand'
                          : 'bg-gray-50 border-gray-200 text-text-muted hover:border-brand/30'
                      }`}
                    >
                      {req}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* 4. Contact & Message */}
        <div>
          <SectionTitle>Message & Contact Preference</SectionTitle>
          <div className="space-y-4">
            <div>
              <Label>Preferred Contact Method</Label>
              <div className="flex gap-3 flex-wrap">
                {CONTACT_PREFS.map(({ value, label }) => (
                  <label
                    key={value}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm cursor-pointer transition-all ${
                      form.contactPref === value
                        ? 'border-brand bg-brand/5 text-brand font-semibold'
                        : 'border-gray-200 text-text-muted hover:border-brand/30'
                    }`}
                  >
                    <input
                      type="radio"
                      name="contactPref"
                      value={value}
                      checked={form.contactPref === value}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    {label}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <Label>Tell Us Your Dream Safari</Label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="Describe your dream trip — wildlife priorities, physical fitness, any special occasions, dietary needs, or questions for our team..."
                className={`${inputCls} resize-none`}
              />
            </div>
          </div>
        </div>

        {/* Privacy + Submit */}
        <div className="space-y-4 pt-2">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={privacyAgreed}
              onChange={(e) => setPrivacyAgreed(e.target.checked)}
              className="mt-0.5 w-4 h-4 accent-brand flex-shrink-0"
            />
            <span className="text-xs text-text-muted leading-relaxed">
              I agree to the{' '}
              <Link href="/privacy" className="text-brand underline hover:no-underline">Privacy Policy</Link>
              {' '}and consent to The Extreme Wilderness contacting me about my enquiry.
            </span>
          </label>

          <button
            type="submit"
            disabled={!canSubmit || submitting}
            className="w-full flex items-center justify-center gap-2 py-4 bg-brand hover:bg-brand-secondary disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-colors text-sm"
          >
            {submitting ? (
              <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <Send className="w-4 h-4" />
            )}
            {submitting ? 'Sending…' : 'Send My Enquiry'}
          </button>

          <p className="text-center text-xs text-text-muted">
            ⏱ Average response: under 2 hours · No payment or commitment required
          </p>
        </div>

      </div>
    </form>
  )
}
