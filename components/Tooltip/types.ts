import { ReactNode } from 'react'

export type TooltipProps = {
  children: ReactNode
  title?: string
  active?: boolean
  kind?: 'ellipsis' | 'normal'
}

export type TooltipStyleProps = {
  active: boolean
}
