import React, { memo, useState, useContext } from 'react'
import styled, { css, ThemeContext } from 'styled-components'
import PropTypes from 'prop-types'
import v4 from 'uuid/v4'
import { ifProp, prop } from 'styled-tools'
import posed from 'react-pose'

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
  font-family: ${prop('theme.font.family.inter')};
  font-size: ${prop('theme.font.size.twelve')};
  font-weight: ${prop('theme.font.weight.bold')};
  color: ${ifProp(
    'disabled',
    prop('theme.field.text.disabled'),
    prop('theme.field.text.primary')
  )};
  cursor: default;

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

const Selectable = styled.div`
  width: 100%;
  height: 40px;
  padding: 0 16px;
  font-size: ${prop('theme.font.size.fifteen')};
  border-radius: ${prop('theme.border.radius.four')};
  border: ${ifProp(
    'active',
    prop('theme.field.border.secondary'),
    prop('theme.field.border.primary')
  )};
  background-color: ${prop('theme.field.bg.primary')};
  color: ${prop('theme.field.text.quaternary')};
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
    prop('theme.field.border.primary'),
    prop('theme.field.border.secondary')
  )};
  }

  ${ifProp(
    'icon',
    css`
      padding-left: 36px;
    `
  )}
`

const Options = posed(styled.ul`
  width: 100%;
  top: calc(100% + 4px);
  position: absolute;
  border-radius: ${prop('theme.border.radius.four')};
  background-color: ${prop('theme.field.bg.secondary')};
  list-style: none;
  padding: 1px;
  border: ${prop('theme.field.border.tertiary')};
  box-shadow: ${prop('theme.field.shadow.primary')};
`)({
  visible: { applyAtStart: { display: 'block' }, opacity: 1 },
  hidden: { applyAtEnd: { display: 'none' }, opacity: 0 }
})

const Option = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  border-radius: ${prop('theme.border.radius.four')};
  padding-left: 14px;
  padding-right: 14px;
  font-size: ${prop('theme.font.size.fourteen')};
  font-weight: ${ifProp(
    'selected',
    prop('theme.font.weight.bold'),
    prop('theme.font.weight.regular')
  )};
  color: ${ifProp(
    'selected',
    prop('theme.field.text.active'),
    prop('theme.field.text.tertiary')
  )};
  cursor: pointer;

  &:hover {
    color: ${prop('theme.field.text.quaternary')};
    background-color: ${prop('theme.field.bg.hover')};
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
  font-size: ${prop('theme.font.size.fourteen')};
  font-weight: ${prop('theme.font.weight.regular')};
  color: ${ifProp(
    'hasSelected',
    prop('theme.field.text.selected'),
    prop('theme.field.text.secondary')
  )};

  ${ifProp(
    'disabled',
    css`
      color: ${prop('theme.field.text.disabled')};
    `
  )};
`

export const Select = memo(
  ({
    options,
    onChange,
    icon,
    defaultValue,
    label,
    disabled,
    required,
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

    const whenSelected = ({ text, value }) => () => {
      toggleShow()
      setSelected(text)
      onChange(value)
    }

    const whenFocus = () => {
      setFocus(!focus)
    }

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

          <Options pose={show ? 'visible' : 'hidden'}>
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
