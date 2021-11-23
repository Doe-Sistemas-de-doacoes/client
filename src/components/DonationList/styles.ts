import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.spacings.xsmall};

    ${media.greaterThan('small')`
      grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
    `}
  `}
`
