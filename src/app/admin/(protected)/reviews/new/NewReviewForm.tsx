'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import type { Client } from '@/lib/clients'
import type { Booking } from '@/lib/bookings'

const inputCls = 'w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10'
const labelCls = 'block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1.5'

export default function NewReviewForm({ clients, bookings }: { clients: Client[]; bookings: Booking[] }) {
  const router = useRouter()
  const [form, setForm] = useState({
    clientId: '', bookingId: '', rating: '5', quoteText: '', source: '', parkTag: '',
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.quoteText.trim()) {
      setError('The quote text is required — paste it verbatim from the original review.')
      return
    }
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/admin/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          rating: Number(form.rating),
          clientId: form.clientId ? Number(form.clientId) : undefined,
          bookingId: form.bookingId ? Number(form.bookingId) : undefined,
        }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setError(data.error ?? 'Failed to create review.')
        setLoading(false)
        return
      }
      router.push('/admin/reviews')
      router.refresh()
    } catch {
      setError('Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl">
      <Link href="/admin/reviews" className="text-sm text-gray-500 hover:text-brand mb-4 inline-block">← Back to Reviews</Link>
      <h1 className="text-2xl font-bold text-brand mb-2">New Review</h1>
      <p className="text-sm text-gray-500 mb-6">
        Paste the quote verbatim from a verified external review — never invent or paraphrase it.
      </p>
      <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-xl p-7 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Client (optional)</label>
            <select value={form.clientId} onChange={(e) => update('clientId', e.target.value)} className={inputCls}>
              <option value="">—</option>
              {clients.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
            </select>
          </div>
          <div>
            <label className={labelCls}>Booking (optional)</label>
            <select value={form.bookingId} onChange={(e) => update('bookingId', e.target.value)} className={inputCls}>
              <option value="">—</option>
              {bookings.map((b) => <option key={b.id} value={b.id}>{b.client_name}</option>)}
            </select>
          </div>
        </div>
        <div>
          <label className={labelCls}>Rating</label>
          <select value={form.rating} onChange={(e) => update('rating', e.target.value)} className={`${inputCls} max-w-[140px]`}>
            {[5, 4, 3, 2, 1].map((n) => <option key={n} value={n}>{n} star{n !== 1 ? 's' : ''}</option>)}
          </select>
        </div>
        <div>
          <label className={labelCls}>Quote (verbatim) *</label>
          <textarea required value={form.quoteText} onChange={(e) => update('quoteText', e.target.value)} rows={4} className={inputCls} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Source</label>
            <input value={form.source} onChange={(e) => update('source', e.target.value)} placeholder="e.g. TripAdvisor, Google" className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Park Tag</label>
            <input value={form.parkTag} onChange={(e) => update('parkTag', e.target.value)} placeholder="e.g. Serengeti" className={inputCls} />
          </div>
        </div>
        {error && <p role="alert" className="text-red-500 text-xs">{error}</p>}
        <button type="submit" disabled={loading} className="w-full py-2.5 bg-brand hover:bg-brand-secondary disabled:opacity-50 text-white font-semibold rounded-lg transition-colors text-sm">
          {loading ? 'Creating…' : 'Create Review'}
        </button>
      </form>
    </div>
  )
}
