/* eslint-disable no-console */
import { Dispatch, SetStateAction, useState, useCallback } from 'react'

type SetValue<T> = Dispatch<SetStateAction<T>>
type ReturnHooks<T> = {
  storedValue: T
  setValue: SetValue<T>
  removeValue: () => void
}

const parseJSON = <T>(value: string | null): T | null => {
  try {
    return value === 'undefined' ? undefined : JSON.parse(value ?? '')
  } catch (error) {
    console.log('parsing error on', { value })
    return null
  }
}

export const useLocalStorage = <T>(key: string, initialValue: T): ReturnHooks<T> => {
  const [storedValue, setStoredValue] = useState<T>((): T => {
    if (typeof window === 'undefined') {
      return initialValue
    }

    try {
      const item = localStorage.getItem(key)
      if (item) {
        return parseJSON(item) as T
      }

      localStorage.setItem(key, JSON.stringify(initialValue))
      return initialValue
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error)
      return initialValue
    }
  })

  const setValue: SetValue<T> = useCallback(
    (value) => {
      if (typeof window === 'undefined') {
        console.warn(`Tried setting localStorage key "${key}" even though environment is not a client`)
      }

      try {
        const newValue = value instanceof Function ? value(storedValue) : value
        if (typeof window !== 'undefined') {
          setStoredValue(newValue)
          localStorage.setItem(key, JSON.stringify(newValue))
        }
      } catch (error) {
        console.warn(`Error setting localStorage key "${key}":`, error)
      }
    },
    [key, storedValue]
  )

  const removeValue = useCallback(() => {
    if (typeof window === 'undefined') {
      console.warn(`Tried setting localStorage key "${key}" even though environment is not a client`)
    }

    try {
      if (typeof window !== 'undefined') {
        setStoredValue(JSON.parse(''))
        localStorage.removeItem(key)
      }
    } catch (error) {
      console.warn(`Error removing localStorage key "${key}":`, error)
    }
  }, [key])

  return { storedValue, setValue, removeValue }
}
