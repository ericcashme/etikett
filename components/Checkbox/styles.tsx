import styled, { css } from 'styled-components'
import borders from '../theme/borders'
import color from '../theme/color'
import space from '../theme/space'
import { CheckboxStyleProps } from './types'

export const CheckboxContainer = styled.label`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
`

export const HiddenInput = styled.input`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
`

export const Shape = styled.span<CheckboxStyleProps>`
  position: relative;
  display: inline-block;
  height: 1.75rem;
  width: 1.75rem;
  min-width: 1.75rem;
  margin-right: ${space.md};
  border: ${borders.sizes.md} solid ${color.grayscale.gray};
  background-color: ${color.grayscale.white};
  user-select: none;
  cursor: pointer;
  transition: all 0.4s ease;

  ${(p) =>
    p.kind === 'square' &&
    css`
      border-radius: ${borders.radius.sm};
    `}

  ${(p) =>
    p.kind === 'circle' &&
    css`
      border-radius: 50%;
    `}

  ${(p) =>
    p.checked &&
    css`
      border-color: ${color.primary.pure};
      background-color: ${color.primary.pure};
    `}
`

const checkedStyled = css`
  width: ${space.xs};
  height: ${space.xs};
  opacity: 1;
`
const uncheckedStyled = css`
  width: 1.625rem;
  height: 1.625rem;
  opacity: 0;
`

export const InnerShape = styled.i<CheckboxStyleProps>`
  display: block;
  position: absolute;

  ${(p) =>
    p.kind === 'square' &&
    css`
      left: 7px;
      top: 1px;
      width: 10px;
      height: 15px;
      border-style: solid;
      border-color: ${color.grayscale.white};
      border-width: 0 ${borders.sizes.md} ${borders.sizes.md} 0;
      transform: rotate(45deg);
    `}

  ${(p) =>
    p.kind === 'circle' &&
    css`
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      margin: auto;
      border-radius: 50%;
      background-color: ${color.grayscale.white};
      transition: all 0.2s ease;

      ${p.checked ? checkedStyled : uncheckedStyled}
    `}
`

export const Infos = styled.span`
  display: flex;
  flex-wrap: wrap;
`
