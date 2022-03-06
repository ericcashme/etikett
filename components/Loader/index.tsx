import React, { FC, memo } from 'react'
import * as S from './styles'
import { LoaderProps } from './types'

export const Loader: FC<LoaderProps> = memo(({ size = 'large', wrapper = '', color = 'primary' }) => {
  const CustomLoader =
    size === 'small' ? (
      <S.SmallLoader color={color} />
    ) : (
      <S.Loader size={size}>
        <S.CircleLoadingChild>
          <S.CircleLoadingGrandson />
        </S.CircleLoadingChild>
      </S.Loader>
    )

  return wrapper ? <S.Wrap wrapper={wrapper}>{CustomLoader}</S.Wrap> : CustomLoader
})

Loader.displayName = 'Loader'
