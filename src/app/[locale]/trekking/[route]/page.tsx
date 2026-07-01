import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { ArrowLeft, Clock, TrendingUp, Trophy, Check, MapPin } from 'lucide-react'
import { routing } from '@/i18n/routing'
import { getTranslations } from 'next-intl/server'
import BookNowButton from '@/components/booking/BookNowButton'
import KiliRouteMapSVG from '@/components/trekking/KiliRouteMapSVG'

// ─── Types ───────────────────────────────────────────────────────────────────

interface DayItinerary {
  day: number
  campStart: string
  elevStart: string
  campEnd: string
  elevEnd: string
  duration: string
  description: string
}

interface PricingTier {
  label: string
  days: number
  priceFrom: number
  note?: string
}

interface FAQItem {
  q: string
  a: string
}

interface RouteInfo {
  id: string
  name: string
  nickname: string
  heroImage: string
  galleryImages: [string, string, string]
  mapFile: string
  difficulty: string
  difficultyColor: string
  days: string
  successRate: string
  maxAlt: string
  startGate: string
  bestMonths: string
  seoDescription: string
  overview: string
  highlights: string[]
  itinerary: DayItinerary[]
  pricing: PricingTier[]
  included: string[]
  excluded: string[]
  faqs: FAQItem[]
}

// ─── Shared Data ──────────────────────────────────────────────────────────────

const INCLUDED = [
  'All TANAPA park & conservation fees',
  'AMREF-certified lead guide + assistant guides',
  'Experienced porters (max 9 kg per porter)',
  'Full board meals on the mountain',
  'High-quality camping & mess tent equipment',
  'Emergency oxygen cylinder & pulse oximeter',
  'Hotel accommodation (1 night pre/post trek)',
  'Airport transfers',
  'Uhuru Peak summit certificate',
]

const EXCLUDED = [
  'International flights & Tanzania visa',
  'Travel insurance (mandatory)',
  'Tips for guide & porters (recommended)',
  'Personal equipment (sleeping bag, poles, etc.)',
  'Alcoholic beverages',
  'Personal laundry & incidentals',
]

// ─── Route Data ───────────────────────────────────────────────────────────────

