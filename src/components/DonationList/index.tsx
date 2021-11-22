import DonationItem, { DonationItemProps } from 'components/DonationItem'

import * as S from './styles'

export type DonationListProps = {
  donations?: DonationItemProps[]
  currentUser?: number
}

const DonationList = ({ donations }: DonationListProps) => (
  <S.Wrapper>
    {donations?.map((donation, key) => (
      <DonationItem key={key} {...donation} />
    ))}
  </S.Wrapper>
)

export default DonationList
