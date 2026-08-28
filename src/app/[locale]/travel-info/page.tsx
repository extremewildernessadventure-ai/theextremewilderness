import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { Link } from '@/i18n/navigation'
import {
  ArrowRight, Calendar, Heart, DollarSign,
  Shirt, ShieldCheck, Phone, Syringe, Sun, Mountain,
  Bug, HeartPulse, Banknote, Repeat, Briefcase, PawPrint,
} from 'lucide-react'
import { buildAlternates } from '@/lib/site'
import Reveal from '@/components/motion/Reveal'
import { RevealGroup, RevealItem } from '@/components/motion/RevealGroup'
import CtaBanner from '@/components/home/CtaBanner'
import type { routing } from '@/i18n/routing'

type Props = { params: Promise<{ locale: string }> }
type Locale = (typeof routing.locales)[number]

// Page-specific long-tail keywords, one per genuinely distinct topic this
// page covers (visa/entry, health, currency, safari packing, Kilimanjaro
// packing, seasons/migration, climbing season, safety, practicalities) —
// natively authored per locale, not translated from English, matching the
// market-phrasing convention established in src/data/coreKeywords.ts.
const TRAVEL_INFO_KEYWORDS: Record<Locale, string[]> = {
  en: [
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
    'Kilimanjaro climbing season',
    'Kilimanjaro packing list',
    'when to climb Kilimanjaro',
    'Tanzania electricity voltage',
    'Tanzania tipping guide',
    'is Tanzania safe for tourists',
    'Serengeti migration by month',
    'Tanzania shilling exchange rate',
    'what to wear on safari',
  ],
  fr: [
    'visa Tanzanie',
    'conseils voyage Tanzanie',
    'vaccins pour la Tanzanie',
    'liste bagages safari',
    'meilleure période pour un safari en Tanzanie',
    'météo safari Serengeti',
    'monnaie tanzanienne',
    'paludisme Tanzanie précautions',
    "formalités d'entrée Tanzanie",
    'que mettre dans sa valise safari',
    'assurance voyage Afrique',
    'certificat fièvre jaune Tanzanie',
    'conseils aux voyageurs Tanzanie',
    'meilleure saison pour grimper le Kilimandjaro',
    'liste équipement Kilimandjaro',
    'quand grimper le Kilimandjaro',
    'électricité Tanzanie voltage',
    'pourboire guide safari',
    'la Tanzanie est-elle sûre',
    'migration des gnous par mois',
    'taux de change shilling tanzanien',
    'tenue vestimentaire safari',
  ],
  es: [
    'visado para Tanzania',
    'consejos de viaje Tanzania',
    'vacunas para Tanzania',
    'lista de equipaje para safari',
    'mejor época para safari en Tanzania',
    'clima safari Serengeti',
    'moneda de Tanzania',
    'prevención de malaria Tanzania',
    'requisitos de entrada Tanzania',
    'qué llevar a un safari',
    'seguro de viaje África',
    'certificado de fiebre amarilla Tanzania',
    'consejos para viajar a Tanzania',
    'mejor época para subir el Kilimanjaro',
    'lista de equipo para el Kilimanjaro',
    'cuándo subir el Kilimanjaro',
    'electricidad y voltaje en Tanzania',
    'propinas en safari',
    'es seguro viajar a Tanzania',
    'migración del ñu por mes',
    'tipo de cambio del chelín tanzano',
    'qué ropa llevar en un safari',
  ],
  de: [
    'Tansania Visum',
    'Reisetipps Tansania',
    'Impfungen Tansania',
    'Packliste Safari',
    'beste Reisezeit Tansania',
    'Wetter Safari Serengeti',
    'Währung Tansania',
    'Malariaschutz Tansania',
    'Einreisebestimmungen Tansania',
    'was auf Safari mitnehmen',
    'Reiseversicherung Afrika',
    'Gelbfieberimpfung Tansania',
    'Reisehinweise Tansania',
    'beste Kletterzeit Kilimandscharo',
    'Packliste Kilimandscharo',
    'wann Kilimandscharo besteigen',
    'Stromspannung Tansania',
    'Trinkgeld Safari',
    'ist Tansania sicher für Touristen',
    'Gnu-Wanderung nach Monat',
    'tansanischer Schilling Wechselkurs',
    'Kleidung für Safari',
  ],
  ru: [
    'виза в Танзанию',
    'советы путешественникам Танзания',
    'прививки для Танзании',
    'список вещей для сафари',
    'лучшее время для сафари в Танзании',
    'погода сафари Серенгети',
    'валюта Танзании',
    'профилактика малярии Танзания',
    'въездные требования Танзания',
    'что взять с собой на сафари',
    'туристическая страховка Африка',
    'справка о прививке от жёлтой лихорадки',
    'советы перед поездкой в Танзанию',
    'лучшее время для восхождения на Килиманджаро',
    'список снаряжения для Килиманджаро',
    'когда лучше подниматься на Килиманджаро',
    'напряжение электросети Танзания',
    'чаевые на сафари',
    'безопасно ли в Танзании туристам',
    'миграция гну по месяцам',
    'курс танзанийского шиллинга',
    'что надеть на сафари',
  ],
  zh: [
    '坦桑尼亚签证',
    '坦桑尼亚旅行贴士',
    '坦桑尼亚疫苗接种',
    '游猎打包清单',
    '坦桑尼亚最佳旅游季节',
    '塞伦盖蒂游猎天气',
    '坦桑尼亚货币',
    '坦桑尼亚疟疾预防',
    '坦桑尼亚入境要求',
    '游猎该带什么',
    '非洲旅行保险',
    '黄热病接种证明',
    '坦桑尼亚旅行须知',
    '乞力马扎罗山最佳攀登季节',
    '乞力马扎罗打包清单',
    '什么时候适合登乞力马扎罗山',
    '坦桑尼亚电压',
    '游猎小费指南',
    '坦桑尼亚旅游安全吗',
    '角马迁徙月份',
    '坦桑尼亚先令汇率',
    '游猎该穿什么',
  ],
  'zh-TW': [
    '坦尚尼亞簽證',
    '坦尚尼亞旅遊須知',
    '坦尚尼亞疫苗接種',
    '獵遊打包清單',
    '坦尚尼亞最佳旅遊季節',
    '塞倫蓋提獵遊天氣',
    '坦尚尼亞貨幣',
    '坦尚尼亞瘧疾預防',
    '坦尚尼亞入境規定',
    '獵遊該帶什麼',
    '非洲旅遊保險',
    '黃熱病接種證明',
    '坦尚尼亞旅遊提醒',
    '吉力馬札羅山最佳攀登季節',
    '吉力馬札羅打包清單',
    '什麼時候適合攀登吉力馬札羅山',
    '坦尚尼亞電壓',
    '獵遊小費指南',
    '坦尚尼亞旅遊安全嗎',
    '角馬遷徙月份',
    '坦尚尼亞先令匯率',
    '獵遊該穿什麼',
  ],
  it: [
    'visto per la Tanzania',
    'consigli di viaggio Tanzania',
    'vaccinazioni per la Tanzania',
    'lista bagaglio safari',
    'periodo migliore per un safari in Tanzania',
    'meteo safari Serengeti',
    'valuta della Tanzania',
    'prevenzione malaria Tanzania',
    'requisiti di ingresso Tanzania',
    'cosa portare in un safari',
    'assicurazione viaggio Africa',
    'certificato febbre gialla Tanzania',
    'consigli per viaggiare in Tanzania',
    'periodo migliore per scalare il Kilimanjaro',
    'lista attrezzatura Kilimanjaro',
    'quando scalare il Kilimanjaro',
    'voltaggio elettrico Tanzania',
    'mance guida safari',
    'la Tanzania è sicura per i turisti',
    'migrazione degli gnu per mese',
    'cambio scellino tanzaniano',
    'cosa indossare in un safari',
  ],
  nl: [
    'visum voor Tanzania',
    'reistips Tanzania',
    'vaccinaties voor Tanzania',
    'paklijst safari',
    'beste tijd voor safari in Tanzania',
    'weer safari Serengeti',
    'valuta Tanzania',
    'malariapreventie Tanzania',
    'inreisvereisten Tanzania',
    'wat mee te nemen op safari',
    'reisverzekering Afrika',
    'gele koorts verklaring Tanzania',
    'reisadvies Tanzania',
    'beste klimseizoen Kilimanjaro',
    'paklijst Kilimanjaro',
    'wanneer de Kilimanjaro beklimmen',
    'elektriciteit voltage Tanzania',
    'fooien gids safari',
    'is Tanzania veilig voor toeristen',
    'trek van de gnoes per maand',
    'wisselkoers Tanzaniaanse shilling',
    'wat te dragen op safari',
  ],
  pt: [
    'visto para a Tanzânia',
    'dicas de viagem Tanzânia',
    'vacinas para a Tanzânia',
    'lista de bagagem safari',
    'melhor época para safari na Tanzânia',
    'tempo safari Serengeti',
    'moeda da Tanzânia',
    'prevenção da malária Tanzânia',
    'requisitos de entrada Tanzânia',
    'guia de viagem Tanzânia',
    'o que levar para um safari',
    'seguro de viagem Tanzânia',
    'certificado de febre amarela Tanzânia',
    'conselhos de viagem Tanzânia',
    'melhor época para escalar o Kilimanjaro',
    'lista de equipamento Kilimanjaro',
    'quando escalar o Kilimanjaro',
    'voltagem elétrica Tanzânia',
    'gorjetas guia safari',
    'a Tanzânia é segura para turistas',
    'migração dos nhus por mês',
    'câmbio do xelim tanzaniano',
    'o que vestir num safari',
  ],
  ja: [
    'タンザニア ビザ',
    'タンザニア 旅行のコツ',
    'タンザニア 予防接種',
    'サファリ 持ち物リスト',
    'タンザニア サファリ ベストシーズン',
    'セレンゲティ サファリ 天気',
    'タンザニア 通貨',
    'タンザニア マラリア予防',
    'タンザニア 入国条件',
    'タンザニア 旅行ガイド',
    'サファリ 持ち物',
    'タンザニア 海外旅行保険',
    'タンザニア 黄熱病 予防接種証明書',
    'タンザニア 渡航情報',
    'キリマンジャロ登山 ベストシーズン',
    'キリマンジャロ 持ち物リスト',
    'キリマンジャロ登山 時期',
    'タンザニア 電圧',
    'サファリ ガイド チップ',
    'タンザニア 治安',
    'ヌーの大移動 月別',
    'タンザニアシリング 為替レート',
    'サファリ 服装',
  ],
  ko: [
    '탄자니아 비자',
    '탄자니아 여행 팁',
    '탄자니아 예방접종',
    '사파리 준비물 리스트',
    '탄자니아 사파리 베스트 시즌',
    '세렝게티 사파리 날씨',
    '탄자니아 통화',
    '탄자니아 말라리아 예방',
    '탄자니아 입국 조건',
    '탄자니아 여행 가이드',
    '사파리 준비물',
    '탄자니아 해외여행자보험',
    '탄자니아 황열병 예방접종 증명서',
    '탄자니아 여행 정보',
    '킬리만자로 등반 베스트 시즌',
    '킬리만자로 준비물 리스트',
    '킬리만자로 등반 시기',
    '탄자니아 전압',
    '사파리 가이드 팁',
    '탄자니아 치안',
    '세렝게티 대이동 월별 가이드',
    '탄자니아 실링 환율',
    '사파리 복장',
  ],
  ar: [
    'تأشيرة تنزانيا',
    'نصائح السفر إلى تنزانيا',
    'التطعيمات المطلوبة لتنزانيا',
    'قائمة أغراض السفاري',
    'أفضل موسم لسفاري تنزانيا',
    'طقس سفاري سيرينغيتي',
    'عملة تنزانيا',
    'الوقاية من الملاريا في تنزانيا',
    'شروط دخول تنزانيا',
    'دليل السفر إلى تنزانيا',
    'أغراض يجب إحضارها للسفاري',
    'تأمين السفر لتنزانيا',
    'شهادة التطعيم ضد الحمى الصفراء تنزانيا',
    'معلومات السفر إلى تنزانيا',
    'أفضل موسم لتسلق كليمنجارو',
    'قائمة أغراض تسلق كليمنجارو',
    'أفضل وقت لتسلق كليمنجارو',
    'الجهد الكهربائي في تنزانيا',
    'إكرامية مرشد السفاري',
    'الأمان في تنزانيا',
    'دليل الهجرة الكبرى شهريًا',
    'سعر صرف الشلن التنزاني',
    'ملابس السفاري',
  ],
  he: [
    'ויזה לטנזניה',
    'טיפים לנסיעה לטנזניה',
    'חיסונים נדרשים לטנזניה',
    'רשימת ציוד לספארי',
    'העונה הטובה ביותר לספארי בטנזניה',
    'מזג אוויר ספארי בסרנגטי',
    'מטבע טנזניה',
    'מניעת מלריה בטנזניה',
    'תנאי כניסה לטנזניה',
    'מדריך נסיעה לטנזניה',
    'ציוד שכדאי להביא לספארי',
    'ביטוח נסיעות לטנזניה',
    'תעודת חיסון קדחת צהובה טנזניה',
    'מידע נסיעה לטנזניה',
    'העונה הטובה ביותר לטיפוס קילימנג\'רו',
    'רשימת ציוד לטיפוס קילימנג\'רו',
    'מתי לטפס על קילימנג\'רו',
    'מתח חשמלי בטנזניה',
    'טיפ למדריך ספארי',
    'ביטחון בטנזניה',
    'מדריך הנדידה הגדולה לפי חודשים',
    'שער חליפין שילינג טנזני',
    'לבוש לספארי',
  ],
  hi: [
    'तंजानिया वीज़ा',
    'तंजानिया यात्रा टिप्स',
    'तंजानिया के लिए आवश्यक टीके',
    'सफारी पैकिंग लिस्ट',
    'तंजानिया सफारी के लिए सबसे अच्छा मौसम',
    'सेरेनगेटी सफारी मौसम',
    'तंजानिया मुद्रा',
    'तंजानिया में मलेरिया से बचाव',
    'तंजानिया प्रवेश आवश्यकताएं',
    'तंजानिया यात्रा गाइड',
    'सफारी के लिए क्या लेकर जाएं',
    'तंजानिया के लिए यात्रा बीमा',
    'तंजानिया पीत ज्वर टीकाकरण प्रमाणपत्र',
    'तंजानिया यात्रा जानकारी',
    'किलिमंजारो चढ़ाई के लिए सबसे अच्छा मौसम',
    'किलिमंजारो चढ़ाई पैकिंग लिस्ट',
    'किलिमंजारो चढ़ने का सबसे अच्छा समय',
    'तंजानिया में बिजली वोल्टेज',
    'सफारी गाइड टिप',
    'तंजानिया में सुरक्षा',
    'महान पलायन महीने के अनुसार गाइड',
    'तंजानिया शिलिंग विनिमय दर',
    'सफारी कपड़े',
  ],
  th: [
    'วีซ่าแทนซาเนีย',
    'เคล็ดลับการเดินทางแทนซาเนีย',
    'วัคซีนที่จำเป็นสำหรับแทนซาเนีย',
    'รายการของที่ต้องเตรียมสำหรับซาฟารี',
    'ฤดูกาลที่ดีที่สุดสำหรับซาฟารีแทนซาเนีย',
    'สภาพอากาศซาฟารีเซเรนเกติ',
    'สกุลเงินแทนซาเนีย',
    'การป้องกันมาลาเรียในแทนซาเนีย',
    'ข้อกำหนดการเข้าประเทศแทนซาเนีย',
    'คู่มือการเดินทางแทนซาเนีย',
    'ควรเตรียมอะไรไปซาฟารี',
    'ประกันการเดินทางสำหรับแทนซาเนีย',
    'ใบรับรองวัคซีนไข้เหลืองแทนซาเนีย',
    'ข้อมูลการเดินทางแทนซาเนีย',
    'ฤดูกาลที่ดีที่สุดสำหรับปีนคิลิมันจาโร',
    'รายการของที่ต้องเตรียมสำหรับปีนคิลิมันจาโร',
    'เวลาที่ดีที่สุดในการปีนคิลิมันจาโร',
    'แรงดันไฟฟ้าในแทนซาเนีย',
    'ทิปไกด์ซาฟารี',
    'ความปลอดภัยในแทนซาเนีย',
    'คู่มือการอพยพครั้งใหญ่ตามเดือน',
    'อัตราแลกเปลี่ยนชิลลิงแทนซาเนีย',
    'เสื้อผ้าสำหรับซาฟารี',
  ],
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'travelInfo' })
  return {
    alternates: buildAlternates(locale, '/travel-info'),
    title: t('metaTitle'),
    description: t('metaDescription'),
    openGraph: {
      title: t('metaTitle'),
      description: t('ogDescription'),
      images: [{ url: '/images/gallery/serengeti-lions-under-acacia.jpg', width: 1200, height: 630, alt: t('ogImageAlt') }],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('twitterTitle'),
      images: ['/images/gallery/serengeti-lions-under-acacia.jpg'],
    },
    keywords: TRAVEL_INFO_KEYWORDS[locale as keyof typeof TRAVEL_INFO_KEYWORDS] ?? TRAVEL_INFO_KEYWORDS.en,
  }
}

