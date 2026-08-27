'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function DeleteQuoteButton({ quoteId }: { quoteId: number }) {
  const router = useRouter()
  const [deleting, setDeleting] = useState(false)

  async function handleDelete() {
    if (!confirm('Delete this quote? This cannot be undone.')) return
    setDeleting(true)
    await fetch(`/api/admin/quotes/${quoteId}`, { method: 'DELETE' })
    router.push('/admin/quotes')
    router.refresh()
  }

  return (
    <button type="button" onClick={handleDelete} disabled={deleting} className="btn-danger" style={{ opacity: deleting ? 0.5 : 1 }}>
      {deleting ? 'Deleting…' : 'Delete Quote'}
    </button>
  )
}
