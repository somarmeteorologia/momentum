import React, { useContext, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { ifProp, switchProp, prop } from 'styled-tools'

import { Context } from './Context'

import { Box } from '@components/Box'

const Content = styled.div`
  display: inline-block;
  vertical-align: middle;
`

const Icon = styled.span`
  background-color: ${ifProp(
    'disabled',
    prop('theme.selector.icon.disabled'),
    prop('theme.selector.icon.primary')
  )};
  border-radius: ${prop('theme.border.radius.fifty')};

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

const Hidden = styled.input.attrs({ type: 'radio' })`
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
  border-radius: ${prop('theme.border.radius.fifty')};
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
  justify-content: center;
  flex: 1;
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

export function Option({
  containerClassName,
  radioClassName,
  id,
  label,
  name,
  disabled,
  ...props
}) {
  const { size, labelAlign, checkable, setCheckable } = useContext(Context)

  const setChecked = ({ target }) => {
    const newObj = Object.keys(checkable).reduce((accumulator, current) => {
      accumulator[current] = false
      return accumulator
    }, {})

    setCheckable({
      ...newObj,
      [id]: target.checked
    })
  }

  return (
    <Fragment>
      {checkable.hasOwnProperty(id) && (
        <Box {...props}>
          <Container
            size={size}
            htmlFor={id}
            labelAlign={labelAlign}
            className={containerClassName}
          >
            <Content>
              <Hidden
                id={id}
                checked={checkable[id]}
                value={checkable[id]}
                onChange={setChecked}
                name={name}
                disabled={disabled}
              />

              <Styled
                size={size}
                disabled={disabled}
                checked={checkable[id]}
                className={radioClassName}
              >
                {(checkable[id] || disabled) && (
                  <Icon disabled={disabled} size={size} />
                )}
              </Styled>
            </Content>

            <Label size={size} labelAlign={labelAlign}>
              {label}
            </Label>
          </Container>
        </Box>
      )}
    </Fragment>
  )
}

Option.displayName = 'Option'

Option.defaultProps = {
  checked: false,
  disabled: false
}

Option.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  containerClassName: PropTypes.string,
  radioClassName: PropTypes.string,
  disabled: PropTypes.bool
}
