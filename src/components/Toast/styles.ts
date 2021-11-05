import styled, { css, DefaultTheme } from 'styled-components'
import { ToastTypes } from '.'

const iconWrapperModifiers = {
  success: (theme: DefaultTheme) => css`
    svg {
      color: ${theme.colors.primary};
    }
  `,
  error: (theme: DefaultTheme) => css`
    svg {
      color: ${theme.colors.red};
    }
  `,
  hiding: () => css`
    animation: leftToRight 0.25s linear forwards ! !important;
  `
}

export const ToastWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    pointer-events: none;
    z-index: ${theme.layers.alwaysOnTop};
    padding-top: ${theme.spacings.medium};
    gap: ${theme.spacings.xsmall};
    position: absolute;
    overflow: hidden;
    max-width: min(30rem, 100vw);
    height: 100vh;
    width: 100vw;
    bottom: 0;
    right: 0;
    top: 0;

    @keyframes leftToRight {
      from {
        margin-left: 100%;
      }
      to {
        margin-left: 0;
      }
    }

    @keyframes rightToLeft {
      from {
        margin-left: 0;
      }
      to {
        margin-left: 100%;
      }
    }
  `}
`

export const Wrapper = styled.div`
  display: flex;
  min-height: 6.4rem;
  width: 100%;
  min-width: min(30rem, 100vw);
  animation: leftToRight 0.25s linear forwards;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.15);
`

export type IconWrapperProps = {
  type: ToastTypes
  hiding?: boolean
}

export const IconWrapper = styled.div<IconWrapperProps>`
  ${({ theme, type, hiding }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.darkGray};
    border-top-left-radius: ${theme.border.radius.medium};
    border-bottom-left-radius: ${theme.border.radius.medium};
    width: 7rem;

    svg {
      width: ${theme.spacings.medium};
      height: ${theme.spacings.medium};
    }

    ${iconWrapperModifiers[type!](theme)}
    ${!!hiding && iconWrapperModifiers.hiding()}
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    flex: 1;
    display: flex;
    align-items: center;
    padding: ${theme.spacings.small} ${theme.spacings.xsmall};
    background: ${theme.colors.lightGray};
  `}
`

export const Message = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-size: ${theme.font.sizes.small};
  `}
`
