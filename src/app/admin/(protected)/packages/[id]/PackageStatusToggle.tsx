'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import type { PackageStatus } from '@/lib/packages'

// Separate action from any content save (see status/route.ts's own comment)
// -- a package can be fully fleshed out and still deliberately left as a
// draft, or published then temporarily pulled, without touching its content.
export default function PackageStatusToggle({ id, status }: { id: number; status: PackageStatus }) {
  const router = useRouter()
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  async function toggle() {
    const next: PackageStatus = status === 'published' ? 'draft' : 'published'
    setSaving(true)
    setError('')
    const res = await fetch(`/api/admin/packages/${id}/status`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: next }),
    })
    setSaving(false)
    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      setError(data.error ?? 'Failed to update status.')
      return
    }
    router.refresh()
  }

  return (
    <div className="flex items-center gap-2">
      <span className={`pill ${status === 'published' ? 'open' : 'full'}`}><i />{status === 'published' ? 'Published' : 'Draft'}</span>
      <button type="button" onClick={toggle} disabled={saving} className="btn-outline text-xs" style={{ opacity: saving ? 0.5 : 1 }}>
        {saving ? 'Updating…' : status === 'published' ? 'Unpublish' : 'Publish'}
      </button>
      {error && <span className="text-red-500 text-xs">{error}</span>}
    </div>
  )
}
