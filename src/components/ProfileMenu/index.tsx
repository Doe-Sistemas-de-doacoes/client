import Link from 'next/link'
import { Heart, LogOut, MapPin, User } from 'react-feather'

import * as S from './styles'

export type ProfileMenuProps = {
  activeLink?:
    | '/profile/me'
    | '/profile/addresses'
    | '/profile/donations'
    | string
}

const ProfileMenu = ({ activeLink }: ProfileMenuProps) => (
  <S.Nav>
    <Link href="/profile/me" passHref>
      <S.Link isActive={activeLink === '/profile/me'} title="Meus dados">
        <User size={24} />
        <span>Meus dados</span>
      </S.Link>
    </Link>

    <Link href="/profile/address" passHref>
      <S.Link
        isActive={activeLink === '/profile/addresses'}
        title="Meus endereços"
      >
        <MapPin size={24} />
        <span>Meus endereços</span>
      </S.Link>
    </Link>

    <Link href="/profile/donations" passHref>
      <S.Link
        isActive={activeLink === '/profile/donations'}
        title="Minhas Doações"
      >
        <Heart size={24} />
        <span>Minhas Doações</span>
      </S.Link>
    </Link>

    <Link href="/logout" passHref>
      <S.Link>
        <LogOut size={24} />
        <span>Sair</span>
      </S.Link>
    </Link>
  </S.Nav>
)

export default ProfileMenu
