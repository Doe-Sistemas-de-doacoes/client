import { Check, X } from 'react-feather'
import * as S from './styles'

export type ToastTypes = 'success' | 'error'

export type ToastProps = {
  type?: ToastTypes
  message: string
  hiding?: boolean
}

const Toast = ({ type = 'success', message }: ToastProps) => {
  const getIcon = (type: ToastTypes): React.ReactNode => {
    switch (type) {
      case 'success':
        return <Check />
      case 'error':
        return <X />
    }
  }

  return (
    <S.Wrapper>
      <S.IconWrapper type={type}>{getIcon(type)}</S.IconWrapper>
      <S.Content>
        <S.Message>{message}</S.Message>
      </S.Content>
    </S.Wrapper>
  )
}

export default Toast
