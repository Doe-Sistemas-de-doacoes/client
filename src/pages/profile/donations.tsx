import { GetServerSidePropsContext } from 'next'
import { AxiosError } from 'axios'

import { apiSSR } from 'services/api'
import Profile from 'templates/Profile'
import { ErrorProps } from 'components/Error'
import protectedRoutes from 'utils/protected-routes'
import handlerError from 'utils/handle-error'
import DonationList from 'components/DonationList'
import { DonationItemProps } from 'components/DonationItem'

type ProfileDonationProps = {
  donations?: DonationItemProps[]
  user?: number
  error?: ErrorProps
}

export default function ProfileDonation({
  donations,
  error
}: ProfileDonationProps) {
  return (
    <Profile title="Minhas doações" error={error}>
      <DonationList donations={donations} />
    </Profile>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  const props: ProfileDonationProps = {
    user: session?.user?.id ?? undefined
  }

  try {
    const response = await apiSSR(context).get<DonationItemProps[]>(
      '/donations'
    )
    props.donations = response.data
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
