import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    padding: ${theme.spacings.small};
    gap: ${theme.spacings.xsmall};
    border-radius: 0.5rem;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
    align-items: center;
    background: #fff;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xxsmall};
  `}
`

export const Heading = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.textEmphasis};
  `}
`

export const Message = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.text};
  `}
`
