'use client'

import { usePathname } from 'next/navigation'

const links = [
  { href: '/#features', label: 'Features', match: '/' },
  { href: '/privacy', label: 'Privacy', match: '/privacy' },
  { href: '/support', label: 'Support', match: '/support' },
]

export default function NavLinks() {
  const pathname = usePathname()
  return (
    <ul className="nav-links">
      {links.map(({ href, label, match }) => (
        <li key={href}>
          <a href={href} className={pathname === match ? 'nav-link-active' : ''}>
            {label}
          </a>
        </li>
      ))}
    </ul>
  )
}
