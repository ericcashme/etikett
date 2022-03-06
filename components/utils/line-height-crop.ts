import { css } from 'styled-components'

const crop = (lineHeight: number, capitalLetter = 1) => css`
  &::before {
    content: '';
    display: block;
    height: 0;
    width: 0;
    margin-top: ${(capitalLetter - lineHeight) * 0.5}em;
  }
`

export default crop
