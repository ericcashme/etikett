import React, { FC, memo } from 'react'
import * as S from './styles'
import { TextProps } from './types'

export const Text: FC<TextProps> = memo(
  ({
    as = 'p',
    color = 'normal',
    size = 'md',
    family = 'text',
    align = 'unset',
    weight = 'normal',
    italic = false,
    transform = 'none',
    margin = '',
    padding = '',
    ellipsis = false,
    children,
    ...rest
  }) => (
    <S.Text
      as={as}
      color={color}
      size={size}
      family={family}
      align={align}
      weight={weight}
      italic={italic}
      transform={transform}
      margin={margin}
      padding={padding}
      ellipsis={ellipsis}
      {...rest}
    >
      {children}
    </S.Text>
  )
)

Text.displayName = 'Text'
