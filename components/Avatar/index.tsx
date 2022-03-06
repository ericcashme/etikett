import React, { FC, memo } from 'react'
import Image from 'next/image'
import * as S from './styles'
import { AvatarProps } from './types'

export const Avatar: FC<AvatarProps> = memo(({ size = 'md', image, alt, hasBorder = false, ...rest }) => (
  <S.Wrap size={size} hasBorder={hasBorder} {...rest}>
    <Image src={image} alt={alt} width={S.getSize[size]} height={S.getSize[size]} layout="responsive" />
  </S.Wrap>
))

Avatar.displayName = 'Avatar'
