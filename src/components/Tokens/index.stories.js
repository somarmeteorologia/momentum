import React from 'react'
import { storiesOf } from '@storybook/react'
import { prop } from 'styled-tools'
import styled from 'styled-components'

import { GROUPS } from '@helpers/hierarchySeparators'

import { Reset } from '@components/Reset'
import { DataTable } from '@components/DataTable'
import { tokens } from '@components/Tokens'

const { colors, font, border } = tokens

const { keys } = Object

const columns = [
  {
    Header: 'Token',
    accessor: 'token'
  },
  {
    Header: 'Value',
    accessor: 'value'
  },
  {
    Header: 'Example',
    accessor: 'example'
  }
]

const Example = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${prop('value')};
`

const buildArray = ({ object, property }) =>
  keys(object).map(color => {
    return keys(object[color]).map(hex => ({
      token: `theme.${property}.${color}.${hex}`,
      value: object[color][hex],
      example: <Example value={object[color][hex]} />
    }))
  })

storiesOf(`${GROUPS.COMPONENTS}|Tokens`, module)
  .addDecorator(story => (
    <>
      <Reset />
      {story()}
    </>
  ))
  .add('Colors', () => (
    <DataTable
      data={buildArray({ object: colors, property: 'colors' }).flat()}
      columns={columns}
      size={10}
    />
  ))
  .add('Fonts', () => (
    <DataTable
      data={buildArray({ object: font, property: 'font' }).flat()}
      columns={columns}
      size={10}
    />
  ))
  .add('Border', () => (
    <DataTable
      data={buildArray({ object: border, property: 'border' }).flat()}
      columns={columns}
      size={10}
    />
  ))
