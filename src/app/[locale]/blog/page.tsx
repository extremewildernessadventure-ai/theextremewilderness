import type { Metadata } from 'next'
import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { getBlogPosts, getBlogCategories } from '@/data/blog/index.i18n'
import { getTranslations, getLocale } from 'next-intl/server'

export const metadata: Metadata = {
  title: 'Safari Blog | Tanzania & East Africa Travel Guides | The Extreme Wilderness',
  description: 'Expert Tanzania safari guides, Kilimanjaro tips, and wildlife articles from our local team in Arusha.',
}

export default async function BlogPage({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const locale = await getLocale()
  const allPosts = getBlogPosts(locale)
  const categories = getBlogCategories(locale)
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
          <div className="flex flex-wrap gap-2 mb-10">
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
          </div>

          {!featured ? (
            <p className="text-text-muted text-center py-16">{t('noPostsInCategory')}</p>
          ) : (
            <>
              <Link href={`/blog/${featured.slug}`} className="group block mb-8">
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

              {rest.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {rest.map((post) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all hover:-translate-y-0.5">
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
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  )
}
