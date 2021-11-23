import { useEffect, useState } from 'react'
import { X } from 'react-feather'

import Toast, { ToastProps } from 'components/Toast'

import * as S from './styles'

export type ModalProps = {
  children?: React.ReactNode
  isOpen?: boolean
  footer?: React.ReactNode
  onClose?: () => void
  message?: string
} & Omit<ToastProps, 'message'>

const Modal = ({ title, isOpen = true, onClose, ...props }: ModalProps) => {
  const [open, setOpen] = useState(isOpen)
  const [hiding, setHiding] = useState(false)

  useEffect(() => setOpen(isOpen), [isOpen])

  function handleClose() {
    setHiding(true)

    setTimeout(() => {
      setHiding(false)
      setOpen(false)

      setTimeout(() => {
        if (onClose) onClose()
      })
    }, 260)
  }

  if (!open) return <></>

  return (
    <S.Wrapper hiding={hiding}>
      {'children' in props ? (
        <S.Content>
          <S.Header>
            <h3>{title}</h3>
            <X role="button" onClick={handleClose} />
          </S.Header>
          <S.Main>{props.children}</S.Main>
          <S.Footer>{props.footer}</S.Footer>
        </S.Content>
      ) : (
        <Toast
          type={props.type}
          title={title}
          message={props.message ?? ''}
          action={props.action}
          onConfirm={() => {
            if (props?.onConfirm) props.onConfirm()
            handleClose()
          }}
          onCancel={() => {
            if (props?.onCancel) props.onCancel()
            handleClose()
          }}
        />
      )}
      <S.Overlay onClick={handleClose} />
    </S.Wrapper>
  )
}

export default Modal
