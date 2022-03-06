import type { AppProps } from 'next/app'
import { ComponentsProvider } from 'components'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ComponentsProvider>
      <Component {...pageProps} />
    </ComponentsProvider>
  )
}

export default MyApp
