import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.mdx',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0b0d12',
        ivory: '#f3ecdc',
        saffron: '#ff8a3d',
        spice: '#e23e57',
        cobalt: '#5aa9ff',
        border: '#1c1c1c',
        muted: '#555555',
        subtle: '#3a3a3a',
      },
      fontFamily: {
        serif: ['var(--font-dm-serif)', 'serif'],
        sans: ['var(--font-dm-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config
