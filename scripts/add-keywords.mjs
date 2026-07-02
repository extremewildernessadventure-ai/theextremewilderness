/**
 * SEO Keyword Enrichment Script
 * Adds 10+ keywords to every page on the site for USA/Europe search ranking.
 */
import { readFile, writeFile } from 'fs/promises'
import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, '..')

async function read(rel) {
  return readFile(resolve(ROOT, rel), 'utf8')
}

async function write(rel, content) {
  await writeFile(resolve(ROOT, rel), content, 'utf8')
  console.log(`✓  ${rel}`)
}

// ─────────────────────────────────────────────────────────
// 1. Static page keyword additions
// ─────────────────────────────────────────────────────────

const STATIC_PAGES = [
  // ── Trekking hub ──
  {
    files: [
      'src/app/[locale]/trekking/page.tsx',
      'src/app/trekking/page.tsx',
    ],
    find: `export const metadata: Metadata = {
  title: 'Kilimanjaro Trekking & Mountain Climbing Tanzania',
  description:
    "Climb Africa's highest peak with Tanzania's most experienced local guides. Machame, Lemosho, Marangu and Rongai routes. TANAPA certified, full safety backup.",
}`,
    replace: `export const metadata: Metadata = {
  title: 'Kilimanjaro Trekking & Mountain Climbing Tanzania 2026',
  description:
    "Climb Africa's highest peak with Tanzania's most experienced local guides. Machame, Lemosho, Marangu and Rongai routes. TANAPA certified, full safety backup.",
  keywords: [
    'Kilimanjaro climb 2026',
    'Kilimanjaro routes',
    'Kilimanjaro Machame route',
    'Kilimanjaro Lemosho route',
    'Kilimanjaro Marangu route',
    'climb Kilimanjaro cost',
    'Kilimanjaro trekking Tanzania',
    'best Kilimanjaro route',
    'Kilimanjaro success rate',
    'Kilimanjaro tour operator',
    'Africa highest mountain',
    'Kilimanjaro summit',
    'Kilimanjaro guided trek',
    'Tanzania mountain climbing',
    'Uhuru Peak Tanzania',
  ],
}`,
  },

  // ── Itineraries ──
  {
    files: [
      'src/app/[locale]/itineraries/page.tsx',
      'src/app/itineraries/page.tsx',
    ],
    find: `export const metadata: Metadata = {
  title: 'Safari Itineraries | The Extreme Wilderness',
  description:
    'Browse curated safari itineraries across Tanzania, Kenya and Rwanda. From classic Serengeti circuits to gorilla trekking and Kilimanjaro summit bids. Every journey custom-built.',
}`,
    replace: `export const metadata: Metadata = {
  title: 'Safari Itineraries | The Extreme Wilderness',
  description:
    'Browse curated safari itineraries across Tanzania, Kenya and Rwanda. From classic Serengeti circuits to gorilla trekking and Kilimanjaro summit bids. Every journey custom-built.',
  keywords: [
    'Tanzania safari itinerary',
    'East Africa safari itinerary',
    '7 day Tanzania safari',
    '10 day Tanzania safari',
    'Serengeti itinerary',
    'Ngorongoro itinerary',
    'safari trip planner Tanzania',
    'Tanzania travel itinerary',
    'Africa safari planner',
    'gorilla trekking itinerary Rwanda',
    'Kilimanjaro itinerary',
    'combined safari Tanzania',
    'custom Tanzania itinerary',
    'Tanzania safari package deals',
    'Africa travel plan',
  ],
}`,
  },

  // ── Blog ──
  {
    files: [
      'src/app/[locale]/blog/page.tsx',
      'src/app/blog/page.tsx',
    ],
    find: `export const metadata: Metadata = {
  title: 'Safari Blog | Tanzania & East Africa Travel Guides | The Extreme Wilderness',
  description: 'Expert Tanzania safari guides, Kilimanjaro tips, and wildlife articles from our local team in Arusha.',
}`,
    replace: `export const metadata: Metadata = {
  title: 'Safari Blog | Tanzania & East Africa Travel Guides | The Extreme Wilderness',
  description: 'Expert Tanzania safari guides, Kilimanjaro tips, and wildlife articles from our local team in Arusha.',
  keywords: [
    'Tanzania safari blog',
    'Africa safari travel guide',
    'Kilimanjaro trekking guide',
    'East Africa wildlife blog',
    'Tanzania travel tips',
    'safari planning advice',
    'gorilla trekking guide Rwanda',
    'Africa wildlife articles',
    'Serengeti travel guide',
    'Tanzania tourism blog',
    'Africa travel blog',
    'safari photography tips',
    'best time Africa safari',
    'Tanzania travel information',
  ],
}`,
  },

  // ── Travel Info ──
  {
    files: [
      'src/app/[locale]/travel-info/page.tsx',
      'src/app/travel-info/page.tsx',
    ],
    find: `export const metadata: Metadata = {
  title: 'Tanzania Travel Information | Visas, Health, Currency & Packing | The Extreme Wilderness',
  description:
    'Essential Tanzania travel information — best time to visit, visa requirements, health and vaccinations, currency, dress code, and packing tips for your safari or Kilimanjaro trek.',
}`,
    replace: `export const metadata: Metadata = {
  title: 'Tanzania Travel Information | Visas, Health, Currency & Packing | The Extreme Wilderness',
  description:
    'Essential Tanzania travel information — best time to visit, visa requirements, health and vaccinations, currency, dress code, and packing tips for your safari or Kilimanjaro trek.',
  keywords: [
    'Tanzania visa requirements',
    'Tanzania travel tips',
    'Tanzania health vaccinations',
    'Tanzania safari packing list',
    'best time to visit Tanzania',
    'Tanzania weather safari',
    'Tanzania currency',
    'Tanzania malaria prevention',
    'Tanzania entry requirements',
    'Tanzania travel guide USA',
    'Tanzania holiday guide UK',
    'what to pack for safari',
    'Tanzania travel insurance',
    'Tanzania yellow fever certificate',
    'Tanzania travel advice',
  ],
}`,
  },

  // ── Experiences (has existing 8 keywords — expand to 13) ──
  {
    files: [
      'src/app/[locale]/experiences/page.tsx',
      'src/app/experiences/page.tsx',
    ],
    find: `    'East Africa safari experiences',
  ],
}`,
    replace: `    'East Africa safari experiences',
    'Tanzania adventure safari',
    'bush dinner Tanzania',
    'sunset game drive Africa',
    'Tanzania safari experiences 2026',
    'unique Africa experiences',
  ],
}`,
  },
]

