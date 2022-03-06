import { prices } from './data'
import { Selection, PriceTable } from './types'

export const calculateResult = (selection: Selection) => {
  const jump = ['jobName', 'comment', 'amount']
  const multiplier = ['width', 'height', 'varieties', 'maximumRollDiameter', 'labelsNumberPerRoll']
  const findAmountPrice = (amount: number) =>
    prices.amount.find(({ min, max }) => amount >= min && amount <= max)?.price || 0

  const total = Object.entries(selection).reduce(
    (prev, curr) => {
      const [id, value] = curr

      if (jump.includes(id)) {
        return prev
      }

      if (multiplier.includes(id)) {
        const selectionItem = selection[id] as string
        return {
          total: prev.total + prices[id] * (parseInt(selectionItem) || 0),
          partialTotal: prev.total + prices[id] * (parseInt(selectionItem) || 0)
        }
      }

      if (id === 'amount') {
        const selectionItem = selection[id] as string
        return {
          total: prev.total + (findAmountPrice(parseInt(selectionItem)) || 0),
          partialTotal: prev.total
        }
      }

      if (id === 'extra') {
        const extraList = selection[id] as string[]
        const totalExtra = extraList.reduce((sum: number, extra: string) => prices[id][extra] + sum, 0)

        return {
          total: prev.total + totalExtra,
          partialTotal: prev.total + totalExtra
        }
      }

      return {
        total: prev.total + prices[id][value],
        partialTotal: prev.total + prices[id][value]
      }
    },
    {
      total: 0,
      partialTotal: 0
    }
  )

  const selectionAmount = selection.amount as string
  const amountList = [parseInt(selectionAmount), 500, 2000, 3000, 5000]
  const tablePrice: PriceTable[] = []

  amountList.forEach((amount, index) => {
    const amountTotal = total.partialTotal + findAmountPrice(amount)
    tablePrice.push({
      quantity: amount || 0,
      totalPrice: amountTotal,
      unitPrice: amountTotal / amount || 0,
      highlight: index === 0
    })
  })

  const result = {
    total: total.total,
    priceTable: tablePrice
  }

  return result
}
