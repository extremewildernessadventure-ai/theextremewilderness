'use client'

import { Suspense, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { packages } from '@/data/packages'

const inputCls = 'field-input'
const labelCls = 'field-label'

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
        className="detail-back"
      >
        ← Back
      </Link>
      <h1 className="mb-6">New Quote</h1>

      {!leadId && (
        <div className="panel mb-6 text-sm" style={{ borderLeft: '4px solid var(--gold)' }}>
          No lead selected. Open this page via the &quot;New Quote&quot; action on a lead&apos;s detail page.
        </div>
      )}

      <form onSubmit={handleSubmit} className="panel space-y-4">
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
        <button type="submit" disabled={loading || !leadId} className="btn-primary" style={{ width: '100%', justifyContent: 'center', opacity: loading || !leadId ? 0.5 : 1 }}>
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
