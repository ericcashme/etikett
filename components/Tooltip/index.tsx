import React, { FC, memo } from 'react'
import * as S from './styles'
import { TooltipProps } from './types'

export const Tooltip: FC<TooltipProps> = memo(({ kind = 'normal', title, active = false, children, ...rest }) => (
  <S.Tooltip {...rest} active={active}>
    {kind === 'ellipsis' ? <S.Ellipsis>{children}</S.Ellipsis> : children}
    <span className="tooltip">{title || children}</span>
  </S.Tooltip>
))

Tooltip.displayName = 'Tooltip'
