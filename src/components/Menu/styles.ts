import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    z-index: ${theme.layers.menu};
    position: relative;
    width: 100%;

    @media screen and (max-width: 767px) {
      ${LogoWrapper} {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
      }

      ${IconWrapper} {
        display: flex;
      }
    }
  `}
`

export const LogoWrapper = styled.div``

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    display: none;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 2.4rem;
    height: 2.4rem;
  `}
`

export const MenuGroup = styled.div`
  ${({ theme }) => css`
    display: none;
    flex-grow: 1;
    justify-content: flex-end;
    color: ${theme.colors.text};
    align-items: center;
    gap: ${theme.spacings.medium};

    ${media.greaterThan('medium')`  
      display: flex;
    `}
  `}
`

export const MenuNav = styled.div`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
			margin-left: ${theme.spacings.xlarge};
		`}
  `}
`

export const MenuLink = styled.a`
  ${({ theme }) => css`
    position: relative;
    cursor: pointer;
    color: ${theme.colors.text};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.semiBold};
    margin: 0.3rem ${theme.spacings.small} 0;
    text-decoration: none;
    text-align: center;

    &:hover {
      &::after {
        content: '';
        position: absolute;
        transform: translateY(${theme.spacings.xxxsmall});
        background-color: ${theme.colors.primaryDark};
        animation: hoverAnimation 0.2s forwards;
        display: block;
        height: 0.3rem;
      }

      @keyframes hoverAnimation {
        from {
          width: 0;
          left: 50%;
        }
        to {
          width: 100%;
          left: 0;
        }
      }
    }
  `}
`

export const MyAccount = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xxsmall};
    color: ${theme.colors.textEmphasis};
    cursor: pointer;
    text-decoration: none;

    img {
      width: ${theme.spacings.xsmall};
      height: ${theme.spacings.xsmall};
      border: 0.2rem solid ${theme.colors.primaryDark};
    }
  `}
`

export const SignIn = styled.a`
  ${({ theme }) => css`
    display: flex;
    color: ${theme.colors.text};
    padding: ${theme.spacings.xxxsmall};
    border-bottom: 0.2rem solid ${theme.colors.text};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.semiBold};
    text-transform: uppercase;
    text-decoration: none;
    border-radius: 4px;
  `}
`

type MenuFullProps = {
  isOpen: boolean
}

export const MenuFull = styled.nav<MenuFullProps>`
  ${({ theme, isOpen }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: ${theme.colors.white};
    position: fixed;
    z-index: ${theme.layers.menu};
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    overflow: hidden;
    transition: opacity ${theme.transition.default};
    opacity: ${isOpen ? 1 : 0};
    pointer-events: ${isOpen ? 'all' : 'none'};
    > svg {
      position: absolute;
      top: 0;
      right: 0;
      margin: ${theme.spacings.xsmall};
      cursor: pointer;
      width: 2.4rem;
      height: 2.4rem;
    }
    ${MenuNav} {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      flex-direction: column;
    }
    ${MenuLink} {
      color: ${theme.colors.textEmphasis};
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.xlarge};
      margin-bottom: ${theme.spacings.small};
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform ${theme.transition.default};
    }
    ${RegisterBox} {
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform ${theme.transition.default};
    }
  `}
`

export const RegisterBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 ${theme.spacings.xlarge} ${theme.spacings.xlarge};
    > span {
      display: block;
      margin: ${theme.spacings.xxsmall} 0;
      font-size: ${theme.font.sizes.xsmall};
    }
  `}
`

export const CreateAccount = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    color: ${theme.colors.primary};
    border-bottom: 0.2rem solid ${theme.colors.primary};
  `}
`
