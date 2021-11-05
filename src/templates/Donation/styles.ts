import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.small};
    margin-bottom: ${theme.spacings.small};
    width: 100%;
  `}
`

export const Section = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xsmall};
  `}
`

export const Heading = styled.h5``

export const Main = styled.main`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.spacings.medium};
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  `}
`

export const Action = styled.section`
  ${({ theme }) => css`
    display: grid;
    justify-content: center;
    gap: ${theme.spacings.medium};
    grid-column: 1 / 3;
    grid-row: 3 / 4;

    button {
      min-width: 40rem;
      max-width: 40rem;
    }
  `}
`
