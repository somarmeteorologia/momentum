import React, { Children, cloneElement, isValidElement, useState } from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { theme, switchProp, ifProp } from 'styled-tools'

const Container = styled.div`
  display: flex;
  flex-direction: ${switchProp('orientation', {
    horizontal: 'row',
    vertical: 'column'
  })};

  button {
    font-weight: ${theme('font.weight.regular')};
    color: ${theme('button.text.group')};
    border: ${switchProp('appearence', {
      primary: theme('button.border.group'),
      secondary: theme('button.border.flat')
    })};
    width: ${ifProp({ orientation: 'horizontal' },
    switchProp('size', {
      small: '40px',
      default: '80px'
    }))};

    path {
      stroke: ${theme('button.text.group')};
    }

    &:hover svg path,
    &:hover{
      stroke:${theme('button.hover.group.text')};
      border-color: ${theme('button.hover.primary.bg')};
      color: ${theme('button.hover.group.text')};
      background: ${theme('button.hover.group.bg')};
    }
  }

  .first {
    border-radius: ${ifProp({ appearence: 'primary' },
    switchProp('orientation', {
      horizontal: css`${theme('border.radius.four')} 0 0
        ${theme('border.radius.four')}`,
      vertical: css`${theme('border.radius.four')} ${theme('border.radius.four')} 
        0 0`
    }),
    theme('border.radius.four')
    )};

    ${switchProp('orientation', {
    horizontal: css`
          border-right-width: 0;
        `,
    vertical: css`
          border-bottom-width: 0;
        `
  })};

    &:hover {
      border-right-width: 0;
    }
  }

  .middle {
    border-radius: ${ifProp({ appearence: 'primary' }, '0', theme('border.radius.four'))};
    ${switchProp('orientation', {
    horizontal: css`
          border-right-width: 0;
        `,
    vertical: css`
          border-bottom-width: 0;
        `
    })}; 

    &:hover {
      border-right-width: 0;
    }
  }

  .last {
    border-radius: ${ifProp({ appearence: 'primary' },
    switchProp('orientation', {
      horizontal: css`0 ${theme('border.radius.four')}
        ${theme('border.radius.four')} 0`,
      vertical: css`0 0  
        ${theme('border.radius.four')} ${theme('border.radius.four')}`
    }),
    theme('border.radius.four')
    )};
    }

  .active {
    background: ${theme('button.active.group.bg')};
    border: ${theme('button.active.group.border')};
    font-weight: ${theme('font.weight.bold')};
    color: ${theme('colors.white.hundred')};
    ${ifProp(
    { appearence: 'secondary' },
    css`
        border-radius: ${theme('border.radius.four')};  	
      `
    )}

    path {
      stroke: ${theme('colors.white.hundred')};
    }
  }
`

const isValidButton = child =>
  isValidElement(child) && child.type.displayName === 'Button'

export default function Group({ children, orientation, activeId, appearence, size }) {
  const [activeButton, setActiveButton] = useState(activeId)
  const [first, ...childrens] = Children.map(children, child => {
    if (!isValidButton(child)) {
      throw new Error(
        'TypeError: Button Group component children is invalid, please use Button.'
      )
    }

    return child
  })
  
  const firstChildren = cloneElement(first, {
    className: `first${first.props.id === activeButton ? ' active' : ''}`,
    appearence: 'stroke',
    onClick: (...args) => {
      first.props.id && setActiveButton(first.props.id)
      first.props.onClick(...args)
    }
  })

  const last = childrens.pop()

  const lastChildren = cloneElement(last, {
    className: `last${last.props.id === activeButton ? ' active' : ''}`,
    appearence: 'stroke',
    onClick: (...args) => {
      last.props.id && setActiveButton(last.props.id)
      last.props.onClick(...args)
    }
  })

  const middle = childrens.map(child =>
    cloneElement(child, {
      className: `middle${child.props.id === activeButton ? ' active' : ''}`,
      appearence: 'stroke',
      onClick: (...args) => {
        child.props.id && setActiveButton(child.props.id)
        child.props.onClick(...args)
      }
    })
  )

  const identifiedChildrens = [firstChildren, ...middle, lastChildren]

  return <Container orientation={orientation} size={size} appearence={appearence}>{identifiedChildrens}</Container>
}

Group.appearence = {
  primary: 'primary',
  secondary: 'secondary'
}

Group.orientation = {
  vertical: 'vertical',
  horizontal: 'horizontal'
}

Group.size = {
  small: 'small',
  default: 'default'
}

Group.defaultProps = {
  orientation: 'horizontal',
  appearence: 'primary',
  size: 'default'
}

Group.propTypes = {
  orientation: PropTypes.oneOf(['vertical', 'horizontal']),
  activeId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  appearence: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['small', 'default'])
}
