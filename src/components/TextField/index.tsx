import { useState, InputHTMLAttributes } from 'react'

import * as S from './styles'

export type TextFieldOptions = {
  label: string
  value: string | number
}

export type TextFieldProps = {
  onInputChange?: (value: string) => void
  label?: string
  initialValue?: string
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  as?: React.ElementType
  disabled?: boolean
  options?: TextFieldOptions[]
  error?: string
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({
  icon,
  iconPosition,
  label,
  name,
  initialValue = '',
  error,
  options,
  disabled = false,
  onInputChange,
  as = 'input',
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInputChange && onInputChange(newValue)
  }

  return (
    <S.Wrapper disabled={disabled} error={!!error}>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.InputWrapper>
        {!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}
        <S.Input
          type="text"
          onChange={onChange}
          value={value}
          as={as}
          iconPosition={iconPosition || (icon ? 'left' : undefined)}
          disabled={disabled}
          name={name}
          {...(label ? { id: name } : {})}
          {...props}
        >
          {options?.map(({ value, label }) => (
            <S.Option value={value} key={value}>
              {label}
            </S.Option>
          ))}
        </S.Input>
      </S.InputWrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}

export default TextField
