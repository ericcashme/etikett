import styled, { css } from 'styled-components'
import { tokens } from '../theme'
const { color } = tokens

const getDirection = (direction: string) => {
  if (direction === 'top-bottom') {
    return css`
      top: -1px;
      left: 0;
      right: 0;
      height: 100px;
      width: 100%;
      background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.8) 0%,
        rgba(255, 255, 255, 0.5) 60%,
        rgba(255, 255, 255, 0) 100%
      );
    `
  }

  if (direction === 'bottom-top') {
    return css`
      left: 0;
      bottom: -1px;
      right: 0;
      height: 100px;
      width: 100%;
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.8) 0%,
        rgba(255, 255, 255, 0.5) 60%,
        rgba(255, 255, 255, 0) 100%
      );
    `
  }

  if (direction === 'left-right') {
    return css`
      top: 0;
      left: -1px;
      bottom: 0;
      height: 100%;
      width: 100px;
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0.8) 0%,
        rgba(255, 255, 255, 0.5) 60%,
        rgba(255, 255, 255, 0) 100%
      );
    `
  }

  if (direction === 'right-left') {
    return css`
      top: 0;
      bottom: 0;
      right: -1px;
      height: 100%;
      width: 100px;
      background: linear-gradient(
        270deg,
        rgba(255, 255, 255, 0.8) 0%,
        rgba(255, 255, 255, 0.5) 60%,
        rgba(255, 255, 255, 0) 100%
      );
    `
  }
}

export const LinearGradient = styled.div<{ direction: string }>`
  position: absolute;
  background: ${color.grayscale.white};
  ${(p) => getDirection(p.direction)}
`
