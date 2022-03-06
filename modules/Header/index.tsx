import React, { memo } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import { NewIcon, Text, Row, Col } from 'components'
import * as S from './styles'

const BottomHeader = dynamic(() => import('./BottomHeader'))
const Cart = dynamic(() => import('./Cart'))
const Login = dynamic(() => import('./Login'))
const SearchProduct = dynamic(() => import('./SearchProduct'))

const Header = () => (
  <S.Header>
    <S.SkipLink href="#menu">Go to menu</S.SkipLink>
    <S.SkipLink href="#main">Go to main content</S.SkipLink>
    <S.SkipLink href="#footer">Go to footer</S.SkipLink>

    <Row>
      <Col xs={12}>
        <S.TopHeader>
          <S.TopHeaderInfos>
            <Text size="xs" color="weak" margin="0 1rem 0 0">
              <NewIcon name="checkmark" width="10" height="10" />
              Versandkostenfrei innerhalb der EU
            </Text>
            <Text size="xs" color="weak" margin="0 1rem 0 0">
              <NewIcon name="checkmark" width="10" height="10" />
              48 Std. Expressproduktion
            </Text>
            <Text size="xs" color="weak" margin="0 1rem 0 0">
              <NewIcon name="checkmark" width="10" height="10" />
              CO2-reduzierte Produktion
            </Text>
          </S.TopHeaderInfos>

          <S.TopHeaderList>
            <Link href="/venda-corporativa" as="/venda-corporativa" passHref>
              <S.TopHeaderLinks kind="text" size="xs">
                Kontakt
              </S.TopHeaderLinks>
            </Link>

            <Link href="/indique-a-printi" as="/indique-a-printi" passHref>
              <S.TopHeaderLinks kind="text" size="xs">
                Hilfe
              </S.TopHeaderLinks>
            </Link>

            <Link href="/indique-a-printi" as="/indique-a-printi" passHref>
              <S.TopHeaderLinks kind="text" size="xs">
                FAQ
              </S.TopHeaderLinks>
            </Link>
          </S.TopHeaderList>
        </S.TopHeader>
      </Col>
    </Row>

    <S.MainHeader>
      <Row middle="xs">
        <Col xs={4} sm={5} md={6} xl={2}>
          <Link href="/" passHref>
            <S.Logo>
              <Image
                src="/img/logo-etikett.png"
                alt="Etikett"
                width="244"
                height="71"
                layout="responsive"
                quality={100}
              />
            </S.Logo>
          </Link>
        </Col>

        <Col
          xs={12}
          xl={5}
          xlOffset={1}
          orders={[
            {
              mq: 'xs',
              order: 2
            },
            {
              mq: 'xl',
              order: 0
            }
          ]}
        >
          <SearchProduct />
        </Col>

        <Col xs={8} sm={7} md={6} xl={4}>
          <S.MainHeaderRight>
            <Login />
            <Cart />
            <S.HeaderButton kind="warning">Jetzt kalkulieren</S.HeaderButton>
            <S.MenuButton type="button">
              <NewIcon name="menu" width="24" height="24" fill="#00263e" title="Menu" />
            </S.MenuButton>
          </S.MainHeaderRight>
        </Col>
      </Row>
    </S.MainHeader>
    <BottomHeader />
  </S.Header>
)

export default memo(Header)
