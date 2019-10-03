import React, { useContext, useState, useRef } from 'react'
import styled, { ThemeContext } from 'styled-components'
import PropTypes from 'prop-types'
import { prop, ifProp, theme } from 'styled-tools'
import posed from 'react-pose'
import PerfectScrollbar from 'react-perfect-scrollbar'

import 'react-perfect-scrollbar/dist/css/styles.css'

import { Icon } from '@components/Icon'

import Interable from './Interable'
import Control from './Control'
import Separator from './Separator'

import { Provider, Context } from './Context'
import Switcher from './Switcher'
import Type from './Type'
import { useInterable } from './utils'

const Container = posed(styled.div`
  background-color: ${theme('navigation.bg.primary')};
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
  border: 1px solid ${theme('navigation.toggle.secondary')};
  background-color: ${theme('navigation.toggle.primary')};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${theme('border.radius.fifty')};
  position: absolute;
  right: -10px;
  top: 122px;
  z-index: ${theme('zindex.above')};

  &:hover {
    background-color: ${theme('navigation.toggle.tertiary')};
  }
`

export const Navigation = ({ height, toOpen, onToggled }) => {
  const [toggled, setToggled] = useState(false)
  const [hasNavigationHover, setHasNavigationHover] = useState(false)
  const [hasToggleHover, setHasToggleHover] = useState(false)
  const { animations, navigation } = useContext(ThemeContext)
  const containerRef = useRef(null)

  return (
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
        <PerfectScrollbar>
          <Switcher
            toOpen={toOpen}
            height={containerRef.current && containerRef.current.offsetHeight}
          />
        </PerfectScrollbar>
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
  )
}

Navigation.Separator = Separator
Navigation.Type = Type
Navigation.Interable = Interable
Navigation.Title = Title
Navigation.Control = Control

Navigation.useInterable = useInterable
Navigation.Context = Context
Navigation.Provider = Provider

Navigation.defaultProps = {
  onToggled: () => {},
  isReady: true
}

Navigation.propTypes = {
  toOpen: PropTypes.func,
  height: PropTypes.string,
  onToggled: PropTypes.func
}
