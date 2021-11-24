const theme = {
  grid: {
    container: {
      small: '88rem',
      medium: '124rem'
    },
    gutter: '3.2rem'
  },
  border: {
    radius: {
      small: '0.4rem',
      medium: '0.6rem'
    }
  },
  font: {
    family:
      "Lato, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    family_pacifico:
      "'Pacifico', 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    semiBold: 600,
    bold: 700,
    sizes: {
      xxsmall: '1.0rem',
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
      huge: '4.0rem',
      xhuge: '8.0rem'
    }
  },
  colors: {
    primary: '#04D361',
    primaryDark: '#04AB4F',
    secondary: '#D30476',
    textEmphasis: '#212D22',
    text: '#394338',
    white: '#FAFAFA',
    extraLightGray: '#f7f7f7',
    lightGray: '#F2F3F5',
    gray: '#8F8F8F',
    darkGray: '#2E2F42',
    divider: '#e9e9e9',
    red: '#E33D3D'
    // background: ''
    // mainBg: '#06092B',
    // lightBg: '#F2F2F2',
    // black: '#030517',
  },
  spacings: {
    xxxsmall: '0.4rem',
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem',
    huge: '6.2rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    dropdown: 40,
    modal: 50,
    alwaysOnTop: 60
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  },
  boxShadow: {
    small: '0px 0px 4px rgba(0, 0, 0, 0.08)',
    medium: '0px 0px 8px rgba(0, 0, 0, 0.15)'
  }
}

export type Spacings = keyof typeof theme.spacings

export type Colors = keyof typeof theme.colors

export default theme
