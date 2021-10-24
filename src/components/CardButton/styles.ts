import styled, { css } from 'styled-components'
import { CardButtonProps } from '.'

export const Wrapper = styled.button`
  ${({ theme }) => css`
    display: flex;
    cursor: pointer;
    padding: ${theme.spacings.xsmall};
    gap: ${theme.spacings.xsmall};
    border-radius: 0.5rem;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
    align-items: center;
    background: #fff;
  `}
`

export type ImageProps = Pick<CardButtonProps, 'size'>

const imageModifiers = {
  small: () => css`
    width: 4rem;
    height: 4rem;
  `,
  medium: () => css`
    width: 10rem;
    height: 8rem;
  `
}

export const Image = styled.img<ImageProps>`
  ${({ size }) => css`
    ${imageModifiers[size!]()}
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xxsmall};

    h3,
    h4 {
      color: ${theme.colors.textEmphasis};
    }
  `}
`

export const Message = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-size: ${theme.font.sizes.small};
  `}
`
