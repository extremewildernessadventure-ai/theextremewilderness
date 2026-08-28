'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { INCIDENT_TYPES, INCIDENT_SEVERITIES, type IncidentType, type IncidentSeverity } from '@/lib/compliance'
import type { Departure } from '@/lib/departures'
import type { Guide } from '@/lib/ops'
import { packages } from '@/data/packages'
import SelectWithCustom, { CUSTOM_OPTION_VALUE } from '@/components/admin/SelectWithCustom'

const inputCls = 'field-input'
const labelCls = 'field-label'

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
    departureId: '', departureNotesOther: '', guideId: '', guideNameOther: '', clientName: '', clientEmail: '',
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
      const isCustomDeparture = form.departureId === CUSTOM_OPTION_VALUE
      const isCustomGuide = form.guideId === CUSTOM_OPTION_VALUE
      const res = await fetch('/api/admin/incidents', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          departureId: isCustomDeparture || !form.departureId ? undefined : Number(form.departureId),
          departureNotesOther: isCustomDeparture ? form.departureNotesOther.trim() : undefined,
          guideId: isCustomGuide || !form.guideId ? undefined : Number(form.guideId),
          guideNameOther: isCustomGuide ? form.guideNameOther.trim() : undefined,
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
      <Link href="/admin/incidents" className="detail-back">← Back to Incidents</Link>
      <h1 className="mb-6">New Incident Report</h1>
      <form onSubmit={handleSubmit} className="panel space-y-4">
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
            <SelectWithCustom
              options={departures}
              getOptionValue={(d) => String(d.id)}
              getOptionLabel={(d) => departureLabel(d)}
              value={form.departureId}
              onChange={(v) => update('departureId', v)}
              customValue={form.departureNotesOther}
              onCustomChange={(v) => update('departureNotesOther', v)}
              placeholder="—"
              customPlaceholder="Enter departure details…"
            />
          </div>
          <div>
            <label className={labelCls}>Guide (optional)</label>
            <SelectWithCustom
              options={guides}
              getOptionValue={(g) => String(g.id)}
              getOptionLabel={(g) => g.name}
              value={form.guideId}
              onChange={(v) => update('guideId', v)}
              customValue={form.guideNameOther}
              onCustomChange={(v) => update('guideNameOther', v)}
              placeholder="—"
              customPlaceholder="Enter guide name…"
            />
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
        <button type="submit" disabled={loading} className="btn-primary" style={{ width: '100%', justifyContent: 'center', opacity: loading ? 0.5 : 1 }}>
          {loading ? 'Creating…' : 'Create Incident Report'}
        </button>
      </form>
    </div>
  )
}
