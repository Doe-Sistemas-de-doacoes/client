import Address from 'components/Address'
import Button from 'components/Button'
import Input from 'components/Input'
import Page from 'templates/Page'

import * as S from './styles'

const MyAccount = () => (
  <Page header>
    <S.Wrapper>
      <S.Title>Minha conta</S.Title>
      <S.Main>
        <S.Section>
          <Input label="Nome" />
        </S.Section>

        <S.Section>
          <S.Heading>Alterar senha</S.Heading>
          <Input label="Senha" type="password" />
          <Input label="Confirmar senha" type="password" />
        </S.Section>

        <Button>Salvar</Button>

        <S.Section>
          <S.Heading>Endereço</S.Heading>
          <Address />
        </S.Section>
      </S.Main>
    </S.Wrapper>
  </Page>
)

export default MyAccount
