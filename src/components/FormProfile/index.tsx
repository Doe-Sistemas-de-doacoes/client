import { useState } from 'react'
import { Lock, User as UserIcon } from 'react-feather'
import { useRouter } from 'next/router'
import { AxiosError } from 'axios'

import api from 'services/api'
import handlerError from 'utils/handle-error'
import HeadingSection from 'components/HeadingSection'
import Button from 'components/Button'
import { UserProps } from 'services/user'
import { FormError, FormLoading } from 'components/Form'
import { editUserValidate, FieldErrors } from 'utils/validations'
import { useSession } from 'hooks/use-session'
import { useToast } from 'hooks/use-toast'

import * as S from './styles'
import TextField from 'components/TextField'

const FormProfile = (user: UserProps) => {
  const { session, setSession } = useSession()

  const showToast = useToast()
  const { push } = useRouter()

  const [loading, setLoading] = useState(false)
  const [formError, setFormError] = useState('')
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [values, setValues] = useState({
    name: user.name,
    password: '',
    confirm_password: ''
  })

  if (!user) {
    showToast({ type: 'error', message: 'Usuário não encontrado' })
    push('/')
  }

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setFormError('')

    const errors = editUserValidate(values)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      return
    }

    setFieldError({})
    setLoading(true)

    try {
      const { data } = await api.put<UserProps>('/users', {
        name: values.name,
        password: values.password
      })

      if (session) {
        setSession({
          ...session,
          user: {
            ...session?.user,
            name: data.name,
            email: data.user
          }
        })
      }

      setValues({
        name: data.name,
        password: '',
        confirm_password: ''
      })

      showToast({ type: 'success', message: 'Alterações salvas com sucesso' })
    } catch (error) {
      setFormError(handlerError(error as AxiosError))
    } finally {
      setLoading(false)
    }
  }

  return (
    <S.Form onSubmit={handleSubmit}>
      <h4>Meus Dados</h4>

      <S.Section>
        <HeadingSection>Dados pessoais</HeadingSection>
        <TextField
          name="name"
          label="Nome"
          placeholder="Ex: João Silva"
          initialValue={values.name}
          error={fieldError?.name}
          onInputChange={(v) => handleInput('name', v)}
          disabled={loading}
          icon={<UserIcon />}
        />
      </S.Section>

      <S.Section>
        <HeadingSection>Alterar senha</HeadingSection>
        <TextField
          name="password"
          label="Nova senha"
          placeholder="Nova senha"
          type="password"
          value={values.password}
          error={fieldError?.password}
          onInputChange={(v) => handleInput('password', v)}
          disabled={loading}
          icon={<Lock />}
        />

        <TextField
          name="confirm_password"
          label="Confirmar senha"
          placeholder="Confirme a senha"
          type="password"
          value={values.confirm_password}
          error={fieldError?.confirm_password}
          onInputChange={(v) => handleInput('confirm_password', v)}
          disabled={loading}
          icon={<Lock />}
        />
      </S.Section>

      <S.Footer>
        {!!formError && <FormError>{formError}</FormError>}

        <Button
          type="submit"
          disabled={loading || (user.name === values.name && !values.password)}
        >
          {loading ? <FormLoading /> : <span>SALVAR</span>}
        </Button>
      </S.Footer>
    </S.Form>
  )
}

export default FormProfile
