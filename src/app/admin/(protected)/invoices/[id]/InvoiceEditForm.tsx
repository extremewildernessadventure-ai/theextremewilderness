'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import type { Invoice } from '@/lib/db'
import type { Departure } from '@/lib/departures'
import { packages } from '@/data/packages'

const STATUSES = ['unpaid', 'partial', 'paid', 'cancelled'] as const

const inputCls = 'w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10'
const labelCls = 'block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1.5'

function departureLabel(d: Departure): string {
  const pkg = packages.find((p) => p.slug === d.package_slug)
  return `${pkg?.name ?? d.package_slug} (${d.start_date})`
}

export default function InvoiceEditForm({ invoice, departures }: { invoice: Invoice; departures: Departure[] }) {
  const router = useRouter()
  const [form, setForm] = useState({
    clientName: invoice.client_name,
    clientEmail: invoice.client_email ?? '',
    bookingReference: invoice.booking_reference ?? '',
    currency: invoice.currency,
    departureId: invoice.departure_id ? String(invoice.departure_id) : '',
    dueDate: invoice.due_date ?? '',
    status: invoice.status,
    notes: invoice.notes ?? '',
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
    await fetch(`/api/admin/invoices/${invoice.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, departureId: form.departureId ? Number(form.departureId) : null }),
    })
    setSaving(false)
    setSaved(true)
    router.refresh()
  }

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-7 space-y-4">
      <h2 className="text-sm font-bold text-brand mb-1">Edit Invoice</h2>
      <div>
        <label className={labelCls}>Client Name</label>
        <input value={form.clientName} onChange={(e) => update('clientName', e.target.value)} className={inputCls} />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>Client Email</label>
          <input type="email" value={form.clientEmail} onChange={(e) => update('clientEmail', e.target.value)} className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Booking Reference</label>
          <input value={form.bookingReference} onChange={(e) => update('bookingReference', e.target.value)} className={inputCls} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>Currency</label>
          <input value={form.currency} onChange={(e) => update('currency', e.target.value)} className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Departure</label>
          <select value={form.departureId} onChange={(e) => update('departureId', e.target.value)} className={inputCls}>
            <option value="">—</option>
            {departures.map((d) => <option key={d.id} value={d.id}>{departureLabel(d)}</option>)}
          </select>
        </div>
      </div>
      <p className="text-xs text-gray-400 -mt-2">
        Amount is calculated from line items — edit those in the panel below.
      </p>
      <div>
        <label className={labelCls}>Due Date</label>
        <input type="date" value={form.dueDate} onChange={(e) => update('dueDate', e.target.value)} className={inputCls} />
      </div>
      <div>
        <label className={labelCls}>Status</label>
        <select
          value={form.status}
          onChange={(e) => update('status', e.target.value)}
          className={`${inputCls} capitalize`}
        >
          {STATUSES.map((s) => <option key={s} value={s} className="capitalize">{s}</option>)}
        </select>
      </div>
      <div>
        <label className={labelCls}>Internal Notes</label>
        <textarea
          value={form.notes}
          onChange={(e) => update('notes', e.target.value)}
          rows={4}
          className={inputCls}
        />
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
