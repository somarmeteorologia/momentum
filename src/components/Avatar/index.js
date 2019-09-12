import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { switchProp } from 'styled-tools'
import styled, { css } from 'styled-components'

import { theme } from '@components/Theme'
import { tokens } from '@components/Tokens'

const { border } = tokens

const Image = styled.img`
  ${switchProp('radius', {
    circle: css`
      border-radius: ${border.radius.fifty};
    `,
    square: css`
      border-radius: ${border.radius.eighteen};
    `
  })};

  ${switchProp('size', {
    small: css`
      height: 38px;
      width: 38px;
    `,
    medium: css`
      height: 64px;
      width: 64px;
    `,
    large: css`
      height: 80px;
      width: 80px;
    `
  })};
`

export const Avatar = memo(({ src, size, radius }) => (
  <>
    <Image src={src} size={size} radius={radius} />
  </>
))

Avatar.defaultProps = {
  src: '',
  size: 'medium',
  radius: 'circle'
}

Avatar.propTypes = {
  src: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  radius: PropTypes.oneOf(['circle', 'square'])
}

Avatar.size = {
  small: 'small',
  medium: 'medium',
  large: 'large'
}

Avatar.radius = {
  circle: 'circle',
  square: 'square'
}
