import React, { memo } from 'react'
import PropTypes from 'prop-types'

import { tokens } from '@components/Tokens'
import { Box } from '@components/Box'

import composeable from './Composeable'

import { Heading, defaultProps as headingProps } from './Heading'
import { P, defaultProps as props } from './P'

const { font } = tokens

export const Text = memo(({ children, ...props }) => {
  const Composeable = composeable('span')

  return (
    <Box {...props}>
      <Composeable {...props}>{children}</Composeable>
    </Box>
  )
})

Text.Heading = Heading
Text.P = P

const defaultProps = ({ ...props }) => ({
  ...props,
  display: 'block',
  family: 'inter'
})

Text.defaultProps = defaultProps(props)
Text.P.defaultProps = defaultProps(props)
Text.Heading.defaultProps = defaultProps(headingProps)

const defaultTypes = ({ ...types }) => ({
  ...types,
  display: PropTypes.string,
  color: PropTypes.string,
  family: PropTypes.string,
  weight: PropTypes.string
})

Text.P.propTypes = defaultTypes({
  size: PropTypes.oneOf(Object.keys(font.size).slice(5))
})
Text.Heading.propTypes = defaultTypes({
  size: PropTypes.oneOf(Object.keys(font.size).slice(0, 6))
})

const families = Object.assign(
  {},
  ...Object.keys(font.family).map(family => ({
    [family]: family
  }))
)

Text.family = families
Text.P.family = families
Text.Heading.family = families

Text.propTypes = defaultTypes({
  left: PropTypes.number,
  right: PropTypes.number,
  top: PropTypes.number,
  bottom: PropTypes.number,
  size: PropTypes.oneOf(Object.keys(font.size))
})

Text.P.size = Object.assign(
  {},
  ...Object.keys(font.size)
    .slice(5)
    .map(size => ({
      [size]: size
    }))
)

Text.size = Object.assign(
  {},
  ...Object.keys(font.size).map(size => ({
    [size]: size
  }))
)

Text.Heading.size = Object.assign(
  {},
  ...Object.keys(font.size)
    .slice(0, 6)
    .map(size => ({
      [size]: size
    }))
)

Text.weight = Object.assign(
  {},
  ...Object.keys(font.weight).map(weight => ({
    [weight]: weight
  }))
)
