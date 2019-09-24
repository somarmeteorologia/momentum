import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'

import { GROUPS } from '@helpers/hierarchySeparators'
import { Container } from '@helpers/components/Container'

import { Reset } from '@components/Reset'
import { DataTable } from '@components/DataTable'

const Containerable = styled(Container)`
  flex-wrap: wrap;
`

const Data = () => {
  const newPerson = () => {
    const statusChance = Math.random()
    return {
      firstName: 'banana',
      lastName: 'apple',
      age: Math.floor(Math.random() * 30),
      visits: Math.floor(Math.random() * 100),
      progress: Math.floor(Math.random() * 100),
      status:
        statusChance > 0.66
          ? 'relationship'
          : statusChance > 0.33
          ? 'complicated'
          : 'single'
    }
  }

  const range = len => {
    const arr = []
    for (let i = 0; i < len; i++) {
      arr.push(i)
    }
    return arr
  }

  const makeData = (len = 5553) =>
    range(len).map(() => ({
      ...newPerson(),
      children: range(10).map(newPerson)
    }))

  const data = makeData(100)

  const columns = [
    {
      Header: 'First Name',
      accessor: 'firstName',
      textAlign: 'right'
    },
    {
      Header: 'Last Name',
      accessor: 'lastName'
    },
    {
      Header: 'Age',
      accessor: 'age',
      sortable: true
    },
    {
      Header: 'Status',
      accessor: 'status'
    },
    {
      Header: 'Visits',
      accessor: 'visits',
      sortable: true
    }
  ]

  return (
    <>
      <DataTable data={data} columns={columns} size={10} />
    </>
  )
}

storiesOf(`${GROUPS.COMPONENTS}|DataTable`, module)
  .addDecorator(story => (
    <Containerable>
      <Reset />
      {story()}
    </Containerable>
  ))
  .add('Default', () => (
    <>
      <Data />
    </>
  ))
