import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Main = styled.main`
  ${({ theme }) => css`
    width: 100%;

    @media screen and (min-width: 960px) {
      display: grid;
      grid-template-columns: 32rem 1fr;
      gap: ${theme.spacings.small};
    }
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xsmall};
    background-color: ${theme.colors.white};
    box-shadow: ${theme.boxShadow.medium};
    padding: ${theme.spacings.xsmall};
    color: ${theme.colors.text};

    ${media.greaterThan('small')`
      gap: ${theme.spacings.small};
      padding: ${theme.spacings.small};
    `}
  `}
`
