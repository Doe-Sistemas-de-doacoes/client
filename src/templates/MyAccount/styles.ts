import { Form } from 'components/Form'
import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
    align-items: stretch;
    gap: ${theme.spacings.small};
    max-width: 40rem;
    margin-right: auto;
    width: 100%;

    ${Form} {
      display: flex;
      flex-direction: column;
      gap: ${theme.spacings.small};

      & > button {
        margin: 0 0 0 auto;
      }
    }
  `}
`

export const Title = styled.h3`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
  `}
`

export const Heading = styled.h6``

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
