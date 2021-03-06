import styled from 'styled-components'
import { theme, Button as CButton } from 'components'
const { color, borders, space, breakpoint } = theme

export const About = styled.div`
  padding: 0 0 ${space.xl4};
  background-color: ${color.grayscale.lighter};

  @media (min-width: ${breakpoint.lg}) {
    padding: ${space.xl5} 0;
  }
`

export const BorderImage = styled.div`
  max-width: 22rem;
  margin: 0 auto;
  border: ${borders.sizes.xl} solid ${color.grayscale.white};
  border-radius: ${borders.radius.circle};

  @media (min-width: ${breakpoint.lg}) {
    margin: 0 auto ${space.xl};
  }
`

export const Button = styled(CButton)`
  margin: -${space.md} auto 0;

  @media (min-width: ${breakpoint.lg}) {
    margin: 0 auto;
  }
`
