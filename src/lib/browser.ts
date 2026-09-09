import { getCloudflareContext } from '@opennextjs/cloudflare'
import puppeteer, { type BrowserWorker } from '@cloudflare/puppeteer'

// Unlike @cloudflare/workers-types (see r2.ts/db.ts's identical note),
// @cloudflare/puppeteer's own types don't declare/import that package —
// BrowserWorker is just `{ fetch: typeof fetch }`, confirmed by reading
// node_modules/@cloudflare/puppeteer/lib/types.d.ts before adding this
// dependency. Safe to import directly, no hand-rolled type needed here.
declare global {
  interface CloudflareEnv {
    BROWSER?: BrowserWorker
  }
}

export type PdfPageFormat = 'A4' | 'Letter'

// CSS pixels at 96/inch — the standard reference used throughout this file's
// print pipeline (matches how browsers report inches -> px for print/screen
// alike). A4: 210mm x 297mm. Letter: 8.5in x 11in.
const VIEWPORT_BY_FORMAT: Record<PdfPageFormat, { width: number; height: number }> = {
  A4: { width: 794, height: 1123 },
  Letter: { width: 816, height: 1056 },
}

// Renders a URL this Worker can reach (typically one of its own admin pages,
// authenticated via the request's session cookie) into a PDF buffer via
// Cloudflare Browser Rendering. Confirmed working on this account via a
// direct Browser Rendering REST API spike (2026-08-28) before this was
// written — see the plan's Area 4 notes.
export async function renderPageToPdf(
  url: string,
  cookieHeader: string | null,
  format: PdfPageFormat = 'A4',
  // Off by default: CDP's printToPDF ignores the page's own CSS `@page`
  // margin unless this is true, using a flat (Puppeteer-option-driven,
  // defaulting to 0 here since we never pass `margin`) margin instead — a
  // raw post-render crop, not a real layout pass, so the browser never
  // reflows content to fit whatever margin ends up applied. That's exactly
  // why it's safe as the always-off default: every existing caller
  // (src/lib/publicGuides.ts, the trekking/family-itinerary guides) already
  // depends on today's flat-0-margin behavior and must keep working
  // unchanged. The dark voucher/invoice family opts in explicitly (see
  // their route.ts call sites) because printCssFullBleed()'s @page margin
  // only takes effect here, in the server-rendered PDF, when this is true —
  // true makes CDP do a genuine print-media layout pass honoring that CSS
  // margin (reflowing content to fit, like window.print() already does),
  // avoiding the right-edge-clipping risk a raw crop would otherwise risk.
  preferCSSPageSize = false
): Promise<ArrayBuffer> {
  const { env } = await getCloudflareContext({ async: true })
  if (!env.BROWSER) {
    throw new Error('No BROWSER (Browser Rendering) binding available')
  }
  const browser = await puppeteer.launch(env.BROWSER)
  try {
    const page = await browser.newPage()
    // Matches the target page format at 96 CSS px/inch exactly. Without
    // this, Puppeteer lays the page out at its default (much wider)
    // viewport before print conversion — Chromium's print pipeline reflows
    // plain text to fit the page, but explicit-width layouts (tables,
    // grids) keep their screen-computed track sizes, so content wider than
    // the printable area gets silently clipped on the right rather than
    // shrinking to fit. Confirmed live: routes tables and multi-column
    // sections were cut off mid-word. Setting this before navigation so
    // the very first layout pass already uses the real print width —
    // per-format, since a document designed at Letter width (816px) laid
    // out in an A4-width (794px) viewport would reintroduce the same bug.
    await page.setViewport(VIEWPORT_BY_FORMAT[format])
    // Every call here is this Worker rendering its own site for an internal
    // purpose (the requested locale is already baked into `url`) — never a
    // real visitor whose geography should be guessed. Without this,
    // src/middleware.ts's geo-redirect sees an unauthenticated, non-bot
    // headless session hitting an unprefixed (English) URL and 302s it
    // based on Browser Rendering's own egress-IP country instead of the
    // locale we actually asked for (confirmed live: most Latin-American
    // country codes land on 'es', silently swapping English PDFs for
    // Spanish ones). `geo-locale-decided` is the same opt-out cookie the
    // middleware itself sets after a real visitor's first redirect.
    const geoBypassCookie = 'geo-locale-decided=1'
    await page.setExtraHTTPHeaders({
      Cookie: cookieHeader ? `${cookieHeader}; ${geoBypassCookie}` : geoBypassCookie,
    })
    // 'load' (not 'networkidle0'): the voucher page has no ongoing
    // client-side polling, and 'networkidle0' never resolves against a
    // Next.js dev server specifically, since its HMR WebSocket never goes
    // idle — 'load' (waits for the load event, i.e. the page and its
    // images) is both immune to that and the more appropriate choice for a
    // static server-rendered page in production too.
    await page.goto(url, { waitUntil: 'load', timeout: 45000 })
    const pdf = await page.pdf({ format, printBackground: true, preferCSSPageSize })
    return pdf.buffer.slice(pdf.byteOffset, pdf.byteOffset + pdf.byteLength) as ArrayBuffer
  } finally {
    await browser.close()
  }
}
