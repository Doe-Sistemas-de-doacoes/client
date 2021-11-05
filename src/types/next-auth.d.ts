// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from 'next-auth'

type SessionUser = {
  id?: number | undefined | null
  email?: string | undefined | null
  name?: string | undefined | null
}

type Erros = 'REFRESH_TOKEN_ERROR' | string

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user?: SessionUser
    token: string
    error?: Erros
  }

  interface JWT {
    token: string
    expiresAt?: number
    user?: SessionUser
    error?: Erros
  }

  interface DefaultJWT extends JWT {
    [key: string]: unknown
  }
}
