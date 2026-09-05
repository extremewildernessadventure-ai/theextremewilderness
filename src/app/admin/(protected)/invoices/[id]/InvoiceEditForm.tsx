'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import type { Invoice } from '@/lib/db'
import type { Departure } from '@/lib/departures'
import { packages } from '@/data/packages'
import { INVOICE_STATUS_PILL_CLASS } from '@/lib/invoices'
import SelectWithCustom, { CUSTOM_OPTION_VALUE } from '@/components/admin/SelectWithCustom'

// unpaid/partial/paid are never set here — they're always derived from
// real payment records (see recalculateInvoiceTotals/deriveStatus in
// src/lib/invoices.ts), driven by the "Record a Payment" form below on
// this page. Cancelled is the one genuinely manual state (deriveStatus
// treats it as sticky), so it's the only status this form can set.
const STATUS_LABELS: Record<Invoice['status'], string> = {
  unpaid: 'Unpaid',
  partial: 'Partially Paid',
  paid: 'Paid',
  cancelled: 'Cancelled',
}

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
    depositPercent: invoice.deposit_percent != null ? String(invoice.deposit_percent) : '',
    balanceDueDate: invoice.balance_due_date ?? '',
    notes: invoice.notes ?? '',
  })
  const [departureNotesOther, setDepartureNotesOther] = useState(invoice.departure_notes_other ?? '')
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [error, setError] = useState('')
  const [togglingCancel, setTogglingCancel] = useState(false)

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }))
    setSaved(false)
  }

  const depositPercentNum = parseInt(form.depositPercent, 10)
  const hasDepositSplit = form.depositPercent.trim() !== '' && Number.isFinite(depositPercentNum) && depositPercentNum > 0

  async function handleSave() {
    setSaving(true)
    setSaved(false)
    setError('')

    if (hasDepositSplit) {
      if (depositPercentNum < 1 || depositPercentNum > 99) {
        setError('Deposit % must be between 1 and 99.')
        setSaving(false)
        return
      }
      if (!form.dueDate || !form.balanceDueDate) {
        setError('Both a deposit due date and a balance due date are required when using a deposit split.')
        setSaving(false)
        return
      }
    }

    const isCustomDeparture = form.departureId === CUSTOM_OPTION_VALUE
    const res = await fetch(`/api/admin/invoices/${invoice.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...form,
        departureId: isCustomDeparture || !form.departureId ? null : Number(form.departureId),
        departureNotesOther: isCustomDeparture ? departureNotesOther.trim() : null,
        depositPercent: hasDepositSplit ? depositPercentNum : null,
        balanceDueDate: hasDepositSplit ? form.balanceDueDate : null,
      }),
    })
    setSaving(false)
    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      setError(data.error ?? 'Failed to save changes.')
      return
    }
    setSaved(true)
    router.refresh()
  }

  // Reinstating always resets to a fresh 'unpaid' — if real payments were
  // somehow already on record against this invoice, the next payment/item
  // edit self-corrects the status via recalculateInvoiceTotals, same as
  // everywhere else it's derived. Balance Due in the panel below is always
  // computed from the real numbers regardless of this label.
  async function handleToggleCancel() {
    const nextStatus = invoice.status === 'cancelled' ? 'unpaid' : 'cancelled'
    if (nextStatus === 'cancelled' && !confirm('Cancel this invoice?')) return
    setTogglingCancel(true)
    await fetch(`/api/admin/invoices/${invoice.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: nextStatus }),
    })
    setTogglingCancel(false)
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
        <label className="field-label">{hasDepositSplit ? 'Deposit Due Date' : 'Due Date'}</label>
        <input type="date" value={form.dueDate} onChange={(e) => update('dueDate', e.target.value)} className="field-input" />
      </div>
      <div>
        <label className="field-label">Deposit % (optional)</label>
        <p className="text-[11px] text-gray-400 mb-1.5 -mt-0.5">Leave blank for a single-total invoice, as before.</p>
        <input
          type="number" min="1" max="99" step="1" value={form.depositPercent}
          onChange={(e) => update('depositPercent', e.target.value)}
          className="field-input" style={{ maxWidth: 100 }} placeholder="e.g. 30"
        />
      </div>
      {hasDepositSplit && (
        <div>
          <label className="field-label">Balance Due Date</label>
          <input type="date" value={form.balanceDueDate} onChange={(e) => update('balanceDueDate', e.target.value)} className="field-input" />
        </div>
      )}
      <div>
        <label className="field-label">Status</label>
        <div className="flex items-center gap-3">
          <span className={`pill ${INVOICE_STATUS_PILL_CLASS[invoice.status]}`}><i />{STATUS_LABELS[invoice.status]}</span>
          <button
            type="button"
            onClick={handleToggleCancel}
            disabled={togglingCancel}
            className="text-xs font-semibold text-red-500 hover:underline disabled:opacity-50"
          >
            {togglingCancel ? 'Working…' : invoice.status === 'cancelled' ? 'Reinstate' : 'Cancel Invoice'}
          </button>
        </div>
        <p className="text-xs text-gray-400 mt-1">Unpaid/Partial/Paid are set automatically from recorded payments — see Payments below.</p>
      </div>
      <div>
        <label className="field-label">Internal Notes</label>
        <textarea value={form.notes} onChange={(e) => update('notes', e.target.value)} rows={4} className="field-input" />
      </div>
      {error && <p role="alert" className="text-red-500 text-xs">{error}</p>}
      <div className="flex items-center gap-3">
        <button type="button" onClick={handleSave} disabled={saving} className="btn-primary" style={{ opacity: saving ? 0.5 : 1 }}>
          {saving ? 'Saving…' : 'Save Changes'}
        </button>
        {saved && <span className="text-green-600 text-sm">Saved</span>}
      </div>
    </div>
  )
}
