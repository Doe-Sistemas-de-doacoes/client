import { useState } from 'react'
import Link from 'next/link'
import { LogOut, Menu as MenuIcon, User, X as CloseIcon } from 'react-feather'
import { signOut } from 'next-auth/client'

import Button from 'components/Button'
import Logo from 'components/Logo'
import MediaMatch from 'components/MediaMatch'

import * as S from './styles'

export type MenuProps = {
  username?: string | null
  loading?: boolean
}

const Menu = ({ username, loading }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <S.IconWrapper onClick={() => setIsOpen(true)}>
        <MenuIcon aria-label="Abrir Menu" />
      </S.IconWrapper>

      <S.LogoWrapper>
        <Link href="/" passHref>
          <a>
            <Logo withTitle />
          </a>
        </Link>
      </S.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <Link href="/" passHref>
            <S.MenuLink>Home</S.MenuLink>
          </Link>
          <Link href="/donation" passHref>
            <S.MenuLink>Doar</S.MenuLink>
          </Link>
          <Link href="/find" passHref>
            <S.MenuLink>Encontrar</S.MenuLink>
          </Link>
        </S.MenuNav>
      </MediaMatch>

      {!loading && (
        <>
          <S.MenuGroup>
            {username ? (
              <>
                <Link href="/myaccount" passHref>
                  <S.MyAccount>
                    <User size={20} /> {username}
                  </S.MyAccount>
                </Link>

                <S.IconWrapper>
                  <LogOut size={20} role="button" onClick={() => signOut()} />
                </S.IconWrapper>
              </>
            ) : (
              <Link href="/signin" passHref>
                <S.SignIn>Entrar</S.SignIn>
              </Link>
            )}
          </S.MenuGroup>

          <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
            <CloseIcon
              aria-label="Fechar Menu"
              onClick={() => setIsOpen(false)}
            />
            <S.MenuNav>
              <Link href="/" passHref>
                <S.MenuLink>Home</S.MenuLink>
              </Link>
              <Link href="/donation" passHref>
                <S.MenuLink>Doar</S.MenuLink>
              </Link>
              <Link href="/find" passHref>
                <S.MenuLink>Encontrar</S.MenuLink>
              </Link>

              {username && (
                <>
                  <Link href="/myaccount" passHref>
                    <S.MenuLink>Minha Conta</S.MenuLink>
                  </Link>
                  <S.MenuLink role="button" onClick={() => signOut()}>
                    Sair
                  </S.MenuLink>
                </>
              )}
            </S.MenuNav>

            {!username && (
              <S.RegisterBox>
                <Link href="/signin" passHref>
                  <Button fullWidth size="large" as="a">
                    Entrar
                  </Button>
                </Link>
                <span>ou</span>
                <Link href="/signup" passHref>
                  <S.CreateAccount title="Criar conta">
                    Criar conta
                  </S.CreateAccount>
                </Link>
              </S.RegisterBox>
            )}
          </S.MenuFull>
        </>
      )}
    </S.Wrapper>
  )
}

export default Menu
