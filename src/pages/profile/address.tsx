import { GetServerSidePropsContext } from 'next'
import { AxiosError } from 'axios'

import { apiSSR } from 'services/api'
import Profile from 'templates/Profile'
import { ErrorProps } from 'components/Error'
import protectedRoutes from 'utils/protected-routes'
import handlerError from 'utils/handle-error'
import { AddressItemProps } from 'components/AddressItem'
import Address from 'components/Address'

type AddressProps = {
  addresses?: AddressItemProps[]
  error?: ErrorProps
}

export default function Adresses({ addresses, error }: AddressProps) {
  return (
    <Profile title="Meus endereços" error={error}>
      <Address appearance="full" items={addresses}></Address>
    </Profile>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  const props: AddressProps = {}

  try {
    const response = await apiSSR(context).get<AddressItemProps[]>('/address')
    props.addresses = response.data
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
