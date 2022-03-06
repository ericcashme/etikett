import { memo } from 'react'
import Page from 'modules/Page'
import { About } from './About'
import { Advantages } from './Advantages'
import { Calculator } from './Calculator'
import { Hero } from './Hero'
import { Labels } from './Labels'
import { Learning } from './Learning'
import { News } from './News'
import { References } from './References'

const SEO = {
  title: 'Etikettenhersteller für Rollen- und Klebeetiketten – jetzt bestellen!',
  description:
    'Wir drucken Ihre Rollenetiketten, Klebeetiketten & Nassleimetiketten✓ online bestellen✓ Expressproduktion✓ persönliche Beratung✓ 0€ Versand✓',
  copyright: 'Etikett',
  robots: 'max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  canonical: 'https://etikett.de/',
  type: 'website'
}

export const Home = memo(() => (
  <Page seo={SEO}>
    <Hero />
    <Calculator />
    <Labels />
    <Learning />
    <About />
    <Advantages />
    <References />
    <News />
  </Page>
))

Home.displayName = 'Home'
