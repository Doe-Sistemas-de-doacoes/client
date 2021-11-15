import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

export const Nav = styled.nav`
  ${({ theme }) => css`
    display: flex;
    box-shadow: ${theme.boxShadow.medium};
    border-bottom: 0.1rem solid ${theme.colors.lightGray};
    height: fit-content;

    @media screen and (min-width: 960px) {
      flex-direction: column;
      border: 0;
      a:not(:last-child) {
        border-bottom: 0.1rem solid ${theme.colors.lightGray};
      }
    }
  `}
`

const linkModifiers = {
  default: (theme: DefaultTheme) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.text};
  `,

  active: (theme: DefaultTheme) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
  `
}

type LinkProps = {
  isActive?: boolean
}

export const Link = styled.a<LinkProps>`
  ${({ theme, isActive }) => css`
    flex: 1;
    justify-content: center;
    background: ${theme.colors.white};
    color: ${theme.colors.text};
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    transition: background, color, ${theme.transition.default};

    &:hover {
      background: ${theme.colors.primary};
      color: ${theme.colors.white};
    }
    > span {
      display: none;
      margin-left: ${theme.spacings.xsmall};
    }

    ${media.greaterThan('medium')`
      /* flex: unset; */
      justify-content: initial;

      > span {
        display: initial;
      }
    `}
    ${!isActive && linkModifiers.default(theme)};
    ${isActive && linkModifiers.active(theme)};
  `}
`
