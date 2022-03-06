import React, { FC, memo, useMemo } from 'react'
import NextLink from 'next/link'
import { Row, Col, Link, NewIcon, Text } from 'components'
import * as S from './styles'

const BottomHeader: FC = () => {
  const mainProducts = useMemo(
    () => [
      { title: 'Produkte', slug: '/' },
      { title: 'Druckdaten & Design', slug: '/' },
      { title: 'Materialien', slug: '/' },
      { title: 'Referenzen', slug: '/' },
      { title: 'Infozentrum', slug: '/' },
      { title: 'Unternehmen', slug: '/' }
    ],
    []
  )

  return (
    <S.BottomHeader>
      <Row>
        <Col xs={12}>
          <S.BottomHeaderList>
            {mainProducts.map(({ title, slug }) => (
              <S.BottomHeaderListItem key={title}>
                <NextLink href={slug} as={slug} passHref>
                  <Link size="sm">
                    {title}
                    <NewIcon name="chevronDown" width="10" height="10" fill="#808891" />
                  </Link>
                </NextLink>
              </S.BottomHeaderListItem>
            ))}

            <S.BottomHeaderListItem>
              <Text color="primary" margin="0">
                <NewIcon name="phone" size="sm" />
                Kundenservice:{' '}
                <Text as="span" weight="bold">
                  06502 - 984 940
                </Text>
              </Text>
            </S.BottomHeaderListItem>
          </S.BottomHeaderList>
        </Col>
      </Row>
    </S.BottomHeader>
  )
}

export default memo(BottomHeader)
