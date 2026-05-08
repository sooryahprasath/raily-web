import type { Metadata } from 'next'
import { DM_Serif_Display, DM_Sans } from 'next/font/google'
import './globals.css'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-dm-serif',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://raily.in'),
  title: 'Raily — Track your Indian Railways journey',
  description:
    'Indian Railways live train tracking, PNR status, and your personal travel passport. Free Android app.',
  openGraph: {
    title: 'Raily — Track your Indian Railways journey',
    description:
      'Indian Railways live train tracking, PNR status, and your personal travel passport. Free Android app.',
    url: 'https://raily.in',
    siteName: 'Raily',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    locale: 'en_IN',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${dmSans.variable}`}>
      <body className="bg-bg font-sans text-ivory">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
