'use client'

import { useState, useEffect, useRef } from 'react'
import {
  X, Send, Plus, Minus, User, Mail, Phone, Globe, Calendar,
  Users, Wallet, Bed, MessageSquare, ChevronDown, Mountain, Tent,
} from 'lucide-react'
import { useBooking } from '@/context/BookingContext'
import { useTranslations } from 'next-intl'

// Country list stays in English (universal standard)
const COUNTRIES = [
  'United States', 'United Kingdom', 'Australia', 'Canada', 'Germany',
  'France', 'Italy', 'Netherlands', 'Belgium', 'Switzerland', 'Sweden',
  'Norway', 'Denmark', 'Finland', 'Austria', 'Spain', 'Portugal',
  'Ireland', 'New Zealand', 'Japan', 'South Korea', 'China', 'India',
  'South Africa', 'Kenya', 'Tanzania', 'UAE', 'Saudi Arabia', 'Israel',
  'Brazil', 'Mexico', 'Argentina', 'Singapore', 'Malaysia', 'Russia',
  'Poland', 'Czech Republic', 'Romania', 'Hungary', 'Ukraine', 'Other',
]

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
      {children}
    </label>
  )
}

const inputCls =
  'w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-brand focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 bg-white placeholder-gray-400 transition-all'

const selectCls =
  'w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-brand focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 bg-white appearance-none transition-all'

function SelectWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      {children}
      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
    </div>
  )
}

function SectionHeader({ icon: Icon, title }: { icon: React.ElementType; title: string }) {
  return (
    <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-100">
      <div className="w-7 h-7 bg-light-green rounded-lg flex items-center justify-center flex-shrink-0">
        <Icon className="w-3.5 h-3.5 text-brand" />
      </div>
      <span className="font-semibold text-brand text-sm uppercase tracking-wider">{title}</span>
    </div>
  )
}

function Stepper({ label, sublabel, value, onChange, min = 0 }: {
  label: string
  sublabel?: string
  value: number
  onChange: (n: number) => void
  min?: number
}) {
  return (
    <div className="flex items-center justify-between py-1">
      <div>
        <div className="text-sm font-medium text-brand">{label}</div>
        {sublabel && <div className="text-xs text-gray-400">{sublabel}</div>}
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => onChange(Math.max(min, value - 1))}
          className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:border-brand hover:text-brand transition-colors text-gray-500 disabled:opacity-30"
          disabled={value <= min}
        >
          <Minus className="w-3 h-3" />
        </button>
        <span className="w-6 text-center font-bold text-brand">{value}</span>
        <button
          type="button"
          onClick={() => onChange(value + 1)}
          className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:border-brand hover:text-brand transition-colors text-gray-500"
        >
          <Plus className="w-3 h-3" />
        </button>
      </div>
    </div>
  )
}

