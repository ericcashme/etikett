type Kinds = 'primary' | 'success' | 'info' | 'variant' | 'warning' | 'danger' | 'neutral' | 'dark' | 'inverse'
type Sizes = 'base' | 'sm' | 'md' | 'lg'

export type LogoProps = {
  id: string
  title?: string
  description?: string
  width?: string
  height?: string
  size?: Sizes
  kind?: Kinds
  isMono?: boolean
  isSymbol?: boolean
}

export type LogoSvgProps = {
  id: string
  title?: string
  desc?: string
  fill?: string
  isSymbol?: boolean
  description?: string
}
