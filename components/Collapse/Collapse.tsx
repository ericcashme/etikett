import React, { FC, memo, useState, useCallback, ReactElement } from 'react'
import * as S from './styles'
import { CollapseProps } from './types'

export const Collapse: FC<CollapseProps> = memo(({ kind = 'default', children }) => {
  let renderedChildren = children
  const [openChildren, setOpenChildren] = useState()

  const handleOpen = useCallback(
    (index) => {
      let newIndex = index

      if (openChildren === index) {
        newIndex = null
      }

      setOpenChildren(newIndex)
    },
    [openChildren]
  )

  if (kind === 'accordion') {
    renderedChildren = React.Children.map(children, (child, index) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, { index, handleOpen })
      }

      return child
    })

    renderedChildren = React.Children.map(renderedChildren, (child, index) => {
      if (React.isValidElement(child) && openChildren === index) {
        return React.cloneElement(child as ReactElement, { isOpen: true })
      }

      return child
    })
  }

  return <S.Collapse>{renderedChildren}</S.Collapse>
})

Collapse.displayName = 'Collapse'
