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

// Renders a URL this Worker can reach (typically one of its own admin pages,
// authenticated via the request's session cookie) into a PDF buffer via
// Cloudflare Browser Rendering. Confirmed working on this account via a
// direct Browser Rendering REST API spike (2026-08-28) before this was
// written — see the plan's Area 4 notes.
export async function renderPageToPdf(url: string, cookieHeader: string | null): Promise<ArrayBuffer> {
  const { env } = await getCloudflareContext({ async: true })
  if (!env.BROWSER) {
    throw new Error('No BROWSER (Browser Rendering) binding available')
  }
  const browser = await puppeteer.launch(env.BROWSER)
  try {
    const page = await browser.newPage()
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
    const pdf = await page.pdf({ format: 'A4', printBackground: true })
    return pdf.buffer.slice(pdf.byteOffset, pdf.byteOffset + pdf.byteLength) as ArrayBuffer
  } finally {
    await browser.close()
  }
}
