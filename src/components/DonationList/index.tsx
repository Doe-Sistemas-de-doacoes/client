import Donation, { DonationItemProps } from 'components/DonationItem'
import * as S from './styles'

export type DonationListProps = {
  donations: DonationItemProps[]
}

const DonationList = ({ donations }: DonationListProps) => (
  <S.Wrapper>
    {donations?.map((donation, key) => (
      <Donation key={key} {...donation} />
    ))}
  </S.Wrapper>
)

export default DonationList