// ─────────────────────────────────────────────────────────
// 2. generateMetadata pages (contact + about)
// ─────────────────────────────────────────────────────────

const GENERATE_METADATA_PAGES = [
  // ── Contact ──
  {
    files: [
      'src/app/[locale]/contact/page.tsx',
      'src/app/contact/page.tsx',
    ],
    find: `    description: 'Get in touch with our Tanzania-based safari experts. We respond within 2 hours with a custom itinerary.',
  }
}`,
    replace: `    description: 'Get in touch with our Tanzania-based safari experts. We respond within 2 hours with a custom itinerary.',
    keywords: [
      'book Tanzania safari',
      'Tanzania safari enquiry',
      'plan my safari',
      'safari quote Tanzania',
      'contact Tanzania tour operator',
      'Tanzania safari booking',
      'Africa safari booking',
      'custom safari Tanzania',
      'Tanzania safari consultation',
      'East Africa travel agent',
      'safari holiday booking',
      'Africa tour package enquiry',
      'Tanzania safari advisor',
    ],
  }
}`,
  },

  // ── About (expand from 8 → 13) ──
  {
    files: [
      'src/app/[locale]/about/page.tsx',
      'src/app/about/page.tsx',
    ],
    find: `      'Tanzania safari reviews',
    ],
  }
}`,
    replace: `      'Tanzania safari reviews',
      'certified Tanzania safari guides',
      'TANAPA certified operator',
      'Tanzania safari 2026',
      'African safari company',
      'best safari operator Africa',
    ],
  }
}`,
  },
]

// ─────────────────────────────────────────────────────────
// 3. Safari [slug]/page.tsx — add SAFARI_KEYWORDS map
// ─────────────────────────────────────────────────────────

