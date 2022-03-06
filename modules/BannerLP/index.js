/* eslint-disable react/no-danger */
import React, { memo, useEffect, useState } from 'react'

import { Col } from 'components'
import { useWindowSize } from 'utils'
import PropTypes from 'prop-types'

import * as S from './BannerLP.styles'
import generateImageLink from './generateImageLink'

const BannerLP = ({ content, showTitle }) => {
  const windowSize = useWindowSize()
  const { path, seo, content_title, content_text } = content
  const [imageLink, setImageLink] = useState()
  const [imageHeight, setImageHeight] = useState(337)

  useEffect(() => {
    if (windowSize) {
      setImageLink(() => generateImageLink(path, windowSize.width))
      setImageHeight((oldHeight) => {
        if ((!path.desktop || path.desktop === '') && path.mobile && path.mobile !== '') {
          return 620
        }

        return oldHeight
      })
    }
  }, [path, windowSize])

  return (
    <S.BannerRow isFull>
      <Col>
        {imageLink && <S.Imagem src={imageLink} alt={seo.alt} title={seo.title} width={1080} height={imageHeight} />}
        <S.Content>
          {showTitle && <h1>{content_title}</h1>}
          {content_text && <div dangerouslySetInnerHTML={{ __html: content_text }} />}
        </S.Content>
      </Col>
    </S.BannerRow>
  )
}

BannerLP.propTypes = {
  content: PropTypes.shape({
    path: PropTypes.shape({
      mobile: PropTypes.string,
      desktop: PropTypes.string,
      tablet: PropTypes.string,
    }),
    seo: PropTypes.shape({
      alt: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
    content_title: PropTypes.string.isRequired,
    content_text: PropTypes.string.isRequired,
  }).isRequired,
  showTitle: PropTypes.bool,
}

BannerLP.defaultProps = {
  showTitle: false,
}

export default memo(BannerLP)
