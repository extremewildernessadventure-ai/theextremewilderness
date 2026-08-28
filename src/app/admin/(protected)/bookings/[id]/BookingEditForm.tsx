'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { BOOKING_STATUSES, type Booking } from '@/lib/bookings'

const inputCls = 'field-input'
const labelCls = 'field-label'

export default function BookingEditForm({ booking }: { booking: Booking }) {
  const router = useRouter()
  const [form, setForm] = useState({
    clientName: booking.client_name,
    clientEmail: booking.client_email ?? '',
    clientPhone: booking.client_phone ?? '',
    guestsCount: String(booking.guests_count),
    status: booking.status,
    cancellationReason: booking.cancellation_reason ?? '',
    specialRequests: booking.special_requests ?? '',
    customDescription: booking.custom_description ?? '',
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
    await fetch(`/api/admin/bookings/${booking.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, guestsCount: parseInt(form.guestsCount, 10) }),
    })
    setSaving(false)
    setSaved(true)
    router.refresh()
  }

  return (
    <div className="panel space-y-4">
      <h2 className="mb-1">Edit Booking</h2>
      {booking.booking_type === 'custom' && (
        <div>
          <label className={labelCls}>What&apos;s Booked</label>
          <textarea
            value={form.customDescription}
            onChange={(e) => update('customDescription', e.target.value)}
            rows={2}
            className={inputCls}
          />
        </div>
      )}
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
          <label className={labelCls}>Client Phone</label>
          <input value={form.clientPhone} onChange={(e) => update('clientPhone', e.target.value)} className={inputCls} />
        </div>
      </div>
      <div>
        <label className={labelCls}>Guests</label>
        <input type="number" min="1" step="1" value={form.guestsCount} onChange={(e) => update('guestsCount', e.target.value)} className={`${inputCls} max-w-[140px]`} />
      </div>
      <div>
        <label className={labelCls}>Status</label>
        <select value={form.status} onChange={(e) => update('status', e.target.value)} className={`${inputCls} capitalize`}>
          {BOOKING_STATUSES.map((s) => <option key={s} value={s} className="capitalize">{s}</option>)}
        </select>
      </div>
      {form.status === 'cancelled' && (
        <div>
          <label className={labelCls}>Cancellation Reason</label>
          <textarea value={form.cancellationReason} onChange={(e) => update('cancellationReason', e.target.value)} rows={2} className={inputCls} />
        </div>
      )}
      <div>
        <label className={labelCls}>Special Requests / Notes</label>
        <textarea
          value={form.specialRequests}
          onChange={(e) => update('specialRequests', e.target.value)}
          rows={3}
          className={inputCls}
          placeholder="Anything unique about this booking that doesn't fit the fields above — printed on the voucher if present."
        />
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