const SAFARI_KEYWORDS_BLOCK = `
const SAFARI_KEYWORDS: Record<string, string[]> = {
  '7-day-serengeti-ngorongoro': [
    'Serengeti Ngorongoro safari', '7 day Tanzania safari', 'Tanzania safari 2026',
    'Great Migration safari', 'Ngorongoro Crater big five', 'Tanzania northern circuit',
    'Serengeti safari package', 'Africa wildlife safari', 'Tanzania safari holiday', 'book Tanzania safari',
  ],
  '10-day-northern-circuit': [
    '10 day Tanzania safari', 'northern circuit Tanzania', 'ultimate Tanzania safari',
    'Serengeti Ngorongoro Tarangire safari', 'Tanzania 10 days', 'Tanzania luxury safari',
    'East Africa safari itinerary', 'Tanzania safari holiday 2026', 'Africa safari 10 days', 'Tanzania wildlife tour',
  ],
  '10-day-safari-zanzibar': [
    'Tanzania safari and beach', 'Zanzibar safari combo', 'Tanzania and Zanzibar holiday',
    'safari beach package Tanzania', 'Zanzibar holiday 2026', 'Africa beach safari',
    'Tanzania Indian Ocean', '10 day Africa holiday', 'best Tanzania beach safari', 'safari Zanzibar combination',
  ],
  '5-day-serengeti-fly-in': [
    'Serengeti fly-in safari', 'flying safari Tanzania', 'Serengeti 5 days',
    'luxury flying safari Africa', 'Tanzania bush plane safari', 'Serengeti private safari',
    'short Tanzania safari', 'Tanzania safari 5 days', 'Africa flying safari', 'Serengeti air safari',
  ],
  'kilimanjaro-machame-7day': [
    'Kilimanjaro Machame route', 'Machame route 7 days', 'climb Kilimanjaro Machame',
    'Kilimanjaro trekking cost', 'Kilimanjaro guided trek', 'Africa mountain climbing',
    'Tanzania mountain trek', 'Kilimanjaro summit package', 'Machame whiskey route', 'Kilimanjaro 7 day trek',
  ],
  '7-day-southern-circuit': [
    'southern Tanzania safari', 'Ruaha National Park safari', 'Nyerere National Park',
    'Tanzania southern circuit', '7 day southern safari', 'off the beaten path Tanzania',
    'Tanzania hidden safari', 'Selous safari Tanzania', 'Tanzania remote safari', 'Ruaha safari package',
  ],
  '5-days-highlights-safari': [
    '5 day Tanzania safari', 'Tanzania safari highlights', 'short Africa safari',
    'Tanzania quick safari', 'Serengeti Ngorongoro 5 days', 'mini Tanzania safari',
    'Tanzania safari 5 nights', 'budget Tanzania safari', 'Africa safari 5 days', 'Tanzania safari short trip',
  ],
  '8-days-honeymoon-safari': [
    'honeymoon safari Tanzania', 'Tanzania romantic safari', 'Africa honeymoon package',
    'luxury honeymoon Tanzania', 'Tanzania bush honeymoon', 'romantic safari Africa',
    'Tanzania couples safari', 'honeymoon safari Africa 2026', 'Africa wedding anniversary safari', 'luxury safari honeymoon',
  ],
  '7-days-crown-jewels': [
    'crown jewels Tanzania safari', 'best Tanzania safari', 'Tanzania top safari',
    'Serengeti Zanzibar safari', 'Tanzania crown jewels', 'Africa bucket list safari',
    'Tanzania premium safari', 'best of Tanzania safari', 'luxury Tanzania 7 days', 'Africa best wildlife safari',
  ],
  '7-days-migration-southern': [
    'Great Migration southern Tanzania', 'wildebeest migration safari', 'Ndutu calving season safari',
    'Serengeti migration southern', 'Tanzania migration safari 2026', 'wildlife migration Tanzania',
    'best migration safari Africa', 'Serengeti wildebeest safari', 'calving season Ndutu', 'Africa migration safari',
  ],
  '10-days-luxury-family': [
    'family safari Tanzania', 'Tanzania luxury family safari', 'Africa safari with kids',
    'Tanzania family holiday', 'kids on safari Tanzania', '10 day family safari',
    'Africa family vacation', 'Tanzania family tour operator', 'child-friendly safari Africa', 'Tanzania school holiday safari',
  ],
  '12-days-wild-wilderness': [
    '12 day Tanzania safari', 'ultimate Africa wilderness', 'Tanzania extended safari',
    'Tanzania remote wilderness', 'Africa 12 days safari', 'Tanzania off-road safari',
    'wild Tanzania safari', 'Tanzania full safari', 'long haul Africa safari', 'Tanzania wilderness experience',
  ],
  '8-days-great-northern-migration': [
    'northern Serengeti migration', 'Great Migration northern', 'Mara River crossing safari',
    'Tanzania migration northern', 'Serengeti crossing wildebeest', '8 day Great Migration safari',
    'best Great Migration safari', 'Serengeti river crossing', 'Africa migration tourism', 'northern Serengeti safari',
  ],
  'ultimate-tanzania-safari': [
    'ultimate Tanzania safari', 'Tanzania grand safari', 'best of East Africa safari',
    'Tanzania complete safari', 'Africa dream safari', 'Tanzania top safari package',
    'East Africa ultimate tour', 'Tanzania luxury ultimate', 'African safari bucket list', 'Tanzania premium 12 days',
  ],
  '7-days-gems-of-north': [
    'Tanzania north gems safari', 'Tarangire Serengeti safari', 'Lake Manyara safari',
    'northern Tanzania gems', 'Tanzania 7 day gems', 'Africa hidden gems safari',
    'Tanzania safari 7 nights', 'Manyara Tarangire Serengeti', 'Tanzania northern highlights', 'Africa wildlife north',
  ],
  '7-days-flight-ndutu': [
    'Ndutu migration safari', 'fly-in Ndutu Tanzania', 'calving season Serengeti',
    'Serengeti south safari', 'Tanzania migration calving', 'Ndutu wildebeest calving',
    'Africa calving safari', 'Tanzania fly-in Ndutu', 'Serengeti Ndutu February', 'migration calving Tanzania',
  ],
  '8-days-flight-migration': [
    'fly-in migration safari Tanzania', 'Tanzania flying safari migration', '8 days Great Migration',
    'Serengeti migration flying', 'Africa luxury migration safari', 'Tanzania air safari 8 days',
    'migration safari bucket list', 'Tanzania fly-in wildlife', 'best Africa migration', 'Serengeti fly-in 8 days',
  ],
  '11-days-rwanda-tanzania': [
    'Rwanda Tanzania combined safari', 'Tanzania Rwanda gorilla trekking', 'gorilla trekking Tanzania safari',
    'East Africa combined tour', '11 day East Africa', 'Rwanda Tanzania 2026',
    'gorilla safari and Tanzania', 'Africa gorilla and wildlife', 'Rwanda Tanzania tour operator', 'East Africa safari combination',
  ],
  '12-days-rwanda-primates': [
    'Rwanda primate safari', 'gorilla chimpanzee trekking Rwanda', 'Rwanda 12 days',
    'mountain gorilla Rwanda', 'golden monkey Rwanda', 'chimpanzee Rwanda',
    'Rwanda primate experience', 'Africa gorilla holiday', 'Rwanda wildlife primates', 'Rwanda gorilla 12 days',
  ],
  '11-days-kenya-undisputed': [
    'Kenya safari 11 days', 'Masai Mara Amboseli safari', 'Kenya Tanzania safari',
    'Kenya undisputed safari', 'best Kenya safari', 'Kenya 11 day tour',
    'Masai Mara Great Migration 2026', 'Kenya wildlife safari', 'luxury Kenya safari package', 'Africa Kenya holiday',
  ],
  '10-days-southern-secrets': [
    'southern Tanzania secrets', 'Tanzania hidden south', 'Ruaha Nyerere safari',
    'Tanzania 10 days south', 'Tanzania remote south', 'off beaten path Tanzania',
    'Tanzania southern wildlife', 'southern Tanzania tour', 'Africa hidden safari', 'Tanzania south 10 days',
  ],
  '11-days-southern-spice': [
    'southern Tanzania Zanzibar safari', 'Tanzania safari and beach 11 days', 'Ruaha beach combo',
    'Tanzania south and Zanzibar', 'Africa wildlife and beach', 'Tanzania southern spice',
    'Tanzania Zanzibar 11 days', 'Africa beach wilderness', 'southern Tanzania holiday', 'Tanzania south spice islands',
  ],
  '12-days-tanzania-kenya': [
    'Tanzania Kenya safari 12 days', 'East Africa grand safari', 'Kenya Tanzania 12 days',
    'Serengeti Masai Mara safari', 'Kenya Tanzania tour 2026', 'Africa two countries safari',
    'East Africa 12 day tour', 'Tanzania Kenya comparison safari', 'best of Africa safari', 'dual country Africa safari',
  ],
  '12-days-grand-safari': [
    'Tanzania grand safari 12 days', 'ultimate Tanzania grand tour', 'Africa grand safari',
    'Tanzania best wildlife 12 days', 'Tanzania everything safari', 'Africa bucket list grand',
    'Tanzania grandest safari', '12 night Tanzania safari', 'Tanzania comprehensive safari', 'best Africa 12 day safari',
  ],
}

const DEFAULT_SAFARI_KEYWORDS = [
  'Tanzania safari', 'East Africa safari', 'Africa wildlife safari', 'book Tanzania safari',
  'Tanzania safari package', 'Tanzania tour operator', 'Africa safari holiday',
  'Tanzania wildlife tour', 'safari Tanzania 2026', 'Africa safari vacation',
]

`

