import { FC, memo } from 'react'
import Image from 'next/image'
import { Row, Col, Text, NewIcon } from 'components'
import * as S from './styles'

export const About: FC = memo(() => (
  <S.About>
    <Row>
      <Col xs={12} lg={7} xl={9}>
        <Text size="xlg" family="heading" weight="bold">
          etikett.de - Ihre B2B Etikettendruckerei
        </Text>
        <Text color="weak">
          etikett.de ist Ihr B2B-Etikettenhersteller für Klebeetiketten, Rollenetiketten, Haftetiketten oder Etiketten
          auf A4 Bogen online. Wir bieten professionell bedruckte Etiketten. Ob eckig, rund oder mit individueller Form
          — ob auf Folie, Papier, metallisiert oder aus transparenter PP Folie:
        </Text>
        <Text color="weak">
          Wir drucken Ihre Etiketten in höchster Qualität – auf Wunsch auch als Expressproduktion in 48 Stunden. Lange
          Lieferzeiten gehören damit der Vergangenheit an! Nutzen Sie unseren Online-Kalkulator, um Ihre individuellen
          Flaschenetiketten oder Rollenhaftetiketten bequem online zu kalkulieren und zu bestellen. Profitieren Sie
          dabei von unserer Erfahrung als professionelle Etikettendruckerei. Als Gewinner des HP Inkspiration Awards
          2018 & 2019 in DE, AT & CH und des Druck & Medien Awards 2019 als Innovativste Onlinedruckerei wissen wir
          genau, worauf es beim Druck Ihrer Etiketten ankommt. Profitieren Sie von der Macht der Ästhetik und einem
          starken Druckpartner!
        </Text>
        <Text color="weak">
          Zusätzlich bieten wir unseren Kunden auch einige Premium-Services an. Dazu gehören unter anderem unser
          Probedruck, die Druckdatenwerkstatt oder unser einzigartiger Designservice für Etiketten. So bieten wir Ihnen
          von der Gestaltung über die Produktion bis hin zum fertigen Etikett eine optimale Unterstützung und
          garantieren Ihnen eine einwandfreie und zufriedenstellende Umsetzung Ihres Etikettenauftrags.
        </Text>
      </Col>

      <Col xs={12} lg={5} xl={3}>
        <S.BorderImage>
          <Image
            src="/img/home/about.png"
            alt="etikett.de - Ihre B2B Etikettendruckerei"
            width="350"
            height="360"
            layout="responsive"
          />
        </S.BorderImage>
        <S.Button onClick={() => {}}>
          <NewIcon name="arrowRight" width="16" height="16" />
          Mehr von etikett.de
        </S.Button>
      </Col>
    </Row>
  </S.About>
))

About.displayName = 'About'
