import React, { useContext, useState, useRef } from 'react'
import styled, { ThemeContext } from 'styled-components'
import PropTypes from 'prop-types'
import { prop, ifProp } from 'styled-tools'
import posed from 'react-pose'

import { Icon } from '@components/Icon'

import Interable from './Interable'
import Control from './Control'
import Separator from './Separator'

import { Provider } from './Context'
import Switcher from './Switcher'
import Type from './Type'
import { useInterable } from './utils'

const Container = posed(styled.div`
  background-color: ${prop('theme.navigation.bg.primary')};
  height: ${ifProp('height', prop('height'), '100%')};
  position: relative;
`)({
  visible: {
    width: 270
  },
  collapsed: {
    width: 20
  }
})

const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const Toggleable = styled.div`
  width: 23px;
  height: 23px;
  cursor: pointer;
  border: 1px solid ${prop('theme.navigation.toggle.secondary')};
  background-color: ${prop('theme.navigation.toggle.primary')};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${prop('theme.border.radius.fifty')};
  position: absolute;
  right: -10px;
  top: 122px;
  z-index: ${prop('theme.zindex.above')};

  &:hover {
    background-color: ${prop('theme.navigation.toggle.tertiary')};
  }
`

export const Navigation = ({
  height,
  toOpen,
  defaultStructure,
  defaultInterables,
  onInterable,
  onToggled
}) => {
  const [toggled, setToggled] = useState(false)
  const [hasNavigationHover, setHasNavigationHover] = useState(false)
  const [hasToggleHover, setHasToggleHover] = useState(false)
  const { animations, navigation } = useContext(ThemeContext)
  const containerRef = useRef(null)

  return (
    <>
      <Provider
        value={{
          defaultStructure,
          defaultInterables,
          onInterable
        }}
      >
        <Container
          data-testid="container"
          ref={containerRef}
          height={height}
          onMouseEnter={() => setHasNavigationHover(true)}
          onMouseLeave={() => setHasNavigationHover(false)}
          initialPose={animations.visible}
          pose={toggled ? animations.collapsed : animations.visible}
        >
          {!toggled && (
            <Switcher
              toOpen={toOpen}
              height={containerRef.current && containerRef.current.offsetHeight}
            />
          )}
          {hasNavigationHover && (
            <Toggleable
              data-testid="toggleable"
              onMouseEnter={() => setHasToggleHover(true)}
              onMouseLeave={() => setHasToggleHover(false)}
              onClick={() => {
                setToggled(!toggled)
                onToggled(!toggled)
              }}
            >
              <Icon
                name={toggled ? 'right' : 'left'}
                width={10}
                height={10}
                color={
                  hasToggleHover
                    ? navigation.toggle.secondary
                    : navigation.toggle.tertiary
                }
              />
            </Toggleable>
          )}
        </Container>
      </Provider>
    </>
  )
}

Navigation.Separator = Separator
Navigation.Type = Type
Navigation.Interable = Interable
Navigation.Title = Title
Navigation.Control = Control

Navigation.useInterable = useInterable

Navigation.defaultProps = {
  onInterable: () => {},
  onToggled: () => {},
  isReady: true
}

Navigation.propTypes = {
  toOpen: PropTypes.func,
  height: PropTypes.string,
  onInterable: PropTypes.func,
  onToggled: PropTypes.func,
  defaultInterables: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      interables: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          value: PropTypes.any.isRequired
        })
      )
    })
  ).isRequired,
  defaultStructure: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.func.isRequired,
      type: PropTypes.oneOf(['category']).isRequired,
      children: PropTypes.arrayOf(
        PropTypes.shape({
          parent: PropTypes.string.isRequired,
          id: PropTypes.string.isRequired,
          title: PropTypes.func.isRequired,
          type: PropTypes.oneOf(['group', 'item']).isRequired,
          prevent: PropTypes.func,
          onPrevent: PropTypes.func,
          isOpen: PropTypes.bool,
          children: PropTypes.arrayOf(
            PropTypes.shape({
              parent: PropTypes.string.isRequired,
              id: PropTypes.string.isRequired,
              title: PropTypes.func.isRequired,
              type: PropTypes.oneOf(['group', 'item']).isRequired,
              prevent: PropTypes.func,
              onPrevent: PropTypes.func,
              isOpen: PropTypes.bool,
              children: PropTypes.array
            })
          )
        })
      )
    })
  )
}
