import media from 'styled-media-query'
import styled, { css } from 'styled-components'

import { Footer } from 'components/Footer/styles'
import { Wrapper as CardButton } from 'components/CardButton/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${theme.spacings.small};
    overflow-y: auto;
    /* padding: ${theme.spacings.xsmall}; */
    height: 100vh;

    ${Footer} {
      margin-top: min(2vh, ${theme.spacings.medium});
    }

    @media (max-width: 767px) {
      ${CardButton}:not(:first-child) {
        text-align: center;
        flex-direction: column;
      }
    }

    ${media.greaterThan('small')`
      gap: ${theme.spacings.small};
      padding: ${theme.spacings.small};

      ${Footer} {
        margin-top: min(6vh, ${theme.spacings.large});
      }
    `}

    ${media.greaterThan('medium')`
      align-items: flex-start;
      padding: ${theme.spacings.xsmall} ${theme.spacings.xlarge};
      justify-content: flex-end;

      ${Header} {
        flex: initial;
        align-items: flex-start;
      }

      ${Hello} {
        margin-top: ${theme.spacings.small};
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
      max-width: 88rem;
      margin: 0 auto;
    `}
  `}
`

export const Header = styled.header`
  ${({ theme }) => css`
    flex: 2;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    font-family: ${theme.font.family_pacifico};
    color: ${theme.colors.text};
    line-height: 1.4;
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
