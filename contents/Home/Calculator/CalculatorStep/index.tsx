import { FC, memo, useCallback, ChangeEvent } from 'react'
import { Text, Input, SelectCard, Tooltip, NewIcon } from 'components'
import { calculatorFields } from '../data'
import * as S from '../styles'
import { SettingsChildProps, Option } from '../types'

export const CalculatorStep: FC<SettingsChildProps> = memo(({ selection, setSelection }) => {
  const handleChange = useCallback(
    (optionId, value) => {
      setSelection((oldSelection) => ({
        ...oldSelection,
        [optionId]: value
      }))
    },
    [setSelection]
  )

  const showField = useCallback(
    (excludes): boolean => {
      if (!excludes) return true
      const isExcluded = excludes.some(({ id, value }: { id: string; value: string }) => selection[id] === value)
      return !isExcluded
    },
    [selection]
  )

  const isDisabled = useCallback(
    (disableList): boolean => {
      if (!disableList) return false
      const isDisabled = disableList.some(({ id, value }: { id: string; value: string }) => selection[id] === value)
      return isDisabled
    },
    [selection]
  )

  return (
    <>
      {calculatorFields.map((field, index) => (
        <div key={field.id}>
          {showField(field?.exclude) && (
            <S.Block>
              <Text size="lg" family="heading" weight="bold" margin="0 0 1.5rem">
                {`${index + 1}. ${field.name}`}

                {field.hint && (
                  <Tooltip title={field.hint}>
                    <S.Hint>
                      <NewIcon name="info" width="14" height="14" fill="#808891" />
                    </S.Hint>
                  </Tooltip>
                )}
              </Text>

              <S.Option>
                {field.type === 'input-number' && (
                  <>
                    {field?.options?.map(({ id, name, unit, min, max }: Option) => (
                      <Input
                        dimension="large"
                        type="number"
                        min={min}
                        max={max}
                        key={id}
                        id={id}
                        name={name}
                        label={`${name} (${unit})`}
                        value={selection[id]}
                        onChange={(event: ChangeEvent<HTMLInputElement>): void =>
                          handleChange(id, event?.currentTarget?.value)
                        }
                      />
                    ))}
                  </>
                )}

                {field.type === 'select-radio' && (
                  <>
                    {field?.options?.map(({ id, name, icon, disabled }: Option) => (
                      <SelectCard
                        key={id}
                        id={id}
                        value={id}
                        name={field.id}
                        label={name}
                        disabled={isDisabled(disabled)}
                        checked={id === selection[field.id]}
                        onChange={() => handleChange(field.id, id)}
                        iconName={icon}
                      />
                    ))}
                  </>
                )}
              </S.Option>
            </S.Block>
          )}
        </div>
      ))}
    </>
  )
})

CalculatorStep.displayName = 'CalculatorStep'
