import Button from 'components/Button'
import { Trash } from 'react-feather'
import * as S from './styles'

const Address = () => (
  <S.Wrapper>
    <S.ItemsWrapper>
      <S.AddressItem>
        <p>Av. XXX, 000 - Bairro Xx</p>
        <Trash size={18} />
      </S.AddressItem>
      <S.AddressItem>
        <p>Av. XXX, 000 - Bairro Xx</p>
        <Trash size={18} />
      </S.AddressItem>
    </S.ItemsWrapper>
    <Button appearance="outline">Adicionar</Button>
  </S.Wrapper>
)

export default Address
