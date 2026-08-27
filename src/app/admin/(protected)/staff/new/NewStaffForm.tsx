'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { PAY_TYPES, type PayType } from '@/lib/hr'
import type { Guide } from '@/lib/ops'

const inputCls = 'w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10'
const labelCls = 'block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1.5'

const PAY_TYPE_LABELS: Record<PayType, string> = { salary: 'Salary', daily_rate: 'Daily Rate', per_trip: 'Per Trip' }

export default function NewStaffForm({ guides }: { guides: Guide[] }) {
  const router = useRouter()
  const [form, setForm] = useState({
    name: '', roleTitle: '', guideId: '', payType: 'salary' as PayType, baseRate: '', currency: 'USD',
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const baseRate = parseFloat(form.baseRate)
    if (!Number.isFinite(baseRate) || baseRate < 0) {
      setError('Base rate must be a non-negative number.')
      return
    }
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/admin/staff', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, baseRate, guideId: form.guideId ? Number(form.guideId) : undefined }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setError(data.error ?? 'Failed to create staff member.')
        setLoading(false)
        return
      }
      router.push('/admin/staff')
      router.refresh()
    } catch {
      setError('Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl">
      <Link href="/admin/staff" className="text-sm text-gray-500 hover:text-brand mb-4 inline-block">← Back to Staff</Link>
      <h1 className="text-2xl font-bold text-brand mb-6">New Staff Member</h1>
      <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-xl p-7 space-y-4">
        <div>
          <label className={labelCls}>Name *</label>
          <input required value={form.name} onChange={(e) => update('name', e.target.value)} className={inputCls} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Role Title</label>
            <input value={form.roleTitle} onChange={(e) => update('roleTitle', e.target.value)} className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Linked Guide (optional)</label>
            <select value={form.guideId} onChange={(e) => update('guideId', e.target.value)} className={inputCls}>
              <option value="">—</option>
              {guides.map((g) => <option key={g.id} value={g.id}>{g.name}</option>)}
            </select>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className={labelCls}>Pay Type</label>
            <select value={form.payType} onChange={(e) => update('payType', e.target.value)} className={inputCls}>
              {PAY_TYPES.map((t) => <option key={t} value={t}>{PAY_TYPE_LABELS[t]}</option>)}
            </select>
          </div>
          <div>
            <label className={labelCls}>Base Rate *</label>
            <input type="number" min="0" step="0.01" required value={form.baseRate} onChange={(e) => update('baseRate', e.target.value)} className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Currency</label>
            <input value={form.currency} onChange={(e) => update('currency', e.target.value)} className={inputCls} />
          </div>
        </div>
        {error && <p role="alert" className="text-red-500 text-xs">{error}</p>}
        <button type="submit" disabled={loading} className="w-full py-2.5 bg-brand hover:bg-brand-secondary disabled:opacity-50 text-white font-semibold rounded-lg transition-colors text-sm">
          {loading ? 'Creating…' : 'Create Staff Member'}
        </button>
      </form>
    </div>
  )
}
