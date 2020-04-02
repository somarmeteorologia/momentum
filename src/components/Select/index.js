import React, { memo, useState, useContext } from 'react'
import styled, { css, ThemeContext } from 'styled-components'
import PropTypes from 'prop-types'
import v4 from 'uuid/v4'
import { ifProp, theme } from 'styled-tools'
import { motion } from 'framer-motion'

import { Icon } from '@components/Icon'
import { Closeable } from '@components/Closeable'

const defaultValue = {
  label: 'Selecionar'
}

const Container = styled.div`
  width: ${ifProp('full', '100%', '240px')};
  display: flex;
  flex-direction: column;
  position: relative;
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
  cursor: default;

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

const Selectable = styled.div`
  width: 100%;
  height: 40px;
  padding: 0 16px;
  font-size: ${theme('font.size.fifteen')};
  border-radius: ${theme('border.radius.four')};
  border: ${ifProp(
    'active',
    theme('field.border.secondary'),
    theme('field.border.primary')
  )};
  background-color: ${theme('field.bg.primary')};
  color: ${theme('field.text.quaternary')};
  outline: 0;
  appearance: none;
  cursor: ${ifProp('disabled', 'not-allowed', 'pointer')};
  position: relative;
  user-select: none;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    border: ${ifProp(
      'disabled',
      theme('field.border.primary'),
      theme('field.border.secondary')
    )};
  }

  ${ifProp(
    'icon',
    css`
      padding-left: 36px;
    `
  )}
`

const Options = styled(motion.div)`
  width: 100%;
  top: calc(100% + 4px);
  position: absolute;
  border-radius: ${theme('border.radius.four')};
  background-color: ${theme('field.bg.secondary')};
  list-style: none;
  padding: 1px;
  border: ${theme('field.border.tertiary')};
  box-shadow: ${theme('field.shadow.primary')};
`

const Option = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  border-radius: ${theme('border.radius.four')};
  padding-left: 14px;
  padding-right: 14px;
  cursor: pointer;
  font-size: ${theme('font.size.fourteen')};
  font-family: ${theme('font.family.inter')};

  font-weight: ${ifProp(
    'selected',
    theme('font.weight.bold'),
    theme('font.weight.regular')
  )};
  color: ${ifProp(
    'selected',
    theme('field.text.active'),
    theme('field.text.tertiary')
  )};

  &:hover {
    color: ${theme('field.text.quaternary')};
    background-color: ${theme('field.bg.hover')};
  }
`

const Content = styled.div`
  display: flex;
  align-items: center;
  left: 16px;
  position: absolute;
  height: 40px;
  line-height: 40px;
`

const Title = styled.span`
  font-size: ${theme('font.size.fourteen')};
  font-weight: ${theme('font.weight.regular')};
  color: ${ifProp(
    'hasSelected',
    theme('field.text.selected'),
    theme('field.text.secondary')
  )};

  ${ifProp(
    'disabled',
    css`
      color: ${theme('field.text.disabled')};
    `
  )};
`

export const Select = memo(
  ({
    options,
    icon,
    defaultValue,
    label,
    disabled,
    required,
    onChange,
    full
  }) => {
    const { field } = useContext(ThemeContext)
    const [show, setShow] = useState(false)
    const [selected, setSelected] = useState(defaultValue)
    const [focus, setFocus] = useState(focus)

    const toggleShow = () => setShow(!show)

    const toCloseOutside = () => {
      setShow(false)
      setFocus(false)
    }

    const whenSelected = ({ text }) => () => {
      toggleShow()

      setSelected(text)
      onChange(text)
    }

    const whenFocus = () => setFocus(!focus)

    const hasSelected = () => Select.defaultValue.label !== selected

    return (
      <Container full={full}>
        {label && (
          <Label required={required} disabled={disabled} onClick={whenFocus}>
            {label}
          </Label>
        )}

        <Closeable whenClose={toCloseOutside}>
          <Selectable
            icon={icon}
            active={show || focus}
            onClick={!disabled ? toggleShow : undefined}
            disabled={disabled}
          >
            {icon && (
              <Content>
                {icon({ width: 14, height: 14, color: field.icon.primary })}
              </Content>
            )}

            <Title
              hasSelected={Select.defaultValue.label !== selected}
              disabled={disabled}
            >
              {selected}
            </Title>

            <Icon
              name={Icon.name.down}
              width={6}
              color={hasSelected() ? field.arrow.selected : field.arrow.primary}
            />
          </Selectable>

          <Options
            animate={show ? 'visible' : 'hidden'}
            variants={{
              visible: {
                opacity: 1,
                display: 'block'
              },
              hidden: {
                opacity: 0,
                transitionEnd: {
                  display: 'none'
                }
              }
            }}
          >
            {options.map(({ value, text }) => (
              <Option
                key={v4()}
                selected={text === selected}
                value={value}
                onClick={whenSelected({ value, text })}
              >
                {text}
              </Option>
            ))}
          </Options>
        </Closeable>
      </Container>
    )
  }
)

Select.defaultProps = {
  defaultValue: defaultValue.label,
  onChange: () => {}
}

Select.propTypes = {
  defaultValue: PropTypes.string,
  icon: PropTypes.func,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
}

Select.defaultValue = defaultValue
