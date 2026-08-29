'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

// Generic across leads and newsletter subscribers — same shape as
// DeleteButton's endpoint convention. clientId is the already-linked id (or
// null); once linked, this renders "View Client" instead of the action, and
// optionally a "Book Now" deep-link straight into a pre-filled booking form
// — the "then proceed with booking them" step.
export default function AddAsClientButton({ endpoint, clientId, leadId, showBookNow }: {
  endpoint: string
  clientId: number | null
  leadId?: number
  showBookNow?: boolean
}) {
  const router = useRouter()
  const [saving, setSaving] = useState(false)

  async function handleClick() {
    setSaving(true)
    const res = await fetch(endpoint, { method: 'POST' })
    setSaving(false)
    if (res.ok) {
      router.refresh()
    }
  }

  if (clientId) {
    const bookNowHref = leadId
      ? `/admin/bookings/new?clientId=${clientId}&leadId=${leadId}`
      : `/admin/bookings/new?clientId=${clientId}`
    return (
      <span className="flex items-center gap-3">
        <Link href={`/admin/clients/${clientId}`} className="text-xs font-semibold text-brand hover:underline">
          View Client →
        </Link>
        {showBookNow && (
          <Link href={bookNowHref} className="text-xs font-semibold text-brand hover:underline">
            Book Now →
          </Link>
        )}
      </span>
    )
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={saving}
      className="text-xs font-semibold hover:underline disabled:opacity-50"
      style={{ color: 'var(--pine)' }}
    >
      {saving ? 'Adding…' : '+ Add as Client'}
    </button>
  )
}
