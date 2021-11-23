import React, { useContext, useCallback, useState, createContext } from 'react'

import Modal, { ModalProps } from 'components/Modal'

type ModalContextData = (modal: ModalProps) => void

const ModalContext = createContext<ModalContextData>(() => false)

type ModalProviderProps = {
  children: React.ReactNode
}

function ModalProvider({ children }: ModalProviderProps) {
  const [modals, setModals] = useState<ModalProps[]>([])

  const showModal = useCallback(
    (modal: ModalProps) => {
      setModals((modals) => [...modals, modal])
    },
    [setModals]
  )

  return (
    <ModalContext.Provider value={showModal}>
      {modals.map((toast, index) => (
        <Modal key={index} {...toast} />
      ))}
      {children}
    </ModalContext.Provider>
  )
}

const useModal = () => useContext(ModalContext)

export { ModalProvider, useModal }
