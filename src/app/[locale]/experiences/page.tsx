import type { Metadata } from 'next'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { ArrowRight, Clock, MapPin, Star } from 'lucide-react'
import NewsletterForm from '@/components/home/NewsletterForm'
import { getTranslations } from 'next-intl/server'
import { getExperiences } from '@/data/experiences.i18n'
import Breadcrumb from '@/components/ui/Breadcrumb'
import type { Experience } from '@/data/experiences'
import { buildAlternates, buildBreadcrumbSchema, buildPageTitle } from '@/lib/site'
import Reveal from '@/components/motion/Reveal'
import { RevealGroup, RevealItem } from '@/components/motion/RevealGroup'

function anchorId(slug: string): string {
  return slug.replace('/experiences/', '')
}

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'experiences' })
  const title = t('metaTitle')
  const description = t('metaDescription')
  return {
    alternates: buildAlternates(locale, '/experiences'),
    title: buildPageTitle(title),
    description,
    keywords: t.raw('metaKeywords') as string[],
    openGraph: {
      title,
      description,
      images: [{ url: '/images/gallery/serengeti-lions-under-acacia.jpg', width: 1200, height: 630, alt: t('ogImageAlt') }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      images: ['/images/gallery/serengeti-lions-under-acacia.jpg'],
    },
  }
}

