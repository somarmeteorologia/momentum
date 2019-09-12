import styled, { css } from 'styled-components'
import { ifProp, prop } from 'styled-tools'

export const Box = styled.div`
  display: inline-block;

  ${ifProp(
    'right',
    css`
      margin-right: ${prop('right')}px;
    `
  )}

  ${ifProp(
    'left',
    css`
      margin-left: ${prop('left')}px;
    `
  )}

  ${ifProp(
    'top',
    css`
      margin-top: ${prop('top')}px;
    `
  )}

  ${ifProp(
    'bottom',
    css`
      margin-bottom: ${prop('bottom')}px;
    `
  )}
`
