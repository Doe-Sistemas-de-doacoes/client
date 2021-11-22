import styled, { css } from 'styled-components'
import { Wrapper as CardButton } from 'components/CardButton/styles'

export const Section = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xsmall};
  `}
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.large};
    width: 100%;

    & > button {
      box-shadow: ${theme.boxShadow.medium};
      margin: ${theme.spacings.small} auto;
      width: min(40rem, 100%);
    }
  `}
`

export const Main = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.medium};
    margin-bottom: ${theme.spacings.small};
    width: 100%;

    h6::after {
      display: none;
    }

    & > img {
      height: 100%;
    }

    ${CardButton} {
      background: ${theme.colors.white};

      h3 {
        font-size: ${theme.font.sizes.medium};
      }

      p {
        font-size: ${theme.font.sizes.small};
        text-align: left;
      }
    }

    @media screen and (min-width: 1000px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: minmax(20rem, 26rem) 1fr;
    }
  `}
`
