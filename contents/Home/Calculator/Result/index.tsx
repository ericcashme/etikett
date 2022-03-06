import { FC, memo } from 'react'
import { Text } from 'components'
import { format } from 'utils'
import { ExpressDelivery, StandardDelivery } from '../icons'
import { ResultFooter } from '../ResultFooter'
import { ResultProps } from '../types'
import * as S from './styles'

export const Result: FC<ResultProps> = memo(({ result, step, setStep, setIsAlertOpen }) => (
  <S.Result>
    <S.ResultWrapper>
      <S.ResultBox shadow>
        <Text size="xlg" family="heading" weight="bold" align="center" margin="0 0 2rem">
          Ihre Konfiguration
        </Text>

        <S.Total>{format.money(result.total)}</S.Total>
        <Text color="weak" size="sm" margin="0 0 2rem">
          Stückpreis: 0,1497€
        </Text>

        <S.Table>
          <S.TableHead>
            <S.TableCell>Stück</S.TableCell>
            <S.TableCell>Preis</S.TableCell>
            <S.TableCell>Stückpreis</S.TableCell>
          </S.TableHead>
          {result.priceTable.map(({ quantity, totalPrice, unitPrice, highlight }) => (
            <S.TableRow key={quantity} highlight={!!highlight}>
              <S.TableCell>{quantity}</S.TableCell>
              <S.TableCell>{format.money(totalPrice)}</S.TableCell>
              <S.TableCell>{format.money(unitPrice)}</S.TableCell>
            </S.TableRow>
          ))}
        </S.Table>

        <S.Delivery>
          <S.DeliveryType>
            <StandardDelivery />
            <div>
              <Text size="xs" color="weak" margin="0 0 .25rem">
                Standard
              </Text>
              <Text size="sm" margin="0">
                28.09.2021
              </Text>
            </div>
          </S.DeliveryType>

          <S.DeliveryType>
            <ExpressDelivery />
            <div>
              <Text size="xs" color="weak" margin="0 0 .25rem">
                Express
              </Text>
              <Text size="sm" margin="0">
                23.09.2021
              </Text>
            </div>
          </S.DeliveryType>
        </S.Delivery>
        <ResultFooter step={step} setStep={setStep} setIsAlertOpen={setIsAlertOpen} />
      </S.ResultBox>
      <Text size="xs" color="weak" margin="1rem 0" italic>
        Alle Preise zzgl. 19% MwSt.
      </Text>
    </S.ResultWrapper>
  </S.Result>
))

Result.displayName = 'Result'
