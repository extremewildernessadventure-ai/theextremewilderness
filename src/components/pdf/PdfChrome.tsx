import Image from 'next/image'

// Shared visual system for every generated PDF document (booking voucher,
// invoice, quote, payslip, and the public Kilimanjaro/itinerary guides) —
// used both by admin pages rendered through Cloudflare Browser Rendering
// (src/lib/browser.ts's renderPageToPdf, real headless-Chromium print) and
// by pages the visitor prints themselves via window.print(). Both paths go
// through the same real Chromium print engine, so the same CSS applies to
// both.
//
// Design language: a full-bleed photo cover with a gradient scrim and a
// gold accent line, dark brand-green header/footer bars with the brand name
// in small-caps gold-on-ink, gold section labels with a hairline rule
// beneath, "DAY N" pill badges for itinerary content, and a solid dark
// closing CTA page — adapted from a design system already proven on a
// different project of the business owner's (Bushland Safari), rebuilt
// here in this site's own pine-green/gold palette (--color-brand /
// --color-gold, see globals.css) and rendered as real HTML/CSS rather than
// the Node-only canvas-drawing library that project used, since this site's
// PDFs must render inside a Cloudflare Worker (see renderPageToPdf).

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

// `-webkit-print-color-adjust`/`print-color-adjust: exact` is what makes
// browser print (window.print(), used by the quote/payslip/trek-guide
// pages) actually paint background colors and images instead of silently
// stripping them — without it, Chromium's print defaults omit backgrounds
// unless the user manually enables "background graphics". Cloudflare
// Browser Rendering already gets this via page.pdf({printBackground:true}),
// but this covers both code paths from one shared stylesheet.
export function printCss(targetId: string): string {
  return `
    * { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    @media print {
      body * { visibility: hidden !important; }
      #${targetId}, #${targetId} * { visibility: visible !important; }
      #${targetId} {
        position: fixed;
        top: 0; left: 0;
        width: 100%;
        background: white;
      }
      @page { size: A4; margin: 16mm 14mm; }
      @page :first { margin: 0; }
      .pdf-page-break { break-after: page; page-break-after: always; }
      .pdf-page-break-before { break-before: page; page-break-before: always; }
      .no-break { page-break-inside: avoid; break-inside: avoid; }
    }
  `
}

// --- Cover page --------------------------------------------------------

export function PdfCover({
  image, imageAlt, eyebrow, title, subtitle, metaLeft, metaRight,
}: {
  image: string
  imageAlt: string
  eyebrow: string
  title: string
  subtitle?: string
  metaLeft?: string
  metaRight?: string
}) {
  return (
    <div className="pdf-page-break relative w-full" style={{ height: '297mm' }}>
      {/* eslint-disable-next-line @next/next/no-img-element -- deliberate:
          this only ever renders inside a Chromium print pipeline (Cloudflare
          Browser Rendering or the visitor's own print dialog), not a normal
          browsing session, so next/image's responsive-loading/optimization
          machinery is pure overhead here — a single eagerly-loaded, fixed-
          size full-bleed image is both simpler and more print-reliable. */}
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to bottom, transparent 30%, rgba(28,58,42,0.55) 60%, rgba(28,58,42,0.96) 100%)' }}
      />
      <div className="absolute top-0 left-0 right-0" style={{ height: 6, background: 'var(--color-gold)' }} />
      <div className="absolute top-10 left-12">
        <Image src="/EWA logo.webp" alt="EWA Safari Outfitters" width={100} height={50} className="object-contain brightness-0 invert" />
      </div>
      <div className="absolute bottom-14 left-12 right-12">
        <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: 'var(--color-gold)' }}>{eyebrow}</p>
        <h1 className="font-serif text-white leading-[1.05] mb-3" style={{ fontSize: 40, fontWeight: 600 }}>{title}</h1>
        {subtitle && <p className="text-white/85 text-base max-w-xl mb-8">{subtitle}</p>}
        <div className="flex items-end justify-between border-t border-white/25 pt-4">
          <p className="text-white/70 text-xs">{metaLeft}</p>
          <p className="text-white/90 text-xs font-bold uppercase tracking-wider">{metaRight ?? 'EWA Safari Outfitters'}</p>
        </div>
      </div>
    </div>
  )
}

