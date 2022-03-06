import React, { FC, memo } from 'react'
import * as S from './styles'
import { BoxProps } from './types'

export const Box: FC<BoxProps> = memo(
  ({
    type = 'default',
    kind = 'default',
    noRadius = false,
    backgroundUrl = '',
    backgroundOpacity = false,
    shadow = false,
    disabled = false,
    children,
    ...rest
  }) => (
    <S.Box
      type={type}
      kind={kind}
      noRadius={noRadius}
      backgroundUrl={backgroundUrl}
      backgroundOpacity={backgroundOpacity}
      shadow={shadow}
      disabled={disabled}
      {...rest}
    >
      {children}
    </S.Box>
  )
)

Box.displayName = 'Box'
