import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    background: ${theme.colors.extraLightGray};
    border-radius: ${theme.border.radius.small};
    box-shadow: ${theme.boxShadow.medium};
  `}
`

export const Image = styled.img`
  ${({ theme }) => css`
    width: 100%;
    height: 24rem;
    grid-area: image;
    border-radius: ${theme.border.radius.small};
    background: ${theme.colors.lightGray};
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: ${theme.spacings.small};
    gap: ${theme.spacings.small};

    ${media.greaterThan('small')`
      padding: ${theme.spacings.medium};
      gap: ${theme.spacings.medium};
    `}
  `}
`

export const Section = styled.section`
  ${({ theme }) => css`
    display: grid;
    grid-template-areas:
      'type date'
      'description description';
    gap: ${theme.spacings.xsmall};
  `}
`

export const Type = styled.h5`
  ${({ theme }) => css`
    grid-area: type;
    color: ${theme.colors.textEmphasis};
  `}
`

export const Date = styled.span`
  ${({ theme }) => css`
    grid-area: date;
    color: ${theme.colors.text};
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.gray};
    text-align: right;
    text-transform: uppercase;
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    grid-area: description;
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.small};
  `}
`

export const Addresses = styled.section`
  ${({ theme }) => css`
    display: flex;
    grid-area: address;
    gap: ${theme.spacings.xsmall};
    flex-direction: column;
  `}
`

export const Address = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xxsmall};
    color: ${theme.colors.text};
    font-size: ${theme.font.sizes.small};
  `}
`