export default async function ExperiencesPage({ params }: Props) {
  const { locale } = await params
  const experiences = await getExperiences(locale)
  const t = await getTranslations('experiences')

  const steps = [
    { step: '01', title: t('step1Title'), desc: t('step1Desc') },
    { step: '02', title: t('step2Title'), desc: t('step2Desc') },
    { step: '03', title: t('step3Title'), desc: t('step3Desc') },
    { step: '04', title: t('step4Title'), desc: t('step4Desc') },
  ]
  const breadcrumbItems = [
    { label: 'EWA Safari Outfitters', href: `/${locale}` },
    { label: t('breadcrumbSection') },
  ]
  const breadcrumbSchema = buildBreadcrumbSchema(locale, breadcrumbItems, '/experiences')

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[60vh] flex items-end pb-16 pt-32 overflow-hidden">
        <Image
          src="/images/gallery/serengeti-lions-under-acacia.webp"
          alt={t('heroImageAlt')}
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} locale={locale} />
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">{t('heroEyebrow')}</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-white leading-[1.05] mb-6 max-w-3xl">
            {t('heroTitle')}<br />
            <span className="text-gold">{t('heroTitleGold')}</span>
          </h1>
          <p className="text-white/75 text-lg max-w-xl">
            {t('heroSubtitle')}
          </p>
        </div>
      </section>

      {/* ── QUICK TYPE PILLS — jump to the matching card below ─────────────── */}
      <section className="bg-brand py-8 border-t border-white/10">
        <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {experiences.map((exp) => (
              <a
                key={exp.slug}
                href={`#${anchorId(exp.slug)}`}
                className="inline-flex items-center px-3 py-1.5 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs font-medium hover:bg-white/25 transition-colors"
              >
                {exp.category}
              </a>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── INTRO ────────────────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <span className="inline-block text-gold-label font-semibold text-xs uppercase tracking-widest mb-4">
                {t('ourPhilosophyEyebrow')}
              </span>
              <h2 className="text-3xl lg:text-4xl font-semibold text-brand leading-tight mb-6">
                {t('introHeading')}<br />
                <span className="text-brand-secondary">{t('introHeadingSecondary')}</span>
              </h2>
              <p className="text-text-muted leading-relaxed mb-6">
                {t('introParagraph1Full')}
              </p>
              <p className="text-text-muted leading-relaxed mb-8">
                {t('introParagraph2Full')}
              </p>
            </Reveal>

            {/* Mosaic photos */}
            <Reveal delay={0.15} className="grid grid-cols-2 gap-3">
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
                <Image src="/images/gallery/family-friendly-game-drive.webp" alt={t('mosaicLandscapeAlt')} fill className="object-cover" sizes="30vw" />
              </div>
              <div className="flex flex-col gap-3">
                <div className="relative rounded-2xl overflow-hidden aspect-video">
                  <Image src="/images/gallery/wildlife-spotting-young-explorers.webp" alt={t('mosaicWildlifeAlt')} fill className="object-cover" sizes="20vw" />
                </div>
                <div className="relative rounded-2xl overflow-hidden flex-1">
                  <Image src="/images/gallery/family-safari-landscape.webp" alt={t('mosaicBushCampAlt')} fill className="object-cover" sizes="20vw" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE CARDS ─────────────────────────────────────────────── */}
      <section className="bg-light-green py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center py-12">
            <span className="inline-block text-gold-label font-semibold text-xs uppercase tracking-widest mb-3">
              {t('browseEyebrow')}
            </span>
            <h2 className="text-3xl lg:text-4xl font-semibold text-brand">
              {t('browseHeading')}
            </h2>
          </Reveal>

          <RevealGroup className="space-y-6 pb-16">
            {experiences.map((exp, i) => (
              <RevealItem key={exp.slug + i}>
                <ExperienceCard exp={exp} id={anchorId(exp.slug)} flip={i % 2 === 1} locationLabel={t('cardLocation')} fromLabel={t('fromLabel')} perPersonLabel={t('perPersonLabel')} priceOnRequestLabel={t('priceOnRequest')} exploreButton={t('exploreButton')} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-14">
            <span className="inline-block text-gold-label font-semibold text-xs uppercase tracking-widest mb-3">{t('howItWorksEyebrow')}</span>
            <h2 className="text-3xl font-semibold text-brand">{t('howItWorksHeading')}</h2>
          </Reveal>
          <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map(({ step, title, desc }) => (
              <RevealItem key={step} className="relative">
                <div className="text-6xl font-bold text-brand/8 mb-3 leading-none select-none">{step}</div>
                <h3 className="font-semibold text-brand mb-2">{title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{desc}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ── PHOTO STRIP ──────────────────────────────────────────────────── */}
      <RevealGroup className="flex h-64 overflow-hidden">
        {[
          { src: '/images/gallery/kilimanjaro-trekkers-rocky-trail.webp', alt: 'Two trekkers pausing on a rocky trail on Mount Kilimanjaro' },
          { src: '/images/gallery/giraffe-walking-savanna-dusk.webp', alt: '' },
          { src: '/images/gallery/lion-resting-on-serengeti-kopje.webp', alt: 'Lion resting atop a granite kopje in the Serengeti' },
          { src: '/images/gallery/birdlife-tanzania-safari-route.webp', alt: '' },
          { src: '/images/gallery/waterbirds-wetland-habitat.webp', alt: '' },
        ].map(({ src, alt }, i) => (
          <RevealItem key={i} className="relative flex-1">
            <Image src={src} alt={alt} fill className="object-cover" sizes="20vw" />
          </RevealItem>
        ))}
      </RevealGroup>

      {/* ── TESTIMONIAL ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-brand">
        <Reveal className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-gold text-gold" />
            ))}
          </div>
          <blockquote className="text-2xl lg:text-3xl text-white font-light leading-relaxed italic mb-8">
            &ldquo;{t('quoteText')}&rdquo;
          </blockquote>
          <p className="text-gold font-semibold">Sarah &amp; Tom Whitmore</p>
          <p className="text-white/50 text-sm mt-1">{t('quoteSub')}</p>
        </Reveal>
      </section>

      {/* ── CTA / NEWSLETTER ─────────────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="/images/gallery/ruaha-lions-affectionate.webp"
          alt={t('ctaImageAlt')}
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left — CTA */}
            <Reveal>
              <span className="inline-block text-gold-label font-semibold text-xs uppercase tracking-widest mb-4">{t('ctaEyebrow')}</span>
              <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-4">
                {t('ctaHeading')}
              </h2>
              <p className="text-white/70 mb-8 leading-relaxed">
                {t('ctaSubtitle')}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors"
                >
                  {t('ctaButton1')} <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                </Link>
                <Link
                  href="/safaris"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 text-white hover:bg-white/10 font-semibold rounded-xl transition-colors"
                >
                  {t('ctaButton2')}
                </Link>
              </div>
            </Reveal>

            {/* Right — Newsletter */}
            <Reveal delay={0.15} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <p className="text-gold-label font-semibold text-xs uppercase tracking-widest mb-2">{t('newsletterEyebrow')}</p>
              <h3 className="text-2xl font-semibold text-white mb-3">{t('newsletterHeading')}</h3>
              <p className="text-white/65 text-sm leading-relaxed mb-6">
                {t('newsletterText')}
              </p>
              <NewsletterForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}

function ExperienceCard({ exp, id, flip, locationLabel, fromLabel, perPersonLabel, priceOnRequestLabel, exploreButton }: { exp: Experience; id: string; flip: boolean; locationLabel: string; fromLabel: string; perPersonLabel: string; priceOnRequestLabel: string; exploreButton: string }) {
  return (
    <div id={id} className={`group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col lg:flex-row scroll-mt-24 ${flip ? 'lg:flex-row-reverse' : ''}`}>
      {/* Image */}
      <div className="relative lg:w-[45%] flex-shrink-0 overflow-hidden" style={{ minHeight: 320 }}>
        <Image
          src={exp.image}
          alt={exp.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 1024px) 100vw, 45vw"
        />
        {/* Badge */}
        <div className="absolute top-4 start-4">
          <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full ${exp.badgeColor}`}>
            {exp.badge}
          </span>
        </div>
        {/* Category overlay */}
        <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-4 start-4">
          <span className="text-white/80 text-xs font-semibold uppercase tracking-widest">{exp.category}</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-8 lg:p-10 flex flex-col justify-center">
        <h3 className="text-2xl font-semibold text-brand mb-2">{exp.title}</h3>
        <p className="text-gold font-medium text-sm italic mb-4">{exp.tagline}</p>
        <p className="text-text-muted leading-relaxed text-sm mb-6">{exp.description}</p>

        {/* Highlights */}
        <ul className="space-y-1.5 mb-6">
          {exp.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-sm text-text-muted">
              <span className="text-gold mt-0.5 flex-shrink-0">✓</span>
              {h}
            </li>
          ))}
        </ul>

        {/* Footer row */}
        <div className="flex items-center justify-between pt-5 border-t border-gray-100">
          <div className="flex items-center gap-4 text-xs text-text-muted">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {exp.durationLabel}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              {locationLabel}
            </span>
            <span className="font-semibold text-brand">
              {exp.priceFrom ? (
                <>
                  {fromLabel} <span className="text-base">{exp.priceFrom}</span>
                  <span className="text-text-muted font-normal">{perPersonLabel}</span>
                </>
              ) : (
                priceOnRequestLabel
              )}
            </span>
          </div>
          <Link
            href={exp.slug}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand hover:bg-brand-secondary text-white text-sm font-semibold rounded-xl transition-colors"
          >
            {exploreButton} <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  )
}
