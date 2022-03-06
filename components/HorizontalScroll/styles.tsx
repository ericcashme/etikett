import styled from 'styled-components'
import breakpoint from '../theme/breakpoint'
import space from '../theme/space'

export const HorizontalScroll = styled.div`
  position: relative;
  margin: 0 -${space.sm};

  @media (min-width: ${breakpoint.xl}) {
    & > div:last-of-type {
      display: none;
    }
  }
`

export const HorizontalScrollInner = styled.div`
  display: flex;
  overflow-x: auto;
  align-items: flex-start;
  padding: 0 ${space.xl2};

  &::-webkit-scrollbar {
    display: none;
  }
`
