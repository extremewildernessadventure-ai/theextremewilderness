import { readFile, writeFile } from 'fs/promises'

const FILES = [
  'src/components/layout/Footer.tsx',
  'src/components/shared/WhatsAppButton.tsx',
  'src/app/contact/page.tsx',
  'src/app/about/page.tsx',
  'src/app/terms/page.tsx',
  'src/app/privacy/page.tsx',
  'src/app/[locale]/contact/page.tsx',
  'src/app/[locale]/layout.tsx',
  'src/app/[locale]/about/page.tsx',
  'src/app/[locale]/privacy/page.tsx',
  'src/app/[locale]/terms/page.tsx',
]

const REPLACEMENTS = [
  // URL format (tel: and wa.me links — no leading +)
  ['255767000000', '255747999070'],
  // Structured data telephone field (with leading +)
  ['+255767000000', '+255747999070'],
  // Display text
  ['+255 (0) 767 000 000', '+255 (0) 747 999 070'],
]

for (const file of FILES) {
  try {
    let content = await readFile(file, 'utf8')
    let changed = false
    for (const [from, to] of REPLACEMENTS) {
      if (content.includes(from)) {
        content = content.replaceAll(from, to)
        changed = true
      }
    }
    if (changed) {
      await writeFile(file, content, 'utf8')
      console.log(`Updated: ${file}`)
    } else {
      console.log(`  no match: ${file}`)
    }
  } catch (e) {
    console.error(`SKIP ${file}: ${e.message}`)
  }
}
console.log('Done')
