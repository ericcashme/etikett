import Slider from 'react-slick'
import styled from 'styled-components'
import { theme } from 'components'
const { color, space } = theme

export const Learning = styled.div`
  padding-bottom: ${space.xl5};
  background-color: ${color.grayscale.lighter};
`

export const LearningInner = styled.div`
  margin-top: -${space.xl5};
`

export const Slide = styled(Slider)`
  padding: 0 ${space.xl4};

  .slick-list {
    padding-top: ${space.xl3};
    padding-bottom: ${space.xl3};
  }

  .slick-slide a {
    margin: 0 auto;
  }
`

export const CardBlogWrapper = styled.div`
  padding: 0 ${space.md};
`
