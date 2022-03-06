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

  ${(p) =>
    p.isBlock &&
    css`
      display: block;
      width: 100%;
    `}
`

export const Label = styled.label`
  position: absolute;
  top: 10px;
  left: ${space.lg};
  font-size: ${font.size.small};
  color: ${color.text.weak};
`

type DimensionProps = {
  [key: string]: FlattenSimpleInterpolation
}

const getDimension: DimensionProps = {
  small: css`
    height: 4rem;
  `,
  medium: css`
    height: 8rem;
  `,
  large: css`
    height: 12rem;
  `
}

export const Wrapper = styled.div<WrapperStyleProps>`
  display: flex;
  padding-top: 0;
  padding-bottom: 0;
  outline: ${borders.sizes.sm} solid ${color.grayscale.light};
  border-radius: ${borders.radius.lg};
  background-color: ${color.grayscale.white};

  &:focus-within,
  &:focus {
    outline: ${borders.sizes.md} solid ${color.primary.darker};
  }

  textarea {
    background-color: transparent;
    width: 100%;
    height: 100%;
    border: 0;
    outline: 0;
    color: ${color.text.normal};
    font-size: ${font.size.root};
    padding: ${space.xl} ${space.lg} ${space.lg};
    overflow: hidden;
    ${({ dimension }) => getDimension[dimension]}

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
