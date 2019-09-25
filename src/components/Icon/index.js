import React, { memo, useContext } from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeContext, css } from 'styled-components'
import { ifProp } from 'styled-tools'

import { Box } from '@components/Box'

import * as Icons from './Icons'

const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1)

const Container = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 0;

  ${ifProp(
    'onClick',
    css`
      cursor: pointer;
    `
  )}
`

export const Icon = memo(({ name, color, ...props }) => {
  const { icons } = useContext(ThemeContext)
  const Iconable = Icons[capitalize(name)]

  return (
    <Container {...props}>
      <Iconable {...props} color={color || icons.primary} />
    </Container>
  )
})

const names = [
  'disabled',
  'city',
  'location',
  'home',
  'pause',
  'play',
  'back',
  'advance',
  'barChart',
  'lightningCircle',
  'newsletter',
  'cloud',
  'checklist',
  'checked',
  'lightning',
  'left',
  'right',
  'up',
  'down',
  'add',
  'agriculture',
  'alert',
  'arrow',
  'chart',
  'chat',
  'close',
  'comment',
  'configurations',
  'download',
  'energy',
  'favorite',
  'monitoring',
  'notification',
  'options',
  'output',
  'prevision',
  'rain',
  'reservoirs',
  'resume',
  'temperature',
  'loading',
  'plus',
  'tv',
  'clock',
  'arrowRight',
  'calendar',
  'less',
  'more',
  'layer',
  'eye',
  'info',
  'manual',
  'pe',
  'valv',
  'ret',
  'geo',
  'ecomp',
  'emed',
  'emop',
  'segment',

  'dayCC',
  'nightCC',

  'dayNB',
  'nightNB',

  'dayPN',
  'nightPN',

  'dayNC',
  'nightNC',

  'en',

  'dayPI',
  'nightPI',

  'dayPC',
  'nightPC',

  'ch',

  'ge',

  'nv',

  'dayCV',
  'nightCV',

  'dayTR',
  'nightTR'
]

Icon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  name: PropTypes.oneOf(names).isRequired
}

Icon.defaultProps = {
  width: 20,
  height: 20
}

Icon.name = Object.assign(
  {},
  ...names.map(name => ({
    [name]: name
  }))
)
