import React, { memo } from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { switchProp, ifProp, theme } from 'styled-tools'

import { Box } from '@components/Box'

const BoxAdjusted = styled(Box)`
  display: flex;
`

const Content = styled.div`
  display: inline-block;
  vertical-align: middle;
`

const Icon = styled.span`
  border-radius: ${theme('border.radius.two')};
  background-color: ${ifProp(
    'disabled',
    theme('selector.icon.disabled'),
    theme('selector.icon.primary')
  )};

  ${switchProp('size', {
    default: css`
      width: 8px;
      height: 8px;
    `,
    large: css`
      width: 10px;
      height: 10px;
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

const Styled = styled.div`
  border: ${ifProp(
    'disabled',
    theme('selector.border.disabled'),
    ifProp('checked', theme('selector.border.on'), theme('selector.border.off'))
  )};
  background-color: ${ifProp(
    'checked',
    theme('selector.bg.on'),
    'transparent'
  )};
  border-radius: ${theme('border.radius.four')};
  display: flex;
  justify-content: center;
  align-items: center;

  ${switchProp('size', {
    default: css`
      width: 18px;
      height: 18px;
    `,
    large: css`
      width: 22px;
      height: 22px;
    `
  })};
`

const Container = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;

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

const Label = styled.span`
  color: ${ifProp(
    'disabled',
    theme('selector.text.disabled'),
    theme('selector.text.primary')
  )};
  font-family: ${theme('font.family.inter')};

  ${switchProp('size', {
    default: css`
      font-size: ${theme('font.size.twelve')};
    `,
    large: css`
      font-size: ${theme('font.size.fourteen')};
    `
  })};

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

export const Checkbox = memo(
  ({
    checked,
    label,
    onChange,
    id,
    disabled,
    raw,
    labelAlign,
    size,
    ...props
  }) => {
    const whenChange = event => {
      const { checked } = event.target

      onChange(raw ? event : checked)
    }

    return (
      <BoxAdjusted {...props}>
        <Container htmlFor={id} labelAlign={labelAlign}>
          <Content>
            <Hidden
              id={id}
              checked={checked}
              value={checked}
              onChange={whenChange}
              disabled={disabled}
              {...props}
            />
            <Styled size={size} checked={checked} disabled={disabled}>
              {(checked || disabled) && (
                <Icon size={size} disabled={disabled} />
              )}
            </Styled>
          </Content>

          <Label labelAlign={labelAlign} size={size} disabled={disabled}>
            {label}
          </Label>
        </Container>
      </BoxAdjusted>
    )
  }
)

Checkbox.defaultProps = {
  checked: false,
  disabled: false,
  labelAlign: 'bottom',
  onChange: () => {},
  size: 'default'
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  labelAlign: PropTypes.oneOf(['bottom', 'top', 'left', 'right']),
  size: PropTypes.oneOf(['default', 'large'])
}

Checkbox.labelAlign = {
  top: 'top',
  bottom: 'bottom',
  left: 'left',
  right: 'right'
}

Checkbox.size = {
  default: 'default',
  large: 'large'
}
