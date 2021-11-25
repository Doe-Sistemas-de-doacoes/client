import { useState } from 'react'
import { AxiosError } from 'axios'
import { Home, Mail, Map, MapPin, Phone, User } from 'react-feather'

import api from 'services/api'
import Modal from 'components/Modal'
import Loader from 'components/Loader'
import Button from 'components/Button'
import Address from 'components/Address'
import { Badge } from 'components/Badge'
import { FormError } from 'components/Form'
import { AddressItemProps } from 'components/AddressItem'
import DonationItem, { DonationProps } from 'components/DonationItem'
import HeadingSection from 'components/HeadingSection'
import handlerError from 'utils/handle-error'
import formatDate from 'utils/format-date'
import { useSession } from 'hooks/use-session'
import { useToast } from 'hooks/use-toast'

import * as S from './styles'

export type DonationListProps = {
  editable?: boolean
  byUser?: boolean
  items?: DonationProps[]
  address?: AddressItemProps[]
  emptyMessage?: string
}

const DonationList = ({
  editable = false,
  items,
  emptyMessage = 'Nenhuma doação encontrada',
  address: initialAddress,
  byUser = false
}: DonationListProps) => {
  const [donations, setDonations] = useState(
    items?.map((donation) => ({
      ...donation,
      date: formatDate(donation.date)
    }))
  )
  const [loading, setLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const [donation, setDonation] = useState<DonationProps>()
  const [address, setAddress] = useState(initialAddress)
  const [selectAddress, setSelectAddress] = useState(0)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  const showToast = useToast()
  const { session } = useSession()

  async function deleteDonation(id: number) {
    setLoading(true)

    try {
      await api.delete(`/donations/${id}`)
      setDonations(donations?.filter((donation) => donation.id !== id))
      showToast({
        message: 'Doação deletada com sucesso!'
      })
    } catch (error) {
      showToast({
        type: 'error',
        title: 'Não foi possivel deletar a doação!',
        message: handlerError(error as AxiosError)
      })
    } finally {
      setLoading(false)
    }
  }

  async function receiveDonation() {
    if (!selectAddress && donation?.isDelivery) {
      setError('Defina um endereço para entrega!')
      return
    }

    setError('')
    setSaving(true)

    try {
      await api.patch(`/donations/${donation?.id}/receive`, {
        addressId: selectAddress
      })

      setDonations(donations?.filter(({ id }) => id !== donation?.id))
      resetState()

      showToast({
        message: 'Doação reservada, entre em contato com o doador!'
      })
    } catch (error) {
      setError(handlerError(error as AxiosError))
    } finally {
      setSaving(false)
    }
  }

  function handlerClick(donation: DonationProps) {
    setIsOpen(true)
    setDonation(donation)
  }

  function resetState() {
    setIsOpen(false)
    setDonation(undefined)
    setSelectAddress(0)
    setError('')
  }

  if (loading) {
    return (
      <S.StateWrapper>
        <Loader />
      </S.StateWrapper>
    )
  }

  if (!donations?.length) {
    return (
      <S.StateWrapper>
        <p>{emptyMessage}</p>
      </S.StateWrapper>
    )
  }

  return (
    <S.Wrapper>
      {donations?.map((donation) => (
        <DonationItem
          editable={editable && donation.status !== 'FINALIZADO'}
          byUser={byUser}
          isDonor={donation.donor.id === session?.user?.id}
          onClick={() => handlerClick(donation)}
          onDelete={() => deleteDonation(donation.id)}
          key={donation.id}
          {...donation}
        />
      ))}

      <Modal
        title="Informações da doação"
        isOpen={isOpen}
        onClose={resetState}
        canClose={!saving}
        footer={
          <>
            <Button
              color="gray"
              onClick={() => setIsOpen(false)}
              disabled={saving}
            >
              FECHAR
            </Button>
            <Button color="primary" onClick={receiveDonation} disabled={saving}>
              RESERVAR
            </Button>
          </>
        }
      >
        <S.ModalWrapper>
          <S.Image src={donation?.imageSrc ?? '/img/image-not-found.png'} />

          <S.Header>
            <S.Title>{donation?.type}</S.Title>
            {donation?.isDelivery && <Badge size="small">ENTREGA</Badge>}
          </S.Header>

          <p>{donation?.description}</p>

          <S.Section>
            <HeadingSection>Informações para contato</HeadingSection>
            <p>
              <User size={18} />
              {donation?.donor.name}
            </p>
            <p>
              <Mail size={18} />
              {donation?.email ?? '---'}
            </p>
            <p>
              <Phone size={18} />
              {donation?.phone ?? '---'}
            </p>
          </S.Section>

          {donation?.isDelivery ? (
            <S.Section>
              <HeadingSection>Endereço para entrega</HeadingSection>
              <Address
                pickable={true}
                disabled={saving}
                items={address}
                value={selectAddress}
                onItemsChange={(items) => setAddress(items)}
                onChecked={({ id }) => setSelectAddress(id)}
              />
            </S.Section>
          ) : (
            <S.Section>
              <HeadingSection>Endereço para coleta</HeadingSection>
              <p>
                <Map size={18} />
                {donation?.donor.address?.city} /{' '}
                {donation?.donor.address.state}
              </p>
              <p>
                <MapPin size={18} />
                {donation?.donor.address.neighborhood}
              </p>
              <p>
                <Home size={18} />
                {donation?.donor.address.street}, Nº
                {donation?.donor.address.number}
              </p>
            </S.Section>
          )}

          {!!error && <FormError>{error}</FormError>}
        </S.ModalWrapper>
      </Modal>
    </S.Wrapper>
  )
}

export default DonationList
