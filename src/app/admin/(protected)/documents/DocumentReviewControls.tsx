'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { REJECTION_REASONS, type DocumentStatus } from '@/lib/documents'

export default function DocumentReviewControls({ documentId, status }: { documentId: number; status: DocumentStatus }) {
  const router = useRouter()
  const [rejecting, setRejecting] = useState(false)
  const [reason, setReason] = useState<string>(REJECTION_REASONS[0])
  const [customReason, setCustomReason] = useState('')
  const [saving, setSaving] = useState(false)

  async function handleVerify() {
    setSaving(true)
    await fetch(`/api/admin/documents/${documentId}/verify`, { method: 'POST' })
    setSaving(false)
    router.refresh()
  }

  async function handleReject() {
    const finalReason = reason === 'Other' ? customReason.trim() : reason
    if (!finalReason) return
    setSaving(true)
    await fetch(`/api/admin/documents/${documentId}/reject`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ reason: finalReason }),
    })
    setSaving(false)
    setRejecting(false)
    router.refresh()
  }

  if (status === 'pending') {
    if (rejecting) {
      return (
        <div className="flex items-center gap-2">
          <select
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="border border-gray-300 rounded-lg px-2 py-1.5 text-xs focus:outline-none focus:border-brand"
          >
            {REJECTION_REASONS.map((r) => <option key={r} value={r}>{r}</option>)}
          </select>
          {reason === 'Other' && (
            <input
              value={customReason}
              onChange={(e) => setCustomReason(e.target.value)}
              placeholder="Reason"
              className="border border-gray-300 rounded-lg px-2 py-1.5 text-xs focus:outline-none focus:border-brand"
            />
          )}
          <button type="button" onClick={handleReject} disabled={saving} className="text-xs font-semibold text-red-600 hover:underline disabled:opacity-50">
            Send
          </button>
          <button type="button" onClick={() => setRejecting(false)} className="text-xs text-gray-400 hover:underline">
            Cancel
          </button>
        </div>
      )
    }
    return (
      <div className="flex items-center gap-3">
        <button type="button" onClick={handleVerify} disabled={saving} className="text-xs font-semibold text-green-600 hover:underline disabled:opacity-50">
          Verify
        </button>
        <button type="button" onClick={() => setRejecting(true)} className="text-xs font-semibold text-red-600 hover:underline">
          Reject
        </button>
      </div>
    )
  }

  const STATUS_STYLES: Record<DocumentStatus, string> = {
    pending: 'bg-amber-100 text-amber-700',
    verified: 'bg-green-100 text-green-700',
    rejected: 'bg-red-100 text-red-700',
  }
  const overrideAction = status === 'verified' ? handleReject : handleVerify
  const overrideLabel = status === 'verified' ? 'Reject instead' : 'Verify instead'

  return (
    <div className="flex items-center gap-2">
      <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-semibold capitalize ${STATUS_STYLES[status]}`}>{status}</span>
      {status === 'verified' ? (
        <button type="button" onClick={() => setRejecting(true)} className="text-xs text-gray-400 hover:underline">
          {overrideLabel}
        </button>
      ) : (
        <button type="button" onClick={overrideAction} disabled={saving} className="text-xs text-gray-400 hover:underline disabled:opacity-50">
          {overrideLabel}
        </button>
      )}
      {rejecting && status === 'verified' && (
        <div className="flex items-center gap-2">
          <select
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="border border-gray-300 rounded-lg px-2 py-1.5 text-xs focus:outline-none focus:border-brand"
          >
            {REJECTION_REASONS.map((r) => <option key={r} value={r}>{r}</option>)}
          </select>
          <button type="button" onClick={handleReject} disabled={saving} className="text-xs font-semibold text-red-600 hover:underline disabled:opacity-50">
            Send
          </button>
        </div>
      )}
    </div>
  )
}
