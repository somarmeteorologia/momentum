import React from 'react'
import styled from 'styled-components'
import { prop } from 'styled-tools'

import { Reset } from '@components/Reset'

import { Container } from './Container'
import { Table } from './Table'

const Example = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${prop('value')};
`

const Containerable = styled(Container)`
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`

const Title = styled.h2``

export const Colors = ({ title, object, property }) => {
  const data = Object.keys(object).map(color => {
    return Object.keys(object[color]).map(hex => ({
      token: `tokens.${property}.${color}.${hex}`,
      value: object[color][hex],
      example: <Example value={object[color][hex]} />
    }))
  })

  return (
    <Containerable>
      <Title>{title}</Title>
      <Table data={data.flat()} />
      <Reset />
    </Containerable>
  )
}
