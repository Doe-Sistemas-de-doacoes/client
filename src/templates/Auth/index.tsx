import Link from 'next/link'

import useMedia from 'hooks/useMedia'
import { FormLink } from 'components/Form'
import Logo from 'components/Logo'
import Footer from 'components/Footer'

import * as S from './styles'

export type AuthProps = {
  title: string
  subtitle?: string
  redirectText: string
  redirectLink: string
  redirectLinkText: string
  formHeight: number
  children: React.ReactNode
}

const Auth = ({
  title,
  children,
  subtitle,
  redirectText,
  redirectLink,
  redirectLinkText,
  formHeight
}: AuthProps) => {
  const greaterThenMedium = useMedia('(min-width: 1000px)')

  return (
    <S.Wrapper>
      {greaterThenMedium && (
        <S.Decoration>
          <svg
            viewBox="0 0 302 282"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#authDecor)">
              <path
                d="M193.067.009c-16.04-.401-34.458 12.994-75 48-72.5 7-120.109 33.016-118 81 2 45.5 68.5 58 112.5 89 28 25.5 43.354 57.867 80.5 52.5 131.5-19 128-252.5 0-270.5Z"
                fill="#E9F2FF"
              />
              <path
                d="M111.567 1.509c26.5.5 30.125 18 13.5 28.5-9.5 6-16.735 7.905-30.5 11-28 1-32-18-10.5-31 9.55-5.107 15.468-7.124 27.5-8.5Z"
                fill="#E9F2FF"
              />
              <path
                d="M114.067 63.509c16-2.872 57 8.5 57 8.5-.166 10.48-13.445 11.719-54 8l16 60h-54s-31.5-2.5-32.5-33.5c-1-31.02 43.578-38.707 67.5-43ZM259.067 157.009l-43.5-25.5-15.5 1c-16.614 18.819-29.254 23.377-56.5 23-8 0-6.5 12 0 12h21.5l-3.5 1c-9 0-8 12.5 0 12.5l71.5 1c14.686-3.999 20.763-8.985 26-25Z"
                fill="#2E78D3"
              />
              <path
                d="M189.067 75.508c-17-.966-26.5 15-26.5 15s-9.5-15-28-15c-15.486 0-26 14.014-26 29.5 0 37.001 54 64 54 64s53-25.499 53-64c0-15.486-9.5-28.533-26.5-29.5Z"
                fill="#04D361"
                stroke="#04D361"
              />
              <path
                d="M139.067 104.009c-15.341-23.295-26-35.5-50-35.5-22.233 0-42.5 18-42.5 39 0 32 48 19.5 46-18.5 12.229.975 17.064 3.267 22 10.5 7.5 9.5 17.725 10.872 24.5 4.5ZM221.067 112.009c-24.449-3.069-42.281 14.122-54.5 33.5 4.481 5.941 8.485 6.964 20 2 8.407-11.191 13.892-16.01 28.5-15.5-6.5 29.5 40 52 45.5 18-2.502-21.891-17.3-35.214-39.5-38Z"
                fill="#6492F2"
              />
            </g>
            <defs>
              <clipPath id="authDecor">
                <path fill="#fff" d="M0 0h290v271H0z" />
              </clipPath>
            </defs>
          </svg>
        </S.Decoration>
      )}

      <S.Content>
        <S.HeaderSection>
          <Logo withTitle={greaterThenMedium} />
          <div>
            <S.Heading>{title}</S.Heading>
            {!!subtitle && <p>{subtitle}</p>}
          </div>
        </S.HeaderSection>

        <S.FormWrapper formHeight={formHeight}>
          {children}
          <FormLink>
            {redirectText}{' '}
            <Link href={redirectLink}>
              <a>{redirectLinkText}</a>
            </Link>
          </FormLink>
        </S.FormWrapper>
      </S.Content>
      <Footer />
    </S.Wrapper>
  )
}

export default Auth
