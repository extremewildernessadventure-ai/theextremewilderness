import type { Metadata } from 'next'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { buildAlternates, buildBreadcrumbSchema, SITE_URL, localeUrl } from '@/lib/site'
import Reveal from '@/components/motion/Reveal'
import { RevealGroup, RevealItem } from '@/components/motion/RevealGroup'
import {
  ArrowRight, MapPin, Star, Users, Award,
  Globe, Shield, Clock, Leaf,
  Mail, Phone,
} from 'lucide-react'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'about' })
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    keywords: t.raw('metaKeywords') as string[],
    alternates: buildAlternates(locale, '/about'),
    openGraph: {
      title: t('metaTitle'),
      description: t('metaDescription'),
      images: [{ url: '/images/gallery/elephants.jpg', width: 1200, height: 630, alt: t('ogImageAlt') }],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('metaTitle'),
      images: ['/images/gallery/elephants.jpg'],
    },
  }
}

const galleryImages = [
  '/images/gallery/Serengeti-National-park.webp',
  '/images/gallery/elephants-grazing-tall-grass-savanna.webp',
  '/images/gallery/ewa-vehicle-arusha-street.webp',
  '/images/gallery/elephants.webp',
  '/images/gallery/ewa-group-palms.webp',
  '/images/gallery/zanzibar-nungwi-aerial.webp',
]

