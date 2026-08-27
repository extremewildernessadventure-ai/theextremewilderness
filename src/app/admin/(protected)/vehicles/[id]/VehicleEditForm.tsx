'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { VEHICLE_MAINTENANCE_STATUSES, type Vehicle } from '@/lib/ops'

const inputCls = 'w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10'
const labelCls = 'block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1.5'

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
    <div className="bg-white border border-gray-200 rounded-xl p-7 space-y-4">
      <h2 className="text-sm font-bold text-brand mb-1">Edit Vehicle</h2>
      <div>
        <label className={labelCls}>Plate Number</label>
        <input value={form.plateNumber} onChange={(e) => update('plateNumber', e.target.value)} className={inputCls} />
      </div>
      <div>
        <label className={labelCls}>Capacity</label>
        <input type="number" min="1" step="1" value={form.capacity} onChange={(e) => update('capacity', e.target.value)} className={`${inputCls} max-w-[140px]`} />
      </div>
      <div>
        <label className={labelCls}>Maintenance Status</label>
        <select value={form.maintenanceStatus} onChange={(e) => update('maintenanceStatus', e.target.value)} className={`${inputCls} capitalize`}>
          {VEHICLE_MAINTENANCE_STATUSES.map((s) => <option key={s} value={s} className="capitalize">{s.replace('_', ' ')}</option>)}
        </select>
      </div>
      <div>
        <label className={labelCls}>Notes</label>
        <textarea value={form.notes} onChange={(e) => update('notes', e.target.value)} rows={3} className={inputCls} />
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={handleSave}
          disabled={saving}
          className="px-5 py-2.5 bg-brand hover:bg-brand-secondary disabled:opacity-50 text-white text-sm font-semibold rounded-lg transition-colors"
        >
          {saving ? 'Saving…' : 'Save Changes'}
        </button>
        {saved && <span className="text-green-600 text-sm">Saved</span>}
      </div>
    </div>
  )
}
