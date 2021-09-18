import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const FormLink = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.text};
    text-align: center;

    a {
      color: ${theme.colors.primary};
      text-decoration: none;
      border-bottom: 0.1rem solid ${theme.colors.primary};
      transition: color, border, ${theme.transition.fast};
      &:hover {
        color: ${darken(0.1, theme.colors.primaryDark)};
        border-bottom: 0.1rem solid ${darken(0.1, theme.colors.primaryDark)};
      }
    }
  `}
`
