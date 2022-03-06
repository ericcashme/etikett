import { FC, memo } from 'react'
import Image from 'next/image'
import { Row, Col, Text } from 'components'
import * as S from './styles'

export const Hero: FC = memo(() => (
  <S.Hero>
    <S.BgWrap>
      <Image alt="Hero" src="/img/home/hero.png" layout="fill" objectFit="cover" quality={100} />
    </S.BgWrap>
    <Row>
      <Col xs={12}>
        <Text as="h1" size="h2" family="heading" weight="bold" align="center">
          Individuelle Haftetiketten
        </Text>
        <Text as="h2" color="weak" size="xlg" family="heading" weight="medium" align="center">
          Bestellen Sie Ihre Etiketten auf Rolle oder Bogen
        </Text>
      </Col>
    </Row>
  </S.Hero>
))

Hero.displayName = 'Hero'
