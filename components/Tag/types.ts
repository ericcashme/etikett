import { ReactNode } from 'react'

export type Kinds = 'default' | 'outlined' | 'filled'
export type Sizes = 'default' | 'large'
export type Colors = 'primary' | 'success' | 'warning' | 'danger' | 'neutral' | 'dark'

export type TagProps = {
  kind?: Kinds
  size?: Sizes
  color?: Colors
  action?: () => void
  children: ReactNode
}

export type TagStyleProps = {
  size: Sizes
  color: Colors
  kind: Kinds
}
