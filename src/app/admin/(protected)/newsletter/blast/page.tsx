'use client'

import { useState } from 'react'
import Link from 'next/link'

const inputCls = 'field-input'
const labelCls = 'field-label'

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
      <Link href="/admin/newsletter" className="detail-back">← Back to Newsletter</Link>
      <h1 className="mb-2">Send Blast</h1>
      <p className="text-sm mb-6" style={{ color: 'var(--grey)' }}>
        A one-off send to every subscribed contact — not a scheduled campaign. An unsubscribe link is appended automatically.
      </p>
      <form onSubmit={handleSubmit} className="panel space-y-4">
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
        <button type="submit" disabled={loading} className="btn-primary" style={{ width: '100%', justifyContent: 'center', opacity: loading ? 0.5 : 1 }}>
          {loading ? 'Sending…' : 'Send Blast'}
        </button>
      </form>
    </div>
  )
}
