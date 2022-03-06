import { useEffect } from 'react'

import { useModalContext } from 'hooks/useModalContext'

export const useModal = () => {
  const { state, helpers } = useModalContext()

  const { show, isMounted } = state
  const { setVisibility, setComputingSide, setModalRoot } = helpers

  useEffect(() => {
    const nextIsClientSide = !!global.document
    setComputingSide(nextIsClientSide)
    let element
    /* istanbul ignore else */
    if (nextIsClientSide) {
      element = document.getElementById('modal-root')
      /* istanbul ignore else */
      if (!element) {
        element = document.createElement('div')
        element.setAttribute('id', 'modal-root')
        document.body.appendChild(element)
      }
    }

    setModalRoot(element)

    return () => {
      /* istanbul ignore else */
      if (nextIsClientSide) {
        /* istanbul ignore else */
        if (element) {
          document.body.removeChild(element)
          setModalRoot(undefined)
        }
      }
    }
  }, [])

  useEffect(() => {
    /* istanbul ignore else */
    if (isMounted && show) {
      setTimeout(() => setVisibility(true), 0)
    }
  }, [isMounted, show])

  return { state, helpers }
}
