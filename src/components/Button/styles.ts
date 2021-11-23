import styled, { css, DefaultTheme } from 'styled-components'
import { darken } from 'polished'

import { ButtonProps } from '.'

export type WrapperProps = {
  hasIcon: boolean
} & Pick<ButtonProps, 'size' | 'color' | 'fullWidth' | 'appearance'>

const wrapperModifiers = {
  solid: (theme: DefaultTheme, color: string) => css`
    color: ${theme.colors.white};
    background: ${color};

    &:hover {
      background: ${darken(0.1, color)};
    }
  `,
  outline: (color: string) => css`
    color: ${color};
    border: 2px solid currentColor;
    background: transparent;

    &:hover {
      color: ${darken(0.1, color)};
    }
  `,
  small: (theme: DefaultTheme) => css`
    height: 3.2rem;
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.bold};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    border-radius: ${theme.border.radius.small};

    svg {
      height: ${theme.font.sizes.small};
      width: 1rem;
    }
  `,
  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,
  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  withIcon: (theme: DefaultTheme) => css`
    svg {
      width: 1.5rem;
      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `,
  disabled: () => css`
    &:disabled {
      cursor: not-allowed;
      filter: saturate(30%);
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({
    theme,
    color = 'primary',
    size,
    fullWidth,
    hasIcon,
    disabled,
    appearance
  }) => css`
    border: 0;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: ${theme.font.family};
    border-radius: ${theme.border.radius.medium};
    text-decoration: none;

    ${appearance === 'solid' &&
    wrapperModifiers.solid(theme, theme.colors[color])}
    ${appearance === 'outline' && wrapperModifiers.outline(theme.colors[color])}

    ${!!size && wrapperModifiers[size](theme)};
    ${!!fullWidth && wrapperModifiers.fullWidth()};
    ${!!hasIcon && wrapperModifiers.withIcon(theme)};
    ${disabled && wrapperModifiers.disabled()};
  `}
`
