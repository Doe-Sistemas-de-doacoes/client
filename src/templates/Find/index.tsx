import DonationList, { DonationListProps } from 'components/DonationList'
import Page from 'templates/Page'
import * as S from './styles'

const FindTemplate = ({ donations }: DonationListProps) => (
  <Page header footer>
    <S.Wrapper>
      <h3>Encontrar</h3>
      <DonationList donations={donations} />
    </S.Wrapper>
  </Page>
)

export default FindTemplate
