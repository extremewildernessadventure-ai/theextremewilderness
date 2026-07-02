import { readFile, writeFile, readdir } from 'fs/promises'
import { join, extname } from 'path'

// Remove UTF-8 BOM (EF BB BF / ﻿) that PowerShell added
const BOM = '﻿'

async function* walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  for (const e of entries) {
    const full = join(dir, e.name)
    if (e.isDirectory()) yield* walk(full)
    else if (['.ts', '.tsx'].includes(extname(e.name))) yield full
  }
}

const files = []
for await (const f of walk('src')) files.push(f)
let count = 0

for (const file of files) {
  const content = await readFile(file, 'utf8')
  if (content.startsWith(BOM)) {
    await writeFile(file, content.slice(1), 'utf8')
    console.log(`Removed BOM: ${file}`)
    count++
  }
}

console.log(`\nDone: removed BOM from ${count} files`)
