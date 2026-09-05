'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { QUOTE_STATUSES, computeQuoteTotalCost, type Quote } from '@/lib/quotes'
import type { TripCatalogEntry } from '@/lib/tripCatalog'
import SelectWithCustom, { CUSTOM_OPTION_VALUE } from '@/components/admin/SelectWithCustom'
import { todayIso } from '@/lib/dates'

export default function QuoteEditForm({ quote, tripCatalog }: { quote: Quote; tripCatalog: TripCatalogEntry[] }) {
  const router = useRouter()
  const initialSlug = quote.package_slug ?? ''
  // A quote created before the Trip Catalog existed (or one whose entry has
  // since been archived) won't match any current option -- treat it as
  // "Custom" pre-filled with the raw stored name rather than losing it.
  const initialIsCustom = initialSlug !== '' && !tripCatalog.some((p) => p.name === initialSlug)
  const [form, setForm] = useState({
    packageSlug: initialIsCustom ? CUSTOM_OPTION_VALUE : initialSlug,
    customPackageName: initialIsCustom ? initialSlug : '',
    currency: quote.currency,
    status: quote.status,
    validUntil: quote.valid_until ?? '',
    notes: quote.notes ?? '',
    adults: String(quote.adults),
    children: String(quote.children),
    pricePerAdult: quote.price_per_adult == null ? '' : String(quote.price_per_adult),
    pricePerChild: quote.price_per_child == null ? '' : String(quote.price_per_child),
  })
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }))
    setSaved(false)
  }

  const adultsNum = parseInt(form.adults, 10) || 0
  const childrenNum = parseInt(form.children, 10) || 0
  const pricePerAdultNum = form.pricePerAdult.trim() === '' ? null : Number(form.pricePerAdult)
  const pricePerChildNum = form.pricePerChild.trim() === '' ? null : Number(form.pricePerChild)
  const totalCost = computeQuoteTotalCost({
    adults: adultsNum, children: childrenNum,
    price_per_adult: pricePerAdultNum, price_per_child: pricePerChildNum,
  })

  async function handleSave() {
    const isCustom = form.packageSlug === CUSTOM_OPTION_VALUE
    setSaving(true)
    setSaved(false)
    await fetch(`/api/admin/quotes/${quote.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        packageSlug: (isCustom ? form.customPackageName.trim() : form.packageSlug) || null,
        currency: form.currency,
        status: form.status,
        validUntil: form.validUntil || null,
        notes: form.notes || null,
        adults: adultsNum,
        children: childrenNum,
        pricePerAdult: pricePerAdultNum,
        pricePerChild: childrenNum > 0 ? pricePerChildNum : null,
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
          options={tripCatalog}
          getOptionValue={(p) => p.name}
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
        <p className="text-xs text-gray-400 mt-1">
          Not listed? Choose &quot;Custom / Bespoke Package&quot; above, or add it to the <Link href="/admin/trip-catalog" className="text-brand hover:underline">Trip Catalog</Link> first to reuse it later.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="field-label">Adults</label>
          <input type="number" min="1" step="1" value={form.adults} onChange={(e) => update('adults', e.target.value)} className="field-input" />
        </div>
        <div>
          <label className="field-label">Children</label>
          <input type="number" min="0" step="1" value={form.children} onChange={(e) => update('children', e.target.value)} className="field-input" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="field-label">Price per Adult</label>
          <input type="number" min="0" step="0.01" value={form.pricePerAdult} onChange={(e) => update('pricePerAdult', e.target.value)} className="field-input" />
        </div>
        <div>
          <label className="field-label">Price per Child</label>
          <input type="number" min="0" step="0.01" disabled={childrenNum === 0} value={form.pricePerChild} onChange={(e) => update('pricePerChild', e.target.value)} className="field-input" />
        </div>
      </div>
      <div>
        <label className="field-label">Currency</label>
        <input value={form.currency} onChange={(e) => update('currency', e.target.value)} className="field-input" style={{ maxWidth: 140 }} />
      </div>
      {totalCost != null && (
        <p className="text-sm" style={{ color: 'var(--grey)' }}>
          Total: <span className="font-semibold mono" style={{ color: 'var(--pine)' }}>{form.currency} {totalCost.toLocaleString()}</span>
        </p>
      )}
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
