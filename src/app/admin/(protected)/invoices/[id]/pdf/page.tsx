import { notFound } from 'next/navigation'
import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'
import { getDb, type Invoice, type InvoiceItem, type InvoicePayment, type InvoicePesapalOrder } from '@/lib/db'
import { BANK_DETAILS } from '@/lib/bankDetails'
import { PAYMENT_METHOD_LABELS } from '@/lib/invoices'
import {
  printCssFullBleed, sanitizeForPdf,
  PdfDarkPage, PdfDarkHeader, PdfDarkLabel, PdfDarkDivider, PdfDarkTag, PdfDarkFooter,
  PDF_DARK_HEADING_FONT, PDF_DARK_HEADING_WEIGHT,
} from '@/components/pdf/PdfChrome'
import PrintButton from './PrintButton'

// Kept dynamic deliberately: the printed document shows today's date
// (new Date() below), which would otherwise freeze at build time.
export const dynamic = 'force-dynamic'

const STATUS_LABELS: Record<Invoice['status'], string> = {
  unpaid: 'Unpaid',
  partial: 'Partially Paid',
  paid: 'Paid',
  cancelled: 'Cancelled',
}

// Colored outline/text per status (never a filled background, per the new
// design system's "color as stroke" direction) — kept distinguishable at a
// glance rather than collapsed to one neutral tone, a deliberate product
// decision (see the redesign plan).
const STATUS_TONES: Record<Invoice['status'], 'red' | 'amber' | 'green' | 'neutral'> = {
  unpaid: 'red',
  partial: 'amber',
  paid: 'green',
  cancelled: 'neutral',
}

type Props = { params: Promise<{ id: string }> }

