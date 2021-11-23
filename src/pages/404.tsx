import Page from 'templates/Page'
import NotFound from 'components/NotFound'
import { Container } from 'components/Container'

export default function Page404() {
  return (
    <Page header footer decoration="corners">
      <Container flexFull center>
        <NotFound />
      </Container>
    </Page>
  )
}
