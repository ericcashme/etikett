import styled from 'styled-components'
import { theme } from 'components'
const { color, space, borders, breakpoint } = theme

export const Labels = styled.div`
  padding-bottom: 14rem;
  background-color: ${color.grayscale.white};
`
export const ArrowButtons = styled.div`
  position: relative;
  display: none;
  align-items: center;
  justify-content: flex-start;
  gap: ${space.md};

  button {
    position: static;
  }

  @media (min-width: ${breakpoint.lg}) {
    display: flex;
  }
`

export const LabelWrapper = styled.div`
  padding: 0 ${space.xs};
`

export const Label = styled.div`
  height: 17rem;
  min-width: 12rem;
  padding: ${space.xl4} ${space.lg};
  background-color: ${color.grayscale.lighter};
  border-radius: ${borders.radius.lg};
  text-align: center;

  @media (min-width: ${breakpoint.lg}) {
    min-width: auto;
  }
`

export const LabelIcon = styled.div<{ bgColor: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${space.xl6};
  height: ${space.xl6};
  margin: 0 auto ${space.lg};
  border-radius: ${borders.radius.circle};
  background-color: ${({ bgColor }) => bgColor};

  svg {
    width: ${space.xl3};
    height: ${space.xl3};
  }
`
