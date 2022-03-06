import { ElementType, ReactNode } from 'react'

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xlg' | 'xxlg' | 'h3' | 'h2' | 'h1'
type Families = 'heading' | 'text'
type Align = 'left' | 'center' | 'right' | 'unset'
type Weight = 'normal' | 'medium' | 'bold'
type Transform = 'capitalize' | 'lowercase' | 'none' | 'uppercase'
type Colors = 'normal' | 'weak' | 'inverse' | 'primary' | 'primary-light' | 'success' | 'warning' | 'danger'

export type TextProps = {
  as?: ElementType
  color?: Colors
  size?: Size
  family?: Families
  align?: Align
  weight?: Weight
  transform?: Transform
  margin?: string
  padding?: string
  ellipsis?: boolean
  italic?: boolean
  title?: string
  children: ReactNode
}

export type TextStyleProps = {
  as: string
  color: Colors
  size: Size
  family: Families
  align: Align
  weight: Weight
  ellipsis: boolean
  italic: boolean
  transform: Transform
  margin: string
  padding: string
}
