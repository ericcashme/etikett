import React, { memo } from 'react'
import { Row, Col, Text, NewIcon } from 'components'
import * as S from './styles'

export const TopFooter = memo(() => (
  <S.TopFooter>
    <Row>
      <Col xs={12} lg={3}>
        <S.TopFooterItem>
          <S.TopFooterCircle>
            <NewIcon name="place" width="30" height="30" fill="#fff" />
          </S.TopFooterCircle>
          <Text align="center" margin="0">
            In Deutschland produziert
          </Text>
        </S.TopFooterItem>
      </Col>
      <Col xs={12} lg={3}>
        <S.TopFooterItem>
          <S.TopFooterCircle>
            <NewIcon name="stars" width="30" height="30" fill="#fff" />
          </S.TopFooterCircle>
          <Text align="center" margin="0">
            Hochwertige Veredelungen
          </Text>
        </S.TopFooterItem>
      </Col>
      <Col xs={12} lg={3}>
        <S.TopFooterItem>
          <S.TopFooterCircle>
            <NewIcon name="leaf" width="30" height="30" fill="#fff" />
          </S.TopFooterCircle>
          <Text align="center" margin="0">
            Auf Wunsch personalisiert & nachhaltig
          </Text>
        </S.TopFooterItem>
      </Col>
      <Col xs={12} lg={3}>
        <S.TopFooterItem>
          <S.TopFooterCircle>
            <NewIcon name="intersection" width="30" height="30" fill="#fff" />
          </S.TopFooterCircle>
          <Text align="center" margin="0">
            Zahlreiche Sonderfarben
          </Text>
        </S.TopFooterItem>
      </Col>
    </Row>
  </S.TopFooter>
))

TopFooter.displayName = 'TopFooter'
