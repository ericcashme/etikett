import { renderWithTheme } from 'utils/renderWithTheme/index.js'

import { ModalConsumer, ModalContext, useModalContext } from '../index.js'

describe('Context behavior', () => {
  const textValue = 'test content'
  it('consumer matches provider', () => {
    const { getByText } = renderWithTheme(
      <ModalContext.Provider value={textValue}>
        <ModalConsumer>{value => value}</ModalConsumer>
      </ModalContext.Provider>
    )

    expect(getByText(textValue)).toBeInTheDocument()
  })
  it('hook consumer also matches provider', () => {
    const ContextConsumer = () => {
      const value = useModalContext()
      return <div>{value}</div>
    }
    const { getByText } = renderWithTheme(
      <ModalContext.Provider value={textValue}>
        <ContextConsumer />
      </ModalContext.Provider>
    )

    expect(getByText(textValue)).toBeInTheDocument()
  })
})
