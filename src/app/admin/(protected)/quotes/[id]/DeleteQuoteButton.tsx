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
    <button
      type="button"
      onClick={handleDelete}
      disabled={deleting}
      className="px-5 py-2.5 border border-red-200 text-red-600 hover:bg-red-50 disabled:opacity-50 text-sm font-semibold rounded-lg transition-colors"
    >
      {deleting ? 'Deleting…' : 'Delete Quote'}
    </button>
  )
}
