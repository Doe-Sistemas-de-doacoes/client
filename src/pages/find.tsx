import { AxiosError } from 'axios'
import { GetServerSidePropsContext } from 'next'

import { apiSSR } from 'services/api'
import { Pagination } from 'services/pagination'
import FindTemplate, { FindTemplateProps } from 'templates/Find'
import { DonationProps } from 'components/DonationItem'
import { AddressItemProps } from 'components/AddressItem'
import protectedRoutes from 'utils/protected-routes'
import handlerError from 'utils/handle-error'

export default function FindPage(props: FindTemplateProps) {
  return <FindTemplate {...props} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  const props: FindTemplateProps = {
    endpoint: '/donations'
  }

  try {
    const donations = await apiSSR(context).get<Pagination<DonationProps[]>>(
      '/donations',
      {
        params: {
          size: 12
        }
      }
    )
    const response = await apiSSR(context).get<AddressItemProps[]>('/address')
    props.data = donations.data
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
