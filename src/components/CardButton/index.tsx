import * as S from './styles'

export type CardButtonProps = {
  img: React.ReactNode
  title: string
  message: string
}

const CardButton = ({ img, title, message }: CardButtonProps) => (
  <S.Wrapper>
    {img}
    <S.Content>
      <S.Heading>{title}</S.Heading>
      <S.Message>{message}</S.Message>
    </S.Content>
  </S.Wrapper>
)

export default CardButton
