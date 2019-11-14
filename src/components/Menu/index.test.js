import React from 'react'
import { render, fireEvent, wait } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import { Theme } from '@components/Theme'
import { Menu } from '@components/Menu'

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

  expect(getByTestId('container')).toHaveStyle('left: 0px')

  fireEvent.mouseEnter(getByTestId('container'))
  fireEvent.click(getByTestId('toggleable'))

  await wait(() => {
    expect(getByTestId('container')).toHaveStyle('left: -280px')
  }, INTERVAL)

  fireEvent.mouseEnter(getByTestId('container'))
  fireEvent.click(getByTestId('toggleable'))

  await wait(() => {
    expect(getByTestId('container')).toHaveStyle('left: 0px')
  }, INTERVAL)
})
