'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Plus, Trash2 } from 'lucide-react'
import { computeDepartureTotalCost, type Departure } from '@/lib/departures'
import type { Client } from '@/lib/clients'
import { packages } from '@/data/packages'
import SelectWithCustom, { CUSTOM_OPTION_VALUE } from '@/components/admin/SelectWithCustom'

const inputCls = 'field-input'
const labelCls = 'field-label'

type ItemRow = { description: string; quantity: string; unitPrice: string }

function round2(n: number): number {
  return Math.round(n * 100) / 100
}

function emptyRow(): ItemRow {
  return { description: '', quantity: '1', unitPrice: '' }
}

function lineTotal(row: ItemRow): number {
  const qty = parseFloat(row.quantity)
  const price = parseFloat(row.unitPrice)
  if (!Number.isFinite(qty) || !Number.isFinite(price)) return 0
  return qty * price
}

function packageName(slug: string): string {
  return packages.find((p) => p.slug === slug)?.name ?? slug
}

function departureLabel(d: Departure): string {
  const totalCost = computeDepartureTotalCost(d)
  const label = `${packageName(d.package_slug)} (${d.start_date})`
  return totalCost != null ? `${label} — USD ${totalCost.toLocaleString()}` : label
}

function clientLabel(c: Client): string {
  return c.email ? `${c.name} (${c.email})` : c.name
}

