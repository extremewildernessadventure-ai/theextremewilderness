import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FaqAccordion from '@/components/itineraries/FaqAccordion'
import {
  ArrowRight, Lock, CreditCard, ShieldCheck, Banknote, Clock, Mail, Phone,
} from 'lucide-react'
import { buildAlternates, buildBreadcrumbSchema } from '@/lib/site'
import type { routing } from '@/i18n/routing'

const PESAPAL_URL = 'https://payments.pesapal.com/theextremewilderness'

type Props = { params: Promise<{ locale: string }> }
type Locale = (typeof routing.locales)[number]

const PAYMENTS_KEYWORDS: Record<Locale, string[]> = {
  en: [
    'pay safari deposit online', 'EWA Safari Outfitters payment', 'Pesapal safari payment',
    'Tanzania safari payment methods', 'pay Tanzania safari balance', 'safari deposit payment Tanzania',
    'mobile money safari payment', 'Tanzania tour operator online payment',
  ],
  fr: [
    'payer un acompte safari en ligne', 'paiement EWA Safari Outfitters', 'paiement safari Pesapal',
    'moyens de paiement safari Tanzanie', 'régler le solde de son safari', 'paiement mobile money safari',
  ],
  es: [
    'pagar depósito de safari en línea', 'pago EWA Safari Outfitters', 'pago de safari con Pesapal',
    'métodos de pago safari Tanzania', 'pagar el saldo del safari', 'pago con dinero móvil safari',
  ],
  de: [
    'Safari-Anzahlung online bezahlen', 'EWA Safari Outfitters Zahlung', 'Safari-Zahlung Pesapal',
    'Zahlungsmethoden Safari Tansania', 'Safari-Restbetrag bezahlen', 'Mobile-Money-Zahlung Safari',
  ],
  ru: [
    'оплатить депозит за сафари онлайн', 'оплата EWA Safari Outfitters', 'оплата сафари через Pesapal',
    'способы оплаты сафари Танзания', 'оплатить остаток за сафари', 'оплата сафари через мобильные деньги',
  ],
  zh: [
    '在线支付游猎订金', 'EWA Safari Outfitters支付', 'Pesapal游猎支付',
    '坦桑尼亚游猎付款方式', '支付游猎尾款', '游猎移动支付',
  ],
  'zh-TW': [
    '線上支付獵遊訂金', 'EWA Safari Outfitters付款', 'Pesapal獵遊付款',
    '坦尚尼亞獵遊付款方式', '支付獵遊尾款', '獵遊行動支付',
  ],
  it: [
    'pagare acconto safari online', 'pagamento EWA Safari Outfitters', 'pagamento safari Pesapal',
    'metodi di pagamento safari Tanzania', 'saldare il safari', 'pagamento mobile money safari',
  ],
  nl: [
    'safari aanbetaling online betalen', 'betaling EWA Safari Outfitters', 'safari betaling Pesapal',
    'betaalmethoden safari Tanzania', 'restbedrag safari betalen', 'mobiel geld safari betaling',
  ],
  pt: [
    'pagar sinal de safari online', 'pagamento EWA Safari Outfitters', 'pagamento de safari Pesapal',
    'métodos de pagamento safari Tanzânia', 'pagar saldo do safari', 'pagamento mobile money safari',
  ],
  ja: [
    'サファリ 予約金 オンライン支払い', 'EWA Safari Outfitters 支払い', 'Pesapal サファリ 支払い',
    'タンザニア サファリ 支払い方法', 'サファリ 残金 支払い', 'モバイルマネー サファリ 支払い',
  ],
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'payments' })
  return {
    alternates: buildAlternates(locale, '/payments'),
    title: t('metaTitle'),
    description: t('metaDescription'),
    openGraph: {
      title: t('metaTitle'),
      description: t('ogDescription'),
      images: [{ url: '/images/gallery/serengeti-lions-under-acacia.jpg', width: 1200, height: 630, alt: t('metaTitle') }],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('twitterTitle'),
      images: ['/images/gallery/serengeti-lions-under-acacia.jpg'],
    },
    keywords: PAYMENTS_KEYWORDS[locale as keyof typeof PAYMENTS_KEYWORDS] ?? PAYMENTS_KEYWORDS.en,
    // A payment-processing utility page, not content worth surfacing in
    // search results — clients reach it via a direct link (footer, an
    // invoice), not by searching. `follow: true` so crawlers can still
    // traverse the footer link to the rest of the site from here.
    robots: { index: false, follow: true },
  }
}

