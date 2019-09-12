import React, { memo } from 'react'

import composeable from './Composeable'

import { Box } from '@components/Box'

export const P = memo(({ children, ...props }) => {
  const Composeable = composeable('p')

  return (
    <Box {...props}>
      <Composeable {...props}>{children}</Composeable>
    </Box>
  )
})

export const defaultProps = {
  size: 'sixteen',
  weight: 'regular'
}
