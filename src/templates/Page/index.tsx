import { useEffect } from 'react'
import { signIn, useSession } from 'next-auth/client'

import Menu from 'components/Menu'
import Footer from 'components/Footer'

import * as S from './styles'
import { Corners, Love } from 'components/Decoration'
import { TopRightCorner } from 'components/Decoration/styles'
import Error, { ErrorProps } from 'components/Error'

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
  const [session, loading] = useSession()

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
          {decoration === 'topRightCorner' && <TopRightCorner />}
          {decoration === 'corners' && <Corners />}
        </>
      )}

      {!!footer && <Footer />}
    </S.Wrapper>
  )
}

export default Page
