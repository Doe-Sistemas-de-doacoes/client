import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${() => css`
    display: none;
    position: absolute;
    pointer-events: none;
    max-height: min(90vh, 56vw);
    height: 100%;
    z-index: -1;
    right: 0;
    top: 0;

    & > svg {
      height: 100%;
      margin-left: auto;
    }

    ${media.greaterThan('medium')`
      display: block;
    `}
  `}
`

export const BottomLeftCorner = styled.img.attrs(() => ({
  src: '/img/corner-bottom-left.svg'
}))`
  width: min(36rem, 35vw);
  height: min(36rem, 35vw);
  pointer-events: none;
  position: fixed;
  z-index: -1;
  bottom: 0;
  left: 0;
`

export const TopRightCorner = styled.img.attrs(() => ({
  src: '/img/corner-top-right.svg'
}))`
  width: min(36rem, 35vw);
  height: min(36rem, 35vw);
  pointer-events: none;
  position: absolute;
  z-index: -1;
  right: 0;
  top: 0;
`
