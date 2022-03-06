import { useState, useEffect, useRef } from 'react'

type WindowSize = {
  width: number
  height: number
}

type Ref = ReturnType<typeof setInterval> | null

export const useWindowSize = (): WindowSize => {
  const timeout = useRef<Ref>(null)
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0
  })

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }, [])

  useEffect(() => {
    const handleResize = () => {
      timeout?.current && clearTimeout(timeout.current)

      timeout.current = setTimeout(() => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight
        })
      }, 100)
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [timeout])

  return windowSize
}
