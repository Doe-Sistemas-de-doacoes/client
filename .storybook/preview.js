import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

export const parameters = {
  backgrounds: {
    default: 'doe-light',
    values: [
      {
        name: 'doe-light',
        value: theme.colors.white
      },
      {
        name: 'doe-extraLight',
        value: theme.colors.lightGray
      }
    ]
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles removeBg />
      <Story />
    </ThemeProvider>
  )
]
