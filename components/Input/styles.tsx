import styled, { css, FlattenSimpleInterpolation } from 'styled-components'
import borders from '../theme/borders'
import color from '../theme/color'
import font from '../theme/font'
import space from '../theme/space'
import { ContainerStyleProps, WrapperStyleProps } from './types'

export const Container = styled.div<ContainerStyleProps>`
  position: relative;
  display: inline-block;
  text-align: left;
  vertical-align: middle;
  color: ${color.grayscale.black};
  min-width: 12rem;

  ${(p) =>
    p.isBlock &&
    css`
      display: block;
      width: 100%;
    `}
`

export const Label = styled.label`
  position: absolute;
  top: 0.625rem;
  left: ${space.md};
  font-size: ${font.size.small};
  color: ${color.text.weak};
`

type DimensionProps = {
  [key: string]: FlattenSimpleInterpolation
}

const getDimension: DimensionProps = {
  small: css`
    height: 2.5rem;
    font-size: ${font.size.xsmall};
  `,
  medium: css`
    height: 3rem;
    font-size: ${font.size.small};
  `,
  large: css`
    height: 4rem;
    font-size: ${font.size.root};
  `
}

export const Wrapper = styled.div<WrapperStyleProps>`
  display: flex;
  padding-top: 0;
  padding-bottom: 0;
  padding-left: ${(p) => (p.leftIcon ? '0' : space.md)};
  padding-right: ${(p) => (p.rightIcon ? '0' : space.md)};
  outline: ${borders.sizes.sm} solid ${color.grayscale.light};
  border-radius: ${borders.radius.lg};
  background-color: ${color.grayscale.white};

  svg {
    align-self: center;
    margin: 0 ${space.xs2};
    width: 1.25rem;
    height: 1.25rem;
  }

  &:focus-within,
  &:focus {
    outline: ${borders.sizes.md} solid ${color.primary.darker};
  }

  input {
    background-color: transparent;
    width: 100%;
    height: 100%;
    border: 0;
    outline: 0;
    color: ${color.text.normal};
    ${({ dimension }) => getDimension[dimension]}
    ${({ hasLabel }) =>
      hasLabel &&
      css`
        padding: calc(${space.lg} - 2px) 0 0 0;
      `}

    ::placeholder {
      color: ${color.text.weak};
    }
  }

  ${(p) =>
    p.isPill &&
    css`
      border-radius: ${borders.radius.pill};
      padding-left: ${space.md};
      padding-right: ${space.md};
    `}

  ${(p) =>
    p.hasError &&
    css`
      border-bottom-color: ${color.danger.dark};
    `}

  ${(p) =>
    p.disabled &&
    css`
      background-color: ${color.grayscale.lighter};
      color: ${color.grayscale.dark};
    `}

  ${(p) =>
    p.readOnly &&
    css`
      background-color: ${color.warning.pale};
      color: ${color.grayscale.dark};
    `}
`

export const Error = styled.span`
  position: absolute;
  display: block;
  margin-top: ${space.xs2};
  color: ${color.danger.dark};
  font-size: ${font.size.xsmall};
  line-height: ${font.lineHeight.sm};
`
