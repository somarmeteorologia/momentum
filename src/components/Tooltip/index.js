import React, { memo, useContext } from 'react'
import styled, { css, ThemeContext } from 'styled-components'
import PropTypes from 'prop-types'
import { switchProp, ifProp, prop } from 'styled-tools'
import Tippy from '@tippy.js/react'

const Tooltipable = styled(Tippy)`
  z-index: ${prop('theme.zindex.modal')};
  border-radius: ${prop('theme.border.radius.four')};
  box-shadow: ${prop('theme.tooltip.shadow.primary')};
  min-width: ${ifProp('header', '200px', 'auto')};
  max-width: 400px;

  width: max-content;
  min-height: min-content;
  padding: 0;

  ${switchProp('className', {
    basic: css`
      color: ${prop('theme.tooltip.text.primary')};
      background: ${prop('theme.tooltip.bg.primary')};
    `,
    accent: css`
      color: ${prop('theme.tooltip.text.secondary')};
      background: ${prop('theme.tooltip.bg.secondary')};
    `
  })}

  .tippy-content {
    border-radius: ${prop('theme.border.radius.four')};
  }

  &[x-placement^='top'] .tippy-arrow {
    border-top-color: ${prop('theme.tooltip.bg.primary')};
  }

  &[x-placement^='bottom'] .tippy-arrow {
    border-bottom-color: ${prop('theme.tooltip.bg.primary')};
  }

  &[x-placement^='left'] .tippy-arrow {
    border-left-color: ${prop('theme.tooltip.bg.primary')};
  }

  &[x-placement^='right'] .tippy-arrow {
    border-right-color: ${prop('theme.tooltip.bg.primary')};
  }
`

const Header = styled.div`
  font-weight: ${prop('theme.font.weight.bold')};
  font-size: ${prop('theme.font.size.twelve')};
  border-radius: ${prop('theme.border.radius.four')}
    ${prop('theme.border.radius.four')} 0 0;
  width: 100%;
  padding: 10px 15px;
  text-transform: uppercase;

  ${switchProp('appearence', {
    basic: css`
      background-color: ${prop('theme.tooltip.header.primary')};
    `,
    accent: css`
      background-color: ${prop('theme.tooltip.header.secondary')};
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

    const color = tooltip.text.primary

    return (
      <Tooltipable
        boundary="window"
        placement={tailPosition}
        trigger={trigger}
        arrow={true}
        arrowType
        className={appearence}
        content={
          <>
            {header && (
              <Header appearence={appearence}>{header({ color })}</Header>
            )}
            <Body size={size}>{body({ color })}</Body>
          </>
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
  header: PropTypes.node,
  body: PropTypes.node.isRequired
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
