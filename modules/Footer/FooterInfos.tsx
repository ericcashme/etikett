import React, { memo } from 'react'
import Image from 'next/image'
import { Row, Col, Text, NewIcon } from 'components'
import * as S from './styles'

export const FooterInfos = memo(() => (
  <S.FooterInfos>
    <Row>
      <Col xs={12} lg={3}>
        <S.FooterInfosItem>
          <Text size="lg" family="heading" weight="bold">
            Zahlungsmöglichkeiten
          </Text>

          <S.PaymentList>
            <S.PaymentListItem title="Paypal">
              <NewIcon name="paypal" width="44" height="44" />
            </S.PaymentListItem>
            <S.PaymentListItem title="Visa">
              <NewIcon name="visa" width="34" height="34" />
            </S.PaymentListItem>
            <S.PaymentListItem title="Mastercard">
              <NewIcon name="mastercard" width="28" height="28" />
            </S.PaymentListItem>
            <S.PaymentListItem title="Klarma">
              <NewIcon name="klarma" width="46" height="46" />
            </S.PaymentListItem>
            <S.PaymentListItem title="Amex">
              <NewIcon name="amex" width="24" height="24" />
            </S.PaymentListItem>
            <S.PaymentListItem title="Rechnung">
              <NewIcon name="rechnung" width="44" height="44" />
            </S.PaymentListItem>
            <S.PaymentListItem title="Vorkasse">
              <NewIcon name="vorkasse" width="44" height="44" />
            </S.PaymentListItem>
          </S.PaymentList>
        </S.FooterInfosItem>
      </Col>
      <Col xs={12} lg={3}>
        <S.FooterInfosItem>
          <Text size="lg" family="heading" weight="bold">
            Sicher einkaufen
          </Text>
          <S.WrapImage width="140">
            <Image
              src="/img/footer/shop-safely.png"
              alt="Shop safely"
              width="184"
              height="92"
              layout="responsive"
              quality={100}
            />
          </S.WrapImage>
        </S.FooterInfosItem>
      </Col>
      <Col xs={12} lg={3}>
        <S.FooterInfosItem>
          <Text size="lg" family="heading" weight="bold">
            FSC-zertifiziert
          </Text>
          <S.HorizontalList>
            <S.WrapImage width="60">
              <Image
                src="/img/footer/FSC-certified.png"
                alt="FC certified"
                width="70"
                height="106"
                layout="responsive"
                quality={100}
              />
            </S.WrapImage>
            <Text size="xs" color="weak" margin="0 0 0 .75rem">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore.
            </Text>
          </S.HorizontalList>
        </S.FooterInfosItem>
      </Col>
      <Col xs={12} lg={3}>
        <S.FooterInfosItem>
          <Text size="lg" family="heading" weight="bold">
            Auszeichnungen
          </Text>

          <S.HorizontalList>
            <S.WrapImage width="110">
              <Image src="/img/footer/hp.png" alt="HP" width="162" height="65" layout="responsive" quality={100} />
            </S.WrapImage>
            <S.WrapImage width="110">
              <Image
                src="/img/footer/druck-medien.png"
                alt="Druck Medien"
                width="161"
                height="65"
                layout="responsive"
                quality={100}
              />
            </S.WrapImage>
          </S.HorizontalList>
        </S.FooterInfosItem>
      </Col>
    </Row>
  </S.FooterInfos>
))

FooterInfos.displayName = 'FooterInfos'