export default async function AboutPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('about')

  const stats = [
    { value: '4.9', label: t('tripAdvisorRating'), sub: t('tripAdvisorSub'), icon: Star },
    { value: '200+', label: t('happyTravellers'), sub: t('happyTravellersSub'), icon: Users },
    { value: '20+', label: t('tanzaniaRegions'), sub: t('tanzaniaRegionsSub'), icon: MapPin },
    { value: 'TATO', label: t('tatoCertifiedLabel'), sub: t('tatoCertifiedLabelSub'), icon: Award },
  ]

  const values = [
    { icon: Globe, title: t('locallyOwnedTitle'), body: t('locallyOwnedBody') },
    { icon: Shield, title: t('expertGuidesTitle'), body: t('expertGuidesBody') },
    { icon: Users, title: t('privateOnlyTitle'), body: t('privateOnlyBody') },
    { icon: Clock, title: t('yearsTitle'), body: t('yearsBody') },
  ]

  const team = [
    {
      image: '/Team/Mike Mawolle.png',
      name: 'Mike Mawolle',
      role: t('team1Role'),
      bio: t('team1Bio'),
    },
    {
      image: '/Team/Nixon Massawe.jpeg',
      name: 'Nixon Massawe',
      role: t('team2Role'),
      bio: t('team2Bio'),
    },
    {
      image: '/Team/Josh Meela4.jpeg',
      name: 'Josh Meela',
      role: t('team3Role'),
      bio: t('team3Bio'),
    },
    {
      image: '/Team/Nathan Urassa.jpeg',
      name: 'Nathan Urassa',
      role: t('team4Role'),
      bio: t('team4Bio'),
    },
    {
      image: '/Team/Richard Bahati.jpeg',
      name: 'Richard Bahati',
      role: t('team5Role'),
      bio: t('team5Bio'),
    },
  ]

  const pills = [t('est2009'), t('tatoCertified'), t('locallyOwned'), t('arushaBased')]

  const breadcrumbItems = [
    { label: 'EWA Safari Outfitters', href: `/${locale}` },
    { label: t('breadcrumbLabel') },
  ]
  const breadcrumbSchema = buildBreadcrumbSchema(locale, breadcrumbItems, '/about')

  const guideSpotlightSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Nixon Massawe',
    jobTitle: t('guideSpotlightRole'),
    description: t('guideSpotlightP1'),
    image: `${SITE_URL}/Team/Nixon Massawe.jpeg`,
    url: localeUrl(locale, '/about#guide-spotlight'),
    worksFor: {
      '@type': 'Organization',
      name: 'EWA Safari Outfitters',
      url: SITE_URL,
    },
  }

  const guideSpotlightNathanSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Nathan Urassa',
    jobTitle: t('guideSpotlightNathanRole'),
    description: t('guideSpotlightNathanP1'),
    image: `${SITE_URL}/Team/Nathan Urassa.jpeg`,
    url: localeUrl(locale, '/about#guide-spotlight-nathan'),
    worksFor: {
      '@type': 'Organization',
      name: 'EWA Safari Outfitters',
      url: SITE_URL,
    },
  }

  const guideSpotlightRichardSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Richard Bahati',
    jobTitle: t('guideSpotlightRichardRole'),
    description: t('guideSpotlightRichardP1'),
    image: `${SITE_URL}/Team/Richard Bahati2.jpeg`,
    url: localeUrl(locale, '/about#guide-spotlight-richard'),
    worksFor: {
      '@type': 'Organization',
      name: 'EWA Safari Outfitters',
      url: SITE_URL,
    },
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(guideSpotlightSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(guideSpotlightNathanSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(guideSpotlightRichardSchema) }}
      />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-brand min-h-[90vh] flex items-stretch overflow-hidden">
        <div className="relative z-10 flex flex-col justify-center w-full lg:w-1/2 px-6 sm:px-10 lg:px-16 pt-32 pb-16 lg:py-32">
          <Breadcrumb items={breadcrumbItems} />
          <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-4">{t('ourStory')}</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            {t('weAreTanzania').split(' ').slice(0, -1).join(' ')} <span className="text-gold">{t('weAreTanzania').split(' ').slice(-1)}</span>
          </h1>
          <p className="text-white/75 text-lg leading-relaxed mb-10 max-w-lg">
            {t('heroDesc')}
          </p>
          <div className="flex flex-wrap gap-3 mb-10">
            {pills.map((pill) => (
              <span key={pill} className="inline-flex items-center px-3 py-1.5 bg-white/10 border border-white/20 rounded-full text-white/80 text-xs font-medium">
                {pill}
              </span>
            ))}
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-4 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors self-start"
          >
            {t('planYourSafari')}
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </Link>
        </div>

        <div className="hidden lg:block absolute end-0 top-0 bottom-0 w-1/2">
          <div className="absolute inset-y-0 start-0 w-32 z-10 bg-gradient-to-r from-brand to-transparent" />
          <Image src="/images/gallery/ewa-guests-guide-forest.webp" alt={t('heroImageAlt')} fill className="object-cover" priority sizes="50vw" />
        </div>
        <div className="lg:hidden absolute inset-0 z-0">
          <Image src="/images/gallery/ewa-guests-guide-forest.webp" alt={t('heroImageAlt')} fill className="object-cover opacity-20" priority sizes="100vw" />
        </div>
      </section>

      {/* ── Stats band ───────────────────────────────────────────────────── */}
      <section className="bg-brand border-t border-white/10 py-12">
        <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-white/10">
            {stats.map(({ value, label, sub, icon: Icon }) => (
              <div key={label} className="flex flex-col items-center text-center px-6 py-4">
                <Icon className="w-5 h-5 text-gold mb-3" />
                <span className="text-4xl font-black text-gold leading-none mb-1">{value}</span>
                <span className="text-white text-sm font-semibold">{label}</span>
                <span className="text-white/70 text-xs mt-0.5">{sub}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── Our Story ────────────────────────────────────────────────────── */}
      <section id="why-us" className="bg-light-green py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <Reveal>
              <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">{t('whyLocalMatters')}</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-brand mb-6 leading-tight">
                {t('whyChooseLocal')}
              </h2>
              <p className="text-text-muted leading-relaxed mb-5">{t('localDesc1')}</p>
              <div className="bg-white rounded-2xl p-6 border-s-4 border-gold my-7 shadow-sm">
                <p className="text-brand font-semibold text-base italic leading-relaxed">
                  &ldquo;{t('pullQuote')}&rdquo;
                </p>
                <p className="text-text-muted text-xs mt-3 font-medium">{t('pullQuoteAuthor')}</p>
              </div>
              <p className="text-text-muted leading-relaxed mb-5">{t('localDesc2')}</p>
              <p className="text-text-muted leading-relaxed mb-5">{t('localDesc3')}</p>
              <p className="text-text-muted leading-relaxed">{t('localDesc4')}</p>
            </Reveal>
            <Reveal delay={0.15} className="relative">
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/images/gallery/ewa-vehicle-bamboo-forest.webp" alt={t('storyImageAlt')} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand/40 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -start-6 bg-white rounded-2xl p-5 shadow-xl border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center">
                    <Leaf className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-brand font-bold text-sm">{t('ecoConscious')}</p>
                    <p className="text-text-muted text-xs">{t('ecoConsSub')}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── What Makes Us Different ──────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">{t('ourDifference')}</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-brand">{t('whatMakesDifferent')}</h2>
          </Reveal>
          <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(({ icon: Icon, title, body }) => (
              <RevealItem key={title} className="bg-gray-50 rounded-2xl p-7 border border-gray-100 hover:border-brand/30 hover:shadow-md hover:-translate-y-0.5 transition-all">
                <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-brand" />
                </div>
                <h3 className="text-brand font-bold text-lg mb-2">{title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ── Gallery strip ────────────────────────────────────────────────── */}
      <RevealGroup className="grid grid-cols-3 lg:grid-cols-6">
        {galleryImages.map((src, i) => (
          <RevealItem key={i} className="relative aspect-square overflow-hidden group">
            <Image src={src} alt={t('safariMoment')} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 1024px) 33vw, 16vw" />
            <div className="absolute inset-0 bg-brand/20 group-hover:bg-transparent transition-colors" />
          </RevealItem>
        ))}
      </RevealGroup>

      {/* ── Team ─────────────────────────────────────────────────────────── */}
      <section id="guides" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">{t('thePeople')}</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-brand mb-3">{t('meetTheTeam')}</h2>
            <p className="text-text-muted max-w-xl mx-auto text-sm leading-relaxed">{t('teamDesc')}</p>
          </Reveal>
          <RevealGroup className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {team.map(({ image, name, role, bio }) => (
              <RevealItem key={name} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all text-center group">
                <div className="flex justify-center mb-5">
                  <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-gold/30 group-hover:ring-gold/60 transition-all flex-shrink-0">
                    <Image src={image} alt={name} width={128} height={128} className="w-full h-full object-cover object-top" />
                  </div>
                </div>
                <span className="inline-flex px-3 py-1 bg-gold/10 text-gold text-xs font-bold rounded-full uppercase tracking-wider mb-3">{role}</span>
                <h3 className="text-brand font-bold text-xl mb-3">{name}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{bio}</p>
                {name === 'Nixon Massawe' && (
                  <a href="#guide-spotlight" className="inline-flex items-center gap-1 text-gold text-xs font-bold uppercase tracking-wider mt-4 hover:text-gold-dark transition-colors">
                    {t('guideSpotlightCta')} <ArrowRight className="w-3 h-3 rtl:rotate-180" />
                  </a>
                )}
                {name === 'Nathan Urassa' && (
                  <a href="#guide-spotlight-nathan" className="inline-flex items-center gap-1 text-gold text-xs font-bold uppercase tracking-wider mt-4 hover:text-gold-dark transition-colors">
                    {t('guideSpotlightNathanCta')} <ArrowRight className="w-3 h-3 rtl:rotate-180" />
                  </a>
                )}
                {name === 'Richard Bahati' && (
                  <a href="#guide-spotlight-richard" className="inline-flex items-center gap-1 text-gold text-xs font-bold uppercase tracking-wider mt-4 hover:text-gold-dark transition-colors">
                    {t('guideSpotlightRichardCta')} <ArrowRight className="w-3 h-3 rtl:rotate-180" />
                  </a>
                )}
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ── Guide Spotlight ──────────────────────────────────────────────── */}
      <section id="guide-spotlight" className="py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 lg:p-14">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <Reveal>
                <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">{t('guideSpotlightEyebrow')}</p>
                <h2 className="text-3xl lg:text-4xl font-bold text-brand mb-2 leading-tight">
                  {t('guideSpotlightHeading')}
                </h2>
                <p className="text-text-muted text-sm font-medium mb-6">{t('guideSpotlightRole')}</p>
                <p className="text-text-muted leading-relaxed mb-5">{t('guideSpotlightP1')}</p>
                <p className="text-text-muted leading-relaxed mb-5">{t('guideSpotlightP2')}</p>
                <div className="bg-light-green rounded-2xl p-6 border-s-4 border-gold my-7 shadow-sm">
                  <p className="text-brand font-semibold text-base italic leading-relaxed">
                    &ldquo;{t('guideSpotlightQuote')}&rdquo;
                  </p>
                  <p className="text-text-muted text-xs mt-3 font-medium">{t('guideSpotlightQuoteAuthor')}</p>
                </div>
                <p className="text-text-muted leading-relaxed mb-5">{t('guideSpotlightP3')}</p>
                <p className="text-text-muted leading-relaxed mb-5">{t('guideSpotlightP4')}</p>
                <p className="text-brand font-semibold leading-relaxed">{t('guideSpotlightClosing')}</p>
              </Reveal>
              <Reveal delay={0.15} className="relative">
                <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                  <Image src="/Team/Nixon Massawe.jpeg" alt={t('guideSpotlightImageAlt')} fill className="object-cover object-top" sizes="(max-width: 1024px) 100vw, 50vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand/30 to-transparent" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Guide Spotlight: Nathan ─────────────────────────────────────── */}
      <section id="guide-spotlight-nathan" className="py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 lg:p-14">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <Reveal delay={0.15} className="relative lg:order-1">
                <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                  <Image src="/Team/Nathan Urassa.jpeg" alt={t('guideSpotlightNathanImageAlt')} fill className="object-cover object-top" sizes="(max-width: 1024px) 100vw, 50vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand/30 to-transparent" />
                </div>
              </Reveal>
              <Reveal className="lg:order-2">
                <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">{t('guideSpotlightNathanEyebrow')}</p>
                <h2 className="text-3xl lg:text-4xl font-bold text-brand mb-2 leading-tight">
                  {t('guideSpotlightNathanHeading')}
                </h2>
                <p className="text-text-muted text-sm font-medium mb-6">{t('guideSpotlightNathanRole')}</p>
                <p className="text-text-muted leading-relaxed mb-5">{t('guideSpotlightNathanP1')}</p>
                <p className="text-text-muted leading-relaxed mb-5">{t('guideSpotlightNathanP2')}</p>
                <p className="text-text-muted leading-relaxed mb-5">{t('guideSpotlightNathanP3')}</p>
                <p className="text-brand font-semibold leading-relaxed">{t('guideSpotlightNathanClosing')}</p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Guide Spotlight: Richard ────────────────────────────────────── */}
      <section id="guide-spotlight-richard" className="py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 lg:p-14">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <Reveal>
                <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">{t('guideSpotlightRichardEyebrow')}</p>
                <h2 className="text-3xl lg:text-4xl font-bold text-brand mb-2 leading-tight">
                  {t('guideSpotlightRichardHeading')}
                </h2>
                <p className="text-text-muted text-sm font-medium mb-6">{t('guideSpotlightRichardRole')}</p>
                <p className="text-text-muted leading-relaxed mb-5">{t('guideSpotlightRichardP1')}</p>
                <p className="text-text-muted leading-relaxed mb-5">{t('guideSpotlightRichardP2')}</p>
                <p className="text-text-muted leading-relaxed mb-5">{t('guideSpotlightRichardP3')}</p>
                <p className="text-text-muted leading-relaxed mb-5">{t('guideSpotlightRichardP4')}</p>
                <p className="text-brand font-semibold leading-relaxed">{t('guideSpotlightRichardClosing')}</p>
              </Reveal>
              <Reveal delay={0.15} className="relative">
                <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                  <Image src="/Team/Richard Bahati2.jpeg" alt={t('guideSpotlightRichardImageAlt')} fill className="object-cover object-top" sizes="(max-width: 1024px) 100vw, 50vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand/30 to-transparent" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Office Location ──────────────────────────────────────────────── */}
      <section className="bg-light-green py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-10">
            <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">{t('ourLocation')}</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-brand">{t('findOurOffice')}</h2>
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <Reveal className="relative overflow-hidden rounded-2xl p-8 lg:p-10 flex flex-col min-h-[400px]">
              <Image
                src="/images/gallery/ewa-guests-guide-arusha.webp"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-brand/85" />
              <div className="relative z-10 w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                <MapPin className="w-7 h-7 text-gold" />
              </div>
              <p className="relative z-10 text-gold text-xs font-semibold uppercase tracking-widest mb-2">{t('ourOfficeCard')}</p>
              <h3 className="relative z-10 text-white font-bold text-2xl leading-snug mb-6">
                {t('companyName')}
              </h3>
              <div className="relative z-10 border-t border-white/10 mb-6" />
              <div className="relative z-10 space-y-1">
                <p className="text-white/70 text-sm">20 Ingira Street</p>
                <p className="text-white/70 text-sm">Arusha</p>
                <p className="text-white/70 text-sm">Tanzania, East Africa</p>
              </div>
              <div className="relative z-10 mt-auto pt-8">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=20+Ingira+Street+Arusha+Tanzania"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors text-sm"
                >
                  {t('getDirections')} <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.15} className="rounded-2xl overflow-hidden shadow-sm min-h-[400px] ring-1 ring-black/5">
              <iframe
                src="https://maps.google.com/maps?q=20+Ingira+Street,+Arusha,+Tanzania&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full min-h-[400px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t('officeMapTitle')}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <Image
          src="/images/gallery/elephants.webp"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">{t('letsStartPlanning')}</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight">{t('readyToPlan')}</h2>
              <p className="text-white/70 leading-relaxed mb-8 text-base">{t('ctaDesc')}</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/safaris" className="inline-flex items-center gap-2 px-6 py-3.5 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors">
                  {t('viewSafariPackages')} <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/20 hover:bg-white/10 text-white font-semibold rounded-xl transition-colors">
                  {t('contactUs')}
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.15} className="bg-white/10 border border-white/20 rounded-2xl p-8">
              <p className="text-white font-bold text-lg mb-6">{t('reachUsDirectly')}</p>
              <div className="space-y-4 mb-8">
                <a href="mailto:info@theextremewilderness.com" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-xs text-white/70 mb-0.5">{t('emailLabel')}</p>
                    <p className="text-sm font-medium">info@theextremewilderness.com</p>
                  </div>
                </a>
                <a href="tel:+255747999070" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-xs text-white/70 mb-0.5">{t('phoneLabel')}</p>
                    <p className="text-sm font-medium">+255 (0) 747 999 070</p>
                  </div>
                </a>
                <div className="flex items-center gap-3 text-white/80">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-xs text-white/70 mb-0.5">{t('officeLabel')}</p>
                    <p className="text-sm font-medium">{t('officeArusha')}</p>
                  </div>
                </div>
              </div>
              <p className="text-white/60 text-xs">{t('responseNote')}</p>
            </Reveal>
          </div>
        </div>
      </section>

    </main>
  )
}
