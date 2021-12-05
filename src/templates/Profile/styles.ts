import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Main = styled.main`
  width: 100%;
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
