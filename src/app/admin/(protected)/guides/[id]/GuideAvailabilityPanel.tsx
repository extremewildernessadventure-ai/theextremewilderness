'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { GUIDE_AVAILABILITY_TYPES, type GuideAvailabilityType, type GuideAvailability } from '@/lib/hr'

const TYPE_LABELS: Record<GuideAvailabilityType, string> = { leave: 'Leave', unavailable: 'Unavailable', booked: 'Booked' }
const TYPE_PILL_CLASS: Record<GuideAvailabilityType, string> = { leave: 'few', unavailable: 'cancelled', booked: 'open' }

export default function GuideAvailabilityPanel({ guideId, availability }: { guideId: number; availability: GuideAvailability[] }) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({ startDate: '', endDate: '', type: 'leave' as GuideAvailabilityType, notes: '' })
  const [saving, setSaving] = useState(false)

  function update<K extends keyof typeof form>(key: K, value: typeof form[K]) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  async function handleAdd() {
    if (!form.startDate || !form.endDate) return
    setSaving(true)
    const res = await fetch(`/api/admin/guides/${guideId}/availability`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    setSaving(false)
    if (res.ok) {
      setForm({ startDate: '', endDate: '', type: 'leave', notes: '' })
      setOpen(false)
      router.refresh()
    }
  }

  return (
    <div className="panel">
      <div className="flex items-center justify-between mb-4">
        <h2>Availability</h2>
        <button type="button" onClick={() => setOpen((v) => !v)} className="text-xs font-semibold text-brand hover:underline">
          {open ? 'Cancel' : '+ Add Entry'}
        </button>
      </div>

      {availability.length > 0 ? (
        <ul className="space-y-2">
          {availability.map((a) => (
            <li key={a.id} className="flex items-center justify-between text-sm">
              <span className="text-gray-700">{a.start_date} → {a.end_date}</span>
              <span className={`pill ${TYPE_PILL_CLASS[a.type]}`}><i />{TYPE_LABELS[a.type]}</span>
            </li>
          ))}
        </ul>
      ) : (
        !open && <p className="text-sm text-gray-400">No leave/unavailability recorded.</p>
      )}

      {open && (
        <div className="mt-4 pt-4 border-t border-gray-100 space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="field-label">Start Date</label>
              <input type="date" value={form.startDate} onChange={(e) => update('startDate', e.target.value)} className="field-input" />
            </div>
            <div>
              <label className="field-label">End Date</label>
              <input type="date" value={form.endDate} onChange={(e) => update('endDate', e.target.value)} className="field-input" />
            </div>
          </div>
          <div>
            <label className="field-label">Type</label>
            <select value={form.type} onChange={(e) => update('type', e.target.value as GuideAvailabilityType)} className="field-input">
              {GUIDE_AVAILABILITY_TYPES.map((t) => <option key={t} value={t}>{TYPE_LABELS[t]}</option>)}
            </select>
          </div>
          <div>
            <label className="field-label">Notes</label>
            <input value={form.notes} onChange={(e) => update('notes', e.target.value)} className="field-input" />
          </div>
          <button type="button" onClick={handleAdd} disabled={saving || !form.startDate || !form.endDate} className="btn-primary" style={{ opacity: saving || !form.startDate || !form.endDate ? 0.5 : 1 }}>
            {saving ? 'Adding…' : 'Add Entry'}
          </button>
        </div>
      )}
    </div>
  )
}
