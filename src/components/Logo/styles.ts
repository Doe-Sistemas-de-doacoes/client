import styled, { css } from 'styled-components'

import { LogoProps } from '.'

const wrapperModifiersWithTitle = {
  xsmall: () => css`
    width: 4.6rem;
    height: 3.9rem;
  `,
  small: () => css`
    width: 5.6rem;
    height: 4.9rem;
  `,
  normal: () => css`
    width: 12rem;
    height: 5.2rem;
  `,
  large: () => css`
    width: 14rem;
    height: 6rem;
  `
}

const wrapperModifiersWithoutTitle = {
  xsmall: () => css`
    width: 4.6rem;
    height: 3.9rem;
  `,
  small: () => css`
    width: 5.6rem;
    height: 4.9rem;
  `,
  normal: () => css`
    width: 8rem;
    height: 7rem;
  `,
  large: () => css`
    width: 14rem;
    height: 12rem;
  `
}

export const Wrapper = styled.div<LogoProps>`
  ${({ size, withTitle }) => css`
    ${(withTitle
      ? wrapperModifiersWithTitle[size!]
      : wrapperModifiersWithoutTitle[size!])()}
  `}
`
