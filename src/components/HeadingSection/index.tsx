import styled, { css } from 'styled-components'

export const HeadingSection = styled.h6`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.xsmall};
    white-space: nowrap;
    text-transform: uppercase;
    font-weight: bold;
    gap: 0.8rem;

    &::after {
      content: '';
      height: 2px;
      background: ${theme.colors.divider};
      width: 100%;
    }
  `}
`

export default HeadingSection
