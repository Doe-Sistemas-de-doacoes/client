import styled, { css } from 'styled-components'
import { Form, FormError } from 'components/Form'

export const Wrapper = styled(Form)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    ${FormError} {
      margin-top: ${theme.spacings.xxsmall};
    }
  `}
`

export const FieldsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;

    & > div:last-of-type {
      margin-top: ${theme.spacings.xxsmall};
    }
  `}
`

export const ForgotPassword = styled.a`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxsmall};
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.textEmphasis};
    text-decoration: underline;
    text-align: end;
  `}
`
