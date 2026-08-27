'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const inputCls = 'w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10'
const labelCls = 'block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1.5'

export default function NewGuidePage() {
  const router = useRouter()
  const [form, setForm] = useState({ name: '', phone: '', email: '', languages: '', specialty: '', notes: '' })
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
      const res = await fetch('/api/admin/guides', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setError(data.error ?? 'Failed to create guide.')
        setLoading(false)
        return
      }
      router.push('/admin/guides')
      router.refresh()
    } catch {
      setError('Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl">
      <Link href="/admin/guides" className="text-sm text-gray-500 hover:text-brand mb-4 inline-block">← Back to Guides</Link>
      <h1 className="text-2xl font-bold text-brand mb-6">New Guide</h1>
      <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-xl p-7 space-y-4">
        <div>
          <label className={labelCls}>Name *</label>
          <input required value={form.name} onChange={(e) => update('name', e.target.value)} className={inputCls} />
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
          <input value={form.languages} onChange={(e) => update('languages', e.target.value)} placeholder="e.g. English, Swahili, French" className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Specialty</label>
          <input value={form.specialty} onChange={(e) => update('specialty', e.target.value)} placeholder="e.g. Birding, photography safaris" className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Notes</label>
          <textarea value={form.notes} onChange={(e) => update('notes', e.target.value)} rows={3} className={inputCls} />
        </div>
        {error && <p role="alert" className="text-red-500 text-xs">{error}</p>}
        <button type="submit" disabled={loading} className="w-full py-2.5 bg-brand hover:bg-brand-secondary disabled:opacity-50 text-white font-semibold rounded-lg transition-colors text-sm">
          {loading ? 'Creating…' : 'Create Guide'}
        </button>
      </form>
    </div>
  )
}
