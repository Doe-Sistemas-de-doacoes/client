import { useState } from 'react'
import { useSession } from 'next-auth/client'
import { AxiosError } from 'axios'

import api from 'services/api'
import { useToast } from 'hooks/use-toast'
import handlerError from 'utils/handle-error'
import { addressValidate, FieldErrors } from 'utils/validations'
import AddressItem, { AddressItemProps } from 'components/AddressItem'
import { FormError, FormLoading } from 'components/Form'
import Button from 'components/Button'
import Input from 'components/Input'

import * as S from './styles'
import { AddressProps } from 'services/user'

export type AddressComponentProps = {
  items: AddressProps[]
}

type ValuesProps = {
  city: string
  neighborhood: string
  number: number
  state: string
  street: string
}

const Address = ({ items }: AddressComponentProps) => {
  const [session] = useSession()
  const [inserting, setInserting] = useState(false)
  const [addresses, setAddresses] = useState<AddressItemProps[]>(items)

  const [loading, setLoading] = useState(false)
  const [formError, setFormError] = useState('')
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [values, setValues] = useState<ValuesProps>({
    city: '',
    neighborhood: '',
    number: 0,
    state: '',
    street: ''
  })

  const showToast = useToast()

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const close = () => {
    setInserting(false)
    setValues({
      city: '',
      neighborhood: '',
      number: 0,
      state: '',
      street: ''
    })
  }

  const handleDeleted = (id: number) => {
    setAddresses(addresses.filter((address) => address.id !== id))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setFormError('')

    const errors = addressValidate(values)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      return
    }

    setFieldError({})
    setLoading(true)
    try {
      const response = await api.post('/address', {
        ...values,
        region: 'LESTE',
        userId: session?.user?.id
      })

      setInserting(false)
      setAddresses([...addresses, response.data])
      showToast({
        type: 'success',
        message: 'Endereço adicionado com sucesso!'
      })
    } catch (error) {
      setFormError(handlerError(error as AxiosError))
    } finally {
      setLoading(false)
    }
  }

  return (
    <S.Wrapper>
      <S.ItemsWrapper>
        {addresses?.length
          ? addresses.map(({ id, ...address }) => (
              <AddressItem
                key={id}
                id={id}
                {...address}
                onDeleted={() => handleDeleted(id)}
              />
            ))
          : !inserting && (
              <S.NotFound>
                <p>Nenhum endereço cadastrado!</p>
              </S.NotFound>
            )}
      </S.ItemsWrapper>
      {inserting ? (
        <S.Form onSubmit={handleSubmit}>
          <S.Heading>Novo endereço</S.Heading>

          <S.FormBody>
            <Input
              name="city"
              label="Cidade"
              type="text"
              placeholder=""
              error={fieldError?.city}
              onInputChange={(v) => handleInput('city', v)}
              disabled={loading}
            />

            <Input
              name="state"
              label="Estado"
              type="state"
              placeholder=""
              error={fieldError?.state}
              onInputChange={(v) => handleInput('state', v)}
              disabled={loading}
            />

            <Input
              name="neighborhood"
              label="Bairro"
              type="text"
              placeholder=""
              error={fieldError?.neighborhood}
              onInputChange={(v) => handleInput('neighborhood', v)}
              disabled={loading}
            />

            <Input
              name="street"
              label="Rua"
              type="street"
              placeholder=""
              error={fieldError?.street}
              onInputChange={(v) => handleInput('street', v)}
              disabled={loading}
            />

            <Input
              name="number"
              label="Número"
              type="text"
              placeholder=""
              error={fieldError?.number}
              onInputChange={(v) => handleInput('number', v)}
              disabled={loading}
            />
          </S.FormBody>

          {!!formError && <FormError>{formError}</FormError>}

          <S.Footer>
            <Button
              type="submit"
              size="small"
              color="gray"
              appearance="outline"
              onClick={close}
            >
              CANCELAR
            </Button>

            <Button type="submit" size="small">
              {loading ? <FormLoading /> : <span>ADICIONAR</span>}
            </Button>
          </S.Footer>
        </S.Form>
      ) : (
        <Button size="small" onClick={() => setInserting(true)}>
          NOVO
        </Button>
      )}
    </S.Wrapper>
  )
}

export default Address
