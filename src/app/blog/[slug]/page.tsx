import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Clock, Calendar, Tag, MapPin, ArrowRight } from 'lucide-react'
import { blogPosts, getPostMeta } from '@/data/blog/index'
import { getArticleContent } from '@/data/blog/articles'
import type { SectionType } from '@/data/blog/types'
import BookNowButton from '@/components/booking/BookNowButton'
import { packages } from '@/data/packages'
import { destinations } from '@/data/destinations'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostMeta(slug)
  if (!post) return {}
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      images: [post.heroImage],
    },
  }
}

// Maps each article to the most relevant safari packages and destinations
const articleLinks: Record<string, { packageSlugs: string[]; destSlugs: string[] }> = {
  'great-migration-guide':          { packageSlugs: ['7-day-serengeti-ngorongoro', '10-day-northern-circuit', '5-day-serengeti-fly-in'], destSlugs: ['serengeti', 'ngorongoro'] },
  'tanzania-safari-cost':           { packageSlugs: ['7-day-serengeti-ngorongoro', '10-day-northern-circuit', '5-day-serengeti-fly-in'], destSlugs: ['serengeti', 'tarangire', 'ngorongoro'] },
  'best-time-to-visit-serengeti':   { packageSlugs: ['7-day-serengeti-ngorongoro', '5-day-serengeti-fly-in'], destSlugs: ['serengeti', 'ngorongoro', 'tarangire'] },
  'gorilla-trekking-rwanda':        { packageSlugs: [], destSlugs: ['volcanoes'] },
  'kilimanjaro-climbing-guide':     { packageSlugs: ['kilimanjaro-machame-7day'], destSlugs: ['arusha', 'serengeti'] },
  'tanzania-vs-kenya-safari':       { packageSlugs: ['7-day-serengeti-ngorongoro', '10-day-northern-circuit'], destSlugs: ['serengeti', 'masai-mara', 'ngorongoro'] },
  'safari-packing-list':            { packageSlugs: ['7-day-serengeti-ngorongoro', '10-day-safari-zanzibar'], destSlugs: ['serengeti', 'zanzibar'] },
  'big-five-africa-tanzania':       { packageSlugs: ['10-day-northern-circuit', '7-day-serengeti-ngorongoro'], destSlugs: ['serengeti', 'ngorongoro', 'tarangire'] },
  'zanzibar-travel-guide':          { packageSlugs: ['10-day-safari-zanzibar'], destSlugs: ['zanzibar', 'serengeti'] },
  'safari-honeymoon-tanzania':      { packageSlugs: ['10-day-safari-zanzibar', '7-day-serengeti-ngorongoro'], destSlugs: ['serengeti', 'zanzibar', 'ngorongoro'] },
  'family-safari-africa':           { packageSlugs: ['10-day-northern-circuit', '7-day-serengeti-ngorongoro'], destSlugs: ['tarangire', 'ngorongoro', 'serengeti'] },
  'ngorongoro-crater-guide':        { packageSlugs: ['7-day-serengeti-ngorongoro', '10-day-northern-circuit'], destSlugs: ['ngorongoro', 'serengeti', 'tarangire'] },
  'serengeti-vs-masai-mara':        { packageSlugs: ['5-day-serengeti-fly-in', '7-day-serengeti-ngorongoro'], destSlugs: ['serengeti', 'masai-mara'] },
  '7-day-tanzania-safari-itinerary':{ packageSlugs: ['7-day-serengeti-ngorongoro', '10-day-northern-circuit'], destSlugs: ['tarangire', 'serengeti', 'ngorongoro'] },
  'budget-safari-tanzania':         { packageSlugs: ['7-day-serengeti-ngorongoro', '10-day-northern-circuit'], destSlugs: ['serengeti', 'tarangire', 'manyara'] },
  'chimpanzee-trekking-tanzania':   { packageSlugs: ['7-day-southern-circuit'], destSlugs: ['gombe', 'mahale', 'nyerere'] },
  'luxury-safari-tanzania':         { packageSlugs: ['5-day-serengeti-fly-in', '10-day-safari-zanzibar'], destSlugs: ['serengeti', 'zanzibar', 'ruaha'] },
  'safari-photography-tips':        { packageSlugs: ['5-day-serengeti-fly-in', '7-day-serengeti-ngorongoro'], destSlugs: ['serengeti', 'ngorongoro'] },
  'ruaha-national-park-guide':      { packageSlugs: ['7-day-southern-circuit'], destSlugs: ['ruaha', 'nyerere', 'mahale'] },
  'tanzania-vs-south-africa-safari':{ packageSlugs: ['10-day-northern-circuit', '7-day-serengeti-ngorongoro'], destSlugs: ['serengeti', 'ngorongoro', 'tarangire'] },
}

