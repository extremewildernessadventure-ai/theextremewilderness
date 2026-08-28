import Image from 'next/image'

// The bold-weight font Chromium's headless print-to-PDF falls back to in
// Cloudflare Browser Rendering's sandbox doesn't have full glyph coverage —
// confirmed live: an em dash in bold text rendered as "�" while the same
// character in regular weight, and other multi-byte Unicode (→, ·)
// elsewhere on the page, rendered fine. Since this only shows up on
// free-typed staff input (client names, lodge names, special requests —
// never the template's own copy), normalize the handful of punctuation
// marks people commonly paste in (from Word/Docs autocorrect) rather than
// chase the exact font-fallback root cause. Apply to every free-text field
// interpolated into a PDF document, not just the voucher.
export function sanitizeForPdf(text: string): string {
  return text
    .replace(/[—–]/g, '-') // em dash, en dash -> hyphen
    .replace(/[‘’]/g, "'") // smart single quotes
    .replace(/[“”]/g, '"') // smart double quotes
    .replace(/…/g, '...') // ellipsis
}

// Shared chrome for every printable/PDF-able admin document (invoices,
// quotes, payslips, booking vouchers) — extracted from the original
// invoices/[id]/pdf/page.tsx so new document types (starting with the
// booking voucher) reuse the exact same header/footer/print-CSS instead of
// duplicating them. Pure extraction: the invoice PDF page's rendered output
// is unchanged after switching to these exports.

export function printCss(targetId: string): string {
  return `
    @media print {
      body * { visibility: hidden !important; }
      #${targetId}, #${targetId} * { visibility: visible !important; }
      #${targetId} {
        position: fixed;
        top: 0; left: 0;
        width: 100%;
        background: white;
        padding: 20px 28px;
      }
      @page { size: A4; margin: 14mm 12mm; }
      .no-break { page-break-inside: avoid; }
    }
  `
}

export function PdfHeader({ documentType, documentNumber, dateLabel }: {
  documentType: string
  documentNumber: string
  // Pre-formatted date string (e.g. "27 August 2026") — callers format with
  // their own locale/date-field conventions rather than this component
  // assuming one date source.
  dateLabel?: string
}) {
  return (
    <div className="flex items-start justify-between pb-5 mb-6 border-b-[3px] border-brand no-break">
      <div className="flex items-center gap-3">
        <Image src="/EWA logo.webp" alt="EWA Safari Outfitters" width={64} height={32} className="object-contain" />
        <div>
          <p className="text-[10px] font-black uppercase tracking-widest text-gold-label mb-0.5">
            EWA Safari Outfitters
          </p>
          <p className="text-xs text-gray-500">Arusha, Tanzania</p>
        </div>
      </div>
      <div className="text-end">
        <h1 className="text-2xl font-black text-brand leading-tight">{documentType}</h1>
        <p className="text-sm text-gray-700 font-semibold mt-1">{documentNumber}</p>
        {dateLabel && <p className="text-xs text-gray-400 mt-0.5">{dateLabel}</p>}
      </div>
    </div>
  )
}

export function PdfFooter() {
  return (
    <div className="border-t-2 border-brand pt-4 flex items-center justify-between no-break">
      <div>
        <p className="text-sm font-black text-brand">EWA Safari Outfitters</p>
        <p className="text-xs text-gray-500">info@theextremewilderness.com · +255 (0) 747 999 070 · Arusha, Tanzania</p>
      </div>
      <p className="text-xs text-gray-400">© {new Date().getFullYear()} EWA Safari Outfitters</p>
    </div>
  )
}
