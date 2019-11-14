import React, { useRef } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { prop, ifProp, theme } from 'styled-tools'
import PerfectScrollbar from 'react-perfect-scrollbar'

import 'react-perfect-scrollbar/dist/css/styles.css'

import Interable from './Interable'
import Control from './Control'
import Separator from './Separator'

import { Provider, Context } from './Context'
import Switcher from './Switcher'
import Type from './Type'
import { useInterable } from './utils'

const Container = styled.div`
  width: 100%;
  background-color: ${theme('navigation.bg.primary')};
  height: ${ifProp('height', prop('height'), '100%')};
  position: relative;
`

const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const Navigation = ({ height, toOpen }) => {
  const containerRef = useRef(null)

  return (
    <Container data-testid="container" ref={containerRef} height={height}>
      <PerfectScrollbar>
        <Switcher
          toOpen={toOpen}
          height={containerRef.current && containerRef.current.offsetHeight}
        />
      </PerfectScrollbar>
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
  isReady: true
}

Navigation.propTypes = {
  toOpen: PropTypes.func,
  height: PropTypes.string
}
