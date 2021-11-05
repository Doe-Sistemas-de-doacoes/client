import { AxiosError } from 'axios'

const handlerError = (error: string | AxiosError): string => {
  console.log('handlerError:', error)

  if (typeof error === 'string') return error

  if (error?.response?.data?.error) return error?.response?.data?.error

  if (typeof error?.response?.data === 'string') return error?.response?.data

  return 'Erro desconhecido'
}

export default handlerError
