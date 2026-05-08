import { MdxLayout } from '@/components/MdxLayout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Delete Account — Raily',
}

export default function DeleteAccountPage() {
  return (
    <MdxLayout>
      <h1>Delete your Raily account</h1>
      <p>
        You can delete your Raily account and all associated data at any time.
        Deletion is permanent and cannot be undone.
      </p>

      <h2>Option 1 — Delete in the app</h2>
      <ol>
        <li>Open Raily on your Android device.</li>
        <li>Tap <strong>Profile</strong> → <strong>Settings</strong>.</li>
        <li>Scroll to <strong>Account</strong> → <strong>Delete Account</strong>.</li>
        <li>Type <code>DELETE</code> to confirm.</li>
      </ol>
      <p>Your account will be deleted immediately.</p>

      <h2>Option 2 — Email request</h2>
      <p>
        If you cannot access the app, email{' '}
        <a href="mailto:hello@raily.in?subject=Account%20deletion%20request">
          hello@raily.in
        </a>{' '}
        with subject <strong>"Account deletion request"</strong> and include the email
        address registered to your Raily account.
      </p>
      <p>We will process your request within 30 days.</p>

      <h2>What gets deleted</h2>
      <ul>
        <li>Your profile and display name</li>
        <li>All saved journeys</li>
        <li>Travel statistics and achievements</li>
        <li>Leaderboard entry</li>
        <li>Authentication record (Google Sign-In link)</li>
      </ul>
      <p>
        Anonymous aggregate statistics (e.g. total app-wide kilometres) may persist
        as they are not linked to any individual user.
      </p>
    </MdxLayout>
  )
}
