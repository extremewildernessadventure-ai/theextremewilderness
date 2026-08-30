import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { Mail, ChevronRight } from 'lucide-react'
import { buildAlternates, buildPageTitle } from '@/lib/site'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'appInfo' })
  return {
    alternates: buildAlternates(locale, '/app-info'),
    title: buildPageTitle(t('metaTitle')),
    description: t('metaDescription'),
    robots: { index: false, follow: false },
  }
}

const EMAIL = 'info@theextremewilderness.com'

export default async function AppInfoPage() {
  const t = await getTranslations('appInfo')

  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-20">
        <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">{t('eyebrow')}</p>
        <h1 className="text-4xl font-bold text-brand mb-2">EWA Safari Outfitters</h1>
        <p className="text-text-muted text-lg mb-8">{t('subtitle')}</p>

        <div className="bg-light-green rounded-2xl p-7 mb-6">
          <p className="text-gray-700 leading-relaxed">{t('purposeP1')}</p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-7 mb-6 border border-gray-100">
          <h2 className="font-bold text-brand text-sm mb-3">{t('dataHeading')}</h2>
          <p className="text-gray-700 leading-relaxed text-sm">{t('dataP1')}</p>
        </div>

        <p className="text-gray-700 leading-relaxed mb-8">
          {t('moreInfoPrefix')}{' '}
          <Link href="/privacy" className="text-brand font-medium hover:underline">
            {t('privacyLinkLabel')}
          </Link>
          .
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-gray-100 text-sm">
          <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 text-brand hover:underline">
            <Mail className="w-4 h-4" />
            {EMAIL}
          </a>
          <Link href="/" className="inline-flex items-center gap-1 text-brand hover:underline">
            {t('backToHome')} <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  )
}
