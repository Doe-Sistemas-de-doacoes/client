import Address from 'components/Address'
import Button from 'components/Button'
import CardButton from 'components/CardButton'
import Input from 'components/Input'
import Page from 'templates/Page'

import * as S from './styles'

const Donation = () => (
  <Page header footer decoration={false}>
    <S.Wrapper>
      <h2>Doar</h2>
      <S.Main>
        <S.Section>
          <S.Heading>Informações</S.Heading>
          <Input label="Tipo" placeholder="Tipo da doação" />
          <Input
            label="Observações"
            placeholder="Adicione alguma oberservação"
          />
        </S.Section>

        <S.Section>
          <S.Heading>Recolhimento</S.Heading>
          <CardButton
            title="Prefiro que venham até min"
            message="A pessoa que receberá, deverá se responsabilizar do recolhimento"
            src="/img/my-location.svg"
            alt="Uma mulher sentada em marcador no mapa"
          />
          <CardButton
            title="Prefiro entregar"
            message="Você se disponibiliza para realizar a entrega"
            src="/img/delivery.svg"
            alt="Um personagem realizando uma entrega a ponto especifico do mapa"
          />
        </S.Section>

        <img src="/img/location-search.svg" />

        <S.Section>
          <S.Heading>Endereços</S.Heading>
          <Address addresses={[]} />
        </S.Section>

        <S.Action>
          <Button>DOAR</Button>
        </S.Action>
      </S.Main>
    </S.Wrapper>
  </Page>
)

export default Donation
