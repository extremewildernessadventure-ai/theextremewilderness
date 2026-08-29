'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import type { CustomBooking } from '@/lib/bookings'
import InlineStatusSelect, { type PillClass } from '@/components/admin/InlineStatusSelect'
import { todayIso } from '@/lib/dates'

const inputCls = 'field-input'
const labelCls = 'field-label'

const PILL_CLASS: Record<'pending' | 'confirmed' | 'cancelled', PillClass> = {
  pending: 'few',
  confirmed: 'open',
  cancelled: 'cancelled',
}

// Sibling to LodgeBookingPanel, for anything booked that isn't accommodation
// — a venue, a pitch, an arena, equipment. Sits directly below Accommodation
// & Facilities on the same booking (same client), so it never needs its own
// client-input fields.
export default function CustomBookingsPanel({ bookingId, customBookings }: {
  bookingId: number
  customBookings: CustomBooking[]
}) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({ description: '', startDate: '', endDate: '', contactInfo: '', notes: '' })
  const [saving, setSaving] = useState(false)

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  const canSubmit = form.description.trim().length > 0

  async function handleAdd() {
    if (!canSubmit) return
    setSaving(true)
    const res = await fetch(`/api/admin/bookings/${bookingId}/custom`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        description: form.description.trim(),
        startDate: form.startDate,
        endDate: form.endDate,
        contactInfo: form.contactInfo,
        notes: form.notes,
      }),
    })
    setSaving(false)
    if (res.ok) {
      setForm({ description: '', startDate: '', endDate: '', contactInfo: '', notes: '' })
      setOpen(false)
      router.refresh()
    }
  }

  return (
    <div className="panel">
      <div className="flex items-center justify-between mb-4">
        <h2>Custom Bookings</h2>
        <button type="button" onClick={() => setOpen((v) => !v)} className="text-xs font-semibold hover:underline" style={{ color: 'var(--pine)' }}>
          {open ? 'Cancel' : '+ Add Entry'}
        </button>
      </div>

      {customBookings.length > 0 ? (
        <ul className="space-y-3">
          {customBookings.map((cb) => (
            <li key={cb.id} className="flex items-center justify-between text-sm border-b border-gray-100 last:border-0 pb-3 last:pb-0">
              <div>
                <span className="font-semibold text-gray-700">{cb.description}</span>
                {(cb.start_date || cb.end_date) && (
                  <span className="text-xs text-gray-400 ms-2">{cb.start_date ?? '…'} → {cb.end_date ?? '…'}</span>
                )}
                {cb.contact_info && <p className="text-xs text-gray-500 mt-0.5">Contact: {cb.contact_info}</p>}
                {cb.notes && <p className="text-xs text-gray-500 mt-0.5">{cb.notes}</p>}
              </div>
              <InlineStatusSelect
                endpoint={`/api/admin/bookings/${bookingId}/custom/${cb.id}`}
                statuses={['pending', 'confirmed', 'cancelled']}
                pillClass={PILL_CLASS}
                currentStatus={cb.status}
                compact
              />
            </li>
          ))}
        </ul>
      ) : (
        !open && <p className="text-sm text-gray-400">No custom bookings recorded — a venue, a pitch, an arena, or anything else that isn&apos;t accommodation.</p>
      )}

      {open && (
        <div className="mt-4 pt-4 border-t border-gray-100 space-y-3">
          <div>
            <label className={labelCls}>What&apos;s Being Booked *</label>
            <textarea
              value={form.description}
              onChange={(e) => update('description', e.target.value)}
              rows={2}
              className={inputCls}
              placeholder="e.g. Football pitch — corporate tournament, or Private arena — cultural performance"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={labelCls}>Start Date</label>
              <input type="date" min={todayIso()} value={form.startDate} onChange={(e) => update('startDate', e.target.value)} className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>End Date</label>
              <input type="date" min={todayIso()} value={form.endDate} onChange={(e) => update('endDate', e.target.value)} className={inputCls} />
            </div>
          </div>
          <div>
            <label className={labelCls}>Provider Contact (phone/email)</label>
            <input
              value={form.contactInfo}
              onChange={(e) => update('contactInfo', e.target.value)}
              className={inputCls}
              placeholder="e.g. +255 22 123 4567 or venue@example.com"
            />
            <p className="text-xs text-gray-400 mt-1">Printed on the voucher so the client can confirm directly with the provider.</p>
          </div>
          <div>
            <label className={labelCls}>Notes</label>
            <textarea value={form.notes} onChange={(e) => update('notes', e.target.value)} rows={2} className={inputCls} />
          </div>
          <button type="button" onClick={handleAdd} disabled={saving || !canSubmit} className="btn-primary" style={{ opacity: saving || !canSubmit ? 0.5 : 1 }}>
            {saving ? 'Adding…' : 'Add Entry'}
          </button>
        </div>
      )}
    </div>
  )
}
