import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { FormLink } from 'components/Form'
import { Footer } from 'components/Footer/styles'

import { AuthProps } from '.'

type MainProps = Pick<AuthProps, 'maxHeight'>

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`

export const Decoration = styled.section`
  ${({ theme }) => css`
    flex: 1;
    display: none;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.lightGray};
    max-width: 60vw;
    padding: 10vh 10vw;

    @media screen and (min-width: 1000px) {
      display: flex;
    }
  `}
`

export const Content = styled.section`
  ${({ theme }) => css`
    flex: 1;
    display: grid;
    gap: ${theme.spacings.xsmall};
    grid-template-rows: auto auto ${theme.font.sizes.medium};
    padding: ${theme.spacings.small} ${theme.spacings.large};
    overflow: auto;

    ${Footer} {
      margin: auto 0;
    }

    @media screen and (max-width: 1169px) {
      padding: ${theme.spacings.small};

      ${Footer} {
        margin: 0 auto;
      }

      ${FormLink} {
        flex-direction: column;
        margin: auto;
      }
    }
  `}
`

export const Header = styled.header`
  display: flex;
  align-self: flex-end;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: min(100%, 24rem);

  ${media.greaterThan('large')`
    align-items: flex-start;
  `}
`

export const Heading = styled.h2`
  ${({ theme }) => css`
    max-width: 200px;
    text-align: center;
    margin: ${theme.spacings.xxsmall} 0 0;

    p {
      text-align: center;
    }

    ${media.greaterThan('large')`
      text-align: start;
    `}
  `}
`

export const SubTitle = styled.h5`
  ${({ theme }) => css`
    font-weight: ${theme.font.normal};
  `}
`

export const Main = styled.main<MainProps>`
  ${({ theme, maxHeight }) => css`
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    gap: ${theme.spacings.xsmall};
    justify-content: space-between;
    height: min(100%, ${maxHeight});
    align-items: center;
    max-width: 36rem;
    width: 100%;

    ${FormLink} {
      margin-top: auto;
      margin-bottom: auto;
    }

    ${media.greaterThan('large')`
      align-items: flex-start;
      margin: 0 auto 0 0;
    `}
  `}
`
