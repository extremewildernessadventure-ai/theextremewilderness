// Downloads every external TierStay.image URL referenced in packages.ts,
// optimizes it with sharp, and saves it into public/images/lodges/.
// Read-only with respect to src/data — it does NOT rewrite packages.ts;
// that's a separate follow-up step once this report is reviewed.
import sharp from 'sharp'
import { readFile, writeFile, mkdir } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')
const PACKAGES_FILE = path.join(ROOT, 'src', 'data', 'packages.ts')
const OUT_DIR = path.join(ROOT, 'public', 'images', 'lodges')
const MAX_WIDTH = 1200
const WEBP_QUALITY = 75
const CONCURRENCY = 6

await mkdir(OUT_DIR, { recursive: true })

const content = await readFile(PACKAGES_FILE, 'utf-8')

// Capture each `image: 'https://...'` together with the `name:` that
// precedes it in the same TierStay object, so we can derive a readable
// filename per lodge rather than a hash.
const stayRegex = /name:\s*(['"])((?:(?!\1).)*)\1,\s*image:\s*'(https:\/\/[^']+)'/g
const urlToName = new Map()
let m
while ((m = stayRegex.exec(content))) {
  const [, , name, url] = m
  if (!urlToName.has(url)) urlToName.set(url, name)
}

const uniqueUrls = [...urlToName.keys()]
console.log(`Found ${uniqueUrls.length} unique external image URLs.`)

function slugify(s) {
  return s
    .toLowerCase()
    .normalize('NFKD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

// Dedupe filenames (same lodge name can recur; disambiguate with a short
// hash of the URL when needed).
function shortHash(str) {
  let h = 0
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0
  return h.toString(36).slice(0, 6)
}

const usedNames = new Set()
function filenameFor(url, name) {
  const base = slugify(name) || 'lodge'
  let candidate = base
  if (usedNames.has(candidate)) candidate = `${base}-${shortHash(url)}`
  usedNames.add(candidate)
  return `${candidate}.webp`
}

async function fetchWithRetry(url, attempts = 2) {
  const origin = new URL(url).origin
  for (let i = 0; i < attempts; i++) {
    try {
      const res = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Referer': origin + '/',
          'Accept': 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
        },
        redirect: 'follow',
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const buf = Buffer.from(await res.arrayBuffer())
      if (buf.length < 500) throw new Error('response too small, likely not a real image')
      return buf
    } catch (e) {
      if (i === attempts - 1) throw e
    }
  }
}

const report = []
let index = 0

async function worker() {
  while (index < uniqueUrls.length) {
    const i = index++
    const url = uniqueUrls[i]
    const name = urlToName.get(url)
    const filename = filenameFor(url, name)
    const dest = path.join(OUT_DIR, filename)
    const localPath = `/images/lodges/${filename}`

    if (existsSync(dest)) {
      report.push({ url, name, localPath, status: 'skipped-exists' })
      console.log(`[skip] ${name} — already downloaded`)
      continue
    }

    try {
      const buf = await fetchWithRetry(url)
      await sharp(buf)
        .resize({ width: MAX_WIDTH, withoutEnlargement: true })
        .webp({ quality: WEBP_QUALITY })
        .toFile(dest)
      report.push({ url, name, localPath, status: 'ok' })
      console.log(`[ok]   ${name} -> ${localPath}`)
    } catch (e) {
      report.push({ url, name, localPath: null, status: 'failed', error: e.message })
      console.error(`[FAIL] ${name} (${url}) — ${e.message}`)
    }
  }
}

await Promise.all(Array.from({ length: CONCURRENCY }, worker))

const ok = report.filter((r) => r.status === 'ok' || r.status === 'skipped-exists')
const failed = report.filter((r) => r.status === 'failed')

console.log(`\nDone: ${ok.length}/${uniqueUrls.length} succeeded, ${failed.length} failed.`)

const reportPath = path.join(ROOT, 'scripts', 'rehost-report.json')
await writeFile(reportPath, JSON.stringify(report, null, 2))
console.log(`Full report written to ${path.relative(ROOT, reportPath)}`)
