import React, { memo } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { theme } from 'styled-tools'

const Content = styled.div`
  background-color: ${({ theme, color }) => theme.colors[color].fifty};
  border-radius: ${theme('border.radius.four')};
  padding: 2px 6px;
`

export const Tag = memo(({ color, children }) => (
  <Content color={color}>{children}</Content>
))

Tag.defaultProps = {
  color: 'blue'
}

Tag.propTypes = {
  color: PropTypes.oneOf([
    'blue',
    'gray',
    'green',
    'red',
    'yellow',
    'ciano',
    'pink',
    'orange'
  ])
}
