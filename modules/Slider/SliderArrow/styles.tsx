import styled from 'styled-components'
import { theme } from 'components'
const { color, space, borders } = theme

export const ArrowButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${space.xl2};
  height: ${space.xl2};
  border: ${borders.sizes.md} solid ${color.primary.darker};
  border-radius: ${borders.radius.circle};
  background-color: transparent;
  color: ${color.primary.darker};
  transition: 0.3s ease;

  svg {
    fill: currentColor;
    width: ${space.md};
    height: ${space.md};
  }

  &:before {
    display: none;
  }

  &:hover,
  &:focus,
  &:active {
    opacity: 0.6;
    color: ${color.primary.darker};
  }

  &.slick-prev {
    left: 0;
  }

  &.slick-next {
    right: 0;
  }

  &:disabled {
    border-color: ${color.grayscale.gray};
    color: ${color.grayscale.gray};
  }
`
