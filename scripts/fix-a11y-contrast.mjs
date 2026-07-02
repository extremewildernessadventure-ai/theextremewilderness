/**
 * Fix color contrast accessibility failures:
 * 1. Replace `text-gold` eyebrow labels with `text-gold-label` (dark amber, accessible on light bg)
 * 2. Fix `bg-gold/15 text-gold` badge pattern
 * 3. Fix `text-xs font-semibold text-gold group-hover:underline` link pattern
 * 4. Fix `text-white/50` → `text-white/70` in footer bottom bar (handled manually)
 */
import { readFile, writeFile } from 'fs/promises'
import { join } from 'path'

async function* walk(dir) {
  const { readdir } = await import('fs/promises')
  const entries = await readdir(dir, { withFileTypes: true })
  for (const e of entries) {
    const full = join(dir, e.name)
    if (e.isDirectory() && !['node_modules', '.next', 'lighthouse-reports'].includes(e.name)) yield* walk(full)
    else if (e.isFile() && (full.endsWith('.tsx') || full.endsWith('.ts') || full.endsWith('.css'))) yield full
  }
}

const REPLACEMENTS = [
  // Section eyebrow labels — gold text on light backgrounds
  // Pattern 1: inline-block variant
  [/\binline-block text-gold font-semibold text-xs uppercase tracking-widest\b/g,
   'inline-block text-gold-label font-semibold text-xs uppercase tracking-widest'],
  // Pattern 2: standalone (no inline-block)
  [/(?<!inline-block )text-gold font-semibold text-xs uppercase tracking-widest(?! mb-3 Your Summit Kit| mb-3 Summit Intelligence| mb-3 Expedition Notes)/g,
   'text-gold-label font-semibold text-xs uppercase tracking-widest'],
  // Blog "view" links
  [/\btext-xs font-semibold text-gold group-hover:underline\b/g,
   'text-xs font-semibold text-gold-label group-hover:underline'],
  // Badges: bg-gold/15 text-gold (on white cards)
  [/\bbg-gold\/15 text-gold\b/g,
   'bg-amber-100 text-amber-800'],
  // bg-gray-100 text-text-muted badges (small text, borderline contrast)
  [/\bbg-gray-100 text-text-muted\b/g,
   'bg-gray-100 text-gray-600'],
]

// Files to SKIP (these usages are on dark backgrounds, keep text-gold)
const SKIP_FILES = new Set([
  'src\\components\\home\\CtaBanner.tsx',
  'src/components/home/CtaBanner.tsx',
])

let fileCount = 0
let replCount = 0

for await (const file of walk('src')) {
  const rel = file.replace(process.cwd() + '\\', '').replace(process.cwd() + '/', '')
  if (SKIP_FILES.has(rel)) {
    console.log(`SKIPPED (dark bg): ${rel}`)
    continue
  }

  const original = await readFile(file, 'utf8')
  let updated = original
  let changed = 0

  for (const [pattern, replacement] of REPLACEMENTS) {
    const before = updated
    updated = updated.replace(pattern, replacement)
    if (updated !== before) changed++
  }

  if (updated !== original) {
    await writeFile(file, updated, 'utf8')
    console.log(`Updated (${changed} patterns): ${rel}`)
    fileCount++
    replCount += changed
  }
}

console.log(`\nDone: ${fileCount} files, ${replCount} replacements`)