// ─────────────────────────────────────────────────────────
// 4. Trekking [route] ROUTE_META map (for generateMetadata refactor)
// ─────────────────────────────────────────────────────────

const ROUTE_META_BLOCK = `
interface RouteProps {
  params: Promise<{ locale?: string; route: string }>
}

const ROUTE_META: Record<string, import('next').Metadata> = {
  machame: {
    title: 'Kilimanjaro Machame Route 2026 | 7 Days | Extreme Wilderness Adventure',
    description: "Climb Kilimanjaro via the scenic Machame 'Whiskey Route' — 7 days, 85% success rate. Led by TANAPA-certified guides from Tanzania.",
    keywords: [
      'Kilimanjaro Machame route', 'Machame route 7 days', 'Kilimanjaro whiskey route',
      'climb Kilimanjaro Machame', 'Machame route success rate', 'Kilimanjaro Machame guide',
      'best Kilimanjaro route', 'Kilimanjaro 7 day trek', 'Tanzania mountain climbing', 'Kilimanjaro trekking 2026',
    ],
  },
  lemosho: {
    title: 'Kilimanjaro Lemosho Route 2026 | 8 Days | Extreme Wilderness Adventure',
    description: "The Lemosho Route — 8 days, 90% summit success rate. The most scenic and spacious Kilimanjaro route, perfect for acclimatisation.",
    keywords: [
      'Kilimanjaro Lemosho route', 'Lemosho route 8 days', 'best Kilimanjaro route USA',
      'Lemosho route success rate', 'Kilimanjaro Lemosho guide', 'scenic Kilimanjaro route',
      'Kilimanjaro 8 day trek', 'Lemosho western breach', 'Tanzania Kilimanjaro climb', 'Kilimanjaro longest route',
    ],
  },
  marangu: {
    title: 'Kilimanjaro Marangu Route 2026 | 5–6 Days | Extreme Wilderness Adventure',
    description: "The Marangu 'Coca-Cola' Route — the classic Kilimanjaro hut route. 5–6 days, hut accommodation, ideal for a first climb.",
    keywords: [
      'Kilimanjaro Marangu route', 'Marangu Coca-Cola route', 'Kilimanjaro 5 day route',
      'Marangu hut route', 'cheapest Kilimanjaro route', 'Kilimanjaro beginner route',
      'Marangu route guide', 'Kilimanjaro budget trek', 'Tanzania Marangu climb', 'Kilimanjaro easiest route',
    ],
  },
  rongai: {
    title: 'Kilimanjaro Rongai Route 2026 | 6–7 Days | Extreme Wilderness Adventure',
    description: "The Rongai Route approaches Kilimanjaro from the north — quieter, drier, ideal in the rainy season. 6–7 days, 80% success rate.",
    keywords: [
      'Kilimanjaro Rongai route', 'Rongai route 6 days', 'north side Kilimanjaro',
      'Rongai dry route', 'Kilimanjaro Kenya side', 'Rongai route guide',
      'quiet Kilimanjaro route', 'Kilimanjaro northern approach', 'Tanzania Rongai climb', 'Kilimanjaro least crowded route',
    ],
  },
  umbwe: {
    title: 'Kilimanjaro Umbwe Route 2026 | Most Direct | Extreme Wilderness Adventure',
    description: "The Umbwe Route — the steepest and most direct Kilimanjaro route. For experienced trekkers only. 6–7 days of dramatic terrain.",
    keywords: [
      'Kilimanjaro Umbwe route', 'hardest Kilimanjaro route', 'Umbwe route guide',
      'direct Kilimanjaro route', 'Kilimanjaro advanced route', 'Umbwe route 6 days',
      'challenging Kilimanjaro climb', 'Kilimanjaro expert route', 'Tanzania Umbwe climb', 'Kilimanjaro steep route',
    ],
  },
  'northern-circuit': {
    title: 'Kilimanjaro Northern Circuit 2026 | 9–10 Days | Extreme Wilderness Adventure',
    description: "The Northern Circuit — Kilimanjaro's longest route with a 95% summit success rate. 9–10 days circumnavigating the entire mountain.",
    keywords: [
      'Kilimanjaro Northern Circuit', 'longest Kilimanjaro route', 'Kilimanjaro 95% success rate',
      'best success rate Kilimanjaro', 'Kilimanjaro 10 day route', 'Northern Circuit guide',
      'Kilimanjaro acclimatisation route', 'highest Kilimanjaro success', 'Tanzania Northern Circuit trek', 'Kilimanjaro full circumnavigation',
    ],
  },
}

export async function generateMetadata({ params }: RouteProps): Promise<import('next').Metadata> {
  const { route } = await params
  return ROUTE_META[route] ?? ROUTE_META.machame
}

`

