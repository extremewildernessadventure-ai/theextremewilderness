import type { Metadata } from 'next'
import Image from 'next/image'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import {
  Users, Calendar, DollarSign, Binoculars, Compass, Mountain, Heart, ShieldCheck, Award,
} from 'lucide-react'
import Breadcrumb from '@/components/ui/Breadcrumb'
import BookNowButton from '@/components/booking/BookNowButton'
import FaqAccordion from '@/components/itineraries/FaqAccordion'
import Reveal from '@/components/motion/Reveal'
import { buildAlternates, buildFaqSchema, buildBreadcrumbSchema, buildPageTitle } from '@/lib/site'
import { CORE_KEYWORDS_BY_LOCALE } from '@/data/coreKeywords'
import { getFaqCategories } from '@/data/faq.i18n'

type Props = { params: Promise<{ locale: string }> }

const ICONS: Record<string, typeof Users> = {
  Users, Calendar, DollarSign, Binoculars, Compass, Mountain, Heart, ShieldCheck, Award,
}

// Each category's sticky sidebar: a themed BookNowButton (packageType from
// the common.packageTypes set) plus the faqHub key prefix for its heading/
// body/button copy. "about-ewa" is the one exception — it's not a trip type,
// so its BookNowButton opens the modal with no packageType preselected.
const SIDEBAR_CONFIG: Record<string, { keyPrefix: string; packageType?: string }> = {
  'family-and-group-safaris': { keyPrefix: 'sidebarFamily', packageType: 'customSafari' },
  'best-time-and-great-migration': { keyPrefix: 'sidebarBestTime', packageType: 'tanzaniaMigrationSafari' },
  'planning-costs-and-comparisons': { keyPrefix: 'sidebarPlanning', packageType: 'customSafari' },
  'tanzania-circuits-and-wildlife': { keyPrefix: 'sidebarTanzania', packageType: 'tanzaniaSafari' },
  'kenya-and-rwanda': { keyPrefix: 'sidebarKenyaRwanda', packageType: 'kenyaTanzaniaSafari' },
  'kilimanjaro-and-trekking': { keyPrefix: 'sidebarKilimanjaro', packageType: 'kiliTrek' },
  'honeymoon-zanzibar-and-experiences': { keyPrefix: 'sidebarHoneymoon', packageType: 'customSafari' },
  'culture-health-and-logistics': { keyPrefix: 'sidebarCulture', packageType: 'customSafari' },
  'about-ewa': { keyPrefix: 'sidebarAboutEwa' },
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'faqHub' })
  return {
    alternates: buildAlternates(locale, '/faq'),
    title: buildPageTitle(t('metaTitle')),
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
    keywords: locale === 'en'
      ? [
          'Tanzania safari FAQ',
          'how much does a safari cost',
          'best time to visit Serengeti',
          'family safari Africa',
          'gorilla trekking Rwanda cost',
          'Kilimanjaro climbing routes',
          'Kenya or Tanzania safari',
          'Zanzibar safari combo',
          'is EWA Safari Outfitters TATO certified',
        ]
      : CORE_KEYWORDS_BY_LOCALE[locale as keyof typeof CORE_KEYWORDS_BY_LOCALE],
  }
}

export default async function FaqPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('faqHub')
  const tc = await getTranslations('common')
  const tPrivacy = await getTranslations('privacy')
  const tTerms = await getTranslations('terms')
  const categories = await getFaqCategories(locale)

  const allItems = categories.flatMap((c) => c.items)
  const faqSchema = buildFaqSchema(allItems)
  const breadcrumbItems = [
    { label: 'EWA Safari Outfitters', href: `/${locale}` },
    { label: t('breadcrumbLabel') },
  ]
  const breadcrumbSchema = buildBreadcrumbSchema(locale, breadcrumbItems, '/faq')

  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="relative bg-brand py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/gallery/ngorongoro-crater-vehicle.webp')] bg-cover bg-center" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} />
          <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-4">{t('heroEyebrow')}</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 max-w-3xl">
            {t('heroTitle')} <span className="text-gold">{t('heroTitleGold')}</span>
          </h1>
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl">{t('heroSubtitle')}</p>
        </div>
      </section>

      {/* Jump Nav */}
      <section className="bg-brand border-t border-white/10 py-8">
        <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {categories.map(({ slug, title }) => (
              <a
                key={slug}
                href={`#${slug}`}
                className="flex items-center justify-center text-center px-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 hover:border-gold/40 transition-colors"
              >
                {title}
              </a>
            ))}
          </nav>
        </Reveal>
      </section>

      {/* Category sections */}
      {categories.map(({ slug, icon, title, description, items }, idx) => {
        const Icon = ICONS[icon] ?? Users
        const sidebar = SIDEBAR_CONFIG[slug]
        return (
          <section
            key={slug}
            id={slug}
            className={`py-20 lg:py-28 ${idx % 2 === 0 ? 'bg-white' : 'bg-light-green'}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <Reveal className="lg:col-span-2">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-brand" />
                    </div>
                    <div>
                      <p className="text-gold-label text-xs font-semibold uppercase tracking-widest mb-1">{t('sectionEyebrow')}</p>
                      <h2 className="text-3xl font-bold text-brand">{title}</h2>
                    </div>
                  </div>
                  <p className="text-text-muted leading-relaxed mb-8">{description}</p>
                  <FaqAccordion faqs={items} />
                </Reveal>

                {sidebar && (
                  <Reveal delay={0.15}>
                    <div className="sticky top-24 bg-brand rounded-2xl p-7">
                      <h3 className="text-white font-bold text-lg mb-2 leading-snug">
                        {t(`${sidebar.keyPrefix}Heading`)}
                      </h3>
                      <p className="text-white/70 text-sm leading-relaxed mb-6">
                        {t(`${sidebar.keyPrefix}Body`)}
                      </p>
                      <BookNowButton
                        packageType={sidebar.packageType ? tc(`packageTypes.${sidebar.packageType}`) : undefined}
                        label={t(`${sidebar.keyPrefix}Button`)}
                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors text-sm"
                      />
                    </div>
                  </Reveal>
                )}
              </div>
            </div>
          </section>
        )
      })}

      {/* Closing CTA */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="bg-brand rounded-3xl p-10 lg:p-14 flex flex-col lg:flex-row items-start lg:items-center gap-8">
            <div className="flex-1">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3 leading-tight">{t('ctaHeading')}</h2>
              <p className="text-white/70 leading-relaxed max-w-2xl">{t('ctaSubtitle')}</p>
            </div>
            <BookNowButton
              label={t('ctaButton')}
              className="inline-flex items-center gap-2 px-7 py-4 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors whitespace-nowrap shrink-0"
              arrow={false}
            />
          </Reveal>
        </div>
      </section>

      {/* Policy cards */}
      <section className="bg-white pb-20 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { href: '/privacy', title: tPrivacy('breadcrumbLabel'), body: tPrivacy('heroSubtitle'), image: '/images/gallery/elephants.webp' },
              { href: '/terms', title: tTerms('breadcrumbLabel'), body: tTerms('heroSubtitle'), image: '/images/gallery/serengeti-hot-air-balloon.webp' },
            ].map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group relative h-64 rounded-3xl overflow-hidden block"
              >
                <Image
                  src={card.image}
                  alt=""
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand/90 via-brand/40 to-brand/10" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white mb-2">{card.title}</h3>
                  <p className="text-white/75 text-sm leading-relaxed max-w-md">{card.body}</p>
                </div>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>
    </main>
  )
}
