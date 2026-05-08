import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Delete Account — Raily' }

export default function DeleteAccountPage() {
  return (
    <div className="page-wrapper">
      <h1>Delete your account</h1>

      <h2>Option 1 — Delete in the app</h2>
      <ol>
        <li>Open Raily on your Android device.</li>
        <li>Tap <strong>Profile</strong> → <strong>Settings</strong>.</li>
        <li>Scroll to <strong>Account</strong> → <strong>Delete Account</strong>.</li>
        <li>Type <code>DELETE</code> to confirm.</li>
      </ol>
      <p>Your account is deleted immediately.</p>

      <h2>Option 2 — Email request</h2>
      <p>
        Email <a href="mailto:hello@raily.in?subject=Account%20deletion%20request">hello@raily.in</a> with subject <strong>&quot;Account deletion request&quot;</strong> and the email address registered to your Raily account.
      </p>
      <p>We will process your request within 30 days.</p>

      <h2>What gets deleted</h2>
      <ul>
        <li>Your profile and display name</li>
        <li>All saved journeys</li>
        <li>Travel statistics and achievements</li>
        <li>Leaderboard entry</li>
        <li>Google Sign-In authentication link</li>
      </ul>
      <p>Anonymous aggregate statistics may persist as they are not linked to any individual user.</p>
    </div>
  )
}
