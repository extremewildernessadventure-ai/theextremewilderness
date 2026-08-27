'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const inputCls = 'field-input'
const labelCls = 'field-label'

export default function NewPayrollPeriodPage() {
  const router = useRouter()
  const [form, setForm] = useState({ periodStart: '', periodEnd: '' })
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
      const res = await fetch('/api/admin/payroll', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setError(data.error ?? 'Failed to create payroll period.')
        setLoading(false)
        return
      }
      const data = await res.json() as { id: number }
      router.push(`/admin/payroll/${data.id}`)
      router.refresh()
    } catch {
      setError('Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl">
      <Link href="/admin/payroll" className="detail-back">← Back to Payroll</Link>
      <h1 className="mb-6">New Payroll Period</h1>
      <form onSubmit={handleSubmit} className="panel space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Period Start *</label>
            <input type="date" required value={form.periodStart} onChange={(e) => update('periodStart', e.target.value)} className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Period End *</label>
            <input type="date" required value={form.periodEnd} onChange={(e) => update('periodEnd', e.target.value)} className={inputCls} />
          </div>
        </div>
        {error && <p role="alert" className="text-red-500 text-xs">{error}</p>}
        <button type="submit" disabled={loading} className="btn-primary" style={{ width: '100%', justifyContent: 'center', opacity: loading ? 0.5 : 1 }}>
          {loading ? 'Creating…' : 'Create Period'}
        </button>
      </form>
    </div>
  )
}
