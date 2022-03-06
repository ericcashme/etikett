import styled, { keyframes } from 'styled-components'
import breakpoint from '../theme/breakpoint'
import color from '../theme/color'
import font from '../theme/font'
import space from '../theme/space'
import zindex from '../theme/zindex'
import hexToRgbA from '../utils/helpers'
import { Types } from './types'

const fadeIn = keyframes`
  0% {
    display: none;
    opacity: 0;
  }
  1% {
    display: flex;
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const ModalWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: ${zindex.modalOverlay};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(36, 43, 51, 0.72);
  animation: ${fadeIn} 0.4s ease;
`

export const Modal = styled.div`
  position: fixed;
  z-index: ${zindex.modal};
  width: 85%;
  max-width: 37.5rem;
  height: 100vh;
  top: 0;
  left: 0;
  bottom: 0;
  padding: ${space.xl5} ${space.lg} ${space.lg};
  background-color: ${color.grayscale.white};

  @media (max-width: ${breakpoint.sm}) {
    width: 95%;
    padding: ${space.xl5} ${space.sm} ${space.lg};
  }
`

export const CloseModal = styled.button`
  position: absolute;
  top: ${space.md};
  right: ${space.md};
  height: ${space.md};
  padding: 0;
  border: none;
  background-color: transparent;
  color: ${color.grayscale.dark};
  font-size: ${font.size.h4};
  line-height: ${space.sm};
  font-weight: 100;
`

export const ModalText = styled.div`
  height: calc(100vh - 10rem);
  margin-bottom: ${space.md};
  overflow: auto;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    padding-top: ${space.lg};
  }

  h1 {
    font-size: ${font.size.h5};
  }

  h2,
  h3 {
    font-size: ${font.size.h6};
  }

  h4,
  h5,
  h6 {
    font-size: ${font.size.root};
  }

  ul {
    padding: 0;
    list-style: none;

    li b {
      margin-right: ${space.sm};
    }
  }
`

const types = {
  default: `
    background-color: ${color.grayscale.white};
    color: ${color.grayscale.black};
  `,
  dark: `
    background-color: ${hexToRgbA(color.grayscale.black, 0.9)};
    color: ${color.grayscale.white};
  `
}

const getType = (type: Types) => types[type]

export const CookieContainer = styled.div<{ type: Types }>`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  padding: ${space.lg};
  ${(p) => getType(p.type)};

  @media (min-width: ${breakpoint.lg}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: ${space.lg} ${space.xl4};
  }
`

export const CookieText = styled.div`
  font-size: ${font.size.h6};
  line-height: ${font.lineHeight.sm};
  font-weight: ${font.weight.bold};
  margin-bottom: ${space.lg};

  @media (min-width: ${breakpoint.lg}) {
    margin-bottom: 0;
  }

  a {
    color: ${color.grayscale.white};
    text-decoration: underline;
  }
`

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  button:not(:last-of-type) {
    margin-right: ${space.lg};
  }
`
