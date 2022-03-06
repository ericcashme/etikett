import React, { FC, memo, forwardRef } from 'react'
import { DynamicKeys } from 'types'
import * as S from './styles'
import { LinkProps } from './types'

export const Link: FC<LinkProps> = memo(
  forwardRef<HTMLAnchorElement, LinkProps>(
    ({ kind = 'link', size = 'default', onClick = () => {}, href, children, isBlank = false, ...rest }, ref) => {
      const restProps: DynamicKeys = { ...rest }

      if (isBlank) {
        restProps.target = '_blank'
        restProps.rel = 'noopener'
      }

      return (
        <S.Link ref={ref} kind={kind} size={size} href={href} onClick={onClick} {...restProps}>
          {children}
        </S.Link>
      )
    }
  )
)

Link.displayName = 'Link'