export default function NewInvoiceForm({ departures, clients }: { departures: Departure[]; clients: Client[] }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  // Pre-fill from a Quote's "Convert to Invoice" link, or from another
  // invoice's "Create Linked Invoice" button (/admin/invoices/[id]) — a
  // plain query-param deep-link, not a fetch, so no extra round-trip.
  const parentInvoiceId = searchParams.get('parentInvoiceId')
  const parentInvoiceNumber = searchParams.get('parentInvoiceNumber')
  const priorBalanceParam = searchParams.get('priorBalance')

  const [form, setForm] = useState({
    clientId: searchParams.get('clientId') ?? '',
    clientName: searchParams.get('clientName') ?? '',
    clientEmail: searchParams.get('clientEmail') ?? '',
    bookingReference: '',
    currency: searchParams.get('currency') || 'USD',
    departureId: searchParams.get('departureId') ?? '',
    dueDate: '',
    depositPercent: '',
    notes: '',
  })
  const [departureNotesOther, setDepartureNotesOther] = useState('')
  const [items, setItems] = useState<ItemRow[]>(() => {
    const description = searchParams.get('itemDescription')
    const price = searchParams.get('itemPrice')
    if (description && price) {
      return [{ description, quantity: '1', unitPrice: price }]
    }
    return [emptyRow()]
  })
  const [billingMode, setBillingMode] = useState<'percent' | 'explicit'>('percent')
  const [explicitAmount, setExplicitAmount] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  // Picking an existing client fills in Name/Email from their record, only
  // where the field is still empty — same rule as bookings' client picker.
  function handleClientSelect(value: string) {
    const client = clients.find((c) => String(c.id) === value)
    setForm((f) => ({
      ...f,
      clientId: value,
      clientName: client ? (f.clientName || client.name) : f.clientName,
      clientEmail: client ? (f.clientEmail || (client.email ?? '')) : f.clientEmail,
    }))
  }

  function updateItem(index: number, key: keyof ItemRow, value: string) {
    setItems((rows) => rows.map((row, i) => (i === index ? { ...row, [key]: value } : row)))
  }

  function addItem() {
    setItems((rows) => [...rows, emptyRow()])
  }

  function removeItem(index: number) {
    setItems((rows) => (rows.length === 1 ? rows : rows.filter((_, i) => i !== index)))
  }

  const isCustomDeparture = form.departureId === CUSTOM_OPTION_VALUE
  const selectedDeparture = !isCustomDeparture && form.departureId
    ? departures.find((d) => String(d.id) === form.departureId)
    : undefined
  const departureTotalCost = selectedDeparture ? computeDepartureTotalCost(selectedDeparture) : null
  // A priced departure is the authoritative source of the trip's total cost
  // -- when one's selected, billing is driven off that total/the running
  // balance chain instead of whatever's typed into Line Items below (an
  // older departure with no price entered yet, or no departure at all,
  // falls back to exactly today's manual-line-items + Deposit % behavior).
  const useDepartureSchedule = departureTotalCost != null
  const tripLabel = selectedDeparture ? packageName(selectedDeparture.package_slug) : ''
  const previousBalance = useDepartureSchedule
    ? (priorBalanceParam != null && Number.isFinite(Number(priorBalanceParam)) ? Number(priorBalanceParam) : departureTotalCost!)
    : 0

  const percentNum = parseInt(form.depositPercent, 10)
  const hasPercent = form.depositPercent.trim() !== '' && Number.isFinite(percentNum) && percentNum > 0
  const percentAmount = useDepartureSchedule && hasPercent ? round2((departureTotalCost! * percentNum) / 100) : 0
  const explicitNum = parseFloat(explicitAmount)
  const hasExplicit = explicitAmount.trim() !== '' && Number.isFinite(explicitNum) && explicitNum >= 0
  const scheduleThisAmount = billingMode === 'percent' ? percentAmount : (hasExplicit ? explicitNum : 0)
  const scheduleNewBalance = useDepartureSchedule ? Math.max(0, round2(previousBalance - scheduleThisAmount)) : 0

  // The running total of whatever's typed in the line items below -- used
  // only in the legacy (no priced departure) path. When a deposit % is set
  // there, this is the *real trip cost* the deposit is a percentage of, not
  // what gets billed on this invoice (see handleSubmit).
  const total = items.reduce((sum, row) => sum + lineTotal(row), 0)
  const legacyDepositPercentNum = parseInt(form.depositPercent, 10)
  const hasLegacyDepositPercent = !useDepartureSchedule && form.depositPercent.trim() !== '' && Number.isFinite(legacyDepositPercentNum) && legacyDepositPercentNum > 0
  const legacyDepositAmount = hasLegacyDepositPercent ? round2((total * legacyDepositPercentNum) / 100) : 0
  const legacyRemainingBalance = hasLegacyDepositPercent ? round2(total - legacyDepositAmount) : 0

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    let billedItems: { description: string; quantity: number; unitPrice: number }[]
    let finalDepositPercent: number | undefined

    if (useDepartureSchedule) {
      if (billingMode === 'percent') {
        if (!hasPercent || percentNum < 1 || percentNum > 99) {
          setError('Deposit % must be between 1 and 99.')
          setLoading(false)
          return
        }
      } else if (!hasExplicit || explicitNum <= 0) {
        setError('Enter an amount greater than 0 to bill.')
        setLoading(false)
        return
      }

      const description = billingMode === 'percent'
        ? `Deposit (${percentNum}%) — ${tripLabel}`
        : Math.abs(scheduleThisAmount - previousBalance) < 0.005
          ? `Balance — ${tripLabel}`
          : `Payment — ${tripLabel}`
      billedItems = [{ description, quantity: 1, unitPrice: scheduleThisAmount }]
      finalDepositPercent = billingMode === 'percent' ? percentNum : undefined
    } else {
      const parsedItems = items
        .filter((row) => row.description.trim() !== '')
        .map((row) => ({
          description: row.description.trim(),
          quantity: parseFloat(row.quantity) || 0,
          unitPrice: parseFloat(row.unitPrice) || 0,
        }))

      if (parsedItems.length === 0) {
        setError('Add at least one line item.')
        setLoading(false)
        return
      }
      if (parsedItems.some((item) => item.quantity <= 0 || item.unitPrice < 0)) {
        setError('Each line item needs a quantity greater than 0 and a unit price of 0 or more.')
        setLoading(false)
        return
      }
      if (hasLegacyDepositPercent && (legacyDepositPercentNum < 1 || legacyDepositPercentNum > 99)) {
        setError('Deposit % must be between 1 and 99.')
        setLoading(false)
        return
      }

      // When a deposit % is set, what actually gets billed on THIS invoice is
      // only the deposit -- the typed line items above are the real trip cost
      // (so the % can be computed against something real), collapsed here into
      // a single synthesized item. This keeps `amount` exactly equal to the
      // sum of this invoice's own line items everywhere else in the codebase
      // relies on (status derivation, the PDF, etc.) -- the remaining balance
      // isn't a second leg of this invoice, it's a separate one, created later
      // via "Create Linked Invoice" on this invoice's detail page.
      billedItems = hasLegacyDepositPercent
        ? [{
            description: `Deposit (${legacyDepositPercentNum}%) — ${parsedItems.map((i) => i.description).join(', ')}`,
            quantity: 1,
            unitPrice: legacyDepositAmount,
          }]
        : parsedItems
      finalDepositPercent = hasLegacyDepositPercent ? legacyDepositPercentNum : undefined
    }

    try {
      const res = await fetch('/api/admin/invoices', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          clientId: form.clientId ? Number(form.clientId) : undefined,
          departureId: isCustomDeparture || !form.departureId ? undefined : Number(form.departureId),
          departureNotesOther: isCustomDeparture ? departureNotesOther.trim() : undefined,
          depositPercent: finalDepositPercent,
          parentInvoiceId: parentInvoiceId ? Number(parentInvoiceId) : undefined,
          items: billedItems,
        }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setError(data.error ?? 'Failed to create invoice.')
        setLoading(false)
        return
      }
      router.push('/admin/invoices')
      router.refresh()
    } catch {
      setError('Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl">
      <Link href="/admin/invoices" className="detail-back">← Back to Invoices</Link>
      <h1 className={parentInvoiceNumber ? 'mb-1' : 'mb-6'}>New Invoice</h1>
      {parentInvoiceNumber && (
        <p className="text-xs text-gray-400 mb-6">
          Linked to invoice <Link href={`/admin/invoices/${parentInvoiceId}`} className="font-semibold text-brand hover:underline">{parentInvoiceNumber}</Link>
        </p>
      )}
      <form onSubmit={handleSubmit} className="panel space-y-4">
        <div>
          <label className={labelCls}>Existing Client (optional)</label>
          <select value={form.clientId} onChange={(e) => handleClientSelect(e.target.value)} className={inputCls}>
            <option value="">— New / not listed —</option>
            {clients.map((c) => <option key={c.id} value={c.id}>{clientLabel(c)}</option>)}
          </select>
        </div>
        <div>
          <label className={labelCls}>Client Name *</label>
          <input required value={form.clientName} onChange={(e) => update('clientName', e.target.value)} className={inputCls} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Client Email</label>
            <input type="email" value={form.clientEmail} onChange={(e) => update('clientEmail', e.target.value)} className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Booking Reference</label>
            <input value={form.bookingReference} onChange={(e) => update('bookingReference', e.target.value)} className={inputCls} placeholder="Leave blank to auto-generate" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Currency</label>
            <input value={form.currency} onChange={(e) => update('currency', e.target.value)} className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Departure (optional)</label>
            <SelectWithCustom
              options={departures}
              getOptionValue={(d) => String(d.id)}
              getOptionLabel={departureLabel}
              value={form.departureId}
              onChange={(v) => update('departureId', v)}
              customValue={departureNotesOther}
              onCustomChange={setDepartureNotesOther}
              placeholder="—"
              customPlaceholder="Enter departure details…"
            />
          </div>
        </div>

        {useDepartureSchedule ? (
          <div className="pt-2 border-t border-gray-100 space-y-3">
            <label className={labelCls}>Billing</label>
            <div className="rounded-lg px-4 py-3 text-sm space-y-1" style={{ background: 'var(--sand)' }}>
              <div className="flex justify-between">
                <span style={{ color: 'var(--grey)' }}>Total Cost</span>
                <span className="font-semibold mono">{form.currency} {departureTotalCost!.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span style={{ color: 'var(--grey)' }}>Previous Balance</span>
                <span className="font-semibold mono">{form.currency} {previousBalance.toLocaleString()}</span>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setBillingMode('percent')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md border ${billingMode === 'percent' ? 'border-brand text-brand' : 'border-gray-200 text-gray-500'}`}
              >
                Deposit %
              </button>
              <button
                type="button"
                onClick={() => setBillingMode('explicit')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md border ${billingMode === 'explicit' ? 'border-brand text-brand' : 'border-gray-200 text-gray-500'}`}
              >
                Exact Amount
              </button>
            </div>

            {billingMode === 'percent' ? (
              <div className="flex items-center gap-2">
                <input
                  type="number" min="1" max="99" step="1" value={form.depositPercent}
                  onChange={(e) => update('depositPercent', e.target.value)}
                  className={inputCls} style={{ maxWidth: 100 }} placeholder="e.g. 30"
                />
                <span className="text-sm text-gray-400">% of total</span>
                <div className="flex gap-1.5 ms-2">
                  {[25, 30, 50].map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => update('depositPercent', String(preset))}
                      className="px-2.5 py-1 text-xs font-semibold rounded-md border border-gray-200 text-gray-600 hover:border-brand hover:text-brand"
                    >
                      {preset}%
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <input
                  type="number" min="0" step="0.01" value={explicitAmount}
                  onChange={(e) => setExplicitAmount(e.target.value)}
                  className={inputCls} style={{ maxWidth: 140 }} placeholder="0.00"
                />
                <button
                  type="button"
                  onClick={() => setExplicitAmount(String(previousBalance))}
                  className="px-2.5 py-1 text-xs font-semibold rounded-md border border-gray-200 text-gray-600 hover:border-brand hover:text-brand"
                >
                  Bill remaining balance in full
                </button>
              </div>
            )}

            <div className="rounded-lg px-4 py-3 text-sm space-y-1" style={{ background: 'var(--green-bg)' }}>
              <div className="flex justify-between">
                <span style={{ color: 'var(--pine)' }}>This invoice bills</span>
                <span className="font-semibold mono">{form.currency} {scheduleThisAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
              </div>
              <div className="flex justify-between">
                <span style={{ color: 'var(--pine)' }}>New Balance</span>
                <span className="font-semibold mono">{form.currency} {scheduleNewBalance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="pt-2">
              <label className={labelCls}>Line Items *</label>
              <div className="space-y-2">
                {items.map((row, i) => (
                  <div key={i} className="grid grid-cols-[1fr_72px_100px_90px_auto] gap-2 items-center">
                    <input
                      value={row.description}
                      onChange={(e) => updateItem(i, 'description', e.target.value)}
                      className={inputCls}
                      placeholder="e.g. 7 Day Serengeti & Ngorongoro Safari"
                    />
                    <input
                      type="number" min="0" step="1" value={row.quantity}
                      onChange={(e) => updateItem(i, 'quantity', e.target.value)}
                      className={inputCls} placeholder="Qty"
                    />
                    <input
                      type="number" min="0" step="0.01" value={row.unitPrice}
                      onChange={(e) => updateItem(i, 'unitPrice', e.target.value)}
                      className={inputCls} placeholder="Unit price"
                    />
                    <span className="text-sm text-gray-600 text-end whitespace-nowrap mono">
                      {form.currency} {lineTotal(row).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </span>
                    <button
                      type="button"
                      onClick={() => removeItem(i)}
                      disabled={items.length === 1}
                      className="p-2 text-gray-400 hover:text-red-500 disabled:opacity-30 disabled:hover:text-gray-400"
                      aria-label="Remove line item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={addItem}
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-secondary"
              >
                <Plus className="w-4 h-4" /> Add line item
              </button>
            </div>

            <div className="flex justify-end pt-2 border-t border-gray-100">
              <div className="w-full max-w-[220px] flex justify-between items-baseline rounded-lg px-4 py-3" style={{ background: 'var(--green-bg)' }}>
                <span className="text-xs font-bold uppercase tracking-wide" style={{ color: 'var(--pine)' }}>Total</span>
                <span className="text-lg font-black text-brand mono">
                  {form.currency} {total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
              </div>
            </div>

            <div className="pt-2 border-t border-gray-100">
              <label className={labelCls}>Deposit % (optional)</label>
              <p className="text-[11px] text-gray-400 mb-1.5 -mt-0.5">
                Leave blank to invoice the full amount above, as today. Set a percentage to bill only a deposit on this invoice — the line items above are the real trip cost the deposit is a share of, not what gets billed here. Issue a separate invoice for the remaining balance later, whenever it&apos;s actually due, via &quot;Create Linked Invoice&quot; on this invoice&apos;s page.
              </p>
              <div className="flex items-center gap-2">
                <input
                  type="number" min="1" max="99" step="1" value={form.depositPercent}
                  onChange={(e) => update('depositPercent', e.target.value)}
                  className={inputCls} style={{ maxWidth: 100 }} placeholder="e.g. 30"
                />
                <span className="text-sm text-gray-400">%</span>
                <div className="flex gap-1.5 ms-2">
                  {[25, 30, 50].map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => update('depositPercent', String(preset))}
                      className="px-2.5 py-1 text-xs font-semibold rounded-md border border-gray-200 text-gray-600 hover:border-brand hover:text-brand"
                    >
                      {preset}%
                    </button>
                  ))}
                </div>
              </div>

              {hasLegacyDepositPercent && (
                <div className="mt-3 rounded-lg px-4 py-3 text-sm space-y-1" style={{ background: 'var(--green-bg)' }}>
                  <div className="flex justify-between">
                    <span style={{ color: 'var(--pine)' }}>This invoice bills ({legacyDepositPercentNum}% deposit)</span>
                    <span className="font-semibold mono">{form.currency} {legacyDepositAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: 'var(--pine)' }}>Remaining balance (a later, separate invoice)</span>
                    <span className="font-semibold mono">{form.currency} {legacyRemainingBalance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                  </div>
                </div>
              )}
            </div>
          </>
        )}

        <div>
          <label className={labelCls}>Due Date</label>
          <input type="date" value={form.dueDate} onChange={(e) => update('dueDate', e.target.value)} className={inputCls} />
        </div>

        <div>
          <label className={labelCls}>Internal Notes</label>
          <textarea value={form.notes} onChange={(e) => update('notes', e.target.value)} className={inputCls} rows={3} />
        </div>
        {error && <p role="alert" className="text-red-500 text-xs">{error}</p>}
        <button type="submit" disabled={loading} className="btn-primary" style={{ width: '100%', justifyContent: 'center', opacity: loading ? 0.5 : 1 }}>
          {loading ? 'Creating…' : 'Create Invoice'}
        </button>
      </form>
    </div>
  )
}
