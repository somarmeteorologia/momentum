import React, { Children, cloneElement, isValidElement } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { theme } from 'styled-tools'

const Container = styled.div`
  display: flex;

  .first {
    border-radius: ${theme('border.radius.four')} 0 0
      ${theme('border.radius.four')};
    border-right-width: 0;
    color: ${theme('colors.white.hundred')};
    background: ${theme('button.bg.group')};

    &:hover {
      border-right-width: 0;
    }
  }

  .middle {
    border-radius: 0;
    border-right-width: 0;
    border-color: ${theme('button.border.group')};

    &:hover {
      border-right-width: 0;
      border-color: ${theme('button.hover.primary.bg')};
      color: ${theme('colors.white.hundred')};
      background: ${theme('button.hover.primary.bg')};
    }
  }

  .last {
    border-color: ${theme('button.border.group')};
    border-radius: 0 ${theme('border.radius.four')}
      ${theme('border.radius.four')} 0;

    &:hover {
      color: ${theme('colors.white.hundred')};
      border-color: ${theme('button.hover.primary.bg')};
      background: ${theme('button.hover.primary.bg')};
    }
  }
`

const isValidButton = child =>
  isValidElement(child) && child.type.displayName === 'Button'

export default function Group({ children, orientation }) {
  const [first, ...childrens] = Children.map(children, child => {
    if (!isValidButton(child)) {
      throw new Error(
        'TypeError: Button Group component children is invalid, please use Button.'
      )
    }

    return child
  })

  const firstChildren = cloneElement(first, { className: 'first' })
  const last = cloneElement(childrens.pop(), {
    className: 'last',
    appearence: 'stroke'
  })

  const middle = childrens.map(child =>
    cloneElement(child, { className: 'middle', appearence: 'stroke' })
  )

  const identifiedChildrens = [firstChildren, ...middle, last]

  return <Container orientation={orientation}>{identifiedChildrens}</Container>
}

Group.defaultProps = {
  orientation: 'horizontal'
}

Group.propTypes = {
  orientation: PropTypes.oneOf(['vertical', 'horizontal'])
}
