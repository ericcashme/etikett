import React, { FC, memo } from 'react'
import * as S from './styles'
import { SelectProps } from './types'

export const Select: FC<SelectProps> = memo(
  ({
    label,
    id,
    required,
    error,
    hasError,
    isPill,
    isBlock,
    isBig,
    isInline = false,
    disabled,
    readOnly,
    className,
    removeErrorSpace,
    options,
    placeholder,
    propertyValue = 'id',
    propertyLabel = 'name',
    ...rest
  }) => (
    <S.Container isBlock={isBlock} isInline={isInline} removeErrorSpace={removeErrorSpace} className={className || ''}>
      {label && <label htmlFor={id}>{label}</label>}
      <S.Group
        isInline={isInline}
        isBig={isBig}
        isPill={isPill}
        hasError={hasError}
        disabled={disabled}
        readOnly={readOnly}
      >
        <select
          id={id}
          required={required}
          aria-required={required}
          aria-disabled={disabled}
          disabled={disabled}
          {...rest}
        >
          <option defaultValue={placeholder || 'Selecione uma opção'} value="">
            {placeholder || 'Selecione uma opção'}
          </option>
          {options &&
            options.length > 0 &&
            options.map((option) => (
              <option key={option[propertyValue]} value={option[propertyValue]}>
                {option[propertyLabel]}
              </option>
            ))}
        </select>
      </S.Group>
      {error && <S.Error>{error}</S.Error>}
    </S.Container>
  )
)

Select.displayName = 'Select'
