import { StyledIcon } from '@styled-icons/styled-icon'

export type IconProps = {
  id?: string
  name: string
  fill?: string
  title?: string
  size?: 'xs' | 'sm' | 'md' | 'lg'
  width?: string
  height?: string
}

export type EvaIconProps = {
  [key: string]: StyledIcon
}
