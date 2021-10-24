import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.small};
    margin: 0 auto;
    max-width: 124rem;
  `}
`

export const Decoration = styled.div`
  display: none;
  position: absolute;
  max-height: min(90vh, 56vw);
  pointer-events: none;
  height: 100%;
  z-index: -1;
  right: 0;
  top: 0;

  & > svg {
    height: 100%;
    margin-left: auto;
  }

  ${media.greaterThan('medium')`
    display: block;
  `}
`
