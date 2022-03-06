import styled from 'styled-components'
import borders from '../theme/borders'
import color from '../theme/color'
import font from '../theme/font'
import space from '../theme/space'
import zindex from '../theme/zindex'
import { TooltipStyleProps } from './types'

export const Tooltip = styled.span<TooltipStyleProps>`
  position: relative;
  display: inline-block;
  max-width: 100%;

  .tooltip {
    position: absolute;
    z-index: ${zindex.dropdown};
    top: calc(100% + ${space.sm});
    left: 50%;
    width: 15rem;
    transform: translateX(-50%);
    visibility: ${(p) => (p.active ? 'visible' : 'hidden')};
    opacity: ${(p) => (p.active ? '1' : '0')};
    padding: ${space.sm};
    border-radius: ${borders.radius.md};
    background-color: ${color.grayscale.black};
    color: ${color.grayscale.white};
    font-size: ${font.size.xsmall};
    font-weight: ${font.weight.medium};
    line-height: ${font.lineHeight.md};
    transition: opacity 0.3s ease;

    &:after {
      content: '';
      position: absolute;
      bottom: 100%;
      left: 50%;
      margin-left: -${space.xs};
      border-width: ${space.xs};
      border-style: solid;
      border-color: transparent transparent ${color.grayscale.black} transparent;
    }
  }

  &:last-of-type {
    margin-right: 0;
  }

  &:hover .tooltip {
    visibility: visible;
    opacity: 1;
  }
`

export const Ellipsis = styled.span`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
