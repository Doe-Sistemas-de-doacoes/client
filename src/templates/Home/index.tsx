import Link from 'next/link'
import { signOut } from 'next-auth/client'
import { LogOut } from 'react-feather'

import { useSession } from 'hooks/use-session'
import CardButton from 'components/CardButton'
import Footer from 'components/Footer'
import Logo from 'components/Logo'
import Page from 'templates/Page'

import * as S from './styles'

export type HomeProps = {
  connections?: number
}

const Home = ({ connections = 0 }: HomeProps) => {
  const { session, loading } = useSession()

  return (
    <Page>
      <S.Wrapper>
        <S.Header>
          <S.Title>Doe</S.Title>
          <h2>Conectando pessoas</h2>
        </S.Header>

        {!loading && session?.user?.name && (
          <S.Hello>
            <Logo size="xsmall" />
            <h3>Olá, {session?.user?.name}</h3>
          </S.Hello>
        )}

        <S.Main>
          {session?.user?.name ? (
            <Link href="/profile/me">
              <CardButton
                src="/img/avatar.svg"
                alt="Avatar do usuário"
                title="Minha conta"
                size="small"
                as="a"
              >
                <S.SignOut
                  role="button"
                  onClick={(event) => {
                    event.stopPropagation()
                    signOut()
                  }}
                >
                  <LogOut size={20} />
                </S.SignOut>
              </CardButton>
            </Link>
          ) : loading ? (
            <CardButton
              src="/img/avatar.svg"
              alt="Avatar do usuário"
              title="Carregando...."
              size="small"
              as="a"
            />
          ) : (
            <Link href="/signin">
              <CardButton
                src="/img/avatar.svg"
                alt="Avatar do usuário"
                title="Entrar"
                size="small"
                as="a"
              />
            </Link>
          )}

          <Link href="/donation">
            <CardButton
              src="/img/donation.svg"
              alt="Duas mãos enviando um coração vende para cima"
              message="Ajude pessoas ou causas"
              title="Doar"
              as="a"
            />
          </Link>

          <Link href="/find">
            <CardButton
              src="/img/receive.svg"
              alt="Duas mãos segurando um coração vende"
              message="Procure algo que você precisa"
              title="Encontrar"
              as="a"
            />
          </Link>

          <S.Connections>{connections} pessoas conectadas</S.Connections>
        </S.Main>

        <Footer />
      </S.Wrapper>
    </Page>
  )
}

export default Home
