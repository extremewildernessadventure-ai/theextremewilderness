// Submits every URL in the live sitemap to the IndexNow API, which fans out
// to all participating search engines (Bing, Yandex, Seznam, Naver, etc — NOT
// Google, which does not support IndexNow as of this writing).
//
// Requires the key verification file to already exist at:
//   public/<INDEXNOW_KEY>.txt  (containing just the key)
// so keyLocation below resolves to a live, matching file.
//
// Usage: node scripts/submit-indexnow.mjs [--site=https://www.theextremewilderness.com]

const INDEXNOW_KEY = 'd8680f120ff94f73f0556379f0ed202c'

const args = Object.fromEntries(
  process.argv.slice(2).map((a) => {
    const [k, v] = a.replace(/^--/, '').split('=')
    return [k, v]
  })
)
const SITE = args.site ?? 'https://www.theextremewilderness.com'

async function main() {
  console.log(`Fetching sitemap from ${SITE}/sitemap.xml ...`)
  const sitemapRes = await fetch(`${SITE}/sitemap.xml`)
  if (!sitemapRes.ok) {
    throw new Error(`Failed to fetch sitemap: HTTP ${sitemapRes.status}`)
  }
  const xml = await sitemapRes.text()
  const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1])

  if (urls.length === 0) {
    throw new Error('No <loc> URLs found in sitemap — aborting.')
  }
  console.log(`Found ${urls.length} URLs in sitemap.`)

  const host = new URL(SITE).host
  const body = {
    host,
    key: INDEXNOW_KEY,
    keyLocation: `${SITE}/${INDEXNOW_KEY}.txt`,
    urlList: urls,
  }

  console.log(`Submitting ${urls.length} URLs to IndexNow (api.indexnow.org) ...`)
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(body),
  })

  const text = await res.text().catch(() => '')
  console.log(`IndexNow response: HTTP ${res.status}${text ? ` — ${text}` : ''}`)

  if (res.status === 200 || res.status === 202) {
    console.log('Success: URLs accepted by IndexNow.')
  } else if (res.status === 403) {
    console.error('Key validation failed — check that the key file is live at the keyLocation above.')
    process.exitCode = 1
  } else {
    console.error('IndexNow submission did not succeed — see status/response above.')
    process.exitCode = 1
  }
}

main().catch((err) => {
  console.error(err)
  process.exitCode = 1
})
