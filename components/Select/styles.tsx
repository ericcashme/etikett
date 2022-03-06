import styled from 'styled-components'
import borders from '../theme/borders'
import color from '../theme/color'
import font from '../theme/font'
import space from '../theme/space'
import { ContainerStyleProps, GroupStyleProps } from './types'

export const Container = styled.span<ContainerStyleProps>`
  position: relative;
  display: inline-block;
  padding-bottom: ${(p) => (p.removeErrorSpace ? '0' : space.lg)};
  text-align: left;
  vertical-align: middle;
  color: ${color.grayscale.black};

  label {
    display: block;
    margin-bottom: ${space.xs};
    color: ${color.grayscale.dark};
    font-size: ${font.size.xsmall};
    line-height: ${font.lineHeight.sm};
  }

  ${(p) =>
    p.isBlock &&
    `
    display: block;
    width: 100%;
  `}

  ${(p) =>
    p.isInline &&
    `
    display: flex;
    align-items: center;
    justify-content: flex-start;
  `}
`

export const Group = styled.span<GroupStyleProps>`
  display: flex;
  padding: 0 ${space.xs2};
  border: ${borders.sizes.sm} solid ${color.grayscale.lighter};
  border-radius: ${borders.radius.md};
  background-color: ${color.grayscale.white};

  &:focus-within {
    box-shadow: 0 ${space.xs2} ${space.sm} 0 rgba(170, 209, 255, 0.6);
  }

  select {
    background-color: transparent !important;
    border-radius: ${borders.radius.pill};
    border: 0;
    padding-left: ${space.xs2};
    padding-right: ${space.lg};
    outline: 0;
    width: 100%;
    height: 2.3125rem;
    font-size: ${font.size.small};
    background-size: ${space.xs};

    &:-webkit-autofill {
      box-shadow: 0 0 0 1.875rem white inset;
    }

    &:disabled:-webkit-autofill {
      box-shadow: 0 0 0 1.875rem ${color.grayscale.lighter} inset !important;
    }

    ::placeholder {
      color: ${color.grayscale.dark};
    }

    ::-ms-input-placeholder {
      color: ${color.grayscale.dark};
    }

    :-ms-input-placeholder {
      color: ${color.grayscale.dark};
    }
  }

  ${(p) =>
    p.isInline &&
    `
    margin-left: ${space.xs};
    margin-right: ${space.xs};
  `}

  ${(p) =>
    p.isBig &&
    `
    select {
      height: 3.313rem;
    }
  `}

  ${(p) =>
    p.isPill &&
    `
    border-radius: ${borders.radius.pill};
    padding-left: ${space.md};
    padding-right: ${space.md};
  `}

  ${(p) =>
    p.hasError &&
    `
    border-bottom-color: ${color.danger.dark};
  `}

  ${(p) =>
    p.disabled &&
    `
    background-color: ${color.grayscale.lighter};
    color: ${color.grayscale.dark};
  `}

  ${(p) =>
    p.readOnly &&
    `
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
