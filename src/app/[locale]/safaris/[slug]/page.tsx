import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Clock, Users, Check, X, ChevronDown, Calendar, ShieldCheck, Star, MapPin, DollarSign } from 'lucide-react'
import Badge from '@/components/shared/Badge'
import TrustBar from '@/components/home/TrustBar'
import SafariBookingSidebar from '@/components/safaris/SafariBookingSidebar'
import MobileEnquireBanner from '@/components/booking/MobileEnquireBanner'
import AmenityStay from '@/components/safaris/AmenityStay'
import RelatedSafaris from '@/components/safaris/RelatedSafaris'
import { packages } from '@/data/packages'
import { getPackage, getPackages } from '@/data/packages.i18n'
import { getBlogPostMeta } from '@/data/blog/index.i18n'
import BlogSuggestionCard from '@/components/trekking/BlogSuggestionCard'
import { routing } from '@/i18n/routing'
import { SITE_URL, localeUrl, buildAlternates, buildBreadcrumbSchema } from '@/lib/site'
import { CORE_KEYWORDS_BY_LOCALE } from '@/data/coreKeywords'
import Breadcrumb from '@/components/ui/Breadcrumb'
import Reveal from '@/components/motion/Reveal'


const SAFARI_KEYWORDS: Record<string, string[]> = {
  '7-day-serengeti-ngorongoro': [
    'Northern Circuit Tanzania safari', 'Serengeti Ngorongoro safari', '7 day Tanzania safari',
    'luxury Tanzania safari', 'private guided Tanzania safari', 'Tarangire Serengeti Ngorongoro',
    'Tanzania safari 2026', 'Great Migration safari', 'boutique Tanzania safari', 'book Tanzania safari',
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
    '5 day Tanzania safari', 'luxury Serengeti Ngorongoro safari', 'private guided Tanzania safari',
    'fly-in Serengeti safari', 'boutique Tanzania safari', 'Tanzania safari 5 nights',
    'premium Africa safari', 'Serengeti Ngorongoro fly-in safari', 'tailor-made Tanzania safari', 'private safari Tanzania',
  ],
  '8-days-honeymoon-safari': [
    'honeymoon safari Tanzania', 'Tanzania romantic safari', 'Africa honeymoon package',
    'luxury honeymoon Tanzania', 'Tanzania bush honeymoon', 'romantic safari Africa',
    'Tanzania couples safari', 'honeymoon safari Africa 2026', 'Africa wedding anniversary safari', 'luxury safari honeymoon',
  ],
  '7-days-crown-jewels': [
    'crown jewels Tanzania safari', 'best Tanzania safari', 'Tanzania hot air balloon safari',
    'Tarangire Ngorongoro Serengeti safari', 'luxury Tanzania 7 days', 'Tanzania night game drive safari',
    'premium Tanzania safari', 'Africa bucket list safari', 'private guided safari Tanzania', 'book Tanzania safari 2027',
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
  'off-the-beaten-track-photography-safari': [
    'off the beaten track Tanzania safari', 'Ndutu predator photography safari', 'resident predator safari Africa',
    'Tanzania safari for content creators', 'wildlife photography tour Tanzania', 'authentic Tanzania safari',
    'private guided safari Tanzania', 'uncrowded Tanzania safari', 'Ngorongoro Ndutu photography safari', 'book Tanzania safari 2027',
  ],
  '11-days-rwanda-tanzania': [
    'Rwanda Tanzania combined safari', 'Tanzania Rwanda gorilla trekking', 'gorilla trekking Tanzania safari',
    'East Africa combined tour', '11 day East Africa', 'Rwanda Tanzania 2026',
    'gorilla safari and Tanzania', 'Africa gorilla and wildlife', 'Rwanda Tanzania tour operator', 'East Africa safari combination',
  ],
  '12-days-rwanda-tanzania-zanzibar': [
    'Rwanda Tanzania Zanzibar safari', 'gorilla trekking safari beach', '12 day East Africa safari',
    'Rwanda gorilla Zanzibar beach', 'East Africa gorilla safari beach', 'Rwanda Tanzania Zanzibar 2026',
    'gorilla trek and beach holiday', 'ultimate East Africa safari', 'Africa gorilla safari honeymoon', 'three country East Africa tour',
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
  '5-day-comfort-tanzania-safari': [
    '5 day Tanzania safari', 'Tanzania Northern Circuit safari', 'Tarangire Serengeti Ngorongoro safari',
    'comfort safari Tanzania', '5 day Tanzania safari price', 'Tanzania safari from Arusha',
    '5 day Africa safari', 'Tanzania 5 days itinerary', 'short Tanzania safari Northern Circuit', 'Tanzania safari 5 nights',
  ],
  '6-day-comfort-tanzania-safari': [
    '6 day Tanzania safari', 'Tanzania Northern Circuit 6 days', 'Serengeti safari 2 days',
    'Tanzania comfort safari', '6 day safari from Arusha', 'Tarangire Serengeti Ngorongoro Manyara safari price',
    '6 day Africa safari', 'Tanzania 6 days Northern Circuit', 'two full days Serengeti safari', 'Tanzania safari 6 nights',
  ],
  'kenya-tanzania-highlights-safari': [
    'Kenya Tanzania safari', 'Masai Mara Serengeti safari', 'Kenya Tanzania safari itinerary',
    'highlights Kenya Tanzania', 'East Africa safari 10 days', 'Ngorongoro Serengeti Masai Mara safari price',
    'cross border safari East Africa', 'Kenya Tanzania 10 day tour', 'Amboseli Masai Mara Serengeti safari', 'best East Africa safari',
  ],
  '10-day-kenya-tanzania-safari': [
    'Kenya Tanzania safari 10 days', 'Masai Mara Serengeti safari', 'East Africa combination safari',
    'Kenya Tanzania border crossing safari', 'Ngorongoro Crater Tarangire safari', 'best East Africa safari 10 days',
    'Masai Mara game drive', 'Tanzania Kenya wildlife safari', 'East Africa safari 2026',
  ],
  '2-day-selous-safari-from-zanzibar': [
    'Zanzibar safari 2 days', 'Nyerere safari from Zanzibar', 'Selous safari Zanzibar',
    'Rufiji River boat safari', 'Tanzania short safari', 'add safari to Zanzibar beach holiday',
    'fly-in safari Zanzibar', 'Nyerere National Park boat safari', 'Zanzibar safari package',
  ],
  '4-day-tarangire-ngorongoro-lake-eyasi': [
    'Tarangire Ngorongoro safari 4 days', 'Lake Eyasi Hadzabe experience', 'Tanzania cultural safari',
    'Ngorongoro Crater day trip', 'Tarangire elephant safari', 'Tanzania 4 day safari package',
    'Hadzabe hunter gatherer visit', 'Ngorongoro Tarangire wildlife', 'short Tanzania safari',
  ],
  '5-day-kenya-safari': [
    "Kenya safari 5 days", "Hell's Gate National Park cycling", 'Lake Nakuru flamingo safari',
    'Masai Mara Great Migration', 'Kenya safari package 2026', 'Lake Naivasha safari',
    "Hell's Gate bike safari Kenya", 'Kenya safari cost', 'best Kenya safari 5 days',
  ],
  'rwanda-primates-zanzibar-seniors-groups': [
    'Rwanda gorilla trekking and Zanzibar', 'primate safari and beach holiday', 'senior safari Rwanda',
    'anniversary safari Africa', 'group safari Rwanda Zanzibar', 'luxury Rwanda Zanzibar combination',
    'gorilla trekking beach extension', 'multi-generational safari', 'private guided safari Rwanda', 'book Rwanda safari 2027',
  ],
}

// Per-package hero image crop override — most hero photos are fine with the
// default center crop, but a few (e.g. subjects positioned toward the top
// of the source frame) need a different object-position to avoid cropping
// out the actual subject on the short/wide hero banner.
const HERO_IMAGE_POSITION: Record<string, string> = {
  '5-day-gombe-chimpanzee-trekking': 'object-top',
}

const DEFAULT_SAFARI_KEYWORDS = [
  'Tanzania safari', 'East Africa safari', 'Africa wildlife safari', 'book Tanzania safari',
  'Tanzania safari package', 'Tanzania tour operator', 'Africa safari holiday',
  'Tanzania wildlife tour', 'safari Tanzania 2026', 'Africa safari vacation',
]

// Per-package, per-locale research (Phase 3/4 of the SEO plan) lands here as
// it's completed — e.g. SAFARI_KEYWORDS_BY_LOCALE.de['7-day-serengeti-ngorongoro'].
// Until a given locale/slug has an entry, generateMetadata below falls back to
// that locale's researched core/pillar terms (@/data/coreKeywords) rather than
// silently serving the English SAFARI_KEYWORDS regardless of locale.
const SAFARI_KEYWORDS_BY_LOCALE: Partial<Record<string, Partial<Record<string, string[]>>>> = {
  fr: {
    'off-the-beaten-track-photography-safari': [
      'safari photo Tanzanie hors des sentiers battus', 'safari photographique Ndutu prédateurs', 'safari Serengeti sans les foules',
      'safari privé Tanzanie petit groupe', 'safari photo animalier Afrique', 'cratère du Ngorongoro et Ndutu safari',
      'safari authentique Tanzanie hors saison', 'safari guidé sur mesure Tanzanie', 'safari Tanzanie créateurs de contenu', 'réserver safari Tanzanie 2027',
    ],
    'rwanda-primates-zanzibar-seniors-groups': [
      'trekking gorilles Rwanda et Zanzibar', 'safari primates et séjour plage', 'safari senior Rwanda',
      'safari anniversaire Afrique', 'safari groupe Rwanda Zanzibar', 'combiné luxe Rwanda Zanzibar',
      'extension plage après trekking gorilles', 'safari multigénérationnel', 'safari privé guidé Rwanda', 'réserver safari Rwanda 2027',
    ],
    '7-days-crown-jewels': [
      'safari joyaux de la couronne Tanzanie', 'meilleur safari Tanzanie', 'safari montgolfière Tanzanie',
      'safari Tarangire Ngorongoro Serengeti', 'safari luxe Tanzanie 7 jours', 'safari game drive nocturne Tanzanie',
      'safari premium Tanzanie', 'safari incontournable Afrique', 'safari privé guidé Tanzanie', 'réserver safari Tanzanie 2027',
    ],
  },
  es: {
    'off-the-beaten-track-photography-safari': [
      'safari fotográfico Tanzania poco concurrido', 'depredadores residentes Ndutu safari', 'safari privado Tanzania fuera de temporada',
      'Tanzania safari para creadores de contenido', 'tour de fotografía de fauna en Tanzania', 'safari auténtico Tanzania sin multitudes',
      'safari guiado privado Tanzania', 'Ngorongoro y Ndutu safari fotográfico', 'safari Tanzania fuera de lo trillado', 'reservar safari Tanzania 2027',
    ],
    'rwanda-primates-zanzibar-seniors-groups': [
      'trekking de gorilas en Ruanda y Zanzíbar', 'safari de primates y vacaciones de playa', 'safari para mayores en Ruanda',
      'safari de aniversario en África', 'safari en grupo Ruanda Zanzíbar', 'combinación de lujo Ruanda Zanzíbar',
      'extensión de playa tras trekking de gorilas', 'safari multigeneracional', 'safari privado guiado en Ruanda', 'reservar safari en Ruanda 2027',
    ],
    '7-days-crown-jewels': [
      'safari Joyas de la Corona Tanzania', 'mejor safari en Tanzania', 'safari en globo aerostático Tanzania',
      'safari Tarangire Ngorongoro Serengeti', 'safari de lujo Tanzania 7 días', 'safari nocturno en Tanzania',
      'safari premium en Tanzania', 'safari imprescindible en África', 'safari privado guiado en Tanzania', 'reservar safari en Tanzania 2027',
    ],
  },
  de: {
    'off-the-beaten-track-photography-safari': [
      'Tansania Safari abseits der ausgetretenen Pfade', 'Fotosafari Ndutu Tansania', 'Raubkatzen-Safari Ndutu ganzjährig',
      'private geführte Safari Tansania', 'Fotografie-Safari Serengeti Ngorongoro', 'authentische Tansania Safari ohne Massentourismus',
      'Safari für Content Creator Tansania', 'Ngorongoro Ndutu Kombireise', 'Tansania Safari 2027 buchen', 'Kleingruppen-Safari Tansania Fotografen',
    ],
    'rwanda-primates-zanzibar-seniors-groups': [
      'Gorilla-Trekking Ruanda und Sansibar', 'Primaten-Safari und Strandurlaub', 'Senioren-Safari Ruanda',
      'Jubiläums-Safari Afrika', 'Gruppensafari Ruanda Sansibar', 'Luxus-Kombireise Ruanda Sansibar',
      'Gorilla-Trekking mit Strandverlängerung', 'Mehrgenerationen-Safari', 'private geführte Safari Ruanda', 'Ruanda-Safari 2027 buchen',
    ],
    '7-days-crown-jewels': [
      'Kronjuwelen-Safari Tansania', 'beste Tansania-Safari', 'Heißluftballon-Safari Tansania',
      'Tarangire Ngorongoro Serengeti Safari', 'Luxus-Safari Tansania 7 Tage', 'Nacht-Game-Drive Safari Tansania',
      'Premium-Safari Tansania', 'Bucket-List-Safari Afrika', 'private geführte Safari Tansania', 'Tansania-Safari 2027 buchen',
    ],
  },
  ru: {
    'off-the-beaten-track-photography-safari': [
      'фотосафари в Танзании вне туристических троп', 'сафари на резидентных хищников Ндуту', 'приватное фотосафари по Африке',
      'сафари для фотографов дикой природы в Танзании', 'малолюдное сафари в Танзании', 'авторское сафари по Танзании',
      'индивидуальное сафари с гидом по Танзании', 'фотосафари Нгоронгоро и Ндуту', 'сафари без толп туристов Танзания', 'забронировать сафари в Танзанию 2027',
    ],
    'rwanda-primates-zanzibar-seniors-groups': [
      'трекинг к гориллам в Руанде и Занзибар', 'сафари к приматам и пляжный отдых', 'сафари в Руанду для пожилых',
      'сафари в Африку на годовщину', 'групповое сафари Руанда Занзибар', 'люксовое сочетание Руанда Занзибар',
      'трекинг к гориллам с пляжным отдыхом', 'сафари для нескольких поколений', 'частное сафари с гидом по Руанде', 'забронировать сафари в Руанду 2027',
    ],
    '7-days-crown-jewels': [
      'королевские жемчужины сафари Танзания', 'лучшее сафари по Танзании', 'сафари на воздушном шаре в Танзании',
      'сафари Тарангире Нгоронгоро Серенгети', 'люксовое сафари Танзания 7 дней', 'ночное сафари в Танзании',
      'премиальное сафари по Танзании', 'сафари мечты в Африке', 'частное сафари с гидом по Танзании', 'забронировать сафари в Танзанию 2027',
    ],
  },
  zh: {
    'off-the-beaten-track-photography-safari': [
      '坦桑尼亚小众游猎', '恩杜图猎豹摄影游猎', '常驻猎食动物游猎非洲',
      '坦桑尼亚摄影游猎定制', '野生动物摄影团坦桑尼亚', '深度坦桑尼亚游猎',
      '私人向导坦桑尼亚游猎', '人少坦桑尼亚游猎路线', '恩戈罗恩戈罗恩杜图摄影游猎', '2027坦桑尼亚游猎预订',
    ],
    'rwanda-primates-zanzibar-seniors-groups': [
      '卢旺达大猩猩追踪桑给巴尔', '灵长类动物游猎海滩假期', '卢旺达长者游猎',
      '非洲纪念日游猎', '卢旺达桑给巴尔团组游猎', '卢旺达桑给巴尔豪华组合',
      '大猩猩追踪海滩延伸', '跨代同游游猎', '卢旺达私人向导游猎', '2027卢旺达游猎预订',
    ],
    '7-days-crown-jewels': [
      '皇冠明珠坦桑尼亚游猎', '坦桑尼亚最佳游猎', '坦桑尼亚热气球游猎',
      '塔兰吉雷恩戈罗恩戈罗塞伦盖蒂游猎', '坦桑尼亚7日豪华游猎', '坦桑尼亚夜间游猎巡游',
      '坦桑尼亚高端游猎', '非洲必去游猎清单', '坦桑尼亚私人向导游猎', '2027坦桑尼亚游猎预订',
    ],
  },
  'zh-TW': {
    'off-the-beaten-track-photography-safari': [
      '坦尚尼亞秘境獵遊', '恩杜圖常駐獵食動物攝影', '非洲野生動物攝影獵遊',
      '私人嚮導坦尚尼亞獵遊', '恩杜圖恩戈羅恩戈羅攝影行程', '人少坦尚尼亞獵遊',
      '塞倫蓋蒂攝影獵遊團', '內容創作者非洲獵遊', '深度坦尚尼亞獵遊體驗', '2027坦尚尼亞獵遊預訂',
    ],
    'rwanda-primates-zanzibar-seniors-groups': [
      '盧安達大猩猩健行與尚吉巴', '靈長類獵遊海灘假期', '長者盧安達獵遊',
      '非洲紀念日獵遊', '盧安達尚吉巴團組獵遊', '盧安達尚吉巴豪華組合行程',
      '大猩猩健行海灘延伸行程', '跨代同遊獵遊行程', '盧安達私人嚮導獵遊', '2027盧安達獵遊預訂',
    ],
    '7-days-crown-jewels': [
      '坦尚尼亞皇冠明珠獵遊', '坦尚尼亞最佳獵遊行程', '坦尚尼亞熱氣球獵遊',
      '塔蘭吉雷恩戈羅恩戈羅塞倫蓋蒂獵遊', '坦尚尼亞7日豪華獵遊', '坦尚尼亞夜間獵遊巡遊',
      '坦尚尼亞頂級獵遊行程', '非洲此生必訪獵遊', '坦尚尼亞私人嚮導獵遊', '2027坦尚尼亞獵遊預訂',
    ],
  },
}

const SAFARI_BLOG_MAP: Record<string, string> = {
  '7-day-serengeti-ngorongoro':          'best-time-to-visit-serengeti',
  '10-day-northern-circuit':             'great-migration-guide',
  '10-day-safari-zanzibar':              'zanzibar-travel-guide',
  '5-day-serengeti-fly-in':              'best-time-to-visit-serengeti',
  '5-days-highlights-safari':            'great-migration-guide',
  '7-days-crown-jewels':                 'ngorongoro-crater-guide',
  '7-days-migration-southern':           'great-migration-guide',
  '7-day-southern-circuit':              'big-five-africa-tanzania',
  '8-days-honeymoon-safari':             'safari-honeymoon-tanzania',
  '10-days-luxury-family':               'family-safari-africa',
  '12-days-wild-wilderness':             'big-five-africa-tanzania',
  '12-days-tanzania-kenya':              'tanzania-vs-kenya-safari',
  '11-days-kenya-undisputed':            'serengeti-vs-masai-mara',
  '12-days-rwanda-primates':             'gorilla-trekking-rwanda',
  '11-days-rwanda-tanzania':             'gorilla-trekking-rwanda',
  '12-days-rwanda-tanzania-zanzibar':    'gorilla-trekking-rwanda',
  'kilimanjaro-machame-7day':            'kilimanjaro-climbing-guide',
  '7-days-gems-of-north':               'ngorongoro-crater-guide',
  '7-days-flight-ndutu':                'great-migration-guide',
  '8-days-flight-migration':             'great-migration-guide',
  '10-days-southern-secrets':            'big-five-africa-tanzania',
  '11-days-southern-spice':              'zanzibar-travel-guide',
  '5-day-comfort-tanzania-safari':       'tanzania-safari-cost',
  '6-day-comfort-tanzania-safari':       'tanzania-safari-cost',
  'kenya-tanzania-highlights-safari':    'tanzania-vs-kenya-safari',
  '10-day-kenya-tanzania-safari':        'serengeti-vs-masai-mara',
  '5-day-kenya-safari':                  'serengeti-vs-masai-mara',
  '2-day-selous-safari-from-zanzibar':   'zanzibar-travel-guide',
  '4-day-tarangire-ngorongoro-lake-eyasi': 'ngorongoro-crater-guide',
  'rwanda-primates-zanzibar-seniors-groups': 'gorilla-trekking-rwanda',
}
const DEFAULT_BLOG_SLUG = 'tanzania-safari-cost'

// Real, verified guest reviews (also displayed in the homepage Testimonials
// carousel) mapped to the specific package their itinerary matches — only
// wired up where the reviewer's stated duration and destinations line up
// with a real package, so the schema and on-page quote stay accurate.
const PACKAGE_REVIEWS: Record<string, { key: 0 | 1 | 7 | 10; name: string; countryKey: 'countryUS' | 'countryUK' | 'countryFR'; rating: number }> = {
  '10-day-northern-circuit':         { key: 0,  name: 'James Kowalski',              countryKey: 'countryUS', rating: 5 },
  '5-day-serengeti-fly-in':          { key: 1,  name: 'Erick Edwin',                 countryKey: 'countryUS', rating: 5 },
  '7-day-serengeti-ngorongoro':      { key: 7,  name: 'Sarah & Michael Thompson',    countryKey: 'countryUK', rating: 5 },
  '9-day-honeymoon-safari-zanzibar': { key: 10, name: 'Marie & François Dupont',     countryKey: 'countryFR', rating: 5 },
}

interface Props {
  params: Promise<{ locale: string; slug: string }>
}

export async function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    packages.map((p) => ({ locale, slug: p.slug }))
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params
  const pkg = await getPackage(slug, locale)
  if (!pkg) return {}
  const title = pkg.metaTitle ?? `${pkg.name} | Tanzania Safari`
  const description = pkg.metaDescription ?? `${pkg.name} — ${pkg.duration} nights starting from $${pkg.priceFrom.toLocaleString('en-US')}/person. ${pkg.highlights[0]}.`
  return {
    alternates: buildAlternates(locale, `/safaris/${slug}`),
    title,
    description,
    keywords:
      SAFARI_KEYWORDS_BY_LOCALE[locale]?.[slug]
      ?? (locale === 'en'
        ? (SAFARI_KEYWORDS[slug] ?? DEFAULT_SAFARI_KEYWORDS)
        : CORE_KEYWORDS_BY_LOCALE[locale as keyof typeof CORE_KEYWORDS_BY_LOCALE]),
    openGraph: {
      title: pkg.metaTitle ?? pkg.name,
      description,
      images: [{ url: pkg.heroImage, width: 1200, height: 630, alt: pkg.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title: pkg.metaTitle ?? pkg.name,
      images: [pkg.heroImage],
    },
  }
}

export default async function SafariPackagePage({ params }: Props) {
  const { slug, locale } = await params
  setRequestLocale(locale)
  const pkg = await getPackage(slug, locale)
  if (!pkg) notFound()

  const t = await getTranslations('safari')
  const tc = await getTranslations('common')
  const tf = await getTranslations('forms')

  const TRIP_TYPE_LABEL: Record<typeof pkg.type, string> = {
    wildlife: tf('tripTypes.wildlifeSafari'),
    trekking: tf('tripTypes.kilimanjaroTrek'),
    beach: tf('tripTypes.beachSafariCombo'),
    combination: tf('tripTypes.multiCountry'),
  }

  const featuredPost = await getBlogPostMeta(
    SAFARI_BLOG_MAP[pkg.slug] ?? DEFAULT_BLOG_SLUG,
    locale
  )

  const packageReview = PACKAGE_REVIEWS[pkg.slug]
  const th = packageReview ? await getTranslations({ locale, namespace: 'home' }) : null
  const reviewText = packageReview && th
    ? (packageReview.key === 0 ? th('rev0Text')
      : packageReview.key === 1 ? th('rev1Text')
      : packageReview.key === 7 ? th('rev7Text')
      : th('rev10Text'))
    : null
  const reviewCountry = packageReview && th ? th(packageReview.countryKey) : null

  const touristTripSchema = {
    '@context': 'https://schema.org',
    '@type': 'Trip',
    name: pkg.name,
    description: pkg.metaDescription ?? `${pkg.name} — ${pkg.duration} nights, starting from $${pkg.priceFrom.toLocaleString('en-US')} per person. ${pkg.highlights[0]}.`,
    image: `${SITE_URL}${pkg.heroImage}`,
    provider: {
      '@type': 'Organization',
      name: 'EWA Safari Outfitters',
      url: SITE_URL,
    },
    offers: {
      '@type': 'Offer',
      price: pkg.priceFrom,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: localeUrl(locale, `/safaris/${pkg.slug}`),
    },
    itinerary: {
      '@type': 'ItemList',
      numberOfItems: pkg.duration,
    },
    ...(packageReview && reviewText ? {
      review: {
        '@type': 'Review',
        reviewRating: { '@type': 'Rating', ratingValue: packageReview.rating, bestRating: 5 },
        author: { '@type': 'Person', name: packageReview.name },
        reviewBody: reviewText,
      },
    } : {}),
  }

  const faqSchema = pkg.faq && pkg.faq.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: pkg.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  } : null

  const allPackages = await getPackages(locale)

  const breadcrumbItems = [
    { label: 'EWA Safari Outfitters', href: `/${locale}` },
    { label: t('breadcrumbLabel'), href: `/${locale}/safaris` },
    { label: pkg.name },
  ]
  const breadcrumbSchema = buildBreadcrumbSchema(locale, breadcrumbItems, `/safaris/${slug}`)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(touristTripSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      {/* Hero */}
      <section className="relative h-[55vh] min-h-80 bg-brand flex items-end">
        <Image
          src={pkg.heroImage}
          alt={pkg.name}
          fill
          className={`object-cover ${HERO_IMAGE_POSITION[slug] ?? ''}`}
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand/80 via-brand/20 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
          <Breadcrumb items={breadcrumbItems} />
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              {pkg.badge && (
                <div className="mb-2">
                  <Badge label={pkg.badge === 'bestseller' ? tc('bestseller') : pkg.badge === 'new' ? tc('new') : tc('popular')} />
                </div>
              )}
              <h1 className="text-3xl lg:text-4xl font-semibold text-white">{pkg.name}</h1>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 text-center border border-white/20">
              <div className="text-white/70 text-xs uppercase tracking-wide">{tc('from')}</div>
              <div className="text-white font-bold text-2xl">${pkg.priceFrom.toLocaleString('en-US')}</div>
              <div className="text-white/60 text-xs">{tc('perPerson')}</div>
            </div>
          </div>
        </div>
      </section>

      <MobileEnquireBanner
        eyebrow={`${tc('from')} $${pkg.priceFrom.toLocaleString('en-US')}`}
        title={pkg.name}
        label={t('sendEnquiry')}
        packageName={pkg.name}
        packageType={TRIP_TYPE_LABEL[pkg.type]}
        restrictTripType
        priceFrom={`$${pkg.priceFrom.toLocaleString('en-US')}`}
        duration={`${pkg.duration} ${tc('nights')}`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main content */}
          <Reveal className="lg:col-span-2 space-y-10">
            {/* Overview */}
            {pkg.overview && pkg.overview.length > 0 && (
              <div className="bg-light-green border border-brand/10 rounded-xl p-5 space-y-3">
                <h2 className="text-xl font-semibold text-brand mb-1">{t('overview')}</h2>
                {pkg.overview.map((para, i) => (
                  <p key={i} className="text-base text-text-muted leading-relaxed">{para}</p>
                ))}
              </div>
            )}

            {/* At a Glance + Tour Highlights */}
            <div className="bg-light-green border border-brand/10 rounded-xl p-5 space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                {/* At a Glance */}
                <div>
                  <h2 className="text-lg font-semibold text-brand mb-4">{t('atAGlance')}</h2>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white rounded-lg border border-gray-100 p-3">
                      <DollarSign className="w-4 h-4 text-gold mb-1.5" />
                      <p className="font-bold text-brand text-base leading-tight">${pkg.priceFrom.toLocaleString('en-US')}</p>
                      <p className="text-xs text-text-muted">{tc('from')} · {tc('perPerson')}</p>
                    </div>
                    <div className="bg-white rounded-lg border border-gray-100 p-3">
                      <MapPin className="w-4 h-4 text-gold mb-1.5" />
                      <p className="font-bold text-brand text-base leading-tight line-clamp-2">
                        {pkg.destinations.map((d) => d.charAt(0).toUpperCase() + d.slice(1)).join(', ')}
                      </p>
                      <p className="text-xs text-text-muted">{t('destinationsLabel')}</p>
                    </div>
                    <div className="bg-white rounded-lg border border-gray-100 p-3">
                      <Clock className="w-4 h-4 text-gold mb-1.5" />
                      <p className="font-bold text-brand text-base leading-tight">{pkg.duration} {tc('nights')}</p>
                      <p className="text-xs text-text-muted">{t('duration')}</p>
                    </div>
                    <div className="bg-white rounded-lg border border-gray-100 p-3">
                      <Users className="w-4 h-4 text-gold mb-1.5" />
                      <p className="font-bold text-brand text-base leading-tight">{pkg.groupSize.min}–{pkg.groupSize.max}</p>
                      <p className="text-xs text-text-muted">{t('groupSizeLabel')}</p>
                    </div>
                  </div>
                </div>

                {/* Tour Highlights */}
                <div>
                  <h2 className="text-lg font-semibold text-brand mb-4">{t('packageHighlights')}</h2>
                  <ul className="space-y-2">
                    {pkg.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-base text-text-muted">
                        <Check className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {(pkg.bestTimeToTravel || pkg.tagline) && (
                <div className="flex flex-wrap gap-5 text-base pt-5 border-t border-brand/10">
                  {pkg.bestTimeToTravel && (
                    <div className="flex items-center gap-2 text-text-muted">
                      <Calendar className="w-4 h-4 text-gold" />
                      <span><strong className="text-brand">{t('bestTimeToTravel')}:</strong> {pkg.bestTimeToTravel}</span>
                    </div>
                  )}
                  {pkg.tagline && (
                    <div className="flex items-center gap-2 text-text-muted">
                      <ShieldCheck className="w-4 h-4 text-gold" />
                      <span>{pkg.tagline}</span>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Why This Itinerary Is Different */}
            {pkg.whyDifferent && (
              <div className="bg-light-green border border-brand/10 rounded-xl p-5">
                <h2 className="text-xl font-semibold text-brand mb-4">{pkg.whyDifferent.heading}</h2>
                <div className="space-y-3">
                  {pkg.whyDifferent.paragraphs.map((para, i) => (
                    <p key={i} className="text-base text-text-muted leading-relaxed">{para}</p>
                  ))}
                </div>
              </div>
            )}

            {/* Destination / Photography Highlights */}
            {pkg.destinationHighlights && pkg.destinationHighlights.items.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold text-brand mb-4">{pkg.destinationHighlights.heading}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {pkg.destinationHighlights.items.map((item) => (
                    <div key={item.title} className="bg-light-green border border-brand/10 rounded-xl p-4">
                      <p className="font-semibold text-brand mb-1.5">{item.title}</p>
                      <p className="text-base text-text-muted leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Itinerary */}
            {pkg.itinerary.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold text-brand mb-5">{t('dayByDayItinerary')}</h2>

                {pkg.itinerary.some((d) => d.location) && (
                  <div className="mb-6">
                    <p className="text-xs font-bold text-text-muted uppercase tracking-wide mb-2">{t('itineraryAtAGlance')}</p>
                    <div className="overflow-x-auto rounded-xl border border-gray-100">
                      <table className="w-full text-base">
                        <thead>
                          <tr className="bg-light-green text-left text-text-muted text-xs uppercase tracking-wide">
                            <th className="px-4 py-2.5 font-semibold">{t('day')}</th>
                            <th className="px-4 py-2.5 font-semibold">{t('location')}</th>
                            <th className="px-4 py-2.5 font-semibold">{t('focus')}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {pkg.itinerary.map((day) => (
                            <tr key={day.day} className="border-t border-gray-100">
                              <td className="px-4 py-2.5 text-brand font-semibold whitespace-nowrap">{day.day}</td>
                              <td className="px-4 py-2.5 text-text-muted">{day.location ?? '—'}</td>
                              <td className="px-4 py-2.5 text-text-muted">{day.title}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                <div className="space-y-3">
                  {pkg.itinerary.map((day) => (
                    <details key={day.day} className="group border border-gray-100 rounded-xl overflow-hidden">
                      <summary className="flex items-center justify-between p-4 cursor-pointer bg-white hover:bg-light-green transition-colors list-none">
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-full bg-brand text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                            {day.day}
                          </span>
                          <span className="font-medium text-brand text-base">{day.title}</span>
                        </div>
                        <ChevronDown className="w-4 h-4 text-text-muted group-open:rotate-180 transition-transform" />
                      </summary>
                      <div className="px-4 pb-4 pt-2 bg-white border-t border-gray-100">
                        <p className="text-base text-text-muted leading-relaxed mb-3">{day.description}</p>

                        {day.insiderFact && (
                          <div className="border-l-2 border-gold pl-3 mb-3">
                            <p className="text-[10px] font-bold uppercase tracking-wide text-gold-label mb-0.5">
                              {t('insiderFact')}
                            </p>
                            <p className="text-base text-text-muted leading-relaxed">{day.insiderFact}</p>
                          </div>
                        )}

                        {day.accommodationByTier ? (
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-3">
                            {day.accommodationByTier.trail && (
                              <AmenityStay label={t('tierTrail')} stay={day.accommodationByTier.trail} />
                            )}
                            {day.accommodationByTier.reserve && (
                              <AmenityStay label={t('tierReserve')} stay={day.accommodationByTier.reserve} />
                            )}
                            {day.accommodationByTier.sovereign && (
                              <AmenityStay label={t('tierSovereign')} stay={day.accommodationByTier.sovereign} />
                            )}
                          </div>
                        ) : null}

                        {day.accommodationByFamilyTier ? (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                            {day.accommodationByFamilyTier.luxury && (
                              <AmenityStay label={t('familyTierLuxury')} stay={day.accommodationByFamilyTier.luxury} />
                            )}
                            {day.accommodationByFamilyTier.ultraLuxury && (
                              <AmenityStay label={t('familyTierUltraLuxury')} stay={day.accommodationByFamilyTier.ultraLuxury} />
                            )}
                          </div>
                        ) : null}

                        <div className="flex flex-wrap gap-4 text-base text-text-muted">
                          <span>{day.accommodation}</span>
                          <span>{day.meals}</span>
                        </div>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            )}

            {/* Included / Excluded */}
            <div className="bg-light-green border border-brand/10 rounded-xl p-5 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-brand mb-3 flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" /> {t('included')}
                </h3>
                {pkg.includedCategorized ? (
                  <div className="space-y-4">
                    {pkg.includedCategorized.transfers && pkg.includedCategorized.transfers.length > 0 && (
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-wide text-text-muted mb-1.5">{t('transfers')}</p>
                        <ul className="space-y-1.5">
                          {pkg.includedCategorized.transfers.map((item) => (
                            <li key={item} className="text-base text-text-muted flex items-start gap-2">
                              <Check className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {pkg.includedCategorized.accommodationMeals && pkg.includedCategorized.accommodationMeals.length > 0 && (
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-wide text-text-muted mb-1.5">{t('accommodationMeals')}</p>
                        <ul className="space-y-1.5">
                          {pkg.includedCategorized.accommodationMeals.map((item) => (
                            <li key={item} className="text-base text-text-muted flex items-start gap-2">
                              <Check className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {pkg.includedCategorized.guidingGameDrives && pkg.includedCategorized.guidingGameDrives.length > 0 && (
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-wide text-text-muted mb-1.5">{t('guidingGameDrives')}</p>
                        <ul className="space-y-1.5">
                          {pkg.includedCategorized.guidingGameDrives.map((item) => (
                            <li key={item} className="text-base text-text-muted flex items-start gap-2">
                              <Check className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ) : (
                  <ul className="space-y-1.5">
                    {pkg.included.map((item) => (
                      <li key={item} className="text-base text-text-muted flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div>
                <h3 className="font-semibold text-brand mb-3 flex items-center gap-2">
                  <X className="w-4 h-4 text-red-400" /> {t('notIncluded')}
                </h3>
                <ul className="space-y-1.5">
                  {(pkg.excludedCategorized ?? pkg.excluded).map((item) => (
                    <li key={item} className="text-base text-text-muted flex items-start gap-2">
                      <X className="w-3.5 h-3.5 text-red-400 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {pkg.notes && pkg.notes.length > 0 && (
              <div className="bg-light-green border border-brand/10 rounded-xl p-5">
                <h3 className="font-semibold text-brand mb-2">{t('pleaseNote')}</h3>
                <ul className="space-y-1">
                  {pkg.notes.map((note) => (
                    <li key={note} className="text-base text-text-muted leading-relaxed">
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Traveler review */}
            {packageReview && reviewText && (
              <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-brand mb-3">{t('travelerReviewHeading')}</h3>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex gap-0.5">
                    {Array.from({ length: packageReview.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <span className="text-[10px] bg-green-50 text-green-700 font-semibold px-2 py-0.5 rounded-full border border-green-200 flex-shrink-0">
                    {t('verifiedTraveler')}
                  </span>
                </div>
                <blockquote className="italic text-base leading-relaxed text-text-muted mb-3">
                  &ldquo;{reviewText}&rdquo;
                </blockquote>
                <p className="text-base font-semibold text-brand">{packageReview.name} · {reviewCountry}</p>
              </div>
            )}

            {/* FAQ */}
            {pkg.faq && pkg.faq.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold text-brand mb-5">{t('faq')}</h2>
                <div className="space-y-3">
                  {pkg.faq.map((item, i) => (
                    <details key={i} className="group border border-gray-100 rounded-xl overflow-hidden">
                      <summary className="flex items-center justify-between p-4 cursor-pointer bg-white hover:bg-light-green transition-colors list-none">
                        <span className="font-medium text-brand text-base pr-4">{item.q}</span>
                        <ChevronDown className="w-4 h-4 text-text-muted flex-shrink-0 group-open:rotate-180 transition-transform" />
                      </summary>
                      <div className="px-4 pb-4 pt-2 bg-white border-t border-gray-100">
                        <p className="text-base text-text-muted leading-relaxed">{item.a}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            )}
          </Reveal>

          {/* Sidebar */}
          <Reveal delay={0.15}>
            <div className="sticky top-24 space-y-4">
              <SafariBookingSidebar
                packageName={pkg.name}
                tripTypeLabel={TRIP_TYPE_LABEL[pkg.type]}
                priceFrom={pkg.priceFrom}
                duration={pkg.duration}
                nightsLabel={tc('nights')}
                perPersonLabel={tc('perPerson')}
                pricingTiers={pkg.pricingTiers}
                pricingTiersProvisional={pkg.pricingTiersProvisional}
                familyPricing={pkg.familyPricing}
                sendEnquiryLabel={t('sendEnquiry')}
                freeNoCommitmentLabel={t('freeNoCommitment')}
                bookThisPackageLabel={t('bookThisPackage')}
                responseNoteLabel={t('responseNote')}
                noPaymentLabel={t('noPayment')}
              />

              {/* Featured blog post */}
              {featuredPost && (
                <div>
                  <p className="text-xs font-bold text-text-muted uppercase tracking-widest mb-3">
                    {t('featuredGuide')}
                  </p>
                  <BlogSuggestionCard
                    slug={featuredPost.slug}
                    title={featuredPost.title}
                    excerpt={featuredPost.excerpt}
                    category={featuredPost.category}
                    image={featuredPost.heroImage}
                    readTime={featuredPost.readTime}
                    readLabel={tc('readMore')}
                  />
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>

      <RelatedSafaris current={pkg} all={allPackages} />
      <TrustBar />
    </>
  )
}
