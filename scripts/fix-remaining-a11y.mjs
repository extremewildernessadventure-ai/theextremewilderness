import { readFile, writeFile } from 'fs/promises'

const FIXES = [
  // text-gold text-xs font-bold uppercase — missed by first script (different pattern)
  // On light-bg boxes 2+3 in destinations/kenya/rwanda pages
  {
    files: [
      'src/app/[locale]/destinations/page.tsx',
      'src/app/destinations/page.tsx',
      'src/app/[locale]/kenya/page.tsx',
      'src/app/kenya/page.tsx',
      'src/app/[locale]/rwanda/page.tsx',
      'src/app/rwanda/page.tsx',
    ],
    from: 'text-gold text-xs font-bold uppercase tracking-widest mb-2',
    to:   'text-gold-label text-xs font-bold uppercase tracking-widest mb-2',
  },
  // text-white/50 on dark — too low opacity, change to /70
  // (affects multiple files)
  {
    files: [
      'src/app/[locale]/destinations/page.tsx',
      'src/app/destinations/page.tsx',
      'src/app/[locale]/kenya/page.tsx',
      'src/app/kenya/page.tsx',
      'src/app/[locale]/rwanda/page.tsx',
      'src/app/rwanda/page.tsx',
      'src/app/[locale]/itineraries/page.tsx',
      'src/app/itineraries/page.tsx',
      'src/app/[locale]/destinations/[slug]/page.tsx',
      'src/app/destinations/[slug]/page.tsx',
      'src/app/[locale]/blog/[slug]/page.tsx',
      'src/app/blog/[slug]/page.tsx',
      'src/app/about/page.tsx',
      'src/app/[locale]/about/page.tsx',
    ],
    from: 'text-white/50',
    to:   'text-white/70',
  },
  // KiliRouteMap — text-white/45 on dark bg, change to /70
  {
    files: ['src/components/trekking/KiliRouteMap.tsx'],
    from: 'text-white/45',
    to:   'text-white/70',
  },
  // Trekking page text-white/45
  {
    files: [
      'src/app/trekking/page.tsx',
      'src/app/[locale]/trekking/page.tsx',
      'src/app/[locale]/trekking/[route]/page.tsx',
    ],
    from: 'text-white/45',
    to:   'text-white/70',
  },
]

for (const { files, from, to } of FIXES) {
  for (const file of files) {
    try {
      const content = await readFile(file, 'utf8')
      const updated = content.replaceAll(from, to)
      if (content !== updated) {
        await writeFile(file, updated, 'utf8')
        const count = (content.match(new RegExp(from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length
        console.log(`Fixed (${count}x): ${file}`)
      }
    } catch (e) {
      console.error(`SKIP ${file}: ${e.message}`)
    }
  }
}
console.log('Done')
