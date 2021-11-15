import { useEffect } from 'react'
import { signIn } from 'next-auth/client'

import Menu from 'components/Menu'
import Footer from 'components/Footer'
import { Corners, Love, TopRightHuge } from 'components/Decoration'
import Error, { ErrorProps } from 'components/Error'
import { useSession } from 'hooks/use-session'

import * as S from './styles'

export type DecorationsTypes = 'corners' | 'none' | 'love' | 'topRightCorner'

export type PageProps = {
  title?: string
  children: React.ReactNode
  decoration?: DecorationsTypes
  header?: boolean
  footer?: boolean
  error?: ErrorProps
}

const Page = ({
  title,
  footer,
  header,
  error,
  children,
  decoration = 'love'
}: PageProps) => {
  const { session, loading } = useSession()

  useEffect(() => {
    if (session?.error === 'REFRESH_TOKEN_ERROR') signIn()
  }, [session])

  return (
    <S.Wrapper>
      {!!header && <Menu username={session?.user?.name} loading={loading} />}

      {error ? (
        <Error {...error} />
      ) : (
        <>
          {title && <S.Title>{title}</S.Title>}
          {children}
          {decoration === 'love' && <Love />}
          {decoration === 'topRightCorner' && <TopRightHuge />}
          {decoration === 'corners' && <Corners />}
        </>
      )}

      {!!footer && <Footer />}
    </S.Wrapper>
  )
}

export default Page
