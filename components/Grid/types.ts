import { ReactNode } from 'react'

type Sizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'hd'

type Orders = {
  order: number
  mq: Sizes
}

export type ColProps = {
  noGutter: boolean
  xs: number
  sm: number
  md: number
  lg: number
  xl: number
  hd: number
  xsOffset: number
  smOffset: number
  mdOffset: number
  lgOffset: number
  xlOffset: number
  hdOffset: number
  shrink: boolean
  orders: Orders[]
}

export type SizesProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key in string]: any
}

type Directions = {
  dir: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  mq: Sizes
}

export type RowProps = {
  children: ReactNode
  isFluid: boolean
  isFull: boolean
  start: Sizes
  center: Sizes
  end: Sizes
  top: Sizes
  middle: Sizes
  bottom: Sizes
  around: Sizes
  between: Sizes
  directions: Directions[]
}
