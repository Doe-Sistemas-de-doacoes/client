import { GetServerSidePropsContext } from 'next'
import { AxiosError } from 'axios'

import { apiSSR } from 'services/api'
import { UserProps } from 'services/user'
import Profile from 'templates/Profile'
import FormProfile from 'components/FormProfile'
import { ErrorProps } from 'components/Error'
import protectedRoutes from 'utils/protected-routes'
import handlerError from 'utils/handle-error'

type MeProps = {
  user?: UserProps
  error?: ErrorProps
}

export default function Me({ user, error }: MeProps) {
  return (
    <Profile error={error}>
      <FormProfile {...user!} />
    </Profile>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  const props: MeProps = {}

  try {
    const response = await apiSSR(context).get<UserProps>('/users')
    props.user = response.data
  } catch (error) {
    props.error = {
      message: handlerError(error as AxiosError)
    }
  }

  console.log('Me SSR', props)

  return {
    props: {
      session,
      ...props
    }
  }
}
