import { FC, memo } from 'react'
import { Text, Button, NewIcon } from 'components'
import { calculatorFields, optionFields } from '../data'
import { Option, Selection, SummaryChildProps, Steps } from '../types'
import * as S from './styles'

const formatName = (id: string, name: string) => {
  if (id === 'dimensions') {
    return `${name} (Höhe x Breite)`
  }

  return name
}

const renderName = (options: Option[], selection: Selection, id: string): string => {
  if (id === 'dimensions') {
    return `${selection.width}x${selection.height}mm`
  }

  if (id === 'varieties') {
    return `${selection.varieties}x`
  }

  if (id === 'amount') {
    return `${selection.amount} Stück`
  }

  if (id === 'assembly' && selection.maximumRollDiameter) {
    const optionName = options.find((option) => option.id === 'maximumRollDiameter')?.name
    return `${selection.maximumRollDiameter} mm ${optionName}`
  }

  if (id === 'assembly' && selection.labelsNumberPerRoll) {
    const optionName = options.find((option) => option.id === 'labelsNumberPerRoll')?.name
    return `${selection.labelsNumberPerRoll} ${optionName}`
  }

  if (id === 'extra') {
    const extraList: string[] = []
    options.forEach((option) => {
      if (selection.extra.includes(option.id)) {
        extraList.push(option.name)
      }
    })
    return extraList.join(', ') ?? '-'
  }

  const item = options.find((option) => option.id === selection[id]) as Option
  return item?.name
}

export const Summary: FC<SummaryChildProps> = memo(({ selection, setStep }) => {
  const [order, ...restOptionFields] = optionFields

  const orderPart = {
    id: order.id,
    name: order.name,
    options: order.options
  }

  return (
    <>
      <S.Summary>
        <S.SummaryHeader>
          <Text size="lg" family="heading" weight="bold" margin="0">
            {orderPart.name}
          </Text>
          <Button size="small" kind="weak" isOutlined onClick={() => setStep(Steps.OPTIONS)}>
            <NewIcon name="edit" width="14" height="14" fill="currentColor" />
            Bearbeiten
          </Button>
        </S.SummaryHeader>
        <S.SummaryBody>
          {orderPart.options.map(({ id, name }) => (
            <div key={id}>
              <Text size="sm" color="weak" margin="0 0 0.125rem">
                {name}
              </Text>
              <Text weight="medium" margin="0 0 1.5rem">
                {selection[id]}
              </Text>
            </div>
          ))}
        </S.SummaryBody>
      </S.Summary>

      <S.Summary>
        <S.SummaryHeader>
          <Text size="lg" family="heading" weight="bold" margin="0">
            Ihr Etikett
          </Text>
          <Button size="small" kind="weak" isOutlined onClick={() => setStep(Steps.CALCULATOR)}>
            <NewIcon name="edit" width="14" height="14" fill="currentColor" />
            Bearbeiten
          </Button>
        </S.SummaryHeader>

        <S.SummaryBody>
          {calculatorFields.map(({ id, name, options }) => (
            <div key={id}>
              <Text size="sm" color="weak" margin="0 0 0.125rem">
                {formatName(id, name)}
              </Text>
              <Text weight="medium" margin="0 0 1.5rem">
                {renderName(options, selection, id)}
              </Text>
            </div>
          ))}
        </S.SummaryBody>
      </S.Summary>

      <S.Summary>
        <S.SummaryHeader>
          <Text size="lg" family="heading" weight="bold" margin="0">
            Optionen
          </Text>
          <Button size="small" kind="weak" isOutlined onClick={() => setStep(Steps.OPTIONS)}>
            <NewIcon name="edit" width="14" height="14" fill="currentColor" />
            Bearbeiten
          </Button>
        </S.SummaryHeader>

        <S.SummaryBody>
          {restOptionFields.map(({ id, name, options }) => (
            <div key={id}>
              <Text size="sm" color="weak" margin="0 0 0.125rem">
                {name}
              </Text>
              <Text weight="medium" margin="0 0 1.5rem">
                {renderName(options, selection, id)}
              </Text>
            </div>
          ))}
        </S.SummaryBody>
      </S.Summary>
    </>
  )
})

Summary.displayName = 'Summary'
