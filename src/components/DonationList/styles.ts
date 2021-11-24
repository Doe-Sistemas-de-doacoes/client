import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.spacings.small};

    ${media.greaterThan('small')`
      grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
    `}
  `}
`

export const StateWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  width: 100%;
  min-height: 52rem;
`
