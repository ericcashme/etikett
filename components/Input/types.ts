import { InputHTMLAttributes, ReactNode } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  dimension?: string
  label?: string
  error?: string
  leftIcon?: string
  rightIcon?: string
  rightElement?: ReactNode
  isBlock?: boolean
  hasError?: boolean
  isPill?: boolean
  hasMask?: boolean
}

export type ContainerStyleProps = {
  isBlock?: boolean
  className?: string
}

export type WrapperStyleProps = {
  dimension: string
  isPill?: boolean
  hasError?: boolean
  disabled?: boolean
  readOnly?: boolean
  leftIcon?: boolean
  rightIcon?: boolean
  hasLabel?: boolean
}
