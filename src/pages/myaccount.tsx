import { GetServerSidePropsContext } from 'next'

import protectedRoutes from 'utils/protected-routes'
import MyAccount from 'templates/MyAccount'
import { apiSSR } from 'services/api'
import { UserProps } from 'services/user'

export default function Index(props: UserProps) {
  return <MyAccount {...props} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  let user: UserProps | Record<string, unknown> = {}

  if (session?.user?.id) {
    await apiSSR(context)
      .get<UserProps>('/users')
      .then((response) => (user = response.data))
  }

  return {
    props: {
      session,
      ...user
    }
  }
}
