import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xlarge};
    max-width: min(40rem, 100%);
  `}
`

export const Section = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xsmall};
    align-items: center;
    text-align: center;

    button {
      max-width: 20rem;
      margin-top: ${theme.spacings.small};
    }
  `}
`
