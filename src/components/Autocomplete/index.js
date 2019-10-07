import React, { memo, useState, useContext } from 'react'
import styled, { css, ThemeContext } from 'styled-components'
import PropTypes from 'prop-types'
import v4 from 'uuid/v4'
import posed from 'react-pose'

import { Icon } from '@components/Icon'
import { Closeable } from '@components/Closeable'
import { ifProp, prop } from 'styled-tools'

const Container = styled.div`
  width: ${ifProp('full', '100%', '240px')};
  display: flex;
  flex-direction: column;
  position: relative;
`

const Content = styled.label`
  display: flex;
  flex-direction: column;
`

const Autocompleteable = styled.div`
  width: 100%;
  height: 40px;
  border-radius: ${prop('theme.border.radius.four')};
  border: ${ifProp(
  'hasError',
  prop('theme.field.border.danger'),
  prop('theme.field.border.primary')
)};
  background-color: ${prop('theme.field.bg.primary')};
  color: ${prop('theme.field.text.primary')};
  outline: 0;
  appearance: none;
  cursor: ${ifProp('disabled', 'not-allowed', 'pointer')};
  position: relative;
  user-select: none;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${ifProp(
  'focus',
  css`
      border: ${ifProp(
    'hasError',
    prop('theme.field.border.danger'),
    prop('theme.field.border.secondary')
  )};
    `,
  null
)}
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

const Selecties = posed(styled.ul`
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

const Selectable = styled.li`
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

  .text {
    margin-left: 10px;
  }
`

const Interable = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: inherit;
  min-width: 64px;
  width: 64px;
  padding: 0 16px;
  margin-left: -1px;
  background-color: ${ifProp(
  'isActive',
  prop('theme.field.bg.active'),
  prop('theme.field.bg.tertiary')
)};
  border-radius: ${prop('theme.border.radius.four')} 0 0
    ${prop('theme.border.radius.four')};
`

const Arrow = posed(styled.span``)({
  initial: {
    rotate: 0
  },

  rotate: {
    rotate: '180deg'
  }
})

const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 16px;
  border: none;
  background: transparent;
  font-size: ${prop('theme.font.size.fourteen')};
  color: ${prop('theme.field.text.primary')};
  cursor: ${ifProp('disabled', 'not-allowed', 'text')};

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
`

const Message = styled.span`
  margin-top: 8px;
  font-family: ${prop('theme.font.family.inter')};
  font-size: ${prop('theme.font.size.ten')};
  color: ${prop('theme.field.text.danger')};
`

const iconAjustment = { width: 20, height: 20 }

export const Autocomplete = memo(
  ({
    categories,
    options,
    onChange,
    label,
    required,
    disabled,
    error,
    ...props
  }) => {
    const [hasSelected] = categories.filter(category => category.selected)

    const { field } = useContext(ThemeContext)
    const [showCategories, setShowCategories] = useState(false)
    const [showOptions, setShowOptions] = useState(false)
    const [focus, setFocus] = useState(false)
    const [category, setCategory] = useState(hasSelected)
    const [selected, setSelected] = useState('Digite aqui...')
    const [filteredOptions, setFilteredOptions] = useState([])
    const [value, setValue] = useState('')
    const [clicked, setClicked] = useState(false)
    const [idHover, setIdHover] = useState(undefined)

    const toggleShowCategories = event => {
      event.preventDefault()
      setShowCategories(!showCategories)
    }

    const whenSelected = ({ text, value, category }) => () => {
      setValue('')
      setSelected(text)
      onChange({ value, text, category })
      setShowOptions(false)
      setClicked(true)
    }

    const whenTyped = ({ target }) => {
      setValue(target.value)

      if (target.value === '') {
        return setShowOptions(false)
      }

      const filtered = options
        .filter(option => option.category === category.id)
        .filter(({ text }) =>
          text.toLowerCase().includes(target.value.toLowerCase())
        )
        .slice(0, 6)

      filtered.length ? setShowOptions(true) : setShowOptions(false)

      setFilteredOptions(filtered)
    }

    const isActive = () => showCategories || showOptions

    return (
      <Container {...props}>
        <Closeable
          whenClose={() => {
            setShowCategories(false)
            setShowOptions(false)
            setFocus(false)
          }}
        >
          <Content>
            {label && (
              <Label required={required} disabled={disabled}>
                {label}
              </Label>
            )}
            <Autocompleteable
              disabled={disabled}
              required={required}
              focus={focus || showCategories}
              hasError={error.has}
            >
              <Interable
                onClick={!disabled ? toggleShowCategories : undefined}
                isActive={isActive() || clicked}
              >
                {category.icon({
                  ...iconAjustment,
                  color:
                    isActive() || clicked
                      ? field.icon.active
                      : field.icon.secondary,
                  testID: 'icon'
                })}

                <Arrow pose={isActive() ? 'rotate' : 'initial'}>
                  <Icon
                    name="down"
                    width={10}
                    height={10}
                    left={5}
                    right={5}
                    color={
                      isActive() || clicked
                        ? field.icon.active
                        : field.icon.secondary
                    }
                  />
                </Arrow>
              </Interable>

              <Input
                placeholder={selected}
                onFocus={() => {
                  setSelected('Digite aqui...')
                  setShowCategories(false)
                  setFocus(true)
                }}
                value={value}
                onChange={whenTyped}
                disabled={disabled}
                required={required}
                hasError={error.has}
                data-testid='input-autocomplete'
              />
            </Autocompleteable>
          </Content>

          <Selecties
            initialPose="hidden"
            pose={showCategories ? 'visible' : 'hidden'}
          >
            {categories.map(({ id, text, icon, ...props }) => (
              <Selectable
                key={v4()}
                value={id}
                selected={category.id === id}
                onClick={() => {
                  setClicked(true)
                  setShowCategories(false)
                  setCategory({ id, icon, text, ...props })
                }}
                onMouseEnter={() => setIdHover(id)}
                onMouseLeave={() => setIdHover(null)}
              >
                {icon({
                  ...iconAjustment,
                  color:
                    idHover === id
                      ? field.icon.active
                      : field.icon.tertiary,
                  testID: 'list'
                })}
                <div className="text">{text}</div>
              </Selectable>
            ))}
          </Selecties>

          <Selecties
            initialPose="hidden"
            pose={showOptions ? 'visible' : 'hidden'}
          >
            {filteredOptions.map(({ value, text, category }) => (
              <Selectable
                key={v4()}
                value={value}
                selected={text === selected}
                onClick={whenSelected({ value, text, category })}
                data-testid='option'
              >
                {text}
              </Selectable>
            ))}
          </Selecties>
          {error && <Message>{error.message}</Message>}
        </Closeable>
      </Container>
    )
  }
)

Autocomplete.defaultProps = {
  onChange: () => { },
  error: {
    has: false
  },
  disabled: false,
  required: false,
  full: false
}

Autocomplete.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      value: PropTypes.any.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      selected: PropTypes.bool.isRequired,
      icon: PropTypes.func.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  full: PropTypes.bool,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.shape({
    has: PropTypes.bool,
    message: PropTypes.string
  })
}
