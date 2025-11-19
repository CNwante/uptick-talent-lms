/**
 * Main Landing/Root Page
 * Redirects users to the dashboard on load
 */

import { redirect } from 'next/navigation'

export default function HomePage() {
  // Automatically redirect to dashboard
  redirect('/dashboard')
}
