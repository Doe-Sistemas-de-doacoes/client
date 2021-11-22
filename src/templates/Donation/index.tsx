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
import { donationValidate, FieldErrors } from 'utils/validations'
import { AddressItemProps } from 'components/AddressItem'
import { ErrorProps } from 'components/Error'
import { FormLoading } from 'components/Form'

import * as S from './styles'

export type DonationPageProps = {
  address?: AddressItemProps[]
  error?: ErrorProps
}

type DonationInsert = {
  addressId: number
  description: string
  isDelivery: boolean | undefined
  type: string
}

const Donation = ({ address, error }: DonationPageProps) => {
  const greaterLarge = useMedia('(min-width: 1000px)')

  const [loading, setLoading] = useState(false)
  const [finished, setFinished] = useState(false)
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [values, setValues] = useState<DonationInsert>({
    type: '',
    description: '',
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
      description: values.description
    })

    if (Object.keys(errors).length) {
      setFieldError(errors)
      return
    }

    setFieldError({})
    setLoading(true)

    try {
      await api.post('/donations', value)

      setValues({
        type: '',
        description: '',
        addressId: values.addressId,
        isDelivery: values.isDelivery
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
          <S.Section>
            <HeadingSection>Informações</HeadingSection>
            <TextField
              name="type"
              label="Tipo"
              placeholder="Tipo da doação"
              initialValue={values.type}
              error={fieldError?.type}
              onInputChange={(v) => handleInput('type', v)}
              disabled={loading}
            />
            <TextField
              as="textarea"
              name="description"
              label="Descrição"
              placeholder="Diga nos mais sobre o item da doação"
              initialValue={values.description}
              error={fieldError?.description}
              onInputChange={(v) => handleInput('description', v)}
              disabled={loading}
            />
          </S.Section>

          {greaterLarge && <img src="/img/location-search.svg" />}

          <S.Section>
            <HeadingSection>Recolhimento</HeadingSection>
            <CardButton
              asCheckbox
              title="Prefiro que venham até min"
              onClick={() => handleInput('isDelivery', false)}
              isChecked={!values.isDelivery}
              message="A pessoa que receberá, deverá se responsabilizar do recolhimento"
              src="/img/my-location.svg"
              alt="Uma mulher sentada em marcador no mapa"
              disabled={loading}
            />
            <CardButton
              asCheckbox
              title="Prefiro entregar"
              isChecked={values.isDelivery}
              onClick={() => handleInput('isDelivery', true)}
              message="Você se disponibiliza para realizar a entrega"
              src="/img/delivery.svg"
              alt="Um personagem realizando uma entrega a ponto especifico do mapa"
              disabled={loading}
            />
          </S.Section>

          <S.Section>
            <HeadingSection>Endereços</HeadingSection>
            <Address
              pickable={true}
              disabled={loading}
              items={address}
              onChecked={({ id }) => handleInput('addressId', id)}
            />
          </S.Section>
        </S.Main>
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
