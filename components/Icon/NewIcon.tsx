import React, { FC, memo } from 'react'
import { Icon } from './icon'
import { IconProps } from './types'

const sizes = {
  xs: '12',
  sm: '16',
  md: '32',
  lg: '48'
}

export const NewIcon: FC<IconProps> = memo(
  ({ id, title, name, fill = 'currentColor', size = 'md', width, height, ...rest }) => {
    const sizeProps = {
      width: width || sizes[size],
      height: height || sizes[size]
    }

    return <Icon name={name} fill={fill} id={id} title={title} {...sizeProps} {...rest} />
  }
)

NewIcon.displayName = 'NewIcon'
