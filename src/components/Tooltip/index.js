import React, { memo, useContext, Fragment } from 'react'
import styled, { css, ThemeContext } from 'styled-components'
import PropTypes from 'prop-types'
import { switchProp, ifProp, theme } from 'styled-tools'
import Tippy from '@tippy.js/react'

import { Text } from '@components/Text'

const Tooltipable = styled(Tippy)`
  z-index: ${theme('zindex.modal')};
  border-radius: ${theme('border.radius.four')};
  box-shadow: ${theme('tooltip.shadow.primary')};
  min-width: ${ifProp('header', '200px', 'auto')};
  max-width: 300px;

  width: max-content;
  min-height: min-content;
  padding: 0;

  ${switchProp('className', {
    basic: css`
      color: ${theme('tooltip.text.primary')};
      background: ${theme('tooltip.bg.primary')};
    `,
    accent: css`
      color: ${theme('tooltip.text.secondary')};
      background: ${theme('tooltip.bg.secondary')};
    `
  })}

  .tippy-content {
    border-radius: ${theme('border.radius.four')};
  }

  &[x-placement^='top'] .tippy-arrow {
    border-top-color: ${ifProp(
      { className: 'basic' },
      theme('tooltip.bg.primary'),
      theme('tooltip.bg.secondary')
    )};
  }

  &[x-placement^='bottom'] .tippy-arrow {
    border-bottom-color: ${ifProp(
      { className: 'basic' },
      theme('tooltip.bg.primary'),
      theme('tooltip.bg.secondary')
    )};
  }

  &[x-placement^='left'] .tippy-arrow {
    border-left-color: ${ifProp(
      { className: 'basic' },
      theme('tooltip.bg.primary'),
      theme('tooltip.bg.secondary')
    )};
  }

  &[x-placement^='right'] .tippy-arrow {
    border-right-color: ${ifProp(
      { className: 'basic' },
      theme('tooltip.bg.primary'),
      theme('tooltip.bg.secondary')
    )};
  }
`

const Header = styled.div`
  font-weight: ${theme('font.weight.bold')};
  font-size: ${theme('font.size.twelve')};
  border-radius: ${theme('border.radius.four')} ${theme('border.radius.four')} 0
    0;
  width: 100%;
  padding: 10px 15px;
  text-transform: uppercase;

  ${switchProp('appearence', {
    basic: css`
      background-color: ${theme('tooltip.header.primary')};
    `,
    accent: css`
      background-color: ${theme('tooltip.header.secondary')};
    `
  })}
`
const Body = styled.div`
  padding: 10px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  ${switchProp('size', {
    small: css`
      min-height: 37px;
    `,
    default: css`
      min-height: 45px;
    `,
    large: css`
      min-height: 53px;
    `
  })}
`

export const Tooltip = memo(
  ({ children, header, body, tailPosition, size, trigger, appearence }) => {
    const { tooltip } = useContext(ThemeContext)

    const color =
      appearence === 'basic' ? tooltip.text.primary : tooltip.text.secondary

    return (
      <Tooltipable
        boundary="window"
        placement={tailPosition}
        trigger={trigger}
        arrow={true}
        arrowType
        className={appearence}
        content={
          <Fragment>
            {header && (
              <Header appearence={appearence}>
                {header({ color, size: Text.size.twelve })}
              </Header>
            )}
            <Body appearence={appearence} size={size}>
              {body({ color, size: Text.size.ten })}
            </Body>
          </Fragment>
        }
      >
        <span>{children}</span>
      </Tooltipable>
    )
  }
)

Tooltip.defaultProps = {
  appearence: 'basic',
  tailPosition: 'top',
  size: 'default',
  trigger: 'mouseenter'
}

Tooltip.propTypes = {
  appearence: PropTypes.oneOf(['basic', 'accent']),
  tailPosition: PropTypes.oneOf(['bottom', 'top', 'left', 'right']),
  trigger: PropTypes.oneOf(['click', 'mouseenter']),
  size: PropTypes.oneOf(['small', 'default', 'large']),
  header: PropTypes.func,
  body: PropTypes.func.isRequired
}

Tooltip.trigger = {
  click: 'click',
  mouseenter: 'mouseenter'
}

Tooltip.appearence = {
  basic: 'basic',
  accent: 'accent'
}

Tooltip.tailPosition = {
  bottom: 'bottom',
  top: 'top',
  left: 'left',
  right: 'right'
}

Tooltip.size = {
  small: 'small',
  default: 'default',
  large: 'large'
}
