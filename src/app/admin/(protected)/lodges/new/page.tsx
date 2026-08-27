'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const inputCls = 'w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10'
const labelCls = 'block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1.5'

export default function NewLodgePage() {
  const router = useRouter()
  const [form, setForm] = useState({ name: '', location: '', contactInfo: '', rateNotes: '' })
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
      const res = await fetch('/api/admin/lodges', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setError(data.error ?? 'Failed to create lodge.')
        setLoading(false)
        return
      }
      router.push('/admin/lodges')
      router.refresh()
    } catch {
      setError('Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl">
      <Link href="/admin/lodges" className="text-sm text-gray-500 hover:text-brand mb-4 inline-block">← Back to Lodges</Link>
      <h1 className="text-2xl font-bold text-brand mb-6">New Lodge</h1>
      <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-xl p-7 space-y-4">
        <div>
          <label className={labelCls}>Name *</label>
          <input required value={form.name} onChange={(e) => update('name', e.target.value)} className={inputCls} />
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
        {error && <p role="alert" className="text-red-500 text-xs">{error}</p>}
        <button type="submit" disabled={loading} className="w-full py-2.5 bg-brand hover:bg-brand-secondary disabled:opacity-50 text-white font-semibold rounded-lg transition-colors text-sm">
          {loading ? 'Creating…' : 'Create Lodge'}
        </button>
      </form>
    </div>
  )
}
