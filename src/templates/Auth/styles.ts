import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { Footer } from 'components/Footer/styles'
import { FormLink } from 'components/Form'

import { AuthProps } from '.'

type FormWrapperProps = Pick<AuthProps, 'formHeight'>

export const Content = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${theme.spacings.small};
    gap: ${theme.spacings.xxsmall};

    ${FormLink} {
      width: fit-content;
    }

    ${media.lessThan('medium')`
      ${FormLink} {
          display: flex;
          flex-direction: column;
          align-items: center
      }
    `}
  `}
`

export const Decoration = styled.section`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.lightGray};
    padding: 10vh 10vw;
    grid-row: span 2;
  `}
`

export const HeaderSection = styled.header`
  ${({ theme }) => css`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: ${theme.spacings.xxsmall};
    align-items: center;
    width: fit-content;
  `}
`

export const Heading = styled.h1`
  max-width: 200px;
  text-align: center;
`

export const FormWrapper = styled.div<FormWrapperProps>`
  ${({ theme, formHeight }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.small};
    justify-content: space-between;
    align-items: center;
    max-width: 36rem;
    max-height: ${formHeight}vh;
    width: 100%;
    height: 100%;
  `}
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-rows: 1fr auto;
    height: 100vh;
    width: 100vw;

    ${Footer} {
      padding: ${theme.spacings.small};
      text-align: center;
    }

    @media (min-width: 1000px) {
      grid-template-columns: 1fr 1fr;

      ${HeaderSection} {
        align-items: flex-start;
        justify-content: flex-end;
        gap: ${theme.spacings.small};
      }
      ${Heading} {
        text-align: start;
      }
      ${Content} {
        justify-items: flex-start;
        align-items: flex-start;
        padding: ${theme.spacings.small} ${theme.spacings.medium};
        grid-template-rows: 4fr 6fr;
        gap: 6vh;
      }
      ${FormWrapper} {
        align-items: flex-start;
        justify-content: flex-start;
        gap: 5vh;
      }
      ${Footer} {
        padding: ${theme.spacings.small} ${theme.spacings.medium};
        text-align: left;
      }
    }
  `}
`

// export const Content = styled.section`
//   ${({ theme }) => css`
//     display: grid;
//     justify-items: center;
//     grid-template-rows: 1fr 1fr;
//     padding: ${theme.spacings.small};
//     gap: ${theme.spacings.xxsmall};
//     height: 100%;
//     width: 100%;

//     ${FormLink} {
//       width: fit-content;
//     }

//     ${media.lessThan('medium')`
//       ${FormLink} {
//           display: flex;
//           flex-direction: column;
//           align-items: center
//       }
//     `}
//   `}
// `

// export const Decoration = styled.section`
//   ${({ theme }) => css`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     background-color: ${theme.colors.lightGray};
//     padding: 10vh 10vw;
//     grid-row: span 2;
//   `}
// `

// export const HeaderSection = styled.header`
//   ${({ theme }) => css`
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     gap: ${theme.spacings.xxsmall};
//     align-items: center;
//     width: fit-content;
//   `}
// `

// export const Heading = styled.h1`
//   max-width: 200px;
//   text-align: center;
// `

// export const FormWrapper = styled.div`
//   ${({ theme }) => css`
//     display: flex;
//     flex-direction: column;
//     gap: ${theme.spacings.small};
//     justify-content: space-between;
//     align-items: center;
//     max-width: 36rem;
//     width: 100%;
//     height: 100%;
//   `}
// `

// export const Wrapper = styled.div`
//   ${({ theme }) => css`
//     display: grid;
//     grid-template-rows: 1fr auto;
//     height: 100vh;
//     width: 100vw;

//     ${Footer} {
//       padding: ${theme.spacings.small};
//       text-align: center;
//     }

//     @media (min-width: 1000px) {
//       grid-template-columns: 1fr 1fr;

//       ${HeaderSection} {
//         align-items: flex-start;
//         gap: ${theme.spacings.small};
//         margin-top: auto;
//       }
//       ${Heading} {
//         text-align: start;
//       }
//       ${Content} {
//         justify-items: flex-start;
//         padding: ${theme.spacings.small} ${theme.spacings.medium};
//         grid-template-rows: 4fr 6fr;
//         gap: 6vh;
//       }
//       ${FormWrapper} {
//         align-items: flex-start;
//         justify-content: flex-start;
//         gap: 5vh;
//       }
//       ${Footer} {
//         padding: ${theme.spacings.small} ${theme.spacings.medium};
//         text-align: left;
//       }
//     }
//   `}
// `
