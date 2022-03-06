import { SimpleInterpolation } from 'styled-components'

export type SelectCardProps = {
  id: string
  orientation?: string
  name: string
  value: string
  label: string
  description?: string
  checked: boolean
  disabled?: boolean
  onChange: () => void
  iconName?: string
}

export type SelectCardStyleProps = {
  checked: boolean
  disabled?: boolean
  orientation: string
}

export type GetOrientationProps = {
  [key: string]: SimpleInterpolation
}
