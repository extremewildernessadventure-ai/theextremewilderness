import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import {
  ArrowRight, Check, ChevronDown, Clock, MapPin, Mountain, Plane,
  ShieldCheck, Star, Sun, Ticket, TrendingUp, Users, X,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import Badge from '@/components/shared/Badge'
import BookNowButton from '@/components/booking/BookNowButton'
import TrustBar from '@/components/home/TrustBar'
import PdfLeadModal from '@/components/trekking/PdfLeadModal'
import ExperienceGallery from '@/components/experiences/ExperienceGallery'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { getPackage } from '@/data/packages.i18n'
import { getExperiencePage, getExperiencePages, experiencePageSlugs } from '@/data/experiencePages/content.i18n'
import type { ExperienceSection, QuickFactIcon } from '@/data/experiencePages/types'
import { routing } from '@/i18n/routing'
import { SITE_URL, localeUrl, buildAlternates } from '@/lib/site'
import Reveal from '@/components/motion/Reveal'
import { RevealGroup, RevealItem } from '@/components/motion/RevealGroup'

interface Props {
  params: Promise<{ locale: string; slug: string }>
}

export async function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    experiencePageSlugs.map((slug) => ({ locale, slug }))
  )
}

const OG_LOCALES: Record<string, string> = { en: 'en_US', fr: 'fr_FR', es: 'es_ES', de: 'de_DE', ru: 'ru_RU', zh: 'zh_CN', 'zh-TW': 'zh_TW' }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params
  const page = getExperiencePage(slug, locale)
  if (!page) return {}
  return {
    alternates: buildAlternates(locale, `/experiences/${slug}`),
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.keywords,
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      locale: OG_LOCALES[locale] ?? 'en_US',
      images: [{ url: page.heroImage, width: 1200, height: 630, alt: page.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.metaTitle,
      description: page.metaDescription,
      images: [page.heroImage],
    },
  }
}

const QUICK_FACT_ICONS: Record<QuickFactIcon, LucideIcon> = {
  duration: Clock,
  location: MapPin,
  group: Users,
  guide: ShieldCheck,
  season: Sun,
  plane: Plane,
  altitude: Mountain,
  permit: Ticket,
  success: TrendingUp,
}

const SEASON_STYLES: Record<'peak' | 'green' | 'low', string> = {
  peak: 'bg-gold text-brand',
  green: 'bg-brand-secondary text-white',
  low: 'bg-gold-dark text-white',
}

const WHATSAPP_SVG = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
)

// Real guest reviews from the home-page testimonials (messages `home` namespace,
// rev0–rev11). Names/ratings mirror src/components/home/Testimonials.tsx — never
// invent reviews; only map existing ones to the most relevant experience.
const REVIEWERS: { name: string; rating: number }[] = [
  { name: 'James Kowalski', rating: 5 },
  { name: 'Erick Edwin', rating: 5 },
  { name: 'Lauren', rating: 5 },
  { name: 'Renard', rating: 5 },
  { name: 'Abimbola', rating: 5 },
  { name: 'Ruaika', rating: 5 },
  { name: 'Cindy', rating: 5 },
  { name: 'Sarah & Michael Thompson', rating: 5 },
  { name: 'Yangmeng', rating: 5 },
  { name: 'Alessandra & Aimo', rating: 5 },
  { name: 'Marie & François Dupont', rating: 5 },
  { name: 'Christina', rating: 4 },
]

const REVIEW_MAP: Record<string, [number, number]> = {
  'classic-game-drive-safari': [1, 2],
  'the-great-migration': [7, 0],
  'chimpanzee-trekking-mahale': [5, 4],
  'mountain-gorilla-experience-rwanda': [9, 6],
  'kilimanjaro-roof-of-africa': [3, 11],
  'safari-zanzibar-combo': [10, 2],
  'wildlife-photography-safari': [7, 5],
  'walking-safari-nyerere': [4, 6],
  'exclusive-private-safari': [9, 0],
  'family-safari': [8, 3],
  'ruaha-katavi-true-wilderness': [0, 4],
  'hot-air-balloon-safari': [0, 6],
  'honeymoon-safari': [10, 9],
  'cultural-experience': [2, 5],
  'fly-in-safari': [3, 7],
  'birding-safari': [5, 11],
}

/** Renders **bold** and *italic* markers used in the approved page copy. */
function renderInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g)
  if (parts.length === 1) return text
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="font-semibold text-brand-dark">{part.slice(2, -2)}</strong>
    }
    if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
      return <em key={i}>{part.slice(1, -1)}</em>
    }
    return part
  })
}

