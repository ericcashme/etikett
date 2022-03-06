import { ReactNode } from 'react'

type Kind = 'primary' | 'success' | 'warning'

export type CardProductProps = {
  children: ReactNode
  href: string
  onClick: () => void
  title: string
  subtitle?: string
  label?: string
  price?: string
  unity?: string
  kind?: Kind
}
