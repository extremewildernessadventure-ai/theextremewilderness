'use client'

import { Suspense, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { DOCUMENT_TYPES, type DocumentType } from '@/lib/documents'
import type { Client } from '@/lib/clients'

const inputCls = 'w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10'
const labelCls = 'block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1.5'

const TYPE_LABELS: Record<DocumentType, string> = { passport: 'Passport', waiver: 'Waiver', visa: 'Visa', other: 'Other' }

function NewDocumentFormInner({ clients }: { clients: Client[] }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [clientId, setClientId] = useState(searchParams.get('clientId') ?? '')
  const [type, setType] = useState<DocumentType>('passport')
  const [file, setFile] = useState<File | null>(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!clientId) {
      setError('Select a client.')
      return
    }
    if (!file) {
      setError('Choose a file to upload.')
      return
    }
    setLoading(true)
    setError('')
    try {
      const formData = new FormData()
      formData.set('clientId', clientId)
      formData.set('type', type)
      formData.set('file', file)

      const res = await fetch('/api/admin/documents', { method: 'POST', body: formData })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setError(data.error ?? 'Failed to upload document.')
        setLoading(false)
        return
      }
      router.push(clientId ? `/admin/clients/${clientId}` : '/admin/documents')
      router.refresh()
    } catch {
      setError('Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl">
      <Link href="/admin/documents" className="text-sm text-gray-500 hover:text-brand mb-4 inline-block">← Back to Documents</Link>
      <h1 className="text-2xl font-bold text-brand mb-6">Upload Document</h1>
      <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-xl p-7 space-y-4">
        <div>
          <label className={labelCls}>Client *</label>
          <select required value={clientId} onChange={(e) => setClientId(e.target.value)} className={inputCls}>
            <option value="">— Select a client —</option>
            {clients.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
          </select>
        </div>
        <div>
          <label className={labelCls}>Document Type</label>
          <select value={type} onChange={(e) => setType(e.target.value as DocumentType)} className={inputCls}>
            {DOCUMENT_TYPES.map((t) => <option key={t} value={t}>{TYPE_LABELS[t]}</option>)}
          </select>
        </div>
        <div>
          <label className={labelCls}>File *</label>
          <input
            type="file"
            required
            onChange={(e) => setFile(e.target.files?.[0] ?? null)}
            className="w-full text-sm text-gray-600 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-brand file:text-white file:text-sm file:font-semibold hover:file:bg-brand-secondary"
          />
        </div>
        {error && <p role="alert" className="text-red-500 text-xs">{error}</p>}
        <button type="submit" disabled={loading} className="w-full py-2.5 bg-brand hover:bg-brand-secondary disabled:opacity-50 text-white font-semibold rounded-lg transition-colors text-sm">
          {loading ? 'Uploading…' : 'Upload Document'}
        </button>
      </form>
    </div>
  )
}

export default function NewDocumentForm({ clients }: { clients: Client[] }) {
  return (
    <Suspense fallback={null}>
      <NewDocumentFormInner clients={clients} />
    </Suspense>
  )
}
