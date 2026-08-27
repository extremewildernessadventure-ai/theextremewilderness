'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

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
      <Link href="/admin/guides" className="detail-back">← Back to Guides</Link>
      <h1 className="mb-6">New Guide</h1>
      <form onSubmit={handleSubmit} className="panel space-y-4">
        <div>
          <label className="field-label">Name *</label>
          <input required value={form.name} onChange={(e) => update('name', e.target.value)} className="field-input" />
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
          <input value={form.languages} onChange={(e) => update('languages', e.target.value)} placeholder="e.g. English, Swahili, French" className="field-input" />
        </div>
        <div>
          <label className="field-label">Specialty</label>
          <input value={form.specialty} onChange={(e) => update('specialty', e.target.value)} placeholder="e.g. Birding, photography safaris" className="field-input" />
        </div>
        <div>
          <label className="field-label">Notes</label>
          <textarea value={form.notes} onChange={(e) => update('notes', e.target.value)} rows={3} className="field-input" />
        </div>
        {error && <p role="alert" className="text-red-500 text-xs">{error}</p>}
        <button type="submit" disabled={loading} className="btn-primary" style={{ width: '100%', justifyContent: 'center', opacity: loading ? 0.5 : 1 }}>
          {loading ? 'Creating…' : 'Create Guide'}
        </button>
      </form>
    </div>
  )
}
