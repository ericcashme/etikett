import React, { FC, memo } from 'react'
import { LinearGradient } from '../LinearGradient'
import * as S from './styles'
import { HorizontalScrollProps } from './types'

export const HorizontalScroll: FC<HorizontalScrollProps> = memo(({ direction = 'right-left', children }) => (
  <S.HorizontalScroll>
    <S.HorizontalScrollInner>{children}</S.HorizontalScrollInner>
    <LinearGradient direction={direction} />
  </S.HorizontalScroll>
))

HorizontalScroll.displayName = 'HorizontalScroll'
