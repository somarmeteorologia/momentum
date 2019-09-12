import React, { memo } from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { switchProp, ifProp, prop } from 'styled-tools'

import { Box } from '@components/Box'

const BoxAdjusted = styled(Box)`
  display: flex;
`

const Content = styled.div`
  display: inline-block;
  vertical-align: middle;
`

const Icon = styled.span`
  border-radius: ${prop('theme.border.radius.two')};
  background-color: ${ifProp(
    'disabled',
    prop('theme.selector.icon.disabled'),
    prop('theme.selector.icon.primary')
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
    prop('theme.selector.border.disabled'),
    ifProp(
      'checked',
      prop('theme.selector.border.on'),
      prop('theme.selector.border.off')
    )
  )};
  background-color: ${ifProp(
    'checked',
    prop('theme.selector.bg.on'),
    'transparent'
  )};
  border-radius: ${prop('theme.border.radius.four')};
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
    prop('theme.selector.text.disabled'),
    prop('theme.selector.text.primary')
  )};
  font-family: ${prop('theme.font.family.inter')};

  ${switchProp('size', {
    default: css`
      font-size: ${prop('theme.font.size.twelve')};
    `,
    large: css`
      font-size: ${prop('theme.font.size.fourteen')};
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
  ({ checked, label, onChange, id, disabled, labelAlign, size, ...props }) => {
    const setChecked = ({ target }) => {
      const { checked } = target

      onChange(checked)
    }

    return (
      <BoxAdjusted {...props}>
        <Container htmlFor={id} labelAlign={labelAlign}>
          <Content>
            <Hidden
              id={id}
              checked={checked}
              value={checked}
              onChange={setChecked}
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
