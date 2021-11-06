import { UserProps } from 'services/user'
import * as S from './styles'

export type DonationItemProps = {
  datetimeOfCollection: string
  datetimeOfDelivery: string
  description: string
  donor: UserProps
  id: number
  receiver: UserProps
  typeOfDonation: string
}

const DonationItem = ({ description, typeOfDonation }: DonationItemProps) => (
  <S.Wrapper>
    <S.Img />
    <S.Type>{typeOfDonation}</S.Type>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
)

export default DonationItem
