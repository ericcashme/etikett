import styled, { css } from 'styled-components'
import { tokens } from '../theme'
import { ButtonsProps } from './types'
const { borders } = tokens

export const Buttons = styled.nav<ButtonsProps>`
  display: flex;
  text-align: center;
  justify-content: center;
  flex-wrap: wrap;
  width: auto;

  ${(p) =>
    p.isPill
      ? css`
          a,
          button {
            border-radius: ${borders.radius.pill};
            border-width: 0;
          }
        `
      : css`
          a:first-of-type,
          button:first-of-type {
            border-radius: ${borders.radius.md} 0 0 ${borders.radius.md};
          }

          a:last-child,
          button:last-child {
            border-radius: 0 ${borders.radius.md} ${borders.radius.md} 0;
            border-right-width: 1px;
          }

          a,
          button {
            border-radius: 0;
            border-right-width: 0;
          }
        `};
`

Buttons.displayName = 'Buttons'
