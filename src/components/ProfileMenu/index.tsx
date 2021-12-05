import Link from 'next/link'
import { Archive, Heart, LogOut, MapPin, User } from 'react-feather'
import { signOut } from 'next-auth/client'
import { useRouter } from 'next/router'

import * as S from './styles'

export type ProfileMenuProps = {
  activeLink?: '/profile/me' | '/profile/address' | '/profile/donation' | string
}

const ProfileMenu = ({ activeLink }: ProfileMenuProps) => {
  const router = useRouter()

  return (
    <S.Nav>
      <Link href="/profile/me" passHref>
        <S.Link isActive={activeLink === '/profile/me'} title="Meus dados">
          <User size={24} />
          <span>Meus dados</span>
        </S.Link>
      </Link>

      <Link href="/profile/address" passHref>
        <S.Link
          isActive={activeLink === '/profile/address'}
          title="Meus endereços"
        >
          <MapPin size={24} />
          <span>Meus endereços</span>
        </S.Link>
      </Link>

      <Link href="/profile/donations" passHref>
        <S.Link
          isActive={activeLink === '/profile/donations'}
          title="Minhas doações"
        >
          <Heart size={24} />
          <span>Minhas doações</span>
        </S.Link>
      </Link>

      <Link href="/profile/received" passHref>
        <S.Link
          isActive={activeLink === '/profile/received'}
          title="Minhas reservas"
        >
          <Archive size={24} />
          <span>Minhas reservas</span>
        </S.Link>
      </Link>

      <S.Link
        role="button"
        onClick={async () => {
          const data = await signOut({ redirect: false, callbackUrl: '/' })
          router.push(data.url)
        }}
      >
        <LogOut size={24} aria-label="Sair" />
        <span>Sair</span>
      </S.Link>
    </S.Nav>
  )
}

export default ProfileMenu
