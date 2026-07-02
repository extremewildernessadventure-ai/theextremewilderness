import { readFile, writeFile } from 'fs/promises'

const FIXES = [
  // Destinations page - text-white/60 on dark bg
  ['src/app/destinations/page.tsx',
    'text-white/60 text-xs mt-0.5 truncate',
    'text-white/75 text-xs mt-0.5 truncate'],
  ['src/app/[locale]/destinations/page.tsx',
    'text-white/60 text-xs mt-0.5 truncate',
    'text-white/75 text-xs mt-0.5 truncate'],
  // Trekking - gold text on dark bg (route nicknames in dark card)
  ['src/app/trekking/page.tsx',
    'text-gold text-xs font-medium mt-0.5',
    'text-white/75 text-xs font-medium mt-0.5'],
  ['src/app/[locale]/trekking/page.tsx',
    'text-gold text-xs font-medium mt-0.5',
    'text-white/75 text-xs font-medium mt-0.5'],
  ['src/app/[locale]/trekking/[route]/page.tsx',
    'text-gold text-xs font-medium mt-0.5',
    'text-white/75 text-xs font-medium mt-0.5'],
]

for (const [file, from, to] of FIXES) {
  const content = await readFile(file, 'utf8')
  const updated = content.replaceAll(from, to)
  if (content !== updated) {
    await writeFile(file, updated, 'utf8')
    console.log(`Fixed: ${file}`)
  } else {
    console.log(`Not found: ${from} in ${file}`)
  }
}
console.log('Done')
