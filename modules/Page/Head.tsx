import React, { FC, memo } from 'react'
import Head from 'next/head'

type SEO = {
  title?: string
  description?: string
  copyright?: string
  abstract?: string
  robots?: string
  canonical?: string
  type?: string
  image?: string
}

interface HeadersProps {
  seo?: SEO
}

const Headers: FC<HeadersProps> = ({ seo }) => (
  <Head>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <title>{seo?.title || 'Printi. | Mais que uma Gráfica Online'}</title>
    <meta
      name="description"
      content={
        seo?.description ||
        'A Printi é um modelo inovador de gráfica online com impressão digital e offset de alta qualidade a preços acessíveis.'
      }
    />
    <meta name="robots" content={seo?.robots || 'index, follow'} />
    <meta name="copyright" content={seo?.copyright || 'Printi'} />
    <meta
      name="abstract"
      content={
        seo?.abstract ||
        seo?.description ||
        'A Printi é um modelo inovador de gráfica online com impressão digital e offset de alta qualidade a preços acessíveis.'
      }
    />

    <meta property="og:url" content={seo?.canonical || 'https://printi.com.br'} />
    <meta property="og:type" content={seo?.type || 'website'} />
    <meta property="og:locale" content="pt-BR" />
    <meta property="og:title" content={seo?.title} />
    <meta property="og:description" content={seo?.description} />
    <meta
      property="og:image"
      content={seo?.image || 'https://www.printi.com.br/assets/final/img/logos-printi/Printi-simbolo.png'}
    />
    <meta property="og:image:width" content="200" />
    <meta property="og:image:height" content="267" />
    <meta property="fb:admins" content="627008" />
    <meta property="fb:app_id" content="312936488776247" />

    <meta name="twitter:title" content={seo?.title} />
    <meta name="twitter:description" content={seo?.description} />
    <meta
      name="twitter:image"
      content={seo?.image || 'https://www.printi.com.br/assets/final/img/logos-printi/Printi-simbolo.png'}
    />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:creator" content="Printi" />
  </Head>
)

export default memo(Headers)
