import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.small};

    ${media.greaterThan('small')`
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
    `}
  `}
`

export const ModalWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.medium};
  `}
`

export const StateWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  width: 100%;
  min-height: 52rem;
`

export const Image = styled.img`
  ${({ theme }) => css`
    width: 40rem;
    max-height: 35rem;
    border-radius: ${theme.border.radius.medium};
    box-shadow: ${theme.boxShadow.medium};
    object-fit: contain;
    margin: 0 auto;
  `}
`

export const Header = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    gap: ${theme.spacings.medium};
    align-items: center;
  `}
`

export const Title = styled.h5``

export const Section = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xxsmall};

    p {
      display: flex;
      gap: ${theme.spacings.xxsmall};
    }

    h6 {
      margin-bottom: ${theme.spacings.xxxsmall};
    }
  `}
`

export const ShowMore = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-column: 1 / -1;
  height: 10rem;
`

export const ShowMoreButton = styled.div`
  ${({ theme }) => css`
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    color: ${theme.colors.text};
    > svg {
      color: ${theme.colors.primary};
    }
  `}
`
export const ShowMoreLoading = styled.img`
  width: 4rem;
`
