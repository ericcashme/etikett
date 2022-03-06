import React, { FC, memo } from 'react'
import StarFillIcon from './assets/StarFillIcon.svg'
import StarOutlineIcon from './assets/StarOutlineIcon.svg'
import * as S from './styles'
import { RatingStarProps } from './types'

export const RatingStar: FC<RatingStarProps> = memo(({ stars = 5, filled = 0, ...rest }) => {
  let i = filled
  const StarFill = [...Array(filled)].map(() => <StarFillIcon key={i++} width={18} height={18} />)
  const emptyStars = stars - filled
  const StarOutline = [...Array(emptyStars)].map(() => <StarOutlineIcon key={i++} width={18} height={18} />)

  return (
    <S.RatingStar {...rest}>
      {StarFill}
      {StarOutline}
    </S.RatingStar>
  )
})

RatingStar.displayName = 'RatingStar'
