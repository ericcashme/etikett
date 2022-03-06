import styled from 'styled-components'
import { DynamicKeys } from 'types'
import { tokens } from '../theme'
import { BoxProps } from './types'
const { borders, color } = tokens

const types: DynamicKeys = {
  default: `
    background-color: ${color.grayscale.white};
    color: ${color.grayscale.black};
  `,
  primary: `
    background-color: ${color.primary.pale};
    color: ${color.grayscale.gray};
  `,
  dark: `
    background-color: ${color.grayscale.black};
    color: ${color.grayscale.white};
  `,
  gold: `
    background-color: ${color.warning.pale};
    color: ${color.grayscale.black};
  `
}

const getTypes = (type: string = 'default', backgroundOpacity?: boolean) => {
  if (backgroundOpacity) {
    return types[`${type}-opacity`]
  }

  return types[type]
}

const kinds: DynamicKeys = {
  info: `
    border-left: ${borders.sizes.lg} solid ${color.info.pure};
  `,
  warning: `
    border-left: ${borders.sizes.lg} solid ${color.warning.pure};
  `,
  success: `
    border-left: ${borders.sizes.lg} solid ${color.success.pure};
  `,
  danger: `
    border-left: ${borders.sizes.lg} solid ${color.danger.pure};
  `
}

const getKind = (kind: string = 'default') => kinds[kind]

const getBackgroundImage = (backgroundUrl?: string, backgroundOpacity?: boolean) => {
  const backgroundImage = backgroundUrl ? `url(${backgroundUrl})` : 'none'
  let styledBackground = ''

  if (backgroundUrl && backgroundOpacity) {
    styledBackground = `
      background-repeat: no-repeat;
      background-size: cover;
      background-image: ${backgroundImage};

      &:before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: ${color.grayscale.black};
        opacity: 0.72;
        z-index: 1;
      }

      > * {
        position: relative;
        z-index: 2 ;
      }
    `
  } else if (backgroundUrl && !backgroundOpacity) {
    styledBackground = `
      background-repeat: no-repeat;
      background-size: cover;
      background-image: ${backgroundImage};
    `
  }

  return styledBackground
}

const getShadow = (shadow?: boolean) => {
  if (shadow) {
    return `
      box-shadow: 0px 0px 30px #1021331A;
    `
  }

  return ''
}

export const Box = styled.div<BoxProps>`
  position: relative;
  border-radius: ${(p) => (p.noRadius ? '0' : borders.radius.lg)};
  text-align: left;
  ${(p) => getShadow(p.shadow)};
  ${(p) => getTypes(p.type, p.backgroundOpacity)};
  ${(p) => getKind(p.kind)};
  ${(p) => getBackgroundImage(p.backgroundUrl, p.backgroundOpacity)};

  & > * {
    opacity: ${(p) => (p.disabled ? '0.5' : '1')};
  }
`
