import { useEffect, useState } from 'react'
import { Plus } from 'react-feather'
import { AxiosError } from 'axios'

import api from 'services/api'
import Modal from 'components/Modal'
import Button from 'components/Button'
import TextField from 'components/TextField'
import handlerError from 'utils/handle-error'
import states from 'utils/states'
import AddressItem, { AddressItemProps } from 'components/AddressItem'
import { addressValidate, FieldErrors } from 'utils/validations'
import { AddressProps } from 'services/user'
import { FormError, FormLoading } from 'components/Form'
import { useToast } from 'hooks/use-toast'

import * as S from './styles'

export type AddressComponentProps = {
  pickable?: boolean
  appearance?: 'full' | 'compact'
  onChecked?: (address: AddressProps) => void
  disabled?: boolean
  value?: number
  items?: AddressItemProps[]
}

type ValuesProps = {
  id: number
  city: string
  neighborhood: string
  number: string
  state: string
  street: string
}

type Status = 'editing' | 'searching' | 'inserting'

const Address = ({
  onChecked,
  pickable,
  disabled = false,
  appearance = 'compact',
  value,
  items = []
}: AddressComponentProps) => {
  const [status, setStatus] = useState<Status>('searching')
  const [addresses, setAddresses] = useState<AddressItemProps[]>(items)
  const [checked, setChecked] = useState(value)

  const [loading, setLoading] = useState(false)
  const [formError, setFormError] = useState('')
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [values, setValues] = useState<ValuesProps>({
    id: 0,
    city: '',
    neighborhood: '',
    number: '',
    state: '',
    street: ''
  })

  useEffect(() => {
    setChecked(value)
  }, [value])

  const showToast = useToast()

  function handleInput(field: string, value: string) {
    setValues((s) => ({ ...s, [field]: value }))
  }

  async function handleDelete(address: AddressProps) {
    setLoading(true)
    const current = addresses.find((item) => item.id === address.id)
    current!.isDeleting = true

    try {
      await api.delete(`/address/${address.id}`)
      showToast({
        type: 'success',
        message: `Endereço removido com sucesso!`
      })

      setAddresses(addresses.filter((item) => item.id !== address.id))
    } catch (error) {
      showToast({
        type: 'error',
        message: handlerError(error as AxiosError)
      })
    } finally {
      current!.isDeleting = false
      setLoading(false)
    }
  }

  function handleEdit(address: AddressProps) {
    setValues({
      id: address.id,
      city: address.city,
      neighborhood: address.neighborhood,
      number: address.number,
      state: address.state,
      street: address.street
    })
    setStatus('editing')
  }

  const handleSubmit = async () => {
    setFormError('')

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id, ...fields } = values
    const errors = addressValidate(fields)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      return
    }

    setFieldError({})
    setLoading(true)

    try {
      const { id, ...params } = values

      if (status === 'inserting') {
        const response = await api.post('/address', {
          ...params,
          region: 'LESTE'
        })

        setAddresses([...addresses, response.data])
        showToast({
          type: 'success',
          message: 'Endereço adicionado com sucesso!'
        })
      } else {
        const response = await api.put(`/address/${id}`, {
          ...params,
          region: 'LESTE'
        })

        setAddresses([
          ...addresses.filter((address) => address.id !== id),
          response.data
        ])
        showToast({
          type: 'success',
          message: 'Endereço salvo com sucesso!'
        })
      }

      setStatus('searching')
    } catch (error) {
      setFormError(handlerError(error as AxiosError))
    } finally {
      setLoading(false)
    }
  }

  function handleCheck(address: AddressProps, checked: boolean) {
    if (!checked) return

    setChecked(address.id)
    if (onChecked) onChecked(address)
  }

  function onClose() {
    setStatus('searching')
    setValues({
      id: 0,
      city: '',
      neighborhood: '',
      number: '',
      state: '',
      street: ''
    })
  }

  return (
    <S.Wrapper appearance={appearance}>
      <S.ItemsWrapper>
        {addresses?.length ? (
          addresses.map((address) => (
            <AddressItem
              key={address.id}
              {...address}
              pickable={pickable}
              disabled={disabled}
              onChecked={(checked) => handleCheck(address, checked)}
              isChecked={checked === address.id}
              onDelete={() => handleDelete(address)}
              onEdit={() => handleEdit(address)}
            />
          ))
        ) : (
          <S.NotFound>
            <p>Nenhum endereço cadastrado!</p>
          </S.NotFound>
        )}
      </S.ItemsWrapper>

      <Button
        icon={<Plus />}
        appearance={appearance === 'full' ? 'solid' : 'outline'}
        disabled={disabled}
        onClick={() => {
          setStatus('inserting')
        }}
      >
        ADICIONAR
      </Button>

      <Modal
        title={status === 'editing' ? 'Endereço' : 'Novo endereço'}
        isOpen={status !== 'searching'}
        onClose={onClose}
        footer={
          <>
            <Button
              type="submit"
              color="gray"
              appearance="outline"
              disabled={loading}
              onClick={onClose}
            >
              CANCELAR
            </Button>

            <Button type="submit" disabled={loading} onClick={handleSubmit}>
              {loading ? (
                <FormLoading />
              ) : (
                <span>{status === 'inserting' ? 'ADICIONAR' : 'SALVAR'}</span>
              )}
            </Button>
          </>
        }
      >
        <S.Form>
          <TextField
            type="text"
            name="city"
            label="Cidade"
            placeholder="Cidade"
            value={values.city}
            error={fieldError?.city}
            onInputChange={(v) => handleInput('city', v)}
            disabled={loading}
          />

          <TextField
            name="state"
            label="Estado"
            type="state"
            as="select"
            options={states}
            placeholder="Estado"
            maxLength={2}
            value={values.state}
            error={fieldError?.state}
            onInputChange={(v) => handleInput('state', v)}
            disabled={loading}
          />

          <TextField
            type="text"
            label="Bairro"
            name="neighborhood"
            placeholder="Bairro"
            value={values.neighborhood}
            error={fieldError?.neighborhood}
            onInputChange={(v) => handleInput('neighborhood', v)}
            disabled={loading}
          />

          <TextField
            name="street"
            label="Rua"
            type="street"
            placeholder="Rua"
            value={values.street}
            error={fieldError?.street}
            onInputChange={(v) => handleInput('street', v)}
            disabled={loading}
          />

          <TextField
            name="number"
            type="number"
            label="Número"
            placeholder="Número"
            value={values.number}
            error={fieldError?.number}
            onInputChange={(v) => handleInput('number', v)}
            disabled={loading}
          />
          {!!formError && <FormError>{formError}</FormError>}
        </S.Form>
      </Modal>
    </S.Wrapper>
  )
}

export default Address
