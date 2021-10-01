import { useState } from 'react'
import { useRouter } from 'next/router'
import { AlertOctagon, Lock, Mail, User } from 'react-feather'

import { createUser, UserCreateProps } from 'services/UserService'
import { FieldErrors, signUpValidate } from 'utils/validations'
import { Form, FormError, FormLoading } from 'components/Form'
import Button from 'components/Button'
import Input from 'components/Input'

const FormSignUp = () => {
  const [formError, setFormError] = useState('')
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [loading, setLoading] = useState(false)
  const [values, setValues] = useState<UserCreateProps>({
    name: '',
    user: '',
    password: ''
  })

  const router = useRouter()

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setFormError('')
    const errors = signUpValidate(values)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      return
    }

    setLoading(true)
    setFieldError({})

    try {
      await createUser(values)
      router.push('/')
    } catch (error) {
      setFormError('Não foi possivel criar o usuario')
      setLoading(false)
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        name="name"
        label="Nome"
        type="text"
        placeholder="Ex: João Silva"
        error={fieldError?.name}
        onInputChange={(v) => handleInput('name', v)}
        disabled={loading}
        icon={<User />}
      />

      <Input
        name="email"
        label="Email"
        error={fieldError?.user}
        onInputChange={(v) => handleInput('user', v)}
        disabled={loading}
        placeholder="Ex: joao.silva@email.com"
        type="email"
        icon={<Mail />}
      />

      <Input
        name="password"
        label="Senha"
        placeholder="****"
        error={fieldError?.password}
        onInputChange={(v) => handleInput('password', v)}
        disabled={loading}
        type="password"
        icon={<Lock />}
      />

      <Input
        name="confirm_password"
        label="Confirmar senha"
        error={fieldError?.confirm_password}
        onInputChange={(v) => handleInput('confirm_password', v)}
        placeholder="****"
        type="password"
        disabled={loading}
        icon={<Lock />}
      />

      {!!formError && (
        <FormError>
          <AlertOctagon /> <p>{formError}</p>
        </FormError>
      )}

      <Button type="submit" fullWidth disabled={loading}>
        {loading ? <FormLoading /> : <span>CRIAR CONTA</span>}
      </Button>
    </Form>
  )
}

export default FormSignUp
