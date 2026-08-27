'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import type { LodgeBooking } from '@/lib/bookings'
import type { OpsLodge } from '@/lib/ops'
import InlineStatusSelect from '@/components/admin/InlineStatusSelect'

const inputCls = 'w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10'
const labelCls = 'block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1'

const STATUS_STYLES = {
  pending: 'bg-amber-100 text-amber-700',
  confirmed: 'bg-green-100 text-green-700',
  cancelled: 'bg-red-100 text-red-700',
} as const

export default function LodgeBookingPanel({ bookingId, lodgeBookings, lodges }: {
  bookingId: number
  lodgeBookings: LodgeBooking[]
  lodges: OpsLodge[]
}) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({ lodgeId: '', checkIn: '', checkOut: '', confirmationRef: '' })
  const [saving, setSaving] = useState(false)

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  function lodgeName(lodgeId: number): string {
    return lodges.find((l) => l.id === lodgeId)?.name ?? `Lodge #${lodgeId}`
  }

  async function handleAdd() {
    if (!form.lodgeId) return
    setSaving(true)
    const res = await fetch(`/api/admin/bookings/${bookingId}/lodge`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, lodgeId: Number(form.lodgeId) }),
    })
    setSaving(false)
    if (res.ok) {
      setForm({ lodgeId: '', checkIn: '', checkOut: '', confirmationRef: '' })
      setOpen(false)
      router.refresh()
    }
  }

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-7">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-bold text-brand">Lodge Stays</h2>
        <button type="button" onClick={() => setOpen((v) => !v)} className="text-xs font-semibold text-brand hover:underline">
          {open ? 'Cancel' : '+ Add Lodge Stay'}
        </button>
      </div>

      {lodgeBookings.length > 0 ? (
        <ul className="space-y-3">
          {lodgeBookings.map((lb) => (
            <li key={lb.id} className="flex items-center justify-between text-sm border-b border-gray-100 last:border-0 pb-3 last:pb-0">
              <div>
                <span className="font-semibold text-gray-700">{lodgeName(lb.lodge_id)}</span>
                {(lb.check_in || lb.check_out) && (
                  <span className="text-xs text-gray-400 ms-2">{lb.check_in ?? '…'} → {lb.check_out ?? '…'}</span>
                )}
                {lb.confirmation_ref && <p className="text-xs text-gray-500 mt-0.5">Ref: {lb.confirmation_ref}</p>}
              </div>
              <InlineStatusSelect
                endpoint={`/api/admin/bookings/${bookingId}/lodge/${lb.id}`}
                statuses={['pending', 'confirmed', 'cancelled']}
                statusStyles={STATUS_STYLES}
                currentStatus={lb.status}
                compact
              />
            </li>
          ))}
        </ul>
      ) : (
        !open && <p className="text-sm text-gray-400">No lodge stays recorded.</p>
      )}

      {open && (
        <div className="mt-4 pt-4 border-t border-gray-100 space-y-3">
          <div>
            <label className={labelCls}>Lodge</label>
            <select value={form.lodgeId} onChange={(e) => update('lodgeId', e.target.value)} className={inputCls}>
              <option value="">— Select a lodge —</option>
              {lodges.map((l) => <option key={l.id} value={l.id}>{l.name}</option>)}
            </select>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={labelCls}>Check In</label>
              <input type="date" value={form.checkIn} onChange={(e) => update('checkIn', e.target.value)} className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>Check Out</label>
              <input type="date" value={form.checkOut} onChange={(e) => update('checkOut', e.target.value)} className={inputCls} />
            </div>
          </div>
          <div>
            <label className={labelCls}>Confirmation Ref</label>
            <input value={form.confirmationRef} onChange={(e) => update('confirmationRef', e.target.value)} className={inputCls} />
          </div>
          <button
            type="button"
            onClick={handleAdd}
            disabled={saving || !form.lodgeId}
            className="px-4 py-2 bg-brand hover:bg-brand-secondary disabled:opacity-50 text-white text-sm font-semibold rounded-lg transition-colors"
          >
            {saving ? 'Adding…' : 'Add Lodge Stay'}
          </button>
        </div>
      )}
    </div>
  )
}
