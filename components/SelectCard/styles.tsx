import styled, { css } from 'styled-components'
import borders from '../theme/borders'
import breakpoint from '../theme/breakpoint'
import color from '../theme/color'
import space from '../theme/space'
import * as types from './types'

export const HiddenInput = styled.input`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
`

export const IconWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.7rem;
  height: 1.7rem;
  margin-right: ${space.md};
`

export const Infos = styled.span`
  display: flex;
  flex-wrap: wrap;
`

const cssChecked = css`
  background-color: ${color.grayscale.lighter};
  border: ${borders.sizes.md} solid ${color.primary.darker};
  padding: ${space.sm} 1.25rem;

  svg {
    fill: ${color.primary.darker};
  }
`

const cssUnchecked = css`
  padding: calc(${space.sm} + 1px) calc(1.25rem + 1px);
  border: ${borders.sizes.sm} solid ${color.grayscale.light};

  svg {
    fill: ${color.grayscale.dark};
  }
`

const cssDisabled = css`
  opacity: 0.4;
`

const getOrientation: types.GetOrientationProps = {
  horizontal: css`
    flex-direction: row;
  `,
  vertical: css`
    flex-direction: column;

    ${IconWrapper} {
      width: 5.5rem;
      height: 5.5rem;
      margin-bottom: ${space.sm};
    }
  `
}

export const SelectCard = styled.label<types.SelectCardStyleProps>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-self: stretch;
  width: 10rem;
  height: auto;
  min-height: 4rem;
  border-radius: ${borders.radius.lg};
  cursor: pointer;
  transition: background-color 0.3s ease;
  ${({ checked }) => (checked ? cssChecked : cssUnchecked)};
  ${({ disabled }) => disabled && cssDisabled};
  ${({ orientation }) => getOrientation[orientation]};

  @media (min-width: ${breakpoint.lg}) {
    width: 12rem;
  }
`
