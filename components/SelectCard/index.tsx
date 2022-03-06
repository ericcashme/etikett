import React, { FC, memo } from 'react'
import { Text } from 'components'
import { Icon } from './Icon'
import * as S from './styles'
import { SelectCardProps } from './types'

export const SelectCard: FC<SelectCardProps> = memo(
  ({
    id,
    orientation = 'horizontal',
    name,
    label,
    description,
    value,
    checked,
    disabled,
    onChange,
    iconName,
    ...rest
  }) => (
    <S.SelectCard htmlFor={id} checked={checked} disabled={disabled} orientation={orientation} {...rest}>
      <S.HiddenInput
        id={id}
        name={name}
        type="radio"
        value={value}
        checked={checked}
        disabled={disabled}
        onClick={onChange}
        readOnly
      />

      {iconName && (
        <S.IconWrapper>
          <Icon name={iconName} />
        </S.IconWrapper>
      )}

      <S.Infos>
        <Text as="span" weight={checked ? 'medium' : 'normal'} margin="0 0.25rem 0 0">
          {label}
        </Text>

        {description && (
          <Text as="span" color="primary" margin="0">
            {description}
          </Text>
        )}
      </S.Infos>
    </S.SelectCard>
  )
)

SelectCard.displayName = 'SelectCard'
