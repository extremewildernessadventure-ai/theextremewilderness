export interface ItineraryDay {
  day: number
  title: string
  description: string
  accommodation: string
  meals: string
}

export interface SafariPackage {
  slug: string
  name: string
  duration: number
  destinations: string[]
  type: 'wildlife' | 'trekking' | 'beach' | 'combination'
  priceFrom: number
  groupSize: { min: number; max: number }
  highlights: string[]
  itinerary: ItineraryDay[]
  included: string[]
  excluded: string[]
  heroImage: string
  gallery: string[]
  badge?: 'bestseller' | 'new' | 'popular'
  bestFor: string[]
}

export const packages: SafariPackage[] = [
  {
    slug: '7-day-serengeti-ngorongoro',
    name: '7 Days Serengeti & Ngorongoro',
    duration: 7,
    destinations: ['serengeti', 'ngorongoro', 'tarangire'],
    type: 'wildlife',
    priceFrom: 3200,
    groupSize: { min: 1, max: 8 },
    badge: 'bestseller',
    bestFor: ['couples', 'honeymoon', 'families', 'solo'],
    highlights: [
      'Great Migration in the Serengeti',
      'Big Five in Ngorongoro Crater',
      'Tarangire elephant herds',
      'Luxury tented camps in the bush',
      'Expert TANAPA-certified guides',
    ],
    heroImage: '/images/gallery/safari-001.jpg',
    gallery: [
      '/images/gallery/safari-002.jpg',
      '/images/gallery/safari-003.jpg',
      '/images/gallery/safari-004.jpg',
    ],
    included: [
      'All park entrance fees',
      'All game drives in 4x4 Land Cruiser',
      'Professional English-speaking guide',
      'All meals as specified',
      'Accommodation as per itinerary',
      'Bottled water during game drives',
      'Airport transfers',
    ],
    excluded: [
      'International flights',
      'Visa fees ($50 USD)',
      'Travel insurance',
      'Tips and gratuities',
      'Personal expenses',
      'Alcoholic beverages',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Arusha',
        description:
          'Meet your guide at Kilimanjaro International Airport. Transfer to your hotel in Arusha for an overnight rest and safari briefing.',
        accommodation: 'Arusha Coffee Lodge',
        meals: 'Dinner',
      },
      {
        day: 2,
        title: 'Tarangire National Park',
        description:
          "After breakfast, drive to Tarangire NP. Spend the day on game drives searching for the park's legendary elephant herds, tree-climbing lions, and massive baobab trees. Overnight in camp.",
        accommodation: 'Tarangire Treetops',
        meals: 'All meals',
      },
      {
        day: 3,
        title: 'Drive to the Serengeti',
        description:
          'Morning game drive in Tarangire, then continue to the Serengeti. En route, descend into the Ngorongoro Conservation Area and see the crater rim. Arrive Serengeti in time for an afternoon game drive.',
        accommodation: 'Serengeti Pioneer Camp',
        meals: 'All meals',
      },
      {
        day: 4,
        title: 'Full Day in the Serengeti',
        description:
          'Full day game drives in the Serengeti. Track lions, cheetahs, and the vast herds of the plains. Sundowner with sweeping views of Africa.',
        accommodation: 'Serengeti Pioneer Camp',
        meals: 'All meals',
      },
      {
        day: 5,
        title: 'Serengeti & Migration',
        description:
          "Morning game drives following the migration herds. Afternoon at leisure or optional balloon safari at sunrise (extra cost). Another evening around the campfire.",
        accommodation: 'Serengeti Pioneer Camp',
        meals: 'All meals',
      },
      {
        day: 6,
        title: 'Ngorongoro Crater Descent',
        description:
          "Early morning drive to Ngorongoro. Descend into the crater for a full day's game drive — this is where the Big Five all reside in a single spectacular bowl. Rhino sightings here are reliable.",
        accommodation: 'Ngorongoro Serena Lodge',
        meals: 'All meals',
      },
      {
        day: 7,
        title: 'Departure',
        description:
          'Morning game drive on the crater rim or cultural Maasai visit. Transfer to Arusha for your flight home. Safari memories that will last a lifetime.',
        accommodation: 'N/A',
        meals: 'Breakfast',
      },
    ],
  },
  {
    slug: '10-day-northern-circuit',
    name: '10 Days Ultimate Northern Circuit',
    duration: 10,
    destinations: ['serengeti', 'ngorongoro', 'tarangire', 'manyara'],
    type: 'wildlife',
    priceFrom: 4800,
    groupSize: { min: 1, max: 6 },
    badge: 'popular',
    bestFor: ['couples', 'honeymoon', 'solo'],
    highlights: [
      'Complete Northern Tanzania circuit',
      'All four flagship parks',
      'Great Migration at its peak',
      'Lake Manyara flamingos and tree-climbing lions',
      'Olduvai Gorge — the Cradle of Mankind',
    ],
    heroImage: '/images/gallery/safari-005.jpg',
    gallery: [
      '/images/gallery/safari-006.jpg',
      '/images/gallery/safari-007.jpg',
    ],
    included: [
      'All park entrance fees',
      'All game drives in 4x4 Land Cruiser',
      'Professional English-speaking guide',
      'All meals as specified',
      'Accommodation as per itinerary',
      'Airport transfers',
    ],
    excluded: ['International flights', 'Visa fees', 'Travel insurance', 'Tips'],
    itinerary: [],
  },
  {
    slug: '10-day-safari-zanzibar',
    name: '10 Days Safari & Zanzibar Beach',
    duration: 10,
    destinations: ['serengeti', 'ngorongoro', 'zanzibar'],
    type: 'combination',
    priceFrom: 4200,
    groupSize: { min: 1, max: 8 },
    badge: 'bestseller',
    bestFor: ['couples', 'honeymoon', 'families'],
    highlights: [
      'Serengeti wildlife + Zanzibar beaches',
      'Perfect combination holiday',
      'Dhow sunset cruise in Stone Town',
      'Snorkeling on Mnemba Atoll',
      'Spice plantation tour',
    ],
    heroImage: '/images/gallery/safari-008.jpg',
    gallery: [
      '/images/gallery/safari-009.jpg',
      '/images/gallery/safari-011.jpg',
    ],
    included: [
      'All park entrance fees',
      'All game drives',
      'Zanzibar hotel (beach view)',
      'Spice tour',
      'Stone Town walking tour',
      'Airport transfers',
    ],
    excluded: ['International flights', 'Visa fees', 'Travel insurance', 'Tips'],
    itinerary: [],
  },
  {
    slug: '5-day-serengeti-fly-in',
    name: '5 Days Serengeti Fly-In Safari',
    duration: 5,
    destinations: ['serengeti'],
    type: 'wildlife',
    priceFrom: 3800,
    groupSize: { min: 1, max: 4 },
    badge: 'new',
    bestFor: ['couples', 'solo', 'honeymoon'],
    highlights: [
      'Fly directly into the Serengeti',
      'No long drives — maximum game time',
      'Ultra-exclusive camps deep in the Serengeti',
      'Hot air balloon safari included',
      'Premium experience for short time',
    ],
    heroImage: '/images/gallery/safari-013.jpg',
    gallery: ['/images/gallery/safari-014.jpg'],
    included: ['Charter flights within Tanzania', 'All park fees', 'All meals', 'Hot air balloon safari', 'All game drives'],
    excluded: ['International flights', 'Visa fees', 'Travel insurance', 'Tips'],
    itinerary: [],
  },
  {
    slug: 'kilimanjaro-machame-7day',
    name: 'Kilimanjaro Machame Route — 7 Days',
    duration: 7,
    destinations: ['arusha'],
    type: 'trekking',
    priceFrom: 2100,
    groupSize: { min: 1, max: 12 },
    bestFor: ['solo', 'couples', 'groups'],
    highlights: [
      'Most scenic Kilimanjaro route',
      'Highest success rate of all routes',
      'Summit via Lava Tower acclimatization',
      'Experienced mountain guides and porters',
      'Full equipment and safety backup',
    ],
    heroImage: '/images/gallery/safari-015.jpg',
    gallery: ['/images/gallery/safari-016.jpg'],
    included: [
      'Park fees and camping fees',
      'Experienced mountain guide',
      'Porters (1 per trekker + group)',
      'Cook and camp crew',
      'All meals on mountain',
      'Sleeping tent, dining tent',
      'Rescue equipment',
    ],
    excluded: ['International flights', 'Personal trekking gear', 'Travel insurance', 'Tips', 'Hotel before/after'],
    itinerary: [],
  },
  {
    slug: '7-day-southern-circuit',
    name: '7 Days Southern Circuit — Ruaha & Nyerere',
    duration: 7,
    destinations: ['ruaha', 'nyerere'],
    type: 'wildlife',
    priceFrom: 3500,
    groupSize: { min: 1, max: 6 },
    bestFor: ['solo', 'couples'],
    highlights: [
      'Wild dogs and lions in Ruaha',
      'Boat safaris on the Rufiji River',
      'Walking safaris in Nyerere',
      'No crowds — genuine wilderness',
      'Predator capital of Tanzania',
    ],
    heroImage: '/images/gallery/safari-018.jpg',
    gallery: ['/images/gallery/safari-019.jpg'],
    included: ['Park fees', 'All game drives', 'Boat safari', 'Walking safari', 'All meals', 'Flights within Tanzania'],
    excluded: ['International flights', 'Visa fees', 'Travel insurance', 'Tips'],
    itinerary: [],
  },
]
