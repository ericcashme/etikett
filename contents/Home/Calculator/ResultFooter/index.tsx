import { FC, memo, useCallback } from 'react'
import { Text, Button, NewIcon } from 'components'
import { DataSheet, EmailOffer } from '../icons'
import { Steps, ResultFooterProps } from '../types'
import * as S from './styles'

export const ResultFooter: FC<ResultFooterProps> = memo(({ step, setStep, setIsAlertOpen }) => {
  const handleStep = useCallback(() => {
    if (step !== Steps.SUMMARY) {
      setStep(step + 1)
    }

    if (step === Steps.SUMMARY) {
      setIsAlertOpen(true)
    }
  }, [step, setStep, setIsAlertOpen])

  return (
    <S.ResultFooter>
      <Button kind="warning" onClick={handleStep}>
        {step !== Steps.SUMMARY && (
          <>
            Nächster Schritt
            <NewIcon name="arrowRight" width="18" height="18" fill="currentColor" />
          </>
        )}
        {step === Steps.SUMMARY && (
          <>
            <NewIcon name="cart" width="18" height="18" fill="currentColor" />
            in den Warenkorb
          </>
        )}
      </Button>

      <S.ExtraInfos>
        <S.ExtraInfosItem href="/">
          <DataSheet />
          <Text size="xs" color="weak" margin="0">
            Datenblatt
          </Text>
        </S.ExtraInfosItem>
        <S.ExtraInfosItem href="/">
          <EmailOffer />
          <Text size="xs" color="weak" margin="0">
            Angebot per E-Mail
          </Text>
        </S.ExtraInfosItem>
      </S.ExtraInfos>
    </S.ResultFooter>
  )
})

ResultFooter.displayName = 'ResultFooter'
