import styled, { css, DefaultTheme } from 'styled-components'

export type BadgeProps = {
  size?: 'small' | 'medium'
}

const badgeModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxxsmall} ${theme.spacings.xsmall};
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.small};
  `
}

export const Badge = styled.span<BadgeProps>`
  ${({ theme, size = 'medium' }) => css`
    text-align: center;
    width: fit-content;
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
    border-radius: ${theme.border.radius.small};
    background: ${theme.colors.secondary};
    box-shadow: ${theme.boxShadow.medium};

    ${badgeModifiers[size](theme)}
  `}
`
