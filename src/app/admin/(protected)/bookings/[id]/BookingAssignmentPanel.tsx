'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import type { Guide, Vehicle } from '@/lib/ops'

const inputCls = 'field-input'
const labelCls = 'field-label'

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
    <div className="panel space-y-4">
      <h2 className="mb-1">Assignment</h2>
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
        <button type="button" onClick={handleSave} disabled={saving} className="btn-primary" style={{ opacity: saving ? 0.5 : 1 }}>
          {saving ? 'Saving…' : 'Save Assignment'}
        </button>
        {saved && <span className="text-green-600 text-sm">Saved</span>}
      </div>
    </div>
  )
}
