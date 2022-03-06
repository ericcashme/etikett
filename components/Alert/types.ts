import { ReactNode } from 'react'

type Sizes = 'small' | 'medium' | 'large' | 'full'

export type AlertProps = {
  size: Sizes
  close: () => void
  action: () => void
  children: ReactNode
  isLoading?: boolean
  isDisabled?: boolean
  confirmButtonName?: string
  cancelButtonName?: string
}

export type ContentStyleProps = {
  size: Sizes
}