// ─────────────────────────────────────────────────────────
// 5. Destination DEST_KEYWORDS map
// ─────────────────────────────────────────────────────────

const DEST_KEYWORDS = {
  serengeti: [
    'Serengeti National Park safari', 'Serengeti Great Migration', 'Serengeti Tanzania',
    'visit Serengeti', 'Serengeti wildlife safari', 'Serengeti game reserve',
    'Serengeti Tanzania 2026', 'Serengeti lions', 'Serengeti tour', 'Serengeti big five',
  ],
  ngorongoro: [
    'Ngorongoro Crater safari', 'Ngorongoro Conservation Area', 'Ngorongoro big five',
    'Ngorongoro Tanzania', 'visit Ngorongoro Crater', 'Ngorongoro black rhino',
    'Ngorongoro safari tour', 'Ngorongoro caldera', 'Ngorongoro 2026', 'world largest caldera safari',
  ],
  tarangire: [
    'Tarangire National Park safari', 'Tarangire elephants', 'Tarangire baobab trees',
    'Tanzania elephant safari', 'Tarangire safari tour', 'Tarangire migration',
    'Tarangire dry season', 'Tarangire 2026', 'Tanzania baobab safari', 'Tarangire birdwatching',
  ],
  zanzibar: [
    'Zanzibar island holiday', 'Zanzibar beaches', 'Stone Town Zanzibar',
    'Zanzibar snorkeling', 'Zanzibar safari beach combo', 'Zanzibar 2026',
    'Zanzibar travel guide', 'best beaches Zanzibar', 'Zanzibar spice island', 'Tanzania beach holiday',
  ],
  'masai-mara': [
    'Masai Mara safari', 'Masai Mara Great Migration', 'Kenya Masai Mara',
    'Mara River crossing', 'Masai Mara 2026', 'best time Masai Mara',
    'Masai Mara big five', 'Kenya wildlife safari', 'Masai Mara holiday', 'Masai Mara tour',
  ],
  ruaha: [
    'Ruaha National Park safari', 'southern Tanzania safari', 'Tanzania remote safari',
    'Ruaha big five', 'Ruaha elephants lions', 'Ruaha safari guide',
    'Tanzania off beaten path', 'Ruaha National Park 2026', 'Tanzania southern wildlife', 'Ruaha luxury camp',
  ],
  nyerere: [
    'Nyerere National Park', 'Selous Game Reserve Tanzania', 'boat safari Tanzania',
    'Tanzania walking safari', 'Nyerere wildlife', 'Selous safari 2026',
    'Tanzania water safari', 'Nyerere boat game drive', 'Tanzania Selous', 'southern Tanzania safari',
  ],
  volcanoes: [
    'Volcanoes National Park Rwanda', 'gorilla trekking Rwanda', 'mountain gorilla safari',
    'Rwanda gorilla permit 2026', 'Volcanoes National Park safari', 'Rwanda gorilla tracking',
    'golden monkey Rwanda', 'Dian Fossey gorillas', 'Africa gorilla safari', 'Rwanda primate trekking',
  ],
  kilimanjaro: [
    'Mount Kilimanjaro climb', 'Kilimanjaro safari', 'Kilimanjaro Tanzania',
    'Africa highest peak', 'Kilimanjaro trek 2026', 'Kilimanjaro Uhuru Peak',
    'Tanzania mountain climb', 'Kilimanjaro guided trek', 'Kilimanjaro tour operator', 'climb Africa highest mountain',
  ],
}

