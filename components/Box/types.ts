import { ReactNode } from 'react'

type Types = 'default' | 'primary' | 'dark' | 'gold'

type Kinds = 'default' | 'info' | 'warning' | 'success' | 'danger'

export type BoxProps = {
  type?: Types
  kind?: Kinds
  noRadius?: boolean
  backgroundUrl?: string
  backgroundOpacity?: boolean
  shadow?: boolean
  disabled?: boolean
  children: ReactNode
}
