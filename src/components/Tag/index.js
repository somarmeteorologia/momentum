import React, { memo } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { theme, prop } from 'styled-tools'

const Content = styled.div`
  background-color: ${prop('color')};
  border-radius: ${theme('border.radius.four')};
  padding: 2px 6px;
`

export const Tag = memo(({ color, children }) => (
  <Content color={color}>{children}</Content>
))

Tag.propTypes = {
  color: PropTypes.string.isRequired
}
