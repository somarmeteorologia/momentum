import React from 'react'
import { cleanup, fireEvent } from '@testing-library/react'

import { renderWithTheme } from '../../test-utilities'
import { Autocomplete } from '@components/Autocomplete'
import { Icon } from '@components/Icon'
import { Theme } from '@components/Theme'

const categories = [
  {
    id: 'city',
    text: 'Cidades',
    icon: ({ width, height, color, testID }) => (
      <Icon
        name="city"
        color={color}
        width={width}
        height={height}
        data-testid={`${testID}-city`}
      />
    ),
    selected: false
  },
  {
    id: 'state',
    text: 'Estados',
    icon: ({ width, height, color, testID }) => (
      <Icon
        name="location"
        color={color}
        width={width}
        height={height}
        data-testid={`${testID}-state`}
      />
    ),
    selected: true
  }
]

const options = [
  { value: 1, text: 'Maringá', category: 'city' },
  { value: 2, text: 'Paraná', category: 'state' },
  { value: 3, text: 'São Paulo', category: 'city' },
  { value: 4, text: 'Santa Catarina', category: 'state' },
  { value: 5, text: 'Rio Grande do Sul', category: 'state' },
  { value: 6, text: 'Rio de Janeiro', category: 'state' },
  { value: 7, text: 'Belo Horizonte', category: 'state' },
  { value: 8, text: 'Pará', category: 'state' },
  { value: 9, text: 'Acre', category: 'state' },
  { value: 3, text: 'Rio de Janeiro', category: 'city' },
  { value: 3, text: 'Blumenau', category: 'city' }
]

function filterOptions(category, query) {
  return options
    .filter(option => option.category === category)
    .filter(({ text }) => text.toLowerCase().includes(query.toLowerCase()))
    .slice(0, 6)
}

function optionNotMatch(category, query) {
  return options
    .filter(option => option.category === category)
    .filter(({ text }) => !text.toLowerCase().includes(query.toLowerCase()))
    .slice(0, 6)
}

afterEach(cleanup)

test('Not expect visual regression', () => {
  const { container } = renderWithTheme(
    <Autocomplete categories={categories} options={options} />
  )

  expect(container.firstChild).toMatchSnapshot()
})

test('expect render with theme', () => {
  const { dark } = Theme

  const { getByTestId } = renderWithTheme(
    <Autocomplete categories={categories} options={options} />,
    dark
  )

  const interable = getByTestId('interable')
  expect(interable).toHaveStyleRule('background-color', dark.field.bg.tertiary)

  const input = getByTestId('input-autocomplete')
  expect(input).toHaveStyleRule('color', dark.field.text.primary)
  expect(input).toHaveStyleRule('color', dark.field.text.secondary, {
    modifier: '::placeholder'
  })
})

test('expect category change', () => {
  const { getByTestId, getByText } = renderWithTheme(
    <Autocomplete categories={categories} options={options} />
  )

  const iconState = getByTestId('icon-state')
  fireEvent.click(iconState)

  const cityOption = getByText('Cidades')
  fireEvent.click(cityOption)

  expect(getByTestId('icon-city')).toBeTruthy()
})

test('expect filter options', () => {
  const queryText = 'S'
  const category = 'state'

  const { getByTestId, queryByText, queryAllByTestId } = renderWithTheme(
    <Autocomplete categories={categories} options={options} />
  )

  const input = getByTestId('input-autocomplete')
  fireEvent.change(input, { target: { value: queryText } })

  const allOptionsDisplayed = queryAllByTestId('option').map(
    option => option.textContent
  )
  const allOptionsFiltered = filterOptions(category, queryText).map(
    option => option.text
  )

  expect(allOptionsDisplayed).toEqual(allOptionsFiltered)

  const notMatch = optionNotMatch(category, queryText).map(
    option => option.text
  )
  for (let index = 0; index < notMatch.length; index++)
    expect(queryByText(notMatch[index])).toBeNull()
})

test('expect change category and filter options', () => {
  const queryText = 'S'
  const category = 'city'

  const {
    getByTestId,
    getByText,
    queryByText,
    queryAllByTestId
  } = renderWithTheme(
    <Autocomplete categories={categories} options={options} />
  )

  const iconState = getByTestId('icon-state')
  fireEvent.click(iconState)
  const cityOption = getByText('Cidades')
  fireEvent.click(cityOption)

  expect(getByTestId('icon-city')).toBeTruthy()

  const input = getByTestId('input-autocomplete')
  fireEvent.change(input, { target: { value: queryText } })

  const allOptionsDisplayed = queryAllByTestId('option').map(
    option => option.textContent
  )
  const allOptionsFiltered = filterOptions(category, queryText).map(
    option => option.text
  )

  expect(allOptionsDisplayed).toEqual(allOptionsFiltered)

  const notMatch = optionNotMatch(category, queryText).map(
    option => option.text
  )
  for (let index = 0; index < notMatch.length; index++)
    expect(queryByText(notMatch[index])).toBeNull()
})

test('expect does not display options from other categories', () => {
  const queryText = 'S'
  const category = 'city'

  const { getByTestId, queryByText } = renderWithTheme(
    <Autocomplete categories={categories} options={options} />
  )

  const input = getByTestId('input-autocomplete')
  fireEvent.change(input, { target: { value: queryText } })

  const allOptionsFiltered = options
    .filter(option => option.category === category)
    .map(option => option.text)
  for (let index = 0; index < allOptionsFiltered.length; index++)
    expect(queryByText(allOptionsFiltered[index])).toBeNull()
})

test('expect select option', async () => {
  const queryText = 'S'

  const { getByTestId, getByText, queryAllByTestId } = renderWithTheme(
    <Autocomplete categories={categories} options={options} />
  )

  const input = getByTestId('input-autocomplete')
  fireEvent.change(input, { target: { value: queryText } })

  const firstOption = queryAllByTestId('option')[0].textContent
  fireEvent.click(getByText(firstOption))

  expect(input.placeholder).toBe(firstOption)
})

test('expect show error', () => {
  const { light } = Theme

  const { queryByText } = renderWithTheme(
    <Autocomplete
      categories={categories}
      options={options}
      error={{ has: true, message: 'Your document' }}
    />
  )

  const errorText = queryByText('Your document')

  expect(errorText).toBeTruthy()
  expect(errorText).toHaveStyleRule('color', light.field.text.danger)
})

test('expect display label', () => {
  const { queryByText } = renderWithTheme(
    <Autocomplete
      categories={categories}
      options={options}
      label="Field label"
    />
  )

  expect(queryByText('Field label')).toBeTruthy()
})

test('expect full size', () => {
  const { container } = renderWithTheme(
    <Autocomplete categories={categories} options={options} full />
  )

  expect(container.firstChild).toHaveStyleRule('width', '100%')
})

test('expect to be disabled', () => {
  const { light } = Theme

  const { getByTestId } = renderWithTheme(
    <Autocomplete
      categories={categories}
      options={options}
      label="Field label"
      disabled
    />,
    light
  )

  const input = getByTestId('input-autocomplete')
  expect(input).toHaveAttribute('disabled')
  expect(input).toHaveStyleRule('color', light.field.text.disabled, {
    modifier: '::placeholder'
  })

  const label = getByTestId('label-autocomplete')
  expect(label).toHaveAttribute('disabled')
  expect(label).toHaveStyleRule('color', light.field.text.disabled)
})
