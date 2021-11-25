import { GetServerSidePropsContext } from 'next'
import { AxiosError } from 'axios'

import { apiSSR } from 'services/api'
import Profile from 'templates/Profile'
import handlerError from 'utils/handle-error'
import protectedRoutes from 'utils/protected-routes'
import DonationList from 'components/DonationList'
import { DonationProps } from 'components/DonationItem'
import { ErrorProps } from 'components/Error'

type ProfileDonationProps = {
  donations?: DonationProps[]
  user?: number
  error?: ErrorProps
}

export default function ProfileDonation({
  donations,
  error
}: ProfileDonationProps) {
  return (
    <Profile title="Minhas reservas" error={error}>
      <DonationList byUser items={donations} />
    </Profile>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  const user = session?.user?.id ?? undefined
  const props: ProfileDonationProps = { user }

  try {
    const response = await apiSSR(context).get<DonationProps[]>(
      '/users/donations'
    )
    props.donations = response.data.filter(
      ({ receiver }) => receiver?.id === user
    )
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
