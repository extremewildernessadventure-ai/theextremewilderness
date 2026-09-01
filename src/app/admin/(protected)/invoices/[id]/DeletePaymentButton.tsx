'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Trash2 } from 'lucide-react'

export default function DeletePaymentButton({ invoiceId, paymentId }: { invoiceId: number; paymentId: number }) {
  const router = useRouter()
  const [deleting, setDeleting] = useState(false)
  const [error, setError] = useState('')

  async function handleDelete() {
    if (!confirm('Delete this payment? This cannot be undone.')) return
    setDeleting(true)
    setError('')
    const res = await fetch(`/api/admin/invoices/${invoiceId}/payments/${paymentId}`, { method: 'DELETE' })
    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      setError(data.error ?? 'Failed to delete payment.')
      setDeleting(false)
      return
    }
    router.refresh()
  }

  return (
    <span className="inline-flex items-center">
      <button
        type="button"
        onClick={handleDelete}
        disabled={deleting}
        className="p-1 text-gray-400 hover:text-red-500 disabled:opacity-30 disabled:hover:text-gray-400"
        aria-label="Delete payment"
        title="Delete payment"
      >
        <Trash2 className="w-3.5 h-3.5" />
      </button>
      {error && <span role="alert" className="text-red-500 text-xs ml-1.5">{error}</span>}
    </span>
  )
}