const routeData: Record<string, RouteInfo> = {
  machame: {
    id: 'machame',
    name: 'Machame Route',
    nickname: 'The Whiskey Route',
    heroImage: '/images/gallery/kilimanjaro.png',
    galleryImages: [
      '/images/gallery/machame1.jpg',
      '/images/gallery/Barafu-Camp.jpg',
      '/images/gallery/Uhuru-Peak.jpg',
    ],
    mapFile: 'machame.webp',
    difficulty: 'Hard',
    difficultyColor: 'text-orange-500',
    days: '6–7 days',
    successRate: '85%',
    maxAlt: '5,895m',
    startGate: 'Machame Gate (1,800m)',
    bestMonths: 'Jan–Feb & Jul–Sep',
    seoDescription:
      'Climb Kilimanjaro via the Machame Route — the most scenic and popular path. 6–7 days, Barranco Wall scramble, Lava Tower acclimatisation. Certified local guides.',
    overview:
      'The Machame Route is the most popular and arguably most scenic route on Kilimanjaro, earning its nickname "The Whiskey Route" for its challenging terrain. Beginning at the Machame Gate on the southern slopes, the trail winds through magnificent rainforest before ascending to the wide Shira Plateau. The route\'s standout acclimatisation feature is Day 3\'s climb to Lava Tower (4,630m) followed by a descent to Barranco Camp — a critical "climb high, sleep low" day that significantly improves summit success rates. The dramatic Barranco Wall scramble on Day 4 is a highlight for most trekkers. Descent is via the Mweka trail.',
    highlights: [
      'Dramatic Barranco Wall scramble',
      'Lava Tower acclimatisation climb',
      'Seven distinct ecological zones',
      'Stunning Shira Plateau views',
      'Most scenic southern approach',
      'Descent via Mweka trail',
    ],
    itinerary: [
      {
        day: 1,
        campStart: 'Machame Gate',
        elevStart: '1,800m',
        campEnd: 'Machame Camp',
        elevEnd: '3,020m',
        duration: '5–7 hrs · 11 km',
        description:
          'Trek begins at Machame Gate through lush montane rainforest. The trail is steep in places with tree roots and mud. Arrive at Machame Camp in the heath zone for your first night on the mountain.',
      },
      {
        day: 2,
        campStart: 'Machame Camp',
        elevStart: '3,020m',
        campEnd: 'Shira Camp',
        elevEnd: '3,840m',
        duration: '4–6 hrs · 5 km',
        description:
          'The forest gives way to open moorland and giant heather. The trail ascends steeply before levelling onto the expansive Shira Plateau. Stunning panoramas of the southern ice fields begin to appear.',
      },
      {
        day: 3,
        campStart: 'Shira Camp',
        elevStart: '3,840m',
        campEnd: 'Barranco Camp',
        elevEnd: '3,976m',
        duration: '7–8 hrs · 10 km',
        description:
          'The critical acclimatisation day. Trek east to the dramatic Lava Tower (4,630m) for lunch — the highest point yet — then descend to Barranco Camp. "Climb high, sleep low" significantly boosts summit success rates.',
      },
      {
        day: 4,
        campStart: 'Barranco Camp',
        elevStart: '3,976m',
        campEnd: 'Barafu Camp',
        elevEnd: '4,673m',
        duration: '6–7 hrs · 9 km',
        description:
          'Start with the famous Barranco Wall — a near-vertical scramble with breathtaking exposure but safe hand-and-foot holds. Traverse to Karanga Valley, rest, then continue to Barafu High Camp for your summit attempt.',
      },
      {
        day: 5,
        campStart: 'Barafu Camp',
        elevStart: '4,673m',
        campEnd: 'Uhuru Peak → Mweka Camp',
        elevEnd: '5,895m → 3,100m',
        duration: '12–14 hrs · 17 km',
        description:
          'Depart around midnight. Ascend through freezing temperatures and scree to Stella Point (5,739m) on the crater rim, then follow the rim to Uhuru Peak — Africa\'s highest point. Descend all the way to Mweka Camp for a well-earned night\'s sleep.',
      },
      {
        day: 6,
        campStart: 'Mweka Camp',
        elevStart: '3,100m',
        campEnd: 'Mweka Gate',
        elevEnd: '1,640m',
        duration: '3–4 hrs · 10 km',
        description:
          'Final descent through rainforest back to Mweka Gate. Summit certificates are awarded at the park gate. Transfer to your hotel for a hot shower, celebratory dinner, and a very good night\'s sleep.',
      },
    ],
    pricing: [
      { label: '6-Day Trek', days: 6, priceFrom: 1658, note: 'Standard itinerary' },
      { label: '7-Day Trek', days: 7, priceFrom: 1850, note: 'Extra night at Karanga — recommended' },
    ],
    included: INCLUDED,
    excluded: EXCLUDED,
    faqs: [
      {
        q: 'How fit do I need to be for the Machame Route?',
        a: 'You should be in good cardiovascular shape and able to walk 6–8 hours carrying a day pack. Prior hiking experience is beneficial. We recommend regular cardio training (running, cycling, hiking) for 2–3 months before your trek.',
      },
      {
        q: 'Is the Barranco Wall dangerous?',
        a: 'The Barranco Wall looks intimidating but is not technically difficult — it\'s a scramble (hands and feet) rather than a vertical climb. Our guides accompany you every step of the way. Most trekkers find it exhilarating rather than frightening.',
      },
      {
        q: 'What makes Machame better than Marangu?',
        a: 'Machame\'s longer duration and "climb high, sleep low" acclimatisation profile gives it a significantly higher summit success rate (85% vs 65%). It is more scenic, more varied, and rated more highly by returning trekkers — though it is more physically demanding.',
      },
      {
        q: 'Can I do Machame in 6 days instead of 7?',
        a: 'Yes — our standard itinerary is 6 days, with 7 days available (adding an extra night at Karanga for better acclimatisation). We strongly recommend the 7-day option for trekkers who have not spent time at altitude before.',
      },
      {
        q: 'What equipment do I need to bring?',
        a: 'A warm sleeping bag (rated to -15°C), warm layers (fleece + down jacket), waterproof outer shell, trekking boots, gaiters, trekking poles, and sun protection. We provide a full packing list upon booking.',
      },
    ],
  },

  lemosho: {
    id: 'lemosho',
    name: 'Lemosho Route',
    nickname: 'The Scenic Route',
    heroImage: '/images/gallery/kilimanjaro%20(4).png',
    galleryImages: [
      '/images/gallery/Lemosho.jpg',
      '/images/gallery/Shira-1-Camp.jpeg',
      '/images/gallery/Uhuru-Peak-1.jpg',
    ],
    mapFile: 'lemosho.webp',
    difficulty: 'Moderate',
    difficultyColor: 'text-yellow-500',
    days: '7–8 days',
    successRate: '90%',
    maxAlt: '5,895m',
    startGate: 'Londorossi Gate (2,250m)',
    bestMonths: 'Jan–Feb & Jul–Sep',
    seoDescription:
      'Climb Kilimanjaro via the Lemosho Route — widely considered the best overall route with the highest summit success rate. 7–8 days from the remote western slopes.',
    overview:
      'The Lemosho Route is widely regarded as the finest route on Kilimanjaro. Starting from the remote Londorossi Gate on the western slopes, Lemosho traverses the pristine Shira Plateau before joining the Southern Circuit and approaching the summit from the south. Its longer duration provides superior acclimatisation, delivering a 90%+ summit success rate — the highest of all standard routes. The first day is accompanied by armed rangers as the trail passes through elephant and buffalo territory. Descent is via the Mweka trail.',
    highlights: [
      'Remote & pristine western start',
      'Full Shira Plateau traverse',
      'Best acclimatisation profile',
      'Highest standard route success rate (90%+)',
      'Less crowded on lower slopes',
      'Armed ranger escort on Day 1',
    ],
    itinerary: [
      {
        day: 1,
        campStart: 'Londorossi Gate',
        elevStart: '2,250m',
        campEnd: 'Big Tree Camp',
        elevEnd: '2,780m',
        duration: '3–4 hrs · 8 km',
        description:
          'Short, gentle first day through ancient montane forest. Armed rangers accompany the group through elephant and buffalo territory. Arrive at camp early — rest and acclimatise before the days ahead.',
      },
      {
        day: 2,
        campStart: 'Big Tree Camp',
        elevStart: '2,780m',
        campEnd: 'Shira 1 Camp',
        elevEnd: '3,500m',
        duration: '5–6 hrs · 9 km',
        description:
          'Forest transitions to open moorland as you ascend to the southern edge of the Shira Plateau. The views of Kibo\'s summit cone begin to appear. Arrive at Shira 1 Camp on the plateau\'s western edge.',
      },
      {
        day: 3,
        campStart: 'Shira 1 Camp',
        elevStart: '3,500m',
        campEnd: 'Shira 2 Camp',
        elevEnd: '3,840m',
        duration: '4–5 hrs · 9 km',
        description:
          'Cross the broad, scenic Shira Plateau — one of the world\'s highest plateaus. Rocky outcrops, giant lobelia plants and sweeping views towards the summit. Arrive at Shira 2 Camp beneath the Cathedral peak.',
      },
      {
        day: 4,
        campStart: 'Shira 2 Camp',
        elevStart: '3,840m',
        campEnd: 'Barranco Camp',
        elevEnd: '3,976m',
        duration: '7–8 hrs · 10 km',
        description:
          'The key acclimatisation day. Hike east to Lava Tower (4,630m) for lunch in the alpine desert zone, then descend to Barranco Camp. This "climb high, sleep low" strategy is central to Lemosho\'s excellent success rate.',
      },
      {
        day: 5,
        campStart: 'Barranco Camp',
        elevStart: '3,976m',
        campEnd: 'Karanga Camp',
        elevEnd: '4,035m',
        duration: '4–5 hrs · 5 km',
        description:
          'Begin with the dramatic Barranco Wall scramble — spectacular exposed scrambling with magnificent views. Traverse to the Karanga Valley for a shorter acclimatisation day. Rest, hydrate and eat well.',
      },
      {
        day: 6,
        campStart: 'Karanga Camp',
        elevStart: '4,035m',
        campEnd: 'Barafu High Camp',
        elevEnd: '4,673m',
        duration: '4–5 hrs · 5 km',
        description:
          'Final approach to the wind-swept Barafu High Camp. Brief rest, early dinner, summit briefing. Attempt to sleep ahead of the midnight departure for the summit.',
      },
      {
        day: 7,
        campStart: 'Barafu Camp',
        elevStart: '4,673m',
        campEnd: 'Uhuru Peak → Mweka Camp',
        elevEnd: '5,895m → 3,100m',
        duration: '12–14 hrs · 17 km',
        description:
          'Depart around midnight, guided through darkness to Stella Point (5,739m) on the crater rim, then along the rim to Uhuru Peak — the Roof of Africa. Descend to Mweka Camp for the night.',
      },
      {
        day: 8,
        campStart: 'Mweka Camp',
        elevStart: '3,100m',
        campEnd: 'Mweka Gate',
        elevEnd: '1,640m',
        duration: '3–4 hrs · 10 km',
        description:
          'Final descent through rainforest to Mweka Gate. Certificates are awarded. Transfer to your hotel — celebrate one of the great achievements of your life.',
      },
    ],
    pricing: [
      { label: '7-Day Trek', days: 7, priceFrom: 1931, note: 'Standard itinerary' },
      { label: '8-Day Trek', days: 8, priceFrom: 2100, note: 'Extra acclimatisation night — recommended' },
    ],
    included: INCLUDED,
    excluded: EXCLUDED,
    faqs: [
      {
        q: 'Why is Lemosho considered the best route?',
        a: 'Lemosho combines remote, pristine scenery with the best acclimatisation profile of any standard route. The longer duration (7–8 days) allows your body more time to adjust, resulting in a 90%+ summit success rate — the highest of any standard route.',
      },
      {
        q: 'Are there armed rangers on the Lemosho Route?',
        a: 'Yes — on Day 1, armed park rangers accompany your group through the lower forest where elephants and buffalo are present. This is standard procedure and adds an exciting wildlife dimension to the trek.',
      },
      {
        q: 'How does Lemosho differ from Machame?',
        a: 'Both routes join the Southern Circuit at Barranco Camp. Lemosho starts further west (Londorossi Gate), includes the full Shira Plateau traverse, and is less crowded on the lower slopes. Its longer duration gives better acclimatisation and a higher success rate.',
      },
      {
        q: 'What is the minimum recommended duration for Lemosho?',
        a: 'We recommend the 8-day itinerary, especially for those without recent high-altitude experience. The extra day at Karanga provides valuable acclimatisation time and meaningfully improves your chances of reaching Uhuru Peak.',
      },
      {
        q: 'Can I see wildlife on the Lemosho Route?',
        a: 'Yes — the lower forest sections on Days 1–2 pass through habitat with elephants, buffalo, colobus monkeys, and diverse bird life. As you ascend, you\'ll encounter unique high-altitude flora including giant lobelia and giant senecio (groundsel) plants.',
      },
    ],
  },

  marangu: {
    id: 'marangu',
    name: 'Marangu Route',
    nickname: 'The Coca-Cola Route',
    heroImage: '/images/gallery/kilimanjaro%20(1).png',
    galleryImages: [
      '/images/gallery/marangu.jpg',
      '/images/gallery/Horombo-Hut.png',
      '/images/gallery/Uhuru-Peak-7.jpg',
    ],
    mapFile: 'marangu.webp',
    difficulty: 'Moderate',
    difficultyColor: 'text-yellow-500',
    days: '5–6 days',
    successRate: '65%',
    maxAlt: '5,895m',
    startGate: 'Marangu Gate (1,879m)',
    bestMonths: 'Jan–Feb & Jul–Sep',
    seoDescription:
      'Climb Kilimanjaro via the classic Marangu Route — the only route with dormitory hut accommodation. 5–6 days, most affordable, ideal for trekkers who prefer huts over tents.',
    overview:
      'The Marangu Route is the original and most established route on Kilimanjaro, nicknamed the "Coca-Cola Route" for its relative accessibility and dormitory hut accommodation at every campsite. It is the only route on Kilimanjaro where trekkers sleep in huts rather than tents, making it the most comfortable and affordable option. The route ascends and descends via the same south-east path. While its lower price and comfortable huts are attractive, the shorter duration results in less acclimatisation time and a lower summit success rate. Best suited to very fit trekkers or those with prior high-altitude experience.',
    highlights: [
      'Only route with hut dormitory accommodation',
      'Most affordable Kilimanjaro option',
      'Gradual ascent through dense rainforest',
      'Less gear needed (no tent or sleeping mat)',
      'Classic trail with 60+ year history',
      'Same ascent and descent path',
    ],
    itinerary: [
      {
        day: 1,
        campStart: 'Marangu Gate',
        elevStart: '1,879m',
        campEnd: 'Mandara Hut',
        elevEnd: '2,720m',
        duration: '4–5 hrs · 8 km',
        description:
          'Enter Kilimanjaro National Park and trek through lush rainforest. Colobus monkeys are frequently spotted in the canopy. Arrive at Mandara Hut — comfortable A-frame huts with dormitory rooms, a dining hut and basic facilities.',
      },
      {
        day: 2,
        campStart: 'Mandara Hut',
        elevStart: '2,720m',
        campEnd: 'Horombo Hut',
        elevEnd: '3,720m',
        duration: '6–8 hrs · 12 km',
        description:
          'Forest transitions to open moorland with sweeping views toward Moshi and Mount Meru. The distinctive silhouette of Kibo comes into view. Arrive at Horombo Hut — the largest and best-equipped of the mountain huts.',
      },
      {
        day: 3,
        campStart: 'Horombo Hut',
        elevStart: '3,720m',
        campEnd: 'Kibo Hut',
        elevEnd: '4,703m',
        duration: '6 hrs · 10 km',
        description:
          'Leave vegetation behind and enter the stark alpine desert. Cross the saddle between Kibo and Mawenzi peaks. Arrive at Kibo Hut — eat, hydrate and rest before the midnight departure.',
      },
      {
        day: 4,
        campStart: 'Kibo Hut',
        elevStart: '4,703m',
        campEnd: 'Uhuru Peak → Horombo Hut',
        elevEnd: '5,895m → 3,720m',
        duration: '12–15 hrs · 19 km',
        description:
          'Depart around midnight. Ascend the steep scree to Gilman\'s Point (5,681m) on the crater rim, then along the rim to Uhuru Peak. Descend all the way to Horombo Hut — a long, demanding and deeply rewarding day.',
      },
      {
        day: 5,
        campStart: 'Horombo Hut',
        elevStart: '3,720m',
        campEnd: 'Marangu Gate',
        elevEnd: '1,879m',
        duration: '5–6 hrs · 20 km',
        description:
          'Final descent through moorland and rainforest back to Marangu Gate. Summit certificates are presented. Lunch and transfer to your hotel for a well-earned celebration.',
      },
    ],
    pricing: [
      { label: '5-Day Trek', days: 5, priceFrom: 1523, note: 'Standard itinerary' },
      { label: '6-Day Trek', days: 6, priceFrom: 1650, note: 'Extra acclimatisation at Horombo — recommended' },
    ],
    included: INCLUDED,
    excluded: EXCLUDED,
    faqs: [
      {
        q: 'Why is the Marangu success rate lower than other routes?',
        a: 'Marangu\'s shorter duration (5 days) gives your body less time to acclimatise. The rapid ascent on a single path means no altitude variation benefit. Very fit trekkers can succeed, but we recommend the 6-day option for a better chance at the summit.',
      },
      {
        q: 'Do I need to bring a sleeping bag for Marangu?',
        a: 'Yes — the huts provide beds and foam mattresses but not bedding. You\'ll need a warm sleeping bag rated to at least -10°C as temperatures at Kibo Hut can drop well below zero overnight.',
      },
      {
        q: 'Are the huts on Marangu shared with other groups?',
        a: 'Yes — the huts are communal dormitory-style accommodation that may be shared with other groups. During peak season (July–September) the huts can be busy. Booking in advance is essential to secure beds.',
      },
      {
        q: 'Is Marangu suitable for complete beginners?',
        a: 'Marangu has the most gentle terrain (no scrambling), but altitude is the primary challenge and doesn\'t discriminate. We recommend good fitness and ideally a 6-day itinerary for first-time Kilimanjaro trekkers choosing this route.',
      },
      {
        q: 'Why is it called the Coca-Cola Route?',
        a: 'The nickname reflects Marangu\'s long history as the most commercial and accessible route. The hut system and established trail have made it the "standard" Kilimanjaro experience for decades — the soft drink reference is about accessibility, not actual beverages on the trail.',
      },
    ],
  },

  rongai: {
    id: 'rongai',
    name: 'Rongai Route',
    nickname: 'The Northern Approach',
    heroImage: '/images/gallery/kilimanjaro%20(2).png',
    galleryImages: [
      '/images/gallery/rongai-1.jpg',
      '/images/gallery/Moir-Hut.jpg',
      '/images/gallery/Uhuru-Peak.jpg',
    ],
    mapFile: 'rongai.webp',
    difficulty: 'Easy–Moderate',
    difficultyColor: 'text-green-500',
    days: '6–7 days',
    successRate: '80%',
    maxAlt: '5,895m',
    startGate: 'Rongai Gate (1,950m)',
    bestMonths: 'Apr–May & Oct–Nov (rainy seasons elsewhere)',
    seoDescription:
      'Climb Kilimanjaro via the Rongai Route — the only northern approach, quieter trails, drier conditions. 6–7 days from near the Kenyan border. Ideal during the rainy season.',
    overview:
      'The Rongai Route is the only trail approaching Kilimanjaro from the north, starting near the Kenyan border. It is one of the quietest and least-trafficked routes on the mountain, offering a genuine wilderness feel with far fewer trekkers than the popular southern approaches. The northern slopes receive significantly less rainfall, making Rongai an excellent choice during the April–May and October–November rainy seasons when other routes become muddy and difficult. The gradient is gradual throughout, making it one of the easier physical routes. Summit and descent are via Kibo Hut and Marangu Gate.',
    highlights: [
      'Unique north side perspective',
      'Quietest, least-crowded route',
      'Best route during the rainy season',
      'Gentle gradient throughout',
      'Wilderness feel with few other trekkers',
      'Views of Mawenzi from Mawenzi Tarn',
    ],
    itinerary: [
      {
        day: 1,
        campStart: 'Rongai Gate',
        elevStart: '1,950m',
        campEnd: 'Simba Camp',
        elevEnd: '2,625m',
        duration: '4–5 hrs · 9 km',
        description:
          'Begin near the Kenyan border trekking through montane forest on the quiet northern slope. Occasionally spot wildlife including buffalo, elephant and colobus monkeys. Arrive at Simba Camp on the forest edge.',
      },
      {
        day: 2,
        campStart: 'Simba Camp',
        elevStart: '2,625m',
        campEnd: 'Second Cave Camp',
        elevEnd: '3,449m',
        duration: '4–5 hrs · 9 km',
        description:
          'Ascend through heath moorland on the northern slopes — a very different landscape from the southern routes. Volcanic plugs and lava formations create a dramatic, otherworldly terrain. Views towards Kenya on clear days.',
      },
      {
        day: 3,
        campStart: 'Second Cave Camp',
        elevStart: '3,449m',
        campEnd: 'Mawenzi Tarn Camp',
        elevEnd: '4,330m',
        duration: '6–7 hrs · 10 km',
        description:
          'Ascend into the alpine desert zone, skirting below the jagged peaks of Mawenzi — Kilimanjaro\'s dramatic secondary summit. Camp beneath Mawenzi at a stunning high-altitude glacial tarn with dramatic rocky scenery all around.',
      },
      {
        day: 4,
        campStart: 'Mawenzi Tarn Camp',
        elevStart: '4,330m',
        campEnd: 'Kibo Hut',
        elevEnd: '4,703m',
        duration: '5–6 hrs · 9 km',
        description:
          'Cross the vast saddle between Mawenzi and Kibo — flat, volcanic desert with almost no vegetation. The imposing bulk of Kibo grows ahead. Arrive at Kibo Hut, eat well, and rest before the midnight summit departure.',
      },
      {
        day: 5,
        campStart: 'Kibo Hut',
        elevStart: '4,703m',
        campEnd: 'Uhuru Peak → Horombo Hut',
        elevEnd: '5,895m → 3,720m',
        duration: '12–14 hrs · 19 km',
        description:
          'Midnight departure up steep scree to Gilman\'s Point (5,681m) on the crater rim, then west along the rim to Uhuru Peak — Africa\'s rooftop at 5,895m. Descend to Horombo Hut via the Marangu path for the night.',
      },
      {
        day: 6,
        campStart: 'Horombo Hut',
        elevStart: '3,720m',
        campEnd: 'Marangu Gate',
        elevEnd: '1,879m',
        duration: '5–6 hrs · 20 km',
        description:
          'Final descent through moorland and rainforest to Marangu Gate — a different gate from where the trek began, completing a north-to-south traverse of Kilimanjaro. Summit certificates presented at the gate.',
      },
    ],
    pricing: [
      { label: '6-Day Trek', days: 6, priceFrom: 1960, note: 'Standard itinerary' },
      { label: '7-Day Trek', days: 7, priceFrom: 2100, note: 'Extra acclimatisation at Second Cave' },
    ],
    included: INCLUDED,
    excluded: EXCLUDED,
    faqs: [
      {
        q: 'Why should I choose Rongai over Machame or Lemosho?',
        a: 'Choose Rongai if you want a quieter experience; if you\'re trekking during the rainy season (Apr–May or Oct–Nov); if you prefer a more gentle gradient; or if you\'d like a unique north-to-south traverse rather than an out-and-back route.',
      },
      {
        q: 'Is Rongai suitable during the rainy season?',
        a: 'Yes — it\'s one of the best routes for the rainy season. The northern slopes receive far less rainfall than the southern and western approaches. Conditions are significantly better than other routes during April–May.',
      },
      {
        q: 'Does Rongai share any trails with other routes?',
        a: 'The descent from the summit follows the Marangu Route path, descending through Kibo Hut, Horombo Hut and out at Marangu Gate — on the opposite side of the mountain from where you started. A satisfying traverse.',
      },
      {
        q: 'What makes the Rongai scenery different?',
        a: 'The northern slopes have a markedly different character — drier, more open, with dramatic lava formations and views toward Kenya. The Mawenzi Tarn campsite, set beneath the jagged Mawenzi peak, is one of the most dramatic on the entire mountain.',
      },
      {
        q: 'What wildlife might I see on Rongai?',
        a: 'The quieter northern slopes mean fewer people disturbing wildlife, so forest sightings on Day 1 can be more frequent than on busier southern routes. Elephant, buffalo and colobus monkeys are all possible in the lower forest sections.',
      },
    ],
  },

  umbwe: {
    id: 'umbwe',
    name: 'Umbwe Route',
    nickname: 'The Direct Route',
    heroImage: '/images/gallery/kilimanjaro%20(3).png',
    galleryImages: [
      '/images/gallery/Umbwe-Route.jpg',
      '/images/gallery/Barranco-Camp.jpg',
      '/images/gallery/Uhuru-Peak-1.jpg',
    ],
    mapFile: 'umbwe.webp',
    difficulty: 'Very Hard',
    difficultyColor: 'text-red-500',
    days: '6–7 days',
    successRate: '70%',
    maxAlt: '5,895m',
    startGate: 'Umbwe Gate (1,641m)',
    bestMonths: 'Jan–Feb & Jul–Sep',
    seoDescription:
      'Climb Kilimanjaro via the Umbwe Route — the steepest, most direct and least-trekked path. For experienced trekkers with prior altitude experience. 6–7 days.',
    overview:
      'The Umbwe Route is the steepest, most direct path to Kilimanjaro\'s summit and is recommended only for experienced trekkers with prior high-altitude experience. The trail gains elevation extremely rapidly through dense rainforest and dramatic narrow ridgelines before joining the Southern Circuit at Barranco Camp. This rapid ascent is both Umbwe\'s appeal and its greatest challenge — the lack of acclimatisation time results in lower summit success rates than longer routes. Umbwe is the least-trafficked route on the mountain, offering genuine solitude for those seeking a serious mountaineering challenge.',
    highlights: [
      'Most direct path to the summit',
      'Dramatic narrow forest ridgeline',
      'Fewest trekkers — maximum solitude',
      'Joins Machame at Barranco Camp',
      'True wilderness experience',
      'Recommended for experienced trekkers only',
    ],
    itinerary: [
      {
        day: 1,
        campStart: 'Umbwe Gate',
        elevStart: '1,641m',
        campEnd: 'Umbwe Cave Camp',
        elevEnd: '2,940m',
        duration: '5–6 hrs · 9 km',
        description:
          'The trail begins in dense montane rainforest and quickly gains elevation via a narrow, steep ridgeline. Unlike other routes, there is little gentleness here — Umbwe climbs hard from the start. Arrive at Umbwe Cave Camp, a small clearing in the forest.',
      },
      {
        day: 2,
        campStart: 'Umbwe Cave Camp',
        elevStart: '2,940m',
        campEnd: 'Barranco Camp',
        elevEnd: '3,976m',
        duration: '5–7 hrs · 10 km',
        description:
          'Continue up the dramatic ridgeline through heath moorland as the trees thin and views open dramatically. The route is exposed in places. Arrive at Barranco Camp — the junction where Umbwe meets the Southern Circuit trail.',
      },
      {
        day: 3,
        campStart: 'Barranco Camp',
        elevStart: '3,976m',
        campEnd: 'Karanga Camp',
        elevEnd: '4,035m',
        duration: '4–5 hrs · 5 km',
        description:
          'Begin with the famous Barranco Wall scramble — the same dramatic wall encountered on Machame and Lemosho. A near-vertical scramble with excellent holds and spectacular views. Traverse to Karanga Valley for an acclimatisation day.',
      },
      {
        day: 4,
        campStart: 'Karanga Camp',
        elevStart: '4,035m',
        campEnd: 'Barafu High Camp',
        elevEnd: '4,673m',
        duration: '4–5 hrs · 5 km',
        description:
          'Final approach to the wind-exposed Barafu High Camp. Eat, drink and rest. Summit briefing with your guide in the early evening, followed by a few hours of sleep before the midnight departure.',
      },
      {
        day: 5,
        campStart: 'Barafu Camp',
        elevStart: '4,673m',
        campEnd: 'Uhuru Peak → Mweka Camp',
        elevEnd: '5,895m → 3,100m',
        duration: '12–14 hrs · 17 km',
        description:
          'Midnight departure up the volcanic scree to Stella Point (5,739m) then west to Uhuru Peak — the Roof of Africa. The descent to Mweka Camp is long but your legs will carry you on adrenaline and sheer pride.',
      },
      {
        day: 6,
        campStart: 'Mweka Camp',
        elevStart: '3,100m',
        campEnd: 'Mweka Gate',
        elevEnd: '1,640m',
        duration: '3–4 hrs · 10 km',
        description:
          'Final descent through the rainforest to Mweka Gate. Summit certificates awarded. Transfer to hotel — arguably the best shower of your life awaits.',
      },
    ],
    pricing: [
      { label: '6-Day Trek', days: 6, priceFrom: 1880, note: 'Standard itinerary' },
      { label: '7-Day Trek', days: 7, priceFrom: 2050, note: 'Extra acclimatisation at Barranco — recommended' },
    ],
    included: INCLUDED,
    excluded: EXCLUDED,
    faqs: [
      {
        q: 'Who should climb the Umbwe Route?',
        a: 'Umbwe is best suited to experienced trekkers who have summited another high-altitude peak (4,000m+), are in exceptional physical condition, and seek solitude and a serious challenge. Not recommended for first-time Kilimanjaro climbers.',
      },
      {
        q: 'Why is the summit success rate lower on Umbwe?',
        a: 'Umbwe\'s rapid ascent leaves less time for acclimatisation. The body needs time to adapt to lower oxygen levels — Umbwe\'s compressed timeline means less of this occurs before the summit attempt.',
      },
      {
        q: 'Is Umbwe technically difficult climbing?',
        a: 'No — there is no roping, harnesses or technical equipment required. The ridgeline sections are steep and narrow, requiring good balance and fitness. The Barranco Wall is a scramble, not a technical climb.',
      },
      {
        q: 'How crowded is the Umbwe Route?',
        a: 'Umbwe is the least-trafficked route on the mountain. You may go entire days without seeing another group on the lower sections. Once the route joins the Southern Circuit at Barranco Camp, you\'ll encounter other trekkers on the shared trail.',
      },
      {
        q: 'Can Umbwe be extended for better acclimatisation?',
        a: 'Yes — our 7-day version adds an extra night at Barranco Camp before proceeding. This extra day makes a meaningful difference and is strongly recommended for anyone without recent high-altitude experience choosing this route.',
      },
    ],
  },

  'northern-circuit': {
    id: 'northern-circuit',
    name: 'Northern Circuit',
    nickname: 'The Longest Route',
    heroImage: '/images/gallery/kilimanjaro%20(5).png',
    galleryImages: [
      '/images/gallery/kilimanjaro%20(2).png',
      '/images/gallery/Moir-Hut-2.jpg',
      '/images/gallery/kilimanjaro%20(1).png',
    ],
    mapFile: 'northern-circuit.webp',
    difficulty: 'Moderate',
    difficultyColor: 'text-yellow-500',
    days: '9–10 days',
    successRate: '95%',
    maxAlt: '5,895m',
    startGate: 'Londorossi Gate (2,250m)',
    bestMonths: 'Jan–Feb & Jul–Sep',
    seoDescription:
      'Climb Kilimanjaro via the Northern Circuit — the longest route with the highest summit success rate (95%+). 9–10 days, 360° views, unmatched acclimatisation.',
    overview:
      'The Northern Circuit is the newest and longest route on Kilimanjaro, offering the highest summit success rate of any route at 95%+. Starting from Londorossi Gate in the west, the route traverses the remote northern slopes — rarely seen by trekkers on any other path — before completing a full circumnavigation of the mountain and approaching the summit from the west. The extra days deliver exceptional acclimatisation through gradual altitude gain, and the northern traverse provides breathtaking, rarely-photographed perspectives on Kilimanjaro that aren\'t visible from other routes. The ideal choice for those who want the best possible chance of reaching Uhuru Peak.',
    highlights: [
      'Highest summit success rate — 95%+',
      'Full 360° circumnavigation of the mountain',
      'Best acclimatisation profile of any route',
      'Remote northern slopes — rarely trekked',
      'Four-sided views of Kilimanjaro',
      'Ideal for trekkers prioritising summit success',
    ],
    itinerary: [
      {
        day: 1,
        campStart: 'Londorossi Gate',
        elevStart: '2,250m',
        campEnd: 'Big Tree Camp',
        elevEnd: '2,780m',
        duration: '3–4 hrs · 8 km',
        description:
          'Gentle start through ancient montane forest on the western slopes. Armed rangers accompany the group through elephant territory. A relaxed, short day to begin the adventure and settle into mountain life.',
      },
      {
        day: 2,
        campStart: 'Big Tree Camp',
        elevStart: '2,780m',
        campEnd: 'Shira 1 Camp',
        elevEnd: '3,500m',
        duration: '5–6 hrs · 9 km',
        description:
          'Forest transitions to open moorland. Ascend to the western edge of the vast Shira Plateau. First views of Kibo\'s summit cone appear ahead.',
      },
      {
        day: 3,
        campStart: 'Shira 1 Camp',
        elevStart: '3,500m',
        campEnd: 'Shira 2 Camp',
        elevEnd: '3,840m',
        duration: '4–5 hrs · 9 km',
        description:
          'Cross the broad Shira Plateau with rocky outcrops, giant lobelia and sweeping summit views. Today marks the divergence from the Lemosho Route — Northern Circuit turns north rather than east.',
      },
      {
        day: 4,
        campStart: 'Shira 2 Camp',
        elevStart: '3,840m',
        campEnd: 'Buffalo Camp',
        elevEnd: '4,020m',
        duration: '7–8 hrs · 14 km',
        description:
          'Begin the long northern traverse — the defining section of this route. Trek north and east across remote, pristine terrain rarely visited by trekkers. Buffalo Camp sits on the northern slope with extraordinary views toward the Kenyan savanna.',
      },
      {
        day: 5,
        campStart: 'Buffalo Camp',
        elevStart: '4,020m',
        campEnd: 'Third Cave Camp',
        elevEnd: '3,800m',
        duration: '7–8 hrs · 12 km',
        description:
          'Continue the northern traverse across remote, rarely-trekked terrain. Views across the northern landscape are extraordinary. Descend slightly to Third Cave Camp — a significant altitude variation that aids acclimatisation.',
      },
      {
        day: 6,
        campStart: 'Third Cave Camp',
        elevStart: '3,800m',
        campEnd: 'School Hut',
        elevEnd: '4,750m',
        duration: '6–7 hrs · 9 km',
        description:
          'A significant ascent to School Hut — the highest camp on the Northern Circuit. Outstanding views of the dramatic Mawenzi peak and the vast eastern plains of Tanzania and Kenya below.',
      },
      {
        day: 7,
        campStart: 'School Hut',
        elevStart: '4,750m',
        campEnd: 'Mawenzi Tarn Camp',
        elevEnd: '4,330m',
        duration: '3–4 hrs · 6 km',
        description:
          'A short acclimatisation descent to the beautiful Mawenzi Tarn — a glacial lake beneath the jagged Mawenzi peak. Rest, hydrate and enjoy the extraordinary surroundings before the final push for the summit.',
      },
      {
        day: 8,
        campStart: 'Mawenzi Tarn Camp',
        elevStart: '4,330m',
        campEnd: 'Kibo Hut',
        elevEnd: '4,703m',
        duration: '5–6 hrs · 9 km',
        description:
          'Cross the saddle between Mawenzi and Kibo to reach Kibo Hut. After 8 days of excellent acclimatisation, your body is as ready as it will ever be. Eat, hydrate and try to sleep ahead of the midnight departure.',
      },
      {
        day: 9,
        campStart: 'Kibo Hut',
        elevStart: '4,703m',
        campEnd: 'Uhuru Peak → Horombo Hut',
        elevEnd: '5,895m → 3,720m',
        duration: '12–14 hrs · 19 km',
        description:
          'The summit day. Midnight departure up the volcanic scree to Gilman\'s Point then along the crater rim to Uhuru Peak — the culmination of 9 days of preparation. Descend to Horombo Hut for the final night on the mountain.',
      },
      {
        day: 10,
        campStart: 'Horombo Hut',
        elevStart: '3,720m',
        campEnd: 'Marangu Gate',
        elevEnd: '1,879m',
        duration: '5–6 hrs · 20 km',
        description:
          'The final descent through moorland and rainforest to Marangu Gate — completing a full circumnavigation of Kilimanjaro from west to south-east. Summit certificates awarded. Transfer to your hotel for the best shower and meal of your life.',
      },
    ],
    pricing: [
      { label: '9-Day Trek', days: 9, priceFrom: 2237, note: 'Standard itinerary' },
      { label: '10-Day Trek', days: 10, priceFrom: 2500, note: 'Extra acclimatisation day recommended' },
    ],
    included: INCLUDED,
    excluded: EXCLUDED,
    faqs: [
      {
        q: 'Why does the Northern Circuit have the highest success rate?',
        a: 'The Northern Circuit\'s 9–10 day duration provides the most thorough acclimatisation of any route. The additional days on the northern traverse at 3,800–4,750m allow the body to fully adapt before the summit attempt, resulting in a 95%+ success rate.',
      },
      {
        q: 'Is the Northern Circuit worth the extra days and cost?',
        a: 'If summiting Kilimanjaro is your primary goal, yes. The extra acclimatisation days genuinely make a difference, particularly for trekkers without prior high-altitude experience. The northern traverse also reveals parts of the mountain that no other route visits.',
      },
      {
        q: 'How remote is the northern traverse?',
        a: 'Very remote. Days 4–7 pass through northern slopes that receive only a small fraction of total trekkers. You may go entire days without seeing another group — a rarity on Africa\'s most-climbed high peak.',
      },
      {
        q: 'Can the Northern Circuit be combined with a safari?',
        a: 'Absolutely. The 9–10 day trek fits well with a 3–5 day Tanzania safari before or after. We specialise in combined Kilimanjaro + safari packages and can arrange the complete trip from airport to airport.',
      },
      {
        q: 'Does the Northern Circuit share any sections with other routes?',
        a: 'Yes — Days 1–3 (Londorossi Gate to Shira 2) are shared with the Lemosho Route. From Shira 2, the Northern Circuit diverges north while Lemosho turns east. The summit day and descent follow the Marangu Route path.',
      },
    ],
  },
}

