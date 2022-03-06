import React, { memo, useState, useCallback, useEffect, FC } from 'react'
import * as S from './styles'
import { CollapseItemProps } from './types'

export const CollapseItem: FC<CollapseItemProps> = memo(
  ({ index, isOpen = false, handleOpen, maxHeight = '10rem', children, ...rest }) => {
    const [itemIsOpen, setItemIsOpen] = useState(false)

    const handleOpenItem = useCallback(() => {
      if (handleOpen) {
        return handleOpen(index)
      }

      return setItemIsOpen((state) => !state)
    }, [handleOpen, index])

    useEffect(() => {
      setItemIsOpen(isOpen)
    }, [isOpen])

    return (
      <S.CollapseItem {...rest}>
        <S.CollapseHeader role="button" tabIndex={0} onClick={handleOpenItem} onKeyPress={handleOpenItem}>
          {/* {children[0] || children} */}
          {children}
          <S.ArrowIcon open={itemIsOpen} size="md" name="ArrowIosDownward" />
        </S.CollapseHeader>

        <S.CollapseBody open={itemIsOpen} maxHeight={maxHeight}>
          {/* {children[1]} */}
          {children}
        </S.CollapseBody>
      </S.CollapseItem>
    )
  }
)

CollapseItem.displayName = 'CollapseItem'
