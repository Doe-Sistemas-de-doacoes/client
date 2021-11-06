import { useState } from 'react'
import { Lock, User as UserIcon } from 'react-feather'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import { AxiosError } from 'axios'

import api from 'services/api'
import { UserProps } from 'services/user'
import handlerError from 'utils/handle-error'
import { Form, FormError, FormLoading } from 'components/Form'
import { editUserValidate, FieldErrors } from 'utils/validations'
import { useToast } from 'hooks/use-toast'
import Address from 'components/Address'
import Button from 'components/Button'
import Input from 'components/Input'
import Page from 'templates/Page'

import * as S from './styles'

const MyAccount = (user: UserProps) => {
  const [session] = useSession()
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
        session.user = {
          ...session?.user,
          name: data.name
        }
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
    <Page header footer>
      <S.Wrapper>
        <h3>Minha conta</h3>
        <S.Main>
          <Form onSubmit={handleSubmit}>
            <S.Section>
              <S.Heading>Dados pessoais</S.Heading>
              <Input
                name="name"
                label="Nome"
                type="text"
                placeholder="Ex: João Silva"
                error={fieldError?.name}
                value={values.name}
                onInputChange={(v) => handleInput('name', v)}
                disabled={loading}
                icon={<UserIcon />}
              />
            </S.Section>

            <S.Section>
              <S.Heading>Alterar senha</S.Heading>
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
            </S.Section>

            {!!formError && <FormError>{formError}</FormError>}

            <Button
              type="submit"
              disabled={
                loading || (user.name === values.name && !values.password)
              }
            >
              {loading ? <FormLoading /> : <span>SALVAR</span>}
            </Button>
          </Form>

          <S.Section>
            <S.Heading>Endereço</S.Heading>
            <Address addresses={user.address} />
          </S.Section>
        </S.Main>
      </S.Wrapper>
    </Page>
  )
}

export default MyAccount
