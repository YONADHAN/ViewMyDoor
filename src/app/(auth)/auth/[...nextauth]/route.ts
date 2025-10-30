import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { connectToDatabase } from '@/lib/db/mongoose/connectToDatabase'
import Admin from '@/lib/db/models/admin'
import type { NextAuthOptions } from 'next-auth'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // ✅ handle possibly undefined credentials
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Email and password are required')
        }

        await connectToDatabase()

        const user = await Admin.findOne({ email: credentials.email }).lean()

        if (!user) throw new Error('User not found')

        // ✅ (Optional) Add password hashing in real apps
        if (user.password !== credentials.password) {
          throw new Error('Invalid credentials')
        }

        // ✅ Return a NextAuth-compatible user object
        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          role: user.role,
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role as string
      }
      return session
    },
  },

  pages: {
    signIn: '/login', // optional
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
