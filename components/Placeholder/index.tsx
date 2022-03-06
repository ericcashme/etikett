import React, { FC, memo } from 'react'
import * as S from './styles'
import { PlaceholderProps } from './types'

export const Placeholder: FC<PlaceholderProps> = memo(({ kind = 'product', ...rest }) => {
  if (kind === 'banner') {
    return <S.Banner {...rest} />
  }

  if (kind === 'product') {
    return (
      <S.Product {...rest}>
        <S.Image />
        <S.Texts />
      </S.Product>
    )
  }

  if (kind === 'texts') {
    return <S.Texts {...rest} />
  }

  if (kind === 'title') {
    return <S.Title {...rest} />
  }

  return <S.Image {...rest} />
})

Placeholder.displayName = 'Placeholder'