// ─────────────────────────────────────────────────────────
// 6. Blog post keyword extensions
// ─────────────────────────────────────────────────────────

const BLOG_KEYWORD_ADDITIONS = {
  'great-migration-guide': [
    'East Africa migration', 'best migration safari', 'migration Tanzania Kenya',
    'wildebeest crossing time', 'Great Migration months', 'Africa wildlife spectacle',
  ],
  'tanzania-safari-cost': [
    'Africa safari all inclusive cost', 'Tanzania safari per day', 'how much safari Africa',
    'Tanzania safari 2026 prices', 'Tanzania safari value for money',
  ],
  'best-time-to-visit-serengeti': [
    'Serengeti rainy season', 'Serengeti green season', 'Serengeti best months',
    'Serengeti peak season', 'Tanzania safari calendar',
  ],
  'gorilla-trekking-rwanda': [
    'Rwanda gorilla permit price', 'gorilla trekking permit cost', 'book gorilla trek Rwanda',
    'gorilla trekking experience', 'Rwanda gorilla safety',
  ],
  'kilimanjaro-climbing-guide': [
    'Kilimanjaro route comparison', 'Kilimanjaro difficulty', 'Kilimanjaro weather',
    'Kilimanjaro gear list', 'Kilimanjaro summit night',
  ],
  'tanzania-vs-kenya-safari': [
    'Tanzania Kenya wildlife', 'Serengeti Masai Mara difference', 'East Africa safari choice',
    'Kenya vs Tanzania cost', 'Tanzania Kenya animals',
  ],
  'safari-packing-list': [
    'safari clothes list', 'what shoes for safari', 'safari bag weight',
    'packing for Africa', 'safari essentials list',
  ],
  'big-five-africa-tanzania': [
    'big five Tanzania parks', 'where to see rhino Tanzania', 'big five wildlife',
    'Tanzania lion safari', 'big five Africa locations',
  ],
  'zanzibar-travel-guide': [
    'Zanzibar visa', 'Zanzibar weather best time', 'Zanzibar budget',
    'Zanzibar from UK', 'Zanzibar snorkeling diving',
  ],
  'safari-honeymoon-tanzania': [
    'honeymoon safari Africa cost', 'best honeymoon safari', 'Tanzania honeymoon packages',
    'romantic African safari', 'Africa honeymoon holiday',
  ],
  'family-safari-africa': [
    'family safari packing list', 'best age for safari kids', 'family safari cost Africa',
    'kid friendly safari parks', 'Africa school holiday safari',
  ],
  'ngorongoro-crater-guide': [
    'Ngorongoro day trip', 'Ngorongoro stay overnight', 'Ngorongoro rhino',
    'Ngorongoro highlands', 'Ngorongoro lodge',
  ],
  'serengeti-vs-masai-mara': [
    'Serengeti big cats', 'Masai Mara big five', 'Mara River vs Serengeti',
    'Kenya migration vs Tanzania', 'best migration park Africa',
  ],
  '7-day-tanzania-safari-itinerary': [
    'Tanzania 7 day cost', 'one week East Africa', '7 day safari budget',
    'Tanzania week safari', 'Tanzania first safari',
  ],
  'budget-safari-tanzania': [
    'cheapest Africa safari', 'Tanzania safari under $1000', 'low budget Tanzania',
    'Tanzania affordable tour', 'Africa safari on a budget',
  ],
  'chimpanzee-trekking-tanzania': [
    'Gombe Stream Tanzania', 'Mahale Mountains Tanzania', 'Tanzania chimps',
    'chimpanzee tracking Africa', 'Jane Goodall Gombe',
  ],
  'luxury-safari-tanzania': [
    'Tanzania luxury lodge', 'Tanzania five star safari', 'private game reserve Tanzania',
    'Tanzania bespoke safari', 'ultra luxury Tanzania',
  ],
  'safari-photography-tips': [
    'Africa wildlife camera', 'safari camera gear', 'wildlife lens recommendations',
    'golden hour safari', 'Africa photo tour',
  ],
  'ruaha-national-park-guide': [
    'Ruaha lions Tanzania', 'Ruaha elephants', 'Ruaha safari cost',
    'Tanzania southern parks', 'Ruaha dry season',
  ],
  'tanzania-vs-south-africa-safari': [
    'Kruger vs Serengeti', 'South Africa Tanzania price', 'Big Five Africa options',
    'South Africa Tanzania comparison', 'best Africa first safari',
  ],
  'mountain-biking-arusha': [
    'Arusha activities', 'Arusha adventure', 'Tanzania adventure tourism',
    'cycling Arusha', 'Arusha day trip',
  ],
  'zanzibar-experience': [
    'Zanzibar culture', 'Zanzibar history', 'Zanzibar dhow sailing',
    'Zanzibar sunset cruise', 'Zanzibar food tour',
  ],
  'the-maasai-tribe': [
    'Maasai cultural visit', 'Maasai boma', 'traditional Maasai Africa',
    'Maasai jumping ceremony', 'Kenya Tanzania Maasai',
  ],
}

