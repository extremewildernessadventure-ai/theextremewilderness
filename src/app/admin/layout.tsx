import { Bitter, Inter, JetBrains_Mono, Fraunces } from 'next/font/google'
import '../globals.css'
import './admin-theme.css'

// This is admin's own independent root layout (no shared app/layout.tsx
// exists anymore — see the next/root-params comment in src/i18n/request.ts).
// It still imports globals.css for Tailwind's base utility classes, used
// throughout the admin UI on top of admin-theme.css's --pine/--gold design
// tokens. Fonts stay scoped to /admin/** only — the public site uses Geist
// (src/app/[locale]/layout.tsx) and its own --color-brand/--color-gold
// tokens, kept out of the public site's font bundle by loading these here.
const bitter = Bitter({ variable: '--font-bitter', subsets: ['latin'], weight: ['600', '700', '800'] })
const inter = Inter({ variable: '--font-inter', subsets: ['latin'], weight: ['400', '500', '600', '700', '800'] })
const jetbrainsMono = JetBrains_Mono({ variable: '--font-jetbrains-mono', subsets: ['latin'], weight: ['500', '600', '700'] })
// Cover-page display serif for the generated client PDFs (voucher, invoice,
// quote, payslip — src/components/pdf/PdfChrome.tsx). These documents
// intentionally use the public site's --color-brand/--color-gold tokens,
// not admin's own --pine/--gold ones, since they represent the client-
// facing brand rather than the internal dashboard.
const fraunces = Fraunces({ variable: '--font-fraunces', subsets: ['latin'], weight: ['500', '600'] })

export default function AdminRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" className="h-full w-full">
      <body className={`ewa-admin ${bitter.variable} ${inter.variable} ${jetbrainsMono.variable} ${fraunces.variable} min-h-screen antialiased`}>
        {children}
      </body>
    </html>
  )
}
