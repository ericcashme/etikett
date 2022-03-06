import { FC, memo } from 'react'
import * as S from './styles'
import { SliderArrowProps } from './types'

export const SliderArrow: FC<SliderArrowProps> = memo(
  ({ slidesToShow, position, currentSlide, slideCount, ...rest }) => {
    const currSlide = currentSlide ?? 0
    let isDisabled = currentSlide === 0
    let classNames = 'slick-prev'

    if (position === 'right') {
      isDisabled = currSlide + slidesToShow === slideCount
      classNames = 'slick-next'
    }

    return (
      <S.ArrowButton
        type="button"
        className={`slick-arrow ${classNames}`}
        disabled={isDisabled}
        aria-hidden="true"
        aria-disabled={isDisabled}
        {...rest}
      >
        {position === 'left' && (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.958 15.312">
            <path
              d="M16.192,11.545a1.042,1.042,0,0,1,.008,1.467l-4.848,4.856H29.8a1.037,1.037,0,0,1,0,2.073H11.36L16.208,24.8a1.049,1.049,0,0,1-.008,1.467,1.032,1.032,0,0,1-1.459-.008L8.17,19.639h0a1.164,1.164,0,0,1-.215-.327.989.989,0,0,1-.08-.4,1.039,1.039,0,0,1,.3-.726l6.571-6.619A1.016,1.016,0,0,1,16.192,11.545Z"
              transform="translate(-7.875 -11.252)"
            />
          </svg>
        )}
        {position === 'right' && (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.958 15.312">
            <path
              d="M22.516,11.545a1.042,1.042,0,0,0-.008,1.467l4.848,4.856H8.9a1.037,1.037,0,0,0,0,2.073H27.348L22.5,24.8a1.049,1.049,0,0,0,.008,1.467,1.032,1.032,0,0,0,1.459-.008l6.571-6.619h0a1.164,1.164,0,0,0,.215-.327.989.989,0,0,0,.08-.4,1.039,1.039,0,0,0-.3-.726l-6.571-6.619A1.016,1.016,0,0,0,22.516,11.545Z"
              transform="translate(-7.875 -11.252)"
            />
          </svg>
        )}
      </S.ArrowButton>
    )
  }
)

SliderArrow.displayName = 'SliderArrow'
