import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xxsmall};
    width: 100%;

    button {
      margin-top: ${theme.spacings.small};
      margin-right: auto;
    }
  `}
`
