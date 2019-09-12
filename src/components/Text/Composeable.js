import styled from 'styled-components'
import { prop, withProp, ifProp } from 'styled-tools'

import { tokens } from '@components/Tokens'

const { font } = tokens

const composeable = element => styled(element)`
  font-family: ${withProp(prop('family'), family => font.family[family])};
  font-weight: ${withProp(prop('weight'), weight => font.weight[weight])};
  display: ${prop('display')};
  color: ${ifProp('color', prop('color'), prop('theme.text.primary'))};
  font-size: ${withProp(prop('size'), size => font.size[size])};
  text-decoration: none;
`

export default composeable
