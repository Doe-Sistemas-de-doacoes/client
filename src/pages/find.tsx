import FindTemplate, { FindTemplateProps } from 'templates/Find'

import { GetServerSidePropsContext } from 'next'
import protectedRoutes from 'utils/protected-routes'
import { apiSSR } from 'services/api'
import { AxiosError } from 'axios'
import handlerError from 'utils/handle-error'
import { DonationItemProps } from 'components/DonationItem'

export default function FindPage(props: FindTemplateProps) {
  return <FindTemplate {...props} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  const props: FindTemplateProps = {}

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
