import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'

// Root-level (outside [locale]) on purpose — this is the browser-redirect
// landing page Pesapal's SubmitOrderRequest callback_url points to after a
// client completes checkout, distinct from the server-to-server IPN route
// at /api/pesapal/ipn. Kept deliberately minimal and non-localized: it's a
// transient confirmation screen, not indexed content.
export const metadata: Metadata = {
  title: 'Payment Received — EWA Safari Outfitters',
  robots: { index: false, follow: false },
}

type Props = { searchParams: Promise<{ invoice?: string }> }

export default async function PaymentReturnPage({ searchParams }: Props) {
  const { invoice } = await searchParams

  return (
    <div className="min-h-screen bg-brand flex items-center justify-center text-center px-4">
      <div>
        <CheckCircle2 className="w-16 h-16 text-gold mx-auto mb-5" />
        <h1 className="text-2xl sm:text-3xl font-semibold text-white mb-3">Thank you</h1>
        <p className="text-white/70 mb-2 max-w-md mx-auto">
          We&apos;re confirming your payment with Pesapal now.
          {invoice && <> Your invoice reference is <span className="text-white font-medium">{invoice}</span>.</>}
        </p>
        <p className="text-white/70 mb-8 max-w-md mx-auto">
          You&apos;ll receive a confirmation from our team shortly — no further action is needed on your part.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors"
        >
          Return to homepage
        </Link>
      </div>
    </div>
  )
}
