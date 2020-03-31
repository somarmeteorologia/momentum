import React from 'react'
import { fireEvent } from '@testing-library/react'

import { renderWithTheme } from '../../test-utilities'

import { Textarea } from '@components/Textarea'

test('Not expect visual regression', () => {
  const { container } = renderWithTheme(<Textarea />)

  expect(container.firstChild).toMatchSnapshot()
})

test('Should return only the value when raw is false', () => {
  let onChangeOutput

  const { getByTestId } = renderWithTheme(
    <Textarea
      data-testid="textarea"
      onChange={value => (onChangeOutput = value)}
    />
  )

  fireEvent.change(getByTestId('textarea'), { target: { value: 'John Doe' } })

  expect(onChangeOutput).toBe('John Doe')
})

test('Should return the event object when raw is true', () => {
  let onChangeOutput

  const { getByTestId } = renderWithTheme(
    <Textarea
      data-testid="textarea"
      raw={true}
      onChange={({ target }) => (onChangeOutput = target.value)}
    />
  )

  fireEvent.change(getByTestId('textarea'), { target: { value: 'John Doe' } })

  expect(onChangeOutput).toBe('John Doe')
})
