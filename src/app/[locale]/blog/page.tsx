import type { Metadata } from 'next'
import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { getBlogPosts, getBlogCategories } from '@/data/blog/index.i18n'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { getTranslations } from 'next-intl/server'
import { buildAlternates, buildPageTitle } from '@/lib/site'
import Reveal from '@/components/motion/Reveal'
import { RevealGroup, RevealItem } from '@/components/motion/RevealGroup'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'blog' })
  const title = t('metaTitle')
  const description = t('metaDescription')
  return {
    alternates: buildAlternates(locale, '/blog'),
    title: buildPageTitle(title),
    description,
    openGraph: {
      title,
      description,
      images: [{ url: '/images/gallery/wildlife-western-tanzania-safari.jpg', width: 1200, height: 630, alt: t('ogImageAlt') }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      images: ['/images/gallery/wildlife-western-tanzania-safari.jpg'],
    },
    keywords: t.raw('metaKeywords') as string[],
  }
}

type Props = {
  params: Promise<{ locale: string }>
  searchParams: Promise<{ category?: string }>
}

export default async function BlogPage({ params, searchParams }: Props) {
  const { locale } = await params
  const allPosts = await getBlogPosts(locale)
  const categories = await getBlogCategories(locale)
  const t = await getTranslations('blog')

  const { category } = await searchParams
  const activeCategory = category && categories.includes(category) && category !== categories[0] ? category : null
  const blogPosts = activeCategory ? allPosts.filter((p) => p.category === activeCategory) : allPosts

  const featured = blogPosts[0]
  const rest = blogPosts.slice(1)

  return (
    <>
      <section className="pt-28 pb-12 bg-brand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb locale={locale} items={[
            { label: 'EWA Safari Outfitters', href: `/${locale}` },
            { label: t('breadcrumbLabel') },
          ]} />
          <h1 className="text-4xl lg:text-5xl font-semibold text-white mb-4">
            {t.rich('heroTitle', {
              highlight: (chunks) => <span className="text-gold">{chunks}</span>,
            })}
          </h1>
          <p className="text-white/70 text-lg max-w-xl">
            {t('heroSubtitle')}
          </p>
        </div>
      </section>

      <section className="py-16 bg-light-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat, i) => {
              const isAll = i === 0
              const isActive = isAll ? !activeCategory : activeCategory === cat
              const href = isAll ? '/blog' : `/blog?category=${encodeURIComponent(cat)}`
              return (
                <Link
                  key={cat}
                  href={href}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors border ${
                    isActive ? 'bg-brand text-white border-brand' : 'border-gray-200 text-text-muted hover:border-brand hover:text-brand bg-white'
                  }`}
                >
                  {cat}
                </Link>
              )
            })}
          </Reveal>

          {!featured ? (
            <p className="text-text-muted text-center py-16">{t('noPostsInCategory')}</p>
          ) : (
            <>
              <Reveal className="mb-8">
                <Link href={`/blog/${featured.slug}`} className="group block">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-3xl overflow-hidden hover:shadow-xl transition-all">
                    <div className="relative h-60 lg:h-auto min-h-[280px]">
                      <Image src={featured.heroImage} alt={featured.heroImageAlt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 1024px) 100vw, 50vw" />
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <span className="inline-block text-gold-label font-semibold text-xs uppercase tracking-widest mb-3">{featured.category} &middot; {t('featuredBadge')}</span>
                      <h2 className="text-2xl font-semibold text-brand mb-3 group-hover:text-brand-secondary transition-colors">{featured.title}</h2>
                      <p className="text-text-muted text-sm leading-relaxed mb-5">{featured.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-text-muted">
                        <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{featured.date}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{featured.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>

              {rest.length > 0 && (
                <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {rest.map((post) => (
                    <RevealItem key={post.slug}>
                      <Link href={`/blog/${post.slug}`} className="group bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all hover:-translate-y-0.5 block">
                        <div className="relative h-44">
                          <Image src={post.heroImage} alt={post.heroImageAlt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                        </div>
                        <div className="p-5">
                          <span className="text-gold text-[10px] font-semibold uppercase tracking-widest">{post.category}</span>
                          <h3 className="font-semibold text-brand text-sm mt-1 mb-2 leading-snug group-hover:text-brand-secondary transition-colors">{post.title}</h3>
                          <p className="text-text-muted text-xs leading-relaxed line-clamp-2 mb-3">{post.excerpt}</p>
                          <div className="flex items-center justify-between text-xs text-text-muted">
                            <span>{post.date}</span>
                            <span className="flex items-center gap-1 text-brand font-semibold">{t('read')} <ArrowRight className="w-3 h-3" /></span>
                          </div>
                        </div>
                      </Link>
                    </RevealItem>
                  ))}
                </RevealGroup>
              )}
            </>
          )}
        </div>
      </section>
    </>
  )
}
