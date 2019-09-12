import React from 'react'
import styled from 'styled-components'

import { tokens } from '@components/Tokens'

const Tableable = styled.table`
  width: 100%;
`

export const Table = ({ data }) => {
  return (
    <Tableable>
      <thead>
        <tr>
          <th>Token</th>
          <th>Value</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ token, value, example }) => (
          <tr key={token}>
            <td>{token}</td>
            <td>{value}</td>
            <td>{example}</td>
          </tr>
        ))}
      </tbody>
    </Tableable>
  )
}
