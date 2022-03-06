/* eslint-disable react/no-danger */
import React, { memo, useState, useCallback, FC } from 'react'
import { Button } from '../Button'
import * as S from './styles'
import { CookieConsentProps } from './types'

export const CookieConsent: FC<CookieConsentProps> = memo(
  ({
    type = 'dark',
    agreeText = 'Concordar e fechar',
    onAgree,
    preferenceText = 'Preferências',
    disAgreeText = 'Limpar cookies',
    onDisAgree,
    cookieConsentText,
    consentModalText,
    ...rest
  }) => {
    const [showModal, setShowModal] = useState(false)

    const handleOpenModal = useCallback(() => {
      setShowModal((prevState) => !prevState)
    }, [])

    return (
      <>
        {showModal && (
          <S.ModalWrap>
            <S.Modal>
              <S.CloseModal onClick={handleOpenModal}>×</S.CloseModal>

              <S.ModalText>
                <div dangerouslySetInnerHTML={{ __html: consentModalText }} />
              </S.ModalText>

              <S.Buttons>
                <Button isOutlined onClick={onDisAgree}>
                  {disAgreeText}
                </Button>
                <Button onClick={onAgree}>{agreeText}</Button>
              </S.Buttons>
            </S.Modal>
          </S.ModalWrap>
        )}

        <S.CookieContainer type={type} {...rest}>
          <S.CookieText>
            <div dangerouslySetInnerHTML={{ __html: cookieConsentText }} />
          </S.CookieText>
          <S.Buttons>
            <Button isOutlined kind="weak" onClick={handleOpenModal}>
              {preferenceText}
            </Button>
            <Button kind={type === 'dark' ? 'weak' : 'primary'} onClick={onAgree}>
              {agreeText}
            </Button>
          </S.Buttons>
        </S.CookieContainer>
      </>
    )
  }
)

CookieConsent.displayName = 'CookieConsent'
