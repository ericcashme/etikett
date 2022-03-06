import { FC, memo, useCallback, useRef, useState, MutableRefObject } from 'react'
import { default as SliderProps } from 'react-slick'
import Slider from 'react-slick'
import { theme, Row, Col, Text, NewIcon, HorizontalScroll } from 'components'
import { useWindowSize } from 'hooks/useWindowSize'
import { SliderArrow } from 'modules/Slider'
import * as S from './styles'
const { color } = theme

const labels = [
  {
    id: 1,
    icon: 'food',
    title: 'Lebensmittel',
    color: color.primary.light
  },
  {
    id: 2,
    icon: 'beer',
    title: 'Bier',
    color: color.primary.pure
  },
  {
    id: 3,
    icon: 'spice',
    title: 'Gewürze',
    color: color.primary.dark
  },
  {
    id: 4,
    icon: 'food',
    title: 'Lebensmittel',
    color: color.primary.light
  },
  {
    id: 5,
    icon: 'beer',
    title: 'Bier',
    color: color.primary.pure
  },
  {
    id: 6,
    icon: 'spice',
    title: 'Gewürze',
    color: color.primary.dark
  }
]

export const Labels: FC = memo(() => {
  const sliderRef = useRef() as MutableRefObject<SliderProps>
  const [index, setIndex] = useState<number>(0)
  const windowSize = useWindowSize()
  const isLgBreakpoint = windowSize?.width > 768

  const handlePrev = useCallback(() => {
    sliderRef.current.slickPrev()
  }, [sliderRef])

  const handleNext = useCallback(() => {
    sliderRef.current.slickNext()
  }, [sliderRef])

  const beforeChange = useCallback((prev, next) => {
    setIndex(next)
  }, [])

  const settings = {
    infinite: false,
    speed: 500,
    beforeChange,
    slidesToShow: 3,
    slidesToScroll: 3
  }

  return (
    <S.Labels>
      <Row>
        <Col xs={12} lg={4}>
          <Text size="xxlg" family="heading" weight="bold" align={isLgBreakpoint ? 'left' : 'center'}>
            Passende Etiketten
            <br />
            für jede Branche
          </Text>
          <Text color="weak" margin="0 0 3rem" align={isLgBreakpoint ? 'left' : 'center'}>
            Um einen möglichst reibungslosen Ablauf Ihrer Bestellung zu gewährleisten, haben wir Ihnen die wichtigsten
            Infos.
          </Text>

          <S.ArrowButtons>
            <SliderArrow position="left" onClick={handlePrev} currentSlide={index} slideCount={6} slidesToShow={3} />
            <SliderArrow position="right" onClick={handleNext} currentSlide={index} slideCount={6} slidesToShow={3} />
          </S.ArrowButtons>
        </Col>
        <Col xs={12} lg={8}>
          {!isLgBreakpoint && (
            <HorizontalScroll>
              {labels.map(({ id, icon, title, color }) => (
                <S.LabelWrapper key={id}>
                  <S.Label>
                    <S.LabelIcon bgColor={color}>
                      <NewIcon name={icon} width="40" height="40" />
                    </S.LabelIcon>
                    <Text weight="medium" margin="0">
                      {title}
                    </Text>
                  </S.Label>
                </S.LabelWrapper>
              ))}
            </HorizontalScroll>
          )}

          {isLgBreakpoint && (
            <Slider ref={sliderRef} {...settings}>
              {labels.map(({ id, icon, title, color }) => (
                <S.LabelWrapper key={id}>
                  <S.Label>
                    <S.LabelIcon bgColor={color}>
                      <NewIcon name={icon} width="40" height="40" />
                    </S.LabelIcon>
                    <Text weight="medium" margin="0">
                      {title}
                    </Text>
                  </S.Label>
                </S.LabelWrapper>
              ))}
            </Slider>
          )}
        </Col>
      </Row>
    </S.Labels>
  )
})

Labels.displayName = 'Labels'
