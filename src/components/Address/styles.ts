import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xxsmall};
    align-items: flex-end;
  `}
`

export const ItemsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin-bottom: ${theme.spacings.xsmall};
    gap: ${theme.spacings.xxsmall};
    width: 100%;
  `}
`

export const AddressItem = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
    background: #fff;
    gap: ${theme.spacings.small};

    svg {
      color: ${theme.colors.red};
    }
  `}
`