export default async function InvoicePdfPage({ params }: Props) {
  const { id } = await params
  const db = await getDb()
  const invoice = await db.prepare('SELECT * FROM invoices WHERE id = ?').bind(id).first<Invoice>()

  if (!invoice) notFound()

  const [{ results: items }, latestOrder, latestPayment] = await Promise.all([
    db.prepare('SELECT * FROM invoice_items WHERE invoice_id = ? ORDER BY sort_order').bind(id).all<InvoiceItem>(),
    db.prepare('SELECT * FROM invoice_pesapal_orders WHERE invoice_id = ? ORDER BY created_at DESC LIMIT 1').bind(id).first<InvoicePesapalOrder>(),
    db.prepare('SELECT * FROM invoice_payments WHERE invoice_id = ? ORDER BY confirmed_at DESC LIMIT 1').bind(id).first<InvoicePayment>(),
  ])
  const balanceDue = Math.max(0, invoice.amount - invoice.amount_paid)
  const clientName = sanitizeForPdf(invoice.client_name)

  return (
    <>
      <style>{printCssFullBleed()}</style>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600&family=Lora:wght@400;600&display=swap"
        rel="stylesheet"
      />

      {/* Screen-only header bar */}
      <div className="max-w-3xl mx-auto px-4 py-6 print:hidden flex items-center justify-between border-b border-gray-100">
        <div>
          <Link href={`/admin/invoices/${invoice.id}`} className="detail-back">
            ← Back to Invoice
          </Link>
          <h1 className="text-xl font-bold text-brand">{invoice.invoice_number}</h1>
        </div>
        <PrintButton />
      </div>

      {/* ── Printable document ─────────────────────────────────── */}
      <div id="pdf-invoice" className="max-w-3xl mx-auto print:max-w-none">
        <PdfDarkPage>
          <PdfDarkHeader documentLabel="INVOICE" documentNumber={invoice.invoice_number} titleSize="display" />

          {/* ── Bill to / Status ── */}
          <div className="flex items-start justify-between no-break" style={{ marginTop: 24 }}>
            <div>
              <PdfDarkLabel>Bill To</PdfDarkLabel>
              <div style={{ fontFamily: PDF_DARK_HEADING_FONT, fontWeight: PDF_DARK_HEADING_WEIGHT, fontSize: 20 }}>{clientName}</div>
              {invoice.client_email && <div style={{ fontSize: 13.5, color: '#dfe6e0', marginTop: 2 }}>{invoice.client_email}</div>}
              {invoice.booking_reference && (
                <div style={{ fontSize: 13.5, color: '#dfe6e0', marginTop: 2 }}>Booking Ref: {sanitizeForPdf(invoice.booking_reference)}</div>
              )}
            </div>
            <div className="text-end">
              <PdfDarkTag tone={STATUS_TONES[invoice.status]}>{STATUS_LABELS[invoice.status].toUpperCase()}</PdfDarkTag>
              {invoice.due_date && (
                <div style={{ fontSize: 13, color: '#dfe6e0', marginTop: 8 }}>
                  Due <strong>{new Date(invoice.due_date).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</strong>
                </div>
              )}
            </div>
          </div>

          {/* ── Line items ──
              Built as CSS-grid rows, not a native <table> — this admin
              layout's own body-level styling (.ewa-admin thead th/tbody td
              in admin-theme.css) reaches any real <table>/<th>/<td> element
              regardless of inline styles that don't happen to override
              every property those rules set (background, padding, weight,
              case, tracking all bled through in testing). Grid sidesteps
              that entire class of bug rather than fighting it property by
              property. */}
          <div className="no-break" style={{ marginTop: 32, fontSize: 13.5 }}>
            <div className="grid" style={{ gridTemplateColumns: '1fr 60px 100px 120px', columnGap: 16 }}>
              <div style={{ color: '#c9d6cc', paddingBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.18)' }}>Description</div>
              <div className="text-end" style={{ color: '#c9d6cc', paddingBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.18)' }}>Qty</div>
              <div className="text-end" style={{ color: '#c9d6cc', paddingBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.18)' }}>Unit Price</div>
              <div className="text-end" style={{ color: '#c9d6cc', paddingBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.18)' }}>Total</div>

              {items.length > 0 ? (
                items.map((item) => (
                  <div key={item.id} className="contents">
                    <div className="whitespace-pre-wrap" style={{ padding: '14px 0', borderBottom: '1px solid rgba(255,255,255,0.18)' }}>{sanitizeForPdf(item.description)}</div>
                    <div className="text-end whitespace-nowrap" style={{ padding: '14px 0', borderBottom: '1px solid rgba(255,255,255,0.18)', fontVariantNumeric: 'tabular-nums' }}>{item.quantity}</div>
                    <div className="text-end whitespace-nowrap" style={{ padding: '14px 0', borderBottom: '1px solid rgba(255,255,255,0.18)', fontVariantNumeric: 'tabular-nums' }}>{item.unit_price.toLocaleString()}</div>
                    <div className="text-end whitespace-nowrap" style={{ padding: '14px 0', borderBottom: '1px solid rgba(255,255,255,0.18)', fontVariantNumeric: 'tabular-nums' }}>
                      {invoice.currency} {(item.quantity * item.unit_price).toLocaleString()}
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center" style={{ gridColumn: '1 / -1', padding: '14px 0', color: '#9fb0a4', borderBottom: '1px solid rgba(255,255,255,0.18)' }}>No line items</div>
              )}
            </div>

            <div className="flex justify-end" style={{ marginTop: 16 }}>
              <div style={{ width: 280 }}>
                <div className="flex justify-between items-baseline" style={{ padding: '8px 0', fontSize: 13.5 }}>
                  <span style={{ color: '#dfe6e0' }}>Total Due</span>
                  <span style={{ fontVariantNumeric: 'tabular-nums' }}>{invoice.currency} {invoice.amount.toLocaleString()}</span>
                </div>
                {invoice.amount_paid > 0 && (
                  <>
                    <div className="flex justify-between items-baseline" style={{ padding: '8px 0', fontSize: 13.5, borderTop: '1px solid rgba(255,255,255,0.18)' }}>
                      <span style={{ color: '#dfe6e0' }}>Amount Paid</span>
                      <span style={{ fontVariantNumeric: 'tabular-nums' }}>{invoice.currency} {invoice.amount_paid.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-baseline" style={{ padding: '12px 0 4px', fontSize: 16, borderTop: '1px solid rgba(255,255,255,0.35)', marginTop: 2 }}>
                      <span style={{ fontFamily: PDF_DARK_HEADING_FONT, fontWeight: PDF_DARK_HEADING_WEIGHT }}>Balance Due</span>
                      <span style={{ fontFamily: PDF_DARK_HEADING_FONT, fontWeight: PDF_DARK_HEADING_WEIGHT, color: 'var(--color-gold)', fontVariantNumeric: 'tabular-nums' }}>
                        {invoice.currency} {balanceDue.toLocaleString()}
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* ── Payment instructions / paid receipt ── */}
          {invoice.status === 'paid' ? (
            <div className="no-break" style={{ marginTop: 32 }}>
              <PdfDarkDivider />
              <div className="flex items-start gap-3" style={{ paddingTop: 24 }}>
                <CheckCircle2 className="flex-shrink-0" style={{ width: 20, height: 20, marginTop: 2, color: 'var(--color-gold)' }} />
                <div>
                  <PdfDarkLabel>Paid in Full</PdfDarkLabel>
                  {latestPayment ? (
                    <p style={{ fontSize: 13.5, color: '#dfe6e0', lineHeight: 1.6 }}>
                      Paid via {PAYMENT_METHOD_LABELS[latestPayment.method]} on{' '}
                      {new Date(latestPayment.confirmed_at).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}.
                      Thank you for your business!
                    </p>
                  ) : (
                    <p style={{ fontSize: 13.5, color: '#dfe6e0', lineHeight: 1.6 }}>This invoice has been paid in full. Thank you for your business!</p>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="no-break" style={{ marginTop: 32 }}>
              <PdfDarkDivider />
              <div style={{ paddingTop: 24 }}>
                <PdfDarkLabel>How to Pay</PdfDarkLabel>

                {latestOrder && (
                  <div style={{ marginBottom: 16 }}>
                    <div style={{ fontFamily: PDF_DARK_HEADING_FONT, fontWeight: PDF_DARK_HEADING_WEIGHT, fontSize: 15, marginBottom: 4 }}>Pay Online</div>
                    <p style={{ fontSize: 13, color: '#dfe6e0', wordBreak: 'break-all' }}>{latestOrder.redirect_url}</p>
                  </div>
                )}

                <div style={{ fontFamily: PDF_DARK_HEADING_FONT, fontWeight: PDF_DARK_HEADING_WEIGHT, fontSize: 15, marginBottom: 8 }}>Bank Transfer</div>
                <p style={{ fontSize: 13, color: '#dfe6e0', marginBottom: 12 }}>
                  Please reference invoice <strong>{invoice.invoice_number}</strong> when paying.
                </p>
                <div className="grid grid-cols-2" style={{ fontSize: 13, gap: '8px 24px' }}>
                  <div><span style={{ color: '#c9d6cc' }}>Beneficiary</span><br />{BANK_DETAILS.beneficiaryName}</div>
                  <div><span style={{ color: '#c9d6cc' }}>Account</span><br /><span style={{ fontVariantNumeric: 'tabular-nums' }}>{BANK_DETAILS.beneficiaryAccount}</span></div>
                  <div><span style={{ color: '#c9d6cc' }}>SWIFT</span><br />{BANK_DETAILS.swiftCode}</div>
                  <div><span style={{ color: '#c9d6cc' }}>Bank</span><br />{BANK_DETAILS.bankName}</div>
                  <div className="col-span-2"><span style={{ color: '#c9d6cc' }}>Address</span><br />{BANK_DETAILS.bankAddress}</div>
                  <div className="col-span-2">
                    <span style={{ color: '#c9d6cc' }}>Correspondent Bank</span><br />
                    {BANK_DETAILS.correspondentBank.name} · SWIFT {BANK_DETAILS.correspondentBank.swift} · Acc {BANK_DETAILS.correspondentBank.account}
                  </div>
                </div>
              </div>
            </div>
          )}

          <PdfDarkFooter
            heading="Questions About This Invoice?"
            body="Reply to the email this was sent with, or reach out any time — we're happy to help."
          />
        </PdfDarkPage>
      </div>
    </>
  )
}
