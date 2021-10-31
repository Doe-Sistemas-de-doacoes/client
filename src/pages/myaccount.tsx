import { GetServerSidePropsContext } from 'next'

import protectedRoutes from 'utils/protected-routes'
import MyAccount from 'templates/MyAccount'

export default function Index() {
  return <MyAccount />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  return {
    props: {
      session
    }
  }
}
