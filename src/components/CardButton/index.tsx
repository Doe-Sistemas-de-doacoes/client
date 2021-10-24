import * as S from './styles'

export type CardButtonProps = {
  src?: string
  alt?: string
  title?: string
  message?: string
  size?: 'small' | 'medium'
}

const CardButton = ({
  src,
  alt,
  title,
  message,
  size = 'medium'
}: CardButtonProps) => (
  <S.Wrapper>
    {src && <S.Image src={src} alt={alt} size={size} />}
    <S.Content>
      {title && (size === 'medium' ? <h3>{title}</h3> : <h4>{title}</h4>)}
      {message && <S.Message>{message}</S.Message>}
    </S.Content>
  </S.Wrapper>
)

export default CardButton
