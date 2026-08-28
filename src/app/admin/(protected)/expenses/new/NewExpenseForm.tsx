'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { EXPENSE_CATEGORIES, type ExpenseCategory } from '@/lib/finance'
import type { Vehicle } from '@/lib/ops'
import type { Departure } from '@/lib/departures'
import type { StaffMember } from '@/lib/hr'
import { packages } from '@/data/packages'
import SelectWithCustom, { CUSTOM_OPTION_VALUE } from '@/components/admin/SelectWithCustom'

const inputCls = 'field-input'
const labelCls = 'field-label'

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
    vehicleId: '', vehicleNotesOther: '',
    staffMemberId: '', staffMemberOther: '',
    departureId: '', departureNotesOther: '',
    amount: '', currency: 'USD', exchangeRateToUsd: '1',
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
      const isCustomVehicle = form.vehicleId === CUSTOM_OPTION_VALUE
      const isCustomStaff = form.staffMemberId === CUSTOM_OPTION_VALUE
      const isCustomDeparture = form.departureId === CUSTOM_OPTION_VALUE
      const res = await fetch('/api/admin/expenses', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          amount,
          exchangeRateToUsd: parseFloat(form.exchangeRateToUsd) || 1,
          vehicleId: isCustomVehicle || !form.vehicleId ? undefined : Number(form.vehicleId),
          vehicleNotesOther: isCustomVehicle ? form.vehicleNotesOther.trim() : undefined,
          staffMemberId: isCustomStaff || !form.staffMemberId ? undefined : Number(form.staffMemberId),
          staffMemberOther: isCustomStaff ? form.staffMemberOther.trim() : undefined,
          departureId: isCustomDeparture || !form.departureId ? undefined : Number(form.departureId),
          departureNotesOther: isCustomDeparture ? form.departureNotesOther.trim() : undefined,
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
      <Link href="/admin/expenses" className="detail-back">← Back to Expenses</Link>
      <h1 className="mb-6">New Expense</h1>
      <form onSubmit={handleSubmit} className="panel space-y-4">
        <div>
          <label className={labelCls}>Category</label>
          <select value={form.category} onChange={(e) => update('category', e.target.value)} className={inputCls}>
            {EXPENSE_CATEGORIES.map((c) => <option key={c} value={c}>{CATEGORY_LABELS[c]}</option>)}
          </select>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Vehicle (optional)</label>
            <SelectWithCustom
              options={vehicles}
              getOptionValue={(v) => String(v.id)}
              getOptionLabel={(v) => v.plate_number}
              value={form.vehicleId}
              onChange={(v) => update('vehicleId', v)}
              customValue={form.vehicleNotesOther}
              onCustomChange={(v) => update('vehicleNotesOther', v)}
              placeholder="—"
              customPlaceholder="Enter vehicle details…"
            />
          </div>
          <div>
            <label className={labelCls}>Departure (optional)</label>
            <SelectWithCustom
              options={departures}
              getOptionValue={(d) => String(d.id)}
              getOptionLabel={(d) => departureLabel(d)}
              value={form.departureId}
              onChange={(v) => update('departureId', v)}
              customValue={form.departureNotesOther}
              onCustomChange={(v) => update('departureNotesOther', v)}
              placeholder="—"
              customPlaceholder="Enter departure details…"
            />
          </div>
        </div>
        {form.category === 'wages' && (
          <div>
            <label className={labelCls}>Staff Member</label>
            <SelectWithCustom
              options={staff}
              getOptionValue={(s) => String(s.id)}
              getOptionLabel={(s) => s.name}
              value={form.staffMemberId}
              onChange={(v) => update('staffMemberId', v)}
              customValue={form.staffMemberOther}
              onCustomChange={(v) => update('staffMemberOther', v)}
              placeholder="—"
              customPlaceholder="Enter staff member name…"
            />
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
        <button type="submit" disabled={loading} className="btn-primary" style={{ width: '100%', justifyContent: 'center', opacity: loading ? 0.5 : 1 }}>
          {loading ? 'Creating…' : 'Create Expense'}
        </button>
      </form>
    </div>
  )
}
