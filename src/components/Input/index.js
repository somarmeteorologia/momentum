import React, { memo, useState, useContext } from 'react'
import styled, { css, ThemeContext } from 'styled-components'
import PropTypes from 'prop-types'
import { ifProp, switchProp, theme } from 'styled-tools'

const iconAlign = {
  left: 'left',
  right: 'right'
}

const typing = {
  text: 'text',
  password: 'password',
  email: 'email'
}

const Container = styled.label`
  display: flex;
  flex-direction: column;
  position: relative;
  width: ${ifProp('full', '100%', '240px')};
`

const Label = styled.span`
  margin-bottom: 8px;
  font-family: ${theme('font.family.inter')};
  font-size: ${theme('font.size.twelve')};
  font-weight: ${theme('font.weight.bold')};
  color: ${ifProp(
    'disabled',
    theme('field.text.disabled'),
    theme('field.text.primary')
  )};

  ${ifProp(
    'required',
    css`
      &::after {
        content: '*';
        color: ${ifProp(
          'disabled',
          theme('field.text.disabled'),
          theme('field.text.danger')
        )};
      }
    `
  )}
`

const Inputable = styled.input`
  height: 40px;
  padding: 11px 14px;
  font-family: ${theme('font.family.inter')};
  font-size: ${theme('font.size.fourteen')};
  color: ${theme('field.text.primary')};
  background-color: ${theme('field.bg.primary')};
  border-radius: ${theme('border.radius.four')};
  border: ${ifProp(
    'hasError',
    theme('field.border.danger'),
    theme('field.border.primary')
  )};
  cursor: ${ifProp('disabled', 'not-allowed', 'initial')};

  ${ifProp(
    'icon',
    switchProp('iconAlign', {
      [iconAlign.left]: css`
        padding-left: 36px;
      `,
      [iconAlign.right]: css`
        padding-right: 36px;
      `
    }),
    null
  )}

  &:focus {
    outline: none;
    border: ${ifProp(
      'hasError',
      theme('field.border.danger'),
      theme('field.border.secondary')
    )};
  }

  &::placeholder {
    color: ${ifProp(
      'hasError',
      theme('field.text.danger'),
      theme('field.text.secondary')
    )};

    ${ifProp(
      'disabled',
      css`
        color: ${theme('field.text.disabled')};
      `
    )};
  }
`

const Message = styled.span`
  margin-top: 8px;
  font-family: ${theme('font.family.inter')};
  font-size: ${theme('font.size.ten')};
  color: ${theme('field.text.danger')};
`

const Content = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  height: 40px;
  line-height: 40px;

  ${switchProp('iconAlign', {
    left: css`
      left: 16px;
    `,
    right: css`
      right: 16px;
    `
  })};
`

export const Input = memo(
  ({
    value,
    label,
    typing,
    onChange,
    placeholder,
    icon,
    raw,
    iconAlign,
    error,
    success,
    required,
    disabled,
    full,
    ...props
  }) => {
    const { field } = useContext(ThemeContext)
    const [text, setText] = useState(value)

    const whenChange = event => {
      const { value } = event.target

      setText(value)
      onChange(raw ? event : value)
    }

    return (
      <Container full={full}>
        {label && (
          <Label required={required} disabled={disabled}>
            {label}
          </Label>
        )}

        {icon && (
          <Content iconAlign={iconAlign}>
            {icon({
              width: 14,
              height: 14,
              color:
                success && success.has ? field.icon.success : field.icon.primary
            })}
          </Content>
        )}

        <Inputable
          type={typing}
          value={text}
          hasError={error.has}
          icon={icon}
          iconAlign={iconAlign}
          onChange={whenChange}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          {...props}
        />

        {error.has && <Message>{error.message}</Message>}
      </Container>
    )
  }
)

Input.defaultProps = {
  value: '',
  label: '',
  placeholder: '',
  iconAlign: iconAlign.left,
  typing: typing.text,
  onChange: () => {},
  error: {
    has: false
  },
  success: {
    has: false
  },
  disabled: false,
  required: false,
  full: false
}

Input.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  typing: PropTypes.oneOf([typing.password, typing.text, typing.email]),
  icon: PropTypes.func,
  iconAlign: PropTypes.oneOf([iconAlign.left, iconAlign.right]),
  error: PropTypes.shape({
    has: PropTypes.bool,
    message: PropTypes.string
  }),
  success: PropTypes.shape({
    has: PropTypes.bool,
    message: PropTypes.string
  }),
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  full: PropTypes.bool
}

Input.typing = typing
Input.iconAlign = iconAlign
