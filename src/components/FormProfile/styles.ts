import media from 'styled-media-query'
import styled, { css } from 'styled-components'

export const Form = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xsmall};
    width: 100%;

    ${media.greaterThan('small')`
    gap: ${theme.spacings.small};
    `}
  `}
`

export const Section = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xsmall};
    width: 100%;
  `}
`

export const Footer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    gap: ${theme.spacings.xsmall};
    flex-wrap: wrap;

    button {
      margin-left: auto;
    }
  `}
`
