import type { Metadata } from 'next'
import { Fraunces, Outfit } from 'next/font/google'
import { SITE } from '@/content/site'
import { SmoothScroll } from '@/components/layout/SmoothScroll'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import '@/styles/globals.css'

/* ─── Fonts ──────────────────────────────────────────────────────────────── */
const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['300', '400'],
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600'],
})

/* ─── Metadata ───────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: SITE.meta.title,
  description: SITE.meta.description,
  metadataBase: new URL('https://yourbusinessdomain.co.nz'), // Replace with real domain
  openGraph: {
    title: SITE.meta.title,
    description: SITE.meta.description,
    siteName: SITE.name,
    locale: 'en_NZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.meta.title,
    description: SITE.meta.description,
  },
  robots: {
    index: true,
    follow: true,
  },
}

/* ─── Root layout ────────────────────────────────────────────────────────── */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-NZ" className={`${fraunces.variable} ${outfit.variable}`}>
      <body>
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  )
}
