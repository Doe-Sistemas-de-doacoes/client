import styled, { css } from 'styled-components'
import { darken } from 'polished'

import * as InputStyles from 'components/Input/styles'
import * as ButtonStyles from 'components/Button/styles'

export const Form = styled.form`
  ${({ theme }) => css`
    width: 100%;

    ${InputStyles.Wrapper} {
      margin: 1.2rem 0;
    }
    ${ButtonStyles.Wrapper} {
      margin-top: ${theme.spacings.xsmall};
    }
  `}
`

export const FormLoading = styled.img.attrs(() => ({
  src: '/img/dots.svg',
  alt: 'Waiting...'
}))`
  width: 4rem;
`

export const FormError = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    font-size: ${theme.font.sizes.small};
    gap: ${theme.spacings.xxsmall};
    color: red;

    svg {
      width: 1.6rem;
      height: 1.6rem;
    }
  `}
`

export const FormLink = styled.div`
  ${({ theme }) => css`
    width: fit-content;
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.text};
    text-align: center;

    a {
      color: ${theme.colors.primary};
      text-decoration: none;
      margin: 0 ${theme.spacings.xxsmall};
      text-transform: uppercase;
      border-bottom: 0.1rem solid ${theme.colors.primary};
      transition: color, border, ${theme.transition.fast};

      &:hover {
        color: ${darken(0.1, theme.colors.primaryDark)};
        border-bottom: 0.1rem solid ${darken(0.1, theme.colors.primaryDark)};
      }
    }
  `}
`
