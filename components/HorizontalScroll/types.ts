import { ReactNode } from 'react'

export type HorizontalScrollProps = {
  direction?: 'top-bottom' | 'bottom-top' | 'left-right' | 'right-left'
  children: ReactNode
}
