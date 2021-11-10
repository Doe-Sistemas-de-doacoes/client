import { Check, Info, X } from 'react-feather'

import * as S from './styles'

export type ToastTypes = 'success' | 'error' | 'informative'

export type ToastProps = {
  type?: ToastTypes
  message: string
  hiding?: boolean
}

const Toast = ({ type = 'success', message, hiding }: ToastProps) => {
  const getIcon = (type: ToastTypes): React.ReactNode => {
    switch (type) {
      case 'success':
        return <Check role="img" aria-label="Icone de sucesso" />
      case 'error':
        return <X role="img" aria-label="Icone de error" />
      case 'informative':
        return <Info role="img" aria-label="Icone de informação" />
    }
  }

  return (
    <S.Wrapper hiding={hiding}>
      <S.IconWrapper type={type}>{getIcon(type)}</S.IconWrapper>
      <S.Content>
        <S.Message>{message}</S.Message>
      </S.Content>
    </S.Wrapper>
  )
}

export default Toast
