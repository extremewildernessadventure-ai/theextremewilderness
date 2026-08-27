'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function DeleteLeadButton({ leadId, leadName }: { leadId: number; leadName: string }) {
  const router = useRouter()
  const [deleting, setDeleting] = useState(false)

  async function handleDelete() {
    if (!confirm(`Delete lead from ${leadName}? This cannot be undone.`)) return
    setDeleting(true)
    await fetch(`/api/admin/leads/${leadId}`, { method: 'DELETE' })
    router.push('/admin/leads')
    router.refresh()
  }

  return (
    <button type="button" onClick={handleDelete} disabled={deleting} className="btn-danger" style={{ opacity: deleting ? 0.5 : 1 }}>
      {deleting ? 'Deleting…' : 'Delete Lead'}
    </button>
  )
}
