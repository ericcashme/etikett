import React, { FC, memo } from 'react'
import color from '../theme/color'
import { sizes, symbolSizes } from './LogoOptions'
import { LogoSvg } from './LogoSvg'
import { LogoProps } from './types'

export const Logo: FC<LogoProps> = memo(
  ({ kind = 'primary', size = 'base', width, height, isMono, id, title, description, isSymbol, ...rest }) => {
    const logoSizes = isSymbol ? symbolSizes : sizes
    const svgColor = color[kind].pure || 'currentColor'

    const sizeProp = {
      width: width || (logoSizes[size] && logoSizes[size].w),
      height: height || (logoSizes[size] && logoSizes[size].h)
    }

    return (
      <LogoSvg
        id={id}
        title={title}
        description={description}
        fill={isMono ? svgColor : ''}
        isSymbol={isSymbol}
        {...sizeProp}
        {...rest}
      />
    )
  }
)

Logo.displayName = 'Logo'
