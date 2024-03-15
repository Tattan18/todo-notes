import NextAuth from 'next-auth'
import GitHub from 'next-auth/providers/github'

import { authConfig } from '../auth.config'

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST }
} = NextAuth({
  ...authConfig,
  providers: [GitHub]
})
