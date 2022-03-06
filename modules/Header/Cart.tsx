import React, { memo, useCallback } from 'react'
import { useRouter } from 'next/router'
import { NewIcon } from 'components'
import * as S from './styles'

const Cart = () => {
  const cartNumber = 22
  const router = useRouter()

  const hanadleClickCart = useCallback(
    (e, slug) => {
      e.preventDefault()
      router.push(slug)
    },
    [router]
  )

  return (
    <S.Cart href="/meu-carrinho" onClick={(e) => hanadleClickCart(e, '/meu-carrinho')}>
      <NewIcon name="cart" width="24" height="24" fill="#00263E" title="Cart" />
      <S.CartNumber>{cartNumber}</S.CartNumber>
    </S.Cart>
  )
}

export default memo(Cart)
