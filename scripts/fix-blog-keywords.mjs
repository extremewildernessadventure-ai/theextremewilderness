/**
 * Extends blog post keyword arrays in src/data/blog/index.ts
 * Handles single-line format: keywords: ['a', 'b', ...],
 */
import { readFile, writeFile } from 'fs/promises'
import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, '..')
const FILE = resolve(ROOT, 'src/data/blog/index.ts')

const ADDITIONS = {
  'great-migration-guide': ['East Africa migration', 'best migration safari', 'migration Tanzania Kenya', 'wildebeest crossing time', 'Great Migration months', 'Africa wildlife spectacle'],
  'tanzania-safari-cost': ['Africa safari all inclusive cost', 'Tanzania safari per day', 'how much safari Africa', 'Tanzania safari 2026 prices', 'Tanzania safari value for money'],
  'best-time-to-visit-serengeti': ['Serengeti rainy season', 'Serengeti green season', 'Serengeti best months', 'Serengeti peak season', 'Tanzania safari calendar'],
  'gorilla-trekking-rwanda': ['Rwanda gorilla permit price', 'gorilla trekking permit cost', 'book gorilla trek Rwanda', 'gorilla trekking experience', 'Rwanda gorilla safety'],
  'kilimanjaro-climbing-guide': ['Kilimanjaro route comparison', 'Kilimanjaro difficulty', 'Kilimanjaro weather', 'Kilimanjaro gear list', 'Kilimanjaro summit night'],
  'tanzania-vs-kenya-safari': ['Tanzania Kenya wildlife', 'Serengeti Masai Mara difference', 'East Africa safari choice', 'Kenya vs Tanzania cost', 'Tanzania Kenya animals'],
  'safari-packing-list': ['safari clothes list', 'what shoes for safari', 'safari bag weight', 'packing for Africa', 'safari essentials list'],
  'big-five-africa-tanzania': ['big five Tanzania parks', 'where to see rhino Tanzania', 'big five wildlife', 'Tanzania lion safari', 'big five Africa locations'],
  'zanzibar-travel-guide': ['Zanzibar visa', 'Zanzibar weather best time', 'Zanzibar budget', 'Zanzibar from UK', 'Zanzibar snorkeling diving'],
  'safari-honeymoon-tanzania': ['honeymoon safari Africa cost', 'best honeymoon safari', 'Tanzania honeymoon packages', 'romantic African safari', 'Africa honeymoon holiday'],
  'family-safari-africa': ['family safari packing list', 'best age for safari kids', 'family safari cost Africa', 'kid friendly safari parks', 'Africa school holiday safari'],
  'ngorongoro-crater-guide': ['Ngorongoro day trip', 'Ngorongoro stay overnight', 'Ngorongoro rhino', 'Ngorongoro highlands', 'Ngorongoro lodge'],
  'serengeti-vs-masai-mara': ['Serengeti big cats', 'Masai Mara big five', 'Mara River vs Serengeti', 'Kenya migration vs Tanzania', 'best migration park Africa'],
  '7-day-tanzania-safari-itinerary': ['Tanzania 7 day cost', 'one week East Africa', '7 day safari budget', 'Tanzania week safari', 'Tanzania first safari'],
  'budget-safari-tanzania': ['cheapest Africa safari', 'Tanzania safari under $1000', 'low budget Tanzania', 'Tanzania affordable tour', 'Africa safari on a budget'],
  'chimpanzee-trekking-tanzania': ['Gombe Stream Tanzania', 'Mahale Mountains Tanzania', 'Tanzania chimps', 'chimpanzee tracking Africa', 'Jane Goodall Gombe'],
  'luxury-safari-tanzania': ['Tanzania luxury lodge', 'Tanzania five star safari', 'private game reserve Tanzania', 'Tanzania bespoke safari', 'ultra luxury Tanzania'],
  'safari-photography-tips': ['Africa wildlife camera', 'safari camera gear', 'wildlife lens recommendations', 'golden hour safari', 'Africa photo tour'],
  'ruaha-national-park-guide': ['Ruaha lions Tanzania', 'Ruaha elephants', 'Ruaha safari cost', 'Tanzania southern parks', 'Ruaha dry season'],
  'tanzania-vs-south-africa-safari': ['Kruger vs Serengeti', 'South Africa Tanzania price', 'Big Five Africa options', 'South Africa Tanzania comparison', 'best Africa first safari'],
  'mountain-biking-arusha': ['Arusha activities', 'Arusha adventure', 'Tanzania adventure tourism', 'cycling Arusha', 'Arusha day trip'],
  'zanzibar-experience': ['Zanzibar culture', 'Zanzibar history', 'Zanzibar dhow sailing', 'Zanzibar sunset cruise', 'Zanzibar food tour'],
  'the-maasai-tribe': ['Maasai cultural visit', 'Maasai boma', 'traditional Maasai Africa', 'Maasai jumping ceremony', 'Kenya Tanzania Maasai'],
}

let content = await readFile(FILE, 'utf8')

for (const [slug, additions] of Object.entries(ADDITIONS)) {
  // Find `slug: 'SLUG'` then find the next keywords: [...] single-line array for that entry
  const slugMarker = `  slug: '${slug}',`
  const slugIdx = content.indexOf(slugMarker)
  if (slugIdx === -1) { console.warn(`WARN: slug '${slug}' not found`); continue }

  // Find the keywords array line after this slug
  const kwLineStart = content.indexOf('    keywords: [', slugIdx)
  if (kwLineStart === -1) { console.warn(`WARN: keywords not found for '${slug}'`); continue }
  const kwLineEnd = content.indexOf('],', kwLineStart)
  if (kwLineEnd === -1) { console.warn(`WARN: keywords end not found for '${slug}'`); continue }

  // Reconstruct: add the new keywords before the closing ],
  const addStr = additions.map(k => `'${k}'`).join(', ')
  content = content.slice(0, kwLineEnd) + ', ' + addStr + content.slice(kwLineEnd)
  console.log(`✓  extended keywords for '${slug}'`)
}

await writeFile(FILE, content, 'utf8')
console.log('\n✅ Blog keywords updated.')
