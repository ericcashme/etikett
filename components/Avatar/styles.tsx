import styled from 'styled-components'
import { DynamicKeys } from 'types'
import { tokens } from '../theme'
import { WrapStyleProps } from './types'
const { color, space, borders } = tokens

export const getSize: DynamicKeys = {
  sm: space.xl2,
  md: space.xl3,
  lg: space.xl4,
  xl: space.xl6
}

export const Wrap = styled.span<WrapStyleProps>`
  display: block;
  height: ${(p) => getSize[p.size]};
  width: ${(p) => getSize[p.size]};
  border-radius: ${borders.radius.circle};
  overflow: hidden;
  ${({ hasBorder }) =>
    hasBorder &&
    `
    border: 3px solid ${color.grayscale.white};
  `}
`
