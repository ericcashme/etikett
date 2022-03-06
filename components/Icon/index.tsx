import React, { FC, memo } from 'react'
import * as IconOutline from '@styled-icons/evaicons-outline'
import * as IconSolid from '@styled-icons/evaicons-solid'
import { IconProps, EvaIconProps } from './types'

const EVA_ICONS: EvaIconProps = {
  ...IconSolid,
  ...IconOutline
}

const sizes = {
  xs: '12',
  sm: '16',
  md: '32',
  lg: '48'
}

export const Icon: FC<IconProps> = memo(
  ({ id, title, name, fill = 'currentColor', size = 'md', width, height, ...rest }) => {
    const sizeProps = {
      width: width || sizes[size],
      height: height || sizes[size]
    }

    const EvaIcon = EVA_ICONS[name]

    return <EvaIcon color={fill} id={id} title={title} {...sizeProps} {...rest} />
  }
)

Icon.displayName = 'Icon'
