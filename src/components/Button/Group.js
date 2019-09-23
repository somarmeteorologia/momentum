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
      primary : theme('button.border.group'),
      secondary : theme('button.border.flat')
    })};
    width: ${ifProp({orientation: 'horizontal'},
      switchProp('sizeButtons', {
        small: '40px',
        default: '80px'
    }))};
    
    path {
      stroke: ${theme('button.text.group')};
    }
  }

  .first {
    border-radius: ${switchProp('orientation', {
      horizontal: css`${theme('border.radius.four')} 0 0
      ${theme('border.radius.four')}`,
      vertical: css`${theme('border.radius.four')} ${theme('border.radius.four')} 
      0 0`
    })};

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
    border-radius: 0;
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
      border-color: ${theme('button.hover.primary.bg')};
      color: ${theme('colors.white.hundred')};
      background: ${theme('button.hover.primary.bg')};
    }
  }

  .last {
    border-radius: ${switchProp('orientation', {
      horizontal: css`0 ${theme('border.radius.four')}
      ${theme('border.radius.four')} 0`,
      vertical: css`0 0  
      ${theme('border.radius.four')} ${theme('border.radius.four')}`
    })};

    &:hover {
      color: ${theme('colors.white.hundred')};
      border-color: ${theme('button.hover.primary.bg')};
      background: ${theme('button.hover.primary.bg')};
    }
  }

  .selected {
    background: ${theme('button.active.group.bg')};
    border: ${theme('button.active.group.border')};
    font-weight: ${theme('font.weight.bold')};
    color: ${theme('colors.white.hundred')};
    ${ifProp(
      {appearence: "secondary"},
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

const types = {
  primary: 'primary',
  secondary: 'secondary'
}

export default function Group({ children, orientation, selectedButtonId, appearence, sizeButtons }) {
  const [selectedButton, setSelectedButton] = useState(selectedButtonId)
  const [first, ...childrens] = Children.map(children, child => {
    if (!isValidButton(child)) {
      throw new Error(
        'TypeError: Button Group component children is invalid, please use Button.'
      )
    }
    
    return child
  })

  const handleButtonClick = id => {
    if (id)
      setSelectedButton(id)
  }
  
  const firstChildren = cloneElement(first, { 
    className: `first${first.props.id === selectedButton ? ' selected' : ''}`,
    appearence: 'stroke',
    onClick: (...args) => {
      handleButtonClick(first.props.id)
      if (first.props.onClick)
        first.props.onClick(...args)
    }
  })

  const last = childrens.pop()
  
  const lastChildren = cloneElement(last, {
    className: `last${last.props.id === selectedButton ? ' selected' : ''}`,
    appearence: 'stroke',
    onClick: (...args) => {
      handleButtonClick(last.props.id)
      if (last.props.onClick)
        last.props.onClick(...args)
    }
  })

  const middle = childrens.map(child =>
    cloneElement(child, { 
      className: `middle${child.props.id === selectedButton ? ' selected' : ''}`, 
      appearence: 'stroke',
      onClick: (...args) => {
        handleButtonClick(child.props.id)
        if (child.props.onClick)
          child.props.onClick(...args)
      }  
    })
  )

  const identifiedChildrens = [firstChildren, ...middle, lastChildren]

  return <Container orientation={orientation} sizeButtons={sizeButtons} appearence={appearence}>{identifiedChildrens}</Container>
}

Group.appearence = types

Group.defaultProps = {
  orientation: 'horizontal',
  appearence: 'primary',
  sizeButtons : 'default'
}

Group.propTypes = {
  orientation: PropTypes.oneOf(['vertical', 'horizontal']),
  selectedButtonId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  appearence: PropTypes.oneOf(['primary', 'secondary']),
  sizeButtons: PropTypes.oneOf(['small', 'default'])   
}
