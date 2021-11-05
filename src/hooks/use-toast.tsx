import React, {
  useContext,
  useCallback,
  useEffect,
  useState,
  createContext
} from 'react'

import Toast, { ToastProps } from 'components/Toast'
import * as S from 'components/Toast/styles'

type ToastContextData = (toast: ToastProps) => void

const ToastContext = createContext<ToastContextData>(() => false)

type ToastProviderProps = {
  children: React.ReactNode
}

function ToastProvider({ children }: ToastProviderProps) {
  const [toasts, setToasts] = useState<ToastProps[]>([])

  useEffect(() => {
    if (toasts.length > 0) {
      const timer = setTimeout(() => {
        toasts[0].hiding = true
        setTimeout(() => {
          setToasts((toasts) => toasts.slice(1))
        }, 700)
      }, 5300)
      return () => clearTimeout(timer)
    }
  }, [toasts])

  const showToast = useCallback(
    (toast: ToastProps) => {
      setToasts((toasts) => [...toasts, toast])
    },
    [setToasts]
  )

  return (
    <ToastContext.Provider value={showToast}>
      <S.ToastWrapper>
        {toasts.map((toast, index) => (
          <Toast key={index} {...toast} />
        ))}
      </S.ToastWrapper>
      {children}
    </ToastContext.Provider>
  )
}

const useToast = () => useContext(ToastContext)

export { ToastProvider, useToast }
