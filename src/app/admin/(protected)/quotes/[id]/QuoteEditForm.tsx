'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { QUOTE_STATUSES, type Quote } from '@/lib/quotes'
import { packages } from '@/data/packages'
import SelectWithCustom, { CUSTOM_OPTION_VALUE } from '@/components/admin/SelectWithCustom'
import { todayIso } from '@/lib/dates'

const isKnownPackage = (slug: string) => packages.some((p) => p.slug === slug)

export default function QuoteEditForm({ quote }: { quote: Quote }) {
  const router = useRouter()
  const initialSlug = quote.package_slug ?? ''
  const initialIsCustom = initialSlug !== '' && !isKnownPackage(initialSlug)
  const [form, setForm] = useState({
    packageSlug: initialIsCustom ? CUSTOM_OPTION_VALUE : initialSlug,
    customPackageName: initialIsCustom ? initialSlug : '',
    price: String(quote.price),
    currency: quote.currency,
    status: quote.status,
    validUntil: quote.valid_until ?? '',
    notes: quote.notes ?? '',
  })
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }))
    setSaved(false)
  }

  async function handleSave() {
    const isCustom = form.packageSlug === CUSTOM_OPTION_VALUE
    setSaving(true)
    setSaved(false)
    await fetch(`/api/admin/quotes/${quote.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        packageSlug: (isCustom ? form.customPackageName.trim() : form.packageSlug) || null,
        price: parseFloat(form.price) || 0,
        currency: form.currency,
        status: form.status,
        validUntil: form.validUntil || null,
        notes: form.notes || null,
      }),
    })
    setSaving(false)
    setSaved(true)
    router.refresh()
  }

  return (
    <div className="panel space-y-4">
      <h2 className="mb-1">Edit Quote</h2>
      <div>
        <label className="field-label">Package</label>
        <SelectWithCustom
          options={packages}
          getOptionValue={(p) => p.slug}
          getOptionLabel={(p) => p.name}
          value={form.packageSlug}
          onChange={(v) => update('packageSlug', v)}
          customValue={form.customPackageName}
          onCustomChange={(v) => update('customPackageName', v)}
          placeholder="— No specific package —"
          customOptionLabel="— Custom / Bespoke Package —"
          customLabel="Custom Package Name *"
          customPlaceholder="e.g. Private Family Safari — Smith Family"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="field-label">Price</label>
          <input type="number" min="0" step="0.01" value={form.price} onChange={(e) => update('price', e.target.value)} className="field-input" />
        </div>
        <div>
          <label className="field-label">Currency</label>
          <input value={form.currency} onChange={(e) => update('currency', e.target.value)} className="field-input" />
        </div>
      </div>
      <div>
        <label className="field-label">Valid Until</label>
        <input type="date" min={todayIso()} value={form.validUntil} onChange={(e) => update('validUntil', e.target.value)} className="field-input" />
      </div>
      <div>
        <label className="field-label">Status</label>
        <select value={form.status} onChange={(e) => update('status', e.target.value)} className="field-input capitalize">
          {QUOTE_STATUSES.map((s) => <option key={s} value={s} className="capitalize">{s}</option>)}
        </select>
      </div>
      <div>
        <label className="field-label">Internal Notes</label>
        <textarea value={form.notes} onChange={(e) => update('notes', e.target.value)} rows={4} className="field-input" />
      </div>
      <div className="flex items-center gap-3">
        <button type="button" onClick={handleSave} disabled={saving} className="btn-primary" style={{ opacity: saving ? 0.5 : 1 }}>
          {saving ? 'Saving…' : 'Save Changes'}
        </button>
        {saved && <span className="text-green-600 text-sm">Saved</span>}
      </div>
    </div>
  )
}
