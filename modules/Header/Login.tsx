import React, { memo, useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { api } from 'utils'
import { NewIcon } from 'components'
import { useLocalStorage } from 'hooks/useLocalStorage'
import * as S from './styles'

const Login = () => {
  const baseUrl = process.env.BASE_URL
  const { storedValue } = useLocalStorage<string>('', '')
  const [isLogged, setIsLogged] = useState<boolean>(!!storedValue)
  const accountLink = isLogged ? `${baseUrl}/minha-conta` : '/login-cadastro'

  const fetchUser = useCallback(async () => {
    setIsLogged(true)
    await api
      .get('/v1/login/validate-auth')
      .then(() => {
        setIsLogged(true)
      })
      .catch(() => {
        localStorage.removeItem('user')
        setIsLogged(false)
      })
  }, [])

  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  return (
    <Link href={accountLink} as={accountLink} passHref>
      <S.LoginAnchor>
        <NewIcon name="person" width="20" height="20" fill="#00263E" title="User" />
      </S.LoginAnchor>
    </Link>
  )
}

export default memo(Login)
