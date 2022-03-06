import { useEffect, useCallback } from 'react'

import { useRouter } from 'next/router'

export const usePreventLeavePage = (dirty: boolean, message: string) => {
  const router = useRouter()

  const handleBeforeUnload = useCallback(
    event => {
      event.preventDefault()
      event.returnValue = message
      event.message = message
      return message
    },
    [message]
  )

  const handleRouteChange = useCallback(() => {
    // eslint-disable-next-line no-alert
    if (window.confirm(message)) return
    // eslint-disable-next-line no-throw-literal
    throw 'Abort route change. Please ignore this error.'
  }, [message])

  useEffect(() => {
    if (dirty) {
      window.addEventListener('beforeunload', handleBeforeUnload, { capture: true })
      window.addEventListener('unload', handleBeforeUnload, { capture: true })
      router.events.on('routeChangeStart', handleRouteChange)
    }

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload, { capture: true })
      window.removeEventListener('unload', handleBeforeUnload, { capture: true })
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [handleBeforeUnload, handleRouteChange, dirty, router.events])
}