export default function EnquiryModal() {
  const t = useTranslations('forms')
  const { isOpen, bookingInfo, closeBooking } = useBooking()
  const scrollRef = useRef<HTMLDivElement>(null)

  // Translated option arrays
  const TRIP_TYPES = [
    t('tripTypes.wildlifeSafari'),
    t('tripTypes.kilimanjaroTrek'),
    t('tripTypes.beachSafariCombo'),
    t('tripTypes.gorillaTrekking'),
    t('tripTypes.honeymoon'),
    t('tripTypes.familySafari'),
    t('tripTypes.photographySafari'),
    t('tripTypes.multiCountry'),
    t('tripTypes.customTrip'),
  ]

  const BUDGET_OPTIONS = [
    t('budgetOptions.under1k'),
    t('budgetOptions.1k2k'),
    t('budgetOptions.2k3500'),
    t('budgetOptions.3500_5k'),
    t('budgetOptions.5k8k'),
    t('budgetOptions.8kPlus'),
    t('budgetOptions.flexible'),
  ]

  const ACCOMMODATION_OPTIONS = [
    t('accomOptions.budget'),
    t('accomOptions.midRange'),
    t('accomOptions.luxury'),
    t('accomOptions.ultraLuxury'),
    t('accomOptions.mix'),
  ]

  const CHILD_AGE_RANGES = [
    t('childAgeRanges.under2'),
    t('childAgeRanges.2to4'),
    t('childAgeRanges.5to7'),
    t('childAgeRanges.8to11'),
    t('childAgeRanges.12to15'),
    t('childAgeRanges.16to17'),
  ]

  const SPECIAL_REQS = [
    t('specialReqs.vegetarian'),
    t('specialReqs.vegan'),
    t('specialReqs.halal'),
    t('specialReqs.kosher'),
    t('specialReqs.glutenFree'),
    t('specialReqs.dairyFree'),
    t('specialReqs.wheelchair'),
    t('specialReqs.privateGuide'),
  ]

  const FLEXIBILITY_OPTIONS = [
    { value: 'fixed',    label: t('flexibilityOptions.fixed') },
    { value: '3days',    label: t('flexibilityOptions.threeDays') },
    { value: 'week',     label: t('flexibilityOptions.oneWeek') },
    { value: 'flexible', label: t('flexibilityOptions.flexible') },
  ]

  const CONTACT_OPTIONS = [
    { value: 'whatsapp', label: t('contactOptions.whatsapp'), emoji: '💬' },
    { value: 'email',    label: t('contactOptions.email'),    emoji: '✉️' },
    { value: 'phone',    label: t('contactOptions.phone'),    emoji: '📞' },
  ]

  // ── Form state ────────────────────────────────────────────────────────
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName]   = useState('')
  const [email, setEmail]         = useState('')
  const [phone, setPhone]         = useState('')
  const [gender, setGender]       = useState('')
  const [country, setCountry]     = useState('')
  const [tripType, setTripType]   = useState(bookingInfo?.packageType ?? '')
  const [arrivalDate, setArrivalDate]     = useState('')
  const [departureDate, setDepartureDate] = useState('')
  const [flexibility, setFlexibility]     = useState('flexible')
  const [adults, setAdults]     = useState(2)
  const [children, setChildren] = useState(0)
  const [childAges, setChildAges] = useState<string[]>([])
  const [budget, setBudget]             = useState('')
  const [accommodation, setAccommodation] = useState('')
  const [specialReqs, setSpecialReqs]   = useState<string[]>([])
  const [contactPref, setContactPref]   = useState('whatsapp')
  const [message, setMessage]           = useState('')
  const [privacyAgreed, setPrivacyAgreed] = useState(false)
  const [submitted, setSubmitted]   = useState(false)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (bookingInfo?.packageType) setTripType(bookingInfo.packageType)
    if (scrollRef.current) scrollRef.current.scrollTop = 0
    setSubmitted(false)
  }, [bookingInfo, isOpen])

  useEffect(() => {
    setChildAges((prev) => {
      if (children > prev.length) return [...prev, ...Array(children - prev.length).fill('')]
      return prev.slice(0, children)
    })
  }, [children])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeBooking() }
    if (isOpen) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, closeBooking])

  const toggleSpecialReq = (req: string) => {
    setSpecialReqs((prev) =>
      prev.includes(req) ? prev.filter((r) => r !== req) : [...prev, req]
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!firstName || !lastName || !email || !phone || !privacyAgreed) return
    setSubmitting(true)
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName, lastName, email, phone, gender, country,
          tripType, arrivalDate, departureDate, flexibility,
          adults, children, childAges,
          budget, accommodation, specialReqs,
          contactPref, message,
          packageName: bookingInfo?.packageName,
          packageType: bookingInfo?.packageType,
          duration: bookingInfo?.duration,
          priceFrom: bookingInfo?.priceFrom,
          source: 'booking_modal',
        }),
      })
      if (!res.ok) throw new Error('send failed')
      setSubmitted(true)
      setTimeout(() => {
        closeBooking()
        setSubmitted(false)
      }, 3500)
    } catch {
      // Keep modal open so user can try again
    } finally {
      setSubmitting(false)
    }
  }

  if (!isOpen) return null

  const contactMethodLabel = CONTACT_OPTIONS.find((o) => o.value === contactPref)?.label ?? t('contactOptions.email')

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      onClick={(e) => { if (e.target === e.currentTarget) closeBooking() }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-brand/75 backdrop-blur-sm" />

      {/* Modal card */}
      <div className="relative z-10 w-full max-w-2xl max-h-[92vh] flex flex-col bg-white rounded-3xl shadow-2xl overflow-hidden">

        {/* ── Header ─────────────────────────────────────────────── */}
        <div className="flex-shrink-0 bg-brand px-6 pt-6 pb-5">
          <button
            onClick={closeBooking}
            className="absolute top-4 right-4 w-8 h-8 bg-white/15 hover:bg-white/25 rounded-full flex items-center justify-center transition-colors"
            aria-label={t('closeLabel')}
          >
            <X className="w-4 h-4 text-white" />
          </button>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-gold rounded-xl flex items-center justify-center flex-shrink-0">
              <Tent className="w-5 h-5 text-brand" />
            </div>
            <div>
              <h2 className="text-white font-bold text-xl leading-tight">{t('planYourTrip')}</h2>
              <p className="text-white/70 text-sm mt-0.5">{t('modalSubheading')}</p>
            </div>
          </div>

          {/* Pre-filled package banner */}
          {bookingInfo?.packageName && (
            <div className="mt-4 bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 flex items-center gap-3">
              <Mountain className="w-4 h-4 text-gold flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="text-white font-semibold text-sm truncate">{bookingInfo.packageName}</div>
                <div className="text-white/60 text-xs">
                  {[bookingInfo.packageType, bookingInfo.duration, bookingInfo.priceFrom && `From ${bookingInfo.priceFrom}`]
                    .filter(Boolean).join(' · ')}
                </div>
              </div>
              <span className="text-[10px] font-bold text-brand bg-gold px-2 py-0.5 rounded-full uppercase tracking-wide flex-shrink-0">
                {t('selected')}
              </span>
            </div>
          )}
        </div>

        {/* ── Scrollable body ─────────────────────────────────────── */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto">

          {submitted ? (
            <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand mb-2">{t('successTitle')}</h3>
              <p className="text-text-muted text-sm max-w-xs">
                {t('successMessage', { name: firstName, method: contactMethodLabel })}
              </p>
            </div>
          ) : (
            <form id="booking-form" onSubmit={handleSubmit} className="p-6 space-y-7">

              {/* ── 1. Personal Details ──────────────────────────── */}
              <div>
                <SectionHeader icon={User} title={t('personalDetails')} />
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div>
                    <Label>{t('firstNameLabel')}</Label>
                    <input
                      type="text" required value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="Jane" className={inputCls}
                    />
                  </div>
                  <div>
                    <Label>{t('lastNameLabel')}</Label>
                    <input
                      type="text" required value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Smith" className={inputCls}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div>
                    <Label>{t('emailLabel')}</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="email" required value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="jane@email.com"
                        className={inputCls + ' pl-10'}
                      />
                    </div>
                  </div>
                  <div>
                    <Label>{t('phoneLabel')}</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="tel" required value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+1 555 000 0000"
                        className={inputCls + ' pl-10'}
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label>{t('gender')}</Label>
                    <SelectWrapper>
                      <select value={gender} onChange={(e) => setGender(e.target.value)} className={selectCls}>
                        <option value="">{t('selectGender')}</option>
                        <option>{t('male')}</option>
                        <option>{t('female')}</option>
                        <option>{t('nonBinary')}</option>
                        <option>{t('preferNotToSay')}</option>
                      </select>
                    </SelectWrapper>
                  </div>
                  <div>
                    <Label>{t('countryOfResidence')}</Label>
                    <SelectWrapper>
                      <select value={country} onChange={(e) => setCountry(e.target.value)} className={selectCls}>
                        <option value="">{t('selectCountryModal')}</option>
                        {COUNTRIES.map((c) => <option key={c}>{c}</option>)}
                      </select>
                    </SelectWrapper>
                  </div>
                </div>
              </div>

              {/* ── 2. Trip Details ──────────────────────────────── */}
              <div>
                <SectionHeader icon={Calendar} title={t('tripDetails')} />
                <div className="mb-3">
                  <Label>{t('tripLabel')}</Label>
                  <SelectWrapper>
                    <select value={tripType} onChange={(e) => setTripType(e.target.value)} className={selectCls}>
                      <option value="">{t('selectTripType')}</option>
                      {TRIP_TYPES.map((type) => <option key={type}>{type}</option>)}
                    </select>
                  </SelectWrapper>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div>
                    <Label>{t('preferredArrival')}</Label>
                    <input
                      type="date" value={arrivalDate}
                      onChange={(e) => setArrivalDate(e.target.value)}
                      min={new Date(Date.now() + 14 * 86400000).toISOString().split('T')[0]}
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <Label>{t('preferredDeparture')}</Label>
                    <input
                      type="date" value={departureDate}
                      onChange={(e) => setDepartureDate(e.target.value)}
                      min={arrivalDate || new Date(Date.now() + 14 * 86400000).toISOString().split('T')[0]}
                      className={inputCls}
                    />
                  </div>
                </div>
                <div>
                  <Label>{t('dateFlexibility')}</Label>
                  <div className="flex flex-wrap gap-2">
                    {FLEXIBILITY_OPTIONS.map((opt) => (
                      <button
                        key={opt.value} type="button"
                        onClick={() => setFlexibility(opt.value)}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                          flexibility === opt.value
                            ? 'bg-brand text-white border-brand'
                            : 'bg-white text-gray-600 border-gray-200 hover:border-brand'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* ── 3. Your Party ────────────────────────────────── */}
              <div>
                <SectionHeader icon={Users} title={t('yourParty')} />
                <div className="bg-gray-50 rounded-xl p-4 space-y-3 divide-y divide-gray-100">
                  <Stepper
                    label={t('adults')}
                    sublabel={t('adults18')}
                    value={adults}
                    onChange={setAdults}
                    min={1}
                  />
                  <div className="pt-3">
                    <Stepper
                      label={t('children')}
                      sublabel={t('childrenUnder18')}
                      value={children}
                      onChange={setChildren}
                    />
                  </div>
                </div>

                {children > 0 && (
                  <div className="mt-3">
                    <Label>{t('childrenAgesLabel')}</Label>
                    <div className="grid grid-cols-3 gap-2">
                      {childAges.map((age, i) => (
                        <div key={i} className="relative">
                          <SelectWrapper>
                            <select
                              value={age}
                              onChange={(e) => {
                                const updated = [...childAges]
                                updated[i] = e.target.value
                                setChildAges(updated)
                              }}
                              className={selectCls}
                            >
                              <option value="">{t('childPlaceholder', { n: i + 1 })}</option>
                              {CHILD_AGE_RANGES.map((r) => <option key={r}>{r}</option>)}
                            </select>
                          </SelectWrapper>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* ── 4. Budget & Preferences ──────────────────────── */}
              <div>
                <SectionHeader icon={Wallet} title={t('budgetPreferences')} />
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div>
                    <Label>{t('budgetPerPerson')}</Label>
                    <SelectWrapper>
                      <select value={budget} onChange={(e) => setBudget(e.target.value)} className={selectCls}>
                        <option value="">{t('selectBudgetModal')}</option>
                        {BUDGET_OPTIONS.map((b) => <option key={b}>{b}</option>)}
                      </select>
                    </SelectWrapper>
                  </div>
                  <div>
                    <Label>{t('accommodationStyleModal')}</Label>
                    <SelectWrapper>
                      <select value={accommodation} onChange={(e) => setAccommodation(e.target.value)} className={selectCls}>
                        <option value="">{t('selectStyleModal')}</option>
                        {ACCOMMODATION_OPTIONS.map((a) => <option key={a}>{a}</option>)}
                      </select>
                    </SelectWrapper>
                  </div>
                </div>
                <div>
                  <Label>{t('specialReqsSelect')}</Label>
                  <div className="flex flex-wrap gap-2">
                    {SPECIAL_REQS.map((req) => (
                      <button
                        key={req} type="button"
                        onClick={() => toggleSpecialReq(req)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                          specialReqs.includes(req)
                            ? 'bg-gold/15 text-brand border-gold/50 font-semibold'
                            : 'bg-white text-gray-500 border-gray-200 hover:border-brand'
                        }`}
                      >
                        {req}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* ── 5. Contact & Message ─────────────────────────── */}
              <div>
                <SectionHeader icon={MessageSquare} title={t('contactMessage')} />
                <div className="mb-4">
                  <Label>{t('contactVia')}</Label>
                  <div className="flex gap-3 flex-wrap">
                    {CONTACT_OPTIONS.map((opt) => (
                      <label
                        key={opt.value}
                        className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl border cursor-pointer transition-all ${
                          contactPref === opt.value
                            ? 'bg-brand text-white border-brand'
                            : 'bg-white text-gray-600 border-gray-200 hover:border-brand'
                        }`}
                      >
                        <input
                          type="radio" name="contactPref" value={opt.value}
                          checked={contactPref === opt.value}
                          onChange={() => setContactPref(opt.value)}
                          className="sr-only"
                        />
                        <span className="text-sm font-medium">{opt.emoji} {opt.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <Label>{t('questionsRequests')}</Label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t('questionPlaceholder')}
                    rows={4}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-brand focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 resize-none placeholder-gray-400 transition-all"
                  />
                </div>
              </div>

            </form>
          )}
        </div>

        {/* ── Sticky footer ────────────────────────────────────────── */}
        {!submitted && (
          <div className="flex-shrink-0 border-t border-gray-100 bg-white px-6 py-4">
            <div className="flex items-center gap-3 mb-3">
              <input
                id="privacy" type="checkbox"
                checked={privacyAgreed} onChange={(e) => setPrivacyAgreed(e.target.checked)}
                className="w-4 h-4 accent-brand cursor-pointer"
              />
              <label htmlFor="privacy" className="text-xs text-gray-500 cursor-pointer leading-tight">
                {t.rich('bySubmitting', {
                  privacyLink: (chunks) => (
                    <a href="/privacy" className="text-brand underline hover:text-gold">{chunks}</a>
                  ),
                })}
              </label>
            </div>
            <button
              type="submit"
              form="booking-form"
              disabled={submitting || !privacyAgreed || !firstName || !lastName || !email || !phone}
              className="w-full flex items-center justify-center gap-2.5 py-3.5 bg-brand hover:bg-brand-secondary disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all text-sm"
            >
              {submitting ? (
                <>
                  <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  {t('sendingEnquiry')}
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  {t('sendEnquiry')}
                </>
              )}
            </button>
            <p className="text-center text-xs text-gray-400 mt-2">
              {t('noPayment')}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