// ─── Static Params ───────────────────────────────────────────────────────────

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    Object.keys(routeData).map((route) => ({ locale, route }))
  )
}

// ─── Metadata ────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; route: string }>
}): Promise<Metadata> {
  const { route } = await params
  const data = routeData[route]
  if (!data) return { title: 'Route Not Found' }
  return {
    title: `${data.name} | Kilimanjaro | The Extreme Wilderness`,
    description: data.seoDescription,
  }
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function RouteDetailPage({
  params,
}: {
  params: Promise<{ locale: string; route: string }>
}) {
  const { route } = await params
  const data = routeData[route]
  if (!data) notFound()

  const t = await getTranslations('trekking')

  const tIncluded = [
    t('included1'), t('included2'), t('included3'), t('included4'), t('included5'),
    t('included6'), t('included7'), t('included8'), t('included9'),
  ]
  const tExcluded = [
    t('excluded1'), t('excluded2'), t('excluded3'),
    t('excluded4'), t('excluded5'), t('excluded6'),
  ]

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative h-[70vh] min-h-[520px] flex items-end overflow-hidden">
        <Image
          src={data.heroImage}
          alt={data.name}
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

        <div className="relative z-10 w-full pb-12 pt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
              <div>
                <p className="text-gold font-semibold text-xs uppercase tracking-widest mb-2">
                  {data.nickname}
                </p>
                <h1 className="text-4xl lg:text-6xl font-semibold text-white mb-2 leading-tight">
                  {data.name}
                </h1>
              </div>
              <BookNowButton
                packageName={data.name}
                packageType="Kilimanjaro Trek"
                priceFrom={`$${data.pricing[0].priceFrom.toLocaleString()}`}
                duration={data.days}
                label={t('bookThisRoute')}
              />
            </div>

            {/* Stats bar */}
            <div className="flex flex-wrap gap-4 mt-6">
              {[
                { icon: Clock, label: data.days },
                { icon: TrendingUp, label: data.difficulty },
                { icon: Trophy, label: t('successRateLabel', { rate: data.successRate }) },
                { icon: MapPin, label: data.startGate },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full border border-white/15">
                  <Icon className="w-3.5 h-3.5 text-gold" />
                  <span className="text-white text-xs font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Facts + Overview ──────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Overview */}
            <div className="lg:col-span-2">
              <span className="inline-block text-gold font-semibold text-xs uppercase tracking-widest mb-3">{t('routeOverview')}</span>
              <h2 className="text-2xl font-semibold text-brand mb-4">{t('aboutRoute', { name: data.name })}</h2>
              <p className="text-text-muted leading-relaxed mb-6">{data.overview}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {data.highlights.map((h) => (
                  <div key={h} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-brand">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Facts sidebar */}
            <div className="bg-light-green rounded-2xl p-6 h-fit border border-brand/10">
              <h3 className="font-semibold text-brand mb-4 text-sm uppercase tracking-wider">{t('quickFacts')}</h3>
              <div className="space-y-3">
                {[
                  { label: t('duration'), value: data.days },
                  { label: t('difficulty'), value: data.difficulty },
                  { label: t('successRate'), value: data.successRate },
                  { label: t('maxAltitude'), value: data.maxAlt },
                  { label: t('startGate'), value: data.startGate },
                  { label: t('bestMonths'), value: data.bestMonths },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between items-start gap-3 border-b border-brand/10 pb-3 last:border-0 last:pb-0">
                    <span className="text-xs text-text-muted font-medium">{label}</span>
                    <span className="text-xs text-brand font-semibold text-right">{value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-4 border-t border-brand/10">
                <div className="text-xs text-text-muted mb-1">{t('startingFrom')}</div>
                <div className="text-2xl font-bold text-brand">${data.pricing[0].priceFrom.toLocaleString()}</div>
                <div className="text-xs text-text-muted mb-4">{t('perPerson')} · {data.pricing[0].label}</div>
                <BookNowButton
                  packageName={data.name}
                  packageType="Kilimanjaro Trek"
                  priceFrom={`$${data.pricing[0].priceFrom.toLocaleString()}`}
                  duration={data.days}
                  label={t('bookThisRoute')}
                  className="flex w-full items-center justify-center gap-2 py-3 bg-brand hover:bg-brand-secondary text-white text-sm font-bold rounded-xl transition-colors"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Photo Gallery ───────────────────────────────────────────── */}
      <section className="pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-3 rounded-2xl overflow-hidden">
            {data.galleryImages.map((src, i) => (
              <div key={i} className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={src}
                  alt={`${data.name} gallery ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 33vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Itinerary ───────────────────────────────────────────────── */}
      <section className="py-16 bg-light-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block text-gold font-semibold text-xs uppercase tracking-widest mb-3">{t('dayByDay')}</span>
            <h2 className="text-3xl font-semibold text-brand">{t('itinerary')}</h2>
          </div>

          <div className="space-y-4">
            {data.itinerary.map((day) => (
              <div key={day.day} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                <div className="flex items-center gap-4 px-6 py-4">
                  {/* Day number */}
                  <div className="w-10 h-10 bg-brand rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">{day.day}</span>
                  </div>

                  {/* Route info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 flex-wrap">
                      <span className="font-semibold text-brand text-sm">
                        {day.campStart}
                        <span className="text-text-muted font-normal"> ({day.elevStart})</span>
                      </span>
                      <span className="hidden sm:inline text-text-muted">→</span>
                      <span className="font-semibold text-brand text-sm">
                        {day.campEnd}
                        <span className="text-text-muted font-normal"> ({day.elevEnd})</span>
                      </span>
                    </div>
                    <div className="text-xs text-text-muted mt-0.5">{day.duration}</div>
                  </div>

                  {/* Gold accent */}
                  <div className="w-1 h-10 bg-gold rounded-full flex-shrink-0" />
                </div>

                <div className="px-6 pb-5">
                  <p className="text-text-muted text-sm leading-relaxed pl-14">{day.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Route Map ───────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-gold font-semibold text-xs uppercase tracking-widest mb-3">{t('trailMap')}</span>
          <h2 className="text-3xl font-semibold text-brand mb-8">{t('routeOverviewMap')}</h2>
          <div className="w-full rounded-2xl overflow-hidden border border-brand/10 shadow-lg">
            <KiliRouteMapSVG routeId={data.id} />
          </div>
          <p className="text-xs text-text-muted mt-3">{t('mapNote', { name: data.name })}</p>
        </div>
      </section>

      {/* ── Pricing ─────────────────────────────────────────────────── */}
      <section className="py-16 bg-light-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block text-gold font-semibold text-xs uppercase tracking-widest mb-3">{t('pricing')}</span>
            <h2 className="text-3xl font-semibold text-brand">{t('chooseDuration')}</h2>
            <p className="text-text-muted text-sm mt-3 max-w-md mx-auto">{t('pricingDesc')}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
            {data.pricing.map((tier, i) => (
              <div
                key={tier.label}
                className={`bg-white rounded-2xl p-6 border-2 transition-all ${
                  i === 0 ? 'border-gold shadow-lg' : 'border-gray-100'
                }`}
              >
                {i === 0 && (
                  <div className="inline-block px-2.5 py-0.5 bg-gold text-brand text-[10px] font-bold uppercase tracking-wider rounded-full mb-3">
                    {t('standard')}
                  </div>
                )}
                <div className="text-brand font-semibold mb-1">{tier.label}</div>
                {tier.note && <div className="text-xs text-text-muted mb-4">{tier.note}</div>}
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-xs text-text-muted">{t('startingFrom')}</span>
                  <span className="text-3xl font-bold text-brand">${tier.priceFrom.toLocaleString()}</span>
                  <span className="text-xs text-text-muted">{t('perPerson')}</span>
                </div>
                <BookNowButton
                  packageName={data.name}
                  packageType="Kilimanjaro Trek"
                  priceFrom={`$${tier.priceFrom.toLocaleString()}`}
                  duration={`${tier.days} days`}
                  label={t('bookLabel', { label: tier.label })}
                  className="block w-full text-center py-2.5 bg-brand hover:bg-brand-secondary text-white text-sm font-semibold rounded-xl transition-colors"
                  arrow={false}
                />
              </div>
            ))}
          </div>

          {/* Included / Excluded */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h3 className="font-semibold text-brand mb-4 text-sm">{t('whatsIncluded')}</h3>
              <ul className="space-y-2">
                {tIncluded.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-text-muted">
                    <Check className="w-3.5 h-3.5 text-green-600 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h3 className="font-semibold text-brand mb-4 text-sm">{t('notIncluded')}</h3>
              <ul className="space-y-2">
                {tExcluded.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-text-muted">
                    <span className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-red-400 font-bold text-xs leading-none">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block text-gold font-semibold text-xs uppercase tracking-widest mb-3">{t('questions')}</span>
            <h2 className="text-3xl font-semibold text-brand">{t('frequentlyAsked')}</h2>
          </div>

          <div className="space-y-3">
            {data.faqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-white border border-gray-100 rounded-2xl overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer list-none font-semibold text-brand text-sm hover:bg-light-green transition-colors">
                  {faq.q}
                  <span className="text-gold flex-shrink-0 group-open:rotate-45 transition-transform duration-200 text-xl leading-none">+</span>
                </summary>
                <div className="px-6 pb-5">
                  <p className="text-text-muted text-sm leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <section className="py-16 bg-brand text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-white mb-3">{t('readyToClimb', { name: data.name })}</h2>
          <p className="text-white/70 mb-8 text-sm">
            {t('readyDesc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <BookNowButton
              packageName={data.name}
              packageType="Kilimanjaro Trek"
              priceFrom={`$${data.pricing[0].priceFrom.toLocaleString()}`}
              duration={data.days}
              label={t('bookThisRoute')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors"
            />
            <Link
              href="/trekking"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-colors border border-white/20"
            >
              <ArrowLeft className="w-4 h-4" /> {t('compareAllRoutes')}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
