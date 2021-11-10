import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { Footer } from 'components/Footer/styles'
import { Wrapper as Menu } from 'components/Menu/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: ${theme.spacings.small};
    max-width: ${theme.grid.container.medium};
    gap: ${theme.spacings.small};
    margin: 0 auto;
    width: 100%;

    ${Menu} {
      margin-bottom: ${theme.spacings.xsmall};
    }

    ${media.greaterThan('medium')`
      padding: ${theme.spacings.medium} ${theme.spacings.xlarge};
      gap: ${theme.spacings.medium};
    `}
  `}

  ${Footer} {
    margin-top: auto;
  }
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
