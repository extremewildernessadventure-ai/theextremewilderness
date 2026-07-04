import { chromium } from '@playwright/test'
import lighthouse from 'lighthouse'
import { writeFile, mkdir } from 'fs/promises'

// localePrefix is 'as-needed' (src/i18n/routing.ts), so the default locale
// ('en') is served un-prefixed. Auditing the /en/* form 307-redirects to
// these bare paths, adding a false ~600ms redirect penalty to every score.
const PAGES = [
  { name: 'Home',         url: 'http://localhost:3000/' },
  { name: 'Safaris',      url: 'http://localhost:3000/safaris' },
  { name: 'Destinations', url: 'http://localhost:3000/destinations' },
  { name: 'Trekking',     url: 'http://localhost:3000/trekking' },
  { name: 'Plan',         url: 'http://localhost:3000/plan' },
]

const [, , filterArg, runsArg] = process.argv
const pagesToAudit = filterArg
  ? PAGES.filter(p => p.name.toLowerCase() === filterArg.toLowerCase())
  : PAGES
const runs = Number(runsArg) > 0 ? Number(runsArg) : 1

if (filterArg && pagesToAudit.length === 0) {
  console.error(`No page named "${filterArg}" found. Available: ${PAGES.map(p => p.name).join(', ')}`)
  process.exit(1)
}

function median(nums) {
  const sorted = [...nums].sort((a, b) => a - b)
  const mid = Math.floor(sorted.length / 2)
  return sorted.length % 2 ? sorted[mid] : Math.round((sorted[mid - 1] + sorted[mid]) / 2)
}

await mkdir('lighthouse-reports', { recursive: true })
const results = []

for (const { name, url } of pagesToAudit) {
  const runResults = []

  for (let run = 1; run <= runs; run++) {
    console.log(`\nAuditing ${name} — ${url} ... (run ${run}/${runs})`)

    const browser = await chromium.launch({
      args: ['--remote-debugging-port=9222', '--no-sandbox'],
    })

    try {
      const runnerResult = await lighthouse(url, {
        port: 9222,
        output: ['html', 'json'],
        onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
        logLevel: 'error',
      })

      const { lhr, report } = runnerResult
      await writeFile(`lighthouse-reports/${name.toLowerCase()}.html`, report[0])
      await writeFile(`lighthouse-reports/${name.toLowerCase()}.json`, report[1])

      const s = lhr.categories
      const row = {
        page: name,
        run,
        perf: Math.round(s.performance.score * 100),
        a11y: Math.round(s.accessibility.score * 100),
        bp:   Math.round(s['best-practices'].score * 100),
        seo:  Math.round(s.seo.score * 100),
      }
      runResults.push(row)
      console.log(`  Performance:    ${row.perf}`)
      console.log(`  Accessibility:  ${row.a11y}`)
      console.log(`  Best Practices: ${row.bp}`)
      console.log(`  SEO:            ${row.seo}`)
    } finally {
      await browser.close()
    }
  }

  results.push(...runResults)

  if (runs > 1) {
    const medianRow = {
      page: `${name} (median)`,
      run: '—',
      perf: median(runResults.map(r => r.perf)),
      a11y: median(runResults.map(r => r.a11y)),
      bp:   median(runResults.map(r => r.bp)),
      seo:  median(runResults.map(r => r.seo)),
    }
    results.push(medianRow)
  }
}

console.log('\n════════════════ SUMMARY ════════════════')
console.table(results)
console.log('\nHTML/JSON reports saved to lighthouse-reports/ (last run per page)')
