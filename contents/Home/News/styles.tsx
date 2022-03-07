import styled from 'styled-components'
import { theme } from 'components'
const { color, space, breakpoint } = theme

export const News = styled.div`
  padding: ${space.xl3} 0;
  background-color: ${color.grayscale.lighter};

  @media (min-width: ${breakpoint.lg}) {
    padding: ${space.xl5} 0 ${space.xl5};
  }
`
