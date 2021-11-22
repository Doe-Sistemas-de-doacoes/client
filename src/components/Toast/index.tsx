import Button, { ButtonProps } from 'components/Button'
import { Check, Info, X } from 'react-feather'

import * as S from './styles'

export type ToastTypes = 'success' | 'error' | 'informative'

export type ToastAction = 'confirm'

export type ToastProps = {
  type?: ToastTypes
  title?: string
  message: string
  hiding?: boolean
  action?: {
    type?: ToastAction
    primary?: ButtonProps
    cancel?: ButtonProps
  }
  onConfirm?: () => void
  onCancel?: () => void
}

const Toast = ({
  type = 'success',
  title,
  message,
  hiding,
  action,
  onConfirm,
  onCancel
}: ToastProps) => {
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
      <S.IconWrapper
        size={!!title || !!action ? 'large' : 'normal'}
        type={type}
      >
        {getIcon(type)}
      </S.IconWrapper>
      <S.Content>
        {title && <S.Title>{title}</S.Title>}
        <S.Message>{message}</S.Message>

        <S.Action>
          {(action?.cancel || action?.type === 'confirm') && (
            <Button
              size="small"
              color="gray"
              {...action?.cancel}
              onClick={onCancel}
            >
              CANCELAR
            </Button>
          )}

          {(action?.primary || action?.type === 'confirm') && (
            <Button size="small" {...action?.primary} onClick={onConfirm}>
              CONFIRMAR
            </Button>
          )}
        </S.Action>
      </S.Content>
    </S.Wrapper>
  )
}

export default Toast
