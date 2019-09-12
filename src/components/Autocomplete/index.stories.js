import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'

import { GROUPS } from '@helpers/hierarchySeparators'
import { Container } from '@helpers/components/Container'

import { Reset } from '@components/Reset'
import { Icon } from '@components/Icon'
import { Autocomplete } from '@components/Autocomplete'

const Containerable = styled(Container)`
  flex-wrap: wrap;
`
const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
`

const categories = [
  {
    id: 'city',
    text: 'Cidades',
    icon: ({ width, height, color }) => (
      <Icon name="city" color={color} width={width} height={height} />
    ),
    selected: false
  },
  {
    id: 'state',
    text: 'Estados',
    icon: ({ width, height, color }) => (
      <Icon name="location" color={color} width={width} height={height} />
    ),
    selected: true
  }
]

const options = [
  { value: 1, text: 'Maringá', category: 'city' },
  { value: 2, text: 'Paraná', category: 'state' },
  { value: 3, text: 'São Paulo', category: 'city' },
  { value: 4, text: 'Santa Catarina', category: 'state' }
]

storiesOf(`${GROUPS.COMPONENTS}|Autocomplete`, module)
  .addDecorator(story => (
    <Containerable>
      <Reset />
      {story()}
    </Containerable>
  ))
  .add('Default', () => (
    <>
      <Autocomplete categories={categories} options={options} />
    </>
  ))
  .add('With icon', () => (
    <>
      <Autocomplete categories={categories} options={options} />
    </>
  ))
  .add('With error', () => (
    <>
      <Autocomplete
        categories={categories}
        options={options}
        error={{ has: true, message: 'Your document' }}
      />
    </>
  ))
  .add('With label', () => (
    <>
      <Autocomplete
        categories={categories}
        options={options}
        label="Field label"
      />
      <Autocomplete
        categories={categories}
        options={options}
        label="Field label"
        required
      />
    </>
  ))
  .add('Disabled', () => (
    <Wrapper>
      <Autocomplete categories={categories} options={options} disabled />
      <Autocomplete
        categories={categories}
        options={options}
        label="Field label"
        disabled
      />
      <Autocomplete
        categories={categories}
        options={options}
        label="Field label"
        required
        disabled
      />
    </Wrapper>
  ))
  .add('Full', () => (
    <>
      <Autocomplete categories={categories} options={options} full />
    </>
  ))
