import { useState, useEffect, useRef } from 'react'

type Ref = ReturnType<typeof setInterval> | null

export const useScrollPosition = (): number => {
  const timeout = useRef<Ref>(null)
  const [offSet, setOffSet] = useState<number>(0)

  useEffect(() => {
    const handleScroll = () => {
      timeout?.current && clearTimeout(timeout.current)

      timeout.current = setTimeout(() => {
        setOffSet(window.pageYOffset)
      }, 200)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [timeout])

  return offSet
}
