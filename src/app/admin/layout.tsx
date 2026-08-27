import { Bitter, Inter, JetBrains_Mono } from 'next/font/google'
import './admin-theme.css'

// Scoped to /admin/** only — the public site uses Geist (src/app/layout.tsx)
// and its own --color-brand/--color-gold tokens. Loading these here rather
// than in the root layout keeps them out of the public site's font bundle.
const bitter = Bitter({ variable: '--font-bitter', subsets: ['latin'], weight: ['600', '700', '800'] })
const inter = Inter({ variable: '--font-inter', subsets: ['latin'], weight: ['400', '500', '600', '700', '800'] })
const jetbrainsMono = JetBrains_Mono({ variable: '--font-jetbrains-mono', subsets: ['latin'], weight: ['500', '600', '700'] })

export default function AdminRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`ewa-admin ${bitter.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      {children}
    </div>
  )
}
