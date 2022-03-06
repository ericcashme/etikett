import React, { FC, memo, useEffect, useState, useCallback } from 'react'
import { Text } from '../Text'
import * as S from './styles'
import { ModalProps } from './types'

const isObjectEmpty = (obj: { [key: string]: string }) => Object.keys(obj).length === 0 && obj.constructor === Object

export const Modal: FC<ModalProps> = memo(
  ({
    size = 'small',
    infos = {},
    close,
    func = () => {},
    buttonName = 'Atualizar',
    children = null,
    isLoading = false,
    isDisabled = false,
    error = '',
    showActions = true,
    hideCancelButton = false,
    CancelButtonName = 'Cancelar',
    otherAction = null,
    warning = () => {}
  }) => {
    const [body] = useState(document.querySelector('body') as HTMLBodyElement)

    const handleKeyUp = useCallback(
      (e) => {
        if (e.keyCode === 27) {
          e.preventDefault()
          close()
          window.removeEventListener('keyup', handleKeyUp, false)
        }
      },
      [close]
    )

    useEffect(() => {
      window.addEventListener('keyup', handleKeyUp, false)
      body.style.overflow = 'hidden'

      return () => {
        window.removeEventListener('keyup', handleKeyUp, false)
        body.style.overflow = 'visible'
      }
    }, [handleKeyUp, body])

    const handleCallbackFunc = useCallback(() => {
      if (!isDisabled) {
        func(close, warning)
      }
    }, [close, warning, isDisabled, func])

    return (
      <S.Background>
        <S.Content size={size}>
          <S.CloseModal onClick={close} data-testid="modal-button-close">
            ×
          </S.CloseModal>

          {!isObjectEmpty(infos) && (
            <S.Header>
              {infos.title && (
                <Text as="h1" size="lg" weight="bold" align="center" margin="0 0 .5rem">
                  {infos.title}
                </Text>
              )}

              {infos.subtitle && (
                <Text size="xs" align="center" margin="0 0 1rem">
                  {infos.subtitle}
                </Text>
              )}
            </S.Header>
          )}

          {children && <S.InnerContent>{children}</S.InnerContent>}

          {error && (
            <Text color="danger" size="xs" weight="bold" align="center">
              {error}
            </Text>
          )}

          {showActions && (
            <S.Actions>
              <S.LeftAction>{size !== 'small' && otherAction}</S.LeftAction>

              <S.RightAction>
                {!hideCancelButton && (
                  <S.CancelButton onClick={close} data-testid="modal-button-cancel">
                    {CancelButtonName}
                  </S.CancelButton>
                )}

                {Boolean(func) && (
                  <S.ActionButton
                    data-testid="modal-button-action"
                    isLoading={isLoading}
                    isDisabled={isDisabled}
                    onClick={isLoading ? undefined : handleCallbackFunc}
                  >
                    {buttonName}
                  </S.ActionButton>
                )}
              </S.RightAction>
            </S.Actions>
          )}
        </S.Content>
      </S.Background>
    )
  }
)

Modal.displayName = 'Modal'
