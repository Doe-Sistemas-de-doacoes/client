import * as S from './styles'
import { ArrowLeft } from 'react-feather'
import Logo from 'components/Logo'

const Header = () => {
  return (
    <>
      <S.Mobile>
        <ArrowLeft />
        <h3>Header</h3>
      </S.Mobile>
      <S.Desktop>
        <Logo withTitle />

        <span>Home</span>
      </S.Desktop>
    </>
  )
}

export default Header
