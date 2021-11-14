import { AxiosError } from 'axios'

const handlerError = (error: string | AxiosError): string => {
  console.log('handlerError:', error)

  if (error) {
    if (typeof error === 'string') return error

    if (error?.response?.data?.error) return error?.response?.data?.error

    if (typeof error?.response?.data === 'string') return error?.response?.data

    if (error?.response?.status) {
      switch (error?.response?.status) {
        case 503:
          return 'Estamos enfrentando problemas em nesso servidor, tente novamente em breve'
        case 401:
          return 'Você não está conectado, entre em uma conta para prosseguir'
        case 403:
          return 'Você não possuir acesso a essa opção'
        case 504:
          return 'Não foi possivel se comunicar, verifique sua conexão'
      }
    }
  }

  return 'Erro desconhecido'
}

export default handlerError
