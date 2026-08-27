'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { INCIDENT_TYPES, INCIDENT_SEVERITIES, type IncidentType, type IncidentSeverity } from '@/lib/compliance'
import type { Departure } from '@/lib/departures'
import type { Guide } from '@/lib/ops'
import { packages } from '@/data/packages'

const inputCls = 'w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10'
const labelCls = 'block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1.5'

const TYPE_LABELS: Record<IncidentType, string> = {
  medical: 'Medical', vehicle: 'Vehicle', weather: 'Weather', security: 'Security', other: 'Other',
}

function departureLabel(d: Departure): string {
  const pkg = packages.find((p) => p.slug === d.package_slug)
  return `${pkg?.name ?? d.package_slug} (${d.start_date})`
}

export default function NewIncidentForm({ departures, guides }: { departures: Departure[]; guides: Guide[] }) {
  const router = useRouter()
  const [form, setForm] = useState({
    departureId: '', guideId: '', clientName: '', clientEmail: '',
    type: 'medical' as IncidentType, severity: 'minor' as IncidentSeverity,
    description: '', actionTaken: '', amrefEvacuation: false, reportedBy: '', occurredAt: '',
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  function update<K extends keyof typeof form>(key: K, value: typeof form[K]) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.description.trim()) {
      setError('A description is required.')
      return
    }
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/admin/incidents', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          departureId: form.departureId ? Number(form.departureId) : undefined,
          guideId: form.guideId ? Number(form.guideId) : undefined,
        }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setError(data.error ?? 'Failed to create incident report.')
        setLoading(false)
        return
      }
      router.push('/admin/incidents')
      router.refresh()
    } catch {
      setError('Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl">
      <Link href="/admin/incidents" className="text-sm text-gray-500 hover:text-brand mb-4 inline-block">← Back to Incidents</Link>
      <h1 className="text-2xl font-bold text-brand mb-6">New Incident Report</h1>
      <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-xl p-7 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Type</label>
            <select value={form.type} onChange={(e) => update('type', e.target.value as IncidentType)} className={inputCls}>
              {INCIDENT_TYPES.map((t) => <option key={t} value={t}>{TYPE_LABELS[t]}</option>)}
            </select>
          </div>
          <div>
            <label className={labelCls}>Severity</label>
            <select value={form.severity} onChange={(e) => update('severity', e.target.value as IncidentSeverity)} className={`${inputCls} capitalize`}>
              {INCIDENT_SEVERITIES.map((s) => <option key={s} value={s} className="capitalize">{s}</option>)}
            </select>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Departure (optional)</label>
            <select value={form.departureId} onChange={(e) => update('departureId', e.target.value)} className={inputCls}>
              <option value="">—</option>
              {departures.map((d) => <option key={d.id} value={d.id}>{departureLabel(d)}</option>)}
            </select>
          </div>
          <div>
            <label className={labelCls}>Guide (optional)</label>
            <select value={form.guideId} onChange={(e) => update('guideId', e.target.value)} className={inputCls}>
              <option value="">—</option>
              {guides.map((g) => <option key={g.id} value={g.id}>{g.name}</option>)}
            </select>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Client Name</label>
            <input value={form.clientName} onChange={(e) => update('clientName', e.target.value)} className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Client Email</label>
            <input type="email" value={form.clientEmail} onChange={(e) => update('clientEmail', e.target.value)} className={inputCls} />
          </div>
        </div>
        <div>
          <label className={labelCls}>Description *</label>
          <textarea required value={form.description} onChange={(e) => update('description', e.target.value)} rows={3} className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Action Taken</label>
          <textarea value={form.actionTaken} onChange={(e) => update('actionTaken', e.target.value)} rows={2} className={inputCls} />
        </div>
        <label className="flex items-center gap-2 text-sm text-gray-700">
          <input type="checkbox" checked={form.amrefEvacuation} onChange={(e) => update('amrefEvacuation', e.target.checked)} className="rounded border-gray-300 text-brand focus:ring-brand/20" />
          AMREF Flying Doctors evacuation involved
        </label>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Reported By</label>
            <input value={form.reportedBy} onChange={(e) => update('reportedBy', e.target.value)} className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Occurred On</label>
            <input type="date" value={form.occurredAt} onChange={(e) => update('occurredAt', e.target.value)} className={inputCls} />
          </div>
        </div>
        {error && <p role="alert" className="text-red-500 text-xs">{error}</p>}
        <button type="submit" disabled={loading} className="w-full py-2.5 bg-brand hover:bg-brand-secondary disabled:opacity-50 text-white font-semibold rounded-lg transition-colors text-sm">
          {loading ? 'Creating…' : 'Create Incident Report'}
        </button>
      </form>
    </div>
  )
}
