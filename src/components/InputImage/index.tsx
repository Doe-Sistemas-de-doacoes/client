import { InputHTMLAttributes, useEffect, useState } from 'react'
import { Upload } from 'react-feather'

import * as S from './styles'

export type InputImageProps = {
  name: string
  message: string
  accept?: string
  onChange?: (value: unknown) => void
  disabled?: boolean
} & InputHTMLAttributes<HTMLInputElement>

const InputImage = ({
  message,
  name,
  accept,
  disabled,
  onChange,
  value,
  ...props
}: InputImageProps) => {
  const [image, setImage] = useState<unknown>()

  useEffect(() => {
    setImage(value ? URL.createObjectURL(value) : '')
  }, [value])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event?.currentTarget?.files?.length) {
      if (onChange) onChange(event?.currentTarget?.files[0])
      setImage(value ? URL.createObjectURL(value) : '')
    } else {
      setImage('')
      if (onChange) onChange('')
    }
  }

  return (
    <div>
      <S.Label htmlFor={name}>
        <S.Wrapper withBackground={!image}>
          {image ? (
            <S.Image src={image as string} />
          ) : (
            <S.Info>
              <Upload size={32} />
              <p>{message}</p>
            </S.Info>
          )}
        </S.Wrapper>
      </S.Label>
      <S.Input
        type="file"
        id={name}
        name={name}
        onChange={handleChange}
        disabled={disabled}
        accept={accept}
        {...props}
      />
    </div>
  )
}

export default InputImage
