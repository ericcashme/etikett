import React, { FC, memo } from 'react'
import { Text } from 'components'
import * as S from './styles'
import { CheckboxProps } from './types'

export const Checkbox: FC<CheckboxProps> = memo(
  ({ kind = 'square', id, name, value, checked, onChange, label, description, ...rest }) => (
    <S.CheckboxContainer htmlFor={id} {...rest}>
      <S.HiddenInput type="checkbox" id={id} name={name} value={value} checked={checked} onClick={onChange} readOnly />
      <S.Shape kind={kind} checked={checked}>
        <S.InnerShape kind={kind} checked={checked} />
      </S.Shape>

      <S.Infos>
        <Text as="span" margin="0 0.25rem 0 0">
          {label}
        </Text>

        {description && (
          <Text as="span" color="primary" margin="0">
            {description}
          </Text>
        )}
      </S.Infos>
    </S.CheckboxContainer>
  )
)

Checkbox.displayName = 'Checkbox'
