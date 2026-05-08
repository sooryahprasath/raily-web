import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://raily.in'),
  title: 'Raily — Track your Indian Railways journey',
  description: 'Indian Railways live train tracking, PNR status, and your personal travel passport. Free Android app.',
  openGraph: {
    title: 'Raily — Track your Indian Railways journey',
    description: 'Indian Railways live train tracking, PNR status, and your personal travel passport. Free Android app.',
    url: 'https://raily.in',
    siteName: 'Raily',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    locale: 'en_IN',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

function Nav() {
  return (
    <header>
      <nav className="site-nav">
        <a href="/" className="nav-logo">Raily</a>
        <ul className="nav-links">
          <li><a href="/#features">Features</a></li>
          <li><a href="/privacy">Privacy</a></li>
          <li><a href="/support">Support</a></li>
        </ul>
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-links">
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/disclaimer">Disclaimer</a>
          <a href="/delete-account">Delete Account</a>
          <a href="/support">Support</a>
          <a href="mailto:hello@raily.in">hello@raily.in</a>
        </div>
        <p className="footer-copy">
          © {new Date().getFullYear()} Sooryah Prasath. Raily is not affiliated with Indian Railways or IRCTC.
        </p>
      </div>
    </footer>
  )
}
