import React, { memo, useState, useContext } from 'react'
import styled, { css, ThemeContext } from 'styled-components'
import PropTypes from 'prop-types'
import { ifProp, switchProp, prop } from 'styled-tools'

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
  font-family: ${prop('theme.font.family.inter')};
  font-size: ${prop('theme.font.size.twelve')};
  font-weight: ${prop('theme.font.weight.bold')};
  color: ${ifProp(
  'disabled',
  prop('theme.field.text.disabled'),
  prop('theme.field.text.primary')
)};

  ${ifProp(
  'required',
  css`
      &::after {
        content: '*';
        color: ${ifProp(
    'disabled',
    prop('theme.field.text.disabled'),
    prop('theme.field.text.danger')
  )};
      }
    `
)}
`

const Inputable = styled.input`
  height: 40px;
  padding: 11px 14px;
  font-family: ${prop('theme.font.family.inter')};
  font-size: ${prop('theme.font.size.fourteen')};
  color: ${prop('theme.field.text.primary')};
  background-color: ${prop('theme.field.bg.primary')};
  border-radius: ${prop('theme.border.radius.four')};
  border: ${ifProp(
  'hasError',
  prop('theme.field.border.danger'),
  prop('theme.field.border.primary')
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
  prop('theme.field.border.danger'),
  prop('theme.field.border.secondary')
)};
  }

  &::placeholder {
    color: ${ifProp(
  'hasError',
  prop('theme.field.text.danger'),
  prop('theme.field.text.secondary')
)};

    ${ifProp(
  'disabled',
  css`
        color: ${prop('theme.field.text.disabled')};
      `
)};
  }
`

const Message = styled.span`
  margin-top: 8px;
  font-family: ${prop('theme.font.family.inter')};
  font-size: ${prop('theme.font.size.ten')};
  color: ${prop('theme.field.text.danger')};
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

    const whenChange = ({ target }) => {
      const { value } = target

      setText(value)
      onChange(value)
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
  onChange: () => { },
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
