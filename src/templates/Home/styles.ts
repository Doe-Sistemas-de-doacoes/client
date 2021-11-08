import media from 'styled-media-query'
import styled, { css } from 'styled-components'

import { Wrapper as CardButton } from 'components/CardButton/styles'
import { Footer } from 'components/Footer/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.large};
    align-items: center;
    width: 100%;

    @media (max-width: 767px) {
      ${CardButton}:not(:first-child) {
        text-align: center;
        flex-direction: column;

        h3 {
          text-align: center;
        }
      }
    }

    @media (min-height: 768px) {
      gap: ${theme.spacings.huge};
    }

    ${media.greaterThan('medium')`
      align-items: flex-start;
      gap: ${theme.spacings.large};
      justify-content: flex-end;

      ${Header} {
        justify-content: flex-end;
        align-items: flex-start;
      }


      ${Main} {
        max-width: unset;
        grid-template-areas:
          'account .'
          'donation receive'
          'connections .';
      }

    `}

    ${media.greaterThan('huge')`
      max-width: ${theme.grid.container.small};
      margin: 0 auto;

      ${Footer} {
        margin-top: ${theme.spacings.medium};
      }
    `}
  `}
`

export const Header = styled.header`
  ${({ theme }) => css`
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    font-family: ${theme.font.family_pacifico};
    color: ${theme.colors.text};
    line-height: 1.4;

    @media (min-height: 900px) {
      justify-content: flex-end;
    }
  `}
`

export const Hello = styled.section`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xxsmall};
    max-width: 30rem;
    width: 100%;
  `}
`

export const Main = styled.main`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${theme.spacings.xsmall};
    max-width: 30rem;

    grid-template-areas:
      'account account'
      'donation receive'
      'connections connections';

    & > *:first-child {
      grid-area: account;
    }

    & > *:nth-child(2) {
      grid-area: donation;
    }

    & > *:nth-child(3) {
      grid-area: receive;
    }
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xhuge};
  `}
`

export const Connections = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.light};
    grid-area: connections;
  `}
`

export const SignOut = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    border-radius: ${theme.border.radius.small};
    padding: ${theme.spacings.xxsmall};
    margin-left: auto;
    cursor: pointer;
  `}
`