// ─────────────────────────────────────────────────────────
// Helper: apply replacements to a file
// ─────────────────────────────────────────────────────────

async function applyReplacements(filePath, replacements) {
  let content
  try {
    content = await read(filePath)
  } catch {
    console.warn(`  SKIP (not found): ${filePath}`)
    return
  }
  let changed = false
  for (const { find, replace } of replacements) {
    if (content.includes(find)) {
      content = content.replace(find, replace)
      changed = true
    } else {
      console.warn(`  WARN: pattern not found in ${filePath}`)
    }
  }
  if (changed) await write(filePath, content)
}

// ─────────────────────────────────────────────────────────
// MAIN
// ─────────────────────────────────────────────────────────

async function main() {
  console.log('\n─── Static pages ───')
  for (const { files, find, replace } of STATIC_PAGES) {
    for (const file of files) {
      await applyReplacements(file, [{ find, replace }])
    }
  }

  console.log('\n─── generateMetadata pages ───')
  for (const { files, find, replace } of GENERATE_METADATA_PAGES) {
    for (const file of files) {
      await applyReplacements(file, [{ find, replace }])
    }
  }

  console.log('\n─── Safaris [slug] page ───')
  await updateSafariPage()

  console.log('\n─── Trekking [route] page ───')
  await updateTrekkingRoutePage()

  console.log('\n─── Destinations [slug] page ───')
  await updateDestinationPage()

  console.log('\n─── Blog keywords ───')
  await updateBlogKeywords()

  console.log('\n✅ All keyword enrichments complete.')
}

async function updateSafariPage() {
  const files = [
    'src/app/[locale]/safaris/[slug]/page.tsx',
    'src/app/safaris/[slug]/page.tsx',
  ]
  for (const file of files) {
    let content
    try { content = await read(file) } catch { console.warn(`  SKIP: ${file}`); continue }

    // Insert SAFARI_KEYWORDS map after the imports block (after last import line)
    if (content.includes('SAFARI_KEYWORDS')) {
      console.warn(`  Already has SAFARI_KEYWORDS: ${file}`)
      continue
    }

    // Insert the map before the Props interface (or before generateStaticParams)
    const insertBefore = 'interface Props {'
    if (!content.includes(insertBefore)) {
      console.warn(`  WARN: could not find insertion point in ${file}`)
      continue
    }
    content = content.replace(insertBefore, SAFARI_KEYWORDS_BLOCK + insertBefore)

    // Add keywords to the generateMetadata return
    const metaFind = `    title: \`\${pkg.name} | Tanzania Safari\`,
    description: \`\${pkg.name} — \${pkg.duration} nights starting from $\${pkg.priceFrom.toLocaleString()}/person. \${pkg.highlights[0]}.\`,
  }`
    const metaReplace = `    title: \`\${pkg.name} | Tanzania Safari\`,
    description: \`\${pkg.name} — \${pkg.duration} nights starting from $\${pkg.priceFrom.toLocaleString()}/person. \${pkg.highlights[0]}.\`,
    keywords: SAFARI_KEYWORDS[slug] ?? DEFAULT_SAFARI_KEYWORDS,
  }`
    if (content.includes(metaFind)) {
      content = content.replace(metaFind, metaReplace)
    } else {
      console.warn(`  WARN: generateMetadata return not found in ${file}`)
    }

    await write(file, content)
  }
}

