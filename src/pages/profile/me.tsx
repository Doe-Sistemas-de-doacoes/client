import { GetServerSidePropsContext } from 'next'
import { AxiosError } from 'axios'

import Profile from 'templates/Profile'
import FormProfile from 'components/FormProfile'
import protectedRoutes from 'utils/protected-routes'
import handlerError from 'utils/handle-error'
import { ErrorProps } from 'components/Error'
import { UserProps } from 'services/user'
import { apiSSR } from 'services/api'

type MeProps = {
  user?: UserProps
  error?: ErrorProps
}

export default function Me({ user, error }: MeProps) {
  return (
    <Profile title="Meus dados" error={error}>
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

  return {
    props: {
      session,
      ...props
    }
  }
}
