import Page from 'templates/Page'
import { ErrorProps } from 'components/Error'
import DonationList, { DonationListProps } from 'components/DonationList'

import * as S from './styles'

export type FindTemplateProps = {
  error?: ErrorProps
} & DonationListProps

const FindTemplate = ({ items, address, error }: FindTemplateProps) => {
  return (
    <Page
      title="Encontrar"
      header
      footer
      error={error}
      decoration="topRightCorner"
    >
      <S.Wrapper>
        <DonationList
          address={address}
          items={items}
          emptyMessage="Nenhuma doação encontrada"
        />
      </S.Wrapper>
    </Page>
  )
}

export default FindTemplate
