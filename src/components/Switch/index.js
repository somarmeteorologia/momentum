import React, { memo } from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { switchProp, prop, ifProp } from 'styled-tools'

import { Box } from '@components/Box'

const BoxAdjusted = styled(Box)`
  display: flex;
`

const Content = styled.div`
  border-radius: ${prop('theme.border.radius.twentyFour')};
  background-color: ${ifProp(
    'active',
    prop('theme.selector.bg.on'),
    prop('theme.selector.bg.off')
  )};
  justify-content: ${ifProp('active', 'flex-end', 'flex-start')};
  cursor: ${ifProp('disabled', 'not-allowed', 'pointer')};
  display: flex;
  align-items: center;
  transition: background-color 0.5s ease-out;

  ${switchProp('size', {
    default: css`
      height: 15px;
      min-width: 24px;
      padding: 0 3px;
    `,
    large: css`
      height: 19px;
      min-width: 30px;
      padding: 0 4px;
    `
  })}
`

const Icon = styled.div`
  border-radius: ${prop('theme.border.radius.fifty')};
  background-color: ${ifProp(
    'disabled',
    prop('theme.selector.icon.disabled'),
    prop('theme.selector.icon.primary')
  )};

  ${switchProp('size', {
    default: css`
      height: 10px;
      width: 10px;
    `,
    large: css`
      height: 12.5px;
      width: 12.5px;
    `
  })}
`

const Label = styled.span`
  font-family: ${prop('theme.font.family.inter')};
  color: ${ifProp(
    'disabled',
    prop('theme.selector.text.disabled'),
    prop('theme.selector.text.primary')
  )};
  cursor: ${ifProp('disabled', 'not-allowed', 'pointer')};

  ${switchProp('size', {
    default: css`
      font-size: ${prop('theme.font.size.twelve')};
    `,
    large: css`
      font-size: ${prop('theme.font.size.fourteen')};
    `
  })}

  ${switchProp('labelAlign', {
    bottom: css`
      margin-top: 8px;
    `,
    top: css`
      margin-bottom: 8px;
    `,
    left: css`
      margin-right: 8px;
    `,
    right: css`
      margin-left: 8px;
    `
  })};
`

const Container = styled.label`
  display: flex;
  align-items: center;

  ${switchProp('labelAlign', {
    bottom: css`
      flex-direction: column;
    `,
    top: css`
      flex-direction: column-reverse;
    `,
    left: css`
      flex-direction: row-reverse;
    `,
    right: css`
      flex-direction: row;
    `
  })};
`

const Hidden = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

export const Switch = memo(
  ({ active, label, labelAlign, id, onChange, disabled, size, ...props }) => {
    const setActive = ({ target }) => {
      const { checked } = target

      onChange(checked)
    }

    return (
      <BoxAdjusted {...props}>
        <Container htmlFor={id} labelAlign={labelAlign}>
          <Hidden
            id={id}
            checked={active}
            onChange={setActive}
            disabled={disabled}
          />
          <Content size={size} active={active} disabled={disabled}>
            <Icon disabled={disabled} size={size} />
          </Content>
          <Label labelAlign={labelAlign} disabled={disabled} size={size}>
            {label}
          </Label>
        </Container>
      </BoxAdjusted>
    )
  }
)

Switch.defaultProps = {
  active: false,
  disabled: false,
  labelAlign: 'bottom',
  size: 'default',
  onChange: () => {}
}

Switch.propTypes = {
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  labelAlign: PropTypes.oneOf(['bottom', 'top', 'left', 'right']),
  size: PropTypes.oneOf(['large', 'default']),
  label: PropTypes.string.isRequired
}

Switch.labelAlign = {
  top: 'top',
  bottom: 'bottom',
  left: 'left',
  right: 'right'
}

Switch.size = {
  default: 'default',
  large: 'large'
}
