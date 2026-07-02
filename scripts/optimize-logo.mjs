import sharp from 'sharp'
import { stat } from 'fs/promises'

const src = './public/EWA logo.png'
const dest = './public/EWA logo.webp'

const before = (await stat(src)).size
await sharp(src).webp({ quality: 90, lossless: false }).toFile(dest)
const after = (await stat(dest)).size

console.log(`EWA logo: ${(before/1024).toFixed(0)}KB → ${(after/1024).toFixed(0)}KB (-${(((before-after)/before)*100).toFixed(0)}%)`)
