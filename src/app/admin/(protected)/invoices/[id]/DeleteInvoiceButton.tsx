'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function DeleteInvoiceButton({ invoiceId, invoiceNumber }: { invoiceId: number; invoiceNumber: string }) {
  const router = useRouter()
  const [deleting, setDeleting] = useState(false)

  async function handleDelete() {
    if (!confirm(`Delete invoice ${invoiceNumber}? This cannot be undone.`)) return
    setDeleting(true)
    await fetch(`/api/admin/invoices/${invoiceId}`, { method: 'DELETE' })
    router.push('/admin/invoices')
    router.refresh()
  }

  return (
    <button
      type="button"
      onClick={handleDelete}
      disabled={deleting}
      className="px-5 py-2.5 border border-red-200 text-red-600 hover:bg-red-50 disabled:opacity-50 text-sm font-semibold rounded-lg transition-colors"
    >
      {deleting ? 'Deleting…' : 'Delete Invoice'}
    </button>
  )
}
