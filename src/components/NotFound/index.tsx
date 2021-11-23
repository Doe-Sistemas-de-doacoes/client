import Button from 'components/Button'
import { useRouter } from 'next/router'

import * as S from './styles'

export type NotFoundProps = {
  title?: string
  message?: string
  backToHome?: boolean
}

const NotFound = ({
  title = 'Pagina não encontrada!',
  message = 'Oops... não foi possivel encontrada essa pagina'
}: NotFoundProps) => {
  const router = useRouter()

  return (
    <S.Wrapper>
      <img
        src="/img/not-found.svg"
        alt="Número 404 com uma flor dentro do numero zero, com uma paisagem de montanhas de fundo"
      />

      <S.Section>
        <h3>{title}</h3>
        <p>{message}</p>

        <Button appearance="outline" onClick={() => router.push('/')}>
          Voltar para o início
        </Button>
      </S.Section>
    </S.Wrapper>
  )
}

export default NotFound
