import Slider from 'react-slick'
import styled from 'styled-components'
import { theme } from 'components'
const { color, borders, breakpoint, space } = theme

export const References = styled.div`
  padding: ${space.xl3} 0;
  background-color: ${color.grayscale.white};

  @media (min-width: ${breakpoint.lg}) {
    padding: ${space.xl5} 0;
  }
`

export const Slide = styled(Slider)`
  .slick-list {
    width: calc(100% + 30px);
    margin-left: -15px;
  }

  .slick-slide {
    padding: 0 15px;
  }

  .slick-dots {
    right: 0;
    top: -54px;
    bottom: auto;
    width: auto;

    li {
      width: auto;
      height: auto;
      padding: 0;
      margin: 0;
    }

    li button {
      display: block;
      width: 12px;
      height: 6px;
      margin: 0 0 0 4px;
      padding: 0;
      border-radius: ${borders.radius.md};
      background-color: ${color.grayscale.gray};
      opacity: 1;
      transition: all 0.27s ease;

      &:before {
        display: none;
      }
    }

    li.slick-active button {
      background-color: ${color.primary.pure};
      width: 22px;
    }
  }
`

export const Reference = styled.div`
  margin: 0;
  padding: 20px;
  height: 110px;
  border: ${borders.sizes.md} solid ${color.grayscale.gray};
  border-radius: ${borders.radius.sm};
  background-color: ${color.grayscale.white};
`

export const ReferenceImage = styled.div`
  position: relative;
  height: calc(110px - 44px);
  filter: grayscale(100%);

  &:hover {
    filter: grayscale(0%);
  }
`
