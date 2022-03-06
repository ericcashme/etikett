import { FC, memo } from 'react'
import { Row, Col, Text, Button, NewIcon, Avatar, HorizontalScroll } from 'components'
import * as S from './styles'

export const Infos: FC = memo(() => (
  <S.Infos>
    <Row>
      <Col xs={12}>
        <HorizontalScroll>
          <S.InfoCard>
            <S.InfoCardTop>
              <Text size="xlg" family="heading" weight="bold">
                Welches Material?
              </Text>
              <Text size="sm" color="weak">
                Unser kostenfreies Musterbuch bietet Ihnen einen Überblick an Papieren und Veredelungen. Überzeugen Sie
                sich von unserer Qualität.
              </Text>
            </S.InfoCardTop>

            <S.InfoCardBottom>
              <Button kind="warning" onClick={() => {}}>
                Jetzt bestellen
              </Button>
              <Avatar size="xl" image="/img/footer/material.png" alt="Material" hasBorder />
            </S.InfoCardBottom>
          </S.InfoCard>

          <S.InfoCard>
            <S.InfoCardTop>
              <Text size="xlg" family="heading" weight="bold">
                Kundenservice
              </Text>
              <Text size="sm" weight="medium">
                Montag bis Freitag, 8:00 – 18:00 Uhr
              </Text>
              <Text size="sm" color="weak">
                Unser Team beantwortet Ihre Fragen schnell und kompetent und berät Sie gerne.
              </Text>
            </S.InfoCardTop>

            <S.InfoCardBottom>
              <div>
                <Text weight="medium" margin="0 0 .5rem">
                  <NewIcon name="email" size="sm" fill="#008FBE" />
                  info@etikett.de
                </Text>

                <Text weight="medium">
                  <NewIcon name="phone" size="sm" fill="#008FBE" />
                  06502-984940
                </Text>
              </div>
              <Avatar size="xl" image="/img/footer/denise-lauterbach.png" alt="Denise Lauterbach" hasBorder />
            </S.InfoCardBottom>
          </S.InfoCard>

          <S.InfoCard>
            <S.InfoCardTop>
              <Text size="xlg" family="heading" weight="bold">
                Unsere Kunden
              </Text>
              <Text size="sm" color="weak">
                Zufriedene Kunden zeigt man gerne. Hier finden Sie eine kleine Auswahl unserer Referenzkunden & Partner.
              </Text>
            </S.InfoCardTop>
            <S.InfoCardBottom>
              <Button kind="warning" onClick={() => {}}>
                Jetzt bestellen
              </Button>
              <Avatar size="xl" image="/img/footer/our-customers.png" alt="Our customer" hasBorder />
            </S.InfoCardBottom>
          </S.InfoCard>
        </HorizontalScroll>
      </Col>
    </Row>
  </S.Infos>
))

Infos.displayName = 'Infos'
