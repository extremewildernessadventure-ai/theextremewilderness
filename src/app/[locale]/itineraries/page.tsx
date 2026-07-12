import { permanentRedirect } from '@/i18n/navigation'

type Props = { params: Promise<{ locale: string }> }

export default async function ItinerariesRedirectPage({ params }: Props) {
  const { locale } = await params
  permanentRedirect({ href: '/safaris', locale })
}
