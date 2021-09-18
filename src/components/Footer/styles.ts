import styled, { css } from 'styled-components'

export const Footer = styled.footer`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-size: ${theme.font.sizes.xsmall};
  `}
`
