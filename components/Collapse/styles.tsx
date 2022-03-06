import styled from 'styled-components'
import { Icon } from '../Icon'
import borders from '../theme/borders'
import color from '../theme/color'
import space from '../theme/space'
import { CollapseBodyProps, CollapseHeaderProps } from './types'

export const Collapse = styled.div`
  width: 100%;
  border-radius: ${borders.radius.md};
  border: ${borders.sizes.sm} solid ${color.grayscale.light};
`

export const CollapseItem = styled.div`
  width: 100%;
  overflow: hidden;

  &:not(:last-of-type) {
    border-bottom: ${borders.sizes.sm} solid ${color.grayscale.light};
  }
`

export const CollapseHeader = styled.div<CollapseHeaderProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${space.xl4};
  padding: 0 ${space.xs};
  background-color: ${color.grayscale.white};
  outline: none;
  cursor: pointer;
`
export const CollapseBody = styled.div<CollapseBodyProps>`
  padding: 0 0.5rem;
  background-color: ${color.grayscale.white};
  height: auto;
  max-height: ${(p) => (p.open ? p.maxHeight : '0')};
  transition: max-height 0.4s linear;
`

export const ArrowIcon = styled(Icon)<{ open: boolean }>`
  transform: ${(p) => (p.open ? 'rotate(-180deg)' : 'rotate(0deg)')};
  transition: all 0.6s ease;
`
