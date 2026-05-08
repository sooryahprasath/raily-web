import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Support — Raily' }

const faqs = [
  {
    q: 'How do I add a journey?',
    a: 'Copy your IRCTC booking confirmation SMS to clipboard, then open Raily. The app detects the PNR automatically and prompts you to save it. Or tap + on the Home screen to enter a PNR manually.',
  },
  {
    q: "Why isn't my train showing live status?",
    a: 'Live status is available once the train departs. If your journey is more than a day away, check back on the day of travel. Some trains on less common routes may not have real-time data.',
  },
  {
    q: 'How do I delete my account?',
    a: 'Go to Profile → Settings → Account → Delete Account in the app, or visit raily.in/delete-account for instructions.',
  },
]

export default function SupportPage() {
  return (
    <div className="page-wrapper">
      <h1>Support</h1>
      <p>
        Email <a href="mailto:hello@raily.in">hello@raily.in</a> — we respond within 48 hours.
      </p>

      <h2>Frequently asked questions</h2>
      {faqs.map(({ q, a }) => (
        <div className="faq-item" key={q}>
          <p className="faq-q">{q}</p>
          <p className="faq-a">{a}</p>
        </div>
      ))}
    </div>
  )
}
