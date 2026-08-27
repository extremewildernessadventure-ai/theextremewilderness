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
    <button type="button" onClick={handleDelete} disabled={deleting} className="btn-danger" style={{ opacity: deleting ? 0.5 : 1 }}>
      {deleting ? 'Deleting…' : 'Delete Invoice'}
    </button>
  )
}
