import React, { FC, memo } from 'react'
import Image from 'next/image'
import { Button } from '../Button'
import { Tag } from '../Tag'
import * as S from './styles'
import { CardBlogProps } from './types'

export const CardBlog: FC<CardBlogProps> = memo(
  ({ kind = 'default', href, image, tags = [], title, description, labelButton, ...rest }) => (
    <S.Card kind={kind} href={href} {...rest}>
      <S.CardImage>
        <Image src={image} alt={title} width="473" height="265" layout="responsive" quality={100} />
      </S.CardImage>

      <S.CardInfos>
        {tags.length > 0 && (
          <S.TagList>
            {tags.map((tag) => (
              <Tag key={tag} size="large">
                {tag}
              </Tag>
            ))}
          </S.TagList>
        )}
        <S.CardTitle size="lg" family="heading" weight="bold">
          {title}
        </S.CardTitle>
        {description && (
          <S.CardSubtitle size="sm" color="weak" margin="0 0 1.5rem">
            {description}
          </S.CardSubtitle>
        )}
        <Button isOutlined>{labelButton}</Button>
      </S.CardInfos>
    </S.Card>
  )
)

CardBlog.displayName = 'CardBlog'
