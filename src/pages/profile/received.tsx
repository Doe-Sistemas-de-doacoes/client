import { GetServerSidePropsContext } from 'next'
import { AxiosError } from 'axios'

import { apiSSR } from 'services/api'
import Profile from 'templates/Profile'
import handlerError from 'utils/handle-error'
import protectedRoutes from 'utils/protected-routes'
import DonationList, { DonationListProps } from 'components/DonationList'
import { DonationProps } from 'components/DonationItem'
import { ErrorProps } from 'components/Error'
import { Pagination } from 'services/pagination'
import donationMapper from 'utils/mappers/DonationMapper'

type ProfileDonationProps = {
  user?: number
  error?: ErrorProps
} & Pick<DonationListProps, 'data'>

export default function ProfileDonation({ data, error }: ProfileDonationProps) {
  return (
    <Profile title="Minhas reservas" error={error}>
      <DonationList
        data={data}
        endpoint="/users/donations"
        empty="Você ainda não reservou nenhuma doação"
      />
    </Profile>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  const user = session?.user?.id ?? undefined
  const props: ProfileDonationProps = { user }

  try {
    const response = await apiSSR(context).get<Pagination<DonationProps[]>>(
      '/users/reservations',
      {
        params: {
          size: 12
        }
      }
    )
    props.data = donationMapper(response.data)
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
