import styled, { keyframes } from 'styled-components'
import borders from '../theme/borders'
import breakpoint from '../theme/breakpoint'
import color from '../theme/color'
import opacity from '../theme/opacity'
import space from '../theme/space'
import zindex from '../theme/zindex'
import { ContentStyleProps } from './types'

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

export const Background = styled.div`
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

const slideDown = keyframes`
  0% {
    opacity: 0;
  }
  1% {
    transform: translate(0, -100%);
    opacity: 0;
  }
  100% {
    transform: translate(0, 0);
    opacity: 1;
  }
`

const sizes = {
  small: `
    max-width: 21rem;
  `,
  medium: `
    max-width: 33rem;
  `,
  large: `
    max-width: 40rem;
  `,
  full: `
    max-width: calc(100% - 1.5rem);
  `
}

export const Content = styled.div<ContentStyleProps>`
  display: block;
  position: relative;
  z-index: ${zindex.modal};
  width: 100%;
  ${(p) => sizes[p.size]};
  height: auto;
  margin-right: ${space.xs};
  margin-left: ${space.xs};
  padding: ${space.lg} ${space.sm};
  box-shadow: 0 1.5rem 3rem rgba(0, 0, 0, ${opacity.lv3});
  border-radius: ${borders.radius.lg};
  background-color: ${color.grayscale.white};
  animation: ${slideDown} 0.6s ease;

  @media (min-width: ${breakpoint.md}) {
    padding: ${space.xl4};
  }
`

export const InnerContent = styled.div`
  max-height: 55vh;
  overflow: auto;
  text-align: center;
`

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: ${space.md};

  button:first-of-type {
    margin-right: ${space.md};
  }
`
