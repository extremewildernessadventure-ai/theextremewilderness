'use client'

import { Suspense, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { packages } from '@/data/packages'

const inputCls = 'w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10'
const labelCls = 'block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1.5'

function NewQuoteForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const leadId = searchParams.get('leadId')

  const [form, setForm] = useState({
    packageSlug: '', price: '', currency: 'USD', validUntil: '', notes: '',
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!leadId) {
      setError('No lead selected — open this page from a lead\'s detail page.')
      return
    }
    const price = parseFloat(form.price)
    if (!Number.isFinite(price) || price < 0) {
      setError('Price must be a non-negative number.')
      return
    }

    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/admin/quotes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          leadId: Number(leadId),
          packageSlug: form.packageSlug || undefined,
          price,
          currency: form.currency,
          validUntil: form.validUntil || undefined,
          notes: form.notes || undefined,
        }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setError(data.error ?? 'Failed to create quote.')
        setLoading(false)
        return
      }
      const data = await res.json() as { id: number }
      router.push(`/admin/quotes/${data.id}`)
      router.refresh()
    } catch {
      setError('Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl">
      <Link
        href={leadId ? `/admin/leads/${leadId}` : '/admin/quotes'}
        className="text-sm text-gray-500 hover:text-brand mb-4 inline-block"
      >
        ← Back
      </Link>
      <h1 className="text-2xl font-bold text-brand mb-6">New Quote</h1>

      {!leadId && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 text-sm text-amber-800">
          No lead selected. Open this page via the &quot;New Quote&quot; action on a lead&apos;s detail page.
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-xl p-7 space-y-4">
        <div>
          <label className={labelCls}>Package (optional)</label>
          <select value={form.packageSlug} onChange={(e) => update('packageSlug', e.target.value)} className={inputCls}>
            <option value="">— No specific package —</option>
            {packages.map((p) => <option key={p.slug} value={p.slug}>{p.name}</option>)}
          </select>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Price *</label>
            <input type="number" min="0" step="0.01" required value={form.price} onChange={(e) => update('price', e.target.value)} className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Currency</label>
            <input value={form.currency} onChange={(e) => update('currency', e.target.value)} className={inputCls} />
          </div>
        </div>
        <div>
          <label className={labelCls}>Valid Until</label>
          <input type="date" value={form.validUntil} onChange={(e) => update('validUntil', e.target.value)} className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Internal Notes</label>
          <textarea value={form.notes} onChange={(e) => update('notes', e.target.value)} rows={3} className={inputCls} />
        </div>
        {error && <p role="alert" className="text-red-500 text-xs">{error}</p>}
        <button
          type="submit"
          disabled={loading || !leadId}
          className="w-full py-2.5 bg-brand hover:bg-brand-secondary disabled:opacity-50 text-white font-semibold rounded-lg transition-colors text-sm"
        >
          {loading ? 'Creating…' : 'Create Quote'}
        </button>
      </form>
    </div>
  )
}

export default function NewQuotePage() {
  return (
    <Suspense fallback={null}>
      <NewQuoteForm />
    </Suspense>
  )
}
