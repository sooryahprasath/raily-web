import Link from 'next/link'

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-serif text-lg italic text-ivory hover:text-ivory/80 transition-colors"
        >
          Raily
        </Link>
        <div className="flex items-center gap-7">
          {[
            { href: '/#features', label: 'Features' },
            { href: '/privacy', label: 'Privacy' },
            { href: '/support', label: 'Support' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-xs font-medium uppercase tracking-widest text-subtle hover:text-muted transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}
