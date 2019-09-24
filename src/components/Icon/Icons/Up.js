import React from 'react'
import styled from 'styled-components'

import { Right } from './Right'

const Icon = styled.div`
  transform: rotate(-90deg);
`

export function Up({ width, height, color }) {
  return (
    <Icon>
      <Right width={width} height={height} color={color} />
    </Icon>
  )
}
