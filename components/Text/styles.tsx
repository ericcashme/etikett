import styled from 'styled-components'
import { tokens } from '../theme'
import { getWeight, getSize, getTransform } from './TextVariants'
import { TextStyleProps } from './types'
const { color, font, space } = tokens

export const Text = styled.p<TextStyleProps>`
  margin: ${(p) => p.margin};
  padding: ${(p) => p.padding};
  color: ${(p) => color.text[p.color]};
  font-family: ${(p) => font.family[p.family]};
  text-align: ${(p) => p.align};
  ${(p) => getWeight[p.weight]}
  ${(p) => getSize[p.size]}
  ${(p) => getTransform[p.transform]}
  ${(p) => p.italic && 'font-style: italic;'}
  ${(p) =>
    p.ellipsis &&
    `
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `}

  svg {
    margin-right: ${space.xs};
    vertical-align: middle;
  }
`
