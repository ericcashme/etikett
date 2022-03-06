import { ReactNode, ButtonHTMLAttributes } from 'react'

type Kinds = 'primary' | 'dark' | 'weak' | 'warning'
type Sizes = 'small' | 'medium' | 'large'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  kind?: Kinds
  size?: Sizes
  isLoading?: boolean
  isDisabled?: boolean
  isBlock?: boolean
  isPill?: boolean
  isOutlined?: boolean
}

export type ButtonStyleProps = {
  kind: string
  size: string
  isLoading: boolean
  isDisabled: boolean
  isBlock: boolean
  isPill: boolean
  isOutlined: boolean
}

export type ButtonsProps = {
  isPill?: boolean
}
