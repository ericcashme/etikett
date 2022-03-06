const money = (value, lang = 'de-DE', currency = 'EUR') =>
  new Intl.NumberFormat(lang, {
    style: 'currency',
    currency
  })
    .format(value)
    .replace('\xa0', ' ')

export const format = {
  money
}
