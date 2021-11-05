import { GetServerSidePropsContext } from 'next'
import { DefaultSession, Session } from 'next-auth'
import { getSession } from 'next-auth/client'

export type MySession = {
  id: number
} & Pick<DefaultSession, 'expires' | 'user'>

async function protectedRoutes(
  context: GetServerSidePropsContext,
  session?: Session | null
) {
  if (!session) session = await getSession(context)

  if (!session?.user?.id) {
    context.res.writeHead(302, {
      Location: `/signin?callbackUrl=${context.resolvedUrl}`
    })
    context.res.end()
  }

  return session
}

export default protectedRoutes
