'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { EXPENSE_CATEGORIES, type ExpenseCategory } from '@/lib/finance'
import type { Vehicle } from '@/lib/ops'
import type { Departure } from '@/lib/departures'
import type { StaffMember } from '@/lib/hr'
import { packages } from '@/data/packages'

const inputCls = 'w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10'
const labelCls = 'block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1.5'

const CATEGORY_LABELS: Record<ExpenseCategory, string> = {
  fuel: 'Fuel', vehicle_maintenance: 'Vehicle Maintenance', wages: 'Wages',
  permit: 'Permit', insurance: 'Insurance', other: 'Other',
}

function departureLabel(d: Departure): string {
  const pkg = packages.find((p) => p.slug === d.package_slug)
  return `${pkg?.name ?? d.package_slug} (${d.start_date})`
}

export default function NewExpenseForm({ vehicles, departures, staff }: { vehicles: Vehicle[]; departures: Departure[]; staff: StaffMember[] }) {
  const router = useRouter()
  const [form, setForm] = useState({
    category: 'fuel' as ExpenseCategory,
    vehicleId: '', staffMemberId: '', departureId: '', amount: '', currency: 'USD', exchangeRateToUsd: '1',
    description: '', paidAt: '', paymentMethod: '', reference: '',
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const amount = parseFloat(form.amount)
    if (!Number.isFinite(amount) || amount <= 0) {
      setError('Amount must be a positive number.')
      return
    }
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/admin/expenses', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          amount,
          exchangeRateToUsd: parseFloat(form.exchangeRateToUsd) || 1,
          vehicleId: form.vehicleId ? Number(form.vehicleId) : undefined,
          staffMemberId: form.staffMemberId ? Number(form.staffMemberId) : undefined,
          departureId: form.departureId ? Number(form.departureId) : undefined,
        }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setError(data.error ?? 'Failed to create expense.')
        setLoading(false)
        return
      }
      router.push('/admin/expenses')
      router.refresh()
    } catch {
      setError('Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl">
      <Link href="/admin/expenses" className="text-sm text-gray-500 hover:text-brand mb-4 inline-block">← Back to Expenses</Link>
      <h1 className="text-2xl font-bold text-brand mb-6">New Expense</h1>
      <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-xl p-7 space-y-4">
        <div>
          <label className={labelCls}>Category</label>
          <select value={form.category} onChange={(e) => update('category', e.target.value)} className={inputCls}>
            {EXPENSE_CATEGORIES.map((c) => <option key={c} value={c}>{CATEGORY_LABELS[c]}</option>)}
          </select>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Vehicle (optional)</label>
            <select value={form.vehicleId} onChange={(e) => update('vehicleId', e.target.value)} className={inputCls}>
              <option value="">—</option>
              {vehicles.map((v) => <option key={v.id} value={v.id}>{v.plate_number}</option>)}
            </select>
          </div>
          <div>
            <label className={labelCls}>Departure (optional)</label>
            <select value={form.departureId} onChange={(e) => update('departureId', e.target.value)} className={inputCls}>
              <option value="">—</option>
              {departures.map((d) => <option key={d.id} value={d.id}>{departureLabel(d)}</option>)}
            </select>
          </div>
        </div>
        {form.category === 'wages' && (
          <div>
            <label className={labelCls}>Staff Member</label>
            <select value={form.staffMemberId} onChange={(e) => update('staffMemberId', e.target.value)} className={inputCls}>
              <option value="">—</option>
              {staff.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
            </select>
          </div>
        )}
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className={labelCls}>Amount *</label>
            <input type="number" min="0" step="0.01" required value={form.amount} onChange={(e) => update('amount', e.target.value)} className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Currency</label>
            <input value={form.currency} onChange={(e) => update('currency', e.target.value)} className={inputCls} />
          </div>
          {form.currency !== 'USD' && (
            <div>
              <label className={labelCls}>Rate to USD</label>
              <input type="number" min="0" step="0.0001" value={form.exchangeRateToUsd} onChange={(e) => update('exchangeRateToUsd', e.target.value)} className={inputCls} />
            </div>
          )}
        </div>
        <div>
          <label className={labelCls}>Description</label>
          <input value={form.description} onChange={(e) => update('description', e.target.value)} className={inputCls} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Paid On</label>
            <input type="date" value={form.paidAt} onChange={(e) => update('paidAt', e.target.value)} className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Payment Method</label>
            <input value={form.paymentMethod} onChange={(e) => update('paymentMethod', e.target.value)} className={inputCls} />
          </div>
        </div>
        <div>
          <label className={labelCls}>Reference</label>
          <input value={form.reference} onChange={(e) => update('reference', e.target.value)} className={inputCls} />
        </div>
        {error && <p role="alert" className="text-red-500 text-xs">{error}</p>}
        <button type="submit" disabled={loading} className="w-full py-2.5 bg-brand hover:bg-brand-secondary disabled:opacity-50 text-white font-semibold rounded-lg transition-colors text-sm">
          {loading ? 'Creating…' : 'Create Expense'}
        </button>
      </form>
    </div>
  )
}
