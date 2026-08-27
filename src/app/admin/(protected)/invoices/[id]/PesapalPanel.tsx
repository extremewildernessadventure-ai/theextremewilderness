'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import type { InvoicePesapalOrder } from '@/lib/db'

export default function PesapalPanel({ invoiceId, orders }: { invoiceId: number; orders: InvoicePesapalOrder[] }) {
  const router = useRouter()
  const [generating, setGenerating] = useState(false)
  const [syncing, setSyncing] = useState<string | null>(null)
  const [error, setError] = useState('')
  const [copied, setCopied] = useState<string | null>(null)

  async function handleGenerate() {
    setGenerating(true)
    setError('')
    const res = await fetch(`/api/admin/invoices/${invoiceId}/pesapal-link`, { method: 'POST' })
    setGenerating(false)
    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      setError(data.error ?? 'Failed to generate a Pesapal payment link.')
      return
    }
    router.refresh()
  }

  async function handleSync(orderTrackingId: string) {
    setSyncing(orderTrackingId)
    setError('')
    const res = await fetch(`/api/admin/invoices/${invoiceId}/pesapal-sync`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ orderTrackingId }),
    })
    setSyncing(null)
    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      setError(data.error ?? 'Failed to check Pesapal status.')
      return
    }
    router.refresh()
  }

  async function handleCopy(url: string) {
    await navigator.clipboard.writeText(url)
    setCopied(url)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <div className="panel">
      <div className="flex items-center justify-between mb-4">
        <h2>Pesapal</h2>
        <button type="button" onClick={handleGenerate} disabled={generating} className="btn-primary" style={{ padding: '8px 16px', fontSize: 12, opacity: generating ? 0.5 : 1 }}>
          {generating ? 'Generating…' : 'Get Payment Link'}
        </button>
      </div>

      {error && <p role="alert" className="text-red-500 text-xs mb-3">{error}</p>}

      {orders.length === 0 ? (
        <p className="text-sm text-gray-400">No payment link generated yet.</p>
      ) : (
        <div className="space-y-3">
          {orders.map((order) => (
            <div key={order.id} className="border border-gray-100 rounded-lg p-3">
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <span className={`text-xs font-bold uppercase tracking-wide ${order.status === 'COMPLETED' ? 'text-green-600' : 'text-gray-500'}`}>
                  {order.status}
                </span>
                <span className="text-xs text-gray-400">{new Date(order.created_at).toLocaleString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <input
                  readOnly
                  value={order.redirect_url}
                  className="flex-1 text-xs border border-gray-200 rounded px-2 py-1.5 text-gray-600 bg-gray-50"
                  onFocus={(e) => e.target.select()}
                />
                <button
                  type="button"
                  onClick={() => handleCopy(order.redirect_url)}
                  className="text-xs font-semibold text-brand hover:text-brand-secondary whitespace-nowrap"
                >
                  {copied === order.redirect_url ? 'Copied' : 'Copy'}
                </button>
                <button
                  type="button"
                  onClick={() => handleSync(order.order_tracking_id)}
                  disabled={syncing === order.order_tracking_id}
                  className="text-xs font-semibold text-gray-500 hover:text-brand whitespace-nowrap disabled:opacity-50"
                >
                  {syncing === order.order_tracking_id ? 'Checking…' : 'Check Status'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
