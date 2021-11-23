import styled, { css, DefaultTheme } from 'styled-components'
import { Spacings } from 'styles/theme'

export type ContainerProps = {
  flexFull?: boolean
  center?: boolean
  padding?: Spacings
}

const containerModifiers = {
  flexFull: () => css`
    flex: 1;
  `,
  center: () => css`
    align-items: center;
    justify-content: center;
  `,
  gutter: (theme: DefaultTheme) => css`
    padding-left: calc(${theme.grid.gutter} / 2);
    padding-right: calc(${theme.grid.gutter} / 2);
  `,
  padding: (theme: DefaultTheme, padding: Spacings) => css`
    padding-left: ${theme.spacings[padding]};
    padding-right: ${theme.spacings[padding]};
  `
}

export const Container = styled.div<ContainerProps>`
  ${({ theme, flexFull, center, padding }) => css`
    width: 100%;
    display: flex;
    max-width: ${theme.grid.container.medium};
    margin-left: auto;
    margin-right: auto;

    ${!!flexFull && containerModifiers.flexFull()}
    ${!!center && containerModifiers.center()} 
    ${!padding && containerModifiers.gutter(theme)}
    ${!!padding && containerModifiers.padding(theme, padding)}
  `}
`
