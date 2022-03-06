type Sizes = 'small' | 'medium' | 'large'
type Colors = 'primary' | 'success' | 'info' | 'variant' | 'warning' | 'danger' | 'neutral' | 'dark' | 'inverse'

export type LoaderProps = {
  wrapper: string
  size: Sizes
  color: Colors
}

export type LoaderStyleProps = {
  size: Sizes
}

export type SmallLoaderStyleProps = {
  color: Colors
}

export type WrapperStyleProps = {
  wrapper: string
}
