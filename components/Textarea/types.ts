import { TextareaHTMLAttributes } from 'react'

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  dimension?: string
  label?: string
  error?: string
  isBlock?: boolean
  hasError?: boolean
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
