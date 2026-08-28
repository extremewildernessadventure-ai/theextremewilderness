'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { PAY_TYPES, type PayType } from '@/lib/hr'
import type { Guide } from '@/lib/ops'
import SelectWithCustom, { CUSTOM_OPTION_VALUE } from '@/components/admin/SelectWithCustom'

const inputCls = 'field-input'
const labelCls = 'field-label'

const PAY_TYPE_LABELS: Record<PayType, string> = { salary: 'Salary', daily_rate: 'Daily Rate', per_trip: 'Per Trip' }

export default function NewStaffForm({ guides }: { guides: Guide[] }) {
  const router = useRouter()
  const [form, setForm] = useState({
    name: '', roleTitle: '', guideId: '', guideNameOther: '', payType: 'salary' as PayType, baseRate: '', currency: 'USD',
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
    const isCustomGuide = form.guideId === CUSTOM_OPTION_VALUE
    try {
      const res = await fetch('/api/admin/staff', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          baseRate,
          guideId: isCustomGuide || !form.guideId ? undefined : Number(form.guideId),
          guideNameOther: isCustomGuide ? form.guideNameOther.trim() : undefined,
        }),
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
      <Link href="/admin/staff" className="detail-back">← Back to Staff</Link>
      <h1 className="mb-6">New Staff Member</h1>
      <form onSubmit={handleSubmit} className="panel space-y-4">
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
            <SelectWithCustom
              options={guides}
              getOptionValue={(g) => String(g.id)}
              getOptionLabel={(g) => g.name}
              value={form.guideId}
              onChange={(v) => update('guideId', v)}
              customValue={form.guideNameOther}
              onCustomChange={(v) => update('guideNameOther', v)}
              placeholder="—"
              customPlaceholder="Enter guide name…"
            />
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
        <button type="submit" disabled={loading} className="btn-primary" style={{ width: '100%', justifyContent: 'center', opacity: loading ? 0.5 : 1 }}>
          {loading ? 'Creating…' : 'Create Staff Member'}
        </button>
      </form>
    </div>
  )
}
