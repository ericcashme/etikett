import { ReactNode } from 'react'

type Kinds = 'primary' | 'gold'

export type ListProps = {
  children: ReactNode
  kind?: Kinds
  double?: boolean
}

export type ListItemProps = {
  icon?: string
  children: ReactNode
}

export type ListStyleProps = {
  double: boolean
  kind: Kinds
}
