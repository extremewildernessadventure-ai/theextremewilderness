import { readFile, writeFile } from 'fs/promises'

const FIXES = [
  // text-gold on bg-white rounded-2xl cards (contrast 2.2:1) — must use gold-label (5.5:1 on white)
  {
    files: [
      'src/app/[locale]/destinations/page.tsx',
      'src/app/destinations/page.tsx',
      'src/app/[locale]/kenya/page.tsx',
      'src/app/kenya/page.tsx',
      'src/app/[locale]/rwanda/page.tsx',
      'src/app/rwanda/page.tsx',
    ],
    from: 'text-gold font-bold text-xl leading-none',
    to:   'text-gold-label font-bold text-xl leading-none',
  },
  // text-white/55 on dark brand bg — 4.22:1 fails, /75 gives ~6:1 which passes
  {
    files: [
      'src/app/itineraries/page.tsx',
      'src/app/[locale]/itineraries/page.tsx',
      'src/app/trekking/page.tsx',
      'src/app/[locale]/trekking/page.tsx',
      'src/app/[locale]/trekking/[route]/page.tsx',
    ],
    from: 'text-white/55',
    to:   'text-white/75',
  },
  // BottomNav inactive label — same /55 → /75 (quoted string in ternary)
  {
    files: ['src/components/layout/BottomNav.tsx'],
    from: "'text-white/55'",
    to:   "'text-white/75'",
  },
  // Prime badge on dark olive section: text-gold (3.93:1) → text-amber-200 (~8:1 on dark)
  {
    files: [
      'src/app/trekking/page.tsx',
      'src/app/[locale]/trekking/page.tsx',
      'src/app/[locale]/trekking/[route]/page.tsx',
    ],
    from: "'bg-gold/20 text-gold border border-gold/30'",
    to:   "'bg-gold/20 text-amber-200 border border-gold/30'",
  },
]

for (const { files, from, to } of FIXES) {
  for (const file of files) {
    try {
      const content = await readFile(file, 'utf8')
      const updated = content.replaceAll(from, to)
      if (content !== updated) {
        const count = (content.match(new RegExp(from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length
        await writeFile(file, updated, 'utf8')
        console.log(`Fixed (${count}x): ${file}`)
      } else {
        console.log(`  no match: ${file}`)
      }
    } catch (e) {
      console.error(`SKIP ${file}: ${e.message}`)
    }
  }
}
console.log('Done')
