import React, { FC, memo } from 'react'
import { Icon } from '../Icon'
import * as S from './styles'
import { TagProps } from './types'

export const Tag: FC<TagProps> = memo(
  ({ kind = 'default', size = 'default', color = 'neutral', action, children, ...rest }) => (
    <S.Tag kind={kind} size={size} color={color} {...rest}>
      {children}
      {action && (
        <S.CloseButton onClick={action}>
          <Icon name="Close" size="sm" fill="#fff" />
        </S.CloseButton>
      )}
    </S.Tag>
  )
)

Tag.displayName = 'Tag'
