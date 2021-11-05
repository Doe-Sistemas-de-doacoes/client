import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    position: relative;
    justify-content: space-between;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xsmall};
    box-shadow: ${theme.boxShadow.small};
    border-radius: ${theme.border.radius.medium}
    gap: ${theme.spacings.xsmall};
    background: #fff;

    svg {
      color: ${theme.colors.red};
    }
  `}
`

export const LoaderWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.4);
    z-index: ${theme.layers.overlay};
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
  `}
`

export const Delete = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    color: ${theme.colors.red};
    position: absolute;
    top: ${theme.spacings.xsmall};
    right: ${theme.spacings.xsmall};
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxsmall};
  `}
`

export const Value = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-size: ${theme.font.sizes.medium};
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xxxsmall};
    min-width: 14rem;
  `}
`
