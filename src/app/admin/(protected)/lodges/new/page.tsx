'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

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
      <Link href="/admin/lodges" className="detail-back">← Back to Lodges</Link>
      <h1 className="mb-6">New Lodge</h1>
      <form onSubmit={handleSubmit} className="panel space-y-4">
        <div>
          <label className="field-label">Name *</label>
          <input required value={form.name} onChange={(e) => update('name', e.target.value)} className="field-input" />
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
        {error && <p role="alert" className="text-red-500 text-xs">{error}</p>}
        <button type="submit" disabled={loading} className="btn-primary" style={{ width: '100%', justifyContent: 'center', opacity: loading ? 0.5 : 1 }}>
          {loading ? 'Creating…' : 'Create Lodge'}
        </button>
      </form>
    </div>
  )
}
