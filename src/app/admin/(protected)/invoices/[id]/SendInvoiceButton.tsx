'use client'

import { useState } from 'react'
import Link from 'next/link'
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
    <div className="space-y-3">
      {lastSentAt && (
        <p className="text-xs text-gray-500">Last sent {new Date(lastSentAt).toLocaleString()}</p>
      )}
      {!hasClientEmail && (
        <p className="text-xs" style={{ color: 'var(--rust)' }}>Add a client email above before sending.</p>
      )}
      <div className="flex items-center gap-3 flex-wrap">
        <button
          type="button"
          onClick={handleSend}
          disabled={sending || !hasClientEmail}
          className="btn-primary"
          style={{ opacity: sending || !hasClientEmail ? 0.5 : 1 }}
        >
          {sending ? 'Sending…' : lastSentAt ? 'Resend Invoice' : 'Send Invoice'}
        </button>
        <Link
          href={`/admin/invoices/${invoiceId}/pdf`}
          className="text-xs font-semibold hover:underline"
          style={{ color: 'var(--pine)' }}
          target="_blank"
        >
          Print / Download PDF
        </Link>
        {sent && <span className="text-green-600 text-sm">Sent</span>}
      </div>
      {error && <p role="alert" className="text-red-500 text-xs">{error}</p>}
    </div>
  )
}
