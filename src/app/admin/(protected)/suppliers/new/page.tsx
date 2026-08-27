'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { SUPPLIER_TYPES } from '@/lib/ops'

const inputCls = 'w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10'
const labelCls = 'block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1.5'

const TYPE_LABELS: Record<string, string> = {
  lodge: 'Lodge', vehicle_vendor: 'Vehicle Vendor', activity_operator: 'Activity Operator', other: 'Other',
}

export default function NewSupplierPage() {
  const router = useRouter()
  const [form, setForm] = useState({ name: '', type: 'lodge', contactInfo: '', notes: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/admin/suppliers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setError(data.error ?? 'Failed to create supplier.')
        setLoading(false)
        return
      }
      router.push('/admin/suppliers')
      router.refresh()
    } catch {
      setError('Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl">
      <Link href="/admin/suppliers" className="text-sm text-gray-500 hover:text-brand mb-4 inline-block">← Back to Suppliers</Link>
      <h1 className="text-2xl font-bold text-brand mb-6">New Supplier</h1>
      <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-xl p-7 space-y-4">
        <div>
          <label className={labelCls}>Name *</label>
          <input required value={form.name} onChange={(e) => update('name', e.target.value)} className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Type</label>
          <select value={form.type} onChange={(e) => update('type', e.target.value)} className={inputCls}>
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
        {error && <p role="alert" className="text-red-500 text-xs">{error}</p>}
        <button type="submit" disabled={loading} className="w-full py-2.5 bg-brand hover:bg-brand-secondary disabled:opacity-50 text-white font-semibold rounded-lg transition-colors text-sm">
          {loading ? 'Creating…' : 'Create Supplier'}
        </button>
      </form>
    </div>
  )
}