const SEASON_STYLE = {
  dry:          { border: 'border-gold', badge: 'text-gold-label' },
  rain:         { border: 'border-brand-secondary', badge: 'text-brand-secondary' },
  transitional: { border: 'border-gray-300', badge: 'text-text-muted' },
} as const

export default async function TravelInfoPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('travelInfo')
  const tTrek = await getTranslations('trekking')

  const quickFacts = [
    { label: t('qf1Label'), value: t('qf1Value') },
    { label: t('qf2Label'), value: t('qf2Value') },
    { label: t('qf3Label'), value: t('qf3Value') },
    { label: t('qf4Label'), value: t('qf4Value') },
    { label: t('qf5Label'), value: t('qf5Value') },
    { label: t('qf6Label'), value: t('qf6Value') },
  ]

  const monthFormatter = new Intl.DateTimeFormat(locale, { month: 'short' })
  const seasonLabel = {
    shortDry: t('seasonShortDry'), dry: t('seasonDrySeason'),
    longRains: t('seasonLongRains'), shortRains: t('seasonShortRains'),
    transitional: t('seasonTransitional'),
  }
  const monthCards = [
    { m: 0,  highlight: t('s1mJan'), season: seasonLabel.shortDry,     style: 'dry' as const },
    { m: 1,  highlight: t('s1mFeb'), season: seasonLabel.shortDry,     style: 'dry' as const },
    { m: 2,  highlight: t('s1mMar'), season: seasonLabel.longRains,    style: 'rain' as const },
    { m: 3,  highlight: t('s1mApr'), season: seasonLabel.longRains,    style: 'rain' as const },
    { m: 4,  highlight: t('s1mMay'), season: seasonLabel.longRains,    style: 'rain' as const },
    { m: 5,  highlight: t('s1mJun'), season: seasonLabel.dry,          style: 'dry' as const },
    { m: 6,  highlight: t('s1mJul'), season: seasonLabel.dry,          style: 'dry' as const },
    { m: 7,  highlight: t('s1mAug'), season: seasonLabel.dry,          style: 'dry' as const },
    { m: 8,  highlight: t('s1mSep'), season: seasonLabel.dry,          style: 'dry' as const },
    { m: 9,  highlight: t('s1mOct'), season: seasonLabel.dry,          style: 'dry' as const },
    { m: 10, highlight: t('s1mNov'), season: seasonLabel.shortRains,   style: 'rain' as const },
    { m: 11, highlight: t('s1mDec'), season: seasonLabel.transitional, style: 'transitional' as const },
  ].map((c) => ({ ...c, label: monthFormatter.format(new Date(2026, c.m, 1)) }))

  const packingListA = [t('s4list1'), t('s4list2'), t('s4list3'), t('s4list4'), t('s4list5')]
  const packingListB = [t('s4list6'), t('s4list7'), t('s4list8'), t('s4list9'), t('s4list10')]

  const sections = [
    { id: 'when-to-travel', icon: Calendar, title: t('s1Title') },
    { id: 'health', icon: Syringe, title: t('s2Title') },
    { id: 'currency', icon: DollarSign, title: t('s3Title') },
    { id: 'dress-code', icon: Shirt, title: t('s4Title') },
    { id: 'safety', icon: ShieldCheck, title: t('s5Title') },
  ]

  return (
    <main className="bg-white">

      {/* Hero */}
      <section className="relative bg-brand py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/gallery/lion-portrait.webp')] bg-cover bg-center" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[
            { label: 'EWA Safari Outfitters', href: `/${locale}` },
            { label: t('breadcrumbLabel') },
          ]} />
          <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-4">{t('heroEyebrow')}</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 max-w-3xl">
            {t('heroTitle')} <span className="text-gold">{t('heroTitleGold')}</span>
          </h1>
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl">{t('heroSubtitle')}</p>
        </div>
      </section>

      {/* Quick Facts Band */}
      <section className="bg-brand border-t border-white/10 py-12">
        <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-6 lg:divide-x lg:divide-white/10">
            {quickFacts.map(({ label, value }) => (
              <div key={label} className="px-4 lg:px-5">
                <p className="text-gold text-[10px] font-semibold uppercase tracking-widest mb-2">{label}</p>
                <p className="text-white/80 text-sm leading-snug">{value}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Jump Nav */}
      <section className="bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex flex-wrap gap-1 py-3">
            {sections.map(({ id, title, icon: Icon }) => (
              <a
                key={id}
                href={`#${id}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-text-muted hover:text-brand hover:bg-brand/5 transition-colors whitespace-nowrap"
              >
                <Icon className="w-4 h-4" />
                {title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* ── 1. When to Travel ──────────────────────────────────────────── */}
      <section id="when-to-travel" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center shrink-0">
                <Calendar className="w-6 h-6 text-brand" />
              </div>
              <div>
                <p className="text-gold-label text-xs font-semibold uppercase tracking-widest mb-1">{t('sectionEyebrow')}</p>
                <h2 className="text-3xl font-bold text-brand">{t('s1Title')}</h2>
              </div>
            </div>

            <div className="max-w-3xl mb-10">
              <h3 className="text-brand font-semibold text-lg mb-2">{t('s1h1')}</h3>
              <p className="text-text-muted leading-relaxed">{t('s1b1')}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
              <div className="bg-white border border-gray-200 border-t-4 border-t-gold rounded-2xl p-8">
                <span className="inline-block text-[10.5px] font-bold uppercase tracking-wider bg-gold/15 text-gold-label px-3 py-1 rounded-full mb-4">
                  {t('s1tagPeak')}
                </span>
                <h3 className="text-brand font-bold text-2xl mb-2">{t('s1h2')}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{t('s1b2')}</p>
              </div>
              <div className="bg-white border border-gray-200 border-t-4 border-t-brand-secondary rounded-2xl p-8">
                <span className="inline-block text-[10.5px] font-bold uppercase tracking-wider bg-brand-secondary/10 text-brand-secondary px-3 py-1 rounded-full mb-4">
                  {t('s1tagGreen')}
                </span>
                <h3 className="text-brand font-bold text-2xl mb-2">{t('s1h3')}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{t('s1b3')}</p>
              </div>
            </div>
          </Reveal>

          <RevealGroup className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {monthCards.map(({ m, label, season, highlight, style }) => (
              <RevealItem
                key={m}
                className={`bg-white border border-gray-200 border-s-4 ${SEASON_STYLE[style].border} rounded-xl p-4`}
              >
                <p className="text-brand font-bold text-xl mb-0.5">{label}</p>
                <p className={`text-[10px] font-semibold uppercase tracking-wide mb-2 ${SEASON_STYLE[style].badge}`}>
                  {season}
                </p>
                <p className="text-text-muted text-xs leading-relaxed">{highlight}</p>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal className="mt-14 max-w-3xl mx-auto bg-light-green rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-3">
              <Mountain className="w-5 h-5 text-brand shrink-0" />
              <h3 className="text-brand font-bold text-xl">{tTrek('whenToSummitHeading')}</h3>
            </div>
            <p className="text-text-muted text-sm leading-relaxed mb-6">{tTrek('whenToSummitSubtitle')}</p>
            <div className="space-y-4 mb-6">
              {[
                { label: tTrek('season1Label'), months: tTrek('season1Months'), desc: tTrek('season1Desc') },
                { label: tTrek('season2Label'), months: tTrek('season2Months'), desc: tTrek('season2Desc') },
                { label: tTrek('season3Label'), months: tTrek('season3Months'), desc: tTrek('season3Desc') },
              ].map(({ label, months, desc }) => (
                <div key={label} className="bg-white rounded-xl p-4 border border-gray-100">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                    <span className="text-brand font-semibold text-sm">{label}</span>
                    <span className="text-gold-label text-xs font-semibold uppercase tracking-wide">{months}</span>
                  </div>
                  <p className="text-text-muted text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
            <Link
              href="/trekking#when-to-summit"
              className="inline-flex items-center gap-1.5 text-brand font-semibold text-sm hover:text-gold-dark transition-colors"
            >
              {t('kiliSeasonLink')}
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── 2. Health & Vaccinations ───────────────────────────────────── */}
      <section id="health" className="py-20 lg:py-28 bg-light-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center shrink-0">
              <Syringe className="w-6 h-6 text-brand" />
            </div>
            <div>
              <p className="text-gold-label text-xs font-semibold uppercase tracking-widest mb-1">{t('sectionEyebrow')}</p>
              <h2 className="text-3xl font-bold text-brand">{t('s2Title')}</h2>
            </div>
          </Reveal>
          <RevealGroup className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { Icon: Syringe, heading: t('s2h1'), body: t('s2b1') },
              { Icon: Bug, heading: t('s2h2'), body: t('s2b2') },
              { Icon: HeartPulse, heading: t('s2h3'), body: t('s2b3') },
            ].map(({ Icon, heading, body }) => (
              <RevealItem key={heading} className="bg-white border border-gray-200 rounded-2xl p-7">
                <div className="w-11 h-11 border border-gold rounded-full flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="text-brand font-semibold text-lg mb-2">{heading}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ── 3. Customs & Currency ──────────────────────────────────────── */}
      <section id="currency" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center shrink-0">
              <DollarSign className="w-6 h-6 text-brand" />
            </div>
            <div>
              <p className="text-gold-label text-xs font-semibold uppercase tracking-widest mb-1">{t('sectionEyebrow')}</p>
              <h2 className="text-3xl font-bold text-brand">{t('s3Title')}</h2>
            </div>
          </Reveal>
          <RevealGroup className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { Icon: Banknote, heading: t('s3h1'), body: t('s3b1') },
              { Icon: Repeat, heading: t('s3h2'), body: t('s3b2') },
              { Icon: Briefcase, heading: t('s3h3'), body: t('s3b3') },
            ].map(({ Icon, heading, body }) => (
              <RevealItem key={heading} className="bg-white border border-gray-200 rounded-2xl p-7">
                <div className="w-11 h-11 border border-gold rounded-full flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="text-brand font-semibold text-lg mb-2">{heading}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ── 4. What to Pack ────────────────────────────────────────────── */}
      <section id="dress-code" className="py-20 lg:py-28 bg-light-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center shrink-0">
                <Shirt className="w-6 h-6 text-brand" />
              </div>
              <div>
                <p className="text-gold-label text-xs font-semibold uppercase tracking-widest mb-1">{t('sectionEyebrow')}</p>
                <h2 className="text-3xl font-bold text-brand">{t('s4Title')}</h2>
              </div>
            </div>
            <div className="space-y-8 mb-10">
              <div>
                <h3 className="text-brand font-semibold text-lg mb-2">{t('s4h1')}</h3>
                <p className="text-text-muted leading-relaxed">{t('s4b1')}</p>
              </div>
              <div>
                <h3 className="text-brand font-semibold text-lg mb-2">{t('s4h2')}</h3>
                <p className="text-text-muted leading-relaxed">{t('s4b2')}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10">
              {[packingListA, packingListB].map((col, i) => (
                <ul key={i} className="space-y-2">
                  {col.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-text-muted text-sm leading-relaxed py-1 border-b border-dashed border-gray-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </Reveal>

          <Reveal className="relative overflow-hidden mt-14 max-w-3xl mx-auto bg-white rounded-2xl p-8 border border-gray-100">
            <div className="absolute inset-0 opacity-10 bg-[url('/images/gallery/kilimanjaro-hero.webp')] bg-cover bg-center" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-3">
                <Mountain className="w-5 h-5 text-brand shrink-0" />
                <h3 className="text-brand font-bold text-xl">{tTrek('packHeading')}</h3>
              </div>
              <p className="text-text-muted text-sm leading-relaxed mb-6">{tTrek('packSubtitle')}</p>
              <div className="flex flex-wrap gap-2.5 mb-6">
                {[tTrek('gear1Cat'), tTrek('gear2Cat'), tTrek('gear3Cat'), tTrek('gear4Cat')].map((cat) => (
                  <span key={cat} className="px-4 py-2 rounded-full bg-light-green text-brand text-xs font-semibold">
                    {cat}
                  </span>
                ))}
              </div>
              <Link
                href="/trekking#summit-kit"
                className="inline-flex items-center gap-1.5 text-brand font-semibold text-sm hover:text-gold-dark transition-colors"
              >
                {t('kiliPackLink')}
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 5. Safety & Security ───────────────────────────────────────── */}
      <section id="safety" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-brand" />
            </div>
            <div>
              <p className="text-gold-label text-xs font-semibold uppercase tracking-widest mb-1">{t('sectionEyebrow')}</p>
              <h2 className="text-3xl font-bold text-brand">{t('s5Title')}</h2>
            </div>
          </Reveal>
          <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { Icon: ShieldCheck, heading: t('s5h1'), body: t('s5b1') },
              { Icon: PawPrint, heading: t('s5h2'), body: t('s5b2') },
            ].map(({ Icon, heading, body }) => (
              <RevealItem key={heading} className="bg-white border border-gray-200 rounded-2xl p-7">
                <div className="w-11 h-11 border border-gold rounded-full flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="text-brand font-semibold text-lg mb-2">{heading}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Sun + Best Time callout */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="bg-brand rounded-3xl p-10 lg:p-14 flex flex-col lg:flex-row items-start lg:items-center gap-8">
            <div className="w-14 h-14 bg-gold/20 rounded-2xl flex items-center justify-center shrink-0">
              <Sun className="w-7 h-7 text-gold" />
            </div>
            <div className="flex-1">
              <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-2">{t('ctaOurAdvice')}</p>
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3 leading-tight">{t('ctaHeading')}</h2>
              <p className="text-white/70 leading-relaxed max-w-2xl">{t('ctaSubtitle')}</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors whitespace-nowrap shrink-0"
            >
              {t('ctaButton')}
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Emergency contact */}
      <section className="bg-light-green py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl mx-auto text-center">
            <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center mx-auto mb-5">
              <Phone className="w-6 h-6 text-brand" />
            </div>
            <h2 className="text-2xl font-bold text-brand mb-3">{t('contactHeading')}</h2>
            <p className="text-text-muted mb-6 leading-relaxed">{t('contactSubtitle')}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-brand hover:bg-brand/90 text-white font-bold rounded-xl transition-colors"
              >
                <Heart className="w-4 h-4" />
                {t('contactBtn1')}
              </Link>
              <Link
                href="/safaris"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-brand/20 hover:bg-brand/5 text-brand font-semibold rounded-xl transition-colors"
              >
                {t('contactBtn2')}
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner />

    </main>
  )
}
