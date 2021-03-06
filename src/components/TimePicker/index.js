import React, { memo, useState, useContext, useRef } from 'react'
import PropTypes from 'prop-types'
import styled, { css, ThemeContext } from 'styled-components'
import { prop, ifProp } from 'styled-tools'

import { Icon } from '@components/Icon'

const Container = styled.label`
  display: flex;
  flex-direction: column;
  position: relative;
  width: ${ifProp('full', '100%', '150px')};
  font-family: ${prop('theme.font.family.inter')};
  font-size: ${prop('theme.font.size.fourteen')};
  color: ${prop('theme.field.text.primary')};
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

const Inputable = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 14px;
  background-color: ${prop('theme.field.bg.primary')};
  border-radius: ${prop('theme.border.radius.four')};
  border: ${ifProp(
  'hasError',
  prop('theme.field.border.danger'),
  prop('theme.field.border.primary')
)};
  cursor: ${ifProp('disabled', 'not-allowed', 'initial')};
`

const Iconable = styled.span`
  display: flex;
  align-items: center;
  height: 40px;
  line-height: 40px;
`

const Field = styled.input.attrs({
  type: 'number',
  placeholder: '00'
})`
  height: 40px;
  width: 32px;
  padding: 11px 6px;
  background-color: transparent;
  border: none;
  font-family: ${prop('theme.font.family.inter')};
  font-size: ${prop('theme.font.size.fourteen')};
  color: ${prop('theme.field.text.primary')};
  cursor: ${ifProp('disabled', 'not-allowed', 'initial')};
  appearance: textfield;

  &:focus {
    outline: none;
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

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
  }
`

const Colon = styled.span`
  color: ${prop('theme.field.text.secondary')};
`

const Message = styled.span`
  margin-top: 8px;
  font-family: ${prop('theme.font.family.inter')};
  font-size: ${prop('theme.font.size.ten')};
  color: ${prop('theme.field.text.danger')};
`


export const TimePicker = memo(
  ({ value, label, onChange, error, required, disabled, full }) => {
    const { field } = useContext(ThemeContext)
    const hoursRef = useRef(null)
    const minutesRef = useRef(null)
    const secondsRef = useRef(null)

    const [time, setTime] = useState({
      hours: value.hours,
      minutes: value.minutes,
      seconds: value.seconds
    })

    const FIELDS = {
      hours: {
        min: 0,
        max: 23,
        nextElement: minutesRef,
        previousField: null
      },
      minutes: {
        min: 0,
        max: 59,
        nextElement: secondsRef,
        previousField: hoursRef
      },
      seconds: {
        min: 0,
        max: 59,
        nextElement: null,
        previousField: minutesRef
      }
    }
    const MAX_LENGHT = 2

    const format = (name, value) => {
      value = limit(name, value)

      if (value < 0) return '00'

      return value < 10 && value.length === 1 ? `0${value}` : value
    }

    const focusToNextField = (name, value) => {
      const isGreaterThanMaxLength = value.toString().length >= MAX_LENGHT
      const exists = FIELDS[name].nextElement && FIELDS[name].nextElement.current

      isGreaterThanMaxLength && exists && FIELDS[name].nextElement.current.focus()
    }

    const limit = (name, value) => {
      value = value.slice(0, MAX_LENGHT)

      if (value < FIELDS[name].min) {
        return FIELDS[name].min
      }

      if (value > FIELDS[name].max) {
        return FIELDS[name].max
      }

      return value
    }

    const handleChange = (name, value) => {
      setTime({
        ...time,
        [name]: value
      })
      onChange({
        ...time,
        [name]: value
      })
    }

    const whenChange = ({ target }) => {
      const { name, value } = target
      handleChange(name, limit(name, value))
      focusToNextField(name, value, MAX_LENGHT)
    }

    const whenBlur = ({ target }) => {
      const { name, value } = target
      handleChange(name, format(name, value))
    }

    const handleKeyDown = ({ target, keyCode }) => {
      const { name, value } = target

      const backspaceKeyCode = 8

      const pressedBackspace = keyCode === backspaceKeyCode
      const exist = (FIELDS[name].previousField) && (FIELDS[name].previousField.current)
      const isLenghtZero = value.length === 0

      pressedBackspace && exist && isLenghtZero && FIELDS[name].previousField.current.focus()
    }

    return (
      <Container full={full}>
        {label && (
          <Label required={required} disabled={disabled}>
            {label}
          </Label>
        )}

        <Inputable disabled={disabled} hasError={error.has}>
          <Iconable>
            <Icon
              name={Icon.name.clock}
              color={field.icon.primary}
              width={22}
              height={22}
            />
          </Iconable>

          <Field
            name="hours"
            value={time.hours}
            onChange={whenChange}
            onBlur={whenBlur}
            required={required}
            disabled={disabled}
            onKeyDown={handleKeyDown}
            ref={hoursRef}
          />
          <Colon className="colon">:</Colon>
          <Field
            name="minutes"
            value={time.minutes}
            onChange={whenChange}
            onBlur={whenBlur}
            required={required}
            disabled={disabled}
            onKeyDown={handleKeyDown}
            ref={minutesRef}
          />
          <Colon className="colon">:</Colon>
          <Field
            name="seconds"
            value={time.seconds}
            onChange={whenChange}
            onBlur={whenBlur}
            required={required}
            disabled={disabled}
            onKeyDown={handleKeyDown}
            ref={secondsRef}
          />
        </Inputable>

        {error.has && <Message>{error.message}</Message>}
      </Container>
    )
  }
)

TimePicker.defaultProps = {
  value: {
    hours: '',
    minutes: '',
    seconds: ''
  },
  label: '',
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

TimePicker.propTypes = {
  value: PropTypes.shape({
    hours: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    minutes: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    seconds: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  }),
  label: PropTypes.string,
  error: PropTypes.shape({
    has: PropTypes.bool,
    message: PropTypes.string
  }),
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  full: PropTypes.bool
}
