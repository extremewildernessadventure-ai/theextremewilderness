'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import type { Guide } from '@/lib/ops'

export default function GuideEditForm({ guide }: { guide: Guide }) {
  const router = useRouter()
  const [form, setForm] = useState({
    name: guide.name,
    phone: guide.phone ?? '',
    email: guide.email ?? '',
    languages: guide.languages ?? '',
    specialty: guide.specialty ?? '',
    active: guide.active === 1,
    notes: guide.notes ?? '',
  })
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  function update<K extends keyof typeof form>(key: K, value: typeof form[K]) {
    setForm((f) => ({ ...f, [key]: value }))
    setSaved(false)
  }

  async function handleSave() {
    setSaving(true)
    setSaved(false)
    await fetch(`/api/admin/guides/${guide.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    setSaving(false)
    setSaved(true)
    router.refresh()
  }

  return (
    <div className="panel space-y-4">
      <h2 className="mb-1">Edit Guide</h2>
      <div>
        <label className="field-label">Name</label>
        <input value={form.name} onChange={(e) => update('name', e.target.value)} className="field-input" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="field-label">Phone</label>
          <input value={form.phone} onChange={(e) => update('phone', e.target.value)} className="field-input" />
        </div>
        <div>
          <label className="field-label">Email</label>
          <input type="email" value={form.email} onChange={(e) => update('email', e.target.value)} className="field-input" />
        </div>
      </div>
      <div>
        <label className="field-label">Languages</label>
        <input value={form.languages} onChange={(e) => update('languages', e.target.value)} className="field-input" />
      </div>
      <div>
        <label className="field-label">Specialty</label>
        <input value={form.specialty} onChange={(e) => update('specialty', e.target.value)} className="field-input" />
      </div>
      <div>
        <label className="field-label">Notes</label>
        <textarea value={form.notes} onChange={(e) => update('notes', e.target.value)} rows={3} className="field-input" />
      </div>
      <label className="flex items-center gap-2 text-sm" style={{ color: 'var(--ink)' }}>
        <input type="checkbox" checked={form.active} onChange={(e) => update('active', e.target.checked)} className="rounded border-gray-300 text-brand focus:ring-brand/20" />
        Active
      </label>
      <div className="flex items-center gap-3">
        <button type="button" onClick={handleSave} disabled={saving} className="btn-primary" style={{ opacity: saving ? 0.5 : 1 }}>
          {saving ? 'Saving…' : 'Save Changes'}
        </button>
        {saved && <span className="text-green-600 text-sm">Saved</span>}
      </div>
    </div>
  )
}
