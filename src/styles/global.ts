import {
  DefaultTheme,
  GlobalStyleComponent,
  createGlobalStyle,
  css
} from 'styled-components'

type GlobalStylesProps = {
  removeBg?: boolean
}

const GlobalStyles: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`

  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 300;
    src: local(''), url('../fonts/lato-v20-latin-300.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    src: local(''), url('../fonts/lato-v20-latin-regular.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    src: local(''), url('../fonts/lato-v20-latin-700.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Pacifico';
    font-style: normal;
    font-weight: 400;
    src: local(''), url('../fonts/pacifico-v17-latin-regular.woff2') format('woff2'); 
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before, &::after {
      box-sizing: inherit;
    }
  }

 

  ${({ theme, removeBg }) => css`
    html {
      font-size: 62.5%;
    }

    #__next {
      display: flex;
      min-height: 100vh;
      overflow: auto;
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      ${!removeBg &&
      css`
        background-color: ${theme.colors.white};
      `}
    }

    h1 {
      font-size: ${theme.font.sizes.huge};
    }
    h2 {
      font-size: ${theme.font.sizes.xxlarge};
    }
    h3 {
      font-size: ${theme.font.sizes.xlarge};
    }
    h4 {
      font-size: ${theme.font.sizes.large};
    }
    h5 {
      font-size: ${theme.font.sizes.medium};
    }
    h6 {
      font-size: ${theme.font.sizes.small};
    }
  `}
`

export default GlobalStyles
