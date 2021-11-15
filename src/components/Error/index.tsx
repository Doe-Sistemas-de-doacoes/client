import * as S from '../NotFound/styles'

export type ErrorProps = {
  title?: string
  message?: string
}

const Error = ({ title = 'Ops... algo deu errado !', message }: ErrorProps) => (
  <S.Wrapper>
    <img src="/img/error.svg" alt="Homem tocando um X vermelho gigante" />

    <S.Section>
      <h3>{title}</h3>
      <p>{message}</p>
    </S.Section>
  </S.Wrapper>
)

export default Error
