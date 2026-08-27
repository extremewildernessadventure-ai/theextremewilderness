'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { PAYSLIP_STATUSES, type Payslip } from '@/lib/hr'

const inputCls = 'field-input'
const labelCls = 'field-label'

export default function PayslipEditForm({ payslip }: { payslip: Payslip }) {
  const router = useRouter()
  const [form, setForm] = useState({
    bonuses: String(payslip.bonuses),
    deductions: String(payslip.deductions),
    status: payslip.status,
    paymentReference: payslip.payment_reference ?? '',
    notes: payslip.notes ?? '',
  })
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }))
    setSaved(false)
  }

  async function handleSave() {
    setSaving(true)
    setSaved(false)
    await fetch(`/api/admin/payslips/${payslip.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...form,
        bonuses: parseFloat(form.bonuses) || 0,
        deductions: parseFloat(form.deductions) || 0,
      }),
    })
    setSaving(false)
    setSaved(true)
    router.refresh()
  }

  return (
    <div className="panel space-y-4">
      <h2 className="mb-1">Edit Payslip</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>Bonuses</label>
          <input type="number" min="0" step="0.01" value={form.bonuses} onChange={(e) => update('bonuses', e.target.value)} className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Deductions</label>
          <input type="number" min="0" step="0.01" value={form.deductions} onChange={(e) => update('deductions', e.target.value)} className={inputCls} />
        </div>
      </div>
      <div>
        <label className={labelCls}>Status</label>
        <select value={form.status} onChange={(e) => update('status', e.target.value)} className={`${inputCls} capitalize`}>
          {PAYSLIP_STATUSES.map((s) => <option key={s} value={s} className="capitalize">{s}</option>)}
        </select>
      </div>
      <div>
        <label className={labelCls}>Payment Reference</label>
        <input value={form.paymentReference} onChange={(e) => update('paymentReference', e.target.value)} className={inputCls} />
      </div>
      <div>
        <label className={labelCls}>Notes</label>
        <textarea value={form.notes} onChange={(e) => update('notes', e.target.value)} rows={3} className={inputCls} />
      </div>
      <div className="flex items-center gap-3">
        <button type="button" onClick={handleSave} disabled={saving} className="btn-primary" style={{ opacity: saving ? 0.5 : 1 }}>
          {saving ? 'Saving…' : 'Save Changes'}
        </button>
        {saved && <span className="text-green-600 text-sm">Saved</span>}
      </div>
    </div>
  )
}
