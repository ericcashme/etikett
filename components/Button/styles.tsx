import styled, { css, keyframes } from 'styled-components'
import { tokens } from '../theme'
import { ButtonStyleProps } from './types'
const { borders, color, font, space } = tokens

const generateButtonStyle = (kind: string, isOutlined: boolean) => {
  let borderSize = borders.sizes.sm
  let borderColor = isOutlined ? color.primary.darker : color.primary.light
  let bgColor = isOutlined ? 'transparent' : color.primary.light
  let fontColor = color.primary.darker
  let hoverColor = color.primary.light

  if (kind === 'weak') {
    borderSize = borders.sizes.md
    borderColor = color.grayscale.light
    bgColor = isOutlined ? 'transparent' : color.grayscale.light
    fontColor = color.primary.darker
    hoverColor = color.primary.darker
  }

  if (kind === 'dark') {
    borderColor = color.primary.darker
    bgColor = isOutlined ? 'transparent' : color.primary.darker
    fontColor = isOutlined ? color.primary.darker : color.grayscale.white
    hoverColor = color.primary.darker
  }

  if (kind === 'warning') {
    borderColor = color.warning.pure
    bgColor = isOutlined ? 'transparent' : color.warning.pure
    fontColor = isOutlined ? color.warning.pure : color.grayscale.white
    hoverColor = color.warning.pure
  }

  return css`
    border: ${borderSize} solid ${borderColor};
    background-color: ${bgColor};
    color: ${fontColor};

    &:focus,
    &:hover {
      ${isOutlined
        ? css`
            border-color: ${hoverColor};
            background-color: ${hoverColor};
            color: ${color.grayscale.white};
          `
        : css`
            opacity: 0.8;
          `}
    }
  `
}

const load = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const generateButtonLoading = (kind: string, isOutlined: boolean) => {
  let borderColor = isOutlined ? color.primary.darker : color.primary.darker

  if (kind === 'dark') {
    borderColor = isOutlined ? color.primary.darker : color.grayscale.white
  }

  if (kind === 'warning') {
    borderColor = isOutlined ? color.warning.pure : color.grayscale.white
  }

  return css`
    color: transparent;
    pointer-events: none;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      display: block;
      width: 1em;
      height: 1em;
      margin-left: -0.5em;
      margin-top: -0.5em;
      border: 0.2em solid ${borderColor};
      border-radius: 0.625rem;
      border-right-color: transparent;
      border-top-color: transparent;
      animation: ${load} 500ms infinite linear;
    }
  `
}

const generateButtonSize = (size: string, isPill: boolean) => {
  if (size === 'small') {
    return css`
      height: ${space.xl2};
      padding: 0 ${isPill ? space.xs : space.md};
      font-size: ${font.size.xsmall};
      line-height: ${font.lineHeight.sm};
      gap: ${space.xs};
    `
  }

  if (size === 'medium') {
    return css`
      height: ${space.xl3};
      padding: 0 ${isPill ? space.sm : space.lg};
      font-size: ${font.size.small};
      line-height: ${font.lineHeight.md};
      gap: ${space.sm};
    `
  }

  if (size === 'large') {
    return css`
      height: ${space.xl4};
      padding: 0 ${isPill ? space.md : space.xl};
      font-size: ${font.size.root};
      line-height: ${font.lineHeight.lg};
      gap: ${space.md};
    `
  }

  return null
}

export const Button = styled.button<ButtonStyleProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(p) => (p.isBlock ? '100%' : 'auto')};
  border-radius: ${(p) => (p.isPill ? borders.radius.pill : borders.sizes.xl)};
  appearance: none;
  font-weight: ${font.weight.medium};
  transition: all 0.3s ease;
  ${(p) => generateButtonStyle(p.kind, p.isOutlined)}
  ${(p) => generateButtonSize(p.size, p.isPill)}
  ${(p) => p.isLoading && generateButtonLoading(p.kind, p.isOutlined)};

  &:hover,
  &:focus {
    text-decoration: none;
  }

  &:active {
    opacity: 0.7;
  }

  &:disabled {
    cursor: disabled;
    pointer-events: none;
  }
`
