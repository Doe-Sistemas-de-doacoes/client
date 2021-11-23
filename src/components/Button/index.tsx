import { FormLoading } from 'components/Form'
import { forwardRef, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import { Colors } from 'styles/theme'

import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large'
  appearance?: 'solid' | 'outline'
  fullWidth?: boolean
  color?: Colors
  minimal?: boolean
  disabled?: boolean | undefined
  loading?: boolean
  icon?: JSX.Element
  as?: React.ElementType
} & ButtonTypes

const Button: React.ForwardRefRenderFunction<S.WrapperProps, ButtonProps> = (
  {
    icon,
    loading,
    children,
    color = 'primary',
    size = 'medium',
    appearance = 'solid',
    fullWidth = false,
    ...props
  },
  ref
) => (
  <S.Wrapper
    size={size}
    fullWidth={fullWidth}
    hasIcon={!!icon}
    appearance={appearance}
    color={color}
    ref={ref}
    {...props}
  >
    {loading ? (
      <FormLoading />
    ) : (
      <>
        {icon}
        {!!children && <span>{children}</span>}
      </>
    )}
  </S.Wrapper>
)

export default forwardRef(Button)
