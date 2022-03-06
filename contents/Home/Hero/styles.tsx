import styled from 'styled-components'
import { theme } from 'components'
const { space, breakpoint } = theme

export const Hero = styled.div`
  position: relative;
  height: 22rem;
  padding: ${space.xl3} ${space.xl2} 0;

  @media (min-width: ${breakpoint.lg}) {
    height: 30rem;
    padding: ${space.xl6} 0 0;
  }
`

export const BgWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  z-index: -1;
`
