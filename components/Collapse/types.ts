import { ReactNode } from 'react'

export type CollapseProps = {
  children?: ReactNode
  kind: 'default' | 'accordion'
}

export type CollapseItemProps = {
  maxHeight?: string
  children: ReactNode
  index: number
  handleOpen: (index: number) => void
  isOpen: boolean
}

export type CollapseHeaderProps = {
  children: ReactNode
}

export type CollapseBodyProps = {
  open: boolean
  maxHeight: string
  children: ReactNode
}
