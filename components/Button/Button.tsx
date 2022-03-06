import React, { FC, memo } from 'react'
import * as S from './styles'
import { ButtonProps } from './types'

export const Button: FC<ButtonProps> = memo(
  ({
    children,
    kind = 'primary',
    size = 'medium',
    isLoading = false,
    isDisabled = false,
    isBlock = false,
    isPill = false,
    isOutlined = false,
    ...rest
  }) => (
    <S.Button
      kind={kind}
      size={size}
      disabled={isDisabled || isLoading}
      isDisabled={isDisabled}
      isLoading={isLoading}
      isBlock={isBlock}
      isPill={isPill}
      isOutlined={isOutlined}
      {...rest}
    >
      {children}
    </S.Button>
  )
)

Button.displayName = 'Button'
