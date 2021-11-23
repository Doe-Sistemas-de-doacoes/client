import React, { useContext, useEffect, useState, createContext } from 'react'
import { Session as NextSession } from 'next-auth'
import { useSession as nextUseSession } from 'next-auth/client'

type Session = NextSession | null

type ContextProps = {
  session: Session
  loading: boolean
  setSession: (session: Session) => void
}

const SessionContext = createContext<ContextProps>({
  session: null,
  loading: false,
  setSession: () => undefined
})

type ProviderProps = {
  children: React.ReactNode
}

function SessionProvider({ children }: ProviderProps) {
  // eslint-disable-next-line prefer-const
  let [_session, _loading] = nextUseSession()
  const [session, setSession] = useState<Session>(_session)
  const [loading, setLoading] = useState<boolean>(_loading)
  let defined: Session = _session

  useEffect(() => {
    setSession({
      ..._session,
      ...(defined ?? {})
    } as Session)
    setLoading(_loading)
  }, [_session, _loading, defined])

  function handleSetSession(props: Session) {
    defined = props

    _session = {
      ...session,
      ...props
    } as NextSession

    setSession(_session)
  }

  return (
    <SessionContext.Provider
      value={{
        session,
        loading,
        setSession: handleSetSession
      }}
    >
      {children}
    </SessionContext.Provider>
  )
}

const useSession = () => useContext(SessionContext)

export { SessionProvider, useSession }
