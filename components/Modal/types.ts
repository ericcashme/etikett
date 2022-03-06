import { ReactNode } from 'react'

type Sizes = 'small' | 'medium' | 'large' | 'full'

type Infos = {
  title?: string
  subtitle?: string
}

export type ModalProps = {
  size: Sizes
  infos: Infos
  close: () => void
  func?: (close?: Function, warning?: Function) => void
  warning?: () => void
  buttonName?: string
  children?: ReactNode
  isLoading?: boolean
  isDisabled?: boolean
  error?: string
  showActions?: boolean
  hideCancelButton?: boolean
  CancelButtonName?: string
  otherAction?: ReactNode
}

export type ContentStyleProps = {
  size: Sizes
}
