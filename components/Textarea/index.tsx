import React, { FC, memo } from 'react'
import * as S from './styles'
import { TextAreaProps } from './types'

export const Textarea: FC<TextAreaProps> = memo(
  ({
    id,
    label,
    dimension = 'medium',
    placeholder,
    required,
    error,
    isBlock,
    hasError,
    disabled,
    readOnly,
    className = '',
    ...rest
  }) => (
    <S.Container isBlock={isBlock} className={className}>
      {label && <S.Label htmlFor={id}>{label}</S.Label>}
      <S.Wrapper
        dimension={dimension}
        hasError={hasError}
        disabled={disabled}
        readOnly={readOnly}
        hasLabel={Boolean(label)}
      >
        <textarea
          id={id}
          required={required}
          aria-required={required}
          aria-label={label || placeholder}
          disabled={disabled}
          readOnly={readOnly}
          placeholder={placeholder}
          {...rest}
        />
      </S.Wrapper>
      {hasError && error && <S.Error>{error}</S.Error>}
    </S.Container>
  )
)

Textarea.displayName = 'Textarea'
