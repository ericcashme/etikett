import React from 'react'
import { ComponentsProvider } from 'components'
import { render } from '@testing-library/react'
import Checkbox from '../index'

const CheckboxComponent = (props) => (
  <ComponentsProvider>
    <Checkbox {...props} />
  </ComponentsProvider>
)

describe('<Checkbox />', () => {
  it('Expect to render Checkbox with default snapshot', () => {
    expect(
      render(<CheckboxComponent onChange={() => {}} id="checkbox" name="checkbox" value="checkbox" checked />)
    ).toMatchSnapshot()
  })

  it('Expect to render Checkbox with snapshot and optional props', () => {
    expect(
      render(
        <CheckboxComponent
          id="checkbox"
          name="checkbox"
          value="checkbox"
          checked
          onChange={() => {}}
          readOnly
          label="Label"
          kind="circle"
        />
      )
    ).toMatchSnapshot()
  })

  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error')
    render(
      <CheckboxComponent
        id="checkbox"
        name="checkbox"
        value="checkbox"
        checked
        onChange={() => {}}
        readOnly
        label="Label"
        kind="circle"
      />
    )
    expect(spy).not.toHaveBeenCalled()
  })
})
