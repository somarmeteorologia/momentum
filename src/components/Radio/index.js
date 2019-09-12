import React, { memo, Children, isValidElement, cloneElement } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { prop, ifProp } from 'styled-tools'

import { Provider } from './Context'
import { Option } from './Option'

const Container = styled.div`
  display: flex;
  flex-direction: ${prop('orientation')};
  align-items: ${ifProp({ orientation: 'column' }, 'flex-start', 'center')};
  justify-content: space-evenly;
  width: 100%;
`

const map = children =>
  Children.map(children, child => ({
    [child.props.id]: child.props.checked
  }))

const isValidOption = child =>
  isValidElement(child) && child.type.displayName === 'Option'

export const Radio = memo(
  ({ size, labelAlign, name, onChange, children, orientation }) => {
    const options = Object.assign({}, ...map(children))

    const childrens = Children.map(children, child => {
      if (!isValidOption(child)) {
        throw new Error(
          'TypeError: Radio component children are invalid, please use Option component.'
        )
      }

      return cloneElement(child, { name })
    })

    return (
      <Provider
        size={size}
        onChange={onChange}
        initial={options}
        labelAlign={labelAlign}
      >
        <Container labelAlign={labelAlign} orientation={orientation}>
          {childrens}
        </Container>
      </Provider>
    )
  }
)

Radio.Option = Option

Radio.defaultProps = {
  labelAlign: 'bottom',
  size: 'default',
  orientation: 'row',
  onChange: () => {}
}

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['large', 'default']),
  labelAlign: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  orientation: PropTypes.oneOf(['column', 'row'])
}

Radio.labelAlign = {
  top: 'top',
  bottom: 'bottom',
  left: 'left',
  right: 'right'
}

Radio.size = {
  default: 'default',
  large: 'large'
}

Radio.orientation = {
  row: 'row',
  column: 'column'
}
