import styled from 'styled-components'
import { tokens } from '../theme'
import { StylesProps } from './types'
const { color, font, space } = tokens

export const Breadcrumb = styled.ol<StylesProps>`
  display: inline-block;
  width: auto;
  padding-left: 0;
  color: ${(p) => (p.inverse ? color.grayscale.white : color.grayscale.darker)};
  font-size: ${font.size.small};
  line-height: ${font.lineHeight.sm};
`

export const BreadcrumbItem = styled.li<StylesProps>`
  display: inline-block;
  color: ${(p) => (p.inverse ? color.grayscale.white : color.grayscale.darker)};

  &:last-of-type {
    opacity: 0.7;
  }

  &:not(:last-child)::after {
    content: '>';
    line-height: ${font.size.small};
    display: inline-block;
    margin: 0 ${space.xs};
    vertical-align: baseline;
    color: ${(p) => (p.inverse ? color.grayscale.white : color.grayscale.gray)};
    font-size: ${font.size.small};
  }
`
