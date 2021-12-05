import {
  Home,
  Mail,
  Map,
  MapPin,
  MessageCircle,
  Phone,
  Trash2,
  User
} from 'react-feather'

import { useModal } from 'hooks/use-modal'
import Ribbon from 'components/Ribbon'
import Dropdown from 'components/Dropdown'
import { UserProps, AddressProps } from 'services/user'

import * as S from './styles'

type UserDonationProps = {
  address: AddressProps
} & Pick<UserProps, 'id' | 'name'>

export type DonationItemProps = {
  editable?: boolean
  expandable: boolean
  isDonor: boolean
  onDelete?: () => void
  onClick?: () => void
} & DonationProps

export type DonationProps = {
  date: string
  id: number
  description: string
  donor: UserDonationProps
  receiver: UserDonationProps
  phone: string
  email: string
  imageSrc: string
  isDelivery: boolean
  status: 'FINALIZADO' | 'PENDENTE'
  type: string
}

const DonationItem = ({
  description,
  date,
  imageSrc,
  donor,
  status,
  type,
  email,
  phone,
  isDelivery,
  onDelete,
  onClick,
  isDonor,
  receiver,
  expandable = true,
  editable = false
}: DonationItemProps) => {
  const showModal = useModal()
  const address = isDonor ? donor?.address : receiver?.address

  function handlerDelete() {
    if (onDelete) {
      showModal({
        type: 'informative',
        title: 'Deletar doação?',
        message:
          'Deseja realmente deletar esta doação? não será possivel recuperá-lo depois.',
        action: {
          type: 'confirm',
          primary: {
            color: 'red'
          }
        },
        onConfirm: onDelete
      })
    }
  }

  function handlerClick() {
    if (onClick && expandable) onClick()
  }

  return (
    <S.Wrapper onClick={handlerClick} clickable={!!onClick && expandable}>
      {status === 'FINALIZADO' && (
        <>
          {isDonor ? (
            <Ribbon color="primary" size="normal">
              FINALIZADA
            </Ribbon>
          ) : (
            <Ribbon color="secondary" size="normal">
              RESERVADA
            </Ribbon>
          )}
        </>
      )}
      <S.ImageWrapper>
        <S.Image src={imageSrc ?? '/img/image-not-found.png'} />

        {status !== 'FINALIZADO' && editable && (
          <S.Actions onClick={handlerDelete}>
            <Trash2 size={20} />
          </S.Actions>
        )}
      </S.ImageWrapper>

      <S.Content>
        <S.Section>
          <S.Type>{type}</S.Type>
          {isDelivery && (
            <S.Delivery title="O Doador se disponibiliza a entregar">
              ENTREGA
            </S.Delivery>
          )}

          <S.Description>{description}</S.Description>
        </S.Section>
        {}
        <S.Info>
          {address && (
            <Dropdown
              title={
                <S.DropdownTitle>
                  <MapPin size={20} />
                  <p>Endereço para {isDelivery ? ' coleta' : ' entrega'}</p>
                </S.DropdownTitle>
              }
            >
              <S.DropdownContent>
                <S.DropdownHeading>Endereço para coleta</S.DropdownHeading>
                <p>
                  {<Map size={18} />}
                  {address?.city ?? '------'} / {address?.state ?? '--'}
                </p>
                <p>
                  {<MapPin size={18} />}
                  {address?.neighborhood ?? '--------'}
                </p>
                <p>
                  {<Home size={18} />}
                  {address?.street ?? '------'}, Nº {address?.number ?? '--'}
                </p>
              </S.DropdownContent>
            </Dropdown>
          )}
          <Dropdown
            title={
              <S.DropdownTitle>
                <MessageCircle size={20} />
                <p>Informações para contato</p>
              </S.DropdownTitle>
            }
          >
            <S.DropdownContent>
              <S.DropdownHeading>Contato do doador</S.DropdownHeading>

              <p>
                <User size={18} />
                {donor.name}
              </p>
              <p>
                <Mail size={18} />
                {email}
              </p>
              <p>
                <Phone size={18} />
                {phone}
              </p>
            </S.DropdownContent>
          </Dropdown>
        </S.Info>

        <S.Date>Criada em: {date}</S.Date>
      </S.Content>
    </S.Wrapper>
  )
}

export default DonationItem
