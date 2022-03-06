import React, { FC, ReactNode, memo, useEffect, useState, useCallback } from 'react'
import dynamic from 'next/dynamic'
import { NewIcon } from 'components'
import { useScrollPosition } from 'hooks'
import * as S from './styles'

const Header = dynamic(() => import('../Header'))
const Head = dynamic(() => import('./Head'))
const Footer = dynamic(() => import('../Footer'))

type SEO = {
  title: string
  description: string
  copyright?: string
  abstract?: string
  robots: string
  canonical: string
  type?: string
}

interface PageProps {
  seo?: SEO
  children?: ReactNode
}

const Page: FC<PageProps> = ({ seo, children }) => {
  const [showButton, setShowButton] = useState<boolean>(false)
  const offset = useScrollPosition()

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    })
  }, [])

  useEffect(() => {
    if (offset > 1000) {
      setShowButton(true)
    } else {
      setShowButton(false)
    }
  }, [offset])

  return (
    <>
      {seo && <Head seo={seo} />}
      <Header />
      <main id="main">{children}</main>
      <Footer />
      {showButton && (
        <S.BackToTop onClick={scrollToTop}>
          <NewIcon name="arrowTop" width="20" height="20" fill="#00263E" />
        </S.BackToTop>
      )}
    </>
  )
}

export default memo(Page)
