/* eslint-disable max-len */
import { renderHook } from '@testing-library/react-hooks'
import { act } from 'react-dom/test-utils'

import { initialState } from '../../../_modules/adapter/views/components/ModalProvider/__tests__/fixtures.js'
import { ModalProvider } from '../../../_modules/adapter/views/components/ModalProvider/index.js'
import { useModal } from '../index.js'

jest.useFakeTimers()
describe('Should to something when', () => {
  const wrapper = ({ children }) => (
    <ModalProvider {...{ ...initialState, show: true }}>{children}</ModalProvider>
  )
  it('mounting', () => {
    const { result } = renderHook(useModal, { wrapper })
    act(() => jest.runAllTimers())

    const { id, show } = result.current.state

    expect(id).toBe('initial id')
    expect(show).toBeTruthy()
  })

  it('closing via state management', async () => {
    const { result } = renderHook(useModal, { wrapper })
    act(() => jest.runAllTimers())

    let { show, isVisible } = result.current.state
    const { setShow } = result.current.helpers

    expect(show).toBeTruthy()

    act(() => setShow(false))
    ;({ show, isVisible } = result.current.state)
    expect(show).toBeFalsy()
    expect(isVisible).toBeFalsy()
  })
})
