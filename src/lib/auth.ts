import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/(auth)/auth/[...nextauth]/route'

export const getCurrentAdmin = async () => {
  const session = await getServerSession(authOptions)
  return session?.user
}
