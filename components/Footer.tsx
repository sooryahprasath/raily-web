import Link from 'next/link'

const links = [
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
  { href: '/disclaimer', label: 'Disclaimer' },
  { href: '/delete-account', label: 'Delete Account' },
  { href: '/support', label: 'Support' },
]

export function Footer() {
  return (
    <footer className="border-t border-border mt-24 px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-wrap gap-6 mb-6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-xs font-light text-subtle hover:text-muted tracking-wide transition-colors"
            >
              {label}
            </Link>
          ))}
          <a
            href="mailto:hello@raily.in"
            className="text-xs font-light text-subtle hover:text-muted tracking-wide transition-colors"
          >
            hello@raily.in
          </a>
        </div>
        <p className="text-xs font-light text-[#2a2a2a] leading-relaxed">
          © {new Date().getFullYear()} Sooryah Prasath. Raily is not affiliated with Indian Railways or IRCTC.
        </p>
      </div>
    </footer>
  )
}
