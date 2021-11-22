import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${theme.spacings.medium};

    & > img {
      max-height: 40vh;
    }
  `}
`

export const Section = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap: ${theme.spacings.xxsmall};
    max-width: 46rem;
  `}
`
export const Action = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  button {
    width: min(30rem, 100%);
  }
`
