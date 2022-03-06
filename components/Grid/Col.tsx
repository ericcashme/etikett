import { memo } from 'react'
import styled, { css, SimpleInterpolation } from 'styled-components'
import media from '../theme/media'
import space from '../theme/space'
import cssMedia from '../utils/css-media'
import { ColProps, SizesProps } from './types'

const sizes = Object.keys(media)

const calc = (): number => parseFloat(space.lg.replace('rem', '')) / 2

const colsize = (val: number): number => (100 / 12) * val

const cssColSize = (val: number): SimpleInterpolation => css`
  flex-basis: ${colsize(val)}%;
  max-width: ${colsize(val)}%;
`

const cssOffsetSize = (val: number): SimpleInterpolation => css`
  margin-left: ${colsize(val)}%;
`

const genMediaCols = (props: SizesProps, isOffset?: boolean) => {
  const cssCol = css`
    flex-grow: 1;
    flex-basis: 0;
    max-width: 100%;
  `
  let eProps = Object.keys(props)
    .filter((k) => sizes.indexOf(k) !== -1)
    .sort((s1, s2) => sizes.indexOf(s1) - sizes.indexOf(s2))

  if (isOffset) {
    const offsetSizes = sizes.map((d) => `${d}Offset`)
    eProps = Object.keys(props).filter((k) => offsetSizes.includes(k))

    const offSetResult = eProps.map((size) => {
      if (size === 'xsOffset') {
        return cssOffsetSize(props[size])
      }

      const newSize = size.replace('Offset', '')
      const offset = cssOffsetSize(props[size])

      return cssMedia(media, newSize, offset)
    })

    return offSetResult
  }

  if (eProps.length === 0) {
    return cssCol
  }

  return eProps.map((size) => {
    if (size === 'xs') {
      return cssColSize(props[size])
    }

    return cssMedia(media, size, cssColSize(props[size]))
  })
}

const Col = styled.div<ColProps>`
  box-sizing: border-box;
  flex: 0 0 auto;

  ${(props) =>
    !props.noGutter &&
    `
    padding-right: ${calc()}rem;
    padding-left: ${calc()}rem;
  `}

  ${(props) =>
    props.shrink &&
    `
    flex: 0 0 auto !important;
  `}

  ${(props) => genMediaCols(props)}
  ${(props) => genMediaCols(props, true)}

  ${(props) =>
    props.orders &&
    props.orders.length > 0 &&
    props.orders.map((order) =>
      cssMedia(
        media,
        order.mq,
        css`
          order: ${order.order};
        `
      )
    )}
`

Col.displayName = 'Col'

// Col.defaultProps = {
//   noGutter: false,
//   shrink: false,
// }

export default memo(Col)
