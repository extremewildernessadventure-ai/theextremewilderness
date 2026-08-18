import type { routing } from '@/i18n/routing'

type Locale = (typeof routing.locales)[number]

// Genuinely market-researched core/pillar search terms per locale — NOT
// translations of the English list. Each locale's terms reflect that
// market's actual search phrasing (compound nouns for German, transactional
// Cyrillic-only phrasing for Russian, separate transliteration conventions
// for mainland vs. Taiwan Chinese, etc.) and a deliberate luxury-safari
// weighting for zh/zh-TW per confirmed demand. These are reused as a
// fallback layer across package/destination/home-type metadata until
// per-entry research (Phase 3/4 of the SEO plan) replaces them with
// long-tail terms specific to that package or destination.
//
// This list is intentionally not exhaustive per locale — it's the shared
// "pillar" tier; long-tail expansion happens per-package/per-destination as
// that research lands, not by growing this file indefinitely.
export const CORE_KEYWORDS_BY_LOCALE: Record<Locale, string[]> = {
  en: [
    'Tanzania safari', 'Tanzania safari 2026', 'Serengeti safari', 'Kilimanjaro trekking',
    'gorilla trekking Rwanda', 'luxury Tanzania safari', 'Tanzania safari cost',
    'honeymoon safari Africa', 'Tanzania tour operator', 'East Africa safari',
    'TATO certified tour operator',
  ],
  de: [
    'Tansania Safari', 'Kilimandscharo Besteigung', 'Serengeti Safari', 'Safari Tansania Kosten',
    'beste Reisezeit Serengeti', 'Gorillas Ruanda Trekking', 'Luxus Safari Afrika',
    'Sansibar Rundreise', 'Safari buchen Tansania', 'Kilimandscharo Trekking Machame Route',
    'Familiensafari Tansania', 'Flitterwochen Safari Afrika',
    'TATO-zertifizierter Reiseveranstalter',
  ],
  es: [
    'safari en Tanzania', 'safari de lujo África', 'ascensión al Kilimanjaro',
    'gorilas Ruanda trekking', 'mejor época para safari Serengeti', 'precio safari Tanzania',
    'safari luna de miel', 'safari Serengeti Ngorongoro', 'tour Tanzania todo incluido',
    'safari en familia África', 'ruta Machame Kilimanjaro', 'Zanzíbar playa y safari',
    'operador turístico certificado TATO',
  ],
  fr: [
    'safari en Tanzanie', 'safari de luxe Afrique', 'ascension du Kilimandjaro',
    'trek gorilles Rwanda', 'meilleure période safari Serengeti', 'prix safari Tanzanie',
    'safari voyage de noces', 'safari Serengeti Ngorongoro', 'circuit Tanzanie sur mesure',
    'safari en famille Afrique', 'voie Machame Kilimandjaro', 'Zanzibar plage et safari',
    'tour-opérateur certifié TATO',
  ],
  ru: [
    'сафари в Танзании', 'восхождение на Килиманджаро', 'гориллы Руанда трекинг',
    'сафари Танзания цена', 'лучшее время для сафари Серенгети', 'треккинг сафари Танзания',
    'роскошное сафари Африка', 'сафари медовый месяц', 'тур в Танзанию все включено',
    'сафари Серенгети Нгоронгоро', 'маршрут Мачаме Килиманджаро', 'сафари для семьи Африка',
    'туроператор с сертификацией TATO',
  ],
  zh: [
    '坦桑尼亚豪华野生动物园', '乞力马扎罗山攀登', '卢旺达大猩猩徒步', '塞伦盖蒂野生动物园',
    '非洲蜜月游猎', '坦桑尼亚旅游价格', '私人向导野生动物园', '桑给巴尔海滩度假',
    '恩戈罗恩戈罗火山口野生动物园', '非洲奢华旅行', '马查梅路线乞力马扎罗', '家庭野生动物园非洲',
    'TATO认证旅游运营商',
  ],
  'zh-TW': [
    '坦尚尼亞豪華野生動物園', '吉力馬札羅山攀登', '盧安達大猩猩健行', '塞倫蓋提野生動物園',
    '非洲蜜月狩獵之旅', '坦尚尼亞旅遊價格', '私人嚮導野生動物園', '尚吉巴海灘度假',
    '恩戈羅恩戈羅火山口野生動物園', '非洲奢華旅行', '馬查美路線吉力馬札羅', '非洲家庭野生動物園',
    'TATO認證旅行社',
  ],
  it: [
    'safari in Tanzania', 'safari di lusso in Africa', 'scalata del Kilimanjaro',
    'trekking gorilla Ruanda', 'periodo migliore safari Serengeti', 'prezzo safari Tanzania',
    'safari luna di miele', 'safari Serengeti Ngorongoro', 'tour operator Tanzania',
    'safari in famiglia Africa', 'via Machame Kilimanjaro', 'Zanzibar mare e safari',
    'tour operator certificato TATO',
  ],
  nl: [
    'safari Tanzania', 'luxe safari Afrika', 'Kilimanjaro beklimmen',
    'gorilla trekking Rwanda', 'beste tijd safari Serengeti', 'safari Tanzania kosten',
    'huwelijksreis safari', 'safari Serengeti Ngorongoro', 'reisorganisatie Tanzania',
    'gezinssafari Afrika', 'Machame route Kilimanjaro', 'Zanzibar strand en safari',
  ],
  pt: [
    'safari na Tanzânia', 'safari de luxo em África', 'escalada ao Kilimanjaro',
    'trekking de gorilas no Ruanda', 'melhor época para safari no Serengeti', 'preço do safari na Tanzânia',
    'safari em lua de mel', 'safari Serengeti Ngorongoro', 'operador turístico Tanzânia',
    'safari em família África', 'rota Machame Kilimanjaro', 'Zanzibar praia e safari',
  ],
  ja: [
    'タンザニア サファリ', 'タンザニア サファリ ツアー 2026', 'セレンゲティ サファリ', 'キリマンジャロ登山',
    'ルワンダ ゴリラトレッキング', 'ラグジュアリー サファリ アフリカ', 'タンザニア サファリ 費用',
    '新婚旅行 サファリ アフリカ', 'タンザニア 旅行会社', '東アフリカ サファリ',
    'ザンジバル ビーチ サファリ', 'マラングルート キリマンジャロ',
  ],
  ko: [
    '탄자니아 사파리', '탄자니아 사파리 2026', '세렝게티 사파리', '킬리만자로 등반',
    '르완다 고릴라 트레킹', '럭셔리 사파리 아프리카', '탄자니아 사파리 비용',
    '신혼여행 사파리 아프리카', '탄자니아 여행사', '동아프리카 사파리',
    '잔지바르 비치 사파리', '마차메 루트 킬리만자로',
  ],
}
