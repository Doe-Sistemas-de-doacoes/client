import DonationList, { DonationListProps } from 'components/DonationList'
import { ErrorProps } from 'components/Error'
import Page from 'templates/Page'

import * as S from './styles'

export type FindTemplateProps = {
  error?: ErrorProps
} & DonationListProps

const FindTemplate = ({ items }: DonationListProps) => (
  <Page title="Encontrar" header footer decoration="topRightCorner">
    <S.Wrapper>
      <DonationList items={items} />
    </S.Wrapper>
  </Page>
)

export default FindTemplate
