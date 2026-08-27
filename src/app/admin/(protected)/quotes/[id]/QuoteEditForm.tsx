'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { QUOTE_STATUSES, type Quote } from '@/lib/quotes'
import { packages } from '@/data/packages'

const inputCls = 'w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10'
const labelCls = 'block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1.5'

export default function QuoteEditForm({ quote }: { quote: Quote }) {
  const router = useRouter()
  const [form, setForm] = useState({
    packageSlug: quote.package_slug ?? '',
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
    setSaving(true)
    setSaved(false)
    await fetch(`/api/admin/quotes/${quote.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        packageSlug: form.packageSlug || null,
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
    <div className="bg-white border border-gray-200 rounded-xl p-7 space-y-4">
      <h2 className="text-sm font-bold text-brand mb-1">Edit Quote</h2>
      <div>
        <label className={labelCls}>Package</label>
        <select value={form.packageSlug} onChange={(e) => update('packageSlug', e.target.value)} className={inputCls}>
          <option value="">— No specific package —</option>
          {packages.map((p) => <option key={p.slug} value={p.slug}>{p.name}</option>)}
        </select>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>Price</label>
          <input type="number" min="0" step="0.01" value={form.price} onChange={(e) => update('price', e.target.value)} className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Currency</label>
          <input value={form.currency} onChange={(e) => update('currency', e.target.value)} className={inputCls} />
        </div>
      </div>
      <div>
        <label className={labelCls}>Valid Until</label>
        <input type="date" value={form.validUntil} onChange={(e) => update('validUntil', e.target.value)} className={inputCls} />
      </div>
      <div>
        <label className={labelCls}>Status</label>
        <select value={form.status} onChange={(e) => update('status', e.target.value)} className={`${inputCls} capitalize`}>
          {QUOTE_STATUSES.map((s) => <option key={s} value={s} className="capitalize">{s}</option>)}
        </select>
      </div>
      <div>
        <label className={labelCls}>Internal Notes</label>
        <textarea value={form.notes} onChange={(e) => update('notes', e.target.value)} rows={4} className={inputCls} />
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={handleSave}
          disabled={saving}
          className="px-5 py-2.5 bg-brand hover:bg-brand-secondary disabled:opacity-50 text-white text-sm font-semibold rounded-lg transition-colors"
        >
          {saving ? 'Saving…' : 'Save Changes'}
        </button>
        {saved && <span className="text-green-600 text-sm">Saved</span>}
      </div>
    </div>
  )
}
