'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import type { Invoice } from '@/lib/db'
import type { Booking } from '@/lib/bookings'
import SelectWithCustom, { CUSTOM_OPTION_VALUE } from '@/components/admin/SelectWithCustom'

const inputCls = 'field-input'
const labelCls = 'field-label'

export default function NewRefundForm({ invoices, bookings }: { invoices: Invoice[]; bookings: Booking[] }) {
  const router = useRouter()
  const [form, setForm] = useState({ invoiceId: '', bookingId: '', amount: '', currency: 'USD', reason: '', notes: '' })
  const [invoiceRefOther, setInvoiceRefOther] = useState('')
  const [bookingRefOther, setBookingRefOther] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const amount = parseFloat(form.amount)
    if (!Number.isFinite(amount) || amount <= 0) {
      setError('Amount must be a positive number.')
      return
    }
    setLoading(true)
    setError('')
    const isCustomInvoice = form.invoiceId === CUSTOM_OPTION_VALUE
    const isCustomBooking = form.bookingId === CUSTOM_OPTION_VALUE
    try {
      const res = await fetch('/api/admin/refunds', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          amount,
          invoiceId: isCustomInvoice || !form.invoiceId ? undefined : Number(form.invoiceId),
          invoiceRefOther: isCustomInvoice ? invoiceRefOther.trim() : undefined,
          bookingId: isCustomBooking || !form.bookingId ? undefined : Number(form.bookingId),
          bookingRefOther: isCustomBooking ? bookingRefOther.trim() : undefined,
        }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setError(data.error ?? 'Failed to create refund.')
        setLoading(false)
        return
      }
      router.push('/admin/refunds')
      router.refresh()
    } catch {
      setError('Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl">
      <Link href="/admin/refunds" className="detail-back">← Back to Refunds</Link>
      <h1 className="mb-6">New Refund</h1>
      <form onSubmit={handleSubmit} className="panel space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Invoice (optional)</label>
            <SelectWithCustom
              options={invoices}
              getOptionValue={(inv) => String(inv.id)}
              getOptionLabel={(inv) => `${inv.invoice_number} — ${inv.client_name}`}
              value={form.invoiceId}
              onChange={(v) => update('invoiceId', v)}
              customValue={invoiceRefOther}
              onCustomChange={setInvoiceRefOther}
              placeholder="—"
              customPlaceholder="Enter invoice reference…"
            />
          </div>
          <div>
            <label className={labelCls}>Booking (optional)</label>
            <SelectWithCustom
              options={bookings}
              getOptionValue={(b) => String(b.id)}
              getOptionLabel={(b) => b.client_name}
              value={form.bookingId}
              onChange={(v) => update('bookingId', v)}
              customValue={bookingRefOther}
              onCustomChange={setBookingRefOther}
              placeholder="—"
              customPlaceholder="Enter booking reference…"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Amount *</label>
            <input type="number" min="0" step="0.01" required value={form.amount} onChange={(e) => update('amount', e.target.value)} className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Currency</label>
            <input value={form.currency} onChange={(e) => update('currency', e.target.value)} className={inputCls} />
          </div>
        </div>
        <div>
          <label className={labelCls}>Reason</label>
          <input value={form.reason} onChange={(e) => update('reason', e.target.value)} className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Notes</label>
          <textarea value={form.notes} onChange={(e) => update('notes', e.target.value)} rows={3} className={inputCls} />
        </div>
        {error && <p role="alert" className="text-red-500 text-xs">{error}</p>}
        <button type="submit" disabled={loading} className="btn-primary" style={{ width: '100%', justifyContent: 'center', opacity: loading ? 0.5 : 1 }}>
          {loading ? 'Creating…' : 'Create Refund'}
        </button>
      </form>
    </div>
  )
}
