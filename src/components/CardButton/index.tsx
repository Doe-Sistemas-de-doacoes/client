import { forwardRef, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

import * as S from './styles'

type CardButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type CardButtonProps = {
  src?: string
  alt?: string
  title?: string
  message?: string
  size?: 'small' | 'medium'
  children?: React.ReactNode
  asCheckbox?: boolean
  isChecked?: boolean
  as?: React.ElementType
} & CardButtonTypes

const CardButton: React.ForwardRefRenderFunction<
  CardButtonProps,
  CardButtonProps
> = (
  {
    src,
    alt,
    title,
    asCheckbox,
    isChecked,
    message,
    size = 'medium',
    children,
    ...props
  },
  ref
) => {
  return (
    <S.Wrapper
      {...props}
      {...(asCheckbox
        ? {
            role: 'checkbox',
            'aria-checked': isChecked
          }
        : {})}
      ref={ref}
    >
      {src && <S.Image src={src} alt={alt} size={size} />}
      <S.Content>
        {title && (size === 'medium' ? <h3>{title}</h3> : <h4>{title}</h4>)}
        {message && <S.Message>{message}</S.Message>}
      </S.Content>
      {children}
    </S.Wrapper>
  )
}

export default forwardRef(CardButton)
