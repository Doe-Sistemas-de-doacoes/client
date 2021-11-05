import { GetServerSidePropsContext } from 'next'
import { getSession } from 'next-auth/client'
import Home, { HomeProps } from 'templates/Home'

export default function Index(props: HomeProps) {
  return <Home {...props} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context)

  return {
    props: {
      connections: 200,
      username: session?.user?.name
    } as HomeProps
  }
}
