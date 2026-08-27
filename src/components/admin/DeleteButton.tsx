'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function DeleteButton({
  endpoint,
  confirmMessage,
  redirectTo,
  label = 'Delete',
  deletingLabel = 'Deleting…',
}: {
  endpoint: string
  confirmMessage: string
  redirectTo: string
  label?: string
  deletingLabel?: string
}) {
  const router = useRouter()
  const [deleting, setDeleting] = useState(false)

  async function handleDelete() {
    if (!confirm(confirmMessage)) return
    setDeleting(true)
    const res = await fetch(endpoint, { method: 'DELETE' })
    if (!res.ok) {
      setDeleting(false)
      const data = await res.json().catch(() => ({}))
      alert(data.error ?? 'Failed to delete. Please try again.')
      return
    }
    router.push(redirectTo)
    router.refresh()
  }

  return (
    <button type="button" onClick={handleDelete} disabled={deleting} className="btn-danger">
      {deleting ? deletingLabel : label}
    </button>
  )
}
