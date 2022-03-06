import { createContext, useContext } from 'react'

export const ModalContext = createContext()

ModalContext.displayName = 'ModalContext'

export const ModalConsumer = ModalContext.Consumer

export const useModalContext = () => useContext(ModalContext)
