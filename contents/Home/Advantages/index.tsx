import { FC, memo } from 'react'
import { Row, Col, Text, List, ListItem } from 'components'
import { advantageList } from './advantageList'
import * as S from './styles'

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  fade: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}

const Customer: FC = () => (
  <S.Customer>
    <S.Rating stars={5} filled={4} />
    <Text color="weak" size="sm">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
      dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
      kasd gubergren, no sea.
    </Text>

    <S.CustomerInfos>
      <S.CustomerInfosLeft>
        <S.AvatarFirst image="/img/home/stefam.png" alt="Stefan Lemcke" hasBorder />
        <S.AvatarSecond image="/img/home/stefam.png" alt="Stefan Lemcke" hasBorder />
        <S.AvatarThird image="/img/home/stefam.png" alt="Stefan Lemcke" hasBorder />
      </S.CustomerInfosLeft>
      <div>
        <Text size="sm" weight="bold" margin="0">
          Stefan Lemcke
        </Text>
        <Text size="xs" color="weak" margin="0">
          Gründer - Ankerkraut GmbH
        </Text>
      </div>
    </S.CustomerInfos>
  </S.Customer>
)

export const Advantages: FC = memo(() => (
  <S.Advantages>
    <Row>
      <Col xs={12}>
        <Text size="xlg" family="heading" weight="bold" margin="0 0 2rem">
          Ihre Vorteile bei etikett.de
        </Text>
      </Col>
    </Row>
    <Row>
      <Col
        xs={12}
        lg={4}
        orders={[
          {
            mq: 'xs',
            order: 2
          },
          {
            mq: 'lg',
            order: 1
          }
        ]}
      >
        <S.SlideWrapper>
          <S.Slide {...settings}>
            <Customer />
            <Customer />
            <Customer />
          </S.Slide>
        </S.SlideWrapper>
      </Col>
      <Col
        xs={12}
        lg={7}
        lgOffset={1}
        orders={[
          {
            mq: 'xs',
            order: 1
          },
          {
            mq: 'lg',
            order: 2
          }
        ]}
      >
        <List kind="gold" double>
          {advantageList.map(({ text }) => (
            <ListItem key={text} icon="CheckmarkOutline">
              {text}
            </ListItem>
          ))}
        </List>
      </Col>
    </Row>
  </S.Advantages>
))

Advantages.displayName = 'Advantages'
