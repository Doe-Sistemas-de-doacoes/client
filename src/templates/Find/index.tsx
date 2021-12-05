import Page from 'templates/Page'
import { ErrorProps } from 'components/Error'
import DonationList, { DonationListProps } from 'components/DonationList'

import * as S from './styles'

export type FindTemplateProps = {
  error?: ErrorProps
} & DonationListProps

const FindTemplate = ({ data, address, error }: FindTemplateProps) => {
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
          expandable
          endpoint="/donations"
          address={address}
          data={data}
        />
      </S.Wrapper>
    </Page>
  )
}

export default FindTemplate
