import { useState } from 'react'
import { useRouter } from 'next/router'
import { AlertOctagon, Lock, Mail } from 'react-feather'

import { login } from 'services/AuthService'
import { FieldErrors, signInValidate } from 'utils/validations'
import { Form, FormError, FormLoading } from 'components/Form'
import Button from 'components/Button'
import Input from 'components/Input'

import * as S from './styles'

const FormSignIn = () => {
  const [formError, setFormError] = useState('')
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [values, setValues] = useState({ user: '', password: '' })
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    const errors = signInValidate(values)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      return
    }

    setLoading(true)
    setFieldError({})

    try {
      await login(values)
      router.push('/')
    } catch (error) {
      setFormError('Email ou senha incorreto!')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        name="user"
        type="email"
        label="Email"
        placeholder="Ex: joao.silva@email.com"
        error={fieldError?.user}
        onInputChange={(v) => handleInput('user', v)}
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

      <S.ForgotPassword>Esqueceu sua senha?</S.ForgotPassword>

      {!!formError && (
        <FormError>
          <AlertOctagon /> <p>{formError}</p>
        </FormError>
      )}

      <Button type="submit" fullWidth disabled={loading}>
        {loading ? <FormLoading /> : <span>ENTRAR</span>}
      </Button>
    </Form>
  )
}

export default FormSignIn
