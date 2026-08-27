'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import type { OpsLodge } from '@/lib/ops'

export default function LodgeEditForm({ lodge }: { lodge: OpsLodge }) {
  const router = useRouter()
  const [form, setForm] = useState({
    name: lodge.name,
    location: lodge.location ?? '',
    contactInfo: lodge.contact_info ?? '',
    rateNotes: lodge.rate_notes ?? '',
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
    await fetch(`/api/admin/lodges/${lodge.id}`, {
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
      <h2 className="mb-1">Edit Lodge</h2>
      <div>
        <label className="field-label">Name</label>
        <input value={form.name} onChange={(e) => update('name', e.target.value)} className="field-input" />
      </div>
      <div>
        <label className="field-label">Location</label>
        <input value={form.location} onChange={(e) => update('location', e.target.value)} className="field-input" />
      </div>
      <div>
        <label className="field-label">Contact Info</label>
        <input value={form.contactInfo} onChange={(e) => update('contactInfo', e.target.value)} className="field-input" />
      </div>
      <div>
        <label className="field-label">Rate Notes</label>
        <textarea value={form.rateNotes} onChange={(e) => update('rateNotes', e.target.value)} rows={3} className="field-input" />
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
