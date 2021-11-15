import React, {
  useContext,
  useEffect,
  useState,
  createContext,
  Dispatch,
  SetStateAction
} from 'react'
import { Session as NextSession } from 'next-auth'
import { useSession as nextUseSession } from 'next-auth/client'

type Session = NextSession | null

type ContextProps = {
  session: Session
  loading: boolean
  setSession: Dispatch<SetStateAction<Session>> | undefined
}

const SessionContext = createContext<ContextProps>({
  session: null,
  loading: false,
  setSession: undefined
})

type ProviderProps = {
  children: React.ReactNode
}

function SessionProvider({ children }: ProviderProps) {
  const [_session, _loading] = nextUseSession()
  const [session, setSession] = useState<Session>(_session)
  const [loading, setLoading] = useState<boolean>(_loading)

  useEffect(() => {
    setSession(_session)
    setLoading(_loading)
  }, [_session, _loading])

  return (
    <SessionContext.Provider
      value={{
        session,
        loading,
        setSession
      }}
    >
      {children}
    </SessionContext.Provider>
  )
}

const useSession = () => useContext(SessionContext)

export { SessionProvider, useSession }
