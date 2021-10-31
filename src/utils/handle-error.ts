import { AxiosError } from 'axios'

const handlerError = (error: string | AxiosError): string => {
  if (typeof error === 'string') return error

  if (error?.response?.data?.error) return error?.response?.data?.error

  if (typeof error?.response?.data === 'string') return error?.response?.data

  console.log('Error desconhecido:', error)

  return 'Erro desconhecido'
}

export default handlerError
