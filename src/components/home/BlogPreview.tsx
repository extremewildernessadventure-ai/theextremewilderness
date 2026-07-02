import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

export default function BlogPreview() {
  const t = useTranslations('home')
  const tc = useTranslations('common')

  const posts = [
    {
      slug: 'great-migration-guide',
      title: t('blog0Title'),
      excerpt: t('blog0Excerpt'),
      date: t('blog0Date'),
      readTime: t('blog0ReadTime'),
      category: t('blog0Category'),
      image: '/images/gallery/serengeti (1).png',
    },
    {
      slug: 'kilimanjaro-climbing-guide',
      title: t('blog1Title'),
      excerpt: t('blog1Excerpt'),
      date: t('blog1Date'),
      readTime: t('blog1ReadTime'),
      category: t('blog1Category'),
      image: '/images/gallery/kilimanjaro (1).png',
    },
    {
      slug: 'zanzibar-travel-guide',
      title: t('blog2Title'),
      excerpt: t('blog2Excerpt'),
      date: t('blog2Date'),
      readTime: t('blog2ReadTime'),
      category: t('blog2Category'),
      image: '/images/gallery/zanzibar.webp',
    },
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="inline-block text-gold-label font-semibold text-xs uppercase tracking-widest mb-3">
              {t('fromTheBush')}
            </span>
            <h2 className="text-3xl lg:text-4xl font-semibold text-brand">
              {t('storiesTips')}
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden sm:flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-secondary transition-colors"
          >
            {tc('viewAll')} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 bg-gold text-brand text-xs font-semibold rounded-full">
                  {post.category}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <h3 className="font-semibold text-brand text-base mb-2 leading-snug group-hover:text-brand-secondary transition-colors">
                  {post.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed mb-4 flex-1">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-3 text-xs text-text-muted">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-gold-label group-hover:underline">
                    {tc('readMore')} &rarr;
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8 sm:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand"
          >
            {tc('viewAll')} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