async function updateTrekkingRoutePage() {
  const files = [
    'src/app/[locale]/trekking/[route]/page.tsx',
    'src/app/trekking/[route]/page.tsx',
  ]
  for (const file of files) {
    let content
    try { content = await read(file) } catch { console.warn(`  SKIP: ${file}`); continue }

    if (content.includes('ROUTE_META')) {
      console.warn(`  Already has ROUTE_META: ${file}`)
      continue
    }

    // Replace the static metadata export with generateMetadata
    const staticMeta = `export const metadata: Metadata = {
  title: 'Kilimanjaro Trekking & Mountain Climbing Tanzania',
  description:
    "Climb Africa's highest peak with Tanzania's most experienced local guides. Machame, Lemosho, Marangu and Rongai routes. TANAPA certified, full safety backup.",
}`

    if (!content.includes(staticMeta)) {
      // Try the hub-page version (same title)
      console.warn(`  WARN: static metadata block not found in ${file}`)
      continue
    }

    content = content.replace(staticMeta, ROUTE_META_BLOCK.trimEnd())
    // Remove the unused `import type { Metadata }` since generateMetadata now uses inline import
    // Actually keep it as-is since we reference `import('next').Metadata` inline in the map
    await write(file, content)
  }
}

async function updateDestinationPage() {
  const files = [
    'src/app/[locale]/destinations/[slug]/page.tsx',
    'src/app/destinations/[slug]/page.tsx',
  ]
  for (const file of files) {
    let content
    try { content = await read(file) } catch { console.warn(`  SKIP: ${file}`); continue }

    if (content.includes('DEST_KEYWORDS')) {
      console.warn(`  Already has DEST_KEYWORDS: ${file}`)
      continue
    }

    // Build the DEST_KEYWORDS block as a string
    const destMapLines = ['const DEST_KEYWORDS = {']
    for (const [slug, kws] of Object.entries(DEST_KEYWORDS)) {
      destMapLines.push(`  '${slug}': [`)
      for (const kw of kws) destMapLines.push(`    '${kw}',`)
      destMapLines.push('  ],')
    }
    destMapLines.push('}')
    const destMapBlock = '\n' + destMapLines.join('\n') + '\n'

    // Insert before the Props interface
    const insertBefore = 'const MONTH_NAMES'
    if (!content.includes(insertBefore)) {
      console.warn(`  WARN: insertion point not found in ${file}`)
      continue
    }
    content = content.replace(insertBefore, destMapBlock + insertBefore)

    // Replace the 3-keyword return with per-slug + fallback
    const oldKeywords = `    keywords: [\`\${dest.name} safari\`, \`\${dest.name} tour\`, 'Tanzania safari'],`
    const newKeywords = `    keywords: DEST_KEYWORDS[slug] ?? [
      \`\${dest.name} safari\`, \`\${dest.name} tour\`, \`\${dest.name} Tanzania\`,
      \`visit \${dest.name}\`, \`\${dest.name} wildlife\`, \`\${dest.name} 2026\`,
      'Tanzania safari', 'East Africa safari', 'Tanzania tour operator', 'Africa safari holiday',
    ],`
    if (content.includes(oldKeywords)) {
      content = content.replace(oldKeywords, newKeywords)
    } else {
      console.warn(`  WARN: old keywords line not found in ${file}`)
    }

    await write(file, content)
  }
}

async function updateBlogKeywords() {
  const file = 'src/data/blog/index.ts'
  let content
  try { content = await read(file) } catch { console.warn(`  SKIP: ${file}`); return }

  for (const [slug, additions] of Object.entries(BLOG_KEYWORD_ADDITIONS)) {
    // Find the keywords array closing `]` for this specific slug's entry
    // We match `slug: 'SLUG',` then find the next `keywords: [` block
    const slugMarker = `  slug: '${slug}',`
    const slugIdx = content.indexOf(slugMarker)
    if (slugIdx === -1) {
      console.warn(`  WARN: blog slug '${slug}' not found`)
      continue
    }
    // Find the keywords array for this entry
    const kwStart = content.indexOf("  keywords: [", slugIdx)
    if (kwStart === -1) { console.warn(`  WARN: keywords not found for '${slug}'`); continue }
    const kwEnd = content.indexOf('\n  ],\n', kwStart)
    if (kwEnd === -1) { console.warn(`  WARN: keywords end not found for '${slug}'`); continue }

    const insertionPoint = content.slice(0, kwEnd)
    const tail = content.slice(kwEnd)
    const addStr = additions.map(k => `    '${k}',`).join('\n')
    content = insertionPoint + '\n' + addStr + tail
  }

  await write(file, content)
}

main().catch((e) => { console.error(e); process.exit(1) })
