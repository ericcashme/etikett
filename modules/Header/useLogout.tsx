import { useState, useCallback } from 'react'
import { useRouter } from 'next/router'
import { api } from 'utils'

const useLogout = () => {
  const router = useRouter()
  const [logoutLoading, setLogoutLoading] = useState(false)

  const fetchLogout = useCallback(async () => {
    setLogoutLoading(true)

    await api.put('/v2/customers/logout', {}).then(() => {
      localStorage.removeItem('user')

      if (router.pathname === '/') {
        router.reload()
      }

      router.push('/')
    })

    setLogoutLoading(false)
  }, [router])

  return {
    fetchLogout,
    logoutLoading
  }
}

export default useLogout
