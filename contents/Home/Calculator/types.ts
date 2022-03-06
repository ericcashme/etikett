import { Dispatch, SetStateAction } from 'react'

export type Selection = {
  [key: string]: string | string[]
}

export type SettingsChildProps = {
  selection: Selection
  setSelection: Dispatch<SetStateAction<Selection>>
}

export type Option = {
  id: string
  name: string
  unit?: string
  min?: string
  max?: string
  description?: string
  icon?: string
  dimension?: string
  disabled?: Array<{ id: string; value: string }>
}

export enum Steps {
  CALCULATOR = 1,
  OPTIONS = 2,
  SUMMARY = 3
}

export type StepStylesProps = {
  active: boolean
  finished?: boolean
}

export type PriceTable = {
  quantity: number
  totalPrice: number
  unitPrice: number
  highlight?: boolean
}

export type SummaryChildProps = {
  selection: Selection
  setStep: (step: Steps) => void
}

type Result = {
  total: number
  priceTable: PriceTable[]
}

export type ResultProps = {
  result: Result
  step: Steps
  setStep: (step: Steps) => void
  setIsAlertOpen: (isAlertOpen: boolean) => void
}

export type ResultFooterProps = {
  step: Steps
  setStep: (step: Steps) => void
  setIsAlertOpen: (isAlertOpen: boolean) => void
}
