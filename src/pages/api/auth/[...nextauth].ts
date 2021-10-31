import axios, { AxiosError } from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth, { NextAuthOptions, Session, User } from 'next-auth'
import { JWT } from 'next-auth/jwt'
import Providers from 'next-auth/providers'
import handlerError from 'utils/handle-error'

type SignInResponse = {
  id: number
  user: string
  name: string
  token: string
}

const options: NextAuthOptions = {
  pages: {
    signIn: '/signin'
  },
  providers: [
    Providers.Credentials({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text ', placeholder: 'username' },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'a-really-long-password'
        }
      },
      authorize: async ({ username, password }) => {
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
              jwt: data.token
            }
          }

          return null
        } catch (error) {
          throw new Error(handlerError(error as AxiosError))
        }
      }
    })
  ],
  session: {
    jwt: true
  },
  callbacks: {
    session: async (session: Session, user: User) => {
      session.jwt = user.jwt
      session.id = user.id

      return Promise.resolve(session)
    },
    jwt: async (token: JWT, user: User) => {
      if (user) {
        token.id = user.id
        token.email = user.email
        token.name = user.name
        token.jwt = user.jwt
      }
      return Promise.resolve(token)
    }
  }
}

export default (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options)
