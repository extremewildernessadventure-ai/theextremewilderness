'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { SUPPLIER_TYPES, type Supplier } from '@/lib/ops'

const inputCls = 'w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10'
const labelCls = 'block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1.5'

const TYPE_LABELS: Record<Supplier['type'], string> = {
  lodge: 'Lodge', vehicle_vendor: 'Vehicle Vendor', activity_operator: 'Activity Operator', other: 'Other',
}

export default function SupplierEditForm({ supplier }: { supplier: Supplier }) {
  const router = useRouter()
  const [form, setForm] = useState({
    name: supplier.name,
    type: supplier.type,
    contactInfo: supplier.contact_info ?? '',
    active: supplier.active === 1,
    notes: supplier.notes ?? '',
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
    await fetch(`/api/admin/suppliers/${supplier.id}`, {
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
      <h2 className="text-sm font-bold text-brand mb-1">Edit Supplier</h2>
      <div>
        <label className={labelCls}>Name</label>
        <input value={form.name} onChange={(e) => update('name', e.target.value)} className={inputCls} />
      </div>
      <div>
        <label className={labelCls}>Type</label>
        <select value={form.type} onChange={(e) => update('type', e.target.value as Supplier['type'])} className={inputCls}>
          {SUPPLIER_TYPES.map((t) => <option key={t} value={t}>{TYPE_LABELS[t]}</option>)}
        </select>
      </div>
      <div>
        <label className={labelCls}>Contact Info</label>
        <input value={form.contactInfo} onChange={(e) => update('contactInfo', e.target.value)} className={inputCls} />
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
