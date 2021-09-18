import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const Loader = styled.div`
  ${({ theme }) => css`
    border-radius: 50%;
    border: 0.35rem solid rgba(255, 255, 255, 0.5);
    border-left-color: ${theme.colors.white};
    animation: rotation 0.75s linear infinite;
    width: 1.8rem;
    height: 1.8rem;
  `}

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
