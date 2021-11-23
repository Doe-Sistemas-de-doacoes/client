import styled, { css } from 'styled-components'
import { Spacings } from 'styles/theme'

type LoaderProps = {
  size?: Spacings
}

const Loader = styled.span<LoaderProps>`
  ${({ theme, size = 'medium' }) => css`
    width: ${theme.spacings[size]};
    height: ${theme.spacings[size]};
    border: calc(${theme.spacings[size]} / 8) solid ${theme.colors.divider};
    border-bottom-color: ${theme.colors.primary};
    border-radius: 50%;
    display: inline-block;
    animation: rotation 1s linear infinite;

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `}
`

export default Loader
