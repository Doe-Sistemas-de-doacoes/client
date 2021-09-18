import styled, { css } from 'styled-components'

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

export const ForgotPassword = styled.p`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxsmall};
    font-size: ${theme.font.sizes.xsmall};
    text-decoration: underline;
    text-align: end;
  `}
`
