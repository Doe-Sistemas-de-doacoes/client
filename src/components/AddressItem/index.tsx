import React from 'react'
import { Edit2, Trash2 } from 'react-feather'

import Loader from 'components/Loader'
import { useModal } from 'hooks/use-modal'
import { AddressProps } from 'services/user'

import * as S from './styles'

export type AddressItemProps = {
  pickable?: boolean
  editable?: boolean
  onDelete?: () => void
  onEdit?: () => void
  isChecked?: boolean
  disabled?: boolean
  onChecked?: (checked: boolean) => void
  isDeleting?: boolean
} & AddressProps

const AddressItem = ({
  editable = true,
  isDeleting = false,
  onDelete,
  isChecked,
  onChecked,
  pickable,
  onEdit,
  ...address
}: AddressItemProps) => {
  const showModal = useModal()

  function handleDelete() {
    if (onDelete) {
      showModal({
        type: 'informative',
        title: 'Deletar endereço?',
        message:
          'Deseja realmente deletar este endereço? não será possivel recuperá-lo depois.',
        action: {
          type: 'confirm',
          primary: {
            color: 'red'
          }
        },
        onConfirm: onDelete
      })
    }
  }

  function handleCheck(checked: boolean) {
    if (pickable && onChecked) onChecked(checked)
  }

  return (
    <S.Wrapper
      pickable={pickable}
      {...(pickable
        ? {
            role: 'checkbox',
            'aria-checked': isChecked
          }
        : {})}
      onClick={() => handleCheck(!isChecked)}
    >
      <S.Content>
        <p>
          {address.street}, Nº {address.number}
        </p>
        <p>
          {address.neighborhood}, {address.city} - {address.state}
        </p>
      </S.Content>

      {editable && (
        <S.Actions>
          {!!onDelete && (
            <S.Delete
              onClick={(event) => {
                event.stopPropagation()
                handleDelete()
              }}
            >
              <Trash2 size={18} />
            </S.Delete>
          )}
          {!!onEdit && (
            <S.Icon
              onClick={(event) => {
                event.stopPropagation()
                onEdit()
              }}
            >
              <Edit2 size={18} />
            </S.Icon>
          )}
        </S.Actions>
      )}

      {!!isDeleting && (
        <S.LoaderWrapper>
          <Loader size="small" />
          <p>Deletando...</p>
        </S.LoaderWrapper>
      )}
    </S.Wrapper>
  )
}

export default AddressItem
