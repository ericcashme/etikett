import styled, { css } from 'styled-components'
import { DynamicKeys } from 'types'
import { Icon } from '../Icon'
import breakpoint from '../theme/breakpoint'
import color from '../theme/color'
import space from '../theme/space'
import { ListStyleProps } from './types'

const kinds: DynamicKeys = {
  primary: `
    li svg {
      color: ${color.primary.pure};
    }

    li:hover {
      .caption {
        color: ${color.primary.pure};
      }
    }
  `,
  gold: `
    li svg {
      color: ${color.warning.pure};
    }

    li:hover {
      .caption {
        color: ${color.warning.pure};
      }
    }
  `
}

export const List = styled.ul<ListStyleProps>`
  display: flex;
  list-style: none;
  padding: 0;
  flex-direction: column;
  ${(p) => kinds[p.kind]};

  @media (min-width: ${breakpoint.lg}) {
    ${({ double }) =>
      double &&
      css`
        flex-direction: row;
        flex-wrap: wrap;

        & > li {
          display: flex;
          min-width: 47%;
          max-width: 47%;
          word-wrap: break-word;
          align-items: center;

          &:nth-of-type(even) {
            margin-left: 1.5%;
          }

          &:nth-of-type(odd) {
            margin-right: 1.5%;
          }
        }
      `}
  }
`

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: ${space.sm};
  color: ${color.text.normal};
  list-style: none;
`

export const ListItemIcon = styled(Icon)`
  margin-right: ${space.xs};
`
