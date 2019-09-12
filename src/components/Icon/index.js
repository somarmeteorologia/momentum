import React, { memo, lazy, Suspense, useContext } from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeContext, css } from 'styled-components'

import { Box } from '@components/Box'
import { ifProp } from 'styled-tools'

const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1)

const load = name => lazy(() => import(`./Icons/${capitalize(name)}`))

const Container = styled.div`
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

export const Icon = memo(({ name, className, onClick, color, ...props }) => {
  const { icons } = useContext(ThemeContext)
  const Iconable = load(name)

  return (
    <Box {...props}>
      <Container className={className} onClick={onClick}>
        <Suspense fallback={null}>
          <Iconable {...props} color={color || icons.primary} />
        </Suspense>
      </Container>
    </Box>
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
