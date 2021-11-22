import styled, { css } from 'styled-components'
import { AddressItemProps } from '.'

export type WrapperProps = Pick<AddressItemProps, 'pickable'>

const wrapperModifiers = {
  pickable: () => css`
    cursor: pointer;
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, pickable }) => css`
    display: flex;
    justify-content: space-between;
    position: relative;
    gap: ${theme.spacings.xsmall};
    padding: ${theme.spacings.small};
    font-size: ${theme.font.sizes.small};
    border-radius: ${theme.border.radius.medium};
    box-shadow: ${theme.boxShadow.medium};
    background: ${theme.colors.white};

    &[aria-checked='true'] {
      box-shadow: ${theme.boxShadow.medium},
        0px 0px 2px 2px ${theme.colors.primary};
    }

    ${!!pickable && wrapperModifiers.pickable()}
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: ${theme.spacings.xxsmall};
  `}
`

export const Actions = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xxsmall};
    align-items: center;
  `}
`

export const LoaderWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xxsmall};
    justify-content: center;
    cursor: wait;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.4);
    z-index: 1;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
  `}
`

export const Icon = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    color: ${theme.colors.gray};
    padding: ${theme.spacings.xxxsmall};
    background: ${theme.colors.extraLightGray};
    transition: color ${theme.transition.default};
    border-radius: 0.2rem;

    &:hover {
      color: ${theme.colors.primaryDark};
    }
  `}
`

export const Delete = styled(Icon)`
  ${({ theme }) => css`
    color: ${theme.colors.red} !important;
    transition: opacity ${theme.transition.default};
    opacity: 0.75;

    &:hover {
      opacity: 1;
    }
  `}
`
