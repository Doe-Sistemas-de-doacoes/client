import { useState } from 'react'
import { signIn } from 'next-auth/client'
import { useRouter } from 'next/router'
import { AlertOctagon, Lock, Mail } from 'react-feather'

import { FieldErrors, signInValidate } from 'utils/validations'
import { FormError, FormLoading } from 'components/Form'
import Button from 'components/Button'
import Input from 'components/Input'

import * as S from './styles'

const FormSignIn = () => {
  const [formError, setFormError] = useState('')
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [values, setValues] = useState({ username: '', password: '' })
  const [loading, setLoading] = useState(false)
  const routes = useRouter()
  const { push, query } = routes

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)

    const errors = signInValidate(values)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      setLoading(false)
      return
    }

    setFieldError({})

    // sign in
    const result = await signIn('credentials', {
      ...values,
      redirect: false,
      callbackUrl: `${window.location.origin}${query?.callbackUrl || ''}`
    })

    setLoading(false)
    if (result?.error) {
      setFormError(result?.error)
      return
    }

    if (result?.url) {
      return push(result?.url)
    }

    setFormError('Erro ao fazer login')
  }

  return (
    <S.Wrapper onSubmit={handleSubmit}>
      <Input
        name="username"
        type="email"
        label="Email"
        placeholder="Ex: joao.silva@email.com"
        error={fieldError?.user}
        onInputChange={(v) => handleInput('username', v)}
        disabled={loading}
        icon={<Mail />}
      />
      <Input
        name="password"
        label="Senha"
        placeholder="****"
        disabled={loading}
        error={fieldError?.password}
        onInputChange={(v) => handleInput('password', v)}
        type="password"
        icon={<Lock />}
      />

      <S.ForgotPassword href="#">Esqueceu a sua senha?</S.ForgotPassword>

      {!!formError && (
        <FormError>
          <AlertOctagon /> <p>{formError}</p>
        </FormError>
      )}

      <Button type="submit" fullWidth disabled={loading}>
        {loading ? <FormLoading /> : <span>ENTRAR</span>}
      </Button>
    </S.Wrapper>
  )
}

export default FormSignIn
