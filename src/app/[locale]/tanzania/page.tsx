import { buildAlternates } from '@/lib/site'

export { default } from '@/app/[locale]/destinations/page'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return {
    alternates: buildAlternates(locale, '/tanzania'),
    robots: { index: false, follow: true },
  }
}
