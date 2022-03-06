import { css, SimpleInterpolation } from 'styled-components'
import { MediaProps } from '../theme/media'

const cssMedia = (media: MediaProps, size: string, mediacss: SimpleInterpolation): SimpleInterpolation => css`
  @media (min-device-width: ${media[size]}rem) and (-webkit-min-device-pixel-ratio: 2) {
    ${mediacss}
  }

  @media (min-width: ${media[size]}rem) {
    ${mediacss}
  }
`

export default cssMedia
