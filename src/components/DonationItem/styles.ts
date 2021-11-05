import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    background: #fff;
    gap: ${theme.spacings.xsmall};
    border-radius: ${theme.border.radius.medium};
    padding: ${theme.spacings.xsmall};
    box-shadow: ${theme.boxShadow.medium};
  `}
`

export const Img = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 24rem;
    padding: ${theme.spacings.xsmall};
    border-radius: ${theme.border.radius.medium};
    background: ${theme.colors.lightGray};
  `}
`

export const Type = styled.h5`
  ${({ theme }) => css`
    color: ${theme.colors.textEmphasis};
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.text};
  `}
`
