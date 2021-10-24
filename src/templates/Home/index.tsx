import CardButton from 'components/CardButton'
import Footer from 'components/Footer'
import Logo from 'components/Logo'
import Page from 'templates/Page'

import * as S from './styles'

export type HomeProps = {
  connections: number
}

const Home = ({ connections }: HomeProps) => (
  <Page>
    <S.Wrapper>
      <S.Header>
        <S.Title>Doe</S.Title>
        <h2>Conectando pessoas</h2>
      </S.Header>

      <S.Hello>
        <Logo size="xsmall" />
        <h3>Olá, Allan</h3>
      </S.Hello>

      <S.Main>
        <CardButton
          src="/img/avatar.svg"
          alt="Avatar do usuário"
          title="Minha conta"
          size="small"
        />
        <CardButton
          src="/img/donation.svg"
          alt="Duas mãos enviando um coração vende para cima"
          message="Ajude pessoas ou causas"
          title="Doar"
        />
        <CardButton
          src="/img/receive.svg"
          alt="Duas mãos segurando um coração vende"
          message="Procure algo que você precisa"
          title="Encontrar"
        />
        <S.Connections>{connections} pessoas conectadas</S.Connections>
      </S.Main>

      <Footer />
    </S.Wrapper>
  </Page>
)

export default Home
