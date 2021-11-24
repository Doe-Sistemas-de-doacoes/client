import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    background: ${theme.colors.extraLightGray};
    border-radius: ${theme.border.radius.small};
    box-shadow: ${theme.boxShadow.medium};

    &:hover ${Actions} {
      opacity: 1;
      transform: translate(-${theme.spacings.xsmall}, ${theme.spacings.xsmall});
    }
  `}
`

export const ImageWrapper = styled.div`
  position: relative;
`

export const Image = styled.img`
  ${({ theme }) => css`
    width: 100%;
    height: 24rem;
    grid-area: image;
    border-radius: ${theme.border.radius.small};
    background: ${theme.colors.lightGray};
    overflow: hidden;
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
      'type badge'
      'description description';
    gap: ${theme.spacings.xsmall};
  `}
`

export const Info = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xsmall};
  `}
`

export const Type = styled.h5`
  ${({ theme }) => css`
    grid-area: type;
    margin: auto 0;
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

export const DropdownTitle = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: nowrap;
    gap: ${theme.spacings.xxsmall};
    color: ${theme.colors.text};
    font-size: ${theme.font.sizes.medium};

    p {
      white-space: nowrap;
    }
  `}
`

export const DropdownHeading = styled.h5`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`

export const DropdownContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xsmall};
    padding: ${theme.spacings.xsmall};
    color: ${theme.colors.text};
    font-size: ${theme.font.sizes.small};

    p {
      display: flex;
      align-items: center;
      gap: ${theme.spacings.xsmall};
    }
  `}
`

export const Actions = styled.div`
  ${({ theme }) => css`
    width: 3.2rem;
    height: 3.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transform: translateY(-100%);
    color: ${theme.colors.red};
    border-radius: ${theme.border.radius.small};
    background: ${theme.colors.white};
    box-shadow: ${theme.boxShadow.medium};
    transition: transform ${theme.transition.default},
      opacity ${theme.transition.default};
    position: absolute;
    opacity: 0;
    right: 0;
    top: 0;
  `}
`

export const Delivery = styled.span`
  ${({ theme }) => css`
    grid-area: badge;
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
    text-align: center;
    width: fit-content;
    padding: ${theme.spacings.xxxsmall} ${theme.spacings.xsmall};
    margin-left: auto;
    background: ${theme.colors.secondary};
    border-radius: ${theme.border.radius.small};
    box-shadow: ${theme.boxShadow.medium};
  `}
`
