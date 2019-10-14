import React, { memo, useEffect, useState, useContext, Fragment } from 'react'
import PropTypes from 'prop-types'
import { switchProp, ifProp, theme } from 'styled-tools'
import styled, { css, ThemeContext } from 'styled-components'

import { Icon as Iconable } from '@components/Icon'

import Group from './Group'

const Icon = styled.div`
  margin-right: 12px;
  display: flex;
  align-items: center;
`

const content = element => styled(element)`
  border-radius: ${theme('border.radius.four')};
  font-family: ${theme('font.family.inter')};
  font-weight: ${theme('font.weight.bold')};
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
      font-size: ${theme('font.size.twelve')};
    `,
    default: css`
      height: 40px;
      font-size: ${theme('font.size.fourteen')};
    `,
    large: css`
      height: 48px;
      font-size: ${theme('font.size.sixteen')};
    `
  })};

  ${switchProp('appearence', {
    primary: css`
      background-color: ${theme('button.bg.primary')};
      color: ${theme('button.text.primary')};
      border: ${theme('button.border.primary')};

      &:hover {
        background-color: ${theme('button.hover.primary.bg')};
        color: ${theme('button.hover.primary.text')};
      }

      &:active {
        background-color: ${theme('button.active.primary')};
      }
    `,
    stroke: css`
      background-color: ${theme('button.bg.stroke')};
      color: ${theme('button.text.stroke')};
      border: ${theme('button.border.stroke')};

      &:hover {
        color: ${theme('button.hover.stroke.text')};
        border: ${theme('button.hover.stroke.border')};
      }

      &:active {
        background-color: ${theme('button.active.stroke')};
      }
    `,
    flat: css`
      background-color: ${theme('button.bg.flat')};
      color: ${theme('button.text.flat')};
      border: ${theme('button.border.flat')};

      &:hover {
        background-color: ${theme('button.hover.flat.bg')};
        color: ${theme('button.hover.flat.text')};
      }

      &:active {
        background-color: ${theme('button.active.flat')};
      }
    `,
    rounded: css`
      background-color: ${theme('button.bg.rounded')};
      color: ${theme('color.ebony.zero')};
      border: ${theme('button.border.rounded')};
      border-radius: ${theme('border.radius.twentyFour')};
      box-shadow: none;
      transition: box-shadow 0.2s linear;

      &:hover {
        background-color: ${theme('button.hover.rounded.bg')};
        box-shadow: 0 0 12px ${theme('shadow.default')};
      }
    `
  })};

  ${ifProp(
    { disabled: true },
    css`
      background-color: ${theme('button.bg.disabled')};
      color: ${theme('button.text.disabled')};
      border: ${theme('button.border.disabled')};

      &:hover {
        background-color: ${theme('button.bg.disabled')};
        color: ${theme('button.text.disabled')};
        border: ${theme('button.border.disabled')};
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
  flat: 'flat',
  rounded: 'rounded'
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
    href,
    ...props
  }) => {
    const { button } = useContext(ThemeContext)
    const [color, setColor] = useState('')

    const setHoverColor = () =>
      types[appearence] && setColor(button.hover[appearence].text)

    const setInitialColor = () =>
      types[appearence] && setColor(button.text[appearence])

    const isLink = !!href

    const linkProps = isLink
      ? {
          href,
          target: '_blank'
        }
      : {}

    const element = isLink ? 'a' : 'button'

    const Content = content(element)

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
        {...linkProps}
      >
        {loading ? (
          <Fragment>
            <Icon>
              <Iconable name={Iconable.name.loading} color={color} />
            </Icon>
            Loading
          </Fragment>
        ) : (
          <Fragment>
            {icon && <Icon>{icon(color)}</Icon>}
            {children}
          </Fragment>
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
  appearence: PropTypes.oneOf(['primary', 'stroke', 'flat', 'rounded']),
  size: PropTypes.oneOf(['small', 'default', 'large']),
  disabled: PropTypes.bool,
  icon: PropTypes.func,
  onClick: PropTypes.func,
  full: PropTypes.bool,
  uppercase: PropTypes.bool,
  loading: PropTypes.bool,
  href: PropTypes.string
}

Button.appearence = {
  primary: 'primary',
  stroke: 'stroke',
  flat: 'flat',
  rounded: 'rounded'
}

Button.size = {
  small: 'small',
  default: 'default',
  large: 'large'
}
