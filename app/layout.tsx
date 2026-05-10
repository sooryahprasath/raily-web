import type { Metadata } from 'next'
import './globals.css'
import ThemeToggle from './components/ThemeToggle'
import NavLinks from './components/NavLinks'

export const metadata: Metadata = {
  metadataBase: new URL('https://raily.in'),
  icons: {
    icon: '/favicon.png',
    apple: '/icon.png',
  },
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;1,9..144,400;1,9..144,500&family=Geist:wght@300;400;500;600;700&family=Geist+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('raily_theme');var t=s||(window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark');document.documentElement.dataset.theme=t;}catch(e){}})();`,
          }}
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
        <a href="/" className="nav-logo">
          <img src="/icon.png" alt="Raily" width={32} height={32} style={{ borderRadius: 8 }} />
          <span>Raily</span>
        </a>
        <NavLinks />
        <ThemeToggle />
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
          © {new Date().getFullYear()} Raily. Not affiliated with Indian Railways or IRCTC.
        </p>
      </div>
    </footer>
  )
}
