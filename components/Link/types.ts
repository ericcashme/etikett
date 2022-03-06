import { ReactNode } from 'react'

export type LinkProps = {
  children: ReactNode
  kind?: 'link' | 'text' | 'inverse'
  size?: 'default' | 'xs' | 'sm' | 'md' | 'lg'
  isBlank?: boolean
  href?: string
  onClick?: () => void
}

export type LinkStyleProps = {
  kind: 'link' | 'text' | 'inverse'
  size: 'default' | 'xs' | 'sm' | 'md' | 'lg'
}
