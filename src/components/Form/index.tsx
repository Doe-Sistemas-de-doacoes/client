import styled, { css } from 'styled-components'
import { darken } from 'polished'

import * as InputStyles from 'components/Input/styles'
import * as ButtonStyles from 'components/Button/styles'
import { AlertOctagon } from 'react-feather'

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

type FormErrorProps = {
  children: React.ReactNode
}

export const FormError = ({ children }: FormErrorProps) => (
  <FormErrorWrapper>
    <AlertOctagon /> <p>{children}</p>
  </FormErrorWrapper>
)

export const FormLoading = styled.img.attrs(() => ({
  src: '/img/dots.svg',
  alt: 'Waiting...'
}))`
  width: 4rem;
`

export const FormErrorWrapper = styled.div`
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
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xxsmall};
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.text};
    width: fit-content;

    a {
      text-decoration: none;
      text-transform: uppercase;
      color: ${theme.colors.primary};
      border-bottom: 0.2rem solid ${theme.colors.primary};
      transition: color, border, ${theme.transition.fast};

      &:hover {
        color: ${darken(0.1, theme.colors.primaryDark)};
        border-bottom: 0.1rem solid ${darken(0.1, theme.colors.primaryDark)};
      }
    }
  `}
`
