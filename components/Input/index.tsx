import React, { FC, memo } from 'react'
import { Icon } from '../Icon'
import * as S from './styles'
import { InputProps } from './types'

export const Input: FC<InputProps> = memo(
  ({
    id,
    label,
    type = 'text',
    dimension = 'medium',
    placeholder,
    required,
    error,
    leftIcon,
    rightIcon,
    rightElement,
    isBlock,
    hasError,
    isPill,
    disabled,
    readOnly,
    className,
    ...rest
  }) => (
    <S.Container isBlock={isBlock} className={className || ''}>
      {label && <S.Label htmlFor={id}>{label}</S.Label>}
      <S.Wrapper
        dimension={dimension}
        isPill={isPill}
        hasError={hasError}
        disabled={disabled}
        readOnly={readOnly}
        leftIcon={Boolean(leftIcon)}
        rightIcon={Boolean(leftIcon) || Boolean(rightElement)}
        hasLabel={Boolean(label)}
      >
        {leftIcon && <Icon name={leftIcon} title={placeholder} size="sm" />}

        <input
          type={type}
          id={id}
          required={required}
          aria-required={required}
          aria-label={label || placeholder}
          disabled={disabled}
          readOnly={readOnly}
          placeholder={placeholder}
          {...rest}
        />

        {rightIcon && <Icon name={rightIcon} title={placeholder} size="sm" />}
        {rightElement}
      </S.Wrapper>
      {hasError && error && <S.Error>{error}</S.Error>}
    </S.Container>
  )
)

Input.displayName = 'Input'
