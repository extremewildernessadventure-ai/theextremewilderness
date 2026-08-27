'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import type { OpsLodge } from '@/lib/ops'

const inputCls = 'w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10'
const labelCls = 'block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1.5'

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
    <div className="bg-white border border-gray-200 rounded-xl p-7 space-y-4">
      <h2 className="text-sm font-bold text-brand mb-1">Edit Lodge</h2>
      <div>
        <label className={labelCls}>Name</label>
        <input value={form.name} onChange={(e) => update('name', e.target.value)} className={inputCls} />
      </div>
      <div>
        <label className={labelCls}>Location</label>
        <input value={form.location} onChange={(e) => update('location', e.target.value)} className={inputCls} />
      </div>
      <div>
        <label className={labelCls}>Contact Info</label>
        <input value={form.contactInfo} onChange={(e) => update('contactInfo', e.target.value)} className={inputCls} />
      </div>
      <div>
        <label className={labelCls}>Rate Notes</label>
        <textarea value={form.rateNotes} onChange={(e) => update('rateNotes', e.target.value)} rows={3} className={inputCls} />
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
