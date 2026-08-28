'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import type { LodgeBooking } from '@/lib/bookings'
import type { OpsLodge } from '@/lib/ops'
import InlineStatusSelect, { type PillClass } from '@/components/admin/InlineStatusSelect'
import SelectWithCustom, { CUSTOM_OPTION_VALUE } from '@/components/admin/SelectWithCustom'

const inputCls = 'field-input'
const labelCls = 'field-label'

const PILL_CLASS: Record<'pending' | 'confirmed' | 'cancelled', PillClass> = {
  pending: 'few',
  confirmed: 'open',
  cancelled: 'cancelled',
}

export default function LodgeBookingPanel({ bookingId, lodgeBookings, lodges }: {
  bookingId: number
  lodgeBookings: LodgeBooking[]
  lodges: OpsLodge[]
}) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({
    lodgeId: '', lodgeNameOther: '', checkIn: '', checkOut: '', confirmationRef: '', roomType: '', inclusions: '',
  })
  const [saving, setSaving] = useState(false)

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  function lodgeName(lb: LodgeBooking): string {
    if (lb.lodge_name_other) return lb.lodge_name_other
    return lodges.find((l) => l.id === lb.lodge_id)?.name ?? `Lodge #${lb.lodge_id}`
  }

  const isCustomLodge = form.lodgeId === CUSTOM_OPTION_VALUE
  const canSubmit = isCustomLodge ? form.lodgeNameOther.trim().length > 0 : form.lodgeId.length > 0

  async function handleAdd() {
    if (!canSubmit) return
    setSaving(true)
    const res = await fetch(`/api/admin/bookings/${bookingId}/lodge`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        lodgeId: isCustomLodge ? null : Number(form.lodgeId),
        lodgeNameOther: isCustomLodge ? form.lodgeNameOther.trim() : null,
        checkIn: form.checkIn,
        checkOut: form.checkOut,
        confirmationRef: form.confirmationRef,
        roomType: form.roomType,
        inclusions: form.inclusions,
      }),
    })
    setSaving(false)
    if (res.ok) {
      setForm({ lodgeId: '', lodgeNameOther: '', checkIn: '', checkOut: '', confirmationRef: '', roomType: '', inclusions: '' })
      setOpen(false)
      router.refresh()
    }
  }

  return (
    <div className="panel">
      <div className="flex items-center justify-between mb-4">
        <h2>Lodge Stays</h2>
        <button type="button" onClick={() => setOpen((v) => !v)} className="text-xs font-semibold hover:underline" style={{ color: 'var(--pine)' }}>
          {open ? 'Cancel' : '+ Add Lodge Stay'}
        </button>
      </div>

      {lodgeBookings.length > 0 ? (
        <ul className="space-y-3">
          {lodgeBookings.map((lb) => (
            <li key={lb.id} className="flex items-center justify-between text-sm border-b border-gray-100 last:border-0 pb-3 last:pb-0">
              <div>
                <span className="font-semibold text-gray-700">{lodgeName(lb)}</span>
                {(lb.check_in || lb.check_out) && (
                  <span className="text-xs text-gray-400 ms-2">{lb.check_in ?? '…'} → {lb.check_out ?? '…'}</span>
                )}
                {lb.room_type && <p className="text-xs text-gray-500 mt-0.5">Room: {lb.room_type}</p>}
                {lb.confirmation_ref && <p className="text-xs text-gray-500 mt-0.5">Ref: {lb.confirmation_ref}</p>}
                {lb.inclusions && <p className="text-xs text-gray-500 mt-0.5">Includes: {lb.inclusions}</p>}
              </div>
              <InlineStatusSelect
                endpoint={`/api/admin/bookings/${bookingId}/lodge/${lb.id}`}
                statuses={['pending', 'confirmed', 'cancelled']}
                pillClass={PILL_CLASS}
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
            <SelectWithCustom
              options={lodges}
              getOptionValue={(l) => String(l.id)}
              getOptionLabel={(l) => l.name}
              value={form.lodgeId}
              onChange={(v) => update('lodgeId', v)}
              customValue={form.lodgeNameOther}
              onCustomChange={(v) => update('lodgeNameOther', v)}
              placeholder="— Select a lodge —"
              customOptionLabel="— Other / unlisted property —"
              customPlaceholder="Enter lodge/hotel name…"
            />
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
            <label className={labelCls}>Room Type</label>
            <input value={form.roomType} onChange={(e) => update('roomType', e.target.value)} className={inputCls} placeholder="e.g. Luxury Tented Suite, King Room" />
          </div>
          <div>
            <label className={labelCls}>Confirmation Ref</label>
            <input value={form.confirmationRef} onChange={(e) => update('confirmationRef', e.target.value)} className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Inclusions</label>
            <textarea value={form.inclusions} onChange={(e) => update('inclusions', e.target.value)} rows={2} className={inputCls} placeholder="e.g. Full board, airport transfer, game drive" />
          </div>
          <button type="button" onClick={handleAdd} disabled={saving || !canSubmit} className="btn-primary" style={{ opacity: saving || !canSubmit ? 0.5 : 1 }}>
            {saving ? 'Adding…' : 'Add Lodge Stay'}
          </button>
        </div>
      )}
    </div>
  )
}
