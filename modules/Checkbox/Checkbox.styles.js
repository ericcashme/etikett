import styled from 'styled-components'
import { theme } from 'components'
const { breakpoint, space, borders, color, font } = theme

export const CheckboxStyle = styled.label`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: ${(p) => (p.margin ? p.margin : space.md)};
  cursor: pointer;
  @media (max-width: ${breakpoint.lg}) {
    width: 100%;
    margin-top: ${space.md};
  }
`

export const HiddenInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`

export const Shape = styled.span`
  position: relative;
  display: inline-block;
  margin-right: ${space.xs2};
  border: ${borders.sizes.sm} solid ${color.grayscale.gray};
  background-color: ${color.grayscale.white};
  cursor: pointer;
  user-select: none;
  transition: all 0.4s ease;

  ${(p) =>
    p.kind === 'square' &&
    `
    height: ${space.md};
    width: ${space.md};
    border-radius: ${borders.radius.sm};
  `}

  ${(p) =>
    p.kind === 'circle' &&
    `
    height: 1.625rem;
    width: 1.625rem;
    border-radius: 50%;
  `}
  ${(p) =>
    p.checked &&
    `
    border-color: ${color.primary.dark};
    background-color: ${color.primary.dark};
  `}
`

export const InnerShape = styled.i`
  display: block;
  position: absolute;

  ${(p) =>
    p.kind === 'square' &&
    `
    left: 0.3125rem;
    top: 0.0625rem;
    width: 0.3125rem;
    height: 0.625rem;
    border-style: solid;
    border-color: ${color.grayscale.white};
    border-width: 0 ${borders.sizes.md} ${borders.sizes.md} 0;
    transform: rotate(45deg);
  `}

  ${(p) =>
    p.kind === 'circle' &&
    `
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    border-radius: 50%;
    background-color: ${color.grayscale.white};
    transition: all 0.2s ease;
`}

${(p) =>
    p.checked
      ? `
      // width: ${space.xs};
      // height: ${space.xs};
      opacity: 1;
    `
      : `
      width: 1.625rem;
      height: 1.625rem;
      opacity: 0;
    `}
`

export const Label = styled.p`
  margin-bottom: 0;

  ${(p) =>
    p.kind === 'square' &&
    `
    font-size: ${font.size.xsmall};
  `}

  ${(p) =>
    p.kind === 'circle' &&
    `
    font-size: ${font.size.root};
    font-weight: ${font.weight.bold};
    letter-spacing: -0.03125rem;
  `}
`