// --- Interior running header/footer ------------------------------------

export function PdfRunningHeader({ documentType, documentNumber }: {
  documentType: string
  documentNumber?: string
}) {
  return (
    <div className="no-break flex items-center justify-between rounded px-5 py-3 mb-8" style={{ background: 'var(--color-brand)' }}>
      <p className="text-[10px] font-bold uppercase tracking-[0.15em]" style={{ color: 'var(--color-gold)' }}>EWA Safari Outfitters</p>
      <p className="text-[10px] font-semibold uppercase tracking-wider text-white/90">
        {documentType}{documentNumber ? ` · ${documentNumber}` : ''}
      </p>
    </div>
  )
}

export function PdfFooter() {
  return (
    <div className="border-t-2 pt-4 flex items-center justify-between no-break" style={{ borderColor: 'var(--color-brand)' }}>
      <div>
        <p className="text-sm font-black text-brand">EWA Safari Outfitters</p>
        <p className="text-xs text-gray-500">info@theextremewilderness.com · +255 (0) 747 999 070 · Arusha, Tanzania</p>
      </div>
      <p className="text-xs text-gray-400">© {new Date().getFullYear()} EWA Safari Outfitters</p>
    </div>
  )
}

// Legacy single-line header, kept for documents that don't use the cover +
// running-header pattern (e.g. a short single-page document like a
// payslip, where a full cover page would be overkill).
export function PdfHeader({ documentType, documentNumber, dateLabel }: {
  documentType: string
  documentNumber: string
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

// --- Section framing -----------------------------------------------------

export function PdfSectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3 no-break">
      <h2 className="text-[10px] font-black uppercase tracking-widest mb-2" style={{ color: 'var(--color-gold-label)' }}>{children}</h2>
      <div style={{ height: 1, background: '#E5E1D6' }} />
    </div>
  )
}

// A rounded "DAY N" pill beside a day's title — for itinerary-style
// documents (route-specific trek guides, package itinerary PDFs).
export function PdfDayBlock({ day, title, meta, dayLabel, children }: {
  day: number
  title: string
  meta?: string
  dayLabel?: string
  children?: React.ReactNode
}) {
  return (
    <div className="mb-6 no-break">
      <div className="flex items-start gap-3 mb-2">
        <div className="shrink-0 rounded flex items-center justify-center" style={{ background: 'var(--color-brand)', width: 52, height: 24 }}>
          <span className="text-[9px] font-black uppercase tracking-wider" style={{ color: 'var(--color-gold)' }}>{dayLabel ?? 'Day'} {day}</span>
        </div>
        <div className="flex-1">
          <p className="text-sm font-bold text-gray-900">{title}</p>
          {meta && <p className="text-xs mt-0.5" style={{ color: 'var(--color-gold-label)' }}>{meta}</p>}
        </div>
      </div>
      {children && <div className="ms-[64px] text-sm text-gray-700 leading-relaxed">{children}</div>}
    </div>
  )
}

// --- Closing CTA page ------------------------------------------------------

export function PdfClosingCta({ heading, body }: { heading: string; body?: string }) {
  return (
    <div className="rounded-xl p-8 text-center no-break" style={{ background: 'var(--color-brand)' }}>
      <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-3" style={{ color: 'var(--color-gold)' }}>{heading}</p>
      {body && <p className="text-white/85 text-sm mb-5 max-w-md mx-auto">{body}</p>}
      <p className="text-white text-sm font-semibold">
        +255 (0) 747 999 070 · info@theextremewilderness.com · theextremewilderness.com
      </p>
    </div>
  )
}
