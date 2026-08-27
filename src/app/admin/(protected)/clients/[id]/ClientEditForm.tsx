'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import type { Client } from '@/lib/clients'

const inputCls = 'field-input'
const labelCls = 'field-label'

export default function ClientEditForm({ client }: { client: Client }) {
  const router = useRouter()
  const [form, setForm] = useState({
    name: client.name, email: client.email ?? '', phone: client.phone ?? '', notes: client.notes ?? '',
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
    await fetch(`/api/admin/clients/${client.id}`, {
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
      <h2 className="mb-1">Edit Client</h2>
      <div>
        <label className={labelCls}>Name</label>
        <input value={form.name} onChange={(e) => update('name', e.target.value)} className={inputCls} />
      </div>
      <div>
        <label className={labelCls}>Email</label>
        <input type="email" value={form.email} onChange={(e) => update('email', e.target.value)} className={inputCls} />
      </div>
      <div>
        <label className={labelCls}>Phone</label>
        <input value={form.phone} onChange={(e) => update('phone', e.target.value)} className={inputCls} />
      </div>
      <div>
        <label className={labelCls}>Notes</label>
        <textarea value={form.notes} onChange={(e) => update('notes', e.target.value)} rows={4} className={inputCls} />
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
