import { AxiosError } from 'axios'
import { GetServerSidePropsContext } from 'next'

import { apiSSR } from 'services/api'
import { AddressItemProps } from 'components/AddressItem'
import Donation, { DonationPageProps } from 'templates/Donation'
import protectedRoutes from 'utils/protected-routes'
import handlerError from 'utils/handle-error'

export default function DonationPage(props: DonationPageProps) {
  return <Donation {...props} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  const props: DonationPageProps = {}

  try {
    const response = await apiSSR(context).get<AddressItemProps[]>('/address')
    props.address = response.data
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
