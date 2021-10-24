import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin-top: ${theme.spacings.xsmall};
    gap: ${theme.spacings.xxsmall};
    max-width: 32rem;

    input {
      width: 100%;
    }
  `}
`

export const Title = styled.h3`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
  `}
`

export const Heading = styled.h5`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`

export const Main = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: ${theme.spacings.small} 0;
    align-items: flex-end;
    gap: ${theme.spacings.small};
  `}
`

export const Section = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xxsmall};
    width: 100%;
  `}
`
