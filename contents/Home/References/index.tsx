import { FC, memo } from 'react'
import Image from 'next/image'
import { Row, Col, Text } from 'components'
import { referencesList } from './referenceList'
import * as S from './styles'

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      }
    },
    {
      breakpoint: 99999,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5
      }
    }
  ]
}

export const References: FC = memo(() => (
  <S.References>
    <Row>
      <Col xs={12}>
        <Text size="xlg" family="heading" weight="bold" margin="0 0 2rem">
          Unsere Referenzen
        </Text>

        <S.Slide {...settings}>
          {referencesList.map(({ src, alt }) => (
            <S.Reference key={alt}>
              <S.ReferenceImage>
                <Image src={src} alt={alt} objectFit="contain" layout="fill" quality={100} />
              </S.ReferenceImage>
            </S.Reference>
          ))}
        </S.Slide>
      </Col>
    </Row>
  </S.References>
))

References.displayName = 'References'
