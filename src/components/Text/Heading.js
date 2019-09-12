import React, { memo } from 'react'

import { Box } from '@components/Box'

import composeable from './Composeable'

export const Heading = memo(({ size, children, ...props }) => {
  const elements = {
    sixtySeven: 'h1',
    fifty: 'h2',
    thirtyEight: 'h3',
    twentyEight: 'h4',
    twentyOne: 'h5',
    sixteen: 'h6'
  }

  const Composeable = composeable(elements[size])

  return (
    <Box {...props}>
      <Composeable size={size} {...props}>
        {children}
      </Composeable>
    </Box>
  )
})

export const defaultProps = {
  size: 'sixtySeven',
  weight: 'bold'
}
