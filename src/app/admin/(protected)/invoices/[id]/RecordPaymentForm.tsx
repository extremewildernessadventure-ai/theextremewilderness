'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const inputCls = 'field-input'
const labelCls = 'field-label'

export default function RecordPaymentForm({ invoiceId }: { invoiceId: number }) {
  const router = useRouter()
  const [amount, setAmount] = useState('')
  const [method, setMethod] = useState<'bank_transfer' | 'other'>('bank_transfer')
  const [reference, setReference] = useState('')
  const [notes, setNotes] = useState('')
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const parsed = parseFloat(amount)
    if (!Number.isFinite(parsed) || parsed === 0) {
      setError('Enter a non-zero amount.')
      return
    }
    setSaving(true)
    setError('')
    const res = await fetch(`/api/admin/invoices/${invoiceId}/payments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: parsed, method, reference: reference || undefined, notes: notes || undefined }),
    })
    setSaving(false)
    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      setError(data.error ?? 'Failed to record payment.')
      return
    }
    setAmount('')
    setReference('')
    setNotes('')
    router.refresh()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2.5 border-t border-gray-100 pt-4 mt-4">
      <h3 className="text-xs font-bold uppercase tracking-wide text-gray-500">Record a Payment</h3>
      <div className="grid grid-cols-2 gap-2.5">
        <div>
          <label className={labelCls}>Amount</label>
          <input type="number" step="0.01" value={amount} onChange={(e) => setAmount(e.target.value)} className={inputCls} placeholder="e.g. 500" />
        </div>
        <div>
          <label className={labelCls}>Method</label>
          <select value={method} onChange={(e) => setMethod(e.target.value as typeof method)} className={inputCls}>
            <option value="bank_transfer">Bank Transfer</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      <div>
        <label className={labelCls}>Reference (optional)</label>
        <input value={reference} onChange={(e) => setReference(e.target.value)} className={inputCls} placeholder="e.g. bank tx ref" />
      </div>
      <div>
        <label className={labelCls}>Notes (optional)</label>
        <input value={notes} onChange={(e) => setNotes(e.target.value)} className={inputCls} />
      </div>
      {error && <p role="alert" className="text-red-500 text-xs">{error}</p>}
      <button type="submit" disabled={saving} className="btn-primary" style={{ padding: '8px 16px', fontSize: 12, opacity: saving ? 0.5 : 1 }}>
        {saving ? 'Recording…' : 'Record Payment'}
      </button>
    </form>
  )
}
