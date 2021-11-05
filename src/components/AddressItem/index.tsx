import { useState } from 'react'
import { Trash2 } from 'react-feather'

import { AddressProps } from 'services/user'
import { useToast } from 'hooks/use-toast'
import api from 'services/api'

import * as S from './styles'

export type AddressItemProps = {
  onDeleted?: () => void
} & AddressProps

const AddressItem = ({
  id,
  city,
  state,
  neighborhood,
  street,
  number,
  onDeleted
}: AddressItemProps) => {
  const [loading, setLoading] = useState(false)

  const showToast = useToast()

  const handleDelete = async () => {
    setLoading(true)
    try {
      await api.delete(`/address/${id}`)
      showToast({
        type: 'success',
        message: `Endereço removido com sucesso!`
      })
      if (onDeleted) onDeleted()
    } catch {
      setLoading(false)
      showToast({
        type: 'error',
        message: `Não foi possivel deletar o endereço!`
      })
    }
  }

  return (
    <S.Wrapper>
      <S.Content>
        <S.Label>Cidade</S.Label>
        <S.Value>{city}</S.Value>
      </S.Content>

      <S.Content>
        <S.Label>Estado</S.Label>
        <S.Value>{state}</S.Value>
      </S.Content>

      <S.Content>
        <S.Label>Bairro</S.Label>
        <S.Value>{neighborhood}</S.Value>
      </S.Content>
      <S.Content>
        <S.Label>Rua</S.Label>
        <S.Value>{street}</S.Value>
      </S.Content>
      <S.Content>
        <S.Label>Número</S.Label>
        <S.Value>{number}</S.Value>
      </S.Content>

      <S.Delete onClick={() => handleDelete()}>
        <Trash2 size={18} />
      </S.Delete>

      {loading && (
        <S.LoaderWrapper>
          <h5>Deletando...</h5>
        </S.LoaderWrapper>
      )}
    </S.Wrapper>
  )
}

export default AddressItem
