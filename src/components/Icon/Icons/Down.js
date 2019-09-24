import React from 'react'
import styled from 'styled-components'

import { Up } from './Up'

const Icon = styled.div`
  transform: scaleY(-1);
`

export function Down({ width, height, color }) {
  return (
    <Icon>
      <Up width={width} height={height} color={color} />
    </Icon>
  )
}
