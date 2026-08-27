'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { VEHICLE_MAINTENANCE_STATUSES, type Vehicle } from '@/lib/ops'

export default function VehicleEditForm({ vehicle }: { vehicle: Vehicle }) {
  const router = useRouter()
  const [form, setForm] = useState({
    plateNumber: vehicle.plate_number,
    capacity: String(vehicle.capacity),
    maintenanceStatus: vehicle.maintenance_status,
    notes: vehicle.notes ?? '',
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
    await fetch(`/api/admin/vehicles/${vehicle.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, capacity: parseInt(form.capacity, 10) }),
    })
    setSaving(false)
    setSaved(true)
    router.refresh()
  }

  return (
    <div className="panel space-y-4">
      <h2 className="mb-1">Edit Vehicle</h2>
      <div>
        <label className="field-label">Plate Number</label>
        <input value={form.plateNumber} onChange={(e) => update('plateNumber', e.target.value)} className="field-input" />
      </div>
      <div>
        <label className="field-label">Capacity</label>
        <input type="number" min="1" step="1" value={form.capacity} onChange={(e) => update('capacity', e.target.value)} className="field-input" style={{ maxWidth: 140 }} />
      </div>
      <div>
        <label className="field-label">Maintenance Status</label>
        <select value={form.maintenanceStatus} onChange={(e) => update('maintenanceStatus', e.target.value)} className="field-input capitalize">
          {VEHICLE_MAINTENANCE_STATUSES.map((s) => <option key={s} value={s} className="capitalize">{s.replace('_', ' ')}</option>)}
        </select>
      </div>
      <div>
        <label className="field-label">Notes</label>
        <textarea value={form.notes} onChange={(e) => update('notes', e.target.value)} rows={3} className="field-input" />
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
