import { readFile, writeFile } from 'fs/promises'

const FIXES = [
  // text-gold on white destination card taglines (2.2:1) → gold-label (5.5:1+ on white)
  // NOTE: InquiryForm and safaris/[slug] use the same class on dark bg — NOT in this list
  {
    files: [
      'src/app/[locale]/destinations/page.tsx',
      'src/app/destinations/page.tsx',
      'src/app/[locale]/kenya/page.tsx',
      'src/app/kenya/page.tsx',
      'src/app/[locale]/rwanda/page.tsx',
      'src/app/rwanda/page.tsx',
      'src/app/[locale]/travel-info/page.tsx',
      'src/app/travel-info/page.tsx',
    ],
    from: 'text-gold text-xs font-semibold uppercase tracking-widest mb-1',
    to:   'text-gold-label text-xs font-semibold uppercase tracking-widest mb-1',
  },
  // text-brand/50 section labels on white cards (2.86:1) → text-text-muted (7.7:1 on white)
  {
    files: [
      'src/app/[locale]/destinations/page.tsx',
      'src/app/destinations/page.tsx',
      'src/app/[locale]/kenya/page.tsx',
      'src/app/kenya/page.tsx',
      'src/app/[locale]/rwanda/page.tsx',
      'src/app/rwanda/page.tsx',
    ],
    from: 'text-xs font-semibold text-brand/50 uppercase tracking-wider mb-2',
    to:   'text-xs font-semibold text-text-muted uppercase tracking-wider mb-2',
  },
  // text-white/50 text-sm on dark brand bg (4.34:1) → /70 (≈6.3:1)
  {
    files: [
      'src/app/trekking/page.tsx',
      'src/app/[locale]/trekking/page.tsx',
      'src/app/[locale]/trekking/[route]/page.tsx',
    ],
    from: 'text-white/50 text-sm mt-2',
    to:   'text-white/70 text-sm mt-2',
  },
  // bg-gold/10 text-gold 10px badge on cream bg (2.04:1) → gold-label (5:1+ on cream)
  {
    files: [
      'src/app/trekking/page.tsx',
      'src/app/[locale]/trekking/page.tsx',
      'src/app/[locale]/trekking/[route]/page.tsx',
    ],
    from: 'bg-gold/10 text-gold text-[10px] font-bold uppercase tracking-wider rounded-full mb-3 self-start',
    to:   'bg-gold/10 text-gold-label text-[10px] font-bold uppercase tracking-wider rounded-full mb-3 self-start',
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
