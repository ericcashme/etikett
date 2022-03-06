import React, { FC, memo } from 'react'
import { Text } from '../Text'
import * as S from './styles'
import { CardProductProps } from './types'

export const CardProduct: FC<CardProductProps> = memo(
  ({ href, onClick, title, subtitle, label, price, unity, kind = 'primary', children, ...rest }) => (
    <S.Card href={href} onClick={onClick} {...rest}>
      <S.CardImage>{children}</S.CardImage>

      <S.CardInfos>
        {title && (
          <S.WrappTitle>
            <S.CardTitle>{title}</S.CardTitle>
          </S.WrappTitle>
        )}

        {subtitle && (
          <Text size="sm" color="weak" align="center">
            {subtitle}
          </Text>
        )}

        {label && (
          <Text size="xs" align="center" padding=".5rem 0 0">
            {label}
          </Text>
        )}

        <Text align="center">
          {price && (
            <Text as="span" size="lg" color={kind} weight="bold">
              {price}
            </Text>
          )}
          {unity && (
            <Text as="span" size="sm">
              /{unity} un
            </Text>
          )}
        </Text>
      </S.CardInfos>
    </S.Card>
  )
)

CardProduct.displayName = 'CardProduct'
