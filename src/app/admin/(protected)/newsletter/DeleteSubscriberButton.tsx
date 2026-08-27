'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function DeleteSubscriberButton({ subscriberId }: { subscriberId: number }) {
  const router = useRouter()
  const [deleting, setDeleting] = useState(false)

  async function handleDelete() {
    if (!confirm('Remove this subscriber?')) return
    setDeleting(true)
    await fetch(`/api/admin/newsletter/${subscriberId}`, { method: 'DELETE' })
    router.refresh()
  }

  return (
    <button
      type="button"
      onClick={handleDelete}
      disabled={deleting}
      className="text-xs font-semibold text-red-500 hover:underline disabled:opacity-50"
    >
      {deleting ? 'Removing…' : 'Remove'}
    </button>
  )
}
