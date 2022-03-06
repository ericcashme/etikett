type Option = {
  [key: string]: string | number
}

export type SelectProps = {
  label: string
  id: string
  name: string
  placeholder: string
  required: boolean
  error: string
  isBlock: boolean
  hasError: boolean
  isPill: boolean
  isBig: boolean
  isInline: boolean
  className: string
  disabled: boolean
  readOnly: boolean
  removeErrorSpace: boolean
  options: Option[]
  propertyValue: string
  propertyLabel: string
}

export type ContainerStyleProps = {
  removeErrorSpace: boolean
  isBlock: boolean
  isInline: boolean
}

export type GroupStyleProps = {
  isInline: boolean
  isBig: boolean
  isPill: boolean
  hasError: boolean
  disabled: boolean
  readOnly: boolean
}
