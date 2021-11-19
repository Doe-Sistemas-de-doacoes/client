import { AxiosError } from 'axios'
import { GetServerSidePropsContext } from 'next'

import { apiSSR } from 'services/api'
import Home, { HomeProps } from 'templates/Home'
import handlerError from 'utils/handle-error'

export default function Index(props: HomeProps) {
  return <Home {...props} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const response = await apiSSR(context).get<BigInt>('/donations/count')

    return {
      props: {
        connections: response.data
      }
    }
  } catch (error) {
    return {
      props: {
        error: {
          message: handlerError(error as AxiosError)
        }
      }
    }
  }
}
