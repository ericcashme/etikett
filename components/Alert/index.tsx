import React, { FC, memo, useEffect, useState, useCallback } from 'react'
import { Button } from '../Button'
import * as S from './styles'
import { AlertProps } from './types'

export const Alert: FC<AlertProps> = memo(
  ({
    size = 'medium',
    close,
    action,
    children,
    isLoading = false,
    isDisabled = false,
    cancelButtonName = 'Cancel',
    confirmButtonName = 'Confirm'
  }) => {
    const [body] = useState(document?.querySelector('body') as HTMLBodyElement)

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

    return (
      <S.Background>
        <S.Content size={size}>
          <S.InnerContent>{children}</S.InnerContent>

          <S.Actions>
            <Button kind="weak" isOutlined onClick={close}>
              {confirmButtonName}
            </Button>

            <Button kind="warning" isLoading={isLoading} isDisabled={isDisabled || isLoading} onClick={action}>
              {cancelButtonName}
            </Button>
          </S.Actions>
        </S.Content>
      </S.Background>
    )
  }
)

Alert.displayName = 'Alert'
