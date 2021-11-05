import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.small};
    margin-bottom: ${theme.spacings.small};
    width: 100%;
  `}
`
