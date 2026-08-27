'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLoginPage() {
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })
      if (!res.ok) {
        setError('Incorrect password.')
        setLoading(false)
        return
      }
      router.push('/admin')
      router.refresh()
    } catch {
      setError('Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 16px' }}>
      <div className="panel" style={{ width: '100%', maxWidth: 384, boxShadow: 'var(--shadow)' }}>
        <div className="brand" style={{ marginBottom: 16 }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2 3 20h18L12 2Z" /><path d="M8 14l2.5-3 2 2 1.5-2 2 3" /><path d="M12 2v6" /></svg>
          <span className="brand-text">EWA Admin</span>
        </div>
        <p className="text-sm mb-6" style={{ color: 'var(--grey)' }}>Sign in to manage the dashboard.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="password" className="field-label">Password</label>
            <input
              id="password"
              type="password"
              required
              autoFocus
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="field-input"
            />
          </div>
          {error && <p role="alert" className="text-red-500 text-xs">{error}</p>}
          <button type="submit" disabled={loading || !password} className="btn-primary" style={{ width: '100%', justifyContent: 'center', opacity: loading || !password ? 0.5 : 1 }}>
            {loading ? 'Signing in…' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  )
}
