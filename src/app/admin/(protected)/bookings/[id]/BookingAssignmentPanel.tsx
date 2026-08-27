'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import type { Guide, Vehicle } from '@/lib/ops'

const inputCls = 'w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10'
const labelCls = 'block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1.5'

export default function BookingAssignmentPanel({ bookingId, guides, vehicles, currentGuideId, currentVehicleId }: {
  bookingId: number
  guides: Guide[]
  vehicles: Vehicle[]
  currentGuideId: number | null
  currentVehicleId: number | null
}) {
  const router = useRouter()
  const [guideId, setGuideId] = useState(currentGuideId ? String(currentGuideId) : '')
  const [vehicleId, setVehicleId] = useState(currentVehicleId ? String(currentVehicleId) : '')
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  async function handleSave() {
    setSaving(true)
    setSaved(false)
    await fetch(`/api/admin/bookings/${bookingId}/assign`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        guideId: guideId ? Number(guideId) : null,
        vehicleId: vehicleId ? Number(vehicleId) : null,
      }),
    })
    setSaving(false)
    setSaved(true)
    router.refresh()
  }

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-7 space-y-4">
      <h2 className="text-sm font-bold text-brand mb-1">Assignment</h2>
      <div>
        <label className={labelCls}>Guide</label>
        <select value={guideId} onChange={(e) => { setGuideId(e.target.value); setSaved(false) }} className={inputCls}>
          <option value="">— Unassigned —</option>
          {guides.map((g) => <option key={g.id} value={g.id}>{g.name}</option>)}
        </select>
      </div>
      <div>
        <label className={labelCls}>Vehicle</label>
        <select value={vehicleId} onChange={(e) => { setVehicleId(e.target.value); setSaved(false) }} className={inputCls}>
          <option value="">— Unassigned —</option>
          {vehicles.map((v) => <option key={v.id} value={v.id}>{v.plate_number}</option>)}
        </select>
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={handleSave}
          disabled={saving}
          className="px-5 py-2.5 bg-brand hover:bg-brand-secondary disabled:opacity-50 text-white text-sm font-semibold rounded-lg transition-colors"
        >
          {saving ? 'Saving…' : 'Save Assignment'}
        </button>
        {saved && <span className="text-green-600 text-sm">Saved</span>}
      </div>
    </div>
  )
}
