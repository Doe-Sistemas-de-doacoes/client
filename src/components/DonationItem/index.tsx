import HeadingSection from 'components/HeadingSection'
import { UserProps, AddressProps } from 'services/user'
import formatDate from 'utils/format-date'

import * as S from './styles'

type User = {
  address: AddressProps
} & Pick<UserProps, 'id' | 'name'>

export type DonationItemProps = {
  date: string
  id: number
  description: string
  donor: User
  receiver: User
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
  type
}: DonationItemProps) => (
  <S.Wrapper>
    <S.Image src={imageSrc} />

    <S.Content>
      <S.Section>
        <S.Type>{type}</S.Type>
        <S.Date>{formatDate(date)}</S.Date>

        <S.Description>{description}</S.Description>
      </S.Section>

      {!!donor?.address && (
        <S.Addresses>
          <HeadingSection>Endereço</HeadingSection>
          <S.Address>
            <p>
              {donor.address?.street}, {donor.address?.number} -{' '}
              {donor.address?.neighborhood}
            </p>
            <p>
              {donor.address?.city} / {donor.address?.state}
            </p>
          </S.Address>
        </S.Addresses>
      )}
    </S.Content>
  </S.Wrapper>
)

export default DonationItem
