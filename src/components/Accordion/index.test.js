import React from 'react'
import { cleanup, fireEvent, wait } from '@testing-library/react'

import { Accordion } from '@components/Accordion'
import { renderWithTheme } from '../../test-utilities'
import { Theme } from '@components/Theme'

const accordions = [
  {
    id: 1,
    active: false,
    text: 'foo',
    Header: 'Header',
    Body: <div>Body.</div>
  }
]

afterEach(cleanup)

test('Not expect visual regression', () => {
  const { container } = renderWithTheme(<Accordion accordions={accordions} />)
  expect(container.firstChild).toMatchSnapshot()
})

test('expect render with theme', () => {
  const { dark } = Theme

  const { getByText } = renderWithTheme(
    <Accordion accordions={accordions} />,
    dark
  )

  const divHeader = getByText('Header').closest('div')
  expect(divHeader).toHaveStyleRule('color', dark.accordion.text.primary)
  expect(divHeader).toHaveStyleRule(
    'background-color',
    dark.accordion.bg.primary
  )
})

test('expect open body with click', async () => {
  const { getByText, getByTestId } = renderWithTheme(
    <Accordion accordions={accordions} />
  )

  fireEvent.click(getByText('Header'))

  await wait(
    () => {
      const body = getByTestId('body-accordion')
      expect(body).toHaveStyle('display: block')
    },
    { interval: 500 }
  )
})

test('expect full size', () => {
  const { container } = renderWithTheme(
    <Accordion full accordions={accordions} />
  )

  expect(container.firstChild).toHaveStyleRule('width', '100%')
})

test('expect close body with click', async () => {
  const { getByText, getByTestId } = renderWithTheme(
    <Accordion accordions={accordions} />
  )

  const header = getByText('Header')

  fireEvent.click(header)

  await wait(
    () => {
      const body = getByTestId('body-accordion')
      expect(body).toHaveStyle('display: block')
    },
    { interval: 500 }
  )

  fireEvent.click(header)

  await wait(
    () => {
      const body = getByTestId('body-accordion')
      expect(body).toHaveStyle('display: none')
    },
    { interval: 500 }
  )
})
