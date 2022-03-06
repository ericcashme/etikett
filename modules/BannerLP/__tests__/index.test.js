import React from 'react'
import { ComponentsProvider } from 'components'
import { render } from '@testing-library/react'

import BannerLP from '../BannerLP'

const bannerProps = {
  content: {
    content_text: `<p><br />
      - Conheça os produtos mais vendidos da Printi</p>
      <p>- Aproveite os acabamentos especiais de cada produto</p>
      <p>- Divulgue sua marca com produtos personalizados</p>
      <p>- Faça online de forma prática e rápida</p>
      <p></p>`,
    content_title: 'Mais Vendidos',
    path: {
      desktop: '2018-04/1524162808_1122x350px-banner-landing.jpg',
      mobile: '2018-04/1524162808_1122x350px-banner-landing.jpg',
    },
    seo: {
      alt: 'Confira os materiais mais vendidos na melhor gráfica online do Brasil 2',
      title: 'Confira os materiais mais vendidos na melhor gráfica online do Brasil 2',
    },
  },
  showTitle: true,
}

const BannerLPComponent = (props) => (
  <ComponentsProvider>
    <BannerLP {...props} />
  </ComponentsProvider>
)

describe('<BannerLP />', () => {
  it('Expect to render BannerLP with snapshot', () => {
    expect(<BannerLPComponent {...bannerProps} />).toMatchSnapshot()
  })

  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error')
    render(<BannerLPComponent {...bannerProps} />)
    expect(spy).not.toHaveBeenCalled()
  })
})
