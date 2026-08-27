'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import type { Guide } from '@/lib/ops'

const inputCls = 'w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10'
const labelCls = 'block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1.5'

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
    <div className="bg-white border border-gray-200 rounded-xl p-7 space-y-4">
      <h2 className="text-sm font-bold text-brand mb-1">Edit Guide</h2>
      <div>
        <label className={labelCls}>Name</label>
        <input value={form.name} onChange={(e) => update('name', e.target.value)} className={inputCls} />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>Phone</label>
          <input value={form.phone} onChange={(e) => update('phone', e.target.value)} className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Email</label>
          <input type="email" value={form.email} onChange={(e) => update('email', e.target.value)} className={inputCls} />
        </div>
      </div>
      <div>
        <label className={labelCls}>Languages</label>
        <input value={form.languages} onChange={(e) => update('languages', e.target.value)} className={inputCls} />
      </div>
      <div>
        <label className={labelCls}>Specialty</label>
        <input value={form.specialty} onChange={(e) => update('specialty', e.target.value)} className={inputCls} />
      </div>
      <div>
        <label className={labelCls}>Notes</label>
        <textarea value={form.notes} onChange={(e) => update('notes', e.target.value)} rows={3} className={inputCls} />
      </div>
      <label className="flex items-center gap-2 text-sm text-gray-700">
        <input type="checkbox" checked={form.active} onChange={(e) => update('active', e.target.checked)} className="rounded border-gray-300 text-brand focus:ring-brand/20" />
        Active
      </label>
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
