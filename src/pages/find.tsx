import FindTemplate, { FindTemplateProps } from 'templates/Find'

import { GetServerSidePropsContext } from 'next'
import protectedRoutes from 'utils/protected-routes'
import { apiSSR } from 'services/api'
import { AxiosError } from 'axios'
import handlerError from 'utils/handle-error'
import { DonationProps } from 'components/DonationItem'

export default function FindPage(props: FindTemplateProps) {
  return <FindTemplate {...props} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  const props: FindTemplateProps = {}

  try {
    const response = await apiSSR(context).get<DonationProps[]>('/donations')
    props.items = response.data
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
