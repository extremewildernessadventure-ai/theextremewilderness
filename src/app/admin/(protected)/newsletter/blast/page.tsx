'use client'

import { useState } from 'react'
import Link from 'next/link'

const inputCls = 'w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10'
const labelCls = 'block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1.5'

export default function NewsletterBlastPage() {
  const [subject, setSubject] = useState('')
  const [html, setHtml] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<{ sent: number; total: number } | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!confirm('Send this email to every subscribed contact? This cannot be undone.')) return
    setLoading(true)
    setError('')
    setResult(null)
    try {
      const res = await fetch('/api/admin/newsletter/blast', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subject, html }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setError(data.error ?? 'Failed to send blast.')
        setLoading(false)
        return
      }
      const data = await res.json() as { sent: number; total: number }
      setResult(data)
      setLoading(false)
    } catch {
      setError('Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl">
      <Link href="/admin/newsletter" className="text-sm text-gray-500 hover:text-brand mb-4 inline-block">← Back to Newsletter</Link>
      <h1 className="text-2xl font-bold text-brand mb-2">Send Blast</h1>
      <p className="text-sm text-gray-500 mb-6">
        A one-off send to every subscribed contact — not a scheduled campaign. An unsubscribe link is appended automatically.
      </p>
      <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-xl p-7 space-y-4">
        <div>
          <label className={labelCls}>Subject *</label>
          <input required value={subject} onChange={(e) => setSubject(e.target.value)} className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Body (HTML) *</label>
          <textarea required value={html} onChange={(e) => setHtml(e.target.value)} rows={10} className={`${inputCls} font-mono`} />
        </div>
        {error && <p role="alert" className="text-red-500 text-xs">{error}</p>}
        {result && (
          <p className="text-sm text-green-600">Sent to {result.sent} of {result.total} subscribers.</p>
        )}
        <button type="submit" disabled={loading} className="w-full py-2.5 bg-brand hover:bg-brand-secondary disabled:opacity-50 text-white font-semibold rounded-lg transition-colors text-sm">
          {loading ? 'Sending…' : 'Send Blast'}
        </button>
      </form>
    </div>
  )
}