function renderSection(section: SectionType, idx: number) {
  switch (section.type) {
    case 'h2':
      return <h2 key={idx} className="text-2xl md:text-3xl font-bold text-brand mt-10 mb-4">{section.text}</h2>
    case 'h3':
      return <h3 key={idx} className="text-xl font-semibold text-brand-dark mt-7 mb-3">{section.text}</h3>
    case 'p':
      return <p key={idx} className="text-gray-700 leading-relaxed mb-5">{section.text}</p>
    case 'ul':
      return (
        <ul key={idx} className="space-y-2 mb-6 ml-4">
          {section.items.map((item, i) => (
            <li key={i} className="flex gap-2 text-gray-700">
              <span className="text-brand font-bold mt-0.5 flex-shrink-0">&#8250;</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )
    case 'ol':
      return (
        <ol key={idx} className="list-decimal list-inside space-y-2 mb-6 ml-2">
          {section.items.map((item, i) => (
            <li key={i} className="text-gray-700 leading-relaxed">{item}</li>
          ))}
        </ol>
      )
    case 'tip':
      return (
        <div key={idx} className="bg-green-50 border-l-4 border-brand rounded-r-xl p-5 mb-6">
          <p className="font-semibold text-brand mb-1">{section.title}</p>
          <p className="text-gray-700 text-sm leading-relaxed">{section.text}</p>
        </div>
      )
    case 'callout':
      return (
        <div key={idx} className="bg-gold/10 border border-gold/30 rounded-xl p-5 mb-6">
          <p className="text-gray-800 font-medium leading-relaxed">{section.text}</p>
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
    default:
      return null
  }
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params
  const post = getPostMeta(slug)
  if (!post) notFound()

  const content = getArticleContent(slug)
  if (!content) notFound()

  const related = blogPosts.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 3)

  const links = articleLinks[slug] ?? { packageSlugs: [], destSlugs: [] }
  const linkedPackages = links.packageSlugs.map(s => packages.find(p => p.slug === s)).filter(Boolean)
  const linkedDestinations = links.destSlugs.map(s => destinations.find(d => d.slug === s)).filter(Boolean)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    image: `https://theextremewilderness.com${post.heroImage}`,
    author: { '@type': 'Organization', name: 'The Extreme Wilderness' },
    publisher: { '@type': 'Organization', name: 'The Extreme Wilderness', logo: { '@type': 'ImageObject', url: 'https://theextremewilderness.com/logo.png' } },
    datePublished: post.date,
    dateModified: post.date,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative h-[55vh] md:h-[65vh] flex items-end">
        <div className="absolute inset-0">
          <Image src={post.heroImage} alt={post.heroImageAlt} fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <div className="flex flex-wrap gap-3 items-center mb-4">
            <span className="bg-brand text-white text-xs font-semibold px-3 py-1 rounded-full">{post.category}</span>
            <span className="flex items-center gap-1 text-white/60 text-sm"><Calendar size={13} />{post.date}</span>
            <span className="flex items-center gap-1 text-white/60 text-sm"><Clock size={13} />{post.readTime}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-tight max-w-4xl">{post.title}</h1>
        </div>
      </section>

      {/* Article body */}
      <section className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_360px] gap-14 items-start">

            {/* ── Main content ── */}
            <article className="min-w-0">
              <p className="text-lg text-gray-600 leading-relaxed mb-10 pb-8 border-b border-gray-100 font-medium">
                {post.excerpt}
              </p>
              <div className="prose-spacing">
                {content.map((section, idx) => renderSection(section, idx))}
              </div>

              {/* Bottom CTA */}
              <div className="mt-14 bg-brand rounded-2xl p-8 md:p-10 text-white text-center">
                <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-2">Based in Arusha, Tanzania</p>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">Ready to Experience It First-Hand?</h3>
                <p className="text-white/75 mb-7 max-w-lg mx-auto">Our expert team creates custom itineraries for every budget and timeframe. Get your personalised quote within 24 hours.</p>
                <BookNowButton
                  label="Get a Free Quote"
                  packageName="Custom Safari Enquiry"
                  packageType="safari"
                  arrow
                />
              </div>
            </article>

            {/* ── Sidebar ── */}
            <aside className="space-y-6 lg:sticky lg:top-24">

              {/* Plan Your Trip */}
              <div className="bg-brand rounded-2xl overflow-hidden">
                <div className="px-6 pt-6 pb-4">
                  <p className="text-gold text-[10px] font-semibold uppercase tracking-widest mb-1">Ready to go?</p>
                  <h4 className="text-white font-bold text-lg leading-snug">Plan Your Trip</h4>
                  <p className="text-white/60 text-xs mt-1">Custom itineraries from our Arusha team</p>
                </div>

                {linkedPackages.length > 0 && (
                  <div className="px-4 pb-4 space-y-2">
                    {linkedPackages.map((pkg) => pkg && (
                      <Link
                        key={pkg.slug}
                        href={`/safaris/${pkg.slug}`}
                        className="flex items-center justify-between bg-white/10 hover:bg-white/20 transition-colors rounded-xl px-4 py-3 group"
                      >
                        <div>
                          <p className="text-white text-sm font-semibold leading-snug">{pkg.name}</p>
                          <p className="text-white/70 text-xs mt-0.5">{pkg.duration} days &middot; from ${pkg.priceFrom?.toLocaleString()}</p>
                        </div>
                        <ArrowRight size={14} className="text-gold flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    ))}
                  </div>
                )}

                <div className="px-4 pb-5">
                  <BookNowButton
                    label="Get a Custom Quote"
                    packageName="Custom Safari Enquiry"
                    packageType="safari"
                    arrow
                  />
                </div>
              </div>

              {/* Explore Destinations */}
              {linkedDestinations.length > 0 && (
                <div className="bg-gray-50 rounded-2xl p-5">
                  <h4 className="font-bold text-brand text-sm mb-3 flex items-center gap-2">
                    <MapPin size={14} className="text-gold" />
                    Explore Destinations
                  </h4>
                  <div className="space-y-2">
                    {linkedDestinations.map((dest) => dest && (
                      <Link
                        key={dest.slug}
                        href={`/destinations/${dest.slug}`}
                        className="flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-white transition-colors group border border-transparent hover:border-gray-100"
                      >
                        <span className="text-sm font-medium text-gray-700 group-hover:text-brand transition-colors">{dest.name}</span>
                        <ArrowRight size={12} className="text-gray-300 group-hover:text-brand transition-colors group-hover:translate-x-0.5" />
                      </Link>
                    ))}
                  </div>
                  <Link
                    href="/destinations"
                    className="mt-3 flex items-center gap-1 text-xs font-semibold text-brand hover:text-brand-dark transition-colors"
                  >
                    View all destinations <ArrowRight size={11} />
                  </Link>
                </div>
              )}

              {/* Related Articles */}
              {related.length > 0 && (
                <div className="bg-gray-50 rounded-2xl p-5">
                  <h4 className="font-bold text-brand text-sm mb-4">Related Articles</h4>
                  <div className="space-y-4">
                    {related.map((rp) => (
                      <Link key={rp.slug} href={`/blog/${rp.slug}`} className="flex gap-3 group">
                        <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                          <Image src={rp.heroImage} alt={rp.heroImageAlt} fill className="object-cover group-hover:scale-105 transition-transform duration-300" sizes="64px" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-gray-800 group-hover:text-brand transition-colors line-clamp-2 leading-snug">{rp.title}</p>
                          <p className="text-xs text-gray-400 mt-1">{rp.readTime}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Topics */}
              <div className="bg-gray-50 rounded-2xl p-5">
                <h4 className="font-bold text-brand text-sm mb-3 flex items-center gap-2">
                  <Tag size={13} className="text-gold" />
                  Topics
                </h4>
                <div className="flex flex-wrap gap-2">
                  {post.keywords.map((kw) => (
                    <span key={kw} className="text-xs bg-white border border-gray-200 text-gray-500 px-2.5 py-1 rounded-full">{kw}</span>
                  ))}
                </div>
              </div>

              {/* Contact nudge */}
              <div className="border border-gray-200 rounded-2xl p-5 text-center">
                <p className="font-semibold text-brand-dark text-sm mb-1">Have a question?</p>
                <p className="text-xs text-gray-500 mb-4 leading-relaxed">Our Arusha-based team responds within 24 hours — no sales pressure.</p>
                <Link href="/contact" className="inline-block bg-brand text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-brand-dark transition-colors w-full text-center">
                  Contact Us
                </Link>
              </div>

            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
