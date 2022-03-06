import Slider from 'react-slick'
import styled from 'styled-components'
import { theme, Box, Avatar, RatingStar } from 'components'
const { color, borders, space } = theme

export const Advantages = styled.div`
  padding-bottom: ${space.xl5};
  background-color: ${color.grayscale.lighter};
`

export const SlideWrapper = styled(Box)`
  padding: ${space.xl2} ${space.xl2} ${space.xl};
`

export const Slide = styled(Slider)`
  .slick-dots {
    right: 0;
    top: -${space.xs};
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

export const Customer = styled.div``

export const Rating = styled(RatingStar)`
  margin-bottom: ${space.md};
`

export const CustomerInfos = styled.div`
  display: flex;
  align-items: center;
`
export const CustomerInfosLeft = styled.div`
  position: relative;
  margin-right: ${space.lg};
`

export const AvatarFirst = styled(Avatar)`
  position: relative;
  z-index: 2;
`

export const AvatarSecond = styled(Avatar)`
  position: absolute;
  top: 0;
  left: calc(${space.xs});
  z-index: 1;
  opacity: 0.2;
`
export const AvatarThird = styled(Avatar)`
  position: absolute;
  top: 0;
  left: ${space.md};
  z-index: 0;
  opacity: 0.2;
`

export const ReferenceImage = styled.div`
  position: relative;
  height: calc(110px - 44px);
  filter: grayscale(100%);

  &:hover {
    filter: grayscale(0%);
  }
`
