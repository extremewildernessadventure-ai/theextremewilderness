import { chromium } from '@playwright/test'
import lighthouse from 'lighthouse'
import { writeFile, mkdir } from 'fs/promises'

const PAGES = [
  { name: 'Home',         url: 'http://localhost:3000/en' },
  { name: 'Safaris',      url: 'http://localhost:3000/en/safaris' },
  { name: 'Destinations', url: 'http://localhost:3000/en/destinations' },
  { name: 'Trekking',     url: 'http://localhost:3000/en/trekking' },
]

await mkdir('lighthouse-reports', { recursive: true })
const results = []

for (const { name, url } of PAGES) {
  console.log(`\nAuditing ${name} — ${url} ...`)

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
      perf: Math.round(s.performance.score * 100),
      a11y: Math.round(s.accessibility.score * 100),
      bp:   Math.round(s['best-practices'].score * 100),
      seo:  Math.round(s.seo.score * 100),
    }
    results.push(row)
    console.log(`  Performance:    ${row.perf}`)
    console.log(`  Accessibility:  ${row.a11y}`)
    console.log(`  Best Practices: ${row.bp}`)
    console.log(`  SEO:            ${row.seo}`)
  } finally {
    await browser.close()
  }
}

console.log('\n════════════════ SUMMARY ════════════════')
console.table(results)
console.log('\nHTML reports saved to lighthouse-reports/')
