import styled, { keyframes } from 'styled-components'
import { Button } from '../Button/Button'
import borders from '../theme/borders'
import breakpoint from '../theme/breakpoint'
import color from '../theme/color'
import font from '../theme/font'
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
    max-width: 46rem;
  `,
  full: `
    max-width: 72rem;
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
  padding: ${space.md} ${space.sm};
  box-shadow: 0 1.5rem 3rem rgba(0, 0, 0, ${opacity.lv3});
  border-radius: ${borders.radius.md};
  background-color: ${color.grayscale.white};
  animation: ${slideDown} 0.6s ease;

  @media (min-width: ${breakpoint.md}) {
    padding: ${space.xl} ${space.lg} ${space.md};
  }
`

export const Header = styled.div`
  max-height: 12.5rem;
  text-align: center;
  margin-bottom: ${space.lg};
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
  line-height: 0.75rem;
  font-weight: 100;
`

export const InnerContent = styled.div`
  max-height: 55vh;
  overflow: auto;
`

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: ${space.md};

  @media (min-width: ${breakpoint.md}) {
    flex-direction: row;
  }
`

export const LeftAction = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: ${space.md};

  @media (min-width: ${breakpoint.md}) {
    margin-bottom: 0;
  }
`

export const RightAction = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const CancelButton = styled.button`
  border: none;
  height: ${space.xl};
  background-color: transparent;
  color: ${color.primary.pure};
  font-size: ${font.size.xsmall};
  line-height: 2rem;
`

export const ActionButton = styled(Button)`
  margin-left: ${space.lg};
`
