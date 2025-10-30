'use client'

import { useSession, signOut } from 'next-auth/react'

export default function AdminDashboard() {
  const { data: session } = useSession()

  if (!session) return <p>Loading...</p>

  return (
    <div>
      <h1>Welcome, {session.user.name}</h1>
      <p>Email: {session.user.email}</p>
      <p>Role: {session.user.role}</p>
      <button onClick={() => signOut()}>Logout</button>
    </div>
  )
}
