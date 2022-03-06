// cel h 450px(sm)
// cel v 600px(md)
// tab h 768px(lg)
// tab v 992px(xl)
// des 1200px(hd)

export type MediaProps = {
  [key in string]: number
}

const media: MediaProps = {
  xs: 0,
  sm: 28.125,
  md: 37.5,
  lg: 48,
  xl: 62,
  hd: 75
}

export default media
