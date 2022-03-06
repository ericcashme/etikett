import { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'
import { Box } from '../Box'
import color from '../theme/color'
import font from '../theme/font'
import space from '../theme/space'

export const BoxWithInfos = styled(Box)`
  padding: ${space.md};

  h6 {
    margin-bottom: ${space.xs};
    color: ${color.grayscale.black};
    font-family: ${font.family};
    font-size: ${font.size.small};
    line-height: ${font.lineHeight.sm};
    font-weight: ${font.weight.normal};
  }

  .p {
    color: ${color.grayscale.dark};
    font-family: ${font.family};
    font-size: ${font.size.small};
    line-height: ${font.lineHeight.sm};
    font-weight: ${font.weight.normal};
  }
`

export const BoxWithoutInfos = styled(Box)<ButtonHTMLAttributes<HTMLButtonElement>>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 140px;
  color: ${color.grayscale.black};
  font-family: ${font.family};
  font-size: ${font.size.h4};
  cursor: pointer;
`
