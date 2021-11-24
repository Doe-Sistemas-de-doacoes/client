import styled, { css, DefaultTheme } from 'styled-components'
import { Wrapper as Toast } from 'components/Toast/styles'

export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    padding: ${theme.spacings.small};
    background: ${theme.colors.white};
    border-bottom: 1px solid ${theme.colors.divider};
    box-shadow: ${theme.boxShadow.small};
  `}
`

export const Main = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: ${theme.spacings.small};
  `}
`

export const Footer = styled.footer`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-end;
    padding: ${theme.spacings.small};
    border-top: 1px solid ${theme.colors.divider};
    gap: ${theme.spacings.xsmall};
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    background: ${theme.colors.white};
    z-index: ${theme.layers.alwaysOnTop};
    box-shadow: ${theme.boxShadow.medium};
    border: ${theme.border.radius.medium};
    transform: translate(-50%, -50%);
    color: ${theme.colors.text};
    width: min(100%, 60rem);
    position: fixed;
    left: 50%;
    top: 50%;
  `}
`

export const Overlay = styled.div`
  ${({ theme }) => css`
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: ${theme.layers.overlay};
  `}
`

type WrapperProps = {
  hiding?: boolean
}

const wrapperModifiers = {
  open: (theme: DefaultTheme) => css`
    animation: show ${theme.transition.default} forwards;
  `,
  close: (theme: DefaultTheme) => css`
    animation: hiding ${theme.transition.default} forwards;
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, hiding }) => css`
    width: max-content;

    ${Content},
    ${Toast},
    ${Overlay} {
      ${wrapperModifiers[hiding ? 'close' : 'open'](theme)}
    }

    ${Toast} {
      z-index: ${theme.layers.alwaysOnTop};
      width: min(60rem, 90rem);
      transform: translate(-50%, -50%);
      position: fixed;
      left: 50%;
      top: 50%;
    }

    @keyframes show {
      from {
        opacity: 0;
        pointer-events: none;
      }
      to {
        opacity: 1;
        pointer-events: auto;
      }
    }

    @keyframes hiding {
      from {
        opacity: 1;
        pointer-events: auto;
      }
      to {
        opacity: 0;
        pointer-events: none;
      }
    }
  `}
`
