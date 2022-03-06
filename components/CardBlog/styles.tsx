import styled, { css } from 'styled-components'
import { Text } from '../Text'
import { tokens } from '../theme'
const { borders, color, space } = tokens

export const CardImage = styled.div`
  width: 100%;
  overflow: hidden;
  margin-bottom: ${space.lg};
`

export const CardInfos = styled.div`
  padding: 0 ${space.lg} ${space.lg} ${space.lg};
`

export const TagList = styled.div`
  margin-bottom: ${space.md};
`

export const CardTitle = styled(Text)`
  display: -webkit-box;
  max-height: 3.5rem;
  margin-bottom: ${space.lg};
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const CardSubtitle = styled(Text)`
  display: -webkit-box;
  max-height: '5.125rem';
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`

const getBackground = (kind: string) => {
  if (kind === 'transparent') {
    return css`
      background-color: 'transparent';

      ${CardImage} {
        border-radius: ${borders.radius.lg};
        transition: border-radius 0.2s ease-in-out;
      }

      &:hover {
        ${CardImage} {
          border-radius: 0;
        }
      }
    `
  }

  return css`
    background-color: ${color.grayscale.white};
  `
}

export const Card = styled.a<{ kind: string }>`
  display: block;
  width: 100%;
  max-width: 22rem;
  min-width: 16rem;
  height: auto;
  border-radius: ${borders.radius.lg};
  overflow: hidden;
  transition: all 0.4s ease-in-out;
  ${(p) => getBackground(p.kind)}

  &:hover,
  &:focus {
    text-decoration: none;
    background-color: ${color.grayscale.white};
    box-shadow: 0px 0px 50px #1021331a;

    button {
      border-color: ${color.primary.light};
      background-color: ${color.primary.light};
      color: ${color.primary.darker};
    }
  }

  &:active {
    background-color: ${color.grayscale.lighter};
  }

  &:not(:last-of-type) {
    margin-right: ${space.xl};
  }
`
