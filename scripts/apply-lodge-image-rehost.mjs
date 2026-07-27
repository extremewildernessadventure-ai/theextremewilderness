// Applies the URL -> local path mapping from rehost-report.json across all
// 4 package data files. Run this AFTER rehost-lodge-images.mjs has produced
// scripts/rehost-report.json, and only once no other process is mid-edit on
// these files (it does a full read -> in-memory replace -> full write per file).
import { readFile, writeFile } from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')
const REPORT_FILE = path.join(ROOT, 'scripts', 'rehost-report.json')
const PACKAGE_FILES = ['packages.ts', 'packages.de.ts', 'packages.es.ts', 'packages.fr.ts']
  .map((f) => path.join(ROOT, 'src', 'data', f))

const report = JSON.parse(await readFile(REPORT_FILE, 'utf-8'))
const successful = report.filter((r) => r.status === 'ok' || r.status === 'skipped-exists')
const failed = report.filter((r) => r.status === 'failed')

console.log(`${successful.length} URLs will be rewritten to local paths across ${PACKAGE_FILES.length} files.`)
if (failed.length) {
  console.log(`${failed.length} URL(s) stay hotlinked (fetch failed): ${failed.map((f) => f.name).join(', ')}`)
}

for (const file of PACKAGE_FILES) {
  let content = await readFile(file, 'utf-8')
  let replacements = 0
  for (const { url, localPath } of successful) {
    const before = content
    content = content.split(`'${url}'`).join(`'${localPath}'`)
    if (content !== before) replacements++
  }
  await writeFile(file, content, 'utf-8')
  console.log(`${path.basename(file)}: ${replacements} distinct URLs replaced`)
}

console.log('\nDone. Run `npx tsc --noEmit` next to confirm nothing broke.')
