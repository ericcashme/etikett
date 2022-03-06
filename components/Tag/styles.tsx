import styled from 'styled-components'
import { DynamicKeys } from 'types'
import borders from '../theme/borders'
import color from '../theme/color'
import space from '../theme/space'
import { TagStyleProps, Colors } from './types'

const sizes: DynamicKeys = {
  default: `
    padding: .0625rem 1rem;
    font-size: .625rem;
    line-height: 1rem;
  `,
  large: `
    font-size: .75rem;
    line-height: 1.4rem;
    padding: 0.25rem 1rem;
  `
}

const defaultColors = (bgColor: string, fontColor: string) => `
  background-color: ${bgColor};
  color: ${fontColor};
`

const getDefaultColors: DynamicKeys = {
  primary: defaultColors(color.primary.pale, color.primary.dark),
  success: defaultColors(color.success.pale, color.success.pure),
  info: defaultColors(color.info.light, color.info.pure),
  variant: defaultColors(color.variant.pale, color.variant.pure),
  warning: defaultColors(color.warning.pale, color.warning.pure),
  danger: defaultColors(color.danger.pale, color.danger.pure),
  neutral: defaultColors(color.neutral.pure, color.grayscale.black),
  dark: defaultColors(color.dark.pure, color.grayscale.white)
}

const getKind = (kindColor: Colors) => ({
  default: `
    ${getDefaultColors[kindColor]}
  `,
  outlined: `
    border: 1px solid ${color[kindColor].pure};
    background-color: transparent;
    color: ${color[kindColor].pure};
  `,
  filled: `
    background-color: ${color[kindColor].pure};
    color: ${kindColor === 'neutral' ? color.grayscale.black : color.grayscale.white};
  `
})

export const Tag = styled.span<TagStyleProps>`
  position: relative;
  display: inline-block;
  vertical-align: middle;
  border-radius: ${borders.radius.pill};
  text-align: center;
  white-space: nowrap;
  ${(p) => sizes[p.size]};
  ${(p) => getKind(p.color)[p.kind]}

  &:not(:last-of-type) {
    margin-right: ${space.xs};
  }

  &:before {
    content: '';
    display: block;
    height: 0.0625rem;
    margin-bottom: -0.125rem;
  }
`

export const CloseButton = styled.button`
  height: auto;
  padding: 0;
  margin: 0 0 0 ${space.xs};
  border: none;
  outline: none;
  background-color: transparent;
`
