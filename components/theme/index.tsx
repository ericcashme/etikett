import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import borders from './borders'
import breakpoint from './breakpoint'
import color from './color'
import font from './font'
import GlobalStyle from './global'
import media from './media'
import opacity from './opacity'
import space from './space'
import zindex from './zindex'

export const tokens = {
  breakpoint,
  color,
  font,
  space,
  media,
  borders,
  opacity,
  zindex
}

const Provider = ({ theme, children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
)

Provider.defaultProps = {
  theme: tokens
}

Provider.propTypes = {
  theme: PropTypes.shape({
    breakpoint: PropTypes.objectOf(PropTypes.any),
    color: PropTypes.objectOf(PropTypes.any),
    font: PropTypes.objectOf(PropTypes.any),
    space: PropTypes.objectOf(PropTypes.any),
    media: PropTypes.objectOf(PropTypes.any),
    borders: PropTypes.objectOf(PropTypes.any),
    opacity: PropTypes.objectOf(PropTypes.any),
    zindex: PropTypes.objectOf(PropTypes.any)
  }),
  children: PropTypes.node.isRequired
}

export default Provider
