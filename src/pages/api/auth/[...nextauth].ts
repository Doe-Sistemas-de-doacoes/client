import axios, { AxiosError } from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth, {
  NextAuthOptions,
  Session,
  JWT,
  DefaultJWT,
  Account
} from 'next-auth'
import Providers from 'next-auth/providers'

import handlerError from 'utils/handle-error'
import api from 'services/api'

type SignInResponse = {
  id: number
  user: string
  name: string
  token: string
}

type AuthProps = {
  username: string
  password: string
}

type AuthorizedProps = {
  id: number
  email: string
  name: string
  token: string
  expiresAt: number
}

async function refreshToken({ user, token, expiresAt }: JWT) {
  try {
    const response = await api.post<string>('/login/refreshToken')

    return {
      user,
      token: response.data,
      expiresAt: Date.now() * 600000
    }
  } catch (error) {
    return {
      token,
      user,
      expiresAt,
      error: 'REFRESH_TOKEN_ERROR'
    }
  }
}

const options: NextAuthOptions = {
  pages: {
    error: '/signin',
    signIn: '/signin'
  },
  providers: [
    Providers.Credentials({
      id: 'credentials',
      name: 'Credentials',
      credentials: {},
      authorize: async ({ username, password }: AuthProps) => {
        try {
          const { data } = await axios.post<SignInResponse>(
            `${process.env.NEXT_PUBLIC_API_URL}/login`,
            {
              username,
              password
            }
          )

          if (data) {
            return {
              id: data.id,
              email: data.user,
              name: data.name,
              token: data.token,
              expiresAt: Date.now() * 600000
            } as AuthorizedProps
          }

          return null
        } catch (error) {
          throw new Error(handlerError(error as AxiosError))
        }
      }
    })
  ],
  callbacks: {
    session: async (session: Session, token: DefaultJWT) => {
      session.user = token.user
      session.token = token.token
      session.error = token.error

      return Promise.resolve(session)
    },
    jwt: async (
      token: DefaultJWT,
      props?: AuthorizedProps,
      account?: Account
    ) => {
      if (account && props) {
        return Promise.resolve({
          token: props.token,
          expiresAt: props.expiresAt,
          user: {
            id: props.id,
            email: props.email,
            name: props.name
          }
        })
      }

      if (Date.now() < token.expiresAt!) return Promise.resolve(token)

      return await refreshToken(token)
    }
  }
}

export default (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options)