function renderSection(section: ExperienceSection, idx: number, chrome: { included: string; excluded: string; legendPeak: string; legendGreen: string; legendLow: string }) {
  switch (section.type) {
    case 'h2':
      return <h2 key={idx} className="text-2xl md:text-3xl font-bold text-brand mt-10 mb-4">{section.text}</h2>
    case 'h3':
      return <h3 key={idx} className="text-xl font-semibold text-brand-dark mt-7 mb-3">{section.text}</h3>
    case 'p':
      return <p key={idx} className="text-gray-700 leading-relaxed mb-5">{renderInline(section.text)}</p>
    case 'ul':
      return (
        <ul key={idx} className="space-y-2 mb-6 ml-4">
          {section.items.map((item, i) => (
            <li key={i} className="flex gap-2 text-gray-700">
              <span className="text-brand font-bold mt-0.5 flex-shrink-0">&#8250;</span>
              <span>{renderInline(item)}</span>
            </li>
          ))}
        </ul>
      )
    case 'ol':
      return (
        <ol key={idx} className="list-decimal list-inside space-y-2 mb-6 ml-2">
          {section.items.map((item, i) => (
            <li key={i} className="text-gray-700 leading-relaxed">{renderInline(item)}</li>
          ))}
        </ol>
      )
    case 'tip':
      return (
        <div key={idx} className="bg-green-50 border-l-4 border-brand rounded-r-xl p-5 mb-6">
          <p className="font-semibold text-brand mb-1">{section.title}</p>
          <p className="text-gray-700 text-sm leading-relaxed">{renderInline(section.text)}</p>
        </div>
      )
    case 'callout':
      return (
        <div key={idx} className="bg-gold/10 border border-gold/30 rounded-xl p-5 mb-6">
          <p className="text-gray-800 font-medium leading-relaxed">{renderInline(section.text)}</p>
        </div>
      )
    case 'image':
      return (
        <figure key={idx} className="my-8 rounded-2xl overflow-hidden">
          <div className="relative w-full h-64 md:h-96">
            <Image src={section.src} alt={section.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 900px" />
          </div>
          {section.caption && (
            <figcaption className="text-center text-sm text-gray-500 mt-2 italic">{section.caption}</figcaption>
          )}
        </figure>
      )
    case 'table':
      return (
        <div key={idx} className="overflow-x-auto mb-6 rounded-xl border border-gray-100">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-brand text-white">
                {section.headers.map((h, i) => (
                  <th key={i} className="px-4 py-3 text-left font-semibold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.rows.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  {row.map((cell, j) => (
                    <td key={j} className="px-4 py-3 border-b border-gray-100 text-gray-700">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    case 'seasonBar':
      return (
        <div key={idx} className="mb-6">
          <div className="flex rounded-lg overflow-hidden h-11 mb-3">
            {section.segments.map((seg, i) => (
              <div
                key={i}
                style={{ flex: seg.flex }}
                className={`flex items-center justify-center text-[11px] font-semibold text-center px-1 leading-tight ${SEASON_STYLES[seg.kind]}`}
              >
                {seg.label}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-1 text-xs text-text-muted">
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-gold inline-block" />{chrome.legendPeak}</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-brand-secondary inline-block" />{chrome.legendGreen}</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-gold-dark inline-block" />{chrome.legendLow}</span>
          </div>
        </div>
      )
    case 'timeline':
      return (
        <div key={idx} className="border-l-2 border-gray-200 pl-6 my-6 space-y-6">
          {section.items.map((item, i) => (
            <div key={i} className="relative">
              <span className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-gold ring-4 ring-white" aria-hidden />
              <p className="text-[11px] font-bold uppercase tracking-wide text-gold-label">{item.time}</p>
              <p className="font-semibold text-brand mt-0.5">{item.title}</p>
              <p className="text-sm text-text-muted leading-relaxed mt-0.5">{item.desc}</p>
            </div>
          ))}
        </div>
      )
    case 'packGrid':
      return (
        <div key={idx} className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-6">
          {section.items.map((item, i) => (
            <div key={i} className="flex items-center gap-2.5 bg-white border border-gray-100 rounded-xl px-4 py-3 text-sm text-text-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" aria-hidden />
              {item}
            </div>
          ))}
        </div>
      )
    case 'costTable':
      return (
        <div key={idx} className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-6">
          <div className="bg-white border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-brand text-sm mb-3">{chrome.included}</h3>
            <ul className="space-y-2">
              {section.included.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-text-muted">
                  <Check className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-brand text-sm mb-3">{chrome.excluded}</h3>
            <ul className="space-y-2">
              {section.excluded.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-text-muted">
                  <X className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )
    default:
      return null
  }
}

export default async function ExperienceDetailPage({ params }: Props) {
  const { slug, locale } = await params
  setRequestLocale(locale)
  const page = getExperiencePage(slug, locale)
  if (!page) notFound()

  const t = await getTranslations('experiences')
  const tc = await getTranslations('common')
  const th = await getTranslations('home')
  const tContact = await getTranslations('contact')
  const tf = await getTranslations('forms')

  const priceNumber = Number(page.priceFrom.replace(/[^0-9.]/g, '')) || undefined
  const relatedPackages = page.relatedPackageSlugs
    .map((s) => getPackage(s, locale))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))
  const allExperiences = getExperiencePages(locale)
  const relatedExperiences = page.relatedExperienceSlugs
    .map((s) => allExperiences.find((p) => p.slug === s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))

  const tripSchema = {
    '@context': 'https://schema.org',
    '@type': 'Trip',
    name: page.title,
    description: page.metaDescription,
    image: `${SITE_URL}${page.heroImage}`,
    provider: {
      '@type': 'Organization',
      name: 'EWA Safari Outfitters',
      url: SITE_URL,
    },
    ...(priceNumber
      ? {
          offers: {
            '@type': 'Offer',
            price: priceNumber,
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
            url: localeUrl(locale, `/experiences/${page.slug}`),
          },
        }
      : {}),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'EWA Safari Outfitters', item: localeUrl(locale, '/') },
      { '@type': 'ListItem', position: 2, name: t('breadcrumbSection'), item: localeUrl(locale, '/experiences') },
      { '@type': 'ListItem', position: 3, name: page.title, item: localeUrl(locale, `/experiences/${page.slug}`) },
    ],
  }

  const faqSchema = page.faq.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  } : null

  const chrome = {
    included: t('includedHeading'),
    excluded: t('excludedHeading'),
    legendPeak: t('legendPeak'),
    legendGreen: t('legendGreen'),
    legendLow: t('legendLow'),
  }

  const reviewIdx = REVIEW_MAP[page.slug] ?? [1, 3]
  const reviews = reviewIdx.map((i) => ({
    ...REVIEWERS[i],
    text: th(`rev${i}Text`),
    trip: th(`rev${i}Trip`),
  }))

  const whatsappHref = `https://wa.me/255747999070?text=${encodeURIComponent(t('whatsappPrefill', { title: page.title }))}`

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tripSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      {/* Hero */}
      <section className="relative h-[55vh] min-h-80 bg-brand flex items-end">
        <Image src={page.heroImage} alt={page.title} fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand/80 via-brand/20 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
          <Breadcrumb items={[
            { label: 'EWA Safari Outfitters', href: `/${locale}` },
            { label: t('breadcrumbSection'), href: `/${locale}/experiences` },
            { label: page.title },
          ]} />
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                {page.badge && <Badge label={page.badge} />}
                <span className="bg-white/15 border border-white/30 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {page.category}
                </span>
              </div>
              <h1 className="text-3xl lg:text-5xl font-semibold text-white max-w-2xl leading-tight">{page.title}</h1>
              <p className="text-white/80 mt-3 max-w-xl">{page.heroTagline}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 text-center border border-white/20">
              <div className="text-white/70 text-xs uppercase tracking-wide">{t('fromLabel')}</div>
              <div className="text-white font-bold text-2xl">
                {page.priceFrom ? page.priceFrom : t('priceOnRequest')}
              </div>
              {page.priceFrom && <div className="text-white/60 text-xs">{tc('perPerson')}</div>}
            </div>
          </div>
        </div>
      </section>

      {/* Stat strip — this experience's own quick facts, not site-wide stats */}
      <div className="bg-brand-dark">
        <RevealGroup className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap gap-x-8 gap-y-2">
          {page.quickFacts.map((fact) => {
            const Icon = QUICK_FACT_ICONS[fact.icon]
            return (
              <RevealItem key={fact.text} className="flex items-center gap-2 text-sm text-white/80">
                <Icon className="w-4 h-4 text-gold flex-shrink-0" />
                {fact.text}
              </RevealItem>
            )
          })}
        </RevealGroup>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

          {/* Main content */}
          <Reveal className="lg:col-span-2 min-w-0">
          <article>
            <p className="text-xs font-semibold uppercase tracking-widest text-gold-label mb-6">{t('completeGuide')}</p>
            <div className="prose-spacing">
              {page.sections.map((section, idx) =>
                idx === 0 && section.type === 'p' ? (
                  <p key={idx} className="text-lg text-gray-800 font-medium leading-relaxed mb-6">
                    {renderInline(section.text)}
                  </p>
                ) : (
                  renderSection(section, idx, chrome)
                )
              )}
            </div>

            {/* Gallery */}
            {page.gallery && page.gallery.length > 0 && (
              <div className="mt-12">
                <h2 className="text-2xl md:text-3xl font-bold text-brand mb-5">{t('galleryHeading')}</h2>
                <ExperienceGallery
                  images={page.gallery}
                  labels={{ close: tf('closeLabel'), prev: t('galleryPrev'), next: t('galleryNext') }}
                />
              </div>
            )}

            {/* Guest reviews */}
            <div className="mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-brand mb-5">{t('reviewsHeading')}</h2>
              <RevealGroup className="grid sm:grid-cols-2 gap-5">
                {reviews.map((r) => (
                  <RevealItem key={r.name} className="bg-white border border-gray-100 rounded-2xl p-6">
                    <div className="flex gap-0.5 mb-3" aria-label={`${r.rating}/5`}>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={14} className={i < r.rating ? 'fill-gold text-gold' : 'text-gray-200'} />
                      ))}
                    </div>
                    <p className="text-gray-700 italic leading-relaxed text-sm mb-4">&ldquo;{r.text}&rdquo;</p>
                    <p className="text-xs font-semibold text-gold-label">{r.name} — {r.trip}</p>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>

            {/* FAQ */}
            {page.faq.length > 0 && (
              <div className="mt-12">
                <h2 className="text-2xl md:text-3xl font-bold text-brand mb-5">{t('faqHeading')}</h2>
                <div className="space-y-3">
                  {page.faq.map((item) => (
                    <details key={item.q} className="group border border-gray-100 rounded-xl overflow-hidden bg-white">
                      <summary className="flex items-center justify-between gap-4 p-4 cursor-pointer hover:bg-light-green transition-colors list-none">
                        <span className="font-medium text-brand text-sm">{item.q}</span>
                        <ChevronDown className="w-4 h-4 text-text-muted group-open:rotate-180 transition-transform flex-shrink-0" />
                      </summary>
                      <div className="px-4 pb-4 pt-1 border-t border-gray-100">
                        <p className="text-sm text-text-muted leading-relaxed">{item.a}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            )}
          </article>
          </Reveal>

          {/* Sidebar */}
          <Reveal delay={0.15} className="space-y-5 lg:sticky lg:top-24">
          <aside>
            {/* Price / enquiry card */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-gold-label">{t('fromLabel')}</p>
              <p className="text-3xl font-bold text-brand mt-0.5">
                {page.priceFrom ? page.priceFrom : t('priceOnRequest')}
                {page.priceFrom && <span className="text-sm font-normal text-text-muted"> {t('perPersonLabel')}</span>}
              </p>
              <p className="text-xs text-text-muted mt-1 mb-5">{page.priceSub}</p>
              <BookNowButton
                label={t('planButton')}
                packageName={page.title}
                packageType={page.category}
                priceFrom={page.priceFrom || undefined}
                duration={page.durationLabel}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors text-sm"
              />
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 w-full flex items-center justify-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-colors text-sm"
              >
                {WHATSAPP_SVG}
                {tContact('whatsappUs')}
              </a>
              <div className="mt-5 pt-5 border-t border-gray-100 space-y-3">
                {page.quickFacts.map((fact) => {
                  const Icon = QUICK_FACT_ICONS[fact.icon]
                  return (
                    <div key={fact.text} className="flex items-center gap-3 text-sm text-text-muted">
                      <span className="w-8 h-8 rounded-lg bg-light-green flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-brand" />
                      </span>
                      {fact.text}
                    </div>
                  )
                })}
              </div>
              <div className="mt-5 pt-4 border-t border-gray-100 flex divide-x divide-gray-100 text-center">
                {[
                  { v: '4.9', l: 'TripAdvisor' },
                  { v: 'TATO', l: t('trustCertified') },
                  { v: '200+', l: th('happyGuests') },
                ].map(({ v, l }) => (
                  <div key={l} className="flex-1 px-1">
                    <p className="font-bold text-brand text-sm">{v}</p>
                    <p className="text-[10px] uppercase tracking-wide text-gold-label mt-0.5">{l}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Full itinerary by email (lead capture) */}
            <div className="bg-brand rounded-2xl p-5">
              <p className="text-gold text-[10px] font-bold uppercase tracking-widest mb-1">{t('itineraryCardBadge')}</p>
              <h4 className="text-white font-bold text-base leading-snug mb-2">{t('itineraryCardTitle')}</h4>
              <p className="text-white/65 text-xs leading-relaxed mb-4">{t('itineraryCardText')}</p>
              <PdfLeadModal
                triggerLabel={t('itineraryCardButton')}
                triggerClassName="w-full flex items-center justify-center gap-2 px-5 py-3 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors text-sm"
                image={page.heroImage}
                imageAlt={page.title}
                badge={t('itineraryCardBadge')}
                panelTitle={page.title}
                bullets={[t('itineraryBullet1'), t('itineraryBullet2'), t('itineraryBullet3'), t('itineraryBullet4')]}
                socialProof={t('itinerarySocialProof')}
                heading={t('itineraryModalTitle')}
                subheading={t('itineraryModalSubtitle')}
                submitLabel={t('itinerarySubmitLabel')}
                successTitle={t('itinerarySuccessTitle')}
                context={page.title}
              />
            </div>

            {/* Related experiences */}
            {relatedExperiences.length > 0 && (
              <div className="bg-light-green rounded-2xl p-5">
                <h4 className="font-bold text-brand text-sm mb-2">{t('relatedExperiencesHeading')}</h4>
                <div className="divide-y divide-gray-200/70">
                  {relatedExperiences.map((exp) => (
                    <Link key={exp.slug} href={`/experiences/${exp.slug}`} className="flex items-center justify-between py-3 group">
                      <span className="text-sm font-medium text-gray-700 group-hover:text-brand transition-colors">{exp.title}</span>
                      <span className="text-xs text-gold-label font-semibold flex-shrink-0 ml-3">
                        {exp.priceFrom ? `${exp.priceFrom}${t('perPersonLabel')}` : t('priceOnRequest')}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Contact nudge */}
            <div className="border border-gray-200 rounded-2xl p-5 text-center">
              <p className="text-xs text-text-muted mb-3 leading-relaxed">{t('contactHint')}</p>
              <Link href="/contact" className="inline-block bg-brand text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-brand-dark transition-colors w-full">
                {tc('contactUs')}
              </Link>
            </div>
          </aside>
          </Reveal>
        </div>

        {/* Popular safaris with this experience */}
        {relatedPackages.length > 0 && (
          <section className="mt-16">
            <Reveal className="mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-brand">{t('popularSafarisHeading')}</h2>
            </Reveal>
            <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPackages.map((pkg) => (
                <RevealItem key={pkg.slug}>
                  <Link href={`/safaris/${pkg.slug}`} className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition-shadow block">
                    <div className="relative h-44">
                      <Image src={pkg.heroImage} alt={pkg.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" sizes="(max-width: 640px) 100vw, 33vw" />
                    </div>
                    <div className="p-5">
                      <h3 className="font-semibold text-brand leading-snug">{pkg.name}</h3>
                      <p className="text-xs text-text-muted mt-1.5">
                        {t('packageMeta', { days: pkg.duration, price: `$${pkg.priceFrom.toLocaleString()}` })}
                      </p>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand mt-3 group-hover:gap-2 transition-all">
                        {t('viewButton')} <ArrowRight size={14} className="text-gold" />
                      </span>
                    </div>
                  </Link>
                </RevealItem>
              ))}
            </RevealGroup>
          </section>
        )}
      </div>

      {/* Final CTA */}
      <section className="relative bg-brand-dark py-16 text-center px-4 overflow-hidden">
        <Image src={page.heroImage} alt="" fill className="object-cover" sizes="100vw" aria-hidden />
        <div className="absolute inset-0 bg-brand-dark/80" aria-hidden />
        <Reveal className="relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{page.ctaHeading}</h2>
        <p className="text-white/70 max-w-xl mx-auto mb-7">{page.ctaText}</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <BookNowButton
            label={t('planButton')}
            packageName={page.title}
            packageType={page.category}
            priceFrom={page.priceFrom || undefined}
            duration={page.durationLabel}
          />
          <Link href="/contact" className="inline-flex items-center gap-2 text-white/90 hover:text-white font-semibold text-sm transition-colors">
            {tc('contactUs')} <ArrowRight size={15} className="text-gold" />
          </Link>
        </div>
        </Reveal>
      </section>

      <TrustBar />
    </>
  )
}
