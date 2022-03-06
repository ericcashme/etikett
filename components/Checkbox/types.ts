type Kinds = 'square' | 'circle'

export type CheckboxProps = {
  kind: Kinds
  id: string
  name: string
  value: string
  checked: boolean
  onChange: () => void
  label: string
  description?: string
}

export type CheckboxStyleProps = {
  kind: Kinds
  checked: boolean
}
