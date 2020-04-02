import React from 'react'
import { fireEvent } from '@testing-library/react'

import { renderWithTheme } from '../../test-utilities'

import { Input } from '@components/Input'

test('Not expect visual regression', () => {
  const { container } = renderWithTheme(<Input />)

  expect(container.firstChild).toMatchSnapshot()
})

test('Should return only the value when raw is false', () => {
  let onChangeOutput

  const { getByTestId } = renderWithTheme(
    <Input data-testid="input" onChange={value => (onChangeOutput = value)} />
  )

  fireEvent.input(getByTestId('input'), { target: { value: 'John Doe' } })

  expect(onChangeOutput).toBe('John Doe')
})

test('Should return the event object when raw is true', () => {
  let onChangeOutput

  const { getByTestId } = renderWithTheme(
    <Input
      data-testid="input"
      raw={true}
      onChange={({ target }) => (onChangeOutput = target.value)}
    />
  )

  fireEvent.input(getByTestId('input'), { target: { value: 'John Doe' } })

  expect(onChangeOutput).toBe('John Doe')
})
