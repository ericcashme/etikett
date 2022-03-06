import styled from 'styled-components'
import { theme } from 'components'
const { borders, color, space } = theme

export const BackToTop = styled.button`
  position: fixed;
  right: ${space.xl};
  bottom: ${space.xl};
  width: ${space.xl3};
  height: ${space.xl3};
  border-radius: ${borders.radius.lg};
  background-color: ${color.grayscale.light};
  color: ${color.text.normal};
  border: 0;

  &:hover {
    opacity: 0.6;
  }
`
