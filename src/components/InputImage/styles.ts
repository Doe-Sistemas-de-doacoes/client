import styled, { css, DefaultTheme } from 'styled-components'

export type WrapperProps = {
  withBackground: boolean
}

const wrapperModifiers = {
  background: (theme: DefaultTheme) => css`
    background: ${theme.colors.lightGray};
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, withBackground }) => css`
    display: inline-block;
    position: relative;
    padding-bottom: 80%;
    width: 100%;
    height: 0;

    ${!!withBackground && wrapperModifiers.background(theme)}
  `}
`

export const Image = styled.img`
  position: absolute;
  object-fit: contain;
  height: 100%;
  width: 100%;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
`

export const Info = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacings.xxsmall};
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
  `}
`

export const Label = styled.label`
  display: block;
  width: 80%;
  position: relative;
  cursor: pointer;
`

export const Input = styled.input`
  display: none;
`
