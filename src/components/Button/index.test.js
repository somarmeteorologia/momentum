import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import { Theme } from '@components/Theme'
import { Button } from '@components/Button'

const { button, font } = Theme.light

const withProvider = ({ ...props }) => (
  <ThemeProvider theme={Theme.light}>
    <Button {...props}>Primary</Button>
  </ThemeProvider>
)

test('Not expect visual regression', () => {
  const { container } = render(withProvider({}))

  expect(container.firstChild).toMatchSnapshot()
})

test('Expect correct appearances', () => {
  const { container, rerender } = render(withProvider({}))

  expect(container.firstChild).toHaveStyleRule(
    'background-color',
    button.bg.primary
  )

  rerender(withProvider({ appearence: Button.appearence.stroke }))

  expect(container.firstChild).toHaveStyleRule(
    'background-color',
    button.bg.stroke
  )
})

test('Expect full width when with prop', () => {
  const { container, rerender } = render(withProvider())

  expect(container.firstChild).toHaveStyleRule('width', 'unset')

  rerender(withProvider({ full: true }))

  expect(container.firstChild).toHaveStyleRule('width', '100%')
})

test('Expect correct sizes', () => {
  const { container, rerender } = render(withProvider({}))

  expect(container.firstChild).toHaveStyleRule('height', '40px')
  expect(container.firstChild).toHaveStyleRule('font-size', font.size.fourteen)

  rerender(withProvider({ size: Button.size.small }))

  expect(container.firstChild).toHaveStyleRule('height', '32px')
  expect(container.firstChild).toHaveStyleRule('font-size', font.size.twelve)

  rerender(withProvider({ size: Button.size.large }))

  expect(container.firstChild).toHaveStyleRule('height', '48px')
  expect(container.firstChild).toHaveStyleRule('font-size', font.size.sixteen)
})
