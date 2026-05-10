'use client'

import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    const stored = localStorage.getItem('raily_theme') as 'dark' | 'light' | null
    const resolved = stored ?? (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')
    setTheme(resolved)
    document.documentElement.dataset.theme = resolved
  }, [])

  function toggle() {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.dataset.theme = next
    localStorage.setItem('raily_theme', next)
  }

  return (
    <button onClick={toggle} className="theme-toggle" aria-label="Toggle theme">
      {theme === 'dark' ? (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <circle cx="8" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.5"/>
          <line x1="8" y1="1" x2="8" y2="2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="8" y1="13.5" x2="8" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="1" y1="8" x2="2.5" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="13.5" y1="8" x2="15" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="2.93" y1="2.93" x2="4" y2="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="12" y1="12" x2="13.07" y2="13.07" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="13.07" y1="2.93" x2="12" y2="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="4" y1="12" x2="2.93" y2="13.07" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M13.5 9.5A6 6 0 0 1 6.5 2.5a6 6 0 1 0 7 7z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        </svg>
      )}
    </button>
  )
}
