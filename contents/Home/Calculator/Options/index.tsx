import { FC, memo, useCallback, ChangeEvent } from 'react'
import { Text, Input, SelectCard, Textarea, Checkbox } from 'components'
import { optionFields } from '../data'
import * as S from '../styles'
import { SettingsChildProps, Option } from '../types'

export const Options: FC<SettingsChildProps> = memo(({ selection, setSelection }) => {
  const handleChange = useCallback(
    (optionId, value) => {
      setSelection((oldSelection) => ({
        ...oldSelection,
        [optionId]: value
      }))
    },
    [setSelection]
  )

  const handleChangeCheckbox = useCallback(
    (optionId, value) => {
      let newOptions = selection[optionId] as string[]
      const isChecked = newOptions.some((item: string) => item === value)

      if (isChecked) {
        newOptions = newOptions.filter((item: string) => item !== value)
      } else {
        newOptions.push(value)
      }

      setSelection({
        ...selection,
        [optionId]: newOptions
      })
    },
    [selection, setSelection]
  )

  const handleAssemblyChange = useCallback(
    (optionId, value) => {
      const opositeSelection = optionId === 'maximumRollDiameter' ? 'labelsNumberPerRoll' : 'maximumRollDiameter'

      setSelection((oldSelection) => ({
        ...oldSelection,
        [optionId]: value,
        [opositeSelection]: '-'
      }))
    },
    [setSelection]
  )

  return (
    <>
      {optionFields.map((option) => (
        <S.Block key={option.id}>
          <Text size="lg" family="heading" weight="bold" margin="0 0 1.5rem">
            {option.name}
          </Text>

          {option.type === 'textarea' && (
            <S.Option direction="column">
              {option?.options?.map(({ id, name, dimension }: Option) => (
                <Textarea
                  key={id}
                  id={id}
                  isBlock
                  name={name}
                  label={name}
                  value={selection[id]}
                  dimension={dimension}
                  onChange={(event: ChangeEvent<HTMLTextAreaElement>): void =>
                    handleChange(id, event?.currentTarget?.value)
                  }
                />
              ))}
            </S.Option>
          )}

          {option.type === 'input-number' && option.id === 'assembly' && (
            <S.Option isFull>
              {option?.options?.map(({ id, name, unit, min, max }: Option, index: number) => (
                <>
                  <Input
                    isBlock
                    dimension="large"
                    type="number"
                    key={id}
                    id={id}
                    name={name}
                    min={min}
                    max={max}
                    label={`${name} (${unit})`}
                    value={selection[id]}
                    onChange={(event: ChangeEvent<HTMLInputElement>): void =>
                      handleAssemblyChange(id, event?.currentTarget?.value)
                    }
                  />

                  {index === 0 && <S.Divider>oder</S.Divider>}
                </>
              ))}
            </S.Option>
          )}

          {option.type === 'range' && (
            <S.Option>
              {option?.options?.map(({ id, name }: Option) => (
                <Input
                  dimension="large"
                  key={id}
                  id={id}
                  name={name}
                  label={name}
                  value={selection[id]}
                  onChange={(event: ChangeEvent<HTMLInputElement>): void =>
                    handleChange(id, event?.currentTarget?.value)
                  }
                />
              ))}
            </S.Option>
          )}

          {option.type === 'select-radio' && (
            <S.Option>
              {option?.options?.map(({ id, name, description, icon }: Option) => (
                <SelectCard
                  key={id}
                  id={id}
                  value={id}
                  name={option.id}
                  label={name}
                  description={description}
                  checked={id === selection[option.id]}
                  onChange={() => handleChange(option.id, id)}
                  iconName={icon}
                />
              ))}
            </S.Option>
          )}

          {option.type === 'select-radio-vertical' && (
            <S.Option>
              {option?.options?.map(({ id, name, description, icon }: Option) => (
                <SelectCard
                  key={id}
                  orientation="vertical"
                  id={id}
                  value={id}
                  name={option.id}
                  label={name}
                  description={description}
                  checked={id === selection[option.id]}
                  onChange={() => handleChange(option.id, id)}
                  iconName={icon}
                />
              ))}
            </S.Option>
          )}

          {option.type === 'checkbox' && (
            <S.Option direction="column">
              {option?.options?.map(({ id, name, description }: Option) => (
                <Checkbox
                  key={id}
                  id={id}
                  value={id}
                  name={option.id}
                  label={name}
                  description={description}
                  checked={selection[option.id].includes(id)}
                  kind="square"
                  onChange={() => handleChangeCheckbox(option.id, id)}
                />
              ))}
            </S.Option>
          )}
        </S.Block>
      ))}
    </>
  )
})

Options.displayName = 'Options'
