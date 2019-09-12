import React, { memo } from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { ifProp, prop } from 'styled-tools'

const Container = styled.li`
  color: ${prop('theme.tabs.text.off')};
  font-size: ${prop('theme.font.size.twelve')};
  border-radius: ${prop('theme.border.radius.twentyFour')};
  font-family: ${prop('theme.font.family.inter')};
  transition: all 0.2s ease-in;
  padding: 6px 30px;
  cursor: pointer;
  margin-right: 20px;
  white-space: nowrap;

  ${ifProp(
    'isActive',
    css`
      color: ${prop('theme.tabs.text.on')};
      font-size: ${prop('theme.font.size.fourteen')};
      font-weight: ${prop('theme.font.weight.bold')};
      background-color: ${prop('theme.tabs.bg.secondary')};
    `
  )}
`

export const Tab = memo(({ label, isActive, onClick }) => (
  <Container isActive={isActive} onClick={onClick}>
    {label}
  </Container>
))

Tab.defaultProps = {
  isActive: false,
  onClick: () => {}
}

Tab.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  isActive: PropTypes.bool,
  onClick: PropTypes.func
}
