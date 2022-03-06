import React, { FC, memo } from 'react'
import { Text } from '../Text'
import { RatingStar } from './RatingStar'
import * as S from './styles'
import { RatingWithCommentProps } from './types'

export const RatingWithComment: FC<RatingWithCommentProps> = memo(({ commentInfos }) => {
  const { datepublish, stars, content, author } = commentInfos

  return (
    <S.Review itemProp="review" itemScope itemType="http://schema.org/Review">
      <S.HiddenTag itemProp="itemReviewed" itemScope itemType="http://schema.org/Organization">
        <span itemProp="name">Printi</span>
      </S.HiddenTag>
      <S.HiddenTag itemProp="datePublished">{datepublish}</S.HiddenTag>
      <S.HiddenTag itemProp="reviewRating" itemScope itemType="http://schema.org/Rating">
        <meta itemProp="worstRating" content="1" />
        <span itemProp="ratingValue">{stars}</span>/<span itemProp="bestRating">5</span>stars
      </S.HiddenTag>
      <RatingStar stars={stars} filled={5} />
      <Text as="h4" size="md" margin="0.25rem 0 0.5rem">
        {`"${content}"`}
      </Text>
      <S.WrapperInfo>
        <Text size="xs" italic margin="0 0.5rem 0 0">
          {author}
        </Text>
      </S.WrapperInfo>
    </S.Review>
  )
})

RatingWithComment.displayName = 'RatingWithComment'
