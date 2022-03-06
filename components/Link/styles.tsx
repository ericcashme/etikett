import styled from 'styled-components'
import { DynamicKeys } from 'types'
import { tokens } from '../theme'
import { LinkStyleProps } from './types'
const { color, font, space } = tokens

const getFixStyle = (currentColor: string) => `
  color: ${currentColor};

  &:active {
    opacity: 0.8;
  }

  &::before {
    background-color: ${currentColor};
  }
`

const getKind: DynamicKeys = {
  link: getFixStyle(color.text.normal),
  text: getFixStyle(color.text.weak),
  inverse: getFixStyle(color.text.inverse)
}

const getSize: DynamicKeys = {
  default: '',
  xs: `font-size: ${font.size.xsmall};`,
  sm: `font-size: ${font.size.small};`,
  md: `font-size: ${font.size.root};`,
  lg: `font-size: ${font.size.h6};`
}

export const Link = styled.a<LinkStyleProps>`
  cursor: pointer;
  position: relative;
  transition: color 0.4s ease;
  ${(p) => getKind[p.kind]}
  ${(p) => getSize[p.size]}

  &:hover,
  &:focus {
    text-decoration: none;
    color: ${color.primary.pure};

    svg {
      fill: ${color.primary.pure};
    }
  }

  svg {
    margin-left: ${space.xs2};
    vertical-align: middle;
    transition: color 0.4s ease;
  }
`
