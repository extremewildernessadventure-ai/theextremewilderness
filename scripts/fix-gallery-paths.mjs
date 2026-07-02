import { readFile, writeFile } from 'fs/promises'

const FILES = [
  'src/app/trekking/[route]/page.tsx',
  'src/app/[locale]/trekking/[route]/page.tsx',
  'src/app/[locale]/trekking/page.tsx',
  // Also fix the [locale] pages that were restored from git (they still have old .jpg paths)
  'src/app/[locale]/about/page.tsx',
  'src/app/[locale]/destinations/page.tsx',
  'src/app/[locale]/destinations/[slug]/page.tsx',
  'src/app/[locale]/experiences/page.tsx',
  'src/app/[locale]/itineraries/page.tsx',
  'src/app/[locale]/kenya/page.tsx',
  'src/app/[locale]/rwanda/page.tsx',
  'src/app/[locale]/safaris/page.tsx',
  'src/app/[locale]/safaris/[slug]/page.tsx',
  'src/app/[locale]/tanzania/page.tsx',
  'src/app/[locale]/travel-info/page.tsx',
  'src/app/[locale]/blog/page.tsx',
  'src/app/[locale]/blog/[slug]/page.tsx',
  'src/app/[locale]/contact/page.tsx',
  'src/app/[locale]/page.tsx',
  'src/app/[locale]/layout.tsx',
]

let totalUpdated = 0

for (const file of FILES) {
  try {
    const original = await readFile(file, 'utf8')
    // Only replace .jpg/.jpeg/.png extensions within /images/gallery/ paths
    const updated = original.replace(
      /(?<=\/images\/gallery\/[^'"\s]*)\.(jpg|jpeg|png)/g,
      '.webp'
    )
    if (original !== updated) {
      await writeFile(file, updated, 'utf8')
      const count = (original.match(/(?<=\/images\/gallery\/[^'"\s]*)\.(jpg|jpeg|png)/g) || []).length
      console.log(`Updated ${file} (${count} paths)`)
      totalUpdated++
    } else {
      console.log(`No gallery paths to update: ${file}`)
    }
  } catch (e) {
    console.error(`SKIP ${file}: ${e.message}`)
  }
}

console.log(`\nDone: ${totalUpdated} files updated`)
