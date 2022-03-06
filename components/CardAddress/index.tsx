import React, { FC, memo } from 'react'
import { Button } from '../Button'
import { Icon } from '../Icon'
import * as S from './styles'
import { CardAddressProps } from './types'

export const CardAddress: FC<CardAddressProps> = memo(({ title, address, onEdit, onRemove, onAdd }) => {
  if (title && address) {
    return (
      <S.BoxWithInfos>
        <h6>{title}</h6>
        <p>{address}</p>

        <div>
          <Button data-testid="cardaddress-id-edit" kind="weak" onClick={onEdit}>
            <Icon name="EditOutline" /> Editar
          </Button>
          <Button data-testid="cardaddress-id-remove" kind="weak" onClick={onRemove}>
            <Icon name="Trash2Outline" /> Excluir
          </Button>
        </div>
      </S.BoxWithInfos>
    )
  }

  return (
    <S.BoxWithoutInfos role="button" onClick={onAdd}>
      +
    </S.BoxWithoutInfos>
  )
})

CardAddress.displayName = 'CardAddress'
