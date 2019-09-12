import React from 'react'
import styled from 'styled-components'
import { prop } from 'styled-tools'

import { Reset } from '@components/Reset'

import { Container } from './Container'
import { Table } from './Table'

const Example = styled.div`
  background-color: ${prop('hex')};
`

const Containerable = styled(Container)`
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`

const Title = styled.h2``

export const Fonts = ({ title, object, property }) => {
  const data = Object.keys(object).map(attribute => ({
    token: `tokens.${property}.${attribute}`,
    value: object[attribute],
    example: <Example value={object[attribute]} />
  }))

  return (
    <Containerable>
      <Title>{title}</Title>
      <Table data={data.flat()} />
      <Reset />
    </Containerable>
  )
}
