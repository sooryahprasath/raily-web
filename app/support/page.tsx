import { MdxLayout } from '@/components/MdxLayout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Support — Raily',
}

const faqs = [
  {
    q: 'How do I add a journey?',
    a: 'Copy your IRCTC booking confirmation SMS to your clipboard, then open Raily. The app detects the PNR automatically and prompts you to save it. Alternatively, tap the + button on the Home screen to enter a PNR manually.',
  },
  {
    q: "Why isn't my train showing live status?",
    a: 'Live status is available only once the train departs. If your journey is more than a day away, check back on the day of travel. Some trains on less common routes may not have real-time data.',
  },
  {
    q: 'How do I delete my account?',
    a: 'Go to Profile → Settings → Account → Delete Account in the app, or visit raily.in/delete-account for instructions.',
  },
]

export default function SupportPage() {
  return (
    <MdxLayout>
      <h1>Support</h1>
      <p>
        Email us at{' '}
        <a href="mailto:hello@raily.in">hello@raily.in</a>
        {' '}— we respond within 48 hours.
      </p>

      <h2>Frequently asked questions</h2>
      {faqs.map(({ q, a }) => (
        <div key={q}>
          <h3>{q}</h3>
          <p>{a}</p>
        </div>
      ))}
    </MdxLayout>
  )
}
