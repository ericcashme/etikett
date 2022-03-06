import React, { FC, memo } from 'react'
import * as S from './styles'
import { LinearGradientProps } from './types'

export const LinearGradient: FC<LinearGradientProps> = memo(({ direction = 'right-left' }) => (
  <S.LinearGradient direction={direction} />
))

LinearGradient.displayName = 'LinearGradient'
