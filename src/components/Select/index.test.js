import React from 'react'

import { renderWithTheme } from '../../test-utilities'

import { Select } from '@components/Select'

test('Not expect visual regression', () => {
  const { container } = renderWithTheme(
    <Select
      options={[
        { value: 1, text: 'Banana' },
        { value: 2, text: 'Apple' }
      ]}
    />
  )

  expect(container.firstChild).toMatchSnapshot()
})
