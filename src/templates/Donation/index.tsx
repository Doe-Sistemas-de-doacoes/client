import { useState } from 'react'
import { AxiosError } from 'axios'

import Page from 'templates/Page'
import Button from 'components/Button'
import CardButton from 'components/CardButton'
import TextField from 'components/TextField'
import Address from 'components/Address'
import HeadingSection from 'components/HeadingSection'
import api from 'services/api'
import useMedia from 'hooks/useMedia'
import handlerError from 'utils/handle-error'
import FinishedModal from 'components/FinishedModal'
import { useToast } from 'hooks/use-toast'
import donationsTypes from 'utils/donations-types'
import { donationValidate, FieldErrors } from 'utils/validations'
import { DonationItemProps } from 'components/DonationItem'
import { AddressItemProps } from 'components/AddressItem'
import { ErrorProps } from 'components/Error'
import { FormError, FormLoading } from 'components/Form'
import InputImage from 'components/InputImage'

import * as S from './styles'

export type DonationPageProps = {
  address?: AddressItemProps[]
  error?: ErrorProps
}

type DonationInsert = {
  addressId: number
  description: string
  image: string
  email: string
  phone: string
  isDelivery: boolean | undefined
  type: string
}

const Donation = ({ address, error }: DonationPageProps) => {
  const greaterLarge = useMedia('(min-width: 1000px)')

  const [loading, setLoading] = useState(false)
  const [finished, setFinished] = useState(false)
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [formError, setFormError] = useState({
    delivery: '',
    address: ''
  })
  const [values, setValues] = useState<DonationInsert>({
    type: 'ACESSORIO',
    image: '',
    description: '',
    email: '',
    phone: '',
    addressId: 0,
    isDelivery: undefined
  })

  const showToast = useToast()

  const handleInput = (field: string, value: unknown) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    const errors = donationValidate({
      type: values.type,
      description: values.description,
      phone: values.phone,
      email: values.email
    })

    setFormError({
      address:
        values.addressId === 0
          ? 'Defina o endereço aonde será feito o recolhimento'
          : '',
      delivery:
        values.isDelivery === undefined
          ? 'Defina como será feito o recolhimento'
          : ''
    })

    if (Object.keys(errors).length) {
      setFieldError(errors)
      return
    }

    setFieldError({})

    if (!!formError.address || !!formError.delivery) return

    setLoading(true)

    try {
      const formdata = new FormData()
      formdata.append('image', values.image)
      formdata.append('type', values.type)
      formdata.append('description', values.description)
      formdata.append('email', values.email)
      formdata.append('phone', values.phone)
      formdata.append('addressId', values.addressId.toString())
      formdata.append('isDelivery', `${values.isDelivery ? 'true' : 'false'}`)

      await api.post<DonationItemProps>('/donations', formdata, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      setValues({
        type: 'ACESSORIO',
        description: '',
        image: '',
        addressId: 0,
        isDelivery: undefined,
        phone: '',
        email: ''
      })
      setFinished(true)
    } catch (error) {
      showToast({ type: 'error', message: handlerError(error as AxiosError) })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Page
      header
      title="Doar"
      error={error}
      decoration={greaterLarge ? 'corners' : 'none'}
      footer
    >
      <S.Wrapper>
        <S.Main>
          <S.Column>
            <S.Infos>
              <HeadingSection>Informações</HeadingSection>
              <InputImage
                name="image"
                value={values.image}
                message="Adicionar imagem da doação"
                accept=".png,.jpg"
                onChange={(v) => handleInput('image', v)}
                disabled={loading}
              />
              <TextField
                name="type"
                label="Tipo"
                as="select"
                options={donationsTypes}
                placeholder="Tipo da doação"
                value={values.type}
                error={fieldError?.type}
                onInputChange={(v) => handleInput('type', v)}
                disabled={loading}
              />
              <TextField
                as="textarea"
                name="description"
                label="Descrição"
                maxLength={100}
                value={values.description}
                placeholder="Diga nos mais sobre o item da doação"
                error={fieldError?.description}
                onInputChange={(v) => handleInput('description', v)}
                disabled={loading}
              />
            </S.Infos>

            <S.Contact>
              <HeadingSection>Dados para contato</HeadingSection>
              <TextField
                name="email"
                label="Email"
                value={values.email}
                placeholder="Email para contato"
                error={fieldError?.email}
                onInputChange={(v) => handleInput('email', v)}
                disabled={loading}
              />
              <TextField
                name="phone"
                label="Celular"
                placeholder="Celular ou para contato"
                value={values.phone}
                error={fieldError?.phone}
                onInputChange={(v) => handleInput('phone', v)}
                disabled={loading}
              />
            </S.Contact>
          </S.Column>

          <S.Column>
            <S.Delivery>
              <HeadingSection>Recolhimento</HeadingSection>
              <CardButton
                asCheckbox
                title="Prefiro que venham até min"
                onClick={() => handleInput('isDelivery', false)}
                isChecked={values.isDelivery === false}
                message="A pessoa que receberá, deverá se responsabilizar do recolhimento"
                src="/img/my-location.svg"
                alt="Uma mulher sentada em marcador no mapa"
                disabled={loading}
              />
              <CardButton
                asCheckbox
                title="Prefiro entregar"
                isChecked={values.isDelivery === true}
                onClick={() => {
                  handleInput('isDelivery', true)
                  handleInput('addressId', 0)
                }}
                message="Você se disponibiliza para realizar a entrega"
                src="/img/delivery.svg"
                alt="Um personagem realizando uma entrega a ponto especifico do mapa"
                disabled={loading}
              />
            </S.Delivery>

            {!values.isDelivery && (
              <S.Address>
                <HeadingSection>Endereços</HeadingSection>
                <Address
                  pickable={true}
                  disabled={loading}
                  items={address}
                  onChecked={({ id }) => handleInput('addressId', id)}
                />
              </S.Address>
            )}
          </S.Column>
        </S.Main>

        {(!!formError.address || !!formError.delivery) && (
          <FormError>{formError.delivery || formError.address}</FormError>
        )}
        <Button onClick={handleSubmit} disabled={loading}>
          {loading ? <FormLoading /> : <span>DOAR</span>}
        </Button>
      </S.Wrapper>

      <FinishedModal
        title="Doação criada!"
        message="Agradecemos sua doação, tenha certeza que ela fará a diferença na vida de alguem.
 "
        isOpen={finished}
        onClose={() => setFinished(false)}
      />
    </Page>
  )
}
export default Donation
