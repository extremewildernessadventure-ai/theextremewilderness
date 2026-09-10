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
//
// Isolating the printable content used to be done here via
// `body * { visibility: hidden }` + `position: fixed` on the target — that
// was a real bug, not just an aesthetic choice: `position: fixed` removes
// an element from normal document flow, so it can't fragment across pages
// and contributes zero height to the document. Chromium's print pagination
// then had nothing to measure but the (hidden-but-still-occupying-space)
// site chrome around it, so anything past one page's worth of *chrome*
// height was simply never painted — on a genuinely multi-page document
// (a route guide, an itinerary) that meant everything past the cover
// silently vanished. Fixed by hiding the known chrome directly (see
// `print:hidden` on Navbar/Footer/WhatsAppButton/etc. in
// src/app/[locale]/layout.tsx, and the equivalent in the admin protected
// layout) instead of fighting it from here — once chrome is genuinely
// `display: none` at print time, the printable content needs no special
// positioning at all: it renders normally, in flow, and actually
// paginates. This function no longer takes a target id for that reason.
export function printCss(): string {
  return `
    * { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    @media print {
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

// ══════════════════════════════════════════════════════════════════════
// "Dark" document family — a second, later design language used by the
// redesigned Invoice and Booking Voucher (Claude Design export, editorial
// Cormorant Garamond/Lora system, single continuous dark-green page, no
// photo cover). Purely additive alongside everything above: quote and
// payslip haven't been redesigned yet and still depend on printCss/
// PdfCover/PdfHeader/PdfFooter/PdfSectionHeading/PdfClosingCta working
// exactly as today, so none of those are touched here. Every export below
// is prefixed PdfDark to keep the two families visually distinct in this
// file and at their call sites.
// ══════════════════════════════════════════════════════════════════════

// A full-bleed dark document has no photo cover, so there's no `:first`
// page to treat differently — every page (including any overflow page a
// long invoice/voucher spills onto) is edge-to-edge at zero margin.
// Deliberately NOT derived from printCss() — duplicated so printCss()'s
// literal output for quote/payslip can never be affected by a change here.
//
// Also resets `.ewa-admin .main`'s own padding/max-width for print. That
// class wraps every admin page's content (src/app/admin/(protected)/
// layout.tsx) and normally supplies the dashboard's content margins — but
// it was never reset for print, so it silently padded every printed admin
// document by its own 36px/40px/60px, invisibly on the old light-background
// PdfCover-based documents (near-white padding on a near-white page reads
// as nothing) but visibly on this dark full-bleed family, and pushed total
// content past one physical page, producing a spurious near-blank second
// page — same root-cause shape as the pb-16 bug already fixed on the
// public [locale] layout for the trekking/itinerary guides. Only applied
// when this function's own <style> is on the page (i.e. only for the two
// documents using this dark family), so quote/payslip's print output is
// untouched.
// A long invoice/voucher overflows onto page 2+, and CSS box padding on a
// single continuous flow div (see PdfDarkPage below) is not page-aware — it
// only appears once, at the very top and bottom of the *whole* flow, not
// re-inserted at each physical page boundary Chromium slices the box at.
// `@page margin` is the one thing Chromium genuinely re-applies on every
// page, so — unlike the original `margin: 0` full-bleed approach — the
// per-page inset now comes from here instead of from PdfDarkPage's own
// padding (moved to the .pdf-dark-page class below, base rule for on-screen
// preview, print rule zeroed out so it isn't double-applied on page 1 on
// top of this @page margin). Same 0.85in/0.9in values PdfDarkPage always
// used, so page 1 looks identical to before.
//
// Because @page no longer carves the page down to zero margin, "full
// bleed" (the background reaching every physical edge on every page,
// including short pages 1 and long overflow pages 2+) needs to come from
// somewhere independent of both the flow div's height and the page margin.
// Two mechanisms, covering two different regions of the page, together:
//
// - `@page { background }` paints the full physical page, margin box
//   included — confirmed live (not just per spec) via window.print() and
//   via Puppeteer/CDP's printToPDF with preferCSSPageSize (see
//   renderPageToPdf in src/lib/browser.ts). But it's bound to the flowing
//   content box's own rendered extent on the *last* fragment specifically:
//   if real content ends well before the physical bottom of that final
//   page, the painted region stops there too instead of continuing to the
//   page edge, leaving a pale gap below the footer — confirmed live by
//   swapping the content div's own background to a contrasting color and
//   inspecting real rendered PDFs pixel-by-pixel. That's a genuine
//   Chromium page-sizing behavior on the final fragment, not a CSS bug.
// - `.pdf-dark-backdrop`, a `position: fixed` layer, is what actually
//   closes that gap. Fixed-position elements in CSS Paged Media are
//   conceptually repeated onto every generated page regardless of how much
//   flowing content that page holds — confirmed live via real multi-page
//   output — which is exactly the property a JS-measured "filler" element
//   can't reliably match: this project tried computing a trailing filler's
//   height at runtime first (round the flow's total height up to the next
//   page boundary), and it doesn't work in general once any content uses
//   break-avoidance (`.no-break` below, or a table row Chromium refuses to
//   split) — avoiding a break can shift a whole block onto the next page,
//   leaving irregular slack at a page boundary that a simple
//   total-height-modulo-page-height calculation can't see coming, since
//   that information only exists inside Chromium's real pagination engine,
//   never exposed to page JS. A `position: fixed` layer sidesteps needing
//   to predict any of that: it doesn't care how tall the content is or
//   where Chromium chose to break it, it simply repaints on every page.
//   Its own containing block, once @page margin is non-zero, is the page's
//   *printable* area (not the full physical page) — confirmed live: an
//   early attempt at using this as the *only* full-bleed mechanism showed
//   a white margin border on every page, page 1 included, since the layer
//   couldn't reach past that boundary (negative insets sized to escape it
//   made no difference — a hard clip, not a sizing quirk to compensate
//   for). That's not a problem here: `@page background` above already owns
//   the margin box, so `inset: 0` landing exactly on the printable-area
//   edges is precisely the coverage still missing.
export function printCssFullBleed(): string {
  return `
    * { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    .pdf-dark-page { padding: 0.85in 0.9in; }
    .pdf-dark-backdrop { display: none; }
    @media print {
      @page { size: A4; margin: 0.85in 0.9in; background: #1C3A2A; }
      .pdf-page-break { break-after: page; page-break-after: always; }
      .pdf-page-break-before { break-before: page; page-break-before: always; }
      .no-break { page-break-inside: avoid; break-inside: avoid; }
      .ewa-admin .main { padding: 0; max-width: none; margin: 0; }
      .pdf-dark-page { padding: 0; }
      .pdf-dark-backdrop {
        display: block;
        position: fixed;
        inset: 0;
        background: #1C3A2A;
        z-index: -1;
      }
    }
  `
}

// The two typefaces the new design system specifies — loaded per-page via
// a scoped Google Fonts <link> tag (see the invoice/voucher pages), same
// proven approach the trekking guide already uses through this same
// Browser Rendering pipeline. Exported so every PdfDark* component
// references the same two constants rather than restating font stacks.
export const PDF_DARK_HEADING_FONT = "'Cormorant Garamond', Georgia, serif"
export const PDF_DARK_BODY_FONT = "'Lora', Georgia, serif"
export const PDF_DARK_HEADING_WEIGHT = 600

// Outer page wrapper. `min-height` (not `height` + `overflow:hidden`) is
// the overflow-safety decision: a short document still visually fills one
// full A4 page like the design, but a real invoice with many line items or
// a voucher with several bookings just flows onto page 2+ in the same dark
// background via Chromium's normal print pagination, instead of silently
// clipping — this project already hit and fixed exactly that failure mode
// on the Kilimanjaro guide (fixed-height overflow:hidden boxes), not
// repeating it here.
//
// The `calc(297mm - 1.7in)` (rather than a flat 297mm) accounts for the
// 0.85in top+bottom @page margin printCssFullBleed() now carves out
// separately (see that function's own comment) — asking this div for a
// full 297mm of height *on top of* 1.7in of page margin would demand more
// than one physical page's worth of space even for a short, single-page
// document, reproducing the exact "spurious near-blank second page" shape
// already described (and fixed for a different cause, the .main padding
// below) in this file.
//
// This div's own `background` stays alongside printCssFullBleed()'s
// `@page background` (not a replacement for it) — the @page rule paints
// the full physical page including the margin box, this div's own
// background paints exactly where its (padding-less-in-print) content
// area sits; both are the same color, so on screen (where @page doesn't
// apply at all) this div's background is what actually renders, and in
// print they simply overlap losslessly rather than one substituting for
// the other.
export function PdfDarkPage({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex flex-col pdf-dark-page"
      style={{
        minHeight: 'calc(297mm - 1.7in)',
        background: '#1C3A2A',
        color: '#f3f2f2',
        boxSizing: 'border-box',
        fontFamily: PDF_DARK_BODY_FONT,
      }}
    >
      {/* Repeats on every physical page independent of this div's own
          height — see printCssFullBleed()'s own comment for why this,
          alongside @page background, is what actually closes the
          last-page gap. aria-hidden since it's pure print-layout plumbing,
          never content; position:fixed takes it out of flow either way. */}
      <div className="pdf-dark-backdrop" aria-hidden="true" />
      {children}
    </div>
  )
}

export function PdfDarkHeader({ documentLabel, documentNumber, titleSize }: {
  documentLabel: string
  documentNumber?: string
  titleSize: 'display' | 'label'
}) {
  return (
    <div
      className="no-break flex items-start justify-between pb-4"
      style={{ borderBottom: '1px solid rgba(255,255,255,0.18)' }}
    >
      <div className="flex items-center gap-3">
        {/* Unlike PdfCover's use of this same asset (forced white via
            brightness-0 invert, needed there to stay legible over a busy
            photo), this design's own reference renders the logo in its
            native gold — no filter, matching the source .dc.html's own
            assets/ewa-logo.png (confirmed pixel-identical in color to this
            site's /EWA logo.webp, both already gold-on-transparent). */}
        <Image src="/EWA logo.webp" alt="EWA Safari Outfitters" width={100} height={50} style={{ height: 52, width: 'auto' }} className="object-contain" />
        <div style={{ fontFamily: PDF_DARK_HEADING_FONT, fontWeight: PDF_DARK_HEADING_WEIGHT, fontSize: 15, letterSpacing: '0.06em' }}>
          EWA SAFARI OUTFITTERS
        </div>
      </div>
      <div className="text-end">
        {titleSize === 'display' ? (
          <div style={{ fontFamily: PDF_DARK_HEADING_FONT, fontWeight: 400, fontSize: 34, letterSpacing: '0.14em' }}>{documentLabel}</div>
        ) : (
          <div style={{ fontFamily: PDF_DARK_HEADING_FONT, fontWeight: PDF_DARK_HEADING_WEIGHT, fontSize: 15, letterSpacing: '0.1em' }}>{documentLabel}</div>
        )}
        {documentNumber && (
          <div style={{ fontSize: 13, color: '#c9d6cc', marginTop: 2, fontVariantNumeric: 'tabular-nums' }}>{documentNumber}</div>
        )}
      </div>
    </div>
  )
}

export function PdfDarkLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-2" style={{ fontSize: 11, letterSpacing: '0.1em', color: '#c9d6cc' }}>
      {children}
    </div>
  )
}

export function PdfDarkDivider() {
  return <div style={{ borderTop: '1px solid rgba(255,255,255,0.18)' }} />
}

const DARK_TAG_TONES = {
  neutral: { border: 'rgba(255,255,255,0.4)', color: '#dfe6e0' },
  red: { border: '#e08a72', color: '#f3b8a5' },
  amber: { border: 'var(--color-gold)', color: 'var(--color-gold)' },
  green: { border: '#7bbf9a', color: '#a9dcc0' },
} as const

// Outlined pill — color as stroke/text only, never a filled background,
// per the new design system's own direction. `tone` keeps status
// distinguishable at a glance (kept, rather than collapsed to one neutral
// tone, per an explicit product decision — see the redesign plan).
export function PdfDarkTag({ tone = 'neutral', children }: { tone?: keyof typeof DARK_TAG_TONES; children: React.ReactNode }) {
  const t = DARK_TAG_TONES[tone]
  return (
    <span
      className="inline-block rounded-full no-break"
      style={{ fontSize: 11, letterSpacing: '0.08em', border: `1px solid ${t.border}`, color: t.color, padding: '4px 12px' }}
    >
      {children}
    </span>
  )
}

export function PdfDarkCard({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="no-break rounded-lg"
      style={{ padding: 20, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.22)' }}
    >
      {children}
    </div>
  )
}

// Replaces the PdfClosingCta + PdfFooter pair for this document family with
// one plain centered closing block — the whole page is already dark, so a
// second filled card on top of it would be redundant. Meant to be the last
// child of a PdfDarkPage's flex column so `margin-top: auto` pins it to the
// physical page bottom when content is short; on an overflow document it
// just flows after the last section instead, which is fine.
export function PdfDarkFooter({ heading, body }: { heading: string; body: string }) {
  return (
    <div
      className="no-break text-center"
      style={{ marginTop: 'auto', paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.18)' }}
    >
      <div style={{ fontSize: 11, letterSpacing: '0.1em', color: '#c9d6cc', marginBottom: 8 }}>{heading}</div>
      <div style={{ fontSize: 13, color: '#dfe6e0', marginBottom: 12 }}>{body}</div>
      {/* The design's own stylesheet sets every link gold + underlined
          (a{color:#D4A853;text-decoration:underline}) — email/website are
          real links here, matching that; the phone number isn't a link so
          stays the default body color. */}
      <div style={{ fontSize: 12.5, color: '#dfe6e0' }}>
        +255 (0) 747 999 070 ·{' '}
        <a href="mailto:info@theextremewilderness.com" style={{ color: 'var(--color-gold)', textDecoration: 'underline' }}>info@theextremewilderness.com</a>
        {' '}·{' '}
        <a href="https://theextremewilderness.com" style={{ color: 'var(--color-gold)', textDecoration: 'underline' }}>theextremewilderness.com</a>
      </div>
      <div style={{ fontSize: 11, color: '#9fb0a4', marginTop: 16 }}>
        EWA Safari Outfitters · Arusha, Tanzania · © {new Date().getFullYear()} EWA Safari Outfitters
      </div>
    </div>
  )
}
