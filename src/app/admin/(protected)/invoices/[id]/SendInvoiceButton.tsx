'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SendInvoiceButton({ invoiceId, hasClientEmail, lastSentAt }: {
  invoiceId: number
  hasClientEmail: boolean
  lastSentAt: string | null
}) {
  const router = useRouter()
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  async function handleSend() {
    setSending(true)
    setSent(false)
    setError('')
    const res = await fetch(`/api/admin/invoices/${invoiceId}/send`, { method: 'POST' })
    setSending(false)
    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      setError(data.error ?? 'Failed to send invoice. Please try again.')
      return
    }
    setSent(true)
    router.refresh()
  }

  return (
    <div className="flex items-center gap-3 flex-wrap">
      {lastSentAt && (
        <span className="text-xs text-gray-500">Last sent {new Date(lastSentAt).toLocaleString()}</span>
      )}
      <button
        type="button"
        onClick={handleSend}
        disabled={sending || !hasClientEmail}
        className="btn-primary"
        style={{ opacity: sending || !hasClientEmail ? 0.5 : 1 }}
      >
        {sending ? 'Sending…' : lastSentAt ? 'Resend Invoice' : 'Send Invoice'}
      </button>
      {sent && <span className="text-green-600 text-sm">Sent</span>}
      {!hasClientEmail && (
        <span className="text-xs" style={{ color: 'var(--rust)' }}>Add a client email before sending.</span>
      )}
      {error && <p role="alert" className="text-red-500 text-xs w-full">{error}</p>}
    </div>
  )
}
