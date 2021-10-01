import styled, { css } from 'styled-components'

export const Footer = styled.footer`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    width: fit-content;
  `}
`

export const FooterText = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
  `}
`
