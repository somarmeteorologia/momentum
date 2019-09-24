import React, { memo, useEffect, useState, useContext } from 'react'
import PropTypes from 'prop-types'
import { switchProp, ifProp, prop } from 'styled-tools'
import styled, { css, ThemeContext } from 'styled-components'

import { Icon as Iconable } from '@components/Icon'

import Group from './Group'

const Icon = styled.div`
  margin-right: 12px;
  display: flex;
  align-items: center;
`

const Content = styled.button`
  border-radius: ${prop('theme.border.radius.four')};
  font-family: ${prop('theme.font.family.inter')};
  font-weight: ${prop('theme.font.weight.bold')};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  cursor: pointer;
  width: ${ifProp('full', '100%', 'unset')};
  text-transform: ${ifProp('uppercase', 'uppercase', 'none')};

  ${switchProp('size', {
    small: css`
      height: 32px;
      font-size: ${prop('theme.font.size.twelve')};
    `,
    default: css`
      height: 40px;
      font-size: ${prop('theme.font.size.fourteen')};
    `,
    large: css`
      height: 48px;
      font-size: ${prop('theme.font.size.sixteen')};
    `
  })};

  ${switchProp('appearence', {
    primary: css`
      background-color: ${prop('theme.button.bg.primary')};
      color: ${prop('theme.button.text.primary')};
      border: ${prop('theme.button.border.primary')};

      &:hover {
        background-color: ${prop('theme.button.hover.primary.bg')};
        color: ${prop('theme.button.hover.primary.text')};
      }

      &:active {
        background-color: ${prop('theme.button.active.primary')};
      }
    `,
    stroke: css`
      background-color: ${prop('theme.button.bg.stroke')};
      color: ${prop('theme.button.text.stroke')};
      border: ${prop('theme.button.border.stroke')};

      &:hover {
        color: ${prop('theme.button.hover.stroke.text')};
        border: ${prop('theme.button.hover.stroke.border')};
      }

      &:active {
        background-color: ${prop('theme.button.active.stroke')};
      }
    `,
    flat: css`
      background-color: ${prop('theme.button.bg.flat')};
      color: ${prop('theme.button.text.flat')};
      border: ${prop('theme.button.border.flat')};

      &:hover {
        background-color: ${prop('theme.button.hover.flat.bg')};
        color: ${prop('theme.button.hover.flat.text')};
      }

      &:active {
        background-color: ${prop('theme.button.active.flat')};
      }
    `
  })};

  ${ifProp(
    { disabled: true },
    css`
      background-color: ${prop('theme.button.bg.disabled')};
      color: ${prop('theme.button.text.disabled')};
      border: ${prop('theme.button.border.disabled')};

      &:hover {
        background-color: ${prop('theme.button.bg.disabled')};
        color: ${prop('theme.button.text.disabled')};
        border: ${prop('theme.button.border.disabled')};
      }
    `
  )}

  &:focus {
    outline: none;
  }

  &:hover {
    transition: all linear 0.2s;
  }
`

const types = {
  primary: 'primary',
  stroke: 'stroke',
  flat: 'flat'
}

export const Button = memo(
  ({
    appearence,
    size,
    disabled,
    full,
    uppercase,
    loading,
    icon,
    children,
    onClick,
    ...props
  }) => {
    const { button } = useContext(ThemeContext)
    const [color, setColor] = useState('')

    const setHoverColor = () =>
      types[appearence] && setColor(button.hover[appearence].text)

    const setInitialColor = () =>
      types[appearence] && setColor(button.text[appearence])

    useEffect(() => {
      setInitialColor()
    }, [button])

    return (
    <Content
        appearence={appearence}
        size={size}
        disabled={disabled}
        full={full}
        uppercase={uppercase}
        onClick={onClick}
        onMouseEnter={setHoverColor}
        onMouseLeave={setInitialColor}
        {...props}
      >
        {loading ? (
          <>
            <Icon>
              <Iconable name={Iconable.name.loading} color={color} />
            </Icon>
            Loading
          </>
        ) : (
          <>
            {icon && <Icon>{icon(color)}</Icon>}
            {children}
          </>
        )}
      </Content>
    )
  }
)

Button.Group = Group

Button.displayName = 'Button'

Button.defaultProps = {
  appearence: 'primary',
  size: 'default',
  disabled: false,
  full: false,
  uppercase: false,
  loading: false,
  onClick: () => {}
}

Button.propTypes = {
  appearence: PropTypes.oneOf(['primary', 'stroke', 'flat']),
  size: PropTypes.oneOf(['small', 'default', 'large']),
  disabled: PropTypes.bool,
  icon: PropTypes.func,
  onClick: PropTypes.func,
  full: PropTypes.bool,
  uppercase: PropTypes.bool,
  loading: PropTypes.bool
}

Button.appearence = {
  primary: 'primary',
  stroke: 'stroke',
  flat: 'flat'
}

Button.size = {
  small: 'small',
  default: 'default',
  large: 'large'
}
