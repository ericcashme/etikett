import { memo } from 'react'
import styled, { css } from 'styled-components'
import media from '../theme/media'
import space from '../theme/space'
import cssMedia from '../utils/css-media'
import { RowProps } from './types'

const Row = styled.div<RowProps>`
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
  box-sizing: border-box;
  width: 100%;
  margin-right: auto;
  margin-left: auto;

  ${(p) =>
    cssMedia(
      media,
      'sm',
      css`
        padding-right: ${p.isFull ? '0' : space.sm};
        padding-left: ${p.isFull ? '0' : space.sm};
      `
    )}

  ${(p) =>
    cssMedia(
      media,
      'hd',
      css`
        padding-right: ${p.isFull ? '0' : space.lg};
        padding-left: ${p.isFull ? '0' : space.lg};
        max-width: ${p.isFluid ? '100%' : `${media.hd}rem`};
      `
    )}

  ${(p) =>
    p.start &&
    cssMedia(
      media,
      p.start,
      css`
        justify-content: flex-start;
      `
    )}

  ${(p) =>
    p.center &&
    cssMedia(
      media,
      p.center,
      css`
        justify-content: center;
      `
    )}

  ${(p) =>
    p.end &&
    cssMedia(
      media,
      p.end,
      css`
        justify-content: flex-end;
      `
    )}

  ${(p) =>
    p.around &&
    cssMedia(
      media,
      p.around,
      css`
        justify-content: space-around;
      `
    )}

  ${(p) =>
    p.between &&
    cssMedia(
      media,
      p.between,
      css`
        justify-content: space-between;
      `
    )}

  ${(p) =>
    p.top &&
    cssMedia(
      media,
      p.top,
      css`
        align-items: flex-start;
      `
    )}

  ${(p) =>
    p.middle &&
    cssMedia(
      media,
      p.middle,
      css`
        align-items: center;
      `
    )}

  ${(p) =>
    p.bottom &&
    cssMedia(
      media,
      p.bottom,
      css`
        align-items: flex-end;
      `
    )}

  ${(p) =>
    p.directions &&
    p.directions.length > 0 &&
    p.directions.map((direction) =>
      cssMedia(
        media,
        direction.mq,
        css`
          flex-direction: ${direction.dir};
        `
      )
    )}
`

Row.displayName = 'Row'

export default memo(Row)
