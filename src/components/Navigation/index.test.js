import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import { Theme } from '@components/Theme'
import { Navigation } from '@components/Navigation'

import TesteableProvider from './TesteableProvider'

const NEWSLETTER_TITLE = 'Boletins'
const NEWSLETTER_CONTENT = 'Content from newsletter'

const TO_BACK = 'Voltar'

const CARS_CONTENT = 'Ford'

const withProvider = ({ toOpen }) => (
  <ThemeProvider theme={Theme.light}>
    <TesteableProvider>
      <Navigation toOpen={toOpen} />
    </TesteableProvider>
  </ThemeProvider>
)

test('Not expect visual regression', () => {
  const { container } = render(withProvider({}))

  expect(container.firstChild).toMatchSnapshot()
})

test('Expect to open on a specific group by default', () => {
  const toOpen = () => 'newsletter'

  const { queryByText } = render(withProvider({ toOpen }))

  expect(queryByText(NEWSLETTER_CONTENT)).toBeVisible()
  expect(queryByText(NEWSLETTER_TITLE)).toBeNull()
})

test('Expect back button must be working', () => {
  const toOpen = () => 'newsletter'

  const { queryByText } = render(withProvider({ toOpen }))

  expect(queryByText(NEWSLETTER_CONTENT)).toBeVisible()

  fireEvent.click(queryByText(TO_BACK))

  expect(queryByText(NEWSLETTER_CONTENT)).toBeNull()
  expect(queryByText(NEWSLETTER_TITLE)).toBeVisible()
})

test('Expect show and hide menu button must be working', () => {
  const { getByTestId, queryByText } = render(withProvider({}))

  expect(queryByText(NEWSLETTER_TITLE)).toBeVisible()

  fireEvent.mouseEnter(getByTestId('container'))
  fireEvent.click(getByTestId('toggleable'))
  expect(queryByText(NEWSLETTER_TITLE)).toBeNull()

  fireEvent.mouseEnter(getByTestId('container'))
  fireEvent.click(getByTestId('toggleable'))
  expect(queryByText(NEWSLETTER_TITLE)).toBeVisible()
})

test('Expect to navigate between groups', () => {
  const { getByTestId, queryByText } = render(withProvider({}))

  fireEvent.click(getByTestId('open-cars'))
  expect(queryByText(CARS_CONTENT)).toBeVisible()

  fireEvent.click(getByTestId('open-ford'))
  expect(queryByText('Unavailable')).toBeVisible()

  fireEvent.click(queryByText(TO_BACK))
  expect(queryByText(CARS_CONTENT)).toBeVisible()

  fireEvent.click(queryByText(TO_BACK))
  expect(queryByText(NEWSLETTER_TITLE)).toBeVisible()
})

test('Expect to interact with switchers', () => {})
