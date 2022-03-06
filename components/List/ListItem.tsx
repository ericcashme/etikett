import React, { FC, memo } from 'react'
import * as S from './styles'
import { ListItemProps } from './types'

export const ListItem: FC<ListItemProps> = memo(({ icon = 'ArrowIosForward', children }) => (
  <S.ListItem>
    {icon && <S.ListItemIcon name={icon} width="18" height="18" />}
    {children}
  </S.ListItem>
))

ListItem.displayName = 'ListItem'
