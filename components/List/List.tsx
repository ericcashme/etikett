import React, { FC, memo } from 'react'
import * as S from './styles'
import { ListProps } from './types'

export const List: FC<ListProps> = memo(({ double = false, kind = 'primary', children }) => (
  <S.List double={double} kind={kind}>
    {children}
  </S.List>
))

List.displayName = 'List'
