'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import type { Invoice } from '@/lib/db'
import type { Departure } from '@/lib/departures'
import { packages } from '@/data/packages'
import SelectWithCustom, { CUSTOM_OPTION_VALUE } from '@/components/admin/SelectWithCustom'

const STATUSES = ['unpaid', 'partial', 'paid', 'cancelled'] as const

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
    departureId: invoice.departure_id
      ? String(invoice.departure_id)
      : invoice.departure_notes_other ? CUSTOM_OPTION_VALUE : '',
    dueDate: invoice.due_date ?? '',
    status: invoice.status,
    notes: invoice.notes ?? '',
  })
  const [departureNotesOther, setDepartureNotesOther] = useState(invoice.departure_notes_other ?? '')
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }))
    setSaved(false)
  }

  async function handleSave() {
    setSaving(true)
    setSaved(false)
    const isCustomDeparture = form.departureId === CUSTOM_OPTION_VALUE
    await fetch(`/api/admin/invoices/${invoice.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...form,
        departureId: isCustomDeparture || !form.departureId ? null : Number(form.departureId),
        departureNotesOther: isCustomDeparture ? departureNotesOther.trim() : null,
      }),
    })
    setSaving(false)
    setSaved(true)
    router.refresh()
  }

  return (
    <div className="panel space-y-4">
      <h2 className="mb-1">Edit Invoice</h2>
      <div>
        <label className="field-label">Client Name</label>
        <input value={form.clientName} onChange={(e) => update('clientName', e.target.value)} className="field-input" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="field-label">Client Email</label>
          <input type="email" value={form.clientEmail} onChange={(e) => update('clientEmail', e.target.value)} className="field-input" />
        </div>
        <div>
          <label className="field-label">Booking Reference</label>
          <input value={form.bookingReference} onChange={(e) => update('bookingReference', e.target.value)} className="field-input" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="field-label">Currency</label>
          <input value={form.currency} onChange={(e) => update('currency', e.target.value)} className="field-input" />
        </div>
        <div>
          <label className="field-label">Departure</label>
          <SelectWithCustom
            options={departures}
            getOptionValue={(d) => String(d.id)}
            getOptionLabel={departureLabel}
            value={form.departureId}
            onChange={(v) => update('departureId', v)}
            customValue={departureNotesOther}
            onCustomChange={(v) => { setDepartureNotesOther(v); setSaved(false) }}
            placeholder="—"
            customPlaceholder="Enter departure details…"
          />
        </div>
      </div>
      <p className="text-xs text-gray-400 -mt-2">
        Amount is calculated from line items — edit those in the panel below.
      </p>
      <div>
        <label className="field-label">Due Date</label>
        <input type="date" value={form.dueDate} onChange={(e) => update('dueDate', e.target.value)} className="field-input" />
      </div>
      <div>
        <label className="field-label">Status</label>
        <select value={form.status} onChange={(e) => update('status', e.target.value)} className="field-input capitalize">
          {STATUSES.map((s) => <option key={s} value={s} className="capitalize">{s}</option>)}
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
