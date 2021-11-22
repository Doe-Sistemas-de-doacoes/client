import styled, { css, DefaultTheme } from 'styled-components'
import { AddressComponentProps } from '.'

type WrapperProps = Pick<AddressComponentProps, 'appearance'>

const wrapperModifiers = {
  full: (theme: DefaultTheme) => css`
    flex: 1;
    min-height: 26rem;

    ${ItemsWrapper} {
      flex: 1;
    }

    ${NotFound} {
      margin: auto;
    }

    & > button {
      margin-top: ${theme.spacings.small};
    }
  `,
  compact: (theme: DefaultTheme) => css`
    ${ItemsWrapper} {
      flex: 1;
    }

    ${NotFound} {
      background: #fff;
      padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
      border-radius: ${theme.border.radius.medium};
      box-shadow: ${theme.boxShadow.small};
    }

    & > button {
      margin-top: ${theme.spacings.xsmall};
    }
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, appearance }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    ${wrapperModifiers[appearance!](theme)}
  `}
`

export const ItemsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xsmall};
    width: 100%;
  `}
`

export const NotFound = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Heading = styled.h5`
  ${({ theme }) => css`
    grid-area: heading;
    width: 100%;
    margin: ${theme.spacings.xxsmall} 0;
  `}
`

export const Form = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xsmall};
  `}
`

export const FormBody = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    gap: ${theme.spacings.xsmall};

    & > div {
      flex: 1;
      min-width: 40%;

      &:nth-child(1) {
        flex: 2 0 10rem;
      }

      &:nth-child(2) {
        flex: 1 0 6rem;
      }

      &:nth-child(3) {
        flex: 3 0 60%;
      }

      &:nth-child(4) {
        flex: 2 0 10rem;
      }

      &:nth-child(5) {
        flex: 1 0 6rem;
      }
    }
  `}
`

export const Footer = styled.div`
  ${({ theme }) => css`
    flex: 1;
    display: flex;
    min-width: 80%;
    justify-content: flex-end;
    gap: ${theme.spacings.xxsmall};
  `}
`
