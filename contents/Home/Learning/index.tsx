import { FC, memo } from 'react'
import { Row, Col, CardBlog, HorizontalScroll } from 'components'
import { useWindowSize } from 'hooks'
import { SliderArrow } from 'modules/Slider'
import { learningList } from './learningList'
import * as S from './styles'

const settings = {
  speed: 500,
  infinite: false,
  prevArrow: <SliderArrow position="left" slidesToShow={3} />,
  nextArrow: <SliderArrow position="right" slidesToShow={3} />,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 99999,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }
  ]
}

export const Learning: FC = memo(() => {
  const windowSize = useWindowSize()
  const isLgBreakpoint = windowSize?.width > 768

  return (
    <S.Learning>
      <Row>
        <Col xs={12}>
          <S.LearningInner>
            {!isLgBreakpoint && (
              <HorizontalScroll>
                {learningList.map(({ href, image, title, description }) => (
                  <S.CardBlogWrapper key={title}>
                    <CardBlog
                      href={href}
                      image={image}
                      title={title}
                      description={description}
                      labelButton="Mehr erfahren"
                    />
                  </S.CardBlogWrapper>
                ))}
              </HorizontalScroll>
            )}
            {isLgBreakpoint && (
              <S.Slide {...settings}>
                {learningList.map(({ href, image, title, description }) => (
                  <S.CardBlogWrapper key={title}>
                    <CardBlog
                      href={href}
                      image={image}
                      title={title}
                      description={description}
                      labelButton="Mehr erfahren"
                    />
                  </S.CardBlogWrapper>
                ))}
              </S.Slide>
            )}
          </S.LearningInner>
        </Col>
      </Row>
    </S.Learning>
  )
})

Learning.displayName = 'Learning'