export default async function PaymentsPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('payments')

  const breadcrumbItems = [
    { label: 'EWA Safari Outfitters', href: `/${locale}` },
    { label: t('breadcrumbLabel') },
  ]
  const breadcrumbSchema = buildBreadcrumbSchema(locale, breadcrumbItems, '/payments')

  const infoCards = [
    { Icon: CreditCard, title: t('methodsTitle'), body: t('methodsBody') },
    { Icon: Banknote, title: t('currencyTitle'), body: t('currencyBody') },
    { Icon: ShieldCheck, title: t('securityTitle'), body: t('securityBody') },
    { Icon: Clock, title: t('processingTitle'), body: t('processingBody') },
  ]

  const faqs = [1, 2, 3, 4, 5].map((n) => ({
    q: t(`faq${n}Q` as 'faq1Q'),
    a: t(`faq${n}A` as 'faq1A'),
  }))

  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-brand py-20 lg:py-24 text-center">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/gallery/maned-lion-resting-savanna-grass.webp')] bg-cover bg-center" />
        <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-4">
            <Breadcrumb items={breadcrumbItems} />
          </div>
          <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-4">{t('heroEyebrow')}</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">{t('heroTitle')}</h1>
          <p className="text-white/70 text-base leading-relaxed">{t('heroLede')}</p>
        </div>
      </section>

      {/* Payment panel */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="bg-white border border-gray-200 rounded-2xl shadow-xl p-8 lg:p-11">
          <h2 className="text-2xl font-bold text-brand mb-2">{t('panelHeading')}</h2>
          <p className="text-text-muted text-sm leading-relaxed mb-7">{t('panelSub')}</p>

          <div className="mb-5">
            <label htmlFor="pay-ref" className="block text-[11px] font-semibold uppercase tracking-widest text-text-muted mb-2">
              {t('fieldRefLabel')} <span className="text-gold-label italic font-normal normal-case tracking-normal">({t('fieldRefOptional')})</span>
            </label>
            <input
              id="pay-ref" type="text" placeholder={t('fieldRefPlaceholder')}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-brand focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 bg-light-green/40 placeholder-gray-400"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
            <div>
              <label htmlFor="pay-name" className="block text-[11px] font-semibold uppercase tracking-widest text-text-muted mb-2">
                {t('fieldNameLabel')}
              </label>
              <input
                id="pay-name" type="text" placeholder={t('fieldNamePlaceholder')}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-brand focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 bg-light-green/40 placeholder-gray-400"
              />
            </div>
            <div>
              <label htmlFor="pay-amount" className="block text-[11px] font-semibold uppercase tracking-widest text-text-muted mb-2">
                {t('fieldAmountLabel')} <span className="text-gold-label italic font-normal normal-case tracking-normal">({t('fieldAmountOptional')})</span>
              </label>
              <input
                id="pay-amount" type="text" placeholder={t('fieldAmountPlaceholder')}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-brand focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 bg-light-green/40 placeholder-gray-400"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="pay-type" className="block text-[11px] font-semibold uppercase tracking-widest text-text-muted mb-2">
              {t('fieldTypeLabel')}
            </label>
            <select
              id="pay-type"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-brand focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 bg-light-green/40 appearance-none"
            >
              <option>{t('typeDeposit')}</option>
              <option>{t('typeBalance')}</option>
              <option>{t('typeFull')}</option>
              <option>{t('typeOther')}</option>
            </select>
          </div>

          <div className="flex gap-3 bg-light-green rounded-xl border-s-4 border-gold p-4 mb-7">
            <span className="text-gold shrink-0">ⓘ</span>
            <p className="text-text-muted text-xs leading-relaxed">{t('noteText')}</p>
          </div>

          <a
            href={PESAPAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors"
          >
            {t('ctaButton')} <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </a>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-6">
            <span className="inline-flex items-center gap-1.5 text-text-muted text-xs">
              <Lock className="w-4 h-4 text-gold" /> {t('trustSsl')}
            </span>
            <span className="inline-flex items-center gap-1.5 text-text-muted text-xs">
              <CreditCard className="w-4 h-4 text-gold" /> {t('trustPesapal')}
            </span>
            <span className="inline-flex items-center gap-1.5 text-text-muted text-xs">
              <ShieldCheck className="w-4 h-4 text-gold" /> {t('trustPci')}
            </span>
          </div>
        </div>
      </div>

      {/* How it works */}
      <section className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 border-y border-gray-200">
            {[
              { n: '01', title: t('step1Title'), body: t('step1Body') },
              { n: '02', title: t('step2Title'), body: t('step2Body') },
              { n: '03', title: t('step3Title'), body: t('step3Body') },
            ].map(({ n, title, body }) => (
              <div key={n} className="p-8 text-center">
                <p className="text-gold font-semibold text-sm mb-3">{n}</p>
                <h3 className="text-brand font-bold text-lg mb-2">{title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment information */}
      <section className="bg-light-green py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <p className="text-gold-label text-xs font-semibold uppercase tracking-widest mb-3">{t('infoEyebrow')}</p>
            <h2 className="text-3xl font-bold text-brand mb-3">{t('infoHeading')}</h2>
            <p className="text-text-muted text-sm leading-relaxed">{t('infoSub')}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {infoCards.map(({ Icon, title, body }) => (
              <div key={title} className="bg-white border border-gray-200 rounded-2xl p-7">
                <div className="w-11 h-11 border border-gold rounded-full flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="text-brand font-semibold text-lg mb-2">{title}</h3>
                {title === t('methodsTitle') ? (
                  <>
                    <p className="text-text-muted text-sm leading-relaxed mb-3">{body}</p>
                    <ul className="space-y-1.5">
                      <li className="text-text-muted text-sm">
                        <span className="text-brand font-medium">{t('methodsCardsLabel')}</span> — {t('methodsCardsValue')}
                      </li>
                      <li className="text-text-muted text-sm">
                        <span className="text-brand font-medium">{t('methodsMobileLabel')}</span> — {t('methodsMobileValue')}
                      </li>
                      <li className="text-text-muted text-sm">
                        <span className="text-brand font-medium">{t('methodsBankLabel')}</span> — {t('methodsBankValue')}
                      </li>
                    </ul>
                  </>
                ) : (
                  <p className="text-text-muted text-sm leading-relaxed">{body}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold-label text-xs font-semibold uppercase tracking-widest mb-3">{t('faqEyebrow')}</p>
            <h2 className="text-3xl font-bold text-brand">{t('faqHeading')}</h2>
          </div>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* Help band */}
      <section className="relative overflow-hidden bg-brand py-16 text-center">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/gallery/maned-lion-resting-savanna-grass.webp')] bg-cover bg-center" />
        <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">{t('helpEyebrow')}</p>
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">{t('helpHeading')}</h2>
          <p className="text-white/70 leading-relaxed mb-6">{t('helpBody')}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-white/80 text-sm">
            <a href="mailto:info@theextremewilderness.com" className="inline-flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-4 h-4 text-gold" /> info@theextremewilderness.com
            </a>
            <span className="hidden sm:inline text-white/30">·</span>
            <a href="tel:+255747999070" className="inline-flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="w-4 h-4 text-gold" /> +255 (0) 747 999 070
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
