import sharp from 'sharp'
import { readdir, stat } from 'fs/promises'
import { join, extname, basename } from 'path'

const GALLERY = './public/images/gallery'
const QUALITY = 80
const files = await readdir(GALLERY)
let saved = 0, count = 0, errors = 0

for (const file of files) {
  const ext = extname(file).toLowerCase()
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue

  const src = join(GALLERY, file)
  const dest = join(GALLERY, basename(file, ext) + '.webp')
  const before = (await stat(src)).size

  try {
    await sharp(src).webp({ quality: QUALITY }).toFile(dest)
    const after = (await stat(dest)).size
    const pct = (((before - after) / before) * 100).toFixed(0)
    saved += before - after
    count++
    if (count % 50 === 0) {
      console.log(`Progress: ${count} files converted, ${(saved/1024/1024).toFixed(1)} MB saved so far`)
    }
  } catch (e) {
    console.error(`SKIP ${file}: ${e.message}`)
    errors++
  }
}

console.log(`\nDone: ${count} images converted, ${errors} skipped`)
console.log(`Total saved: ${(saved/1024/1024).toFixed(1)} MB`)
