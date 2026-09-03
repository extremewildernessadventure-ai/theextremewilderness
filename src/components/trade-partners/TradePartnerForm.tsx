'use client'

import { useState } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { MessageCircle } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { buildWhatsAppUrl } from '@/lib/contact'
import { trackFormFillConversion } from '@/lib/analytics'
import styles from '@/app/[locale]/trade-partners/page.module.css'

type Props = { className?: string }

export default function TradePartnerForm({ className }: Props) {
  const t = useTranslations('tradePartners')
  const tf = useTranslations('forms')
  const locale = useLocale()

  const VOLUME_OPTIONS = [
    t('formVolumeOption1'),
    t('formVolumeOption2'),
    t('formVolumeOption3'),
    t('formVolumeOption4'),
  ]

  // Which channel completed the send, or null if neither has yet — using
  // either button flips this, hiding/disabling both so the same enquiry
  // can't be sent twice.
  const [sentVia, setSentVia] = useState<'email' | 'whatsapp' | null>(null)
  const submitted = sentVia !== null
  const [submitting, setSubmitting] = useState(false)
  const [whatsappSending, setWhatsappSending] = useState(false)
  const [error, setError] = useState('')
  const [privacy, setPrivacy] = useState(false)

  const [form, setForm] = useState({
    agencyName: '',
    country: '',
    website: '',
    email: '',
    volume: '',
    clientDescription: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (error) setError('')
  }

  const canSubmit = form.agencyName && form.country && form.email && form.volume && privacy && !submitting && !whatsappSending

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!canSubmit) return
    setSubmitting(true)
    setError('')
    try {
      const res = await fetch('/api/trade-partners', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, locale, contactMethod: 'email' }),
      })
      if (!res.ok) throw new Error('send failed')
      trackFormFillConversion()
      setSentVia('email')
    } catch {
      setError(t('formError'))
    } finally {
      setSubmitting(false)
    }
  }

  const whatsappMessage = t('formWhatsappMessage', {
    agencyName: form.agencyName, country: form.country,
    website: form.website || '—', volume: form.volume || '—',
    clientDescription: form.clientDescription || '—', email: form.email,
  })

  // Same required-field/privacy gate as the email submit button; stays a
  // real <a href target="_blank"> (never a JS window.open() after an
  // awaited fetch, which trips popup blockers) — the lead-save POST below
  // fires fire-and-forget, never blocking the anchor's own navigation.
  const handleWhatsappClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!canSubmit) { e.preventDefault(); return }
    setWhatsappSending(true)
    trackFormFillConversion()
    fetch('/api/trade-partners', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, locale, contactMethod: 'whatsapp' }),
    }).catch(() => {}).finally(() => setWhatsappSending(false))
    setSentVia('whatsapp')
  }

  if (submitted) {
    return (
      <div className={`${styles.formSuccess} ${className ?? ''}`}>
        <h3>{t('formSuccessTitle')}</h3>
        <p>{t('formSuccessBody')}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={`${styles.enquiryForm} ${className ?? ''}`}>
      <div className={styles.field}>
        <label>{t('formAgencyName')}</label>
        <input
          name="agencyName"
          required
          value={form.agencyName}
          onChange={handleChange}
          placeholder={t('formAgencyNamePlaceholder')}
        />
      </div>
      <div className={styles.field}>
        <label>{t('formCountry')}</label>
        <input
          name="country"
          required
          value={form.country}
          onChange={handleChange}
          placeholder={t('formCountryPlaceholder')}
        />
      </div>
      <div className={styles.field}>
        <label>{t('formWebsite')}</label>
        <input
          name="website"
          value={form.website}
          onChange={handleChange}
          placeholder={t('formWebsitePlaceholder')}
        />
      </div>
      <div className={styles.field}>
        <label>{t('formEmail')}</label>
        <input
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder={t('formEmailPlaceholder')}
        />
      </div>
      <div className={`${styles.field} ${styles.fieldFull}`}>
        <label>{t('formVolume')}</label>
        <select name="volume" required value={form.volume} onChange={handleChange}>
          <option value="">{t('formVolumeSelectPlaceholder')}</option>
          {VOLUME_OPTIONS.map((v) => <option key={v}>{v}</option>)}
        </select>
      </div>
      <div className={`${styles.field} ${styles.fieldFull}`}>
        <label>{t('formClientDescription')}</label>
        <textarea
          name="clientDescription"
          value={form.clientDescription}
          onChange={handleChange}
          rows={4}
          placeholder={t('formClientDescriptionPlaceholder')}
        />
      </div>

      <label className={`${styles.fieldFull}`} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', cursor: 'pointer' }}>
        <input
          type="checkbox"
          checked={privacy}
          onChange={(e) => setPrivacy(e.target.checked)}
          style={{ width: 'auto', marginTop: '4px', flexShrink: 0 }}
        />
        <span style={{ fontSize: '12.5px', color: 'var(--text-muted-light)', lineHeight: 1.6 }}>
          {tf.rich('contactForm.privacyConsentText', {
            privacyLink: (chunks) => (
              <Link href="/privacy" style={{ color: 'var(--gold-light)', textDecoration: 'underline' }}>{chunks}</Link>
            ),
          })}
        </span>
      </label>

      {error && <p className={styles.formError}>{error}</p>}

      <div className={styles.submitRow}>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button type="submit" disabled={!canSubmit} className={`${styles.btn} ${styles.solid}`}>
            {submitting ? t('formSending') : t('formSubmit')}
          </button>
          <a
            href={buildWhatsAppUrl(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsappClick}
            aria-disabled={!canSubmit}
            tabIndex={!canSubmit ? -1 : 0}
            className={styles.btn}
            style={!canSubmit ? { opacity: 0.5, pointerEvents: 'none', cursor: 'not-allowed' } : undefined}
          >
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <MessageCircle size={16} />
              {tf('sendViaWhatsapp')}
            </span>
          </a>
        </div>
        <p className={styles.note}>{t('formNote')}</p>
      </div>
    </form>
  )
}
