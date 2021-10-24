import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Mobile = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xsmall};
    min-height: 5.6rem;

    ${media.greaterThan('medium')`
      display: none;
    `}
  `}
`

export const Desktop = styled.div`
  ${({ theme }) => css`
    display: none;
    gap: ${theme.spacings.large};
    min-height: 7.2rem;

    span {
      margin-top: 0.5rem;
      /* font-size: ${theme.font.sizes.large}; */
      font-weight: ${theme.font.bold};
      color: ${theme.colors.white};
    }

    @media (min-width: 769px) {
      display: flex;
      align-items: center;
    }
  `}
`
