import React, { useState } from 'react'
import { render, fireEvent, wait } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import { Theme } from '@components/Theme'
import { Menu as Menuable } from '@components/Menu'

const Menu = ({ draggable }) => {
  const [isOpen, setOpen] = useState(true)

  return <Menuable draggable={draggable} isOpen={isOpen} setOpen={setOpen} />
}

const withProvider = ({ children, ...props }) => (
  <ThemeProvider theme={Theme.light}>
    <Menu {...props}>{children}</Menu>
  </ThemeProvider>
)

const INTERVAL = { interval: 300 }

test('Not expect visual regression', () => {
  const { container } = render(withProvider({}))

  expect(container.firstChild).toMatchSnapshot()
})

test('Expect show and hide menu button must be working', async () => {
  const { getByTestId } = render(
    withProvider({
      children: <div data-testid="content">content</div>
    })
  )

  expect(getByTestId('menu')).toHaveStyle('width: 300px')

  fireEvent.mouseEnter(getByTestId('menu'))
  fireEvent.click(getByTestId('toggleable'))

  await wait(() => {
    expect(getByTestId('menu')).toHaveStyle('width: 20px')
  }, INTERVAL)

  fireEvent.mouseEnter(getByTestId('menu'))
  fireEvent.click(getByTestId('toggleable'))

  await wait(() => {
    expect(getByTestId('menu')).toHaveStyle('width: 300px')
  }, INTERVAL)
})
