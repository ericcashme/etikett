import { FC, memo, useState, useRef, useCallback } from 'react'
import { Col, Box, Text, NewIcon, Alert, LinearGradient } from 'components'
import { useWindowSize } from 'hooks'
import { format } from 'utils'
import { calculateResult } from './calculateResult'
import { CalculatorStep } from './CalculatorStep'
import { initialSelection } from './data'
import { CartChecked } from './icons'
import { Wave } from './icons'
import { Options } from './Options'
import { Result } from './Result'
import { ResultFooter } from './ResultFooter'
import * as S from './styles'
import { Summary } from './Summary'
import { Selection, Steps } from './types'

export const Calculator: FC = memo(() => {
  const calculatorRef = useRef<HTMLDivElement>(null)
  const [step, setStep] = useState<Steps>(Steps.CALCULATOR)
  const [selection, setSelection] = useState<Selection>(initialSelection)
  const [isAlertOpen, setIsAlertOpen] = useState<boolean>(false)
  const [isOpenCalculator, setIsOpenCalculator] = useState<boolean>(false)
  const windowSize = useWindowSize()
  const isXlBreakpoint = windowSize?.width > 992
  const result = calculateResult(selection)

  const handleSetStep = useCallback(
    (step: Steps) => {
      setStep(step)
      if (calculatorRef && calculatorRef.current) {
        calculatorRef.current.scrollIntoView({ behavior: 'smooth' })
      }
    },
    [calculatorRef]
  )

  return (
    <S.Settings>
      <S.SettingsRow ref={calculatorRef}>
        <Col xs={12} xl={8}>
          <Box shadow>
            <S.TopCalculator>
              <S.StepsWrapper>
                <S.Steps>
                  <S.Step
                    active={step === Steps.CALCULATOR}
                    finished={step > Steps.CALCULATOR}
                    onClick={() => handleSetStep(Steps.CALCULATOR)}
                  >
                    <S.StepNumber active={step === Steps.CALCULATOR} finished={step > Steps.CALCULATOR}>
                      {step > Steps.CALCULATOR ? <NewIcon name="checkmark" width="14" height="14" /> : '1'}
                    </S.StepNumber>
                    Kalkulator
                  </S.Step>
                  <S.Step
                    active={step === Steps.OPTIONS}
                    finished={step > Steps.OPTIONS}
                    onClick={() => handleSetStep(Steps.OPTIONS)}
                  >
                    <S.NextIcon name="chevronRight" width="14" height="14" fill="#fff" />
                    <S.StepNumber active={step === Steps.OPTIONS} finished={step > Steps.OPTIONS}>
                      {step > Steps.OPTIONS ? <NewIcon name="checkmark" width="14" height="14" /> : '2'}
                    </S.StepNumber>
                    Optionen
                  </S.Step>
                  <S.Step active={step === Steps.SUMMARY} onClick={() => handleSetStep(Steps.SUMMARY)}>
                    <S.NextIcon name="chevronRight" width="14" height="14" fill="#fff" />
                    <S.StepNumber active={step === Steps.SUMMARY}>3</S.StepNumber>
                    Warenkorb
                  </S.Step>
                </S.Steps>
                <S.TopCalculatorGradient />
              </S.StepsWrapper>
              <S.TopCalculatorPrice>
                <Text size="xlg" color="primary-light" family="heading" weight="bold" align="right" margin="0">
                  {format.money(result.total)}
                </Text>
                <Text size="sm" color="inverse" align="right" margin="0" italic>
                  zzgl. 19% MwSt.
                </Text>
              </S.TopCalculatorPrice>
            </S.TopCalculator>

            <S.SettingsInner open={isOpenCalculator}>
              <S.Body>
                {step === Steps.CALCULATOR && <CalculatorStep selection={selection} setSelection={setSelection} />}
                {step === Steps.OPTIONS && <Options selection={selection} setSelection={setSelection} />}
                {step === Steps.SUMMARY && <Summary selection={selection} setStep={handleSetStep} />}
              </S.Body>

              {!isXlBreakpoint && <ResultFooter step={step} setStep={handleSetStep} setIsAlertOpen={setIsAlertOpen} />}
              {!isOpenCalculator && <LinearGradient direction="bottom-top" />}
            </S.SettingsInner>
            <S.OpenCalculator
              onClick={() => setIsOpenCalculator((oldState) => !oldState)}
              open={isOpenCalculator}
              aria-label="Open calculator"
            >
              <Wave />
              <NewIcon name="chevronDown" width="18" height="18" fill="#fff" />
            </S.OpenCalculator>
          </Box>
        </Col>
        {isXlBreakpoint && (
          <Col xs={12} xl={4}>
            <Result result={result} step={step} setStep={handleSetStep} setIsAlertOpen={setIsAlertOpen} />
          </Col>
        )}
      </S.SettingsRow>

      {isAlertOpen && (
        <Alert
          size="large"
          cancelButtonName="weiter Einkaufen"
          confirmButtonName="zum Warenkorb"
          action={() => {}}
          close={() => setIsAlertOpen(false)}
        >
          <CartChecked />
          <Text size="xxlg" family="heading" weight="bold" align="center" margin="2rem 0">
            Ihr Etikett wurde erfolgreich in den Warenkorb gelegt
          </Text>
        </Alert>
      )}
    </S.Settings>
  )
})

Calculator.displayName = 'Calculator'
